# The Emperor's Inner Canon — Suwen 77 Trailer v1 (70 seconds)

**素問·疏五過論第七十七 · The Five Ways a Doctor Fails You**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 77*, and here the collision is scheduled
rather than theoretical.** Both halves of the canon run to eighty-one separately
numbered chapters, and **Lingshu 77 《九宮八風》 is itself on the Top-20 slate at rank
14 and publish slot 10** — so this channel will publish two different "chapter 77"
episodes, four slots apart. A bare "Chapter 77" in a title, a thumbnail or a
description will collide with the channel's own back catalogue, not merely with the
canon. Citation accuracy is the channel's stated differentiator.

Companion longform: `inner-canon-suwen77-longform-v1.md` (93 blocks, 15:30), which
holds the classical text, this cut's working translation, all five charges in full
and the compliance audit this trailer inherits.

**Slate position.** Suwen 77 is **rank 8 of the Top-20 slate and publish slot 6** —
`docs/Chronicle of Balance Top20 Chapter Slate.md` §3.8 and §5. Its stated job at slot
6 is to open Phase 2: *"Tests the ethics pillar. Highest share-to-professional-networks
potential; different audience than slots 1–5, which widens the recommendation graph."*
The slate assigns it the **tribunal** structural form: *"the episode is staged as a
review hearing, each fault introduced as a charge with a case attached."* Seventy
seconds cannot run five charges, so the trailer **convenes the court and reads one
charge**, and the other four are present only as four more tallies on the bench.

**The slate also writes this chapter's one discipline, and a trailer is where it is
hardest to keep.** §3.8: *"do not extend the argument into criticism of any
identifiable contemporary healthcare system, which would reclassify the episode as
controversial-issues content."* A cut titled *The Five Ways a Doctor Fails You* is
exactly the cut that breaks that rule by accident. **Block 4 spends a whole block
refusing it** rather than deferring the refusal to the episode, and it arrives before
Lei-Gong is allowed to be impressed by anything. That is this cut's single most
important design decision.

**This is a fresh treatment.** No prior version of this chapter exists in `output/`;
nothing has been carried over from any earlier script, per the brief.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the real
choice is six, seven, eight or nine blocks. **Seven is the smallest count that lets the
refusal ride with the hook:**

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer has
  five content blocks and a 70s trailer has six.
- The cut has to carry **five things**: the patient no examination can explain, the
  court that is convened over him, the charge and its named condition, the refusal of
  the reading the title invites, and what makes the chapter remarkable anyway. Six
  content blocks is one each plus the audit that proves the chapter is a charge sheet
  rather than a grievance.
- **At five content blocks the block that goes is block 4**, the not-about-your-doctor
  refusal — and a trailer called *The Five Ways a Doctor Fails You* that lists a fault
  and then stops is precisely the cut the slate's care point exists to prevent.
  **The refusal is not a lever.** If the runtime has to come down, the cut goes to 60s
  by dropping Lei-Gong; the reasoning is in *Runtime levers*.
- **80s and 90s are available and are specified in *Runtime levers*,** but the seventh
  and eighth content blocks both buy *more charges* rather than a new turn, and a
  trailer that reads the whole charge sheet has spent the episode.

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

**SOUND:** No music under blocks 1–3. A single struck wooden note on block 4 with the
refusal and one more on block 5 as a tally goes face down. Room tone from block 6.
**Nothing that could read as a gavel** — this is a Han-dynasty hall, not a courtroom
drama, and the sound design is the thing most likely to import the wrong century.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**, text-free
except blocks 3 and 7. **The longform's rule is the trailer's one carried-over image:
in this cut nothing is ever examined. Every hand that reaches toward a body stops
short and withdraws, because the chapter's whole finding is that the answer is not in
the body.**

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | A man is wasting away and nobody can find a reason. His organs are sound and his pulse is ordinary and his body shows nothing at all. A Chinese medical text two thousand years old says his physician has already failed him. |
| 2 | Fan-di (Xavier) — the court convenes | Sit down and attend to me. There are five ways a physician fails the man in front of him and there are four virtues that answer them. I have set them all out. Tell me whether you have heard of a single one. |
| 3 | Dr-Qi (Vesper) — the first charge | Here is the first of them. A man was noble once and he is nothing now. No evil ever entered him and the sickness began inside him anyway. Nothing shows in his organs and nothing has changed in his body at all. |
| 4 | Arthur (V.O.) — the refusal | Before this goes any further. This is not a checklist for your next appointment and it is not a verdict on anybody practising medicine now. It is a hearing about a physician who has been dead for two thousand years. |
| 5 | Lei-Gong (Zane) — the audit | I have copied out all five charges and here is the thing nobody says about them. Not one of them is about the hand. Nobody in it is accused of a clumsy needle or a wrong drug. Every charge on that bench is a question the physician did not ask. |
| 6 | Arthur (V.O.) — the turn | That is why the chapter is worth an hour of anybody's attention. It takes a man's rank and his money and his losses and it calls all of that evidence. Then it makes failing to ask about them a fault. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode hears all five charges and returns a verdict on the text that brought them. |

