# The Emperor's Inner Canon — Chapter 28 Trailer v2 (80 seconds)

**口問篇第二十八 · Twelve Small Rebellions**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical**,
`seedance_2_0_mini`, 8 blocks × 10s = **80.0s**, MP4.

**Record the actual returned resolution here on render, not the target.** The ch1
v5 run returned **496×864** from 480×854 clips — the assembler *rescales* rather
than passing clip geometry through, and 496×864 is not exactly 9:16 (0.5741
against 0.5625). Every caption and overlay value downstream derives from whatever
this cut actually returns.

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
(通評虛實論). Both halves of the canon run to eighty-one chapters and are numbered
separately, so a bare "Chapter 28" is ambiguous by construction — see the
numbering warning in `inner-canon-ch28-translation-v2.md`.

Source translation: **`inner-canon-ch28-translation-v2.md`** — the v2 rendering,
which tracks the grammatical agent of every answer. That is this cut's whole hook.
Companion longform: `inner-canon-ch28-longform-v2.md`, whose cold open and Act III
turn this previews.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## This is the second trailer on this chapter, and no thesis is repeated

`inner-canon-ch28-trailer-v1.md` is **not superseded**. Both remain; the editor
picks. The Chapter 1 folder already works this way across five trailers.

| | Runtime | Sells |
|---|---|---|
| **v1** — *Clear the Room* | 70s, 7 blocks | an emperor sent the room away so nobody would hear him ask why he yawns |
| **v2** — *Twelve Small Rebellions* | 80s, 8 blocks | twelve things a body does that nobody ordered, and a chapter that cannot decide whether you are governed |

Every narration line here is newly written, and the two cuts share no shot. v1
opens on animal mouths; v2 opens on an empty floor beneath a high seat.

## Narration (per 10s block)

One speaker per block. The speaker sits in the beat column, because
`build_subtitles.js` parses the narration table as exactly three columns and a
fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Right now, without asking you, your body is doing about a dozen things. Two thousand years ago, somebody wrote them all down, twelve of them, and asked a physician, who exactly was responsible. |
| 2 | Fan-di (Xavier) — the charge | Let the record show that this is an inquiry, and not a consultation. Twelve counts of insubordination, committed inside my own person, daily, for as long as I can remember. Somebody in here is answerable for it. |
| 3 | Arthur (V.O.) — the twelve | The yawn. The hiccup. The sneeze. The sob you cannot stop, the ear that rings, the tongue you bite by accident. Twelve things a body does, and nobody ever ordered any of them. |
| 4 | Dr-Qi (Vesper) — no defendant | Then your inquiry has a difficulty in it. You have twelve offences and no offender at all. Qi moves out at dawn, and in at midnight, the way water goes downhill, and it is obeying nobody whatsoever. |
| 5 | Arthur (V.O.) — ten of twelve | That answer holds for ten of the twelve. Ten acts with no author anywhere in them. Then the chapter reaches the eleventh, and does something it has not done once, in ten straight answers. |
| 6 | Dr-Qi (Vesper) — the ruler | The heart is the ruler of the five zang and the six fu. Grief moves it, and every organ shakes, and the tears come out. Suddenly there is somebody at the wheel, and it turns out to be you. |
| 7 | Arthur (V.O.) — the withhold / title | One book, two bodies. One of them an administration, where every act has an officer answerable for it, the other weather on a schedule. The Emperor's Inner Canon. Lingshu twenty-eight: Twelve Small Rebellions. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we mark plainly, in every episode, where the evidence does not support it. |

Cast: Arthur, Xavier, Vesper — `seed_audio` presets at `speech_rate` 55.

### Sized to the 8.6–10.0s speech window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors. Budgets are `SKILL.md` step 3, measured 2026-08-04 off the ch1 trailer v5
run — **not** copied from another cut's per-block column, including v1's:

