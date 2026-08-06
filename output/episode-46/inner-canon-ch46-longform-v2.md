# The Emperor's Inner Canon — Chapter 46 Longform v2 (18 minutes)

**靈樞·營衛生會第十八 · The Night Watch**

**Framing:** history of ideas. Not health content.

**Format:** 16:9 landscape, 1280×720. **108 × 10s blocks = 18:00.**
**Final render:** *not run — script only, pre-production.*

**Source text:** `inner-canon-ch46-translation-v2.md` in this folder — a fresh
translation of the classical text made for this production. Every classical line
paraphrased below traces to a numbered section there, and the source mapping names
which.

> **Chapter numbering.** This is **Ling Shu 18**. The `episode-46` folder and
> "Chapter 46" are the **series slate index** from
> `docs/Emperors Inner Canon Series Blueprint.md`, whose Ling Shu parentheticals are
> all `slate index − 35` and none of which match the received text. Ling Shu 11 is
> 經別, a different chapter. Any on-screen citation reads **Ling Shu 18**.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

---

## Why v2 exists, and what it changes

**v1 is not superseded as a reading of the chapter.** Its thesis — *a text can be
wrong about almost everything and still right about the thing that matters* — is
sound, and its dramatic engine (Fan-di is twenty-nine and cannot sleep) is good.
Two things make a fresh script necessary rather than a revision:

1. **v1 cannot be assembled.** It was written before 2026-08-04 against the removed
   `explainer_video` tool and the old **6–8s** speech window. The current assembler
   gates at **8.6–10.0s** with hard errors at both edges, so v1's lines are now
   uniformly *short* — and its deliberate 2–3 second Lei-Gong interjections are
   structurally impossible, not merely tight. Re-timing v1 would mean rewriting
   every one of its 108 lines, which is not a revision.
2. **v2 sells a different idea.** v1's spine is *the mechanism is wrong, the
   observation is right*. **v2's spine is the shape of the chapter itself: the
   emperor asks six questions about where a body gets its fuel, and the text answers
   a seventh he never asked — what it costs to keep running.** That reading is in the
   source (§1 is six questions; §3 is an ageing turn nobody requested) and it gives
   the episode a structure rather than a syllabus.

**The dramatic engine is new and does not repeat v1's reveal.** Fan-di orders a
**census of sleep** — a genuinely good administrative idea from a man who wants to
be seen having good ideas. The count comes back at eleven thousand four hundred
households, six of them still lit at the third watch. He spends the episode
learning what the sixth one means. **The fan is the tell:** snapped open he is
performing, set down he means it. He sets it down once, in Act III, and does not
pick it up again.

---

## Cast and voice

| Role | Voice | `voice_id` | Function in this episode |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | history, mechanism, **every compliance hedge** |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the Huangdi role — orders, deflects, breaks |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the Qi Bo role — answers, never wins |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | the living control group; comic, then not |

`seed_audio` presets, `speech_rate` 55 for all four. **One speaker per 10s block** —
the assembler takes exactly one audio per block, so every speaker change is its own
block. No block below contains two voices.

**Lei-Gong is the structural joke and the structural wound.** He is 壯者, the
vigorous — keen by day and asleep by night — and he has done nothing to earn either.
He sleeps through the lesson that is about him, and in Act III he asks the only
question in the episode nobody wants to answer.

### Writing constraint — sized to the 8.6–10.0s window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors, computed as `--clip-seconds − 1.4` to `--clip-seconds`. Word budgets are the
skill's step-3 figures, re-measured 2026-08-04 off the ch1 trailer v5 run:

| Voice | Measured rate | Words per block | Status |
|---|---|---|---|
| Arthur | 3.65 w/s | **32–36** | measured, 5 takes |
| Xavier (Fan-di) | 4.15 w/s | **36–41** | measured, 1 take |
| Vesper (Dr-Qi) | 4.19 w/s | **37–41** | measured, 1 take |
| Zane (Lei-Gong) | — | *written at 34–39, provisional* | **UNMEASURED — see the gate below** |

Four consequences shape every line below, and none of them is stylistic:

- **The short interjection is dead.** Under an 8.6s floor there is no such thing as a
  quick jab; `--clip-seconds` moves the window rather than widening it. **Every
  character line here is a full paragraph**, and Lei-Gong's are written as arguments
  rather than punchlines.
- **The rates are survivor-biased.** 3.65 w/s is what Arthur's *passing* takes
  delivered; across every recorded ch1 v5 attempt he averaged **3.04 w/s**. These
  counts are sized for his fast mode and will regularly return over the ceiling.
- **The run-to-run spread exceeds the window.** Identical 26-word text came back at
  10.23s and 7.79s on consecutive generations — 2.44s apart on a window 1.4s wide.
  Re-roll once before rewriting, and expect misses on *either* side.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s. Padding a thin line with sentence breaks passes the duration gate and
  trips the pause warning.

**Every count in this script was verified against the parsed narration table, not by
hand.** They remain *arithmetic against measured rates*, not measurements: treat the
first pass at these lengths as calibration and budget re-takes explicitly. On ch1 v5
a single block took **fourteen takes and ~11 credits**; at 108 blocks that gate is
the dominant cost risk in the whole production.

### How to read this script

`CLAUDE.md` asks for **SOUND / VISUAL / CHARACTER** blocks; `build_subtitles.js`
needs a **three-column narration table** to build the required `.srt`/`.vtt`
sidecars. **v1 and ch1 longform v3 have no narration table at all, and neither can
build a sidecar** — a gap this script closes.

The two are combined rather than duplicated, because two copies of 108 lines is how
they drift apart:

- **The narration tables below are canonical for words.** Blocks run continuously
  1–108 across the whole episode, never per-act; the assembly manifest is flat and
  act-local numbering produces off-by-one errors that are expensive to find in an
  18-minute render.
- **The SOUND / VISUAL / direction prose between them is canonical for picture and
  performance.** It never restates a line.
- **The speaker is named in the beat column**, not a fourth column — the parser reads
  exactly three and a fourth would leak into the caption text.

> **Do not insert a table whose first cell is a bare integer anywhere between blocks
> 1 and 108.** `parseNarration` keeps the first consecutive run from block 1 and
> stops at the first row that breaks it, so a stray numeric table silently truncates
> the sidecar. Every other table in this document sits before block 1 or after block
> 108 for that reason. The ON-SCREEN TEXT card table is after block 108 deliberately.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *The Census* | 1–9 | 0:00–1:30 | the order; the objection; title; thesis |
| Act I — *Six Questions* | 10–29 | 1:30–4:50 | §1 — grain, clear and turbid, two currents |
| Act II — *Fifty Circuits* | 30–51 | 4:50–8:30 | §1–§2 — the ring, the tide, 合陰 |
| Act III — *The Seventh Answer* | 52–75 | 8:30–12:30 | §3 — the ageing turn; the fan goes down |
| Act IV — *Mist, Ferment, Ditch* | 76–95 | 12:30–15:50 | §4, §7–§11 — burners, blood, wine |
| Act V — *The Honest Reckoning* | 96–108 | 15:50–18:00 | what holds, what does not; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---

# COLD OPEN — *The Census* · blocks 1–9 · 0:00–1:30

**SOUND:** A water clock. One drip, then another, unhurried. No music yet.
**VISUAL:** Black. The drip is the only event. Ink-wash flat 2D throughout, 16:9.

Blocks 1–2 pull up and back into a high overhead of a city at night, rain on tile,
roofs receding into depth. Lit windows going dark in a slow wave from the far edge
toward camera. *History lower-third sits on block 1 — it is required inside the
first ten seconds.*

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the question nobody had asked | In the year this text was set down, somebody at a Chinese court asked a question no administrator had asked before. Not how many people the empire had. What hour they were all asleep. |
| 2 | Arthur (V.O.) — what a census of sleep is | A census counts bodies. This one would count something nobody had thought to measure — the moment a whole population stops. Runners were sent out at midnight, on foot, to tally the windows still burning. |

