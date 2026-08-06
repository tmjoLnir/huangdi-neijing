# The Emperor's Inner Canon — Chapter 6 Longform v1 (18 minutes)

**靈蘭祕典論篇第六 · The Seating Plan**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **16:9 landscape
1280×720**, `seedance_2_0_mini`, 108 blocks × 10s = **1080.0s (18:00)**, MP4.

**The 16:9 default is an inference and needs confirming before a full run.**
`CLAUDE.md` mandates 9:16 for trailers only; landscape is the YouTube main-feed
assumption. It is ~108 clips to get wrong.

**Cite the chapter on screen as Su Wen 8.** This edition numbers it 篇第六 and the
folder follows the input script, but Su Wen 6 in the received Wang Bing recension
is a different chapter entirely (陰陽離合論, on the separation and union of yin and
yang). An unqualified "Chapter 6" on screen sends a checking viewer to the wrong
text. See the numbering warning in `inner-canon-ch6-translation-v1.md`.

Source translation: `inner-canon-ch6-translation-v1.md`. Companion trailer:
`inner-canon-ch6-trailer-v1.md`.

---

## What this episode argues

The blueprint sells this chapter as *"Your Body Is an Empire — and Every Organ Has
a Job Title"*, and that is the hook. It is not a spine. A list of twelve job titles
is a syllabus, and a syllabus is eighteen minutes of recitation.

**The spine is the shape of the chapter itself: the Emperor asks for a ranking, and
the text refuses to give him one.** 貴賤何如 — *which are noble and which are
base?* — is a request for an order of precedence. The reply names twelve posts and
ends on 不得相失, *they must not lose one another*. He asks for a hierarchy and is
handed a dependency.

Then the chapter does three things nobody expects, and they are the episode:

1. **It names a single point of failure** — 主不明則十二官危 — and the post it names
   is the one the man asking the question occupies.
2. **It abandons the metaphor entirely.** §3 leaves the court for 毫釐, hair's
   breadths, and grounds everything in measurement. This is the passage retellings
   drop, and it is the one that qualifies the rest.
3. **It seals itself in a room.** §4 has the Emperor fast, pick an auspicious day,
   and lock the text in the Chamber of the Spirit-Orchid — which is where the
   chapter's title comes from.

Moves 2 and 3 point in opposite directions. *Measure everything* and *lock it away
unexamined* are not the same instruction, and the eighteen minutes are honest about
that rather than resolving it.

**The dramatic engine:** Fan-di has commissioned a **court portrait of himself with
his ministers**, and it is one seat short. The painter has run out of room. Rather
than commission a larger silk he decides to demote somebody — and asks his
physician which of his organs he could most afford to lose. That question is a joke
when he asks it in the cold open. It is not a joke by Act III. **The fan is the
tell:** snapped open he is performing, set down he means it. He sets it down once,
in Act IV, and does not pick it up again.

---

## Cast and voice

| Role | Voice | `voice_id` | Function in this episode |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | history, mechanism, **every compliance hedge** |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the Huangdi role — asks for the ranking, and is it |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the Qi Bo role — answers, never wins |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | the one who counts, and gets twelve |

`seed_audio` presets, `speech_rate` 55 for all four. **One speaker per 10s block** —
the assembler takes exactly one audio per block, so every speaker change is its own
block. No block below contains two voices.

**Dr-Qi never sounds like she is winning** (`CLAUDE.md`): the more Fan-di performs,
the stiller she gets. She has the chapter's hardest sentence to say — *beware,
beware*, to a reigning emperor — and she says it quietly.

**Lei-Gong is the audience surrogate and the episode's best joke.** He is given one
job in Act I: count the officials as they are named. He gets twelve, then eleven,
then twelve again, and cannot make it come out. He is right to be confused — the
list reaches twelve by having spleen and stomach share one office — and the fact
that a cheerful teenager with a hand drum can break the chapter's arithmetic in
forty seconds is the honest way into Act V.

### Writing constraint — sized to the 8.6–10.0s window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors, computed as `--clip-seconds − 1.4` to `--clip-seconds`. Word budgets are
`SKILL.md` step-3, measured 2026-08-04 off the ch1 trailer v5 run:

| Voice | Measured rate | Words per block | Status |
|---|---|---|---|
| Arthur | 3.65 w/s | **32–36** | measured, 5 takes |
| Xavier (Fan-di) | 4.15 w/s | **36–41** | measured, 1 take |
| Vesper (Dr-Qi) | 4.19 w/s | **37–41** | measured, 1 take |
| Zane (Lei-Gong) | — | *written at 34–39, provisional* | **UNMEASURED — see the gate below** |

**Those budgets were re-derived from source before this script was written, and
they hold.** Recomputing ch1 v5's shipped lines against the assembler's own
measured speech gives Arthur **3.63** w/s, Xavier **4.15**, Vesper **4.19** —
reproducing 32–36 / 36–41 / 37–41 almost exactly. Two cautions came out of that
check and both are load-bearing at 108 blocks:

- **Only the pooled figure reproduces.** Several per-block counts in the ch1 v5
  table are individually off by up to five words — its block 1 is 39 words, recorded
  as 34. **Take the budget from the skill's rate, never from another cut's
  per-block column.**
- **A spaced em-dash is not a word.** A naive whitespace split counts it as one,
  which is a whole word of budget on a window 1.4s wide. Every count in this
  document drops tokens containing no letter or digit.

Four consequences shape every line below, and none of them is stylistic:

- **The short interjection is dead.** Under an 8.6s floor there is no such thing as
  a quick jab; `--clip-seconds` moves the window rather than widening it. **Every
  character line here is a full paragraph**, and Lei-Gong's counting runs as
  arguments rather than punchlines.
- **The rates are survivor-biased.** 3.65 w/s is what Arthur's *passing* takes
  delivered; across every recorded ch1 v5 attempt he averaged **3.04 w/s**. These
  counts are sized for his fast mode and will regularly return over the ceiling.
- **The run-to-run spread exceeds the window.** Identical 26-word text came back at
  10.23s and 7.79s on consecutive generations — 2.44s apart on a window 1.4s wide.
  Re-roll once before rewriting, and expect misses on *either* side.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s. Padding a thin line with sentence breaks passes the duration gate
  and trips the pause warning.

**Every count in this script was verified against the parsed narration table, not
by hand.** They remain *arithmetic against measured rates, not measurements*: treat
the first pass at these lengths as calibration and budget re-takes explicitly. On
ch1 v5 a single block took **fourteen takes and ~11 credits**; at 108 blocks that
gate is the dominant cost risk in the whole production.

### How to read this script

`CLAUDE.md` asks for **SOUND / VISUAL / CHARACTER** blocks; `build_subtitles.js`
needs a **three-column narration table** to build the required `.srt`/`.vtt`
sidecars. The two are combined rather than duplicated, because two copies of 108
lines is how they drift apart:

- **The narration tables below are canonical for words.** Blocks run continuously
  **1–108 across the whole episode**, never per-act; the assembly manifest is flat
  and act-local numbering produces off-by-one errors that are expensive to find in
  an 18-minute render.
- **The SOUND / VISUAL / direction prose between them is canonical for picture and
  performance.** It never restates a line.
- **The speaker is named in the beat column**, not a fourth column — the parser
  reads exactly three, and a fourth would leak into the caption text.

