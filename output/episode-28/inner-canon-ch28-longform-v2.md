# The Emperor's Inner Canon — Chapter 28 Longform v2 (19 minutes)

**口問篇第二十八 · Twelve Small Rebellions**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **16:9 landscape
1280×720**, `seedance_2_0_mini`, 114 blocks × 10s = **1140.0s (19:00)**, MP4.

**The 16:9 default is an inference and needs confirming before a full run.**
`CLAUDE.md` mandates 9:16 for trailers only; landscape is the YouTube main-feed
assumption. It is ~114 clips to get wrong.

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
entirely (通評虛實論). Both halves of the canon run to eighty-one chapters and are
numbered separately, so a bare "Chapter 28" sends a checking viewer to the wrong
text about half the time. See the numbering warning in
`inner-canon-ch28-translation-v2.md`.

Source translation: **`inner-canon-ch28-translation-v2.md`** — the v2 rendering,
not v1. The two differ in principle and must not be mixed inside one document; v2
tracks the grammatical agent of every answer, which is this cut's entire spine.
Companion trailer: `inner-canon-ch28-trailer-v2.md`.

**Slate position.** Rank **1** of the twenty in `docs/Chronicle of Balance Top20
Chapter Slate.md`, and **slot 1** of the publish sequence — the channel's first
episode. Runtime is set to 19:00 to clear the slate's stated **"18:30+"** format
assumption with margin.

---

## This is the second cut of this chapter, and it sells a different thesis

`inner-canon-ch28-longform-v1.md` is **not superseded**. Both remain; the editor
picks. The Chapter 1 folder already works this way across five trailers, and the
rule there applies here: **no thesis is repeated.**

| | Sells |
|---|---|
| **v1** — *Why We Yawn*, 108 blocks / 18:00 | **the frame** — an emperor clears the room to ask what is not in any book; the payoff is contagious yawning, the thing a cleared room hides |
| **v2** — *Twelve Small Rebellions*, 114 blocks / 19:00 | **the grammar** — twelve acts nobody ordered; the payoff is that the chapter has two incompatible theories of a person inside it |

They share a chapter, a cast and a compliance posture. They share **no act
structure, no dramatic engine and no closing argument**, and every narration line
in this document is newly written. Where a beat necessarily appears in both — the
photic sneeze, 一曰, the falsity of 奪精 — it is written differently and placed
differently, because those are obligations of the source and the compliance rules,
not borrowed structure.

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
2. **The same canon says the opposite.** Su Wen 8 — produced in this repo as
   `output/episode-6/` — builds the body as a government of twelve offices where
   nothing happens without an officer. One canon, two bodies.
3. **The unifying claim does not fit its own list.** 皆為不足 says all twelve are
   cases of something missing; §7 explained the sneeze by qi being harmonious and
   abundant. Nobody notices.
4. **The modern position is messier, not tidier.** There is no single system
   running the involuntary. A hiccup is a reflex arc, a sigh is a brainstem
   circuit, tinnitus is generated in the auditory pathway, a bitten tongue is a
   motor timing error. **Four items, four unrelated explanations.** The chapter's
   real error was not guessing wrong twelve times; it was expecting one answer.

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
holding something back for seventeen minutes: she knows from the first riddle that
the inquiry cannot find a defendant, and she does not say why it does not matter
until block 107. The more Fan-di prosecutes, the stiller she gets.

**Fan-di's arc is the structural form.** Prosecutor (cold open, Act I), then
increasingly uneasy examiner (Act II), then witness against himself (Act III), then
the one who withdraws the charges (Act V). Block 79 is the pivot and it is where
the fan goes down.

**Lei-Gong counts, and the counts are load-bearing**: four yawns at block 26,
eleven at block 109. That arithmetic must survive any edit — see *Runtime levers*.

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
column**, including v1's.

Four consequences shape every line below, and none of them is stylistic:

- **The short interjection is dead.** Under an 8.6s floor there is no quick jab,
  and `--clip-seconds` moves the window rather than widening it. **Every character
  line here is a full paragraph.** This bites hardest on the inquiry conceit: a
  courtroom runs on short exchanges, and none are available, so Fan-di's
  prosecution is written as a series of statements rather than as cross-examination.
- **The rates are survivor-biased.** 3.65 w/s is what Arthur's *passing* takes
  delivered; across every recorded ch1 v5 attempt he averaged **3.04 w/s**. These
  counts are sized for his fast mode and will regularly return over the ceiling.
- **The run-to-run spread exceeds the window.** Identical 26-word text came back at
  **10.23s and 7.79s** on consecutive generations — 2.44s apart on a window 1.4s
  wide. Re-roll once before rewriting; expect misses on **either** side.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s. Padding a thin line with sentence breaks passes the duration gate
  and trips the pause warning.

These remain **arithmetic against measured rates, not measurements**. Treat the
first pass as calibration and budget re-takes explicitly. On ch1 v5 a single block
took **fourteen takes and ~11 credits**; at 114 blocks that gate is the dominant
cost risk in the production.

### How to read this script

`CLAUDE.md` asks for **SOUND / VISUAL / CHARACTER** blocks; `build_subtitles.js`
needs a **three-column narration table**. The two are combined rather than
duplicated, because two copies of 114 lines is how they drift apart:

- **The narration tables below are canonical for words.** Blocks run continuously
  **1–114 across the whole episode**, never per-act; the assembly manifest is flat
  and act-local numbering produces off-by-one errors that are expensive to find in
  a 19-minute render.
- **The SOUND / VISUAL / direction prose between them is canonical for picture and
  performance.** It never restates a line.
- **The speaker is named in the beat column**, not a fourth column — the parser
  reads exactly three, and a fourth would leak into the caption text.

> **Do not insert a table whose first cell is a bare integer anywhere between
> blocks 1 and 114.** `parseNarration` keeps the first consecutive run from block 1
> and stops at the first row that breaks it, so a stray numeric table silently
> truncates the sidecar. Every other table in this document sits before block 1 or
> after block 114, and the ON-SCREEN TEXT card table prefixes its first column with
> `Block` so it cannot collide.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *Insubordination* | 1–10 | 0:00–1:40 | the inquiry convened; no defendant; title; thesis |
| Act I — *No One Gave the Order* | 11–36 | 1:40–6:00 | §2 — the yawn in full; sleep and waking; the agentless grammar |
| Act II — *Ten Counts, No Defendant* | 37–68 | 6:00–11:20 | §3–§8, §11–§13 — nine more riddles, all authorless |
| Act III — *The Two With an Author* | 69–92 | 11:20–15:20 | §9, §10 — weeping and the long sigh; 主 arrives |
| Act IV — *One Canon, Two Bodies* | 93–104 | 15:20–17:20 | §14 — 皆為不足, its seam, and Su Wen 8 |
| Act V — *Who Is in Charge of You* | 105–114 | 17:20–19:00 | the verdict; contagion; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---

# COLD OPEN — *Insubordination* · blocks 1–10 · 0:00–1:40

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
| 3 | Fan-di (Xavier) — the charge | Let the record show that this is an inquiry, not a consultation. Twelve counts of insubordination, committed inside my own person, daily, for as long as I can remember. I intend to find out who is responsible. |
| 4 | Arthur (V.O.) — he is joking | He is joking. The chapter is not. It really is twelve items, and it really does treat each as a case to be answered. The answer it gives to the first is why we are here. |

**VISUAL:** DR-QI enters and does not take the floor. She stands to one side, blue
cheongsam, open bamboo scroll held casually like a tablet, positioned so she can
see both the seat and the empty space where nobody is standing.

| Block | Beat | Narration |
|---|---|---|
| 5 | Dr-Qi (Vesper) — no defendant | Then I should tell you at the outset that your inquiry has a difficulty. You have twelve offences and no offender. Nothing in this chapter decides to do any of it. There is no one here to charge. |

**ON-SCREEN TEXT — block 6.** Card: **靈樞·口問**, brushed, with *"Spiritual
Pivot, chapter 28"* beneath in small type.

| Block | Beat | Narration |
|---|---|---|
| 6 | Arthur (V.O.) — the citation | The book is the Spiritual Pivot, the practical half of the Yellow Emperor's Inner Canon. Chapter twenty-eight, titled Oral Inquiry. Twelve questions, twelve answers, and not a single one of them names a culprit. |