**Every block above is inside its voice's re-measured range**, verified by parsing this
document's own narration table and dropping tokens that contain no letter or digit — a
spaced em-dash is not a word, and counting it as one spends real budget on a window
1.4s wide.

| Block | Voice | Words | Budget | Margin |
|---|---|---|---|---|
| 1 | Arthur | 42 | 38–44 | upper-mid |
| 2 | Xavier | 43 | 40–44 | **one word under the ceiling**; 44w returned 9.90s on Suwen 8 |
| 3 | Vesper | 42 | 41–43 | mid; her window is the narrowest in the cast and there is one word either side |
| 4 | Arthur | 40 | 38–44 | lower-mid |
| 5 | Zane | 50 | 47–52 | upper-mid; **50w returned 9.54s first take on Suwen 13 and 9.68s on Suwen 8** |
| 6 | Arthur | 40 | 38–44 | lower-mid |
| 7 | Arthur | 28 | **~29 total** | mandated string plus a **17-word** tail — see below |

> **Block 2 is one word under Xavier's ceiling and the second sentence is the one that
> must not move.** If it lands over 10.0s, delete *Sit down and* from the opening and
> re-roll. Do not touch the phrase *five ways a physician fails the man in front of him*
> — it is the working title spoken aloud with the second person taken out of it, and
> that substitution is the whole reason the title is safe to keep. **Do not restore
> *fails you* to this line.**

> **Block 3 sits mid-window and has one word of room in each direction**, which is all
> Vesper's 41–43 range allows. Its shape is the chapter's own: a biography first and a
> null examination second. **If it lands over 10.0s, delete *at all* from the last
> sentence and re-roll**, accepting that the count drops to 40 — the take has already
> shown the count was the wrong predictor. Do not merge the last two sentences and do
> not re-punctuate it. **If it lands under 8.6s, extend the second sentence** rather
> than the fourth; the null examination is the charge and its rhythm is load-bearing.

> **Block 5 is Zane's only line in the cut and it is comma-free on purpose.** Its shape
> is a three-part denial — *not about the hand / no clumsy needle / a question not
> asked* — which is exactly the structure `SKILL.md` says never to hand a voice as a
> comma list. Written as separate sentences it costs words rather than pauses: a 31-word
> Arthur line with seven commas returned **12.022s** against **8.913s** for the same 31
> words with none. **If it lands over, delete *in it* from the third sentence and
> re-roll.**

> **Block 7 is short on purpose and the reason is measured.** The mandated disclaimer
> is two short full-stopped sentences and `seed_audio` treats them as separate beats
> and slows the whole take around them. On the Suwen 13 trailer the same block at 33
> words returned **11.326s, 16.930s and 10.538s** — three takes, all over, one by nearly
> seven seconds. **Cutting the trailing clause to 18 words landed it at 9.602s on the
> first roll.** The tail here is 17 words for that reason. **Do not lengthen it to reach
> Arthur's 38–44 range**; that range does not apply to this block and a checker reading
> the table above will flag it wrongly.

**No block contains a comma-separated list of three or more items, and there is not a
single comma in any of the seven narration cells.** No block exceeds four sentences.
**Do not add commas to these lines.**

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks 3
and 7.** Every shot needs motion from frame 1 — the assembler warns on a static open or
a frozen tail.

