# The Emperor's Inner Canon — Chapter 28 Longform v1 (18 minutes)

**口問篇第二十八 · Why We Yawn**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **16:9 landscape
1280×720**, `seedance_2_0_mini`, 108 blocks × 10s = **1080.0s (18:00)**, MP4.

**The 16:9 default is an inference and needs confirming before a full run.**
`CLAUDE.md` mandates 9:16 for trailers only; landscape is the YouTube main-feed
assumption. It is ~108 clips to get wrong.

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
entirely (通評虛實論). Both halves of the canon run to eighty-one chapters and are
numbered separately, so a bare "Chapter 28" is ambiguous by construction and
sends a checking viewer to the wrong text about half the time. See the numbering
warning in `inner-canon-ch28-translation-v1.md`.

Source translation: `inner-canon-ch28-translation-v1.md`. Companion trailer:
`inner-canon-ch28-trailer-v1.md`, which previews the cold open and Act I.

**Slate position.** This is rank **1** of the twenty in `docs/Chronicle of Balance
Top20 Chapter Slate.md`, and **slot 1** of the publish sequence — the channel's
first episode. The slate's reasons are worth keeping in view while editing: the
lowest barrier to entry in the canon, no prior interest in China, medicine or
history required, and effectively zero compliance surface for the algorithm's
first read of the channel.

---

## What this episode argues

The slate sells this chapter as *"Why We Yawn"* and prescribes an **anthology of
riddles** — twelve self-contained units, escalating from trivial to strange. That
is the right form. It is not, by itself, a spine: twelve riddles in a row is a
listicle, and a listicle is eighteen minutes of trivia.

**The spine is the chapter's own frame. An emperor sends every attendant out of
the room, and then asks the questions that are not in any book.** 辟左右 is in the
first sentence, and 論不在經者 — *as for what is not in the classics* — is in the
fourth. The chapter announces itself as material too small, too undignified or
too unofficial to have been written down.

Then it does four things nobody expects, and they are the episode:

1. **It answers the first riddle with a real theory.** Not a story about yawning —
   a single moving quantity and one rule about direction, which produces yawning,
   falling asleep and waking up out of the same sentence. **One mechanism, three
   phenomena.** That is the difference between a theory and a list, and it is why
   this is history of science rather than folklore.
2. **It is right about *when* and wrong about *why*, repeatedly.** Yawning really
   does belong to the sleep–wake hinge. Sighing really does keep company with
   worry. A full stomach really does set off hiccups. Three good observations,
   three wrong mechanisms — and the episode marks those as separate scores from
   Act I onward rather than letting a near-miss round up to a hit.
3. **It preserves its own disagreements.** 一曰 — *another says* — appears three
   times. Two teachers said different things and whoever wrote it down kept both.
   That is the fingerprint of the oral transmission the chapter claims to be.
4. **It closes with a unifying claim that does not fit.** 皆為不足 — *in every
   case, something is missing* — is stated of all twelve. But §7 explained the
   sneeze by qi being **harmonious and abundant**, and nobody in the chapter
   notices. The system is complete, elegant, internally consistent almost
   everywhere, and it has a seam.

**And the payoff the chapter could never have reached.** Every answer in it
describes qi moving inside **one body**. Contagious yawning — real, documented in
humans, chimpanzees and dogs, and still unexplained — is a **two-body**
phenomenon, and this framework has no way to represent it. *The Emperor cleared
the room before he asked.* The one thing he could not discover was the thing that
happens when there are two of you. The episode's last act is that sentence.

**The dramatic engine:** Fan-di yawned mid-proclamation, in front of forty
ministers, and cleared the hall so nobody would hear him ask why. **The fan is the
tell** — snapped open he is performing, set down he means it. He sets it down once,
in Act III, on the weeping riddle, and does not pick it up again.

**Lei-Gong is the contagion.** He is not supposed to be in the room. He catches
every yawn in the episode, as a running visual gag played entirely straight — and
in Act V that gag turns out to have been the argument. He has five blocks and each
one is a question the chapter cannot answer.

---

## Cast and voice

| Role | Voice | `voice_id` | Function in this episode |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | history, mechanism, the scorecard, **every compliance hedge** |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the Huangdi role — asks the twelve, and is embarrassed by all of them |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the Qi Bo role — answers, never wins |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | the one who catches it, and the one who is right |

`seed_audio` presets, `speech_rate` 55 for all four. **One speaker per 10s
block** — the assembler takes exactly one audio per block, so every speaker change
is its own block. No block below contains two voices.

**Dr-Qi never sounds like she is winning** (`CLAUDE.md`): the more Fan-di
performs, the stiller she gets. Her hardest moment is block 71, where she has to
deliver a claim she knows is false to a man who has just set his fan down — and
block 74, where she defends what the wrong answer was *for*, without defending
whether it was true.

**Lei-Gong should never be played as comic relief interrupting a serious
programme.** He is the only person on screen doing an experiment. Block 52 finds a
real unexplained phenomenon in one sentence; block 88 breaks the chapter's
three-way mapping; block 106 is the episode's thesis, said by the youngest person
in the room.

### Writing constraint — sized to the 8.6–10.0s window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors, computed as `--clip-seconds − 1.4` to `--clip-seconds`. Word budgets are
`SKILL.md` step 3, measured 2026-08-04 off the ch1 trailer v5 run:

| Voice | Measured rate | Words per block | Status |
|---|---|---|---|
| Arthur | 3.65 w/s | **32–36** | measured, 5 takes |
| Xavier (Fan-di) | 4.15 w/s | **36–41** | measured, 1 take |
| Vesper (Dr-Qi) | 4.19 w/s | **37–41** | measured, 1 take |
| Zane (Lei-Gong) | — | *written at 34–39, provisional* | **UNMEASURED — see the gate below** |

**Every count in this script is machine-generated from the parsed narration
table**, dropping tokens that contain no letter or digit — a spaced em-dash is not
a word, and counting it as one spends a whole word of budget on a window 1.4s
wide. **Take the budget from the skill's rate, never from another cut's per-block
column**; several entries in ch1 v5's table are individually off by up to five
words even though the pooled figure reproduces.

Four consequences shape every line below, and none of them is stylistic:

- **The short interjection is dead.** Under an 8.6s floor there is no such thing
  as a quick jab, and `--clip-seconds` moves the window rather than widening it.
  **Every character line here is a full paragraph.** Lei-Gong's five blocks are
  arguments, not punchlines — which is why he reads as the show's scientist rather
  than its mascot.
- **The rates are survivor-biased.** 3.65 w/s is what Arthur's *passing* takes
  delivered; across every recorded ch1 v5 attempt he averaged **3.04 w/s**. These
  counts are sized for his fast mode and will regularly return over the ceiling.
- **The run-to-run spread exceeds the window.** Identical 26-word text came back at
  **10.23s and 7.79s** on consecutive generations — 2.44s apart on a window 1.4s
  wide. Re-roll once before rewriting, and expect misses on **either** side.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s. Padding a thin line with sentence breaks passes the duration gate
  and trips the pause warning.

These remain **arithmetic against measured rates, not measurements**. Treat the
first pass as calibration and budget re-takes explicitly. On ch1 v5 a single block
took **fourteen takes and ~11 credits**; at 108 blocks that gate is the dominant
cost risk in the whole production.

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

> **Do not insert a table whose first cell is a bare integer anywhere between
> blocks 1 and 108.** `parseNarration` keeps the first consecutive run from block 1
> and stops at the first row that breaks it, so a stray numeric table silently
> truncates the sidecar. Every other table in this document sits before block 1 or
> after block 108 for that reason, and the ON-SCREEN TEXT card table prefixes its
> first column with `Block` so it cannot collide.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *Clear the Room* | 1–9 | 0:00–1:30 | §1 — the yawn; 辟左右; the double bow; title; thesis |
| Act I — *The Master Key* | 10–31 | 1:30–5:10 | §2 — the yawn answered in full; sleep and waking; first reckoning |
| Act II — *The Gates* | 32–56 | 5:10–9:20 | §3, §6, §7, §11 — hiccup, belch, sneeze, drooling; 一曰 |
| Act III — *What the Body Does Without You* | 57–79 | 9:20–13:10 | §4, §5, §9, §10 — sob, shiver, weeping, the long sigh |
| Act IV — *The Twelve* | 80–95 | 13:10–15:50 | §8, §12, §13, §14 — limpness, tinnitus, tongue; 皆為不足 and its seam |
| Act V — *Still No Answer* | 96–108 | 15:50–18:00 | §1 recalled; the scorecard; contagion; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---

# COLD OPEN — *Clear the Room* · blocks 1–9 · 0:00–1:30

**SOUND:** A single indrawn breath, slowed almost to a drone, then released. No
music yet. Paper and brush only.
**VISUAL:** Black. Then a slow procession of open mouths that are never quite
faces — an ink-brush dog, a bird on a branch, a horse, each opening, holding, and
closing on the beat. Flat 2D ink-wash throughout, **landscape 16:9 framing**.

