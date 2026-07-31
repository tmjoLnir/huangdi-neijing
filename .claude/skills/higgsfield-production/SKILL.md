---
name: higgsfield-production
description: Produce a cut of *The Emperor's Inner Canon* end-to-end on Higgsfield — style key, per-block clips, narrator voiceover, subtitled assembly, and the production record. Use whenever generating or re-rendering a 30-90 sec vertical trailer or a 15-20 min longform episode for this repo, adding a new chapter under output/, or debugging a Higgsfield job (wrong aspect ratio, preset swap prompts, expired CDN links, blocked uploads).
---

# Higgsfield production pipeline

The house pipeline for this repo. Chapters 2, 3, 5 and 8 were all cut this way;
the failure modes below are ones that already cost a paid re-render, so read them
before generating anything.

`output/episode-8/inner-canon-ch8-trailer-v1.md` is the reference document —
match its section order on any new cut. Note that `episode-<N>` is the **Suwen
chapter number**, not a sequential index, which is why the folders run 2, 3, 5, 8.

**Two cut types.** Steps 0–5 below are written for the **30-90 sec vertical
trailer** — the only form produced so far, and the one whose numbers are
battle-tested. For a **15–20 minute longform episode**, read those steps for the
mechanics, then read [Longform episodes](#longform-episodes-1520-min), which
overrides the aspect ratio, block count, voice handling, and assembly strategy.
Everything from *Environment caveats* onward applies to both.

**Step 0 is a hard gate on both.** There is a default clip model and tier, but it
is a starting point to confirm, not a licence to spend — nothing generates until
the user has seen the balance, the costed estimate, and confirmed Draft or Full.

## Order of operations

Never reorder these — each step consumes the previous step's **job ID**.

0. **Model + tier gate** — call `balance`, cost the options, and get the user's
   choice of clip model and Draft/Full. Nothing generates before this.
1. **Style key** (`generate_image`) — one vertical key image per chapter.
2. **Clips** (`generate_video`) — one per narration block, style key attached to each.
3. **Voiceover** (`generate_audio`) — one take per block, narrator preset.
4. **Assembly** (`explainer_video`) — clips + takes, subtitles burned in.
5. **The document** — every job ID above, plus the shot list, compliance audit,
   manual deliverables and runtime levers.

**Record the run's actual credit spend in the production record.** Chapters 2–8
were cut without logging cost, so there is no historical figure to check an
estimate against — start the series now.

## 0. Model + tier gate — cost it, then confirm

**Default: `seedance_2_0_mini` at 480p** — set by the user 2026-07-31. 10
credits/clip, ~66 for a 6-block trailer, and it takes the style key as a true
`image_references` input, which is the one thing the house look requires.

This replaces `gemini_omni`, which chapters 2–8 used. `gemini_omni` is the
*incumbent*, not the standard, and at 30 credits/clip it costs 3× the default for
a 720p ceiling. Do not carry it forward out of habit.

**480p is a step down from the 720×1280 that chapters 2–8 shipped.** For a draft
pass that is the point. Before publishing a 480p cut as a final Shorts/Reels
deliverable, say so and get an explicit yes — the same model at 720p is 25/clip
(~156/cut) and keeps the draft's look, so it is the natural full-render tier.
Whichever ships, record the actual resolution at the top of the document.

Before generating anything on a new cut, do all four:

1. Call **`balance`** and state the current credit figure.
2. Call **`get_cost: true`** on one representative clip in the chosen
   configuration. Prices move; never quote this file's numbers as live.
3. State the **cost per clip and cost for the whole cut**, and name the default.
4. Confirm **model** and **Draft/Full** with the user, and wait. The default
   makes this a confirmation, not an open question — but it is still a gate, and
   a chapter that wants a different model gets the shortlist below.

**`seedance_2_0_mini` is unproven on this series.** Every failure mode recorded
in this skill was learned on `gemini_omni`. On the first cut that uses it:
generate **one** clip, check the returned dimensions and the house look against
the style key, and only then generate the rest. Write what actually happened into
that cut's reproduction notes.

### Draft pass vs Full render

**House default: Draft then Full.** Confirmed by the user 2026-07-31. Still ask —
a routine chapter in a proven configuration can waive the draft — but draft is
the assumption to argue *out of*, not into.

They are different jobs, not quality settings:

| | Draft pass | Full render |
|---|---|---|
| Purpose | Prove blocking, pacing, narration-against-picture, and the compliance read | The deliverable |
| Model | `seedance_2_0_mini` (default) | `seedance_2_0_mini` — same model, so the draft predicts the render |
| Resolution | **480p** — 10/clip, ~66/cut | **720p** — 25/clip, ~156/cut |
| Subtitles | **`anton`, always** — the draft is the caption check | **`anton`, always** |
| Output | never published, never linked as the final video | the cut |

**Subtitles run on the draft too.** They cost 0.05/voiced block — 0.3 credits on
a 6-block trailer, i.e. nothing — and the draft is the only chance to catch
caption overflow before paying full price for the render. A draft without
captions cannot verify the repo's readability rule, which makes it a worse draft
for no meaningful saving.

Staying on one model across both tiers is deliberate: a draft in a different
model tells you about that model's blocking, not the one you ship.

A draft is worth it when the cut is doing something new — an untried model, a new
motif, a beat that might trip the safety filter, a shot list nobody has seen
moving. It is waste on a routine chapter in a proven configuration.

**Voice takes survive the upgrade.** They are ~0.6 credits each and resolution-
independent, so generate them once and reuse them in the full render. A
draft → full upgrade only re-pays for clips.

### Clip model shortlist

Measured 2026-07-31 at 10s / 9:16 / native audio off. **Re-preflight before
quoting these to anyone** — this is a snapshot, not an API.

The binding constraint is not price. It is the **reference role**:

- **`image_references`** — the model treats the style key as a *character and
  style reference*. This is what the house look depends on.
- **`start_image`** — the model treats it as literal frame 1 and animates away
  from it. A cheap model in this column is not a cheap substitute; it is a
  different pipeline.

| Model | Ref role | Res | Credits/clip | 6-block cut | Notes |
|---|---|---|---|---|---|
| **`seedance_2_0_mini`** | `image_references` | **480p** | **10** | **~66** | **← house default / draft tier** |
| `seedance_2_0` | `image_references` | 480p fast | 15 | ~96 | draft, better motion |
| **`seedance_2_0_mini`** | `image_references` | **720p** | **25** | **~156** | **← full-render tier** |
| `wan2_6` | `image_references` | 720p | 25 | ~156 | stylized/experimental |
| `gemini_omni` | `image_references` | 720p | **30** | **~186** | incumbent, ch2–8; 720p ceiling |
| `seedance_2_0` | `image_references` | 720p fast | 35 | ~216 | |
| `seedance_2_0` | `image_references` | 720p std | 45 | ~276 | |
| `wan2_6` | `image_references` | 1080p | 40 | ~246 | breaks the 720p house res |
| `seedance_2_0` | `image_references` | 1080p std | 90 | ~546 | |
| `cinematic_studio_3_0` | `image` | 480p / 720p | 35 / 50 | ~216 / ~306 | role is `image`, not verified as true reference |

Costed but **not viable here** — they take `start_image` only, so the style key
would become frame 1 rather than a style reference: `kling3_0` (15), `kling3_0_turbo`
(15), `minimax_hailuo` (11), `happy_horse_video` (25), `veo3_1` (22), `grok_video_v15`.
Also duration-incompatible with the fixed 10s block: `veo3_1_lite` (8 credits, but
4/6/8s only), `seedance1_5` (4/8/12s), `veo3` (no duration control).

Fixed costs per 6-block trailer, independent of clip model: style key **2**
(`nano_banana_pro`, 1k), voiceover **0.6/take** = 3.6, subtitles **0.05/voiced
block** = 0.3, assembly free. **≈5.9 credits.**

**Turn native audio off.** `seedance_*` default `generate_audio: true`, `kling*`
and `cinematic_studio_video*` default `sound: on`, and `wan`/`grok`/`gemini_omni`
generate audio natively. `explainer_video` replaces per-block audio with the
narrator take anyway, so generated audio is discarded — you would be paying for a
soundtrack that gets thrown away, and on some models it raises the per-clip price.

## 1. Style key

Chain from the previous chapter's key rather than starting a new look. The
lineage so far:

```
95d91291-0b74-4490-9818-b0bfe697e8e3   group shot, from assets/*.png
  └─ 0862b590-30ca-4a28-a904-b4d5a056c6b0   ch2 (four-season motif)
       └─ f73bdd8b-3ab4-4217-8e6d-786e2c1c66e4   ch3 (sun motif)
            └─ b6adbb81-7746-40c5-b60f-2cbc2c9d2ed0   ch5 (taiji-as-weather + five-direction compass)
                 └─ 2cfd7596-2d93-4d14-aae4-448b3b9b9f51   ch8 (storehouses / rivers / wrist)  ← current head
```

Pass the prior key's **job ID** as the reference and swap only the chapter
motif. Model `nano_banana_pro` (served by `nano_banana_2`), 9:16 768×1376.

```jsonc
generate_image({ params: {
  model: "nano_banana_pro",
  aspect_ratio: "9:16",
  prompt: "<three-character series key, new chapter motif>",
  medias: [{ role: "image", value: "2cfd7596-2d93-4d14-aae4-448b3b9b9f51" }]  // ch8 key: job ID, never a URL
}})
```

`medias[].value` takes a `media_id` or a prior `job_id` **only**. A `https://`
URL there fails. If you do need a local `assets/*.png`, upload via `media_upload`
first — but see the network-policy note at the bottom, that path is often
blocked from this host. The current art is `emperor-Fan.png`, `wise-Qi-2.png`,
`witty-Lei.png`; the `-3` / `-3a` filenames in the ch2 record are from an older
naming and no longer resolve.

## 2. Clips

The model comes from the step-0 gate — `seedance_2_0_mini` by default, 480p for a
draft and 720p for the render. 10s per block, one clip per block, style key
attached to every clip, `generate_audio: false`.

Everything below is model-independent unless it says otherwise. **Record which
model and tier the cut used** in the production record: the notes here were
learned on `gemini_omni`, and the default has moved off it, so treat each one as
unconfirmed on `seedance_2_0_mini` until a cut proves it either way.

**Declare the aspect ratio twice.** `gemini_omni` does not inherit vertical
framing from a 9:16 style key — in chapter 3 all six clips came back 1280×720
landscape and had to be regenerated. Every time:

- pass `aspect_ratio: "9:16"` explicitly, and
- write "vertical 9:16 portrait framing" into the prompt text itself.

The double declaration has held on every chapter since: 3 re-rendered without it,
then 5 and 8 both came back 720×1280 on the first pass with it. Don't drop it.
**Check the first clip's returned dimensions before generating the other five**,
on any model — one wasted clip beats six.

**Decline preset swaps.** The service offers to replace your prompt with a stock
preset, and accepting breaks the flat-2D house style. Retry with
`declined_preset_id: "<the offered id>"` — it takes **one id per call**, so
budget a retry for each newly-triggered preset.

| Preset | ID | Triggered by |
|---|---|---|
| IN THE DARK | `24bae836-2c4a-48e0-89b6-49fcc0b21612` | any dim/night-lit scene — 5 of 6 ch5 prompts |
| DROWN IN MUSIC | `f1821f84-945b-4cd1-9085-1f479db0028e` | "rhythm" / "rhythmic" (ch8 block 3) |
| 3D RENDER | *not recorded* | ch3, off the NEGATIVE line |

The trigger is **prompt vocabulary anywhere in the request, not just the NEGATIVE
line and not just darkness** — that was the ch3 reading and ch8 disproved it.
Pre-decline `IN THE DARK` on every clip (ch5 did this and saved a full round of
retries); handle the rest as they fire.

Preset offers are a Higgsfield-service behaviour, not a `gemini_omni` one, so
expect them on any model.

`gemini_omni` echoes the media role back as `image` while the backend coerces it
to `image_references`. Expected, harmless, seen on every chapter — not a failure.
Other models declare their roles differently; check `models_explore` rather than
assuming this coercion happens everywhere.

Keep the clips **text-free** — no titles, no captions in-frame. Captions are
burned server-side at assembly. (Longform quotation cards are the one exception;
see below.)

## 3. Voiceover

Model `seed_audio`, `voice_type: "preset"`, `speech_rate: 55` — that rate is
what fits a line inside a fixed 10s block. Known preset IDs:

| Voice | ID | Used in |
|---|---|---|
| **Julian** (current series narrator, per CLAUDE.md) | `95429266-c0ac-4137-a209-63b8812b0f23` | ch3, ch5, ch8 |
| Alistair (superseded after ch2 — do not recast) | `d9d5c263-f84e-4752-97b5-3750fcc6fd2f` | ch2 |
| Fan-di | *not yet cast* | — |
| Dr-Qi | *not yet cast* | — |
| Lei-Gong | *not yet cast* | — |

The three character voices are only needed for longform (the trailer's
characters never speak). Once cast, fill them in here — they're series-recurring
and must not be re-picked per chapter.

One take per block. Record each take's **duration** alongside its job ID — the
record is how you know a block was comfortable or tight.

### Write to 6–8 seconds. This is the most expensive thing to get wrong.

Both re-render events on chapters 5 and 8 were narration length, in opposite
directions, so treat the window as two-sided:

- **Too long** — ch5's first pass ran ~28–30 words per line and came back
  9.5–11.6s against a fixed 10s block. Four of six overshot outright. The
  assembler would have pitch-safely sped them up, breaking the narrator's
  measured register. **All six were re-cut.**
- **Too short** — ch8 over-corrected to a hard ~22-word ceiling and got 4.7s and
  3.5s takes. Inside the window, but 5–6.5s of dead air per block reads as a
  stall, not as breathing room. **Two were re-cut, longer.**

The settled target for **Julian at `speech_rate` 55**:

| | |
|---|---|
| Take duration per 10s block | **6–8s** |
| Line length | ~21–24 words |
| Delivery rate | ~2.4–3.0 words/sec |

Hard stops (full stops, semicolons) cost more than the word count suggests —
budget for the pauses, not just the words. More internal commas and fewer full
stops is how ch8 stretched a 22-word line from 4.7s to 6.3s without adding
content. These figures are Julian-specific; Alistair (ch2) ran longer at the same
rate, so re-measure on one block if the voice ever changes.

**This line is also the subtitle.** Captions are Whisper-transcribed from the
take and broken at the clauses you wrote, so narration phrasing decides whether
captions fit the frame — see [Caption wrapping](#caption-wrapping--there-is-no-parameter-for-it).
Short clauses serve both the 10s window and the caption width at once.

Only the narrator speaks; Fan-di, Dr-Qi and Lei-Gong appear but never have lines.
That is deliberate — the narrator carries every compliance hedge.

## 4. Assembly

```jsonc
explainer_video({ params: {
  items: [ { video: "<clip job id>", audio: "<vo job id>" }, ... ],  // play order
  width: 720, height: 1280,
  subtitles: { font: "anton" }
}})
```

`width`/`height` must match **the source clips as actually returned** — 720×1280
for a full-tier vertical trailer, but a 480p draft comes back smaller, so read
the dimensions off the clip jobs rather than pasting 720×1280. Blocks go in final
play order.

`subtitles: { font: "anton" }` goes on **every assembly, draft and full alike**.
CLAUDE.md requires every deliverable to ship captioned, and running them on the
draft is what makes the draft able to catch a caption problem. Assembly is free;
subtitles cost 0.05/voiced block (0.3 on a 6-block trailer).

### Caption wrapping — there is no parameter for it

**The API exposes exactly one subtitle option: `font`** (`patrick`, `caveat`,
`marker`, `anton`). The `subtitles` object is `additionalProperties: false`, so
there is **no** line-width, max-characters-per-line, wrap, position, or
font-size control, and inventing one gets the call rejected. Do not promise the
user a wrap setting — there isn't one.

What actually governs caption width: the backend transcribes the **voiceover**
with Whisper word timestamps and chunks it into short phrases timed to speech.
So the caption line breaks follow **the narration you wrote**. That makes
phrasing the only real lever:

- **Write in short clauses.** Commas, full stops and semicolons are where the
  chunker breaks. A 24-word line of three clauses captions cleanly; the same 24
  words as one unbroken clause is the one at risk of a long line.
- This lines up with the 6–8s / ~21–24 word rule in step 3 — narration written
  to fit the block also captions to fit the frame. A line that reads long is
  usually a line that wraps badly.
- **9:16 is the hard case.** A 720-wide vertical frame gives captions roughly
  half the horizontal room of the 1280-wide longform frame, so a phrase that is
  fine in 16:9 can overflow in 9:16. Judge wrapping on the vertical cut.
- `anton` is heavy but condensed, which fits more characters per line than the
  other three. It is the house font and also the safest of the four here; do not
  switch fonts to fix a wrapping problem, shorten the clause instead.

**Verification is visual, and this host usually cannot do it.** The CDN has been
blocked since chapter 3, so the rendered MP4 generally cannot be fetched back —
meaning burned-in caption overflow *cannot* be confirmed from the repo host.
So: whoever reviews the draft checks captions on the actual video, and the
production record states whether captions were **visually verified** or only
assembled. Never write that captions wrap correctly if nobody watched the file.

If a burned-in caption does overflow, fix it by **re-recording that block's
voice take with shorter clauses** and re-assembling — a re-take is ~0.6 credits
and the clips are untouched. Do not re-render video for a caption problem.

### The guaranteed path — sidecar + libass burn

Everything above is best-effort: the assembler's captions cannot be constrained,
only influenced. When the fit has to be a **guarantee**, don't use them.

```
node scripts/build_subtitles.js output/episode-8/inner-canon-ch8-trailer-v1.md
node scripts/build_subtitles.js <doc>.md --format 16:9      # longform
```

The script reads the cut's **own production document** — the narration table for
text, the production record's voiceover line for each take's duration — and
writes `.srt` and `.vtt` beside it. No new data to maintain, and no dependencies
(`npm install` is denied in `.claude/settings.json`).

Two mechanisms make the fit real, and the second is the one that guarantees it:

1. **Pre-wrap.** Cues are split at clause boundaries and wrapped to a character
   budget computed from frame width, margins and Anton's advance widths —
   ~22 chars/line at 9:16 720×1280, max 2 lines. The script prints the widest
   line in pixels against the usable width, so overflow is visible as a number
   before anything is rendered.
2. **libass margins.** The printed `ffmpeg` command burns with
   `force_style='…MarginL=58,MarginR=58,WrapStyle=0…'`. libass measures the real
   Anton glyphs and wraps inside those margins — it *cannot* draw outside them.
   That is the guarantee; step 1 only keeps the result from looking mechanical.

Timing follows the assembler's own rule — fixed 10s windows with a short take
centered — so the sidecar lines up with an `explainer_video` cut without manual
nudging. The script warns and assumes a full 10s for any block whose take
duration is missing from the record.

**Which to use.** Burned-in `anton` captions are fine for the draft and for a
routine cut. Use the sidecar path when the fit must be guaranteed, when a cut is
going out on a platform whose chrome crowds the lower third, or when a reviewer
has flagged overflow. The two are alternatives: burning a sidecar over a cut that
already has burned-in captions double-layers them — assemble **without**
`subtitles` when you intend to burn the sidecar.

`.srt`/`.vtt` are **tracked deliverables** per CLAUDE.md and are exempted in
`.gitignore` — commit them with the cut. Chapters 2, 3, 5 and 8 all have theirs
generated and committed; regenerate after any narration or take change so the
sidecar never drifts from the document.

Blocks are fixed windows: a short take is centered, a slightly long one is sped
up pitch-safely, and the video is never stretched — so a 6-block trailer is
exactly 60s.

## 5. The document

New version, new file — `inner-canon-ch<N>-trailer-v<M>.md` or
`inner-canon-ch<N>-longform-v<M>.md`, both under `output/episode-<N>/`. Never
overwrite a prior version; its production record is the reproduction evidence for
the next cut.

Sections in order, per CLAUDE.md and the ch8 reference — the generation work is
only half the deliverable, and the three sections after the record are the ones
most likely to get skipped:

1. Title, Chinese chapter title, cut short name.
2. Final video link + resolution / duration / format.
3. The disclaimer blockquote.
4. **Narration** table (block / beat / line), naming preset and speech rate.
5. **Source-script mapping** — source beat → blocks, plus any naming
   reconciliations, where the cut was re-timed off a longer script. CLAUDE.md is
   the primary instruction in a conflict: ch8 resolved "Chronicle of Balance" →
   *The Emperor's Inner Canon*, "Xiao-Lei" → **Lei-Gong**, and jade → **blue**
   cheongsam that way.
6. **Shot list**, numbered to match the blocks.
7. **Production record (Higgsfield)** — see below.
8. **Deliverables the assembler cannot produce** — history lower-third, human
   editorial credit, licensed guqin music. Always all three; `explainer_video`
   has no text-overlay parameter and generates no music.
   Ship the `.srt`/`.vtt` sidecar alongside the document (step 4 of the
   assembly section builds it).
9. **Compliance notes (YouTube)** — one bullet per repo rule.
10. **Runtime levers** — which blocks drop to reach 0:30, which beats add to
    reach 1:30.

### Production record (Higgsfield)

The record is what makes a cut reproducible after the CDN links die:

- **Style key** — job ID, model, dimensions, and the full derivation chain.
- **Clips** — model **and tier (Draft/Full)**, duration, resolution, and every
  block's job ID. Name the model explicitly; it is a per-cut choice now, and a
  future chapter cannot reproduce the look without it.
- **Voiceover** — model, preset name + ID, `speech_rate`, per-block job ID *and* duration.
- **Assembly** — block count, output dimensions, subtitle font, job ID, and
  whether captions were **visually verified** or only assembled (the CDN is
  usually blocked here, so say which).
- **Credit spend** for the run.
- **Reproduction notes** — anything that went wrong and how it was resolved.

Keep superseded job IDs (ch3's six landscape clips, ch5's six overlong takes,
ch8's two short takes and one `nsfw` clip) in the notes, marked as superseded.
They're evidence for the next chapter, not clutter.

## Longform episodes (15–20 min)

Untested — no longform cut exists in `output/` yet. The mechanics below are
derived from the tool constraints and the trailer runs, so treat the first
episode as a pilot and write what actually happened into its reproduction
notes. Where this section contradicts steps 1–5, this section wins.

### What changes

| | Trailer | Longform |
|---|---|---|
| Runtime | 30-90 sec (all four cuts so far are 60s) | 17–19 min target (15 floor, 20 ceiling) |
| Aspect | 9:16 vertical, 720×1280 | **16:9 landscape, 1280×720** |
| Blocks | 6 | ~102–114 at 10s |
| Voices | narrator only | narrator **+ speaking characters** |
| Doc format | narration table + shot list | SOUND / VISUAL / CHARACTER blocks, timecodes per act |
| File | `inner-canon-ch<N>-trailer-v<M>.md` | `inner-canon-ch<N>-longform-v<M>.md` |

The 16:9 landscape default is an inference — CLAUDE.md mandates 9:16 only for
trailers, and longform is the YouTube main-feed cut. **Confirm with the user
before a full run**, because it's ~110 clips to get wrong.

### Preflight — this is ~19× a trailer

Run the step-0 gate and multiply by ~114 blocks before anything else. At the
2026-07-31 snapshot prices, the model choice is the difference between a cut you
can afford and one you cannot:

| Clip model / tier | Credits/clip | ~114 blocks | vs 1,037 balance |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,145** | over budget |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~2,855 | ~3× balance |
| `gemini_omni` 720p | 30 | ~3,425 | ~3.3× balance |
| `seedance_2_0` 1080p | 90 | ~10,265 | ~10× balance |

**A full-length episode does not currently fit in the credit balance at any
tier** — even an all-draft pass overruns it. Say so plainly and get a decision
before starting: top up, cut the runtime, or produce act by act across billing
periods. Assembly stays free; subtitles run 0.05/voiced block (~5.7 credits per
captioned pass, so ~11.4 if you draft then render) and voice takes ~0.6 each
(~68, paid once and reused), so clips are essentially the entire bill and the
model choice *is* the budget.

A **Draft pass matters far more here than on a trailer** — 114 blocks of wrong
pacing is unrecoverable. Draft the whole episode at 480p, watch it end to end,
then re-render only the clips at full tier, reusing every voice take.

`explainer_video` caps at **180 blocks** (30 min), so a 20-minute episode at
120 blocks has headroom — the cap is not the binding constraint. Cost and
session length are.

### Style key — needs a landscape sibling

The chained keys are all 9:16. Derive a **16:9 variant** from the current
chapter key (pass its job ID as the reference, change only the framing) and
attach *that* to every clip. Record it in the production record as its own
lineage entry — don't overwrite the vertical key, the trailer still needs it.

### Script → blocks

10s is the working block length, so an episode is ~110 fixed windows regardless
of how the script is written. `gemini_omni` caps at 10s/720p; `seedance_2_0`,
`wan2_6` and `kling3_0` go to 15s, which would cut the block count by a third and
change the whole document's numbering — treat a longer block as a deliberate
format decision for the user, not a quiet optimisation. Number blocks continuously
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
pass — it accepts video job IDs, so act outputs are valid inputs.

**The one exception to captioning every assembly.** Burned-in captions are
pixels, so an act assembly that gets captioned and then re-captioned at the join
carries two overlapping caption layers. Therefore:

- **Act assemblies that feed the join: no `subtitles`.** They are intermediate
  video, not deliverables.
- **The final join: `subtitles: { font: "anton" }`.** Once, at the end.
- **Caption checking happens on the 480p draft**, which is a separate whole-
  episode pass and *is* captioned. That is why the draft matters more on longform
  than on a trailer — it is the only captioned artifact you see before the render.

If you need to check captions on a single act without a full draft, assemble that
act a second time *with* subtitles as a throwaway QA job (0.05/block) and do not
feed that captioned version into the join.

### Finishing

720p reads softer over 19 minutes than it does over 60 seconds, and it is both
`seedance_2_0_mini`'s and `gemini_omni`'s ceiling. Two ways up, and the cheap one
usually wins: generate at 720p and run `upscale_video` on the **final assembly**
(one job), or move to `seedance_2_0` at 1080p and pay ~3.6× the default's
per-clip price across ~110 clips. Never upscale ~110 individual clips.

The same applies to a 480p trailer that turns out worth keeping — upscale the
finished 60s cut rather than re-rendering six clips.

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
- **The CDN may be blocked too.** It has been blocked on every chapter since 3
  (`CONNECT tunnel failed, 403`), so assume the final MP4 cannot be fetched back
  for visual QA. When that happens, **say so explicitly in the document** and
  verify at the job-metadata level instead — all clips at the expected
  dimensions, every take inside its window, assembly completed — then record the
  CDN URL for manual download. Those links expire.

### What lands in git

Set by `.gitignore`, which postdates most of this pipeline's runs:

- **Renders are gitignored** (`renders/`, `*.mp4`, audio). Download them to
  `output/episode-<N>/renders/`; never commit the binary, never `git add -f` it.
- **Subtitle sidecars (`.srt`/`.vtt`) are tracked and are required
  deliverables** per CLAUDE.md, and are deliberately exempted from `.gitignore`.
  They are *not* satisfied by the burned-in captions from `explainer_video`.
  Build them with `node scripts/build_subtitles.js <cut-document>.md` — see
  [The guaranteed path](#the-guaranteed-path--sidecar--libass-burn). Chapters 2,
  3, 5 and 8 have theirs committed; every new cut ships one.

## Compliance gate before generating

Every prompt goes through the repo's YouTube rules *before* it's sent, because a
non-compliant clip is a paid re-render:

- Mortality and collapse stay atmospheric — "portraits, not bodies." Chapter 3's
  two collapse passages became a guttering lamp flame and an ink-wash city wall
  under floodwater. No falling bodies, no injury.
- **Restraint and bound-figure imagery trips the safety filter, even when the
  subject matter is fine.** Chapter 8's manifesto beat ("bound to ghosts")
  rendered as an ink figure "wrapped in smoke-cords that hold it still" came back
  `nsfw` — the restraint, not the theme. Re-cut with no human figures at all (a
  smoke-covered scroll that cannot be opened, a shut door light cannot pass) and
  it cleared on the first retry. **Carry that kind of meaning with objects and
  brush strokes, never with a person.**
- No feast close-ups: no bottles, no pouring, no drinking.
- Any supernatural hook must be debunked inside the same cut, not left dangling.
- The disclaimer blockquote — *"A dramatized adaptation of a classical
  philosophical text. Not medical advice."* — goes in the document and the video
  description.
- Self-certify general audience, **not** "made for kids."

Run this gate on **prompts before generating**, not just on output — a
non-compliant clip is a paid re-render. Then write the per-cut audit into the
document's `## Compliance notes (YouTube)` section, one bullet per rule, so the
reasoning survives with the cut.