1. A long low lacquer bench in a bare hall at first light. **Five bamboo tallies laid across it face up and nothing else on it.** Cold grey light coming in from one side. Slow push in along the length of the bench.
2. FAN-DI behind the bench, gold robe with the contemporary tailored cut, thin round glasses on his nose, **his white folding fan snapped open and moving.** He is looking at the tallies rather than at the camera.
3. DR-QI standing to one side of the bench, blue cheongsam with cloud embroidery, open bamboo scroll held casually like a tablet. **Behind her a plain empty mat where a physician would kneel and nobody on it.** **CARD** set to one side: 嘗貴後賤，雖不中邪，病從內生，名曰脫營. *(Default: the plate renders; the characters are added at edit — see Finishing steps.)*
4. A wrist cushion set out alone on the bench with a lamp brought close to it. **A hand comes toward it from off frame and stops short of it and withdraws.** No arm on the cushion and no patient anywhere in frame.
5. LEI-GONG cross-legged at the far end of the bench, cinnabar robe with lightning trim, small hand drum hanging at his hip, wax tablet on his knee. **He turns one tally face down and goes on writing.** Spark motes drifting off the cinnabar sleeve.
6. **An official's seal cord lying coiled on the lacquer with no seal on the end of it**, and an open seal box beside it with nothing inside. The light has moved along the bench.
7. **END CARD** — plain plate. The five tallies face down in a row, **and four blank slips laid beside them that nobody has written on.** Disclaimer and editorial credit added at edit time.

**Blocks 1, 6 and 7 are the stillness risks.** A bench, a laid-out object and a plate.
Give each a slow push, a light change travelling along the lacquer, or ink still
settling, so the clip does not read as a held frame. **Block 7 is the one to watch** —
its whole content is four slips that stay blank, which is an absence, and an absence is
exactly what the assembler's freeze probe flags. Carry it on the light and on a slow
pull back, never on the blank slips alone.

**Nothing is ever examined in any of the seven shots.** No wrist is taken, no tongue is
looked at, no body is touched. That is the trailer's visual argument and the one rule a
recut may not relax: the chapter's finding is that the examination comes back empty, so
a shot of a successful examination says the opposite of its own narration.

