# The Emperor's Inner Canon — Lingshu 50 Longform v1 (13 minutes 20)

**論勇篇第五十 · Where Courage Lives**

**Not rendered.** Target `seedance_2_0_mini` @ 480p draft tier, **80 blocks × 10s =
800s = 13:20**, **landscape 16:9**, target 1280×720. Record the delivered geometry
here after assembly.

**Final render:** *(none yet — nothing has been generated for this cut.)* When it
exists, record the **whole `https://…` CDN URL**, not the bare `media_id`.

**Cite this chapter on screen and in speech as *Lingshu 50*, never as a bare
"Chapter 50".** Suwen 50 (刺要論) is a different chapter. Both halves of the canon
run to eighty-one separately numbered chapters.

Companion trailer: **`inner-canon-lingshu50-trailer-v1.md`** (8 blocks, 80s, 9:16),
which previews Act III and Act IV and withholds this episode's coda.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Why 13:20, and not 12:00 or 14:00

**The runtime was chosen by counting the chapter's beats, not by picking a target
and filling it.** `CLAUDE.md` sets an 11:30 floor and a 20:00 ceiling; the brief
asked for 12–14 minutes. Within that band the material lands at **80 blocks**, and
here is the arithmetic that produced it.

Lingshu 50 is a **short chapter — six passages** — but they are not equally
weighted, and two of them carry almost all the value:

| Source passage | Natural beat count | Why |
|---|---|---|
| §1 the storm puzzle + four seasonal winds | 8–10 | the hook, and four winds each need a beat |
| §2 the constitutional typology | 6–8 | requires an explicit gloss (see compliance) |
| §3 pain is not courage | 14–16 | a **2×2** — four combinations, each needs its own beat |
| §4 the brave man's anatomy | 9–11 | organ by organ, plus two glosses (三焦, 膽) |
| §5 the timid man's anatomy | 9–11 | the same list in reverse — the slate's "duel" form |
| §6 wine, and 酒悖 | 11–13 | the payoff, and the echo has to be set up and sprung |

Add a cold open (8), a coda (7) and the mandated end-disclaimer block (1), and the
band is **73–86 blocks**. **80 sits in the middle of it.**

**Below ~76 blocks the episode stops working**, and specifically it stops working in
one place: Act III is the slate's named structural form for this chapter — *"Duel —
two subjects tracked in parallel throughout, the brave man and the timid man, in
split composition"* — and a duel needs both portraits at full length. Compress
either and the Act IV echo lands as an assertion rather than as a recognition.

**Above ~86 blocks the wine act has to be padded**, because §6 is a single passage
and there is no more of it. Padding the payoff is the worst possible place to pad.

**So 13:20 is the length at which nothing is cut and nothing is stretched** — which
is what was asked for. It also clears the 11:30 floor by 1:50, so the two runtime
levers below can both be taken without dropping under it.

## What this episode argues

Three claims, in order, and the third is the one worth the runtime.

1. **The chapter converts a moral category into a physical one.** Courage stops
   being something a man is praised for and becomes something he is built with.
   §3 does this explicitly and §4–5 do it anatomically.
2. **It is wrong about the anatomy and right about the shape of the problem.**
   There is no organ of courage. But temperament does have a physical substrate,
   fear *is* something the body does before it is something you feel, and §4's
   description of rage — pallor, piloerection, the eyes widening, the chest
   expanding — is an accurate account of a sympathetic response written two
   millennia before anyone had a sympathetic nervous system to name.
3. **§6 is the chapter auditing itself.** The wine passage uses *the same words*
   for the drunk man's bravado as §4 used for the brave man's rage — 肝浮膽橫
   against 肝舉而膽橫. The text does not flag the repetition. Either courage really
   is a physical state the body can be pushed into, or the theory has just caught
   itself out. **The chapter accepts the consequence and then adds 氣衰則悔** —
   *when the qi declines, regret follows* — which turns the finding from an excuse
   into a warning.

The English payoff is that **膽 *dǎn* means both the gallbladder and nerve**, and
English did the same thing independently: *gall*, *galling*, *to have the gall*.
Two languages buried courage in the same organ without consulting each other.

## Cast and voice

| Role | Voice | `voice_id` | Function in this episode |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | history, mechanism, **every compliance hedge**, the colour gloss |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the 黃帝 role — asks for a ranking of men, is refused one |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the **少俞 Shao Yu** role — recites, never oversells |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | the auditor — and the episode's one invented character |

`seed_audio` presets, `speech_rate` 55 for all four. **One speaker per 10s block** —
the assembler takes exactly one audio per block, so every speaker change is its own
block. **No block below contains two voices.**

**Dr-Qi never sounds like she is winning** (`CLAUDE.md`): the more Fan-di performs,
the stiller she gets. Her hardest block is **76**, where she has to tell the Emperor
that the long answer is a question he still has to answer himself, and it only lands
if she declines the victory. Her second is **36**, where the chapter's flattest
sentence — pain tolerance is skin and flesh, not character — has to be delivered
without any relish at all.

**Lei-Gong is not comic relief, and he is not in the source.** 雷公 does not appear
in Lingshu 50; the chapter is 黃帝 and 少俞 alone. He is added as an auditor, and
each of his four blocks is a real structural objection: **block 20** is the one that
dismantles the colour scheme on its own terms, and **block 68** is the episode's
best line, because he is the one who notices what §6 has just done to §4.

**Lei-Gong is deliberately absent from the whole of Act IV's wine material except
block 68**, where he reasons about the mechanism and never about the drink. He is
the child-coded character in the cast, and he is kept away from the alcohol beats —
see *Compliance notes*.

### Writing constraint — sized to the 8.6–10.0s window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors, computed as `--clip-seconds − 1.4` to `--clip-seconds`.

**Budgets are `SKILL.md` step 3 as re-measured 2026-08-10 on the Suwen 13 trailer.**
This matters more than it looks:

| Voice | Blocks here | Budget used | Superseded budget still in other repo documents |
|---|---|---|---|
| Arthur | 33 | **38–44** | 31–34 |
| Xavier (Fan-di) | 8 | **40–44** | 36–41 |
| Vesper (Dr-Qi) | 22 | **41–43** | 37–41 |
| Zane (Lei-Gong) | 4 | **47–52** | 34–39 *(a guess, never measured)* |

> **This document is written to the current budgets. Two other longform documents in
> this repo are not.** `inner-canon-lingshu28-longform-v1.md`, its `v2`, and
> `inner-canon-suwen8-longform-v1.md` are all sized to superseded columns and carry
> explicit do-not-generate banners. **Do not copy a word budget out of any of them.**
> Arthur in particular moved from 31–34 to 38–44 — a legal 32-word line under the old
> row came back at **6.446s, 2.15s under the floor**, which is a hard assembler error.

**Three blocks are deliberately below their voice's budget, and each is a measured
decision:**

| Block | Words | Why |
|---|---|---|
| **6** | 32 | series/episode title. Title blocks run in a documented slow announcer mode — a 33-word title line returned **12.751s and 12.251s** on consecutive rolls in the Lingshu 28 v2 run and only landed at 25 words against a 32–36 budget. Scaled to the same fraction of the current budget. |
| **79** | 34 | closing title and editorial credit — the same slow mode, slightly less exposed than block 6 because it carries no colon. |
| **80** | 30 | the mandated disclaimer card. Its two short full-stopped sentences slow `seed_audio` badly: 33 words returned **11.33s, 16.93s and 10.54s** before the trailing clause was cut to 18 words, which landed 9.60s first roll. This is the 11-word mandated string verbatim plus an 18-word tail. |

**Roll blocks 6, 79 and 80 first**, before the seventy-seven ordinary blocks. If any
of them needs a rewrite it costs nothing at that point.

**No line in this script contains a comma-separated list of three or more items.**
The Suwen 8 run measured a 31-word Arthur line with a four-item comma list at
**12.022s** against **8.913s** for the same 31 words with none — a **3.1-second
swing from punctuation alone**, larger than any word-count effect measured anywhere
and more than twice the width of the window. Every enumeration in this script — the
four winds (block 9), the five phases (block 18), the three constitutional axes
(blocks 16 and 36) — is joined with *and* or split into separate sentences for
exactly that reason. **A rewrite must not reintroduce one.**

**These are arithmetic against measured rates, not measurements.** The rates are
survivor-biased, the run-to-run spread on identical text has been measured at
**2.44s** — wider than the 1.4s window — and Arthur ranged **3.98–4.80 w/s within a
single seven-block cut**. **Generate two variants per block and keep the better
one.** At ~1.45 a take that is the cheapest reliable method.

### How to read this script

`CLAUDE.md` asks for **SOUND / VISUAL / CHARACTER** blocks and a numbered shot list;
`build_subtitles.js` needs a **three-column narration table**. They are combined
rather than duplicated:

- **The narration tables are canonical for words.** Blocks run continuously **1–80
  across the whole episode**, never per-act — the assembly manifest is flat and
  act-local numbering produces off-by-one errors that are expensive to find in a
  13-minute render.
- **The SOUND / VISUAL / direction prose between them is canonical for
  performance**, and the **numbered shot list after block 80 is canonical for
  picture.** Neither restates a narration line.
- **The speaker is named in the beat column**, not a fourth column — the parser
  reads exactly three, and a fourth would leak into the caption text.