| Voice | Blocks | Words | Budget |
|---|---|---|---|
| Arthur | 1, 3, 5, 7, 8 | 33, 33, 34, 33, 34 | 32–36 |
| Xavier (Fan-di) | 2 | 37 | 36–41 |
| Vesper (Dr-Qi) | 4, 6 | 37, 39 | 37–41 |

Counts are machine-generated from the parsed narration table, dropping tokens that
contain no letter or digit — a spaced em-dash is not a word, and counting it as one
spends a whole word of budget on a window 1.4s wide.

**These are arithmetic against measured rates, not measurements.** Treat the first
pass as calibration and budget re-takes: the rates are survivor-biased (Arthur's
*passing* takes give 3.65 w/s; across every recorded ch1 v5 attempt he averaged
3.04), and the run-to-run spread on identical text has been measured at 2.44s —
wider than the 1.4s window itself. Expect misses on **both** sides and re-roll once
before rewriting.

**Every line also passes `check_caption_fit.js` at 9:16.** Blocks 2 and 4 each
carry a comma-bounded aside placed for exactly that reason — the longer lines the
8.6s floor demands are precisely the lines that overflow a vertical caption, and
breaking them at script stage is free while a re-take is not.

**Vesper carries two blocks here, which is a deliberate departure from v1.** She
has the cut's two load-bearing lines — the answer with no agent (4) and the answer
that suddenly has one (6) — because the hook is the *contrast between them*, and
splitting it across two voices would lose it. **Measure block 6 first**: at 39
words it is the most exposed line in the cut, sitting two words under Vesper's
ceiling, and her one measured take is a single trailer beat rather than a sustained
explanatory paragraph.

**Lei-Gong does not speak in this cut.** Zane has never been measured at length,
and under a hard 8.6s floor an unmeasured voice is a render failure rather than a
rounding error. The longform gives him five blocks and the closing tally; this cut
deliberately does not spend the calibration on an 80-second teaser.

**Block 8 is padded, deliberately.** The mandated string is 11 words, roughly 2.9s
— far under the floor, so a card block carrying only the disclaimer **cannot
assemble**. The mandated sentence sits verbatim at the head and the block is
extended to 34 words with series framing. This applies to every cut in the repo.

## Shot list

Numbered to match the narration blocks. **Vertical 9:16 portrait framing**, flat
2D ink-wash house style, chained off the chapter style key. Text-free throughout —
captions come from the tracked sidecar, and the end card's text is hand-added at
edit time.

1. **The hook** — an empty audience floor seen from above, lit, symmetrical, with
   a high seat at the top of frame and nobody standing in the space below it. Slow
   push down toward the empty floor. *History lower-third here — it is required
   inside the first ten seconds.*
2. **The charge** — FAN-DI in the high seat, gold robe, glasses, **fan snapped
   open** and used like a gavel. Warm lamplight from below. He is enjoying the
   staging enormously.
3. **The twelve** — no people. Twelve small ink cartouches arriving one after
   another down the vertical frame, each empty. They fill the frame and then hold.
   The cut's only fast sequence.
4. **No defendant** — DR-QI, blue cheongsam, open bamboo scroll held casually like
   a tablet, completely still, standing beside the empty floor rather than in it.
   Behind her, a vertical ink diagram: a bright band circling a standing outline
   and sinking into a dark band at the base of the frame.
5. **Ten of twelve** — the twelve cartouches again, and ten of them dim out one by
   one, leaving two lit near the bottom of the frame.
6. **The ruler** — the diagram redraws. A single seated figure at the centre, a
   line rising from body to eye, and the whole composition suddenly organised
   around the centre rather than around the circuit. Dr-Qi has not moved.
7. **The withhold / title** — split composition, held: on one side a hall of
   ranked seats with a figure in each, on the other the same hall empty with only
   the circling band. Resolves to the series title card. Hard cut to black on the
   last syllable.
8. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added at
   edit time.