**No patient appears in any of the seven shots**, and the dock is an empty mat for the
whole cut — see *Compliance notes*.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-suwen77-longform-v1.md`, which holds the classical text and the extraction
warning that governs the one card glyph below.

| § | Passage | Blocks |
|---|---|---|
| §1 | 故事有五過四德，汝知之乎 | 2, 5 |
| §1 | 雷公避席再拜曰：臣年幼小 | 5 |
| §2 | **嘗貴後賤，雖不中邪，病從內生，名曰脫營** | 3 |
| §2 | 嘗富後貧，名曰失精 | 6 |
| §2 | 醫工診之，不在藏府，不變軀形 | 1, 3 |
| §2 | 診之而疑，不知病名 | 1 |
| §2 | **良工所失，不知病情** | 1, 5, 6 |
| §2 | 診有三常，必問貴賤 | 6 |

**Block 1's claim that the physician has "already failed" is the chapter's own verdict
and not an editorial flourish.** The line it renders is 良工所失，不知病情 — *what the
skilled physician misses is that he does not know the circumstances of the illness* —
and the chapter files it as the first of the five faults. **The subject of that sentence
is 良工, the *good* physician**, which is the finding block 5 is built on and which the
longform gives its own block.

**Block 5's "four virtues" is the chapter's own promise and the longform audits it.**
The Emperor announces 五過四德 in the opening section. **The received chapter expounds
the five faults and never lists the four virtues at all.** The trailer states the
promise and does not state the absence; the absence is the episode's material and is
argued at longform blocks 82 and 83, with the commentarial dispute recorded in that
document's *Departures* section. **Do not let a recut turn block 5 into the punchline
about the missing virtues** — it is the episode's payoff and a trailer that spends it
has nothing left to sell.

**Longform beats deliberately withheld from this trailer:** the abyss-and-clouds simile,
the second through fifth charges entire, 脫營 and 失精 read as a matched pair, the three
constants, the 神 debunk, all four comparative frames, both reckonings past block 4, and
the verdict. **The fifth charge's clinical detail is withheld on compliance grounds
rather than for pacing** — it is the chapter's most graphic passage and a
seventy-second cut has no room to hold it at the reflective distance the longform gives
it.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di** and Dr-Qi wears the cast sheet's **blue** cheongsam. Lei-Gong is **Lei-Gong**
and never "Xiao-Lei". The series is *The Emperor's Inner Canon* and never "Chronicle of
Balance", which is the slate document's own working name for the channel.

**One reconciliation is specific to this chapter and it matters here more than
anywhere.** The slate's §9 open items treat Leigong as a **fourth** character requiring
an "ink-wash-silhouette rule" so he does not breach a three-character cast. **`CLAUDE.md`
casts him as core cast** with his own key art (`assets/witty-Lei.png`) and his own
permanent voice, so there is no fourth-character problem and no silhouette treatment
here. He is drawn as himself. **This chapter is one of the three the slate names as
Leigong-led material**, so the reconciliation is load-bearing rather than incidental.

**The other reconciliation is that Qibo is not in this chapter.** The source's only two
speakers are Huangdi and Leigong. **Dr-Qi is written into the hearing as the practising
physician who reads the charge and attaches the case**, which is a staging decision of
ours and is marked as ours in the longform. She speaks no line the chapter gives to
somebody else.

---

## Production record (Higgsfield)

**Status: NOT RENDERED.** Nothing has been generated, no credits have been spent, and
the step-0 model-and-tier gate has not been run. The tables below are the **plan**, and
every figure in them is an estimate until a live `get_cost` replaces it.

### Before anything generates

`SKILL.md` step 0 is a hard gate and has five parts. In order:

1. **Tool availability** — one free `ToolSearch` for the eight names in step 0, plus the
   free `sandbox_exec` probe of `assemble_final.sh --help`. This comes first because a
   missing step-4 tool invalidates an approved step-0 estimate, and the server-side
   assembler has already vanished from the surface once with no warning.
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

**Budget ~120, not ~82.** The naive first-pass figure is 82 and the Suwen 13 run came in
at **119.7 against an ~85–95 preflight**, with the entire gap in the *number* of voice
takes rather than their price. That run is the only one in the repo whose delta fully
reconciles, so its re-take rate is the best estimate available. **A 720p full render
replaces the 70 with 175 and takes the total to ~225.**

> **Do not preflight voice on a short probe string.** `seed_audio` bills by length, and
> this figure has been got wrong twice in the repo in opposite directions — 0.5/take
> from a 13-word probe and 0.1/take from a shorter one, against a measured **1.3–1.7**.
> Cost a representative-length line from the narration table above.

### Style key — this chapter needs a new one

Chain off the Suwen 1 head `4b6f7106-67da-4d1a-a553-c58ba90ac43f` recorded in `SKILL.md`
step 1, passed as a **job ID** reference with only the motif swapped. `SKILL.md` settled
this on 2026-08-10: each chapter key bakes in its own chapter's furniture, so the Suwen 8
key (`05ebe984-2781-491e-8c84-2b20e608d2a8`) would bring a lacquer chart of twelve boxes
into a cut whose whole visual system is a bench of five tallies. Chain off the neutral
head.

| | |
|---|---|
| Job ID | *(to be recorded)* |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key at a long low lacquer bench in a bare hall at first light; five bamboo tallies laid face up across the bench, an empty mat facing it where nobody kneels, and an open seal box with nothing in it |
| Derivation | Suwen 1 head → this key |
| Estimated cost | 2 credits |

The longform needs a **16:9 sibling** derived from *this* job ID once it exists. **Do not
overwrite the vertical key** — this trailer depends on it.

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
This cut is a **daylight** interior rather than a night one, which is unusual for this
series and should make the preset fire less often than it did on the Lingshu 43 cut —
but the hall is deliberately underlit at first light and shot 4 brings a lamp close, so
pre-decline anyway. It costs nothing and the alternative is a wasted round of retries.

**Keep audio vocabulary out of every clip prompt** — *drum*, *drone*, *bell*, *gavel*,
*music*, *rhythm*. Lei-Gong's hand drum is a **prop** in shot 5 and must be described as
an object hanging at his hip, never as a sound.

**Three things are banned from every clip prompt in this cut** on compliance and
safety-filter grounds: any **modern clinical imagery** of any kind, any **body being
examined or touched**, and any figure in the dock. A patient under examination is both
the wrong argument for this chapter and the class of imagery that most easily reads as
a person restrained. **The mat facing the bench is empty in every shot.** See
*Compliance notes*.

| Block | Job ID | Notes |
|---|---|---|
| 1–7 | *(to be recorded)* | one clip per block, style key on each |

### Voiceover — plan

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55** on all four voices. **Generate
two variants per block and keep the better one** — at ~1.45 a take that is the cheapest
reliable method, and a word count predicts a take only to about ±1.5s.

| Block | Voice | Words | Predicted speech at the measured rate | Margin above the 8.6s floor |
|---|---|---|---|---|
| 1 | Arthur | 42 | ~9.5s | +0.9s |
| 2 | Xavier | 43 | ~9.7s by the Suwen 8 observation | **the ceiling is the risk here, not the floor** — named repair in the block-2 note |
| 3 | Vesper | 42 | ~9.3s | +0.7s, **and 0.7s under the ceiling** |
| 4 | Arthur | 40 | ~9.1s | +0.5s |
| 5 | Zane | 50 | ~9.5s | +0.9s, **and this exact count has landed first take twice** |
| 6 | Arthur | 40 | ~9.1s | +0.5s |
| 7 | Arthur | 28 | ~9.6s by measured precedent | see the block-7 note |

**Blocks 2 and 7 are the two to expect trouble on.** Block 2 is a word under Xavier's
ceiling, and block 7 is the mandated-disclaimer structure that ran pathologically slow
on the previous cut. **Blocks 3, 4 and 6 carry the floor risk instead** — Vesper's
window is 1.4s wide against a range two words wide, and Arthur's 3.98–4.80 w/s spread
puts a 40-word line anywhere between 8.3s and 10.1s. The named repair for each is in its
note above, and **each one is a specific deletion or extension rather than a
re-punctuation.** Re-roll freely before rewriting: a word count predicts a take only to
about ±1.5s and two variants a block is the cheapest reliable method.

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
  traditional.** The chapter arrived as `06_Ch_SW77__The_Five_Ways_a_Doctor_Fails_You.md`,
  whose Chinese extracted cleanly but in simplified form (疏五过论 / 尝贵后贱，虽不中邪，病从
  内生，名曰脱营). **The traditional forms on this cut's one card were converted by hand and
  are not from the source file.** ffmpeg renders a missing or wrong glyph silently and
  nothing downstream re-checks it. Verify 嘗貴後賤，雖不中邪，病從內生，名曰脫營 against the
  longform's *Source text and translation* before burn.
- **The supplied English translation renders 過 as "fault" and the working title as
  *On the Five Faults*.** That is kept. The longform unpacks 過 as an *overstepping*
  rather than a crime at its block 12; nothing in this trailer depends on the unpacking.
- **The supplied source carries at least two readings that differ from standard
  editions** — 精致神內傷 for 精神內傷 and 凡風診者 for 凡診者. Neither reaches any line or
  card in this trailer. Both are argued in the longform's *Departures* section.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1. **On this cut it is doing compliance work as well
  as policy work**, because it is the earliest signal available that the video is about a
  classical text rather than about contemporary medicine.
- **End disclaimer card** — mandated string verbatim, over block 7. Block 7 is planned
  into the block count and into the credit estimate above, as `CLAUDE.md` requires; it is
  not folded into the title block.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card and in
  the description. **Not in any voice take** in this cut.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but generates
  none. **Guqin licensing is unresolved** (slate §9) — until cleared, score this cut with
  no guqin. The struck wooden notes at blocks 4 and 5 are **not music** and are not
  generated either: they are single percussive strikes hand-placed at edit. Trailers earn
  disproportionate plays and carry the higher Content-ID exposure, so this is the cut to
  be most careful about.

### Finishing steps

**Not yet executed — this cut has not been rendered.** The procedure below is written
with **this cut's own numbers**: 7 blocks, 70.0s, quotation card at **0:20–0:30**, end
card **1:00 to 1:10**.

Both caption scripts are pure text tools: they read this document, touch no video, need
no network and cost no credits. **Run them from the repo root or pass an absolute path.**

**1. Check captions** at 9:16, **before generating takes** — a fix is free then and costs
a re-take afterwards.

```
node scripts/check_caption_fit.js output/suwen/ch77/inner-canon-suwen77-trailer-v1.md
```

**Run 2026-08-11. The result is one known exception plus thirteen overflowing clauses
across the seven blocks, and none of them is a defect.** That is against ten on the
Lingshu 43 trailer, fourteen on Suwen 67, nine on the rendered Suwen 13 trailer and
three on Suwen 8.

The exception is the mandated disclaimer. *"A dramatized adaptation of a classical
philosophical text."* is 58 characters and 1187px against a 556px line — it needs three
lines on a 720-wide vertical frame and fits on one at 16:9. It is a compliance string,
cannot be reworded, and `check_caption_fit.js` carries it as a known exception. The
sidecar splits it and libass margins keep it in frame.

**The thirteen are structural rather than careless.** The vertical two-line budget is
**1111px, about 44 characters**. The assembler's 8.6s floor forces roughly 42 words into
every block, which is about 200 characters, so a block clears the budget only if it is
cut into five or more clauses — and `SKILL.md` caps a block at four sentences because the
assembler *warns* on internal pauses of 0.8s or more. **The two rules cannot both be
satisfied at 9:16.** This cut sits three clauses worse than Lingshu 43 because its
sentences are longer on average: a tribunal speaks in complete propositions and a dream
report does not.

**The widest clause in the cut is block 4's at 109 characters, and splitting it was
tried and rejected.** Broken after *appointment* it yields a 50-character clause and a
58-character clause — **two three-line cues where there was one four-line cue**, which
is more churn rather than less. That reproduces the finding recorded on the Lingshu 43
trailer: **splitting a wide clause reduces its width and increases the number of cues**,
because each fragment still overruns a two-line budget of about 44 characters and then
rounds up to a cue of its own. Worth knowing before anybody "fixes" a clause on this
list.

**No free repair is available in this cut and one was looked for.** The lever on a
comparable cut was to add a comma to a block with word-count headroom, converting a
three-line cue into a one-line and a two-line cue. Block 2 is one word under Xavier's
ceiling, block 3 has one word of room in a two-word window, and blocks 4 and 6 sit at 40
against a floor of 38, so **buying caption width here would spend duration these blocks
do not have**, on a window 1.4s wide, to fix a problem the sidecar already solves.

**Read the non-zero exit as *"this will read busily"*, never as *"this cut will
overflow"*.** The sidecar pre-splits every clause above and libass cannot draw outside
its margins.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in the
record.

```
node scripts/build_subtitles.js output/suwen/ch77/inner-canon-suwen77-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from 1:00)
so the disclaimer is not simultaneously a caption and a card. The burn copy is blocks
1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then `subtitles=`
— captions are then drawn at native resolution rather than stretched with the picture.
Convert the `.srt` to `.ass` and re-target `PlayResX/Y` to 720×1280 first; ffmpeg's
SRT→ASS converter hardcodes 384×288, which scales every style value by ~4.4× and runs
the lines off frame. `build_subtitles.js` prints the command in this order already.

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
0:09, over block 1's push along the bench. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the lower-third
**above** that band. **y=896** is the position the comparable cuts used and measured
clear of the caption band.