Blocks 1–2 stay on the mouths. *History lower-third sits on block 1 — it is
required inside the first ten seconds.*

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | You have probably yawned in the last hour. So does nearly every animal with a backbone, and so does an unborn child. It is the most ordinary thing a body does, and nobody knows why. |
| 2 | Arthur (V.O.) — the claim | Two thousand years ago, a man asked that question out loud and got a complete answer. It is written down, it is internally consistent, it explains eleven other things as well, and it is wrong. |

**SOUND:** The snap of a folding fan. Sharp, theatrical, and about four seconds
too late to help.
**VISUAL:** Interior, a wide audience hall in raking daylight. FAN-DI in the gold
robe, glasses, **fan snapped open** and working hard. Behind him, forty
brushstroke ministers in two long rows, all of them looking at exactly the same
point on the floor.

| Block | Beat | Narration |
|---|---|---|
| 3 | Fan-di (Xavier) — the humiliation | I was addressing the whole court. Forty ministers, an excellent speech, the good lighting. And halfway through a sentence about the dignity of office, my own face opened like a gate and would not close for a very long time. |
| 4 | Arthur (V.O.) — what he did next | What he did next is the first line of the chapter, and it is the reason we are making this episode. He did not summon a scholar. He sent every attendant in the room outside. |

**VISUAL:** The hall empties. Courtiers walk **out** in a long file, backs to
camera, robes trailing; the doors close behind the last of them. The room is
suddenly very large. DR-QI is the only figure left standing — blue cheongsam, open
bamboo scroll held casually like a tablet.

| Block | Beat | Narration |
|---|---|---|
| 5 | Dr-Qi (Vesper) — what that cost | He cleared the hall before he asked me, and you should understand what that costs a sovereign. He was not protecting a secret of state. He was arranging for nobody at all to hear him ask why he yawns. |
| 6 | Arthur (V.O.) — the bow | Then the physician rose off his mat and bowed twice before answering. The most formal gesture in the chapter is triggered by the least dignified question in the canon, and that is not an accident. |

**ON-SCREEN TEXT — block 7.** Card: **靈樞·口問**, brushed, with *"Spiritual
Pivot, chapter 28"* beneath in small type. See the card table after block 108.

| Block | Beat | Narration |
|---|---|---|
| 7 | Arthur (V.O.) — the citation | The book is the Spiritual Pivot, the practical half of the Yellow Emperor's Inner Canon. Chapter twenty-eight. Its title is Oral Inquiry, and it means what it says: questions asked aloud, answered aloud. |

**ON-SCREEN TEXT — block 8.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 8 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon, and we are calling this episode Why We Yawn. Twelve questions, one answer, and a reckoning at the end that we think you will not see coming. |
| 9 | Arthur (V.O.) — the thesis | Watch the shape of it. A man clears a room to ask twelve small questions nobody wrote down, and gets a single mechanism that covers all twelve. Then watch what a cleared room hides. |

---

# ACT I — *The Master Key* · blocks 10–31 · 1:30–5:10

**VISUAL:** The empty hall becomes the set for the whole episode. A low lacquer
table, two cushions, one standing lamp. Behind Dr-Qi, a tall blank silk panel that
will carry every diagram in the episode, drawn live in ink as she speaks.

**CHARACTER — Fan-di:** performing throughout Act I, fan open on every line. He is
converting an embarrassment into a lecture, which is what he does with everything.
**CHARACTER — Lei-Gong:** LEI-GONG is *not supposed to be here*. Establish him in
the deep background of the first diagram shot — cinnabar robe, hand drum in his
lap, sitting behind a pillar, entirely still. He is not acknowledged until block
25.

**ON-SCREEN TEXT — block 10.** Card: **人之欠者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 10 | Fan-di (Xavier) — the first question | Then let us begin with the one that humiliated me. When a person yawns, what qi brings it about? And do not tell me it is fatigue. I sleep extremely well. I have people to make certain of it. |
| 11 | Dr-Qi (Vesper) — the schedule | Your defensive qi keeps a schedule. Through the daylight it travels in the yang, on the outside of you, at the surface. At midnight it goes down into the yin, and the yin is where the night is kept. |
| 12 | Arthur (V.O.) — what that is | Defensive qi is worth pausing on. It is the patrol, the watch on the walls, the part of you that meets weather and cold. It moves on a fixed circuit, and the circuit keeps time. |

**VISUAL:** On the silk panel, ink draws a standing figure in outline. A bright
band circles its surface, clockwise, at the level of the skin. Nothing else on the
panel yet.

| Block | Beat | Narration |
|---|---|---|
| 13 | Dr-Qi (Vesper) — the two rules | Yin governs the night, and the night is for lying down. Yang governs what is above you; yin governs what is below. Hold those two sentences together, because everything that follows is built out of those two and nothing else. |
| 14 | Arthur (V.O.) — not yet an answer | So far this is a clock, not an explanation. A patrol that is outside by day and inside by night tells you where something is. It does not yet tell you why your jaw opens. |

**VISUAL:** A second, darker band pools at the base of the figure and thickens.
The bright band has not finished its circuit. The two begin to strain against one
another — the whole diagram now visibly under tension.

| Block | Beat | Narration |
|---|---|---|
| 15 | Dr-Qi (Vesper) — the mechanism | Here is the why. Yin qi has already gathered low in you, and yang qi is not yet finished with its day. The yang draws upward. The yin draws downward. Both are pulling on you at once. |

**ON-SCREEN TEXT — block 16.** Card: **陰陽相引，故數欠**.

| Block | Beat | Narration |
|---|---|---|
| 16 | Dr-Qi (Vesper) — the answer | Yin and yang draw against one another, and therefore one yawns, and yawns again. That is the whole answer. Not a symptom of anything. The visible part of a contest that is already going on inside you. |
| 17 | Arthur (V.O.) — the image | Picture what she has just described. Two forces pulling in opposite directions on the same rope, at the same moment. The yawn is not the winner or the loser. The yawn is the rope trembling. |

**VISUAL:** Fan-di stands, delighted, and taps the closed fan against his palm —
the first time it has been shut since block 3, and only for a second.

| Block | Beat | Narration |
|---|---|---|
| 18 | Fan-di (Xavier) — the reframe | So I was not bored. I was a battlefield. Forty ministers watched their sovereign's face come open, and what they were actually witnessing was two enormous forces contending for possession of him. I can work with that. |
| 19 | Dr-Qi (Vesper) — the correction | You can work with it. I would rather you noticed the other thing, which is that I have not finished the sentence yet. The same movement that opens your jaw also puts you to sleep, and wakes you up again. |
| 20 | Arthur (V.O.) — the pivot | That is the moment this chapter stops being a curiosity. Listen to what the next two clauses do, because they do not introduce a new mechanism. They simply run the same one further along. |

**VISUAL:** The tension on the panel resolves. The bright band thins to nothing;
the dark band fills the figure; the outline's eyes close. Then it reverses,
smoothly, and the eyes open. The same two bands, no new ink.

| Block | Beat | Narration |
|---|---|---|
| 21 | Dr-Qi (Vesper) — sleep | When yang qi is spent and yin qi is full, the eyes close. That is not a metaphor for sleep, and it is not a description of sleep. In this system it is the cause of sleep. |
| 22 | Dr-Qi (Vesper) — waking | And when yin qi is spent and yang qi is full, you wake again. Same two quantities, same seesaw, simply read at the other end of the night. Nothing new has been added to explain either one. |
| 23 | Arthur (V.O.) — what it bought | Count what that one sentence just paid for. Yawning, falling asleep, and waking up again, all from a single moving quantity and one rule about direction. Three phenomena, one mechanism, no extra parts. |
| 24 | Arthur (V.O.) — theory, not list | That is the difference between a theory and a list. A list tells you that yawning happens. A theory tells you that yawning, sleeping and waking are the same event, caught at different points. |

**VISUAL:** From behind the pillar, unacknowledged, LEI-GONG yawns. Enormously.
The camera finds him a beat *after* it happens, which is the joke. Fan-di and
Dr-Qi both turn.

| Block | Beat | Narration |
|---|---|---|
| 25 | Lei-Gong (Zane) — the first catch | I have a problem. Everybody here keeps saying the word, and I have now done it four times, and I was not tired when I came in. Is that in the chapter? It should be in the chapter. |
| 26 | Arthur (V.O.) — hold that | Hold that thought for thirteen minutes. It is the best question anyone asks in this episode, and the chapter has no answer to it at all. We will come back to why not. |

**VISUAL:** Leave the hall for the first time. The ink diagram persists, but the
background behind it becomes a modern research context rendered in exactly the
same flat ink-wash — a sleep laboratory as a brushed line drawing, no photography,
no faces.

| Block | Beat | Narration |
|---|---|---|
| 27 | Arthur (V.O.) — the modern question | First, the obvious question. Two thousand years later, with brain scanners and sleep laboratories, what is the modern account of why we yawn? The honest answer is that there is not one yet. |
| 28 | Arthur (V.O.) — not a dodge | That is not us being coy. Yawning is studied, and it is unresolved. The leading proposals compete rather than combine, and none of them has closed the question. Here are the two that matter. |
| 29 | Arthur (V.O.) — cooling | One says a yawn cools the brain. The deep inhalation and the jaw movement shift blood and air, and yawning rises when the brain is a little too warm. Suggestive, contested, nowhere near settled. |
| 30 | Arthur (V.O.) — the hinge | The other says a yawn marks a change of state. Not tiredness itself, but the hinge — sleep into waking, waking into sleep, boredom into attention. That one is the oldest and the best supported. |