**No faces in shots 1, 3, 5, 7 or 8**, and shot 1 opens on an empty space rather
than a person — the strongest hook available and the safest opening the chapter
can have.

**Nobody is ever staged standing in the empty floor**, in this cut or the longform.
It is the visual joke — an inquiry with no defendant — and it is also the safety
margin, since a figure placed in a dock reads as restraint imagery, which has
tripped the safety filter here before on innocuous subject matter.

**Shot 3's cartouches are empty by design.** If the Chinese riddle characters are
wanted in them, they are **added at edit time**, not generated — see *Finishing
steps* 5.

## Source-script mapping

Sections are those of `inner-canon-ch28-translation-v2.md`.

| Translation § | Passage | Blocks |
|---|---|---|
| §2 | 人之欠者，何氣使然 — the agentless form of the question | 1, 3 |
| §2 | 衛氣晝日行於陽，夜半則行於陰 | 4 |
| §3–§8, §11–§13 | the nine other authorless riddles | 3, 5 |
| §9 | **心者，五藏六府之主也** — the ruler arrives | 6 |
| §9 | 悲哀愁憂則心動…故泣涕出焉 | 6 |
| §14 | 凡此十二邪者 — the count of twelve | 2, 3 |
| — | Su Wen 8, the body as a government of twelve offices | 7 |
| — | the modern reckoning; contagion | withheld — longform Acts IV–V |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam, never jade. The docs slate's working title for
this chapter is *Why We Yawn*; **Twelve Small Rebellions** is this cut's own title
and the one block 7 speaks.

**One count reconciliation, and it is a correction to the slate.** `docs/Chronicle
of Balance Top20 Chapter Slate.md` describes the chapter as *"eleven rapid-fire
questions"*. **The text says twelve** — 凡此十二邪者 — and §15 recapitulates twelve.
Blocks 2, 3, 4 and 5 all say twelve, and shot 3 shows twelve cartouches.

**Block 7's cross-chapter claim must be checked before it ships.** The
"administration where every act has an officer" is Su Wen 8 《靈蘭祕典論》, which is
this repo's own `output/episode-6/`, and the description is accurate to
`inner-canon-ch6-translation-v1.md`. **If it is ever named on screen, cite it as Su
Wen 8**, never as "chapter 6" — that folder follows an edition numbering it 篇第六,
while Su Wen 6 in the received recension is a different chapter (陰陽離合論). Block
7 as written does not name it, which is the safer option for a trailer.

**Dramatic material not in the source, flagged as invention:** the inquiry, the
charges, the hearing set and the high seat. **The classical text has no scene at
all** — 黃帝閒居, *the Yellow Emperor at leisure*, is the whole of the staging, and
the Emperor gives no reason for asking. What is *not* invented is the shape the
cut turns on: ten answers with no grammatical agent and two with one. That
distribution is a fact about the Chinese and is tabulated in the translation file.

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run.** The
figures below are a planning preflight, not a priced gate — call `balance` and
`get_cost: true` live before spending anything.

### Preflight

Last recorded balance: **862.6** (after the ch1 v5 run, 2026-08-04). The ch1 v3 run
is the repo's only measured delta: **75.6 credits** against a ~74 estimate, for 7
clips and 7 takes.

| Item | Draft 480p | Full 720p |
|---|---|---|
| 8 clips (`seedance_2_0_mini`, 10s, 9:16) | 80 | 200 |
| Style key — **new chapter motif, not a reuse** | 2 | — |
| 8 voice takes @ ~0.8 | ~6.4 | reused |
| Captions | 0 — sidecar, burned locally, never at assembly | 0 |
| **Total** | **~88** | **~200** |

**Ten credits more than v1 at draft tier**, for one extra block. If both trailers
are wanted, that is ~166 draft credits for the pair against a 862.6 balance —
affordable, unlike either longform.

