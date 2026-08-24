# The Emperor's Inner Canon — Lingshu 28 Longform v3 (15 minutes)

**口問篇第二十八 · Twelve Small Rebellions**

**RENDERED 2026-08-24, draft tier.** 90 blocks × 10s, asserted by the assembler.

**Final video — captions burned, 1280×720, 900.516s (15:00), 24fps, MP4:**
`https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/cd3c2c19-f32d-4673-85c8-ea69b9e4f05f.mp4`

Assembled from `seedance_2_0_mini` 480p clips at **864×496**, upscaled to 1280×720
at the caption burn per the house rule in `build_subtitles.js`. Licensed guqin bed
mixed by the assembler at **−13.50 dB** under the speech. Audio is stream-copied
through the burn, so the delivered soundtrack is the assembler's own mix untouched.
**CDN links expire — archive the MP4 by hand.** Job IDs, whole URLs, credit spend
and assembly flags are in the *Production record* below.

> **Not yet publishable, for one reason:** the guqin bed is **CC BY-SA 3.0** and the
> ShareAlike term is unresolved. See *Deliverables → Music*. Everything else the
> pipeline owes this cut is delivered; the remaining items are the hand-added
> on-screen text listed in *Finishing steps*.

**16:9 landscape is mandated, not inferred.** `CLAUDE.md` § Structure: *"Render
trailers in 9:16 vertical format; long form in 16:9 landscape format."*

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
entirely (通評虛實論). Both halves of the canon run to eighty-one chapters and are
numbered separately, so a bare "Chapter 28" sends a checking viewer to the wrong
text about half the time.

Source translation: **`inner-canon-lingshu28-translation-v2.md`** — the v2
rendering, which tracks the grammatical agent of every answer, and that is this
cut's entire spine. **It is not in the working tree**: it was deleted in commit
`b77cd86` and survives only in history, so read it with
`git show b77cd86^:output/lingshu/ch28/inner-canon-lingshu28-translation-v2.md`.
Inherited from v2, which cites it the same way — see *Reproduction notes* item 10. Companion trailer: `inner-canon-lingshu28-trailer-v2.md`,
rendered 2026-08-08, whose look, cast and tally-board motif this episode extends.

**Slate position.** Rank **1** of the twenty in `docs/Chronicle of Balance Top20
Chapter Slate.md`, and **slot 1** of the publish sequence — the channel's first
episode.

---

## Why this is v3, and what changed from the v2 script

**v3 is the renderable cut of the v2 script.** It is a new file rather than an
edit because `CLAUDE.md` § Git conventions requires one, and because two changes
to the narration were structural rather than cosmetic:

1. **Runtime cut from 19:00 to 15:00** — 114 blocks down to 90, the policy floor.
   Taken on the v2 document's own *Runtime levers*, with three corrections noted
   under *Runtime levers* below.
2. **Eighteen lines re-sized to the measured voice windows.** The v2 cast table
   was written against `SKILL.md`'s 2026-08-04 rates, which have since been
   re-pooled twice. All five Lei-Gong blocks and twelve of thirteen Fan-di blocks
   were **below the assembler's 8.6s floor as written** and would have hard-failed
   the run.

Everything else — the thesis, the act structure, the dramatic engine, the
compliance posture, the shot language — is carried over unchanged.

---

## What this episode argues

**The spine is a fact about the text that anybody can check: for ten of the twelve
riddles, the answer has no agent in it.**

The Emperor asks 何氣使然 twelve times — *what qi makes it so*. Not *who is doing
this*. And the answers oblige: the subject of each is a substance, a quantity or
an hour. Qi travels because it is midnight. Cold lodges as a guest. Grain arrives,
collides, reverses. Nothing decides. Nothing is in charge.

Then, at riddle eleven, the chapter writes **心者，五藏六府之主也** — *the heart is
the ruler of the five zang and the six fu* — and traces weeping back to 悲哀愁憂,
sorrow and grief and care and worry. Riddle twelve does it again with 憂思, worry
and brooding, and the long sigh. **Two riddles out of twelve have an author, and
both of them are about feeling.**

Then §15 quietly retro-fits two more rulers — 腎主為欠, *the kidney governs
yawning*; 肺主為噦, *the lung governs hiccup* — onto riddles that were answered
without any ruler at all. Neither attribution appears in §2 or §3. **The seam is
visible in the chapter's own last section.**

Four things follow, and they are the episode:

1. **A body that is mostly ungoverned** is a genuinely radical thing for this
   canon to describe, and it is described without a god, a curse, an ancestor or a
   moral fault anywhere in it.
2. **The same canon says the opposite.** Su Wen 8 《靈蘭祕典論》 builds the body as
   a government of twelve offices where nothing happens without an officer. One
   canon, two bodies.
3. **The unifying claim does not fit its own list.** 皆為不足 says all twelve are
   cases of something missing; §7 explained the sneeze by qi being harmonious and
   abundant. Nobody notices.
4. **The modern position is messier, not tidier.** There is no single system
   running the involuntary. The chapter's real error was not guessing wrong twelve
   times; it was expecting one answer.

**The dramatic engine:** Fan-di convenes a formal **inquiry** — not into a person,
into his own body. Twelve counts of insubordination. He is prosecutor in the cold
open and defendant by Act III, and the episode's structural form is that reversal.
**The fan is the tell** — snapped open he is performing, set down he means it. He
sets it down once, in Act III, and never picks it up.

**Lei-Gong keeps the tally.** He is not supposed to be in the room. He counts his
own yawns, out loud, at four points across the episode, and the last count is the
payoff: eleven yawns, every one caught from somebody else, and not one of them
explicable by anything in the chapter.

**The closing argument:** most of you runs without you, and that is the mercy in
it. A body that needed a ruler for all twelve would be a worse body.

---

## Cast and voice

| Role | Voice | `voice_id` | Function in this episode |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | the grammar, the scorecard, **every compliance hedge** |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the Huangdi role — convenes the inquiry, ends up in the dock |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the Qi Bo role — answers, never wins, and holds the last word back |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | keeps the tally; is right four times |

`seed_audio` presets, `speech_rate` 55 for all four. **One speaker per 10s
block** — the assembler takes exactly one audio per block, so every speaker change
is its own block. No block below contains two voices.

**Dr-Qi never sounds like she is winning** (`CLAUDE.md`). In this cut she is
holding something back for thirteen minutes: she knows from the first riddle that
the inquiry cannot find a defendant, and she does not say why it does not matter
until block 83. The more Fan-di prosecutes, the stiller she gets.

**Fan-di's arc is the structural form.** Prosecutor (cold open, Act I), then
increasingly uneasy examiner (Act II), then witness against himself (Act III), then
the one who withdraws the charges (Act V). Block 62 is the pivot and it is where
the fan goes down.

**Lei-Gong counts, and the counts are load-bearing**: four yawns at block 20,
eleven at block 85. That arithmetic must survive any edit — see *Runtime levers*.

### Writing constraint — the window, and the wrong number this script was sized to

**The assembler gates on 7.8–9.5s of detected speech per block**, both edges hard
errors, computed as `SPEECH_MIN = --clip-seconds − 2.2` and
`SPEECH_MAX = --clip-seconds − 0.5`. That is the operative window. **`SKILL.md`
said 8.6–10.0s and this script was written to it, which is why v3 cost what it
did** — the ceiling is 0.5s *lower* than documented, so lines sized for a ~9.3s
target ran long and **first-pass yield was 39 of 90**. The correction, its
provenance in the assembler's own dated comments, and the re-measured rates are in
*Production record → Voiceover*; the skill has been amended.

Word budgets, **re-measured on this run's own 90 first-pass takes** — a far larger
sample than the 29 the skill had pooled, and the numbers a v4 should be written to:

| Voice | Measured rate | Words per block at 7.8–9.5s | Target | Blocks here |
|---|---|---|---|---|
| Arthur | 3.70 w/s | **29–35** | 32 | 41 |
| Xavier (Fan-di) | 4.34 w/s | **34–41** | 38 | 13 |
| Vesper (Dr-Qi) | 3.91 w/s | **31–37** | 34 | 31 |
| Zane (Lei-Gong) | 5.71 w/s | **45–54** | 49 | 5 |

**The word counts printed against each block below are the delivered ones**, after
re-sizing. They are *not* uniformly inside the windows above: twenty blocks sit
outside their voice's band and were kept because the take measured in window
anyway. **Word count is the estimator; `speech_metrics.sh` is the gate.** Re-sizing
a block purely on its word count would have discarded good audio.

**Zane was the one voice the skill had approximately right**, and the one whose
five blocks all landed without a rewrite. The v2 script had him at 34–39 words on
an `UNMEASURED` guess; he is the fastest voice in the cast and a 35-word Zane line
measures **6.23s, well under the floor**. That alone forced the rewrite of his
five blocks.

Four consequences shape every line below, and none of them is stylistic:

- **The short interjection is dead.** Under a 7.8s floor there is no quick jab, and
  `--clip-seconds` moves the window rather than widening it. **Every character line
  here is a full paragraph.** This bites hardest on the inquiry conceit: a courtroom
  runs on short exchanges, and none are available, so Fan-di's prosecution is
  written as a series of statements rather than as cross-examination.
- **One-word fragments are the opposite of a shortcut.** They make `seed_audio`
  read slowly and dramatically: block 57 at 33 words returned **17.322s** with two
  fragments in it, and **8.538s** at 31 words without them. Do not pad a thin line
  with *"Stop there. Ruler."* — it will overshoot by seconds, not tenths.
- **The run-to-run spread exceeds the window.** Identical text on block 88 came
  back at **7.396, 8.264, 15.688 and 17.073s** across four rolls, on a window 1.7s
  wide. Re-roll once before rewriting, and submit two or three variants at once for
  any block that has already missed twice — that is what closed the last eight.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s. **No line here hands a voice a comma-separated list of three or
  more items** — measured at a 3.1s penalty at fixed word count. Block 77 is the
  visible cost of obeying this: removing its four-item list fixed the take and left
  the one caption clause in this cut that is over budget.

### How to read this script

`CLAUDE.md` asks for **SOUND / VISUAL / CHARACTER** blocks; `build_subtitles.js`
needs a **three-column narration table**. The two are combined rather than
duplicated, because two copies of 90 lines is how they drift apart:

- **The narration tables below are canonical for words.** Blocks run continuously
  **1–90 across the whole episode**, never per-act; the assembly manifest is flat
  and act-local numbering produces off-by-one errors that are expensive to find in
  a 15-minute render.
- **The SOUND / VISUAL / direction prose between them is canonical for picture and
  performance.** It never restates a line.
- **The speaker is named in the beat column**, not a fourth column — the parser
  reads exactly three, and a fourth would leak into the caption text.

> **Do not insert a table whose first cell is a bare integer anywhere between
> blocks 1 and 90.** `parseNarration` keeps the first consecutive run from block 1
> and stops at the first row that breaks it, so a stray numeric table silently
> truncates the sidecar. Every other table in this document sits before block 1 or
> after block 90, and the ON-SCREEN TEXT card table prefixes its first column with
> `Block` so it cannot collide.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *Insubordination* | 1–9 | 0:00–1:30 | the inquiry convened; no defendant; title; thesis |
| Act I — *No One Gave the Order* | 10–28 | 1:30–4:40 | §2 — the yawn in full; sleep and waking; the agentless grammar |
| Act II — *Ten Counts, No Defendant* | 29–53 | 4:40–8:50 | §3–§8, §11–§13 — nine more riddles, all authorless |
| Act III — *The Two With an Author* | 54–71 | 8:50–11:50 | §9, §10 — weeping and the long sigh; 主 arrives |
| Act IV — *One Canon, Two Bodies* | 72–80 | 11:50–13:20 | §14 — 皆為不足, its seam, and Su Wen 8 |
| Act V — *Who Is in Charge of You* | 81–90 | 13:20–15:00 | the verdict; contagion; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---
# COLD OPEN — *Insubordination* · blocks 1–9 · 0:00–1:30

**SOUND:** A brush being loaded. The scrape of a heavy chair. No music yet.
**VISUAL:** Black. Then an empty audience hall in raking light, seen straight on,
symmetrical — a court set up for a hearing. One high seat, one low table, one
empty space in the middle of the floor where a defendant would stand. Flat 2D
ink-wash, **landscape 16:9 framing**.

Blocks 1–2 hold on the empty floor. *History lower-third sits on block 1 — it is
required inside the first ten seconds.*

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Right now your body is doing things you did not decide on. You are blinking. Your heart is keeping time. And at some point in the next hour your face will open and you will yawn. |
| 2 | Arthur (V.O.) — the list | Two thousand years ago somebody made a list of twelve such things. Twelve acts a body performs without instruction. It is the oldest catalogue of the involuntary we have, and it is stranger than it sounds. |

**SOUND:** A fan snapping open, hard, like a gavel.
**VISUAL:** FAN-DI takes the high seat — gold robe, glasses, **fan snapped open**.
He is enjoying the staging enormously. The empty floor below him stays empty.

| Block | Beat | Narration |
|---|---|---|
| 3 | Fan-di (Xavier) — the charge | Let the record show that this is a formal inquiry and not a consultation. Twelve counts of insubordination committed inside my own person, daily, for as long as I can remember. I intend to find out exactly who is responsible. |

