# The Emperor's Inner Canon — Lingshu 77 Trailer v1 (70 seconds)

**靈樞·九宮八風第七十七 · The Magic Square of the Winds**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Lingshu 77*, and on this chapter the collision is
not hypothetical — it is already in this repository.** Both halves of the canon run
to eighty-one separately numbered chapters, and **Suwen 77 《疏五過論》 is a
completely different chapter** about the five ways a physician fails a patient. It
is **rank 8 of the Top-20 slate at publish slot 6**, four slots ahead of this one, and
its scripts are already written at `output/suwen/ch77/`. A bare "Chapter 77" in a
title, a thumbnail, a description or a file path will collide with this channel's own
back catalogue rather than merely with the canon. Citation accuracy is the channel's
stated differentiator.

**This is a fresh treatment and there is nothing to supersede.** No prior version of
Lingshu 77 exists anywhere in `output/`; this folder is new. Nothing has been carried
over from any earlier script, per the brief.

Companion longform: `inner-canon-lingshu77-longform-v1.md` (93 blocks, 15:30), which
holds the complete classical text, this cut's working translation, the full
uniqueness proof, the archaeology and the compliance audit this trailer inherits.

**Slate position.** Lingshu 77 is **rank 14 of the Top-20 slate and publish slot 10** —
`docs/Chronicle of Balance Top20 Chapter Slate.md` §3.14 and §5. It is the
**mathematics pillar debut** and the slate places it at slot 10 for a search reason
rather than a subject one: *"strong evergreen search tail — the first episode on the
slate likely to still be acquiring impressions in year two."* §3.14 calls the
nine-palace grid *"a direct link between the medical canon and the history of
mathematics"* and says it *"lets the episode do something none of the others can: a
genuine mathematical demonstration on screen."* The slate assigns it the **grid
traversal** structural form: *"the episode walks the nine-palace square in sequence,
the magic-square property revealed as the walk completes."*

**Seventy seconds cannot walk nine palaces**, so the trailer does the one thing the
form allows at this length: it **states the theorem and then hands the arithmetic to
the auditor.** Block 4 proves the square is unique and block 5 adds up the days and
finds the calendar three quarters of a day long. That pair is the trailer.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the real
choice is six, seven, eight or nine blocks. **Seven is where this chapter's hook lands.**

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer has
  five content blocks and a 70s trailer has six.
- The trailer has to carry **five things**: the square, the emperor's objection to
  being governed by it, what the chapter actually claims, the mathematics, and the
  audit that breaks it. At six content blocks that is one each plus the title turn. At
  five, the block that goes is **block 4** — and block 4 is the only place the episode's
  entire selling point exists, because without it the square is a curiosity rather than
  a theorem.
- **80s and 90s would need a second exchange to fill.** This chapter's drama is one
  demonstration and one audit. A third character beat would be padding, and the
  longform is where the eight winds get named.

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3 **as re-measured 2026-08-10 on the Suwen 13
trailer**, and the assembler gates on **8.6–10.0s of detected speech** at both edges as
hard errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–2. A single struck note enters on block 4 as the
square resolves and returns once on block 5. Everything drops to room tone at block 6.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**, text-free
except blocks 6 and 7.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Every row of this square adds to fifteen. So does every column and both diagonals. It is the oldest magic square known anywhere on earth and it is not in a book of mathematics. It is in a medical textbook. |
| 2 | Fan-di (Xavier) — the demand | I am handed a square of nine rooms and told it governs the year. I am told it governs the wind. I am told it governs which part of a man goes wrong. Before I sign it I want the arithmetic. |
| 3 | Dr-Qi (Vesper) — what the chapter claims | The Great One sits in the north for forty six days from the winter solstice. Then it moves and moves again the whole way round the compass. On the day it moves the sky must answer it with wind and rain. |
| 4 | Arthur (V.O.) — the theorem | Nine numbers in nine squares. Five in the middle because the arithmetic leaves it nowhere else to go. There is exactly one square like this and every version you have ever seen is the same one turned around. That is a theorem. |
| 5 | Lei-Gong (Zane) — the audit | Now let me add up the days because nobody in this chapter ever did. Six palaces of forty six and two of forty five. Three hundred and sixty six. That is three quarters of a day longer than a year and in sixty years the whole grid is one palace out. |
| 6 | Arthur (V.O.) — the turn / title | The same board named the harvest and the fate of a general and the illness in a man's shoulder. Nobody thought those were different questions. The Emperor's Inner Canon. Lingshu seventy seven and the episode is called The Magic Square of the Winds. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode walks all nine palaces and shows where the mathematics ends and the medicine begins. |

