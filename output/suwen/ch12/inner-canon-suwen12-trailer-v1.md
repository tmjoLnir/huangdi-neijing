# The Emperor's Inner Canon — Suwen 12 Trailer v1 (70 seconds)

**素問·異法方宜論第十二 · Five Regions, Five Medicines**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 12*, and on this chapter the collision is
two slots away rather than theoretical.** Both halves of the canon run to
eighty-one separately numbered chapters, and **Lingshu 12 《經水》 — *The Rivers
Inside* — is rank 3 on the same Top-20 slate at publish slot 7, while this
chapter is at slot 9.** `CLAUDE.md` names this exact pair as the reason the repo
is filed by book at all. **Two consecutive-ish episodes of this channel will both
be "chapter 12"**, so a bare "Chapter 12" in a title, a thumbnail, a description
or a pinned comment sends a checking viewer to the wrong text about half the
time — and it will be *this channel's own* wrong text. Citation accuracy is the
channel's stated differentiator.

Companion longform: `inner-canon-suwen12-longform-v1.md` (108 blocks, 18:00),
which holds the complete classical text, this cut's working translation, all five
regions in full, the archaeological reckoning and the compliance audit this
trailer inherits.

**Slate position.** Suwen 12 is **rank 9 of the Top-20 slate and publish slot 9** —
`docs/Chronicle of Balance Top20 Chapter Slate.md` §3.9 and §5. Its stated job at
slot 9 is to answer an objection the audience has had time to form: *"Answers the
objection the audience has by now formed ('why should this apply to me?'). Best
placed after the audience is invested enough to have the objection."* §3.9 calls it
*"a theory of why medical traditions differ, written from inside one of them,
around two thousand years before comparative medical anthropology existed,"* and
*"the cleanest possible answer to the audience's likeliest objection — because the
chapter's own answer is that no system is universal and all five are partial."*
The slate assigns it the **compass rose** structural form: *"five stations, each a
self-contained travelogue segment, converging on the centre."* Seventy seconds
cannot walk five stations, so the trailer **asks the question, gives the answer,
walks one station, and shows the other four as four implements nobody has picked
up yet.**

**The slate also writes this chapter's one discipline, and a trailer is the
hardest place to keep it.** §3.9: *"The chapter makes broad characterological
generalisations about regional populations (complexions, skin texture, diet,
habits) that read badly to a Tier-1 ear if delivered flat. These must be presented
as what a Han-dynasty writer believed about people in other regions, with the
ethnographic distance made explicit."* **Block 4 spends a whole block on that
distance** rather than deferring it to the episode, and it arrives before
Lei-Gong is allowed to admire anything. That is this cut's single most important
design decision. The second one is visual and costs nothing: **no population is
depicted in any of the seven shots.** Every region is carried by its terrain, its
weather and the implement that came out of it.

**This is a fresh treatment.** No prior version of this chapter exists in
`output/`; nothing has been carried over from any earlier script, per the brief.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the
real choice is six, seven, eight or nine blocks. **Seven is the smallest count
that lets one station be concrete and still carry the distance:**

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer
  has five content blocks and a 70s trailer has six.
- The cut has to carry **five things**: the puzzle, the question in the Emperor's
  own mouth, the answer with one region made concrete, the ethnographic refusal,
  and the claim that makes the chapter worth eighteen minutes. Six content blocks
  is one each plus the audit that turns five separate anecdotes into a system.
- **At five content blocks the block that goes is block 4**, the ethnographic
  distance — and a trailer that reads a Han writer's account of what people
  elsewhere look like and eat, with no frame around it, is precisely the cut the
  slate's care point exists to prevent. **The distance is not a lever.** If the
  runtime has to come down, the cut goes to 60s by dropping Lei-Gong; the
  reasoning is in *Runtime levers*.
- **This chapter is unusually easy to stretch and that is the trap.** There are
  five regions and each is a self-contained ten seconds, so 80s and 90s are
  available and specified in *Runtime levers* — but the seventh and eighth
  content blocks both buy *another station* rather than a new turn, and a trailer
  that walks three of five stations has started delivering the episode instead of
  selling it. **The compass rose is the thing to withhold.**

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3 **as re-measured 2026-08-10 on the
Suwen 13 trailer** — Arthur 38–44, Xavier 40–44, Vesper 41–43, Zane 47–52 — and
the assembler gates on **8.6–10.0s of detected speech** at both edges as hard
errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–2. A distant sea and one gull enter under
block 3 and stop dead at the cut to block 4, which plays on room tone alone. A
single struck wooden note on block 5 as the fifth implement is laid down. Room
tone from block 6. **Nothing that could read as travelogue scoring** — the
regions are carried by their own weather, and a score under a montage of places
is what turns ethnography into tourism.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**,
text-free except blocks 3 and 7. **The longform's two rules are carried over
whole: no population from any region is ever depicted, and no implement ever
touches a person.** The map is the set; the implements are the cast of objects.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Five physicians treat the same illness five completely different ways. All five patients recover. A Chinese medical text two thousand years old asks why that happens and its answer is not about the physicians at all. It is about where they live. |
| 2 | Fan-di (Xavier) — the question | I have a question and nobody has answered it yet. My physicians treat one illness five different ways and every one of those ways works. Either four of them are wrong or something is going on that I do not understand. |
| 3 | Dr-Qi (Vesper) — the answer and the first station | None of them is wrong. The land makes it so. On the eastern seaboard people live on fish and salt and the sickness that finds them rises to the surface of the skin. So the physicians there reached for a sharpened stone. |
| 4 | Arthur (V.O.) — the distance | One thing before the other four. This chapter also describes the people of each region and those descriptions are what one writer in the Han capital believed about everybody who lived somewhere else. They are evidence about him and not about them. |
| 5 | Lei-Gong (Zane) — the audit | I have counted what is on this list and here is what nobody points out. Five directions and five therapies and not one of them appears twice. Nobody in the chapter says which region got the best medicine. It never ranks them and that is the strangest thing in it. |
| 6 | Arthur (V.O.) — the turn | That is a theory of why medical traditions differ written from inside one of them. It says no medicine is universal and every one of the five is partial. Comparative medical anthropology would not exist as a discipline for another two thousand years. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode walks all five regions and asks whether the chapter observed them or invented them. |

