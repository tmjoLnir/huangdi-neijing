# The Emperor's Inner Canon — Lingshu 43 Trailer v1 (70 seconds)

**靈樞·淫邪發夢第四十三 · The Dream Catalogue**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Lingshu 43*.** Both halves of the canon run to
eighty-one separately numbered chapters, so the Suwen has its own chapter forty-three
and a bare "Chapter 43" sends a checking viewer to the wrong book about half the
time. Citation accuracy is this channel's stated differentiator, and dream content
is the format most likely to be screenshotted and re-posted without its source, so
the citation has to survive being separated from the video.

Companion longform: `inner-canon-lingshu43-longform-v1.md` (96 blocks, 16:00), which
holds the classical text, this cut's working translation, the full twenty-seven-entry
catalogue and the compliance audit this trailer inherits.

**Slate position.** Lingshu 43 is **rank 5 of the Top-20 slate and publish slot 5** —
`docs/Chronicle of Balance Top20 Chapter Slate.md` §3.5 and §5. Its stated job at slot
5 is *"highest comment-generation potential… placed at slot 5 to seed community
activity just as the first cohort of subscribers arrives."* The slate assigns it the
**nested frame** structural form: *"the episode is structured as a dream within a
dream, each layer resolving one class of the catalogue."* A seventy-second cut cannot
run five layers, so the trailer takes **one layer and the wake**, and the nesting is
carried by the picture rather than by the structure — see *Shot list*.

**The slate also writes this chapter's one discipline, and a trailer is where it is
hardest to keep.** §3.5: *"the risk is presentational, not topical: the catalogue must
not be offered as a diagnostic tool. Never phrase it as 'if you dream of falling, your
X is deficient.' Frame as: this is what a physician in the Han dynasty believed a
dream told him."* Dream content sells precisely by inviting the viewer to read their
own dream, so **block 4 spends a whole block refusing that** rather than deferring the
correction to the episode. That is the cut's single most important design decision,
and it is the same decision the Suwen 67 trailer made about gravity.

**This is a fresh treatment.** No prior version of this chapter exists in `output/`;
nothing has been carried over from any earlier script, per the brief.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the real
choice is six, seven, eight or nine blocks. **Seven is the smallest count that lets
the refusal ride with the hook:**

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer has
  five content blocks and a 70s trailer has six.
- The cut has to carry **five things**: the two dreams everybody has had, the
  demand that motivates an answer, the answer itself, the refusal of the reading the
  answer invites, and what makes the chapter remarkable anyway. At six content blocks
  that is one block each plus the turn that proves the chapter is not a curiosity.
- **At five content blocks the block that goes is block 4**, the not-a-diagnosis
  refusal — and a trailer that says *a dream of falling means too much below* and then
  stops is exactly the cut the slate's care point exists to prevent. **The refusal is
  not a lever.** If the runtime has to come down, the cut goes to 60s by dropping
  Lei-Gong; the reasoning is in *Runtime levers*.
- **80s and 90s are available and are specified in *Runtime levers*,** but the seventh
  and eighth content blocks both buy *more catalogue* rather than a new turn, and a
  trailer that recites the catalogue has spent the episode's only real payoff.

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3 **as re-measured 2026-08-10 on the Suwen 13
trailer** — Arthur 38–44, Xavier 40–44, Vesper 41–43, Zane 47–52 — and the assembler
gates on **8.6–10.0s of detected speech** at both edges as hard errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–3. A single struck bronze note enters on block 4
with the refusal and decays across block 5. Room tone from block 6. **Nothing that
could read as a heartbeat, a breath or a whisper track** — see *Compliance notes*.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**, text-free
except blocks 3 and 7. **The longform's rule is the trailer's one carried-over image:
every dream in this cut blooms upward through the silk from underneath, and nothing is
ever painted onto it from above.**

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Almost everybody has dreamed of falling. Almost everybody has dreamed of flying. Two thousand years ago a Chinese physician wrote down what he thought those two dreams meant and his answer has nothing whatsoever to do with your life. |
| 2 | Fan-di (Xavier) — the demand | I have not slept properly in eleven nights. Every time I close my eyes I am crossing a black water with no far side and I am afraid. You are my physician. Tell me what is being said to me and by whom. |
| 3 | Dr-Qi (Vesper) — the answer | Nothing is being said to you and nobody is saying it. When the yin is too full a man dreams of great water and fear. When the yang is too full he dreams of fire. It is a reading and not a message. |
| 4 | Arthur (V.O.) — the refusal | Do not take this catalogue to bed with you. It is not a diagnosis and it was never a test. A dream of falling means that you were asleep. What makes this chapter remarkable is not that it is right. |
| 5 | Lei-Gong (Zane) — the audit | I came here looking for a fortune teller and I could not find one anywhere in the chapter. Nobody is visited in it. Nothing in it foretells anything at all. Twenty seven dreams are listed in it and not one of them is about the life of the man having it. |
| 6 | Arthur (V.O.) — the turn | Then the chapter does something the dream books around it never did. It hands the dream to a physician and it tells him to treat it. That is the moment a dream stopped being an omen and turned into a symptom. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode reads all twenty seven of its dreams as the weather inside a sleeping body. |