**VISUAL:** DR-QI enters and does not take the floor. She stands to one side, blue
cheongsam, open bamboo scroll held casually like a tablet, positioned so she can
see both the seat and the empty space where nobody is standing.

| Block | Beat | Narration |
|---|---|---|
| 4 | Dr-Qi (Vesper) — no defendant | Then I should tell you at the outset that your inquiry has a difficulty. You have twelve offences and no offender at all. Nothing in this chapter decides to do any of it, and there is no one here to charge. |
**ON-SCREEN TEXT — block 5.** Card: **靈樞·口問**, brushed, with *"Spiritual
Pivot, chapter 28"* beneath in small type.

| Block | Beat | Narration |
|---|---|---|
| 5 | Arthur (V.O.) — the citation | The book is the Spiritual Pivot, the practical half of the Inner Canon. Chapter twenty-eight, Oral Inquiry. Twelve questions, no culprit. |
**ON-SCREEN TEXT — block 6.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 6 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon, and this episode is called Twelve Small Rebellions. It is about the parts of you that are not taking orders, and about who a body belongs to. |
| 7 | Fan-di (Xavier) — the pivot | Then we proceed differently. If no one is responsible, tell me instead what is. Something opens my mouth against my wishes at the worst possible moments in front of my court. It is not nothing. Name it and I will deal with it. |
| 8 | Dr-Qi (Vesper) — the answer | Qi. Moving on a schedule it did not choose either. It goes out at dawn and in at midnight, the way water goes downhill, and it is not obeying anyone when it does. That is the entire answer. |
| 9 | Arthur (V.O.) — the thesis | Hold on to that, because ten riddles later this same chapter will announce that the heart is the ruler of all the organs. One book, two bodies. One of them governed, and one simply running. |

---

# ACT I — *No One Gave the Order* · blocks 10–28 · 1:30–4:40

**VISUAL:** The hearing set becomes the episode's whole world. Behind Dr-Qi, a
tall blank silk panel that carries every diagram, drawn live in ink as she speaks.
On the wall behind Fan-di, a tally board with twelve empty slots.

**CHARACTER — Fan-di:** prosecuting throughout Act I, fan open on every line.
**CHARACTER — Lei-Gong:** LEI-GONG is *not supposed to be here*. Establish him in
the deep background of the first diagram shot — cinnabar robe, hand drum in his
lap, sitting on the floor behind a pillar with a small slate of his own. He is not
acknowledged until block 20.

**ON-SCREEN TEXT — block 10.** Card: **人之欠者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 10 | Fan-di (Xavier) — count one | Count one. When a person yawns, what qi brings it about? I was mid-proclamation before the whole court, and my own face opened like a gate in a wall that nobody was defending. |
| 11 | Dr-Qi (Vesper) — the circuit | Defensive qi keeps a circuit. Through the daylight it runs in the yang, at your surface, where the weather is. At midnight it goes down into the yin. Nobody sends it there. It is simply the hour. |
| 12 | Dr-Qi (Vesper) — the two rules | Yin governs the night, and the night is for lying down. Yang governs what is above; yin governs what is below. Two rules about direction, and everything that follows is built out of them and nothing else. |

**VISUAL:** On the silk panel, ink draws a standing figure in outline. A bright
band circles its surface at the level of the skin. A second, darker band pools at
the base and thickens. The two begin to strain against one another.

| Block | Beat | Narration |
|---|---|---|
| 13 | Dr-Qi (Vesper) — the mechanism | Here is the mechanism. Yin qi has already gathered low in you and yang qi has not yet finished its day. The yang draws upward while the yin draws downward, and neither one of them yields. |
**ON-SCREEN TEXT — block 14.** Card: **陰陽相引，故數欠**.

| Block | Beat | Narration |
|---|---|---|
| 14 | Dr-Qi (Vesper) — the answer | Yin and yang draw against one another, and therefore one yawns, and yawns again. Read the verb: one yawns. It simply happens to you, and it happens in the passive. |
| 15 | Fan-di (Xavier) — the objection | That is not an acquittal, that is an insult. You are telling me that the sovereign of this realm, standing in front of forty ministers, was overruled by weather moving through his own legs. There must be an appeal somewhere in this. |
| 16 | Dr-Qi (Vesper) — no appeal | There is no appeal, and there is also no insult in it. You were not overruled. You were never consulted. A thing can only overrule you if it was ever taking instructions from you in the first place. |

**VISUAL:** The tension on the panel resolves. The bright band thins to nothing;
the dark band fills the figure; the outline's eyes close. Then it reverses,
smoothly, and the eyes open. The same two bands, no new ink.

| Block | Beat | Narration |
|---|---|---|
| 17 | Dr-Qi (Vesper) — sleep | When yang qi is spent and yin qi is full, the eyes close. That is not a description of falling asleep. In this system it is the cause of falling asleep, and it uses no new parts. |
| 18 | Dr-Qi (Vesper) — waking | And when yin qi is spent and yang qi is full, you wake. The same two quantities, the same seesaw, simply read at the other end of the night. Nothing at all has been added to explain either. |
| 19 | Arthur (V.O.) — what it bought | Count what that bought. Yawning, falling asleep and waking up, from one moving quantity and one rule about direction. One mechanism, and nobody in charge of any of it. |
**VISUAL:** From behind the pillar, unacknowledged, LEI-GONG yawns. Enormously.
The camera finds him a beat *after* it happens, which is the joke. He makes a mark
on his own slate. Fan-di and Dr-Qi both turn.

| Block | Beat | Narration |
|---|---|---|
| 20 | Lei-Gong (Zane) — the tally opens | May I put something in the record, since nobody has asked me. I have yawned four times since we started and nobody ordered me to do that either, so by the emperor's own reasoning I should be standing in the dock beside him and not sitting at the back. |

**VISUAL:** Leave the hall for the first time. The ink diagram persists, but the
background behind it becomes a modern research context rendered in exactly the
same flat ink-wash — a sleep laboratory as a brushed line drawing, no photography,
no faces.

| Block | Beat | Narration |
|---|---|---|
| 21 | Arthur (V.O.) — the modern question | Now the obvious question. Two thousand years on, with sleep laboratories and brain imaging, why do we actually yawn? The honest position is that there is still no agreed answer to that question. |
| 22 | Arthur (V.O.) — the hinge | One proposal says a yawn marks a change of state. Not tiredness but the hinge between sleep and waking, or between boredom and attention, and it is the best supported of them we have. |
**VISUAL:** Back to the hall, hard cut. Dr-Qi has not moved.

| Block | Beat | Narration |
|---|---|---|
| 23 | Dr-Qi (Vesper) — the score | Then note what this chapter had already claimed, two thousand years before anyone could measure anything. The yawn belongs to the hinge between sleeping and waking. It placed the yawn where the modern account still places it. |
| 24 | Arthur (V.O.) — two scores | Right about when. Wrong about why. Keep those two scores well apart, because we will be marking them separately eleven more times in this episode, and they never once merge into a single verdict. |
| 25 | Arthur (V.O.) — the second score | And there is a second score, which is the one this episode is really keeping. Every answer so far has had no author. Nothing decided, nothing chose. Watch carefully how long that holds. |
| 26 | Dr-Qi (Vesper) — nine more | It holds for nine more of them. I will take those nine quickly, because the interest is not in any single one of them. The interest is that not one of them has anybody at all at the wheel. |
| 27 | Fan-di (Xavier) — then two | Nine more. Which leaves two, and those two must have somebody at the wheel, and I would very much like to be given his name. So far this inquiry has produced no defendant at all and a great deal of philosophy. |
| 28 | Arthur (V.O.) — act out | He is right that there are two of them, and he is going to wish very much that there were not, because the two counts that do have an author are the two that hurt, and the author this chapter names is him, and he already knows it. |
---

# ACT II — *Ten Counts, No Defendant* · blocks 29–53 · 4:40–8:50

**SOUND:** The pace changes. A dry brush ticking on paper, not quite regular.
**VISUAL:** The tally board behind Fan-di starts filling. One slot per riddle
answered, marked by Lei-Gong from the floor. The panel wipes between riddles.

| Block | Beat | Narration |
|---|---|---|
| 29 | Arthur (V.O.) — the act frame | Nine riddles, and I am going to move quickly through all of them, because the point is not any one of them at all. The point is a sentence you will hear nine times without a single person anywhere in it. |
**ON-SCREEN TEXT — block 30.** Card: **人之噦者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 30 | Fan-di (Xavier) — count two | Count two. When a person hiccups, what qi brings it about? I ask because it happened during a formal audience with a foreign envoy, and the man plainly found it a great deal funnier than the treaty we had come to sign. |
| 31 | Dr-Qi (Vesper) — the ordinary traffic | Grain enters the stomach. Stomach qi pours upward into the lung. That is the ordinary traffic and it runs one way. Note that the grain is the subject of that sentence, and the grain has no opinions. |
| 32 | Dr-Qi (Vesper) — the collision | Now let old cold qi still be sitting there when the new grain qi arrives. New and old fall into disorder, and the qi combine, run backwards, and leave again through your mouth. |
| 33 | Dr-Qi (Vesper) — the half-hit | Before you dismiss the stomach, note this. A stomach stretched full really does set hiccups off, and the nerve that reports a full stomach passes the diaphragm on its way. The organ was not picked at random. |
| 34 | Arthur (V.O.) — the hedge | Careful. That is the trap this whole episode is about. A real trigger, attributed to the wrong organ, by a mechanism that does not exist. What a hiccup is for, incidentally, nobody knows. |
| 35 | Arthur (V.O.) — count three | Count three, the belch. Cold lodges as a guest in the stomach, turns back, and comes out again. The same shape, and the same absence of anybody deciding anything at all. |
**ON-SCREEN TEXT — block 36.** Card: **一曰** — two characters only, very large,
alone on the panel.

| Block | Beat | Narration |
|---|---|---|
| 36 | Dr-Qi (Vesper) — another says | Then the text does something strange. It gives its treatment, and adds three characters: another says. A second opinion, incompatible with the first, set down without comment and without any attempt at all to choose between the two. |
| 37 | Arthur (V.O.) — the fingerprint | Those three characters appear three times in this chapter. Each time two teachers said different things and whoever wrote it down kept both. That is what oral transmission looks like when it finally reaches paper. |

**ON-SCREEN TEXT — block 38.** Card: **陽氣和利，滿於心，出於鼻**.

**VISUAL:** For the first time the diagram is drawn in a *warmer* ink — the only
riddle in the episode whose panel is not cold grey.

| Block | Beat | Narration |
|---|---|---|
| 38 | Arthur (V.O.) — count four | Count four, the sneeze, and it is the odd one out. Yang qi is harmonious and running freely. It fills the heart. It issues from the nose. Hear what is not in that. |

**VISUAL:** Lei-Gong stands up from behind the pillar. Nobody sends him away.

| Block | Beat | Narration |
|---|---|---|
| 39 | Lei-Gong (Zane) — the sun | May I ask about the sun, since we are on the subject of sneezing. Every single time I walk out of this hall into bright daylight I sneeze exactly twice and never once three times. My father does it and my sister does it too. Is that anywhere in your list of twelve? |
| 40 | Arthur (V.O.) — the photic sneeze | It is not, and it is entirely real. Somewhere between a sixth and a third of people sneeze on stepping into bright light. It runs in families, it is inherited, and the mechanism is unknown. |
| 41 | Dr-Qi (Vesper) — count five | Count five, and I warn you it is unglamorous. When the saliva runs down. Food and drink enter the stomach; if there is heat there, the worms stir; the stomach slackens; the spring under the tongue opens. |
| 42 | Arthur (V.O.) — the worms | Worms, meant literally. Intestinal parasites were an ordinary fact of life, reached for the way cold and wind are reached for. It is a mechanism that is checkable and entirely wrong. |
| 43 | Fan-di (Xavier) — count six | Count six, and this one I have never asked anybody about. After a man has finished weeping his breath keeps catching by itself, in small shudders that he cannot stop. What is that? Nothing at all seems to be deciding it. |
| 44 | Dr-Qi (Vesper) — the catching sob | Yin qi is full and yang qi is thin. Yin moves quickly while yang moves slowly, and yin floods until yang is cut off. And so the breath catches and will not level out. |
| 45 | Arthur (V.O.) — the dispute | This one is disputed and we will say so. The character can be read as shivering rather than sobbing, and one translation in circulation reads it that way. We think that reading is mistaken. |
| 46 | Dr-Qi (Vesper) — count seven | The reason is count seven, shivering, which has its own answer. Cold qi lodges as a guest in the skin, yin is full and yang is thin. One line. |
| 47 | Dr-Qi (Vesper) — count eight | Count eight. If the stomach is not full, the vessels are empty. If the vessels are empty, the sinews go slack, and effort then spends something that cannot be paid back. |
| 48 | Fan-di (Xavier) — count nine | Count nine, and I have wanted to ask this one for years. At night, when the whole palace has gone silent, my ears ring. There is nothing there and nobody else hears it. What is making a noise inside my head? |
| 49 | Dr-Qi (Vesper) — the same premise | The ears, exactly like the eyes, are where the great vessels gather. When the stomach is empty those vessels are depleted, and being depleted they drain downward. Where a vessel has run dry, the ear rings. |
| 50 | Arthur (V.O.) — simply wrong | That one is simply wrong and we will not soften it. Ringing in the ears is generated in the hearing pathway, usually following damage further out. It has nothing to do with an empty stomach. |
| 51 | Fan-di (Xavier) — count ten | Count ten, and it is the one that has always bothered me most. Sometimes a man bites his own tongue, and not carelessly. His own jaw and his own tongue, and somehow he still ambushes himself. |
| 52 | Dr-Qi (Vesper) — out of turn | Qi turns back and runs upward, and the vessel qi arrives out of turn. When shaoyin qi arrives you bite the tongue, and when shaoyang arrives it is the cheek. Each one has its place. |
| 53 | Arthur (V.O.) — act out | Wrong, and beautifully shaped. Biting your tongue is a timing error between jaw and tongue. But that is ten answers now, and not one of them has contained a single person who chose anything. |