> **Do not insert a table whose first cell is a bare integer anywhere between blocks
> 1 and 108.** `parseNarration` keeps the first consecutive run from block 1 and
> stops at the first row that breaks it, so a stray numeric table silently truncates
> the sidecar. Every other table in this document sits before block 1 or after block
> 108 for that reason, and the ON-SCREEN TEXT card table prefixes its first column
> with `Block` so it cannot collide.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *One Seat Short* | 1–9 | 0:00–1:30 | the portrait; the question; title; thesis |
| Act I — *The Twelve Offices* | 10–37 | 1:30–6:10 | §1 — the whole list, named and staged |
| Act II — *Must Not Lose One Another* | 38–57 | 6:10–9:30 | §1 close — 不得相失; the refusal to rank |
| Act III — *Beware, Beware* | 58–79 | 9:30–13:10 | §2 — the single point of failure; 戒之戒之 |
| Act IV — *The Hair's Breadth* | 80–95 | 13:10–15:50 | §3 — the metaphor drops; measurement |
| Act V — *The Sealed Room* | 96–108 | 15:50–18:00 | §4 — the locked chamber; honest reckoning; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---

# COLD OPEN — *One Seat Short* · blocks 1–9 · 0:00–1:30

**SOUND:** A brush loading with ink. The soft drag of silk being unrolled. No music
yet.
**VISUAL:** Black, then a horizontal wipe as a long silk scroll unrolls left to
right. Ink-wash flat 2D throughout, **landscape 16:9 framing**. A court portrait in
progress: a row of seated ministers, painted, and at the right-hand end an unpainted
gap where one more should go.

Blocks 1–2 track slowly along the painted row toward the gap. *History lower-third
sits on block 1 — it is required inside the first ten seconds.*

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the portrait | A court portrait is a seating plan you can hang on a wall. Everyone painted in it is somebody, and the order they sit in is the argument the painting is making. |
| 2 | Arthur (V.O.) — the problem | This one has a problem. The painter measured the silk, and the silk is one seat short. Twelve ministers were promised. Eleven will fit. Somebody in this room is about to be demoted. |

**SOUND:** The snap of a folding fan. Sharp, theatrical.
**VISUAL:** Interior, lamplit. FAN-DI in the gold robe, glasses on, **fan snapped
open**, standing far too close to the unfinished scroll and enjoying himself
enormously.

| Block | Beat | Narration |
|---|---|---|
| 3 | Fan-di (Xavier) — the joke | Do not buy more silk. Buy fewer ministers. Everyone in that row believes he is indispensable, and exactly one of them is about to learn otherwise, which is the most instructive afternoon any of them will ever have. |

**VISUAL:** DR-QI in the blue cheongsam, open bamboo scroll held casually like a
tablet, standing where she can see both the painting and him. She waits out the
laugh that does not come.

| Block | Beat | Narration |
|---|---|---|
| 4 | Arthur (V.O.) — the pivot | His physician had been called for something else entirely. She made the mistake of following the joke to its end, which is how the best question in this chapter gets asked by accident. |
| 5 | Fan-di (Xavier) — the real question | Then answer me as a physician and not as a courtier. My body keeps a court of its own, you tell me. Twelve posts, twelve officers. If the silk were short, which of them would you strike out? |
| 6 | Dr-Qi (Vesper) — the refusal | None of them, and not because I am being careful with you. The text you are quoting was asked that exact question by an emperor, in almost those words, and it declines to answer it. That refusal is the whole chapter. |

**ON-SCREEN TEXT — block 7.** Card: **素問·靈蘭祕典論**, brushed, with *"Su Wen,
chapter 8"* beneath in small type. See the card table after block 108.

| Block | Beat | Narration |
|---|---|---|
| 7 | Arthur (V.O.) — the citation | The book is the Basic Questions, the theory half of the Yellow Emperor's Inner Canon. Chapter eight. The Secret Canon of the Spirit-Orchid Chamber, named after the room it ends up locked inside. |

**ON-SCREEN TEXT — block 8.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 8 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon, and we are calling this episode The Seating Plan. It is the most cinematic chapter in the book, and it is doing something quietly stranger than it looks. |
| 9 | Arthur (V.O.) — the thesis | Watch the shape of it. An emperor asks which of his organs outrank the others. He is given twelve job titles, one warning, and a refusal. The refusal is the part that lasted. |

---

# ACT I — *The Twelve Offices* · blocks 10–37 · 1:30–6:10

**VISUAL:** The painted scroll becomes the set. Camera pushes into the silk and the
painted hall becomes a real hall — same flat ink-wash palette, same composition,
now with depth. Twelve seats in two shallow arcs. Empty.

**CHARACTER — Fan-di:** performing throughout Act I, fan open on every line. He is
enjoying being the subject of a lesson.
**CHARACTER — Lei-Gong:** LEI-GONG at the edge of frame, cinnabar robe, hand drum in
his lap. He has been given a tally board and one instruction: count.

| Block | Beat | Narration |
|---|---|---|
| 10 | Arthur (V.O.) — what the chapter is | The chapter is short, and almost all of it is a list. Twelve organs, each given the name of a government post, each credited with producing one thing the post would produce. |
| 11 | Dr-Qi (Vesper) — the frame | Understand what is being borrowed before I start. The body is not being compared to a court because a court is grand. It is being compared to the only complicated thing everyone listening had already seen working. |
| 12 | Arthur (V.O.) — why that matters | Hold on to that. Nobody in this room has a machine to think with. No clock, no engine, no pump. The most complex functioning system anyone present has ever watched is an administration. |

**VISUAL:** As each office is named, a brushstroke figure settles into its seat and a
small hanging placard drops beside it. Lei-Gong makes a mark on the tally board each
time — visible, deliberate, occasionally mouthing the number.

**ON-SCREEN TEXT — block 13.** Card: **心者，君主之官也，神明出焉**.

| Block | Beat | Narration |
|---|---|---|
| 13 | Dr-Qi (Vesper) — the heart | The heart is the office of the sovereign, and spirit-brightness issues from it. Everything you would call awareness — judgement, attention, the fact that there is somebody in there at all — the text assigns to the heart alone. |
| 14 | Arthur (V.O.) — flag it now | We are going to come back to that sentence, because it is the chapter's largest single error and it deserves more than a footnote. For now, note only that the text is certain about it. |
| 15 | Dr-Qi (Vesper) — the lung | The lung is the office of the chancellor, and regulation issues from it. The chancellor does not rule. He sets the rhythm the rest of the administration keeps — what happens when, and how often, and for how long. |
| 16 | Arthur (V.O.) — a good guess | That is a better guess than it sounds. Breath is the most obviously rhythmic thing a body does, and it is the one an observer can watch from across a room without touching anybody. |
| 17 | Dr-Qi (Vesper) — the liver | The liver is the office of the general, and planning and deliberation issue from it. Not the decision — the plan. The general is the officer who works out what could be done before anyone asks what should be. |
| 18 | Dr-Qi (Vesper) — the gallbladder | And beside the general sits the gallbladder, the office of the upright and impartial, from which judgement issues. The general drafts the campaign. The judge is the one who says yes, or says no, and is not the same person. |
| 19 | Arthur (V.O.) — the structural claim | Notice the pairing. Planning and deciding are given to two different officers who sit next to each other. That is not anatomy. It is a claim about how choices actually get made. |

**VISUAL:** Fan-di taps the fan against his palm, following the argument more closely
than he wants to admit.

| Block | Beat | Narration |
|---|---|---|
| 20 | Fan-di (Xavier) — the flattery test | Physician, I notice the sovereign got the best title. Am I to believe a court physician wrote a chart of the human body and discovered, by pure coincidence, that the arrangement at the top of it was correct? |
| 21 | Dr-Qi (Vesper) — the answer | It is a fair suspicion and I will not talk you out of it. The chart does flatter the arrangement that produced it. Keep the suspicion. It will be more useful to you in about ten minutes than it is now. |

**ON-SCREEN TEXT — block 22.** Card: **膻中者，臣使之官，喜樂出焉**.