**ON-SCREEN TEXT — block 7.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 7 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon, and this episode is called Twelve Small Rebellions. It is about the parts of you that are not taking orders, and about who a body belongs to. |
| 8 | Fan-di (Xavier) — the pivot | Then we proceed differently. If no one is responsible, tell me instead what is. Something opens my mouth against my wishes at the worst possible moments. It is not nothing. Name it, and I will deal with it. |
| 9 | Dr-Qi (Vesper) — the answer | Qi. Moving on a schedule it did not choose either. It goes out at dawn and in at midnight, the way water goes downhill, and it is not obeying anyone when it does. That is the entire answer. |
| 10 | Arthur (V.O.) — the thesis | Hold on to that, because ten riddles later this same chapter will announce that the heart is the ruler of all the organs. One book, two bodies. One of them governed, and one simply running. |

---

# ACT I — *No One Gave the Order* · blocks 11–36 · 1:40–6:00

**VISUAL:** The hearing set becomes the episode's whole world. Behind Dr-Qi, a
tall blank silk panel that carries every diagram, drawn live in ink as she speaks.
On the wall behind Fan-di, a tally board with twelve empty slots.

**CHARACTER — Fan-di:** prosecuting throughout Act I, fan open on every line.
**CHARACTER — Lei-Gong:** LEI-GONG is *not supposed to be here*. Establish him in
the deep background of the first diagram shot — cinnabar robe, hand drum in his
lap, sitting on the floor behind a pillar with a small slate of his own. He is not
acknowledged until block 26.

**ON-SCREEN TEXT — block 11.** Card: **人之欠者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 11 | Fan-di (Xavier) — count one | Count one. When a person yawns, what qi brings it about? And be precise, physician. I was mid-proclamation, before the whole court, and my own face opened like a gate in a wall nobody was defending. |
| 12 | Dr-Qi (Vesper) — the circuit | Defensive qi keeps a circuit. Through the daylight it runs in the yang, at your surface, where the weather is. At midnight it goes down into the yin. Nobody sends it there. It is simply the hour. |
| 13 | Arthur (V.O.) — the grammar | Notice the grammar of that, because it will hold for the next eleven answers. The subject of the sentence is qi. Not you, not an organ, not a decision. A quantity, and the time of day. |
| 14 | Dr-Qi (Vesper) — the two rules | Yin governs the night, and the night is for lying down. Yang governs what is above; yin governs what is below. Two rules about direction, and everything that follows is built out of them and nothing else. |
| 15 | Arthur (V.O.) — what governs means | Governs is doing less work there than it looks. Nothing is being ruled. It is the sense in which winter governs the cold, or evening governs the dark. A regularity, described, and given a name. |

**VISUAL:** On the silk panel, ink draws a standing figure in outline. A bright
band circles its surface at the level of the skin. A second, darker band pools at
the base and thickens. The two begin to strain against one another.

| Block | Beat | Narration |
|---|---|---|
| 16 | Dr-Qi (Vesper) — the mechanism | Here is the mechanism. Yin qi has already gathered low in you, and yang qi has not finished its day. The yang draws upward. The yin draws downward. Both pull at once, and neither one of them yields. |

**ON-SCREEN TEXT — block 17.** Card: **陰陽相引，故數欠**.

| Block | Beat | Narration |
|---|---|---|
| 17 | Dr-Qi (Vesper) — the answer | Yin and yang draw against one another, and therefore one yawns, and yawns again. Read the verb. One yawns. Not the emperor yawns, not the heart orders a yawn. It simply happens, and it happens in the passive. |
| 18 | Arthur (V.O.) — the image | Two forces pulling opposite ways on the same rope, at the same moment. The yawn is not the winner or the loser. The yawn is the rope trembling, and rope does not have intentions. |
| 19 | Fan-di (Xavier) — the objection | That is not an acquittal, that is an insult. You are telling me that the sovereign of this realm, in front of forty ministers, was overruled by weather moving through his own legs. There must be an appeal. |
| 20 | Dr-Qi (Vesper) — no appeal | There is no appeal, and there is also no insult in it. You were not overruled. You were never consulted. A thing can only overrule you if it was ever taking instructions from you in the first place. |
| 21 | Arthur (V.O.) — it keeps going | Then the chapter does something that ought to be more famous than it is. It simply keeps going. The same sentence, continued, stops being about yawning and starts being about sleep itself, and then about waking. |

**VISUAL:** The tension on the panel resolves. The bright band thins to nothing;
the dark band fills the figure; the outline's eyes close. Then it reverses,
smoothly, and the eyes open. The same two bands, no new ink.

| Block | Beat | Narration |
|---|---|---|
| 22 | Dr-Qi (Vesper) — sleep | When yang qi is spent and yin qi is full, the eyes close. That is not a description of falling asleep. In this system it is the cause of falling asleep, and it uses no new parts. |
| 23 | Dr-Qi (Vesper) — waking | And when yin qi is spent and yang qi is full, you wake. The same two quantities, the same seesaw, simply read at the other end of the night. Nothing at all has been added to explain either. |
| 24 | Arthur (V.O.) — what it bought | Count what that bought. Yawning, falling asleep and waking up, from one moving quantity and one rule about direction. Three phenomena, one mechanism, and still nobody in charge of a single one of them. |
| 25 | Arthur (V.O.) — theory, not list | That is the difference between a theory and a list. A list says yawning happens. A theory says yawning, sleeping and waking are one event, observed at three different moments of the same night. |

**VISUAL:** From behind the pillar, unacknowledged, LEI-GONG yawns. Enormously.
The camera finds him a beat *after* it happens, which is the joke. He makes a mark
on his own slate. Fan-di and Dr-Qi both turn.

| Block | Beat | Narration |
|---|---|---|
| 26 | Lei-Gong (Zane) — the tally opens | May I put something in the record. I have yawned four times since we started and nobody ordered me to either, so by the emperor's own reasoning I should be standing in the dock beside him. |
| 27 | Arthur (V.O.) — remember him | Remember him, and remember the number four. He will be right about something important before the end of this episode, and the chapter will have no answer for him at all. Not one word. |

**VISUAL:** Leave the hall for the first time. The ink diagram persists, but the
background behind it becomes a modern research context rendered in exactly the
same flat ink-wash — a sleep laboratory as a brushed line drawing, no photography,
no faces.

| Block | Beat | Narration |
|---|---|---|
| 28 | Arthur (V.O.) — the modern question | Now the obvious question. Two thousand years on, with sleep laboratories and brain imaging, why do we actually yawn? The honest position is that there is still no agreed answer to that question. |
| 29 | Arthur (V.O.) — cooling | One proposal says a yawn cools the brain. The deep breath and the wide jaw move blood and air, and yawning increases when the head is slightly too warm. Suggestive, contested, and unsettled. |
| 30 | Arthur (V.O.) — the hinge | Another says a yawn marks a change of state. Not tiredness, but the hinge: sleep into waking, waking into sleep, boredom into attention. That proposal is the oldest and the best supported of them. |

**VISUAL:** Back to the hall, hard cut. Dr-Qi has not moved.

| Block | Beat | Narration |
|---|---|---|
| 31 | Dr-Qi (Vesper) — the score | Then note what this chapter had already claimed, two thousand years before anyone could measure anything. The yawn belongs to the hinge between sleeping and waking. It placed the yawn where the modern account still places it. |
| 32 | Arthur (V.O.) — two scores | Right about when. Wrong about why. Keep those two scores well apart, because we will be marking them separately eleven more times in this episode, and they never once merge into a single verdict. |
| 33 | Arthur (V.O.) — the second score | And there is a second score, which is the one this episode is really keeping. Every answer so far has had no author. Nothing decided, nothing chose. Watch carefully how long that holds. |
| 34 | Dr-Qi (Vesper) — nine more | It holds for nine more of them. I will take those nine quickly, because the interest is not in any single one of them. The interest is that not one of them has anybody at all at the wheel. |
| 35 | Fan-di (Xavier) — then two | Nine more. Which leaves two, and those two must have somebody at the wheel, and I would very much like his name. So far this inquiry has produced no defendant and a great deal of philosophy. |
| 36 | Arthur (V.O.) — act out | He is right that there are two. He is going to wish there were not, because the two that have an author are the two that hurt, and the author the chapter names is him. |

---

# ACT II — *Ten Counts, No Defendant* · blocks 37–68 · 6:00–11:20

**SOUND:** The pace changes. A dry brush ticking on paper, not quite regular.
**VISUAL:** The tally board behind Fan-di starts filling. One slot per riddle
answered, marked by Lei-Gong from the floor. The panel wipes between riddles.

| Block | Beat | Narration |
|---|---|---|
| 37 | Arthur (V.O.) — the act frame | Nine riddles, and I am going to move quickly through them, because the point is not any one of them. The point is a sentence you will hear nine times without a single person in it. |

**ON-SCREEN TEXT — block 38.** Card: **人之噦者，何氣使然**.