**Every block above is inside its voice's re-measured range**, verified by parsing
this document's own narration table and dropping tokens that contain no letter or
digit — a spaced em-dash is not a word, and counting it as one spends real budget
on a window 1.4s wide.

| Block | Voice | Words | Budget | Margin |
|---|---|---|---|---|
| 1 | Arthur | 42 | 38–44 | upper-mid |
| 2 | Xavier | 41 | 40–44 | lower-mid; **three words under the ceiling by design** — see the note |
| 3 | Vesper | 42 | 41–43 | mid; her window is the narrowest in the cast and there is one word either side |
| 4 | Arthur | 42 | 38–44 | upper-mid |
| 5 | Zane | 50 | 47–52 | upper-mid; **50w returned 9.54s first take on Suwen 13 and 9.68s on Suwen 8** |
| 6 | Arthur | 43 | 38–44 | **one word under the ceiling** |
| 7 | Arthur | 28 | **~29 total** | mandated string plus a **17-word** tail — see below |

> **Block 2 is deliberately three words under Xavier's ceiling and the reason is
> this chapter's own rhythm.** The line ends on a three-part proposition — *either
> four of them are wrong or something is going on* — and `seed_audio` slows into a
> weighed alternative the way it slows into an enumeration. Xavier has landed
> first take on both prior runs at 41 and 44 words, so the count is safe; the
> structure is what is being hedged. **If it lands under 8.6s, extend the middle
> sentence** — *five different ways* becomes *five completely different ways* —
> rather than adding a fourth sentence.

> **Block 3 sits mid-window and has one word of room in each direction**, which is
> all Vesper's 41–43 range allows. Its shape is the chapter's own: the verdict
> first, the reason second, the region third and the implement last. **If it lands
> over 10.0s, delete *that finds them* and re-roll**, accepting the count drops to
> 39 — the take will already have shown the count was the wrong predictor. **If it
> lands under 8.6s, extend the third sentence and never the second.** *The land
> makes it so* is 地勢使然也 rendered almost word for word and is the whole chapter
> in five words; it must not be padded.

> **Block 5 is Zane's only line in the cut and it is comma-free on purpose.** It
> is a four-part finding — *five and five / no repeats / no ranking / and that is
> the strange part* — which is exactly the structure `SKILL.md` says never to hand
> a voice as a comma list. Written as separate sentences it costs words rather
> than pauses: a 31-word Arthur line with seven commas returned **12.022s** against
> **8.913s** for the same 31 words with none. **If it lands over, delete *in the
> chapter* from the third sentence and re-roll.**

> **Block 7 is short on purpose and the reason is measured.** The mandated
> disclaimer is two short full-stopped sentences and `seed_audio` treats them as
> separate beats and slows the whole take around them. On the Suwen 13 trailer the
> same block at 33 words returned **11.326s, 16.930s and 10.538s** — three takes,
> all over, one by nearly seven seconds. **Cutting the trailing clause to 18 words
> landed it at 9.602s on the first roll.** The tail here is 17 words for that
> reason. **Do not lengthen it to reach Arthur's 38–44 range**; that range does not
> apply to this block and a checker reading the table above will flag it wrongly.

**No block contains a comma-separated list of three or more items, and there is
not a single comma in any of the seven narration cells.** No block exceeds four
sentences. **Do not add commas to these lines** — this chapter is built out of
enumerations, which makes it the worst case in the repo for the punctuation
failure, and every list in it has been joined with *and* or split into sentences
on purpose.

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks
3 and 7.** Every shot needs motion from frame 1 — the assembler warns on a static
open or a frozen tail.

