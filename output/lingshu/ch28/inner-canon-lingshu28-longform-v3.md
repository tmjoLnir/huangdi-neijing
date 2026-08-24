# The Emperor's Inner Canon — Lingshu 28 Longform v3 (15 minutes)

**口問篇第二十八 · Twelve Small Rebellions**

**Not rendered as of this commit — render in progress, draft tier, 2026-08-24.** Target: 16:9 landscape,
`seedance_2_0_mini` 480p, 90 blocks × 10s = **900.0s (15:00)**, MP4. Script is
final and machine-checked against the speech window; job IDs, credit spend and
assembly flags land in the *Production record* below as the run proceeds.

**16:9 landscape is mandated, not inferred.** `CLAUDE.md` § Structure: *"Render
trailers in 9:16 vertical format; long form in 16:9 landscape format."*

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
entirely (通評虛實論). Both halves of the canon run to eighty-one chapters and are
numbered separately, so a bare "Chapter 28" sends a checking viewer to the wrong
text about half the time.

Source translation: **`inner-canon-lingshu28-translation-v2.md`** — the v2
rendering, which tracks the grammatical agent of every answer, and that is this
cut's entire spine. Companion trailer: `inner-canon-lingshu28-trailer-v2.md`,
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

### Writing constraint — sized to the 8.6–10.0s window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors, computed as `--clip-seconds − 1.4` to `--clip-seconds`. Word budgets are
`SKILL.md` step 3, **pooled across all 29 kept takes from the four rendered cuts,
re-pooled 2026-08-13**:

| Voice | Pooled rate | Words per block | Blocks here | Status |
|---|---|---|---|---|
| Arthur | 3.77 w/s | **33–37** | 41 | measured, 17 takes |
| Xavier (Fan-di) | 4.52 w/s | **39–45** | 13 | measured, 4 takes |
| Vesper (Dr-Qi) | 4.29 w/s | **37–42** | 31 | measured, 5 takes |
| Zane (Lei-Gong) | 5.45 w/s | **47–54** | 5 | measured, 3 takes — **bimodal, see below** |

**Every line in this script has been machine-checked against the window above**,
counting tokens that contain a letter or digit, so a spaced em-dash is not counted
as a word. All 90 are inside their voice's window.

**This is the correction that made v3 necessary.** The v2 script was written to
`SKILL.md`'s 2026-08-04 rates, where Zane was marked `UNMEASURED` and guessed at
34–39 words. He is in fact **the fastest voice in the cast at 5.45 w/s** and needs
**47–54 words**; a 35-word Zane line has been measured at **6.23s, 2.4s under the
floor**. Xavier's window also moved up, to 39–45. Eighteen lines were rewritten:

| Voice | Blocks re-sized | Was | Now |
|---|---|---|---|
| Zane | 20, 39, 69, 73, 85 | 34–36 words | 48–51 words |
| Xavier | 3, 7, 10, 15, 27, 30, 43, 48, 51, 55, 82, 88 | 36–38 words | 40–43 words |
| Arthur | 42 | 32 words | 37 words |

**Zane at 50 words is bimodal — do not read a single result as settled.** He
cleared at 9.539s and 9.676s on two cuts, then returned 8.066, 8.107 and 8.438s on
three consecutive Lingshu 8 rolls. His five blocks here are written at 48–51,
inside the window with margin on both sides.

Four consequences shape every line below, and none of them is stylistic:

- **The short interjection is dead.** Under an 8.6s floor there is no quick jab,
  and `--clip-seconds` moves the window rather than widening it. **Every character
  line here is a full paragraph.** This bites hardest on the inquiry conceit: a
  courtroom runs on short exchanges, and none are available, so Fan-di's
  prosecution is written as a series of statements rather than as cross-examination.
- **The rates are survivor-biased.** They are what *passing* takes delivered; across
  every recorded attempt Arthur runs nearer 3.04 w/s. These counts are sized for the
  fast mode and will regularly return over the ceiling.
- **The run-to-run spread exceeds the window.** Identical 26-word text came back at
  **10.23s and 7.79s** on consecutive generations — 2.44s apart on a window 1.4s
  wide. Re-roll once before rewriting; expect misses on **either** side.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s. Padding a thin line with sentence breaks passes the duration gate
  and trips the pause warning. **No line here hands a voice a comma-separated list
  of three or more items** — measured at a 3.1s penalty at fixed word count, more
  than twice the width of the whole window.

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
| 4 | Dr-Qi (Vesper) — no defendant | Then I should tell you at the outset that your inquiry has a difficulty. You have twelve offences and no offender. Nothing in this chapter decides to do any of it. There is no one here to charge. |