**5. Quotation card — block 3, in at 0:20, out at 0:30.** The block-3 clip renders the
bench and the empty mat and no text, so **嘗貴後賤，雖不中邪，病從內生，名曰脫營** is added
here in the same `drawtext` pass, **set to one side of frame so it does not sit over
Dr-Qi**. It is the longest card this series has used on a vertical frame at sixteen
characters plus punctuation, so **set it in two columns rather than one** and check it
clears the caption band at y=1000. Verify every glyph against the longform's *Source text
and translation* before export, and note that the source file supplied these characters
in simplified form only. ffmpeg needs a CJK-capable face — Anton has no Chinese coverage
and renders tofu boxes silently.

> **⚠ This step was skipped on a comparable cut and the card shipped blank.** The Suwen
> 13 trailer's block-4 card is still an empty plate in its delivered file because the
> burn pass covered captions, the lower-third and the end card only. **Do not treat step
> 5 as optional here.**

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so multi-line
centred text needs one `drawtext` filter per line. **Block 7's plate is a pale lacquer
bench in flat daylight**, which is the light case rather than the dark one: measure
top-strip luma first and expect to need a scrim. A comparable cut needed `black@0.62`
over a light ink wash.

**7. Music.** None, until guqin licensing is cleared. The block 4 and 5 wooden strikes
are hand-placed at edit and are not a bed.

