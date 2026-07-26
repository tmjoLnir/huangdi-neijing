---
name: higgsfield-production
description: Produce a cut of *The Emperor's Inner Canon* end-to-end on Higgsfield — style key, per-block clips, narrator voiceover, subtitled assembly, and the production record. Use whenever generating or re-rendering a 1-min vertical trailer or a 15-20 min longform episode for this repo, adding a new chapter under output/, or debugging a Higgsfield job (wrong aspect ratio, preset swap prompts, expired CDN links, blocked uploads).
---

# Higgsfield production pipeline

The house pipeline for this repo. Chapters 2 and 3 were both cut this way; the
failure modes below are ones that already cost a full re-render, so read them
before generating anything.

**Two cut types.** Steps 1–5 below are written for the **1-minute vertical
trailer** — the only form produced so far, and the one whose numbers are
battle-tested. For a **15–20 minute longform episode**, read those steps for the
mechanics, then read [Longform episodes](#longform-episodes-1520-min), which
overrides the aspect ratio, block count, voice handling, and assembly strategy.
Everything from *Environment caveats* onward applies to both.

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
| Fan-di | *not yet cast* | — |
| Dr-Qi | *not yet cast* | — |
| Lei-Gong | *not yet cast* | — |

The three character voices are only needed for longform (the trailer's
characters never speak). Once cast, fill them in here — they're series-recurring
and must not be re-picked per chapter.

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

## Longform episodes (15–20 min)

Untested — no longform cut exists in `output/` yet. The mechanics below are
derived from the tool constraints and the trailer runs, so treat the first
episode as a pilot and write what actually happened into its reproduction
notes. Where this section contradicts steps 1–5, this section wins.

### What changes

| | Trailer | Longform |
|---|---|---|
| Runtime | 60s | 17–19 min target (15 floor, 20 ceiling) |
| Aspect | 9:16 vertical, 720×1280 | **16:9 landscape, 1280×720** |
| Blocks | 6 | ~102–114 at 10s |
| Voices | narrator only | narrator **+ speaking characters** |
| Doc format | narration table + shot list | SOUND / VISUAL / CHARACTER blocks, timecodes per act |
| File | `inner-canon-ch<N>-trailer-v<M>.md` | `inner-canon-ch<N>-longform-v<M>.md` |

The 16:9 landscape default is an inference — CLAUDE.md mandates 9:16 only for
trailers, and longform is the YouTube main-feed cut. **Confirm with the user
before a full run**, because it's ~110 clips to get wrong.

### Preflight — this is ~19× a trailer

Check `balance` first, and `get_cost: true` on one representative clip, then
multiply. Assembly stays free; subtitles run 0.05 credit per voiced block, so
~114 blocks ≈ 5.7 credits on captions alone. Never launch a full episode
without a costed estimate in hand.

`explainer_video` caps at **180 blocks** (30 min), so a 20-minute episode at
120 blocks has headroom — the cap is not the binding constraint. Cost and
session length are.

### Style key — needs a landscape sibling

The chained keys are all 9:16. Derive a **16:9 variant** from the current
chapter key (pass its job ID as the reference, change only the framing) and
attach *that* to every clip. Record it in the production record as its own
lineage entry — don't overwrite the vertical key, the trailer still needs it.

### Script → blocks

`gemini_omni` maxes at **10s per clip and 720p** (verified via
`models_explore`), so an episode is ~110 fixed 10s windows regardless of how the
script is written. Break each act into 10s beats and number them continuously
across the whole episode (`block 47`), not per-act — the assembly `items` array
is flat and act-local numbering makes off-by-one errors that are expensive to
find in a 19-minute render.

Keep the script's act timecodes in the document, and map each act to its block
range (`Act II — blocks 24–51`) so a single act can be re-rendered without
recomputing anything.

### Voices — one speaker per block

Longform has characters speaking (dialogue as blockquotes), but `explainer_video`
takes **exactly one `audio` per block**. So:

- Split dialogue so no 10s block contains two speakers. A line exchange becomes
  two consecutive blocks, not one shared block.
- Anything genuinely simultaneous has to be mixed outside the tool and uploaded
  via `media_upload` as a single take.

Only Julian (`95429266-c0ac-4137-a209-63b8812b0f23`) is established. Fan-di,
Dr-Qi and Lei-Gong need voices chosen once and reused for every future chapter —
call `list_voices`, audition via `preview_url`, and **record the chosen
voice_id + voice_type in the table in step 3** so chapter 5 doesn't recast the
cast. Match the CLAUDE.md voice rules: Dr-Qi gets stiller as Fan-di performs.

`speech_rate: 55` is tuned to fit a narration line in 10s; character dialogue is
shorter per block, so a more natural 60–65 may fit. Test on one block before
committing to a rate across ~110 takes.

### ON-SCREEN TEXT — the one exception to text-free clips

The trailer rule is that clips carry no text and captions are burned at
assembly. That breaks here: `explainer_video` has **no text-overlay parameter**,
and its subtitles are Whisper-transcribed *from the voiceover* — so a classical
quotation card with no narration over it will produce no text at all.

Generate quotation cards as their **own blocks with the text in-frame**
(`generate_image` for a still, or a held clip), styled off the chapter key.
Everything else stays text-free. Note each card block in the record so it isn't
mistaken for a style violation later.

### Assemble in acts, then join

Do not attempt ~110 clips in one unbroken pass. Per act:

1. Generate that act's clips and takes.
2. **Append the job IDs to the production record immediately** — before moving
   on. The record is the crash-recovery file; a lost session with unrecorded IDs
   means paying twice.
3. Assemble the act as its own `explainer_video` job to check pacing early.

Then join the act assemblies into the final cut with a last `explainer_video`
pass (it accepts video job IDs, so act outputs are valid inputs), applying
`subtitles: { font: "anton" }` at that final stage only — captioning per act and
again at the end would double-burn.

### Finishing

720p is `gemini_omni`'s ceiling and reads softer over 19 minutes than it does
over 60 seconds. If it needs to be sharper, run `upscale_video` on the **final
assembly**, not on ~110 individual clips — one job instead of a hundred.

### Runtime levers

CLAUDE.md asks for cut-to-15 / stretch-to-20 levers in the production notes.
Express them in blocks, since blocks are the unit that actually costs money:
name which block ranges are droppable to reach 90 blocks, and which beats can
expand to reach 120.

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

New version, new file — `inner-canon-ch<N>-trailer-v<M>.md` or
`inner-canon-ch<N>-longform-v<M>.md`, both under `output/episode-<N>/`. Never
overwrite a prior version.