**VISUAL:** Back to the hall, hard cut. Dr-Qi has not moved.

| Block | Beat | Narration |
|---|---|---|
| 31 | Dr-Qi (Vesper) — the score | Then hear what your chapter already said, two thousand years before anyone could measure anything. Yawning belongs to the hinge between sleeping and waking. It put the yawn at exactly the moment the modern account still puts it. |

---

# ACT II — *The Gates* · blocks 32–56 · 5:10–9:20

**SOUND:** The pace changes. A dry brush ticking on paper, like a metronome that
is not quite regular.
**VISUAL:** The silk panel resets to blank and stays busier from here — each riddle
draws its own small diagram, which is wiped before the next. Eleven cartouches
appear along the top edge of the panel and one of them fills in as each riddle is
answered. It is a progress bar, and the audience should notice it.

| Block | Beat | Narration |
|---|---|---|
| 32 | Arthur (V.O.) — the act frame | Keep those two scores apart, because we will be marking them all episode. Right about when. Wrong about why. The observation is good and the mechanism is not, and that pattern holds eleven more times. |

**ON-SCREEN TEXT — block 33.** Card: **人之噦者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 33 | Fan-di (Xavier) — the hiccup | Very well. When a person hiccups, what qi brings it about? I ask because it happened to me during an audience, and the envoy of a neighbouring kingdom found it considerably funnier than the occasion allowed. |
| 34 | Dr-Qi (Vesper) — the ordinary traffic | Grain enters the stomach, and stomach qi pours upward into the lung. That is the ordinary traffic, and it runs in one direction only. Nothing has gone wrong yet. Everything after this is that traffic reversing on itself. |
| 35 | Dr-Qi (Vesper) — the collision | Now suppose old cold qi is still in there when new grain qi arrives. New and old fall into disorder. The true and the aberrant attack each other. The qi combine, run backwards, and come out of you. |
| 36 | Arthur (V.O.) — the grammar | There is the grammar. Something arrives. Something reverses. It leaves by the road it came in on. You will hear that shape again for the belch, the sneeze, the sob and the ringing ear. |
| 37 | Arthur (V.O.) — what it is | What a hiccup actually is: a sudden involuntary contraction of the diaphragm, with the vocal cords snapping shut about a third of a second later. The sound is the closing, not the breath. |
| 38 | Arthur (V.O.) — and what it is for | The reflex arc is well described. What it is for is not. One proposal treats it as a leftover from gill ventilation in our aquatic ancestors, and that is a hypothesis, not a finding. |
| 39 | Dr-Qi (Vesper) — the half-hit | Before you dismiss the stomach, notice this. A stomach stretched full really does set hiccups off. The nerve that reports on a full stomach runs past the diaphragm on its way. The organ was not chosen at random. |
| 40 | Arthur (V.O.) — the hedge | Careful, though, because it is the trap this episode is about. They identified a real trigger. They attributed it to the wrong organ, by a mechanism that does not exist. That is not a hit. |

**VISUAL:** Fan-di flicks the fan shut and open again, impatient. The progress bar
has two cartouches filled and nine empty.

| Block | Beat | Narration |
|---|---|---|
| 41 | Fan-di (Xavier) — the demand | I would like one that is simply correct. Not correct about the timing, not correct about the trigger. Correct. Give me a single answer in this chapter that a physician two thousand years from now would sign. |
| 42 | Arthur (V.O.) — the belch | He gets one, eventually, and it is not this one. Question three. When a person belches, what qi brings it about? Cold lodges as a guest in the stomach, turns back, disperses upward, and leaves. |
| 43 | Dr-Qi (Vesper) — the guest | Notice the verb. The cold lodges as a guest. It is not part of you and it has not become part of you. It is staying with you, and it will leave the way a guest leaves. |

**ON-SCREEN TEXT — block 44.** Card: **一曰** — two characters only, very large,
alone on the panel.

| Block | Beat | Narration |
|---|---|---|
| 44 | Dr-Qi (Vesper) — another says | Then the text does something odd. It gives its treatment, and then adds three more characters: another says. A second opinion, incompatible with the first, recorded without comment and without any attempt at all to decide between them. |
| 45 | Arthur (V.O.) — why that matters | Those three characters are worth more than the treatment they qualify. They appear three times in this chapter. Each time, two teachers said different things, and whoever wrote it down kept both of them. |
| 46 | Arthur (V.O.) — the fingerprint | That is the fingerprint of the thing the chapter claims to be. Knowledge handed on by mouth does not arrive tidy. It arrives with its arguments still attached, because the student heard both teachers. |
| 47 | Fan-di (Xavier) — the objection | A text that cannot make up its mind is a text I cannot govern with. If I put two contradictory instructions in an edict, the edict is worthless, and the man who drafted it is looking for other work. |
| 48 | Dr-Qi (Vesper) — the answer | An edict is meant to be obeyed. This is meant to be learned. A teaching that hides its disagreements teaches you a confidence nobody has earned, and you will find that out at the bedside rather than here. |

**ON-SCREEN TEXT — block 49.** Card: **陽氣和利，滿於心，出於鼻**.

**VISUAL:** For the first time the diagram is drawn in a *warmer* ink — the only
riddle in the episode whose panel is not cold grey.

| Block | Beat | Narration |
|---|---|---|
| 49 | Arthur (V.O.) — the sneeze | Question four, and it is the odd one out. When a person sneezes, what qi brings it about? Yang qi is harmonious and running freely. It fills the heart. It issues from the nose. |
| 50 | Dr-Qi (Vesper) — what is missing | Hear what is missing from that. No cold. No blockage. No deficit and no invader. The sneeze is the only one of the twelve that the chapter explains by things going well, and going well rather abundantly at that. |
| 51 | Arthur (V.O.) — remember this | Remember that, because in seven minutes the chapter will announce that all twelve are caused by something missing. The sneeze is standing right there, explained by abundance, and nobody in the chapter notices the contradiction. |

**VISUAL:** Lei-Gong stands up from behind the pillar. Nobody sends him away.

| Block | Beat | Narration |
|---|---|---|
| 52 | Lei-Gong (Zane) — the sun | Wait. I want to ask about the sun. Every time I walk out of the hall into bright daylight I sneeze exactly twice. My father does it, my sister does it. Is that in there anywhere? |
| 53 | Arthur (V.O.) — the photic sneeze | It is not, and it is real. Somewhere between a sixth and a third of people sneeze when they step into bright light. It runs in families, it is inherited, and the mechanism is unknown. |
| 54 | Arthur (V.O.) — the point of that | So a boy with a hand drum has just found a gap in two thousand years of work, in one sentence, about sneezing. Keep that in mind when the chapter's answers start sounding primitive. |
| 55 | Dr-Qi (Vesper) — drooling | Question five, and I warn you it is unglamorous. When a person's saliva runs down, what qi brings it about? Food and drink all enter the stomach. If there is heat in the stomach, the worms stir. Yes. Worms. |
| 56 | Arthur (V.O.) — act out | Meant literally. Intestinal parasites were an ordinary fact of life, reached for the way cold and wind are reached for. The worms stir, the stomach slackens, the spring beneath the tongue opens, and you drool. |

---

# ACT III — *What the Body Does Without You* · blocks 57–79 · 9:20–13:10

**SOUND:** Everything stops. The brush ticking is gone. A single sustained note,
very low, that stays under the entire act.
**VISUAL:** The lamp is the only light now; the hall recedes into flat black around
the two figures. The progress bar is still there but much dimmer.

| Block | Beat | Narration |
|---|---|---|
| 57 | Arthur (V.O.) — the turn | Five questions in, the chapter is a catalogue of small indignities. That changes now. The next four are the ones the Emperor cleared the room for, and the chapter's best writing is in them. |
| 58 | Fan-di (Xavier) — the sob | Then the one I have not been able to ask anyone. After a man has finished weeping, his breath keeps catching, on its own, in little shudders he cannot stop. What is that? What is doing it? |
| 59 | Dr-Qi (Vesper) — the answer | Yin qi is full and yang qi is thin. Yin moves quickly, yang moves slowly. Yin floods until yang is cut off from it entirely. And so the breath catches, and catches, and will not level out. |
| 60 | Arthur (V.O.) — the dispute | We should tell you that this one is disputed. The character can be read as shivering instead of sobbing, and a translation you may find online reads it that way. We think it is wrong. |
| 61 | Dr-Qi (Vesper) — the shiver | The reason is the next question, which is shivering, and has its own answer. When a person shivers with cold: cold qi lodges as a guest in the skin, yin is full, yang is thin. One line. |
| 62 | Arthur (V.O.) — answer length | One line, and then it moves on. The length of an answer here tracks how interesting the question was, not how serious. Shivering gets a sentence. Weeping gets the longest passage in the book. |