---

# ACT III — *The Two With an Author* · blocks 54–71 · 8:50–11:50

**SOUND:** The brush ticking stops. A single sustained low note enters and stays
under the whole act.
**VISUAL:** The lamp becomes the only light; the hall recedes into flat black
around the figures. Ten of the twelve tally slots are filled. Two are empty and
the camera makes a point of them.

| Block | Beat | Narration |
|---|---|---|
| 54 | Arthur (V.O.) — the turn | Two counts remain, and they are not like the other ten. The chapter has spent nine minutes describing a body that nobody drives. It is about to hand the wheel to somebody in particular. |
| 55 | Fan-di (Xavier) — count eleven | Count eleven. When a man grieves, and water comes out of his face, what qi is doing that? And where does it come from? |
**ON-SCREEN TEXT — block 56.** Card: **心者，五藏六府之主也**. **This is the
episode's hinge card.** Hold it longer than any other.

| Block | Beat | Narration |
|---|---|---|
| 56 | Dr-Qi (Vesper) — the ruler | Begin where the chapter begins. The heart is the ruler of the five zang and the six fu. Not the largest, not the strongest. The one the others answer to. Everything after this depends on that word. |
| 57 | Arthur (V.O.) — stop there | Stop there on that word. For ten answers running this chapter has had no ruler in it anywhere, and qi moved because it was the hour. Now something is giving orders. |
**ON-SCREEN TEXT — block 58.** Card: **口鼻者，氣之門戶也**.

**VISUAL:** On the panel, three things are drawn and then held for the rest of the
sequence: a seated figure at the centre, a rising line from body to eye, and two
small gates at the mouth and nose. Nothing is wiped. This diagram accumulates.

| Block | Beat | Narration |
|---|---|---|
| 58 | Dr-Qi (Vesper) — road and gates | The eyes are where the great vessels gather, and they are the road that fluid climbs. The mouth and nose are the gates of qi. A ruler and a road and a pair of gates. Watch what grief does to them. |
| 59 | Dr-Qi (Vesper) — the heart moves | Sorrow and grief and care and worry, and the heart is moved. The heart being moved, all five zang and all six fu are shaken rather than merely saddened. |
| 60 | Dr-Qi (Vesper) — the chain | They being shaken, the great vessels respond. The vessels responding, the fluid road opens and the tears come out of you. Six links, and the first of them is a feeling. |
| 61 | Arthur (V.O.) — why that matters | The first link being a feeling is why this episode exists. Ten answers where nothing was the cause, and now an answer where something is. The cause is grief, and grief belongs to whoever has it. |

**VISUAL:** Fan-di sets the fan down on the table. Deliberately, without looking at
it. **It does not appear in his hand again for the remainder of the episode.** Hold
the shot of the table.

| Block | Beat | Narration |
|---|---|---|
| 62 | Fan-di (Xavier) — the admission | I have carried this fan eleven years and I am setting it on the table. My mother died in the spring. I have not wept, not once, and I want to know whether the road in me is shut. |

**ON-SCREEN TEXT — block 63.** Card: **故命曰奪精**.

| Block | Beat | Narration |
|---|---|---|
| 63 | Dr-Qi (Vesper) — what the text says | The chapter does not answer that, and I will not pretend otherwise. What it says next is this. Weep and do not stop, and the fluid is exhausted; the essence is not watered; the eyes see nothing. |
| 64 | Arthur (V.O.) — this is false | It calls that the robbing of the essence. A beautiful phrase fastened to a false claim: crying does not drain a finite supply, and weeping does not take your eyesight. We say that plainly. |
| 65 | Arthur (V.O.) — count twelve | Count twelve, the last of them, and the one the chapter gets closest to right. When a person sighs the long breath out, what qi is it that brings it about? |
| 66 | Dr-Qi (Vesper) — the cords | Worry and brooding draw the cords of the heart tight. The cords tight, the road of qi narrows and does not run freely. And so one sighs, to stretch it open again. |
| 67 | Arthur (V.O.) — what a sigh does | A spontaneous sigh reinflates parts of the lung that have quietly collapsed and restores its stretch. A small cluster of cells in the brainstem exists to generate them, every few minutes, all day. |
| 68 | Arthur (V.O.) — right shape, wrong organ | Something constricted, and a breath that opens it. Right shape, right company, wrong organ. It is the lung, not the cords of the heart. The closest this chapter comes. |
**VISUAL:** Lei-Gong at the tally board, filling the last two slots, then stopping
with the brush in his hand.

| Block | Beat | Narration |
|---|---|---|
| 69 | Lei-Gong (Zane) — the pattern | I want to point at something that nobody has said yet. Both of the ones with somebody at the wheel are the ones that are about feeling. Grief and worry, and nothing else. Everything else in your twelve is weather of one kind or another, and those two are a person. |
| 70 | Dr-Qi (Vesper) — the awkward position | Which puts you in an awkward position, since you convened an inquiry. Ten of your counts have no defendant at all. The other two do have one, and you have been sitting in his chair all afternoon. |
| 71 | Arthur (V.O.) — act out | So the body in this chapter is ungoverned for ten of its twelve acts, and governed for the other two. That is not a small inconsistency. It is two theories of a person, in one document. |

---

# ACT IV — *One Canon, Two Bodies* · blocks 72–80 · 11:50–13:20

**SOUND:** The sustained note lifts. Room tone, and the tally board.
**VISUAL:** Light back up. The twelve slots are full and the board is legible for
the first time as a whole.

**ON-SCREEN TEXT — block 72.** Card: **凡此十二邪者**, with the twelve riddle
characters arranged in a grid beneath it.

| Block | Beat | Narration |
|---|---|---|
| 72 | Arthur (V.O.) — the summing | And then the chapter sums. All these twelve, it says, are strange qi running into the hollow openings of the body. One sentence, gathering all of it into a claim. |
| 73 | Lei-Gong (Zane) — the count | Twelve. I counted them on the board as they came, and it does come to twelve exactly, with none of them left over and none of them counted twice. I would like that entered in the record, because I was told to sit at the back and be quiet. |

**ON-SCREEN TEXT — block 74.** Card: **皆為不足** — four characters, alone, held.

| Block | Beat | Narration |
|---|---|---|
| 74 | Arthur (V.O.) — the sentence | Then one more clause, and it is the sentence the chapter has been walking toward from the beginning. Wherever the trouble is, in every case something is missing rather than in excess. |
**VISUAL:** On the grid of twelve, one character — 嚏, the sneeze — quietly lifts
out of alignment and sits proud of the others. Nobody on screen reacts.

| Block | Beat | Narration |
|---|---|---|
| 75 | Arthur (V.O.) — the small seam | And at that exact moment it splits. Go back six minutes. The sneeze was explained by qi being harmonious and abundant. That is not something missing, and nobody notices. |
| 76 | Arthur (V.O.) — the large seam | That is the small seam, and here is the large one. Ten of the twelve are explained with nobody at all in charge, and then the eleventh opens by installing a ruler over the whole body, which is new. |
| 77 | Dr-Qi (Vesper) — the other chapter | And it is not an isolated slip. Another chapter of this same canon builds the entire body as a government of twelve offices with a sovereign and a chancellor and a general. Nothing happens without an officer. |
| 78 | Arthur (V.O.) — two bodies | One canon, two bodies. In one, you are an administration and every act has an office responsible for it. In the other, you are weather on a schedule, and twelve things a day simply happen. |
| 79 | Arthur (V.O.) — no superiority | Before anyone feels superior, the modern position is not tidier. It is messier. There is no single system running the involuntary, and the twelve on this list do not share one mechanism either. |
| 80 | Arthur (V.O.) — the real error | The chapter's real error is not that it guessed wrong twelve times. It is that it expected one answer. The involuntary is not a department. It is a dozen unrelated things that happen to look alike. |

---

# ACT V — *Who Is in Charge of You* · blocks 81–90 · 13:20–15:00

**SOUND:** Everything drops away except room tone. The guqin bed is out from block
81 and does not return.
**VISUAL:** The hearing set, wide, symmetrical, exactly as in block 1 — except the
empty floor where a defendant would stand is now lit, and still empty.

| Block | Beat | Narration |
|---|---|---|
| 81 | Arthur (V.O.) — the question | Which leaves the question the inquiry was convened to answer, and it is a much better question than the emperor knew when he first asked it. Who exactly is supposed to be in charge of you and of your parts? |
| 82 | Fan-di (Xavier) — the accused | I convened this inquiry to find a culprit. I have ten offences with nobody at all behind them, and two behind which there is only me grieving, which is not a crime in any code that I have ever signed or ever will sign. |
| 83 | Dr-Qi (Vesper) — the held answer | No. And here is the part I have been keeping back. A body that needed a ruler for all twelve would be a worse body. Most of you runs without you, and that is the mercy in it. |
| 84 | Arthur (V.O.) — the achievement | That is the chapter's genuine achievement, and it is easy to miss under the wrong mechanisms. It looked at twelve things a body does unbidden and did not once reach for a spirit or a fault. |

**VISUAL:** Lei-Gong alone in frame, slate held up, eleven marks on it.

| Block | Beat | Narration |
|---|---|---|
| 85 | Lei-Gong (Zane) — the last tally | Eleven. That is how many times I have yawned since we began this morning, and I counted every one of those too. Every one of them started because somebody else in this room had just done it first, and not one of them was mine. |
| 86 | Arthur (V.O.) — contagion | He has found the one thing the chapter cannot hold. Yawning is catching. It is documented in humans, in chimpanzees, and in dogs watching people, and the mechanism behind it is entirely unknown. |
| 87 | Dr-Qi (Vesper) — one body | And no answer in this chapter can reach it. Every one of them has a single body in it. One person, one set of channels. Catching a yawn takes two people, and two people is not in the system. |
| 88 | Fan-di (Xavier) — the charges withdrawn | Then I withdraw the charges, all twelve of them, since it appears that I govern a great many things and that the inside of my own mouth is not among them, and I am reliably told this is the good news. |
| 89 | Arthur (V.O.) — the close | You have very likely yawned during the last fifteen minutes, and nobody in the world can tell you why. An emperor put his own body on trial for it, and the verdict was that there was nobody at all to try. |
| 90 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we mark where the evidence does not support it. |
---
## ON-SCREEN TEXT cards — the exception to text-free clips

Every other block is **text-free**; captions come from the tracked sidecar. These
are the exception, and the reason is structural: `assemble_final.sh` has **no
text-overlay parameter**, so a quotation card carries no text unless the text is
in the clip.

**Every card block still needs a voice take, and it must clear 8.6s like any
other** — a silent card fails the assembler's narration-per-window assert
(`blocks [..] have NO narration in their windows`). All of these are narrated over,
and that narration is in the act tables above.

> **The first column here reads `Block NN`, not a bare number, and that is
> deliberate.** A table whose first cell is a bare integer has the same shape as a
> narration row. This one sits after block 90 so it cannot truncate the sidecar.

| Card block | Timecode | Card | Gloss |
|---|---|---|---|
| Block 5 | 0:40 | 靈樞·口問 | the citation — **Lingshu 28**, never a bare "Chapter 28" |
| Block 10 | 1:30 | 人之欠者，何氣使然 | when a person yawns, **what qi** makes it so |
| Block 14 | 2:10 | 陰陽相引，故數欠 | yin and yang draw against one another, and so one yawns |
| Block 30 | 4:50 | 人之噦者，何氣使然 | when a person hiccups, what qi makes it so |
| Block 36 | 5:50 | 一曰 | **another says** — two characters, held alone |
| Block 38 | 6:10 | 陽氣和利，滿於心，出於鼻 | yang qi harmonious and free, filling the heart, issuing from the nose |
| Block 56 | 9:10 | 心者，五藏六府之主也 | **the heart is the ruler of the five zang and six fu — the hinge** |
| Block 58 | 9:30 | 口鼻者，氣之門戶也 | the mouth and nose are the gates of qi (with 目者, folded in) |
| Block 63 | 10:20 | 故命曰奪精 | and so it is named the robbing of the essence |
| Block 72 | 11:50 | 凡此十二邪者 | all these twelve — with the twelve riddle characters in a grid |
| Block 74 | 12:10 | 皆為不足 | in every case, something is missing |

*(Eleven quotation cards, all eleven carried over from the v2 script. Block 6 is
the series title card and carries no classical text. Block 90 is the disclaimer
plate, whose text is hand-added at edit time.)*