| Block | Beat | Narration |
|---|---|---|
| 22 | Dr-Qi (Vesper) — the envoy | Shan zhong, the chest's centre, is the office of the envoy, and joy issues from it. The envoy carries the sovereign's word outward and brings the room's mood back. It is the post that makes a court feel like one. |
| 23 | Arthur (V.O.) — the honest note | Shan zhong is a place rather than an organ — a point in the middle of the chest, later read as the heart's enclosure. Keep that in mind. It matters when we start counting. |
| 24 | Dr-Qi (Vesper) — the granaries | The spleen and stomach together are the office of the granaries, and the five flavours issue from them. One office, two officers. Everything the body will ever spend has to be received here first, and sorted, and stored. |
| 25 | Lei-Gong (Zane) — the count so far | That is seven officials and I have marked seven, except that the last two share one seat, so it might be six seats and seven men. Does the chart want men or chairs? Because those are different numbers. |
| 26 | Arthur (V.O.) — he is right | He is not being slow. He has found, in about forty seconds, the exact place where the chapter's arithmetic is held together with string, and nobody in two thousand years has entirely fixed it. |

**VISUAL:** Dr-Qi does not answer Lei-Gong. She continues, and the seats keep
filling — but the camera now stays low, at tally-board height.

| Block | Beat | Narration |
|---|---|---|
| 27 | Dr-Qi (Vesper) — the large intestine | The large intestine is the office of conveyance along the road, and transformation issues from it. It moves what is finished with toward the gate, and it changes what it moves. Both halves of that are in the title. |
| 28 | Dr-Qi (Vesper) — the small intestine | The small intestine is the office that receives what is sent down full, and the transforming of things issues from it. It takes delivery, and it sorts. What is fine goes on. What is coarse goes down the road. |
| 29 | Arthur (V.O.) — sorting, again | Sorting keeps coming up. Fine from coarse, keep from discard, on from down. The chapter has one favourite idea about bodies: that a body is mostly a series of decisions about what to let through. |

**ON-SCREEN TEXT — block 30.** Card: **腎者，作強之官，伎巧出焉**.

| Block | Beat | Narration |
|---|---|---|
| 30 | Dr-Qi (Vesper) — the kidney | The kidney is the office of exertion, and skill and dexterity issue from it. Strength is the obvious half. The interesting half is that the same office is credited with the fine control — the steady hand, not only the strong arm. |
| 31 | Arthur (V.O.) — a translation note | That line has been read in several ways over the centuries, some of them a good deal broader than ours. We render it as exertion and skill, which is the reading the words best support. |
| 32 | Dr-Qi (Vesper) — the san jiao | The san jiao, the triple burner, is the office of the dredger of channels, and the waterways issue from it. When water in the body will not move, this is the officer whose failure it is said to be. |
| 33 | Arthur (V.O.) — hold that one | Remember that name. San jiao. It is the twelfth post on this chart, and the reason we spend our last act on it will be obvious the moment you try to find it in a body. |
| 34 | Dr-Qi (Vesper) — the bladder | The bladder is the office of the regional seat where the waters gather. Fluids are stored in it — and here the text adds a condition it adds nowhere else. Only when qi transforms them can they issue at all. |
| 35 | Arthur (V.O.) — the one conditional | That is the only office on the list given a precondition. Every other post simply produces its thing. This one produces nothing unless something else acts on it first, and the text says so deliberately. |

**VISUAL:** The last seat fills. Twelve figures, two arcs, placards hanging. Hold the
full composition for the first time. Lei-Gong stares at his tally board.

| Block | Beat | Narration |
|---|---|---|
| 36 | Lei-Gong (Zane) — the count fails | I have marked twelve posts and I have counted eleven bodies, and one of the posts is a place in your chest rather than a thing. I would like it on record that I did the counting correctly. |
| 37 | Arthur (V.O.) — act out | He did. Twelve offices, eleven organs, one of them a location and one of them, as we will see, not there at all. The list is a government, and it was never a census. |

---

# ACT II — *Must Not Lose One Another* · blocks 38–57 · 6:10–9:30

**SOUND:** Silence in the hall. Then, faintly, fine ink lines being drawn — a dry
sound, like a nib.
**VISUAL:** Between the twelve seated figures, fine ink lines begin drawing
themselves, seat to seat, until the whole composition is a web. The figures stop
being the picture; the lines become the picture.

| Block | Beat | Narration |
|---|---|---|
| 38 | Arthur (V.O.) — the last clause | The list ends on one clause, and it is the clause the whole chapter turns on. These twelve offices, it says, must not lose one another. Not must not fail. Must not lose one another. |
| 39 | Dr-Qi (Vesper) — what that means | Read it as a court would. A minister who is merely bad is a problem you can survive. A minister who stops receiving the others' dispatches is a different kind of problem, because now nobody knows he has stopped. |
| 40 | Arthur (V.O.) — the emperor's question | And this is where the chapter answers a question it was not asked. The emperor had asked which organs are noble and which are base. He wanted a ranking. He was given a dependency. |

**VISUAL:** Fan-di steps into the web of lines, looking along them rather than at the
figures. The fan is still open, but he is not using it.

| Block | Beat | Narration |
|---|---|---|
| 41 | Fan-di (Xavier) — pressing it | That is a dodge and you know it is. Every court has an order of precedence, and pretending otherwise is how a physician avoids naming the organ she would cut. I asked which one I could lose. Answer that. |
| 42 | Dr-Qi (Vesper) — the counter | Then let me ask it back. Which minister could you lose? Not which one you like least. Which one could stop sending word tomorrow morning without you finding out from somebody else, three weeks later, that the province is gone? |
| 43 | Fan-di (Xavier) — the concession | None of them, obviously, which I assume is your point and I dislike how quickly you got there. Fine. The question is badly formed. But a badly formed question can still have a true answer, and I want it. |
| 44 | Arthur (V.O.) — why he cannot have it | He cannot have it. The reason is worth stating plainly. A ranking assumes the parts are separable enough to be ordered. The moment you say they cannot lose one another, you have said they are not. |

**VISUAL:** One line in the web dims. Then the lines adjacent to it slacken and go
grey — the failure propagating outward, seat by seat, without any figure moving.

| Block | Beat | Narration |
|---|---|---|
| 45 | Arthur (V.O.) — what the picture shows | Watch what fails here, because it is not a person. No officer is removed. One channel between two of them stops carrying, and the damage travels along the lines rather than staying where it started. |
| 46 | Dr-Qi (Vesper) — the practical version | This is the whole reason the metaphor was chosen. Think of a body as a bag of parts and you look for the broken part. Think of it as an administration and you look for the message that stopped arriving. |
| 47 | Arthur (V.O.) — the honest credit | That is the chapter's genuinely good idea, and it deserves saying without hedging. Two thousand years before anyone could describe a nervous system, the text is insisting that the connections are the thing to watch. |
| 48 | Arthur (V.O.) — and the honest limit | It is also as far as the idea goes. The text cannot say what travels along those lines, cannot test whether anything does, and cannot be wrong. It has a shape without a mechanism. |

**SOUND:** The hand drum, once, quietly. Lei-Gong has been listening.
**VISUAL:** He is standing inside the web now, holding one of the dimmed lines, not
joking.

| Block | Beat | Narration |
|---|---|---|
| 49 | Lei-Gong (Zane) — the good question | If the officers are the organs, what are the lines? You have named twelve things I could point to on a person, more or less, and then drawn the important part as string. What is the string made of? |
| 50 | Dr-Qi (Vesper) — the honest answer | The text calls them the roads of dispatch, and it does not say what they are. I could give you a confident answer. It would be a later writer's answer, dressed up as this one's, and you would deserve better. |
| 51 | Arthur (V.O.) — crediting the gap | That is the correct answer, and it costs the chapter something. The connections carry the argument, and the connections are exactly what the text cannot describe. It is a diagram of a thing nobody could see. |

**VISUAL:** The web relights slowly. Fan-di has stopped performing; the fan is open,
held low, forgotten rather than deployed.

