# The Emperor's Inner Canon — Chapter 1 Trailer v5 (70 seconds)

**上古天真論篇第一 · The Editor**

**Finished draft (496×864, 70.058s, MP4) — `renders/inner-canon-ch1-trailer-v5-final.mp4`**
Captions burned, history lower-third and end disclaimer card in place, music
outstanding. Built 2026-08-05; see *Captions and on-screen text* below. Not
committed — `renders/` and `*.mp4` are gitignored.

**Bare assembler output, uncaptioned (496×864, 70.059s, MP4):**
https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/04e722b9-616f-4273-b037-54b15cf0fde6.mp4

**No captions on that file by design** — the assembler has no subtitle option, so
captions are a separate step from the tracked sidecar. Do not upload it
uncaptioned. **Download it**: the CDN link expires and the repo host cannot fetch
it back.

**496×864 is not exactly 9:16** (0.5741 against 0.5625) — the assembler rescaled
the 480×854 clips rather than passing their geometry through. Recorded here
because every downstream caption and overlay value derives from it.

First cut in the repo assembled end-to-end on `assemble_final.sh`. Decode-validated
by the script, narration confirmed present in all 7 windows.

Companion teaser to `inner-canon-ch1-longform-v3.md`, previewing its Act II.
Source translation: `inner-canon-ch1-translation-v4.md`.

**Fifth Chapter 1 trailer; no thesis is repeated.** v1 and v2 sell *the opening
sentence is hearsay*; v3 sells *the canon contains a schedule for your body*; v4
sells *the canon blames you*; **v5 sells *the canon was edited*** — that the
version the world reads was arranged by one man in 762 CE. It is the only cut in
the folder about the text as an object rather than as an argument, and it is the
most surprising fact in the whole Chapter 1 cluster.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block. The speaker sits in the beat column, because
`build_subtitles.js` parses the narration table as exactly three columns.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Chinese medicine has a founding text, and it is about two thousand years old. But the version the whole world reads came from one man, working in the eighth century, eight hundred years after the material he was editing. |
| 2 | Arthur (V.O.) — the editor | His name was Wang Bing. In seven sixty-two he found the canon in disarray, chapters out of order and passages repeated, so he reorganised it, wrote a commentary, and supplied what he judged lost. |
| 3 | Fan-di (Xavier) — the outrage | He added things. To the founding text of medicine. And everyone simply kept them. If a clerk did that to my records, he would be out of the palace by noon. And this man gets his name on the front. |
| 4 | Dr-Qi (Vesper) — the correction | He was not a forger, and that distinction matters. He marked his additions in a different coloured ink, so that any careful reader could tell them apart. Did every later copyist keep that marking? Not reliably at all. |
| 5 | Arthur (V.O.) — why it survived | Nothing mysterious kept it alive. The state paid scholars to fix its wording, printing turned one edition into thousands, and every doctor who wanted to practise had to know it by heart. |
| 6 | Arthur (V.O.) — the withhold / title | A claim need not be true to be preserved. It only has to be useful. So what actually deserved to last? The Emperor's Inner Canon. Chapter One — The Sentence That Survived. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we say plainly where the evidence does not support it. |

Cast: Arthur, Xavier, Vesper — `seed_audio` presets at `speech_rate` 55.

### Sized to the new speech window, and one casting consequence

The assembler now gates on **8.6–10.0s of detected speech per block**, both ends
hard errors. Every line above is written to that, not to the old 6–8s budget:

| Voice | Block | Words | Target |
|---|---|---|---|
| Arthur | 1, 2, 5, 6, 7 | 34, 35, 33, 36, 32 | 32–37 |
| Xavier | 3 | 40 | 39–45 |
| Vesper | 4 | 40 | 38–44 |

Every line also passes `check_caption_fit.js` — but note that the doubled word
counts made that harder, not easier. A first pass at these lengths produced nine
clauses needing three or four caption cues each; they were broken with internal
punctuation at script stage, which is free, rather than after recording, which is
not. **Expect that trade on every cut written to the new window.**