**Block 56 is the most important card in the cut** and should be held longer and
larger than the rest. It is the only place on screen where a viewer sees the word
主 — *ruler* — appear in a chapter that has gone ten riddles without one, and
blocks 57, 71, 76 and 78 all point back at it.

**Block 72 is the highest-risk card.** It shows all twelve riddle characters —
欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌 — in a grid a viewer can count,
and block 75's payoff requires **嚏 to be individually identifiable** so it can
lift out of alignment. A generated grid with one glyph wrong destroys both the
count and the payoff.

**Generated Chinese glyphs are unreliable and were not visually checked on this
host** — the CDN is 403 from the repo host. **All eleven cards were rendered as
plain plates**, with the card text hand-added at edit time. See *Finishing steps*.

---

## Source mapping — translation § → blocks

Sections are those of **`inner-canon-lingshu28-translation-v2.md`**. Block numbers
are v3's.

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | 論不在經者 — what is not in the classics | 37 |
| §2 | 人之欠者，何氣使然 — and the form of the question | 10 |
| §2 | 衛氣晝日行於陽，夜半則行於陰 | 11 |
| §2 | 陰者主夜…陽者主上，陰者主下 | 12 |
| §2 | 陰氣積於下…陽引而上，陰引而下 | 13 |
| §2 | 陰陽相引，故數欠 | 14 |
| §2 | 陽氣盡，陰氣盛，則目瞑 | 17 |
| §2 | 陰氣盡而陽氣盛，則寤矣 | 18 |
| §3 | 穀入於胃，胃氣上注於肺 | 31 |
| §3 | 故寒氣與新穀氣…復出於胃，故為噦 | 32 |
| §6 | 寒氣客於胃…復出於胃，故為噫 | 35 |
| §6, §7, §15 | **一曰** — all three occurrences | 36, 37 |
| §7 | 陽氣和利，滿於心，出於鼻，故為嚏 | 38 |
| §11 | 胃中有熱則蟲動…廉泉開，故涎下 | 41, 42 |
| §4 | 陰氣盛而陽氣虛…故為唏 | 43, 44 |
| §4 | the 唏 reading dispute | 45 |
| §5 | 寒氣客於皮膚…故為振寒寒慄 | 46 |
| §8 | 胃不實則諸脈虛…故為嚲 | 47 |
| §12 | 耳者，宗脈之所聚也…故耳鳴 | 48, 49, 50 |
| §13 | 此厥逆走上，脈氣輩至也 | 51, 52, 53 |
| §9 | **心者，五藏六府之主也** — the hinge | 56, 57 |
| §9 | 目者，宗脈之所聚也，上液之道也 | 58 |
| §9 | 口鼻者，氣之門戶也 | 58 |
| §9 | 悲哀愁憂則心動…五藏六府皆搖 | 59 |
| §9 | 宗脈感則液道開…故泣涕出焉 | 60, 61 |
| §9 | 泣不止則液竭…故命曰奪精 | 63, 64 |
| §10 | 憂思則心系急…故太息以伸出之 | 65, 66, 67 |
| §14 | 凡此十二邪者 / 皆奇邪之走空竅者也 | 72, 73 |
| §14 | 皆為不足 | 74, 75 |
| §15 | 腎主為欠 / 肺主為噦 — the retro-fitted rulers | 76 |
| §15 | the treatment recapitulation | **deliberately excluded — see below** |

**Two rows moved in the 15:00 cut.** §1's 辟左右 (*those to left and right
dismissed*) lost its block and is no longer staged — the cleared room is now
carried by the empty-floor visual alone. §9's 目者 was folded into block 58
together with 口鼻者, because the "road" it introduces is used by blocks 60 and 61
and could not simply be dropped.

**Every needling clause in §2–§14 is excluded, and §15 is excluded except for its
two retro-fitted organ attributions**, which block 76 uses as *evidence of a seam*
rather than as instruction. That is a compliance decision and a content decision at
once: the source closes all twelve answers with a prescription, and including any
of them would convert a curiosity episode into symptom-and-remedy content. **Not
one prescription appears in this script, the shot list, or on any card.**

**§14's own deficiency signs are also excluded** — the swimming eyes, the tipping
head, the rumbling intestines, the withering limbs. They are a *separate* list from
the twelve, and folding them in would break the count that blocks 72, 73 and 75
depend on.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam, never jade.

**One count reconciliation, and it is still a correction to the slate.**
`docs/Chronicle of Balance Top20 Chapter Slate.md` describes this chapter as
*"eleven rapid-fire questions"*. **The text says twelve** — 凡此十二邪者 — and §15
recapitulates twelve. The on-screen numbering runs **count one through count
twelve**, each spoken exactly once, at blocks **10, 30, 35, 38, 41, 43, 46, 47, 48,
51, 55 and 65** — and note that it is *not* all Fan-di's: he opens counts one, two,
six, nine, ten and eleven, Dr-Qi opens five, seven and eight, and Arthur opens
three, four and twelve. Whoever holds the block says the number, because the block
boundary decides the speaker and the numbering has to survive that.

> **All twelve riddle introductions survived the cut to 90 blocks, and that was a
> constraint on which blocks could be dropped rather than an outcome.** The v2
> *Runtime levers* nominated blocks 45, 59 and 61 — counts three, seven and eight —
> for the 15:00 cut. Dropping them would have narrated nine riddles while block 73
> says *"it does come to twelve"* and the block-72 grid shows twelve. Their
> *elaborations* were dropped instead, at identical saving. See *Runtime levers*.

**Two translation choices this script depends on**, both argued in the translation
file: §3's 噦 is **hiccup**, not "sighs"; §8's 嚲 is **limpness**, not "drools".
The supplied English in the source PDF makes both errors, and either one reduces
the twelve to eleven on screen while the card still says 十二.

**One cross-chapter claim, and it can no longer be checked inside this repo.**
Block 77 describes Su Wen 8 《靈蘭祕典論》 — twelve offices, a sovereign, a
chancellor, a general. That description was written against a translation file
under the old `output/episode-6/` folder, which the layout migration **deleted
rather than migrated**, so it now exists only in git history. **Re-verify block 77
against the classical text, or against the deleted file at `3398436^`, before it
ships**; do not treat it as checked merely because it once was. It was not
re-verified for this draft render.

**Cite it on screen as Su Wen 8**, never as "chapter 6": the edition that deleted
folder followed numbered it 篇第六, but Su Wen 6 in the received recension is a
different chapter entirely (陰陽離合論).

**Dramatic material not in the source, flagged as invention:** the inquiry, the
hearing set, the charges and their withdrawal; the interrupted proclamation (10);
the foreign envoy (30); the fan and the moment it goes down (61–62, 82, 88);
Fan-di's mother (62); Lei-Gong being present at all, his slate, his tally, and all
five of his blocks. **The classical text has no scene whatsoever** — 黃帝閒居, *the
Yellow Emperor at leisure*, is the whole of the staging, and there are two speakers
with no characterisation between them. Everything attributed to *the text* above is
in the translation; everything else is dramatisation.

**Three interpretive claims that are ours, hedged in the narration rather than only
here:**

- **That ten of twelve answers are agentless and two are not.** The distribution is
  a fact about the grammar and is tabulated in the translation file. **That it
  amounts to two incompatible theories of a person** is the reading, and block 71
  states it as an observation about the document rather than as received
  scholarship.
- **That §15's 腎主為欠 and 肺主為噦 are a later reconciliation** (block 76). The
  text does not say so. It is an inference from the fact that neither attribution
  appears in §2 or §3, and block 76 is written to describe what the text does
  rather than to date it.
- **That the single-body framework is why contagion is unrepresentable** (blocks
  86–87). An argument about what the apparatus can hold, not a historical claim
  about what anyone noticed. Dr-Qi's line says *two people is not in the system*,
  which is a statement about the system.

---
## Production record (Higgsfield)

**RENDERED 2026-08-24, draft tier.** First longform episode ever assembled in this
repo — the pipeline side of the longform path had never been run before this cut.

### Credit spend — actual against preflight

| | Credits |
|---|---|
| Balance before | **3000.0** |
| Balance after | **1808.1** |
| **Actual spend** | **1191.9** |
| Preflight estimate (90 blocks, draft) | ~1,030 |
| Overrun | **+16%**, all of it voice re-takes |

| Line item | Count | Credits |
|---|---|---|
| 16:9 style-key sibling (`nano_banana_pro`) | 1 | ~2 |
| Clips (`seedance_2_0_mini` 480p) | 91 jobs (90 kept, 1 `nsfw`) | ~910 |
| Voice takes (`seed_audio`) | **224 issued, 90 kept** | ~280 |
| Assembly, caption burn | — | 0 |

**The voice bill is the whole overrun, and the cause is documented in
*Reproduction notes*: the skill's speech window was wrong, so the script was
sized ~0.65s long per block.** 224 takes for 90 blocks is a **2.5× re-take
rate** — better than the Suwen 13 trailer's 4.7×, worse than it needed to be.
Priced live at step 0: clip **10.0**, Arthur take **1.2**. Voice worked out at
~1.25/take across all four voices, which is **below** the skill's 1.5/2.0 budget.

### Step-0 gate — run and cleared, with two surprises

- **Tool availability.** All eight names resolve. **But the workflow bundle has
  been reorganised**: `assemble_final.sh` is now at
  `$HF_WORKFLOWS/faceless-video/scripts/` (was `faceless-channel-video/scripts/`)
  and `speech_metrics.sh` at `$HF_WORKFLOWS/narrator/scripts/` (was a subdirectory
  of the faceless workflow). Both skill paths are dead. Found by `find`, not by
  guessing — the probe in the skill's step 0 fails outright at the old path.
- **`balance` read live: 3000.0.** The skill's anchor was 235.7, which is stale by
  12.7× *in the helpful direction* for once. A 90-block draft fits comfortably.
- **`get_cost` live**: clip 10.0 at 480p/16:9/10s/audio-off; Arthur take 1.2.

### Style key — 16:9 sibling generated

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   Suwen 1     (neutral head)
  └── 8e7e7549-cb5a-4970-afa7-b00b7e1442d4   Lingshu 28 vertical 9:16 (trailer v2)
        └── 717ea032-0a02-4da8-a161-6d77ef8db5ad   Lingshu 28 LANDSCAPE 16:9  ← THIS CUT