| Block | Beat | Narration |
|---|---|---|
| 52 | Fan-di (Xavier) — the reframe | So the chart is not telling me what my organs are. It is telling me what to be afraid of. Not the failure of any one office — the quiet failure of the traffic between them, which nobody reports. |
| 53 | Dr-Qi (Vesper) — confirming | That is the reading. And notice it does not require you to believe a word of the anatomy. Strike out every organ name on that chart and the warning underneath it survives intact, which is unusual for a medical text. |
| 54 | Arthur (V.O.) — the general point | This is why the chapter outlived its biology. Its claims about organs aged badly. Its claim about interdependence gets rediscovered, every century or so, by people who have never heard of it. |
| 55 | Arthur (V.O.) — a caution | Which is also the moment to be careful. A statement vague enough to survive any correction is not thereby proved. The chapter is being suggestive here, not demonstrative, and the difference matters. |
| 56 | Dr-Qi (Vesper) — the turn | But the text does not stop at interdependence, and this is the point where it stops being comfortable. It goes on to say that of the twelve offices, one post can bring down the other eleven by itself. |
| 57 | Arthur (V.O.) — act out | It names that post. It is the one at the top of the chart, the one holding the best title, the one the emperor asking the question happens to occupy. And then it repeats itself. |

---

# ACT III — *Beware, Beware* · blocks 58–79 · 9:30–13:10

**SOUND:** The room tone drops. A single low sustained note, held under everything in
this act.
**VISUAL:** The eleven outer seats dim. The centre seat — larger than the rest —
holds its light. The web of lines all terminates there.

**ON-SCREEN TEXT — block 58.** Card: **主明則下安**.

| Block | Beat | Narration |
|---|---|---|
| 58 | Dr-Qi (Vesper) — the good case | When the sovereign is clear-sighted, those below are at peace. Nourish life by this, the text says, and there is length of years — to the end of your days, no peril. Govern a country by it and the country flourishes. |
| 59 | Arthur (V.O.) — the hedge, immediately | That is a claim about how long people live, from a text with no way to check it. We report it; we do not endorse it. Nothing here is a treatment, and none is advice. |
| 60 | Arthur (V.O.) — why it is stated twice | And watch the grammar, because it is the argument. The same sentence is run twice — once for a body, once for a state — on identical construction. The doubling is not decoration. It is the claim. |

**ON-SCREEN TEXT — block 61.** Card: **主不明則十二官危**.

| Block | Beat | Narration |
|---|---|---|
| 61 | Dr-Qi (Vesper) — the bad case | And when the sovereign is not clear-sighted, the twelve offices are in danger. The roads of dispatch close and do not open. The body is gravely harmed. Nourish life by that, it says, and you get calamity. |
| 62 | Arthur (V.O.) — the structure of the threat | Note where the danger is placed. Not in the sovereign — in the twelve. One post fails and the sentence immediately becomes about everybody else. The cost of a bad ruler is paid downward. |

**VISUAL:** Fan-di is very still. The fan closes — not snapped, just closed — and
stays in his hand.

| Block | Beat | Narration |
|---|---|---|
| 63 | Fan-di (Xavier) — realising | Say the rest. You have been walking me here since the portrait, and I would rather arrive under my own power. The office at the top of that chart is the heart, and that is where you have put me. |
| 64 | Dr-Qi (Vesper) — not letting him off | The text puts you there. And it does not say a poor sovereign is unfortunate. It says the roads close, and that the twelve who depend on them are the ones in danger. Then it says two words twice. |

**ON-SCREEN TEXT — block 65.** Card: **戒之戒之**.

| Block | Beat | Narration |
|---|---|---|
| 65 | Dr-Qi (Vesper) — the warning | Beware of it. Beware of it. A physician, in a book addressed to an emperor, saying the same two words twice, at the end of a passage explaining that a ruler's poor judgement is what destroys the parts beneath him. |
| 66 | Arthur (V.O.) — how unusual that is | Read that as a political document for a moment and it is remarkable. It is a warning to a sovereign, in a sovereign's own library, disguised as a chart of the internal organs. |
| 67 | Arthur (V.O.) — the necessary caution | We should not over-read it either. The Inner Canon is a compilation, its authorship is genuinely uncertain, and we cannot know who this passage was aimed at or whether anyone in power ever read it. |

**VISUAL:** The centre seat's light steadies. The outer eleven come back up — but the
lines between them are visibly thinner than before.

| Block | Beat | Narration |
|---|---|---|
| 68 | Fan-di (Xavier) — the vanity, inverted | Then the joke I opened with was the wrong way round. I asked which minister I could afford to lose. The chart's answer is that the one post nobody survives losing is the one I have been sitting in all afternoon. |
| 69 | Dr-Qi (Vesper) — the correction | Almost. The chart does not say you are indispensable, which is the reading you would prefer. It says the failure at your post is the one nobody downstream can route around. That is a heavier thing to be told. |
| 70 | Arthur (V.O.) — the distinction | Those are genuinely different claims, and the difference is the whole episode. Indispensable is a compliment. A single point of failure is a liability, and the chapter is describing the second one. |
| 71 | Fan-di (Xavier) — the fan | I would like the record to show that I asked for a ranking, received a warning, and am choosing to hear it as flattery for one more minute before I stop. Then I am going to put this fan down. |

**SOUND:** The fan is set on the table. Wood on lacquer. Not a snap.
**VISUAL:** Close on the fan, folded, on the low table. It stays in frame, unmoving,
for the rest of the episode. Fan-di does not touch it again.

| Block | Beat | Narration |
|---|---|---|
| 72 | Arthur (V.O.) — what is wrong here | Now the part we owe you. The heart does not do this. Awareness, judgement, attention and the sense of being somebody are functions of the brain, and the chapter assigns them all to the wrong organ. |
| 73 | Arthur (V.O.) — how wrong, exactly | This is not a near miss or a translation problem. The organ the text puts on the throne is a pump. The organ that governs is not on that chart at all, under any name. |
| 74 | Dr-Qi (Vesper) — the historical defence | And it was not a foolish mistake to make. Grief is felt in the chest, fear is felt in the chest, and a racing heart is the most reliable signal a frightened body sends. They followed the evidence they could feel. |
| 75 | Arthur (V.O.) — fair, and not enough | That defence is real and it is also not sufficient. Plenty of the same tradition's writers located thought elsewhere, and the disagreement was available. The canon picked, and it picked wrongly, and the pick stuck. |
| 76 | Arthur (V.O.) — what survives the error | So what actually survives? Not the assignment. The structure — that a system's worst failure is at its most connected point, and that the damage shows up everywhere except where it actually began. |
| 77 | Dr-Qi (Vesper) — the reframe | Take the crown off the heart and put it on the brain, and every sentence in that passage still reads. That is either the sign of a deep idea or of a very loose one, and it could honestly be both. |
| 78 | Arthur (V.O.) — the transition | And then the chapter does something no summary of it ever mentions. Having built a whole court, it abandons the court entirely, in the very next line, and starts talking about measurement. |
| 79 | Arthur (V.O.) — act out | Eleven officers, one throne, and one warning delivered twice. And then the metaphor is simply dropped, mid-chapter, with no transition at all, for something much smaller and a great deal stranger than a court. |

---

# ACT IV — *The Hair's Breadth* · blocks 80–95 · 13:10–15:50

**SOUND:** The sustained note stops. Room tone only, then a very small sound — a
carpenter's rule opening, notch by notch.
**VISUAL:** The hall dissolves. Not a cut — the figures, seats and lines wash out
into blank silk. What remains is a single fine ink stroke, and beside it a ruled
scale, and the scale keeps subdividing.

**ON-SCREEN TEXT — block 80.** Card: **至道在微，變化無窮**.