**SOUND:** The snap of a folding fan. Sharp, theatrical.
**VISUAL:** Interior, lamplit. FAN-DI in the gold robe, glasses on, **fan snapped
open**, addressing a room we never see. He is enjoying this.

| Block | Beat | Narration |
|---|---|---|
| 3 | Fan-di (Xavier) — the order | Every ward, every gate, every street. I want lamps counted, not estimated. A man awake at the third watch is working, praying, or ill — and a sovereign ought to know which of the three his empire is doing. |

**VISUAL:** DR-QI in the blue cheongsam, open bamboo scroll held casually like a
tablet. She lets the order finish. She does not look impressed and she does not look
unimpressed.

| Block | Beat | Narration |
|---|---|---|
| 4 | Arthur (V.O.) — the objection | His court physician heard the order out, and then said the thing that makes this episode. The count already exists. It was written down long ago, it gives the hour a name, and it explains why. |
| 5 | Dr-Qi (Vesper) — it is already written | Send them if it pleases you, but they will bring back an hour the canon already gives. Midnight. The text calls it the great meeting, and it does not treat that hour as a coincidence. It treats it as arithmetic. |

**ON-SCREEN TEXT — block 6.** Card: **靈樞·營衛生會第十八**, brushed, with
*"Ling Shu, chapter 18"* beneath in small type. See the card table after block 108.

| Block | Beat | Narration |
|---|---|---|
| 6 | Arthur (V.O.) — the citation | The book is the Spiritual Pivot, the hands-on half of the Yellow Emperor's Inner Canon. Needles, channels, the mind. Chapter eighteen. The Meeting of Nutritive and Defensive Qi. Copied and argued over for two thousand years. |

**ON-SCREEN TEXT — block 7.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 7 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon. The chapter is Ling Shu eighteen, and we are calling this episode The Night Watch. It is about sleep for about four minutes. Then it stops being about sleep. |
| 8 | Arthur (V.O.) — the thesis | Watch the shape of what follows. The emperor asks six questions, all of them about where a body gets its fuel. The text answers all six, and then answers a seventh he never asked. |

**VISUAL:** Hard cut to morning. Cold clean light, the court, screens open. Close on
the fan in Fan-di's hand as it snaps shut, and open again.

| Block | Beat | Narration |
|---|---|---|
| 9 | Arthur (V.O.) — the fan rule | One thing to watch on the man himself. The fan is his tell. Snapped open, he is performing. Folded and set down, he means it. He sets it down once tonight, and not again. |

---

# ACT I — *Six Questions* · blocks 10–29 · 1:30–4:50

**VISUAL:** The court in daylight. Dr-Qi with the open scroll. LEI-GONG slumped on a
bench at the edge of frame, already half asleep, cinnabar robe rumpled, hand drum on
the floor beside him.

**CHARACTER — Fan-di:** performing throughout Act I. Fan open on every line. He asks
his six questions the way a man asks about somebody else's problem.

| Block | Beat | Narration |
|---|---|---|
| 10 | Fan-di (Xavier) — questions one to three | A question of natural philosophy, physician. Nothing more. From what does a person receive qi? Where do yin and yang meet? Which qi is the nutritive, and which is the defensive? Answer in order, and answer plainly. |
| 11 | Fan-di (Xavier) — questions four to six | And three more. Where is the nutritive born? Where does the defensive join it? And the old and the vigorous do not share one qi; in them blood and qi keep to different places. I would hear where they meet. |
| 12 | Arthur (V.O.) — the odd one out | Six questions. Five are plumbing — where does it come from, where does it go, what is it made of. The sixth asks why the old are different, and he asks it last, and quickly. |

**VISUAL:** Dr-Qi answers to the room, not to him. Behind her the visual argument
runs: grain in a bowl, a stomach rendered as a vessel, a pale thread lifting toward
the chest.

| Block | Beat | Narration |
|---|---|---|
| 13 | Dr-Qi (Vesper) — where it comes from | A person receives qi from grain. Grain enters the stomach and is handed on to the lung, and from there the five organs and the six receptacles all take their share. That is the whole supply. There is no other. |
| 14 | Arthur (V.O.) — what that rules out | Notice what that rules out. No breath of heaven, no inherited spark, no soul poured in. Whatever runs this body, the text says, came in through the mouth and was once a field of millet. |
| 15 | Dr-Qi (Vesper) — clear and turbid | What is clear in it becomes the nutritive. What is turbid becomes the defensive. One food, sorted into two currents at the moment it is taken up, and they behave nothing like each other for the rest of your life. |
| 16 | Arthur (V.O.) — a sorting principle | Clear and turbid are not chemistry. They are a sorting principle — the fine part and the coarse part, the part that feeds and the part that guards. Every claim in the chapter descends from it. |
| 17 | Dr-Qi (Vesper) — inside and outside | The nutritive travels within the vessels. The defensive travels outside them. Inside is the road with walls, and it is orderly. Outside is everything else — the flesh, the spaces between, the skin. The guard patrols where there is no road. |

**ON-SCREEN TEXT — block 18.** Card: **營在脈中，衛在脈外**.

| Block | Beat | Narration |
|---|---|---|
| 18 | Arthur (V.O.) — the eight characters | Nutritive within the vessels. Defensive outside the vessels. Eight characters, and they set up everything that follows — including, four minutes from now, the sentence that explains why an old man lies awake all night. |
| 19 | Arthur (V.O.) — a supply network | So the picture is two currents drawn from one fuel, running in parallel, one inside the pipes and one outside them. It is a supply network. Two thousand years before anyone drew a supply network. |

**VISUAL:** Fan-di lowers the fan slightly — not down, just lower — and looks at his
own hand.

| Block | Beat | Narration |
|---|---|---|
| 20 | Fan-di (Xavier) — the pushback | Let me be certain I understand you. You have described me as a granary with opinions. Everything I am — my judgement, my temper, whether I can hold a thought past noon — is downstream of breakfast. Is that the claim? |
| 21 | Dr-Qi (Vesper) — the answer | Downstream of grain, and of what your stomach can do with it. The text is not flattering anyone. It says the emperor and the stable boy run on the same fuel and the same schedule, and it means it. |
| 22 | Arthur (V.O.) — taking it seriously | This is the part worth taking seriously. Strip out the qi and what remains is a claim that metabolism sets the terms for everything else. That is not a foolish thing to have guessed. |

**SOUND:** A hand drum hits the floor. LEI-GONG jerks awake.
**VISUAL:** He stands too fast, grins, has no idea what has been said.

| Block | Beat | Narration |
|---|---|---|
| 23 | Lei-Gong (Zane) — the control group arrives | You sent for me at dawn, so here I am at dawn. I slept extremely well, thank you, and I have no idea what any of you are talking about. Is there food in this discussion? |
| 24 | Arthur (V.O.) — remember him | Remember him. He is about to become the most important object in the room, and he will sleep through it. The chapter calls him the vigorous, and he has done nothing to earn it. |
| 25 | Dr-Qi (Vesper) — the guard's temperament | The defensive qi has a temperament, and the text gives it one in four words. Fierce, violent, slippery, quick. It does not queue, it does not wait for a door to be opened properly, and that will matter later. |
| 26 | Arthur (V.O.) — hold that word | Hold on to that word, fierce. It comes back near the end of the chapter attached to something else, and when it does, the text is telling you what kind of thing it thinks wine is. |
| 27 | Arthur (V.O.) — sleep enters the chapter | And then one sentence that changes the subject. When the qi arrives at yang, a person rises. When it arrives at yin, a person comes to rest. Sleep has just entered a chapter about food. |

**VISUAL:** A servant sets a tally board down. Fan-di does not touch it. He reads it
from where he stands.