**Every block above is inside its voice's re-measured range**, verified by parsing this
document's own narration table and dropping tokens that contain no letter or digit — a
spaced em-dash is not a word, and counting it as one spends real budget on a window
1.4s wide.

| Block | Voice | Words | Budget | Margin |
|---|---|---|---|---|
| 1 | Arthur | 39 | 38–44 | **at the floor deliberately** — see below |
| 2 | Xavier | 43 | 40–44 | upper-mid; 44w returned 9.90s on Suwen 8 |
| 3 | Vesper | 43 | 41–43 | **at the ceiling**; her window is the narrowest in the cast |
| 4 | Arthur | 40 | 38–44 | lower-mid |
| 5 | Zane | 51 | 47–52 | upper; 50w returned 9.54s first take on Suwen 13 |
| 6 | Arthur | 41 | 38–44 | mid-range |
| 7 | Arthur | 28 | **~29 total** | mandated string plus a **17-word** tail — see below |

> **Block 1 sits low in Arthur's range on purpose, and it is the block to watch.**
> Its first two sentences are a deliberate near-repetition — *almost everybody has
> dreamed of falling / almost everybody has dreamed of flying* — which is a rhetorical
> figure `seed_audio` slows down for, in the same way it slows for an enumeration. The
> measured risk therefore runs *long* here rather than short, which is why the count is
> 39 rather than 42. **If it comes back under 8.6s, lengthen the third sentence and not
> the first two**; the repetition is the hook and re-punctuating it costs the figure.

> **Block 3 is at Vesper's ceiling and cannot be shortened without losing the
> answer.** Its two *when* clauses are the chapter's own sentence structure and the
> whole trailer exists to deliver them. **If it lands over 10.0s, delete *and fear*
> and re-roll** — that is a two-word deletion that keeps both clauses intact. Do not
> re-punctuate it and do not merge the last two sentences.

> **Block 5 is Zane's longest line in the cut and it is comma-free on purpose.** Its
> shape is a three-part denial — *nobody is visited / nothing foretells / not one is
> about the man* — which is exactly the structure `SKILL.md` says never to hand a
> voice as a comma list. Written as three sentences it costs words rather than
> pauses, which is the trade the measurement supports: a 31-word Arthur line with
> seven commas returned **12.022s** against **8.913s** for the same 31 words with
> none. **If it lands over, delete *at all* from the third sentence and re-roll.**

> **Block 7 is short on purpose and the reason is measured.** The mandated disclaimer
> is two short full-stopped sentences, and `seed_audio` treats them as separate beats
> and slows the whole take around them. On the Suwen 13 trailer the same block at 33
> words returned **11.326s, 16.930s and 10.538s** — three takes, all over, one by
> nearly seven seconds. **Cutting the trailing clause to 18 words landed it at 9.602s
> on the first roll.** The tail here is 17 words for that reason. **Do not lengthen it
> to reach Arthur's 38–44 range**; that range does not apply to this block and the
> checker will flag it wrongly.

**No block contains a comma-separated list of three or more items, and there is not a
single comma in any of the seven narration cells.** No block exceeds four sentences.
**Do not add commas to these lines.**

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks 3
and 7.** Every shot needs motion from frame 1 — the assembler warns on a static open
or a frozen tail.