| Block | Beat | Narration |
|---|---|---|
| 80 | Dr-Qi (Vesper) — the turn | The utmost Way lies in what is minute, and its transformations have no end. Who knows where it comes from? That is the chapter, one line after the throne, and there is not a minister anywhere in it. |
| 81 | Arthur (V.O.) — how abrupt this is | Nothing in the chapter prepares you for that sentence. The court is not wound down or concluded. It stops, and a different register begins, and the two are not obviously by the same hand. |
| 82 | Dr-Qi (Vesper) — the difficulty | How hard it is, it says. The discerning look and look, and who knows the essentials? The matter is deep and obscure, and who shall say what is sound? That is a text admitting it is out of its depth. |
| 83 | Arthur (V.O.) — worth noticing | Which is worth pausing on, because the chapter has just spent its entire length being extremely confident. Now, unprompted, it says the real thing is small, endless, and mostly beyond anyone's knowing. |

**VISUAL:** The scale subdivides again, and again, past the point of legibility. Then
it inverts: the finest division multiplies outward, and the marks accumulate into a
visible form.

**ON-SCREEN TEXT — block 84.** Card: **恍惚之數，生於毫釐**.

| Block | Beat | Narration |
|---|---|---|
| 84 | Dr-Qi (Vesper) — the mechanism | Numbers too faint to see are born from the finest hair's breadth. The hair's breadth arises from measurement. Thousand it and ten-thousand it, and it can be made greater. Extend it, enlarge it, and only then does its form take shape. |
| 85 | Arthur (V.O.) — say that plainly | Strip the language back and it is startling to find here. Large things are made by multiplying small things. To get the small thing at all, you have to measure. Form comes last, not first. |
| 86 | Fan-di (Xavier) — the objection | That contradicts everything you just told me. For twenty minutes the answer has been a court — the shape of it, who sits where, who reports to whom. Now the answer is a ruler and a hair. Which is it? |
| 87 | Dr-Qi (Vesper) — both, and that is the problem | Both, and I will not pretend the seam is invisible. The court is how you hold the idea. The measuring is how you would ever check it. The chapter gives you the first at length and the second in four lines. |
| 88 | Arthur (V.O.) — the compilation point | The seam may be a real one. The Inner Canon is a compilation assembled over centuries from more than one hand, and a passage that changes register this sharply often arrived from somewhere else. |
| 89 | Arthur (V.O.) — why this passage matters most | Yet this is the most forward-looking passage in the chapter. Everything before it is a metaphor you either accept or do not. This is a method — start small, measure, multiply, and check the form against it. |
| 90 | Dr-Qi (Vesper) — the road not taken | It is also the passage the tradition did least with. The court metaphor was copied, illustrated, memorised and taught for two thousand years. The four lines telling you to go and measure were admired, and left alone. |
| 91 | Arthur (V.O.) — the honest weight of that | We should be careful how triumphant we sound here. Nobody in this chapter invented experiment. The text says the fine grain is where truth is, and then does not go and look. Saying is not doing. |
| 92 | Fan-di (Xavier) — the emperor gets it | Then the instruction I was actually given this afternoon was not the seating plan at all. It was: stop asking who outranks whom, go and measure the smallest thing you can, and build up from there. Nobody did that. |
| 93 | Dr-Qi (Vesper) — quietly | Nobody did that. They kept the picture of the court, because a picture of a court can be taught to a room of students in an hour, and hair's breadths cannot be taught to anyone at all without instruments. |
| 94 | Arthur (V.O.) — the real cost | That is the cost of a good metaphor, and the episode's least comfortable idea. The image was memorable enough to carry the chapter for two millennia, and memorable enough to bury the method inside it. |
| 95 | Arthur (V.O.) — act out | So the chapter has just told an emperor to go and measure. What it does next is the strangest decision in the whole text, and it undoes most of what it has said. |

---

# ACT V — *The Sealed Room* · blocks 96–108 · 15:50–18:00

**SOUND:** A heavy door. A bar dropping into brackets. Then quiet.
**VISUAL:** A plain room, one shelf, one scroll laid on it. The door closes and the
light narrows to a line, then goes.

**ON-SCREEN TEXT — block 96.** Card: **藏靈蘭之室，以傳保焉**.

| Block | Beat | Narration |
|---|---|---|
| 96 | Dr-Qi (Vesper) — the ending | The emperor said: excellent. I have heard the Way of pure radiance, the work of the great sages, proclaiming and making plain the great Way. Without fasting and purification, and without choosing an auspicious day, I would not dare receive it. |
| 97 | Arthur (V.O.) — what he then does | So he fasted. He chose a day of good omen. He put the text in a room called the Chamber of the Spirit-Orchid, to be handed on and preserved. The chapter is named after the room. |
| 98 | Fan-di (Xavier) — the objection | I have been told to measure the smallest thing I can find, and I have responded by fasting, consulting an almanac, and locking the instruction in a cupboard. I am aware of how that sounds. It sounds exactly like me. |
| 99 | Arthur (V.O.) — the real problem with it | And that is the problem with the ending, plainly stated. A text that ends by being sealed away is making a claim about its own importance, rather than inviting anyone to check it. |
| 100 | Dr-Qi (Vesper) — the defence, fairly | Though it is worth saying what preservation actually meant then. Copies were rare and fragile, and a locked room is how a document survived at all. Reverence and archiving looked the same from outside, and often were. |
| 101 | Arthur (V.O.) — the honest reckoning begins | So let us total it up without flinching, because a chapter this good deserves better than praise. Three claims went in. They have not aged at the same rate, and they should not be defended together. |

**VISUAL:** The three claims render as three ink columns on blank silk, filling in as
they are named.

| Block | Beat | Narration |
|---|---|---|
| 102 | Arthur (V.O.) — what is wrong | Wrong: the assignments. The heart does not hold awareness. The gallbladder does not decide anything. And the twelfth office, the triple burner, corresponds to no organ that anyone has ever been able to find. |
| 103 | Dr-Qi (Vesper) — on the twelfth | That last one is not a modern complaint. Physicians inside the tradition argued about the triple burner for centuries — whether it had a form at all, or was only a name for a function nobody could otherwise place. |
| 104 | Arthur (V.O.) — what is unproven | Unproven: the promise about lifespan. That governing yourself well extends your life to its natural span is not a finding. It is a hope, stated by a text with no way to test it. |
| 105 | Arthur (V.O.) — what holds up | And what holds: that a body is a system of parts that must not lose one another, that its worst failures are failures of connection, and that these show up far from where they began. |
| 106 | Lei-Gong (Zane) — the closing question | Then can I ask the thing I have been holding since I miscounted? If the chart was wrong about nearly every officer on it, why did anyone keep it — and why are we still talking about the string? |
| 107 | Arthur (V.O.) — the answer | Because the string was the good idea, and it did not need the officers to be right. He asked which organ he could lose. The chapter's answer, in four words: they must not lose one another. |

**VISUAL:** The web of lines, alone on black — no seats, no figures, no placards.
Hold. Cut to the disclaimer plate.

| Block | Beat | Narration |
|---|---|---|
| 108 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and where its account of the body is wrong, we say so plainly. |

---

## ON-SCREEN TEXT cards — the exception to text-free clips

Every other block is **text-free**; captions come from the tracked sidecar. These
are the exception, and the reason is structural: `assemble_final.sh` has **no
text-overlay parameter**, so a quotation card carries no text unless the text is in
the clip.

**Every card block still needs a voice take, and it must clear 8.6s like any
other** — a silent card fails the assembler's narration-per-window assert
(`blocks [..] have NO narration in their windows`). All of these are narrated over,
and that narration is in the act tables above.