> **Do not insert a table whose first cell is a bare integer anywhere between blocks
> 1 and 80.** `parseNarration` keeps the first consecutive run from block 1 and stops
> at the first row that breaks it, so a stray numeric table silently truncates the
> sidecar. Every other table in this document sits before block 1 or after block 80,
> and the ON-SCREEN TEXT card table prefixes its first column with `Block` so it
> cannot collide. The shot list is a numbered *list*, not a table, for the same
> reason.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *The Same Storm* | 1–8 | 0:00–1:20 | 並行並立…或病或不病; citation; title; the wager |
| Act I — *Two Men, One Wind* | 9–23 | 1:20–3:50 | the four winds; 虛風; **the colour gloss, blocks 16–21**; skin and flesh |
| Act II — *Pain Is Not Courage* | 24–38 | 3:50–6:20 | 非勇怯之分也 — the 2×2, all four men; 乍死乍生; the tissue verdict |
| Act III — *The Shape of Courage* | 39–59 | 6:20–9:50 | 勇士者 / 怯士者 in parallel; 三焦; **膽 / gall**; 不能久怒; the ethical turn |
| Act IV — *Borrowed Courage* | 60–72 | 9:50–12:00 | 酒者，水穀之精; **肝浮膽橫 — the echo**; 氣衰則悔; 酒悖 |
| Coda — *Where Courage Lives* | 73–80 | 12:00–13:20 | what is wrong; what is right; the four voices close; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---

# COLD OPEN — *The Same Storm* · blocks 1–8 · 0:00–1:20

**SOUND:** Rain arriving on a tiled roof, from far off, getting closer. No music.
**VISUAL:** Black. Then an ink-wash road drawing itself across blank silk, left to
right, with two small figures walking it side by side. Flat 2D ink-wash throughout,
**landscape 16:9 framing**.

Blocks 1–2 stay on the road. *History lower-third sits on block 1 — it is required
inside the first ten seconds.*

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Two men walk the same road. They are the same age, and their coats are the same weight. The storm catches them both on the same afternoon. By morning one of them is ill in bed, and the other is completely fine. |
| 2 | Arthur (V.O.) — the claim | That is not a riddle. It is the opening question of a real chapter of Chinese medicine, and the man asking it is the Yellow Emperor. He wants to know why the same weather does not make the same illness. |

**SOUND:** A fan snapping open. Rain continuing behind it, muffled now — we are
indoors.
**VISUAL:** Interior, an audience chamber, seen straight on and symmetrical. FAN-DI
on the high seat — gold robe, glasses, **fan snapped open**. Rain running down a
lattice screen behind him. He is genuinely puzzled, which is rarer for him than
performing.

| Block | Beat | Narration |
|---|---|---|
| 3 | Fan-di (Xavier) — the question | Consider two men of the same age in coats of the same weight. They stand together and they walk together, and the same storm falls on both. One of them takes a fever and one of them does not. Explain that to me. |

**VISUAL:** DR-QI stands to one side with the open bamboo scroll held casually,
blue cheongsam, pencil behind the ear. She does not approach the seat, and she does
not begin.

**CHARACTER — Dr-Qi:** this is the chapter's actual opening move — 少俞 asks the
Emperor what he is really asking before answering. Play it as a physician sizing up
how much the patient wants to know, not as evasion.

| Block | Beat | Narration |
|---|---|---|
| 4 | Dr-Qi (Vesper) — what are you asking | Before I answer, I would like to know what Your Majesty is actually asking. There is a short version of this and a very long one, and they are not the same answer at all. So which does the throne want today? |
| 5 | Arthur (V.O.) — the citation | He wants all of it. What follows is chapter fifty of the Spiritual Pivot, the second half of the Yellow Emperor's Inner Canon. Its title is Lun Yong. On Bravery. And it does not begin with bravery at all. |

**ON-SCREEN TEXT — block 5.** Card: **靈樞·論勇篇第五十**, brushed, with *"Spiritual
Pivot, chapter 50 — On Bravery"* beneath in small type.

**ON-SCREEN TEXT — block 6.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 6 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon. This episode is called Where Courage Lives. It is about a text that goes looking for the exact place in the body where nerve is kept. |

**VISUAL:** Behind a pillar, unacknowledged, LEI-GONG — cinnabar robe, small hand
drum resting in his lap, a wax tablet on his knee. Already writing.

| Block | Beat | Narration |
|---|---|---|
| 7 | Lei-Gong (Zane) — the wager | I would like it noted, before anyone starts, that I am not afraid of storms. I have stood out in worse than this and never once taken a fever. So whatever the physician is about to explain, let the record show which of the two men I am. |
| 8 | Arthur (V.O.) — the thesis | Hold on to that, because he will regret it. The chapter begins with weather and ends somewhere much stranger. By the last page it has stopped talking about illness. It is dissecting the difference between a brave man and a coward. |

---

# ACT I — *Two Men, One Wind* · blocks 9–23 · 1:20–3:50

**VISUAL:** The chamber becomes the set for the whole episode. A low lacquer table,
the high seat, one standing lamp, and behind Dr-Qi a tall blank silk panel that
will carry every diagram in the episode, drawn live in ink as she speaks.

**CHARACTER — Fan-di:** performing again from block 13 onward, fan open. He wants
this to be the weather's fault, because that is the answer that costs him nothing.
**CHARACTER — Dr-Qi:** she recites. She does not argue and does not oversell.

| Block | Beat | Narration |
|---|---|---|
| 9 | Dr-Qi (Vesper) — the four winds | There are four winds, and they belong to the four seasons. Spring has a green wind. Summer has a yang wind. Autumn has a cool wind and winter has a cold one. Each of them makes a completely different kind of illness. |
| 10 | Arthur (V.O.) — what he just did | Notice what he has just done. He has not described four kinds of weather. He has described four relationships between a body and a season. Which is a different kind of claim altogether, and a much more interesting one. |
| 11 | Dr-Qi (Vesper) — 虛風 | The word he uses is not simply wind. It is empty wind. A wind that arrives out of its proper season or from the wrong quarter of the sky. And it finds a body that has nothing at all ready to meet it. |
| 12 | Arthur (V.O.) — the hinge | That is the hinge of the whole system. Ordinary seasonal wind is not the enemy. The enemy is wind that is out of step with the season, meeting a body that happens to be out of step with it too. |
| 13 | Fan-di (Xavier) — blame the weather | Then the fault is the weather, and my soldiers are simply unlucky. I can accept that. But you have just told me that the same empty wind takes one man and leaves the other, so the weather cannot be the whole of it. |
| 14 | Dr-Qi (Vesper) — the other half | It is not the whole of it. The wind is only half the question, and it is the half that everybody looks at. The other half is a man standing in it wearing a body. And the two bodies are not the same. |
| 15 | Arthur (V.O.) — the warning | So the chapter turns from the sky to the skin. And here it does something we are going to stop and look at carefully, because out of its own context it reads as something that it very badly is not. |

**VISUAL — blocks 16–21:** no people at all. The silk panel only. Ink diagrams,
brush strokes, and the five-phase wheel. **This range is a bounded unit and is
liftable in one edit — see *Runtime levers*.**

**ON-SCREEN TEXT — block 18.** Card: the five-phase wheel, **青 赤 黃 白 黑** at
five points, each labelled with its phase and season in small type — *wood/spring,
fire/summer, earth/late summer, metal/autumn, water/winter*.

| Block | Beat | Narration |
|---|---|---|
| 16 | Dr-Qi (Vesper) — the three axes | He sorts bodies by three things. The colour of the skin and its thickness and the firmness of the flesh beneath it. Thin skin over soft flesh cannot withstand the empty wind of its own season, and it is the season that decides. |
| 17 | Arthur (V.O.) — stop here | We need to be exact about what that first item is. The chapter assigns each season a colour and then assigns people to those colours. A modern reader will hear that as a claim about race, and it is worth slowing down. |
| 18 | Arthur (V.O.) — the five phases | The five colours are not populations. They are the labels of the five phases, which is the classification scheme that organises everything in this medicine. Green means wood and spring. Red means fire and summer. Black means water and winter. |
| 19 | Arthur (V.O.) — the plain verdict | So this is a claim about phase categories and not about human populations. We should still say the plain thing. It is false that some peoples are constitutionally hardier than others, and this series does not present it as anything else. |
| 20 | Lei-Gong (Zane) — the audit | May I point out that the scheme does not hold together on its own terms. It says a dark-skinned man with thick skin is safe from all four winds, and then says that if his skin is thin he falls ill like everybody else. So the colour is doing no work here. |
| 21 | Arthur (V.O.) — the text agrees | He is right, and the text agrees with him. From this point on the chapter never mentions colour again. Every argument it makes for the rest of its length runs on skin and flesh, and the colour scheme is quietly dropped. |

**VISUAL:** People back in frame. Dr-Qi has not moved. On the panel, two simple
cross-sections: one with a thick outer layer over dense hatching, one with a thin
outer layer over loose hatching.

| Block | Beat | Narration |
|---|---|---|
| 22 | Dr-Qi (Vesper) — what survives | Thick skin over firm flesh is not harmed by the winds of the four seasons. Thin skin over soft flesh is. And a man built the first way will only fall ill if the cold reaches him twice, from outside and from within. |
| 23 | Arthur (V.O.) — the real idea | Underneath the wrong parts, there is a real idea here. Susceptibility is a property of the body and not only of the exposure. Two people meet the same hazard and get different outcomes, and medicine has been chasing that ever since. |