**Lei-Gong does not speak in this cut, and that is a consequence of the window,
not a creative preference.** Zane has never been measured at length, and under a
hard 8.6s floor an unmeasured voice is a render failure rather than a rounding
error. His previous appearances in this folder were all 2–3 second interjections —
which the new floor makes impossible. He appears on screen; giving him a line
means measuring him first, and this cut does not need to be the one that does it.

**The disclaimer block is padded, deliberately.** The mandated string is 11 words,
roughly 2.9s — far under the floor, so a card block carrying only the disclaimer
**cannot assemble**. Block 7 keeps the mandated sentence verbatim at the head and
extends it to 35 words with series framing. This applies to every cut in the repo.

**Expect these counts to overshoot.** They are the old measured rates multiplied
into the new window, and the skill flags two reasons they run long — the rates may
be file-duration rather than speech-duration, and `seed_audio` is bimodal across
runs. **Measure block 4 first**: Vesper at 44 words is the most exposed line here.

## Shot list

1. **The hook** — extreme close, a hand copying characters column by column on
   silk, poor light, never a face. Slow push in. *History lower-third here.*
2. **The editor** — one lamp, one desk, piles of visibly mismatched scrolls of
   different sizes and ages. Still no face.
3. **The outrage** — Fan-di at the low lacquer table, gold robe, **fan snapped
   open**, genuinely affronted. Warm light.
4. **The correction** — Dr-Qi, blue cheongsam, open scroll held like a tablet,
   completely still. Beside her, two text columns, one visibly annotated.
5. **Why it survived** — no people. Woodblocks, ink, sheets coming off a press in
   quantity; then identical books stacked and distributed. The cut's only fast
   sequence.
6. **The withhold / title** — one scroll splitting into a dozen scrolls of visibly
   different ages, fanning back into depth. Resolves to the series title card.
   Hard cut to black on the last syllable.
7. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added.

**No faces in shots 1, 2, 5, 6 or 7.** The scribe is deliberately anonymous
throughout — it is the episode's visual thesis as much as a safety choice.

## Production record (Higgsfield)

**Status: draft rendered and assembled 2026-08-04.**

### Preflight

Not yet run. Call `balance` and `get_cost` live before generating; last measured
balance **862.6**, and the v3 run came in at **75.6** against a ~74 estimate.

| Item | Draft 480p | Full 720p |
|---|---|---|
| 7 clips (`seedance_2_0_mini`, 10s, 9:16) | 70 | 175 |
| Style key | 0 — reuses `4b6f7106-67da-4d1a-a553-c58ba90ac43f` | — |
| 7 voice takes @ ~0.8 | ~5.6 | reused |
| Captions | 0 — sidecar, never burned at assembly | 0 |
| **Total** | **~76** | **~175** |

Budget extra for re-takes: the word counts are unvalidated against the new window
and the assembler rejects both over and under, so a first pass is calibration.

### Step-0 gate — run 2026-08-04

`balance` **862.6**; `get_cost` on `seedance_2_0_mini` 10s / 9:16 / 480p:
**10 credits/clip**. Draft tier confirmed by the user.

### Style key