**VISUAL:** Fan-di does not perform this next line. The fan is open in his hand and
he has forgotten it is there.

| Block | Beat | Narration |
|---|---|---|
| 63 | Fan-di (Xavier) — the real question | Then answer the one I actually cleared the room for. When a man grieves, and the water comes out of his face without his permission, what qi is doing that? Where does the water come from? |

**VISUAL:** On the panel, three things are drawn and then held for the rest of the
sequence: a seated figure at the centre, a rising line from body to eye, and two
small gates at the mouth and nose. Nothing is wiped. This diagram accumulates.

| Block | Beat | Narration |
|---|---|---|
| 64 | Dr-Qi (Vesper) — the ruler | Start where the chapter starts. The heart is the ruler of the five zang and the six fu. Not the strongest of them, not the largest. The one the others answer to. Everything below depends on that. |
| 65 | Dr-Qi (Vesper) — the road | The eyes are where the great vessels gather, and they are the road by which fluid climbs. Remember that sentence. It is going to explain something else entirely in about three minutes from now, and explain it wrongly. |

**ON-SCREEN TEXT — block 66.** Card: **口鼻者，氣之門戶也**.

| Block | Beat | Narration |
|---|---|---|
| 66 | Dr-Qi (Vesper) — the gates | And the mouth and nose are the gates through which qi passes in and out. Three structures, three jobs. A ruler, a road, and a pair of gates. Now watch what grief does to all three of them. |
| 67 | Dr-Qi (Vesper) — the heart moves | When there is sorrow, grief, care and worry, the heart is moved. When the heart is moved, all five zang and all six fu are shaken. Not troubled. Shaken. The word is physical and it is chosen. |
| 68 | Dr-Qi (Vesper) — the chain | When they are shaken, the great vessels respond. When the vessels respond, the fluid road opens. And the road being open, the tears come out. Six links, in order, and not a single one of them is skipped. |
| 69 | Arthur (V.O.) — chain of custody | That is a chain of custody for a tear. It starts at an emotion, ends at a fluid, and never leaves the body. Whatever else this chapter is, at this moment it is not superstition. |

**VISUAL:** Fan-di sets the fan down on the lacquer table. Deliberately, without
looking at it. **It does not appear in his hand again for the remainder of the
episode.** Hold the shot of the table.

| Block | Beat | Narration |
|---|---|---|
| 70 | Fan-di (Xavier) — the admission | I have not set this fan down in eleven years. I am setting it down. My mother died in the spring and I have not wept once, and I would like to know whether that means the road is shut. |

**ON-SCREEN TEXT — block 71.** Card: **故命曰奪精**.

| Block | Beat | Narration |
|---|---|---|
| 71 | Dr-Qi (Vesper) — what the text says | The chapter does not answer that, and I will not pretend it does. What it says next is this. Weep, and do not stop, and the fluid is exhausted. The essence is not watered. The eyes see nothing. |
| 72 | Arthur (V.O.) — this is false | It names that condition the robbing of the essence, and it is a beautiful phrase attached to a false claim. Crying does not drain a finite supply, and weeping does not take your eyesight. |
| 73 | Arthur (V.O.) — what is true | What is true is stranger. We make three different kinds of tear, and only one of them has anything to do with feeling. Why humans weep from emotion at all is, once again, unsettled. |
| 74 | Dr-Qi (Vesper) — what it was for | Then let me tell you what the wrong answer is doing. It is treating grief as an event with a cost, paid in something the body actually holds. That is not a metaphor to them. That is accounting. |
| 75 | Arthur (V.O.) — the sigh | One question left in this act, and it is the one the chapter gets closest to right. When a person sighs — the long breath drawn and let go — what qi brings it about? |
| 76 | Dr-Qi (Vesper) — the cords | Worry and brooding draw the cords of the heart tight. When those cords are tight, the road of qi narrows. Narrowed, it does not run freely. And so one sighs, to stretch it open and let it out. |
| 77 | Arthur (V.O.) — two claims | Two claims there. Sighing keeps company with worry. And a sigh is for opening something that has closed. Both of those are roughly what the modern account says, and that is the chapter's best score. |
| 78 | Arthur (V.O.) — what a sigh does | A spontaneous sigh reinflates parts of the lung that have quietly collapsed, and restores its stretch. There is a small cluster of cells in the brainstem whose job is to generate them, every few minutes. |
| 79 | Arthur (V.O.) — act out | So: something constricted, and a breath that opens it. Right shape, right company, wrong organ. It is the lung, not the cords of the heart. The closest this chapter comes, and still a miss. |

---

# ACT IV — *The Twelve* · blocks 80–95 · 13:10–15:50

**SOUND:** The sustained note lifts. The brush ticking returns, faster than in Act
II.
**VISUAL:** Light comes back up in the hall. The progress bar has nine cartouches
filled and three empty, and the camera makes a point of it.

| Block | Beat | Narration |
|---|---|---|
| 80 | Arthur (V.O.) — limpness | Three questions left, and they get stranger as they go along. Question ten. When a person's body goes slack — the limb that hangs heavy and will not answer — what qi brings that about? |
| 81 | Dr-Qi (Vesper) — the cascade | If the stomach is not full, all the vessels are empty. If the vessels are empty, the sinews go slack and idle. And if the sinews are slack, then effort spends something that cannot be paid back. |
| 82 | Arthur (V.O.) — four conditionals | Four conditionals, chained. Empty stomach, empty vessels, slack sinews, a debt that cannot be settled. It is the most machine-like answer in the chapter, and every single link is stated as an if. |
| 83 | Fan-di (Xavier) — the ears | Question eleven, and I have wanted to ask it for years. At night, when the palace is quiet, my ears ring. There is nothing there. Nobody else hears it. What is making a noise inside my head? |
| 84 | Dr-Qi (Vesper) — the same premise | The ears, exactly like the eyes, are where the great vessels gather. So when the stomach is empty, those vessels are depleted. Being depleted, they drain downward. And where a vessel has run dry, the ear rings. |
| 85 | Arthur (V.O.) — simply wrong | This one is simply wrong, and we will not soften it. Ringing in the ears is generated in the hearing pathway, usually after damage further out. It has nothing to do with an empty stomach. |
| 86 | Fan-di (Xavier) — the tongue | Last one, and it is the one that has always bothered me most. Sometimes a man bites his own tongue. Not carelessly. His own jaw, his own tongue, and somehow he still manages to ambush himself. How? |
| 87 | Dr-Qi (Vesper) — out of turn | Qi turns back and runs upward, and the vessel qi arrives out of turn. When shaoyin qi arrives, you bite the tongue. When shaoyang arrives, the cheek. When yangming arrives, the lip. Each one has its place. |

**VISUAL:** Lei-Gong, still standing, works it out on his fingers — tongue, cheek,
lip — and stops.

| Block | Beat | Narration |
|---|---|---|
| 88 | Lei-Gong (Zane) — the test | Tongue, cheek, lip. So if I bite my cheek it is shaoyang, and if I bite my lip it is yangming, and there is no version where I have simply been chewing and thinking about something else. |
| 89 | Arthur (V.O.) — the shape of it | He has found the flaw. Biting your tongue is a timing error between jaw and tongue, nothing to do with channels. But look at the shape of the wrong answer: something arrived out of turn. |

**ON-SCREEN TEXT — block 90.** Card: **凡此十二邪者**. The panel fills with all
twelve characters at once, arranged in a grid.

| Block | Beat | Narration |
|---|---|---|
| 90 | Arthur (V.O.) — that is twelve | That is twelve. Yawn, hiccup, sob, shiver, belch, sneeze, slackness, weeping, sigh, drooling, ringing ears, and a bitten tongue. And now the chapter does the thing that makes it more than a list. |
| 91 | Lei-Gong (Zane) — the count | Twelve. I counted. And I will say the part nobody has said, which is that eleven of those are things a body does at you, and the twelfth is the one where the body does it to itself. |
| 92 | Dr-Qi (Vesper) — the openings | All twelve of these are strange qi, running into the hollow openings of the body. That is where they go. The mouth, the nose, the ears, the eyes. Everywhere a body is open, something is getting in. |

**ON-SCREEN TEXT — block 93.** Card: **皆為不足** — four characters, alone, held.

| Block | Beat | Narration |
|---|---|---|
| 93 | Arthur (V.O.) — the sentence | And then one more clause, which is the sentence the whole chapter has been walking toward. Wherever the trouble is, in every case, something is missing. Not an excess of anything. Something absent. |
| 94 | Dr-Qi (Vesper) — what it costs | Understand what that costs him to say. Twelve separate answers, and then a single line claiming they all share one cause. That is the moment an anthology of riddles turns into a theory of the whole body. |

**VISUAL:** On the grid of twelve, one character — 嚏, the sneeze — quietly lifts
out of alignment and sits slightly proud of the others. Nobody on screen reacts.

| Block | Beat | Narration |
|---|---|---|
| 95 | Arthur (V.O.) — the seam | And it is at exactly that moment that it breaks. Go back seven minutes. The sneeze was explained by qi being harmonious, and abundant, and running freely. That is not something missing. Nobody noticed. |

---

