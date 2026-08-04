---
name: higgsfield-production
description: Produce a cut of *The Emperor's Inner Canon* end-to-end on Higgsfield — style key, per-block clips, narrator voiceover, sandbox assembly, captions, and the production record. Use whenever generating or re-rendering a 30-90 sec vertical trailer or a 15-20 min longform episode for this repo, adding a new chapter under output/, or debugging a Higgsfield job (wrong aspect ratio, preset swap prompts, expired CDN links, blocked uploads, a missing explainer_video tool, or an assemble_final.sh speech-window error).
---

# Higgsfield production pipeline

**`CLAUDE.md` owns policy; this file owns procedure and measurements.** The cast,
the compliance rules, the production-document layout, what ships as a deliverable
and the git conventions are defined there and are normative in any conflict —
this file points at them rather than restating them, and holds the numbers,
parameters and failure modes instead.

The house pipeline for this repo. Every cut has been produced this way, and the
failure modes below are ones that already cost a paid re-render, so read them
before generating anything.

> **⚠ The assembler changed, 2026-08-04. `explainer_video` no longer exists.**
> Higgsfield removed the server-side assembler from the MCP surface; there is no
> deprecation shim and no fallback assembler. Assembly is now a shell script run
> in a remote sandbox — [step 4](#4-assembly) has the new call. Three consequences
> reach back into how a cut is *written*, so they are not merely a swapped tool:
>
> - **The take window moved from 6–8s to 8.6–10.0s** of *detected speech*, and
>   over-window is now a hard error instead of a pitch-safe speed-up. Every
>   narration line in the repo is now short of the gate — see [step 3](#3-voiceover).
> - **Captions are no longer burned at assembly.** The sidecar path is the only
>   path now, not the preferred one of two — see [Subtitles](#subtitles).
> - **Clip audio is now mixed in at 0.12, not discarded**, so `generate_audio:
>   false` went from a cost saving to a correctness requirement — see
>   [step 2](#2-clips).
>
> **No cut has yet been assembled end-to-end on this path.** The script's own gates
> are quoted below from source, but the first run through it should be treated as
> a shakedown, not a render.

`output/episode-1/inner-canon-ch1-trailer-v3.md` is the reference document —
match its section order on any new cut. Note that `episode-<N>` is the **chapter number of the file name of the input script**, not a sequential index, so the folders are not consecutive and
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
| [4. Assembly](#4-assembly) | the sandbox assembler that replaced `explainer_video` |
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
4. **Assembly** (`sandbox_exec` → `assemble_final.sh`) — clips + takes in, one
   MP4 out. **No captions here**: the assembler has no subtitle option, so
   burning them is a separate step afterwards — see [Subtitles](#subtitles).
5. **The document** — every job ID above, plus the shot list, compliance audit,
   manual deliverables and runtime levers.

Log the run's actual credit spend in the production record as you go. **The
chapter 1 trailer v3 run is the repo's measured balance delta** — 938.2 → 862.6 =
75.6 credits for 7 clips and 7 takes — so it is the single historical figure
available to check an estimate against. See its *Credit spend* section in
`output/episode-1/inner-canon-ch1-trailer-v3.md`.

**That delta is also where the per-take price comes from.** Seven Draft-tier clips
account for 70 of the 75.6, the style key was reused at 0, and no subtitles were
burned — so the seven voice takes are the remaining **5.6, or ~0.8 credits each**.
Budget voice at 0.8. A `get_cost` preflight returning 1 credit for a take is
rounding up to a whole-credit floor rather than reporting the billed rate.

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
- **Voice takes survive the upgrade.** They are cheap and resolution-independent,
  so generate once and reuse — a draft → full upgrade only re-pays for clips.
- **Captions run on the draft.** Negligible against the clip bill, and an
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
(`nano_banana_pro`, 1k), voiceover **0.8/take** = 4.8, assembly free. **≈6.8
credits.**

**The 0.05/voiced-block subtitle charge is gone with `explainer_video`** — it was
the server-burn path's fee, and captions are now burned locally for free. Budget
0.3 less per 6-block trailer than the pre-2026-08-04 records show.

**Turn native audio off.** `seedance_*` default `generate_audio: true`, `kling*`
and `cinematic_studio_video*` default `sound: on`, and `wan`/`grok`/`gemini_omni`
generate audio natively. Pass `generate_audio: false` (or the model's equivalent)
on every clip.

**This is now a correctness requirement, not just a saving.** `explainer_video`
discarded a clip's own audio and substituted the narrator take, so a stray
generated soundtrack was merely wasted money. `assemble_final.sh` does the
opposite — its LEVEL LAW *keeps* the clips' diegetic audio, ducked under the voice
at **0.12** (`--sfx-vol`, clamped ≤0.20). A clip generated with native audio on
will therefore be **audible in the finished cut**, under the narrator, and the
only fix is regenerating the clip.

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
burned from the sidecar after assembly. Longform quotation cards are the sole
exception, for a reason specific to them — see
[ON-SCREEN TEXT](#on-screen-text--the-one-exception-to-text-free-clips).

**Two clip properties are now hard-gated by the assembler**, and both fail the
whole run rather than the block:

- **Duration ≥ 9.5s.** `assemble_final.sh` rejects any clip shorter than
  `--clip-seconds` minus 0.5 — `clip N is only X s — REGENERATE the block; a held
  still frame is not a scene.` At the house 10s block that is a 9.5s floor, which
  the 10s clip default clears; it is the models capped below 10s that do not, and
  the step-0 table already excludes them on exactly this ground.
- **Motion from frame 1.** The assembler freeze-probes the first ~1.5s and last
  ~2s of every clip and *warns* on a static open or a frozen tail. It is only a
  warning, so it will not stop a render — but it is the assembler telling you the
  block reads as a still, and the house answer is to regenerate that block.

## 3. Voiceover

Model `seed_audio`, `voice_type: "preset"`, `speech_rate: 55` — that rate is
what fits a line inside a fixed 10s block. **The full cast is cast permanently**
(CLAUDE.md, as of chapter 1); all four are `preset` voices and none may be
re-picked per chapter:

| Role | Voice | `voice_id` | Measured rate | 8.6–10.0s window |
|---|---|---|---|---|
| **Narrator (V.O.)** | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | **3.73 words/sec** | **32–37 words** |
| **Fan-di** | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | **4.55 words/sec** | **39–45 words** |
| **Dr-Qi** | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | **4.42 words/sec** | **38–44 words** |
| **Lei-Gong** | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | *short-line only* | *re-measure at length* |

Rates measured 2026-08-01 on chapter 1, one take per voice, `seed_audio` presets.
Zane has only been measured on a 5-word line (2.3–2.6s), where pause overhead
dominates and no reliable words/sec can be derived — **measure him on a
full-length line before writing him one.**

**The word columns are recomputed for the new window and are not themselves
measured.** They are `rate × 8.6` to `rate × 10.0`, carried over from rates taken
against the old 6–8s window. Two things could move them, and both point the same
way — *shorter* than the arithmetic suggests:

- **The rates may be file-duration rates, not speech rates.** The assembler gates
  on *detected speech* with the provider's head and tail padding trimmed off. If
  the 2026-08-01 figures were taken against raw take length, they understate the
  true speaking rate, and these word counts overshoot.
- **`seed_audio` is bimodal.** The assembler's own source note records the same
  line returning near 9.0s or near 10.4s across generations, with pace wandering
  between runs. A word count is a starting estimate here, not a setting.

**Re-measure with `speech_metrics.sh` before committing a full cut to these
numbers** — see the window section below for the call. Treat a first pass at these
counts as calibration, and expect regenerations.

**Word counts do not transfer between voices**, and the gap is large enough to
break a cut: at the same `speech_rate`, 23 words measured 6.17s on Arthur against
7.46s on the narrator he replaced — ~21% faster for identical text. A budget
carried over from a different voice misses the window by more than a second per
block. Size every line from the measured figure for *that* voice, above.

These four are the only voices this series uses. Do not audition alternatives,
and do not carry a voice forward out of an older cut's production record.

**Narrator-only is the default for a trailer**, even now that the characters are
cast: the narration carries every compliance hedge. Giving a character a line
costs a block boundary (one speaker per block) and moves a hedge off the
narrator, so if a cut does it, its compliance notes must say which hedge moved
and who now carries it.

For any voice still marked unmeasured, **generate one take, read its duration,
and write the measured words/second back into this table** before committing a
script to it. One take is ~0.8 credits; a mis-sized script is six.

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
4.4–4.6 words/sec, Xavier and Vesper now need ~40 words to clear the 8.6s floor —
which is a speech, not an interjection.

**The old second way out is now closed.** Letting a take run short and centred —
a 2.6s interjection sitting in ~3.7s of silence either side, used deliberately in
chapter 1's block 3 — is a **hard assembler error** under the new floor:
`voice N carries 2.6s of speech; required 8.6–10.0s`. The assembler will not
build the cut. There is no flag to permit it; `--clip-seconds` moves the whole
window rather than widening it, because the window is always exactly 1.4s wide
and its ceiling *is* the block length.

So a short character beat now costs a structural decision, not a note in the
record. The options, in the order worth trying:

- **Write the character a real paragraph** — a reframe or a monologue that earns
  its ~40 words.
- **Fold the beat into a neighbouring block** so one voice carries the full window
  and the interjection lives inside it. This changes the block count, so it
  reaches the cost preflight.
- **Cut the beat.**

Any cut carrying a deliberate short take — chapter 1 does — cannot be reassembled
on this path without rewriting that block first.

A cut is never re-voiced retroactively unless someone decides to, in which case
only the voiceover and assembly are re-paid — the clips are untouched.

One take per block. Record each take's **duration** alongside its job ID — the
record is how you know a block was comfortable or tight.

### Write to 8.6–10.0 seconds. This is the most expensive thing to get wrong.

**The window is enforced by the assembler, and both edges are hard errors.**
`assemble_final.sh` computes it from the block length as `CLIP-1.4` to `CLIP`, so
at the house 10s block it is **8.6–10.0s of detected speech**. Miss it either way
and the run stops:

```
ERROR: voice 3 (voice03.wav) carries 6.42s of speech; required 8.600–10.000s
       — REWRITE and regenerate (never pad, atempo, or trim speech).
```

Three properties of that gate matter when writing:

- **It measures *speech*, not file length.** The assembler runs `silencedetect`
  and ignores the provider's leading and trailing padding, then centres the words
  on the block. A padded take cannot shift the words off their scene — and cannot
  sneak under the ceiling either.
- **There is no time-stretch any more.** `explainer_video` sped an overlong take
  up pitch-safely; `assemble_final.sh` explicitly does not (`NO time-stretch (no
  atempo / no speed change)`). An over-window take is not absorbed, it fails.
- **Never fix it in the audio.** The error text names the three forbidden repairs
  — pad, `atempo`, trim — because a dev run that started cutting silence inside
  takes to pass the gate produced audible artefacts. Rewrite the line and
  regenerate.

**The window is the rule; the word count is not.** The window is a property of the
pipeline — a fixed 10s block, a take that must fill it without clipping — so it
holds for every voice. The word count that *produces* it is a property of the
voice, and it moves:

| | |
|---|---|
| Speech per 10s block | **8.6–10.0s — fixed, applies to every voice** |
| Line length | per voice — **32–37 words Arthur, 39–45 Xavier, 38–44 Vesper** (computed, not measured) |
| Delivery rate | per voice — **3.73 / 4.55 / 4.42 words/sec** for Arthur / Xavier / Vesper |

**Take the line length from the voice table above, never from another cut's
document.** A word budget written for one voice undershoots or overshoots another
by more than a second per block — and **every cut written before 2026-08-04 is
sized to the old 6–8s window**, so those documents are now a source of
guaranteed-failing lines rather than a reference.

**Measure, don't infer.** The sanctioned tool trims exactly what the assembler
trims, so its `speech=` is the number that will be gated:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

Hand-rolled `silenceremove` or volume-detect math measures something else.

**Expect regenerations, and budget for them.** `seed_audio` returns the same line
near 9.0s or near 10.4s depending on the run — the assembler's source records pace
wandering between generations on identical text. The 8.6s floor was chosen to
catch the lower mode, so **only the upper mode needs a rewrite**; a take that
comes back over the ceiling is often the same line that would have passed on a
re-roll. Re-roll once before rewriting, at ~0.8 credits a take.

### Dead air is no longer the failure it was

The old 6–8s window left 2–4s of silence per block, and this section used to warn
that 5–6.5s of it "reads as a stall". Under an 8.6–10.0s window that risk is
largely designed out: a take at the floor leaves **0.7s of lead and tail after
centring**, which the assembler's own note calls inaudible. The pressure has
inverted — the writing problem is now finding enough content to fill a block, not
trimming to fit one.

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

### …and the other extreme runs long too — the ch1 v3 measurement

Breaking sentences up is not a free lever. The v3 trailer was written in short
sentences *specifically* to pass the caption check, and every take came in high.
Isolating sentence count against a near-fixed word count, same voice, same rate:

| Take | Words | Sentences | Delivered |
|---|---|---|---|
| ch1 v1 block 1 | 24 | 2 | 6.53s |
| ch1 v3 block 6 | 24 | 3 | **7.08s** |
| ch1 v3 block 5 | 23 | 4 | **7.98s** |

**Each additional sentence boundary costs roughly 0.55–0.7s**, and over the range
a 10s block allows, that dominates the word count. v3 shipped one take at 8.14s
and two more at 7.9s purely from sentence count.

So the two findings bracket the same curve rather than contradicting each other:

```
1 long em-dash sentence  ────────────────────────────►  10.78s   (32 words)
2–3 sentences            ────────────►                  6.5–7.1s (24 words)
4–5 sentences            ──────────────────►            8.0–8.1s (23–30 words)
```

**The curve is still valid; the target on it has moved.** Every duration in the
three tables above was measured against the old window, where the job was to stay
*under* 8s. Read them now as a map of how to get *up* to 8.6s — and note that the
whole measured range, 5.87s to 8.14s, **now sits below the floor**. The old
"aim for two to three sentences per block" advice targeted 6.5–7.1s and is
therefore a recipe for a failing take. It has been removed.

**Reach the window with words, not with sentence boundaries.** That distinction is
now load-bearing, because the assembler polices the other end:

> `WARN: voice 4 has 2 internal pause(s) >=0.8s (longest 1.30s) — pausey take:
> rewrite the line as ONE flowing clause (fewer full stops) and regenerate.`

So the cheap old lever — adding full stops to buy ~0.55–0.7s each — now buys
duration in exactly the currency the assembler flags. Padding a thin line to 8.6s
with sentence breaks produces a take that passes the gate and trips the warning.
**Write ~35 words of actual content in two to three sentences** rather than ~24
words in five.

The measured words/second in the voice table sizes a *first draft*. What lands the
take in the window is structure:

- **Take is short of 8.6s** → add content. This is now the common case and the
  only clean fix; the line was written to a window 2.6s narrower than the one it
  has to fill. Reach for words first, then a single extra sentence boundary, and
  stop before the pause warning fires.
- **Take is over 10.0s** → re-roll once (bimodality accounts for a lot of ceiling
  misses). If it lands long again and it is one long sentence carrying a
  subordinate clause after an em-dash, break it — that structure alone put a
  32-word line at 10.78s.

Both levers are voice-independent and cost a single re-take. Reach for them
before rewriting the line's content, and **never** reach for `speech_rate`.

**Caption fit no longer pushes against this.** It used to: short clauses kept a
line inside the server-burned caption budget, and short clauses arrive as short
sentences — exactly how v3 drifted long. With the sidecar as the only path, that
pressure is gone, because the sidecar splits long clauses across cues by itself.
**Write every cut for the take window first**; caption fit is now downstream of it
rather than in tension with it.

### Take length is not caption fit — two constraints on one line

The narration line is also the subtitle, so it is governed twice. The two rules
point the same way often enough to look like one, and they are not:

| | **Take length** (this section) | **Caption fit** ([Subtitles](#subtitles)) |
|---|---|---|
| Constrains | total **seconds** of the take | pixel **width** of the longest clause |
| Set by | the voice against a fixed 10s block | frame width, margins, Anton glyph widths |
| Voice-dependent | **yes** | **no** — pure geometry |
| Lever | how much content, and how many hard stops | where the clause breaks fall |
| Failure | **the assembly stops** — hard error at either edge | the line renders past the frame edge |

**Never size captions off a word count.** The caption budget is a clause width and
does not move when the cast changes; the word count is voice-specific. The two
only ever looked like one rule because a single narrator carried the whole series.

**They interact through duration, not words.** `build_subtitles.js` times cues from
the take duration in the production record, so a *short* take makes captions flash
rather than overflow. The old counterpart to that — an overshooting take being sped
up at assembly and dragging the burned-in captions with it — **can no longer
happen**: nothing is sped up and nothing is burned in. **Take length governs
caption timing; clause length governs caption width.**

**They no longer conflict in the direction they used to.** The old advice was to
cut content when a line neared 8s with one wide clause, because punctuation bought
caption width with duration the take did not have. Under an 8.6s floor the take
usually *needs* that duration, and the sidecar splits wide clauses across cues by
itself — so write for the take window and let the sidecar handle the width.

## 4. Assembly

**`explainer_video` was removed from the Higgsfield MCP surface on 2026-08-04.**
Assembly now runs `assemble_final.sh` inside `sandbox_exec` — a remote Linux
sandbox with ffmpeg preinstalled. The script ships in every sandbox under
`$HF_WORKFLOWS/faceless-channel-video/scripts/`.

We borrow that one script; we do **not** adopt the `faceless-channel-video`
workflow around it. Its scriptwriting, style and preset rules are a different
house style and do not govern this series — `CLAUDE.md` still does.

### The sandbox is ephemeral — this changes the shape of the call

The sandbox is discarded ~10 seconds after a call returns, and files do not
survive between calls. Two consequences, both of which have their own failure
mode:

- **Download, assemble and export go in ONE command**, chained with `&&`. Split
  them across calls and the second call starts on an empty filesystem.
- **`explainer_video` returned a hosted job; this returns a file in a sandbox that
  is about to vanish.** Nothing archives it for you. Call `media_upload` *before*
  the assembling command, append `curl -f -X PUT --upload-file` to that **same**
  command, and `media_confirm` only after HTTP 200.

```
sandbox_exec({ background: true, command:
  "set -e; mkdir -p work/blocks work/voices work/output; " +
  "curl -fL '<clip1 url>' -o work/blocks/block01.mp4; " +
  "curl -fL '<voice1 url>' -o work/voices/voice01.wav; " +   // …one pair per block
  "printf '%s\\n' 'work/blocks/block01.mp4 work/voices/voice01.wav' " +
  "               'work/blocks/block02.mp4 work/voices/voice02.wav' > pairs.txt; " +
  "chmod +x $HF_WORKFLOWS/faceless-channel-video/scripts/*.sh; " +
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/assemble_final.sh " +
  "  --out work/output/final.mp4 --blocks 6 --manifest pairs.txt && " +
  "curl -f -X PUT --upload-file work/output/final.mp4 '<upload_url>'" })
```

Assembly is long — run `background: true` and poll the returned log with `tail`
in the next call. Poll at least every 60s or the sandbox dies under the job.

### The flags that matter here

| Flag | |
|---|---|
| `--out` | output path |
| `--blocks N` | **required** — asserted against the manifest *before* any work, so a dropped pair fails instead of shipping a hole |
| `--manifest` | one `clip voice` pair per line, block order, `#` comments allowed. Preferred over positional args in production |
| `--clip-seconds` | block length, default 10. **Moves the speech window with it** — leave it alone |
| `--music bed.mp3` | optional licensed bed, `--music-vol` default 0.10, clamped ≤0.20 |
| `--sfx-vol` | clip diegetic audio level, default 0.12, clamped ≤0.20 |
| `--allow-mismatch` | overrides the pair-numbering assert. Do not use — see below |

**No `width`/`height`.** Output geometry follows the source clips, so the old rule
about reading dimensions off the clip jobs rather than pasting 720×1280 is
handled for you. Draft and full tier both just work.

**No `--subs`.** Passing it is a hard error: `--subs was removed. Captions are the
subtitles skill's job: assemble first, then run it on the clean voice takes +
<out>.mp4.assembly.json.` See [Subtitles](#subtitles).

**Name files `blockNN.mp4` / `voiceNN.wav` and keep the numbers aligned.** The
script cross-checks the numbers in each pair and errors on `block03 + voice05` —
it calls this "the #1 cause of audio on the wrong block". `--allow-mismatch`
exists for genuinely unnumbered files; reaching for it to silence the assert
re-arms precisely the failure it was added to catch.

### What it guarantees, and what now fails instead

**Blocks are still fixed windows** — the cut is exactly `N × 10s`, asserted on the
output to ±1s, and the video is never shortened to the audio. A 6-block trailer is
60s. That is still the rule the whole pipeline is written around, and it is why
the sidecar's cue timing lines up without nudging.

**What changed is the treatment of a take that does not fit.** `explainer_video`
absorbed both edges — it centred a short take and pitch-safely sped up a long one.
`assemble_final.sh` absorbs neither:

| | `explainer_video` | `assemble_final.sh` |
|---|---|---|
| Take short of window | centred, silence either side | **hard error** below 8.6s |
| Take over window | sped up pitch-safely | **hard error** above 10.0s |
| Centring | on file length | on **detected speech** (padding trimmed) |
| Clip audio | discarded | **kept at 0.12** under the voice |
| Captions | burned in, `font` option | **not burned** — separate step |
| Output | hosted job ID | file in an ephemeral sandbox |

It also asserts, on the finished file: every 10s window contains voice-level audio
(`blocks [..] have NO narration in their windows`), the audio stream exists and
matches the video length, and the file passes decode validation. Final mix is
loudnorm **−16 LUFS**, voice at 1.0.

**The sidecar is the assembler's own receipt.** It writes
`<out>.mp4.assembly.json` carrying each block's measured speech and its absolute
position in the finished file. **Never hand-write it** — the caption step rejects
a hand-made one.

Assembly itself is free; the sandbox costs no credits. What it can cost is a
regenerated take, which is why the window in [step 3](#3-voiceover) is worth
getting right before you reach this step.

## 5. The document

New version, new file — `inner-canon-ch<N>-trailer-v<M>.md` or
`inner-canon-ch<N>-longform-v<M>.md`, both under `output/episode-<N>/`. Never
overwrite a prior version (`CLAUDE.md` § Git conventions): its production record
is the reproduction evidence for the next cut.

**`CLAUDE.md` § Structure holds the canonical section list.** Reproduced here in
order because the generation work is only half the deliverable and the three
sections after the record are the ones most likely to get skipped — where the two
disagree, `CLAUDE.md` is correct and this list needs updating:

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
8. **Deliverables the assembler cannot produce** — the four are listed in
   `CLAUDE.md` and every cut carries all four. The three text ones are hand-added
   at edit time because `assemble_final.sh` has no text-overlay parameter; music
   is the exception, in one direction only — `--music` *places* a licensed bed you
   supply, and generates nothing. **The one with a cost consequence is the end
   disclaimer card**: it needs its own final 10s block in the block plan *and* in
   the step-0 preflight, rendered as a plain plate with the narrator reading the
   disclaimer to fill the block's one audio slot. Ship the `.srt`/`.vtt` sidecar
   alongside the document — see [Subtitles](#subtitles).

   Close the section with a **Finishing steps** subsection — the ordered
   procedure that turns the delivered render into an uploadable file. Every cut
   now arrives from the assembler carrying neither captions nor on-screen text,
   so this section is no longer conditional on how the cut was assembled.
   Cover, with **this cut's own numbers**: the `.srt` to burn and
   which cues to strip first, the `ffmpeg` line (plus `scale=` if burning a
   480p draft with a 720p sidecar), where the lower-third sits relative to the
   caption band, the end card's exact in/out timecodes and text, and where the
   music drops out. Never write it as a generic recipe — block numbering and
   timecodes differ between versions of the same chapter, and that is where the
   mistakes land. `output/episode-1/inner-canon-ch1-trailer-v3.md` is the
   reference.
9. **Compliance notes (YouTube)** — one bullet per repo rule.
10. **Runtime levers** — which blocks drop to reach 0:30, which beats add to
    reach 1:30.

### Production record (Higgsfield)

The record is what makes a cut reproducible after the CDN links die:

- **Style key** — job ID, model, dimensions, and the full derivation chain.
- **Clips** — model **and tier (Draft/Full)**, duration, resolution, and every
  block's job ID. Name the model explicitly; it is a per-cut choice now, and a
  future chapter cannot reproduce the look without it.
- **Voiceover** — model, preset name + ID, `speech_rate`, per-block job ID, take
  duration *and* the assembler's measured **speech** figure (they differ; the
  second is the one that was gated).
- **Assembly** — there is no job ID to record any more, so record what makes the
  run repeatable instead: block count, the `assemble_final.sh` flags used
  (`--blocks`, `--clip-seconds` if not 10, `--music`/`--sfx-vol` if set), the
  manifest, the `media_id` the finished MP4 was exported to, and any assembler
  WARNs that were accepted rather than fixed (pausey take, static head/tail).
- **Captions** — burned separately now, so say so explicitly: which sidecar, and
  whether the burn was **visually verified** or only executed (the CDN is usually
  blocked here, so say which).
- **Credit spend** for the run.
- **Reproduction notes** — anything that went wrong and how it was resolved.

Keep superseded job IDs — landscape clips, overlong or short takes, a clip
rejected as `nsfw` — in the notes, marked as superseded. They're evidence for the
next chapter, not clutter.

## Subtitles

Every deliverable ships captioned (`CLAUDE.md`). **There is now exactly one path.**
`explainer_video`'s burned-in captions went with the tool, and `assemble_final.sh`
rejects `--subs` outright — so the repo's own sidecar is no longer the preferred
option of two, it is the only one.

| | Sidecar + libass burn |
|---|---|
| How | `scripts/build_subtitles.js`, then `ffmpeg` |
| When | **after** assembly, on the finished MP4 |
| Wrapping | **guaranteed** by libass margins |
| Cost | free |

This resolves rather than complicates things. The old two-path section existed to
manage a real conflict: every cut carries the end disclaimer card, and the card
carries the **full 78-character** compliance string mandated by `CLAUDE.md` —
*"A dramatized adaptation of a classical philosophical text. Not medical
advice."* It is a compliance string, so it cannot be reworded to fit anything.

**Captions are measured per clause, not per card**, and the card is two sentences,
so the 78 characters never meet a caption boundary as one unit. Measured with
`scripts/lib/caption_metrics.js`:

| Clause | 9:16 (556px/line, 1111px cap) | 16:9 (1001px/line) |
|---|---|---|
| *"A dramatized adaptation of a classical philosophical text."* (58ch) | **1187px — overflows, 3 lines** | 967px, fits on one |
| *"Not medical advice."* (19ch) | 406px, fits on one | 331px, fits on one |

So exactly one clause overflows, and only on vertical. That single clause is what
`check_caption_fit.js` carries as `MANDATED_DISCLAIMER` and reports as a known
exception rather than a failure — the constant is the widest *clause*, not the
whole card, which is why an exact-match against 58 characters is correct there.

Because that clause could never fit the server-burned captions, **every cut had to
take the sidecar path anyway.** The choice was already only nominal; now it is
gone.

**The double-layering warning no longer applies** — there is nothing to
double-layer with. Burn the sidecar over the assembled cut without checking
whether captions were already burned in.

> **An alternative exists and we are not using it.** The sandbox also ships
> `scripts/subtitles/*` (`audio_to_captions.py`, `burn_caps_clean.sh`), which times
> captions off Whisper against the assembler's sidecar. It is untried here and
> uses its own fonts (Metropolis, Montserrat) rather than Anton, which `CLAUDE.md`
> mandates. `build_subtitles.js` stays the house path.

Caption *width* is geometry and is identical for every voice; caption *timing*
comes from take duration, which is not — see
[the two-constraint table](#take-length-is-not-caption-fit--two-constraints-on-one-line)
in step 3.

### There is no wrap parameter

**The API exposes exactly one subtitle option: `font`** (`patrick`, `caveat`,
`marker`, `anton`). The `subtitles` object is `additionalProperties: false`, so
there is **no** line-width, max-characters, wrap, position or font-size control,
and inventing one gets the call rejected. Do not promise the user a wrap setting.

What actually governs width: the backend transcribes the **voiceover** with
Whisper word timestamps and chunks it into short phrases timed to speech, so the
line breaks follow **the narration you wrote**. Phrasing is the only real lever:

- **Write in short clauses.** Commas, full stops and semicolons are where the
  chunker breaks. A 24-word line of three clauses captions cleanly; the same 24
  words as one unbroken clause is the one at risk.
- **The budget is a clause width, not a word count** — **~22 characters per line
  at 9:16 720×1280**, ~50 at 16:9 1280×720, two lines max either way. Both scripts
  compute it from frame width, margins and Anton's advance widths, and print it
  on every run.
- **9:16 is the hard case.** A 720-wide vertical frame gives captions roughly half
  the room of the 1280-wide longform frame, so a phrase that is fine in 16:9 can
  overflow in 9:16. Judge wrapping on the vertical cut.
- **Do not switch fonts to fix wrapping.** `anton` is the most condensed of the
  four on offer and is already the best fit; anything else makes it worse.
  Shorten the clause instead.

If a burned-in caption does overflow, **re-record that block's take with shorter
clauses** and re-assemble. A re-take is one voice take and the clips are
untouched — never re-render video for a caption problem.

### Check before you generate — `check_caption_fit.js`

```
node scripts/check_caption_fit.js <doc>.md                   # 9:16, the hard case
node scripts/check_caption_fit.js <doc>.md --format 16:9
node scripts/check_caption_fit.js output/episode-*/*-v*.md   # sweep every cut
```

It measures **every clause** in the narration table against the two-line budget
and exits non-zero on any that overflow. Run it *before* recording takes: a fix is
free at that point and costs a re-take afterwards.

**The failure this was built to catch can no longer happen.** The disagreement it
guarded was between the two caption paths: the sidecar pre-splits a long clause
across several cues and burns through libass margins, so it always fits, whereas
`explainer_video` chunked on Whisper pauses — which fall at punctuation — so a
clause with no internal comma had nowhere to break. A document could pass
`build_subtitles.js` and still overflow on the assembled video; chapter 1 did, on
six clauses. **With the server-burn path gone, that overflow mode is gone with
it.**

`CLAUDE.md` still mandates the check before generating takes, and it is still
worth running, but for a narrower reason: a clause that needs three or four cues
to fit is caption churn on screen even when it technically wraps. Treat it now as
a **readability check on the writing**, not as a guard against a render failure.
Its non-zero exit no longer means "this cut will overflow."

### Build the sidecar — `build_subtitles.js`

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v3.md
node scripts/build_subtitles.js <doc>.md --format 16:9      # longform
```

It reads the cut's **own production document** — the narration table for text, the
production record's voiceover line for each take's duration — and writes `.srt`
and `.vtt` beside it. No new data to maintain. It warns and assumes a full block
for any take whose duration is missing from the record.

Two mechanisms make the fit real, and the second is the one that guarantees it:

1. **Pre-wrap.** Cues are split at clause boundaries and wrapped to the measured
   character budget. The script prints the widest line in pixels against the
   usable width, so overflow is a number you see before anything is rendered.
2. **libass margins.** The printed `ffmpeg` command burns with
   `force_style='…MarginL=58,MarginR=58,WrapStyle=0…'`. libass measures the real
   Anton glyphs and wraps inside those margins — it *cannot* draw outside them.
   That is the guarantee; step 1 only keeps the result from looking mechanical.

   **The guarantee is conditional on two things, and both fail silently.** Run
   the command `build_subtitles.js` prints — it now handles the first — and check
   the second before burning:

   - **PlayRes must match the cut.** libass reads `Fontsize` and `MarginL/R/V` in
     the ASS script's own PlayRes space, *not* in video pixels, and ffmpeg's
     SRT→ASS converter hardcodes `PlayResX/Y` to `384x288`. Burning the `.srt`
     directly therefore scales every value in the style by `frame_height/288` —
     about 4.4× on a 720x1280 cut, putting Anton near 240px, at which point single
     words no longer fit between the margins and the lines run off frame. This is
     why the printed command is now **two steps**: convert to `.ass` and re-target
     PlayRes to the cut's own resolution first, then burn. The intermediate
     `.ass` goes to `renders/` and is gitignored.
   - **Anton must be installed** (`fc-match Anton`). libass substitutes a wider
     font silently when it is missing, which breaks the measured fit while
     `build_subtitles.js` still reports the line as fitting. On the repo host,
     `.claude/hooks/session-start.sh` installs ffmpeg and Anton at session start.

   Both failures are invisible to step 1, because step 1 measures the sidecar and
   these corrupt the *render*. A widest-line figure of "fits" says nothing about
   either — only watching the file, or checking that the margin columns stay at
   background luma, does.

#### ⚠ Cue timing has drifted — `build_subtitles.js` has not been updated

Cue timing used to follow the assembler's own rule exactly, so the sidecar lined
up with an `explainer_video` cut without manual nudging. **The two rules no longer
match.** Both centre the take in its block, but on different quantities:

| | Centres on | Speech starts at |
|---|---|---|
| `build_subtitles.js:114` | take **file duration** from the production record | `blockStart + (10 − file_duration) / 2` |
| `assemble_final.sh` | **detected speech**, padding trimmed | `blockStart + (10 − speech) / 2` |

A `seed_audio` take carries leading and trailing silence, so `file_duration >
speech` and the sidecar's cues therefore start **early by `(file_duration −
speech) / 2`** — around 0.3s on a take with 0.6s of total padding, and worse on a
heavily padded one. Captions lead the voice slightly, on every block.

Two ways to correct it, and the second is authoritative:

1. **Record speech, not file length.** Put the `speech_metrics.sh` figure in the
   production record's voiceover line and `build_subtitles.js` centres correctly,
   because its formula is right for whatever number it is given.
2. **Take the timing from `<out>.mp4.assembly.json`.** The assembler writes each
   block's measured speech *and* its absolute position in the finished file. That
   is ground truth, and it is what the sandbox's own caption scripts consume.

**Neither is implemented.** `build_subtitles.js` still reads the duration column
as written, and nothing yet reads the assembly sidecar. Until one of them lands,
a sidecar built for a cut assembled on this path is **approximately** timed —
say so in the production record rather than claiming the old exact alignment.

`.srt`/`.vtt` are tracked, required deliverables (`CLAUDE.md`), exempted in
`.gitignore`. Commit them with the cut and **regenerate after any narration or
take change**, so the sidecar never drifts from the document.

**Whether captions actually wrap can only be confirmed by watching the file**, and
this host usually cannot — see [Environment caveats](#environment-caveats). The
production record must say whether captions were *visually verified* or only
assembled.

Both scripts share their geometry, Anton metrics and narration-table parser via
`scripts/lib/caption_metrics.js`, so the two can never disagree about what fits.

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
periods. Assembly stays free, and **captions are now free too** — the 0.05/voiced
block charge went with `explainer_video`, taking ~11.4 credits off the old
episode estimate. Voice takes are ~0.8 each (~91, paid once and reused), so clips
are essentially the entire bill and the model choice *is* the budget.

A **Draft pass matters far more here than on a trailer** — 114 blocks of wrong
pacing is unrecoverable. Draft the whole episode at 480p, watch it end to end,
then re-render only the clips at full tier, reusing every voice take.

**The 180-block (30 min) cap was `explainer_video`'s and is gone.**
`assemble_final.sh` declares no block limit. What replaces it is a *runtime*
limit rather than a count: the sandbox is ephemeral, foreground calls cap at
120s, and a background job dies with the sandbox if it is not polled at least
every 60s. A 120-block episode means ~240 files to download before assembly even
starts, inside one chained command.

**This is the least-proven part of the new path.** Trailer-scale assembly is six
pairs in one call; episode-scale is not, and nothing has been run through it. Do
not plan a longform render against an assumed ceiling — assemble one act first
and measure how long it actually takes.

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

Longform has characters speaking (dialogue as blockquotes), but the manifest
carries **exactly one voice file per block**. So:

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
[§3](#speech_rate-is-not-a-duration-lever--do-not-reach-for-it), which holds the
measurement. Word count and sentence structure are the only controls, on dialogue
as on narration. (An earlier version of this section suggested 60–65 for
character dialogue. It was wrong.)

Arthur, Xavier and Vesper are measured (§3 table). **Zane is measured only on a
short line and must be re-measured at length before ~110 takes are committed to
him** — one unmeasured voice across a 19-minute episode is the most expensive
version of the take-length mistake. Character lines are also structurally short
against a 10s block — and **the deliberate short take is no longer available** as
the second way out, because the assembler hard-rejects anything under 8.6s. Apply
§3's remaining options **per line**: write the character a real ~40-word
paragraph, fold the beat into a neighbouring block, or cut it. On an episode with
~110 blocks of dialogue this is a scripting constraint, not a per-line
adjustment — it wants deciding before the takes are generated, not after.

### ON-SCREEN TEXT — the one exception to text-free clips

The trailer rule is that clips carry no text and captions come from the sidecar.
That breaks here: `assemble_final.sh` has **no text-overlay parameter** either,
and the sidecar is built from the narration table — so a classical quotation card
with no narration over it will produce no text at all.

**The card block still needs a voice take**, and now it must clear 8.6s like any
other: a silent quotation card fails the narration-per-window assert
(`blocks [..] have NO narration in their windows`). Narrate the quotation over its
own card.

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
3. Assemble the act as its own `assemble_final.sh` run to check pacing early,
   exporting each act's MP4 out of the sandbox before the call returns.

**The join is now the open problem.** `explainer_video` accepted video job IDs, so
act outputs fed straight back in as inputs. `assemble_final.sh` does not work that
way — it takes clip/voice *pairs* against a declared block count and asserts a
`N × 10s` output, so an assembled 40-block act is not a valid input to it. Joining
acts means a plain `ffmpeg concat` of the act MP4s, which is exactly the
hand-rolled ffmpeg the workflow's own rules forbid inside its pipeline.

Two routes, neither yet run here:

- **Assemble the whole episode in one call** and skip the join entirely. Removes
  the problem, but it is the ~240-file download discussed above.
- **Concat the act outputs** with our own ffmpeg, outside the sandbox's rules.
  Defensible — the acts are already assembled correctly and a concat of equal-
  geometry MP4s is a lossless remux — but it puts the −16 LUFS normalisation per
  act rather than across the episode. Check levels at the seams.

**Decide this before generating an episode's worth of takes**, not at the join.

**Captioning is simpler than it was.** The old double-layering rule — act
assemblies uncaptioned, captions only at the final join — existed because burned-in
captions are pixels and would stack. Nothing is burned at assembly now, so act
assemblies carry no captions by construction and there is no layering to avoid.
Burn the sidecar once, over the finished episode.

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
- **The CDN may be blocked too.** It has been blocked on every cut for a long time
  (`CONNECT tunnel failed, 403`), so assume the final MP4 cannot be fetched back
  to *this host* for visual QA. When that happens, **say so explicitly in the
  document** and verify at the job-metadata level instead — all clips at the
  expected dimensions, every take inside its window, assembly completed — then
  record the CDN URL for manual download. Those links expire.
- **The sandbox is not behind that egress policy, and this is newly useful.**
  `sandbox_exec` has its own internet access and its own ffmpeg — it has to, since
  it downloads every clip and take to assemble them. So a check that was
  impossible from the repo host can now run next to the file, in the same call
  that assembles it: `ffprobe` the output, extract frames, sample the caption
  margin columns for background luma. **This does not mean anyone watched it.**
  The honest line in the production record is still *assembled and probed, not
  visually verified* — automated checks catch a substituted font or an overflowing
  margin, not whether the cut reads well.
- **ffmpeg and Anton are installed by a hook, not baked into the image.** The
  container is ephemeral and rebuilt from the repo each session, so
  `.claude/hooks/session-start.sh` reinstalls both at session start — see
  [Subtitles](#subtitles) for why the font matters as much as the binary. Two
  consequences: the Ubuntu archives are reachable but the **deadsnakes** and
  **ondrej/php** PPAs are 403 under the egress policy, so `apt-get update` always
  prints two warnings that are unrelated to this pipeline; and if the hook is
  ever removed, the burn step still *runs* and still produces a file — just in
  the wrong font.
- **The hook is synchronous**, so the session does not start until both tools are
  in place — a cold container pays about a minute of startup for that, and a warm
  one pays nothing and reports `ffmpeg and Anton already present`. It still costs
  nothing to run `ffmpeg -version` and `fc-match Anton` **before burning rather
  than after**, and it is the only check that catches a hook that was removed,
  edited, or cut short. The hook installs the font before the binary on purpose:
  an interrupted run then leaves the state that fails loudly with
  `ffmpeg: not found` rather than the one that quietly burns in a substituted
  font. Do not reorder it.

### What lands in git

Set by `.gitignore`, which postdates most of this pipeline's runs:

- **Renders are gitignored** (`renders/`, `*.mp4`, audio). Download them to
  `output/episode-<N>/renders/`; never commit the binary, never `git add -f` it.
- **Subtitle sidecars (`.srt`/`.vtt`) are tracked** and deliberately exempted
  from `.gitignore` — see [Subtitles](#subtitles) for how they are built and why
  burned-in captions do not satisfy the requirement.

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