**ON-SCREEN TEXT — block 5.** Card: **靈樞·口問**, brushed, with *"Spiritual
Pivot, chapter 28"* beneath in small type.

| Block | Beat | Narration |
|---|---|---|
| 5 | Arthur (V.O.) — the citation | The book is the Spiritual Pivot, the practical half of the Yellow Emperor's Inner Canon. Chapter twenty-eight, titled Oral Inquiry. Twelve questions, twelve answers, and not a single one of them names a culprit. |

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
| 10 | Fan-di (Xavier) — count one | Count one. When a person yawns, what qi brings it about? And be precise about it, physician. I was standing mid-proclamation, before the whole court, and my own face opened like a gate in a wall that nobody had been defending. |
| 11 | Dr-Qi (Vesper) — the circuit | Defensive qi keeps a circuit. Through the daylight it runs in the yang, at your surface, where the weather is. At midnight it goes down into the yin. Nobody sends it there. It is simply the hour. |
| 12 | Dr-Qi (Vesper) — the two rules | Yin governs the night, and the night is for lying down. Yang governs what is above; yin governs what is below. Two rules about direction, and everything that follows is built out of them and nothing else. |

**VISUAL:** On the silk panel, ink draws a standing figure in outline. A bright
band circles its surface at the level of the skin. A second, darker band pools at
the base and thickens. The two begin to strain against one another.

| Block | Beat | Narration |
|---|---|---|
| 13 | Dr-Qi (Vesper) — the mechanism | Here is the mechanism. Yin qi has already gathered low in you, and yang qi has not finished its day. The yang draws upward. The yin draws downward. Both pull at once, and neither one of them yields. |

**ON-SCREEN TEXT — block 14.** Card: **陰陽相引，故數欠**.

| Block | Beat | Narration |
|---|---|---|
| 14 | Dr-Qi (Vesper) — the answer | Yin and yang draw against one another, and therefore one yawns, and yawns again. Read the verb. One yawns. Not the emperor yawns, not the heart orders a yawn. It simply happens, and it happens in the passive. |
| 15 | Fan-di (Xavier) — the objection | That is not an acquittal, that is an insult. You are telling me that the sovereign of this realm, standing in front of forty ministers, was overruled by weather moving through his own legs. There must be an appeal somewhere in this. |
| 16 | Dr-Qi (Vesper) — no appeal | There is no appeal, and there is also no insult in it. You were not overruled. You were never consulted. A thing can only overrule you if it was ever taking instructions from you in the first place. |

**VISUAL:** The tension on the panel resolves. The bright band thins to nothing;
the dark band fills the figure; the outline's eyes close. Then it reverses,
smoothly, and the eyes open. The same two bands, no new ink.

| Block | Beat | Narration |
|---|---|---|
| 17 | Dr-Qi (Vesper) — sleep | When yang qi is spent and yin qi is full, the eyes close. That is not a description of falling asleep. In this system it is the cause of falling asleep, and it uses no new parts. |
| 18 | Dr-Qi (Vesper) — waking | And when yin qi is spent and yang qi is full, you wake. The same two quantities, the same seesaw, simply read at the other end of the night. Nothing at all has been added to explain either. |
| 19 | Arthur (V.O.) — what it bought | Count what that bought. Yawning, falling asleep and waking up, from one moving quantity and one rule about direction. Three phenomena, one mechanism, and still nobody in charge of a single one of them. |

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
| 22 | Arthur (V.O.) — the hinge | Another says a yawn marks a change of state. Not tiredness, but the hinge: sleep into waking, waking into sleep, boredom into attention. That proposal is the oldest and the best supported of them. |

**VISUAL:** Back to the hall, hard cut. Dr-Qi has not moved.

