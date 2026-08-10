# The Emperor's Inner Canon — Lingshu 8 Trailer v1 (70 seconds)

**靈樞·本神第八 · The Ancient Map of the Mind**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Lingshu 8*.** Suwen 8 (靈蘭秘典論) is a different
chapter and is already produced by this channel, so the collision is live rather
than theoretical. Both halves of the canon run to eighty-one separately numbered
chapters, and a bare "Chapter 8" sends a checking viewer to the wrong text about
half the time.

Companion longform: `inner-canon-lingshu8-longform-v1.md` (96 blocks, 16:00),
which holds the complete classical text, this cut's working translation, and the
compliance audit this trailer inherits.

**Slate position.** Lingshu 8 is **rank 4 of the Top-20 slate and publish slot 3** —
`docs/Chronicle of Balance Top20 Chapter Slate.md` §3.4 and §5. Its stated job is
to carry **the highest RPM band on the slate**, deployed early *"to establish the
revenue floor while impressions are cheap,"* and to be *"the strongest 'this text
is smarter than you assumed' episode."* The slate assigns it the **lexicon**
structural form — the glossary built on screen, term by term, each new word
defined only from words already established, the visual being a diagram
assembling itself.

**That form is the trailer's whole design problem.** A lexicon does not trail
well: a definition is not a hook, and one definition read aloud is indistinguishable
from a dictionary entry. **Block 3 is the answer** — it carries *three* links of
the chain in one take, because two links read as a list and three read as a
machine. Everything else in the cut exists to set that block up and to bank it.

**This is a fresh treatment.** No prior version of this chapter exists in
`output/`; nothing has been carried over from any earlier script, per the brief.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the
real choice is six, seven, eight or nine blocks. **Seven is where this chapter's
hook lands** without stretching:

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer
  has five content blocks and a 70s trailer has six.
- The trailer has to carry **five things**: the strangeness of the list, the
  Emperor's demand for definitions, the chain actually working, the absence at the
  top of it, and the manual admitting where its own technique stops. At six content
  blocks that is one block each plus the audit beat that makes the last one land.
  At five, the block that goes is Lei-Gong's — and the closing turn then arrives
  with nobody having doubted anything.
- **80s and 90s are available and are specified in *Runtime levers*,** but they buy
  a second lexicon block rather than a new argument. The trailer's job at slot 3 is
  to sell *that this text is smarter than you assumed*; it is the episode's job to
  prove it thirteen times over.

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

**SOUND:** No music under blocks 1–2. A single struck note enters at block 3 with
the first link of the chain and holds. Everything drops to room tone at block 6.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**,
text-free except blocks 4 and 7. **The longform's descending chain is the trailer's
one carried-over image** — it appears in blocks 1, 3, 4 and 6, and the blank silk
above its top link is the cut's closing frame.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Two thousand years ago somebody sat down and wrote a complete map of the human mind. Thirteen words for its parts. Not one of them is the word mind. And the brain is not on the map anywhere at all. |
| 2 | Fan-di (Xavier) — the demand | In every method of the needle, one must first take the spirit as the root. So I am told. Then tell me what a spirit is. Tell me what a will is and a thought, because nobody has ever defined one. |
| 3 | Dr-Qi (Vesper) — the chain | I will build them in order, and the order is the point. That which brings forth life is called essence. When two essences strike together, that is what we call spirit. What comes and goes with the spirit is the hun. |
| 4 | Arthur (V.O.) — the absence | Spirit is not a substance there. It is a collision. And the list goes on for ten more terms without once naming an organ above the neck, because in this chapter the mind is kept in the liver and the lungs and the kidneys. |
| 5 | Lei-Gong (Zane) — the audit | I came to catch him out, and here is what I expected. Old words for the soul, piled up by somebody who liked the sound. That is not what this is. Every term is built from the one before it, and you cannot pull one out without the rest falling. |
| 6 | Arthur (V.O.) — the turn | And at the end, the manual does something manuals never do. It says that when all five of these are injured, the needle cannot treat it at all. A book about needles, telling you exactly where its own needle stops. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode builds all thirteen and asks what this ancient map of the mind got right. |

