# The Emperor's Inner Canon — Suwen 67 Trailer v1 (70 seconds)

**素問·五運行大論篇第六十七 · What Holds the Earth Up**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 67*.** Both halves of the canon run to
eighty-one separately numbered chapters, so the Lingshu has its own chapter
sixty-seven and a bare "Chapter 67" sends a checking viewer to the wrong book
about half the time. Citation accuracy is this channel's stated differentiator and
this is a cosmology episode, where a viewer going to check is the *intended*
behaviour rather than an edge case.

Companion longform: `inner-canon-suwen67-longform-v1.md` (78 blocks, 13:00), which
holds the classical text, this cut's working translation, and the compliance audit
this trailer inherits.

**Slate position.** Suwen 67 is **rank 7 of the Top-20 slate and publish slot 4** —
`docs/Chronicle of Balance Top20 Chapter Slate.md` §3.7 and §5. Its stated job at
slot 4 is a *"hard pivot into astronomy"* that *"proves the channel is not a
single-format operation, which matters for both the algorithm and for
Generic/Repetitive Content exposure."* The slate assigns it the
**cross-examination** structural form: the Emperor refuses each answer and pushes
again until the cosmological claim is forced into the open.

**The slate also writes this chapter's one discipline, and the trailer is where it
is hardest to keep.** §3.7: *"this is not a discovery of gravity, and claiming so
would invite well-deserved correction. Frame it as a cosmological intuition arrived
at by reasoning about qi — remarkable for what it rejects (the Earth resting on
something) rather than for what it proves."* A seventy-second cut about a suspended
earth is exactly the format that sells the overreach, so **block 4 spends a whole
block refusing it** rather than deferring the correction to the episode. That is
the cut's single most important design decision.

**This is a fresh treatment.** No prior version of this chapter exists in
`output/`; nothing has been carried over from any earlier script, per the brief.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the
real choice is six, seven, eight or nine blocks. **Seven is the smallest count that
lets the correction ride with the hook:**

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer
  has five content blocks and a 70s trailer has six.
- The cut has to carry **five things**: the question, the answer, the refusal of
  what the answer is not, what makes it remarkable anyway, and the second surprise
  that proves the chapter is not a one-line curiosity. At six content blocks that is
  one block each plus the Emperor's demand that motivates the answer at all.
- **At five content blocks the block that goes is block 4**, the not-gravity
  correction — and a trailer that says *the great breath lifts the earth* and then
  stops is precisely the cut the slate's care point exists to prevent. **The
  correction is not a lever.** If the runtime has to come down, the cut goes to 60s
  by dropping Lei-Gong, and the reasoning is in *Runtime levers*.
- **80s and 90s are available and are specified in *Runtime levers*,** but the sixth
  and seventh content blocks both buy *more evidence* rather than a new turn, and a
  trailer that argues its case is an episode.

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3 **as re-measured 2026-08-10 on the
Suwen 13 trailer** — Arthur 38–44, Xavier 40–44, Vesper 41–43, Zane 47–52 — and the
assembler gates on **8.6–10.0s of detected speech** at both edges as hard errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–3. A single struck bronze note enters on block 4
with the correction and decays across block 5. Room tone from block 6.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**,
text-free except blocks 4 and 7. **The longform's suspended ink disc is the
trailer's one carried-over image** — it hangs in the upper third of every shot, and
**nothing ever touches it from below.**

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Two thousand years ago a doctor in China was asked a question that had nothing to do with medicine. What is the earth resting on. The answer he gave is nine words long and it is not the answer you are expecting. |
| 2 | Fan-di (Xavier) — the demand | I have a table here that tells me which power rules which year and I am expected to govern by it. So answer me one small thing first and answer it plainly. Is the earth truly below us or is it not? |
| 3 | Dr-Qi (Vesper) — the answer | The earth is beneath you and it is also in the middle of the great emptiness. The great breath is what lifts it. Nothing carries it and nothing stands underneath it. There is no floor beneath the floor you are standing on. |
| 4 | Arthur (V.O.) — the correction | That is not gravity and nobody should tell you it is. There is no force in it and no mass and nothing that could be measured or predicted. What makes it remarkable is not what it found. It is what it refused. |
| 5 | Lei-Gong (Zane) — the audit | I came here to catch somebody getting lucky and I will tell you what I found instead. Every other answer of that age puts the world on top of something. A shell or a pillar or an ocean or the back of an animal. This one puts it on nothing at all. |
| 6 | Arthur (V.O.) — the turn | And then the same chapter does something stranger still. It says the changes of heaven and earth cannot be read in a pulse at all. A book of medicine telling a physician that his own hand will not reach this far. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode asks what a suspended world is doing in the middle of a doctor's almanac. |