---

# ACT II — *Pain Is Not Courage* · blocks 24–38 · 3:50–6:20

**SOUND:** The rain has stopped. The room is quieter than it has been.
**VISUAL:** The silk panel wipes clean. Over this act it will carry a two-by-two
grid, drawn one quadrant at a time.

**CHARACTER — Fan-di:** he thinks he is asking an easy question and is about to be
told he has been running his army on a category error.

| Block | Beat | Narration |
|---|---|---|
| 24 | Fan-di (Xavier) — the easy question | Then let me ask about something I can actually see. Some men endure pain without a sound and some cannot bear it at all. Everyone in my army believes the silent ones are the brave ones. Tell me whether they are right. |
| 25 | Arthur (V.O.) — the turn | This is the moment the chapter becomes something more than seasonal medicine. Because the answer is no. Bearing pain and being brave are two different things, and the text is about to prove it by pulling the two of them apart. |
| 26 | Dr-Qi (Vesper) — the denial | Whether a man can bear pain is not the line between courage and cowardice. Those are two separate measurements, and the court treats them as one. I can show Your Majesty four kinds of man, and only two behave as expected. |
| 27 | Arthur (V.O.) — the two axes | Two questions, asked separately. Does this man go forward when there is danger? And does this man hold still when there is pain? The chapter's insight is that you can answer those two questions independently, and get four different people. |

**ON-SCREEN TEXT — block 27.** Card: an empty two-by-two grid, axes labelled
**見難** (*meets danger*) and **忍痛** (*endures pain*). Each quadrant fills as its
block arrives.

**VISUAL — blocks 28–32:** each block fills one quadrant with a single seated ink
figure. Dr-Qi indicates them without looking at them.

| Block | Beat | Narration |
|---|---|---|
| 28 | Dr-Qi (Vesper) — brave, no tolerance | Here is the brave man who cannot bear pain. He sees the danger and he goes forward into it without hesitating. Then the pain arrives and he stops. Not because his nerve failed him, but because his body will not take it. |
| 29 | Dr-Qi (Vesper) — timid, tolerant | And here is the timid man who can. He hears that there is danger and the fear takes him at once. But bring the pain to him and he does not move. He sits under it as if it were weather. |
| 30 | Arthur (V.O.) — the separation | Read those two men again. One of them has courage and no tolerance. The other has tolerance and no courage. The chapter has just separated two things that every language on earth still smears together into a single word. |
| 31 | Dr-Qi (Vesper) — brave and tolerant | The third is the man the songs are about. He sees the danger and is not afraid of it, and when the pain comes he does not move either. Both measurements come out high. He is rare, and he is not the point. |
| 32 | Dr-Qi (Vesper) — neither | The fourth is the one Your Majesty has seen. Danger and pain arrive together. His eyes turn away and dart about, and he cannot speak. The breath goes out of him and the colour leaves him. He seems by turns dead and alive. |

**VISUAL:** No figure for block 33. Hold on the completed grid, then let the fourth
quadrant's ink bleed slightly at the edges, as if the paper were damp.

| Block | Beat | Narration |
|---|---|---|
| 33 | Arthur (V.O.) — what that is | That last description is the most physical writing in the chapter. It is also a strikingly accurate account of acute fear. The face goes white because the blood has gone elsewhere, and the voice stops because the breath has. |

**CHARACTER — Fan-di:** **he sets the fan down here.** It stays down for the rest of
Act II. This is the episode's first sincerity beat and the fan is the tell.

| Block | Beat | Narration |
|---|---|---|
| 34 | Fan-di (Xavier) — the confession | I have seen exactly that, and more than once, and I have never known what to call it. It is not cowardice, because I have seen the same man be useful the next day. Something happened to him that he did not choose. |
| 35 | Lei-Gong (Zane) — no box fits | I have been trying to put myself in one of those four boxes and I do not like any of them. I am not afraid of storms, which I have said. But nobody has ever asked me to walk at anything holding a spear, so the question stays open. |
| 36 | Dr-Qi (Vesper) — the verdict | Whether a man bears pain is decided by the thickness of his skin. It is decided by the firmness of his flesh, and by whether his tissue is tight or slack. That is all it is, and not a statement about his character. |
| 37 | Arthur (V.O.) — what that does | Stop and notice what that sentence actually does. It takes a moral category, the kind of thing a man is praised or shamed for, and converts it into a property of tissue. Your tolerance for pain is upholstery, and nothing more. |
| 38 | Arthur (V.O.) — the harder question | Which leaves the harder question standing exactly where it was. If pain tolerance is upholstery, then what is courage? The Emperor asks it directly, and the answer he gets back is the strangest passage in the whole chapter. |

---

# ACT III — *The Shape of Courage* · blocks 39–59 · 6:20–9:50

**VISUAL:** **The split composition begins here and holds for the whole act.** The
silk panel divides down the centre. Blocks 41–51 draw the left figure only, in firm
confident line. Blocks 53–58 draw the right figure only, in thinner looser line.
Both remain on screen from block 53 onward. This is the slate's named structural
form for this chapter and the act should not be reblocked out of it.

**CHARACTER — Dr-Qi:** she gives both portraits in exactly the same cadence. The
recitation must not warm up for the brave man or cool for the timid one — the
identical delivery is what makes block 67 land.

| Block | Beat | Narration |
|---|---|---|
| 39 | Fan-di (Xavier) — the real question | Then tell me the thing I actually want. Not what makes a man flinch, but what makes him brave in the first place. Where does it come from? And do not say upbringing, because I have tried that theory already. |
| 40 | Arthur (V.O.) — an anatomy | What comes back is not a philosophy. It is a description of a body, organ by organ, as though courage were something you could go and point at. Here is the brave man, exactly as the Spiritual Pivot describes him. |

**ON-SCREEN TEXT — block 40.** Card: **勇士者，目深以固，長衝直揚**.

| Block | Beat | Narration |
|---|---|---|
| 41 | Dr-Qi (Vesper) — the face | The brave man has eyes set deep and steady, and they do not slide away from what they are looking at. The nose is long and the bridge of it runs straight. Already we are describing a face you would recognise. |
| 42 | Dr-Qi (Vesper) — the interior | Inside, the channels of the three burners run crosswise, and his heart sits upright in the chest. Not tilted, and not displaced. The word the text uses for the heart is the same word it would use for an honest official. |
| 43 | Dr-Qi (Vesper) — the gallbladder | His liver is large and it is firm. And his gallbladder is full, and it sits broad and wide beneath it. Your Majesty should hold on to that last one, because everything that comes after it depends entirely on the gallbladder. |
| 44 | Arthur (V.O.) — 三焦 | The three burners are worth a word. San jiao is a system with no organ attached to it, an idea about how fluid and heat move through the upper and middle and lower body. It has no anatomy, and it never did. |
| 45 | Arthur (V.O.) — 膽 | But the gallbladder is the one that matters here, and the Chinese word is dan. In this medicine dan names the organ and it also names nerve itself. To say a man has a large dan is to say he has guts. |

**ON-SCREEN TEXT — block 46.** Card: **膽** large and centred, with *"dǎn — the
gallbladder; courage, nerve"* beneath, and *"gall (n.) — bile; effrontery, nerve"*
beneath that.

| Block | Beat | Narration |
|---|---|---|
| 46 | Lei-Gong (Zane) — the catch | Wait. I want to be sure I have this right, because it is very good. The organ and the courage are the same word, so when the physician says a brave man has a full gallbladder, she is not making a comparison at all. She is saying the same thing twice. |
| 47 | Arthur (V.O.) — English did it too | And English did the same thing, independently, without ever reading this chapter. Gall means bile and it also means nerve. We say a man has the gall to do something, and we have entirely forgotten that we are naming an organ. |

**VISUAL:** The left figure's chest opens outward in ink. The small shape beneath
its ribs spreads wide and brightens.

| Block | Beat | Narration |
|---|---|---|
| 48 | Dr-Qi (Vesper) — anger him | Now anger him. The qi rises up and grows abundant, and the chest opens outward and widens. This is not a description of how he feels. It is a description of what his body is doing while he is feeling it. |
| 49 | Dr-Qi (Vesper) — the full picture | The liver lifts. The gallbladder spreads crosswise beneath the ribs. The corners of the eyes split wide and the eyes themselves lift upward. The hair rises along his arms and the face goes pale. That is the brave man in a rage. |
| 50 | Arthur (V.O.) — what that describes | Read that again and notice what it actually is. The pallor and the hair standing up and the eyes widening. That is a sympathetic nervous response, described accurately, two thousand years before anybody had a nervous system to describe. |
| 51 | Fan-di (Xavier) — recognition | I have felt that. Standing at a gate before it opens, with the hair going up on my arms and the whole chest getting bigger somehow. I always assumed that was fear arriving. You are telling me it is the same thing as courage. |

**VISUAL:** The right half of the panel fills for the first time. Same pose, same
scale, thinner line.

**ON-SCREEN TEXT — block 52.** Card: **怯士者，目大而不減，陰陽相失**.