Reused from v1: `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (`nano_banana_pro`,
768×1376). Not regenerated; no new lineage entry.

### Clips — all 7 complete

`seedance_2_0_mini`, **Draft 480p**, 10s, 9:16 **480×854**, `generate_audio: false`:
block 1 `ccfcbd03-e683-4b72-b2c4-0ec2ca216167`, block 2
`d8a16215-03e5-4130-9e71-7fe52e933e7a`, block 3
`6099bebf-6779-426c-8b12-fb8ab3568fef`, block 4
`c9754489-108a-4041-b04b-d18afe2ae019`, block 5
`7efc3726-606b-4001-aad0-a7a2d9b3ad93`, block 6
`ccdae7cb-c6f3-4774-954d-a4b0f3fd75bb`, block 7
`ff4c21f6-2611-4326-960f-b2bb14504a0d`.

All returned 480×854 first pass. Block 1 generated alone and checked before the
other six. `IN THE DARK` pre-declined; **no preset swap offered on any of the
seven** — third cut running with that result on this model.

### Voiceover — all 7 clear the gate

Measured against the assembler's own gate (`silencedetect=noise=-45dB:d=0.25`,
speech must land in **8.6–10.0s**), by running `assemble_final.sh` against each
take in the sandbox rather than trusting a rate table:

| Block | Voice | Job ID | Speech | |
|---|---|---|---|---|
| 1 | Arthur | `24af6fd9-1d98-4d18-868e-b244f44db5ed` | 9.97s | pass |
| 2 | Arthur | `16de0a17-4339-44fd-be3f-e3ebf26f0933` | 8.81s | pass |
| 3 | Xavier | `8128f157-087b-49d6-8c08-7e6e55edf286` | 9.64s | pass |
| 4 | Vesper | `e797fe8b-800a-4fb6-8998-54dc25c04dba` | 9.06s | pass |
| 5 | Arthur | `d77fdc18-b543-4541-b914-722a781f6a58` | 8.66s | pass |
| 6 | Arthur | `0598c260-46eb-45cc-bdac-50aa5edb9b37` | 9.09s | pass |
| 7 | Arthur | `0fd0254f-dff9-4967-94f4-db6cc7281d07` | 9.45s | pass |

### Assembly — complete

`sandbox_exec` → `assemble_final.sh`, 7 blocks, `--manifest pairs.txt`. Output
**496×864, 70.059s**, decode-validated by the script, *"narration present in all
7 windows"*. Exported via `media_upload` → `curl PUT` → `media_confirm` in the same
chained command, media_id `04e722b9-616f-4273-b037-54b15cf0fde6`.

**This is the repo's first end-to-end run on the new assembler.** Four things the
first run established, none of which were in the skill:

- **Output geometry is 496×864, not the clips' 480×854.** ~~The assembler pads to
  even/safe dimensions~~ — **corrected 2026-08-05 by measurement: it *rescales*,
  it does not pad.** Edge-strip luma sampled at t=30s and t=42s returns real
  picture at every border (cols 0–8: 196.28 / 128.21; rows 0–5: 192.24 / 192.76),
  matching the adjacent interior strip within ~1–2 units. There are no black bars
  to crop. The practical consequence is the aspect drift: 480×854 is 0.5620
  (essentially 9:16), 496×864 is 0.5741, so **the delivered file is ~2% wider than
  9:16** and forcing it to 720×1280 stretches vertically by 2.1%. Build the
  sidecar and any burn against **496×864**, not the clip size and not 720×1280.
- **`background: true` lost the whole run.** The transport call timed out and the
  sandbox was reclaimed with nothing on disk. The 7-block assembly finishes inside
  the 120s foreground budget, so run it foreground; reserve background for longform.
- **The gate reports every block before failing**, so one run diagnoses the whole
  manifest — but it stops at the *first* bad take, so a cut with several failures
  needs several runs to enumerate them.
- **The gate is on file duration here.** For every take the script reported
  `file == speech` with zero lead silence, so `seed_audio` output has no padding to
  trim and file length is the number to design against.

- **Voiceover** (`seed_audio`, presets **Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346`, **Xavier** `43173c95-3ec8-446a-a162-6504332c578b`, **Vesper** `c3204739-4084-41a3-9dc5-c805b307ec18`, speech_rate 55): block 1 `24af6fd9-1d98-4d18-868e-b244f44db5ed` (9.97s), block 2 `16de0a17-4339-44fd-be3f-e3ebf26f0933` (8.81s), block 3 `8128f157-087b-49d6-8c08-7e6e55edf286` (9.64s), block 4 `e797fe8b-800a-4fb6-8998-54dc25c04dba` (9.06s), block 5 `d77fdc18-b543-4541-b914-722a781f6a58` (8.66s), block 6 `0598c260-46eb-45cc-bdac-50aa5edb9b37` (9.09s), block 7 `0fd0254f-dff9-4967-94f4-db6cc7281d07` (9.45s).