**Budget re-takes on top.** On ch1 v5 a single block took fourteen takes and ~11
credits.

### Step-0 gate — outstanding

Not run. Nothing generates until `balance` has been called, `get_cost: true` has
priced one representative clip in the chosen configuration, and the user has
confirmed **model and Draft/Full**. `seedance_2_0_mini` at 480p is the house
default and makes this a confirmation rather than an open question — but it is
still a gate.

**Keep the draft pass.** This cut is doing two things the folder has not: an empty
symmetrical hall as a hero shot, and a diagram that must *reorganise* between
blocks 4 and 6 to carry the whole argument. Neither has been seen moving.

### Style key — new, and it needs generating

Chain from the current head rather than starting a new look:

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   ch1 (splitting scroll + seven-and-eight arcs)  ← current head
```

Pass that **job ID** as the reference and swap only the chapter motif.
`nano_banana_pro` (served by `nano_banana_2`), 9:16 768×1376.

**Motif for this cut:** the three-character series key arranged as a hearing — one
figure seated high, one standing to the side, one sitting on the floor with a
slate — and **twelve empty tally slots** on the wall behind them.

**This is a different motif from trailer v1's** (an open doorway and twelve unlit
lanterns). The motif is the cut's visual thesis, so if both v1 and v2 are ever
produced they need separate keys and both must be recorded.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails. Record the returned job ID here, and promote whichever key ships to
`SKILL.md` step 1 as the new head with its motif. **The longform needs a 16:9
sibling derived from this key** — generate the vertical one here first.

### Clips

Not generated. Model and tier from the step-0 gate. 10s, style key attached to
every clip, `aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" written
into every prompt text — the double declaration has held on this model across three
cuts, and a full set of clips has previously come back in the wrong orientation
without it.

- **`generate_audio: false` on every clip.** A correctness requirement, not a
  saving: `assemble_final.sh` mixes clip audio in at 0.12 **under** the voice rather
  than discarding it, so a clip generated with native audio is audible in the
  finished cut and the only fix is regenerating the block.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every
  clip. Blocks 2, 7 and 8 are lamplit or black. One id per call, so budget a retry
  for each newly triggered preset.
- **Do not write *gavel*, *court*, *trial* or *sentence* into any clip prompt.**
  The hearing is carried entirely by staging — a high seat, an empty floor, tally
  slots — and legal vocabulary risks a preset swap for no benefit. The gavel-like
  fan snap is a SOUND direction only.
- **Generate block 1 alone and check its returned dimensions** before the other
  seven.
- **Duration ≥ 9.5s and motion from frame 1.** The assembler rejects a clip under
  9.5s outright and warns on a static open or frozen tail. **Blocks 1, 4 and 8 are
  the exposed ones** — an empty room, a still physician and a plain plate all invite
  a frozen frame. Give each continuous motion: the push down toward the floor, the
  circulating diagram behind Dr-Qi, drifting ink grain on the plate.
- **Keep audio vocabulary out of clip prompts** — *drum*, *drone*, *music*,
  *rhythm* — since those are edit-time directions anyway and *rhythm* triggers
  `DROWN IN MUSIC`.

### Voiceover

Not generated. `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per
block, **one speaker per block** — verified: no block above contains two voices.

| Role | Preset | `voice_id` |
|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` |

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ, and the second is the one that was
gated. A ch1 v5 take logged as "8.50s pass" was 8.497s — 0.103s under the floor —
and stopped the assembly. A take within ~0.2s of either edge is checked against the
number, never eyeballed.

### Assembly

`sandbox_exec` → `assemble_final.sh`, 8 blocks, `--manifest pairs.txt`. There is
**no assembly job ID to record** — capture the flags, the manifest and the exported
`media_id` instead.

- **Run it foreground.** ch1 v5 lost a whole run to `background: true` when the
  transport call timed out and the sandbox was reclaimed with nothing on disk. An
  8-block assembly should finish inside the 120s foreground budget, but it is one
  block longer than anything measured — **watch the wall time and record it**, since
  it is the only data point the longform will have.