1. A large blank silk map laid flat on a low lacquer table, seen from **directly above** and filling the vertical frame. Ink wakes at the centre and creeps outward in four directions and stops well short of the edges. Slow push in.
2. FAN-DI standing over the map, gold robe with the contemporary tailored cut, thin round glasses on his nose, **his white folding fan snapped open and moving.** He is looking down at the silk rather than at the camera, and his shadow falls across the unmarked quarter of it.
3. The map's **eastern edge** inking itself — a shoreline, a salt pan drying in squares, a net hung on a frame with the light through it. **DR-QI's hand comes into frame and sets a single sharpened stone lancet down on the silk** and withdraws. **CARD** set to one side: 地勢使然也. *(Default: the plate renders; the characters are added at edit — see Finishing steps.)*
4. The **margin** of the map, where a later hand is writing a note in small characters beside the eastern shore. The note is glossed rather than legible, the brush moves steadily, and the camera holds on the margin and never returns to the map. **No face and no figure from any region.**
5. LEI-GONG cross-legged at the map's corner, cinnabar robe with lightning trim, small hand drum hanging at his hip, wax tablet on his knee. **Four more implements are already lying on the silk at their four compass points and he sets the fifth down and goes back to his tally.** Spark motes drifting off the cinnabar sleeve.
6. The five implements from directly above, one at each point of the compass, **and the silk drawing closed around them** as the map is rolled from both edges toward the middle until all five lie together in one roll.
7. **END CARD** — plain plate. The rolled silk lying alone on the lacquer with the five implements no longer visible. Disclaimer and editorial credit added at edit time.

**Blocks 1, 4 and 7 are the stillness risks.** A map, a margin and a plate. Give
each a slow push, ink still settling, or a light change travelling across the
silk, so the clip does not read as a held frame. **Block 4 is the one to watch** —
its content is a hand writing in a margin, which is the smallest movement in the
cut, and the assembler's freeze probe flags exactly that. Carry it on the brush
and on a slow drift along the margin, never on the written note alone.

**No population from any region appears in any of the seven shots**, and that is
the compliance decision rather than an aesthetic one. The chapter's regional
descriptions are of complexions, skin texture, diet and habits; **drawing them
would turn a reported Han-dynasty belief into this channel's own depiction of a
people.** The regions are carried by terrain, weather and implements — a
shoreline, a salt pan, a drying net — and the only human figures in the cut are
the three cast characters, who never leave the room the map is in.