| Block | Beat | Narration |
|---|---|---|
| 28 | Fan-di (Xavier) — the count comes back | Read it to me again. Ward by ward, gate by gate, counted and not estimated, exactly as I ordered. Eleven thousand four hundred households in the inner city. At the third watch — lamps still burning in six. |
| 29 | Arthur (V.O.) — the turn | Six houses out of eleven thousand four hundred. The physician was right, and the emperor has a number he did not need. What he wants now is the arithmetic underneath it, and the text gives it. |

---

# ACT II — *Fifty Circuits* · blocks 30–51 · 4:50–8:30

**VISUAL:** The argument goes abstract and stays there for most of the act. Ink
diagrams over the court, drawn as though brushed live: a closed loop, a counter, a
tide line. **No people in blocks 30–35, 39–44 or 46–48.**

| Block | Beat | Narration |
|---|---|---|
| 30 | Dr-Qi (Vesper) — the circuit | The nutritive circles without pause. Fifty circuits, and then the great meeting comes round again. Yin and yang are threaded one through the other — a ring with no end, and no place along it you could call the start. |
**ON-SCREEN TEXT — block 31.** Card: **營周不休，五十而復大會，陰陽相貫，如環無端**.

| Block | Beat | Narration |
|---|---|---|
| 31 | Arthur (V.O.) — the ring | The nutritive circles without rest. Fifty circuits, then the great meeting. Yin and yang threaded through each other like a ring with no end. It is the chapter's most quoted line, and its most misquoted. |
| 32 | Arthur (V.O.) — the thing to get right | Fifty circuits is a whole day and a night. Not fifty circuits a night — that doubles the canon's own figure, and it is the commonest error about this passage. One cycle. Light and dark together. |
| 33 | Arthur (V.O.) — why a ring | And the ring is a deliberate shape. A ring has no first point, so nothing in the body gets to be the cause of everything else. There is no engine here. There is only circulation. |
| 34 | Dr-Qi (Vesper) — the split | The defensive runs twenty-five circuits through yin and twenty-five through yang, and by that division the day is separated from the night. Twenty-five out in the light. Twenty-five in the dark. The count is the clock, and nothing else is. |
| 35 | Arthur (V.O.) — the actual claim | Read that slowly, because it is the boldest idea in the chapter. Day and night are not being imposed on the body from outside. They are being generated inside it, by a count, out of food. |

**VISUAL:** Fan-di steps into the diagram, literally — the brushed ring hangs in the
air around him. Fan still open.

| Block | Beat | Narration |
|---|---|---|
| 36 | Fan-di (Xavier) — the objection | Then answer me this, physician. The sun divides day from night. It has done so without my permission every day of my life and every day before it. Why would my blood need to keep a separate count? |
| 37 | Dr-Qi (Vesper) — the answer | Because they are not two counts. The text says the body runs on the same reckoning as heaven and earth — one schedule, kept in two places. The sun does not push you into sleep. You arrive there when it does. |
| 38 | Arthur (V.O.) — same reckoning | Four characters carry that: on the same reckoning as heaven and earth. Not caused by heaven. Not obedient to it. Running the same accounts, independently, and coming out at the same number. |

**ON-SCREEN TEXT — block 40.** Card: **日中而陽隴為重陽，夜半而陰隴為重陰**.

| Block | Beat | Narration |
|---|---|---|
| 39 | Dr-Qi (Vesper) — flood and flood | At midday yang stands at flood, and that is doubled yang. At midnight yin stands at flood, and that is doubled yin. Two peaks, exactly twelve hours apart, and the whole day is the slope running between the two of them. |
| 40 | Arthur (V.O.) — doubled | Doubled yang at noon. Doubled yin at midnight. The word is a flood word — a river standing at its highest, about to turn. Not a switch. A tide already on its way back down. |
| 41 | Arthur (V.O.) — a tide, not a switch | That distinction is the whole quality of the model. Nothing in it happens suddenly. Everything floods, crests, and ebbs, which means every hour of the day is somewhere on a slope rather than in a state. |
| 42 | Dr-Qi (Vesper) — the night half | Midnight is yin at flood. After midnight, yin declines. At first light yin is spent, and yang receives the qi. That is a handover, and it is the first of the two this chapter troubles to name. |
| 43 | Dr-Qi (Vesper) — the day half | Midday is yang at flood. As the sun goes west, yang declines. At sundown yang is spent, and yin receives the qi. The same movement, run backwards, on the other side of the day — and no part happens quickly. |
| 44 | Arthur (V.O.) — four hinges | Four hinge points, then. Two floods and two handovers — midnight, first light, midday, sundown. Any hour you can name in this system sits between two of them, and the text will tell you which. |

**VISUAL:** Back to the room. Fan-di has stopped moving. The fan is still open but
he has stopped using it.

| Block | Beat | Narration |
|---|---|---|
| 45 | Fan-di (Xavier) — which hinge | And the third watch. Where does the third watch fall, between your hinges? Ask it as a scholar would — I am simply completing the table. Yin at its flood, or already declining, or somewhere the text does not name? |
| 46 | Dr-Qi (Vesper) — the great meeting | At midnight comes the great meeting, and the ten thousand people all lie down. That is the answer to your census and it was written before your census. The text names the hour. It calls it the joining of the dark. |

**ON-SCREEN TEXT — block 47.** Card: **夜半而大會，萬民皆臥，命曰合陰**.

| Block | Beat | Narration |
|---|---|---|
| 47 | Arthur (V.O.) — the joining of the dark | At midnight comes the great meeting, when the ten thousand people all lie down. This is named the joining of the dark. Nine characters, and they are the most beautiful thing in the chapter. |
| 48 | Arthur (V.O.) — the image | Sit with the picture. Every window in the empire out at the same hour, not by decree, not by curfew, but because everybody in it is running the same count and the count has come round. |

**VISUAL:** The full-frame image the episode has been building to. An ink-wash
country at night, every settlement dark at once. Hold it long.

| Block | Beat | Narration |
|---|---|---|
| 49 | Arthur (V.O.) — what it is not | And it is a claim, not a mystery. The text is not saying anything is watching. It is saying the hour is arithmetic — that counting correctly tells you when a country will be asleep. |
| 50 | Fan-di (Xavier) — the census answered | So I did not need the runners. The hour was in a book on that shelf, and I sent forty men into the rain to fetch a number a physician could have read me sitting down. Very well. It is answered. |
| 51 | Arthur (V.O.) — and then he asks again | It is answered. He has what he asked for, the room is ready to end, and he asks one more question — the one he asked quickly the first time, and nobody followed up. |
---

# ACT III — *The Seventh Answer* · blocks 52–75 · 8:30–12:30

**VISUAL:** The light drops. Lamps lit one by one behind them through the act; by
block 72 the room is nearly dark. This is the only act where the light changes
inside the scene.

**CHARACTER — Dr-Qi:** the more he performs, the stiller she gets. From block 57 she
does not move at all.

| Block | Beat | Narration |
|---|---|---|
| 52 | Arthur (V.O.) — the setup | He asks it the way people ask the question they came for. Casually, at the end, as though it had occurred to him. And he asks it in the form the text uses — a pair. |
| 53 | Fan-di (Xavier) — the question about the old | One more, and then we are finished. The old do not close their eyes at night. What qi brings that about? I ask for the record — my ministers are old, and the state has an interest in their judgement. |
| 54 | Fan-di (Xavier) — and the pair | And the other half, since the text asks it too. The young and the vigorous do not close their eyes by day. What qi brings that about? Both halves, physician. I would rather have the whole table than a column. |
**ON-SCREEN TEXT — block 55.** Card: **老人之不夜瞑者，何氣使然？**

| Block | Beat | Narration |
|---|---|---|
| 55 | Arthur (V.O.) — the classical question | The old do not close their eyes at night. What qi makes it so? That is the emperor's question, and the chapter's, and it is one half of a pair that almost every retelling drops. |
| 56 | Arthur (V.O.) — why the pairing matters | The pairing is the argument. Ask only why the old sleep badly and you get a complaint. Ask why the young do not doze by day, and you are describing a single system with two ends. |
**VISUAL:** Behind Dr-Qi, the ink road: wide, smooth, open. A pale current runs its
length without catching on anything.