| Block | Beat | Narration |
|---|---|---|
| 23 | Dr-Qi (Vesper) — the score | Then note what this chapter had already claimed, two thousand years before anyone could measure anything. The yawn belongs to the hinge between sleeping and waking. It placed the yawn where the modern account still places it. |
| 24 | Arthur (V.O.) — two scores | Right about when. Wrong about why. Keep those two scores well apart, because we will be marking them separately eleven more times in this episode, and they never once merge into a single verdict. |
| 25 | Arthur (V.O.) — the second score | And there is a second score, which is the one this episode is really keeping. Every answer so far has had no author. Nothing decided, nothing chose. Watch carefully how long that holds. |
| 26 | Dr-Qi (Vesper) — nine more | It holds for nine more of them. I will take those nine quickly, because the interest is not in any single one of them. The interest is that not one of them has anybody at all at the wheel. |
| 27 | Fan-di (Xavier) — then two | Nine more. Which leaves two, and those two must have somebody at the wheel, and I would very much like to be given his name. So far this inquiry has produced no defendant at all and a great deal of philosophy. |
| 28 | Arthur (V.O.) — act out | He is right that there are two. He is going to wish there were not, because the two that have an author are the two that hurt, and the author the chapter names is him. |

---

# ACT II — *Ten Counts, No Defendant* · blocks 29–53 · 4:40–8:50

**SOUND:** The pace changes. A dry brush ticking on paper, not quite regular.
**VISUAL:** The tally board behind Fan-di starts filling. One slot per riddle
answered, marked by Lei-Gong from the floor. The panel wipes between riddles.

| Block | Beat | Narration |
|---|---|---|
| 29 | Arthur (V.O.) — the act frame | Nine riddles, and I am going to move quickly through them, because the point is not any one of them. The point is a sentence you will hear nine times without a single person in it. |

**ON-SCREEN TEXT — block 30.** Card: **人之噦者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 30 | Fan-di (Xavier) — count two | Count two. When a person hiccups, what qi brings it about? I ask because it happened during a formal audience with a foreign envoy, and the man plainly found it a great deal funnier than the treaty we had come to sign. |
| 31 | Dr-Qi (Vesper) — the ordinary traffic | Grain enters the stomach. Stomach qi pours upward into the lung. That is the ordinary traffic and it runs one way. Note that the grain is the subject of that sentence, and the grain has no opinions. |
| 32 | Dr-Qi (Vesper) — the collision | Now let old cold qi still be sitting there when new grain qi arrives. New and old fall into disorder. True and aberrant attack one another. The qi combine, run backwards, and leave again through your mouth. |
| 33 | Dr-Qi (Vesper) — the half-hit | Before you dismiss the stomach, note this. A stomach stretched full really does set hiccups off, and the nerve that reports a full stomach passes the diaphragm on its way. The organ was not picked at random. |
| 34 | Arthur (V.O.) — the hedge | Careful. That is the trap this whole episode is about. A real trigger, attributed to the wrong organ, by a mechanism that does not exist. What a hiccup is for, incidentally, nobody knows. |
| 35 | Arthur (V.O.) — count three | Count three, the belch. Cold lodges as a guest in the stomach, turns back, disperses upward from below, and comes out again. The same shape, and the same absence of anybody deciding anything at all. |

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
| 39 | Lei-Gong (Zane) — the sun | May I ask about the sun, since we are on sneezing. Every single time I walk out of this hall into bright daylight I sneeze exactly twice and never once three times. My father does it and my sister does it too. Is that anywhere in your twelve? |
| 40 | Arthur (V.O.) — the photic sneeze | It is not, and it is entirely real. Somewhere between a sixth and a third of people sneeze on stepping into bright light. It runs in families, it is inherited, and the mechanism is unknown. |
| 41 | Dr-Qi (Vesper) — count five | Count five, and I warn you it is unglamorous. When the saliva runs down. Food and drink enter the stomach; if there is heat there, the worms stir; the stomach slackens; the spring under the tongue opens. |
| 42 | Arthur (V.O.) — the worms | Worms, meant literally. Intestinal parasites were an ordinary fact of life here, reached for exactly the way cold and wind are reached for. It is a mechanism that is specific and physical and checkable and entirely wrong. |
| 43 | Fan-di (Xavier) — count six | Count six, and this one I have never asked anybody about. After a man has finished weeping his breath keeps catching by itself, in small shudders that he cannot stop. What is that? Nothing at all seems to be deciding it. |
| 44 | Dr-Qi (Vesper) — the catching sob | Yin qi is full and yang qi is thin. Yin moves quickly, yang moves slowly. Yin floods until yang is cut off from it entirely. And so the breath catches, and catches, and will not level out. |
| 45 | Arthur (V.O.) — the dispute | This one is disputed and we will say so. The character can be read as shivering rather than sobbing, and one translation in circulation reads it that way. We think that reading is mistaken. |
| 46 | Dr-Qi (Vesper) — count seven | The reason is count seven, which is shivering and has its own separate answer. When a person shivers with cold: cold qi lodges as a guest in the skin, yin is full, yang is thin. One line. |
| 47 | Dr-Qi (Vesper) — count eight | Count eight. If the stomach is not full, the vessels are empty. If the vessels are empty, the sinews go slack and idle. And if the sinews are slack, effort spends something that cannot be paid back. |
| 48 | Fan-di (Xavier) — count nine | Count nine, and I have wanted to ask this one for years. At night, when the whole palace has gone silent, my ears ring. There is nothing there and nobody else hears it. What is making a noise inside my head? |
| 49 | Dr-Qi (Vesper) — the same premise | The ears, exactly like the eyes, are where the great vessels gather. When the stomach is empty those vessels are depleted. Being depleted, they drain downward. And where a vessel has run dry, the ear begins to ring. |
| 50 | Arthur (V.O.) — simply wrong | That one is simply wrong and we will not soften it. Ringing in the ears is generated in the hearing pathway, usually following damage further out. It has nothing whatever to do with an empty stomach. |
| 51 | Fan-di (Xavier) — count ten | Count ten, and it is the one that has always bothered me the most. Sometimes a man bites his own tongue, and not carelessly. His own jaw and his own tongue, and somehow he still contrives to ambush himself with them. |
| 52 | Dr-Qi (Vesper) — out of turn | Qi turns back and runs upward, and the vessel qi arrives out of turn. When shaoyin qi arrives you bite the tongue; when shaoyang arrives, the cheek; when yangming arrives, the lip. Each one has its place. |
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
| 55 | Fan-di (Xavier) — count eleven | Count eleven. When a man grieves, and water comes out of his face without his leave, what qi is doing that to him? And where, precisely, does all of that water come from? I have never once understood any of it. |