**No implement ever touches a person in any of the seven shots.** The lancet, and
the four implements at block 5, are laid on silk and picked up from silk. Nothing
enters a body, nothing is applied to a body, and no body is treated — see
*Compliance notes*.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-suwen12-longform-v1.md`, which holds the complete classical text and
the extraction warning that governs the one card glyph below.

| § | Passage | Blocks |
|---|---|---|
| §1 | **醫之治病也，一病而治各不同，皆愈何也** | 1, 2 |
| §1 | **地勢使然也** | 3 |
| §1 | 東方之域，天地之所始生也，魚鹽之地，海濱傍水 | 3 |
| §1 | 其民食魚而嗜鹹 | 3 |
| §1 | 故其民皆黑色踈理 | 4 |
| §1 | 其病皆為癰瘍，其治宜砭石 | 3 |
| §1 | 故砭石者，亦從東方來 | 3, 5 |
| §2–§5 | 其治宜毒藥 / 其治宜灸焫 / 其治宜微鍼 / 其治宜導引按蹻 | 5 |
| §5 | **故聖人雜合以治，各得其所宜** | 5, 6 |

**Block 1's "five completely different ways" is the chapter's own arithmetic and
not an editorial flourish.** The chapter names five regions and assigns each
exactly one therapy — stone lancet, potent drugs, moxibustion, the fine needles
and guided exercise with manipulation — and the Emperor's opening question is
literally *one illness treated differently in each case and all of them cured*.
**Block 5's finding that no therapy appears twice is therefore a description of
the text rather than a reading of it**, which is why it is safe in a
character's mouth.

**Block 5's "it never ranks them" is the trailer's one structural claim and the
longform argues it properly.** The chapter closes on 各得其所宜 — *each obtains
what suits it* — and at no point does it call one region's medicine better than
another's. The trailer states the absence and does not explain it; **the
explanation is the episode's payoff** and it runs at longform blocks 94 to 98.
**Do not let a recut turn block 5 into the punchline about the five-directions
grid** — that reckoning is the episode's best material and a trailer that spends
it has nothing left to sell.

**Longform beats deliberately withheld from this trailer:** the west, the north,
the south and the centre entire; the refrain 亦從…來 read as a refrain; the
five-directions reckoning; the Mawangdui and Zhangjiashan archaeology; the *Airs,
Waters, Places* comparison; 因地制宜; and the closing principle 得病之情，知治之大
體也. **The chapter's regional bodily descriptions are withheld beyond block 4's
frame** — the trailer names that they exist and does not read any of them, because
seventy seconds cannot hold one at the distance the longform gives it.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.
Lei-Gong is **Lei-Gong** and never "Xiao-Lei". The series is *The Emperor's Inner
Canon* and never "Chronicle of Balance", which is the slate document's own working
name for the channel.

**Two reconciliations are specific to this chapter.**

- **Qibo *is* in this chapter, unlike Suwen 77.** 歧伯對曰 is the source's own
  attribution and the whole answer is his, so **Dr-Qi is textual here and not
  written in** — she speaks the chapter and nothing but the chapter. That is why
  block 3 is close to literal.
- **Lei-Gong is not in this chapter at all.** He is written in as **the one who
  counts**, which is a staging decision of ours and is marked as ours in the
  longform. The constraint that follows is absolute: **he is never given a line
  the chapter gives to somebody else, and every finding of his is a claim about
  the text's shape rather than about a body.** The slate's §9 open items treat
  Leigong as a **fourth** character needing an "ink-wash-silhouette rule";
  `CLAUDE.md` casts him as core cast with his own key art
  (`assets/witty-Lei.png`) and his own permanent voice, so there is no
  fourth-character problem here and no silhouette treatment. He is drawn as
  himself.

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
   first because a missing step-4 tool invalidates an approved step-0 estimate,
   and the server-side assembler has already vanished from the surface once with
   no warning.
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

> **Do not preflight voice on a short probe string.** `seed_audio` bills by
> length, and this figure has been got wrong twice in the repo in opposite
> directions — 0.5/take from a 13-word probe and 0.1/take from a shorter one,
> against a measured **1.3–1.7**. Cost a representative-length line from the
> narration table above.

### Style key — this chapter needs a new one

Chain off the Suwen 1 head `4b6f7106-67da-4d1a-a553-c58ba90ac43f` recorded in
`SKILL.md` step 1, passed as a **job ID** reference with only the motif swapped.
`SKILL.md` settled this on 2026-08-10: each chapter key bakes in its own
chapter's furniture, so the Suwen 8 key (`05ebe984-2781-491e-8c84-2b20e608d2a8`)
would bring a lacquer chart of twelve boxes into a cut whose whole visual system
is a silk map with five implements on it. Chain off the neutral head.

| | |
|---|---|
| Job ID | *(to be recorded)* |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key standing over a large blank silk map laid flat on a low lacquer table; five implements resting on the silk at five compass points — a sharpened stone lancet, a sealed jar, a cone of dried herb on a small brazier, a case of fine needles and a pair of empty cloth shoes; the map inked at the centre and blank at every edge |
| Derivation | Suwen 1 head → this key |
| Estimated cost | 2 credits |

The longform needs a **16:9 sibling** derived from *this* job ID once it exists.
**Do not overwrite the vertical key** — this trailer depends on it.

**The five implements belong in the key rather than only in the clips.** They are
the cut's cast of objects and they recur at every compass point of the longform,
so a key that already carries them keeps the five reading as one set across two
cuts and ~115 clips. **The map must be blank at its edges in the key** — the
chapter's world ends at a frontier and the episode's closing image depends on that
blankness being established from the first frame.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails.

### Clips — plan

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16.** Style key attached to
every clip as `image_references`. `generate_audio: false` on all seven — this is a
**correctness requirement**, not a saving: the assembler mixes clip audio in at
0.12 under the voice, so a clip generated with native audio will be audible in the
finished cut and the only fix is regenerating it. **On this cut the risk is
specific:** shot 3 is a shoreline and shot 1 is a room, and a model that generates
its own sea would put surf under the narrator at 0.12 for the whole block.

**Declare the aspect ratio twice** — `aspect_ratio: "9:16"` on the call *and*
"vertical 9:16 portrait framing" in the prompt text. **Check the first clip's
returned dimensions before generating the other six.**

**Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on all
seven. This is a **daylight** cut with a lamp in none of its shots, which is
unusual for this series, so the preset should fire less often than it has on the
night-heavy chapters — but pre-decline anyway. It costs nothing and the
alternative is a wasted round of retries.

**Keep audio vocabulary out of every clip prompt** — *drum*, *drone*, *bell*,
*surf*, *gull*, *music*, *rhythm*. Lei-Gong's hand drum is a **prop** in shot 5
and must be described as an object hanging at his hip, never as a sound; the sea
in shot 3 is **a drawn shoreline and a drying net**, never a sound.

**Four things are banned from every clip prompt in this cut**, and the first is
the compliance ban rather than a safety-filter one:

- **Any depiction of a regional population** — no faces, no bodies, no crowds, no
  villagers, no fishermen, no herders, and no descriptive physical attribute of
  anybody from any of the five regions. This is what the slate's care point turns
  into at prompt stage, and it is the ban most likely to be relaxed by accident by
  a prompt that reaches for "a coastal village".
- **Any body being treated, needled, cauterised, manipulated or examined.** The
  implements are laid on silk and lifted from silk.
- **Any lesion, sore, ulcer or wound.** The chapter names 癰瘍 in the east and the
  word stays in the narration; it appears in **no shot and no prompt**.
- ***Lying down*, *prone*, *pinned*, *held down* and *restrained*, applied to
  anybody.** A prone or immobilised human figure is the class of imagery that has
  returned `nsfw` from this service on innocuous subject matter — and a chapter
  about therapies applied to bodies is exactly where a prompt drifts into it.

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
| 1 | Arthur | 42 | ~9.5s | +0.9s |
| 2 | Xavier | 41 | ~9.5s | +0.9s, **and 0.5s under the ceiling** |
| 3 | Vesper | 42 | ~9.3s | +0.7s, **and 0.7s under the ceiling** |
| 4 | Arthur | 42 | ~9.5s | +0.9s |
| 5 | Zane | 50 | ~9.5s | +0.9s, **and this exact count has landed first take twice** |
| 6 | Arthur | 43 | ~9.8s | **the ceiling is the risk here, not the floor** |
| 7 | Arthur | 28 | ~9.6s by measured precedent | see the block-7 note |

**Blocks 6 and 7 are the two to expect trouble on.** Block 6 is one word under
Arthur's ceiling and its last sentence is a single long proposition, which is the
structure that put a 32-word line at 10.78s on Suwen 1. **The named repair is to
delete *as a discipline* and re-roll**, which costs three words and no meaning.
Block 7 is the mandated-disclaimer structure that ran pathologically slow on the
previous cut. **Blocks 1, 3 and 4 carry the floor risk instead** — Arthur's
3.98–4.80 w/s spread puts a 42-word line anywhere between 8.75s and 10.55s, and
Vesper's window is 1.4s wide against a range two words wide. Re-roll freely before
rewriting: two variants a block is the cheapest reliable method.

Record each take's **job ID, file duration, and the assembler's measured speech
figure** to three decimal places. They differ, and the second is the one that was
gated — a take written up as "8.50s pass" has already stopped an assembly at
0.103s under the floor.

### Assembly — plan

**Foreground, one chained command.** A 7-block assembly finishes inside the 120s
budget comfortably, and `background: true` has already lost a whole finished
render on this pipeline when the transport call timed out and the sandbox was
reclaimed.

Flags: `--out`, `--blocks 7`, `--manifest pairs.txt`. No `--clip-seconds` (leave
the window alone). No `--music` until guqin licensing is cleared. **No `--subs`** —
it is a hard error; captions are a separate step.

Name files `blockNN.mp4` / `voiceNN.wav` with the numbers aligned. Call
`media_upload` *before* the assembling command and append the
`curl -f -X PUT --upload-file` to that **same** command; `media_confirm` only after
HTTP 200. The sandbox is discarded ~10 seconds after the call returns, so a render
that is not exported inside the call is simply lost. **Probes go after the upload,
never instead of it** — that near-miss is recorded on the Suwen 8 trailer.

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
- **The supplied source extracted as simplified Chinese and this cut's card is
  traditional.** The chapter arrived as
  `09_Ch_SW12__Five_regions_Five_medicines.md`, whose Chinese extracted cleanly
  but in simplified form (异法方宜论 / 地势使然也 / 砭石). **The traditional forms
  used here were converted by hand and are not from the source file.** ffmpeg
  renders a missing or wrong glyph silently and nothing downstream re-checks it.
  Verify **地勢使然也** against the longform's *Source text and translation* before
  burn.
- **This cut's single card is five characters and that is deliberate.** The
  longest classical card this series has attempted on a vertical frame is sixteen
  characters and it needed two columns. 地勢使然也 is the chapter's entire answer in
  five characters, so the safest card available is also the best one.
- **The supplied source prints 歧伯 where the received text reads 岐伯**, and
  **踈理 where most editions print 疏理**. Neither reaches any line or card in this
  trailer. Both are argued in the longform's *Departures* section.
- **The supplied English renders 食胕 as "spoiled food".** That reading is
  contested and the longform argues for *fermented and preserved* instead. **None
  of that material is in this trailer**, and it must not be added at any runtime —
  see *Compliance notes*.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Block 1. **On this cut it is doing
  compliance work as well as policy work**, because it is the earliest signal
  available that the regional material is a historical document rather than the
  channel's own description of anybody.
- **End disclaimer card** — mandated string verbatim, over block 7. Block 7 is
  planned into the block count and into the credit estimate above, as `CLAUDE.md`
  requires; it is not folded into the title block.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. **Not in any voice take** in this cut: a name credit at
  the end of a take inserted a 3.00s pause on the Suwen 8 trailer and failed it.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none. **Guqin licensing is unresolved** (slate §9) — until cleared,
  score this cut with no guqin. The struck wooden note at block 5 is **not music**
  and is not generated either: it is a single percussive strike hand-placed at
  edit. Trailers earn disproportionate plays and carry the higher Content-ID
  exposure, so this is the cut to be most careful about.

### Finishing steps

**Not yet executed — this cut has not been rendered.** The procedure below is
written with **this cut's own numbers**: 7 blocks, 70.0s, quotation card at
**0:20–0:30**, end card **1:00 to 1:10**.

Both caption scripts are pure text tools: they read this document, touch no video,
need no network and cost no credits. **Run them from the repo root or pass an
absolute path.**

**1. Check captions** at 9:16, **before generating takes** — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/suwen/ch12/inner-canon-suwen12-trailer-v1.md
```