**Every block above is inside its voice's re-measured range**, verified by parsing
this document's own narration table and dropping tokens that contain no letter or
digit — a spaced em-dash is not a word, and counting it as one spends real budget on
a window 1.4s wide.

| Block | Voice | Words | Budget | Margin |
|---|---|---|---|---|
| 1 | Arthur | 42 | 38–44 | upper-mid; 44w returned 9.431s on Suwen 13 |
| 2 | Xavier | 42 | 40–44 | mid-range; 41w returned 9.702s first take on Suwen 13 |
| 3 | Vesper | 42 | 41–43 | mid-range; her window is the narrowest in the cast |
| 4 | Arthur | 42 | 38–44 | upper-mid |
| 5 | Zane | 52 | 47–52 | **at the ceiling deliberately** — see below |
| 6 | Arthur | 41 | 38–44 | mid-range |
| 7 | Arthur | 28 | **~29 total** | mandated string plus a **17-word** tail — see below |

> **Block 5 sits at Zane's ceiling on purpose.** Its third sentence is a
> four-item alternation, which is the one structure `SKILL.md` says never to hand a
> voice as a comma list — so it is written with *or* between every item and no
> commas anywhere. That costs words rather than pauses, which is the trade the
> measurement supports: a 31-word Arthur line with seven commas returned **12.022s**
> against **8.913s** for the same 31 words with none. **Do not re-punctuate this
> line to shorten it.** If it lands over, delete *the back of an animal* and
> re-roll; the list survives at three items.

> **Block 7 is short on purpose and the reason is measured.** The mandated
> disclaimer is two short full-stopped sentences, and `seed_audio` treats them as
> separate beats and slows the whole take around them. On the Suwen 13 trailer the
> same block at 33 words returned **11.326s, 16.930s and 10.538s** — three takes, all
> over, one by nearly seven seconds. **Cutting the trailing clause to 18 words landed
> it at 9.602s on the first roll.** The tail here is 17 words for that reason. **Do
> not lengthen it to reach Arthur's 38–44 range**; that range does not apply to this
> block and the checker will flag it wrongly.

**No block contains a comma-separated list of three or more items**, and no block
exceeds four sentences. **Do not add commas to these lines.**

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks
4 and 7.** Every shot needs motion from frame 1 — the assembler warns on a static
open or a frozen tail.

1. Looking steeply upward across a lacquer floor inlaid with an eight-direction chart. **A single dark ink disc hangs high in the frame with a wide empty field all around it.** Slow rise. Nothing touches it and nothing reaches it.
2. Interior of an open square hall, vertical framing. FAN-DI coming down off the high seat onto the chart, gold robe and thin round glasses, **fan snapping open** across the frame. The disc small and high behind him.
3. DR-QI at the chart's edge, blue cheongsam with cloud embroidery, open bamboo scroll held casually like a tablet. **Behind her a brushed cord climbs toward the disc and stops short of it**, its top end unfinished. Her hand does not move.
4. **CARD** — 大氣舉之也, five characters brushed on silk. Behind them the empty field around the disc fills with drifting ink grain for the first time, and the disc is seen to have nothing at all underneath it. *(Default: plain plate, characters added at edit — see Finishing steps.)*
5. LEI-GONG on the floor chart, cinnabar robe with lightning trim, small hand drum at his hip. Four small ink sketches lie beside him and each shows a world set on top of something. He wipes them off the silk one at a time with his sleeve.
6. A physician's wrist cushion alone on a low lacquer table, and a hand withdrawing above it without touching anything. Then the camera tilts up off the table to the disc. **No skin, no patient and no body in frame.**
7. **END CARD** — plain plate, ink wash drifting. Disclaimer and editorial credit added at edit time.