| Block | Beat | Narration |
|---|---|---|
| 38 | Fan-di (Xavier) — count two | Count two. When a person hiccups, what qi brings it about? I ask because it happened during an audience with a foreign envoy, and he found it a great deal funnier than the treaty we were signing. |
| 39 | Dr-Qi (Vesper) — the ordinary traffic | Grain enters the stomach. Stomach qi pours upward into the lung. That is the ordinary traffic and it runs one way. Note that the grain is the subject of that sentence, and the grain has no opinions. |
| 40 | Dr-Qi (Vesper) — the collision | Now let old cold qi still be sitting there when new grain qi arrives. New and old fall into disorder. True and aberrant attack one another. The qi combine, run backwards, and leave again through your mouth. |
| 41 | Arthur (V.O.) — the grammar again | There is the grammar again. Something arrives. Something reverses. It leaves by the road it came in on. No one opens a gate, no one gives way. The nouns do all the work. |
| 42 | Arthur (V.O.) — what a hiccup is | What a hiccup is: an involuntary contraction of the diaphragm, with the vocal cords snapping shut a fraction of a second later. The sound is the closing. The reflex arc is well described. |
| 43 | Dr-Qi (Vesper) — the half-hit | Before you dismiss the stomach, note this. A stomach stretched full really does set hiccups off, and the nerve that reports a full stomach passes the diaphragm on its way. The organ was not picked at random. |
| 44 | Arthur (V.O.) — the hedge | Careful. That is the trap this whole episode is about. A real trigger, attributed to the wrong organ, by a mechanism that does not exist. What a hiccup is for, incidentally, nobody knows. |
| 45 | Arthur (V.O.) — count three | Count three, the belch. Cold lodges as a guest in the stomach, turns back, disperses upward from below, and comes out again. The same shape, and the same absence of anybody deciding anything at all. |
| 46 | Dr-Qi (Vesper) — the guest | Attend to the verb. The cold lodges as a guest. It has not become part of you and it never will. It is staying with you, and it will leave the way a guest leaves, by the door. |

**ON-SCREEN TEXT — block 47.** Card: **一曰** — two characters only, very large,
alone on the panel.

| Block | Beat | Narration |
|---|---|---|
| 47 | Dr-Qi (Vesper) — another says | Then the text does something strange. It gives its treatment, and adds three characters: another says. A second opinion, incompatible with the first, set down without comment and without any attempt at all to choose between the two. |
| 48 | Arthur (V.O.) — the fingerprint | Those three characters appear three times in this chapter. Each time two teachers said different things and whoever wrote it down kept both. That is what oral transmission looks like when it finally reaches paper. |

**ON-SCREEN TEXT — block 49.** Card: **陽氣和利，滿於心，出於鼻**.

**VISUAL:** For the first time the diagram is drawn in a *warmer* ink — the only
riddle in the episode whose panel is not cold grey.

| Block | Beat | Narration |
|---|---|---|
| 49 | Arthur (V.O.) — count four | Count four, the sneeze, and it is the odd one out. Yang qi is harmonious and running freely. It fills the heart. It issues from the nose. Hear what is not in that. |
| 50 | Dr-Qi (Vesper) — what is missing | No cold. No blockage. No deficit and no intruder anywhere in it. The sneeze is the only one of the twelve that this chapter explains by things going well, and by going well rather abundantly at that. |

**VISUAL:** Lei-Gong stands up from behind the pillar. Nobody sends him away.

| Block | Beat | Narration |
|---|---|---|
| 51 | Lei-Gong (Zane) — the sun | May I ask about the sun. Every time I walk out of this hall into bright daylight I sneeze exactly twice. My father does it and my sister does it. Is that in your twelve? |
| 52 | Arthur (V.O.) — the photic sneeze | It is not, and it is entirely real. Somewhere between a sixth and a third of people sneeze on stepping into bright light. It runs in families, it is inherited, and the mechanism is unknown. |
| 53 | Arthur (V.O.) — what that means | A boy with a hand drum has just located a gap in two thousand years of work, in one sentence, about sneezing. Bear that in mind when these answers start sounding primitive to you. |
| 54 | Dr-Qi (Vesper) — count five | Count five, and I warn you it is unglamorous. When the saliva runs down. Food and drink enter the stomach; if there is heat there, the worms stir; the stomach slackens; the spring under the tongue opens. |
| 55 | Arthur (V.O.) — the worms | Worms, meant literally. Intestinal parasites were an ordinary fact of life, reached for exactly the way cold and wind are reached for. A mechanism that is specific, physical, checkable, and entirely wrong. |
| 56 | Fan-di (Xavier) — count six | Count six, and this one I have never asked anybody. After a man has finished weeping his breath keeps catching by itself, in small shudders he cannot stop. What is that? Nothing at all is deciding it. |
| 57 | Dr-Qi (Vesper) — the catching sob | Yin qi is full and yang qi is thin. Yin moves quickly, yang moves slowly. Yin floods until yang is cut off from it entirely. And so the breath catches, and catches, and will not level out. |
| 58 | Arthur (V.O.) — the dispute | This one is disputed and we will say so. The character can be read as shivering rather than sobbing, and one translation in circulation reads it that way. We think that reading is mistaken. |
| 59 | Dr-Qi (Vesper) — count seven | The reason is count seven, which is shivering and has its own separate answer. When a person shivers with cold: cold qi lodges as a guest in the skin, yin is full, yang is thin. One line. |
| 60 | Arthur (V.O.) — answer length | One line, and it moves on. The length of an answer here tracks how interesting the question was, not how serious. Shivering gets a sentence. Weeping gets the longest passage in the book. |
| 61 | Dr-Qi (Vesper) — count eight | Count eight. If the stomach is not full, the vessels are empty. If the vessels are empty, the sinews go slack and idle. And if the sinews are slack, effort spends something that cannot be paid back. |
| 62 | Arthur (V.O.) — four conditionals | Four conditionals, chained end to end. Empty stomach, empty vessels, slack sinews, a debt that cannot be settled. The most machine-like answer in the chapter, and every single link stated as an if. |
| 63 | Fan-di (Xavier) — count nine | Count nine, and I have wanted to ask it for years. At night, when the palace is silent, my ears ring. There is nothing there. Nobody else hears it. What is making a noise inside my head? |
| 64 | Dr-Qi (Vesper) — the same premise | The ears, exactly like the eyes, are where the great vessels gather. When the stomach is empty those vessels are depleted. Being depleted, they drain downward. And where a vessel has run dry, the ear begins to ring. |
| 65 | Arthur (V.O.) — simply wrong | That one is simply wrong and we will not soften it. Ringing in the ears is generated in the hearing pathway, usually following damage further out. It has nothing whatever to do with an empty stomach. |
| 66 | Fan-di (Xavier) — count ten | Count ten, and it is the one that has always bothered me most. Sometimes a man bites his own tongue. Not carelessly. His own jaw, his own tongue, and somehow he still contrives to ambush himself. |
| 67 | Dr-Qi (Vesper) — out of turn | Qi turns back and runs upward, and the vessel qi arrives out of turn. When shaoyin qi arrives you bite the tongue; when shaoyang arrives, the cheek; when yangming arrives, the lip. Each one has its place. |
| 68 | Arthur (V.O.) — act out | Wrong, and beautifully shaped. Biting your tongue is a timing error between jaw and tongue. But that is ten answers now, and not one of them has contained a single person who chose anything. |

---

# ACT III — *The Two With an Author* · blocks 69–92 · 11:20–15:20

**SOUND:** The brush ticking stops. A single sustained low note enters and stays
under the whole act.
**VISUAL:** The lamp becomes the only light; the hall recedes into flat black
around the figures. Ten of the twelve tally slots are filled. Two are empty and
the camera makes a point of them.

| Block | Beat | Narration |
|---|---|---|
| 69 | Arthur (V.O.) — the turn | Two counts remain, and they are not like the other ten. The chapter has spent eleven minutes describing a body that nobody drives. It is about to hand the wheel to somebody in particular. |
| 70 | Fan-di (Xavier) — count eleven | Count eleven. When a man grieves, and water comes out of his face without his leave, what qi is doing that? And where, precisely, does all that water come from? I have never once understood it. |

**ON-SCREEN TEXT — block 71.** Card: **心者，五藏六府之主也**. **This is the
episode's hinge card.** Hold it longer than any other.