**ON-SCREEN TEXT — block 56.** Card: **心者，五藏六府之主也**. **This is the
episode's hinge card.** Hold it longer than any other.

| Block | Beat | Narration |
|---|---|---|
| 56 | Dr-Qi (Vesper) — the ruler | Begin where the chapter begins. The heart is the ruler of the five zang and the six fu. Not the largest, not the strongest. The one the others answer to. Everything after this depends on that word. |
| 57 | Arthur (V.O.) — stop there | Stop there. Ruler. For ten answers running, this chapter has not had a ruler in it anywhere. Qi moved because it was the hour. Now, suddenly, something in the body is giving orders. |

**ON-SCREEN TEXT — block 58.** Card: **口鼻者，氣之門戶也**.

**VISUAL:** On the panel, three things are drawn and then held for the rest of the
sequence: a seated figure at the centre, a rising line from body to eye, and two
small gates at the mouth and nose. Nothing is wiped. This diagram accumulates.

| Block | Beat | Narration |
|---|---|---|
| 58 | Dr-Qi (Vesper) — road and gates | The eyes are where the great vessels gather, and they are the road that fluid climbs. The mouth and nose are the gates of qi. A ruler and a road and a pair of gates. Watch what grief does to them. |
| 59 | Dr-Qi (Vesper) — the heart moves | Sorrow, grief, care and worry — and the heart is moved. The heart being moved, all five zang and all six fu are shaken. Not saddened. Shaken. That word is physical, and the text chose it quite deliberately. |
| 60 | Dr-Qi (Vesper) — the chain | They being shaken, the great vessels respond. The vessels responding, the fluid road opens. The road being open, the tears come out of you. Six links, in order, and the very first link of all is a feeling. |
| 61 | Arthur (V.O.) — why that matters | That distinction is the whole reason this episode exists. Ten answers where nothing was the cause. Now an answer where something is. The cause is grief, and grief belongs to the person having it. |

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
| 65 | Arthur (V.O.) — count twelve | Count twelve, the last of them, and the one the chapter gets closest to right. When a person sighs — the long breath drawn and let go — what qi is it that brings it about? |
| 66 | Dr-Qi (Vesper) — the cords | Worry and brooding draw the cords of the heart tight. The cords tight, the road of qi narrows. Narrowed, it does not run freely. And so one sighs, to stretch it open again and let it out. |
| 67 | Arthur (V.O.) — what a sigh does | A spontaneous sigh reinflates parts of the lung that have quietly collapsed and restores its stretch. A small cluster of cells in the brainstem exists to generate them, every few minutes, all day. |
| 68 | Arthur (V.O.) — right shape, wrong organ | Something constricted, and a breath that opens it. Right shape, right company, wrong organ — it is the lung, not the cords of the heart. The closest this chapter comes, and still a miss. |

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
| 72 | Arthur (V.O.) — the summing | And then the chapter sums. All these twelve, it says, are strange qi running into the hollow openings of the body. One sentence, gathering everything we have heard so far into a single claim. |
| 73 | Lei-Gong (Zane) — the count | Twelve. I counted them on the board as they came, and it does come to twelve exactly, with none of them left over and none of them counted twice. I would like that entered in the record, because I was told to sit at the back and be quiet. |