**Every block above is inside its voice's re-measured range**, verified by parsing
this document's own narration table and dropping tokens that contain no letter or
digit — a spaced em-dash is not a word, and counting it as one spends real budget
on a window 1.4s wide.

| Block | Voice | Words | Budget | Margin |
|---|---|---|---|---|
| 1 | Arthur | 40 | 38–44 | mid-range; 40w returned 9.723s on Suwen 13 |
| 2 | Xavier | 41 | 40–44 | mid-range; 41w returned 9.702s first take on Suwen 13 |
| 3 | Vesper | 41 | 41–43 | **at the floor deliberately** — 42w passed by 0.055s and was rejected as too tight |
| 4 | Arthur | 44 | 38–44 | at the ceiling; 44w returned 9.431s |
| 5 | Zane | 50 | 47–52 | mid-range; 50w returned 9.539s first take |
| 6 | Arthur | 40 | 38–44 | mid-range |
| 7 | Arthur | 28 | **~29 total** | mandated string plus a **17-word** tail — see below |

> **Block 7 is short on purpose and the reason is measured.** The mandated
> disclaimer is two short full-stopped sentences, and `seed_audio` treats them as
> separate beats and slows the whole take around them. On the Suwen 13 trailer the
> same block at 33 words returned **11.326s, 16.930s and 10.538s** — three takes,
> all over, one by nearly seven seconds. **Cutting the trailing clause to 18 words
> landed it at 9.602s on the first roll.** The tail here is 17 words for that
> reason. **Do not lengthen it to reach Arthur's 38–44 range**; that range does not
> apply to this block and the checker will flag it wrongly.

**No block contains a comma-separated list of three or more items**, and no block
exceeds four sentences. Block 4's three organs are joined with *and* rather than
commas, deliberately: the same measurement run put a 31-word Arthur line with seven
commas at **12.022s** against **8.913s** for the same 31 words with none, a 3.1s
swing from punctuation alone on a window 1.4s wide. **Do not add commas to these
lines.**

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks
4 and 7.** Every shot needs motion from frame 1 — the assembler warns on a static
open or a frozen tail.

1. A tall hanging scroll, vertical, unrolling downward. A chain of brushed marks writes itself down the silk, each link joined to the one above by a single hairline stroke, accelerating as it descends past the frame edge. **Above the topmost link the silk stays blank.** Slow push in.
2. Interior audience chamber, vertical framing. FAN-DI on the high seat in the gold robe and thin round glasses, **fan snapping open** across the frame. Behind him the scroll hangs with only three links inked.
3. DR-QI at the scroll's foot, blue cheongsam with cloud embroidery, open bamboo scroll held casually like a tablet. **Three links ink themselves in sequence as she speaks**, each one growing out of the stroke above it. Her hand does not move; the ink does.
4. **CARD** — 兩精相搏謂之神, five characters brushed on silk, held alone. Behind them the chain continues down and to the left, and the camera drifts up past the top link to a wide field of blank, unmarked silk. *(Default: plain plate, characters added at edit — see Finishing steps.)*
5. LEI-GONG alone, cinnabar robe with lightning trim, small hand drum at his hip, wax tablet raised. He pulls one link out of a chain drawn beside him and the whole chain collapses into loose strokes on the floor.
6. A single acupuncture needle laid down flat on silk beside the completed chain, and the hand withdrawing from frame. Then the chain read from the bottom upward, ending on the blank silk above the top link. **No patient and no body is drawn.**
7. **END CARD** — plain plate, ink wash drifting. Disclaimer and editorial credit added at edit time.

**Blocks 4, 6 and 7 are the stillness risks.** A held card, a laid-down object and
a plate. Give each a slow push, drifting ink grain, or a light change so the clip
does not read as a held frame.