**Blocks 4, 6 and 7 are the stillness risks.** A held card, a laid-out object and a
plate. Give each a slow push, drifting ink grain, or a light change so the clip does
not read as a held frame.

**Nothing touches the disc from below in any of the seven shots.** That is the
trailer's whole visual argument and it is the one rule a recut may not relax: a
column of smoke, a rising hand, a mountain peak or a beam of light reaching it turns
the picture into the opposite of what the narration says. The cord in shot 3 stops
short **on purpose**.

**No anatomy and no body anywhere in seven shots.** See *Compliance notes*.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-suwen67-longform-v1.md`, which holds the classical text and the
extraction warning that governs every card glyph below.

| § | Passage | Blocks |
|---|---|---|
| §1 | 黃帝坐明堂，始正天綱，臨觀八極 | 2 |
| §4 | **帝曰：地之為下，否乎** | 2 |
| §4 | 地為人之下，太虛之中者也 | 3 |
| §4 | 帝曰：馮乎 | 2, 3 |
| §4 | **歧伯曰：大氣舉之也** | 3, 4 |
| §5 | **天地之變，無以脈診** | 6 |

**Block 2 compresses the Emperor's two separate pushes into one.** In the chapter
他 asks 地之為下，否乎 and only then, after the answer, 馮乎 — *does it lean on
something?* A trailer cannot spend two blocks on a cross-examination it has no room
to stage, so **Fan-di asks the first and Dr-Qi answers both.** The longform runs the
exchange at full length across blocks 39 to 43, which is where the form actually
lives.

**Block 3's "nine words" is a count of the Chinese, not of the English.**
地為人之下，太虛之中者也 and 大氣舉之也 together are the answer the hook promises;
the nine counted are 大氣舉之也 plus 太虛之中者也 as the trailer speaks them. **The
longform states the count precisely at block 43 and the trailer does not**, which is
why block 1 says *nine words long* about the answer rather than about any one
sentence. If a recut moves that phrase onto a single clause, drop the number.

**Block 5 is not in the source and is the trailer's one invention.** Nobody in the
chapter compares this answer to a shell or a pillar or an ocean. The comparison is
ours, it is accurate about the ancient cosmologies it gestures at, and the longform
makes it as our comparison rather than the text's at blocks 47 to 49.

**Block 4's correction is ours and is not a hedge bolted on.** The chapter makes no
claim about force or mass, so saying it does not is a statement about what the text
contains. See *Compliance notes*.

**Longform beats deliberately withheld from this trailer:** the entire stem-and-
branch almanac frame, the 太始天元冊 star register, the correction of Guiyuqu, the
six qi acting on the earth, the earthquake passage, the whole of the five-direction
correspondence material, and both reckonings. **Two of those are withheld on
compliance grounds rather than for pacing** — see below.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.
Lei-Gong is **Lei-Gong** and never "Xiao-Lei". The series is *The Emperor's Inner
Canon* and never "Chronicle of Balance", which is the slate document's own working
name for the channel.

---

## Production record (Higgsfield)

**Status: NOT RENDERED.** Nothing has been generated, no credits have been spent,
and the step-0 model-and-tier gate has not been run. The tables below are the
**plan**, and every figure in them is an estimate until a live `get_cost` replaces
it.

### Before anything generates

`SKILL.md` step 0 is a hard gate and has five parts. In order:

1. **Tool availability** — one free `ToolSearch` for the eight names in step 0,
   plus the free `sandbox_exec` probe of `assemble_final.sh --help`. This comes
   first because a missing step-4 tool invalidates an approved step-0 estimate, and
   the server-side assembler has already vanished from the surface once with no
   warning.
2. **`balance`** — state the live figure. The last recorded balance in the repo is
   **343.2** after the Suwen 13 trailer; that is history, not a live number.
3. **`get_cost: true`** on one representative clip in the chosen configuration.
4. **State cost per clip and for the whole cut.**
5. **Confirm model and Draft/Full with the user, and wait.**

### Credit estimate — plan only

| Item | Price used | Count | Estimate |
|---|---|---|---|
| Style key `nano_banana_pro` 1k 9:16 | 2.0 | 1 | 2 |
| Clips `seedance_2_0_mini` 480p 10s 9:16 (draft) | 10.0 | 7 | 70 |
| Voice takes `seed_audio` | **1.45** | 7 first pass | ~10 |
| Voice re-takes at the measured 4.7× rate | 1.45 | ~26 | ~38 |
| Assembly, captions, burn | free | — | 0 |
| | | | **~120** |

**Budget ~120, not ~82.** The naive first-pass figure is 82 and the Suwen 13 run
came in at **119.7 against an ~85–95 preflight**, with the entire gap in the
*number* of voice takes rather than their price. That run is the only one in the
repo whose delta fully reconciles, so its re-take rate is the best estimate
available. **A 720p full render replaces the 70 with 175 and takes the total to
~225.**

> **Do not preflight voice on a short probe string.** `seed_audio` bills by length,
> and this figure has been got wrong twice in the repo in opposite directions —
> 0.5/take from a 13-word probe and 0.1/take from a shorter one, against a measured
> **1.3–1.7**. Cost a representative-length line from the table above.

### Style key — this chapter needs a new one

Chain off the Suwen 1 head `4b6f7106-67da-4d1a-a553-c58ba90ac43f` recorded in
`SKILL.md` step 1, passed as a **job ID** reference with only the motif swapped.
`SKILL.md` settled this on 2026-08-10 and the reason applies here with unusual
force: each chapter key bakes in its own chapter's furniture, and the Suwen 8 key
(`05ebe984-2781-491e-8c84-2b20e608d2a8`) carries a lacquer chart of twelve boxes
that would collide directly with **this** chapter's eight-direction floor chart.
Chain off the neutral head.

| | |
|---|---|
| Job ID | *(to be recorded)* |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key standing on a lacquer floor inlaid with an eight-direction chart; high above them a single dark ink disc hangs in a wide empty field, with nothing beneath it and nothing touching it |
| Derivation | Suwen 1 head → this key |
| Estimated cost | 2 credits |

The longform needs a **16:9 sibling** derived from *this* job ID once it exists.
**Do not overwrite the vertical key** — this trailer depends on it.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails.

### Clips — plan

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16.** Style key attached to
every clip as `image_references`. `generate_audio: false` on all seven — this is a
**correctness requirement**, not a saving: the assembler mixes clip audio in at 0.12
under the voice, so a clip generated with native audio will be audible in the
finished cut and the only fix is regenerating it.

**Declare the aspect ratio twice** — `aspect_ratio: "9:16"` on the call *and*
"vertical 9:16 portrait framing" in the prompt text. **Check the first clip's
returned dimensions before generating the other six.**

**Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on all seven.
Every shot in this cut has a dark field in the upper third by construction, so this
one will fire more reliably here than on any cut the repo has run.

**Keep audio vocabulary out of every clip prompt** — *drum*, *drone*, *bell*,
*music*, *rhythm*. Lei-Gong's hand drum is a **prop** in shot 5 and must be
described as an object hanging at his hip, never as a sound.

| Block | Job ID | Notes |
|---|---|---|
| 1–7 | *(to be recorded)* | one clip per block, style key on each |

### Voiceover — plan

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55** on all four voices.
**Generate two variants per block and keep the better one** — at ~1.45 a take that is
the cheapest reliable method, and a word count predicts a take only to about ±1.5s.

| Block | Voice | Words | Predicted speech at the measured rate | Margin above the 8.6s floor |
|---|---|---|---|---|
| 1 | Arthur | 42 | ~9.5s | +0.9s |
| 2 | Xavier | 42 | ~9.8s | +1.2s |
| 3 | Vesper | 42 | ~9.3s | +0.7s |
| 4 | Arthur | 42 | ~9.5s | +0.9s |
| 5 | Zane | 52 | ~9.9s | **at the ceiling — re-roll expected** |
| 6 | Arthur | 41 | ~9.3s | +0.7s |
| 7 | Arthur | 28 | ~9.6s by measured precedent | see the block-7 note |

**Blocks 5 and 7 are the two to expect trouble on.** Block 5 sits at Zane's ceiling
and block 7 is the mandated-disclaimer structure that ran pathologically slow on the
previous cut. Re-roll both freely before rewriting; the named repair for block 5 is
in its note above and **is a deletion, not a re-punctuation.**

Record each take's **job ID, file duration, and the assembler's measured speech
figure** to three decimal places. They differ, and the second is the one that was
gated — a take written up as "8.50s pass" has already stopped an assembly at 0.103s
under the floor.

### Assembly — plan

**Foreground, one chained command.** A 7-block assembly finishes inside the 120s
budget comfortably, and `background: true` has already lost a whole finished render
on this pipeline when the transport call timed out and the sandbox was reclaimed.

Flags: `--out`, `--blocks 7`, `--manifest pairs.txt`. No `--clip-seconds` (leave the
window alone). No `--music` until guqin licensing is cleared. **No `--subs`** — it is
a hard error; captions are a separate step.

Name files `blockNN.mp4` / `voiceNN.wav` with the numbers aligned. Call
`media_upload` *before* the assembling command and append the `curl -f -X PUT
--upload-file` to that **same** command; `media_confirm` only after HTTP 200. The
sandbox is discarded ~10 seconds after the call returns, so a render that is not
exported inside the call is simply lost.

Record afterwards: block count, the flags used, the manifest, the exported
`media_id`, the **whole download URL**, and any assembler WARNs accepted rather than
fixed.

### Captions — plan

Built from this document by `scripts/build_subtitles.js` **after the takes exist and
their durations are in the record above**, then burned locally. The assembler burns
nothing.

**The sidecar cannot be built yet** and none is committed with this document —
`build_subtitles.js` reads take durations out of the production record, and there are
none. `CLAUDE.md` requires the `.srt`/`.vtt` as tracked deliverables; they are built
and committed with the render, not before it.

### Reproduction notes

- **Nothing has been generated.** This section exists to be filled.
- **The supplied source extracted as simplified Chinese, and every card in this cut
  is set in traditional.** The chapter arrived as
  `04_Ch_SW67__What_Holds_the_Earth_Up.md`, a ctext.org export whose Chinese
  extracted cleanly but in simplified form (地之为下 / 大气举之也). **The traditional
  forms used on this cut's one card were converted by hand and are not from the
  source file.** ffmpeg renders a missing or wrong glyph silently, and nothing
  downstream re-checks it. Verify 大氣舉之也 against the longform's *Source text and
  translation* before burn.
- **The supplied English translation of §3 is corrupted** — whole runs of words are
  fused together (*"on theleft istaiyang, and on theright isshaoyang"*). That section
  is not used by this trailer, but the longform depends on it and reconstructs it;
  see that document's reproduction notes.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7. Block 7 is
  planned into the block count and into the credit estimate above, as `CLAUDE.md`
  requires; it is not folded into the title block.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. **Not in any voice take** in this cut.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none. **Guqin licensing is unresolved** (slate §9) — until cleared, score
  this cut with no guqin. The struck bronze note called for at block 4 is **not
  music** and is not generated either: it is a single percussive strike, hand-placed
  at edit. Trailers earn disproportionate plays and carry the higher Content-ID
  exposure, so this is the cut to be most careful about.

### Finishing steps

**Not yet executed — this cut has not been rendered.** The procedure below is
written with **this cut's own numbers**: 7 blocks, 70.0s, quotation card at
**0:30–0:40**, end card **1:00 to 1:10**.

Both caption scripts are pure text tools: they read this document, touch no video,
need no network and cost no credits. **Run them from the repo root or pass an
absolute path.**

**1. Check captions** at 9:16, **before generating takes** — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/suwen/ch67/inner-canon-suwen67-trailer-v1.md
```