**ON-SCREEN TEXT — block 74.** Card: **皆為不足** — four characters, alone, held.

| Block | Beat | Narration |
|---|---|---|
| 74 | Arthur (V.O.) — the sentence | Then one more clause, and it is the sentence the chapter has been walking toward from the beginning. Wherever the trouble is, in every case, something is missing. Not an excess. Something absent. |

**VISUAL:** On the grid of twelve, one character — 嚏, the sneeze — quietly lifts
out of alignment and sits proud of the others. Nobody on screen reacts.

| Block | Beat | Narration |
|---|---|---|
| 75 | Arthur (V.O.) — the small seam | And at that exact moment it splits. Go back six minutes. The sneeze was explained by qi being harmonious, abundant, running freely. That is not something missing, and nobody in the chapter notices. |
| 76 | Arthur (V.O.) — the large seam | That is the small seam. Here is the large one. Ten of the twelve are explained with nobody in charge, and then the eleventh opens by installing a ruler over the whole body. |
| 77 | Dr-Qi (Vesper) — the other chapter | And it is not an isolated slip. Another chapter of this same canon builds the entire body as a government: twelve offices, a sovereign, a chancellor, a general. Nothing at all in it happens without an officer. |
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
| 81 | Arthur (V.O.) — the question | Which leaves the question the inquiry was convened to answer, and it is a better question than the emperor knew when he first asked it. Who, exactly, is supposed to be in charge of you? |
| 82 | Fan-di (Xavier) — the accused | I convened this inquiry to find a culprit. I have ten offences with nobody at all behind them, and two behind which there is only me grieving, which is not a crime in any code that I have ever signed. |
| 83 | Dr-Qi (Vesper) — the held answer | No. And here is the part I have been keeping back. A body that needed a ruler for all twelve would be a worse body. Most of you runs without you, and that is the mercy in it. |
| 84 | Arthur (V.O.) — the achievement | That is the chapter's genuine achievement, and it is easy to miss under the wrong mechanisms. It looked at twelve things a body does unbidden and did not once reach for a spirit or a fault. |

**VISUAL:** Lei-Gong alone in frame, slate held up, eleven marks on it.

| Block | Beat | Narration |
|---|---|---|
| 85 | Lei-Gong (Zane) — the last tally | Eleven. That is how many times I have yawned since we began this morning, and I counted every one of those too. Every single one of them started because somebody else in this room had just done it first, and not one of them was mine to begin with. |
| 86 | Arthur (V.O.) — contagion | He has found the one thing the chapter cannot hold. Yawning is catching. It is documented in humans, in chimpanzees, and in dogs watching people, and the mechanism behind it is entirely unknown. |
| 87 | Dr-Qi (Vesper) — one body | And no answer in this chapter can reach it. Every one of them has a single body in it. One person, one set of channels. Catching a yawn takes two people, and two people is not in the system. |
| 88 | Fan-di (Xavier) — the charges withdrawn | Then I withdraw the charges. All twelve of them. It appears that I govern a great many things and that the inside of my own mouth is not among them, and I am reliably told this is the good news. |
| 89 | Arthur (V.O.) — the close | You have very likely yawned during the last fifteen minutes, and nobody can tell you why. An emperor put his own body on trial for it, and the verdict was that there was nobody to try. |
| 90 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we mark plainly, in every episode, where the evidence does not support it. |

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

**RENDER IN PROGRESS — this section is filled act by act as the run proceeds.**
The record is the crash-recovery file; a lost session with unrecorded IDs means
paying twice.

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