# ACT V — *Still No Answer* · blocks 96–108 · 15:50–18:00

**SOUND:** Everything drops away except room tone. The guqin bed is out from block
96 and does not return.
**VISUAL:** Back to the doors that closed in block 4, seen from inside. Still shut.

**ON-SCREEN TEXT — block 96.** Card: **論不在經者**.

| Block | Beat | Narration |
|---|---|---|
| 96 | Arthur (V.O.) — the first line | One line remains, and it is at the beginning, not the end. Before he answered anything, the physician said this: as for what is not in the classics, allow me to set out its method. |
| 97 | Dr-Qi (Vesper) — a category | That is not modesty. It is a category. There was a canon, and then there was everything the canon had no room for, and the second was kept alive by teachers saying it out loud to students. |
| 98 | Arthur (V.O.) — the paradox | Which leaves the chapter in a very strange position. It is a written record of the things too small to write down. The moment someone wrote it, the category it describes stopped containing it. |
| 99 | Arthur (V.O.) — right | So the scorecard. They were right that yawning belongs to the hinge between sleep and waking. Right that sighing keeps company with worry. Right that a full stomach sets off hiccups. Three real observations. |
| 100 | Arthur (V.O.) — wrong | And they were wrong about every mechanism underneath them. Wrong about the ears. Wrong that weeping costs you your sight. Wrong about the channels and the tongue. The looking was good. The explaining was not. |
| 101 | Arthur (V.O.) — still open | And the first question is still open. Not partly open. Open. Why we yawn is genuinely unresolved, and the man who asked it first would find that far more interesting than an answer. |

**VISUAL:** Fan-di, at the table, with the fan still lying where he put it in block
69. He does not pick it up.

| Block | Beat | Narration |
|---|---|---|
| 102 | Fan-di (Xavier) — the mistake | Then I will say the thing I have been avoiding. I cleared the room. I sent every living person out of it before I asked, because I did not want to be seen asking. And that was the mistake. |
| 103 | Arthur (V.O.) — contagion | Here is what a cleared room cannot show you. Yawning is catching. See one, and you are far more likely to do it. It is documented in humans, in chimpanzees, and in dogs watching people. |
| 104 | Arthur (V.O.) — and unexplained | Children do not catch it before about four or five. Why any of this happens is, once more, unknown. It is the most conspicuous fact about yawning, and it takes two people to exist. |
| 105 | Dr-Qi (Vesper) — one body | And every answer in this chapter has one body in it. One person, one set of channels, one quantity of qi going up or coming down. There is no place in that system for what you catch from someone else. |

**VISUAL:** Lei-Gong, alone in frame for the first time, in front of the closed
doors.

| Block | Beat | Narration |
|---|---|---|
| 106 | Lei-Gong (Zane) — the report | I have done it eleven times since we started. Nobody has explained a single one of them, and every one of them happened because somebody else in this room did it first. That is my whole report. |
| 107 | Arthur (V.O.) — the close | You have likely yawned in the last eighteen minutes, and nobody can tell you why. An emperor sent his court outside to ask. The one thing he could not ask was why we do it together. |
| 108 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we say plainly, every time, where the evidence does not support it. |

---

## ON-SCREEN TEXT cards — the exception to text-free clips

Every other block is **text-free**; captions come from the tracked sidecar. These
are the exception, and the reason is structural: `assemble_final.sh` has **no
text-overlay parameter**, so a quotation card carries no text unless the text is
in the clip.

**Every card block still needs a voice take, and it must clear 8.6s like any
other** — a silent card fails the assembler's narration-per-window assert
(`blocks [..] have NO narration in their windows`). All of these are narrated
over, and that narration is in the act tables above.

> **The first column here reads `Block NN`, not a bare number, and that is
> deliberate.** A table whose first cell is a bare integer has the same shape as a
> narration row. This one sits after block 108 so it cannot truncate the sidecar,
> and the prefix removes the collision for good. Apply the same rule to any
> numbered table added to this document later.

| Card block | Card | Gloss |
|---|---|---|
| Block 7 | 靈樞·口問 | the citation — **Lingshu 28**, never a bare "Chapter 28" |
| Block 10 | 人之欠者，何氣使然 | when a person yawns, what qi brings it about |
| Block 16 | 陰陽相引，故數欠 | yin and yang draw against one another, and so one yawns |
| Block 33 | 人之噦者，何氣使然 | when a person hiccups, what qi brings it about |
| Block 44 | 一曰 | **another says** — two characters, held alone |
| Block 49 | 陽氣和利，滿於心，出於鼻 | yang qi harmonious and free, filling the heart, issuing from the nose |
| Block 66 | 口鼻者，氣之門戶也 | the mouth and nose are the gates of qi |
| Block 71 | 故命曰奪精 | and so it is named the robbing of the essence |
| Block 90 | 凡此十二邪者 | all these twelve — with the twelve riddle characters in a grid |
| Block 93 | 皆為不足 | in every case, something is missing |
| Block 96 | 論不在經者 | as for what is not in the classics |

*(Eleven quotation cards. Block 8 is the series title card and carries no
classical text, so it is not listed here. Block 108 is the disclaimer plate, whose
text is hand-added at edit time like all other on-screen text.)*

**Block 90 is the highest-risk card in the episode and needs naming separately.**
It shows all twelve riddle characters at once — 欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息
涎下 耳鳴 自齧舌 — in a grid a viewer can count and check, and block 95's payoff
depends on **嚏 being individually identifiable** so it can lift out of alignment.
A generated grid with one glyph wrong destroys both the count and the payoff.

**Generated Chinese glyphs are unreliable and cannot be checked from this host** —
the CDN has been blocked on every cut for a long time. Two options, and it is a
production decision, not a detail: generate the card blocks as **plain plates and
add the characters at edit time**, or generate them with text in-frame and have a
human verify every glyph before the cut ships. **Default to plates plus edit-time
text**, and treat blocks 7, 90 and 93 as non-negotiable cases of it — the
citation, the countable grid, and the four characters the whole chapter turns on.

---

## Source mapping — translation § → blocks

Sections are those of `inner-canon-ch28-translation-v1.md`.

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | 辟左右 — the attendants dismissed | 4, 5, 102 |
| §1 | 避席再拜 — the physician rises and bows twice | 6 |
| §1 | 願得口問 / 此先師之所口傳也 — oral transmission | 7, 97 |
| §1 | 論不在經者，請道其方 | 96, 98 |
| §2 | 人之欠者，何氣使然 | 10 |
| §2 | 衛氣晝日行於陽，夜半則行於陰 | 11, 12 |
| §2 | 陰者主夜…陽者主上，陰者主下 | 13 |
| §2 | 陰氣積於下…陽引而上，陰引而下 | 15 |
| §2 | 陰陽相引，故數欠 | 16, 17 |
| §2 | 陽氣盡，陰氣盛，則目瞑 | 21 |
| §2 | 陰氣盡而陽氣盛，則寤矣 | 22 |
| §3 | 穀入於胃，胃氣上注於肺 | 34 |
| §3 | 故寒氣與新穀氣…復出於胃，故為噦 | 35, 36 |
| §6 | 寒氣客於胃…復出於胃，故為噫 | 42, 43 |
| §6, §7, §15 | **一曰** — *another says*, all three occurrences | 44, 45, 46 |
| §7 | 陽氣和利，滿於心，出於鼻，故為嚏 | 49, 50 |
| §11 | 胃中有熱則蟲動…廉泉開，故涎下 | 55, 56 |
| §4 | 陰氣盛而陽氣虛…故為唏 | 58, 59 |
| §4 | the 唏 reading dispute | 60 |
| §5 | 寒氣客於皮膚…故為振寒寒慄 | 61, 62 |
| §9 | 心者，五藏六府之主也 | 64 |
| §9 | 目者，宗脈之所聚也，上液之道也 | 65 |
| §9 | 口鼻者，氣之門戶也 | 66 |
| §9 | 悲哀愁憂則心動…五藏六府皆搖 | 67 |
| §9 | 宗脈感則液道開…故泣涕出焉 | 68, 69 |
| §9 | 泣不止則液竭…故命曰奪精 | 71, 72 |
| §10 | 憂思則心系急…故太息以伸出之 | 75, 76 |
| §8 | 胃不實則諸脈虛…故為嚲 | 80, 81, 82 |
| §12 | 耳者，宗脈之所聚也…故耳鳴 | 83, 84, 85 |
| §13 | 此厥逆走上，脈氣輩至也 | 86, 87, 89 |
| §13 | 少陰氣至則齧舌，少陽氣至則齧頰，陽明氣至則齧唇 | 87, 88 |
| §14 | 凡此十二邪者 | 90, 91 |
| §14 | 皆奇邪之走空竅者也 | 92 |
| §14 | 皆為不足 | 93, 94, 95 |
| §15 | the treatment recapitulation | **deliberately excluded — see below** |