```

**Job ID `717ea032-0a02-4da8-a161-6d77ef8db5ad`.** `nano_banana_pro` (served by
`nano_banana_2`), `aspect_ratio: "16:9"`, **returned 2752×1536** (1.79:1). Derived
from the chapter's own vertical key by job ID, changing only the framing, so the
tally-board motif and all three characters carry over from the rendered trailer.
The service echoed the media role back coerced to `image_references`, as the skill
predicts. **The vertical key was not overwritten** — the trailer still needs it.

### Clips — 90 generated, 1 regenerated for safety

**`seedance_2_0_mini`, Draft tier, `resolution: "480p"`, `duration: 10`,
`aspect_ratio: "16:9"`, `generate_audio: false`, landscape style key attached to
every clip as `image_references`, `IN THE DARK` pre-declined on every call.**

**Every clip returned 864×496, 10.042s, no audio stream.** The assembler's own
freeze probe found **no static open and no frozen tail on any of the 90**. Block 1
was generated alone first and its dimensions checked before the other 89 went out,
per the skill's little-history rule.

| 1 `7ba5195f-60b2-4cc9-837b-30cbf2a4a7e0` | 2 `d9761cdb-9a48-4fc6-b667-2d71abaffd21` | 3 `9ef527d1-7a90-4a1a-989c-52f0fcaa35c1` | 4 `1abed4d5-d7f5-4971-bd2f-dac2796defcf` | 5 `772efde6-237e-460f-ba0d-1c514e22d180` |
| 6 `bc7c0185-15c5-46dd-adb6-486bd9981474` | 7 `991e6dad-c852-4e06-84dc-4b1b4ac03bb7` | 8 `3eb864c7-0ec5-4429-9d30-442d1bee54e6` | 9 `960c0ab8-d171-47c2-bfdd-9f5a3a1b00b8` | 10 `7b31f39a-af60-48af-bf0c-55f67645c72e` |
| 11 `6151fb54-a194-4ef0-a19c-a88b0827233f` | 12 `96542e6f-d233-4f76-9b99-12fc88cab16a` | 13 `b628a8c0-e7b2-4310-ad75-c67886b6f6d1` | 14 `30c717b4-9e48-4d7a-8c87-5a27ab8d6561` | 15 `7d58860a-5dfe-4029-9e47-47e5e719e2ad` |
| 16 `6a44451b-b02e-4711-b252-a24017e1f275` | 17 `69737691-4de5-480d-a74b-38551d366ffc` | 18 `73efe9d0-7d09-4842-b6f8-54403eba5641` | 19 `de7b0e26-80ee-45d4-9001-ee1bd92e9abf` | 20 `df8abe43-9ba7-424c-8732-0e6489efe235` |
| 21 `2807b657-22b1-43ad-acca-ab77b58d878c` | 22 `aba5385b-4383-4169-867d-eb4d3cc40990` | 23 `315adda2-fc95-4a4d-acfa-22e790e9e8a9` | 24 `5f8f9605-d53a-481d-ad4d-0231840de190` | 25 `36eff702-7287-4e7d-a686-f23905f17d70` |
| 26 `691614fa-1ba7-4fc6-aca8-a8ca6622d5a3` | 27 `c3e81b49-3bef-4672-bfb8-2b39cd39f6e5` | 28 `179d31cc-613a-4f9c-9846-e3f8cfda5a64` | 29 `f8a912c8-4557-4d5e-9fd3-6ab3343f76e6` | 30 `edba6894-1251-4ae2-bd61-4c29528b9f7f` |
| 31 `315a8157-14c1-4a8d-bc58-a946b8866002` | 32 `7ba4e9f6-8835-401b-93b6-36e921ee5e40` | 33 `6e61fcd2-a80d-4cef-b230-75006d0c77a8` | 34 `8b96d0bf-a368-477b-a00a-35db0198ef22` | 35 `fa9ea532-1170-493d-9871-1055cb5cc292` |
| 36 `a0bc3bb4-0c3d-492a-a01f-6b5d3c7b1540` | 37 `53757854-f5fd-4e11-86c3-7ae038971d9c` | 38 `31568571-e223-43d7-a4e9-fa7abd9c43af` | 39 `6f5722c1-f3b7-4d64-891c-63b781a66037` | 40 `244ca2aa-d8f6-439c-b87a-d3c324711ae4` |
| 41 `34d507ff-0eb8-489e-9bc2-2689aae0405e` | 42 `5024d7ab-5b96-4254-946b-6988d9e60fa0` | 43 `2db56c65-ae01-4662-bce0-9c9c0b766651` | 44 `fa752a59-40ea-435b-936a-2100a06a55b4` | 45 `125b6945-0899-4cf9-8cc7-d88806cf43f0` |
| 46 `da46e083-f8c0-461b-a273-5dabde81d8c6` | 47 `47dbfc96-7699-4818-bd24-a5c58b1b9673` | 48 `93469cc5-7967-4577-a620-8b45f1ddb068` | 49 `128fe2d5-b9c3-4d14-8ff8-4cb67cdd7318` | 50 `2c772978-ebb1-42bf-9659-47c578b2a9cb` |
| 51 `28dbbfc5-50bb-4899-ba59-12e49ac2f846` | 52 `c1981060-147a-4b8d-8dab-f893e21e3130` | 53 `c22d3209-07af-4981-874e-54947d9ec4e5` | 54 `9517a3fd-e13c-44ef-9277-0ce261e5a49f` | 55 `07c2a7a7-8038-47dc-b657-1e5ac93c8863` |
| 56 `493e3b10-38da-4453-8d5a-388f261c525d` | 57 `8e191d75-7c5a-416c-bb6c-696f84f95f29` | 58 `491eae42-f70d-4429-970a-81f9418515b9` | 59 `ef6db07e-3ec2-4774-b4d7-35737e876849` | 60 `5b0023cd-6455-4585-a977-084cd3a22512` |
| 61 `b2e18e6a-c193-4ee8-a00d-4bf5c5a994f6` | 62 `56591548-1061-44b4-b481-bca87b0cad85` | 63 `4fa24c31-d7ec-4e72-bc89-d62e721489be` | 64 `9558896e-7d72-4fea-a457-3381a5fe77dd` | 65 `3b3696f3-6c48-46d0-9d15-5f9beb6d3d79` |
| 66 `dea1d505-d1bb-47c6-84df-19cffeb8c7c5` | 67 `41c19ae6-31e8-4e57-b526-cd79050a96e5` | 68 `bbfafa65-fcea-46f5-b0d9-ab306cef6602` | 69 `df3cb120-1873-4d91-88c8-e710e770f74c` | 70 `8c77097a-104b-4d67-b5f9-10d1bc7cfddc` |
| 71 `d143954d-6bc8-4d72-8d13-9de2be5245aa` | 72 `b10fd717-434f-48b2-8363-42e53a7900cd` | 73 `820bd218-8aa0-4a59-ac99-aaeaa430c6d9` | 74 `ef295da1-4c5f-4a1f-a20c-ddc7cb4fa04a` | 75 `0beb2c17-912a-47f0-8045-c99df2a3993a` |
| 76 `a91e1b4e-decb-4b76-bf9d-705c6eba712f` | 77 `fc9d2968-bbd0-4803-9bd1-ee0b56ac85ae` | 78 `dc151b93-0004-4c55-b9f9-08581d77fe0d` | 79 `4b23b747-da86-4889-83e8-c1ed384cfea5` | 80 `573742e9-8868-4c62-b373-3c6c5ebda854` |
| 81 `5b6080a3-d2df-4f55-b8e8-493586992f79` | 82 `870d4700-d7de-4923-b040-c9f88e5539bd` | 83 `2ecc8bdb-89ef-4a1c-90c4-7271370ca4cc` | 84 `74283f30-0401-4e78-b236-104025771175` | 85 `5197d95c-9f01-49d2-ae57-6becdd8d23d5` |
| 86 `ab68f351-8e49-480d-99a2-41a7c2a3ed44` | 87 `7ae918ca-70d2-4df8-a486-4d27fab2bbb6` | 88 `dbc96846-3b35-4845-a7cd-8038ebfc5011` | 89 `1fd8602c-db0e-4966-a9b2-e6f944dcfc26` | 90 `d3ec9797-b289-4111-a54f-d7835b336cce` |
**Two preset behaviours, one of them new.** `IN THE DARK` never fired — not once
across 91 submissions, including Act III's 18-block single-lamp run, which the v2
plan expected to be the heaviest trigger in the repo. **`DROWN IN MUSIC` fired
seven times instead** (blocks 17, 19, 41, 49, 52, 67, 72, 86), and **not one of
those prompts contained audio vocabulary.** The skill records this preset as
triggered by "rhythm"/"rhythmic". What the eight actually share is
**temporal-sequencing language** — *one after another*, *out of step*, *each
reaching it at a different moment*, *in turn*. Re-declining with
`f1821f84-945b-4cd1-9085-1f479db0028e` cleared every one.

> **⚠ Block 86 came back `nsfw` and had to be re-cut.** The prompt was *"Three
> outline figures standing in a row. A slow wave passes along the row… each tipping
> back as it reaches them"* — the contagious-yawn shot. **The filter read
> "figures tipping back" as falling bodies.** This is the skill's *mortality and
> collapse must be carried by objects* rule, hit from an angle the compliance gate
> did not anticipate: the subject matter is a yawn, not a collapse. Re-cut with
> **no human figures at all** — three brushed ink ovals widening in turn — and it
> cleared on the first retry (`ab68f351-8e49-480d-99a2-41a7c2a3ed44`). The rejected
> job `240c08c0-1dec-462a-924e-209e017ec634` is kept here as superseded evidence.

### Voiceover — the expensive discovery of this run

**`seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per block, one
speaker per block.** All 90 kept takes sit inside the assembler's window: **min
7.824s, max 9.494s, mean 8.631s** against a window midpoint of 8.65s.

> **⚠ THE SPEECH WINDOW IS 7.8–9.5s, NOT 8.6–10.0s. `SKILL.md` is wrong.**
> `assemble_final.sh` computes it as `SPEECH_MIN = CLIP − 2.2` and
> `SPEECH_MAX = CLIP − 0.5`, i.e. **7.800–9.500s** at the house 10s block. The
> script's own comments date the change: the floor moved from `CLIP−2.0` to
> `CLIP−2.2` on **2026-08-04** "with the engine swap to elevenlabs", and the
> ceiling has been `CLIP−0.5` since 2026-08-01. **The skill's 8.6–10.0 is the band
> that existed before 2026-08-01.**
>
> **The ceiling is the half that matters and it moved *down* 0.5s.** This script
> was written to the documented window — sized for a ~9.3s target — so nearly
> every line ran long. **First-pass yield was 39 of 90.** That is the entire
> credit overrun.

**Rates re-measured across all 90 first-pass takes**, which is a far larger sample
than the skill's pooled 29 and gives materially different windows:

| Voice | Measured here | Window at 7.8–9.5s | Target | `SKILL.md` says |
|---|---|---|---|---|
| Arthur | **3.70 w/s** | 29–35 | 32 | 33–37 |
| Xavier | **4.34 w/s** | 34–41 | 38 | 39–45 |
| Vesper | **3.91 w/s** | 31–37 | 34 | 37–42 |
| Zane | **5.71 w/s** | 45–54 | 49 | 47–54 |

**Zane is the only row the skill had right.** He was also the only voice whose
five blocks all landed without a rewrite.

**Three findings about `seed_audio` that word count does not explain:**