| Block | Beat | Narration |
|---|---|---|
| 57 | Dr-Qi (Vesper) — the vigorous | In the vigorous, qi and blood are abundant. The flesh is supple. The qi-roads run clear. The movement of nutritive and defensive never departs from its regularity, which is the whole of it — nothing here is working hard. |
| 58 | Dr-Qi (Vesper) — the schedule keeps | Everything simply arrives when it is due. Twenty-five circuits in the light and twenty-five in the dark, on time, without anyone attending to it. And because the schedule keeps, the day comes out the way it should. |
| 59 | Dr-Qi (Vesper) — both halves | Therefore they are keen by day, and they sleep at night. Both halves of that sentence are the same fact, told from opposite ends. He is sharp in the morning for the reason he is unconscious at midnight. |

**ON-SCREEN TEXT — block 60.** Card: **晝精而夜瞑**.

| Block | Beat | Narration |
|---|---|---|
| 60 | Arthur (V.O.) — keen by day | Keen by day, asleep by night. Four characters. The first of them is not a word for awake — it is a word for sharpness, for the mind actually working. Being conscious is not the claim. |
| 61 | Arthur (V.O.) — what the claim is | The claim is that daytime sharpness and nighttime sleep are one thing measured twice. You do not get one without the other. You cannot lose one and keep the other. That is the part that hurts. |
**SOUND:** A snore. Everyone looks.
**VISUAL:** LEI-GONG, asleep sitting up, mid-afternoon, hand drum in his lap.

| Block | Beat | Narration |
|---|---|---|
| 62 | Lei-Gong (Zane) — the control group, awake again | Sorry. Sorry. I heard most of that. Roads, grain, the ring with no end — I was following it right up to the part about the circuits, and then I was somewhere else entirely. What did I miss? |
| 63 | Arthur (V.O.) — he has earned none of it | He sleeps like the text says he should, wakes sharp, and could not tell you why. That is what the chapter means by the vigorous. It is not a virtue, not discipline, and not permanent. |
**VISUAL:** The ink road again — but the banks are closing in, the stroke narrowing,
the current catching and slowing.

| Block | Beat | Narration |
|---|---|---|
| 64 | Dr-Qi (Vesper) — the old | In the old, qi and blood are in decline. The flesh is withered. The qi-roads run rough. Same roads, same traffic, same schedule required of it — and every one of those conditions has moved against the schedule. |
| 65 | Dr-Qi (Vesper) — the grinding | The qi of the five organs grinds against itself instead of passing. The nutritive is thinned and scant, so the current that should be filling the vessels is no longer filling them. That is the first half of the failure. |
| 66 | Dr-Qi (Vesper) — the guard turns | And the second half is worse. The defensive qi turns, and campaigns inward. The guard that should be patrolling the outside comes in through the walls it was posted to hold, and it is still fierce when it does. |

**ON-SCREEN TEXT — block 67.** Card: **營氣衰少而衛氣內伐**.

| Block | Beat | Narration |
|---|---|---|
| 67 | Arthur (V.O.) — the nine characters | The nutritive thins and scants; the defensive campaigns inward. Nine characters. The second verb is not a medical word. It is the word for a punitive expedition — an army sent against its own territory. |
| 68 | Arthur (V.O.) — what that image does | Whoever wrote that chose it. Ageing here is not a wearing out or a running down. It is a garrison turning inward on the country it was raised to defend, on schedule, every night. |
| 69 | Dr-Qi (Vesper) — therefore | Therefore they are not keen by day. And they do not sleep at night. The same sentence as the vigorous, with a negative in front of each half — the text is showing you it is one failure. |
**ON-SCREEN TEXT — block 70.** Card: **晝不精，夜不瞑**.

| Block | Beat | Narration |
|---|---|---|
| 70 | Arthur (V.O.) — both negated | Not keen by day. Not asleep by night. Set it beside the other line and the shape is unmissable: the vigorous get both halves, the old lose both halves, and nobody gets a trade. |
| 71 | Arthur (V.O.) — the whole point | So ageing, in this model, does not move your sleep to a different hour. It takes one end of the day and then it takes the other, because the roads carrying both have roughened. |
**SOUND:** Nothing. The room has gone quiet.
**VISUAL:** Fan-di folds the fan. He sets it down flat on the table. **He does not
pick it up again for the rest of the episode.** He is not looking at anyone.

| Block | Beat | Narration |
|---|---|---|
| 72 | Fan-di (Xavier) — the fan goes down | My ministers are old. I said that. I would like to ask the same question a second time, and to have you answer it as though the man asking were not old, but had not slept properly since spring. |
| 73 | Dr-Qi (Vesper) — she does not press | Then I would say the roads do not read your age off a register. They report what condition they are in. And I would say that a text two thousand years old cannot tell you which of those two you are. |
| 74 | Arthur (V.O.) — the seventh answer | He asked six questions about where a body gets its fuel. The text answered those, then answered the one he did not ask — what it costs to keep running, and when the bill comes due. |
| 75 | Arthur (V.O.) — the act turn | That is the whole of what this chapter is famous for, and there are six minutes left. What remains is the part almost nobody quotes: where the two currents are actually made, and out of what. |

---

# ACT IV — *Mist, Ferment, Ditch* · blocks 76–95 · 12:30–15:50

**VISUAL:** Lamps up again, but cooler. The scroll is unrolled on the table between
them and stays there. **Fan-di's fan stays down, in frame, on every shot of him.**

| Block | Beat | Narration |
|---|---|---|
| 76 | Fan-di (Xavier) — where do they come from | Then finish it properly. The nutritive and the defensive — by what road do they come? You have had them circling my body for a quarter of an hour and you have not once said where either of them is made. |
| 77 | Dr-Qi (Vesper) — the two burners | The nutritive issues from the middle burner. The defensive issues from the lower burner. And before you ask what a burner is — it is not an organ you could hold. It is a region, and a job that region does. |
| 78 | Arthur (V.O.) — the variant, stated plainly | Here the received text splits. Many editions read that the defensive issues from the lower burner; a substantial line of transmission reads upper instead. Both are ancient. We will not pretend it is settled. |
| 79 | Fan-di (Xavier) — then what are they | Three burners, then. Upper, middle, lower. I have heard the phrase my whole life and I have never once been told what it means. Where do they issue from? Take them in order and do not simplify for me. |
| 80 | Dr-Qi (Vesper) — the upper burner | The upper burner issues from the upper mouth of the stomach, rises alongside the gullet, pierces the diaphragm, spreads through the chest, runs out to the armpit and follows the taiyin, turns back to the yangming, and reaches the tongue. |
| 81 | Arthur (V.O.) — read it as a route | Do not read that as anatomy; checking it against a body is beside the point. Read it as a route — a description of where something goes, written by people who could only observe the going. |
| 82 | Dr-Qi (Vesper) — the middle burner works | The middle burner lies alongside the stomach, behind the upper. What it receives it strains for the dregs, steams for the fluids, and transforms into the finest essence. Three verbs. Straining, steaming, transforming. It is a kitchen. |
| 83 | Dr-Qi (Vesper) — and makes blood | And that essence it pours upward into the vessel of the lung, where it is transformed into blood, to serve the living body. The text stops there to say something it says nowhere else. Nothing is more precious than this. |

**ON-SCREEN TEXT — block 84.** Card: **乃化而為血，以奉生身，莫貴於此**.

| Block | Beat | Narration |
|---|---|---|
| 84 | Arthur (V.O.) — the boldest claim | Transformed into blood, to serve the living body; nothing is more precious than this. Which is a claim about where blood comes from, and the answer the chapter gives is dinner. Steamed, strained, and sent upward. |
| 85 | Arthur (V.O.) — wrong, and the right shape | The mechanism is wrong. Blood is not distilled from food in the chest. But the shape of the answer — that the body manufactures its own substance from what it eats — is the right shape. |
| 86 | Dr-Qi (Vesper) — the lower burner | The lower burner branches at the coiled intestine and pours into the bladder. Water and grain lie together in the stomach, become dregs, descend to the large intestine together; and there the fluids are strained off and separated. |