**§15 is excluded in its entirety, and so is every needling clause in §2–§14.**
That is a compliance decision and a content decision at once. The chapter closes
each of its twelve answers with a prescription (*drain foot shaoyin, supplement
foot taiyang*), and §15 is nothing but prescriptions. **Not one of them appears in
this script, in the shot list, or on any card.** They are translated in the
translation file, marked `[Needling — not used in the episode]`, and stay there.
Losing them costs the episode nothing: the riddles are the content, and the
prescriptions are the part that would reclassify an $9–15 RPM curiosity episode as
symptom-and-remedy content.

**§14's deficiency signs are also excluded** — the swimming eyes, the tipping
head, the rumbling intestines, the withering limbs. They are a *separate* list
from the twelve, and folding them in would break the count that blocks 90, 91 and
95 depend on.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam, never jade.

**One count reconciliation, and it is a correction to the slate.** `docs/Chronicle
of Balance Top20 Chapter Slate.md` describes this chapter as *"eleven rapid-fire
questions"*. **The text says twelve** — 凡此十二邪者 — and §15 recapitulates
twelve. Blocks 90 and 91 both state twelve, and the block-90 card shows twelve
characters. The slate is wrong on this point and this document is the correction.

**Two translation choices this script depends on, both argued in the translation
file.** §3's 噦 is **hiccup**, not "sighs" (which would collide with §10); §8's 嚲
is **limpness**, not "drools" (which would collide with §11). The supplied English
in the source PDF makes both errors, and either one reduces the twelve to eleven
on screen while the card still says 十二.

**Dramatic material not in the source, flagged as invention:** the forty
ministers and the interrupted proclamation (block 3); Fan-di's envoy at the
audience (33); the fan and the moment it is set down (69–70, 102); Fan-di's mother
(70); Lei-Gong being present at all, his catching every yawn, and all five of his
blocks; the tally of eleven catches (106); the silk panel and its progress bar.
**The classical text has no scene whatsoever** — 黃帝閒居, *the Yellow Emperor at
leisure*, is the whole of the staging, and there are exactly two speakers with no
characterisation between them. Everything attributed to *the text* above is in the
translation; everything else is dramatisation, and the compliance notes treat it
as such.

**Two interpretive claims that are ours, not the text's, and are hedged in the
narration rather than only here:**

- **That 皆為不足 fails on the sneeze** (blocks 51, 95). The chapter does not raise
  the contradiction and no commentator is cited for it. It follows directly from
  §7 against §14 and a viewer can check it, but it is a reading, and block 95
  states it as an observation about the text rather than as received scholarship.
- **That the single-body framework is what made contagion invisible** (blocks
  102–105). The text never says this. It is an argument from what the framework
  can represent, and Dr-Qi's block 105 phrases it as *there is no place in that
  system for it* rather than as a historical claim about why nobody noticed.

---

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run for
this cut.** The figures below are a planning preflight, not a priced gate — call
`balance` and `get_cost: true` live before spending anything.

### This does not fit the credit balance. Say so before anything else.

Last recorded balance: **862.6** (after the ch1 v5 run, 2026-08-04).

| Clip model / tier | Credits/clip | × 108 blocks | vs 862.6 |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,080** | **over budget** |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~2,700 | ~3.1× balance |
| `gemini_omni` 720p | 30 | ~3,240 | ~3.8× balance |
| `seedance_2_0` 1080p | 90 | ~9,720 | ~11× balance |

Everything else is trivial by comparison: a vertical chapter key at **2** plus a
landscape sibling at **2**, ~108 voice takes at **~0.8** ≈ 86, assembly **free**,
captions **free**. **Clips are essentially the entire bill, so the model choice is
the budget.**

**An 18-minute episode does not fit at any tier — not even an all-draft pass.**
Three ways forward, and it is a decision, not a detail:

1. **Top up** before starting.
2. **Cut the runtime.** 90 blocks (15:00) at 480p is ~900 — still over, and with
   nothing left for re-takes. See the runtime levers for which ranges drop cleanly.
3. **Produce act by act across billing periods**, assembling each act as its own
   `assemble_final.sh` run. See *Assembly strategy* for the join problem this
   creates.

**This is slot 1 of the publish sequence**, which is an argument for spending
properly on it rather than for economising: the slate's whole case for putting this
chapter first is that early algorithmic classification is sticky. A cheap-looking
first episode is the one mistake that cannot be corrected later in the slate.

**Budget re-takes separately and generously.** On ch1 v5 one block took fourteen
takes and ~11 credits. At 108 blocks even a 20% re-take rate is ~17 extra credits
of voice — cheap — but the *time* cost is the real one, and it is what makes a
whole-episode single-pass assembly risky.

### Voice measurement — required before ~108 takes

`SKILL.md` is explicit, and two things make it non-optional here:

- **Zane has never been measured at length.** The only figure on record is a
  five-word line at 2.3–2.6s, where pause overhead dominates and no words/sec can
  be derived. **Lei-Gong has five blocks in this script (25, 52, 88, 91, 106)**,
  each written at 36–38 words provisionally. Under a hard 8.6s floor an unmeasured
  voice is a render failure, not a rounding error.
- **Arthur, Xavier and Vesper were measured on trailer-register lines.** This
  script asks Vesper for sustained explanatory paragraphs across 34 blocks, which
  is not what she was measured on — her one measured take is a single trailer beat.

**Measure one full-length take per voice through the assembler's own gate before
generating anything else**, and write the results back into `SKILL.md`'s step-3
table:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

Four takes, ~3.2 credits. A mis-sized script is 108.

**Named fallback if Zane will not hold the window.** Blocks 25, 52, 88 and 91 can
be **reassigned to Arthur as reported speech** without changing the block count,
the act boundaries or the shot list — recast as *"The boy behind the pillar had
yawned four times and had not been tired when he came in"* and so on.
**Block 106 is the one that cannot be recast**, because its force comes entirely
from the person delivering the tally being the person who caught every yawn on
screen. If Zane fails measurement, block 106 becomes an Arthur block **and the
episode loses its best closing beat** — so decide this **before generating the
cold open**, not at Act V.

### Style key — needs a new chapter key and a 16:9 sibling

The whole chained lineage is 9:16 and belongs to chapter 1. This chapter needs its
own key, and longform additionally needs a **landscape variant**.

1. Derive the **chapter 28 vertical key** by chaining off the ch1 head
   `4b6f7106-67da-4d1a-a553-c58ba90ac43f`, passing its **job ID** as the reference
   and swapping only the motif. Motif: the three-character series key with an
   **empty throne-room doorway standing open behind them**, and **twelve small
   unlit paper lanterns** hanging in two rows above. `nano_banana_pro`, 9:16
   768×1376.
2. Derive the **16:9 sibling** from *that* key by passing its job ID as the
   reference and changing only the framing.

Record both as their own lineage entries — **do not overwrite the vertical key**,
the trailer needs it — and promote the vertical key to `SKILL.md` step 1 as the new
head with its motif. `medias[].value` takes a `media_id` or a prior `job_id` only;
a `https://` URL there fails.

### Clips

Not generated. Model and tier from the step-0 gate. 10s, the landscape key
attached to every clip, `aspect_ratio: "16:9"` **and** "landscape 16:9 framing"
written into every prompt text — the double declaration has held on this model
across three cuts, and a full set of clips has previously come back in the wrong
orientation without it.

- **`generate_audio: false` on every clip.** A correctness requirement, not a
  saving: the assembler mixes clip audio in at 0.12 under the voice rather than
  discarding it, so a clip generated with native audio is **audible in the finished
  cut** and the only fix is regenerating the block.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every
  clip. **Act III is lit by a single lamp against flat black for twenty-three
  consecutive blocks**, which is the heaviest dim run this repo has attempted, and
  it is the most frequent trigger by far. One id per call, so budget a retry for
  each newly-triggered preset.
- **Keep audio vocabulary out of clip prompts** — *drum*, *drone*, *music*,
  *rhythm* — since those are edit-time directions anyway and *rhythm* triggers
  `DROWN IN MUSIC`. **Lei-Gong's hand drum is a prop**: describe it as a small
  hand-held drum resting in his lap, never as something being played. Act II's
  "brush ticking like a metronome" is a SOUND direction and must not reach a clip
  prompt.
- **Generate one clip and check its returned dimensions before the rest** — on any
  model, and especially on the first landscape cut this repo has attempted.
- **Duration ≥ 9.5s and motion from frame 1.** The assembler rejects a clip
  shorter than 9.5s outright and warns on a static open or frozen tail. **The
  exposed blocks are the deliberately still ones**: 44 (two characters alone on the
  panel), 69–70 (the fan on the table), 93 (four characters held), 96 (the closed
  doors), 108 (the plate). Stillness in the staging must not become a frozen frame
  in the clip — give each a slow push, drifting ink grain, or a light change.

### Assembly strategy — decide before generating a single take

**The join is the open problem.** `assemble_final.sh` takes clip/voice *pairs*
against a declared block count and asserts an `N × 10s` output, so an already
assembled act is **not** a valid input to it. Two routes, neither yet run here:

- **Assemble the whole episode in one call** and skip the join. Removes the
  problem, but it is ~216 files to download inside one chained command, in a sandbox
  that is discarded ~10 seconds after the call returns.