**Run 2026-08-10. The result is one known exception plus fourteen overflowing
clauses across all seven blocks, and none of them is a defect. That is the highest
count any cut in this repo has carried and the number is stated rather than
softened**, against nine on the rendered Suwen 13 trailer, four on Lingshu 8 and
three on Suwen 8.

The exception is the mandated disclaimer. *"A dramatized adaptation of a classical
philosophical text."* is 58 characters and 1187px against a 556px line — it needs
three lines on a 720-wide vertical frame and fits on one at 16:9. It is a compliance
string, cannot be reworded, and `check_caption_fit.js` carries it as a known
exception. The sidecar splits it and libass margins keep it in frame.

**The fourteen are structural rather than careless, and the arithmetic says so.**
The vertical two-line budget is **1111px, about 44 characters**. The assembler's
8.6s floor forces roughly 42 words into every block, which is about 200 characters,
so a block clears the budget only if it is cut into five or more clauses — and
`SKILL.md` caps a block at four sentences because the assembler *warns* on internal
pauses of 0.8s or more. **The two rules cannot both be satisfied at 9:16.** Every
clause below runs 56 to 99 characters, which is three or four cues each.

**One free repair was looked for and there is none here.** The lever on a
comparable cut was to add a comma to a block with word-count headroom, converting a
three-line cue into a one-line and a two-line cue. It is unavailable in this cut:
blocks 1, 2, 3 and 4 sit at 42 words in windows whose ceilings are 43 and 44, block
5 is at Zane's ceiling exactly, and the punctuation measurement puts a comma at
roughly 0.4s. **Buying caption width here would spend duration none of these blocks
has**, on a window 1.4s wide, to fix a problem the sidecar already solves. Block 5
is the sharpest case: its four-item alternation is the exact structure that returned
a 12.022s take when written as a comma list, and it is comma-free for that reason.