| Block | Beat | Narration |
|---|---|---|
| 71 | Dr-Qi (Vesper) — the ruler | Begin where the chapter begins. The heart is the ruler of the five zang and the six fu. Not the largest, not the strongest. The one the others answer to. Everything after this depends on that word. |
| 72 | Arthur (V.O.) — stop there | Stop there. Ruler. For ten answers running, this chapter has not had a ruler in it anywhere. Qi moved because it was the hour. Now, suddenly, something in the body is giving orders. |
| 73 | Dr-Qi (Vesper) — the road | The eyes are where the great vessels gather, and they are the road by which fluid climbs. Hold on to that sentence. It explained the ringing in your ears ninety seconds ago, and it explained it wrongly. |

**ON-SCREEN TEXT — block 74.** Card: **口鼻者，氣之門戶也**.

**VISUAL:** On the panel, three things are drawn and then held for the rest of the
sequence: a seated figure at the centre, a rising line from body to eye, and two
small gates at the mouth and nose. Nothing is wiped. This diagram accumulates.

| Block | Beat | Narration |
|---|---|---|
| 74 | Dr-Qi (Vesper) — the gates | And the mouth and nose are the gates through which qi passes in and out. Three structures: a ruler, a road, and a pair of gates. Now watch what grief does to all three of them at once. |
| 75 | Dr-Qi (Vesper) — the heart moves | Sorrow, grief, care and worry — and the heart is moved. The heart being moved, all five zang and all six fu are shaken. Not saddened. Shaken. That word is physical, and the text chose it quite deliberately. |
| 76 | Dr-Qi (Vesper) — the chain | They being shaken, the great vessels respond. The vessels responding, the fluid road opens. The road being open, the tears come out of you. Six links, in order, and the very first link of all is a feeling. |
| 77 | Arthur (V.O.) — chain of custody | That is a chain of custody for a tear. It starts at an emotion, ends at a fluid, and never leaves the body. And unlike the other ten, it starts somewhere rather than simply beginning. |
| 78 | Arthur (V.O.) — why that matters | That distinction is the whole reason this episode exists. Ten answers where nothing was the cause. Now an answer where something is. The cause is grief, and grief belongs to the person having it. |

**VISUAL:** Fan-di sets the fan down on the table. Deliberately, without looking at
it. **It does not appear in his hand again for the remainder of the episode.** Hold
the shot of the table.

| Block | Beat | Narration |
|---|---|---|
| 79 | Fan-di (Xavier) — the admission | I have carried this fan eleven years and I am setting it on the table. My mother died in the spring. I have not wept, not once, and I want to know whether the road in me is shut. |

**ON-SCREEN TEXT — block 80.** Card: **故命曰奪精**.

| Block | Beat | Narration |
|---|---|---|
| 80 | Dr-Qi (Vesper) — what the text says | The chapter does not answer that, and I will not pretend otherwise. What it says next is this. Weep and do not stop, and the fluid is exhausted; the essence is not watered; the eyes see nothing. |
| 81 | Arthur (V.O.) — this is false | It calls that the robbing of the essence. A beautiful phrase fastened to a false claim: crying does not drain a finite supply, and weeping does not take your eyesight. We say that plainly. |
| 82 | Arthur (V.O.) — what is true | What is true is stranger. We make three different kinds of tear and only one has anything to do with feeling. Why any human weeps from emotion at all is, once again, unresolved. |
| 83 | Dr-Qi (Vesper) — what it was for | Then hear what the wrong answer was doing. It treats grief as an event with a price, paid out of something the body actually holds. That is not a figure of speech to them. It is bookkeeping. |
| 84 | Arthur (V.O.) — count twelve | Count twelve, the last of them, and the one the chapter gets closest to right. When a person sighs — the long breath drawn and let go — what qi is it that brings it about? |
| 85 | Dr-Qi (Vesper) — the cords | Worry and brooding draw the cords of the heart tight. The cords tight, the road of qi narrows. Narrowed, it does not run freely. And so one sighs, to stretch it open again and let it out. |
| 86 | Arthur (V.O.) — two claims | Two claims in that. Sighing keeps company with worry, and a sigh is for opening something that has closed. Both are roughly what the modern account says, and it is the chapter's best score. |
| 87 | Arthur (V.O.) — what a sigh does | A spontaneous sigh reinflates parts of the lung that have quietly collapsed and restores its stretch. A small cluster of cells in the brainstem exists to generate them, every few minutes, all day. |
| 88 | Arthur (V.O.) — right shape, wrong organ | Something constricted, and a breath that opens it. Right shape, right company, wrong organ — it is the lung, not the cords of the heart. The closest this chapter comes, and still a miss. |

**VISUAL:** Lei-Gong at the tally board, filling the last two slots, then stopping
with the brush in his hand.

| Block | Beat | Narration |
|---|---|---|
| 89 | Lei-Gong (Zane) — the pattern | I want to point at something. Both of the ones with somebody at the wheel are the ones about feeling. Grief and worry. Everything else in your twelve is weather, and those two are a person. |
| 90 | Arthur (V.O.) — he is right | He is right, and it is the most interesting thing in the chapter. Ten involuntary acts with no author. Two with an author, and in both the author is a state of mind. |
| 91 | Dr-Qi (Vesper) — the awkward position | Which puts you in an awkward position, since you convened an inquiry. Ten of your counts have no defendant at all. The other two do have one, and you have been sitting in his chair all afternoon. |
| 92 | Arthur (V.O.) — act out | So the body in this chapter is ungoverned for ten of its twelve acts, and governed for the other two. That is not a small inconsistency. It is two theories of a person, in one document. |

---

# ACT IV — *One Canon, Two Bodies* · blocks 93–104 · 15:20–17:20

**SOUND:** The sustained note lifts. Room tone, and the tally board.
**VISUAL:** Light back up. The twelve slots are full and the board is legible for
the first time as a whole.

**ON-SCREEN TEXT — block 93.** Card: **凡此十二邪者**, with the twelve riddle
characters arranged in a grid beneath it.

| Block | Beat | Narration |
|---|---|---|
| 93 | Arthur (V.O.) — the summing | And then the chapter sums. All these twelve, it says, are strange qi running into the hollow openings of the body. One sentence, gathering everything we have heard so far into a single claim. |
| 94 | Lei-Gong (Zane) — the count | Twelve. I counted them as they came, and it does come to twelve, and I would like that entered in the record because I was told to sit at the back and be quiet. |
| 95 | Dr-Qi (Vesper) — the openings | The mouth, the nose, the ears, the eyes. Everywhere a body is open, something is getting in. That is what the twelve have in common, and it is the last claim in the chapter I would defend. |

**ON-SCREEN TEXT — block 96.** Card: **皆為不足** — four characters, alone, held.

| Block | Beat | Narration |
|---|---|---|
| 96 | Arthur (V.O.) — the sentence | Then one more clause, and it is the sentence the chapter has been walking toward from the beginning. Wherever the trouble is, in every case, something is missing. Not an excess. Something absent. |
| 97 | Dr-Qi (Vesper) — the ambition | Understand the ambition in that. Twelve separate answers, and then a single line claiming that all twelve share one cause. That is where an anthology of small puzzles turns into a theory of the whole human body. |

**VISUAL:** On the grid of twelve, one character — 嚏, the sneeze — quietly lifts
out of alignment and sits proud of the others. Nobody on screen reacts.

| Block | Beat | Narration |
|---|---|---|
| 98 | Arthur (V.O.) — the small seam | And at that exact moment it splits. Go back eight minutes. The sneeze was explained by qi being harmonious, abundant, running freely. That is not something missing, and nobody in the chapter notices. |
| 99 | Arthur (V.O.) — the large seam | That is the small seam. Here is the large one. Ten of the twelve are explained with nobody in charge, and then the eleventh opens by installing a ruler over the whole body. |
| 100 | Dr-Qi (Vesper) — the other chapter | And it is not an isolated slip. Another chapter of this same canon builds the entire body as a government: twelve offices, a sovereign, a chancellor, a general. Nothing at all in it happens without an officer. |
| 101 | Arthur (V.O.) — two bodies | One canon, two bodies. In one, you are an administration and every act has an office responsible for it. In the other, you are weather on a schedule, and twelve things a day simply happen. |
| 102 | Arthur (V.O.) — no superiority | Before anyone feels superior, the modern position is not tidier. It is messier. There is no single system running the involuntary, and the twelve on this list do not share one mechanism either. |
| 103 | Arthur (V.O.) — four explanations | A hiccup is a reflex arc. A sigh is a brainstem circuit. Tinnitus is generated in the hearing pathway. A bitten tongue is a motor timing error. Four items, four entirely unrelated explanations. |
| 104 | Arthur (V.O.) — the real error | The chapter's real error is not that it guessed wrong twelve times. It is that it expected one answer. The involuntary is not a department. It is a dozen unrelated things that happen to look alike. |

---

# ACT V — *Who Is in Charge of You* · blocks 105–114 · 17:20–19:00