*(Single-line form above is what `build_subtitles.js` parses; the table is for reading.)*

### Block 5 took fourteen takes — and what actually explains it

Block 5 was the whole cost of this run. Fourteen Arthur takes, `speech_rate` 55,
24 to 37 words. Twelve missed the 8.6–10.0s window:

| Attempt | Words | Speech | |
|---|---|---|---|
| 1–3 | 37, 31, 26 | 11.48, 10.69, 10.23s | over |
| 4–5 | 24, 26 *(re-roll, identical text)* | 7.05, 7.79s | under |
| 6–8 | 27, 26, 26 | 11.17, 7.65, 8.34s | over, under, under |
| 9–10 | 28, 27 | 11.66, 10.68s | over |
| 11–12 | 37, 35 — **rewritten as flowing prose** | 11.98, **17.64s** | over |
| 13 | 32 — **"Song" removed** | **8.66s** | **pass** |
| 14 | 30 — "Song" removed, four sentences | 7.79s | under |

Three findings, in increasing order of usefulness:

- **Word count does not control duration.** The same 26-word text returned 10.23s
  and 7.79s on consecutive generations — 2.4s apart, input identical.
- **The "three declaratives" theory was wrong.** Attempts 11–12 recast the block as
  connected prose, on the theory that three parallel short sentences drove the
  extremes. They produced the two *longest* takes of the fourteen, including 17.64s
  from a 35-word line. Recorded because it was plausible and it failed.
- **Removing the word "Song" coincided with the only two in-range results** — 8.66s
  and 7.79s, the tightest pair in the set and the only pass. **One trial, not a
  controlled test**, and with a 2.4s spread on identical text it may be
  coincidence. But a proper-noun homograph (*Song* the dynasty vs. *song*) is a
  plausible prosody trap and is cheap to test on the next cut. **A lead, not a
  rule** — and note the cost: block 5 now says *"the state"* rather than *"the Song
  state"*, which is vaguer history than the longform gives.

For the longform: at 108 blocks this gate is the dominant risk. Block 5 alone burned
~11 credits. Budget re-takes explicitly and measure with `assemble_final.sh`, not a
rate table.

### Captions and on-screen text — burned 2026-08-05, at native 496×864

**Draft finishing pass. Burned locally on the repo host, not in the sandbox** —
the MP4 was committed to `claude/main` through the GitHub web UI (which bypasses
`.gitignore`), so it arrived with the clone and neither the CDN nor
`sandbox_exec` was needed. ffmpeg 6.1.1, Anton resolved via `fc-match`.

**Burned at the cut's own 496×864, deliberately.** No upscale to 720×1280 and no
crop: the geometry finding above says there is nothing to crop, and scaling a
480p draft up would have cost a 2.1% vertical stretch for no draft-stage benefit.
The user's call, to see the whole thing assembled before committing to the full
tier.

**The house caption style is defined at 720×1280, so every value was scaled** —
by 864/1280 = 0.675 vertically, 496/720 = 0.689 horizontally. Do not burn the
`build_subtitles.js` style verbatim onto a smaller frame: libass reads these in
PlayRes space, so unscaled values render ~1.45× oversized and overflow.

| Style value | House (720×1280) | This burn (496×864) |
|---|---|---|
| `PlayResX/Y` | 720 / 1280 | **496 / 864** |
| `Fontsize` | 54 | **36** |
| `MarginL` / `MarginR` | 58 | **40** |
| `MarginV` | 150 | **101** |
| `Outline` / `Shadow` | 3 / 1 | **2 / 1** |