- **Concat the act outputs** with our own ffmpeg, outside the sandbox's rules.
  Defensible — the acts are already assembled correctly and a concat of
  equal-geometry MP4s is a lossless remux — but it puts the −16 LUFS normalisation
  per act rather than across the episode. **Check levels at the seams**, especially
  the Act II → III boundary, where the brush ticking stops and the sustained note
  starts, and the Act III → IV boundary where it lifts.

Run episode-scale assembly `background: true` and poll the returned log with `tail`
at least every 60s or the sandbox dies under the job. **Note the opposite lesson at
trailer scale**: ch1 v5 lost a whole run to `background: true` because the transport
call timed out. Foreground for one act only if it finishes inside 120s; measure the
first act before assuming.

**Assemble the cold open plus Act I first (blocks 1–31) and measure how long it
actually takes.** Nothing at this scale has been run through this path.

### Voiceover

Not generated. `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per
block, **one speaker per block** — verified: no block above contains two voices.

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ, and the second is the one that
was gated. A ch1 v5 take logged as "8.50s pass" was 8.497s — 0.103s under the
floor — and stopped the assembly. A take within ~0.2s of either edge is checked
against the number, never eyeballed.

**Append job IDs to this record act by act, before moving on.** The record is the
crash-recovery file; a lost session with unrecorded IDs means paying twice.

**Generated from the parsed narration table, not transcribed by hand.**

| Voice | Blocks | Count |
|---|---|---|
| Arthur | 1, 2, 4, 6, 7, 8, 9, 12, 14, 17, 20, 23, 24, 26, 27, 28, 29, 30, 32, 36, 37, 38, 40, 42, 45, 46, 49, 51, 53, 54, 56, 57, 60, 62, 69, 72, 73, 75, 77, 78, 79, 80, 82, 85, 89, 90, 93, 95, 96, 98, 99, 100, 101, 103, 104, 107, 108 | 57 |
| Vesper (Dr-Qi) | 5, 11, 13, 15, 16, 19, 21, 22, 31, 34, 35, 39, 43, 44, 48, 50, 55, 59, 61, 64, 65, 66, 67, 68, 71, 74, 76, 81, 84, 87, 92, 94, 97, 105 | 34 |
| Xavier (Fan-di) | 3, 10, 18, 33, 41, 47, 58, 63, 70, 83, 86, 102 | 12 |
| Zane (Lei-Gong) | 25, 52, 88, 91, 106 | 5 |

57 + 34 + 12 + 5 = **108**, one take per block, no block with two speakers.

### Captions

Sidecar only; `assemble_final.sh` rejects `--subs` outright. **Build with
`--format 16:9`** — the longform frame is 1280 wide and gives captions roughly
twice the room of the vertical trailer, so a 9:16 build would over-split every cue:

```
node scripts/check_caption_fit.js output/episode-28/inner-canon-ch28-longform-v1.md --format 16:9
node scripts/build_subtitles.js  output/episode-28/inner-canon-ch28-longform-v1.md --format 16:9
```

**No `.srt`/`.vtt` ships with this document yet, by design** — the cues are timed
from take durations that do not exist. Build and commit them with the render.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly. The step-0
  gate is outstanding and is a hard gate.
- **Two style keys are needed and neither exists** — a chapter 28 vertical key and
  its 16:9 sibling. Record both here and promote the vertical one to `SKILL.md`
  step 1 as the new head.
- **The 16:9 decision is unconfirmed** and is ~108 clips to get wrong.
- **Zane is unmeasured at length**; five blocks depend on him and the recast
  fallback above covers four of the five. Block 106 does not survive the recast
  intact — decide before generating.
- **This is the repo's second longform attempt to reach production** (after ch6
  v1, also unrendered), and act-scale assembly timing is still unmeasured
  everywhere. Treat the cold open plus Act I as a shakedown, not a render, and
  write what actually happened here.
- **The CDN is normally blocked from the repo host**, so the finished MP4 usually
  cannot be fetched back for visual QA. The sandbox has its own network access and
  can probe the render next to where it was built — but **a probe is not a
  viewing**. Say which checks actually ran.
- **Source provenance:** the chapter arrived as a user-supplied PDF because
  `ctext.org`, `zh.wikisource.org` and `8bei8.com` are all denied at CONNECT from
  this host. Extraction required decoding the PDF's own ToUnicode CMaps —
  `pdftotext` is not installed and `pip install` is not permitted here. Recorded
  because the next chapter will hit the same wall.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 108.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers — 108 blocks, 1080.0s, act boundaries at 1:30 / 5:10 / 9:20
/ 13:10 / 15:50, end card **17:50 to 18:00**. Not a generic recipe: block
numbering and timecodes differ between versions of the same chapter, and that is
where the mistakes land. Both caption scripts are pure text tools — they read this
document, touch no video, need no network and cost no credits. **Both take a path
relative to the current directory: run them from the repo root, or pass an
absolute path.**

**1. Check captions**, at 16:9, before generating takes. A fix is free at that
point and costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/episode-28/inner-canon-ch28-longform-v1.md --format 16:9
```

**This document exits 0 as written — verified 2026-08-07, every clause fits.**
Worth knowing why, because the vertical cut behaves differently: the script only
reports a clause at all once it exceeds the two-line cap, so the mandated
disclaimer's `known exception` line **does not fire at 16:9**. That clause is
967px against a 1001px single line here, and only overflows on the 720-wide
vertical frame, where it needs three lines. The companion trailer therefore exits
1 on the exception while this document exits 0, and both are correct.

Re-run this after any narration edit. **Exit 1 would be the designed signal, not
a crash** — with the server-burn path gone, an overflow report is a *readability*
finding rather than a render failure, since the sidecar pre-splits wide clauses
and libass margins keep them in frame. Fix at script stage anyway: after recording
it costs a re-take.

**2. Build the sidecar**, at 16:9, after the takes exist and their durations are
in the record above.

```
node scripts/build_subtitles.js output/episode-28/inner-canon-ch28-longform-v1.md --format 16:9
```

On a **copy** of the `.srt`, delete the cues covering **block 108** (everything
from 17:50:00) so the disclaimer is not simultaneously a caption and a card. The
burn copy is blocks 1–107, ending at 17:50.

**3. Burn**, once, over the finished episode — not per act. Nothing is burned at
assembly, so act assemblies carry no captions by construction and there is no
layering to avoid. Run `ffmpeg -version` and `fc-match Anton` **before** starting:
a missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and re-target
`PlayResX/Y` to the episode's **actual returned resolution** first — ffmpeg's
SRT→ASS converter hardcodes 384×288, which scales every style value by roughly
2.5× at 720p and runs the lines off frame. If the assembler returns something
other than 1280×720 (ch1 v5 returned 496×864 from 480×854 clips), scale the five
style values — `Fontsize`, `MarginL`, `MarginR`, `MarginV`, `Outline` — by the
real frame ratio rather than burning the house 16:9 style verbatim.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02,
out at 0:09, over block 1's procession of mouths. At 16:9 `MarginV` is 60, so keep
the lower-third higher than the caption band or move it to the upper third for this
cut. Added by `drawtext` in the burn pass, not in an NLE.

**5. Quotation cards.** If the eleven cards listed above were rendered as **plain
plates** — which is the default — their Chinese text is added here, in the same
`drawtext` pass, at blocks **7, 10, 16, 33, 44, 49, 66, 71, 90, 93 and 96**, each
held for its full 10s window. Timecodes are `(block − 1) × 10s`: 1:00, 1:30, 2:30,
5:20, 7:10, 8:00, 10:50, 11:40, 14:50, 15:20, 15:50. **Verify every glyph against
`inner-canon-ch28-translation-v1.md` before export**, and note that ffmpeg needs a
CJK-capable face here — Anton has no Chinese coverage and renders tofu boxes
silently.

**Block 90 needs two passes and block 95 depends on it.** The grid of twelve
characters arrives at 14:50; at **15:40** (block 95) the 嚏 glyph must lift
slightly out of alignment while the other eleven hold. Build it as twelve
individual `drawtext` filters with their own `y` expressions rather than one
multi-line string, or the lift is not possible.

**6. End card — 17:50 to 18:00** (block 108). Mandated disclaimer verbatim across
three centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
all of Act III (blocks 57–79)** — the act is built on a single sustained note and a
guqin bed under it would fight rather than support. Back in under block 80. **Out
again at block 96 and never returns**: Act V plays on room tone alone, and the
silence is the point. **This cannot be moved to the assembler's `--music` flag**:
`--music-vol` clamps at 0.20, which does land in range, but it mixes one continuous
bed with no dropout window, and this cut needs two.

**Guqin licensing is unresolved** (slate §9, open since Episode 2). Until it is
cleared, score this cut on the trailer model — no guqin — which for this episode
costs less than it would elsewhere, since two of its five acts are scored to
silence by design.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render. The slate rates this
chapter **Very Low**, the lowest on the twenty, and this script is written to keep
it there.