- **Download, assemble and export go in ONE chained command.** The sandbox is
  discarded ~10 seconds after the call returns: call `media_upload` first, append
  `curl -f -X PUT --upload-file` to the same command, and `media_confirm` only after
  HTTP 200.
- **No `--subs`** — passing it is a hard error. Captions are a separate step.
- **Name files `blockNN.mp4` / `voiceNN.wav`** and keep the numbers aligned; the
  script cross-checks each pair and calls a mismatch "the #1 cause of audio on the
  wrong block". Do not reach for `--allow-mismatch` to silence the assert.

### Captions

Sidecar only. **No `.srt`/`.vtt` ships with this document yet, by design** — the
cues are timed from take durations that do not exist. Build and commit them with
the render, and regenerate after any narration or take change.

```
node scripts/check_caption_fit.js output/episode-28/inner-canon-ch28-trailer-v2.md
node scripts/build_subtitles.js  output/episode-28/inner-canon-ch28-trailer-v2.md
```

9:16 is the hard case — roughly half the caption room of the longform frame — so
judge wrapping here, not on the landscape cut.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly. The step-0
  gate is outstanding and is a hard gate.
- **The style key is new**, and its motif differs from trailer v1's. Record its job
  ID here and promote it to `SKILL.md` step 1 if this is the cut that ships.
- **Zane is unmeasured at length** and is deliberately absent.
- **8 blocks is one more than anything this repo has assembled.** Record the
  assembly wall time; the longform's act-scale plan has no measurement to work from.
- **The CDN is normally blocked from the repo host.** The sandbox has its own
  network access and can probe the render next to where it was built — but **a probe
  is not a viewing**. Say which checks actually ran.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 8.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers — 8 blocks, 80.0s, block boundaries at every 10s, end card
**1:10 to 1:20**. Not a generic recipe: **trailer v1 of this chapter is 7 blocks
with a 1:00 end card**, and that is exactly where the mistakes land. Both caption
scripts are pure text tools — they read this document, touch no video, need no
network and cost no credits. **Both take a path relative to the current directory:
run them from the repo root, or pass an absolute path.**