**SOUND:** Everything drops away except room tone. The guqin bed is out from block
105 and does not return.
**VISUAL:** The hearing set, wide, symmetrical, exactly as in block 1 — except the
empty floor where a defendant would stand is now lit, and still empty.

| Block | Beat | Narration |
|---|---|---|
| 105 | Arthur (V.O.) — the question | Which leaves the question the inquiry was convened to answer, and it is a better question than the emperor knew when he first asked it. Who, exactly, is supposed to be in charge of you? |
| 106 | Fan-di (Xavier) — the accused | I convened this to find a culprit. I have ten offences with nobody behind them and two behind which there is only me, grieving, which is not a crime in any code I have ever signed. |
| 107 | Dr-Qi (Vesper) — the held answer | No. And here is the part I have been keeping back. A body that needed a ruler for all twelve would be a worse body. Most of you runs without you, and that is the mercy in it. |
| 108 | Arthur (V.O.) — the achievement | That is the chapter's genuine achievement, and it is easy to miss under the wrong mechanisms. It looked at twelve things a body does unbidden and did not once reach for a spirit or a fault. |

**VISUAL:** Lei-Gong alone in frame, slate held up, eleven marks on it.

| Block | Beat | Narration |
|---|---|---|
| 109 | Lei-Gong (Zane) — the last tally | Eleven. That is how many times I have yawned since we began, and I counted those too. Every single one of them started because somebody else in this room had just done it first. |
| 110 | Arthur (V.O.) — contagion | He has found the one thing the chapter cannot hold. Yawning is catching. It is documented in humans, in chimpanzees, and in dogs watching people, and the mechanism behind it is entirely unknown. |
| 111 | Dr-Qi (Vesper) — one body | And no answer in this chapter can reach it. Every one of them has a single body in it. One person, one set of channels. Catching a yawn takes two people, and two people is not in the system. |
| 112 | Fan-di (Xavier) — the charges withdrawn | Then I withdraw the charges. All twelve. It appears I govern a great many things and that the inside of my own mouth is not among them, and I am told this is the good news. |
| 113 | Arthur (V.O.) — the close | You have very likely yawned during the last nineteen minutes, and nobody can tell you why. An emperor put his own body on trial for it, and the verdict was that there was nobody to try. |
| 114 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we mark plainly, in every episode, where the evidence does not support it. |

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
> narration row. This one sits after block 114 so it cannot truncate the sidecar.

| Card block | Timecode | Card | Gloss |
|---|---|---|---|
| Block 6 | 0:50 | 靈樞·口問 | the citation — **Lingshu 28**, never a bare "Chapter 28" |
| Block 11 | 1:40 | 人之欠者，何氣使然 | when a person yawns, **what qi** makes it so |
| Block 17 | 2:40 | 陰陽相引，故數欠 | yin and yang draw against one another, and so one yawns |
| Block 38 | 6:10 | 人之噦者，何氣使然 | when a person hiccups, what qi makes it so |
| Block 47 | 7:40 | 一曰 | **another says** — two characters, held alone |
| Block 49 | 8:00 | 陽氣和利，滿於心，出於鼻 | yang qi harmonious and free, filling the heart, issuing from the nose |
| Block 71 | 11:40 | 心者，五藏六府之主也 | **the heart is the ruler of the five zang and six fu — the hinge** |
| Block 74 | 12:10 | 口鼻者，氣之門戶也 | the mouth and nose are the gates of qi |
| Block 80 | 13:10 | 故命曰奪精 | and so it is named the robbing of the essence |
| Block 93 | 15:20 | 凡此十二邪者 | all these twelve — with the twelve riddle characters in a grid |
| Block 96 | 15:50 | 皆為不足 | in every case, something is missing |

*(Eleven quotation cards. Block 7 is the series title card and carries no classical
text. Block 114 is the disclaimer plate, whose text is hand-added at edit time.)*

**Block 71 is the most important card in the cut** and should be held longer and
larger than the rest. It is the only place on screen where a viewer sees the word
主 — *ruler* — appear in a chapter that has gone ten riddles without one, and
blocks 72, 90, 92, 99 and 101 all point back at it.

**Block 93 is the highest-risk card.** It shows all twelve riddle characters —
欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌 — in a grid a viewer can count,
and block 98's payoff requires **嚏 to be individually identifiable** so it can
lift out of alignment. A generated grid with one glyph wrong destroys both the
count and the payoff.

**Generated Chinese glyphs are unreliable and cannot be checked from this host** —
the CDN has been blocked on every cut for a long time. **Default to plain plates
plus edit-time text**, and treat blocks 6, 71 and 93 as non-negotiable cases of
it: the citation, the hinge, and the countable grid.

---

## Source mapping — translation § → blocks

Sections are those of **`inner-canon-ch28-translation-v2.md`**.

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | 辟左右 — those to left and right dismissed | 4 |
| §1 | 論不在經者 — what is not in the classics | 48 |
| §2 | 人之欠者，何氣使然 — and the form of the question | 11, 13 |
| §2 | 衛氣晝日行於陽，夜半則行於陰 | 12 |
| §2 | 陰者主夜…陽者主上，陰者主下 | 14, 15 |
| §2 | 陰氣積於下…陽引而上，陰引而下 | 16 |
| §2 | 陰陽相引，故數欠 | 17, 18 |
| §2 | 陽氣盡，陰氣盛，則目瞑 | 22 |
| §2 | 陰氣盡而陽氣盛，則寤矣 | 23 |
| §3 | 穀入於胃，胃氣上注於肺 | 39 |
| §3 | 故寒氣與新穀氣…復出於胃，故為噦 | 40, 41 |
| §6 | 寒氣客於胃…復出於胃，故為噫 | 45, 46 |
| §6, §7, §15 | **一曰** — all three occurrences | 47, 48 |
| §7 | 陽氣和利，滿於心，出於鼻，故為嚏 | 49, 50 |
| §11 | 胃中有熱則蟲動…廉泉開，故涎下 | 54, 55 |
| §4 | 陰氣盛而陽氣虛…故為唏 | 56, 57 |
| §4 | the 唏 reading dispute | 58 |
| §5 | 寒氣客於皮膚…故為振寒寒慄 | 59, 60 |
| §8 | 胃不實則諸脈虛…故為嚲 | 61, 62 |
| §12 | 耳者，宗脈之所聚也…故耳鳴 | 63, 64, 65 |
| §13 | 此厥逆走上，脈氣輩至也 | 66, 67, 68 |
| §9 | **心者，五藏六府之主也** — the hinge | 71, 72 |
| §9 | 目者，宗脈之所聚也，上液之道也 | 73 |
| §9 | 口鼻者，氣之門戶也 | 74 |
| §9 | 悲哀愁憂則心動…五藏六府皆搖 | 75 |
| §9 | 宗脈感則液道開…故泣涕出焉 | 76, 77, 78 |
| §9 | 泣不止則液竭…故命曰奪精 | 80, 81 |
| §10 | 憂思則心系急…故太息以伸出之 | 84, 85 |
| §14 | 凡此十二邪者 | 93, 94 |
| §14 | 皆奇邪之走空竅者也 | 95 |
| §14 | 皆為不足 | 96, 97, 98 |
| §15 | 腎主為欠 / 肺主為噦 — the retro-fitted rulers | 99 |
| §15 | the treatment recapitulation | **deliberately excluded — see below** |

**Every needling clause in §2–§14 is excluded, and §15 is excluded except for its
two retro-fitted organ attributions**, which block 99 uses as *evidence of a seam*
rather than as instruction. That is a compliance decision and a content decision at
once: the source closes all twelve answers with a prescription, and including any
of them would convert a $9–15 RPM curiosity episode into symptom-and-remedy
content. **Not one prescription appears in this script, the shot list, or on any
card.**

**§14's own deficiency signs are also excluded** — the swimming eyes, the tipping
head, the rumbling intestines, the withering limbs. They are a *separate* list from
the twelve, and folding them in would break the count that blocks 93, 94 and 98
depend on.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam, never jade.

**One count reconciliation, carried over from v1 and still a correction to the
slate.** `docs/Chronicle of Balance Top20 Chapter Slate.md` describes this chapter
as *"eleven rapid-fire questions"*. **The text says twelve** — 凡此十二邪者 — and
§15 recapitulates twelve. The on-screen numbering runs **count one through count
twelve**, each spoken exactly once, at blocks **11, 38, 45, 49, 54, 56, 59, 61,
63, 66, 70 and 84** — and note that it is *not* all Fan-di's: he opens counts one,
two, six, nine, ten and eleven, Dr-Qi opens five, seven and eight, and Arthur opens
three, four and twelve. Whoever holds the block says the number, because the block
boundary decides the speaker and the numbering has to survive that. **Any edit that
moves a riddle between blocks must renumber the whole sequence**, and the block-93
grid must still show twelve characters.

