---
name: higgsfield-production
description: Produce a cut of *The Emperor's Inner Canon* end-to-end on Higgsfield — style key, per-block clips, narrator voiceover, subtitled assembly, and the production record. Use whenever generating or re-rendering a trailer or episode for this repo, adding a new chapter under output/, or debugging a Higgsfield job (wrong aspect ratio, preset swap prompts, expired CDN links, blocked uploads).
---

# Higgsfield production pipeline

The house pipeline for this repo. Chapters 2 and 3 were both cut this way; the
failure modes below are ones that already cost a full re-render, so read them
before generating anything.

## Order of operations

Never reorder these — each step consumes the previous step's **job ID**.

1. **Style key** (`generate_image`) — one vertical key image per chapter.
2. **Clips** (`generate_video`) — one per narration block, style key attached to each.
3. **Voiceover** (`generate_audio`) — one take per block, narrator preset.
4. **Assembly** (`explainer_video`) — clips + takes, subtitles burned in.
5. **Production record** — every job ID above written into the chapter document.

Check `balance` before a full run (a 6-block trailer is not cheap), and pass
`get_cost: true` on any generation whose model or params you haven't used here
before.

## 1. Style key

Chain from the previous chapter's key rather than starting a new look. The
lineage so far:

```
95d91291-0b74-4490-9818-b0bfe697e8e3   group shot, from assets/*.png
  └─ 0862b590-30ca-4a28-a904-b4d5a056c6b0   ch2 (four-season motif)
       └─ f73bdd8b-3ab4-4217-8e6d-786e2c1c66e4   ch3 (sun motif)
```

Pass the prior key's **job ID** as the reference and swap only the chapter
motif. Model `nano_banana_pro` (served by `nano_banana_2`), 9:16 768×1376.

```jsonc
generate_image({ params: {
  model: "nano_banana_pro",
  aspect_ratio: "9:16",
  prompt: "<three-character series key, new chapter motif>",
  medias: [{ role: "image", value: "f73bdd8b-4a08-..." }]  // job ID, never a URL
}})
```

`medias[].value` takes a `media_id` or a prior `job_id` **only**. A `https://`
URL there fails. If you do need a local `assets/*.png`, upload via `media_upload`
first — but see the network-policy note at the bottom, that path is often
blocked from this host.

## 2. Clips

Model `gemini_omni`, 10s, one per block, style key attached to every clip.

**`gemini_omni` does not inherit vertical framing from a 9:16 style key.** In
chapter 3 all six clips came back 1280×720 landscape and had to be regenerated.
Do both of these, every time:

- pass `aspect_ratio: "9:16"` explicitly, and
- write "vertical 9:16 portrait framing" into the prompt text itself.

**Decline preset swaps.** The service will offer to replace your prompt with a
stock preset ("3D RENDER", "IN THE DARK") when it keys on words in the NEGATIVE
line. Accepting breaks the flat-2D house style. Retry with
`declined_preset_id: "<the offered id>"`.

Keep the clips **text-free** — no titles, no captions in-frame. Captions are
burned server-side at assembly.

## 3. Voiceover

Model `seed_audio`, `voice_type: "preset"`, `speech_rate: 55` — that rate is
what fits a line inside a fixed 10s block. Known preset IDs:

| Voice | ID | Used in |
|---|---|---|
| **Julian** (current series narrator, per CLAUDE.md) | `95429266-c0ac-4137-a209-63b8812b0f23` | ch3 |
| Alistair | `d9d5c263-f84e-4752-97b5-3750fcc6fd2f` | ch2 |

One take per block. Record each take's **duration** alongside its job ID —
takes land ~5.5–10s and the record is how you know a block was comfortable or
tight. Only the narrator speaks; Fan-di, Dr-Qi and Lei-Gong appear but never
have lines. That is deliberate — the narrator carries every compliance hedge.

## 4. Assembly

```jsonc
explainer_video({ params: {
  items: [ { video: "<clip job id>", audio: "<vo job id>" }, ... ],  // play order
  width: 720, height: 1280,
  subtitles: { font: "anton" }
}})
```

`width`/`height` must match the source clips (720×1280 for a vertical trailer),
blocks go in final play order, and `subtitles.font` is always `anton` — the repo
rule is that every deliverable ships captioned. Assembly itself is free;
subtitles cost 0.05 credit per voiced block.

Blocks are fixed windows: a short take is centered, a slightly long one is sped
up pitch-safely, and the video is never stretched — so a 6-block trailer is
exactly 60s.

## 5. Production record

The record is the point of the whole document — it's what makes a cut
reproducible after the CDN links die. In the chapter file, under
`## Production record (Higgsfield)`, list:

- **Style key** — job ID, model, dimensions, and what it was derived from.
- **Clips** — model, duration, resolution, and every block's job ID.
- **Voiceover** — model, preset name + ID, `speech_rate`, per-block job ID *and* duration.
- **Assembly** — block count, output dimensions, subtitle font, job ID.
- **Reproduction notes** — anything that went wrong and how it was resolved.

Keep superseded job IDs (like ch3's six landscape clips) in the notes, marked as
superseded. They're evidence for the next chapter, not clutter.

## Environment caveats

- **Uploads may be blocked.** `upload.higgsfield.ai` was unreachable from the
  repo host in the chapter 3 session, so `assets/` PNGs couldn't be re-uploaded.
  Fall back to referencing the prior style-key job ID — CLAUDE.md explicitly
  allows this, and it's the better default anyway.
- **The CDN may be blocked too.** If the final MP4 can't be fetched, don't
  commit a broken binary — record the CDN URL in the document and note that the
  user must download and archive it manually. Those links expire.

## Compliance gate before generating

Every prompt goes through the repo's YouTube rules *before* it's sent, because a
non-compliant clip is a paid re-render:

- Mortality and collapse stay atmospheric — "portraits, not bodies." Chapter 3's
  two collapse passages became a guttering lamp flame and an ink-wash city wall
  under floodwater. No falling bodies, no injury.
- No feast close-ups: no bottles, no pouring, no drinking.
- Any supernatural hook must be debunked inside the same cut, not left dangling.
- The disclaimer blockquote — *"A dramatized adaptation of a classical
  philosophical text. Not medical advice."* — goes in the document and the video
  description.
- Self-certify general audience, **not** "made for kids."

New version, new file: `inner-canon-ch<N>-trailer-v<M>.md` under
`output/episode-<N>/`. Never overwrite a prior version.