**1. Check captions**, before generating takes. A fix is free at that point and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/episode-28/inner-canon-ch28-trailer-v2.md
```

**This document exits 0 as written — verified 2026-08-07.** It prints one report
and still passes: block 8's first clause is the mandated disclaimer, it genuinely
needs **three lines** at 9:16 (1187px against a 1111px two-line budget), and the
script routes it to `known` rather than `bad`. Only `bad` entries increment the
failure count, so **the exception is reported and the exit code stays 0**. It is a
compliance string and is never reworded.

If a future edit re-introduces a real overflow, **exit 1 is the designed signal,
not a crash** — with the server-burn path gone it is a *readability* finding rather
than a render failure, since the sidecar pre-splits wide clauses and libass margins
keep them in frame. Fix at script stage anyway.

**2. Build the sidecar**, after the takes exist and their durations are in the
record above.

```
node scripts/build_subtitles.js output/episode-28/inner-canon-ch28-trailer-v2.md
```

Commit the `.srt`/`.vtt` with the cut — they are tracked, required deliverables. On
a **copy** of the `.srt`, delete the cues covering **block 8** (everything from
`00:01:10`) so the disclaimer is not simultaneously a caption and a card. The burn
copy is blocks 1–7, ending at 1:10.

**3. Burn**, after assembly, on the finished MP4. Run `ffmpeg -version` and
`fc-match Anton` **before** starting — the session-start hook installs both, and a
missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and **re-target
`PlayResX/Y` to the cut's actual returned resolution first**: ffmpeg's SRT→ASS
converter hardcodes 384×288, which scales every style value by roughly 4.4× on a
720-tall frame and runs the lines off frame.

**If the assembler returns 496×864 as it did on ch1 v5, burn native and scale the
style** — do not add `scale=720:1280`, which introduces a 2.1% vertical stretch, and
do not crop, because the assembler rescales rather than pads. At 496×864 the scaled
values were `Fontsize` 36, `MarginL/R` 40, `MarginV` 101, `Outline/Shadow` 2/1.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:01, out
at 0:08, over block 1's empty floor. At 720×1280 the design y is ≈880; scale it to
the returned frame (y=594 at 496×864). Sits clear above the caption band. Added by
`drawtext` in the burn pass, not in an NLE.

**5. Block 3's twelve cartouches**, if rendered empty — which is the default. Add
欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌 in the same `drawtext` pass, held
across **0:20 to 0:30**, arriving in sequence rather than all at once. **Verify
every glyph against `inner-canon-ch28-translation-v2.md` before export.** ffmpeg
needs a CJK-capable face here; Anton has no Chinese coverage and renders tofu boxes
silently.

**If block 5 dims ten of the twelve** as the shot list calls for, the two left lit
must be **泣涕 and 太息** — weeping and the long sigh, the two riddles with an
author. Getting the wrong two lit inverts the cut's argument, so check this against
the agent table in the translation file before export.

**6. End card — 1:10 to 1:20** (block 8). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
block 3** — the twelve-cartouche sequence is the cut's only fast passage and plays
better dry, on paper-and-brush sound alone. Out at the block 7 cut to black at 1:10.
**This cannot be moved to the assembler's `--music` flag**: `--music-vol` clamps at
0.20 (≈ −14 dB, which does land in range), but it mixes one continuous bed with no
dropout window, so the block-3 gap requires a hand mix either way.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render. The slate rates this
chapter **Very Low**, and the trailer is the lowest-exposure surface on it.

- **Disclaimer** — repo string verbatim: blockquoted above, at the head of block 8's
  narration, on screen as the end card, and in the description. Block 8 is extended
  past the mandated string to clear the 8.6s floor; **the mandated sentence itself is
  unaltered**.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim in the cut. **The chapter's needling prescriptions are excluded
  entirely** — every riddle in the source closes with one, and not one appears in this
  document, the shot list, or the on-screen text. Nothing tells a viewer to do
  anything.
- **The inquiry conceit needs one guard, and the trailer is where it is riskiest.**
  A trial framing could read as *your body is betraying you*, which is a wellness
  register this series exists to avoid. **Block 4 defuses it inside the cut** — there
  is no offender — and block 6's turn is about grief, not malfunction. **Block 4 is
  therefore not droppable**; see *Runtime levers*. The longform lands the full answer
  (an ungoverned body is a better body); the trailer must at minimum not imply the
  opposite.
- **Mortality / ageing** — **absent.** The longform's one bereavement beat is not in
  this cut. No lifespan claim of any kind.
- **Fertility content** — **absent.** §8's ambiguous 行陰用力 is not referenced, and
  the translation takes the neutral reading.
- **Indulgence / alcohol** — **absent.** No feast, no vessels, no drinking anywhere
  in the shot list.
- **Supernatural hooks explicitly debunked by the payoff** — the hook is *twelve
  things nobody ordered*, which is a description of ordinary physiology rather than a
  mystery claim. **No supernatural agency is proposed at any point**, and block 4
  states plainly that nothing is doing it. The cut's argument is deflationary
  throughout.
- **One thing this trailer does *not* do, recorded deliberately.** v1 called the
  classical answer **wrong** inside the trailer, at block 6. **This cut does not** —
  it presents the chapter's two incompatible answers and withholds the verdict for
  the episode. That is defensible because **no false claim is asserted as true here**:
  block 4 and block 6 both report what the chapter says, block 7 frames them as *two
  bodies* rather than as one correct account, and nothing in the cut tells a viewer
  that qi schedules or heart-rulership are how a body works. **If an edit ever puts a
  bare classical mechanism on screen without that framing, the debunk has to come
  back into the trailer.**
- **Title and thumbnail honour the educational payoff** — cut title *Twelve Small
  Rebellions*; the slate's chapter title remains *Why We Yawn*. **Banned terms
  checked**: no *longevity*, *live to 100*, *ancient secret* or *anti-aging* in the
  script, title or thumbnail direction. **Thumbnail direction:** the empty hearing
  floor beneath a high seat, twelve empty tally slots on the wall, no faces — it
  reads as *he put his own body on trial*, which is the actual claim.
- **Hedge allocation — two characters speak, so this needs recording.** **Arthur
  retains every framing claim**: the hook (1), the list (3), the ten-of-twelve
  structure (5), the two-bodies verdict and the title (7), and the disclaimer (8).
  Fan-di carries the conceit. **Dr-Qi carries both classical mechanisms, in blocks 4
  and 6, and that is the pair to watch** — block 4 is in the second person (*your
  inquiry*), which is dramatisation and not instruction, and block 6 reports the
  chapter's claim rather than asserting it. **No compliance hedge rests on a
  character voice.**
- **Historical accuracy** — four risks. (1) Cited on screen as **Lingshu 28**, never
  a bare "Chapter 28". (2) The count is twelve, not the slate's eleven; the
  cartouches must number twelve and match the translation file. (3) Block 7's
  "administration" is Su Wen 8 and is deliberately not named on screen; if it is ever
  named, cite **Su Wen 8**, never "chapter 6". (4) The ten-versus-two split is a fact
  about the Chinese grammar, tabulated in the translation file, and must not drift
  into a claim that the chapter *says* it has two theories — it does not say so.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload, per the
  slate's §6 open item. No character makes a first-person factual assertion about
  their own expertise.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: an empty hall, a
  high seat, cartouches, two seated or standing figures, ink diagrams, a plate. **No
  restraint or bound-figure imagery**, which has tripped the safety filter here before
  even on innocuous subject matter. No bodies, no injury, no falling figures. **One
  item to watch at prompt stage:** nobody is ever staged standing in the empty floor.
  A figure placed there reads as a person in a dock, which is exactly the imagery to
  avoid, and it also destroys the shot's meaning.

## Runtime levers

**Cut to 1:00 (6 blocks)** — drop blocks 3 and 5. Runs 1 → 2 → 4 → 6 → 7 → 8. Keeps
the charge, the no-defendant answer, the turn and the verdict, and costs the
cartouche sequence, which is the cut's most expensive shot to build and its least
load-bearing. **This is the cut to make if runtime is fixed externally.**

**Cut to 0:50 (5 blocks)** — blocks 1 → 2 → 4 → 6 → 8. Loses block 7, which is the
verdict and the title. At that length the title has to move into block 6's tail or
the cut ships with no title card at all.

**Cut to 0:40 (4 blocks)** — blocks 1 → 4 → 6 → 8. Drops Fan-di entirely and with
him the inquiry conceit; what remains is the two-answer contrast, which still works
but is no longer dramatised. Acceptable only for a paid-placement cutdown.

**Stretch to 1:30 (9 blocks)** — add one block after 6: Arthur on §15's retro-fitted
rulers (*the kidney governs yawning, the lung governs hiccup* — attributions that
appear nowhere in the answers themselves). It is longform Act IV material, needs no
new voice, and is the single strongest piece of evidence for the cut's thesis.
**Do not** add a Lei-Gong block to stretch without measuring Zane first.

**Blocks 4 and 6 are a pair and must never be split** — the answer with no agent
and the answer that suddenly has one. The entire cut is the contrast between them,
and shipping either alone misrepresents the chapter. **Block 4 additionally carries
the compliance guard** described above. **Block 8 is not a lever.**