1. Mat level in a dark hall. A low sleeping mat, one oil lamp burning beside it, and a folding screen behind with every panel blank. **Ink blooms upward through the silk of the nearest panel from underneath** and spreads into dark water. Slow push in.
2. FAN-DI sitting up on the mat, gold robe loose, thin round glasses held in one hand rather than worn. **His white folding fan lies closed on the mat and he does not pick it up.** The lamp low beside him. He is looking at the screen and not at the camera.
3. DR-QI standing at the foot of the mat, blue cheongsam with cloud embroidery, open bamboo scroll held casually like a tablet. Behind her one panel floods dark from beneath and the next burns orange from beneath. **CARD** set to one side: 陰氣盛，則夢涉大水而恐懼. Her hand does not move. *(Default: the panels render; the characters are added at edit — see Finishing steps.)*
4. The screen alone and wide, two panels inked and the rest blank. **A loaded brush comes down toward the silk from above and stops short of it and withdraws out of frame.** Nothing in this cut is ever painted from above.
5. LEI-GONG cross-legged on the floor beside the mat, cinnabar robe with lightning trim, small hand drum hanging at his hip, wax tablet on his knee. He folds the screen's panels back one at a time and writes. Spark motes drifting off the cinnabar sleeve.
6. A physician's wrist cushion set down on the lacquer beside the mat, and a hand withdrawing above it without touching anything. Two more panels ink from beneath behind it. **No skin, no patient and no body in frame.**
7. **END CARD** — plain plate. The lamp gutters out and the paper window goes grey with dawn. Disclaimer and editorial credit added at edit time.

**Blocks 4, 6 and 7 are the stillness risks.** A held screen, a laid-out object and a
plate. Give each a slow push, ink spreading through silk, or a light change so the clip
does not read as a held frame. **Block 4 is the one to watch** — its whole content is a
brush that does *not* arrive.

**Nothing is ever painted onto the silk from above in any of the seven shots.** That is
the trailer's visual argument and the one rule a recut may not relax: a hand brushing a
dream onto the screen says the picture came from outside the sleeper, which is the
opposite of what the narration says. The brush in shot 4 **stops short on purpose**.