| Block | Beat | Narration |
|---|---|---|
| 52 | Arthur (V.O.) — in reverse | And then the chapter does the thing that makes it worth an episode. It runs the whole description again, in reverse, for the other man. Same organs and same order, with every value flipped. Here is the timid man. |
| 53 | Dr-Qi (Vesper) — the face | The timid man has large eyes, but they are not set deep and they do not hold. In him the yin and the yang have lost each other. Whatever should be paired in this body is no longer running in step. |
| 54 | Dr-Qi (Vesper) — the interior | The channels of his three burners are disordered rather than crosswise. The nose is narrow, and it is short and small. Every single measurement that ran long and straight in the other man now runs short and crooked in this one. |
| 55 | Dr-Qi (Vesper) — the gallbladder | His liver ties are slack where the other man's were firm. And the gallbladder does not fill. It hangs there loose and half empty, which in this system is exactly the same sentence as saying that the man has no nerve. |
| 56 | Dr-Qi (Vesper) — the hollow | His stomach and intestines stand out, and beneath the flanks there is an emptiness. The text is unusually precise about that hollow space. Something that should be full in a brave man is simply not full in this one at all. |
| 57 | Dr-Qi (Vesper) — anger him too | Now anger this man, as hard as you like. The qi rises, but it cannot fill his chest. The liver and the lungs lift a little way, and then the qi weakens underneath them and they sink straight back down again. |
| 58 | Arthur (V.O.) — 不能久怒 | And then the line that makes the whole portrait land. He cannot stay angry for long. Not that he does not get angry, but that he cannot hold it, because there is not enough behind it to keep it going. |
| 59 | Arthur (V.O.) — the ethical turn | Which raises a question the chapter never quite asks. If this is all anatomy, then the timid man is not a lesser man. He is a man with a smaller gallbladder, and nobody chooses the size of their own organs. |

---

# ACT IV — *Borrowed Courage* · blocks 60–72 · 9:50–12:00

**SOUND:** A room heard from outside — voices, indistinct, a long way off. It
should read as *elsewhere*, never as an invitation.
**VISUAL:** **No cups, no bottles, no pouring, no drinking, no mouths, and no
tavern interior anywhere in this act.** The wine exists only as an effect on the
right-hand ink figure. Where a hall appears at all it is distant, silhouetted and
out of focus, behind the panel. Both figures stay on screen throughout.

**CHARACTER — Lei-Gong:** off screen for this entire act except block 68, where he
reasons about the mechanism and never about the drink.

| Block | Beat | Narration |
|---|---|---|
| 60 | Fan-di (Xavier) — the sharpest question | Then explain something to me that I have watched a hundred times. A man who will not meet my eye at noon will square up to my best soldier at midnight, after drink. Which organ does that? Because something in him changed. |
| 61 | Arthur (V.O.) — why it is a good question | It is a better question than it sounds. He is not asking why drink makes men foolish. He is asking his physician to account for it with the machinery she has just built, and she has to make the theory earn its keep. |
| 62 | Dr-Qi (Vesper) — what wine is | Wine is the essence of water and grain, and it is the liquid drawn out of cooked grain. Which is to say that it is food, concentrated until it has stopped behaving like food and started behaving like the weather instead. |
| 63 | Dr-Qi (Vesper) — 慓悍 | And its qi is fierce. That is the word the text chooses, and it chooses it carefully. Not warming and not nourishing, but fierce and fast moving. It is the word you would use for a raid rather than a meal. |
| 64 | Dr-Qi (Vesper) — the mechanism | It enters the stomach and the stomach distends. The qi turns and goes upward instead of down, and it fills the chest from below. Everything that I am about to say has already been said once before in this very chapter. |
| 65 | Arthur (V.O.) — listen | Listen closely to the next sentence, because you have already heard it once. It arrived about four minutes ago in this episode, describing a completely different man, and the text does not draw any attention to the repetition. |

**VISUAL:** The right figure's slack organ fills and spreads — the identical
animation used on the left figure in block 48, replayed exactly.

| Block | Beat | Narration |
|---|---|---|
| 66 | Dr-Qi (Vesper) — 肝浮膽橫 | The liver floats up, exactly as it did before. The gallbladder spreads out crosswise beneath the ribs. And at that moment he is, in every single way that this medicine knows how to measure, the exact equal of a brave man. |