> **The first column here reads `Block NN`, not a bare number, and that is
> deliberate.** A table whose first cell is a bare integer has the same shape as a
> narration row. This one sits after block 108 so it cannot truncate the sidecar,
> and the prefix removes the collision for good. Apply the same rule to any numbered
> table added to this document later.

| Card block | Card | Gloss |
|---|---|---|
| Block 7 | 素問·靈蘭祕典論 | the citation — **Su Wen 8**, never a bare "Chapter 6" |
| Block 13 | 心者，君主之官也，神明出焉 | the heart is the office of the sovereign |
| Block 22 | 膻中者，臣使之官，喜樂出焉 | shan zhong, the office of the envoy |
| Block 30 | 腎者，作強之官，伎巧出焉 | the kidney, the office of exertion |
| Block 58 | 主明則下安 | when the sovereign is clear-sighted, those below are at peace |
| Block 61 | 主不明則十二官危 | when he is not, the twelve offices are in danger |
| Block 65 | 戒之戒之 | beware of it, beware of it |
| Block 80 | 至道在微，變化無窮 | the utmost Way lies in what is minute |
| Block 84 | 恍惚之數，生於毫釐 | numbers too faint to see are born from a hair's breadth |
| Block 96 | 藏靈蘭之室，以傳保焉 | stored in the Chamber of the Spirit-Orchid |

*(Ten quotation cards. Block 8 is the series title card and carries no classical
text, so it is not listed here. Block 108 is the disclaimer plate, whose text is
hand-added at edit time like all other on-screen text.)*

**Generated Chinese glyphs are unreliable and cannot be checked from this host** —
the CDN has been blocked on every cut for a long time. Two options, and it is a
production decision, not a detail: generate the card blocks as **plain plates and
add the characters at edit time**, or generate them with text in-frame and have a
human verify every glyph before the cut ships. **Default to plates plus edit-time
text** for anything a viewer could catch — especially block 7, which is the
citation, and block 65, which is four characters a viewer can compare against any
edition in seconds.

---

## Source mapping — translation § → blocks

Sections are those of `inner-canon-ch6-translation-v1.md`.

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | 貴賤何如 — the emperor's request for a ranking | 5–6, 41–43 |
| §1 | 心者，君主之官也，神明出焉 | 13–14 |
| §1 | 肺者，相傅之官，治節出焉 | 15–16 |
| §1 | 肝者，將軍之官 / 膽者，中正之官 | 17–19 |
| §1 | 膻中者，臣使之官 | 22–23 |
| §1 | 脾胃者，倉廩之官 | 24 |
| §1 | 大腸者，傳道之官 / 小腸者，受盛之官 | 27–29 |
| §1 | 腎者，作強之官 | 30–31 |
| §1 | 三焦者，決瀆之官 | 32–33 |
| §1 | 膀胱者，州都之官…氣化則能出矣 | 34–35 |
| §1 | **不得相失也** | 38–48 |
| §2 | 主明則下安…以此養生則壽 | 58–60 |
| §2 | 主不明則十二官危…使道閉塞而不通 | 61–62, 68–70 |
| §2 | **戒之戒之** | 64–67 |
| §3 | 至道在微，變化無窮，孰知其原 | 80–83 |
| §3 | 窘乎哉…閔閔之當，孰者為良 | 82 |
| §3 | 恍惚之數，生於毫釐…其形乃制 | 84–89 |
| §4 | 非齋戒擇吉日不敢受也 | 96, 98 |
| §4 | 藏靈蘭之室，以傳保焉 | 97, 99–100 |

**Every line of the original is used.** This chapter is short — four paragraphs —
which is why the episode can afford Acts II and V, where a longer chapter would
still be reciting. The consequence is the inverse of the usual risk: there is no
cutting-room floor to restore from, so **the stretch levers all add commentary
rather than source**. See *Runtime levers*.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears the
cast sheet's **blue** cheongsam, never jade.

**Dramatic material not in the source, flagged as invention:** the court portrait
and the short silk, Fan-di's opening joke about demoting a minister, the tally board
and Lei-Gong's miscount, Dr-Qi's line about the string, Fan-di setting the fan down
in Act III, and Lei-Gong's closing question. **The classical text is a bare
question-and-answer with no characterisation, no scene and no narrative whatsoever
— the Emperor speaks twice and the physician once.** Everything attributed to *the
text* above is in the translation; everything else is dramatisation, and the
compliance notes treat it as such.

**One invention needs naming separately, because it is an interpretive claim rather
than a scene:** the reading that §3's measurement passage is *the road not taken*
(blocks 89–94) is ours. The text does not say the tradition neglected it. That the
court metaphor was transmitted far more heavily than the four lines on 毫釐 is a
fair characterisation of the reception history, but it is a characterisation, and
blocks 91 and 94 are written to keep it hedged.

---

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run for this
cut.** The figures below are a planning preflight, not a priced gate — call
`balance` and `get_cost: true` live before spending anything.

### This does not fit the credit balance. Say so before anything else.

Last recorded balance: **862.6** (after the ch1 v5 run, 2026-08-04).

| Clip model / tier | Credits/clip | × 108 blocks | vs 862.6 |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,080** | **over budget** |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~2,700 | ~3.1× balance |
| `gemini_omni` 720p | 30 | ~3,240 | ~3.8× balance |
| `seedance_2_0` 1080p | 90 | ~9,720 | ~11× balance |

Everything else is trivial by comparison: a landscape style key at **2**, ~108 voice
takes at **~0.8** ≈ 86, assembly **free**, captions **free**. **Clips are essentially
the entire bill, so the model choice is the budget.**

**An 18-minute episode does not fit at any tier — not even an all-draft pass.** Three
ways forward, and it is a decision, not a detail:

1. **Top up** before starting.
2. **Cut the runtime.** 90 blocks (15:00) at 480p is ~900 — still over, and with
   nothing left for re-takes. See the runtime levers for which ranges drop cleanly.
3. **Produce act by act across billing periods**, assembling each act as its own
   `assemble_final.sh` run. See *Assembly strategy* for the join problem this creates.

**Budget re-takes separately and generously.** On ch1 v5 one block took fourteen
takes and ~11 credits. At 108 blocks even a 20% re-take rate is ~17 extra credits of
voice — cheap — but the *time* cost is the real one, and it is what makes a
whole-episode single-pass assembly risky.

### Voice measurement — required before ~108 takes

`SKILL.md` is explicit, and two things make it non-optional here:

- **Zane has never been measured at length.** The only figure on record is a
  five-word line at 2.3–2.6s, where pause overhead dominates and no words/sec can be
  derived. **Lei-Gong has four blocks in this script (25, 36, 49, 106)**, each
  written at 34–39 words provisionally. Under a hard 8.6s floor an unmeasured voice
  is a render failure, not a rounding error.
- **Arthur, Xavier and Vesper were measured on trailer-register lines.** This script
  asks Vesper for sustained explanatory paragraphs across 36 blocks, which is not
  what she was measured on — her one measured take is a single trailer beat.

**Measure one full-length take per voice through the assembler's own gate before
generating anything else**, and write the results back into `SKILL.md`'s step-3
table:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

Four takes, ~3.2 credits. A mis-sized script is 108.

**Named fallback if Zane will not hold the window.** Blocks 25, 36, 49 and 106 are
written so they can be **reassigned to Arthur as reported speech** without changing
the block count, the act boundaries or the shot list — recast as *"The boy marking
the tally had seven officials and six seats, and asked which the chart wanted"* and
so on. **Block 106 is the one that costs something in the recast**, because its
force comes from the person asking being the person who miscounted in Act I. Decide
this **before** generating Act I, not at Act V.

### Style key — needs a 16:9 sibling