**No body, no anatomy and no sleeping figure lying down anywhere in seven shots.**
Fan-di is upright in shot 2 for a reason — see *Compliance notes*.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-lingshu43-longform-v1.md`, which holds the classical text and the
extraction warning that governs every card glyph below.

| § | Passage | Blocks |
|---|---|---|
| §1 | 正邪從外襲內，而未有定舍 | 3 |
| §1 | 與魂魄飛揚，使人臥不得安而喜夢 | 2, 3 |
| §2 | **陰氣盛，則夢涉大水而恐懼** | 3 |
| §2 | **陽氣盛，則夢大火而燔焫** | 3 |
| §2 | 上盛則夢飛，下盛則夢墮 | 1, 4 |
| §2 | 凡此十二盛者，至而寫之，立已 | 6 |
| §3 | 凡此十五不足者，至而補之立已也 | 6 |

**Block 1 states the flying-and-falling pair before the trailer quotes anything**, and
it states it as the *chapter's* claim rather than as a fact about dreams. The source
sentence — 上盛則夢飛，下盛則夢墮 — is six characters a side and is the cut's hook, but
it is never spoken in the original because block 3 is the only Dr-Qi block and the
water-and-fire pair is the better piece of recitation. **The longform runs both pairs
in full at blocks 21 to 35.**

**Block 5's "twenty seven" is a count of the catalogue, and it is ours.** The chapter
counts **twelve** excesses and **fifteen** deficiencies in its own two summary
sentences; nobody in the text adds them together. The sum is arithmetic on the
chapter's own numbers and the longform states it that way at block 19. **Two of the
twenty-seven are excluded from this series on compliance grounds** and are named in
*Compliance notes*; the count of twenty-seven is still the honest description of the
chapter, because the count describes the text rather than the episode.

**Block 6's claim is about what the chapter does, not about who was first.** It says
the surrounding dream books did not hand the dream to a physician for treatment — which
is a claim about the two summary lines 至而寫之 and 至而補之, and those are quoted in the
mapping above. It deliberately does **not** say this was the first medical dream theory
anywhere; Aristotle is a live counterexample and the longform gives him two blocks.

**Longform beats deliberately withheld from this trailer:** the whole mechanism
passage, the hun and po material, the fifteen lodgings, the anatomical route through
them, all four comparative frames, and both reckonings past block 4. **The five organ
entries are withheld on compliance grounds rather than for pacing** — a
seventy-second cut naming a dream and an organ in the same breath is the exact
"if you dream of X your Y is deficient" formulation the slate rules out, and there is
no room in a trailer to hedge it properly.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.
Lei-Gong is **Lei-Gong** and never "Xiao-Lei". The series is *The Emperor's Inner
Canon* and never "Chronicle of Balance", which is the slate document's own working name
for the channel. The supplied source file names the respondent 歧伯; the standard form
is **岐伯**, and he is **Dr-Qi** here in either case.

---

## Production record (Higgsfield)

**Status: NOT RENDERED.** Nothing has been generated, no credits have been spent, and
the step-0 model-and-tier gate has not been run. The tables below are the **plan**, and
every figure in them is an estimate until a live `get_cost` replaces it.

### Before anything generates

`SKILL.md` step 0 is a hard gate and has five parts. In order:

1. **Tool availability** — one free `ToolSearch` for the eight names in step 0, plus
   the free `sandbox_exec` probe of `assemble_final.sh --help`. This comes first
   because a missing step-4 tool invalidates an approved step-0 estimate, and the
   server-side assembler has already vanished from the surface once with no warning.
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

**Budget ~120, not ~82.** The naive first-pass figure is 82 and the Suwen 13 run came
in at **119.7 against an ~85–95 preflight**, with the entire gap in the *number* of
voice takes rather than their price. That run is the only one in the repo whose delta
fully reconciles, so its re-take rate is the best estimate available. **A 720p full
render replaces the 70 with 175 and takes the total to ~225.**

> **Do not preflight voice on a short probe string.** `seed_audio` bills by length, and
> this figure has been got wrong twice in the repo in opposite directions — 0.5/take
> from a 13-word probe and 0.1/take from a shorter one, against a measured **1.3–1.7**.
> Cost a representative-length line from the narration table above.

### Style key — this chapter needs a new one

Chain off the Suwen 1 head `4b6f7106-67da-4d1a-a553-c58ba90ac43f` recorded in
`SKILL.md` step 1, passed as a **job ID** reference with only the motif swapped.
`SKILL.md` settled this on 2026-08-10: each chapter key bakes in its own chapter's
furniture, so the Suwen 8 key (`05ebe984-2781-491e-8c84-2b20e608d2a8`) would bring a
lacquer chart of twelve boxes into a cut whose whole visual system is a folding screen
of blank panels. Chain off the neutral head.

| | |
|---|---|
| Job ID | *(to be recorded)* |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key at mat level in a dark hall; a low sleeping mat with a closed white folding fan on it, one oil lamp, and behind them a folding screen of blank silk panels with ink blooming upward through the silk from beneath |
| Derivation | Suwen 1 head → this key |
| Estimated cost | 2 credits |

The longform needs a **16:9 sibling** derived from *this* job ID once it exists. **Do
not overwrite the vertical key** — this trailer depends on it.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL there
fails.

### Clips — plan

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16.** Style key attached to every
clip as `image_references`. `generate_audio: false` on all seven — this is a
**correctness requirement**, not a saving: the assembler mixes clip audio in at 0.12
under the voice, so a clip generated with native audio will be audible in the finished
cut and the only fix is regenerating it.

**Declare the aspect ratio twice** — `aspect_ratio: "9:16"` on the call *and* "vertical
9:16 portrait framing" in the prompt text. **Check the first clip's returned dimensions
before generating the other six.**

**Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on all seven.
Every shot in this cut is a night interior lit by one lamp, so this preset will fire
more reliably here than on any cut the repo has run — this is the darkest cut in the
series so far by construction.

**Keep audio vocabulary out of every clip prompt** — *drum*, *drone*, *bell*, *music*,
*rhythm*, *whisper*. Lei-Gong's hand drum is a **prop** in shot 5 and must be described
as an object hanging at his hip, never as a sound.

**Two words are banned from every clip prompt in this cut** on safety-filter grounds:
*sleeping* applied to a person, and any form of *lying down*, *pinned*, *held down* or
*paralysed*. A prone or immobilised human figure is the exact class of imagery that has
returned `nsfw` on this service before on innocuous subject matter. **Fan-di is upright
in every shot he appears in.** See *Compliance notes*.

| Block | Job ID | Notes |
|---|---|---|
| 1–7 | *(to be recorded)* | one clip per block, style key on each |

### Voiceover — plan

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55** on all four voices.
**Generate two variants per block and keep the better one** — at ~1.45 a take that is
the cheapest reliable method, and a word count predicts a take only to about ±1.5s.

| Block | Voice | Words | Predicted speech at the measured rate | Margin above the 8.6s floor |
|---|---|---|---|---|
| 1 | Arthur | 39 | ~8.9s | +0.3s — **thin, and deliberately so; see the block-1 note** |
| 2 | Xavier | 43 | ~9.7–10.0s | **the ceiling is the risk here, not the floor** — if it lands over, delete *with no far side* and re-roll |
| 3 | Vesper | 43 | ~9.6s | +1.0s, **and 0.4s under the ceiling** |
| 4 | Arthur | 40 | ~9.1s | +0.5s |
| 5 | Zane | 51 | ~9.7s | +1.1s |
| 6 | Arthur | 41 | ~9.3s | +0.7s |
| 7 | Arthur | 28 | ~9.6s by measured precedent | see the block-7 note |

**Blocks 1, 3 and 7 are the three to expect trouble on.** Block 1 is thin and carries a
rhetorical repetition that slows the voice; block 3 is at Vesper's ceiling; block 7 is
the mandated-disclaimer structure that ran pathologically slow on the previous cut. The
named repair for each is in its note above, and **each one is a specific edit rather
than a re-punctuation.** Re-roll freely before rewriting.

Record each take's **job ID, file duration, and the assembler's measured speech figure**
to three decimal places. They differ, and the second is the one that was gated — a take
written up as "8.50s pass" has already stopped an assembly at 0.103s under the floor.

### Assembly — plan

**Foreground, one chained command.** A 7-block assembly finishes inside the 120s budget
comfortably, and `background: true` has already lost a whole finished render on this
pipeline when the transport call timed out and the sandbox was reclaimed.

Flags: `--out`, `--blocks 7`, `--manifest pairs.txt`. No `--clip-seconds` (leave the
window alone). No `--music` until guqin licensing is cleared. **No `--subs`** — it is a
hard error; captions are a separate step.

Name files `blockNN.mp4` / `voiceNN.wav` with the numbers aligned. Call `media_upload`
*before* the assembling command and append the `curl -f -X PUT --upload-file` to that
**same** command; `media_confirm` only after HTTP 200. The sandbox is discarded ~10
seconds after the call returns, so a render that is not exported inside the call is
simply lost.

Record afterwards: block count, the flags used, the manifest, the exported `media_id`,
the **whole download URL**, and any assembler WARNs accepted rather than fixed.

### Captions — plan

Built from this document by `scripts/build_subtitles.js` **after the takes exist and
their durations are in the record above**, then burned locally. The assembler burns
nothing.

**The sidecar cannot be built yet** and none is committed with this document —
`build_subtitles.js` reads take durations out of the production record, and there are
none. `CLAUDE.md` requires the `.srt`/`.vtt` as tracked deliverables; they are built and
committed with the render, not before it.

### Reproduction notes

- **Nothing has been generated.** This section exists to be filled.
- **The supplied source extracted as simplified Chinese and this cut's card is
  traditional.** The chapter arrived as `05_Ch_LS43__The_Dream_Catalogue.md`, whose
  Chinese extracted cleanly but in simplified form (淫邪发梦 / 阴气盛，则梦涉大水而恐惧).
  **The traditional forms on this cut's one card were converted by hand and are not
  from the source file.** ffmpeg renders a missing or wrong glyph silently and nothing
  downstream re-checks it. Verify 陰氣盛，則夢涉大水而恐懼 against the longform's *Source
  text and translation* before burn.
- **The source names the respondent 歧伯 throughout.** The standard form is **岐伯**.
  This cut renders no card carrying the name, so nothing here depends on the
  resolution, but the longform does and records it.
- **The supplied English translation reads 正邪 as two things — "righteous and
  pathogenic influences".** The longform treats it as one technical term and marks the
  departure. **Block 3's "nothing is being said to you" does not depend on that
  reading** and is safe either way.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7. Block 7 is planned
  into the block count and into the credit estimate above, as `CLAUDE.md` requires; it
  is not folded into the title block.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card and
  in the description. **Not in any voice take** in this cut.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but generates
  none. **Guqin licensing is unresolved** (slate §9) — until cleared, score this cut
  with no guqin. The struck bronze note called for at block 4 is **not music** and is
  not generated either: it is a single percussive strike, hand-placed at edit. Trailers
  earn disproportionate plays and carry the higher Content-ID exposure, so this is the
  cut to be most careful about.

### Finishing steps

**Not yet executed — this cut has not been rendered.** The procedure below is written
with **this cut's own numbers**: 7 blocks, 70.0s, quotation card at **0:20–0:30**, end
card **1:00 to 1:10**.

Both caption scripts are pure text tools: they read this document, touch no video, need
no network and cost no credits. **Run them from the repo root or pass an absolute
path.**

**1. Check captions** at 9:16, **before generating takes** — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/lingshu/ch43/inner-canon-lingshu43-trailer-v1.md
```