**No anatomy anywhere in seven shots.** The chapter's organs are named in narration
and are never drawn — this is the chapter's single largest prompt-stage risk and it
is designed out rather than managed. See *Compliance notes*.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-lingshu8-longform-v1.md`, which holds the complete classical text.

| § | Passage | Blocks |
|---|---|---|
| §1 | 凡刺之法，先必本於神 | 2 |
| §1 | 何謂德、氣、生、精、神、魂、魄、心、意、志、思、智、慮？請問其故 | 1, 2 |
| §2 | 故生之來謂之精 | 3 |
| §2 | **兩精相搏謂之神** | 3, 4 |
| §2 | 隨神往來者謂之魂 | 3 |
| §2 | 因慮而處物謂之智 | 5 |
| §6 | **五者已傷，鍼不可以治之也** | 6 |

**Block 1's "thirteen words" is a count of the Emperor's own list** — 德, 氣, 生,
精, 神, 魂, 魄, 心, 意, 志, 思, 智, 慮 — as he asks it in §1. The chapter then
defines eleven of them and treats 德 and 氣 as the two sources rather than as
members of the set. **The count is defensible and is worth stating precisely in the
longform rather than in a trailer**; here it reads as thirteen because that is the
number the Emperor asks about.

**Block 4's "the brain is not on the map" is an argument from absence and is
true of this chapter**, which never mentions 腦. It is **not** true of the canon as
a whole — the brain appears in Suwen 11 as one of the extraordinary organs, a
chapter this channel has already produced. **The longform makes that qualification
explicitly at block 57**; the trailer cannot, so it says *"in this chapter"* in
block 4's own sentence rather than leaving the claim open. Do not remove that
clause in any recut.

**Block 5 is not in the source and is the trailer's one invention** — nobody in the
chapter remarks that the definitions form a chain. Lei-Gong's audit is ours, in the
longform (blocks 30, 41 and 53) and here.

**Longform beats deliberately withheld from this trailer:** the entire comparative
act (Plato and Aristotle), the whole of the emotional-damage material and its
seasonal deaths, the 養生 regimen passage, and both reckonings. **Two of those are
withheld on compliance grounds rather than for pacing** — see below.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.

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
**Do not chain off the Suwen 8 key** (`05ebe984-2781-491e-8c84-2b20e608d2a8`): it
carries chapter-8 furniture — a lacquer chart of twelve boxes and a closed chest —
that would have to be prompted away, and its twelve-box chart is close enough to
this chapter's thirteen terms to produce a genuine visual collision between two
chapters the channel has both produced.

| | |
|---|---|
| Job ID | *(to be recorded)* |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key; behind them a tall scroll on which a chain of brushed terms writes itself downward, each link joined to the one above by a single hairline stroke, and above the topmost link a wide field of blank unmarked silk |
| Derivation | Suwen 1 head → this key |
| Estimated cost | 2 credits |

The longform needs a **16:9 sibling** derived from *this* job ID once it exists.
**Do not overwrite the vertical key** — this trailer depends on it.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails.

### Clips — plan

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16.** Style key attached to
every clip as `image_references`. `generate_audio: false` on all seven — this is a
**correctness requirement**, not a saving: the assembler mixes clip audio in at
0.12 under the voice, so a clip generated with native audio will be audible in the
finished cut and the only fix is regenerating it.

**Declare the aspect ratio twice** — `aspect_ratio: "9:16"` on the call *and*
"vertical 9:16 portrait framing" in the prompt text. **Check the first clip's
returned dimensions before generating the other six.**

**Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on all
seven. Blocks 4, 6 and 7 are lamp-lit against black and will trigger it.

| Block | Job ID | Notes |
|---|---|---|
| 1–7 | *(to be recorded)* | one clip per block, style key on each |

### Voiceover — plan

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55** on all four voices.
**Generate two variants per block and keep the better one** — at ~1.45 a take that
is the cheapest reliable method, and a word count predicts a take only to about
±1.5s.

| Block | Voice | Words | Predicted speech at the measured rate | Margin above the 8.6s floor |
|---|---|---|---|---|
| 1 | Arthur | 40 | ~9.1s | +0.5s |
| 2 | Xavier | 41 | ~9.7s | +1.1s |
| 3 | Vesper | 41 | ~9.1s | +0.5s |
| 4 | Arthur | 44 | ~10.0s | **at the ceiling — re-roll expected** |
| 5 | Zane | 50 | ~9.5s | +0.9s |
| 6 | Arthur | 40 | ~9.1s | +0.5s |
| 7 | Arthur | 28 | ~9.6s by measured precedent | see the block-7 note |

**Blocks 4 and 7 are the two to expect trouble on.** Block 4 sits at Arthur's
ceiling and block 7 is the mandated-disclaimer structure that ran pathologically
slow on the previous cut. Re-roll both freely before rewriting; **if block 4 lands
long twice, cut *anywhere at all* from its final clause** rather than rebalancing
the sentence, because the clause is already comma-free and there is no punctuation
left to trade.

Record each take's **job ID, file duration, and the assembler's measured speech
figure** to three decimal places. They differ, and the second is the one that was
gated — a take written up as "8.50s pass" has already stopped an assembly at
0.103s under the floor.

### Assembly — plan

**Foreground, one chained command.** A 7-block assembly finishes inside the 120s
budget comfortably, and `background: true` has already lost a whole finished render
on this pipeline when the transport call timed out and the sandbox was reclaimed.

Flags: `--out`, `--blocks 7`, `--manifest pairs.txt`. No `--clip-seconds` (leave
the window alone). No `--music` until guqin licensing is cleared. **No `--subs`** —
it is a hard error; captions are a separate step.

Name files `blockNN.mp4` / `voiceNN.wav` with the numbers aligned. Call
`media_upload` *before* the assembling command and append the `curl -f -X PUT
--upload-file` to that **same** command; `media_confirm` only after HTTP 200. The
sandbox is discarded ~10 seconds after the call returns, so a render that is not
exported inside the call is simply lost.

Record afterwards: block count, the flags used, the manifest, the exported
`media_id`, the **whole download URL**, and any assembler WARNs accepted rather
than fixed.

### Captions — plan

Built from this document by `scripts/build_subtitles.js` **after the takes exist
and their durations are in the record above**, then burned locally. The assembler
burns nothing.

**The sidecar cannot be built yet** and none is committed with this document —
`build_subtitles.js` reads take durations out of the production record, and there
are none. `CLAUDE.md` requires the `.srt`/`.vtt` as tracked deliverables; they are
built and committed with the render, not before it.

### Reproduction notes

- **Nothing has been generated.** This section exists to be filled.
- **The supplied source PDF's Chinese did not extract.** The chapter arrived as
  `03_Ch_LS08__The_Ancient_Map_of_the_Mind.pdf`, a ctext.org print in which the
  Chinese is set in an embedded subset font with a custom encoding; the English
  translation extracted cleanly and the classical text did not. **The Chinese in
  this document and in the longform is the received text supplied from knowledge of
  the canon, not extracted from the PDF.** Every card glyph must be verified
  against the source before burn — see the longform's *Source text and
  translation*, which carries the same warning and is the single place to do it.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7. Block 7 is
  planned into the block count and into the credit estimate above, as
  `CLAUDE.md` requires; it is not folded into the title block.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. **Not in any voice take.**
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none. **Guqin licensing is unresolved** (slate §9) — until cleared,
  score this cut with no guqin. Trailers earn disproportionate plays and carry the
  higher Content-ID exposure, so this is the cut to be most careful about.

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
node scripts/check_caption_fit.js output/lingshu/ch8/inner-canon-lingshu8-trailer-v1.md
```