---

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, before any
generation. The longform's audit governs the material this trailer draws from; these are
the trailer-specific findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document, at the
  head of block 7's narration, on screen as the end card, and in the description. Block
  7's narration is extended past the mandated string to clear the 8.6s floor; **the
  mandated sentence itself is unaltered.**
- **The slate's named care point for this chapter is the one this trailer is most likely
  to break, and it is answered inside the cut rather than deferred to the episode.**
  §3.8: *"do not extend the argument into criticism of any identifiable contemporary
  healthcare system, which would reclassify the episode as controversial-issues
  content."* **Block 4 is that refusal and it is a whole block of the seven** — a seventh
  of the runtime spent saying what the cut is not, arriving immediately after the charge
  and before Lei-Gong is allowed to be impressed by it. **No country, no health system,
  no insurer, no profession-as-it-exists-now and no living clinician is named or alluded
  to in any line or any shot.** **Block 4 is not a lever and must not be dropped, split,
  or moved after block 5 in any recut.**
- **The title is the second compliance surface and it is handled inside the script.**
  *The Five Ways a Doctor Fails You* is the slate's working title and it is kept, because
  the episode delivers exactly five faults from a named text. **The second person is
  removed everywhere else:** block 2 says *fails the man in front of him*, block 4 says
  the cut is not a verdict on anybody practising now, and **no line in the cut addresses
  the viewer as a patient.** On-screen framing is *Suwen 77, 疏五過論 — On the Five
  Faults*, which is the chapter's own title, and it appears in the same frame as the
  working title. **Do not restore *fails you* into any spoken line.**