**Run 2026-08-11. The result is one known exception plus ten overflowing clauses across
the seven blocks, and none of them is a defect.** That is against fourteen on the Suwen
67 trailer, nine on the rendered Suwen 13 trailer and three on Suwen 8.

The exception is the mandated disclaimer. *"A dramatized adaptation of a classical
philosophical text."* is 58 characters and 1187px against a 556px line — it needs three
lines on a 720-wide vertical frame and fits on one at 16:9. It is a compliance string,
cannot be reworded, and `check_caption_fit.js` carries it as a known exception. The
sidecar splits it and libass margins keep it in frame.

**The ten are structural rather than careless.** The vertical two-line budget is
**1111px, about 44 characters**. The assembler's 8.6s floor forces roughly 42 words into
every block, which is about 200 characters, so a block clears the budget only if it is
cut into five or more clauses — and `SKILL.md` caps a block at four sentences because
the assembler *warns* on internal pauses of 0.8s or more. **The two rules cannot both be
satisfied at 9:16.**

**Block 1 carries the widest single clause in the cut at 152 characters and it stays
as it is.** Splitting it after *meant* was tried and measured: the 152-character clause
wraps to six lines and therefore three cues, while the split version produces a
92-character clause and a 59-character clause — four cues rather than three. **Splitting
a wide clause reduces its width and increases the churn**, because each fragment still
overruns the two-line budget and then rounds up to its own cue. That is worth knowing
before anybody "fixes" a clause on this list.