Usable line width becomes 416px and the sidecar's widest line scales to 369px, so
the pre-wrap holds with room to spare. **Captions cover blocks 1–6 only** — cues
1–32 of 37, ending 00:00:59.545. Cues 33–37 (block 7) were stripped on a copy so
the disclaimer is not simultaneously a caption and a card.

On-screen text was added in the same ffmpeg pass rather than in an NLE, via
`drawtext` with one filter per line (ffmpeg 6.1 has no `text_align`, so
multi-line text cannot be centre-justified in a single call):

| Element | Text | Size | y | In / out |
|---|---|---|---|---|
| History lower-third | *Presented as history & philosophy* | 20 | 594 | 0:01 → 0:08 |
| Disclaimer, line 1 | *A dramatized adaptation of a* | 28 | 330 | 1:00 → 1:10 |
| Disclaimer, line 2 | *classical philosophical text.* | 28 | 370 | 1:00 → 1:10 |
| Disclaimer, line 3 | *Not medical advice.* | 28 | 410 | 1:00 → 1:10 |
| Editorial credit | *Written & edited by Joshua Chin* | 20 | 530 | 1:00 → 1:10 |

Output `inner-canon-ch1-trailer-v5-final.mp4`, 496×864, 70.058s, H.264 CRF 20 /
preset medium / yuv420p / `+faststart`, audio stream copied untouched. 14.8 MB.
Burn wall time 13s. Clean decode validation.

**Visually verified — frames were actually read, not merely probed.** Extracted
and inspected at t=3s (lower-third + block 1 caption), 25s (Fan-di, block 3), 45s
(block 5), 57s (title, block 6), 65s (end card), plus the y=540–660 band at 3s vs
12s to confirm the lower-third clears. Every caption wraps to two lines inside the
margins; nothing renders off frame; Anton is the face on screen, not a
substitution. **Nobody has watched the cut end to end** — this is frame
inspection, which catches geometry and font substitution but not pacing.

**One finding worth carrying to the full render.** White captions with a
proportionally-thin outline sit on **light cream backgrounds** in blocks 5 and 6
(the printing sequence and the fanning-scrolls title shot). They are legible but
the contrast is marginal, and this is **not an artefact of the downscale** — the
house `Outline=3` at 720×1280 is proportionally identical to the `Outline=2` used
here, so the 720p render will look the same. If it bothers you on playback, the
fix belongs in `build_subtitles.js`'s style rather than in this cut: either raise
`Outline`, or switch those blocks to `BorderStyle=3` (opaque box).

**Still outstanding: music.** Not added. The licensed guqin bed is yours to supply
and this pipeline generates none — and note that the assembler's `--music` flag
cannot deliver step 6 as written either, because it mixes one continuous bed with
no dropout window and step 6 calls for the bed to drop across block 5.

### Credit spend

| Item | Credits |
|---|---|
| Style key | 0 — reused |
| 7 clips, Draft 480p | 70 |
| Voice takes — 6 kept, ~13 spent incl. calibration and block 5 | ~10 |
| **Total this run** | **~80** |

Roughly 8 of that is block 5 alone. Balance before the run: **862.6**.

### Superseded takes

**A correction to an earlier figure in this document.** Block 4's 8.497s take was
logged as "8.50s pass". It is not a pass — it is 0.1s *under* the floor, and the
assembler rejected it on the first assembly attempt. Rounding to two significant
figures hid a hard failure, so durations here are kept to 3 d.p.

Kept as evidence for the next cut: block 1 `95471562-e582-4651-9ca4-4e6ad04038bc`
(8.24s, under), block 2 `2edcfa9e-3f54-4ebc-807a-997f67206f89` (13.26s, over),
block 4 `1e161c05-cef5-4b86-b5d8-374769ab0e74` (13.23s, over),
`30bc27a1-6edf-4aa8-9722-fdce5735d587` (7.73s, under),
`54c370ef-4e65-4df3-985f-0689c33df2ea` (7.23s, under), block 6
`97f4cb99-3c3f-489d-9b79-82046c37ecee` (13.97s, over), block 7
`29a70d1d-0589-4086-a6a3-b500ab273e50` (12.28s, over). Block 5's ten are listed
above; the closest is `421e8693-8a09-4913-895a-18bc783077cd` at 8.34s.