**ON-SCREEN TEXT — block 67.** Card: the two phrases side by side —
**肝舉而膽橫** (§4, the brave man's rage) above **肝浮膽橫** (§6, the drunk man) —
with the shared characters 膽橫 picked out in a second ink colour.

| Block | Beat | Narration |
|---|---|---|
| 67 | Arthur (V.O.) — the echo | Those are the same words. Not similar words, and not a comparison the text is drawing for effect. The liver floats and the gallbladder spreads crosswise, in the anger of a brave man and in the belly of a drunk one. |
| 68 | Lei-Gong (Zane) — the audit | So the wine is not making him brave. The wine is producing the physical state that this chapter has spent all afternoon calling bravery. Which means either courage really is a shape the body can be pushed into, or else the theory has just caught itself out rather badly. |
| 69 | Arthur (V.O.) — it does not dodge | And this is where the chapter is better than it needed to be. It does not dodge. It accepts the consequence, and then it adds the one detail that turns the whole thing from an excuse into a warning. |
| 70 | Dr-Qi (Vesper) — 氣衰則悔 | He becomes like a brave man, and he does not know to avoid what a careful man would avoid. And then the qi declines. And when the qi declines, the regret arrives. That is the whole of the mechanism, stated plainly. |

**ON-SCREEN TEXT — block 71.** Card: **酒悖**, with *"jiǔ bèi — wine derangement"*
beneath in small type.

**VISUAL:** The right figure's organ dims and collapses back to slack line. The
left figure is untouched. Hold on the asymmetry.

| Block | Beat | Narration |
|---|---|---|
| 71 | Arthur (V.O.) — the name | The text gives the condition a name. Jiu bei. Wine derangement, or wine confusion. It is a man behaving like a brave man on courage that is not his own, and that will be entirely gone by the morning. |
| 72 | Arthur (V.O.) — the landing | Which is not a story about wine making men brave. It is a story about a man borrowing a shape he cannot keep, and the chapter is very careful to end on the regret rather than on the swagger. |

---

# CODA — *Where Courage Lives* · blocks 73–80 · 12:00–13:20

**SOUND:** Rain returning, faintly, as at the opening. Guqin bed drops out entirely
at block 79.
**VISUAL:** The panel wipes to blank silk. The two figures are gone. For blocks
75–77 we are back in the chamber with all three characters for the first time since
Act I.

| Block | Beat | Narration |
|---|---|---|
| 73 | Arthur (V.O.) — what is wrong | Say the plain things now, and say them clearly. The gallbladder does not produce courage. Nose length does not predict bravery. There is no organ you can measure to find out whether a person will go forward when it matters. |
| 74 | Arthur (V.O.) — what is right | And say what it got right, because that is the harder half. Temperament has a physical substrate. Fear is something the body does before it is something you feel. And that physiology can be borrowed chemically, which is what the wine passage describes. |

**CHARACTER — Fan-di:** **the fan stays down for the whole coda.** He does not
perform his way out of this one.

| Block | Beat | Narration |
|---|---|---|
| 75 | Fan-di (Xavier) — what he asked for | I asked you which of my soldiers was the better man. You have spent the afternoon telling me that I asked the wrong question, and that some of them were never given the same body to be brave in as the others. |
| 76 | Dr-Qi (Vesper) — the long answer | I told Your Majesty there was a short answer and a long one. The short answer is that they are differently built. The long answer is that you will still have to decide what you owe a man who was built afraid. |
| 77 | Lei-Gong (Zane) — the withdrawal | I have finished my notes, and I withdraw my earlier claim about the storms. On the chapter's own reckoning I have an entirely ordinary gallbladder. And I have no way of knowing what I would do at a gate. I am told that this is the honest answer. |
| 78 | Arthur (V.O.) — the thesis | So where does courage live? Not in the gallbladder. But the chapter was asking a real question, and the fact that it looked for the answer in a body rather than in a soul is the most modern thing about it. |
| 79 | Arthur (V.O.) — series close | This has been The Emperor's Inner Canon. Lingshu chapter fifty, On Bravery. Written and edited by Joshua Chin. The next episode crosses to the other half of the canon, and to the Basic Questions. |
| 80 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present this as history and philosophy. In every episode, we mark plainly where the evidence does not hold. |

---

## Shot list

Numbered to match the narration blocks. **Landscape 16:9 framing**, flat 2D
ink-wash house style, chained off this chapter's **16:9 style key sibling**.
**Text-free except the ON-SCREEN TEXT card blocks listed below** — captions come
from the tracked sidecar and the end card's text is hand-added at edit time.

**Cold open — The Same Storm**

1. Ink road drawing itself left to right on blank silk, two small figures walking
   it. Rain beginning to mark the paper. *History lower-third here.*
2. The two figures separate — one continues, one stops and sits down at the
   roadside. No faces at this scale.
3. Interior, symmetrical. FAN-DI on the high seat, gold robe, glasses, **fan
   snapped open**, rain on the lattice behind him.
4. DR-QI standing to one side, blue cheongsam, open bamboo scroll held casually,
   completely still. She does not approach the seat.
5. **CARD** — 靈樞·論勇篇第五十 brushed on silk, held, with the ink still wet.
6. **CARD** — series title, the three characters in a neutral group arrangement.
7. LEI-GONG behind a pillar, cinnabar robe, hand drum in his lap, writing on a wax
   tablet. He does not know he is on camera.
8. The blank silk panel behind Dr-Qi, empty, with a single brushstroke arriving.

**Act I — Two Men, One Wind**

9. Four ink wind-forms crossing the panel in sequence, one per season, each a
   different weight of stroke. No figures.
10. The four wind-forms hold, and a small standing outline appears beneath each.
11. A wind-form arriving from the wrong side of frame, against the direction of the
    other three.
12. Fan-di and Dr-Qi in two-shot, the panel between them carrying both wind-forms.
13. FAN-DI, fan open, sweeping it in a short dismissive arc.
14. DR-QI, still, the wind-forms dissolving behind her into a single standing
    outline.
15. Push in slowly on the blank half of the panel. No people.
16. Two cross-sections drawn side by side — thick outer layer over dense hatching,
    thin outer layer over loose hatching.
17. The five-phase wheel beginning to draw itself, incomplete.
18. **CARD** — the completed five-phase wheel, 青 赤 黃 白 黑 labelled.
19. The wheel holds, and a single character 色 is struck through with one clean
    ink line.
20. LEI-GONG stepping out from behind the pillar for the first time, tablet held
    up, mid-objection.
21. The wheel dissolves. The two cross-sections from shot 16 return and stay.
22. DR-QI beside the cross-sections, indicating neither.
23. The two cross-sections resolve into two standing outlines, side by side.

**Act II — Pain Is Not Courage**

24. FAN-DI leaning forward, fan open but held still.
25. The panel wipes clean. An empty two-by-two grid drawn in one continuous stroke.
26. DR-QI beside the empty grid, hands on the open scroll.
27. **CARD** — the grid with its axes labelled 見難 and 忍痛.
28. Top-left quadrant fills — a seated figure leaning forward, one hand raised.
29. Bottom-right quadrant fills — a seated figure drawn tight and compact, unmoving.
30. Both filled quadrants held, the other two conspicuously empty.
31. Top-right quadrant fills — a seated figure, upright, entirely still.
32. Bottom-left quadrant fills — a seated figure, the ink looser and the outline
    less certain than the other three.
33. The completed grid, the fourth quadrant's ink bleeding at its edges as if the
    paper were damp. **No figure, no face.**
34. FAN-DI **setting the fan down** on the lacquer table. Hold on the closed fan.
35. LEI-GONG looking at the grid with his stylus stopped mid-air.
36. DR-QI, flat and unmoving, the grid dimming behind her.
37. The grid dissolves into a single cross-section of skin over flesh.
38. Blank silk. One brushstroke arriving at the centre line.

**Act III — The Shape of Courage**

39. FAN-DI, fan still down, asking directly.
40. **CARD** — 勇士者，目深以固，長衝直揚 over the left half of the panel.
41. Left figure drawn from the head down. Two annotations arrive — the eyes, the
    nose.
42. Two more annotations — the three-burner channels crosswise, the heart upright.
43. Two more — the liver, and beneath it a small shape drawn full and broad.
44. The three-burner channels alone, drawn and redrawn, never resolving into an
    organ.
45. The small shape beneath the ribs isolated and enlarged, glowing faintly amber.
46. **CARD** — 膽 large and centred, with both glosses beneath. LEI-GONG in
    silhouette at the frame edge.
47. The card holds. The English word *gall* brushes in beneath the Chinese in the
    same ink weight.
48. The left figure's chest opening outward in ink.
49. The full sequence on the left figure — liver lifting, the small shape
    spreading wide, the hair rising, the face going pale.
50. The left figure holds at full rage. **No sound cue, no motion for one beat.**
51. FAN-DI, fan down, one hand on his own forearm.
52. **CARD** — 怯士者，目大而不減，陰陽相失 over the right half of the panel.
53. Right figure drawn from the head down, thinner line. The eyes annotation
    arrives first.
54. The three-burner channels on the right, drawn tangled rather than crosswise.
55. The right figure's small shape drawn slack and half empty. It does not glow.
56. The hollow beneath the right figure's flanks, drawn as absence — the hatching
    simply stops.
57. The right figure's chest attempting to open and settling back. Twice.
58. Both figures side by side, the left still at full rage, the right subsided.
59. Both figures held, motionless, equally lit. **No annotation, no motion.**

**Act IV — Borrowed Courage**

60. FAN-DI, fan down, genuinely asking. A distant hall visible far behind him
    through a doorway — silhouetted, warm, out of focus.
61. The two figures on the panel, unchanged.
62. Grain drawn as ink dots, gathering and concentrating into a single dense mark.
63. The dense mark moving fast across the panel, faster than any stroke so far.
64. The right figure's midsection distending, and a line of movement rising from it.
65. **No motion in the picture at all for this block** — the two figures held. The
    only change is the light warming very slightly on the right.
66. The right figure's slack shape filling and spreading wide — **the identical
    animation from shot 48, replayed exactly.**
67. **CARD** — 肝舉而膽橫 above 肝浮膽橫, the shared characters in a second ink
    colour.
68. LEI-GONG, tablet down, looking at the card rather than at anyone.
69. Both figures side by side, briefly identical.
70. The right figure's shape dimming and collapsing back to slack line.
71. **CARD** — 酒悖, with the gloss beneath.
72. The right figure alone, subsided, the left figure faded out of frame.

**Coda — Where Courage Lives**

73. The panel wiping to blank silk, both figures gone.
74. A single standing outline, neither firm nor slack, drawn in ordinary line.
75. FAN-DI, fan closed on the table, not performing.
76. DR-QI, still, the scroll now closed for the first time in the episode.
77. LEI-GONG, tablet lowered, the hand drum untouched.
78. All three in one frame, the blank panel behind them.
79. The empty chamber, rain on the lattice, nobody in it.
80. **Disclaimer card** — black plate, faint ink-grain texture, continuous slow
    drift. Text hand-added at edit time.

**Compliance-critical shots, specified negatively on purpose:**

- **Shots 60–72 contain no cups, no bottles, no pouring, no drinking, no mouths and
  no tavern interior.** The hall in shot 60 is distant, silhouetted and defocused.
  The wine is carried entirely by ink diagram.
- **Shots 2, 33 and 59 carry the episode's only distress or mortality-adjacent
  content, and none of them shows a body.** Shot 2 is a figure at roadside scale
  with no face; shot 33 is a bleeding ink edge with no figure at all; shot 59 is two
  motionless outlines.
- **No figure anywhere in this episode is bound, held, restrained or wrapped.** A
  Lingshu 28 clip was rejected `nsfw` for smoke-cords holding a figure still — the
  restraint imagery, not the theme. The slack-versus-firm contrast is carried by
  line weight and brightness only.
- **Shots 16 and 21 deliberately show cross-sections and not people.** The
  constitutional material is diagrammatic throughout so that no human figure is ever
  on screen while a colour category is being named.

**Duration ≥ 9.5s and motion from frame 1 on every clip.** The frozen-frame risks
are **8, 15, 30, 38, 50, 59, 65, 79 and 80** — held panels, blank silk, motionless
figures and a plain plate. Each is given explicit continuous motion in the list
above (arriving strokes, drifting grain, warming light, rain on the lattice). **Shot
65 asks for no motion in the *subject*; the light change is what satisfies the
freeze probe, and it must be real.**

## ON-SCREEN TEXT cards — the exception to text-free clips

`assemble_final.sh` has no text-overlay parameter, and the sidecar is built from the
narration table, so a quotation card with no narration over it would produce **no
text at all**. These blocks are therefore generated **with the text in-frame**,
styled off the chapter key, and each still carries its own voice take like any other
block.

| Block | Card | Gloss |
|---|---|---|
| Block 5 | 靈樞·論勇篇第五十 | the citation — **Lingshu 50**, never a bare "Chapter 50" |
| Block 6 | series title card | *Where Courage Lives* |
| Block 18 | the five-phase wheel, 青 赤 黃 白 黑 | each labelled with phase and season — **this card is what makes block 19's gloss visible rather than merely spoken** |
| Block 27 | the 見難 / 忍痛 grid | the 2×2, empty, axes labelled |
| Block 40 | 勇士者，目深以固，長衝直揚 | the brave man has deep firm eyes and a long straight nose |
| Block 46 | 膽 | *dǎn* — the gallbladder; courage, nerve. With the English *gall* gloss beneath |
| Block 52 | 怯士者，目大而不減，陰陽相失 | the timid man has large eyes lacking depth; yin and yang have lost each other |
| Block 67 | 肝舉而膽橫 above 肝浮膽橫 | **the echo card** — the shared 膽橫 picked out in a second ink colour |
| Block 71 | 酒悖 | *jiǔ bèi* — wine derangement |

**Nine card blocks out of eighty.** Note each in the production record when
generated so they are not later mistaken for a style violation.

**Block 67 is the single most important card in the episode.** The whole argument of
Act IV rests on the viewer seeing that two phrases share their second half. If the
card renders illegibly or the second ink colour does not read, **regenerate it** —
this is the one card where a scrim fix is not adequate.

## Source-script mapping

Source: the received text of 靈樞·論勇篇第五十, sections 1–6, as supplied.

| Source § | Passage | Blocks |
|---|---|---|
| §1 | 有人於此，並行並立…或病或不病 | 1, 3 |
| §1 | 帝問何急 — Shao Yu asks what is really being asked | 4 |
| §1 | 春青風夏陽風，秋涼風，冬寒風 | 9 |
| §1 | 其所病各不同形 | 9, 10 |
| §2 | 虛風 — the empty wind | 11, 12 |
| §2 | 黃色薄皮弱肉者，不勝春之虛風 …and the three parallel clauses | 16 |
| §2 | 黑色不病乎 — the Emperor's question about black complexion | **16–21, glossed** |
| §2 | 皮厚肉堅，固不傷於四時之風 | 22 |
| §2 | 必重感於寒，外內皆然，乃病 | 22 |
| §3 | **忍痛與不忍痛者，非勇怯之分也** | 26 |
| §3 | 勇士之不忍痛者，見難則前，見痛則止 | 28 |
| §3 | 怯士之忍痛者，聞難則恐，遇痛不動 | 29 |
| §3 | 勇士之忍痛者，見難不恐，遇痛不動 | 31 |
| §3 | 怯士之不忍痛者…乍死乍生 | 32, 33 |
| §3 | 余見其然也，不知其何由 | 34 |
| §3 | **皮膚之薄厚，肌肉之堅脆，緩急之分也** | 36, 37 |
| §4 | 勇士者，目深以固，長衝直揚 | 40, 41 |
| §4 | 三焦理橫，其心端直 | 42, 44 |
| §4 | 其肝大以堅，其膽滿以傍 | 43, 45 |
| §4 | **怒則氣盛而胸張，肝舉而膽橫，眥裂而目揚，毛起而面蒼** | 48, 49, 67 |
| §5 | 怯士者，目大而不減，陰陽相失 | 52, 53 |
| §5 | 其焦理縱…短而小 | 54 |
| §5 | 肝系緩，其膽不滿而縱 | 55 |
| §5 | 腸胃挺，脅下空 | 56 |
| §5 | 雖方大怒，氣不能滿其胸，肝肺雖舉，氣衰復下 | 57 |
| §5 | **故不能久怒** | 58 |
| §6 | 怯士之得酒，怒不避勇士者，何藏使然 | 60 |
| §6 | 酒者，水穀之精，熟穀之液也 | 62 |
| §6 | 其氣慓悍 | 63 |
| §6 | 其入於胃中，則胃脹，氣上逆，滿於胸中 | 64 |
| §6 | **肝浮膽橫，當是之時，固比於勇士** | 66, 67 |
| §6 | **氣衰則悔** | 70 |
| §6 | 與勇士同類，不知避之，名曰酒悖也 | 70, 71 |
| — | 膽 *dǎn* / English *gall* — the etymological bridge | 45, 46, 47 |
| — | the modern verdict; sympathetic response | 50, 73, 74 |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of Balance*
→ **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears the cast
sheet's **blue** cheongsam, never jade. The slate's working title *Where Courage
Lives* is kept for this episode; the companion trailer uses its own title, *The Organ
of Courage*.

**Character mapping — the source has two speakers, and neither is Qibo.** The chapter
is 黃帝 and **少俞 Shao Yu**, a physician appearing in only a handful of Lingshu
chapters. The series cast has no Shao Yu, so his role is carried by **Dr-Qi**,
exactly as she carries Qibo elsewhere. **This is a cast substitution, not a
translation**, and it is flagged so it is never mistaken for a claim about the text.

**Lei-Gong is invented in this chapter.** 雷公 does not appear in Lingshu 50 at all.
His four blocks — **7, 20, 35, 46, 68, 77** — are dramatic additions. Two of them
carry real content that the text does not state:

- **Block 20** is a genuine internal-consistency objection to §2, not a quotation.
  It is sound, and block 21 is the observation that the text does in fact stop using
  colour after §2 — which is checkable against the source above.
- **Block 68** is the episode's reading of §6, stated by a character rather than by
  the narrator. **The compliance notes flag this**, because it is the one place a
  substantive interpretive claim sits on a voice other than Arthur's.

**Other dramatic material not in the source, flagged as invention:** Fan-di's
soldiers (blocks 24, 39, 51, 60, 75) — the classical text's framing is a storm and
an illness, not an army; the Emperor's actual observation about fear (§3, 余見其然也)
is unstaged. The gate in block 51 is invention. The rain, the chamber and the silk
panel are staging.

**What is *not* invented** is the thing the episode turns on: **肝浮膽橫 in §6
repeats §4's 肝舉而膽橫 almost exactly.** That repetition is a fact about the
Chinese, it is visible in the source above, and it is the whole of Act IV.

## Production record (Higgsfield)

**Status: nothing generated. This document is pre-render.**

No style key, no clips, no takes, no assembly, no captions burned. The tables below
are the shape the record must take, and the estimate the step-0 gate will be run
against — **not** a record of work done.

**No longform cut has ever been rendered in this repo.** Four longform documents
exist and all four are pre-render. **Treat this as a pilot** and write what actually
happened into the reproduction notes.

### Cost preflight — estimate only, not yet costed live

**`SKILL.md` step 0 has not been run for this cut.** Nothing generates until it is.
**Run the tool-availability check first** — it stands in front of a four-figure
spend here rather than a trailer's ~105 credits, and the 2026-08-04 assembler
removal is exactly the failure this catches.

| Item | Price used | Count | Estimate |
|---|---|---|---|
| Clips `seedance_2_0_mini` **480p draft** 10s 16:9 | 10.0 | 80 | **800** |
| Style key — 16:9 sibling | 2.0 | 1 | 2 |
| Voice takes `seed_audio` | ~1.45 | 160 (two variants per block) | **~232** |
| Assembly, captions | free | — | 0 |
| | | | **~1,034** |

**A full render at 720p is ~2,000 credits for clips alone.** Draft first is not
optional here — 80 blocks of wrong pacing is unrecoverable, and voice takes survive
the upgrade, so a draft → full upgrade only re-pays for clips.

> **⚠ This does not fit the last known balance.** The most recent live read in this
> repo was **552.0** (Lingshu 28 v2, 2026-08-08). At ~1,034 credits a draft pass is
> roughly **twice** that. **Call `balance` and state the real figure**, then get an
> explicit decision before generating anything: top up, cut the runtime, or produce
> act by act across billing periods. The act structure above exists partly to make
> the third option workable — each act is independently renderable.

**Per-act draft cost, for an act-by-act plan:**

| Act | Blocks | Clips | Draft credits |
|---|---|---|---|
| Cold open | 1–8 | 8 | ~80 |
| Act I | 9–23 | 15 | ~150 |
| Act II | 24–38 | 15 | ~150 |
| Act III | 39–59 | 21 | ~210 |
| Act IV | 60–72 | 13 | ~130 |
| Coda | 73–80 | 8 | ~80 |

**Price voice on a representative-length line, never on a short probe.** This has
been got wrong three times in this repo in both directions — 0.8, then 0.5, then 0.1
credits per take, against an actual **1.3–1.7**. On a trailer that error was ~13
credits; **across 80 blocks the same mistake mis-states the voice bill by ~100
credits.** Cost block 32 or block 68, not a convenience string.

**Voice is a real line item at this scale, not noise.** At the Suwen 13 trailer's
observed 4.7× re-take rate the voice bill would be **~550 credits**, which is 55
clips' worth. This script is written to the corrected budgets specifically to avoid
that, since that run's own diagnosis was that the word budgets were wrong rather
than the service noisy.

**Two `seedance_2_0_mini` defaults will silently cost 2.5× if not passed
explicitly**: `resolution` defaults to **720p** and `duration` to **5s**. Across 80
clips that is the difference between ~800 and ~2,000 credits, on clips that would
then also fail the assembler's 9.5s floor.

### Style key — needs a 16:9 sibling

**Not generated.** Two keys are needed for this chapter and the trailer's comes
first:

1. **Vertical 9:16 key** — chained from the **Suwen 1 neutral head**,
   `4b6f7106-67da-4d1a-a553-c58ba90ac43f`, per the trailer document.
2. **16:9 landscape sibling** — derived from *this chapter's* vertical key by
   passing its job ID as the reference and **changing only the framing**. Attach the
   landscape key to every clip in this episode.

**Do not overwrite the vertical key** — the trailer still needs it. Record both
lineages as separate entries.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails.

**Motif for this chapter:** the three-character series key with a **split silk
panel** behind them — one ink figure firm-lined on the left, one thin-lined on the
right, and a single small organ drawn beneath the ribs of each, bright and full on
one side, slack and dim on the other.

### Clips

**Not generated.** Configuration for the run:

| | |
|---|---|
| Model / tier | `seedance_2_0_mini`, Draft, `resolution: "480p"` |
| Duration | `10` — **pass explicitly**, the default is 5s |
| Aspect | `aspect_ratio: "16:9"` **and** "landscape 16:9 framing" in the prompt text |
| Audio | `generate_audio: false` on every clip |
| Reference | the **16:9** chapter key on every clip as `image_references` |
| Pre-decline | `IN THE DARK` — `24bae836-2c4a-48e0-89b6-49fcc0b21612` |

**Declare the aspect ratio twice.** The double declaration has held on every cut
that used it. **Generate block 1 alone and check its returned dimensions** before
submitting anything else — one wasted clip beats eighty.

**`generate_audio: false` is a correctness requirement, not a saving.**
`assemble_final.sh` mixes clip audio in at **0.12 under the voice**, so a clip
generated with native audio is audible in the finished cut and the only fix is
regenerating the block.

**Keep this vocabulary out of every clip prompt:** *drum*, *drone*, *music*,
*rhythm* (trigger `DROWN IN MUSIC`, and they are edit-time directions anyway); and
*bottle*, *cup*, *pour*, *drink*, *drunk*, *tavern* across the whole of Act IV.

**Per-block job IDs go here as they are generated, act by act.** `SKILL.md` is
explicit that this is the crash-recovery file: **append the IDs before moving to the
next act**, because a lost session with unrecorded IDs means paying twice.

### Voiceover

**Not generated.** `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take
per block, **one speaker per block** — verified across all 80 blocks above: no block
contains two voices.

| Role | Preset | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 2, 5, 6, 8, 10, 12, 15, 17, 18, 19, 21, 23, 25, 27, 30, 33, 37, 38, 40, 44, 45, 47, 50, 52, 58, 59, 61, 65, 67, 69, 71, 72, 73, 74, 78, 79, 80 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 3, 13, 24, 34, 39, 51, 60, 75 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 4, 9, 11, 14, 16, 22, 26, 28, 29, 31, 32, 36, 41, 42, 43, 48, 49, 53, 54, 55, 56, 57, 62, 63, 64, 66, 70, 76 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 7, 20, 35, 46, 68, 77 |

**Record per block: job ID, file duration *and* the assembler's measured speech
figure, to three decimal places.** They differ — the Lingshu 28 v2 run found a take
at file 9.870s against speech 8.639s — and the second is the one that is gated. **A
take within ~0.2s of either edge is checked against the number, never eyeballed.**

Measure with the sanctioned tool, which trims exactly what the assembler trims:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

**When the takes exist, the `Voiceover` bullet line goes here as ONE physical
line** — `build_subtitles.js` parses it from a single line, and wrapping it makes
the script silently fall back to "assume a full 10s" for *every* block. At 80 blocks
that line will be very long. **Do not wrap it.** Put **speech**, not file duration,
in it.

### Assembly

**Not run.** There is no assembly job ID on this path.

| | |
|---|---|
| Command | `sandbox_exec` → `assemble_final.sh` |
| Flags | `--out work/output/final.mp4 --blocks 80 --manifest pairs.txt` |
| Manifest | 80 lines, `work/blocks/blockNN.mp4 work/voices/voiceNN.wav`, NN 01–80 aligned |
| Expected | `80 × 10s = 800s` asserted within ±1s |
| Music | `--music <licensed-guqin>.mp3` optional, `--music-vol` default 0.10, clamped ≤0.20 |

**Assembly strategy is the least-proven part of this pipeline and must be decided
before generating an episode's worth of takes, not at the join.** The one hard
number available: the Lingshu 28 v2 run assembled **8 blocks in 47 seconds**, and 16
of those seconds were downloads. **80 blocks means 160 downloads**, so a naive
extrapolation to ~8 minutes is optimistic rather than conservative.

Two routes, neither yet run here:

- **One call for the whole episode.** Removes the join problem entirely, but it is
  160 files downloaded inside one chained command and it **must** run
  `background: true` with polling. **Poll the returned log with `tail` at least
  every 60s** — a Suwen 1 run lost a finished render when an unpolled background job
  outlived its sandbox.
- **Assemble per act, then `ffmpeg concat` the six act MP4s.** Defensible — each act
  is already assembled correctly and a concat of equal-geometry MP4s is a lossless
  remux — but it puts the **−16 LUFS normalisation per act rather than across the
  episode**, so check levels at the five seams. An assembled act is *not* a valid
  input back into `assemble_final.sh`.

**Recommendation for this cut: assemble per act while drafting, then one whole-
episode call for the deliverable.** The per-act runs catch pacing early and each one
fits comfortably in the foreground; the single final call avoids the LUFS seams.
**Export every act MP4 out of the sandbox before its call returns** — the sandbox is
discarded ~10 seconds afterwards.

**A 60s transport ceiling has been observed on `sandbox_exec` despite a 120s schema
allowance.** Chain the upload ahead of any timeout so the work is not lost.

### Captions

**Not built.** No takes exist, so there are no durations to time cues from, and
**this cut therefore has no `.srt`/`.vtt` sidecar yet.** That is correct for a
pre-render document — build and commit them once the takes exist.

`check_caption_fit.js` **has been run** on this document at 16:9 and its result is
in *Finishing steps* below; it is a pure text tool and needs no takes.

**Burn the sidecar once, over the finished episode.** Nothing is burned at assembly,
so act assemblies carry no captions by construction and there is no layering to
avoid.

### Reproduction notes

Empty — nothing has been reproduced because nothing has been run. **This will be the
repo's first longform render**, so this section matters more here than on any
previous cut: `SKILL.md`'s longform section is derived from tool constraints and
trailer runs, not from experience.

Five things this cut should expect, from the two most recent trailer runs:

1. **Blocks 6, 79 and 80 will probably need re-rolls.** All three are documented
   slow-mode shapes. Roll them first.
2. **The CDN is blocked from the repo host** by organisation egress policy
   (`connect_rejected: gateway answered 403 to CONNECT`). That is the *egress proxy*
   refusing, not CloudFront denying the object. Say which layer refused.
3. **Anton is not in the sandbox, and the burn happens in the sandbox.** Install it
   in the same chained command as the burn and verify with libass's own `fontselect`
   log, not with `fc-match` alone.
4. **Watch the draft end to end before upgrading any clip to full tier.** Two of
   eight blocks rendered off-spec on Lingshu 28 v2 in ways only *looking* caught —
   a cartouche count and a plate colour — and every automated gate passed both.
   Across 80 blocks that rate is ~20 blocks.
5. **Check the block 67 echo card first of all the cards.** The act's entire
   argument rests on it.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. **Block 1.** *Pending.*
- **End disclaimer card** — the mandated string verbatim, over **block 80**, held
  **13:10–13:20**. The block is already in the block plan and in the cost preflight.
  *Pending.*
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. Also spoken in block 79. *Pending.*
- **Music** — **licensed guqin only, nothing generated by this pipeline.** The
  assembler can *place* a bed you supply via `--music`. On a 13-minute cut a bed is
  worth more than it is on a trailer — plan it to drop out entirely at block 79.
  *Pending.*

### Finishing steps

**This cut's own numbers — 80 blocks, 800.0s, block boundaries every 10s, end card
13:10 to 13:20.** Not a generic recipe: the companion trailer is 8 blocks with a
1:10 card, and that difference is exactly where the mistakes land. Both caption
scripts are pure text tools — they read this document, touch no video, need no
network and cost no credits. **Run them from the repo root, or pass an absolute
path.**

**1. Check captions — DONE, exits 0 at 16:9.**

```
node scripts/check_caption_fit.js output/lingshu/ch50/inner-canon-lingshu50-longform-v1.md --format 16:9
```

At 16:9 the budget is ~1001px per line and ~50 characters, roughly double the
vertical frame's room, so this document passes comfortably. **The mandated
disclaimer in block 80 fits on one line at 16:9** and is not even reported as the
known exception it is on the vertical trailer.

Re-run after any narration edit — a fix is free before takes exist and costs a
re-take afterwards.

**2. Build the sidecar** — *blocked until the takes exist*.

```
node scripts/build_subtitles.js output/lingshu/ch50/inner-canon-lingshu50-longform-v1.md --format 16:9
```

Commit the `.srt`/`.vtt` with the cut. Then, on a **copy** of the `.srt`, delete the
cues covering **block 80** (everything from `00:13:10`) so the disclaimer is not
simultaneously a caption and a card. The burn copy is **blocks 1–79, ending at
13:10**.

**3. Burn** — *pending assembly*. At 16:9 the delivered geometry should already be
1280×720 or close to it, so **check the assembled file's actual dimensions before
deciding whether a `scale=` is needed at all** — the vertical cuts needed one
because they delivered 496×864, which is a 9:16 artefact and may not recur here.

```
mkdir -p output/lingshu/ch50/renders
ffmpeg -i output/lingshu/ch50/inner-canon-lingshu50-longform-v1.srt -f ass - \
  | sed 's/^PlayResX: .*/PlayResX: 1280/; s/^PlayResY: .*/PlayResY: 720/' \
  > output/lingshu/ch50/renders/inner-canon-lingshu50-longform-v1.ass

ffmpeg -i <the-assembled-render>.mp4 \
  -vf "subtitles=output/lingshu/ch50/renders/inner-canon-lingshu50-longform-v1.ass:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,MarginL=58,MarginR=58,MarginV=80,WrapStyle=0'" \
  -c:a copy <cut>-subtitled.mp4
```

**The PlayRes re-target is not optional** — ffmpeg's SRT→ASS converter hardcodes
384×288, which scales every style value by ~2.5× on a 720-tall frame and runs the
lines off frame. `build_subtitles.js` prints both commands in the correct order on
every run; **use its output rather than retyping**, and take `MarginV` from what it
prints rather than from the 80 above, which is a landscape-appropriate starting
point and not a measured value.

**Install Anton in the sandbox in this same chained command** and verify with
`fontselect` at `-loglevel verbose`.

**Use `-preset veryfast -crf 17`.** On an 80-second job `medium` ran ~50s against
veryfast's 23.7s; **on a 13-minute job that ratio is the difference between a
finishing pass that completes and one that hits the transport ceiling.**

**4. History lower-third** — *"Presented as history & philosophy"*, Anton 30,
centred, **in at 0:01, out at 0:08**, over block 1. Add by `drawtext` in the same
burn pass with `borderw=3:bordercolor=black@0.9`.

**Block 1 is a bright silk-and-ink frame**, so white glyphs will not move `YAVG`.
Verify presence with **`YMIN`**, which the 3px black border pins down.

**5. End card** — **in at 13:10, out at 13:20**, over block 80's plate. Mandated
string verbatim, with *"Written & edited by Joshua Chin"* beneath it.

**Check the plate's luma before drawing white text on it.** Lingshu 28 v2 asked for
a black plate and got a bright mottled texture at mean luma 57, which made the card
text partly illegible — a compliance defect on the one card that must be readable.
If block 80 comes back light, a `drawbox` scrim fixes it for free, but **regenerate
the block for any full-tier render.**

**6. Rebuild from the assembly, do not stack.** Subtitles, scrim, card and
lower-third are **one filter graph and one command**, so the shipped file stays two
encode generations from the assembler. Re-running the finishing pass costs nothing —
treat it as idempotent and re-derive rather than layering.

## Compliance notes (YouTube)

One bullet per `CLAUDE.md` rule. **Audited at script stage, before generating.**

- **Disclaimer kept.** Verbatim as a blockquote at the head of this document, spoken
  by Arthur in block 80, on screen as the end card 13:10–13:20, and required in the
  upload description. Teaching content here is philosophy and history, never medical
  instruction.
- **Mortality and aging: reflective, non-graphic.** The chapter is about
  susceptibility and fear rather than death, and the episode carries no mortality
  content at all. The three distress-adjacent moments are **shots 2, 33 and 59**, and
  **none of them shows a body** — a roadside figure at a scale with no face, a
  bleeding ink edge with no figure, and two motionless outlines. Block 32's *"by
  turns dead and alive"* is the source's own 乍死乍生 describing an acute fear
  response, and shot 33 deliberately provides **no figure at all** while it is
  spoken.
- **Indulgence and alcohol: cautionary framing only.** This is the episode's
  **primary compliance surface**, handled structurally rather than by hedging:
  - **The wine is never depicted.** No cups, bottles, pouring, drinking, mouths or
    tavern interiors anywhere in Act IV. Shot 60's hall is distant, silhouetted and
    defocused. The entire beat is carried on ink diagram.
  - **The act lands on the regret, not the bravado.** Blocks 70, 71 and 72 close on
    氣衰則悔 and 酒悖, and block 72 states explicitly that this *"is not a story about
    wine making men brave."* The slate's instruction for this chapter is that the
    text's own moral does the work; it does.
  - **Lei-Gong is off screen for the whole act except block 68**, where he reasons
    about physiology and never mentions drinking. He is the child-coded character and
    he is kept away from the alcohol material deliberately.
  - **Six clip-prompt words are banned across blocks 60–72** — see *Clips*.
- **Supernatural hooks explicitly debunked by the payoff.** There is no supernatural
  hook in this chapter; the claims are physiological and are presented as such. The
  hook (blocks 1–2) is a genuine historical question, and the payoff (blocks 73–74)
  states plainly what is false and what is not. The title *Where Courage Lives*
  promises the educational payoff the episode delivers, and **the thumbnail must
  honour it** — the split brave/timid diagram, not a shock frame.
- **Health content stays philosophical narrative, never medical instruction.**
  Nothing in this episode instructs. Every physiological claim is reported as what
  the text says, in the text's terms, with **block 73 carrying the explicit
  correction** — no organ produces courage, nose length predicts nothing.
- **General audience, not "made for kids."** Self-certify accordingly. The alcohol
  material makes this unambiguous.
- **Citation accuracy.** *Lingshu chapter fifty* is spoken in blocks 5 and 79, and
  the block 5 card carries 靈樞·論勇篇第五十. **Never "Chapter 50"** — Suwen 50 is a
  different chapter.

### The constitutional colour material — the decision, stated

**The slate flags this as the chapter's more serious compliance issue**, above the
alcohol: §2 maps disease susceptibility onto complexion colours including "black"
and states that dark-skinned people with thick skin are unaffected by seasonal winds.
Out of context that reads as a racial claim. The slate offers two options — *"either
gloss it explicitly and carefully, or open the episode at section 3 and skip the
constitutional material entirely"* — and recommends the second as safer.

**This script takes the first option, and makes the second available as one edit.**
The reasoning, so the decision is reviewable rather than implicit:

- **The material is glossed in a bounded, self-contained range — blocks 16–21** —
  which is six blocks and one minute. Block 17 names the problem before the viewer
  can form it; block 18 gives the five-phase scheme with a card; **block 19 states
  the plain verdict, that read as a claim about peoples it is false**; block 20 has
  Lei-Gong dismantle it on its own internal terms; block 21 records that the text
  itself abandons colour after §2 and argues from skin and flesh thereafter — which
  is checkable against the source mapping above.
- **No human figure is on screen while a colour category is named.** Shots 16–21 are
  cross-sections, wheels and brush strokes. Lei-Gong appears in shot 20 to object,
  and that is the only person in the range.
- **Arthur carries every sentence of the gloss** — blocks 17, 18, 19 and 21. The
  hedges do not move to a character voice.
- **The channel's stated differentiator is marking plainly where the evidence does
  not support the text**, which block 80 says in as many words. Skipping the passage
  silently is the one option that forfeits that.

**The lever is real and is one edit.** Dropping blocks 16–21 leaves **74 blocks =
12:20**, still above the 11:30 floor and still inside the 12–14 minute brief, and
Act I then runs 9–15 and 22–23 with no other change needed. **If the editor prefers
the slate's recommendation, take that cut** — it is listed first in *Runtime levers*
for exactly that reason.

### Hedges that sit on a character voice

`CLAUDE.md` requires that any compliance hedge moved off the narrator be recorded.
**Two are, and both are interpretive rather than safety-critical:**

- **Block 68 (Lei-Gong)** states the episode's central reading of §6 — that the wine
  passage either vindicates the theory or refutes it. Arthur brackets it immediately
  in block 69. This is a *claim about the text*, not a health claim.
- **Block 76 (Dr-Qi)** carries the episode's ethical close. It asserts nothing
  medical.

**Every health-adjacent hedge remains on Arthur**, including all of blocks 17–21,
50, 73, 74 and 80. Blocks 68 and 76 are the two to re-audit if any line changes.

## Runtime levers

**As written: 80 blocks, 13 minutes 20 seconds.** `CLAUDE.md` sets 11:30–20:00.
Blocks are the unit that costs money — each one dropped saves ~10 credits at draft
tier and ~25 at full.

**To cut to 12:20 (74 blocks, ~940 credits draft): drop blocks 16–21**, the
constitutional colour gloss. **This is the first lever to reach for**, because it
implements the slate's own recommendation for this chapter and it is a clean lift —
the range is bounded, no other block refers back to it, and Act I runs 9–15 then
22–23 with no rewriting. What it costs is the episode's most explicit
mark-where-the-evidence-fails moment, and Lei-Gong's best structural objection.

**To cut to 11:40 (70 blocks, ~890 credits draft):** take the above, then also drop
**blocks 44, 47, 61 and 65**. Each is a narrator gloss whose absence is survivable:
44 is the 三焦 aside, 47 is the English *gall* etymology, 61 restates why block 60's
question is good, and 65 is a listen-closely cue that block 67 delivers anyway.
**This is the floor** — 11:40 clears 11:30 by ten seconds and nothing further can go
without cutting an act.

**Do not cut into Act III to save runtime.** Blocks 39–59 are the duel, which is the
slate's named structural form for this chapter, and both portraits have to run at
full length or the Act IV echo does not land. If the runtime must come down further
than 11:40, **cut the episode in two** rather than compressing Act III.

**To stretch to 15:00 (90 blocks, ~1,150 credits draft):** add ten blocks across
three places, in this order of value:

1. **Four blocks after 59**, expanding the ethical turn into a real exchange —
   Fan-di pushing back that an army cannot run on this, Dr-Qi declining to resolve
   it, Lei-Gong counting who in the room would fail. Currently block 59 raises the
   question and Act IV changes the subject.
2. **Three blocks in Act I after 12**, giving each of the four seasonal winds its
   own beat rather than compressing them into block 9. The chapter names four and
   the episode currently shows four in one breath.
3. **Three blocks after 47**, on 膽 in later Chinese usage — 膽大 and 膽小 as living
   idiom, and the parallel with English *gall* and *guts* and *spleen*. This is the
   episode's most audience-facing material and it is currently three blocks.

**To stretch to 20:00 (120 blocks)** the episode would need material from outside
this chapter — Suwen 8's 膽者，中正之官 (the gallbladder as the office of decision)
is the obvious graft and would make a real fifth act. **That is a different episode,
and it should be a deliberate decision rather than padding.**

**Blocks 1 and 80 are not droppable.** Block 1 carries the mandated history
lower-third inside the first ten seconds; block 80 is the mandated end disclaimer
card, which needs its own block because the pipeline assembles in fixed 10s windows.