**Every block is inside its voice's measured word budget** — counted by dropping
tokens that contain no letter or digit, because a spaced em-dash is not a word and
counting it as one spends real budget on a window 1.4s wide.

| Voice | Blocks | Words | Budget (`SKILL.md`, 2026-08-10) |
|---|---|---|---|
| Arthur | 1, 4, 6, 7 | 40, 42, 43, **28** | 38–44 |
| Xavier (Fan-di) | 2 | 41 | 40–44 |
| Vesper (Dr-Qi) | 3 | 41 | 41–43 |
| Zane (Lei-Gong) | 5 | 51 | 47–52 |

**Block 7 is 28 words and deliberately below Arthur's range.** Its structure is the
mandated disclaimer — two short full-stopped sentences — which `SKILL.md` records as
running pathologically slow on `seed_audio`: 33 words returned **11.326s, 16.930s and
10.538s** before the trailing clause was cut to 18 words, which landed 9.60s first
roll. The tail here is **17 words**. **Do not lengthen it to reach the range.**

**There is not a single comma anywhere in the seven narration cells, and that is
deliberate.** The 2026-08-09 measurement put a 31-word Arthur line carrying a
four-item comma list at **12.022s** against **8.913s** for the same 31 words with
none — a 3.1-second swing from punctuation alone, on a window 1.4 seconds wide. This
chapter is made of enumerations, so every one below is joined with *and* or split
into sentences. **Do not add a comma to fix a caption break.**

### The one block expected to miss, and what to do about it

**Block 6 is a title block and the repo has already measured what those do to
Arthur.** On the Lingshu 28 trailer v2 a 33-word title block returned **12.751s and
12.251s** on consecutive rolls — about 2.6 words/sec against a passing rate of 3.65 —
because Arthur gives a series title and a chapter number an announcer's pauses that no
ordinary narration block provokes. That cut shipped block 7 at **25 words**.

Block 6 here is 43 words with **two** title drops in it. Expect it to run long.
**The prepared fallback, to be used before re-rolling a third time**, cuts the
sentence that is doing least:

> The same board named the harvest and the fate of a general and the illness in a man's shoulder. Nobody thought those were different questions. Lingshu seventy seven and The Magic Square of the Winds.

That is **36 words**, below Arthur's range and sized for the announcer effect exactly
as ch28 v2's was. **If the fallback is used, update the narration table above before
building the sidecar** — the table must hold the text the take was actually generated
from.

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks 6
and 7.** Every shot needs motion from frame 1 — the assembler warns on a static open
or a frozen tail. **No body, no patient, no anatomy and no needle appears in any of
the seven shots.**

1. Blank silk, vertical. A three by three grid inks itself, and **knotted dot clusters** fill the nine cells one at a time — nine dots, one dot, five dots. Slow push in. The centre cell fills last and then dims again.
2. Interior hall, vertical framing. FAN-DI on the high seat above a nine-square lacquer floor — gold robe, thin round glasses, **fan snapping open** across the frame. He does not step onto the floor.
3. DR-QI at the southern edge of the floor, blue cheongsam with cloud embroidery, open bamboo scroll held casually. Behind her the eight outer squares light in a clockwise circuit starting at the north edge. **The centre square stays dark.**
4. The dot clusters again, seen from directly above. Lines of light draw themselves along three rows and three columns and both diagonals, one after another, and every line passes over cells whose dots visibly total the same amount. **The centre never goes dark in this shot.**
5. LEI-GONG cross-legged at the eastern edge, cinnabar robe with lightning trim, small hand drum resting beside him, wax tablet on his knee. Beside him a tally of brushed strokes accumulates in the air and the whole floor shifts one square width to the left as he finishes.
6. **CARD** — 靈樞·九宮八風 brushed on silk, with *"Spiritual Pivot, chapter 77"* small beneath. Behind it, a lacquered diviner's board with a round upper plate turning on a square lower one. *(Default: plain plate, characters added at edit — see Finishing steps.)*
7. **END CARD** — plain plate, ink wash drifting across the nine-square grid until the grid is gone. Disclaimer and editorial credit added at edit time.