**Two translation choices this script depends on**, both argued in the translation
file: §3's 噦 is **hiccup**, not "sighs"; §8's 嚲 is **limpness**, not "drools".
The supplied English in the source PDF makes both errors, and either one reduces
the twelve to eleven on screen while the card still says 十二.

**One cross-chapter claim, and it must be checked before it ships.** Block 100
describes Su Wen 8 《靈蘭祕典論》 — twelve offices, a sovereign, a chancellor, a
general. That is this repo's own `output/episode-6/`, and the description above is
accurate to `inner-canon-ch6-translation-v1.md`. **Cite it on screen as Su Wen 8**,
never as "chapter 6": the edition that repo folder follows numbers it 篇第六, but
Su Wen 6 in the received recension is a different chapter entirely (陰陽離合論).

**Dramatic material not in the source, flagged as invention:** the inquiry, the
hearing set, the charges and their withdrawal; the interrupted proclamation (11);
the foreign envoy (38); the fan and the moment it goes down (78–79, 106, 112);
Fan-di's mother (79); Lei-Gong being present at all, his slate, his tally, and all
five of his blocks. **The classical text has no scene whatsoever** — 黃帝閒居, *the
Yellow Emperor at leisure*, is the whole of the staging, and there are two speakers
with no characterisation between them. Everything attributed to *the text* above is
in the translation; everything else is dramatisation.

**Three interpretive claims that are ours, hedged in the narration rather than only
here:**

- **That ten of twelve answers are agentless and two are not.** The distribution is
  a fact about the grammar and is tabulated in the translation file. **That it
  amounts to two incompatible theories of a person** is the reading, and block 92
  states it as an observation about the document rather than as received
  scholarship.
- **That §15's 腎主為欠 and 肺主為噦 are a later reconciliation** (block 99). The
  text does not say so. It is an inference from the fact that neither attribution
  appears in §2 or §3, and block 99 is written to describe what the text does
  rather than to date it.
- **That the single-body framework is why contagion is unrepresentable** (blocks
  110–111). An argument about what the apparatus can hold, not a historical claim
  about what anyone noticed. Dr-Qi's line says *two people is not in the system*,
  which is a statement about the system.

---

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run for
this cut.** The figures below are a planning preflight, not a priced gate — call
`balance` and `get_cost: true` live before spending anything.

### This does not fit the credit balance. Say so before anything else.

Last recorded balance: **862.6** (after the ch1 v5 run, 2026-08-04).

| Clip model / tier | Credits/clip | × 114 blocks | vs 862.6 |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,140** | **over budget** |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~2,850 | ~3.3× balance |
| `gemini_omni` 720p | 30 | ~3,420 | ~4.0× balance |
| `seedance_2_0` 1080p | 90 | ~10,260 | ~12× balance |

Everything else is trivial by comparison: a vertical chapter key at **2** plus a
landscape sibling at **2**, ~114 voice takes at **~0.8** ≈ 91, assembly **free**,
captions **free**. **Clips are essentially the entire bill, so the model choice is
the budget.**

**This cut is 6 blocks longer than v1 — about 60 extra credits at draft tier.**
Neither fits. If the runtime is what decides between them, v1 at 108 blocks is the
cheaper document by roughly one clip's worth of nothing; **choose between them on
the thesis, not on the sixty credits.**

**A 19-minute episode does not fit at any tier — not even an all-draft pass.**
Three ways forward, and it is a decision, not a detail:

1. **Top up** before starting.
2. **Cut the runtime.** 90 blocks (15:00) at 480p is ~900 — still over, and with
   nothing left for re-takes. See the runtime levers for which ranges drop cleanly.
3. **Produce act by act across billing periods**, assembling each act as its own
   `assemble_final.sh` run. See *Assembly strategy* for the join problem.

**Budget re-takes separately and generously.** On ch1 v5 one block took fourteen
takes and ~11 credits. At 114 blocks even a 20% re-take rate is ~18 extra credits
of voice — cheap — but the *time* cost is the real one, and it is what makes a
whole-episode single-pass assembly risky.

### Voice measurement — required before ~114 takes

`SKILL.md` is explicit, and two things make it non-optional here:

- **Zane has never been measured at length.** The only figure on record is a
  five-word line at 2.3–2.6s, where pause overhead dominates and no words/sec can
  be derived. **Lei-Gong has five blocks (26, 51, 89, 94, 109)**, each written at
  34–36 words provisionally. Under a hard 8.6s floor an unmeasured voice is a
  render failure, not a rounding error.
- **Arthur, Xavier and Vesper were measured on trailer-register lines.** This
  script asks Vesper for sustained explanatory paragraphs across 37 blocks, which
  is not what she was measured on.

**Measure one full-length take per voice through the assembler's own gate before
generating anything else**, and write the results back into `SKILL.md`'s step-3
table:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

Four takes, ~3.2 credits. A mis-sized script is 114.

**Named fallback if Zane will not hold the window — and it is worse here than in
v1.** Blocks 51 and 94 recast to Arthur as reported speech without structural
damage. **Blocks 26, 89 and 109 do not.** Block 26 opens the tally, block 89 is
the observation the whole of Act IV rests on, and block 109 is the payoff; all
three depend on the counting being done by a person who is visibly catching the
yawns. If Zane fails measurement, **this cut needs a different closing structure,
not a line reassignment** — decide before generating the cold open.

### Style key — new chapter key, and a 16:9 sibling

The chained lineage is 9:16 and belongs to chapter 1. This chapter needs its own
key; longform additionally needs a landscape variant.

1. Derive the **chapter 28 vertical key** by chaining off the ch1 head
   `4b6f7106-67da-4d1a-a553-c58ba90ac43f`, passing its **job ID** as the reference
   and swapping only the motif. **Motif for v2:** the three-character series key
   arranged as a hearing — one figure seated high, one standing to the side, one
   sitting on the floor with a slate — and **twelve empty tally slots** on the wall
   behind them. `nano_banana_pro`, 9:16 768×1376.
2. Derive the **16:9 sibling** from *that* key, changing only the framing.

**This is a different motif from v1's** (which was an open doorway and twelve
unlit lanterns). If both cuts are ever produced they need separate keys, because
the motif is the cut's visual thesis and the tally board is v2's.

Record both as their own lineage entries — **do not overwrite the vertical key** —
and promote whichever ships to `SKILL.md` step 1 as the new head with its motif.
`medias[].value` takes a `media_id` or a prior `job_id` only; a `https://` URL
there fails.

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
  clip. **Act III is a single lamp against flat black for twenty-four consecutive
  blocks** — the heaviest dim run this repo has attempted, and this is the most
  frequent trigger by far. One id per call, so budget a retry for each newly
  triggered preset.
- **Keep audio vocabulary out of clip prompts** — *drum*, *drone*, *music*,
  *rhythm*. **Lei-Gong's hand drum is a prop**: describe it as a small hand-held
  drum resting in his lap, never as something being played. Act II's "brush ticking"
  and Act III's "sustained note" are SOUND directions and must not reach a prompt.
- **A gavel-like fan snap opens the cut.** Keep that in the SOUND line only. Do not
  write *gavel*, *court*, *trial* or *sentence* into a clip prompt — the hearing is
  carried by the staging (a high seat, an empty floor, a tally board), and legal
  vocabulary risks a preset swap for no benefit.
- **Generate one clip and check its returned dimensions before the rest.**
- **Duration ≥ 9.5s and motion from frame 1.** The assembler rejects a clip shorter
  than 9.5s outright and warns on a static open or frozen tail. **The exposed blocks
  are the deliberately still ones**: 47 (two characters alone), 71 (the hinge card,
  held), 78–79 (the fan on the table), 96 (four characters held), 105 (the empty
  floor), 114 (the plate). Give each a slow push, drifting ink grain, or a light
  change.

### Assembly strategy — decide before generating a single take

**The join is the open problem.** `assemble_final.sh` takes clip/voice *pairs*
against a declared block count and asserts an `N × 10s` output, so an already
assembled act is **not** a valid input to it. Two routes, neither yet run here:

- **Assemble the whole episode in one call** and skip the join — but that is ~228
  files to download inside one chained command, in a sandbox discarded ~10 seconds
  after the call returns.
- **Concat the act outputs** with our own ffmpeg, outside the sandbox's rules.
  Defensible — a concat of equal-geometry MP4s is a lossless remux — but it puts the
  −16 LUFS normalisation per act rather than across the episode. **Check levels at
  the seams**, especially Act II → III where the brush ticking stops and the
  sustained note starts, and Act IV → V where everything drops to room tone.

