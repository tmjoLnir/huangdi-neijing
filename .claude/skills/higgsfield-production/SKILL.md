---
name: higgsfield-production
description: Produce a cut of *The Emperor's Inner Canon* end-to-end on Higgsfield — style key, per-block clips, narrator voiceover, subtitled assembly, and the production record. Use whenever generating or re-rendering a 30-90 sec vertical trailer or a 15-20 min longform episode for this repo, adding a new chapter under output/, or debugging a Higgsfield job (wrong aspect ratio, preset swap prompts, expired CDN links, blocked uploads).
---

# Higgsfield production pipeline

The house pipeline for this repo. Every cut has been produced this way, and the
failure modes below are ones that already cost a paid re-render, so read them
before generating anything.

`output/episode-1/inner-canon-ch1-trailer-v1.md` is the reference document —
match its section order on any new cut. Note that `episode-<N>` is the **Suwen
chapter number**, not a sequential index, so the folders are not consecutive and
gaps are expected.

**Two cut types.** Steps 0–5 are written for the **30-90 sec vertical trailer** —
the only form produced so far, and the one whose numbers are battle-tested. For a
**15–20 minute longform episode**, read those steps for the mechanics, then read
[Longform episodes](#longform-episodes-1520-min), which overrides the aspect
ratio, block count, voice handling and assembly strategy. **Step 0 is a hard gate
on both**: nothing generates until the user has seen the balance, the costed
estimate, and confirmed model and tier.

| | |
|---|---|
| Steps 0–5 | the trailer pipeline, in order |
| [Subtitles](#subtitles) | caption constraints and the guaranteed-fit sidecar |
| [Longform episodes](#longform-episodes-1520-min) | what changes for a 15–20 min cut |
| [Environment caveats](#environment-caveats) | blocked uploads/CDN, what lands in git |
| [Compliance gate](#compliance-gate-before-generating) | run on prompts, before generating |

Subtitles, Environment caveats and the Compliance gate apply to both cut types.

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

Log the run's actual credit spend in the production record as you go. **Chapter 1
is the only run with a measured balance delta**, so it is the single historical
figure available to check an estimate against — see its *Credit spend* section.

## 0. Model + tier gate — cost it, then confirm

**Default: `seedance_2_0_mini` at 480p** — set by the user 2026-07-31. 10
credits/clip, ~66 for a 6-block trailer, and it takes the style key as a true
`image_references` input, which is the one thing the house look requires.

This replaces `gemini_omni`, which earlier cuts used. `gemini_omni` is the
*incumbent*, not the standard, and at 30 credits/clip it costs 3× the default for
a 720p ceiling. Do not carry it forward out of habit.

**480p is a step down from the 720×1280 the earlier cuts shipped.** For a draft
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

**Most failure modes in this skill were learned on `gemini_omni`,** and only one
cut has run on `seedance_2_0_mini` so far — the aspect-ratio double declaration
and the preset pre-decline both held on it, but nothing else is confirmed. On any
cut using a model this repo has little history with: generate **one** clip, check
the returned dimensions and the house look against the style key, and only then
generate the rest. Write what actually happened into that cut's reproduction
notes.

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

Three things make this cheap rather than wasteful:

- **Same model both tiers.** A draft in a different model tells you about that
  model's blocking, not the one you ship.
- **Voice takes survive the upgrade.** ~0.6 credits each and resolution-
  independent, so generate once and reuse — a draft → full upgrade only re-pays
  for clips.
- **Captions run on the draft.** 0.3 credits on a 6-block trailer, and an
  uncaptioned draft cannot check the repo's readability rule.

Waive the draft on a routine chapter in a proven configuration. Keep it when the
cut is doing something new — an untried model, a new motif, a beat that might
trip the safety filter, a shot list nobody has seen moving.

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
| `gemini_omni` | `image_references` | 720p | **30** | **~186** | incumbent; 720p ceiling |
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

Chain from the current head rather than starting a new look:

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   ch1 (splitting scroll + seven-and-eight arcs)  ← current head
```

The head is itself the end of a chain reaching back to a group shot built from
`assets/*.png`; those upstream keys are not recorded here, and they do not need
to be. **The head's job ID is the only input a new key takes** — Higgsfield holds
the image, so a new chapter derives from the ID above without re-deriving
anything before it. When a new key is generated, record it here as the new head
and add its own job ID and motif to that cut's production record.

Pass the head's **job ID** as the reference and swap only the chapter
motif. Model `nano_banana_pro` (served by `nano_banana_2`), 9:16 768×1376.

```jsonc
generate_image({ params: {
  model: "nano_banana_pro",
  aspect_ratio: "9:16",
  prompt: "<three-character series key, new chapter motif>",
  medias: [{ role: "image", value: "4b6f7106-67da-4d1a-a553-c58ba90ac43f" }]  // ch1 key (current head): job ID, never a URL
}})
```

`medias[].value` takes a `media_id` or a prior `job_id` **only**. A `https://`
URL there fails. If you do need a local `assets/*.png`, upload via `media_upload`
first — but see the network-policy note at the bottom, that path is often
blocked from this host. The current art is `emperor-Fan.png`, `wise-Qi-2.png`,
`witty-Lei.png` — any other `assets/` filename in an older record is from a
superseded naming and no longer resolves.

## 2. Clips

The model comes from the step-0 gate — `seedance_2_0_mini` by default, 480p for a
draft and 720p for the render. 10s per block, one clip per block, style key
attached to every clip, `generate_audio: false`.

Everything below is model-independent unless it says otherwise. **Record which
model and tier the cut used** in the production record: the notes here were
learned on `gemini_omni`, and the default has moved off it, so treat each one as
unconfirmed on `seedance_2_0_mini` until a cut proves it either way.

**Declare the aspect ratio twice.** `gemini_omni` does not reliably inherit
vertical framing from a 9:16 style key — a full set of clips has come back
1280×720 landscape and had to be regenerated at full cost. Every time:

- pass `aspect_ratio: "9:16"` explicitly, and
- write "vertical 9:16 portrait framing" into the prompt text itself.

The double declaration has held on every cut that used it, including the first
cut on `seedance_2_0_mini`. Don't drop it. **Check the first clip's returned
dimensions before generating the rest**, on any model — one wasted clip beats
a whole set.

**Decline preset swaps.** The service offers to replace your prompt with a stock
preset, and accepting breaks the flat-2D house style. Retry with
`declined_preset_id: "<the offered id>"` — it takes **one id per call**, so
budget a retry for each newly-triggered preset.

| Preset | ID | Triggered by |
|---|---|---|
| IN THE DARK | `24bae836-2c4a-48e0-89b6-49fcc0b21612` | any dim or night-lit scene; the most frequent trigger by far |
| DROWN IN MUSIC | `f1821f84-945b-4cd1-9085-1f479db0028e` | "rhythm" / "rhythmic" |
| 3D RENDER | *not recorded* | vocabulary on the NEGATIVE line |

The trigger is **prompt vocabulary anywhere in the request, not just the NEGATIVE
line and not just darkness** — that was the early reading and a later cut
disproved it. Pre-decline `IN THE DARK` on every clip; doing so has saved a full
round of retries on a dark-heavy cut. Handle the rest as they fire, and keep
audio vocabulary — *drum*, *drone*, *music*, *rhythm* — out of clip prompts
entirely, since those are edit-time directions anyway.

Preset offers are a Higgsfield-service behaviour, not a `gemini_omni` one, so
expect them on any model.

`gemini_omni` echoes the media role back as `image` while the backend coerces it
to `image_references`. Expected, harmless, seen on every chapter — not a failure.
Other models declare their roles differently; check `models_explore` rather than
assuming this coercion happens everywhere.

Keep the clips **text-free** — no titles, no captions in-frame. Captions are
burned server-side at assembly. Longform quotation cards are the sole exception,
for a reason specific to them — see
[ON-SCREEN TEXT](#on-screen-text--the-one-exception-to-text-free-clips).

## 3. Voiceover

Model `seed_audio`, `voice_type: "preset"`, `speech_rate: 55` — that rate is
what fits a line inside a fixed 10s block. **The full cast is cast permanently**
(CLAUDE.md, as of chapter 1); all four are `preset` voices and none may be
re-picked per chapter:

| Role | Voice | `voice_id` | Measured rate | 6–8s window |
|---|---|---|---|---|
| **Narrator (V.O.)** | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | **3.73 words/sec** | **22–30 words** |
| **Fan-di** | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | **4.55 words/sec** | **27–36 words** |
| **Dr-Qi** | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | **4.42 words/sec** | **27–35 words** |
| **Lei-Gong** | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | *short-line only* | *re-measure at length* |

Measured 2026-08-01 on chapter 1, one take per voice, `seed_audio` presets; job
IDs and durations are in `output/episode-1/inner-canon-ch1-trailer-v1.md`. Zane
has only been measured on a 5-word line (2.3–2.6s), where pause overhead
dominates and no reliable words/sec can be derived — **measure him on a
full-length line before writing him one.**

**Word counts do not transfer between voices**, and the gap is large enough to
break a cut: at the same `speech_rate`, 23 words measured 6.17s on Arthur against
7.46s on the narrator he replaced — ~21% faster for identical text. A budget
carried over from a different voice misses the window by more than a second per
block. Size every line from the measured figure for *that* voice, above.

These four are the only voices this series uses. Do not audition alternatives,
and do not carry a voice forward out of an older cut's production record.

For any voice still marked unmeasured, **generate one take, read its duration,
and write the measured words/second back into this table** before committing a
script to it. One take is ~0.6 credits; a mis-sized script is six.

### `speech_rate` is not a duration lever — do not reach for it

Measured 2026-08-01 across rate 40 vs rate 60 on identical text: Xavier **+3%**,
Zane **+12%**, Vesper **−8%**. Vesper coming back *shorter* at the slower rate
shows the spread is take-to-take variance, not a rate response. Between 40 and 60
`speech_rate` does not meaningfully move take duration on these presets.

This kills the obvious fix. **Word count and punctuation are the only controls on
take length** — if a take lands short, rewrite the line longer or trade full stops
for commas; do not re-render it at a different rate expecting a different
duration. All four voices run at `speech_rate` 55.

**Character lines are structurally short, and a block is structurally 10s.** At
4.4–4.6 words/sec, Xavier and Vesper need ~30 words to fill a block — which is a
speech, not an interjection. Two ways out, and the choice is per line:

- **Write the character a real paragraph.** Fine for a reframe or a monologue.
- **Let the take run short and centred.** A 2.6s line leaves ~3.7s of silence
  either side. For an interruption or a hard beat that silence *is* the effect,
  and chapter 1 uses it deliberately in block 3. **Record it in the production
  record as a chosen exception**, or the next cut will read it as the dead-air
  mistake below and "fix" it.

A cut is never re-voiced retroactively unless someone decides to, in which case
only the voiceover and assembly are re-paid — the clips are untouched.

One take per block. Record each take's **duration** alongside its job ID — the
record is how you know a block was comfortable or tight.

### Write to 6–8 seconds. This is the most expensive thing to get wrong.

Two separate re-render events have been caused by narration length, in opposite
directions, so treat the window as two-sided:

- **Too long** — a pass written at ~28–30 words per line came back 9.5–11.6s
  against a fixed 10s block, with most of the cut overshooting outright. The
  assembler would have pitch-safely sped those takes up, breaking the narrator's
  measured register. **Every block had to be re-cut.**
- **Too short** — the over-correction to a hard ~22-word ceiling produced 4.7s
  and 3.5s takes. Inside the window, but 5–6.5s of dead air per block reads as a
  stall, not as breathing room. **Those blocks were re-cut longer.**

**The 6–8s window is the rule; the word count is not.** The window is a property
of the pipeline — a fixed 10s block, a take that must not overshoot it or rattle
around inside it — so it holds for every voice. The word count that *produces*
6–8s is a property of the voice, and it moves:

| | |
|---|---|
| Take duration per 10s block | **6–8s — fixed, applies to every voice** |
| Line length | per voice — **22–30 words Arthur, 27–36 Xavier, 27–35 Vesper** |
| Delivery rate | per voice — **3.73 / 4.55 / 4.42 words/sec** for Arthur / Xavier / Vesper |

**Take the line length from the voice table above, never from another cut's
document.** A word budget written for one voice undershoots or overshoots another
by more than a second per block.

### Sentence structure beats word count — the ch1 lesson

Chapter 1 sized every line off a measured words/second figure and **still** put a
take at 10.78s, over the window. The cause was not the word count:

| Block | Words | Structure | Delivered |
|---|---|---|---|
| 2, first pass | 32 | **one sentence**, subordinate clause after an em-dash | **10.78s** |
| 2, re-cut | 30 | **three short sentences**, same content | **6.91s** |
| 5 | 29 | two sentences | 5.87s |

Two words cannot account for 3.9 seconds. **A long single sentence — especially
one carrying a subordinate clause after an em-dash — makes `seed_audio` slow down
and add dramatic pauses**, and a linear words/second extrapolation from a short
measurement line will not predict it. Block 8 showed the same effect inverted: 11
words across two sentences came back at 4.95s against a 2.9s linear prediction.

So the measured words/second in the voice table sizes a *first draft*. What
actually lands the take in the window is structure:

- **Take is long** → break the sentence up. Full stops in place of em-dashes and
  subordinate clauses is the fastest way to pull seconds off without losing
  content. This is what re-cut ch1 block 2.
- **Take is short** → more internal commas, fewer full stops. This has lifted a
  22-word line from 4.7s to 6.3s without changing a word of its content.

Both levers are voice-independent and cost one 0.6-credit re-take. Reach for them
before rewriting the line's content, and **never** reach for `speech_rate`.

### This rule is not the caption rule — they are two constraints on one line

The narration line is also the subtitle, so it is governed twice. The two rules
point the same way often enough to look like one rule, and they are not:

| | **Take length** (this section) | **Caption fit** ([Subtitles](#caption-wrapping--there-is-no-parameter-for-it)) |
|---|---|---|
| Constrains | total **seconds** of the take | pixel **width** of the longest clause |
| Set by | the voice + `speech_rate` against a fixed 10s block | frame width, margins, Anton glyph widths |
| Voice-dependent | **yes** | **no** — pure geometry |
| Budget | **6–8s** per block | **~22 chars/line, max 2 lines** at 9:16 720×1280 |
| Lever | how much content, and how many hard stops | where the clause breaks fall |
| Failure | pitch-shifted speed-up, or dead air | the line renders past the frame edge |

**Why they get conflated.** This section shipped first, off the two length
re-renders — a take-duration problem, nothing to do with captions. The caption
section came later and borrowed *this* section's word count as a convenient
proxy. That proxy only ever held because one voice was narrating the whole
series, so a single number happened to track both. It does not survive a cast
change: the words-per-second moved and the caption budget did not shift a pixel.
**Never size captions off a word count.**

**Where they really do interact — through duration, not words.**
`build_subtitles.js` times cues *from the take duration recorded in the
production record*: the take is centred in its 10s window and the cues divide it
proportionally. So a 3.5s take does not overflow — it makes the captions flash.
And an overshooting take gets pitch-safely sped up at assembly, which drags the
Whisper-timed burned-in captions along with it. **Take length governs caption
timing; clause length governs caption width.** Neither substitutes for the other.

**When they conflict.** A line already at 8s with one wide clause needs a break
for the caption — but commas and full stops add pause time and push it past the
window (that is exactly how a 4.7s take became 6.3s). Punctuating your way out
of a width problem is free only while the take is short. Once it isn't, **cut
content instead**; do not buy caption width with duration you don't have.

**Which rule binds depends on the caption path.** With burned-in
`explainer_video` captions, both bind and clause length is the only width lever —
there is no wrap parameter. With the sidecar + libass burn, width is a
*guarantee* (libass cannot draw outside its margins), so clause length only
decides whether the wrap reads naturally; duration still governs timing.

**Narrator-only is the default for a trailer**, even now that the characters are
cast: the narrator carries every compliance hedge. Giving a character a line is a per-cut decision that costs a block
boundary (one speaker per block) and moves a hedge off the narrator, so if a cut
does it, the compliance notes must say which hedge moved and who now carries it.

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

Blocks are fixed windows: a short take is centered, a slightly long one is sped
up pitch-safely, and the video is never stretched — so a 6-block trailer is
exactly 60s.

Captions carry constraints worth knowing before you write narration, and an
escape hatch when the fit has to be guaranteed — see [Subtitles](#subtitles).

## 5. The document

New version, new file — `inner-canon-ch<N>-trailer-v<M>.md` or
`inner-canon-ch<N>-longform-v<M>.md`, both under `output/episode-<N>/`. Never
overwrite a prior version; its production record is the reproduction evidence for
the next cut.

Sections in order, per CLAUDE.md and the ch1 reference — the generation work is
only half the deliverable, and the three sections after the record are the ones
most likely to get skipped:

1. Title, Chinese chapter title, cut short name.
2. Final video link + resolution / duration / format.
3. The disclaimer blockquote.
4. **Narration** table (block / beat / line), naming preset and speech rate.
5. **Source-script mapping** — source beat → blocks, plus any naming
   reconciliations, where the cut was re-timed off a longer script. CLAUDE.md is
   the primary instruction in a conflict. Incoming scripts have repeatedly needed
   the same three resolved this way: "Chronicle of Balance" → *The Emperor's Inner
   Canon*, "Xiao-Lei" → **Lei-Gong**, and jade → **blue** cheongsam.
6. **Shot list**, numbered to match the blocks.
7. **Production record (Higgsfield)** — see below.
8. **Deliverables the assembler cannot produce** — history lower-third, end
   disclaimer card, human editorial credit (*Written & edited by Joshua Chin*),
   licensed guqin music. Always all four; `explainer_video` has no text-overlay
   parameter and generates no music. The end disclaimer card is the one that
   costs credits: it needs its own final 10s block in the block plan and the
   cost preflight, rendered as a plain plate with the narrator reading the
   disclaimer to fill the block's one audio slot.
   Ship the `.srt`/`.vtt` sidecar alongside the document — see
   [Subtitles](#subtitles).

   Close the section with a **Finishing steps** subsection — the ordered
   procedure that turns the delivered render into an uploadable file, since a
   cut assembled without server-side subtitles carries neither captions nor
   on-screen text. Cover, with **this cut's own numbers**: the `.srt` to burn and
   which cues to strip first, the `ffmpeg` line (plus `scale=` if burning a
   480p draft with a 720p sidecar), where the lower-third sits relative to the
   caption band, the end card's exact in/out timecodes and text, and where the
   music drops out. Never write it as a generic recipe — block numbering and
   timecodes differ between versions of the same chapter, and that is where the
   mistakes land. `output/episode-1/inner-canon-ch1-trailer-v1.md` is the
   reference; its v2 shows the same procedure re-derived for a different cut.
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

Keep superseded job IDs — landscape clips, overlong or short takes, a clip
rejected as `nsfw` — in the notes, marked as superseded. They're evidence for the
next chapter, not clutter.

## Subtitles

Every deliverable ships captioned (CLAUDE.md), and captions must wrap on screen
with every word visible. There are two ways to get them, and they are
**alternatives, not layers** — burning a sidecar over a cut that already carries
burned-in captions double-layers them:

| | Burned in at assembly | Sidecar + libass burn |
|---|---|---|
| How | `subtitles: { font: "anton" }` on `explainer_video` | `scripts/build_subtitles.js`, then `ffmpeg` |
| Wrapping | best-effort — influenced, never constrained | **guaranteed** by libass margins |
| Cost | 0.05/voiced block | free |
| Use for | drafts and routine cuts | when the fit must be guaranteed |

Caption *width* is geometry and is the same for every voice; caption *timing*
comes from take duration, which is not. See
[the two-constraint table](#this-rule-is-not-the-caption-rule--they-are-two-constraints-on-one-line)
in step 3.

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
- **The budget is a clause width, not a word count** — **~22 characters per line
  at 9:16 720×1280**, ~50 at 16:9 1280×720, two lines max either way. (Both are
  what `build_subtitles.js` computes from frame width, margins and Anton's
  advance widths; it prints the figure on every run.) It is pure geometry, so it
  is **the same for every voice** and does not move when the cast changes. Do not size it off step 3's word figure, which is voice-specific and
  measures something else; see
  [the two-constraint table](#this-rule-is-not-the-caption-rule--they-are-two-constraints-on-one-line).
- The two rules usually agree — a line written in short clauses tends to fit both
  the block and the frame — but they can conflict. Adding a break to fix a wide
  clause costs pause time, so on a take already near 8s, cut content rather than
  punctuating past the window.
- **9:16 is the hard case.** A 720-wide vertical frame gives captions roughly
  half the horizontal room of the 1280-wide longform frame, so a phrase that is
  fine in 16:9 can overflow in 9:16. Judge wrapping on the vertical cut.
- `anton` is heavy but condensed, which fits more characters per line than the
  other three. It is the house font and also the safest of the four here; do not
  switch fonts to fix a wrapping problem, shorten the clause instead.

**Check it before you generate anything — `scripts/check_caption_fit.js`.**

```
node scripts/check_caption_fit.js <doc>.md            # 9:16, the hard case
node scripts/check_caption_fit.js <doc>.md --format 16:9
node scripts/check_caption_fit.js output/episode-*/*-v*.md   # sweep every cut
```

It measures **every clause** in the narration table against the two-line budget
and exits non-zero on any that overflow. Run it on the narration table *before*
recording takes: a fix is free at that point, and ~0.6 credits per block after.

**It is not redundant with `build_subtitles.js`, and its verdict can disagree.**
The two caption paths fail differently — the sidecar pre-splits a long clause
across several cues and burns through libass margins, so it always fits, while
`explainer_video` chunks on Whisper pauses that fall at punctuation, so a clause
with no internal comma has nowhere to break. **A document can pass
`build_subtitles.js` and still overflow on the assembled video**; chapter 1 did,
on six clauses, and an earlier cut shipped with two overflowing clauses that were
only caught retroactively.

**Verification is visual, and this host usually cannot do it.** The CDN has been
blocked on every cut for some time, so the rendered MP4 generally cannot be
fetched back —
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

**On trailers this is now the default, not the fallback.** Every cut must carry
the end disclaimer card (`CLAUDE.md`), and its mandated string —
*"A dramatized adaptation of a classical philosophical text."* — is 58 characters,
which is three lines in a 9:16 frame. It cannot be reworded, because it is a
compliance string, and it cannot be made to fit. So **any cut with the end card
overflows the server-burned captions by construction.** Assemble with the
`subtitles` parameter omitted and burn the sidecar instead; `check_caption_fit.js`
reports that clause as a known exception rather than a failure. Chapter 1's v1 and
v2 both ship this way. Dropping the parameter also saves the 0.05/block subtitle
charge.

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v1.md
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
`.gitignore` — commit them with the cut, and regenerate after any narration or
take change so the sidecar never drifts from the document.

## Longform episodes (15–20 min)

Untested — no longform cut exists in `output/` yet. The mechanics below are
derived from the tool constraints and the trailer runs, so treat the first
episode as a pilot and write what actually happened into its reproduction
notes. Where this section contradicts steps 0–5, this section wins.

### What changes

| | Trailer | Longform |
|---|---|---|
| Runtime | 30-90 sec (60s and 80s cuts exist) | 17–19 min target (15 floor, 20 ceiling) |
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

| Clip model / tier | Credits/clip | ~114 blocks | vs 942 balance |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,145** | over budget |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~2,855 | ~3× balance |
| `gemini_omni` 720p | 30 | ~3,425 | ~3.6× balance |
| `seedance_2_0` 1080p | 90 | ~10,265 | ~11× balance |

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

All four voices are cast and permanent — **Arthur** (narrator), **Xavier**
(Fan-di), **Vesper** (Dr-Qi), **Zane** (Lei-Gong); IDs in the step-3 table. Do
not audition alternatives per chapter. Match the CLAUDE.md voice rules when
directing them: Dr-Qi never sounds like she's winning — the more Fan-di
performs, the stiller she gets.

**All four run at `speech_rate` 55, and rate is not a lever here either** — see
[§3](#speech_rate-is-not-a-duration-lever--do-not-reach-for-it). An earlier
version of this section suggested 60–65 for character dialogue; chapter 1
measured rate 40 against rate 60 on identical text and got −8% to +12%, which is
take-to-take variance, not a rate response. Word count and sentence structure are
the only controls, on dialogue as on narration.

Arthur, Xavier and Vesper are measured (§3 table). **Zane is measured only on a
short line and must be re-measured at length before ~110 takes are committed to
him** — one unmeasured voice across a 19-minute episode is the most expensive
version of the take-length mistake. Character lines are also structurally short
against a 10s block, so apply §3's two outs — write the character a real
paragraph, or let the take run short and centred deliberately — **per line**, and
record each deliberate short take in the production record.

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
  repo host in an earlier session, so `assets/` PNGs couldn't be re-uploaded.
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
  [The guaranteed path](#the-guaranteed-path--sidecar--libass-burn). Every
  rendered cut ships one.

## Compliance gate before generating

**`CLAUDE.md` § YouTube compliance holds the rule list and is normative in any
conflict. This section is the procedure for applying it to prompts**, plus the two
failure modes that have already cost a paid re-render.

Run the gate on **prompts, before generating** — not just on output. A
non-compliant clip is a paid re-render.

- **Mortality and collapse have to be carried by objects.** "Portraits, not
  bodies" is the rule; substitution is the working method. Two collapse passages
  have been carried as a guttering lamp flame and an ink-wash city wall under
  floodwater. No falling bodies, no injury.
- **Restraint and bound-figure imagery trips the safety filter, even when the
  subject matter is fine.** A manifesto beat ("bound to ghosts") rendered as an
  ink figure "wrapped in smoke-cords that hold it still" came back `nsfw` — the
  restraint, not the theme. Re-cut with no human figures at all (a
  smoke-covered scroll that cannot be opened, a shut door light cannot pass) and
  it cleared on the first retry. **Carry that kind of meaning with objects and
  brush strokes, never with a person.**

Then write the per-cut audit into the document's `## Compliance notes (YouTube)`
section, one bullet per `CLAUDE.md` rule, so the reasoning survives with the cut.