**The Luoshu numbers are drawn as knotted dot clusters and never as digits.** That is
the historically correct form of the figure and it also removes the whole class of
failure where a generative model renders a wrong numeral confidently. **Arabic
numerals and the running sums are on-screen text added at edit**, over shots 1 and 4.

**Blocks 1, 6 and 7 are the stillness risks** — a diagram, a card and a plate. Give
each a slow push, drifting ink grain or a light change so the clip does not read as a
held frame.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-lingshu77-longform-v1.md`, which holds the complete classical text and
argues every departure from the supplied English.

| § | Passage | Blocks |
|---|---|---|
| §1 | 太一常以冬至之日，居葉蟄之宮四十六日 | 3 |
| §1 | 明日居天留四十六日……明日居新洛四十五日 | 3, 5 |
| §1 | 明日復居葉蟄之宮，曰冬至矣 | 3 |
| §3 | 太一移日，天必應之以風雨 | 3 |
| §3 | 以其日風雨則吉，歲美民安少病矣 | 6 |
| §3 | 太一在冬至之日有變，占在君 | 6 |
| §4 | 乃朝八風，以占吉凶也 | 6 |

**Blocks 1, 4 and 5 are not in the chapter at all, and this is the trailer's honest
declaration of what it adds.** The chapter names nine palaces and never once writes
their numbers, never states the magic constant, and never adds up its own day counts.
Specifically:

- **The Luoshu numbers and the fifteen** (blocks 1 and 4) come from the wider
  nine-palace tradition — the 戴九履一 formula and the Hall of Brightness plan — not
  from Lingshu 77. The longform carries the citation and flags it as external.
- **The uniqueness of the order-three magic square** (block 4) is a modern statement of
  a modern theorem. **It is true and it is ours.** Nobody in the chapter claims it.
- **The three hundred and sixty six day sum** (block 5) is arithmetic on the chapter's
  own numbers — 46 × 6 plus 45 × 2 — and the drift figure against the true year is
  ours. The chapter states the day counts and never totals them.

**Longform beats deliberately withheld from this trailer:** all eight winds and their
organ mappings, the full wind and empty wind rule, the three vacuities, the omen
ladder from ruler to commoner, the archaeology of the lacquered board, and both
reckonings. **The trailer sells the square; the episode sells the reckoning.**

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.

---

## Production record (Higgsfield)

**Status: NOT RENDERED.** Nothing has been generated, no credits have been spent, and
the step-0 model-and-tier gate has not been run. Everything below is the **plan**.

### Cost preflight — run the step-0 gate before any of this

**Call `balance` first; do not quote the figure below.** The last balance recorded
anywhere in this repo is **343.2**, after the Suwen 13 trailer on 2026-08-10. That is
history.

| Item | Price (`SKILL.md` snapshot) | Qty | Estimate |
|---|---|---|---|
| Style key, `nano_banana_pro` 9:16 1k | 2.0 | 1 | 2 |
| Clips, `seedance_2_0_mini` 480p 9:16 10s | 10.0 | 7 | 70 |
| Voice, first pass | **1.45** | 7 | ~10 |
| Voice re-takes at the measured 4.7× rate | 1.45 | ~26 | **~38** |
| Assembly, captions, burn | free | — | 0 |
| | | | **~120** |

**Budget the re-takes explicitly rather than hoping.** The Suwen 13 trailer spent
**33 takes on 7 blocks for ~47.7 credits** — a 4.7× rate caused by wrong word budgets
rather than service noise. The budgets here are the corrected ones, so the rate should
fall; **it should not be assumed to.** Block 6 is expected to need at least one
re-roll for the reason given above.

**Do not preflight voice on a short probe string.** `seed_audio` bills by length and
this figure has been got wrong twice in opposite directions. `get_cost` a
**representative-length** line from the table above.

### Style key

Chain off the **Suwen 1 head** `4b6f7106-67da-4d1a-a553-c58ba90ac43f` recorded in
`SKILL.md` step 1, passed as a **job ID** with only the motif swapped. **Do not chain
off the Suwen 8 key** (`05ebe984-2781-491e-8c84-2b20e608d2a8`): it carries a lacquer
chart of twelve boxes, which would collide directly and confusingly with this
chapter's own nine-square lacquer floor.

| | |
|---|---|
| Job ID | *(to be recorded)* |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key standing at the edges of a nine-square lacquer floor whose cells hold knotted dot clusters; the centre cell dark and unoccupied; a lacquered diviner's board with a round upper plate on a square lower plate resting on a low table |
| Derivation | Suwen 1 head → this key |
| Cost | 2 credits |

**The longform needs a 16:9 sibling derived from this key** once it exists. **Do not
overwrite the vertical key** — this trailer depends on it.

### Clips

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16**, from the step-0 gate.
`generate_audio: false` on all seven — a **correctness requirement**, since the
assembler mixes clip audio in at 0.12 under the voice and a clip generated with native
audio will be audible in the finished cut.

**Declare the aspect ratio twice** — `aspect_ratio: "9:16"` on the call *and*
"vertical 9:16 portrait framing" in the prompt text. **Generate block 1 alone first**,
check its returned dimensions and its look against the key, and only then generate the
rest.

**Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every clip.
Shots 1, 4 and 7 are lit figures on near-black and will trigger it.

**Keep audio vocabulary out of clip prompts entirely** — *drum*, *drone*, *note*,
*music*, *rhythm*. Those are edit-time directions anyway, and `DROWN IN MUSIC` fires on
them. **Lei-Gong's hand drum is a prop and must be described as an object resting
beside him, never as a sound.**

**A duration floor applies per clip:** `assemble_final.sh` rejects any clip shorter
than 9.5s at a 10s block. The 10s default clears it.

### Voiceover

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55**, one take per block, one
speaker per block. **Generate two variants per block and keep the better one.**

Record each take's **job ID, file duration and the assembler's measured speech figure**
to three decimal places. They differ, and the second is the one that was gated — a take
written up as "8.50s pass" has already stopped an assembly at 0.103s under the floor.

**Where the re-rolls will be:**

- **Block 6**, for the title-drop reason above. The 36-word fallback is written out.
- **Block 5** is Zane's longest line in the cut at 51 words, one short of his ceiling.
  He has reproduced first-take on two previous runs, so if this misses it will be under
  and the fix is a word rather than a re-roll.
- **Block 3** is Vesper at 41 words against a 41–43 range, and her floor is the risk
  rather than her ceiling: 40 words has returned **8.607 / 8.701 / 7.919s**.
- **Block 7** must not be lengthened. See the note under the narration table.

### Assembly

Foreground, one chained command, `--blocks 7 --manifest pairs.txt`. A seven-block
assembly finishes inside the 120s budget comfortably and **`background: true` has
already lost a complete finished render on this pipeline.**

**Call `media_upload` before the assembling command and append the `curl -f -X PUT`
to the same `&&` chain.** The sandbox is discarded ~10 seconds after the call returns.
On the Suwen 8 run the export was chained to a probe instead of to the assembler and
the render survived only because the next call went out immediately. **Probes go after
the upload, never instead of it.**

### Captions

Built from this document by `scripts/build_subtitles.js` **after the takes exist and
their durations are in the record above**, then burned locally. The assembler burns
nothing and rejects `--subs` outright.

**No sidecar is committed with this document and none can be** — `build_subtitles.js`
reads take durations out of the production record and there are none yet. `CLAUDE.md`
requires the `.srt`/`.vtt` as tracked deliverables; they are built and committed **with
the render**, not before it.

**`check_caption_fit.js` was run at 9:16 against this document.** Its report and the
clauses it flags are in *Finishing steps* below.

**Install Anton in the sandbox before burning.** The sandbox ships Metropolis and
Montserrat and **no Anton**, and libass substitutes a wider face silently while
`build_subtitles.js` still reports the line as fitting.

### Reproduction notes

- **Nothing has been generated.** This section exists to be filled.
- **This is the first cut in `output/lingshu/ch77/`**, and the folder is new. The
  chapter has no production history at all.
- **The chapter number collides with an already-scripted chapter in this repo.**
  `output/suwen/ch77/` holds a different chapter entirely. Anything filed, named or
  quoted as "chapter 77" without a book is ambiguous **inside this repository**, not
  merely inside the canon.
- **The claims in blocks 1, 4 and 5 are ours, not the chapter's**, and the longform
  argues each. The uniqueness of the order-three magic square and the 366-day sum are
  the two a specialist checks first. **Verify both against a reference before the takes
  are recorded** — a wrong number in a trailer about arithmetic is the worst available
  error.
- **Numerals are never rendered by the clip model.** Dot clusters in the picture,
  digits at edit. Recorded here because it is a house decision made on this chapter and
  the longform inherits it across ninety-three shots.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7. **Block 7 is
  planned into the block count and into the cost estimate**, as `CLAUDE.md` requires.
  It renders as a plain plate and the text is added at edit, which also keeps the
  credit out of a paid render.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card and
  in the description. **It is deliberately not in block 7's narration:** on the Suwen 8
  run `seed_audio` inserted a **3.00s pause** before the spoken name and failed the
  take. The credit is on-screen only.
- **Music** — licensed guqin only; the assembler can mix a bed you supply with
  `--music` at `--music-vol` 0.10, and generates none. **Guqin licensing is unresolved**
  (slate §9) — until cleared, score this cut with no guqin. The struck note on blocks 4
  and 5 is **not music** and is not generated either: it is hand-placed at edit.

### Finishing steps

**Not yet executed — this cut has not been rendered.** Written with **this cut's own
numbers**: 7 blocks, 70.0s, the history lower-third over block 1, one quotation card at
block 6, the end card at **1:00 to 1:10**.

**1. Check captions** at 9:16, **before generating takes** — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/lingshu/ch77/inner-canon-lingshu77-trailer-v1.md
```