- **Disclaimer** — repo string verbatim: blockquoted at the head of the
  translation, at the head of block 108's narration, on screen as the end card, and
  in the description. Block 108 is extended past the mandated string to clear the
  8.6s floor; **the mandated sentence itself is unaltered**.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim anywhere. **Every needling prescription in the chapter is
  excluded**, and so is the whole of §15. This is the single most important
  compliance decision in the episode: the source closes all twelve answers with a
  treatment instruction, and including any of them would convert a curiosity
  episode into symptom-and-remedy content. Every physiological statement is
  reported as what a text says (*"the chapter says"*, *"in this system"*), and
  blocks 72, 85, 89, 95, 100 state directly that the claims are wrong. **No viewer
  is told to do anything.**
- **The one line that needs watching is block 83**, where Fan-di describes his own
  tinnitus, and **block 85 answers it in the very next block** with the modern
  account and no remedy of any kind. The pair must not be split in any cut. Nothing
  in the episode suggests what to do about ringing ears, and nothing should be
  added at edit time.
- **Mortality / ageing** — **one reference, in block 70**: Fan-di says his mother
  died in the spring and that he has not wept. It is reflective, non-graphic, and
  carried entirely by a man setting down a fan — **portraits, not bodies**, and in
  fact not even a portrait. There is no death imagery in the shot list, no lifespan
  claim anywhere in the episode, and the word *longevity* does not appear in the
  narration at all.
- **Fertility content** — **absent by a deliberate translation choice.** §8's
  行陰用力 is ambiguous and has been read as sexual exertion; the neutral reading
  (*effort*, *exertion*) is used in the translation and in block 81, on the same
  principle applied to 作強 in chapter 6. The alternative reading is not staged and
  is not mentioned on screen.
- **Indulgence / alcohol** — **absent.** Block 33 was written with a state banquet
  and it was changed to an audience with an envoy specifically to keep feast imagery
  out of the shot list. There are no vessels, no pouring and no drinking anywhere in
  the episode.
- **Parasites (§11) are handled, not avoided.** Block 55 says *worms* plainly and
  block 56 explains why the text reached for them. **The shot list carries this
  with objects and brush strokes only** — a slackening ink stomach and a valve
  opening under the tongue — with **no depiction of parasites and nothing
  anatomical**. It is a historical belief being explained, not an image being shown.
- **Supernatural hooks explicitly debunked by the payoff** — the episode's hooks
  are *nobody knows why you yawn* and *one system explains twelve things*. The first
  is a statement about the state of the literature, not a mystery claim, and the
  second is dismantled inside the episode: block 40 (real trigger, wrong organ),
  block 72 (weeping does not blind you), block 85 (the ears), block 89 (the
  tongue), block 95 (the system's own seam), block 100 (the full scorecard).
  **The debunk is distributed across four acts, not deferred to a closing caveat.**
- **The reckoning is the spine, not a coda** — the slate makes this mandatory for
  this chapter, requiring the modern hypotheses to be named. They are: brain
  thermoregulation (29), arousal / state transition (30), the hiccup reflex arc and
  the gill-ventilation hypothesis (37–38), the photic sneeze reflex (53), the three
  tear types (73), the sigh's brainstem circuit (78), tinnitus generation (85), and
  contagious yawning (103–104). **Every one of them is stated as unsettled where it
  is unsettled**, and blocks 27, 28, 53, 73, 101 and 104 say *unknown*,
  *unresolved* or *unsettled* explicitly. The episode never claims modern science
  has the answer either.
- **Title and thumbnail honour the educational payoff** — working title *Why We
  Yawn* (docs slate), on-screen framing *Lingshu 28, Oral Inquiry*. **Banned terms
  checked**: no *longevity*, *live to 100*, *ancient secret* or *anti-aging* in the
  script, the title or the thumbnail direction. **Thumbnail direction:** an
  emptying hall seen from behind the throne, courtiers walking out in a file, no
  faces — *he made them leave before he asked*. Do not use a caricature yawning
  face; it reads as a listicle and undersells the episode's actual claim.
- **Hedge allocation — three characters speak, so this needs recording.**
  **Arthur retains every compliance hedge without exception**: the state-of-
  knowledge statements (27, 28, 101, 104), the *that is not a hit* caution (40), the
  falsity of 奪精 (72), the correction on tinnitus (85), the correction on the
  tongue (89), the seam in the system (51, 95), the full scorecard (99, 100), and
  the disclaimer (108). Dr-Qi carries claims *about the text*, attributed in-line
  and always in the chapter's own voice. Fan-di carries vanity, embarrassment and
  one moment of grief. Lei-Gong carries the experiments. **No compliance hedge
  rests on a character voice.** The nearest exception is block 31, where Vesper
  states the chapter's timing claim was correct — and it is immediately bracketed by
  Arthur's block 32, which separates the two scores.
- **Historical accuracy** — five risks, all handled in-script. (1) The chapter is
  cited on screen as **Lingshu 28**, never a bare "Chapter 28". (2) The count is
  **twelve**, against the slate's eleven; blocks 90–91 and the block-90 card must
  agree. (3) The 唏 reading is **disputed**, and block 60 says so on screen rather
  than presenting our choice as settled. (4) The 皆為不足 contradiction (51, 95) is
  our reading and is phrased as an observation about the text. (5) The single-body
  argument (102–105) is an argument about what the framework can represent, not a
  claim about what historical physicians noticed. **Those hedges must survive the
  edit.**
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload, per the
  slate's §6 open item, which flags this as the project's most under-weighted risk.
  **No character makes a first-person factual assertion about their own
  expertise** — Dr-Qi always reports what the chapter says, never what she knows.
  This matters more on slot 1 than anywhere else in the slate.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: ink mouths, an
  emptying hall, a lacquer table, a lamp, a silk panel, cartouches, a closed door.
  **No restraint or bound-figure imagery**, which has tripped the safety filter here
  before even on innocuous subject matter. No bodies, no injury, no falling figures.
  **Three items to watch at prompt stage:** (a) block 1's non-human mouths must stay
  *brushed and stylised* — an open mouth rendered realistically is the one frame in
  this episode that could read badly; (b) the diagram figures throughout are
  **outlines, never anatomy**; (c) Act III's single-lamp-on-black run is 23
  consecutive blocks and will trigger `IN THE DARK` repeatedly — pre-decline on
  every one of them.

## Runtime levers

Expressed in blocks, since blocks are the unit that costs money. 108 blocks =
18:00; the format floor is 90 (15:00) and the ceiling 120 (20:00).

**Cut to 15:00 (90 blocks) — drop 18 blocks:**

- **Blocks 42–43, 47–48** (the belch and the edict exchange, 4) — the belch is the
  thinnest riddle in the chapter. **Keep 44–46**, which carry 一曰; that is the act's
  actual content and the belch is only its setup.
- **Blocks 61–62** (the shiver, 2) — one-line riddle, one-line commentary. Costs
  block 60's supporting argument for the 唏 reading, so **move that reasoning into
  60** if these go.
- **Blocks 80–82** (limpness, 3) — the least memorable of the final three, and
  block 90's list still names it.
- **Blocks 12, 14, 17, 20** (Act I elaborations, 4) — the mechanism survives on
  11, 13, 15, 16. This is the cut that costs the most and shows the least.
- **Blocks 34, 39** (hiccup setup and the vagus half-hit, 2) — but **not 40**,
  which is the hedge. Dropping 39 alone is clean; dropping 40 alone is a compliance
  regression.
- **Blocks 65, 74, 97** (3 assorted elaborations).

**Cut to 16:30 (99 blocks)** — the first three groups only (9 blocks). This is the
cut to make if the budget forces one: it costs no compliance content, no act
boundary, and no beat that any later block refers back to.

**Stretch to 20:00 (120 blocks) — add 12.** Unlike chapter 6, this chapter has
material left over, so the additions are mostly *source* rather than commentary:

- **Act II, +3** — §14's deficiency signs at the three levels of the body (上氣 /
  中氣 / 下氣), which this cut excludes to protect the count of twelve. If added,
  they must be staged explicitly as **a separate list**, after block 92, never
  folded into the twelve.
- **Act I, +3** — the wider 衛氣 doctrine: fifty circuits a day, the twenty-five by
  day and twenty-five by night, and how the chapter's clock connects to the rest of
  the canon. Strongest addition intellectually and the most on-thesis.
- **Act III, +2** — the reception history of 奪精: how a wrong claim about weeping
  and eyesight persisted, and what that says about which sentences survive.
- **Act V, +4** — contagious yawning at length: cross-species contagion, the
  onset age, the contested empathy correlation, and why the two-body case is hard
  to study at all. This is where the episode is thinnest against its own payoff.

**Pairs that must not be split**, in any cut: **39+40** (the half-hit and its
hedge), **71+72** (the 奪精 claim and its falsification), **83+85** (the tinnitus
question and its answer — splitting this one leaves a symptom described with no
correction, which is a compliance failure, not an editorial choice), **93+95** (the
unifying claim and its seam), **103+105** (contagion and why the framework cannot
hold it), and **69+70** (the fan is set down on 69's shot and 70 is the reason).
**Block 108 is not a lever.**

**Act boundaries are re-render units.** Every cut listed above stays inside a
single act, so no act boundary moves and no act needs recomputing. Renumbering
blocks after a cut means regenerating the manifest — do it once, at the end, never
mid-production.