**Run 2026-08-12. The result is one known exception plus fifteen overflowing
clauses across the seven blocks, and none of them is a defect.** That is against
thirteen on the Suwen 77 trailer, ten on Lingshu 43, fourteen on Suwen 67, nine on
the rendered Suwen 13 trailer and three on Suwen 8 — so this is the busiest
vertical cut in the repo by two clauses.

The exception is the mandated disclaimer. *"A dramatized adaptation of a classical
philosophical text."* is 58 characters and 1187px against a 556px line — it needs
three lines on a 720-wide vertical frame and fits on one at 16:9. It is a
compliance string, cannot be reworded, and `check_caption_fit.js` carries it as a
known exception. The sidecar splits it and libass margins keep it in frame.

**The fifteen are structural rather than careless.** The vertical two-line budget
is **1111px, about 44 characters**. The assembler's 8.6s floor forces roughly 42
words into every block, which is about 210 characters, so a block clears the budget
only if it is cut into five or more clauses — and `SKILL.md` caps a block at four
sentences because the assembler *warns* on internal pauses of 0.8s or more. **The
two rules cannot both be satisfied at 9:16.**

**This cut is two clauses worse than Suwen 77 and the cause is nameable.** Its
clauses are wider on average because **every list in this script is joined with
*and* rather than punctuated** — the comma ban that keeps the takes inside the
window is the same thing that makes the clauses wide. Block 3's *On the eastern
seaboard people live on fish and salt and the sickness that finds them rises to
the surface of the skin* measures **2398px across 119 characters and needs five
lines**, precisely because the two commas that would break it are the punctuation
that put a 31-word line at 12.022s. **The take window wins; `SKILL.md` says it
must.**