### Superseded — the original planning figures

**Pending.** Style key reuses `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (768×1376) as
`image_references` on every clip. Clips `seedance_2_0_mini` at the confirmed tier,
10s, `aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" in every
prompt — the double declaration has held on this model across two cuts.
Pre-decline `IN THE DARK` (`24bae836-2c4a-48e0-89b6-49fcc0b21612`).

**`generate_audio: false` on every clip is a correctness requirement now**, not a
cost saving: the new assembler mixes clip audio in at 0.12 rather than discarding
it.

**Assembly** is `sandbox_exec` → `assemble_final.sh`. **No cut has been run
end-to-end on this path yet** — treat the first as a shakedown, not a render.

### Reproduction notes

- **Measure before committing.** Every word count here is arithmetic against an
  unvalidated window. Run one take per voice through `speech_metrics.sh` and
  correct the table before generating the rest.
- **Zane is still unmeasured at length.** He is deliberately silent in this cut;
  longform v3 gives him two full blocks and cannot ship without measuring him.
- **The sidecar builds after the voiceover.** `check_caption_fit.js` runs now, on
  the narration table.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, within the
  first 10 seconds. Shot 1.
- **End disclaimer card** — mandated string verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix it but never generate it.

### Finishing steps

**Steps 1–5 ran 2026-08-05** against the draft; see *Captions and on-screen text*
in the production record for the measured result. Step 6 is outstanding. Both
caption scripts are pure text tools — they read this document, touch no video,
need no network and cost no credits, so they run anywhere the repo is checked out
with Node. **Both take a path relative to the current directory: run them from the
repo root, or pass an absolute path.**

**1. Check captions.** ✅ ran

```
node scripts/check_caption_fit.js output/episode-1/inner-canon-ch1-trailer-v5.md
```

**Exit 1 is the designed signal, not a crash.** Block 7's first clause is reported
as a known exception — the mandated string, not to be reworded. **Three further
clauses genuinely overflow**, and an earlier version of this section wrongly
implied the known exception was the only report: block 1 *"But the version the
whole world reads came from one man,"* (1187px), block 5 *"and every doctor who
wanted to practise had to know it by heart."* (1318px), block 7 *"and we say
plainly where the evidence does not support it."* (1204px), against a 1111px
two-line budget. With the server-burn path gone these are **readability, not
render failures** — the sidecar splits each across cues and libass margins keep
them in frame, which the burned draft confirms. Fixing them costs a re-take plus a
re-assembly per block, so it is a full-render decision, not a draft one.

