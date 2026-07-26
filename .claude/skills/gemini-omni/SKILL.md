---
name: gemini-omni
description: Generate the per-block video clips for *The Emperor's Inner Canon* with Google's Gemini Omni Flash (`gemini_omni`) on Higgsfield — verified constraints, the exact call shape, house-style prompt recipe, and the failure modes that have already cost re-renders (landscape defaults, 8s duration default, preset swaps, native audio). Use when generating or regenerating any clip block, picking a video model for a cut, or debugging a clip that came back wrong.
---

# Gemini Omni Flash (`gemini_omni`) — clip generation

The clip model for this repo. Every block in every cut so far is a `gemini_omni`
job. This skill covers **step 2 of the pipeline only**; the surrounding order of
operations, voiceover, assembly and production-record rules live in
`higgsfield-production` — read that for the run, read this before touching a
prompt or a parameter.

## Verified constraints

From `models_explore(action:"get", model_id:"gemini_omni")` — re-verify if a
generation behaves unexpectedly, the catalog changes without notice.

| | |
|---|---|
| Provider / name | Google — "Gemini Omni Flash" |
| Output | video, **720p only** (no other `resolution` option) |
| Duration | 4–10s, **default 8** |
| Aspect ratios | `16:9`, `9:16` |
| Reference roles | `image_references`, `video_references` |
| Inputs | text-to-video, image-to-video, video-to-video |
| Native audio | **yes** — the model can emit its own soundtrack |

Two of those defaults are traps for this repo, because our blocks are fixed
**10-second, 720×1280 vertical** windows: the duration default is 8, not 10, and
the framing default is landscape. Both must be set explicitly on every call.

## The call

```jsonc
generate_video({ params: {
  model: "gemini_omni",
  duration: 10,                // ALWAYS pass — default is 8, our blocks are 10s windows
  aspect_ratio: "9:16",        // trailer; 16:9 for longform. Never rely on the style key to imply it
  prompt: "<house-style prompt, see below — must itself say 'vertical 9:16 portrait framing'>",
  medias: [
    { role: "image_references", value: "f73bdd8b-3ab4-4217-8e6d-786e2c1c66e4" }
    // chapter style-key JOB ID. Never an https:// URL — media_id or job_id only.
  ]
}})
```

One call per narration block, the chapter style key attached to **every** clip —
that attachment is what keeps Fan-di, Dr-Qi and Lei-Gong on-model across blocks.

Preflight with `get_cost: true` on one representative block before a full run,
and check `balance`; six blocks is a trailer, ~110 blocks is a longform episode.

## Failure modes

**1. Landscape framing (has already cost a full re-render.)** Chapter 3's first
pass came back 1280×720 for all six clips despite a 9:16 style key —
`gemini_omni` does not inherit framing from its reference. Defend twice: pass
`aspect_ratio` **and** write "vertical 9:16 portrait framing" into the prompt
text. Check the returned dimensions on block 1 before generating blocks 2–6.

**2. Preset swap offers.** The service offers to replace your prompt with a
stock preset ("3D RENDER", "IN THE DARK") when it keys on words in the NEGATIVE
line. Accepting flattens the house style. Retry the identical call with
`declined_preset_id: "<offered id>"`, which suppresses that one preset for that
one retry — a second offer needs a second decline.

**3. Native audio.** Unlike a mute clip model, `gemini_omni` may generate its own
sound. Narration is a separate `seed_audio` take paired at assembly, so any baked
audio is at best wasted and at worst a second voice under Julian. Never write
dialogue, lyrics or "we hear…" into a clip prompt; describe the scene silently
and let the ambience come from the voiceover track. If a clip comes back with
speech in it, regenerate rather than hoping assembly masks it.

**4. Text in frame.** Captions are burned server-side at assembly in `anton`.
Ask for text in a clip and you get a second, unstyled caption fighting the real
one. Keep every clip text-free — the sole exception is a longform ON-SCREEN TEXT
quotation card, which is a deliberate no-narration block (see
`higgsfield-production`).

## Prompt recipe

Each clip prompt is one block of the shot list, expanded. Keep this order — it
is what the existing chapter documents encode:

1. **Framing** — "vertical 9:16 portrait framing" (or "16:9 landscape" for longform).
2. **Style** — flat 2D stylized animation matching the attached character key.
3. **Scene** — location, time of day, light.
4. **Characters** — by name and tell: Fan-di's fan (snapped open = performing,
   set down = sincerity), Dr-Qi's open bamboo scroll held like a tablet,
   Lei-Gong mid-hop with spark effects. Say who is *in* the shot; the key
   carries what they look like.
5. **Motion** — one clear movement for ten seconds. Two beats in one block reads
   as a cut and fights the fixed window.
6. **NEGATIVE** — no text, no captions, no watermark, no photorealism.

Run the prompt through the repo's compliance gate *before* sending it, because a
non-compliant clip is a paid re-render: mortality atmospheric only ("portraits,
not bodies" — a guttering lamp, not a falling body), no feast close-ups of
bottles or pouring or drinking, any supernatural hook debunked inside the cut.

## When not to use it

`gemini_omni`'s ceiling is 720p and 10s. Both are fine for the fixed-block
format, but:

- **Sharper finish** — don't chase resolution per clip; run `upscale_video` on
  the final assembly instead (one job, not a hundred).
- **Longer than 10s** — you can't; restructure into more blocks.
- **Still frames** (style keys, quotation cards) — that's `generate_image` with
  `nano_banana_pro`, not this model.
- **Reframing an existing clip** — `reframe` is cheaper than regenerating, but
  regeneration is usually better than a reframed landscape clip, which crops the
  composition rather than recomposing it.

Every job ID — including superseded ones — goes into the chapter document's
production record, marked as superseded where it applies. That record is the
only thing that survives the CDN links expiring.