**The widest clause in the cut is block 4's at 166 characters and 3462px — seven
lines — and it is the widest single clause this repo has measured.** Splitting it
was tried and rejected. Broken after *region* it yields an 84-character clause and
an 81-character clause: **two four-line cues where there was one seven-line cue**,
which is one fewer cue overall and no cue that reads in a glance. That reproduces
the finding recorded on the Lingshu 43 and Suwen 77 trailers — **splitting a wide
clause reduces its width and barely moves the cue count**, because each fragment
still overruns a two-line budget of about 44 characters and rounds up to cues of
its own. **Block 4 is also the one clause here that must not be shortened for
readability**: it is the slate's named care point stated in a single unbroken
proposition, and breaking *what one writer in the Han capital believed about
everybody who lived somewhere else* across two cues puts *believed* and *everybody
who lived somewhere else* on separate screens, which is the reading that makes the
line sound like the channel's own claim.

**No free repair is available in this cut and one was looked for.** Block 2 is
three words under Xavier's ceiling and would take a comma — but its list is the
two-part alternative that the block-2 note already hedges against slowing, so
buying caption width there spends the exact duration the note is protecting.
Blocks 1, 3 and 4 sit mid-window with one to two words of room in each direction,
and block 6 is one word under the ceiling.

**Read the non-zero exit as *"this will read busily"*, never as *"this cut will
overflow"*.** The sidecar pre-splits every clause above and libass cannot draw
outside its margins.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in
the record.

```
node scripts/build_subtitles.js output/suwen/ch12/inner-canon-suwen12-trailer-v1.md
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
face silently while `build_subtitles.js` still reports the line as fitting.
Install it in the same chained command:

```
mkdir -p ~/.fonts
curl -sSfL -o ~/.fonts/Anton-Regular.ttf \
  https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf
fc-cache -f >/dev/null 2>&1
fc-match Anton    # must print: Anton-Regular.ttf: "Anton" "Regular"
```

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's push into the map. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the
lower-third **above** that band. **y=896** is the position the comparable cuts used
and measured clear of the caption band.

**5. Quotation card — block 3, in at 0:20, out at 0:30.** The block-3 clip renders
the shoreline and the lancet and no text, so **地勢使然也** is added here in the same
`drawtext` pass, **set to one side of frame so it does not sit over the lancet**.
At five characters it fits comfortably in one column on a vertical frame, which is
the easiest card this series has burned. Verify every glyph against the longform's
*Source text and translation* before export, and note that the source file supplied
these characters in simplified form only (地势使然也). ffmpeg needs a CJK-capable
face — Anton has no Chinese coverage and renders tofu boxes silently.

> **⚠ This step was skipped on two comparable cuts and both cards shipped blank.**
> The Suwen 13 trailer's block-4 card and the Suwen 8 trailer's block-3 card are
> still empty plates in their delivered files because the burn pass covered
> captions, the lower-third and the end card only. **Do not treat step 5 as
> optional here** — this cut has exactly one card and it is the chapter's whole
> answer.

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. **Block 7's plate is
pale silk on lacquer in flat daylight**, which is the light case rather than the
dark one: measure top-strip luma first and expect to need a scrim. A comparable cut
needed `black@0.62` over a light ink wash.

**7. Music.** None, until guqin licensing is cleared. The block 5 wooden strike is
hand-placed at edit and is not a bed. **The sea under block 3 is hand-placed
too** — it is not generated with the clip, because a clip that generates its own
surf puts it in the mix at 0.12 with no way to remove it.

---

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, before any
generation. The longform's audit governs the material this trailer draws from;
these are the trailer-specific findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document,
  at the head of block 7's narration, on screen as the end card, and in the
  description. Block 7's narration is extended past the mandated string to clear
  the 8.6s floor; **the mandated sentence itself is unaltered.**
- **The slate's named care point for this chapter is the one thing this trailer
  could break, and it is answered inside the cut rather than deferred to the
  episode.** §3.9: *"The chapter makes broad characterological generalisations
  about regional populations (complexions, skin texture, diet, habits) that read
  badly to a Tier-1 ear if delivered flat. These must be presented as what a
  Han-dynasty writer believed about people in other regions, with the ethnographic
  distance made explicit."* This cut answers it three ways rather than one:
  - **Block 4 is the distance and it is a whole block of the seven** — a seventh of
    the runtime spent saying whose belief this is, arriving immediately after the
    first region and before Lei-Gong is allowed to admire the system.
  - **Not one regional description is read aloud in this cut.** Block 3 names a
    diet and a place and an illness; **no complexion, no skin texture and no
    habit is spoken anywhere**, because seventy seconds cannot hold one at the
    distance the longform gives it. The trailer says such descriptions exist and
    whose they are, and leaves the descriptions themselves to the episode.
  - **No population is depicted in any of the seven shots.** The east is a
    shoreline and a salt pan and a drying net. **Drawing a regional population
    would convert a reported Han-dynasty belief into this channel's own picture of
    a people**, which is the failure the care point describes, and it is banned at
    prompt stage rather than caught at review.
  **Block 4 is not a lever and must not be dropped, split, or moved after block 5
  in any recut.**
- **No medical instruction and none derivable.** The chapter's five therapies are
  named and **not one of them is described.** Block 3 says the physicians there
  reached for a sharpened stone and gives no site, no depth, no method and no
  indication; block 5 names five therapies only in order to count them. **No
  dosage, no regimen, no acupoint, no needle depth, no technique, no herb, no
  preparation, no diagnosis and no benefit claim appears anywhere.** 毒藥 — the
  west's potent drugs — **is not translated in any line of this cut**, and the
  implement standing for it in shot 5 is a sealed jar.
- **No self-diagnosis surface.** Every clinical word in the cut is in the third
  person and attributed to a text — *the sickness that finds them*, *the people of
  each region*. **No line addresses the viewer at all**, and there is nothing in
  seventy seconds that a viewer can match themselves against. That is the
  structural version of the rule rather than a hedge on top of it.
- **Health content stays philosophical narrative.** The cut's only claim about
  medicine is a claim about why medical traditions differ, and block 6 states it
  as a claim about a text rather than about the body.
- **The regional diets are named and never depicted, and that is an indulgence
  ruling as well as an ethnographic one.** Block 3 says fish and salt; shot 3 is a
  **salt pan drying and a net hung on a frame**. **No food in close-up, nothing
  being poured, no vessel of drink and no feast in any of the seven shots.** The
  west's 華食而脂肥 — rich and fatty food — is the chapter's one line that could
  read as indulgence, and **it is not in this trailer at all.**
- ***Spoiled food* is not said in this cut and must not be added.** The supplied
  English renders the south's 食胕 as eating *spoiled* food. The longform argues at
  length that the honest gloss is *fermented and preserved* — a food technology
  rather than a defect — and that the disparaging reading is the Han writer's
  rather than the text's plain sense. **The south is not in this trailer**, and a
  recut that adds it must take the gloss with it.
- **Mortality — absent from this cut entirely.** No death, no dying, no injury and
  no body appears in any line or any shot.
- **The east's 癰瘍 stays a word.** Abscesses and ulcers are the chapter's own
  finding for the eastern region and block 3 renders them as *the sickness that
  rises to the surface of the skin*, which is accurate and non-graphic. **No
  lesion, sore, ulcer or wound appears in any shot or any prompt**, and *abscess*
  is banned from every clip prompt while remaining available to the narration.
- **Supernatural hooks — none available and none introduced.** This chapter has no
  occult surface at all: no spirits, no divination, no numerology and no 神
  anywhere in it. **神 does not appear in the source of this chapter and is not
  spoken in this cut.** The one thing a viewer could mistake for mysticism is the
  five-directions frame, and **the longform takes it apart directly at its blocks 94
  to 98** by asking whether the therapies were observed in those places or assigned to
  them by a grid that already existed. The trailer promises that question at block
  5 and the episode answers it.
- **Restraint and prone-figure imagery is designed out.** A chapter about five
  therapies applied to bodies is exactly where a prompt drifts into a person lying
  down being treated, and **restraint or bound-figure imagery has returned `nsfw`
  from this service on innocuous subject matter before.** **No body is treated in
  any of the seven shots, no implement touches a person, and every implement is
  laid on silk and lifted from silk.** *Lying down*, *prone*, *pinned*, *held down*
  and *restrained* are banned from every clip prompt.
- **No modern clinical imagery anywhere.** No hospital, no consulting room, no
  white coat, no acupuncture clinic, no modern needles and no map of the modern
  world in any shot or any prompt. **The map is a Han-dynasty silk map whose edges
  are blank**, and that blankness is the episode's closing argument.
- **Title and thumbnail honour the educational payoff** — *Five Regions, Five
  Medicines*; on-screen framing *Suwen 12, 異法方宜論 — Different Methods, Different
  Suitabilities*. **Thumbnail direction:** the silk map from directly above with
  the five implements at their five compass points and the edges blank. **No
  faces, no population, no national or ethnic marker of any kind, no modern map,
  no flags, no acupuncture needle in skin and no before-and-after.** No faces other
  than the three cast characters. **The words *ancient secret*, *lost knowledge*,
  *they knew*, *ahead of its time*, *what the East knows*, *Eastern medicine* and
  *Western medicine* appear in no line, no title and no thumbnail direction** —
  the last two because this chapter's *west* is the far side of China and using the
  modern sense would misread the source in the most embarrassing available way.
- **Hedge allocation — three characters speak in a 7-block trailer, which is
  unusual and needs recording.** `SKILL.md` makes narrator-only the trailer default
  precisely because the narration carries every hedge. Here **Arthur keeps all four
  framing blocks (1, 4, 6 and 7)**, including the whole of the ethnographic
  distance and the disclaimer. **No compliance content sits on a character voice at
  all**: block 2 is Fan-di asking the chapter's own opening question, block 3 is
  Dr-Qi rendering 地勢使然也 and the eastern passage close to literally, and block 5
  is Lei-Gong counting what is on the list. **None of the three makes a claim about
  the viewer's body, about treatment, or about anybody living.**
- **Dr-Qi's block 3 is written to `CLAUDE.md`'s voice rule.** She never sounds like
  she is winning; the more Fan-di performs, the stiller she gets. Block 2 is the
  most theatrical line in the cut and block 3 opens on three flat words — *None of
  them is wrong* — and that ordering is deliberate. **Her block is also the only
  one that recites the source**, which is textually right here in a way it was not
  on Suwen 77: **Qibo is in this chapter and the whole answer is his.**
- **Historical accuracy** — cited on screen as **Suwen 12**, never a bare "Chapter
  12", and **Lingshu 12 《經水》 is on the same slate at publish slot 7 against this
  chapter's slot 9**, so the collision is with this channel's own back catalogue two
  slots earlier. **Block 1's "two thousand years old" is a round figure for a text
  whose dating is argued over**; the longform carries the caveat in full at its
  block 18 and this trailer's phrasing is deliberately approximate rather than
  precise. **Block 6's comparative-anthropology claim is ours and not the
  chapter's**, and it is phrased as a statement about when a modern discipline
  existed rather than as a claim that the chapter founded one.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No
  character makes a first-person factual assertion about their own expertise** —
  Dr-Qi reports the chapter's answer and asserts nothing about the body in her own
  person, and Fan-di asks a question rather than diagnosing anybody.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a silk map, a man with a fan, a
  shoreline with a salt pan and a drying net, a hand setting down a stone, a
  margin being written on, a boy with a wax tablet, five implements and a rolled
  scroll. **No bodies, no treatment, no lesions, no anatomy, no ceremony, no
  restraint or prone-figure imagery, no food or drink in close-up, no regional
  population, no modern imagery of any kind, and no faces other than the three cast
  characters.** This is a daylight cut with no lamp in any shot, so `IN THE DARK`
  should fire less than usual — **pre-decline it on all seven anyway.**

---

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole
10s blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's audit. The hook,
the question, the answer, the distance and the turn all survive. **Cost:** the cut
loses its fourth voice and, more seriously, the only place five separate facts
become one system — block 3 is then a single anecdote about the east and block 6
asserts a pattern the viewer has not been shown. This is the cut to make only if
the budget forces one, and it is still the right one to make before touching block
4.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 6. **Not recommended.**
Block 6 is the only place the cut says what the chapter did that makes it worth
eighteen minutes, and without it the trailer sells a curiosity about salt.

**Do not reach 60s by dropping block 4.** It is the slate's named care point for
this chapter and it is the one block whose absence leaves a Han-dynasty account of
what people elsewhere are like standing on screen unattributed. That is the
reclassification the care point exists to prevent, and it costs more than the
runtime it saves.

**Stretch to 80s (8 blocks) — add 1.** Add a **Dr-Qi block after 3** carrying the
**north**: that in the high cold where the land closes and stores, people live
outdoors on milk and the cold gathers inside them, so the physicians there reached
for a burning cone of dried herb. **This is the strongest single addition
available**, for two reasons. It is the region furthest from the east in every
respect the chapter names, so two stations establish the pattern that one cannot;
and it is the shortest passage in the chapter, so a ten-second block carries all
of it rather than a quarter of it. Written for Vesper at 41–43 words. It costs the
cut its balance by giving Dr-Qi two consecutive blocks of recitation, which is why
70s remains the recommendation.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus an **Arthur block after
5** on the archaeology: that the oldest excavated Chinese medical manuscripts
prescribe burning rather than needling, and that the oldest surviving chart of
guided exercise was buried in the south rather than the centre. It is the
episode's best reckoning and it is the reason to watch the episode. **At 90s the
trailer starts delivering the reckoning rather than selling it**, and spending the
archaeology here leaves the longform's Act VII arguing from material the audience
has already heard — which is the reason 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:**

- **Block 7** — the disclaimer card is mandatory and is not a lever.
- **Block 4** — the ethnographic distance, in full and in its position before
  block 5. See *Compliance notes*.
- **Block 3** — it is the only place the chapter's own sentence is spoken and the
  only place a region is concrete. Without it the trailer is a set of claims about
  a text nobody has heard.