**VISUAL:** Fan-di reaches out and puts one finger on the scroll — the first time he
has touched it.

| Block | Beat | Narration |
|---|---|---|
| 87 | Fan-di (Xavier) — good | Good. Then I have heard the rest of it before, and I never understood it until now. The upper burner is like mist, the middle like fermenting froth, the lower like a drainage ditch. That is what was meant. |
**ON-SCREEN TEXT — block 88.** Card: **上焦如霧，中焦如漚，下焦如瀆**.

| Block | Beat | Narration |
|---|---|---|
| 88 | Arthur (V.O.) — the three images | Mist above, ferment in the middle, a ditch below. It is the emperor's own line in the classical text, the last thing the chapter says, and it does more work than any explanation in it. |
| 89 | Arthur (V.O.) — why they work | Because each names a state and a rate. Mist spreads and cannot be caught. Ferment is slow, warm, and changes what it holds. A ditch carries off, downhill, and does not care what it carries. |
| 90 | Fan-di (Xavier) — the wine question | Then explain a thing that has annoyed me since I was nineteen. A man drinks wine and eats at the same table. The grain is not finished with. And yet the water leaves him first, and long before it. Why? |
| 91 | Dr-Qi (Vesper) — the answer | Because wine is the liquid of grain already ripened. The kitchen work is done before it ever reaches you. Its qi is fierce, and it is clear. So it goes in after the grain and comes out before it. |
| 92 | Arthur (V.O.) — fierce, again | There is that word again. Fierce — the same word the chapter used for the defensive qi, which does not queue or wait for a door. The text is not moralising. It is classifying, by temperament. |
| 93 | Fan-di (Xavier) — the last question | One more and I will let you sleep, which I gather is a thing other people do. Blood and qi are said to be different in name and one in kind. I have never known what that sentence should mean. |
| 94 | Dr-Qi (Vesper) — one kind | The nutritive and defensive are essence-qi. Blood is spirit-qi. Different names, one kind — and here is what follows from it. One robbed of blood has no sweat. One robbed of sweat has no blood. They come from the same store. |

**ON-SCREEN TEXT — block 95.** Card: **奪血者無汗，奪汗者無血**.

| Block | Beat | Narration |
|---|---|---|
| 95 | Arthur (V.O.) — two deaths, not two lives | The chapter's coldest line follows. In a person's life there are two deaths and not two lives. Two doors out of the same room, and the one way in goes through the kitchen. |
---

# ACT V — *The Honest Reckoning* · blocks 96–108 · 15:50–18:00

**VISUAL:** Out of the room entirely. Ink-wash abstractions, then the night city
again. **No dramatised characters speak until block 102.**

| Block | Beat | Narration |
|---|---|---|
| 96 | Arthur (V.O.) — what is not true | Now the reckoning, and it is not close. There are no fifty circuits. Nothing makes twenty-five passes through anything between dawn and dusk. The count the whole chapter is built on does not exist. |
| 97 | Arthur (V.O.) — nor are they substances | Nutritive and defensive qi are not substances, not fluids, and not anything a modern instrument has ever found. They are not a naming of something real under an old word. There is nothing there to rename. |
| 98 | Arthur (V.O.) — what is true | And then this. That alertness and sleep run on a roughly daily internal cycle, keyed to light but not created by it, is well supported. The chapter said the body keeps its own count. That holds. |
| 99 | Arthur (V.O.) — the second true thing | So does the other half. Sleep does become shorter and more broken with age, and daytime alertness does fall with it. Both are ordinary findings now. Both were written down here, together, two thousand years ago. |
| 100 | Arthur (V.O.) — the hard half | Together is the word. Anyone can notice that old people sleep badly. What this chapter did was refuse to treat that as its own complaint, and insist it was one system failing at both ends. |
| 101 | Arthur (V.O.) — what a wrong model can do | A model can be wrong in every part and still be the right shape. This one was, and the shape is what let it hold two observations nobody else had put in the same sentence. |
**VISUAL:** Back to the room, dawn. The scroll rolled. The fan still on the table
where it was set down.

| Block | Beat | Narration |
|---|---|---|
| 102 | Dr-Qi (Vesper) — her close | I will tell you what I think of it. It is wrong about the roads, and it is right about the traffic. And when a man asks me why he cannot sleep, I have nothing better to offer than that. |
| 103 | Fan-di (Xavier) — his close | Then I shall have the runners out again next month, and the month after, and I shall keep the count for twenty years. Not because the text is wrong. Because it is the only claim in it I can check. |
| 104 | Lei-Gong (Zane) — the question nobody wants | Can I ask something? If the old lose both ends of the day, and the young have both — then everyone in this room is somewhere between those two. So which end goes first? And how would you know? |
| 105 | Arthur (V.O.) — the answer he gets | Nobody answers him. Not because the answer is frightening, but because the chapter does not have one — it describes two states and never describes the passage between them. That question waited a long time. |
**VISUAL:** The night city, one last time. Every window dark. Then one, low in
frame, lights.

| Block | Beat | Narration |
|---|---|---|
| 106 | Arthur (V.O.) — the last image | The count came back at eleven thousand four hundred households and six lamps burning. It is the sixth one that this whole chapter is about, and every one of us takes a turn at being it. |
| 107 | Arthur (V.O.) — the close | Ling Shu eighteen. The Meeting of Nutritive and Defensive Qi. Written down when nobody knew what blood was for, by people who were watching very carefully anyway. Thank you for watching The Emperor's Inner Canon. |

**ON-SCREEN TEXT — block 108.** End disclaimer card. Plain plate; text hand-added
at edit. Editorial credit beneath.

| Block | Beat | Narration |
|---|---|---|
| 108 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we say plainly where its mechanism does not survive contact with the evidence. |

---

## ON-SCREEN TEXT cards — the exception to text-free clips

Every other block is **text-free**; captions come from the tracked sidecar. These
eleven are the exception, and the reason is structural: `assemble_final.sh` has **no
text-overlay parameter**, so a quotation card carries no text unless the text is in
the clip.

**Every card block still needs a voice take, and it must clear 8.6s like any
other** — a silent card fails the assembler's narration-per-window assert
(`blocks [..] have NO narration in their windows`). All twelve are narrated over, and
that narration is in the act tables above.

> **The first column here reads `Block NN`, not a bare number, and that is
> deliberate.** A table whose first cell is a bare integer has the same shape as a
> narration row. This one sits after block 108 so it cannot truncate the sidecar —
> but it *did* silently collide with a bulk edit of the narration cells during
> drafting, overwriting eight of the glosses below. Prefixing the column removes the
> collision for good. Apply the same rule to any numbered table added to this
> document later.

| Card block | Card | Gloss |
|---|---|---|
| Block 6 | 靈樞·營衛生會第十八 | the citation — **Ling Shu 18**, never "Chapter 46" |
| Block 18 | 營在脈中，衛在脈外 | nutritive within the vessels, defensive outside |
| Block 31 | 營周不休，五十而復大會，陰陽相貫，如環無端 | fifty circuits; a ring with no end |
| Block 40 | 日中而陽隴為重陽，夜半而陰隴為重陰 | doubled yang at noon, doubled yin at midnight |
| Block 47 | 夜半而大會，萬民皆臥，命曰合陰 | the great meeting; the joining of the dark |
| Block 55 | 老人之不夜瞑者，何氣使然？ | the emperor's question |
| Block 60 | 晝精而夜瞑 | keen by day, asleep by night |
| Block 67 | 營氣衰少而衛氣內伐 | the nutritive thins; the defensive campaigns inward |
| Block 70 | 晝不精，夜不瞑 | not keen by day, not asleep by night |
| Block 84 | 乃化而為血，以奉生身，莫貴於此 | transformed into blood; nothing more precious |
| Block 88 | 上焦如霧，中焦如漚，下焦如瀆 | mist, ferment, drainage ditch |
| Block 95 | 奪血者無汗，奪汗者無血 | robbed of blood, no sweat; robbed of sweat, no blood |