- **No medical instruction and none derivable.** No dosage, no regimen, no acupoint, no
  needle depth, no technique, no diagnosis and no benefit claim appears anywhere. Block 5
  says the charges are *not about the hand* and names a needle only to say that nobody is
  accused of one. **No line tells a viewer to do anything at all** — not to ask their
  physician anything, not to seek anything, not to avoid anything.
- **No self-diagnosis surface.** 脫營 is described in block 3 in the **third person and
  in the past** — *a man was noble once* — and the only second-person lines in the cut are
  block 4's two refusals. **A viewer cannot read themselves into this cut**, which is the
  structural version of the rule rather than a hedge on top of it.
- **Health content stays philosophical narrative.** The cut's only claim about medicine
  is a claim about what one Han-dynasty text counted as a fault.
- **Mortality — absent from this cut entirely.** The chapter's fifth fault ends with a
  physician announcing the day a man will die, and the longform handles it at report
  distance. **None of that material is in the trailer**, and the cut contains no death,
  no dying, no injury and no body.
- **The fifth charge's clinical detail is excluded from this cut on compliance grounds**
  and is named here so nobody restores it believing it was overlooked: 斬筋絕脈 (severed
  sinews and broken vessels) and 膿積寒炅 (accumulated suppuration with cold and heat) are
  **in no line and no shot.** They are handled in the longform by report without
  depiction, and they are **not to be added to this trailer at any runtime.**
- **Supernatural hooks — none available and none introduced.** This chapter offers no
  occult hook, which makes it unusual on the slate. **神 is not translated anywhere in
  this cut** and does not appear in any line; the longform debunks it at its block 57,
  where the chapter's 動神 is read as the patient's own attention and morale rather than
  as a spirit.
- **Indulgence and alcohol — not present** in any line or any of the seven shots.
  The chapter's 飲食居處 material is the longform's and it is staged there as a cleared
  table.
- **Restraint and prone-figure imagery is designed out.** A tribunal invites a figure in
  the dock and a medical chapter invites a body being examined, and **restraint or
  bound-figure imagery has returned `nsfw` from this service before on innocuous subject
  matter.** **The mat facing the bench is empty in all seven shots, nobody is examined,
  and no hand ever touches a body.** Shot 4 is a wrist cushion with no arm on it and a
  hand that stops short.
- **No modern clinical imagery anywhere.** No stethoscope, no white coat, no scrubs, no
  hospital, no waiting room, no chart, no scan and no consulting room in any shot or any
  prompt. This is the imagery that would turn an episode about a classical text into
  commentary on a contemporary system, and it is banned at prompt stage rather than
  caught at review.
- **Title and thumbnail honour the educational payoff** — *The Five Ways a Doctor Fails
  You*; on-screen framing *Suwen 77, 疏五過論 — On the Five Faults*. **Thumbnail
  direction:** the bench with five bamboo tallies and one of them turned face down, and
  過 set to one side. **No doctor figure, no modern clinician, no hospital, no
  stethoscope, no red cross, no pointing finger, no angry patient and no face in
  distress** — every one of those makes the thumbnail a claim about medicine now, which
  is the claim the script disowns. No faces other than the three cast characters. **The
  words *malpractice*, *negligence*, *they don't tell you*, *what your doctor won't say*,
  *ancient secret*, *lost knowledge* and *ahead of its time* appear in no line, no title
  and no thumbnail direction.**