**Run 2026-08-10. The result is one known exception plus four overflowing clauses,
and none of them is a defect.**

The exception is the mandated disclaimer. *"A dramatized adaptation of a classical
philosophical text."* is 58 characters and 1187px against a 556px line — it needs
three lines on a 720-wide vertical frame and fits on one at 16:9. It is a
compliance string, cannot be reworded, and `check_caption_fit.js` carries it as a
known exception. The sidecar splits it and libass margins keep it in frame.

The four overflows are **blocks 1, 4 (twice) and 7's tail**, at 84 to 90 characters
against a two-line budget of roughly 44. **They are left in deliberately** and the
reason is the take window rather than laziness:

- **Block 4 is at Arthur's 44-word ceiling.** Its two long clauses are the missing-
  brain claim and its *"in this chapter"* qualifier, and both are load-bearing —
  the qualifier cannot be dropped and the claim cannot be shortened. **Adding a
  comma to either would buy caption width with duration the block does not have**,
  and the same measurement run that set these budgets recorded a 3.1s swing from
  punctuation alone.
- **Block 7 is the mandated-disclaimer block**, whose structure already ran
  pathologically slow on the comparable cut. Nothing is added to it.
- **Block 1 splits acceptably** — its overflow is one 84-character sentence that the
  sidecar breaks into two cues.