The whole chained lineage is 9:16. Longform needs a **landscape variant**. Derive
the chapter 6 vertical key first (chained off the ch1 head
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`, motif: twelve empty seats in two arcs joined
by fine ink lines, centre seat larger), then derive the 16:9 sibling from *that* by
passing its **job ID** as the reference and changing only the framing.

Record both as their own lineage entries — **do not overwrite the vertical key**,
the trailer needs it. `medias[].value` takes a `media_id` or a prior `job_id` only;
a `https://` URL there fails.

### Clips

Not generated. Model and tier from the step-0 gate. 10s, `aspect_ratio: "16:9"`
**and** "landscape 16:9 framing" written into every prompt text — the double
declaration has held on this model across three cuts, and a full set of clips has
previously come back in the wrong orientation without it.

- **`generate_audio: false` on every clip.** A correctness requirement, not a
  saving: the assembler mixes clip audio in at 0.12 under the voice rather than
  discarding it, so a clip generated with native audio is **audible in the finished
  cut** and the only fix is regenerating the block.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every
  clip. Act III dims the whole hall and Act V is a closing door in a dark room —
  this is a dim-heavy episode and it is the most frequent trigger by far. One id per
  call, so budget a retry for each newly-triggered preset.
- **Keep audio vocabulary out of clip prompts** — *drum*, *drone*, *music*,
  *rhythm* — since those are edit-time directions anyway and *rhythm* triggers
  `DROWN IN MUSIC`. Lei-Gong's hand drum is a **prop** in the SOUND lines above;
  describe it in a prompt as a small hand-held drum he is holding, never as
  something being played rhythmically.
- **Generate one clip and check its returned dimensions before the rest** — on any
  model, and especially on the first landscape cut this repo has attempted.
- **Duration ≥ 9.5s and motion from frame 1.** The assembler rejects a clip shorter
  than 9.5s outright and warns on a static open or frozen tail. Several blocks here
  are deliberately still compositions (58, 71, 96, 107) — **stillness in the staging
  must not become a frozen frame in the clip**; give each a slow push, a drifting
  ink grain, or a light change.

### Assembly strategy — decide before generating a single take

**The join is the open problem.** `assemble_final.sh` takes clip/voice *pairs*
against a declared block count and asserts an `N × 10s` output, so an already
assembled act is **not** a valid input to it. Two routes, neither yet run here:

- **Assemble the whole episode in one call** and skip the join. Removes the problem,
  but it is ~216 files to download inside one chained command, in a sandbox that is
  discarded ~10 seconds after the call returns.
- **Concat the act outputs** with our own ffmpeg, outside the sandbox's rules.
  Defensible — the acts are already assembled correctly and a concat of
  equal-geometry MP4s is a lossless remux — but it puts the −16 LUFS normalisation
  per act rather than across the episode. **Check levels at the seams**, especially
  the Act III → IV boundary, where the sustained note under Act III stops.

Run episode-scale assembly `background: true` and poll the returned log with `tail`
at least every 60s or the sandbox dies under the job. **Note the opposite lesson at
trailer scale**: ch1 v5 lost a whole run to `background: true` because the transport
call timed out. Foreground for one act only if it finishes inside 120s; measure the
first act before assuming.

**Assemble Act I first and measure how long it actually takes.** Nothing at this
scale has been run through this path.

### Voiceover

Not generated. `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per
block, **one speaker per block** — verified: no block above contains two voices.

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ, and the second is the one that was
gated. A ch1 v5 take logged as "8.50s pass" was 8.497s — 0.103s under the floor —
and stopped the assembly. A take within ~0.2s of either edge is checked against the
number, never eyeballed.

**Append job IDs to this record act by act, before moving on.** The record is the
crash-recovery file; a lost session with unrecorded IDs means paying twice.

**Generated from the parsed narration table, not transcribed by hand** — an earlier
hand-written version of this table put block 46 on Arthur and dropped block 31, and
totalled 55. A wrong voice on one block is a wasted take plus a re-assembly.

| Voice | Blocks | Count |
|---|---|---|
| Arthur | 1, 2, 4, 7, 8, 9, 10, 12, 14, 16, 19, 23, 26, 29, 31, 33, 35, 37, 38, 40, 44, 45, 47, 48, 51, 54, 55, 57, 59, 60, 62, 66, 67, 70, 72, 73, 75, 76, 78, 79, 81, 83, 85, 88, 89, 91, 94, 95, 97, 99, 101, 102, 104, 105, 107, 108 | 56 |
| Vesper (Dr-Qi) | 6, 11, 13, 15, 17, 18, 21, 22, 24, 27, 28, 30, 32, 34, 39, 42, 46, 50, 53, 56, 58, 61, 64, 65, 69, 74, 77, 80, 82, 84, 87, 90, 93, 96, 100, 103 | 36 |
| Xavier (Fan-di) | 3, 5, 20, 41, 43, 52, 63, 68, 71, 86, 92, 98 | 12 |
| Zane (Lei-Gong) | 25, 36, 49, 106 | 4 |

56 + 36 + 12 + 4 = **108**, one take per block, no block with two speakers.

### Captions

Sidecar only; `assemble_final.sh` rejects `--subs` outright. **Build with
`--format 16:9`** — the longform frame is 1280 wide and gives captions roughly twice
the room of the vertical trailer, so a 9:16 build would over-split every cue:

```
node scripts/check_caption_fit.js output/episode-6/inner-canon-ch6-longform-v1.md --format 16:9
node scripts/build_subtitles.js  output/episode-6/inner-canon-ch6-longform-v1.md --format 16:9
```

**No `.srt`/`.vtt` ships with this document yet, by design** — the cues are timed
from take durations that do not exist. Build and commit them with the render.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly. The step-0 gate
  is outstanding and is a hard gate.
- **The 16:9 decision is unconfirmed** and is ~108 clips to get wrong.
- **Zane is unmeasured at length**; four blocks depend on him and the recast
  fallback is written above.
- **This is the repo's first longform attempt to reach production**, and the
  act-scale assembly timing is unmeasured. Treat Act I as a shakedown, not a render,
  and write what actually happened here.
- **The CDN is normally blocked from the repo host**, so the finished MP4 usually
  cannot be fetched back for visual QA. The sandbox has its own network access and
  can probe the render next to where it was built — but **a probe is not a viewing**.
  Say which checks actually ran.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 108.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers. Not a generic recipe — block numbering and timecodes differ
between versions of the same chapter, and that is where the mistakes land. Both
caption scripts are pure text tools: they read this document, touch no video, need
no network and cost no credits. **Both take a path relative to the current
directory — run them from the repo root, or pass an absolute path.**

**1. Check captions**, at 16:9, before generating takes. A fix is free at that point
and costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/episode-6/inner-canon-ch6-longform-v1.md --format 16:9
```

**2. Build the sidecar**, at 16:9, after the takes exist and their durations are in
the record above.

```
node scripts/build_subtitles.js output/episode-6/inner-canon-ch6-longform-v1.md --format 16:9
```

On a **copy** of the `.srt`, delete the cues covering **block 108** (everything from
17:50:00) so the disclaimer is not simultaneously a caption and a card. The burn
copy is blocks 1–107, ending at 17:50.

**3. Burn**, once, over the finished episode — not per act. Nothing is burned at
assembly, so act assemblies carry no captions by construction and there is no
layering to avoid. Run `ffmpeg -version` and `fc-match Anton` *before* starting: a
missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and re-target `PlayResX/Y`
to the episode's **actual returned resolution** first — ffmpeg's SRT→ASS converter
hardcodes 384×288, which scales every style value by roughly 2.5× at 720p and runs
the lines off frame. If the assembler returns something other than 1280×720, scale
the five style values (`Fontsize`, `MarginL`, `MarginR`, `MarginV`, `Outline`) by
the real frame ratio rather than burning the house 16:9 style verbatim.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's portrait track. Sits clear above the caption band; at 16:9
`MarginV` is 60, so keep the lower-third higher than that or move it to the upper
third for this cut. Added by `drawtext` in the burn pass, not in an NLE.

**5. Quotation cards.** If the ten cards listed above were rendered as **plain
plates** (the default), their Chinese text is added here, in the same `drawtext`
pass, at blocks 7, 13, 22, 30, 58, 61, 65, 80, 84 and 96 — each held for its full
10s window. Verify every glyph against `inner-canon-ch6-translation-v1.md` before
export; block 7 is the citation and block 65 is four characters a viewer can check
against any edition in seconds.

**6. End card — 17:50 to 18:00** (block 108). Mandated disclaimer verbatim across
three centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
Act IV (blocks 80–95)** — the metaphor drops there and the act plays dry, against a
carpenter's-rule sound design. Back in under block 96. Out at the block 107 cut to
the bare web of lines. **This cannot be moved to the assembler's `--music` flag**:
`--music-vol` clamps at 0.20, which does land in range, but it mixes one continuous
bed with no dropout window, and this cut needs two.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render.

- **Disclaimer** — repo string verbatim: blockquoted at the head of the translation,
  at the head of block 108's narration, on screen as the end card, and in the
  description. Block 108 is extended past the mandated string to clear the 8.6s
  floor; the mandated sentence itself is unaltered. Block 59 restates *nothing in
  this chapter is a treatment, and none of it is advice* in-body, immediately after
  the only longevity claim in the episode.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim anywhere. Every organ statement is explicitly reported as what a
  text says (*"the text assigns"*, *"the chapter says"*), and blocks 72–73 and 102
  state directly that the assignments are wrong. **No viewer is told to do
  anything.**
- **Mortality / ageing** — the chapter's longevity clause (以此養生則壽, *"nourish
  life by this and there is length of years"*) is in block 58 and is **hedged in the
  very next block, by the narrator, before any other content intervenes**. Block 104
  returns to it in the reckoning and files it under *unproven*. It is never
  presented as achievable, and no lifespan number is spoken anywhere in the episode.
  Treatment is reflective and non-graphic throughout — the failure imagery is
  dimming ink lines, never a body. **The word *longevity* itself is kept out of the
  spoken narration**: block 104 says *"the promise about lifespan"*. The banned-terms
  rule targets titles and thumbnails, but a narrator saying the word gives an
  auto-generated chapter title or clip somewhere to lift it from.
- **Fertility content** — **absent.** 腎者，作強之官 is rendered as *exertion* and
  *skill*, and block 31 flags in-line that the line has been read more broadly
  elsewhere without repeating those readings. This is a deliberate narrowing and it
  is the better-supported translation, not only the safer one.
- **Indulgence / alcohol** — **absent.** No feast, no vessels, no drinking anywhere
  in the shot list.
- **Supernatural hooks explicitly debunked by the payoff** — the episode's hooks are
  *your body has a court* and *one office is missing*. Both are debunked inside the
  episode by the narrator: blocks 72–73 (the heart does not think; the organ that
  governs is not on the chart at all), block 102 (the triple burner corresponds to
  no organ), block 103 (physicians inside the tradition disputed it too). **The
  debunk is a whole act, not a closing caveat.**
- **Title and thumbnail honour the educational payoff** — working title *The Seating
  Plan*; on-screen framing *"The Body Is an Empire, and the Emperor Is the Weak
  Point"*. **Banned terms checked**: no *longevity*, *live to 100*, *ancient secret*
  or *anti-aging* in the script, the title or the thumbnail direction. The blueprint
  carries a specific warning about exactly this failure on a neighbouring chapter.
  **Thumbnail direction:** twelve seats from above, one centre and larger, one left
  as an unfilled outline — *one of these is missing*, which is the real claim.
- **Hedge allocation — three characters speak, so this needs recording.** **Arthur
  retains every compliance hedge without exception**: the longevity hedge (59), the
  not-advice restatement (59), the historical caution about authorship (67), the
  anatomical correction (72–73, 75), the caution against over-claiming
  interdependence (55), the caution against triumphalism about §3 (91), and the full
  reckoning (101–105, 107). Dr-Qi carries claims *about the text*, attributed
  in-line. Fan-di carries vanity and objection. Lei-Gong carries confusion and one
  question. **No compliance hedge rests on a character voice.**
- **Historical accuracy** — four risks, all handled in-script. (1) The chapter is
  cited on screen as **Su Wen 8**, never a bare "Chapter 6". (2) Block 67 states
  that the Inner Canon's authorship is uncertain and that we cannot know who the
  warning was aimed at. (3) Block 88 attributes the §3 register-change to the text's
  compilation history as a possibility, not a fact. (4) The *road not taken* reading
  in Acts IV–V is our interpretation and is flagged as such in the source mapping;
  blocks 91 and 94 keep it hedged in the narration itself.
- **The count must survive a viewer checking it.** Twelve *offices*, eleven
  *organs*, with 脾胃 sharing one office and 膻中 naming a location. Blocks 23, 25,
  36, 37 and 102 all depend on this arithmetic and must stay consistent with each
  other through any edit.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: empty seats, ink
  lines, brushstroke figures, silk, a ruled scale, a closing door. **No restraint or
  bound-figure imagery**, which has tripped the safety filter here before even on
  innocuous subject matter — note specifically that Act V's *sealed room* is rendered
  as **a door and a shelf with no person in the shot**, and must stay that way. No
  bodies, no injury, no falling figures; every failure beat in the episode is
  carried by dimming lines.

## Runtime levers

Expressed in blocks, since blocks are the unit that costs money. 108 blocks =
18:00; the format floor is 90 (15:00) and the ceiling 120 (20:00).

**Cut to 15:00 (90 blocks) — drop 18 blocks:**

- **Blocks 27–29** (large and small intestine, 3) — the two least load-bearing
  offices. Costs Lei-Gong's setup slightly; block 36 still works.
- **Blocks 15–16** (the lung, 2) — keep the general/judge pairing, which carries the
  structural claim, and lose the chancellor.
- **Blocks 54–55** (the general point and its caution, 2) — but **only as a pair**.
  Dropping 54 alone loses the payoff; dropping 55 alone leaves an unhedged claim
  standing, which is a compliance regression, not just a cut.
- **Blocks 85–87** (restating the measurement mechanism, 3) — 84 and 88–89 carry it.
- **Blocks 99–100** (the sealed-room objection and its defence, 2) — again **only as
  a pair**, for the same reason.
- **Blocks 45–46, 74, 81, 83, 90** (6 assorted elaborations).

**Cut to 16:30 (99 blocks)** — the first three groups only. This is the cut to make
if the budget forces one; it costs no compliance content and no act boundary.

**Stretch to 20:00 (120 blocks) — add 12.** Note the unusual constraint here: **the
source chapter is fully used, so every stretch adds commentary rather than text.**

- **Act I, +4** — one block per office for the four given only a single line
  (chancellor, envoy, granaries, bladder), each pairing the classical claim with what
  the organ actually does.
- **Act III, +4** — the reception history: who copied this chapter, the court-portrait
  illustrations it generated, and how the twelve-office chart became the standard
  teaching diagram. This is the strongest addition and the most on-thesis.
- **Act IV, +2** — the 三焦 dispute at length, moving block 103's material forward and
  giving it room.
- **Act V, +2** — what a modern systems view does with 不得相失, kept explicitly
  analogical and hedged by Arthur.

**Pairs that must not be split**, in any cut: **54+55**, **99+100**, **72+73**,
**58+59** (the longevity claim and its hedge — splitting this one is a compliance
failure, not an editorial choice). **Block 108 is not a lever.**

**Act boundaries are re-render units.** Every cut listed above stays inside a single
act, so no act boundary moves and no act needs recomputing. Renumbering blocks after
a cut means regenerating the manifest — do it once, at the end, never mid-production.