Run episode-scale assembly `background: true` and poll the returned log with `tail`
at least every 60s or the sandbox dies under the job. **Note the opposite lesson at
trailer scale**: ch1 v5 lost a whole run to `background: true` when the transport
call timed out. Foreground for one act only if it finishes inside 120s.

**Assemble the cold open plus Act I first (blocks 1–36) and measure how long it
actually takes.** Nothing at this scale has been run through this path.

### Voiceover

Not generated. `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per
block, **one speaker per block** — verified: no block above contains two voices.

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ, and the second is the one that
was gated. A ch1 v5 take logged as "8.50s pass" was 8.497s — 0.103s under the floor
— and stopped the assembly. A take within ~0.2s of either edge is checked against
the number, never eyeballed.

**Append job IDs to this record act by act, before moving on.** The record is the
crash-recovery file; a lost session with unrecorded IDs means paying twice.

**Generated from the parsed narration table, not transcribed by hand.**

| Voice | Blocks | Count |
|---|---|---|
| Arthur | 1, 2, 4, 6, 7, 10, 13, 15, 18, 21, 24, 25, 27, 28, 29, 30, 32, 33, 36, 37, 41, 42, 44, 45, 48, 49, 52, 53, 55, 58, 60, 62, 65, 68, 69, 72, 77, 78, 81, 82, 84, 86, 87, 88, 90, 92, 93, 96, 98, 99, 101, 102, 103, 104, 105, 108, 110, 113, 114 | 59 |
| Vesper (Dr-Qi) | 5, 9, 12, 14, 16, 17, 20, 22, 23, 31, 34, 39, 40, 43, 46, 47, 50, 54, 57, 59, 61, 64, 67, 71, 73, 74, 75, 76, 80, 83, 85, 91, 95, 97, 100, 107, 111 | 37 |
| Xavier (Fan-di) | 3, 8, 11, 19, 35, 38, 56, 63, 66, 70, 79, 106, 112 | 13 |
| Zane (Lei-Gong) | 26, 51, 89, 94, 109 | 5 |

59 + 37 + 13 + 5 = **114**, one take per block, no block with two speakers.

### Captions

Sidecar only; `assemble_final.sh` rejects `--subs` outright. **Build with
`--format 16:9`**:

```
node scripts/check_caption_fit.js output/episode-28/inner-canon-ch28-longform-v2.md --format 16:9
node scripts/build_subtitles.js  output/episode-28/inner-canon-ch28-longform-v2.md --format 16:9
```

**No `.srt`/`.vtt` ships with this document yet, by design** — the cues are timed
from take durations that do not exist. Build and commit them with the render.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly. The step-0
  gate is outstanding and is a hard gate.
- **Two style keys are needed and neither exists**, and v2's motif differs from
  v1's — the tally board is this cut's visual thesis.
- **The 16:9 decision is unconfirmed** and is ~114 clips to get wrong.
- **Zane is unmeasured at length**, and unlike v1 the recast fallback does not
  fully cover him — blocks 26, 89 and 109 are structural.
- **This is the repo's third longform to reach script stage** and none has been
  rendered; act-scale assembly timing is still unmeasured everywhere.
- **The CDN is normally blocked from the repo host.** The sandbox has its own
  network access and can probe the render next to where it was built — but **a probe
  is not a viewing**. Say which checks actually ran.
- **Source provenance:** the chapter arrived as a user-supplied PDF because
  `ctext.org`, `zh.wikisource.org` and `8bei8.com` are denied at CONNECT from this
  host. Extraction required decoding the PDF's own ToUnicode CMaps — `pdftotext` is
  not installed and `pip install` is not permitted here.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 114.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers — 114 blocks, 1140.0s, act boundaries at 1:40 / 6:00 /
11:20 / 15:20 / 17:20, end card **18:50 to 19:00**. Not a generic recipe: block
numbering and timecodes differ between versions of the same chapter, and **v1 of
this chapter is 108 blocks with different boundaries entirely** — that is exactly
where the mistakes land. Both caption scripts are pure text tools: they read this
document, touch no video, need no network and cost no credits. **Both take a path
relative to the current directory: run them from the repo root, or pass an absolute
path.**

**1. Check captions**, at 16:9, before generating takes. A fix is free at that
point and costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/episode-28/inner-canon-ch28-longform-v2.md --format 16:9
```

**This document exits 0 as written — verified 2026-08-07, every clause fits.** Note
that the mandated disclaimer's `known exception` line **does not fire at 16:9**:
the script only reports a clause once it exceeds the two-line cap, and that clause
is 967px against a 1001px single line here. It overflows only on the 720-wide
vertical frame. The companion trailer therefore exits 0 *with* the exception
printed, and this document exits 0 *without* it, and both are correct.

Re-run after any narration edit. **Exit 1 would be the designed signal, not a
crash** — with the server-burn path gone, an overflow report is a *readability*
finding rather than a render failure, since the sidecar pre-splits wide clauses and
libass margins keep them in frame. Fix at script stage anyway.

**2. Build the sidecar**, at 16:9, after the takes exist and their durations are in
the record above.

```
node scripts/build_subtitles.js output/episode-28/inner-canon-ch28-longform-v2.md --format 16:9
```

On a **copy** of the `.srt`, delete the cues covering **block 114** (everything
from 18:50:00) so the disclaimer is not simultaneously a caption and a card. The
burn copy is blocks 1–113, ending at 18:50.

**3. Burn**, once, over the finished episode — not per act. Nothing is burned at
assembly, so act assemblies carry no captions by construction and there is no
layering to avoid. Run `ffmpeg -version` and `fc-match Anton` **before** starting: a
missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and re-target
`PlayResX/Y` to the episode's **actual returned resolution** first — ffmpeg's
SRT→ASS converter hardcodes 384×288, which scales every style value by roughly 2.5×
at 720p and runs the lines off frame. If the assembler returns something other than
1280×720 (ch1 v5 returned 496×864 from 480×854 clips), scale `Fontsize`, `MarginL`,
`MarginR`, `MarginV` and `Outline` by the real frame ratio.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's empty floor. At 16:9 `MarginV` is 60, so keep the
lower-third clear of the caption band or move it to the upper third. Added by
`drawtext` in the burn pass, not in an NLE.

**5. Quotation cards.** If the eleven cards were rendered as **plain plates** — the
default — their Chinese text is added here, in the same `drawtext` pass, at the
timecodes in the card table above: 0:50, 1:40, 2:40, 6:10, 7:40, 8:00, 11:40,
12:10, 13:10, 15:20 and 15:50, each held for its full 10s window. **Verify every
glyph against `inner-canon-ch28-translation-v2.md` before export.** ffmpeg needs a
CJK-capable face — Anton has no Chinese coverage and renders tofu boxes silently.

**Two cards need special handling.** Block 71 (11:40) is the hinge and should be
set larger and held for the full window. Block 93 (15:20) is the grid of twelve,
and block 98 (16:10) requires **嚏 to lift out of alignment while the other eleven
hold** — build it as twelve individual `drawtext` filters with their own `y`
expressions, not one multi-line string, or the lift is impossible.

**6. End card — 18:50 to 19:00** (block 114). Mandated disclaimer verbatim across
three centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
all of Act III (blocks 69–92)** — the act runs on a single sustained note and a
guqin bed would fight it. Back in under block 93. **Out again at block 105 and
never returns**: Act V plays on room tone alone. **This cannot be moved to the
assembler's `--music` flag**: `--music-vol` clamps at 0.20, which does land in
range, but it mixes one continuous bed with no dropout window, and this cut needs
two.

**Guqin licensing is unresolved** (slate §9, open since Episode 2). Until cleared,
score on the trailer model — no guqin — which costs this cut less than most, since
two of its five acts are scored to silence by design.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render. The slate rates this
chapter **Very Low**, the lowest of the twenty, and this script is written to keep
it there.

- **Disclaimer** — repo string verbatim: blockquoted at the head of the
  translation, at the head of block 114's narration, on screen as the end card, and
  in the description. Block 114 is extended past the mandated string to clear the
  8.6s floor; **the mandated sentence itself is unaltered**.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim anywhere. **Every needling prescription is excluded**, and §15
  appears only as evidence of a textual seam. Every physiological statement is
  reported as what a text says, and blocks 44, 65, 68, 81, 98, 103, 104 state
  directly that claims are wrong or that mechanisms are unrelated. **No viewer is
  told to do anything.**