- **Hedge allocation — three characters speak in a 7-block trailer, which is unusual and
  needs recording.** `SKILL.md` makes narrator-only the trailer default precisely because
  the narration carries every hedge. Here **Arthur keeps all four framing blocks (1, 4, 6
  and 7)**, including the whole of the not-about-your-doctor refusal and the disclaimer.
  **No compliance content sits on a character voice at all**: block 2 is Fan-di convening
  the hearing in the chapter's own words, block 3 is Dr-Qi rendering 嘗貴後賤，雖不中邪，病
  從內生，名曰脫營 close to literally, and block 5 is Lei-Gong describing what the charge
  sheet does not contain. None of the three makes a claim about the viewer's body, about
  treatment, or about medicine now.
- **Dr-Qi's block 3 is written to `CLAUDE.md`'s voice rule.** She never sounds like she is
  winning; the more Fan-di performs the stiller she gets. Block 2 is the most theatrical
  line in the cut and block 3 is the flattest, and that ordering is deliberate. **Her
  block is also the only one that recites the source**, which is the same division of
  labour the Lingshu 43 trailer used.
- **Historical accuracy** — cited on screen as **Suwen 77**, never a bare "Chapter 77",
  and **Lingshu 77 is on the same slate at publish slot 10**, so the collision is with
  this channel's own catalogue rather than only with the canon. **Block 1's "two thousand
  years old" is a round figure for a text whose dating is argued over**; the longform
  carries the caveat in full at its block 17 and this trailer's phrasing is deliberately
  approximate rather than precise. Block 5's claim about the charge sheet is scoped in
  *Source mapping* and is a claim about the five faults as the received text has them.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the description
  and tick the altered-or-synthetic-content box at upload. **No character makes a
  first-person factual assertion about their own expertise** — Dr-Qi reports the chapter's
  first charge and asserts nothing about the body in her own person, and Fan-di reads a
  charge sheet rather than diagnosing anybody.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a bench with tallies, a man with a fan,
  a woman with a scroll, a wrist cushion with no arm on it, a boy with a wax tablet, a
  seal cord with no seal, and a plate. **No bodies, no examination, no injury, no anatomy,
  no ceremony, no restraint or prone-figure imagery, no modern clinical imagery, and no
  faces other than the three cast characters.** The hall is underlit at first light and
  shot 4 brings a lamp close, so pre-decline `IN THE DARK` on all seven even though this
  is a daylight cut.

---

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole 10s
blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's audit. The hook, the
court, the charge, the refusal and the turn all survive. **Cost:** block 4 then says what
the cut is *not* and only block 6 says what it *is*, so the trailer reads as a refusal
with one claim attached — and it loses its fourth voice and its only statement that the
charges are failures of attention rather than of technique. This is the cut to make only
if the budget forces one, and it is still the right one to make before touching block 4.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 6. **Not recommended.** Block 6 is
the only place the cut says what the chapter did that makes it worth an episode, and
without it the trailer sells a grievance.

**Do not reach 60s by dropping block 4.** It is the slate's named care point for this
chapter and it is the one block whose absence turns the cut from history of medical
ethics into commentary on contemporary healthcare — which is the reclassification the
slate exists to prevent.

**Stretch to 80s (8 blocks) — add 1.** Add a **Dr-Qi block after 3** carrying the second
named condition: that a man who was rich and is poor is called 失精 and that both names
in the chapter are names for a loss rather than for a symptom or an organ. **This is the
strongest single addition available**, because it is the observation that makes the
first charge a pattern rather than an anecdote, and it arrives in the chapter's own
vocabulary. It costs the cut its balance by giving Dr-Qi two consecutive blocks of
recitation, which is why 70s remains the recommendation.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus an **Arthur block after 1** on
the abyss and the drifting clouds — that the chapter opens by saying a depth can still be
sounded and a cloud cannot, and that this is a text about the limits of examination
before it is a text about blame. It is the most beautiful thing in the chapter and it is
the episode's cold open. **At 90s the trailer starts teaching the episode rather than
selling it**, and spending the cold open here leaves the longform opening on its second
best image, which is the reason 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:**

- **Block 7** — the disclaimer card is mandatory and is not a lever.
- **Block 4** — the not-about-your-doctor refusal, in full and in its position. See
  *Compliance notes*.
- **Block 3** — it is the only place the chapter's own sentence is spoken, and without it
  the trailer is a set of claims about a text nobody has heard.