**Run 2026-08-12. This document exits 1 with twelve over-budget clauses, and that is
being accepted knowingly.** The vertical budget is **~22 characters a line and two lines
maximum**, so a clause has about **55 characters** before it needs a third cue — and a
take that must carry 8.6 to 10 seconds of speech in at most four sentences cannot be
built out of 55-character clauses. **This is the take-window/caption-width tension
resolving the way `SKILL.md` says it must**: the window is a hard assembly error and the
width is readability. The rendered Suwen 8 trailer shipped with three such clauses for
the same reason.

The widest four are worth naming, because a recut that lengthens them makes it worse:

| Block | Clause | Width |
|---|---|---|
| 4 | *"There is exactly one square like this and every version you have ever seen is the same one turned around."* | 2175px / 1111 |
| 5 | *"That is three quarters of a day longer than a year and in sixty years the whole grid is one palace out."* | 2057px |
| 7 | *"The full episode walks all nine palaces and shows where the mathematics ends and the medicine begins."* | 2157px |
| 6 | *"The same board named the harvest and the fate of a general and the illness in a man's shoulder."* | 1961px |

**Nothing overflows the frame.** The sidecar splits each across cues and libass margins
cannot draw outside them; what it costs is cue churn, not an overflow.

**Block 3 has already had this pass applied and it is the one measurable improvement
available.** Its first sentence was originally 139 characters — **2883px, six lines,
three cues on its own** — and was split into two sentences at the same word count. The
flagged total went from eleven clauses to twelve and the worst single clause dropped from
six lines to four, which is the trade worth making.