- **The line that needs watching is block 63**, where Fan-di describes his own
  tinnitus, and **block 65 answers it two blocks later** with the modern account and
  no remedy of any kind. The pair must not be split in any cut. Nothing in the
  episode suggests what to do about ringing ears, and nothing should be added at
  edit time.
- **The inquiry conceit needs one guard, and it is in the writing.** A cut framed
  as a trial could slide into *your body is betraying you*, which is a wellness
  frame and the wrong register entirely. **The episode lands on the opposite**:
  blocks 107 and 112 conclude that an ungoverned body is a *better* body and the
  charges are withdrawn. If the ending is cut for time, the framing goes with it —
  see *Runtime levers*, where blocks 107 and 112 are marked non-droppable.
- **Mortality / ageing** — **one reference, block 79**: Fan-di says his mother died
  in the spring and that he has not wept. Reflective, non-graphic, carried entirely
  by a man setting down a fan — **portraits, not bodies**, and not even a portrait.
  No death imagery in the shot list, no lifespan claim, and the word *longevity*
  does not appear in the narration at all.
- **Fertility content** — **absent by a deliberate translation choice.** §8's
  行陰用力 is ambiguous and has been read as sexual exertion; the neutral reading is
  used in the translation and in block 61. The alternative is not staged and not
  mentioned.
- **Indulgence / alcohol** — **absent.** Block 38's setting is an audience with an
  envoy, chosen specifically to keep feast imagery out of the shot list. No vessels,
  no pouring, no drinking anywhere.
- **Parasites (§11) are handled, not avoided.** Block 54 says *worms* plainly and
  block 55 explains why the text reached for them. **The shot list carries this with
  objects and brush strokes only** — a slackening ink stomach, a valve opening —
  with **no depiction of parasites and nothing anatomical**.
- **Supernatural hooks explicitly debunked by the payoff** — the hooks are *twelve
  things you did not order* and *one system explains all twelve*. The first is a
  description of ordinary physiology; the second is dismantled inside the episode at
  blocks 44, 65, 68, 98, 99, 102–104. **The debunk is distributed across four acts,
  not deferred to a closing caveat.**
- **The reckoning is the spine, not a coda** — mandatory for this chapter per the
  slate. Modern accounts named: brain thermoregulation (29), arousal / state
  transition (30), the hiccup reflex arc and the unknown function (42, 44), the
  photic sneeze reflex (52), the three tear types (82), the sigh's brainstem circuit
  (87), tinnitus generation (65), the absence of any unified system (102–104), and
  contagious yawning (110). **Every one is stated as unsettled where it is
  unsettled** — blocks 28, 44, 52, 82, 110 say *unknown*, *no agreed answer* or
  *unresolved* explicitly. The episode never claims modern science has closed it.
- **Title and thumbnail honour the educational payoff** — cut title *Twelve Small
  Rebellions*; on-screen framing *Lingshu 28, Oral Inquiry*. **Banned terms
  checked**: no *longevity*, *live to 100*, *ancient secret* or *anti-aging* in the
  script, title or thumbnail direction. **Thumbnail direction:** the empty hearing
  floor beneath a high seat, twelve empty tally slots on the wall, no faces — *he
  put his own body on trial*. Do not use a caricature yawning face.
- **Hedge allocation — three characters speak, so this needs recording.** **Arthur
  retains every compliance hedge without exception**: the state-of-knowledge
  statements (28, 52, 82, 110), the *that is not a hit* caution (44), the falsity of
  奪精 (81), the correction on tinnitus (65), the correction on the tongue (68), both
  seams (98, 99), the modern-is-messier caution (102–104), and the disclaimer (114).
  Dr-Qi carries claims *about the text*, attributed in-line. Fan-di carries vanity,
  objection and one moment of grief. Lei-Gong carries the tally and the observations.
  **No compliance hedge rests on a character voice.** The nearest exceptions are
  block 31 (Vesper stating the chapter's timing claim was correct — bracketed
  immediately by Arthur's block 32) and block 107 (Vesper's *most of you runs without
  you*, which is the episode's thematic conclusion rather than a factual claim about
  physiology).
- **Historical accuracy** — six risks, all handled in-script. (1) Cited on screen as
  **Lingshu 28**, never a bare "Chapter 28". (2) The cross-reference in block 100 is
  cited as **Su Wen 8**, never "chapter 6". (3) The count is **twelve**, against the
  slate's eleven. (4) The 唏 reading is **disputed** and block 58 says so on screen.
  (5) The 皆為不足 contradiction (98) is our reading, phrased as an observation about
  the text. (6) The §15 retro-fit claim (99) describes what the text does without
  dating it. **Those hedges must survive the edit.**
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload, per the
  slate's §6 open item, which flags this as the project's most under-weighted risk.
  **No character makes a first-person factual assertion about their own expertise** —
  Dr-Qi always reports what the chapter says.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: an empty hall, a
  high seat, a tally board, a lacquer table, a lamp, a silk panel, a slate, ink
  diagrams. **No restraint or bound-figure imagery**, which has tripped the safety
  filter here before even on innocuous subject matter. No bodies, no injury, no
  falling figures. **Three items to watch at prompt stage:** (a) the diagram figures
  are **outlines, never anatomy**; (b) Act III's single-lamp-on-black run is 24
  consecutive blocks and will trigger `IN THE DARK` repeatedly — pre-decline on every
  one; (c) **the empty floor in blocks 1 and 105 must read as an empty space, not as
  a dock with anyone in it** — no figure is ever staged standing in it, which is both
  the visual joke and the safety margin.

## Runtime levers

Expressed in blocks, since blocks are the unit that costs money. 114 blocks =
19:00; the format floor is 90 (15:00) and the ceiling 120 (20:00).

**Cut to 18:00 (108 blocks) — drop 6.** The cheapest cut available, and it makes
this document the same length as v1: blocks **42, 46, 53, 60, 82, 103**. Six
elaborations, no act boundary moved, no compliance content lost, no beat that a
later block refers back to.

**Cut to 15:00 (90 blocks) — drop 24:**

- The six above.
- **Blocks 45–48** (the belch, 4) — the thinnest riddle. **But 一曰 goes with it**,
  and that costs the episode its best evidence for oral transmission. Prefer keeping
  47–48 and dropping only 45–46 if the count allows.
- **Blocks 59–60** (the shiver, 2) — but move block 58's supporting reasoning for
  the 唏 reading into 58 itself first, or the dispute is stated without its argument.
- **Blocks 61–62** (limpness, 2) — the least memorable riddle; block 93's grid still
  names it.
- **Blocks 13, 15, 18, 21** (Act I grammar elaborations, 4) — costs the most and
  shows the least, because the agentless-grammar point is this cut's whole thesis.
  **Drop these last.**
- **Blocks 29, 30** (the two yawn hypotheses, 2) — **do not drop both.** The slate
  makes naming the modern hypotheses mandatory for this chapter. One may go; both
  may not.
- **Blocks 73, 83, 97, 100** (4 assorted).

**Stretch to 20:00 (120 blocks) — add 6.** Unlike chapter 6, this chapter has
material left over:

- **Act IV, +3** — Su Wen 8 at length: the twelve offices named, and the direct
  comparison staged rather than described. The strongest addition and the most
  on-thesis, since block 100 currently carries it alone.
- **Act I, +2** — the wider 衛氣 doctrine: fifty circuits a day, twenty-five by day
  and twenty-five by night, and how the chapter's clock joins the rest of the canon.
- **Act V, +1** — cross-species contagion, and why a two-body phenomenon is hard to
  study at all.

**Pairs that must not be split**, in any cut: **43+44** (the half-hit and its
hedge), **63+65** (the tinnitus question and its answer — splitting this leaves a
symptom described with no correction, which is a compliance failure, not an
editorial choice), **71+72** (the ruler and the observation that it is new),
**80+81** (the 奪精 claim and its falsification), **96+98** (the unifying claim and
its seam), **78+79** (the fan goes down on 78's shot and 79 is the reason), and
**110+111** (contagion and why the framework cannot hold it).

**Never droppable, for a reason beyond pacing: blocks 107 and 112.** They are the
cut's answer to its own framing. Without them the episode is a trial with no
verdict and reads as *your body is betraying you*, which is the wellness register
this series exists to avoid. **Block 114 is not a lever.**

**Lei-Gong's arithmetic must stay consistent.** Block 26 says four; block 109 says
eleven. If either is cut or edited, the other has to move with it — and block 109's
figure is the one the payoff needs, so change block 26 rather than the tally.

**Act boundaries are re-render units.** Every cut listed above stays inside a
single act, so no act boundary moves and no act needs recomputing. Renumbering
blocks after a cut means regenerating the manifest — do it once, at the end, never
mid-production.