**One free repair was looked for and there is none here.** The lever on a comparable cut
was to add a comma to a block with word-count headroom, converting a three-line cue into
a one-line and a two-line cue. It is unavailable in this cut: block 3 sits at Vesper's
ceiling exactly, blocks 2 and 6 are at 41 in windows whose ceilings are 44, and block 1
is already thin against the floor. **Buying caption width here would spend duration
these blocks do not have**, on a window 1.4s wide, to fix a problem the sidecar already
solves.

**Read the non-zero exit as *"this will read busily"*, never as *"this cut will
overflow"*.** The sidecar pre-splits every clause above and libass cannot draw outside
its margins.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in the
record.

```
node scripts/build_subtitles.js output/lingshu/ch43/inner-canon-lingshu43-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from 1:00)
so the disclaimer is not simultaneously a caption and a card. The burn copy is blocks
1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched with
the picture. Convert the `.srt` to `.ass` and re-target `PlayResX/Y` to 720×1280 first;
ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every style value by ~4.4×
and runs the lines off frame. `build_subtitles.js` prints the command in this order
already.

**Run `fc-match Anton` in the sandbox, where the burn actually happens.** The sandbox
ships Metropolis and Montserrat and no Anton; libass substitutes a wider face silently
while `build_subtitles.js` still reports the line as fitting. Install it in the same
chained command:

```
mkdir -p ~/.fonts
curl -sSfL -o ~/.fonts/Anton-Regular.ttf \
  https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf
fc-cache -f >/dev/null 2>&1
fc-match Anton    # must print: Anton-Regular.ttf: "Anton" "Regular"
```

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out at
0:09, over block 1's push in on the screen. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the lower-third
**above** that band. **y=896** is the position the comparable cuts used and measured
clear of the caption band.

**5. Quotation card — block 3, in at 0:20, out at 0:30.** The block-3 clip renders the
two flooding panels and no text, so **陰氣盛，則夢涉大水而恐懼** is added here in the same
`drawtext` pass, **set to one side of frame so it does not sit over Dr-Qi**. Verify
every glyph against the longform's *Source text and translation* before export, and note
that the source file supplied these characters in simplified form only. ffmpeg needs a
CJK-capable face — Anton has no Chinese coverage and renders tofu boxes silently.

> **⚠ This step was skipped on a comparable cut and the card shipped blank.** The Suwen
> 13 trailer's block-4 card is still an empty plate in its delivered file because the
> burn pass covered captions, the lower-third and the end card only. **Do not treat
> step 5 as optional here.**

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so multi-line
centred text needs one `drawtext` filter per line. Block 7's plate is a dark night
interior going grey at the window, which is the opposite of the problem the earlier cuts
had: **check the scrim is needed before adding one**, and measure top-strip luma on the
plate first. A comparable cut needed `black@0.62` over a *light* ink wash; this plate may
need none at all.

**7. Music.** None, until guqin licensing is cleared. The block-4 bronze strike is
hand-placed at edit and is not a bed.

---

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, before any
generation. The longform's audit governs the material this trailer draws from; these are
the trailer-specific findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document, at
  the head of block 7's narration, on screen as the end card, and in the description.
  Block 7's narration is extended past the mandated string to clear the 8.6s floor;
  **the mandated sentence itself is unaltered.**
- **The slate's named care point for this chapter is that the catalogue must not be
  offered as a diagnostic tool, and it is answered inside the trailer rather than
  deferred to the episode.** §3.5: *"Never phrase it as 'if you dream of falling, your X
  is deficient.'"* **Block 4 is that refusal and it is a whole block of the seven** — a
  seventh of the runtime spent saying what the cut is not. It arrives immediately after
  the answer and before Lei-Gong is allowed to be impressed by it, which is the order
  that matters: the audience is told the limit before they are told the merit. **Block 4
  is not a lever and must not be dropped, split, or moved after block 5 in any recut.**
- **No line in this cut pairs a dream with an organ.** That is the specific formulation
  the slate rules out, and the trailer avoids it structurally rather than by hedging:
  the five organ entries of the catalogue are **absent from the cut entirely**. Block 3
  pairs a dream with *yin* and *yang*, which name a state rather than a body part and
  cannot be self-applied to anything. **Do not restore an organ entry to this trailer at
  any runtime**, including the 90s lever.
- **No second-person diagnostic anywhere.** Every catalogue statement in the cut is
  attributed and in the third person — *a man dreams*, *he dreams*, *what he thought
  those two dreams meant*. The only second-person lines are block 1's *has nothing to do
  with your life*, block 3's *nothing is being said to you*, and block 4's *do not take
  this to bed with you* — **all three are refusals of the diagnostic reading**, which is
  the only thing the second person is used for in this cut.
- **Health content stays philosophical narrative** — no dosage, no regimen, no
  diagnosis, no benefit claim and no treatment described anywhere. Block 6 says the
  chapter *tells a physician to treat it*, which is a statement about what the text
  instructs its own reader to do. **No needle, no acupoint, no depth and no technique
  appears in any line or any shot**, and the chapter's own treatment terms — to drain
  and to supplement — are named only as the historical move that made a dream a symptom.
- **No sleep advice of any kind.** An episode about dreams invites *how to sleep
  better*, and there is none here: no line tells a viewer to do anything about their
  sleep, their dreams, their diet or their night. **The words *insomnia*, *remedy*,
  *cure*, *treatment for*, *try this* and *tonight try* appear nowhere.**
- **No mental-health claim.** Nothing in the cut says a dream indicates a psychological
  state, and no coping advice of any kind is offered. Fan-di's eleven sleepless nights
  are a **dramatic premise about a character**, not a condition described to a viewer,
  and Dr-Qi's answer to him is a refusal to read it.
- **Supernatural hooks explicitly debunked by the payoff** — and here the debunk *is*
  the payoff. The hook is *ancient dream interpretation*, which is the most occult-
  sounding premise this channel has run. **Blocks 3 and 5 dismantle it**: nothing is
  being said, nobody is saying it, nobody is visited, and nothing foretells. **The honest
  test for a trailer is whether it promises anything the episode does not deliver.** It
  promises two universal dreams, an answer, a refusal, an audit and a turn; the episode
  delivers all five and scores the middle three.
- **Mortality and violence — reported nowhere in this cut.** The catalogue's two violent
  entries (men killing one another, and a dream of the head being struck off) are
  **absent from the trailer entirely** and are handled in the longform by report without
  depiction. **No body is drawn in seven shots**, including block 6, which is staged as a
  wrist cushion on lacquer with a hand withdrawing above it.
- **One catalogue entry and one clause of another are excluded from this series and are
  absent here.** The chapter's 陰器 entry (a dream of intercourse) and the self-wounding
  clause of its 膽 entry are **not in this cut, not in the longform, and not to be
  restored at any runtime.** They are named in the longform's compliance notes so that nobody restores
  them believing they were overlooked.
- **Restraint and prone-figure imagery is designed out, and this is the prompt-stage
  risk that matters most in this cut.** A chapter about sleep invites a body lying down
  and an entry about the body being *too heavy to lift* invites a pinned figure —
  **restraint or bound-figure imagery has tripped this service's safety filter before on
  innocuous subject matter.** **Fan-di is upright in shot 2 and there is no reclining or
  prone human figure in any of the seven shots.** The dreams are carried by silk panels,
  ink, a lamp, a screen, a brush that stops short and a wrist cushion.
- **Occult and ceremonial imagery — designed out.** No altar, no diviner, no talisman,
  no incense, no spirit, no third eye and no floating figure appears in the shot list.
  **神 is not translated anywhere in this cut** and the hun and po are not named in it at
  all — they are the longform's material, under a debunk.
- **Indulgence and alcohol — not present** anywhere in narration or in any of the seven
  shots.
- **Title and thumbnail honour the educational payoff** — *The Dream Catalogue*;
  on-screen framing *Lingshu 43, 淫邪發夢 — Dreams Generated by an Overflowing Evil*.
  **Thumbnail direction:** the folding screen of blank silk panels with two of them
  flooded from beneath — one dark water and one fire — and 夢 set to one side. **No
  sleeping figure, no floating body, no third eye, no glowing symbol, no swirling
  galaxy and no sleep-paralysis demon** — every one of those imports the occult reading
  the cut spends a block refusing. No faces other than the three cast characters, no
  talismans, no glowing hands. **The words *ancient secret*, *lost knowledge*, *they
  knew*, *what your dreams mean*, *decode*, *your subconscious* and *ahead of its time*
  appear in no line, no title and no thumbnail direction.**
- **Hedge allocation — three characters speak in a 7-block trailer, which is unusual and
  needs recording.** `SKILL.md` makes narrator-only the trailer default precisely because
  the narration carries every hedge. Here **Arthur keeps all four framing blocks (1, 4,
  6, 7)**, including the whole of the not-a-diagnosis refusal and the disclaimer. **No
  compliance content sits on a character voice at all**: block 2 is Fan-di's demand,
  block 3 is Dr-Qi rendering 陰氣盛，則夢涉大水而恐懼 and 陽氣盛，則夢大火而燔焫 close to
  literally, and block 5 is Lei-Gong describing what the chapter does not contain. None
  of the three makes a claim about the viewer's body, about treatment, or about what
  modern science knows.
- **Dr-Qi's block 3 is written to `CLAUDE.md`'s voice rule.** She never sounds like she
  is winning; the more Fan-di performs the stiller she gets. Block 2 is the most agitated
  line in the cut and block 3 is the flattest, and that ordering is deliberate.
- **Historical accuracy** — cited on screen as **Lingshu 43**, never a bare "Chapter 43",
  and the Suwen's own chapter forty-three makes the collision real rather than
  theoretical. **Block 1's "two thousand years ago" is a round figure for a text whose
  dating is argued over**; the longform carries the caveat in full at block 20 and this
  trailer's phrasing is deliberately approximate rather than precise. Block 6's claim is
  about the chapter's two summary lines and is scoped in *Source mapping*; it does not
  claim priority over Aristotle, whom the longform gives two blocks.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No character
  makes a first-person factual assertion about their own expertise** — Dr-Qi reports the
  chapter's entries and asserts nothing about the body in her own person.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a sleeping mat and a lamp, an upright
  seated man, a woman with a scroll, a folding screen, a brush that stops short, a boy
  with a wax tablet and a wrist cushion. **No bodies, no injury, no anatomy, no ceremony,
  no restraint or prone-figure imagery, no faces other than the three cast characters.**
  Every shot is a night interior and will trigger `IN THE DARK` — pre-decline on all
  seven.

---

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole 10s
blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's audit. The hook, the
demand, the answer, the refusal and the turn all survive. **Cost:** block 4 then says
what the chapter is *not* and nothing says what it *is*, so the cut reads as a refusal
with no claim attached — and it loses its fourth voice. This is the cut to make only if
the budget forces one, and it is still the right one to make before touching block 4.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 6. **Not recommended.** Block 6 is
the only place the cut says what the chapter did that nobody around it did, and without
it the trailer sells a quotation.

**Do not reach 60s by dropping block 4.** It is the slate's named care point for this
chapter and it is the one block whose absence turns the cut from history of psychology
into the dream-decoder content the slate exists to prevent.

**Stretch to 80s (8 blocks) — add 1.** Add an **Arthur block after 5** on the flying and
falling pair as modern sleep research finds it: that falling and flying sit near the top
of every list of commonly reported dream themes researchers have collected, and that
being right about *what* people dream is not the same as being right about *why*. **This
is the strongest single addition available**, because it is the cut's only piece of
external evidence and it arrives with its own hedge attached. It costs the cut its
narrator-heavy balance by giving Arthur five of eight blocks, which is why 70s remains
the recommendation.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus a **second Dr-Qi block after
3** carrying the two spatial entries: that an excess above brings dreams of flying and
an excess below brings dreams of falling. It is the cut's hook stated in the chapter's
own words and it is genuinely the best entry in the catalogue. **At 90s the trailer
starts teaching the episode rather than selling it**, and two consecutive Dr-Qi blocks
put the recitation back to back, which is the reason 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:**

- **Block 7** — the disclaimer card is mandatory and is not a lever.
- **Block 4** — the not-a-diagnosis refusal, in full and in its position. See *Compliance
  notes*.
- **Block 3** — it is the only place the chapter's own sentence is spoken, and without it
  the trailer is a set of claims about a text nobody has heard.