**2. Build the sidecar.** ✅ ran — 7 blocks, 37 cues, widest line 554px against
556px usable.

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v5.md
```

Output is byte-identical to the tracked `.srt`/`.vtt`, so the committed sidecars
are current. On a **copy** of the `.srt`, delete the cues covering **block 7**
(cues 33–37, from `00:01:00,275`) so the disclaimer is not both a caption and a
card. The burn copy is cues 1–32, ending `00:00:59,545`.

**3. Burn.** ✅ ran, at native **496×864**. ~~Add `scale=720:1280,` as the first
filter if burning onto a 480p draft.~~ **Do not** — the delivered file is 496×864,
which is not 9:16, so that scale introduces a 2.1% vertical stretch. Burn native
and scale the style instead; the table in *Captions and on-screen text* has the
five values. There is nothing to crop — the assembler rescales rather than pads.
Re-target the `.ass` `PlayRes` to **496×864**, not 720×1280, before burning.
`ffmpeg -version` and `fc-match Anton` before you start: the session-start hook
installs both, and a missing Anton substitutes silently while the sidecar still
reports "fits."

**4. History lower-third** ✅ — *"Presented as history & philosophy"*, in at 0:01,
out at 0:08, **y=594 at 496×864** (the y≈880 of the 720×1280 design, scaled).
Added by `drawtext` in the burn pass, not in an NLE.

**5. End card — 1:00 to 1:10** ✅ (block 7; written "60:00 to 70:00" in an earlier
version, which reads as minutes). Mandated disclaimer verbatim across three
centred lines at y=330/370/410, editorial credit at y=530. Both also go in the
description at upload.

**6. Music.** ⬜ outstanding. Guqin, licensed, ducked ~12–15 dB under the
voiceover. **Out across block 5** — the printing sequence is the cut's only fast
passage and plays better dry. Out at the block 6 cut to black at 1:00. **This
cannot be moved to the assembler's `--music` flag**: `--music-vol` clamps at 0.20
(≈ −14 dB, which does land in the target range), but it mixes one continuous bed
with no dropout window, so the block-5 gap requires a hand mix either way.

## Compliance notes (YouTube)

**The lowest-risk trailer in this folder.** Its subject is textual transmission,
so the chapter's hazardous material is simply absent.

- **Disclaimer** — repo string verbatim, blockquoted above and at the head of block
  7's narration, on screen as the end card, and in the description. The spoken
  block is extended past the mandated string to clear the 8.6s floor; the mandated
  sentence itself is unaltered.
- **Mortality / ageing** — **absent.** No lifespan claim is made in this cut at all.
- **Fertility content** — **absent.**
- **Indulgence / alcohol** — **absent.**
- **Health content** — no dosage, regimen, diagnosis or benefit claim. The cut makes
  no health claim of any kind; every statement is about a book.
- **Supernatural hook, explicitly debunked** — no supernatural claim is made, and
  the cut's argument is actively deflationary: block 5 attributes the canon's
  survival to state funding, printing and professional licensing rather than to
  transmission of secret knowledge. The debunk is the content.
- **Historical accuracy — the main risk here, and it is a factual one.** The Wang
  Bing material must not overstate. Block 2 says he *supplied what he judged was
  lost*, and block 4 says *not reliably* — both deliberately hedged, because the
  extent of his additions is genuinely unsettled scholarship. **Those hedges must
  survive the edit.** A trailer about people overstating a text cannot itself
  overstate its history.
- **Hedge allocation** — two characters speak. Fan-di carries the outrage, Dr-Qi
  the correction that qualifies it, so the accusation is narrowed inside the cut.
  **Arthur retains every load-bearing claim**: the framing (1), the historical
  account (2), the deflationary explanation (5), and the payoff and title (6). No
  compliance hedge rests on a character voice.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — outstanding.** No clip prompts exist yet. The shot list is
  low-risk throughout: hands, desks, presses, ink, two seated figures.
- **Banned terms** — no *longevity*, *live to 100*, *ancient secret* or *anti-aging*.
  **Thumbnail direction:** a hand copying a column of characters, no face, with one
  column visibly annotated in a second colour. It reads as *this book was edited*,
  which is the actual claim.

## Runtime levers

**Cut to 0:50** — drop blocks 1 and 5. Runs 2 → 3 → 4 → 6 → 7. Opens directly on
Wang Bing, which is abrupt but puts the surprise at 0:00 and Fan-di's outrage at
0:10. Costs the deflationary explanation, which is the cut's best content —
acceptable only where runtime is fixed externally.

**Cut to 0:40** — blocks 2 → 3 → 4 → 7. Keeps the claim and its correction
together, which is the pairing that must not be split.

**Stretch to 1:30** — add two blocks after 5: Arthur on the eleventh-century
revision bureau, and Dr-Qi on hedges being the first thing a copy loses. Both are
longform v3 material and need no new voices — and specifically **do not** add a
Lei-Gong block to stretch, without measuring Zane first.

**Blocks 3 and 4 are a pair.** Shipping the outrage without the correction would
leave a factual overstatement standing. **Block 7 is not a lever.**