**Do not fix any of the rest by adding commas.** A comma is punctuation rather than a
word, so existing audio would still match the table — but the next person to regenerate
a take from this document would get the comma version, and a comma list is precisely the
structure measured at **12.022s**. **If a clause is worth fixing, reword it shorter and
re-record.**

**Block 7's disclaimer clause is a separate case and is not a defect.** *"A dramatized
adaptation of a classical philosophical text."* is 58 characters and needs three lines on
a 720-wide vertical frame; it is a compliance string and cannot be reworded, which is why
`check_caption_fit.js` carries it as a **known exception** rather than a failure and
reports it separately from the twelve.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in the
record above.

```
node scripts/build_subtitles.js output/lingshu/ch77/inner-canon-lingshu77-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
1:00) so the disclaimer is not simultaneously a caption and a card. The burn copy is
blocks 1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched with
the picture. Convert the `.srt` to `.ass` and re-target `PlayResX/Y` to **720×1280**
first; ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every style value by
~4.4× and runs the lines off frame. Check `fc-match Anton` in the sandbox first.

**4. History lower-third** — *"Presented as history & philosophy"*, in at **0:02**, out
at **0:09**, over block 1's self-drawing grid. At 720×1280 with `MarginV=150` and
`Fontsize=54` two lines of caption occupy roughly y=1000–1130, so place the lower-third
**above** that band — **y=896** is the position the previous vertical cuts used.

**5. The numerals and the sums — this cut's largest hand step, and the one most likely
to be skipped.** Shots 1 and 4 render as dot clusters with no digits in them. Added
here by `drawtext`:

- **0:00 to 0:10** — the digits 4 9 2 / 3 5 7 / 8 1 6 fading in beside their dot
  clusters, and **= 15** appearing at the end of each completed line.
- **0:30 to 0:40** — over shot 4, the eight lines lighting one at a time with **15**
  held at the end of each.

Anton has no digit-spacing problems and needs no CJK face for this step. **Do not
render the digits inside the clip prompt.**

**6. Quotation card — block 6, in at 0:50, out at 1:00.** 靈樞·九宮八風 added here in
the same `drawtext` pass, with *"Spiritual Pivot, chapter 77"* small beneath.
**Verify every glyph against the *Source text and translation* section of the longform
before export** — the source file supplied this chapter in **simplified** characters
and the cards use traditional forms. ffmpeg needs a CJK-capable face: Anton has no
Chinese coverage and renders tofu boxes silently, which survives to the delivered file
without erroring.

**7. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so multi-line
centred text needs one `drawtext` filter per line. Block 7's plate is a light ink wash,
so **a full-frame scrim at roughly `black@0.62`** will be needed for white text to be
legible on it. Both lines also go in the description at upload.

**8. Music.** None, until guqin licensing is cleared. **Trailers earn disproportionate
plays and carry the higher Content-ID exposure**, so this is the cut to be most careful
about, not the least.

---

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, before any
generation, per `CLAUDE.md`. The longform's audit governs the material this trailer
draws from; these are the trailer-specific findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document, at
  the head of block 7's narration, on screen as the end card, and in the description.
  Block 7 is extended past the mandated string to clear the 8.6s floor; **the mandated
  sentence itself is unaltered.**
- **The slate's named care point, and it is the whole of this cut's risk.** §3.14: *"the
  one care point is not to present the astrological omens as predictive, which the
  mathematical framing naturally avoids."* **No omen is stated in this trailer at all.**
  Block 3 says the sky *must answer with wind and rain* — which is what the chapter
  claims heaven does, not a prediction offered to a viewer — and block 6 names the
  harvest and the general only inside a sentence about what people of the period did not
  distinguish. **Nothing in seventy seconds tells anyone that weather forecasts
  anything.**
- **Health content stays philosophical narrative** — and this trailer contains almost
  none. **The eight winds and their organ mappings are not in it.** The only clause
  touching the body is block 2's *"which part of a man goes wrong"*, spoken by the
  sceptic as an objection to being governed by a square. **No dosage, no regimen, no
  diagnosis, no benefit claim and no treatment appears anywhere. No viewer is told to
  do anything.**
- **The chapter's pathology material is excluded entirely and must stay excluded in any
  recut.** 淋露寒熱, 痿 and 仆偏枯 — the discharge-and-fever set, the atrophy clause and
  the hemiplegia clause — appear in no narration line and in no shot. The longform
  quotes them in *Source text and translation* only so that nobody restores them
  believing they were overlooked. **Do not add them at any runtime.**
- **Mortality — one clause, and it is reported speech about a text.** The chapter's
  善暴死 is not in this trailer at all; the nearest thing is block 5's *"one palace
  out"*, which is about a calendar. **No death, no illness, no body and no casualty
  appears in any of the seven shots.**
- **Anatomy — absent by construction.** There is no organ anywhere in the narration and
  no anatomical imagery in seven shots. The body is represented by nothing at all; the
  cut is a grid, a floor, a board, a scroll and a wax tablet.
- **Occult and ceremonial imagery — designed out, and this chapter invites it badly.**
  A star deity moving through nine palaces, eight named winds and a divination board is
  the exact vocabulary that produces altars, robed ritual, talismans and personified
  spirits — and **restraint or bound-figure imagery has tripped this service's safety
  filter before on innocuous subject matter.** **There is no ceremony in seven shots and
  no wind is ever drawn as a face or a figure.** The Great One is a **marker on a
  floor**, never a person, never a god and never a glowing form. Wind, where it appears
  at all, is ink grain entering from one edge of frame.
- **Indulgence and alcohol** — absent from the narration and from all seven shots.
- **Supernatural hooks explicitly debunked by the payoff** — the hooks are *there is a
  magic square inside a medical book* and *a star spirit decides which wind can hurt
  you*. The first is a claim about a document and is true. **The second is refused
  inside the trailer rather than deferred to the episode**: block 5 is an audit that
  finds the scheme's own arithmetic three quarters of a day out, and it is the trailer's
  loudest block. A trailer cannot carry a full debunk, so the honest test is whether it
  promises anything the episode does not deliver — it promises a theorem, an audit and a
  claim about how the period thought, and the episode delivers all three.
- **Title and thumbnail honour the educational payoff** — *The Magic Square of the
  Winds*; on-screen framing *Lingshu 77, 九宮八風 — Nine Palaces and Eight Winds*.
  **Thumbnail direction:** the nine-square grid of knotted dot clusters with **15** set
  beside three completed lines, and the centre cell dark. No faces, no compass rose
  drawn as a wheel of fate, no robed figure, no talisman, no glowing hands. **Banned
  terms checked**: *ancient secret*, *lost knowledge*, *they knew*, *ahead of its time*,
  *longevity*, *live to 100* and *anti-aging* appear in no line, no title and no
  thumbnail direction.
- **Hedge allocation — three characters speak in a 7-block trailer, and no hedge moves
  off the narrator.** `SKILL.md` makes narrator-only the trailer default precisely
  because the narration carries every hedge. Here **Arthur keeps all four framing blocks
  (1, 4, 6, 7)** including the disclaimer. Block 2 is Fan-di's objection, block 3 is
  Dr-Qi reciting the chapter's own calendar, and block 5 is Lei-Gong doing arithmetic on
  the chapter's own numbers. **None of the three character blocks carries compliance
  content**, so nothing is lost against the narrator-only default except the block
  boundaries the exchange costs.
- **Historical accuracy** — cited on screen as **Lingshu 77** at block 6 and never as a
  bare "Chapter 77", which on this chapter is ambiguous **against this channel's own
  back catalogue**. Blocks 1, 4 and 5 make claims the chapter does not make, and
  *Source mapping* above says so line by line rather than letting them read as the
  text's. **Block 4's uniqueness claim and block 5's arithmetic are the two a specialist
  checks first and both must be verified before the takes are recorded.**
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No character
  makes a first-person factual assertion about their own expertise.** Dr-Qi recites the
  chapter; she asserts nothing about the body in her own person.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a grid, dot clusters, a lacquer floor,
  a fan, a scroll, a wax tablet, a diviner's board and a plate. **No bodies, no injury,
  no anatomy, no ceremony, no deity, no restraint or bound-figure imagery, and no faces
  other than the three cast characters.** Shots 1, 4 and 7 are lit figures on near-black
  and will trigger `IN THE DARK` — pre-decline on every clip.

---

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever moves whole 10s blocks
because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 3**, Dr-Qi's recitation of the
circuit. It is the only block whose content is description rather than argument, and
blocks 2 and 5 still establish that the square governs a calendar. **Cost:** the cut
loses its only classical recitation and its only female voice, and block 5's *"six
palaces of forty six and two of forty five"* arrives without ever having been told what
a palace is. **This is the cut to make only if the budget forces one.**

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 3 and 2. Nothing becomes
unintelligible, but the trailer becomes narration plus one audit and reads as a lecture
with an interruption. **Not recommended.**

**Stretch to 80s (8 blocks) — add 1.** Add a Dr-Qi block after 5, answering the audit:
the counting was never checked against the sky because the pattern was the authority and
the sky was not. Written for Vesper at 41–43 words. **This is the strongest single
addition**, because it turns block 5 from a complaint into an exchange and it puts the
episode's actual thesis into the trailer.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus an Arthur block after 6 on
the lacquered board from the 165 BCE tomb — a physical object carrying these same eight
names and these same two numbers. **It is the best withheld material in the chapter**,
and it is left out at 70s only because it needs its own setup and would arrive as a
fourth idea in a cut that already has three. **At 90s the trailer starts telling the
episode's story rather than selling it**, which is why 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:**

- **Block 7** — the disclaimer card is mandatory and is not a lever.
- **Blocks 1 and 4 as a pair** — 1 states the property and 4 proves it is forced.
  Without 4 the trailer's whole claim is that somebody once arranged nine numbers
  neatly, which is not worth seventy seconds.
- **Block 5** — the audit. It is the only block that refuses anything, and a cut about
  a beautiful scheme with nothing refusing it is the cut the compliance rules exist to
  prevent.