*(Twelve cards. Block 7 is the series title card and carries no classical text, so it
is not listed here.)*

**Generated Chinese glyphs are unreliable and cannot be checked from this host** —
the CDN has been blocked on every cut for a long time. Two options, and it is a
production decision, not a detail: generate the card blocks as **plain plates and add
the characters at edit time**, or generate them with text in-frame and have a human
verify every glyph before the cut ships. **Default to plates plus edit-time text**
for anything a viewer could catch — especially block 6, which is the citation.

---

## Source mapping — translation § → blocks

Sections are those of `inner-canon-ch46-translation-v2.md`.

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | the six questions | 10–12 |
| §1 | grain → stomach → lung; clear and turbid; 營在脈中，衛在脈外 | 13–19 |
| §1 | 慓悍 the defensive's temperament *(anticipated from §6)* | 25–26 |
| §1 | 氣至陽而起，至陰而止 | 27 |
| §1 | 營周不休，五十而復大會；如環無端；the 25/25 split | 30–35 |
| §2 | 與天地同紀 | 37–38 |
| §2 | 重陽/重陰; the four hinge points | 39–44 |
| §2 | 夜半而大會，萬民皆臥，命曰合陰 | 46–49 |
| §3 | 老人之不夜瞑; the paired question | 53–56 |
| §3 | 壯者…晝精而夜瞑 | 57–61 |
| §3 | 老者…營氣衰少而衛氣內伐…晝不精，夜不瞑 | 64–71 |
| §4 | 營出於中焦，衛出於下焦 + the 上焦/下焦 variant | 76–78 |
| §5 | the upper burner's course | 79–81 |
| §7 | 泌糟粕，蒸津液，化其精微；化而為血；莫貴於此 | 82–85 |
| §9 | the lower burner's course | 86 |
| §11 | 上焦如霧，中焦如漚，下焦如瀆 | 87–89 |
| §10 | the wine question; 其氣悍以清 | 90–92 |
| §8 | 異名同類；奪血者無汗，奪汗者無血；兩死而無兩生 | 93–95 |
| **§6** | **漏泄, leakage sweating** | **cut — see runtime levers** |

**§6 is the only section not in the episode**, and it is the primary stretch lever.
Its key phrase 慓悍滑疾 is nonetheless *used*, at blocks 25–26, because the 悍 echo
into the wine passage (§10, block 92) is the sharpest thing in the chapter and would
be lost otherwise. If §6 is restored, blocks 25–26 stay as the setup.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of Balance*
→ **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears the cast
sheet's **blue** cheongsam, never jade.

**Dramatic material not in the source, flagged as invention:** the census, the
runners, the tally of eleven thousand four hundred households and six lamps, Fan-di's
sleeplessness and his age, the fan business, Lei-Gong sleeping through the lesson,
Dr-Qi's line about the roads not reading your age off a register, and Lei-Gong's
closing question. **The classical text is a bare question-and-answer with no
characterisation, no court, and no narrative whatsoever.** Everything attributed to
*the text* above is in the translation; everything else is dramatisation, and the
compliance notes treat it as such.

---

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run for this
cut.** The figures below are a planning preflight, not a priced gate — call `balance`
and `get_cost` live before spending anything.

### This does not fit the credit balance. Say so before anything else.

Last recorded balance: **862.6** (after the ch1 v5 run, 2026-08-04).

| Clip model / tier | Credits/clip | × 108 blocks | vs 862.6 |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,080** | **over budget** |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~2,700 | ~3.1× balance |
| `gemini_omni` 720p | 30 | ~3,240 | ~3.8× balance |
| `seedance_2_0` 1080p | 90 | ~9,720 | ~11× balance |

Everything else is trivial by comparison: a landscape style key at **2**, ~108 voice
takes at **~0.8** ≈ 86, assembly **free**, captions **free** (the 0.05/voiced-block
charge went with `explainer_video`, taking ~5.4 off the v1 estimate). **Clips are
essentially the entire bill, so the model choice is the budget.**

**An 18-minute episode does not fit at any tier — not even an all-draft pass.** Three
ways forward, and it is a decision, not a detail:

1. **Top up** before starting.
2. **Cut the runtime.** 90 blocks (15:00) at 480p is ~900 — still over, and with
   nothing left for re-takes. 78 blocks (13:00) would fit and is below the format
   floor. See the runtime levers.
3. **Produce act by act across billing periods**, assembling each act as its own
   `assemble_final.sh` run. See *Assembly strategy* for the join problem this creates.

**Budget re-takes separately and generously.** On ch1 v5 one block took fourteen takes
and ~11 credits. At 108 blocks, even a 20% re-take rate is ~17 extra credits of voice
— cheap — but the *time* cost is the real one, and it is what makes a whole-episode
single-pass assembly risky.

### Voice measurement — required before ~108 takes

`SKILL.md` is explicit, and two things make it non-optional here:

- **Zane has never been measured at length.** The only figure on record is a five-word
  line at 2.3–2.6s, where pause overhead dominates and no words/sec can be derived.
  **Lei-Gong has three blocks in this script (23, 62, 104), each written at 34–39
  words provisionally.** Under a hard 8.6s floor, an unmeasured voice is a render
  failure, not a rounding error.
- **Arthur, Xavier and Vesper were measured on trailer-register lines.** This script
  asks Vesper for sustained explanatory paragraphs across 30 blocks, which is not what
  she was measured on.

**Measure one full-length take per voice through the assembler's own gate before
generating anything else**, and write the results back into `SKILL.md`'s step-3 table:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

Four takes, ~3.2 credits. A mis-sized script is 108.

**Named fallback if Zane will not hold the window.** Blocks 23, 62 and 104 are written
so they can be **reassigned to Arthur as reported speech** without changing the block
count, the act boundaries or the shot list — recast as *"The boy said he had slept
extremely well and had no idea what anyone was talking about"* and so on. Block 104 is
the one that costs something in the recast, because its force comes from the person
asking. Decide this **before** generating Act I, not at Act V.

### Style key — needs a 16:9 sibling