**Two commas were added at this stage and both were free**: block 2 after *"of the
needle"* and block 6 after *"at the end"*. Each converts a three-line cue into a
one-line and a two-line cue, at the cost of a single pause on a block with word-
count headroom. **That took the count from six overflows to four** — against nine on
the rendered Suwen 13 trailer and three on Suwen 8, so this cut sits mid-range for a
9:16 cut written to an 8.6s floor.

**Read the non-zero exit as *"this will read busily"*, never as *"this cut will
overflow"*.** The sidecar pre-splits every clause above and libass cannot draw
outside its margins.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in
the record.

```
node scripts/build_subtitles.js output/lingshu/ch8/inner-canon-lingshu8-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
1:00) so the disclaimer is not simultaneously a caption and a card. The burn copy
is blocks 1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched
with the picture. Convert the `.srt` to `.ass` and re-target `PlayResX/Y` to
720×1280 first; ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every
style value by ~4.4× and runs the lines off frame. `build_subtitles.js` prints the
command in this order already.

**Run `fc-match Anton` in the sandbox, where the burn actually happens.** The
sandbox ships Metropolis and Montserrat and no Anton; libass substitutes a wider
face silently while `build_subtitles.js` still reports the line as fitting. Install
it in the same chained command:

```
mkdir -p ~/.fonts
curl -sSfL -o ~/.fonts/Anton-Regular.ttf \
  https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf
fc-cache -f >/dev/null 2>&1
fc-match Anton    # must print: Anton-Regular.ttf: "Anton" "Regular"
```

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's self-writing chain. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the
lower-third **above** that band. **y=896** is the position the comparable cut used
and measured clear of the caption band.

**5. Quotation card — block 4, in at 0:30, out at 0:40.** Block 4 renders as a
plain plate by default, so **兩精相搏謂之神** is added here in the same `drawtext`
pass. **Verify every glyph against the longform's *Source text and translation*
before export.** ffmpeg needs a CJK-capable face — Anton has no Chinese coverage
and renders tofu boxes silently. **Five characters alone should fill the frame**;
this is the cut's only classical text.

> **⚠ This step was skipped on the comparable cut and the card shipped blank.**
> The Suwen 13 trailer's block-4 card is still an empty plate in its delivered
> file because the burn pass covered captions, the lower-third and the end card
> only. **Do not treat step 5 as optional here** — it is the cut's single classical
> quotation and the sentence the whole lexicon turns on.

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Block 7's plate is a
light ink wash, so **a full-frame scrim at roughly `black@0.62`** will be needed
for white text to be legible; the comparable cut measured top-strip luma at 79.7
after the scrim against 210.7 on the uncaptioned master. Both lines also go in the
description at upload.

**7. Music.** None, until guqin licensing is cleared.

---

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, before any
generation. The longform's audit governs the material this trailer draws from;
these are the trailer-specific findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document,
  at the head of block 7's narration, on screen as the end card, and in the
  description. Block 7's narration is extended past the mandated string to clear
  the 8.6s floor; **the mandated sentence itself is unaltered.**
- **The slate's named care point for this chapter is the emotional-damage
  material, and this trailer does not contain any of it.** §3.4: *"The chapter's
  later sections on emotional damage to the organs should be handled as historical
  psychology, not as a mental-health claim — and the episode should not offer any
  coping advice of any kind."* The trailer stops at the lexicon and the needle. **No
  emotion is named in any of the seven blocks.** Anxiety, grief, joy, worry, anger
  and fear appear nowhere, and neither does 狂. That is a compliance decision, not
  a pacing one: **a ten-second block cannot carry a claim about emotion and illness
  together with its refusal**, and carrying the claim without the refusal is
  precisely the failure the slate warns about. **Do not add one in any recut.**
- **No coping advice, and none is possible here.** The 養生 regimen passage —
  the chapter's own prescription about the seasons and the harmonising of joy and
  anger — is the most quotable wellness-shaped material in the chapter and is
  **deliberately absent from this cut entirely.** The longform carries it under an
  explicit refusal block (63). A trailer has no room for that refusal, so it does
  not carry the passage. **No viewer is told to do anything in any of the seven
  blocks.**
- **Health content stays philosophical narrative** — no dosage, no regimen, no
  diagnosis, no benefit claim, and no treatment described anywhere in the cut. The
  needle appears exactly twice: in Fan-di's demand at block 2, and at block 6 where
  the chapter says it **cannot** treat. **The trailer's only technical claim about
  acupuncture is a claim about its limits**, which is the safest form the material
  has.
- **Mortality / ageing — absent.** The chapter's seasonal-death passages
  (死於冬, 死於春, 死於秋, 死於夏, 死於季夏) are among its most dramatic material
  and **none of it is in this trailer.** Nothing here approaches mortality at all,
  so the portraits-not-bodies rule has no work to do — **no body is drawn in seven
  shots** and no patient appears, including at block 6, which is staged as a needle
  laid down on empty silk.
- **Anatomy is the prompt-stage risk, and it is designed out rather than
  managed.** This chapter names five organs and locates the mind inside them, which
  invites exactly the anatomical illustration the slate rules out for the anatomy
  chapters. **There is no anatomy in the shot list.** The organs are named once, in
  narration, at block 4, and are carried on screen by nothing at all — the frame at
  that moment is a text card and a field of blank silk. *Organ*, *liver*, *lung*,
  *kidney*, *body* and *anatomical* are **banned from every clip prompt** while
  remaining in the narration where they belong.
- **Occult and ceremonial imagery — also designed out.** A trailer that says
  *spirit* and *soul* invites robes, talismans, altars and bound figures, and
  **restraint or bound-figure imagery has tripped this service's safety filter
  before on innocuous subject matter.** There is **no ceremony in the shot list**:
  the material is carried by a scroll, a chain of brush marks, a card, a collapsing
  chain and a laid-down needle. **Block 5's collapsing chain must be prompted as
  loose brush strokes falling, never as anything binding or bound.**
- **Supernatural hooks explicitly debunked by the payoff** — the hook is *a
  two-thousand-year-old map of the mind with no brain on it*, which is a claim about
  a document rather than a mystery claim. **The debunk is inside the same trailer**:
  block 4's first two sentences say plainly that spirit here is *not a substance*
  but *a collision*, before the word has had ten seconds to be misread. The honest
  test for a trailer is whether it promises anything the episode does not deliver.
  It promises a list, a working definition chain, an absence and a limit; the
  episode delivers all four and scores the last two.
- **Title and thumbnail honour the educational payoff** — *The Ancient Map of the
  Mind*; on-screen framing *Lingshu 8, 本神 — Rooted in Spirit*. **Thumbnail
  direction:** the descending chain of brushed terms with the blank silk above its
  top link, and 兩精相搏謂之神 on the inked side. No faces, no talismans, no robed
  figure, no glowing hands, and **no head, skull, brain or brain-shaped negative
  space** — the absence is an argument in the narration and becomes clickbait the
  moment it is drawn as a missing brain.
- **Longevity — absent.** The chapter's longevity clause (長生久視) sits inside the
  養生 passage that this trailer does not carry, so it appears nowhere. The words
  *longevity*, *live longer*, *ancient secret* and *anti-aging* appear in no line,
  title or thumbnail direction. **This matters at slot 3**, which is still inside
  the window where early classification is sticky, and longevity framing sits two
  RPM bands below history of science.
- **Hedge allocation — three characters speak in a 7-block trailer, which is
  unusual and needs recording.** `SKILL.md` makes narrator-only the trailer default
  precisely because the narration carries every hedge. Here **Arthur keeps all four
  framing blocks (1, 4, 6, 7)**, including the *"not a substance, a collision"*
  correction, the *"in this chapter"* qualifier on the missing brain, the needle's
  limit, and the disclaimer. **No compliance content sits on a character voice at
  all**: block 2 is Fan-di's demand for definitions, block 3 is Dr-Qi reading three
  definitions verbatim, and block 5 is Lei-Gong auditing the structure. None of the
  three makes a claim about the body, about emotion, or about treatment.
- **Historical accuracy** — cited on screen as **Lingshu 8**, never a bare "Chapter
  8", and the collision with the already-produced Suwen 8 is live. Block 1's
  "thirteen words" is the Emperor's own list, counted in the mapping above. Block
  4's missing brain is true **of this chapter** and the clause saying so is load-
  bearing, because the brain does appear elsewhere in the canon. Block 3 renders
  生之來謂之精 and 兩精相搏謂之神 and 隨神往來者謂之魂 close to literally, and keeps
  *hun* untranslated rather than collapsing it into *soul* — the collapse the
  supplied English makes, and the one this chapter is least able to afford.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No
  character makes a first-person factual assertion about their own expertise** —
  Dr-Qi recites definitions from the text and asserts nothing about the body in her
  own person.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a self-writing scroll, a seated
  figure with a fan, a woman reading, a text card, a collapsing chain of strokes, a
  laid-down needle, and a plate. **No bodies, no injury, no anatomy, no ceremony,
  no restraint or bound-figure imagery.** Blocks 4, 6 and 7 are lamp-lit against
  black and will trigger `IN THE DARK` — pre-decline on every clip.

---

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole
10s blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's audit. The chain
still gets built at block 3 and the needle's limit still lands at block 6.
**Cost:** the turn at block 6 arrives with nobody having tested the structure, so
it reads as a fact rather than as a result — and the cut loses its fourth voice.
This is the cut to make only if the budget forces one.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 2. Fan-di's demand survives
by implication in Arthur's block 1, but the trailer then has no antagonist, and
Dr-Qi's block 3 answers a question nobody asked. **Not recommended.**

**Stretch to 80s (8 blocks) — add 1.** Add a **second Dr-Qi block after 3**,
carrying the next four links: what enters and leaves with the essence is the *po*,
what handles external things is the *xin*, what the *xin* retains is *yi*, where
*yi* settles is *zhi*. **This is the strongest single addition available**, because
the lexicon is the episode's entire form and a trailer that shows three links shows
a chain while one that shows seven shows a system. Written for Vesper at 41 words.
It costs the cut its narrator-heavy balance and puts two consecutive character
blocks back to back, which is why 70s remains the recommendation rather than a
budget decision.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus an Arthur block after 4
on the comparative frame: that Plato divided a soul into three and this text grows
one out of a single seed, and that the difference is between partition and
derivation. **At 90s the trailer starts teaching the episode rather than selling
it**, which is the reason 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:**

- **Block 7** — the disclaimer card is mandatory and is not a lever.
- **Block 4's first two sentences** — *"Spirit is not a substance there. It is a
  collision."* is the cut's debunk of its own vocabulary, and it must arrive before
  the trailer has spent ten more seconds saying *spirit*.
- **Block 4's "in this chapter" clause** — without it the missing-brain claim
  overreaches into a claim about the whole canon, which is false and which the
  channel's own Suwen 11 episode contradicts.
- **Block 3** — it is the only place the lexicon actually works on screen, and
  without it the trailer is a set of assertions about a text nobody has seen do
  anything.