**Read the non-zero exit as *"this will read busily"*, never as *"this cut will
overflow"*.** The sidecar pre-splits every clause above and libass cannot draw
outside its margins.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in
the record.

```
node scripts/build_subtitles.js output/suwen/ch67/inner-canon-suwen67-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
1:00) so the disclaimer is not simultaneously a caption and a card. The burn copy is
blocks 1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched
with the picture. Convert the `.srt` to `.ass` and re-target `PlayResX/Y` to
720×1280 first; ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every
style value by ~4.4× and runs the lines off frame. `build_subtitles.js` prints the
command in this order already.

**Run `fc-match Anton` in the sandbox, where the burn actually happens.** The sandbox
ships Metropolis and Montserrat and no Anton; libass substitutes a wider face
silently while `build_subtitles.js` still reports the line as fitting. Install it in
the same chained command:

```
mkdir -p ~/.fonts
curl -sSfL -o ~/.fonts/Anton-Regular.ttf \
  https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf
fc-cache -f >/dev/null 2>&1
fc-match Anton    # must print: Anton-Regular.ttf: "Anton" "Regular"
```

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's rising shot. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the
lower-third **above** that band. **y=896** is the position the comparable cuts used
and measured clear of the caption band.

**5. Quotation card — block 4, in at 0:30, out at 0:40.** Block 4 renders as a plain
plate by default, so **大氣舉之也** is added here in the same `drawtext` pass.
**Verify every glyph against the longform's *Source text and translation* before
export**, and note that the source file supplied these characters in simplified form
only. ffmpeg needs a CJK-capable face — Anton has no Chinese coverage and renders
tofu boxes silently. **Five characters alone should fill the frame**; this is the
cut's only classical text and it is the sentence the whole trailer exists for.

> **⚠ This step was skipped on a comparable cut and the card shipped blank.** The
> Suwen 13 trailer's block-4 card is still an empty plate in its delivered file
> because the burn pass covered captions, the lower-third and the end card only. **Do
> not treat step 5 as optional here.**

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Block 7's plate is a
light ink wash, so **a full-frame scrim at roughly `black@0.62`** will be needed for
white text to be legible; a comparable cut measured top-strip luma at 79.7 after the
scrim against 210.7 on the uncaptioned master. Both lines also go in the description
at upload.

**7. Music.** None, until guqin licensing is cleared. The block-4 bronze strike is
hand-placed at edit and is not a bed.

---

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, before any
generation. The longform's audit governs the material this trailer draws from; these
are the trailer-specific findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document, at
  the head of block 7's narration, on screen as the end card, and in the description.
  Block 7's narration is extended past the mandated string to clear the 8.6s floor;
  **the mandated sentence itself is unaltered.**
- **The slate's named care point for this chapter is the gravity claim, and it is
  answered inside the trailer rather than deferred to the episode.** §3.7: *"this is
  not a discovery of gravity, and claiming so would invite well-deserved
  correction."* **Block 4 is that correction and it is a whole block of the seven** —
  a seventh of the runtime spent saying what the cut is not. It arrives immediately
  after the answer and before Lei-Gong is allowed to be impressed by it, which is the
  order that matters: the audience is told the limit before they are told the merit.
  **Block 4 is not a lever and must not be dropped, split, or moved after block 5 in
  any recut.**
- **The hook is a claim about a document, not a mystery claim.** *A doctor was asked
  what holds the earth up* is verifiable and is what the chapter contains. Nothing in
  the cut promises lost knowledge, a suppressed discovery, or an ancient people who
  knew something modern science does not. **The words *ancient secret*, *lost
  knowledge*, *they knew*, *ahead of its time* and *predicted* appear in no line, no
  title and no thumbnail direction**, and *predicted* is specifically excluded even
  though block 4 uses *predicted* about what the text **cannot** do.
- **Supernatural hooks explicitly debunked by the payoff** — and here the debunk is
  the payoff. Block 4 refuses the reading the hook invites, and block 5 then states
  the actual merit in its weakest defensible form: that the answer **refuses** the
  supports every neighbouring cosmology assumed. That is a claim about what a
  sentence does not say, which is the safest form the material has. **The honest test
  for a trailer is whether it promises anything the episode does not deliver.** It
  promises a question, an answer, a refusal, a comparison and a second surprise; the
  episode delivers all five and scores the middle three.
- **Health content stays philosophical narrative** — no dosage, no regimen, no
  diagnosis, no benefit claim and no treatment described anywhere in the cut. **The
  entire five-direction correspondence half of the chapter is absent from this
  trailer**, which is where all of its medical content lives. The only medical
  reference in seven blocks is block 6, and it is the chapter saying its own
  instrument **cannot** read something. **The trailer's only technical claim about
  medicine is a claim about its limits.**
- **The chapter's death-prognosis lines are absent and must stay absent.** §5 ends
  尺寸反者死，陰陽交者死 — two flat statements that a named pulse finding means death.
  That is diagnostic-prognostic content of exactly the kind the slate's excluded
  chapters were excluded for. **It appears in no line and no shot in this cut**, and
  the longform quotes it only in its source section under an explicit exclusion. **Do
  not restore it to a trailer at any runtime.**
- **Mortality and ageing — absent.** Nothing in the cut approaches mortality, so the
  portraits-not-bodies rule has no work to do. **No body is drawn in seven shots and
  no patient appears**, including block 6, which is staged as a wrist cushion on an
  empty table with the hand withdrawing above it.
- **Anatomy — absent by construction.** This chapter's second half locates organs
  against directions and flavours, which invites anatomical illustration. **None of
  that material is in this cut**, and *organ*, *liver*, *anatomy* and *body* are
  **banned from every clip prompt**.
- **Occult and ceremonial imagery — designed out.** A trailer about the heavens, the
  great void and a great breath invites altars, robed ritual, talismans and star
  spirits, and **restraint or bound-figure imagery has tripped this service's safety
  filter before on innocuous subject matter.** There is **no ceremony in the shot
  list**: the material is carried by a floor chart, a hanging disc, a cord that stops
  short, a card, four sketches being wiped away and a wrist cushion. **The cord in
  shot 3 must be prompted as a single brushed line whose top end is unfinished** —
  never as anything tethering, binding or holding the disc, which would also invert
  the argument.
- **Indulgence and alcohol — not present** anywhere in narration or in any of the
  seven shots.
- **Title and thumbnail honour the educational payoff** — *What Holds the Earth Up*;
  on-screen framing *Suwen 67, 五運行大論 — The Great Discourse on the Five
  Movements*. **Thumbnail direction:** the hanging ink disc in its empty field with
  the eight-direction floor chart beneath it and a visible gap between them, and
  大氣舉之也 set to one side. **No planet, no photographic earth, no globe, no orbit
  diagram and no falling apple** — every one of those imports the gravity reading the
  cut spends a block refusing. No faces, no talismans, no glowing hands.
- **Hedge allocation — three characters speak in a 7-block trailer, which is unusual
  and needs recording.** `SKILL.md` makes narrator-only the trailer default precisely
  because the narration carries every hedge. Here **Arthur keeps all four framing
  blocks (1, 4, 6, 7)**, including the whole of the not-gravity correction and the
  disclaimer. **No compliance content sits on a character voice at all**: block 2 is
  Fan-di's demand, block 3 is Dr-Qi rendering 地為人之下，太虛之中者也 and 大氣舉之也
  close to literally, and block 5 is Lei-Gong comparing cosmologies. None of the three
  makes a claim about the body, about treatment, or about what modern science knows.
- **Historical accuracy** — cited on screen as **Suwen 67**, never a bare "Chapter
  67", and the Lingshu's own chapter sixty-seven makes the collision real rather than
  theoretical. Block 3 renders the two source sentences closely and keeps *the great
  breath* rather than *qi* untranslated-and-unexplained, because a trailer has no room
  for the gloss and *great qi* with no gloss is the one phrase in the cut a viewer
  could take as jargon. **Block 4's three nouns — force, mass, measurement — are named
  as things the text lacks**, which is accurate: the chapter contains no quantity of
  any kind in this passage.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No character
  makes a first-person factual assertion about their own expertise** — Dr-Qi reports
  the chapter's answer and asserts nothing in her own person.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a floor chart, a seated figure with
  a fan, a woman with a scroll, a text card, four sketches being wiped away, a wrist
  cushion and a plate. **No bodies, no injury, no anatomy, no ceremony, no restraint
  or bound-figure imagery.** Every shot has a dark upper field and will trigger
  `IN THE DARK` — pre-decline on all seven.

---

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole 10s
blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's comparison. The
question, the answer, the correction and the second surprise all survive. **Cost:**
block 4 then says what the answer is *not* and nothing says what it *is*, so the cut
reads as a correction with no claim attached — and it loses its fourth voice. This is
the cut to make only if the budget forces one, and it is still the right one to make
before touching block 4.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 6. **Not recommended.** Block
6 is the evidence that the chapter is not a one-sentence curiosity, and without it the
trailer sells a single quotation.

**Do not reach 60s by dropping block 4.** It is the slate's named care point for this
chapter and it is the one block whose absence changes the cut from history of science
into the overreach the slate exists to prevent.

**Stretch to 80s (8 blocks) — add 1.** Add a **second Dr-Qi block after 3**, carrying
the six qi that act on the suspended earth: dryness dries it and heat steams it and
wind moves it and damp moistens it and cold hardens it and fire warms it. Written for
Vesper at 42 words with *and* between every item and no commas anywhere. **This is
the strongest single addition available**, because it converts the answer from an
assertion into a system — the void is not empty, it is six things doing work. It
costs the cut its narrator-heavy balance and puts two consecutive Dr-Qi blocks back to
back, which is why 70s remains the recommendation.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus an Arthur block after 5 on
Anaximander: that a Greek roughly a century before this text said the earth stays put
because it has no reason to go anywhere, and that two cultures reached a suspended
world by arguments that share nothing. **At 90s the trailer starts teaching the
episode rather than selling it**, which is the reason 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:**

- **Block 7** — the disclaimer card is mandatory and is not a lever.
- **Block 4** — the not-gravity correction, in full and in its position. See
  *Compliance notes*.
- **Block 3** — it is the only place the chapter's actual sentence is spoken, and
  without it the trailer is a set of claims about a text nobody has heard.