1. **One-word fragments make it read slowly and dramatically.** Block 57 —
   *"Stop there. Ruler. For ten answers running…"*, 33 Arthur words — returned
   **17.322s**. Rewritten as flowing prose at 31 words with the two fragments
   removed, it returned **8.538s**. Same voice, same rate, same length,
   **8.8 seconds of difference from sentence shape alone.** Blocks 14 (*"Read the
   verb. One yawns."*) and 59 (*"Not saddened. Shaken."*) behaved the same way.
   This is the inverse of the skill's *each sentence boundary buys 0.14–0.7s*: a
   boundary around a one-word fragment buys **seconds**.
2. **Run-to-run variance is larger than the skill records.** Identical text on
   block 88 returned **7.396s, 8.264s, 15.688s and 17.073s** across four rolls —
   a 9.7s spread on a 1.7s window. The skill's worst recorded case is 2.44s.
3. **Word count is a weak predictor and the measurement governs.** Twenty blocks
   whose word counts sit outside their voice's window landed in the window anyway
   and were kept. Re-sizing purely on word count would have thrown away good takes.

**Working method that finally converged:** measure every take through
`speech_metrics.sh`, keep whatever is in window, re-size each miss from **its own
measured rate** (`words × 8.65 / measured_speech`) rather than from the pooled
rate, and submit **two or three variants at once** for any block that had already
missed twice. The variant trick is what closed the last eight blocks.

**Do not read `speech_metrics.sh`'s `RUSHED` warning as a gate.** It flagged every
Xavier, Vesper and Zane take as "auctioneer pace". Its threshold (2.9 w/s) was
re-calibrated for elevenlabs on 2026-08-04 and is far below `seed_audio`'s natural
band. **`assemble_final.sh` gates on speech duration only** — verified by reading
the script; there is no rate gate in it.

- **Voiceover** — `seed_audio`, `speech_rate` 55, one take per block. Durations are the assembler's **measured speech**, not file length: block 1 `0c2d9a28-13e5-4d95-a4d2-9d4f76d56cf1` (9.36s), block 2 `d12cc8c7-31f2-4da9-b6fe-bbbdf3afaee8` (8.66s), block 3 `3b4ecca4-682f-43bc-82f9-5210d041b9c2` (9.40s), block 4 `85358265-0273-4b3b-af53-15dc9f6c73a0` (9.07s), block 5 `7e8b0155-f889-40dd-b096-fdc89aa8cd9d` (8.21s), block 6 `1acd3e34-eca4-4bed-9177-6d9b20ec61df` (8.31s), block 7 `ccc70a25-7a32-433c-8ac8-4ac3e632f87d` (9.46s), block 8 `c7e8ede9-072c-4326-8cc4-bae6c0effb00` (8.21s), block 9 `a07a26b7-026e-4e6c-8656-24ba3eea3d45` (8.52s), block 10 `b500a3cc-7599-4de8-83c2-d6a38dbc0398` (8.19s), block 11 `2da797f8-2f38-488d-a6cb-31b14fa9eabe` (8.32s), block 12 `d2a24f68-2cf4-42d7-a147-0b27dc084825` (8.58s), block 13 `d6622fba-2ec4-40f4-850f-2ee3eb23b27c` (9.49s), block 14 `2cef8c7b-2ad3-4ba7-aa16-9481c40ab159` (9.44s), block 15 `3cb1cc2b-9bc5-4ffa-80e8-6ee03a370822` (9.32s), block 16 `b04d2d81-edc0-4bb6-80a3-cac13408aa50` (8.44s), block 17 `f818943c-fc73-47c6-b47b-2e556967aceb` (8.64s), block 18 `119ebeb1-acd0-4a45-a7ab-6a42f031d75e` (9.07s), block 19 `8bbb71ca-efa9-46b7-b2c3-bcd6f2292f72` (8.46s), block 20 `64c72805-6afa-40d5-92d7-29f182967ac4` (7.83s), block 21 `5c1a407f-c9f1-40db-a88b-9766f31c614f` (9.38s), block 22 `176e13d5-7c7e-4c9f-a6f3-c518235fbb6f` (8.46s), block 23 `ea39e1fe-a202-4f32-9adf-8dd2d6f1d032` (8.93s), block 24 `f6de70fe-7981-4712-adfd-cb453554bc58` (9.45s), block 25 `0e2a1b36-7b05-42e1-a33c-f7b7ade2af67` (9.27s), block 26 `bd8cd16c-a48c-4053-bd9f-942146dd3dc9` (7.97s), block 27 `468fd743-993c-4439-8470-db637c3a8ab6` (8.32s), block 28 `f3021c31-2afd-4bce-abb9-f8eb513d9a3f` (8.81s), block 29 `cedecff7-7819-45dc-84cc-67597fbff469` (8.07s), block 30 `205de563-fa55-49e0-bb92-9e3a453b98c0` (9.21s), block 31 `65d2db04-1896-4baf-a83b-74efd7e41952` (8.90s), block 32 `fd84d823-c649-4670-97de-f1e278437455` (7.91s), block 33 `2ff5b3b2-3176-4fd3-84c9-a72b7c33271a` (9.10s), block 34 `cf87505d-aceb-4e84-8d46-a58acf2b19d3` (9.29s), block 35 `cba2dc28-654d-4a33-984e-9c900b5d5f08` (8.23s), block 36 `a126f0aa-d4e9-4111-9407-511a72db5cf1` (9.19s), block 37 `2df168b3-137e-4d9f-a0c9-b184d1096a23` (8.82s), block 38 `dc47a8a9-0dfb-46c0-b19f-6fc22f907ab9` (9.08s), block 39 `cefc610c-f19b-40bb-b8a4-9d3383498310` (9.06s), block 40 `e200e9d7-426a-4df8-8df0-bbcd5fe5e2a8` (9.15s), block 41 `75d4cd00-c836-4281-a760-a0be91bb80e7` (8.75s), block 42 `2138e75f-3cf3-4bcb-991c-5b1c8d71aa42` (8.97s), block 43 `32465e12-244d-4401-8b1e-209f6c822c93` (9.45s), block 44 `7713741d-e682-4fb4-9d8d-9e9190c22f40` (7.86s), block 45 `6049eb68-4e23-45b1-9f5c-4569b92f6777` (8.15s), block 46 `b331c426-dcff-4bf2-be69-4d96a50c98ce` (8.47s), block 47 `137e1a42-2e51-48df-8459-f10f034ddff7` (8.44s), block 48 `fffb88ac-2953-43f7-9459-98980e40d611` (8.64s), block 49 `4b30e0f3-ff51-4096-838f-f101e8a81682` (8.61s), block 50 `8de54721-69da-43cd-91fe-b770cfb0ae20` (8.12s), block 51 `4e7816ff-fd8d-43c0-b803-016d3163e44f` (8.59s), block 52 `241b256b-5906-4897-acf1-b09c2aae8be9` (8.27s), block 53 `1f98aa31-5bcb-47ad-8fac-d892bea37f63` (8.63s), block 54 `47170fab-9e51-4af5-9c7c-14b948d0a3cd` (7.98s), block 55 `5ece18d0-1f7d-441a-b9e3-631402ccef22` (8.46s), block 56 `21e1d125-35c7-43b5-bafe-7f74a42490e3` (8.75s), block 57 `762cc9d5-4349-41c9-a8c4-f597ed4ec497` (8.54s), block 58 `d2020fc8-234c-4d5d-b812-b2575f4af513` (9.25s), block 59 `cf5f38dd-ec5f-49c3-992f-a0959f4f4853` (8.07s), block 60 `34637755-40a3-457a-ab8e-8c29a10ee780` (8.14s), block 61 `b23ad789-5066-4a42-b5a4-8cb6f036b752` (8.60s), block 62 `35585639-9ca4-4d54-a54e-1df904b3673d` (8.67s), block 63 `2d0f2ee0-027d-4fb3-8ffb-2794397d9369` (9.11s), block 64 `625addda-5cac-491e-8775-722c533cbc60` (8.39s), block 65 `3c06c5db-c320-4e0d-80f6-7e4dfaf62b19` (8.98s), block 66 `f3c5c5d7-d585-471c-b716-fd0c311c4297` (8.97s), block 67 `bc828f1f-cd00-43da-9512-5d08c6e68cd4` (8.02s), block 68 `1d8fdcc3-c73f-4758-81d7-ea4a66e256c5` (7.95s), block 69 `0405d6b1-bff6-45dc-85cd-669f8feb92d1` (8.15s), block 70 `a5951b0f-6ad5-4f56-9e00-79f3675d9e5c` (8.53s), block 71 `8eda91d5-1bbb-42f9-a3eb-889b9a4acb6a` (9.30s), block 72 `8a5c8df0-1b8a-4045-8ec5-2aa9dffa6cf4` (8.05s), block 73 `6d047a2f-75b6-457a-b0c3-58f11bd03324` (8.68s), block 74 `4d366085-4a5e-4161-83eb-d7728496876e` (8.98s), block 75 `35dc1f8a-2579-431b-b643-d59a193e830a` (8.56s), block 76 `ca347813-eb01-40c4-9a96-991ceed0eb89` (8.52s), block 77 `90c225cc-1c9d-44ef-8821-f88c1a9175ff` (8.76s), block 78 `8f32a637-28b5-4d92-8daa-29796fcf720e` (8.24s), block 79 `312bb4e9-727c-4510-ad95-52bbfd68d7e4` (8.60s), block 80 `65f0f369-a264-4bb1-999d-8a44d66b9f7c` (8.67s), block 81 `140b82ab-e6e5-4e63-b4a6-ca1e64a3c1aa` (8.30s), block 82 `f13ec100-d90d-4d74-b15a-e824675aaa4e` (8.08s), block 83 `06d4331a-5fea-4866-9ce2-79352449b240` (7.82s), block 84 `7543adde-1218-44e5-bfbd-6227645f16e3` (7.82s), block 85 `31dcaf99-30de-433f-9dd3-58d2f8e3ac27` (7.90s), block 86 `f711f1da-93fc-4fa7-862d-23d61ba9f8ce` (8.91s), block 87 `d1cd4ccc-7376-4c52-b832-d51521dd2fe6` (9.33s), block 88 `552f9cee-6c55-4803-bc07-a704637b16ed` (8.26s), block 89 `742a9636-ced9-4e30-9415-1e2a19fa65fd` (8.63s), block 90 `21892506-9e6e-4c93-bc4b-e52ab628a718` (8.25s).
**Superseded takes are not listed individually — 134 of them.** The keeper per
block is above; every miss was re-sized or re-rolled and the reasoning is in the
three findings above.

### Assembly — completed 2026-08-24, first run, no retries

There is **no assembly job ID**. What makes the run repeatable:

| | |
|---|---|
| Command | `sandbox_exec` → `assemble_final.sh`, **`background: true`** |
| Script path | `$HF_WORKFLOWS/faceless-video/scripts/assemble_final.sh` — **new location** |
| Flags | `--out output/final.mp4 --blocks 90 --manifest pairs.txt --music bed.mp3 --music-vol 0.10` |
| Not passed | `--clip-seconds` (default 10), `--sfx-vol` (default 0.12), `--stepped`, `--song`, `--allow-mismatch`, `--subs` (hard error) |
| Manifest | 90 lines, `blocks/blockNN.mp4 voices/voiceNN.wav`, NN 01–90 aligned |
| Delivered | **864×496, 900.517s, 24.0fps**, asserted `90 × 10s = 900s` within ±1s, decode-validated |
| Mix | voice 1.0, clip SFX n/a (no clip carries audio), music bed measured to **−13.50 dB under the speech**, final loudnorm −16 LUFS |
| **Wall time** | **~12 minutes** (180 downloads + 90-block assembly) |
| Exported | `media_id` `0b2fd755-5c0c-415d-b213-856196b8a91c` |
| Assembler sidecar | `final.mp4.assembly.json`, plus `final_poster.jpg` |

**`narration present in all 90 windows`.** No pair mismatch, **no static head and
no frozen tail on any of the 90 clips**. Six takes tripped the pausey-take WARN
(blocks 1, 6, 30, 46, 55, 62, 73) and were accepted rather than re-rolled — a
known, recorded defect, not a silent one.

**90 WARNs of one kind are expected and correct**: `clip N has NO audio stream`.
Every clip was generated `generate_audio: false` per the house rule, so every
block goes in voice-only. The warning is the assembler noticing there is no
diegetic bed to duck; it is not a fault.

> **⚠ `background: true` was mandatory, and not for the reason the skill gives.**
> The skill says pass `timeout_seconds: 120`. **In this harness the MCP client
> times out at 60s regardless of what `timeout_seconds` says** — verified by a
> 105-second `sleep` that died at 60s with `timed out after 60s` while the tool
> had been given 120. So the 120s foreground budget the skill reasons about is not
> reachable here at all; anything over ~55s must go background and be polled.
> Polled every ~50s throughout, which also holds the 15-minute sandbox lease open.

**The export was a separate call and that was a real risk.** The background
command ended at the `ffprobe`, so the finished 172MB MP4 sat in an ephemeral
sandbox until a follow-up `curl -X PUT` shipped it (`HTTP=200`, 172,565,005 bytes)
and `media_confirm` returned `uploaded`. **Put the upload inside the same chained
command next time** — this is exactly the ch1 v5 loss condition, survived by luck
of timing rather than by design.

### Delivered media — whole URLs, not bare `media_id`s

**Whole `https://` URLs, per the `suwen8` precedent.** A bare `media_id` is not
retrievable without knowing the CDN host and the user-prefixed path, and that has
already cost a session; `CLAUDE.md` names `suwen8` the model for this table for
that reason. **CDN links expire** — archive the MP4 by hand, it is gitignored and
never enters git.

| Asset | `media_id` / job | URL |
|---|---|---|
| **Final deliverable — captions burned** | `cd3c2c19-f32d-4673-85c8-ea69b9e4f05f` | `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/cd3c2c19-f32d-4673-85c8-ea69b9e4f05f.mp4` |
| Assembly output — no captions | `0b2fd755-5c0c-415d-b213-856196b8a91c` | `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/0b2fd755-5c0c-415d-b213-856196b8a91c.mp4` |
| Guqin bed, as mixed | `4563e8ad-fa17-4e5a-8407-2fee5913021e` | `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/4563e8ad-fa17-4e5a-8407-2fee5913021e.mp3` |
| Landscape style key, 2752×1536 | job `717ea032-0a02-4da8-a161-6d77ef8db5ad` | `https://d8j0ntlcm91z4.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/hf_20260824_003016_717ea032-0a02-4da8-a161-6d77ef8db5ad.png` |

**Note the two different CDN hosts.** Generation results are served from
`d8j0ntlcm91z4`; uploaded/exported media from `d2ol7oe51mr4n9`. They are not
interchangeable, and guessing the wrong one yields a 403 that looks exactly like
the egress denial in *Reproduction notes* item 8.

**Final deliverable, measured after the burn:**

| | Assembly output | **Delivered, subtitled** |
|---|---|---|
| Geometry | 864×496 | **1280×720** |
| Duration | 900.517s | **900.516s** (21,601 frames @ 24fps) |
| Size | 172,565,005 bytes | **271,237,325 bytes** |
| Video | — | H.264 High, `crf 20`, `yuv420p`, faststart |
| Audio | — | **AAC 96kHz stereo, stream-copied** — untouched by the burn |
| Captions | none | **burned, 204 cues, Anton** |

### Captions — built, burned, and measured in the burned frame

**Sidecar built and committed** — `inner-canon-lingshu28-longform-v3.srt` and
`.vtt`, **204 cues**, 24,433 bytes. `assemble_final.sh` rejects `--subs` outright,
so the assembler burns nothing; the burn is its own pass, as `CLAUDE.md` requires.

```
node scripts/check_caption_fit.js output/lingshu/ch28/inner-canon-lingshu28-longform-v3.md --format 16:9
node scripts/build_subtitles.js  output/lingshu/ch28/inner-canon-lingshu28-longform-v3.md --format 16:9
```

**Cue timing is exact on this cut, not approximate — and it was verified against
the assembler rather than assumed.** The `Voiceover` line above carries the
assembler's own **measured speech**, so `build_subtitles.js` centres each block on
the same number `assemble_final.sh` centred the audio on. Checked cue-by-cue
against `final.mp4.assembly.json`'s `speech_abs_s`: **maximum drift 0.037s across
all 90 blocks**, and blocks 1 and 90 are exact to the millisecond. The 0.037s is
the assembler rounding speech to two decimals in its sidecar, not a timing error.

**The burn.** Ran in the Higgsfield sandbox, not here — this host cannot fetch the
render (*Reproduction notes* item 8). Exactly the two-step command
`build_subtitles.js` prints, including its house call to **scale rather than
letterbox**: the delivered 864×496 is ~2% wider than true 16:9, and the house rule
takes the stretch over pillarboxing.

| | |
|---|---|
| Step 1 | `ffmpeg -i …srt -f ass -` then `sed` PlayRes to **1280×720** |
| Step 2 | `scale=1280:720` **then** `subtitles=…ass` — in that order |
| Style | `FontName=Anton, Fontsize=44, Outline=3, Shadow=1, Alignment=2, MarginL/R=96, MarginV=60, WrapStyle=0` |
| Encode | `libx264 -preset veryfast -crf 20 -pix_fmt yuv420p`, audio `-c:a copy` |

**Why step 1 is not optional:** ffmpeg's SRT→ASS converter hardcodes `PlayResX
384`, and libass scales the style by the PlayRes-to-frame ratio — leaving it alone
draws Anton at ~3.3× and runs every line off frame.

**Anton was confirmed present in the burning environment, not assumed.** The
sandbox ships Metropolis and Montserrat only; Anton was installed from Google Fonts
and `fc-match Anton` was checked before the burn. A silent libass fallback voids
every measurement `build_subtitles.js` made — rendering the same cue with a
deliberately bogus font name produced **3 lines at 36px** against Anton's **2 lines
at 26px**, which is what that failure would have looked like.

**Captions were measured in the rendered frame, by pixel.** Cues were burned onto a
black plate at five sample times and the white text bounding box measured:

| Sample | Cue | Lines | Text box | Left/right margin | Bottom margin |
|---|---|---|---|---|---|
| 0:03 | 1 | 2 | 594px wide | 343 / 343 | 65px |
| 2:22 | 32 — **the widest line in the cut** | 2 | **599px** | 340 / 341 | 65px |
| 12:44 | 174 | 2 | 594px | 343 / 343 | 65px |
| 12:47 | 175 — the over-budget block 77 clause | 2 | 550px | 365 / 365 | 68px |
| 14:56 | 204 — the end card | 2 | 598px | 341 / 341 | 65px |

**Never more than two lines, never nearer than 340px to either edge, never nearer
than 65px to the bottom.** That is the wrap guarantee actually verified rather than
predicted.

> **⚠ Finding: `caption_metrics.js` overestimates Anton's width by ~1.67×.**
> For the widest line in this cut the model computes **1000.6px** against a 1001px
> budget — i.e. it reports the cut as *only just* fitting. libass renders that same
> line at **599px**. Measured average advance is **0.216 em**; the model assumes
> **0.361 em**.
>
> **This is safe but wasteful, and it is not this cut's to fix.** Every line still
> fits — the error is entirely in the conservative direction, so no caption has ever
> overflowed. But the real usable width is 1088px, so the line budget could be ~83
> characters instead of ~50, or `Fontsize` could rise from 44 to roughly 70 and
> still fit two lines. At 44 the rendered cap height is **26px on a 720px frame,
> 3.6%** — legible, but below the 5–8% that broadcast captioning targets.
>
> **Do not change `scripts/lib/caption_metrics.js` as part of this cut.** The
> sidecar committed beside this document was built to the current model and is
> already burned into the delivered file; re-tuning the metrics re-wraps every cue
> and invalidates it. It is a follow-up that should re-derive the budget, re-build
> all five rendered cuts' sidecars, and be verified the same way — by burning and
> measuring pixels, which is how this was caught.

**`check_caption_fit.js` reports one over-budget clause, block 77**, at 2351px
across 140 characters. **This is a direct and accepted consequence of a voice fix.**
The line originally read *"a government: twelve offices, a sovereign, a chancellor,
a general"* — a four-item comma list, measured at a 3.1s delivery penalty. Removing
the commas fixed the take and produced one wide clause. The sidecar splits it across
cues 173–175 and, as the 12:47 row above shows, it renders **two lines at 550px**.
Per `SKILL.md`: **a wide clause is caption churn, never a re-take.** Recorded, not
silently accepted.

### Reproduction notes

Everything below cost time or credits on this run and is written so the next cut
does not pay for it again. **Items 1, 2 and 4 have been folded into `SKILL.md`;**
the rest are specific to this environment or this cut.

**1. The workflow scripts have moved, and the skill's paths are dead.** `ls` on the
documented path failed outright. Found with `find / -name 'assemble_final*'`:

| Script | Path now |
|---|---|
| `assemble_final.sh` | `$HF_WORKFLOWS/faceless-video/scripts/assemble_final.sh` |
| `speech_metrics.sh` | `$HF_WORKFLOWS/narrator/scripts/speech_metrics.sh` |

**Read the assembler before writing to it.** Doing so is what found the speech
window; the script is the only accurate statement of its own gates.

**2. The speech window in `SKILL.md` was wrong and it cost ~16% of this render.**
Full account in *Voiceover* above. In short: **7.8–9.5s, not 8.6–10.0s**, and the
ceiling is the half that moved. 224 takes were generated for 90 blocks.

**3. The MCP client times out at 60s no matter what `timeout_seconds` says.** A
`sleep 105` submitted with `timeout_seconds: 120` returned `timed out after 60s`.
**Anything over ~55s of sandbox work must use `background: true` and be polled.**
The skill's advice to pass `timeout_seconds: 120` describes a budget this harness
cannot reach.

**4. `DROWN IN MUSIC` blocked eight clip submissions, and the trigger is not audio
vocabulary.** Blocks 17, 19, 41, 49, 52, 67, 72 and 86 were auto-matched to that
preset and rejected. The common factor is **temporal-sequencing language** —
*"then"*, *"one after another"*, *"in sequence"*, *"beat by beat"* — which reads as
a music-video edit instruction. Re-submitting with
`declined_preset_id: "f1821f84-945b-4cd1-9085-1f479db0028e"` cleared all eight
unchanged. **Pre-decline it on every longform batch**; rewriting the prompt is not
necessary and loses the beat.

**5. One `nsfw` rejection, and the phrasing that caused it was not about people.**
Block 86 (job `240c08c0-1dec-462a-924e-209e017ec634`) described *"three figures…
each tipping back"* — read as falling bodies. Re-cut with objects only, *"three
brushed ink ovals"*, and it cleared first retry as
`ab68f351-8e49-480d-99a2-41a7c2a3ed44`. **A verb implying a body losing its footing
is the trigger, not the subject matter.** Contagious yawning is unavoidably about
people; describe the marks on screen instead.

**6. The Higgsfield MCP server reconnected mid-run under a new tool prefix.**
`mcp__higgsfield__*` disappeared and the same tools returned as
`mcp__6989d631-…__*`. **The sandbox and everything in `/home/user/` were destroyed
with it.** Nothing was lost only because the render had already been exported.
The lesson is item 7.

**7. Reserve the upload slot before the producing command, and chain the `PUT`
into it.** The assembly run did not, and left a 172MB MP4 in an ephemeral sandbox
between two calls — the ch1 v5 loss condition, survived by timing rather than by
design (see *Assembly* above). **The caption burn did it correctly**: the slot was
reserved first and `curl -X PUT` was the last link of the same `&&` chain, so the
subtitled file could not be stranded. Do it that way every time. One slot,
`24462f3e-424a-4f17-9f8e-65dbdc7a9278`, was reserved and abandoned when the burn was
deferred across a server reconnect — it holds no bytes; ignore it.

**8. This host cannot reach the media CDN or S3, and it is a policy denial, not a
fault to work around.** `curl` to `d2ol7oe51mr4n9.cloudfront.net`,
`d8j0ntlcm91z4.cloudfront.net` and the S3 upload bucket all return
`CONNECT tunnel failed, response 403`; the agent proxy's own status endpoint logs
each as `connect_rejected — gateway answered 403 to CONNECT (policy denial)`. The
repo host therefore **cannot download a render, and cannot upload one.**

> **Consequence for every future cut: media work happens in the sandbox, not here.**
> The `.srt` was moved in as **gzip + base64 in a single `sandbox_exec` command** —
> 24,433 bytes of subtitle compressed to a 13,168-character argument, inside the
> 16,000-character command limit. That is the transfer channel for any text file
> this host needs to put in front of `ffmpeg`. It is one call and it needs no
> external host.

**9. `caption_metrics.js` overestimates Anton by ~1.67× — found by burning and
measuring, not by reading.** Full numbers in *Captions* above. It errs entirely in
the safe direction, so nothing has ever overflowed, but the captions across all five
rendered cuts are smaller and more wrapped than the frame allows. **Left unchanged
deliberately:** re-tuning the model re-wraps every cue and invalidates a sidecar
that is already burned into this deliverable.

**10. The source translation this script rests on is not in the repo.**
`inner-canon-lingshu28-translation-v2.md` is referenced by both v2 and v3 and was
**deleted in commit `b77cd86`**. It is recoverable —
`git show b77cd86^:output/lingshu/ch28/inner-canon-lingshu28-translation-v2.md` —
but every citation in the *Source mapping* section points at a file no working tree
holds. Inherited from v2, not introduced here, and worth resolving before v4:
either restore it or re-point the mapping at the commit.

**11. Nobody has watched this render.** It was assembled, `ffprobe`d, burned, and
its captions were measured **by pixel in the rendered frame** — line count, box
width and all four margins, at five sample times. That is a real check and it is
reported above as one. **It is not a viewing.** No frame of the video imagery has
been seen by a human or by me: not the cast, not the tally board, not one of the
ninety clips. Per `CLAUDE.md`, the visual QA pass is outstanding, and the shot list
records what was *asked for*, not what was verified as delivered.

---
## Deliverables the assembler cannot produce

Of the four `CLAUDE.md` requires, **two were produced in this run** and two remain
hand work at edit time.

| Requirement | Status |
|---|---|
| **Captions, burned** | **Done.** Burned into the delivered file — see *Captions* above. |
| **Music** | **Done at assembly.** `--music bed.mp3`, mixed −13.50 dB under speech. Licence **not cleared** — see below. |
| **History lower-third** | **Hand work.** *"Presented as history & philosophy"*, small, on screen inside **block 1 (0:00–0:10)**. |
| **End disclaimer card** | **Hand work.** The mandated string over **block 90 (14:50–15:00)**, which was rendered as a plain dark plate with drifting ink grain for exactly this purpose. |
| **Human editorial credit** | **Hand work**, on the end card and in the description. |
| **On-screen classical text, eleven cards** | **Hand work.** None of the eleven carries its Chinese text in the render. |

### Music — sourced, mixed, licence UNRESOLVED

| | |
|---|---|
| Track A | **《陽關三疊》 Yangguan Sandie** — *Three Refrains on the Yang Pass*, from 【琴學入門】 *Qinxue Rumen* (1867). 350.09s |
| Track B | **《醉漁唱晚》 Zuiyu Changwan** — *The Evening Song of the Drunken Fisherman*, from 【天聞閣琴譜】 *Tianwen Ge Qinpu* (1876). 286.96s |
| Performer | **Charlie Huang (Charles R Tsua)**, solo guqin with nylon strings, recorded at Shaoyun Xuan, Birmingham |
| Source | Wikimedia Commons |
| Licence | **CC BY-SA 3.0** — attribution **and share-alike** |
| Bed built | A → B → A, 4s crossfades, `loudnorm I=-20`, trimmed to **800.026s**, 12s fade-out ending at 800s |
| Mixed at | assembler measured it and set **−13.50 dB under the speech**; `--music-vol 0.10` |

Both compositions are Qing-dynasty and long out of copyright; **the licence
attaches to the 2010s recording, not the music.**

**The bed ends at 800s = block 81 (13:20)**, which is exactly where the Act V SOUND
direction takes the music out. The last ten blocks — the verdict, the contagion
payoff and the end card — run on room tone alone, as scripted.

> **⚠ The ShareAlike term is an open compliance item and this cut must not be
> published until it is resolved.** You chose *use the guqin, flag the licence*, so
> it is flagged here rather than silently accepted. CC BY-SA can be read as
> requiring the whole episode to be licensed BY-SA, which is not a decision this
> render makes. Attribution is straightforward and is specified in *Finishing
> steps*; the share-alike question is not. Options if it cannot be accepted:
> commission or licence a guqin bed outright, or substitute a CC-BY
> (attribution-only) track — though no attribution-only **guqin** recording was
> found, only guzheng and erhu, which `CLAUDE.md`'s *licensed guqin only* rule does
> not permit. **Re-running the assembly with a different `--music` file is the only
> step that would need repeating; nothing else in this cut depends on the bed.**

### Finishing steps

Written against **this** cut's timings. Block N spans `(N−1)×10` to `N×10` seconds.
**Start from the subtitled file** — the caption burn is already done and is not
repeated here.

**1. Fetch the subtitled render** from the *Delivered media* table above. **Not
from this host:** the CDN is a 403 policy denial here, verified this run. Any
machine outside this environment works.

**2. History lower-third** — *"Presented as history & philosophy"*, small, lower
left, **in at 0:02, out at 0:09**, inside block 1. Required within the first ten
seconds. Keep it clear of the caption safe area: captions sit bottom-centre with a
60px bottom margin and reach 1088px wide at most, so anchor the lower-third above
`y=600` or inset it left of `x=96`.

**3. The eleven quotation cards.** All eleven blocks rendered as plain plates or as
their own diagram, **with no Chinese text in frame** — generated glyphs are
unreliable and could not be visually checked from this host. Add each card's text
by hand, centred, held for the block:

| Block | In–out | Card |
|---|---|---|
| 5 | 0:40–0:50 | 靈樞·口問 — set *Lingshu 28* beneath it in Latin script |
| 10 | 1:30–1:40 | 人之欠者，何氣使然 |
| 14 | 2:10–2:20 | 陰陽相引，故數欠 |
| 30 | 4:50–5:00 | 人之噦者，何氣使然 |
| 36 | 5:50–6:00 | 一曰 — two characters only, very large |
| 38 | 6:10–6:20 | 陽氣和利，滿於心，出於鼻 |
| 56 | 9:10–9:20 | 心者，五藏六府之主也 — **hold largest and longest; this is the hinge** |
| 58 | 9:30–9:40 | 口鼻者，氣之門戶也 |
| 63 | 10:20–10:30 | 故命曰奪精 |
| 72 | 11:50–12:00 | 凡此十二邪者 — with the twelve riddle characters in a 3×4 grid |
| 74 | 12:10–12:20 | 皆為不足 — four characters, alone |

**Every one of these lands on a block that already carries a burned caption.** Set
the card text in the upper two-thirds of the frame; the bottom 120px is spoken for.

**Block 72's grid must show all twelve characters and they must be countable** —
欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌 — because **block 75's payoff
(12:20–12:30) needs 嚏 to lift out of alignment**. Set 嚏 as its own layer.

**4. Series title card** — block 6 (0:50–1:00) is a plain bloom plate. Add *The
Emperor's Inner Canon · Twelve Small Rebellions*.

**5. End card — 14:50 to 15:00** (block 90). The mandated disclaimer verbatim:
*"A dramatized adaptation of a classical philosophical text. Not medical advice."*
Then, beneath it: *"Written & edited by Joshua Chin"*, and the music credit —
*"Guqin: 陽關三疊 / 醉漁唱晚 performed by Charlie Huang, CC BY-SA 3.0, via Wikimedia
Commons"*. The narrator reads the disclaimer over this block, so it is **already
burned in as a caption**; place the card text above it, not over it.

**6. Description** — the disclaimer string, *Written & edited by Joshua Chin*, the
guqin attribution above with a link to the CC BY-SA 3.0 deed, and cite the chapter
as **Lingshu 28 (靈樞·口問)**, never a bare "Chapter 28".

**7. Upload settings** — general audience, **not** made for kids; tick the
altered-or-synthetic-content box (the cast is AI-generated).

**8. Before any of this, watch the file.** No frame of this render has been seen —
see *Reproduction notes* item 9.

---
## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render — and **re-audited after
the cut to 90 blocks**, because four reckoning items lost their blocks. The slate
rates this chapter **Very Low**, the lowest of the twenty, and this cut is written
to keep it there.

- **Disclaimer** — repo string verbatim: blockquoted at the head of the
  translation, at the head of block 90's narration, on screen as the end card, and
  in the description. Block 90 is extended past the mandated string to clear the
  8.6s floor; **the mandated sentence itself is unaltered**.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim anywhere. **Every needling prescription is excluded**, and §15
  appears only as evidence of a textual seam. Every physiological statement is
  reported as what a text says, and blocks 34, 50, 53, 64, 75 and 80 state directly
  that claims are wrong or that mechanisms are unrelated. **No viewer is told to do
  anything.**
- **The line that needs watching is block 48**, where Fan-di describes his own
  tinnitus, and **block 50 answers it two blocks later** with the modern account and
  no remedy of any kind. The pair must not be split in any cut. Nothing in the
  episode suggests what to do about ringing ears, and nothing should be added at
  edit time.
- **The inquiry conceit needs one guard, and it is in the writing.** A cut framed
  as a trial could slide into *your body is betraying you*, which is a wellness
  frame and the wrong register entirely. **The episode lands on the opposite**:
  blocks 83 and 88 conclude that an ungoverned body is a *better* body and the
  charges are withdrawn. Both are marked non-droppable under *Runtime levers*.
- **Mortality / ageing** — **one reference, block 62**: Fan-di says his mother died
  in the spring and that he has not wept. Reflective, non-graphic, carried entirely
  by a man setting down a fan — **portraits, not bodies**, and not even a portrait.
  No death imagery in the shot list, no lifespan claim, and the word *longevity*
  does not appear in the narration at all.
- **Fertility content** — **absent by a deliberate translation choice.** §8's
  行陰用力 is ambiguous and has been read as sexual exertion; the neutral reading is
  used in the translation and in block 47. The alternative is not staged and not
  mentioned.
- **Indulgence / alcohol** — **absent.** Block 30's setting is an audience with an
  envoy, chosen specifically to keep feast imagery out of the shot list. No vessels,
  no pouring, no drinking anywhere.
- **Parasites (§11) are handled, not avoided.** Block 41 says *worms* plainly and
  block 42 explains why the text reached for them, ending *"specific and physical
  and checkable and entirely wrong"*. **The shot list carries this with objects and
  brush strokes only** — a slackening ink stomach, a valve opening — with **no
  depiction of parasites and nothing anatomical**.
- **Supernatural hooks explicitly debunked by the payoff** — the hooks are *twelve
  things you did not order* and *one system explains all twelve*. The first is a
  description of ordinary physiology; the second is dismantled inside the episode at
  blocks 34, 50, 53, 75, 76, 79 and 80. **The debunk is distributed across four
  acts, not deferred to a closing caveat.**

- **The reckoning survived the cut, but it is thinner — this is the one place the
  15:00 runtime cost compliance content, and it is recorded rather than glossed.**
  Modern accounts still named: **arousal / state transition** as the yawn hypothesis
  (22), the hiccup's **unknown function** and the *that is not a hit* caution (34),
  the **photic sneeze reflex** (40), the **sigh's brainstem circuit and lung
  reinflation** (67), **tinnitus generation in the hearing pathway** (50), the
  **absence of any unified system** (79–80), and **contagious yawning** (86). Blocks
  21, 34, 40 and 86 say *unknown*, *no agreed answer* or *unresolved* explicitly.

  **Four reckoning items lost their blocks in the cut**, and each is covered by a
  survivor rather than simply gone:

  | Dropped | Carried | Was it a compliance item? |
  |---|---|---|
  | brain-thermoregulation yawn hypothesis (v2 29) | block 22 names the state-transition hypothesis; block 21 still says there is no agreed answer | The slate requires *naming the modern hypotheses*. **One of two now.** Flagged as the cut's single real compliance cost — restore v2 block 29 if the runtime is ever raised. |
  | hiccup reflex arc (v2 42) | block 33 keeps the diaphragm and the nerve; block 34 keeps *nobody knows what it is for* | No — the correction survives intact |
  | three kinds of tear (v2 82) | block 64 keeps *crying does not drain a finite supply, and weeping does not take your eyesight* | No — the falsification survives intact |
  | four unrelated explanations (v2 103) | block 79 keeps *there is no single system running the involuntary* | No — the claim survives, its four examples do not |

- **Title and thumbnail honour the educational payoff** — cut title *Twelve Small
  Rebellions*; on-screen framing *Lingshu 28, Oral Inquiry*. **Banned terms
  checked**: no *longevity*, *live to 100*, *ancient secret* or *anti-aging* in the
  script, title or thumbnail direction. **Thumbnail direction:** the empty hearing
  floor beneath a high seat, twelve empty tally slots on the wall, no faces — *he
  put his own body on trial*. Do not use a caricature yawning face.
- **Hedge allocation — three characters speak, so this needs recording.** **Arthur
  retains every compliance hedge without exception**: the state-of-knowledge
  statements (21, 40, 86), the *that is not a hit* caution (34), the falsity of 奪精
  (64), the correction on tinnitus (50), the correction on the tongue (53), both
  seams (75, 76), the modern-is-messier caution (79–80), and the disclaimer (90).
  Dr-Qi carries claims *about the text*, attributed in-line. Fan-di carries vanity,
  objection and one moment of grief. Lei-Gong carries the tally and the observations.
  **No compliance hedge rests on a character voice.** The nearest exceptions are
  block 23 (Vesper stating the chapter's timing claim was correct — bracketed
  immediately by Arthur's block 24) and block 83 (Vesper's *most of you runs without
  you*, which is the episode's thematic conclusion rather than a factual claim about
  physiology).
- **Historical accuracy** — six risks, all handled in-script. (1) Cited on screen as
  **Lingshu 28**, never a bare "Chapter 28". (2) The cross-reference in block 77 is
  cited as **Su Wen 8**, never "chapter 6" — **and it was not re-verified for this
  draft**, see *Source mapping*. (3) The count is **twelve**, against the slate's
  eleven, and **all twelve riddle introductions survived the cut**. (4) The 唏
  reading is **disputed** and block 45 says so on screen. (5) The 皆為不足
  contradiction (75) is our reading, phrased as an observation about the text.
  (6) The §15 retro-fit claim (76) describes what the text does without dating it.
  **Those hedges must survive the edit.**
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload, per the
  slate's §6 open item, which flags this as the project's most under-weighted risk.
  **No character makes a first-person factual assertion about their own expertise** —
  Dr-Qi always reports what the chapter says.
- **Music licensing is an open compliance item, not a cleared one** — see
  *Deliverables* below. The bed used in this draft is **CC BY-SA 3.0**, and the
  ShareAlike term is unresolved against a monetized channel.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — run before generating, and it held.** The shot list is
  low-risk throughout: an empty hall, a high seat, a tally board, a lacquer table, a
  lamp, a silk panel, a slate, ink diagrams. **No restraint or bound-figure
  imagery**, which has tripped the safety filter here before even on innocuous
  subject matter. No bodies, no injury, no falling figures. **Three items were
  watched at prompt stage:** (a) the diagram figures are **outlines, never anatomy**;
  (b) Act III's single-lamp-on-black run is **18 consecutive blocks** (54–71, down
  from 24 in the v2 script) and triggers `IN THE DARK` — pre-declined on every clip
  in the cut; (c) **the empty floor in blocks 1 and 81 must read as an empty space,
  not as a dock with anyone in it** — no figure is ever staged standing in it, which
  is both the visual joke and the safety margin.

---

## Runtime levers

Expressed in blocks, since blocks are the unit that actually costs money.
**90 blocks = 15:00, and that is the policy floor.** The ceiling is 120 (20:00).

> **There is no cut-down lever left. This cut is already at the floor**, which is
> the trade the 15:00 runtime buys: every further trim breaks either the twelve-count,
> a must-not-split pair, or the ending that keeps the episode out of the wellness
> register. If a shorter cut is ever needed it is a different script, not a trim.

**How v3 got from 114 blocks to 90 — the 24 dropped, by v2 block number:**

```
Cold open  4
Act I      13, 15, 18, 21, 25, 27, 29
Act II     41, 42, 46, 50, 53, 60, 62
Act III    73, 77, 82, 83, 86, 90
Act IV     95, 97, 103
Act V      —
```

**Three corrections were made to the v2 lever list while doing it**, and they are
the reason the drop set above is not the one v2 nominated:

1. **v2's list does not sum to 24.** Blocks 46 and 60 appear in two of its
   categories, so the stated 6+4+2+2+4+2+4 names only **22 distinct blocks** — and
   *"do not drop both 29 and 30"* reduces the usable set to 21.
2. **v2 nominated three riddle *introductions* — 45, 59 and 61** (counts three,
   seven and eight). Dropping them narrates nine riddles while block 73 says *"it
   does come to twelve"* and the block-72 grid shows twelve characters. **Their
   elaborations were dropped instead** (46, 60, 62), at identical saving, which also
   spared block 45's argument for the 唏 reading — v2 flagged that as needing a
   hand-edit and it now needs none.
3. **v2 nominated block 100, the only Su Wen 8 comparison.** That is argument #2 of
   the episode, and block 101 — *"In one, you are an administration"* — is
   incoherent without it. **Kept.**

Two further substitutions were made on the same reasoning: **v2 block 87** (the
sigh's brainstem circuit) was reprieved because the slate makes the reckoning
mandatory and v2 103 had already gone, and **v2 block 27** was dropped in its place.
**v2 block 73** was dropped, but the "road" it introduces is used twice afterwards,
so 目者 was folded into block 58 rather than lost.

**Stretch to 20:00 (120 blocks) — add 30.** This chapter has material left over,
and the first item is a compliance restoration rather than an enrichment:

- **Restore v2 block 29, +1** — the brain-cooling yawn hypothesis, so that *both*
  modern proposals are named. **Do this first if the runtime is raised at all.**
- **Restore the other three dropped reckoning blocks, +3** — the hiccup reflex arc,
  the three tear types, the four unrelated explanations.
- **Restore the Act I grammar elaborations, +6** — v2 blocks 13, 15, 18, 21, 25, 27.
  They cost the most and show the least at 15:00, but the agentless-grammar point is
  this cut's whole thesis and they are the cheapest way to deepen it.
- **Act IV, +3** — Su Wen 8 at length: the twelve offices named, and the direct
  comparison staged rather than described. The strongest addition and the most
  on-thesis, since block 77 currently carries it alone.
- **Act I, +2** — the wider 衛氣 doctrine: fifty circuits a day, twenty-five by day
  and twenty-five by night, and how the chapter's clock joins the rest of the canon.
- **Act V, +1** — cross-species contagion, and why a two-body phenomenon is hard to
  study at all.
- **The remaining +14** are the v2 elaborations not listed above; restore by act, and
  renumber once at the end, never mid-production.

**Pairs that must not be split**, in any cut, in v3 numbering: **33+34** (the
half-hit and its hedge), **48+50** (the tinnitus question and its answer —
splitting this leaves a symptom described with no correction, which is a compliance
failure, not an editorial choice), **56+57** (the ruler and the observation that it
is new), **63+64** (the 奪精 claim and its falsification), **74+75** (the unifying
claim and its seam), **61+62** (the fan goes down on 61's shot and 62 is the
reason), and **86+87** (contagion and why the framework cannot hold it).

**Never droppable, for a reason beyond pacing: blocks 83 and 88.** They are the
cut's answer to its own framing. Without them the episode is a trial with no
verdict and reads as *your body is betraying you*, which is the wellness register
this series exists to avoid. **Block 90 is not a lever.**

**Lei-Gong's arithmetic must stay consistent.** Block 20 says four; block 85 says
eleven. If either is cut or edited, the other has to move with it — and block 85's
figure is the one the payoff needs, so change block 20 rather than the tally.

**Act boundaries are re-render units.** Every restoration listed above stays inside
a single act, so no act boundary moves and no act needs recomputing. Renumbering
blocks after a change means regenerating the manifest — do it once, at the end,
never mid-production.