The whole chained lineage is 9:16. Longform needs a **landscape variant** derived from
the ch46 vertical key (itself chained off the ch1 head
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`) by passing its **job ID** as the reference and
changing only the framing. Record it as its own lineage entry — **do not overwrite the
vertical key**, the trailers still need it. `medias[].value` takes a `media_id` or a
prior `job_id` only; a `https://` URL there fails.

### Clips

Not generated. From the step-0 gate. `seedance_2_0_mini` at the confirmed tier, 10s,
`aspect_ratio: "16:9"` **and** "landscape 16:9 framing" written into every prompt text
— the double declaration has held on this model across three cuts and a full set of
clips has previously come back in the wrong orientation without it.

- `generate_audio: false` on **every** clip. This is a correctness requirement, not a
  saving: the assembler now mixes clip audio in at 0.12 under the voice rather than
  discarding it, so a clip generated with native audio is **audible in the finished
  episode** and the only fix is regenerating it.
- Pre-decline `IN THE DARK` (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every clip.
  **Acts III and V are night-lit almost throughout** — this is the highest preset-swap
  exposure of any cut in the repo, larger than the ch46 trailer's.
- **Generate block 1 alone and check its returned dimensions before committing the
  other 107.**
- Two properties are hard-gated by the assembler and fail the whole run: **clip
  duration ≥ 9.5s**, and motion from frame 1 (a static open or frozen tail only WARNs,
  but the house answer to that warning is to regenerate the block).

### Assembly strategy — decide before generating a single take

`assemble_final.sh` takes clip/voice **pairs** against a declared block count and
asserts an `N × 10s` output. **An assembled act is therefore not a valid input to
it** — the old `explainer_video` path, where act outputs fed back in as inputs, is
gone. Two routes, neither yet run at this scale anywhere in the repo:

- **One call for the whole episode.** Removes the join entirely, but means ~216 files
  downloaded inside a single chained command in an ephemeral sandbox, and the sandbox
  is reclaimed ~10s after the call returns. Run `background: true` and poll the log
  with `tail` **at least every 60s** or the sandbox dies under the job. Note that ch1
  v5 lost a complete run to exactly this: `background: true` plus a timed-out
  transport call left nothing on disk.
- **Concat the act outputs** with our own ffmpeg, outside the sandbox's rules.
  Defensible — the acts are correctly assembled and a concat of equal-geometry MP4s is
  a lossless remux — but it puts the −16 LUFS normalisation **per act rather than
  across the episode**. Check levels at the five seams.

Assembly itself is free and the sandbox costs no credits. **Assemble the cold open as
its own run first and measure how long it actually takes**, then extrapolate. Do not
plan a 108-block render against an assumed ceiling.

Per act, in order: generate that act's clips and takes, **append the job IDs to this
record immediately — before moving on**, then assemble the act on its own to check
pacing early, exporting its MP4 out of the sandbox in the same chained command. The
record is the crash-recovery file; a lost session with unrecorded IDs means paying
twice.

### Voiceover

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55** for all four — rate is not a
duration lever and must not be reached for. Record per block: job ID, file duration,
**and the assembler's measured speech figure to 3 decimal places** (they differ, and
the second is the one that was gated; ch1 v5 lost an assembly to an "8.50s pass" that
was 8.497s).

Speaker allocation across the 108 blocks:

- **Arthur** — 1, 2, 4, 6–9, 12, 14, 16, 18, 19, 22, 24, 26, 27, 29, 31–33, 35, 38,
  40, 41, 44, 47–49, 51, 52, 55, 56, 60, 61, 63, 67, 68, 70, 71, 74, 75, 78, 81, 84,
  85, 88, 89, 92, 95–101, 105–108. **(59 blocks)**
- **Xavier** (Fan-di) — 3, 10, 11, 20, 28, 36, 45, 50, 53, 54, 72, 76, 79, 87, 90, 93,
  103. **(17)**
- **Vesper** (Dr-Qi) — 5, 13, 15, 17, 21, 25, 30, 34, 37, 39, 42, 43, 46, 57–59, 64–66,
  69, 73, 77, 80, 82, 83, 86, 91, 94, 102. **(29)**
- **Zane** (Lei-Gong) — 23, 62, 104. **(3 — gated on measurement)**

59 + 17 + 29 + 3 = 108.

### Reproduction notes

- **The narration tables must stay three columns**, and no table with a bare integer
  in its first cell may appear between blocks 1 and 108 — `parseNarration` keeps the
  first consecutive run from block 1 and stops at the first row that breaks it, so a
  stray numeric table silently truncates the sidecar. Verify after any edit by
  checking that `check_caption_fit.js` reports **108 blocks**.
- **Sidecars are not built yet, deliberately.** `build_subtitles.js` times cues from
  the take durations in this record; with none recorded it warns and assumes a full
  10s per block, shipping a sidecar that drifts against the render. Build and commit
  `.srt`/`.vtt` once the takes exist, at `--format 16:9`, and regenerate after any
  narration or take change.
- **Cue timing is approximate on this path and the production record must say so.**
  `build_subtitles.js` centres cues on take *file* duration while the assembler
  centres on *detected speech*. On `seed_audio` those measured identical on all seven
  ch1 v5 takes, so the drift computes to 0.00s — **do not hand-nudge cues to correct a
  drift that is not there.** It would be real on any uploaded or hand-mixed take.
- **Visual QA will probably not be possible from this host.** The CDN has been blocked
  on every cut for a long time. The sandbox has its own network access and can probe
  the render next to where it was built — **but a probe is not a viewing.** Never write
  that the episode looks right, or that its captions wrap, unless somebody watched the
  file; say which checks actually ran.
- **Renders never land in git.** Download to `output/episode-46/renders/`. The
  `.srt`/`.vtt` sidecars are tracked, required deliverables and *do* land in git.

---

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Sits on **block 1**.
- **End disclaimer card** — the mandated string over **block 108**, held long enough to
  read comfortably. Block 108 renders as a plain plate; card text is hand-added at
  edit, which also keeps the credit out of a paid render.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  beneath the disclaimer, **and** in the description.
- **On-screen text** — the twelve cards listed above, plus the series title on block 7.
- **Music** — licensed guqin only, and **nothing generated by this pipeline**. The
  assembler's `--music` flag places a bed you supply at `--music-vol` ≤0.20; it
  generates none. Sourcing and licensing stay with the producer.

### Finishing steps

This episode's own numbers. **Never copy these into another cut** — block boundaries
and timecodes differ between versions of the same chapter, and that is exactly where
the mistakes land. Both caption scripts are pure text tools: they read this document,
touch no video, need no network, cost no credits. Run them from the repo root or pass
an absolute path.

**1. Check captions**, before generating any voice take. 16:9 is the forgiving format
(~1001px/line against 9:16's 556px), so anything reported here is genuinely long:

```
node scripts/check_caption_fit.js output/episode-46/inner-canon-ch46-longform-v2.md --format 16:9
```

**Current result: `All clauses fit` — exit 0, across all 108 blocks, with no known
exception raised.** The mandated disclaimer clause in block 108 is 58 characters and
measures 967px, which fits one 16:9 line; it is only on 9:16 that it overflows and has
to be reported as an exception. **The companion trailer therefore reports it and this
document does not, and that is correct rather than a discrepancy.**

Re-run this after any narration edit. Exit 1 is a designed signal, not a crash: under
the sidecar-only path an overflow is a **readability** report, not a render failure,
because libass margins keep a wide clause in frame regardless. Fix whatever it reports
at script stage, where a fix is free — after recording it costs a re-take per block.

**2. Build the sidecar**, after the takes exist and their durations are recorded above:

```
node scripts/build_subtitles.js output/episode-46/inner-canon-ch46-longform-v2.md --format 16:9
```

Commit the `.srt` and `.vtt` beside this document. Then, on a **copy** of the `.srt`,
delete the cues covering **block 108** (everything from `00:17:50,000`) so the
disclaimer is not simultaneously a caption and a card. The burn copy is blocks 1–107,
ending at or before `00:17:49,9xx`.

**3. Burn captions**, once, over the finished 18-minute episode — never per act.
Nothing is burned at assembly, so act assemblies carry no captions by construction and
there is no layering to avoid. Run `ffmpeg -version` and `fc-match Anton` **first**: a
missing Anton substitutes a wider font silently while the sidecar still reports "fits".
Convert the `.srt` to `.ass` and **re-target `PlayRes` to the delivered geometry**
before burning — ffmpeg's SRT→ASS converter hardcodes `384x288`, which scales every
style value by `frame_height/288` and runs the lines off frame. `build_subtitles.js`
prints the two-step command. **Check the delivered geometry rather than assuming
1280×720**: on ch1 v5 the assembler rescaled 480×854 clips to 496×864, so the output
was not the clip size.

**4. History lower-third** — *"Presented as history & philosophy"*, in at **0:01**, out
at **0:08** (block 1). `drawtext` in the burn pass, not in an NLE.

**5. Quotation cards** — the twelve listed above. If the default (plain plates plus
edit-time text) is taken, each card's characters are added by `drawtext` in the same
pass, held for that block's full 10 seconds: **0:50–1:00** (block 6), **2:50–3:00**
(18), **5:00–5:10** (31), **6:30–6:40** (40), **7:40–7:50** (47), **9:00–9:10** (55),
**9:50–10:00** (60), **11:00–11:10** (67), **11:30–11:40** (70), **13:50–14:00** (84),
**14:30–14:40** (88), **15:40–15:50** (95). Block 7's series title card is **1:00–1:10**.

**6. End card — 17:50 to 18:00** (block 108). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. Both also go in the description at upload.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
blocks 96–101** — the reckoning is the episode's only unillustrated passage and plays
better dry — and **out at the block 107 close**, so the card runs silent.
`--music-vol 0.20` (≈ −14 dB) lands in range, but the flag mixes one continuous bed
with **no dropout window**, so both gaps require a hand mix either way.

---

## Compliance notes (YouTube)

One bullet per `CLAUDE.md` rule, audited against **this script**, before generation.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document,
  spoken first in block 108, on screen as the end card, and in the description.
- **Health content stays philosophical — the load-bearing rule for this chapter.**
  Sleep is the highest-RPM topic on the slate precisely because of sleep-app and
  supplement advertiser overlap, and that is exactly the pressure that turns a history
  channel into a wellness channel. **Nothing in these 108 blocks tells anyone how to
  sleep.** No condition is named, no remedy, no practice, no schedule, no dosage, no
  benefit claim, and no suggestion that anything here could be acted on. Every
  mechanism statement is attributed to *the text* in the same breath, and blocks 96–97
  deny the mechanism outright on screen.
- **Mortality and ageing stay reflective and non-graphic.** Ageing is the subject of
  Act III and it is carried entirely by objects, light and one man's stillness — an ink
  road narrowing between closing banks, lamps burning down, a fan set on a table. **No
  bodies, no illness, no decline shown on a person.** Portraits, not bodies. The 內伐
  military image (blocks 66–68) is deliberately illustrated as ink and territory, never
  as a figure being attacked; see the prompt-stage audit below.
- **Indulgence / alcohol — cautionary framing only, and this cut is thinner than
  cautionary.** The wine passage (blocks 90–92) is an observation about *transit time*
  and is explicitly not moralised — block 92 says so. **No feast, no bottles, no
  pouring, no drinking, no close-ups of any vessel in use.** The passage is carried on
  a still vessel and a diagram of two roads, and Fan-di is not shown drinking at any
  point in the episode. This is the one rule an illustrator could break by accident, so
  it is written into the shot direction rather than left to judgement.
- **Supernatural hooks must be explicitly debunked by the payoff.** None is raised. The
  census is administrative; the one named mystery — the hour — is answered at block 46
  and stated as arithmetic rather than agency at block 49 (*"the text is not saying
  anything is watching"*), which is the debunk arriving **before** the payoff rather
  than after. Act V then withdraws the mechanism entirely.
- **Titles and thumbnails must honor the educational payoff.** No *secret*, *ancient
  trick*, *cure*, *anti-aging*, *live to 100*, no shocked-face thumbnail. **Standing
  conflict with the Blueprint, unresolved and flagged again:** its Ch 46 hook is *"The
  Ancient Science of Sleep — and Why the Old Sleep Badly"*, and *"science of"* asserts
  exactly what blocks 96–97 deny. **Use "They Were Wrong About Why. They Were Right
  About What."** Thumbnail direction: the dark country with one lit window.
- **Self-certify as general audience, not made for kids** — at upload.
- **Citation accuracy.** The chapter is **Ling Shu 18**, said aloud at blocks 7 and 107
  and carded at block 6. "Chapter 46" is a slate index internal to this repository and
  must never reach a viewer. If an on-screen citation ever disagrees with the
  narration, the narration is right.
- **Hedge allocation — three characters speak, and this cut must say what moved.**
  **Nothing load-bearing moved.** Arthur retains: the framing (1–2, 7–9), the
  historical citation (6), every *this-is-wrong* statement (96–97), every
  *this-holds* statement (98–101), the closing reckoning (105–107) and the disclaimer
  (108). Dr-Qi states **the text's** model throughout and marks it as the text's inside
  her own lines (blocks 73, 102) — the hedge travels **with** the claim rather than away
  from it. Fan-di makes no factual claim about bodies at any point: he orders, objects
  and asks. Lei-Gong's three blocks contain no claim at all; block 104 is a question the
  narrator then explicitly declines to answer on the chapter's behalf.
- **Dramatisation is disclosed.** The census, runners, tally, Fan-di's sleeplessness and
  Lei-Gong's closing question are invention; the source mapping itemises every one.
  Everything attributed to the text traces to a numbered section of
  `inner-canon-ch46-translation-v2.md`.
- **Textual honesty — a rule this chapter needs and the compliance list does not
  name.** Block 78 states the 上焦/下焦 variant on screen rather than quietly picking a
  reading. A cut about people overstating a text must not overstate the text.
- **Prompt-stage audit — run on the shot direction before generating, and recorded as
  run.** Read against the ch8 `nsfw` incident, where restraint and bound-figure imagery
  tripped the safety filter even though the subject matter was fine. **Two beats here
  needed re-cutting at script stage on exactly that ground:**
  - **Blocks 66–68, the guard campaigning inward.** A military verb against one's own
    body is precisely the kind of prompt that returns `nsfw` if illustrated with a
    figure. Written as **ink and territory only — no human figure in any of the three
    blocks**, and the "attack" is a stroke doubling back across a boundary.
    - **Blocks 64–65, the roughened roads.** Written as brushwork narrowing between
    closing banks. **No withered flesh, no aged body, no medical imagery.**

  Everything else is low risk: rooms, scrolls, lamps, rain, diagrams, a sleeping boy who
  is comic and posed rather than unconscious, and one city at night. **Assessed low
  risk; the two beats above are the ones to re-check on the returned clips.**

**Residual risk: LOW**, conditional on (a) the title and thumbnail holding the
philosophical line the narration holds, and (b) the wine sequence being illustrated as
written rather than as a feast.

---

## Runtime levers

Expressed in **blocks**, because blocks are the unit that costs money.

**Cut to 15:00 — 90 blocks.** Drop, in this order:

| Drop | Blocks | Cost |
|---|---|---|
| the burner course detail | 79–81 | §5 goes entirely; block 87's mist/ferment/ditch still lands |
| the tide detail | 41–44 | keeps 重陽/重陰, loses the four hinge points |
| the supply-network gloss | 19, 22, 26 | Arthur commentary; no source material lost |
| the wine passage | 90–92 | §10 goes; **also removes the only alcohol reference**, which is a compliance simplification if that is ever wanted |
| Lei-Gong's first entrance | 23–24 | **and with it the Zane measurement gate**, if he is cut from 62 and 104 too |
| the second reckoning beat | 99–101 | keeps 96–98; weakens Act V considerably |

That is exactly 18 blocks. **Do not drop 57–61 or 64–71** — those fifteen blocks are
§3, and §3 is why anyone is watching.

**Stretch to 20:00 — 120 blocks.** Add, in this order:

1. **§6, leakage** — four blocks after 92: the hot-food question, the wind opening the
   interstices, the defensive running out through them, and 漏泄 named. This is the
   only section of the chapter the episode omits, blocks 25–26 already set it up, and it
   pays off the 悍 echo a second time. **The obvious first addition.**
2. **The hand taiyin great meeting** (§5's closing) — two blocks after 81: the fiftieth
   circuit closing at a named point on the wrist, which is the moment the abstraction
   touches a place you can put a finger.
3. **The Spiritual Pivot as a book** — three blocks after 6: what the Ling Shu is,
   against the Su Wen, and why this chapter sits in the hands-on half.
4. **Three more Act V blocks** on what had to wait — that the passage between the two
   states went undescribed for two thousand years, which is block 105's unanswered
   question given its due.

**Block 108 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement, and it costs a full block: it is in the block plan and in the cost
preflight, not folded into block 107.

**Zane is the other hard gate.** Cutting blocks 23, 62 and 104 removes the measurement
requirement entirely and saves nothing else — Lei-Gong still appears on screen. That is
a legitimate schedule decision but it costs the episode its only non-expert voice, and
block 104 is the best question anybody asks.
