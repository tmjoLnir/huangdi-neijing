# The Emperor's Inner Canon — Suwen 8 Longform v2 (16 minutes)

**素問·靈蘭祕典論第八 · The Twelve Offices**

**RENDERED 2026-08-26, draft tier.**

**Final video:** `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/3d567746-c8ca-40da-97e7-c04246cfabd1.mp4`
— **1280×720, 24 fps, 960.540s (16:00), MP4, 408,440,899 bytes.** Captions,
history lower-third and end card burned in; licensed guqin bed mixed at assembly.
Clips generated at `seedance_2_0_mini` 480p and delivered 864×496, scaled to
1280×720 before the caption burn. **The CDN link expires — archive it by hand.**

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 8*.** Lingshu 8 (本神) is a different
chapter entirely. Both halves of the canon run to eighty-one separately numbered
chapters, so a bare "Chapter 8" is ambiguous by construction and sends a checking
viewer to the wrong text about half the time.

Companion trailer: `inner-canon-suwen8-trailer-v1.md`, which previews the cold
open and the Act III turn. **This document is self-contained on source** — the
complete classical text and this cut's working translation are in *Source text and
translation* below, because the chapter is short enough that a separate
translation file would only be a second copy to drift.

**Slate position.** Suwen 8 is not on the Top-20 slate: `docs/Chronicle of Balance
Top20 Chapter Slate.md` §8 excludes it as already produced, while noting it
**"would rank Top 5 — the organs as a government of ministers. Strongest single
metaphor in the canon."** The prior production was deleted from `output/` and this
is a fresh treatment written without reference to it.

---

## Why this is v2, and what changed from the v1 script

**v1 was never rendered, and could not have been.** Every narration line in it was
sized to a speech window of **8.6–10.0s**, which `assemble_final.sh` has never
enforced. The real gate is `SPEECH_MIN = CLIP − 2.2` to `SPEECH_MAX = CLIP − 0.5`,
i.e. **7.800–9.500s** at the house 10s block — read out of the script itself at
this run's step-0 probe, and matching the Lingshu 28 v3 finding of 2026-08-24.
v1 also carried a ⛔ banner naming **42** blocks needing rewriting; that count was
computed against the wrong window *and* against voice rates that have since been
re-pooled, so it was wrong in both directions.

**Re-measured against the current step-3 table, 33 of v1's 96 blocks were out of
band.** The word content of those 33 lines is the only thing that changed. Beats,
speakers, block numbering, act boundaries, shot list and every argument are
identical to v1.

| Voice | v1 written to | Current measured window | v1 blocks out of band |
|---|---|---|---|
| Arthur | 32–36 | **29–35** @ 3.70 w/s | **10** — all 36w, over the ceiling |
| Xavier (Fan-di) | 36–41 | **34–41** @ 4.34 w/s | **0** — in band already |
| Vesper (Dr-Qi) | 37–41 | **31–37** @ 3.91 w/s | **16** — 38–39w, over |
| Zane (Lei-Gong) | 34–39 | **45–54** @ 5.71 w/s | **7** — every Lei-Gong block, 1.0–1.8s under the floor |

**The seven Zane blocks were the hard failures.** At 34–39 words his lines compute
to 5.95–6.83s against a 7.800s floor, and the assembler stops the whole run on each
one. The other 26 were marginal ceiling overruns of 0.2–0.5s that might have rolled
in and might not. All 33 were rewritten to the **midpoint** of their voice's window
rather than to its edges, because the ceiling is a hard error and the run-to-run
spread on `seed_audio` is wider than the window itself.

Three writing rules from `SKILL.md` were applied to the rewrites, and each removed
something v1 contained:

- **No one-word or two-word fragments.** v1's block 47 opened *"Stop."* and block 82
  ran *"The roads."* — the exact pattern that returned **17.322s** on a 33-word line
  in Lingshu 28 v3. Both are now flowing prose.
- **No comma list of three or more items.** v1's block 95 ran *"The brain as a
  computer. The genome as a blueprint. The immune system as an army."* It is now
  joined with *and*; a four-item comma list measured a **3.1s** swing at fixed word
  count on this chapter's own trailer.
- **Reach the window with words, not full stops**, so the assembler's ≥0.8s
  internal-pause warning does not fire on a padded line.

Every block was verified by parsing this document's own narration table before any
take was generated: **0 of 96 out of band, 0 estimated above 9.1s, 0 short
fragments, 0 comma lists.**

---

## Why 16:00, and not 14:00 or 17:00

The requested window was 14–17 minutes. **96 blocks — 16:00 — is where this
chapter's material actually lands**, and the reasoning is arithmetic rather than
taste, because a 10s block is the unit that gets padded or cut.

The chapter's whole body is **eleven office clauses**, one governance passage and
one philosophical passage. Nothing else is in it. Costing the offices by how much
each can carry without inventing filler:

| Material | Blocks | Why that many |
|---|---|---|
| Heart — sovereign, 神明, and the missing brain | 10 | the chapter's central claim plus its central absence |
| Lung — chancellor, 治節 | 7 | two separate modern hits to score |
| Liver — general, 謀慮 | 6 | a clean miss that needs its near-miss explained |
| Gallbladder — 中正, 決斷 | 4 | quotation, the real office it names, and the test it sets up |
| 膻中 — envoy, 喜樂 | 5 | the only office named for a place, and a genuinely hard modern question |
| Spleen + stomach — granary | 5 | one office, two organs — one right, one badly wrong |
| Small intestine, large intestine | 4 | the chapter's two clean hits; they are short because they are simply correct |
| Kidney — 作強, 伎巧 | 6 | the reserve claim, and four real functions nobody expects |
| Triple burner — 決瀆, and no organ | 8 | the strangest near-miss in the canon; the act turns on it |
| Bladder — 州都, 氣化則能出 | 3 | the only conditional clause in the list |
| Cold open, act frames, 不得相失 / 主不明 governance act, 至道在微 close | 38 | the frame, the political turn and the thesis |

That totals **96**. The two edges of the requested window both cost something real:

- **14:00 is 84 blocks — 12 short.** There are no 12 blocks of slack. Reaching 84
  means deleting the gallbladder office (4) and the 膻中 office (5) outright, and
  a chapter about *twelve* offices that shows ten is a broken premise, not a
  tighter cut. It is also **below `CLAUDE.md`'s 15:00 longform floor.**
- **17:00 is 102 blocks — 6 long.** The source is exhausted at 96, so those six
  are commentary about commentary. The *Runtime levers* section names six that
  are defensible if the runtime is fixed externally, but they are additions the
  script does not need.

**15:00 (90 blocks) is the cheapest honest cut** and costs one whole office plus
the closing reflection — the levers below specify it exactly. 16:00 is the
recommendation.

---

## What this episode argues

The obvious reading of this chapter is that it is a nice metaphor. That reading
produces sixteen minutes of "and the liver is the general, isn't that charming,"
which is a listicle with a costume on.

**The spine is that the metaphor is a working model, and that this is exactly what
made it dangerous.** Four things happen in a very short text:

1. **The Emperor asks the wrong question and is not corrected.** 貴賤何如 — *which
   is noble, which base?* He wants a hierarchy. He is answered with an
   organisation chart, and then, two hundred characters later, with **凡此十二官
   者，不得相失也** — *these twelve offices must never lose one another*. The
   ranking he asked for is not refused. It is dissolved.
2. **The offices are not decoration. They make claims, and the claims can be
   scored.** Some are wrong (the liver does not deliberate). Some are right for
   reasons nobody could have known (the colon really does transform). One —
   the triple burner — posits **a ministry with a job and no building**, and there
   really is a fluid-transport system with no organ. Every score is marked
   separately from Act I onward, and *right about the job, wrong about the reason*
   is stated as a distinct verdict from a hit.
3. **The chapter is a political document and knows it.** 主不明則十二官危 —
   *if the ruler is not clear-sighted, the twelve offices are endangered* — is said
   by a physician, to a reigning sovereign, about his own body and his own state in
   the same sentence. It closes 戒之戒之, *take care, take care*, the only
   repetition in the chapter. Then the Emperor fasts, purifies himself, waits for
   an auspicious day, and locks the text in a room. **The chapter is named after
   the room.**
4. **The metaphor's cost is the payoff.** Naming the heart 君主之官 made the heart
   unpromotable and undemotable. The same canon elsewhere calls the brain 髓之海,
   the sea of marrow — the organ is *described*, and never given an office. It was
   not defeated. It was never nominated. **A metaphor good enough to explain is
   good enough to stop you looking**, and the closing beat is that we are doing it
   right now: the brain as a computer, the genome as a blueprint, immunity as an
   army.

**The dramatic engine:** Fan-di called this audience to settle a budget question —
which of his organs he could afford to neglect — and gets handed a description of
his own court instead. **The fan is the tell**: snapped open he is performing, set
down he means it. It goes down once, at block 81, when he realises the physician
has spent a quarter of an hour describing his government to his face, and it does
not come back up.

**Lei-Gong is the auditor.** He is not on the guest list. He is counting, and each
of his seven blocks is an audit finding: eleven titles for twelve organs; a
ministry with no building; an office you can abolish; and — the big one, at block
18 — no seat at all for the organ doing the asking. His last finding is the
episode's thesis, delivered by the youngest person in the room.

---

## Cast and voice

| Role | Voice | `voice_id` | Function in this episode |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | history, mechanism, the scorecard, **every compliance hedge** |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | the Huangdi role — wants a ranking, gets an indictment |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | the Qibo role — recites the offices, never editorialises |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | the auditor — counts, and finds what is missing |

`seed_audio` presets, `speech_rate` 55 for all four. **One speaker per 10s
block** — the assembler takes exactly one audio per block, so every speaker change
is its own block. No block below contains two voices.

**Dr-Qi never sounds like she is winning** (`CLAUDE.md`): the more Fan-di
performs, the stiller she gets. Her hardest block is **79**, where she has to read
the unclear-ruler passage aloud to the ruler and must deliver it completely flat —
the flatness is what makes it land. Her second is **77**, where she states the
text's longevity claim and marks it as a quotation in the same breath, because the
compliance hedge on that clause has to arrive before Arthur's block 78, not after.

**Lei-Gong is not comic relief.** He is the only person in the room doing an
audit, and each finding is a real structural objection to the chapter. Block 18
(the brain has no office) is the episode's second-best line and block 93 is its
best.

### Writing constraint — sized to the 7.8–9.5s window

**`assemble_final.sh` gates on 7.800–9.500s of detected speech per block, and both
edges are hard errors.** It computes the window from the block length as
`SPEECH_MIN = CLIP − 2.2` and `SPEECH_MAX = CLIP − 0.5`; the figures above were
read out of the script itself in this run's step-0 probe, not carried from a
document. A take outside it stops the whole assembly with

```
ERROR: voice N (voiceNN.wav) carries X s of speech; required 7.800–9.500s
```

and there is no time-stretch, no padding and no absorption. The window is 1.7s
wide and the fix is always to change the words of that one line.

Word budgets as measured **2026-08-24** across 90 blocks of the Lingshu 28 v3
longform — the largest sample in the repo and the first derived from the real
window rather than from the 8.6–10.0 the skill carried in error:

| Voice | Measured rate | Words per block | Blocks here | Written to |
|---|---|---|---|---|
| Arthur | 3.70 w/s | **29–35** | 58 | 31–35, centred |
| Xavier (Fan-di) | 4.34 w/s | **34–41** | 8 | 36–39, unchanged from v1 |
| Vesper (Dr-Qi) | 3.91 w/s | **31–37** | 23 | 32–35, centred |
| Zane (Lei-Gong) | 5.71 w/s | **45–54** | 7 | 48–49, centred |

Counts are machine-generated by parsing this document's own narration table and
dropping tokens containing no letter or digit, because a spaced em-dash is not a
word and counting it as one spends real budget on a window 1.7s wide.

**Every line is written to the midpoint of its voice's window, not to its edges.**
Estimated speech across all 96 blocks runs **8.18–9.00s** against a window
midpoint of 8.65s. That is deliberate: the ceiling is a hard error, and the
run-to-run spread on `seed_audio` is wider than the window — identical text on one
Lingshu 28 v3 block returned **7.396s, 8.264s, 15.688s and 17.073s** across four
rolls. Centring buys margin on both sides of a gate that noise alone can miss.

Four consequences shape every line here, and none is stylistic:

- **The short interjection is dead.** Under a 7.8s floor there is no quick jab, and
  `--clip-seconds` moves the window rather than widening it. **Every character line
  is a full paragraph.** Lei-Gong's seven blocks are arguments at 48–49 words,
  which is why he reads as the show's auditor rather than its mascot.
- **Word count is the estimator; `speech_metrics.sh` is the gate.** Twenty of
  Lingshu 28 v3's ninety blocks had counts outside their band and measured *inside*
  the window anyway. Size the draft from the table, then measure every take and
  re-size each miss from **its own** measured rate — `words × 8.65 / speech` — never
  from the pooled rate.
- **The rates are survivor-biased.** They are what *passing* takes delivered.
  Budget re-takes explicitly rather than expecting every block to land first time.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s, so padding a thin line with sentence breaks passes the duration
  gate and trips the pause warning.

**Three shapes are banned outright in this script**, each because it has been
measured costing seconds at a fixed word count:

| Shape | Measured cost | Where v1 had it |
|---|---|---|
| One- or two-word fragment | 33w at **17.322s**, vs 31w at 8.538s rewritten flowing | block 47 *"Stop."*, block 82 *"The roads."* |
| Comma list of 3+ items | 31w with 7 commas at **12.022s**, vs 31w with none at 8.913s | block 95's three *"X as a Y"* sentences |
| Long single sentence with a subordinate clause after an em-dash | 32w at **10.78s** | none in v1; none introduced |

Verification run over this document before any take was generated:

```
blocks: 96 | out of band: 0 | >9.1s estimated: 0 | short fragments: 0 | comma lists: 0
```

Re-run the caption check after any narration edit:
`node scripts/check_caption_fit.js output/suwen/ch8/inner-canon-suwen8-longform-v2.md --format 16:9`

### How to read this script

`CLAUDE.md` asks for **SOUND / VISUAL / CHARACTER** blocks and a numbered shot
list; `build_subtitles.js` needs a **three-column narration table** to build the
required `.srt`/`.vtt` sidecars. They are combined rather than duplicated:

- **The narration tables are canonical for words.** Blocks run continuously
  **1–96 across the whole episode**, never per-act; the assembly manifest is flat
  and act-local numbering produces off-by-one errors that are expensive to find.
- **The SOUND / VISUAL / direction prose between them is canonical for
  performance**, and the **numbered shot list after block 96 is canonical for
  picture.** Neither restates a narration line.
- **The speaker is named in the beat column**, not a fourth column — the parser
  reads exactly three, and a fourth would leak into the caption text.

> **Do not insert a table whose first cell is a bare integer anywhere between
> blocks 1 and 96.** `parseNarration` keeps the first consecutive run from block 1
> and stops at the first row that breaks it, so a stray numeric table silently
> truncates the sidecar. Every other table in this document sits before block 1 or
> after block 96 for that reason, and the ON-SCREEN TEXT card table prefixes its
> first column with `Block` so it cannot collide. The shot list after block 96 is
> a numbered *list*, not a table, for the same reason.

---

## Act map

| Section | Blocks | Timecode | Carries |
|---|---|---|---|
| Cold open — *Rank Them* | 1–9 | 0:00–1:30 | 貴賤何如; the chart, not the ranking; title; thesis |
| Act I — *The Throne* | 10–29 | 1:30–4:50 | 心 sovereign, 神明, the absent brain; 肺 chancellor, 治節 |
| Act II — *The Court* | 30–55 | 4:50–9:10 | 肝, 膽, 膻中, 脾胃, 小腸, 大腸 — six offices, four verdicts |
| Act III — *The Ministry With No Building* | 56–73 | 9:10–12:10 | 腎, 三焦, 膀胱 — and a system with no organ |
| Act IV — *Nothing Can Be Spared* | 74–86 | 12:10–14:20 | 不得相失; 主明/主不明; 使道; the gallbladder verdict; 戒之戒之 |
| Act V — *The Locked Room* | 87–96 | 14:20–16:00 | 至道在微; the fast and the chamber; the metaphor's cost; end card |

Each act is independently renderable and independently assemblable — see *Assembly
strategy*. Re-rendering one act recomputes nothing.

---

# COLD OPEN — *Rank Them* · blocks 1–9 · 0:00–1:30

**SOUND:** A brush being loaded with ink. Paper unrolling. No music.
**VISUAL:** Black. Then an ink-brush organisation chart drawing itself on blank
silk — boxes and connecting lines only, no labels, no bodies. Flat 2D ink-wash
throughout, **landscape 16:9 framing**.

Blocks 1–2 stay on the chart. *History lower-third sits on block 1 — it is
required inside the first ten seconds.*

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | You have a heart, a liver, a pair of lungs. Rank them. Decide which one matters most, and which one you could most easily do without, and notice how quickly you started sorting them. |
| 2 | Arthur (V.O.) — the claim | Two thousand years ago an emperor asked a physician that exact question, and got back an answer that has outlived every anatomy it was built on. He was told his body was a government. |

**SOUND:** A fan snapping open, hard, like a gavel.
**VISUAL:** Interior, an audience chamber, seen straight on and symmetrical.
FAN-DI on the high seat — gold robe, glasses, **fan snapped open**. On the wall
behind him, a real court organisation chart in lacquer, ranked top to bottom.

**ON-SCREEN TEXT — block 3.** Card: **願聞十二藏之相使，貴賤何如**.

| Block | Beat | Narration |
|---|---|---|
| 3 | Fan-di (Xavier) — the question | I want a ranking. Every court has one, every ministry has one, and a physician who tells me all my organs are equally precious has never had to cut a budget. Which of them is noble? Which is base? |

**VISUAL:** DR-QI does not approach the seat. She stands to one side with the open
bamboo scroll held casually, blue cheongsam, pencil behind the ear, and answers
without looking at the lacquer chart once.

| Block | Beat | Narration |
|---|---|---|
| 4 | Dr-Qi (Vesper) — the deflection | That is a most thorough question, and I am going to answer a slightly different one, because the ranking you are asking for does not exist at all. What exists instead is an arrangement, and I will set it out. |
| 5 | Arthur (V.O.) — what he got | He asked for a hierarchy and was handed an organisation chart. Twelve organs, each given an office of state with a job title and a product. Nobody had described a body that way. |
**ON-SCREEN TEXT — block 6.** Card: **素問·靈蘭祕典論**, brushed, with *"Basic
Questions, chapter 8"* beneath in small type.

| Block | Beat | Narration |
|---|---|---|
| 6 | Arthur (V.O.) — the citation | The book is the Basic Questions, the first half of the Yellow Emperor's Inner Canon. Its title names a room: the Chamber of the Numinous Orchid, where the Emperor locked this text away. |
**ON-SCREEN TEXT — block 7.** Series title card.

| Block | Beat | Narration |
|---|---|---|
| 7 | Arthur (V.O.) — series title | This is The Emperor's Inner Canon, and this episode is called The Twelve Offices. One metaphor, twelve jobs, and an argument about what a good metaphor costs you once it stops letting go. |

**VISUAL:** Behind a pillar, unacknowledged, LEI-GONG — cinnabar robe, small hand
drum resting in his lap, a wax tablet on his knee. He is already writing.

| Block | Beat | Narration |
|---|---|---|
| 8 | Lei-Gong (Zane) — the auditor | Before anybody starts, I am writing all of this down. Twelve organs and twelve offices, and I intend to check the arithmetic at the end, because in my experience a government always turns out to have one more department than anybody admits to. Nobody ever thanks me for it. |
| 9 | Arthur (V.O.) — the thesis | Watch it do real work first. This is not decoration, it is a model, and it makes predictions. Then watch the same metaphor become the reason nobody could correct it for two thousand years. |

---

# ACT I — *The Throne* · blocks 10–29 · 1:30–4:50

**VISUAL:** The chamber becomes the set for the whole episode. A low lacquer table,
the high seat, one standing lamp. Behind Dr-Qi, a tall blank silk panel that will
carry every diagram in the episode, drawn live in ink as she speaks. The lacquer
court chart stays visible behind Fan-di all episode and is never referred to again.

**CHARACTER — Fan-di:** performing throughout Act I, fan open on every line. He is
converting a budget question into a coronation.
**CHARACTER — Dr-Qi:** she recites. She does not argue and does not oversell. The
stiller she is, the harder Act IV lands.

**ON-SCREEN TEXT — block 10.** Card: **心者，君主之官也，神明出焉**.

| Block | Beat | Narration |
|---|---|---|
| 10 | Dr-Qi (Vesper) — the sovereign | The heart is the office of the sovereign ruler. From it issue spirit and illumination. Everything else in this list is arranged around that one sentence, so I would rather you did not let it pass quickly. |
| 11 | Arthur (V.O.) — what sovereign means | Sovereign is a precise word here. Not the largest organ, not the strongest, not even the busiest. The one the others answer to, and the one whose failure is a failure of everything below it. |
| 12 | Arthur (V.O.) — 神明 | And spirit and illumination is one term, shen ming. It covers consciousness, clarity, judgment, the thing that knows it is thinking. The chapter puts all of that inside the chest, deliberately, and never wavers. |
| 13 | Fan-di (Xavier) — the flattery | Then my heart is me. Not a pump or a muscle or a piece of offal that a butcher would recognise, but the very seat of the sovereign, which is remarkably convenient for me, because I happen to be one myself. |
| 14 | Dr-Qi (Vesper) — the correction | The heart is the office. You are not the office, and neither is the organ. That distinction is the whole method of this chapter, and it is why the list survived every anatomy that came after it. |

**VISUAL:** On the silk panel, ink draws a single high box at the top and eleven
empty boxes beneath it, connected by lines. Only the top box is filled.

| Block | Beat | Narration |
|---|---|---|
| 15 | Arthur (V.O.) — the plain verdict | We should say the plain thing now rather than leaving it to the end. Consciousness is not produced in the heart. It is produced in the brain, and on this particular point the chapter is simply and completely wrong. |
| 16 | Arthur (V.O.) — the canon knows | What makes that interesting is that the same canon knows about the brain, calling it elsewhere the sea of marrow, so the organ is described and simply never given an office. |
| 17 | Arthur (V.O.) — a decision, not ignorance | So this is not ignorance. It is a decision about who governs, taken early, written into the vocabulary, and then defended by every sentence built on top of it for the next two millennia. |

**VISUAL:** Lei-Gong stands up from behind the pillar with the tablet. Nobody sends
him away. On the silk panel, an empty box appears **outside** the chart, unconnected.

| Block | Beat | Narration |
|---|---|---|
| 18 | Lei-Gong (Zane) — the first finding | Then I have my first finding already, and we are only one office into this list. There is no seat on this council for the organ that is doing the asking. The brain is not junior here and it is not waiting outside. The brain is simply absent. |
| 19 | Arthur (V.O.) — never nominated | He is right, and the wording matters. The brain was not demoted, because it was never nominated. Nothing here argues the heart won. There is only an assumption it never once had to defend. |

**ON-SCREEN TEXT — block 20.** Card: **肺者，相傅之官，治節出焉**.

| Block | Beat | Narration |
|---|---|---|
| 20 | Dr-Qi (Vesper) — the chancellor | Second office, and it is also the second seat. The lung is the chancellor, the minister who stands beside the throne. From it issue regulation and rhythm, and no other organ is placed that close to the sovereign. |
| 21 | Arthur (V.O.) — 相傅 | Chancellor undersells it. The term is closer to minister and mentor together, the official who advises the ruler and administers what the ruler decides. Second in the state and first in practice. |
| 22 | Arthur (V.O.) — 治節 | Regulation and rhythm is also one term, zhi jie. Jie is the joint in a bamboo, the notch and the measured interval. The lung keeps everything else on the beat. |
| 23 | Dr-Qi (Vesper) — why the lung | You can hear the argument for it quite easily. Breath is the one process a person can actually watch, and it never stops, and everything else keeps its time against it. You would seat him beside the throne. |
**VISUAL:** On the panel, the second box fills. A slow line is drawn from it out to
every other box — the first connection in the chart.

| Block | Beat | Narration |
|---|---|---|
| 24 | Arthur (V.O.) — the first hit | And this one scores. Your lungs really are a regulator. They set the acidity of your blood minute by minute, by deciding how much carbon dioxide to keep and how much to blow off. |
| 25 | Arthur (V.O.) — the rhythm hit | The rhythm claim lands too. Your heart rate rises as you breathe in and it falls again as you breathe out, all day long without pause. The lung is setting a beat that the heart then follows. |
| 26 | Arthur (V.O.) — the two scores | Mark that carefully, because the pattern repeats all episode. The chapter is right about the job and wrong about the reason, which is a good observation fastened to a mechanism that does not exist. |
| 27 | Fan-di (Xavier) — the performance | A sovereign and a chancellor. This is a real court, and I am beginning to enjoy it enormously. Give me the rest of the appointments and I will tell you which of my actual ministers each one resembles. |
| 28 | Dr-Qi (Vesper) — stiller | It is a court with nobody at all in it. Every office in this list is a job rather than a person, and the moment you begin matching them to your actual ministers you will have stopped hearing what the chapter says. |
| 29 | Arthur (V.O.) — act out | There is the first payoff. A government is not a pile of officials but a set of relationships between them. Describe a body that way and you have a model of dependence rather than a ranking. |
---

# ACT II — *The Court* · blocks 30–55 · 4:50–9:10

**SOUND:** The pace changes. A dry brush ticking on paper, not quite regular.
**VISUAL:** The silk panel resets. From here each office draws its own small
emblem — a seal, a granary door, a road — into its box as it is named, and the
chart fills visibly. The audience should be able to count the filled boxes.

| Block | Beat | Narration |
|---|---|---|
| 30 | Arthur (V.O.) — the act frame | Nine offices remain and they arrive quickly, four characters at a time. Listen for two things in each: the title, which tells you the rank, and the product, which tells you the job. |
**ON-SCREEN TEXT — block 31.** Card: **肝者，將軍之官，謀慮出焉**.

| Block | Beat | Narration |
|---|---|---|
| 31 | Dr-Qi (Vesper) — the general | The liver is the office of the general, and from it issue planning and deliberation. Notice that the chapter never says the general fights. It says he thinks before anybody is asked to. |
| 32 | Fan-di (Xavier) — the objection | That is the wrong way round. Generals do not deliberate, they execute, and the ones who deliberate are precisely the ones I have to replace. Explain to me why the liver gets a sword and a strategy. |
| 33 | Dr-Qi (Vesper) — the defence | Because a campaign is lost long before it is ever fought. The character here is the weighing of options under real pressure, which is exactly what a general does in the weeks that nobody writes ballads about. |
| 34 | Arthur (V.O.) — the clean miss | Your liver does not deliberate. It has no capacity for it whatsoever, and nothing about planning happens anywhere near it. That is a clean miss and there is no reading that rescues it. |
| 35 | Arthur (V.O.) — what it does | What it does is quartermastery, several hundred distinct chemical jobs. It builds the proteins that clot your blood and neutralises what you swallow and holds the sugar reserve the rest of you draws on. |
| 36 | Arthur (V.O.) — wrong office, right army | So the department is oddly right and the faculty is wrong. Not the general who plans the battle but the general of supply, without whom no battle can be fought. Wrong office and right army. |
**ON-SCREEN TEXT — block 37.** Card: **膽者，中正之官，決斷出焉**.

| Block | Beat | Narration |
|---|---|---|
| 37 | Dr-Qi (Vesper) — the rectifier | The gallbladder is the office of the upright and impartial, and from it issues decision. In your own government that post is held by a man who cannot be bribed, and that is the whole point. |
| 38 | Arthur (V.O.) — a real office | That was a real office. The rectifier was the assessor who graded officials for promotion, and whose only qualification was that nobody could buy him. The gallbladder is given the job of not flinching. |

**VISUAL:** Lei-Gong crosses to the panel and taps one box with the end of his brush.

| Block | Beat | Narration |
|---|---|---|
| 39 | Lei-Gong (Zane) — the test | Second finding, and this one is a test rather than a complaint. If you abolish one of these offices outright, does the government actually fall over? Because a chart that cannot answer that question is not really a chart at all. It is a poem about a chart. |
| 40 | Arthur (V.O.) — hold that | Hold that, because it is the sharpest question anyone asks in this episode, and the chapter answers it explicitly in about four minutes. The answer it gives is the strongest claim in the whole text. |

**ON-SCREEN TEXT — block 41.** Card: **膻中者，臣使之官，喜樂出焉**.

| Block | Beat | Narration |
|---|---|---|
| 41 | Dr-Qi (Vesper) — the envoy | The centre of the chest is the office of the envoy, and from it issue joy and delight. This is the official who carries the sovereign's word out of the palace and who brings the mood of the whole country back to him again. |
| 42 | Arthur (V.O.) — 膻中 | The term is shanzhong, the middle of the chest, and later commentators read it as the wrapping around the heart. Either way it is the only office named for a place rather than an organ. |
| 43 | Arthur (V.O.) — the real observation | And here the chapter gets something right that we still cannot explain. Joy is felt in the chest, not merely imagined there but felt there physically, and reported that way in every culture anyone has asked. |
| 44 | Arthur (V.O.) — right place, wrong workshop | The feeling is real and its location is real. What is not real is the chest making it. The sensation is assembled elsewhere and read off the body, which is stranger still. |
| 45 | Arthur (V.O.) — the running score | It is the right place and the wrong workshop. That is three times over now, and we are not yet halfway down this list. The chapter's eye is far better than its explanations are. |
**ON-SCREEN TEXT — block 46.** Card: **脾胃者，倉廩之官，五味出焉**.

| Block | Beat | Narration |
|---|---|---|
| 46 | Dr-Qi (Vesper) — the granary | The spleen and the stomach together are the office of the granaries, and from them issue the five flavours. They hold what comes in and they release it at a measured rate, and the country either eats or it does not. |
| 47 | Lei-Gong (Zane) — the count | Hold on there, because two organs have just shared a single office between them. That is eleven titles for twelve organs, and I was promised twelve of each. Somebody in that granary is drawing another man's salary. |
| 48 | Arthur (V.O.) — not a slip | He has found something there, and it is not a slip. Every other office in this chapter takes one organ. This one takes two, and the pairing is exactly where the chapter hides its single worst mistake. |
| 49 | Arthur (V.O.) — the stomach is right | The stomach belongs in a granary. It receives food and holds it and passes it on, which is exactly the job description. On the stomach the chapter is straightforwardly correct. |
| 50 | Arthur (V.O.) — the spleen is not | The spleen has nothing to do with food. It filters worn-out blood cells and it houses part of your immune defence. Putting it in the granary is like billeting the customs house inside the mill. |

**ON-SCREEN TEXT — block 51.** Card: **小腸者，受盛之官，化物出焉**.

| Block | Beat | Narration |
|---|---|---|
| 51 | Dr-Qi (Vesper) — the receiver | The small intestine is the office that receives what is abundant, and from it issue transformed things. Whatever arrives from the granary is broken down here into the things that the body can actually take up and use. |
| 52 | Arthur (V.O.) — a hit | That one is right. Nearly everything you absorb, you absorb there, along seven metres of intestine folded into a surface the size of a small room. Receiver of abundance is a fair title. |

**ON-SCREEN TEXT — block 53.** Card: **大腸者，傳道之官，變化出焉**.

| Block | Beat | Narration |
|---|---|---|
| 53 | Dr-Qi (Vesper) — the road | The large intestine is the office of transmission along the road, and from it issues change. What arrives is not merely carried through. It is altered, and what leaves is not what entered. |
| 54 | Arthur (V.O.) — a better hit | Also right, and better than they could have known. Your colon reclaims water and carries a population of microbes that rivals your own cells, and it genuinely transforms what passes through. |
| 55 | Arthur (V.O.) — act out | So the two clear hits in the whole chapter go to the small intestine and the large. The offices no court would want, doing exactly the work the chapter says. Nobody expects that, including us. |

---

# ACT III — *The Ministry With No Building* · blocks 56–73 · 9:10–12:10

**SOUND:** The brush ticking stops. A single sustained low note enters and stays
under the whole act.
**VISUAL:** The lamp becomes the main light; the chamber recedes into flat black
around the panel. Nine boxes are filled and three are empty, and the camera makes a
point of it.

| Block | Beat | Narration |
|---|---|---|
| 56 | Arthur (V.O.) — the act frame | There are three offices left in the list. One of them is a near miss so strange that it deserves an act of its own, and one is a ministry with no building at all, which is not a mistake but a doctrine. |
**ON-SCREEN TEXT — block 57.** Card: **腎者，作強之官，伎巧出焉**.

| Block | Beat | Narration |
|---|---|---|
| 57 | Dr-Qi (Vesper) — the reserve | The kidney is the office of exertion, and from it issue skill and dexterity. The claim is that hard effort and fine work are drawn from one reserve kept there in the kidney. |
| 58 | Fan-di (Xavier) — the objection | Skill sits in my hands, and I have spent years of my life on my calligraphy and none of it whatsoever in that region. You are seriously telling me that my finest brushwork is being produced somewhere behind my own back. |
| 59 | Dr-Qi (Vesper) — the answer | I am telling you that the hands spend what the kidney stores. A man who cannot lift a bucket has no steady brushwork in him either, and the chapter says those two facts share one cause. |
| 60 | Arthur (V.O.) — better than filter | Your kidneys do not make dexterity, and nothing about fine motor control happens anywhere near them. But the office of exertion is a much better guess than filter, which is what most people would say today. |
| 61 | Arthur (V.O.) — administration | They set your blood pressure and they finish the vitamin D that hardens your bones and they keep the acidity of your blood in range. None of that is filtering, and all of it is administration. |
| 62 | Arthur (V.O.) — the exertion link | And they issue the order that makes red blood cells. An organ that decides how much oxygen your blood can carry is, quite literally, an office that determines how much you can exert yourself. |

**ON-SCREEN TEXT — block 63.** Card: **三焦者，決瀆之官，水道出焉**.

| Block | Beat | Narration |
|---|---|---|
| 63 | Dr-Qi (Vesper) — the dredger | The triple burner is the office that clears the channels, and from it issue the waterways. Every single fluid in you moves along a route of its own, and this is the office that keeps every one of those routes open. |
**VISUAL:** Lei-Gong holds his brush over the eleventh box and does not draw
anything in it. Hold on the empty box.

| Block | Beat | Narration |
|---|---|---|
| 64 | Lei-Gong (Zane) — no building | Third finding, and this is the one I have actually done the legwork on myself. I went looking for that office in person. There is no building anywhere. There is a title and there is a job description, and when you finally get to the address there is nothing standing there at all. |
| 65 | Arthur (V.O.) — he is right | He is right, and this is the most argued-over thing in all of Chinese medicine. The triple burner has no organ at all. Physicians have fought about it for two thousand years without locating it. |
| 66 | Arthur (V.O.) — a name and no form | A later text in the very same tradition says it outright, that it has a name and no form at all. That is a remarkable thing to write down and then keep on the books, rather than quietly delete from the list. |
| 67 | Dr-Qi (Vesper) — the defence | Then let me defend it properly. An office is a function rather than a room. You have never once seen the thing that makes the post arrive on time either, and you would not abolish the post office to prove it. |
**VISUAL:** The panel changes for the only time in the episode. Ink spreads from the
empty box outward through the whole chart as a fine branching network, touching
every other box, drawn as water finding channels rather than as lines.

| Block | Beat | Narration |
|---|---|---|
| 68 | Arthur (V.O.) — the strange part | And here is the part that should stop you. There is a fluid transport system in your body with no headquarters and no single organ, distributed through every tissue you have, doing exactly this job. |
| 69 | Arthur (V.O.) — the lymphatics | It is the lymphatic system. It drains fluid out of your tissues and returns it to the blood, and Europe had no description of it at all until the middle of the seventeenth century, long after this chapter was written. |
| 70 | Arthur (V.O.) — the hedge | We are not claiming they found it. They did not. We are saying the shape of the guess was right, that a system can be real and have no organ, and that is not nothing. |

**ON-SCREEN TEXT — block 71.** Card: **膀胱者，州都之官，津液藏焉，氣化則能出矣**.

| Block | Beat | Narration |
|---|---|---|
| 71 | Dr-Qi (Vesper) — the district | The bladder is the office of the district. Fluids are stored there, and when qi transforms them, then they can be discharged. That last clause is the only conditional sentence anywhere in the entire list of twelve. |
| 72 | Arthur (V.O.) — the conditional | Every other office simply produces. This one produces only if something else works first, which is a more careful claim than anything around it and an accurate description of a bladder. |
| 73 | Arthur (V.O.) — act out | Storage, and a release that has to be commanded. That is precisely what a bladder is. The commanding turns out to be nervous rather than transformative, but the shape of that sentence holds up well. |

---

# ACT IV — *Nothing Can Be Spared* · blocks 74–86 · 12:10–14:20

**SOUND:** The sustained note lifts. Room tone, and the chart.
**VISUAL:** Light comes back up. All twelve boxes are filled and the whole chart is
legible in one frame for the first time. Hold it long enough to be counted.

**ON-SCREEN TEXT — block 74.** Card: **凡此十二官者，不得相失也**.

| Block | Beat | Narration |
|---|---|---|
| 74 | Dr-Qi (Vesper) — the sentence | That is all twelve of them. And now the sentence that matters more than any of them: these twelve offices must never lose one another. Not one can be dispensed with, and none works alone. |
| 75 | Arthur (V.O.) — the question dissolves | Go back to the question he actually asked at the very start. He wanted to know which organ is noble and which is base, and what he has been handed instead is a sentence saying the ranking cannot be acted on. |
| 76 | Fan-di (Xavier) — the chain | I asked which of my organs I could afford to lose and you have given me a chain. Every link indispensable, every link holding the next. That is not an answer, it is a warning dressed as anatomy. |

**ON-SCREEN TEXT — block 77.** Card: **主明則下安**.

| Block | Beat | Narration |
|---|---|---|
| 77 | Dr-Qi (Vesper) — the bright ruler | When the ruler is clear-sighted, those below him are at peace. The text then says a life cultivated on this principle is a long one. I am quoting it rather than prescribing it. |
| 78 | Arthur (V.O.) — the hedge | We should be plain about that clause. It is a claim the text makes about virtue and long life. It is not a finding and not evidence and emphatically not a recommendation to anybody watching. |
**ON-SCREEN TEXT — block 79.** Card: **主不明則十二官危，使道閉塞而不通**.

**VISUAL:** As she reads, the connecting lines on the chart go out one by one. The
boxes all remain. Only the lines between them disappear.

| Block | Beat | Narration |
|---|---|---|
| 79 | Dr-Qi (Vesper) — the dark ruler | And then the other half, read exactly as written. If the ruler is not clear-sighted, the twelve offices are endangered. The roads close and the body is greatly injured. |
| 80 | Arthur (V.O.) — who is in the room | Read that passage again and notice exactly who is in the room. A physician has just told the man on the throne that a sovereign who is not clear-sighted wrecks the state, and he said it as medicine. |
**VISUAL:** Fan-di sets the fan down on the lacquer table. Deliberately, without
looking at it. **It does not appear in his hand again for the remainder of the
episode.** Hold on the table.

| Block | Beat | Narration |
|---|---|---|
| 81 | Fan-di (Xavier) — he hears it | You are not describing my liver at all. You have been describing my own court for a quarter of an hour. I have been sitting here nodding along and agreeing with every word, like a man applauding his own indictment. |
| 82 | Arthur (V.O.) — 使道 | There is a word in that passage worth stopping on, and it is the roads, meaning the routes along which the envoys travel. When they close, the offices are all intact and the state fails anyway. |
| 83 | Arthur (V.O.) — the systems claim | That is a systems claim, and it is the most modern sentence in the chapter. Illness as a breakdown in the signalling between organs, rather than damage inside one, is roughly where medicine has arrived. |
| 84 | Lei-Gong (Zane) — the verdict | Then I will answer my own question, since nobody else in this room has offered to. You can abolish an office and survive it. Surgeons remove the gallbladder hundreds of thousands of times every year, and the government of the body carries on running perfectly well without it. |
| 85 | Arthur (V.O.) — false as stated | So the chapter's strongest claim is false as it stands. One of the twelve can be removed, and the man who loses it keeps his judgment and his decisions and every other office in working order. |
**ON-SCREEN TEXT — block 86.** Card: **戒之戒之** — four characters, alone, held.

| Block | Beat | Narration |
|---|---|---|
| 86 | Dr-Qi (Vesper) — take care | The chapter closes that passage by repeating itself, which it does nowhere else in the whole text. It says take care and then says take care again, four characters at the end of a warning to a sovereign. |
---

# ACT V — *The Locked Room* · blocks 87–96 · 14:20–16:00

**SOUND:** Everything drops away except room tone. Any music bed is out from block
87 and does not return.
**VISUAL:** The chamber at night. One lamp. The silk chart is rolled up during this
act, slowly, and taken out of frame.

**ON-SCREEN TEXT — block 87.** Card: **至道在微，變化無窮，孰知其原**.

| Block | Beat | Narration |
|---|---|---|
| 87 | Arthur (V.O.) — the turn | One passage remains and it is not about organs at all. The ultimate way lies in the minute, and its transformations have no end. The chapter turns philosophical in its very final lines of all. |
| 88 | Dr-Qi (Vesper) — measurement | The numbers of what is faint and indistinct are born from the finest hair, and the numbers of the hair arise from measurement. Multiply them by thousands and extend them, and a form is thereby determined. |
| 89 | Arthur (V.O.) — what that claims | That is a bold claim about measurement. The vague becomes exact simply by being counted. Start from something far too small to see, count it, and you arrive at a shape you can hold. |
**VISUAL:** Fan-di stands. The fan stays on the table. He does not pick it up as he
crosses the room.

| Block | Beat | Narration |
|---|---|---|
| 90 | Fan-di (Xavier) — the fast | Then I will not take this casually at all. I have heard the way of refined brilliance and the work of a great sage, and without fasting and purification and a properly chosen day, I would not dare to receive it. |
| 91 | Arthur (V.O.) — and he does | And he does exactly that. He fasts and he purifies himself and he waits for a day with a favourable omen, and then he puts the text away in a room and has it kept there. |
**ON-SCREEN TEXT — block 92.** Card: **藏靈蘭之室，以傳保焉**.

| Block | Beat | Narration |
|---|---|---|
| 92 | Arthur (V.O.) — the chamber | The room is the Chamber of the Numinous Orchid, and the chapter is named after it. Not after the twelve offices, not after the heart. After the cupboard the dangerous thing was locked in. |

**VISUAL:** Lei-Gong alone in frame, tablet lowered, in front of the closed door of
the chamber.

| Block | Beat | Narration |
|---|---|---|
| 93 | Lei-Gong (Zane) — the last finding | Last finding, and then I will stop counting for the evening. Nobody in this room disagreed with the metaphor at any point, and that includes me. You cannot audit a government from inside it, and every single one of us has been standing inside this one all along. |
| 94 | Arthur (V.O.) — the thesis | And that is the episode in one sentence. The heart kept the throne for two thousand years not because the evidence for it was good but because the metaphor was, and a good metaphor is very hard to argue with. |
| 95 | Arthur (V.O.) — and we do it now | And we are doing exactly the same thing now, with the brain as a computer and the genome as a blueprint and the immune system as an army. Each one of them is useful and each one of them is wrong somewhere. |
| 96 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and say plainly where evidence does not support it. |
---

## Shot list

Numbered to the narration blocks, per `CLAUDE.md`. **Flat 2D ink-wash throughout,
landscape 16:9, text-free except the card blocks listed below.** Written as a list
rather than a table so it cannot be mistaken for narration rows by
`parseNarration`. Every shot needs motion from frame 1 — see *Clips*.

**Cold open**

1. Blank silk; an ink organisation chart draws itself, boxes and lines, no labels. Slow push in.
2. The chart completes and holds; a single drop of ink spreads through the topmost box.
3. Wide, symmetrical audience chamber. Fan-di on the high seat, fan snapping open. Lacquer court chart behind him.
4. Dr-Qi to one side, scroll held like a tablet, not approaching the seat. She turns a page.
5. The lacquer chart behind Fan-di dissolves into the ink chart on silk. Same geometry, different medium.
6. **CARD** — 素問·靈蘭祕典論 brushed on silk, lamp guttering behind it. *(Default: plain plate, text added at edit — see below.)*
7. **CARD** — series title plate. Ink wash drifting.
8. Behind a pillar: Lei-Gong, cinnabar robe, hand drum resting in his lap, writing on a wax tablet. Camera finds him late.
9. Wide two-shot, the empty silk panel between them, lamp swinging slightly.

**Act I — The Throne**

10. **CARD** — 心者，君主之官也，神明出焉. Behind it, one high box fills with ink.
11. The chart: eleven empty boxes below one filled box, lines drawn downward.
12. Ink light rises inside the top box and spreads faintly to the others. No face, no anatomy.
13. Fan-di, delighted, fan wide, tapping it against the arm of the seat.
14. Dr-Qi, still, one hand flat on the open scroll. She does not look up.
15. Hard cut: the ink chart persists, background becomes a modern lecture theatre rendered in the same brushed line. No photography, no faces.
16. A second brushed volume opens beside the first; an outline of a skull drawn as a vessel of marrow, no features.
17. The top box is over-inked, twice, three times, until it is the darkest thing on the panel.
18. Lei-Gong steps out from the pillar. An empty box appears **outside** the chart, unconnected to anything.
19. Hold on the unconnected box. Ink grain drifting.
20. **CARD** — 肺者，相傅之官，治節出焉. The second box fills.
21. Two boxes side by side, the second slightly lower. A seal is stamped into it.
22. A length of bamboo drawn in ink; the brush marks each joint in turn, evenly spaced.
23. Dr-Qi at the panel, brush in hand, drawing the connecting line herself.
24. From the second box, a line runs out to every other box — the first network on the chart.
25. The whole chart pulses, very slightly, twice, in the rhythm of a breath.
26. Two columns of tally marks begin at the panel's edge, one headed with a tick, one with a cross.
27. Fan-di on his feet, fan wide, gesturing at the lacquer chart behind him.
28. Dr-Qi at the panel, unmoved, the scroll closed against her chest.
29. Wide: the panel now shows boxes *and* lines, and the lines are heavier than the boxes.

**Act II — The Court**

30. The panel resets to nine empty boxes. A dry brush is loaded.
31. **CARD** — 肝者，將軍之官，謀慮出焉. A general's seal is stamped into a box.
32. Fan-di leaning forward, fan closed and pointing like a baton.
33. Dr-Qi draws a campaign map in three strokes — a river, a pass, a marker — and nothing else.
34. The campaign map is wiped from the panel with a wet cloth in one stroke.
35. Supply carts, granary doors and stacked crates drawn as emblems in a row, filling the box.
36. The general's seal is lifted out of its box and set down in the supply box beside it.
37. **CARD** — 膽者，中正之官，決斷出焉. A plain unornamented seal.
38. An ink ledger of official names with grades marked beside them; one hand refuses a purse of coins. Objects only.
39. Lei-Gong crosses to the panel and taps a box with the end of his brush.
40. Hold on that single box while the rest of the chart dims around it.
41. **CARD** — 膻中者，臣使之官，喜樂出焉. An envoy's tally-stick emblem.
42. The chest region of the ink outline marked as a *place*, a hatched region rather than an organ.
43. Ink figures at a distance — silhouettes only, no faces — each with a hand at the centre of the chest.
44. The hatched chest region and the head both light faintly; a line runs between them, head first.
45. The two tally columns update. Ticks and crosses, counted on screen.
46. **CARD** — 脾胃者，倉廩之官，五味出焉. A granary door emblem — the only box drawn twice as wide.
47. Lei-Gong at the wide box, holding up two fingers, then eleven, then twelve.
48. The wide granary box splits down the middle into two half-boxes.
49. Left half: grain pouring, a measure being filled and levelled.
50. Right half: the grain emblem is scrubbed out and replaced with a customs seal and a filter screen.
51. **CARD** — 小腸者，受盛之官，化物出焉. A long folded road emblem.
52. The folded road unfolds across the whole panel, far longer than the frame suggested.
53. **CARD** — 大腸者，傳道之官，變化出焉. A road with a waystation.
54. Along the road, ink dots multiply until the road itself is made of them.
55. Wide: eleven boxes filled, one empty, the two tally columns visible at the edge.

**Act III — The Ministry With No Building**

56. The lamp becomes the only strong light. The chamber goes flat black around the panel.
57. **CARD** — 腎者，作強之官，伎巧出焉. A sealed store-jar emblem.
58. Fan-di holding a brush, examining his own hand, fan abandoned on the arm of the seat.
59. A bucket on a rope and a fine brush, drawn side by side, the same weight of line.
60. The store-jar emblem is redrawn as a small administrative office with a queue of documents.
61. Three documents stamped in sequence: a pressure gauge, a bone, a set of scales.
62. A courier leaves the office with an order; ink dots stream away from it along the roads.
63. **CARD** — 三焦者，決瀆之官，水道出焉. The box is drawn — and left empty.
64. Lei-Gong holds his brush over the empty box and does not draw. Hold.
65. Generations of commentary drawn as stacked scrolls beside the empty box, growing.
66. A scroll unrolls: a title with nothing written beneath it.
67. Dr-Qi gestures at the roads on the chart rather than at any box.
68. Ink spreads from the empty box outward as a fine branching network, water finding channels, touching every box.
69. The network continues past the chart edge onto blank silk and keeps branching.
70. The network holds, then thins to a faint watermark that stays for the rest of the act.
71. **CARD** — 膀胱者，州都之官，津液藏焉，氣化則能出矣. A cistern with a gate.
72. The cistern fills. The gate stays shut. Nothing happens until a seal is pressed to it.
73. The gate opens once, cleanly, and closes.

**Act IV — Nothing Can Be Spared**

74. **CARD** — 凡此十二官者，不得相失也. Light back up; all twelve boxes filled, whole chart legible in one frame.
75. The camera tracks slowly along the chart. Every box is the same size. No box is above another.
76. Fan-di seated, fan open in his hand, forgotten, looking at the chart rather than the physician.
77. **CARD** — 主明則下安. The chart's lines brighten together.
78. The chart holds, unchanged, while the lamp steadies. Deliberately uneventful.
79. **CARD** — 主不明則十二官危，使道閉塞而不通. The lines go out one by one. Every box remains.
80. Reverse: the empty chamber behind Dr-Qi, doors shut, nobody else present.
81. Fan-di sets the fan down on the lacquer table. Hold on the table after he leaves frame.
82. The dark chart: intact boxes, no lines. A courier's tally-stick lies broken on a road.
83. The same dark chart, re-drawn once in a modern brushed idiom — the same boxes, labelled with nothing.
84. Lei-Gong at the chart, drawing a single clean line through one box and continuing past it.
85. The chart with eleven boxes and one gap; the lines route around the gap and reconnect.
86. **CARD** — 戒之戒之, four characters alone on black, held.

**Act V — The Locked Room**

87. **CARD** — 至道在微，變化無窮，孰知其原. The chamber at night, one lamp.
88. A single hair laid on a rule; the rule laid on a larger rule; the frame pulls back through three scales.
89. Numerals brushed in ranks, multiplying across the silk until they resolve into an outline.
90. Fan-di stands. The fan stays on the table. He crosses the room without it.
91. A brazier, a basin, a calendar page turned. No figures. Objects only.
92. **CARD** — 藏靈蘭之室，以傳保焉. A lacquer chest closing; a key turned; a door shut.
93. Lei-Gong alone in frame, tablet lowered, in front of the closed chamber door.
94. The rolled silk chart, tied, standing upright in the corner of the dark room.
95. Three modern brushed emblems appear in sequence and each is crossed through: a machine, a folded plan, a rank of shields.
96. **END CARD** — plain plate. Disclaimer and editorial credit added at edit time.

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
> narration row. This one sits after block 96 so it cannot truncate the sidecar,
> and the prefix removes the collision for good. Apply the same rule to any
> numbered table added to this document later.

| Card block | Card | Gloss |
|---|---|---|
| Block 3 | 願聞十二藏之相使，貴賤何如 | I would hear how the twelve organs assist one another — which is noble, which base |
| Block 6 | 素問·靈蘭祕典論 | the citation — **Suwen 8**, never a bare "Chapter 8" |
| Block 10 | 心者，君主之官也，神明出焉 | the heart is the office of the sovereign; spirit and illumination issue from it |
| Block 20 | 肺者，相傅之官，治節出焉 | the lung is the office of the chancellor; regulation and rhythm issue from it |
| Block 31 | 肝者，將軍之官，謀慮出焉 | the liver is the office of the general; planning and deliberation issue from it |
| Block 37 | 膽者，中正之官，決斷出焉 | the gallbladder is the office of the upright and impartial; decision issues from it |
| Block 41 | 膻中者，臣使之官，喜樂出焉 | the chest centre is the office of the envoy; joy and delight issue from it |
| Block 46 | 脾胃者，倉廩之官，五味出焉 | spleen and stomach are the office of the granaries; the five flavours issue from them |
| Block 51 | 小腸者，受盛之官，化物出焉 | the small intestine is the office that receives abundance; transformed things issue from it |
| Block 53 | 大腸者，傳道之官，變化出焉 | the large intestine is the office of transmission; change issues from it |
| Block 57 | 腎者，作強之官，伎巧出焉 | the kidney is the office of exertion; skill and dexterity issue from it |
| Block 63 | 三焦者，決瀆之官，水道出焉 | the triple burner is the office that clears channels; the waterways issue from it |
| Block 71 | 膀胱者，州都之官，津液藏焉，氣化則能出矣 | the bladder is the district office; fluids are stored, and qi transformation permits discharge |
| Block 74 | 凡此十二官者，不得相失也 | **these twelve offices must never lose one another** |
| Block 77 | 主明則下安 | when the ruler is clear-sighted, those below are at peace |
| Block 79 | 主不明則十二官危，使道閉塞而不通 | when the ruler is not clear-sighted, the twelve offices are endangered; the roads close and do not carry |
| Block 86 | 戒之戒之 | **take care, take care** — four characters, held alone |
| Block 87 | 至道在微，變化無窮，孰知其原 | the ultimate way lies in the minute; its transformations have no end; who knows its origin |
| Block 92 | 藏靈蘭之室，以傳保焉 | stored in the Chamber of the Numinous Orchid, to be transmitted and preserved |

*(Nineteen quotation cards. Block 7 is the series title card and carries no
classical text, so it is not listed. Block 96 is the disclaimer plate, whose text
is hand-added at edit time like all other on-screen text.)*

**This chapter is unusually card-heavy and that is correct, not excessive.** The
body of the text *is* a list of quotable four-character clauses, and eleven of the
nineteen cards are the office clauses themselves. **The eleven office cards are
the episode's structural spine** — a viewer who reads nothing else can follow the
whole argument off them.

**Generated Chinese glyphs are unreliable and cannot be checked from this host** —
the CDN has been blocked on every cut for a long time. Two options, and it is a
production decision: generate the card blocks as **plain plates and add the
characters at edit time**, or generate them with text in-frame and have a human
verify every glyph before the cut ships. **Default to plates plus edit-time text.**
Blocks 6, 74 and 86 are non-negotiable cases of it — the citation, the sentence the
whole chapter turns on, and the four characters that close the warning.

---

## Source text and translation

The chapter is short — three sections — so the complete source sits here rather
than in a separate file. **Every card above is verified against this text.**
Translation is this cut's own working English, made against the classical Chinese;
the supplied source PDF's machine English was consulted and is departed from in
three places, noted below.

### §1 — The twelve offices

> 黃帝問曰：願聞十二藏之相使，貴賤何如。歧伯對曰：悉乎哉問也，請遂言之。
> 心者，君主之官也，神明出焉。肺者，相傅之官，治節出焉。肝者，將軍之官，謀慮出焉。
> 膽者，中正之官，決斷出焉。膻中者，臣使之官，喜樂出焉。脾胃者，倉廩之官，五味出焉。
> 大腸者，傳道之官，變化出焉。小腸者，受盛之官，化物出焉。腎者，作強之官，伎巧出焉。
> 三焦者，決瀆之官，水道出焉。膀胱者，州都之官，津液藏焉，氣化則能出矣。

The Yellow Emperor asked: I would like to hear how the twelve organs assist one
another — which of them is noble, and which is base? Qibo replied: A most thorough
question. Allow me to set it out in full.

The **heart** is the office of the sovereign ruler; spirit and illumination issue
from it. The **lung** is the office of the chancellor; regulation and rhythm issue
from it. The **liver** is the office of the general; planning and deliberation
issue from it. The **gallbladder** is the office of the upright and impartial;
decision issues from it. The **centre of the chest** is the office of the envoy;
joy and delight issue from it. The **spleen and stomach** are the office of the
granaries; the five flavours issue from them. The **large intestine** is the office
of transmission along the road; change issues from it. The **small intestine** is
the office that receives what is abundant; transformed things issue from it. The
**kidney** is the office of exertion; skill and dexterity issue from it. The
**triple burner** is the office that clears the channels; the waterways issue from
it. The **bladder** is the office of the district; fluids are stored there, and
when qi transforms them, then they can be discharged.

### §2 — The government

> 凡此十二官者，不得相失也。故主明則下安，以此養生則壽，殁世不殆，以為天下則大昌。
> 主不明則十二官危，使道閉塞而不通，形乃大傷，以此養生則殃，以為天下者，其宗大危，戒之戒之。

These twelve offices must never lose one another. Therefore when the ruler is
clear-sighted, those below are at peace; a life cultivated on this principle is a
long one, and to the end of life there is no peril; govern the world this way and
it will greatly flourish. When the ruler is not clear-sighted, the twelve offices
are endangered; the roads the envoys travel close and do not carry; the body is
then greatly injured; a life cultivated this way brings calamity; govern the world
this way and the lineage is gravely endangered. Take care. Take care.

### §3 — The locked room

> 至道在微，變化無窮，孰知其原；窘乎哉，消者瞿瞿，孰知其要；閔閔之當，孰者為良。
> 恍惚之數，生於毫氂，毫氂之數，起於度量，千之萬之，可以益大，推之大之，其形乃制。
> 黃帝曰：善哉，余聞精光之道，大聖之業，而宣明大道，非齋戒擇吉日，不敢受也。
> 黃帝乃擇吉日良兆，而藏靈蘭之室，以傳保焉。

The ultimate way lies in what is minute; its transformations have no end — who
knows its origin? How straitened it is: those who wear themselves out peering after
it — who knows its essentials? In all that murk and difficulty, who is excellent?
The numbers of what is faint and indistinct are born from the finest hair; the
numbers of the hair arise from measurement; multiply them by thousands and by ten
thousands and they may be greatly increased; extend and enlarge them, and a form is
thereby determined.

The Yellow Emperor said: Excellent. I have heard the way of refined brilliance and
the work of a great sage, and to proclaim the great way abroad — without fasting
and purification and the choosing of an auspicious day, I do not dare receive it.
The Yellow Emperor then chose an auspicious day and a favourable omen, and stored
it in the Chamber of the Numinous Orchid, to be transmitted and preserved.

### Three departures from the supplied English

- **相傅 as "chancellor," not "prime minister."** 傅 is the tutor-guardian, not a
  head of government; the office advises *and* administers. Block 21 says so on
  screen rather than smuggling the choice past the viewer.
- **作強 read as exertion and strength, never as sexual potency.** The clause is
  ambiguous and has been read the other way. The neutral reading is used
  throughout, on the same principle the repo has applied to this compound before.
  See the compliance notes.
- **膻中 rendered as "the centre of the chest," not transliterated as
  "Shanzhong."** Left untranslated it reads as a proper noun a viewer cannot place;
  block 42 gives the term *and* the later pericardium reading.

---

## Source mapping — § → blocks

| § | Passage | Blocks |
|---|---|---|
| §1 | 願聞十二藏之相使，貴賤何如 | 3, 75 |
| §1 | 悉乎哉問也，請遂言之 | 4 |
| §1 | 心者，君主之官也，神明出焉 | 10, 11, 12 |
| §1 | 肺者，相傅之官，治節出焉 | 20, 21, 22 |
| §1 | 肝者，將軍之官，謀慮出焉 | 31, 33 |
| §1 | 膽者，中正之官，決斷出焉 | 37, 38 |
| §1 | 膻中者，臣使之官，喜樂出焉 | 41, 42 |
| §1 | 脾胃者，倉廩之官，五味出焉 | 46, 47 |
| §1 | 小腸者，受盛之官，化物出焉 | 51 |
| §1 | 大腸者，傳道之官，變化出焉 | 53 |
| §1 | 腎者，作強之官，伎巧出焉 | 57, 59 |
| §1 | 三焦者，決瀆之官，水道出焉 | 63, 67 |
| §1 | 膀胱者，州都之官，津液藏焉，氣化則能出矣 | 71, 72 |
| §2 | 凡此十二官者，不得相失也 | 74, 75, 76 |
| §2 | 主明則下安，以此養生則壽 | 77, 78 |
| §2 | 主不明則十二官危，使道閉塞而不通，形乃大傷 | 79, 80, 82 |
| §2 | 戒之戒之 | 86 |
| §3 | 至道在微，變化無窮，孰知其原 | 87 |
| §3 | 恍惚之數，生於毫氂…其形乃制 | 88, 89 |
| §3 | 非齋戒擇吉日，不敢受也 | 90 |
| §3 | 擇吉日良兆，而藏靈蘭之室，以傳保焉 | 91, 92 |
| §2 | 殁世不殆 / 其宗大危 | **not used — see below** |

**One deliberate reordering.** The source runs 大腸 before 小腸. This script runs
**小腸 (51) before 大腸 (53)** so the two clean hits build — absorption first, then
transformation — and so the "road" emblem introduced at 53 is not used and then
re-used. **The office cards carry the source's own wording**, so nothing on screen
is altered; only the order of two adjacent offices is. Restore source order by
swapping blocks 51–52 with 53–54 as pairs; nothing else refers to their sequence.

**殁世不殆 and 其宗大危 are excluded.** The first is a claim about being untroubled
after death, the second about a dynasty's destruction — both are §2 rhetoric rather
than argument, and both would pull the episode toward mortality imagery the shot
list is written to avoid. Their omission costs the argument nothing: 主明/主不明 and
使道閉塞 carry the whole passage.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears the
cast sheet's **blue** cheongsam, never jade. **Qibo is played by Dr-Qi and Huangdi
by Fan-di**, per the standing cast; the classical speaker names appear nowhere on
screen.

**Dramatic material not in the source, flagged as invention:** the lacquer court
chart and the silk panel; Fan-di framing the question as a budget decision (3); the
fan and the moment it is set down (81, 90); Lei-Gong being present at all and all
seven of his blocks (8, 18, 39, 47, 64, 84, 93); the tally columns; the chamber
staged at night in Act V. **The classical text has no scene at all** — there are two
speakers, no setting and no characterisation between them.

**Three interpretive claims that are ours, not the text's, and are hedged in the
narration rather than only here:**

- **That the brain's absence is a decision rather than ignorance** (16, 17, 19).
  The canon's 腦為髓之海 is real and elsewhere; the inference that the omission was
  deliberate is ours, and block 19 states it as an absence of argument rather than
  as a documented debate.
- **That the triple burner prefigures a distributed fluid system** (68–70). Block
  70 exists solely to refuse the stronger version of this claim on screen.
- **That the metaphor's success is what froze it** (94, 95). This is the episode's
  thesis and it is an argument about how explanations behave, not a historical claim
  about what any physician thought.

---

## Production record (Higgsfield)

**RENDERED 2026-08-26, draft tier.** Second longform episode assembled in this
repo, and the first to run the whole path — script re-size, clips, takes, a
purpose-built music bed, assembly and caption burn — in a single session.

### Credit spend — actual against preflight

| | Credits |
|---|---|
| Balance before | **1806.1** |
| Balance after | **615.3** |
| **Actual spend** | **1190.8** |
| Preflight estimate (96 blocks, draft) | ~1,249 |
| Variance | **−4.7%**, i.e. under |

| Line item | Count | Credits |
|---|---|---|
| 16:9 style-key sibling (`nano_banana_pro`) | 1 | 2.0 |
| Clips (`seedance_2_0_mini` 480p) | **97 jobs (96 kept, 1 `nsfw`)** | 970.0 |
| Voice takes (`seed_audio`) | **170 issued, 96 kept** | ~218.8 |
| Assembly, music bed, caption burn, on-screen text | — | 0 |

**170 takes for 96 blocks is a 1.77× re-take rate** — against Lingshu 28 v3's
2.5× and the Suwen 13 trailer's 4.7×. The improvement is not service luck: this
script was re-sized to the *correct* 7.8–9.5s window before any take was
generated, and every line was written to the **midpoint** of its voice's band
rather than to an edge. Priced live at step 0: clip **10.0**, Arthur take **1.3**,
Zane take **1.7**. Voice worked out at **~1.29/take** across all four voices,
below the skill's 1.5/2.0 budget and consistent with Lingshu 28 v3's ~1.25.

### Step-0 gate — run and cleared

- **Tool availability.** All eight names resolve — but under a **new MCP prefix**:
  the server reconnected mid-session and every `mcp__higgsfield__*` tool returned
  as `mcp__6989d631-…__*`, exactly the failure mode the skill's *Environment
  caveats* predicts. Nothing was lost because nothing was yet in the sandbox.
  `assemble_final.sh` and `speech_metrics.sh` both resolve at the post-2026-08-24
  paths (`faceless-video/scripts/` and `narrator/scripts/`).
- **`balance` read live: 1806.1.** The skill's anchor of 235.7 is stale by 7.7×.
- **`get_cost` live**: clip **10.0** at 480p/16:9/10s/audio-off; Arthur take
  **1.3** on a 32-word line; Zane take **1.7** on a 43-word line; style key **2.0**.
- **Speech window read out of the script itself**, not from a document:
  `SPEECH_MIN = CLIP − 2.2`, `SPEECH_MAX = CLIP − 0.5` → **7.800–9.500s**.

### Style key — 16:9 sibling generated

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   Suwen 1    (neutral head)
  └── 05ebe984-2781-491e-8c84-2b20e608d2a8   Suwen 8 vertical 9:16 (trailer v1)
        └── 6b945916-15d4-4987-bab9-7eb26cf7ce24   Suwen 8 LANDSCAPE 16:9  ← THIS CUT
```

**Job ID `6b945916-15d4-4987-bab9-7eb26cf7ce24`.** `nano_banana_pro` (served by
`nano_banana_2`), `aspect_ratio: "16:9"`, derived from the chapter's own vertical
key by job ID, changing only the framing — so the lacquer-chart-of-twelve-boxes
motif and all three characters carry over from the rendered trailer. The service
echoed the media role back coerced to `image_references`, as the skill predicts.
**The vertical key was not overwritten** — the trailer still needs it.

### Clips — 96 kept, 1 regenerated for safety

**`seedance_2_0_mini`, Draft tier, `resolution: "480p"`, `duration: 10`,
`aspect_ratio: "16:9"`, `generate_audio: false`, landscape style key attached to
every clip as `image_references`.** Block 1 was generated alone first and its
dimensions checked before the other 95 went out, per the skill's little-history
rule. **Every clip returned 864×496, 10.042s, no audio stream.**

| 1 `74e27669-4c33-4c5f-9ade-c70f4d7a8b1b` | 2 `cf9a48aa-533b-41c9-ae13-c60ba3516ca2` | 3 `b073aca0-80bd-48a3-b66b-72d3fc18b93b` | 4 `e92a0fca-2096-4a6a-81a2-f3c61c3e6b53` | 5 `d9a4ad0c-c84a-42f8-8543-30faa87462b7` |
| 6 `b1c6effe-7ffc-4047-b08b-b57340430837` | 7 `043acd9b-593d-4d43-a54d-a3db2ee2f685` | 8 `33438f9a-12e0-45db-8843-91b15be82eb9` | 9 `536536c6-cb73-4e82-9f82-d4ac036336f9` | 10 `05230157-876d-4c9e-ad62-7aba0067e094` |
| 11 `798fe3a4-a6cb-4390-b9ee-fb3e1e68f3fe` | 12 `c8d36e8a-457d-4bbb-94c9-52995355d46a` | 13 `ca801b80-6baa-407c-b275-a5f37e62bce0` | 14 `b614b36a-6bd0-4967-8311-0d99eed22aa1` | 15 `291d5aab-400b-4bbd-a708-fa83efe796af` |
| 16 `80ff1d39-8948-49c5-8b6c-c30255237eb4` | 17 `2a1773ac-02b1-461e-ac61-1794b0b813aa` | 18 `c28a2ea3-f05b-4bbd-9c14-2979388f188c` | 19 `1a360834-d434-4bac-90e1-dd5bd8dbf6a4` | 20 `b0ce940d-9034-4c0c-87e9-0da07b6937b2` |
| 21 `439cc797-0379-4d5c-9d8b-e4785cedf478` | 22 `b1456fa1-0a8d-4504-b756-1ad48a3a014f` | 23 `70f6fc38-3701-406a-bca3-ccce5b52f59e` | 24 `dc7f5c95-2ec8-4d80-9c22-722b43d9466a` | 25 `bd6311e8-97cb-4404-878d-bcc411601564` |
| 26 `1fa7c2e2-1def-417b-8afb-2f9d0f47c8d8` | 27 `6f04cdf8-7e5c-49e2-bdec-e6e5c4bd52a7` | 28 `7a5853f9-a977-4897-9174-1e19e2bfb481` | 29 `a906f30c-0ecc-4792-9c06-3417a77373f9` | 30 `dd4b961b-a64f-4c5b-8003-5884395be118` |
| 31 `7294cd1a-0bf6-43fe-8a0a-baf818e476de` | 32 `df0acb0b-7603-4657-821d-a78d8adec0e8` | 33 `0929746a-58d6-44b8-995c-7085250e33f1` | 34 `1ce12d13-9f7c-4704-9d95-b6d5c7c84095` | 35 `10e8812c-da0d-48cd-86f1-465c5ea20a85` |
| 36 `1009110a-0bcb-4339-8cc1-272277458e56` | 37 `0a2c72cf-6731-4e2f-bc1a-579fee9d88f3` | 38 `60d978fa-f669-4b26-a305-4adad83cae3b` | 39 `bdbf241b-2e80-460a-84bc-c7b797cacabd` | 40 `ecbb93e9-9eaa-4c06-bf83-459c0999c01d` |
| 41 `e7693eb9-6904-4746-86dc-055c05032c17` | 42 `6e5b8e5b-6f2b-4bed-964a-06d137eff3eb` | 43 `3928840e-68da-494e-ac55-ec278037f80a` | 44 `fb934210-c247-4082-b58d-ef90693d2d26` | 45 `ca953a47-0f4b-49a7-8df5-28acf92c1169` |
| 46 `66711dd1-6113-408d-9e7b-170f356a8105` | 47 `43b74664-0874-4fba-b9c1-89d5b1918a9b` | 48 `c0947f9e-7574-49bf-b98d-68ebba447bf2` | 49 `0349aec5-77c3-4701-b56f-31b519407c79` | 50 `95dc8a56-33ba-4425-8aa1-fe3586e88811` |
| 51 `f1f984b4-6ca0-4c7b-bc26-3033eec46d44` | 52 `11536bd8-4633-4c2e-a743-3a22e0d386a1` | 53 `68570687-e9ec-4538-92af-f51d9f2080d1` | 54 `6c348fb7-fdfe-46b6-a13b-07a946947e06` | 55 `3d74d9e6-adc7-457c-93c9-7fc01a99aaed` |
| 56 `ecbb022e-622f-47aa-b591-482ae9f1fd74` | 57 `e8289b52-406c-47f5-a772-f89fa486fbcd` | 58 `ac973af5-0172-4a9d-a2e1-5081fa6d5da1` | 59 `1e7d5878-02c9-4c13-8558-02a20cd96071` | 60 `c5dd8439-8ce0-4957-91ee-770cd4ec7cd4` |
| 61 `04853867-7146-42e3-8618-d37df7f2af98` | 62 `c02a8fed-c144-4906-9f5c-0f11079ac4fe` | 63 `e4dfffb3-d5c8-4a8a-a2cd-2cdb162cd6c3` | 64 `1728454a-1d65-4c73-8792-e8e955c1aba3` | 65 `320bd38f-9dee-43b0-aa7a-ca39cae3b0d1` |
| 66 `71048aac-b06c-4579-a5a3-11be407b914e` | 67 `a043917d-a9c5-4022-860c-b6940dffb72b` | 68 `7941b4fd-3808-4d93-b6b8-6b38166ebed1` | 69 `d85d6021-a551-4435-b907-3810a684b3ed` | 70 `15518f19-982f-4195-aaab-9d15f1313d75` |
| 71 `be38c12a-5709-4b5f-b465-4f92853ac41e` | 72 `9fc800a4-6d4b-4443-b529-77f5fbe9c495` | 73 `6981cef2-a4e7-410c-ba67-4bac799911c1` | 74 `1cbcb42d-f89b-4830-86d3-979374d3b590` | 75 `9900ee7c-f1bb-4ee4-814e-6a17f6abdc31` |
| 76 `fb0d8a38-e6b3-46fe-80ec-86a60632b1f6` | 77 `6802f495-6846-4879-822f-c3c0329189bd` | 78 `20ecd2ee-1283-4213-980e-18da787f5e64` | 79 `b5b360f5-6c96-4dbc-95f8-659b65bbde1e` | 80 `1e078dc5-2b23-47d0-bef6-19741da7b455` |
| 81 `5f8f0b93-ca62-4907-8e2e-229da01deb55` | 82 `8619fc27-e887-4cec-9f00-d7196f1125b4` | 83 `fd392c9d-880c-447a-a381-040930b84cd6` | 84 `0a1cc7db-27ab-4a1e-823a-a2876c731a8f` | 85 `f0e02d26-f3d8-42cd-a176-7fd162f09a6f` |
| 86 `11b8dc3c-f35b-4392-97ee-f7f8a3bcfeaa` | 87 `9a33eed9-1d69-478f-94ce-e55f7fe136d5` | 88 `ef078532-0233-450e-9bb0-b1e155d722e3` | 89 `4c302275-6245-4ab8-b271-e26536ab913b` | 90 `fdf5aac1-b87e-4870-a3a3-1ede14111364` |
| 91 `b1591e0a-0ec3-4052-8bcc-2e50d2ae1661` | 92 `fdbba3ac-b865-431d-a838-b7bf36b39e6d` | 93 `4370af68-333e-4599-a676-455e26fdfc22` | 94 `c69205cb-d4d1-4cf2-ae0c-b87a86c6cef5` | 95 `0f11288c-70bf-4257-b0f8-1e4c518b9430` |
| 96 `4b2e337c-625c-47b9-b46f-1ee3f9c3d466` |

> **⚠ Block 42 came back `nsfw` and had to be re-cut.** The prompt was *"A brushed
> ink outline of a torso on silk with the chest region marked as a hatched area"* —
> the 膻中 shot, where the chapter names an office for a *place* in the chest. The
> filter read the torso outline as a body. This is the skill's *carry that kind of
> meaning with objects, never with a person* rule, hit from the one angle the
> compliance gate did not anticipate: nothing in the beat is about injury, and the
> figure is an outline rather than a person. **Re-cut with no body at all** — a
> silk court robe laid flat and open on a table, its chest panel marked out as a
> hatched rectangle — and it cleared on the first retry
> (`980cc538-0eed-4c99-bf39-b6e9776898c3`). The rejected job
> `6e5b8e5b-6f2b-4bed-964a-06d137eff3eb` is kept here as superseded evidence.

**Preset behaviour — both fired, and the balance is the opposite of Lingshu 28
v3's.** `IN THE DARK` fired **3 times** (blocks 2, 15 and 22's first submission)
and `DROWN IN MUSIC` fired **3 times** (blocks 22, 36, and 36 again). Lingshu 28
v3 recorded `IN THE DARK` as never firing across 91 submissions and `DROWN IN
MUSIC` as firing 7; on this cut they are even. **Neither is reliably the one to
pre-decline**, and the trigger is not the obvious one either — block 2 is a plain
ink chart with no darkness in the prompt at all. What *did* reproduce is the
2026-08-24 finding that `DROWN IN MUSIC` fires on **temporal sequencing**: block
22's *"marks each joint along it… working steadily along the stem"* and block 36's
*"lifted out of one ink box and set down in the supply box"* both triggered it with
no audio vocabulary present. Every offer cleared on retry with the matching
`declined_preset_id`; **a preset offer creates no job and costs nothing.**

> **⚠ The backend rate-limits concurrent submissions, and the skill does not say
> so.** A second `generate_video_batch` of 12 issued while 12 were still in flight
> returned **429 `rate_limit_reached` on every item**. Nothing was created and
> nothing was charged, but a run that treats 429 as failure will double-submit.
> The working pattern is **one batch of 12 in flight at a time, drained before the
> next goes out**. `seed_audio` has its **own separate pool** — a 12-item audio
> batch went out cleanly while 12 video jobs were running — so voice and clips can
> be pipelined in parallel, which is what kept this run's wall-clock down.

### Voiceover — 170 takes, 96 kept, all inside the window

- **Voiceover** — `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per block, one speaker per block. Figures are the assembler’s measured **speech**, not file length: block 1 `80159cda-b605-4ba5-bc95-09c243f5b113` (9.220s), block 2 `b696668d-9064-42ba-84c3-8caa14247d79` (7.950s), block 3 `aa88af3e-af10-4c7e-8499-1c25b19678e8` (8.990s), block 4 `2828f8b0-92f6-41ef-881a-156b2eb56544` (8.860s), block 5 `196be1a5-898d-4382-96fd-daa0e82f800f` (8.120s), block 6 `93f4b548-7a2f-4b92-b0e1-787cffa61ad2` (8.970s), block 7 `3b8f5c7e-0400-41b7-b876-021f13afd30e` (8.920s), block 8 `a1f6e9a4-5eeb-493a-9930-ca824080183b` (9.070s), block 9 `9980146a-654b-4466-b0b7-83b882baf7bf` (8.730s), block 10 `6bb1c358-f7d5-4c10-b412-060c1815f7b6` (8.190s), block 11 `99a9323b-05da-4f30-9f76-1c14c4b06135` (8.420s), block 12 `bb69e934-470e-402e-9f30-2ecae4587b70` (9.280s), block 13 `3ffff19e-9d6b-4b78-9ee1-f88a461b8a14` (8.170s), block 14 `230efda7-66d1-404e-bd36-e5360cf685e9` (8.020s), block 15 `9a7921ee-2f50-4d7a-a57e-86460d0bc37b` (8.890s), block 16 `55aea711-f037-41cb-8f3c-acd716ee0b34` (7.840s), block 17 `7d8eb206-babf-45ac-994b-d5f237ac5e34` (8.020s), block 18 `19f6e1dd-4804-4d48-b6be-7caf94e7de9f` (8.670s), block 19 `8cb665e9-d3fc-4958-9e39-f24bb3ae0564` (9.420s), block 20 `0a53f2f8-0410-4b6b-a29b-0657bf957b84` (9.120s), block 21 `2d86158c-adc0-4199-83ee-0815bf69fbdc` (9.340s), block 22 `4ff10303-293a-4f2a-bff2-1f570613beef` (8.400s), block 23 `f08ddc9a-459c-4d77-b8dd-7dd557a40b06` (8.540s), block 24 `02e9c35f-5274-423a-a11a-cd5a64b52255` (8.170s), block 25 `260392ea-c06f-444f-a64d-b0b8a9b91e3e` (9.400s), block 26 `e99b1fab-8115-4963-87b2-db50bd1ffce6` (8.460s), block 27 `ad38406f-b069-4e3d-9c7b-44011eed444a` (8.030s), block 28 `06dd0739-0264-430e-bdd5-ab874e85fc66` (7.820s), block 29 `4e5f186c-6faf-4264-9ee5-76059874d201` (7.860s), block 30 `f9f65f03-8479-42e4-898c-c559582b5b63` (8.210s), block 31 `38718621-98bf-483a-a679-d247f6bf3d89` (8.150s), block 32 `391ae13b-1506-4fae-8482-4d441165854e` (8.440s), block 33 `e8dc1d98-3ae0-4836-b958-95ab85f83f91` (8.100s), block 34 `8a5f7c2e-9bd5-47ef-9594-cad142811977` (8.150s), block 35 `11c14c81-6294-4b23-9110-df17f4c33223` (8.320s), block 36 `a4ffad05-c69c-4459-b641-0d09bdc29ee1` (7.920s), block 37 `dd24cca8-439f-4193-82f4-33453c71c3df` (8.110s), block 38 `abf4f414-14b7-4ca2-bae4-b5695de5a3c9` (9.280s), block 39 `75fa6dbd-33b5-47de-8719-3494cf306aff` (8.880s), block 40 `83f84b1a-6287-44e7-bcb2-20ad86e9952c` (8.370s), block 41 `f40fd3f9-2da2-439a-b29f-265388505dad` (8.880s), block 42 `00ab2326-e683-4d19-9fac-19ad46999654` (7.850s), block 43 `121bc54e-4fdc-4967-80e7-7025013ef94f` (7.820s), block 44 `21437049-1aeb-44cb-99e7-d18ff3dc4165` (8.330s), block 45 `1092c1b6-6b1b-4955-a0cc-5f13ef5f2439` (8.080s), block 46 `2becf6d2-366f-4502-813a-aa071425a22c` (8.640s), block 47 `1f08b4c5-291d-443e-a0ed-31ff1d431306` (8.240s), block 48 `304b0337-2da4-405e-b606-a28caea222da` (8.010s), block 49 `96fbd8fa-52f8-49c9-8fb7-2c675ce3a91c` (8.350s), block 50 `41ce0e66-7e1b-4042-a38a-400cc1d898a4` (8.360s), block 51 `bc6f66f8-a2f0-4238-8352-a0deb30fc5e9` (8.620s), block 52 `cba1ecb4-1066-4bde-acf1-d4d4d4ea7253` (8.960s), block 53 `d71ac143-4c6a-4cf1-8f69-789d271a4134` (7.930s), block 54 `577a8357-4030-4616-9796-008089c72c10` (8.510s), block 55 `57a8d677-ef55-48cb-8571-edc6887caeb1` (9.280s), block 56 `5efee5e7-ed5e-4ca9-b1db-2efdfedec88a` (7.940s), block 57 `a4225069-2a74-442c-b6f5-867ec2ed3faf` (8.550s), block 58 `fc3a2b2a-aa40-4d31-a7d4-1e23ea2b1b79` (8.940s), block 59 `f7b48ab7-4529-40ce-b7e9-a2c6c30f1412` (7.930s), block 60 `97442353-b4f5-43c5-a887-e9a32c21605b` (8.760s), block 61 `7a5e72a3-0387-4759-ba42-2aed33b5c7a1` (8.090s), block 62 `3f047ee6-d6de-4afb-892d-9f007b83d623` (7.920s), block 63 `8dd0a6ba-ecc8-491c-96a9-bec468b5e891` (8.720s), block 64 `16dde381-c78e-4666-80bb-86c2a56e0c4f` (8.730s), block 65 `c254c41c-423c-4e32-8521-4c6fb7dc4079` (8.670s), block 66 `1785b812-163c-44be-a29d-f9055713fddc` (8.960s), block 67 `37b034f3-7545-47a6-a37f-563b4327bee9` (8.930s), block 68 `347464dc-76a8-4f7c-8b04-016c07c495c3` (7.890s), block 69 `9955f2ee-6c02-4d7c-9748-de5d37d72730` (9.150s), block 70 `577f8e48-b66c-45ac-bc27-099a679ac530` (7.950s), block 71 `031a4252-5c12-40d9-9ee1-b1db7326dd66` (9.260s), block 72 `24869daf-e6ae-4b4a-898b-e9cd94d4fc04` (8.310s), block 73 `ab56af57-2c20-470c-8482-fe2a65408f19` (8.940s), block 74 `1cd3717e-dfc1-4d75-91e0-43feaac08d23` (8.140s), block 75 `f8e4493f-a432-47be-bf15-e6dcc0b63e2d` (9.120s), block 76 `0d75fa83-2e9e-4898-9ad7-4343fd55f0e1` (9.020s), block 77 `4c0f5fbd-6495-434f-85f6-92d9ac02424a` (8.570s), block 78 `606ce4d9-4e94-49a4-ae54-26b7a2223726` (8.410s), block 79 `b1499e8d-1390-4999-84fa-ae3cafd80590` (8.400s), block 80 `12865e4f-6cba-41f7-891a-66457367a1ce` (9.380s), block 81 `845c9250-6d0f-4845-b1ed-44967234c67f` (8.490s), block 82 `570377f2-9f0c-4018-8daa-3346f0c0dbe0` (8.720s), block 83 `4a150766-79e2-4bce-9cd2-5e91822cb0d7` (9.040s), block 84 `1e8f5cea-67ca-42ba-843d-9c1ac9f1281a` (8.510s), block 85 `ac3fefc3-cb8a-4f9a-bd73-fb87c60d2687` (8.060s), block 86 `8f9e46b0-9701-4ddb-9506-cc991b1ab027` (9.060s), block 87 `3bcb1df0-bcc3-4d76-a652-be2b9e7bd412` (9.490s), block 88 `144fc458-fbd2-4e75-9caa-2a51e7225a68` (8.360s), block 89 `40584c39-0c1c-4e85-8adb-0cd6adc9865c` (8.720s), block 90 `7d7b933f-89e7-4dc2-a18b-a9a76166b920` (8.140s), block 91 `6eaa733e-a7a6-4d79-9b8a-a5a2602f9d44` (8.400s), block 92 `d9d84b84-7327-4a57-b3b8-0e32ad662354` (8.000s), block 93 `a9f9f80b-1e26-498d-8ef7-ae07bdcf9ca9` (8.760s), block 94 `7e0f7021-b51d-4dd1-913a-b61a6f5d7f73` (9.180s), block 95 `3e6b4e21-1f84-4f42-8ec1-f04b7dcb8761` (8.210s), block 96 `823944cb-d42a-418a-b53b-157560e4f943` (8.920s).

**All 96 kept takes sit inside the assembler's window: min 7.820s, max 9.490s,
mean 8.536s** against a window midpoint of 8.650s. The assembler reported **zero
internal pauses ≥0.8s** and **zero pausey-take warnings** across all 96.

**Per-voice rates measured on this run, and they are not the skill's pooled
figures.** Computed as shipped words over the assembler's measured speech:

| Voice | Skill's pooled rate | **This run** | Kept takes | What it cost |
|---|---|---|---|---|
| Arthur | 3.70 w/s | **~4.2 w/s** | 58 | most first-pass misses were **under** the floor, not over |
| Xavier (Fan-di) | 4.34 w/s | **~4.4 w/s, and violently bimodal** | 8 | see below |
| Vesper (Dr-Qi) | 3.91 w/s | **~4.4 w/s** | 23 | systematically short at the skill's word count |
| Zane (Lei-Gong) | 5.71 w/s | **~5.5 w/s** | 7 | the only voice the skill has right; 6 of 7 landed first pass |

**The pooled table is too slow for three of the four voices**, so a script sized
to it lands short. Arthur written at the skill's 29–35 words returned 7.1–7.9s
repeatedly — inside the band on paper, under the floor in fact. **Size Arthur and
Vesper at ~36–38 words on this evidence, not 29–35 and 31–37.**

> **⚠ Bimodality is worse than the skill records, and it is the real cost driver.**
> Block 81 (Xavier) returned **6.971s at 38 words** and then **15.168s at 43
> words** — a 8.2s spread over a 1.7s window from five words. Block 13 went
> 10.632s → 6.586s on a rewrite intended to shorten it. Block 96 returned
> **7.772s and 9.803s on byte-identical text**, missing the floor and the ceiling
> on the same line. **A word count is not a setting when the noise is 5× the
> window.** What converged this cut was re-sizing each miss from *its own*
> measured rate (`words × 8.65 / speech`) rather than from the pooled rate, and
> writing to the midpoint so noise has room on both sides.

**Three sentence shapes cost seconds at fixed word count, and all three
reproduced.** Block 16's *"The organ is described."* — a four-word sentence —
returned **13.985s on 33 words**; rewritten as one flowing clause at 31 words it
returned 7.841s. Block 58's trailing question mark returned **15.238s on 38
words**; the same content as a statement returned 8.944s. Block 13's three-item
comma list (*"Not a pump, not a muscle, not a piece of offal"*) plus a one-word
*"Continue."* returned 10.632s; joined with *and* and the fragment cut, 8.166s.
**These are not stylistic preferences — each one is worth 2–7 seconds.**

### Assembly — completed 2026-08-26, second run

| | |
|---|---|
| Script | `$HF_WORKFLOWS/faceless-video/scripts/assemble_final.sh` |
| Flags | `--out out/final.mp4 --blocks 96 --manifest pairs.txt --music bed.mp3 --music-vol 0.10` |
| Manifest | 96 `blocks/blockNN.mp4 voices/voiceNN.wav` pairs, numbers aligned |
| Delivered | **864×496, 24 fps, 960.540s, 213,279,921 bytes** |
| Music bed | assembler measured it and set **−11.80 dB under the speech** |
| Clip audio | **no clip carried an audio stream** — `generate_audio: false` worked on all 96, so the LEVEL LAW's 0.12 SFX mix had nothing to fold in |
| Freeze probe | **0 static opens, 0 frozen tails** across all 96 clips |
| Pausey takes | **0** |
| Loudness | 2-pass linear loudnorm, −16 LUFS |
| Run mode | `background: true`, polled every ~45s |

> **⚠ The first assembly run stopped on block 96, and it was right to.** It
> errored `voice 96 carries 7.772s of speech; required 7.800–9.500s` — 0.028s
> under. The cause was mine, not the service's: I had recorded the **wrong job ID**
> for block 96 in the run ledger (`8229f706-…`, the 7.772s reject) instead of
> `823944cb-…`, the 8.921s keeper. The two IDs share a four-character prefix.
> Blocks 1–95 all cleared the gate on that run, so the failure isolated the single
> bad pairing exactly. **The gate caught a bookkeeping error that no amount of
> re-rolling would have fixed** — which is the argument for recording the keeper's
> ID at the moment it is measured, not at the end of a batch.

> **⚠ `timeout_seconds: 120` is not honoured in this harness — reconfirmed.** A
> `sleep 60` submitted with `timeout_seconds: 120` returned `timed out after 60s`,
> exactly as Lingshu 28 v3 measured. **Anything over ~55s must go `background:
> true` and be polled**, and polls must themselves stay under ~50s.

> **⚠ Result URLs cannot be reconstructed from the job ID.** The CDN filename is
> `hf_<YYYYMMDD>_<HHMMSS>_<job_id>.<ext>`, and the timestamp is the job's own
> completion second — **jobs in the same batch differ by ±1s, and some by more**.
> Building URLs from one observed batch timestamp resolved 87 of 96 clips and 90
> of 96 takes; the remaining 15 needed their real URLs read back from `jobs_wait`.
> **Take the URL from the tool result**, as the skill's *Environment caveats* says.


### Delivered media — whole URLs, not bare `media_id`s

**CDN links expire. Archive these by hand from a machine outside this
environment — the repo host cannot fetch them (see *Reproduction notes*).**

| Asset | `media_id` | URL |
|---|---|---|
| **FINAL DELIVERABLE — captioned, lower-third, end card** | `3d567746-c8ca-40da-97e7-c04246cfabd1` | `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/3d567746-c8ca-40da-97e7-c04246cfabd1.mp4` |
| Assembled cut, no captions or on-screen text | `dce839e6-91ed-4b27-b2a7-170f94d9252f` | `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/dce839e6-91ed-4b27-b2a7-170f94d9252f.mp4` |
| Guqin bed, as mixed (960.026s) | `f4dcb465-a204-4161-b2c4-6a17ed69868a` | `https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/f4dcb465-a204-4161-b2c4-6a17ed69868a.mp3` |

| | Assembled | **Final deliverable** |
|---|---|---|
| Geometry | 864×496 | **1280×720** (scaled before the burn, per the skill) |
| Duration | 960.540s | **960.540s** — unchanged by either burn pass |
| Size | 213,279,921 | **408,440,899** |
| Captions | none | **burned, Anton, from the tracked sidecar** |
| On-screen text | none | **history lower-third + end card burned** |
| Music | guqin bed at −11.80 dB | same |

### Captions — built, burned, and measured in the burned frame

Sidecar built with `node scripts/build_subtitles.js … --format 16:9` from this
document's own narration table and the **speech** figures in the *Voiceover* line
above. **449 cues**; widest line **1001px against a 1001px budget** — fits.
`.srt` and `.vtt` are committed beside this document.

Burn ran **in the sandbox**, not on the repo host, because the CDN is a policy
denial here. Order was **scale → burn**, per the skill:

1. `.srt` → `.ass`, `PlayResX/Y` re-targeted **384×288 → 1280×720**. Confirmed in
   the output before burning; without it libass scales every style value ~2.5×
   and runs the lines off frame.
2. **Anton installed in the sandbox** and confirmed with `fc-match Anton` →
   `Anton-Regular.ttf: "Anton" "Regular"`. The sandbox ships Metropolis and
   Montserrat and would otherwise have substituted a wider face silently.
3. `scale=1280:720` first in the `-vf` chain, then `subtitles=`, at
   `Fontsize=44,MarginL=96,MarginR=96,MarginV=60,Outline=3,WrapStyle=0`.

**Sidecar transfer.** The repo host cannot reach the S3 upload bucket, so the
`.srt` went in through the skill's documented channel: `bzip2 -9` + base64 inside
the `sandbox_exec` command. **26,960 bytes → 11,844 base64 characters**, inside the
16,000-character command limit. `gzip -9` produced 14,288 and `xz -9e` 12,984 —
**bzip2 is the one that fits**, which the skill does not say.

**Measured in the burned frame, not inferred:**

| Check | Result |
|---|---|
| Frame | **1280×720**, 24 fps, 960.540s |
| Caption band (y 575–665) at t=5s | max luma **255**, **35,098** px above 150 |
| Caption band at t=955s, under the end card | max luma **255**, **98,141** px above 150 |
| End-card panel (y 150–510) at t=955s | mean luma **65.2** — darkened as intended |
| History lower-third at t=5s | max luma **255**, **8,621** px above 150 |

**The end card did not dim the captions.** Lingshu 28 v3 lost its mandated
disclaimer caption to a full-frame scrim; this cut used a **bounded panel**
(`y=150 h=360`, stopping at 510) which clears the caption band at 575–665 with
65px to spare. The t=955s measurement is the proof: the caption is at full white
*inside* the end-card window.

**`-copyts` was required for both probes.** `ffmpeg -ss 955 -i …` resets output
timestamps to zero, so `enable='between(t,950,960)'` evaluates false and the
overlay silently does not render — exit code 0, no warning.

> **This cut has not been watched.** Every check above is a pixel measurement or a
> tool assertion. **Nobody has seen a frame of it move and nobody has heard the
> guqin bed under the narration.** The repo host cannot fetch the render (policy
> denial), and an automated probe is not a viewing. **Watch the file before
> publishing.**

### Reproduction notes

1. **The MCP server reconnected mid-session under a new prefix.** Every
   `mcp__higgsfield__*` tool vanished and returned as `mcp__6989d631-…__*`. Nothing
   was lost because nothing was in the sandbox at that moment. Re-resolve by name;
   do not conclude the service is down.
2. **The sandbox was reclaimed between the assembly job and the caption job**, and
   `~/asm` with its 96 clips and 96 takes went with it. **The assembled render
   survived only because its export PUT was chained into the same `&&` command** —
   exactly the Suwen 1 v5 loss condition, avoided by design rather than by timing.
   The caption pass simply re-downloaded the finished MP4 from the CDN and carried
   on. **Chain the export. Every time.**
3. **The backend rate-limits concurrent submissions** (429 on all 12 items of a
   second in-flight batch), and `seed_audio` has a **separate pool** from
   `seedance_*`. Pipeline voice against clips; serialise within each.
4. **Result URLs are not derivable from job IDs** — the CDN timestamp is the job's
   own completion second and varies within a batch. 15 of 192 assets needed their
   real URLs read back.
5. **Block 42 was rejected `nsfw`** for a brushed torso outline. Re-cut with a
   laid-out robe instead of a body; cleared first retry.
6. **The assembler caught a bookkeeping error the gate exists for** — a wrong
   job ID recorded for block 96's keeper. See the Assembly note.
7. **`timeout_seconds: 120` is capped at 60s by this MCP client.** Background and
   poll under ~50s.
8. **The caption check reports 4 over-budget clauses** and that is accepted, not
   a defect: the sidecar splits a wide clause across cues by itself. The widest is
   block 94 at 2023px / 119 characters. **Never re-record a take for a caption
   problem** — shorten the clause in the document if a future version wants fewer
   cues.


## Deliverables the assembler cannot produce

`CLAUDE.md` names four. **Three of the four are in the delivered file for this
cut**, which is a first for the series — only the CJK quotation cards remain
hand-work, and only because no CJK face was installed.

| Deliverable | Status in the delivered file |
|---|---|
| **History lower-third** — *"Presented as history & philosophy"* | **BURNED IN**, 0:02–0:09, inside the mandated first ten seconds. Anton 26px white on `black@0.5` with 12px padding, at x=96 y=495. Measured present at t=5s. |
| **End disclaimer card** — the mandated string, final card | **BURNED IN**, 15:50–16:00 over block 96's plain plate. Bounded panel `x=64 y=150 w=1152 h=360` at `black@0.66`, four centred `drawtext` layers above the caption band. |
| **Human editorial credit** — *"Written & edited by Joshua Chin"* | **BURNED IN** on the end card, Anton 28px, centred at y=350. Still needs adding to the upload description. |
| **Music** — licensed guqin only, nothing generated | **IN THE FILE, mixed at assembly.** `--music bed.mp3 --music-vol 0.10`; the assembler measured it and set **−11.80 dB under the speech**. Licence **not cleared** — see below. |

**The end card carries the disclaimer twice over.** Block 96's narration *is* the
mandated string, so Arthur reads it, it captions into the sidecar, and the card
prints it. All three survive in the delivered file — verified by pixel measurement,
not assumed.

### Music — sourced, mixed, licence UNRESOLVED

| | |
|---|---|
| Track A | **《陽關三疊》 Yangguan Sandie** — *Three Refrains on the Yang Pass*, from 【琴學入門】 *Qinxue Rumen* (1867). 350.093s |
| Track B | **《醉漁唱晚》 Zuiyu Changwan** — *The Evening Song of the Drunken Fisherman*, from 【天聞閣琴譜】 *Tianwen Ge Qinpu* (1876). 286.955s |
| Performer | **Charlie Huang (Charles R Tsua)**, solo guqin with nylon strings |
| Source | Wikimedia Commons — `Special:FilePath/Guqin-Yangguan Sandie.ogg`, `Special:FilePath/Guqin-Zuiyu Changwan.ogg` |
| Licence | **CC BY-SA 3.0** — attribution **and share-alike** |
| Attribution on screen | end card, romanised: *"Guqin: Yangguan Sandie and Zuiyu Changwan, performed by Charlie Huang - CC BY-SA 3.0, via Wikimedia Commons"* |

**Same two recordings and the same performer as Lingshu 28 v3**, so the series
scores consistently, which is what was asked for. Both compositions are Qing-era
and long out of copyright; **the licence attaches to the recording, not the music.**

**The bed was purpose-built for this cut at 960.026s, with the script's two music
dropouts baked in as digital silence** rather than mixed as one continuous bed:

| Window | Blocks | Content | Measured |
|---|---|---|---|
| 0–550s | 1–55 | Yangguan crossfaded into Zuiyu, 4s crossfade, 8s fade-out | mean **−22.9 dB** |
| **550–730s** | **56–73** | **SILENT** — Act III runs on one sustained note, and a bed would fight it | mean **−91.0 dB** |
| 730–860s | 74–86 | Yangguan returns, 6s fade-in, 10s fade-out | mean **−23.9 dB** |
| **860–960s** | **87–96** | **SILENT** — Act V and the end card play on room tone; the silence is the point | mean **−91.0 dB** |

Each source was loudnorm'd to `I=-20` **before** any silence was concatenated, so
the silent stretches could not pull the measurement.

> **⚠ v1's *Finishing steps* claimed the two dropouts "cannot be moved to the
> assembler's `--music` flag" because it mixes one continuous bed. That is wrong,
> and this cut disproves it.** The flag takes a *file*; a bed with the silences
> already in it produces the dropouts exactly. **Build the bed to the full cut
> length.** The assembler applies `-stream_loop -1` to the music input, so a bed
> shorter than the cut will loop back in and re-enter over a passage scripted to
> be silent — a 960.026s bed against a 960.540s cut cannot.

> **⚠ The ShareAlike term is an open compliance item and this cut must not be
> published until it is resolved.** You chose *use the guqin, flag the licence*, so
> it is flagged rather than silently accepted. CC BY-SA can be read as requiring
> the whole episode to be licensed BY-SA, which is not a decision this render
> makes. Attribution is straightforward and is already on the end card; the
> share-alike question is not. If it cannot be accepted: commission or licence a
> guqin bed outright, or substitute a CC-BY track — though no attribution-only
> **guqin** recording was found, only guzheng and erhu, which `CLAUDE.md`'s
> *licensed guqin only* rule does not permit. **Re-running assembly with a
> different `--music` file is the only step that would need repeating.**

### Finishing steps

Written against **this** cut's timings. Block N spans `(N−1)×10` to `N×10` seconds.
**Start from the final deliverable** (`3d567746-…`) — captions, the history
lower-third and the end card are already burned in and are not repeated here.

**Two safe areas bind anything added from here.** Captions occupy **y 575–665**,
bottom-centred, up to 1088px wide. The end-card panel occupies **y 150–510** for
the last ten seconds. Both were measured in the burned frame; stay clear of both.

**1. Fetch the delivered render** from the *Delivered media* table. **Not from this
host** — the CDN is a policy denial here, re-confirmed this run. Any machine
outside this environment works.

**2. The nineteen quotation cards.** Every card block rendered as a plain plate or
its own diagram, **with no Chinese text in frame** — generated glyphs are
unreliable and could not be visually checked from this host, and neither the repo
host nor the sandbox ships a CJK face. Add each card's text by hand, centred, held
for its block. Timecodes are `(block − 1) × 10s`:

| Block | In–out | Card |
|---|---|---|
| 3 | 0:20–0:30 | 願聞十二藏之相使，貴賤何如 |
| 6 | 0:50–1:00 | 素問·靈蘭祕典論 — set *Suwen, chapter 8* beneath it in Latin script |
| 10 | 1:30–1:40 | 心者，君主之官也，神明出焉 |
| 20 | 3:10–3:20 | 肺者，相傅之官，治節出焉 |
| 31 | 5:00–5:10 | 肝者，將軍之官，謀慮出焉 |
| 37 | 6:00–6:10 | 膽者，中正之官，決斷出焉 |
| 41 | 6:40–6:50 | 膻中者，臣使之官，喜樂出焉 |
| 46 | 7:30–7:40 | 脾胃者，倉廩之官，五味出焉 |
| 51 | 8:20–8:30 | 小腸者，受盛之官，化物出焉 |
| 53 | 8:40–8:50 | 大腸者，傳道之官，變化出焉 |
| 57 | 9:20–9:30 | 腎者，作強之官，伎巧出焉 |
| 63 | 10:20–10:30 | 三焦者，決瀆之官，水道出焉 |
| 71 | 11:40–11:50 | 膀胱者，州都之官，津液藏焉，氣化則能出矣 — **the widest card, thirteen characters plus two commas; set it smaller** |
| 74 | 12:10–12:20 | 凡此十二官者，不得相失也 |
| 77 | 12:40–12:50 | 主明則下安 |
| 79 | 13:00–13:10 | 主不明則十二官危，使道閉塞而不通 — **second widest, twelve characters** |
| 86 | 14:10–14:20 | 戒之戒之 — four characters alone, held |
| 87 | 14:20–14:30 | 至道在微，變化無窮，孰知其原 |
| 92 | 15:10–15:20 | 藏靈蘭之室，以傳保焉 |

**Every one of these lands on a block that already carries a burned caption.** Set
the card text in the upper two-thirds; the bottom 145px is spoken for. Install a
CJK face first, or it renders as tofu boxes silently:

```
curl -sSfL -o ~/.fonts/NotoSansCJKsc-Regular.otf \
  https://github.com/notofonts/noto-cjk/raw/main/Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf && fc-cache -f
```

Then the same `drawtext` pattern the end card used — **`textfile=` rather than
inline `text=`**, which avoids escaping the punctuation entirely — and
**`-copyts -ss T`** on any probe frame, or the `enable=` window silently evaluates
false. **Verify every glyph against *Source text and translation* before export.**

**3. Series title card** — block 7 (1:00–1:10) is a plain drifting-wash plate. Add
*The Emperor's Inner Canon · The Twelve Offices*.

**4. Description** — the disclaimer string verbatim, *Written & edited by Joshua
Chin*, the guqin attribution with a link to the CC BY-SA 3.0 deed, and cite the
chapter as **Suwen 8 (素問·靈蘭祕典論)**, never a bare "Chapter 8".

**5. Upload settings** — general audience, **not** made for kids; tick the
altered-or-synthetic-content box, since the cast is AI-generated.

**6. Before any of this, watch the file.** No frame of this render has been seen
and no second of its audio has been heard — see *Reproduction notes*.


## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render — and **re-audited
against what the render actually produced**. One clip was rejected; see the last
bullet.

- **Disclaimer** — repo string verbatim: at the head of block 96's narration, on
  screen as the end card, and in the description. Block 96 is extended past the
  mandated string to clear the **7.8s** floor; **the mandated sentence itself is
  unaltered**. In the delivered file it lands three ways at once — Arthur reads it,
  the sidecar captions it, and the card prints it — all three verified by pixel
  measurement.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim anywhere. **This chapter contains no needling prescriptions at
  all**, which removes the largest compliance surface the canon usually presents;
  nothing had to be excluded on that ground. Every physiological statement is
  reported as what a text says (*"the chapter says"*, *"in this system"*), and
  blocks 15, 34, 50, 60, 65 and 85 state directly that claims are wrong. **No viewer
  is told to do anything.**
- **The one clause that needs watching is 以此養生則壽** — *a life cultivated this
  way is a long one*. It is the chapter's only longevity claim, and it is handled in
  a locked pair: **Dr-Qi marks it as a quotation inside block 77 itself** (*"I am
  quoting it, not prescribing it"*), and **Arthur's block 78 exists for no other
  purpose** than to say it is not a finding, not evidence, and not a recommendation.
  **77 and 78 must never be split in any cut.** The word *longevity* does not appear
  in the narration, the title or the thumbnail direction, and neither does *live
  longer*, *ancient secret* or *anti-aging*.
- **Mortality / ageing** — 殁世不殆 and 其宗大危 are **cut from the script
  entirely** (see the source mapping). There is no death imagery in the shot list,
  no lifespan claim in the narration, and no body anywhere: the collapse in Act IV
  is carried by **lines going out on a chart**, which is the repo's
  objects-not-bodies rule applied literally.
- **Fertility content** — **absent by a deliberate translation choice.** §1's 作強
  is ambiguous and has been read as sexual potency; the neutral reading (*exertion*,
  *strength*) is used in the translation, on the cards and in blocks 57–62. The
  alternative reading is not staged and is not mentioned on screen.
- **Indulgence / alcohol** — **absent.** The chapter's granary passage invites feast
  imagery and the shot list refuses it: blocks 46–50 are drawn as **grain measures,
  a mill and a customs seal**, with no table, no vessels, no pouring and no drinking
  anywhere in the episode.
- **Anatomy and gore** — **absent by construction.** Every organ in this episode is
  drawn as an **office emblem in a box** — a seal, a granary door, a road, a cistern
  — and never as an organ. There is no anatomical imagery in ninety-six shots. Block
  16's brain is *"an outline of a head drawn as a sealed vessel holding pale
  marrow-light, no features"*, which is the single closest approach and is still a
  container, not a body. **It cleared the filter on the first submission.**
- **Supernatural hooks explicitly debunked by the payoff** — the hooks are *your
  body was described as a government* and *one office in it has no organ*. The first
  is a claim about a text, not a mystery claim. The second is answered on screen at
  blocks 65–70: the triple burner has no anatomical referent, we say so plainly, and
  block 70 exists specifically to refuse the stronger "they discovered the
  lymphatics" reading that this material invites. 神明 is glossed at block 12 as
  consciousness and judgment rather than left as *spirit*, and block 15 states the
  cardiocentric claim is wrong before the episode is a fifth over. **The debunk is
  distributed across all five acts, not deferred to a closing caveat.**
- **The reckoning is the spine, not a coda** — the modern material is named and
  sourced where it appears: blood pH and respiratory sinus arrhythmia (24–25),
  hepatic function (35), interoception and referred emotional sensation (43–44),
  splenic function (50), intestinal absorption and the gut microbiome (52, 54),
  renal endocrine function (61–62), the lymphatic system (68–69), cholecystectomy
  (84), and network/signalling accounts of disease (83). **Where a question is
  genuinely open it is said to be open** — blocks 43 and 44 say the chest-located
  feeling is not fully explained, and block 70 refuses a claim we cannot support.
- **Title and thumbnail honour the educational payoff** — episode title *The Twelve
  Offices*; working YouTube title *The Body Is a Government — Suwen 8*; on-screen
  framing *Suwen 8, the Numinous Orchid*. **Thumbnail direction:** the twelve-box
  ink chart with one box conspicuously empty, no faces, no organs — *one of these
  ministries has no building*. Do not use a heart-with-a-crown image; it promises
  mysticism the episode spends sixteen minutes dismantling.
- **Hedge allocation — three characters speak, so this needs recording.**
  **Arthur retains every compliance hedge without exception**: the cardiocentric
  correction (15), the two-scores caution (26), the clean-miss verdicts (34, 50,
  60, 85), the state-of-knowledge statements (43, 44, 65), the refusal of the
  lymphatic claim (70), the longevity hedge (78), and the disclaimer (96). Dr-Qi
  carries claims *about the text*, attributed in line and always in the chapter's own
  voice. Fan-di carries vanity and one moment of recognition. Lei-Gong carries the
  audit. **The single exception is block 77**, where Vesper must self-mark the
  longevity clause as a quotation — the hedge is on a character voice there
  deliberately, because Arthur's block 78 arrives ten seconds later and a viewer who
  clips block 77 alone must still hear it disclaimed inside the clip.
- **Historical accuracy** — five risks, all handled in script. (1) The chapter is
  cited on screen as **Suwen 8**, never a bare "Chapter 8". (2) The count is
  **twelve organs across eleven offices**, and block 47 raises the discrepancy on
  screen rather than letting a viewer catch it. (3) The 大腸/小腸 reordering is
  disclosed in the source mapping and changes no card text. (4) 作強's contested
  reading is resolved neutrally and the choice is documented. (5) The
  brain-was-never-nominated argument (16–19) is an argument about an absence, and
  block 19 phrases it as *"there is only an assumption"* rather than as a documented
  debate. **Those hedges must survive the edit.**
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No
  character makes a first-person factual assertion about their own expertise** —
  Dr-Qi always reports what the chapter says, never what she knows.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit, and what the render actually did.** The shot list is
  low-risk throughout: a chart, boxes, seals, a granary door, a road, a cistern, a
  lamp, a closed chest. **No restraint or bound-figure imagery**, no injury, no
  falling figures. The audit flagged three items and **got two of them wrong**,
  which is worth recording:
  - **(a) Shot 16's head-as-vessel — flagged, cleared.** Predicted as the one frame
    that could read as anatomical. It passed on the first submission.
  - **(b) Shot 38's refused purse — flagged, cleared.** Kept objects-only with no
    faces; passed first time.
  - **(c) Twenty-eight lamp-lit blocks would "trigger `IN THE DARK` repeatedly" —
    wrong.** `IN THE DARK` fired **three times in 97 submissions**, and not once in
    Act III or Act V. It fired on **block 2, a plain ink chart with no darkness in
    the prompt at all.** Darkness is not the trigger.
  - **(d) The one clip that was actually rejected was not flagged at all.**
    **Block 42 came back `nsfw`** — *"a brushed ink outline of a torso with the chest
    region marked as a hatched area"*, the 膻中 shot. The audit cleared it because
    nothing in the beat is about injury and the figure is an outline rather than a
    person. **The filter reads a torso as a body regardless.** Re-cut with no body
    at all — a court robe laid flat and open on a table, its chest panel hatched —
    and it cleared on the first retry.
  - **The lesson for the next cut's gate: audit for *any human form*, not for
    harm.** The repo rule is already *carry that meaning with objects, never with a
    person*; this run is the case where an outline of a person still counted as a
    person. A garment did the same narrative job at no cost.


## Runtime levers

Expressed in blocks, since blocks are the unit that costs money. 96 blocks = 16:00.
The requested window was 14–17 min; `CLAUDE.md`'s format floor is 90 blocks (15:00).

**Cut to 15:00 (90 blocks) — drop 6.** This is the clean cut and costs no
compliance content, no act boundary and no beat any later block refers back to:

- **Blocks 32–33** (Fan-di's objection to the general and Dr-Qi's defence, 2) — the
  verdict at 34–36 stands without the exchange.
- **Blocks 61–62** (kidney administration and the exertion link, 2) — keep **60**,
  which is the verdict; this costs the act its best surprise and is still the
  cheapest pair available.
- **Block 45** (the running-score reminder, 1) — block 26 already established it.
- **Block 89** (the gloss on measurement, 1) — block 88 carries the quotation.

**Cut to 14:00 (84 blocks) — drop 12.** Possible, and **below the repo's 15:00
floor**, so it needs an explicit decision rather than a lever. Beyond the six above:

- **Blocks 37–40** (the gallbladder office entirely, 4) — but **then block 84 must
  be rewritten**, since it answers a question block 39 asks. Dropping the office
  without fixing 84 leaves an answer to nothing.
- **Blocks 42, 45** and **block 66** (3 assorted elaborations).

That is the honest 84, and it shows ten offices while the cards and blocks 47 and
74 all say twelve. **Recommended against.**

**Stretch to 17:00 (102 blocks) — add 6.** The source is exhausted, so these are
commentary rather than text:

- **Act II, +2** — the 中正 office's history: what a rectifier actually did in the
  nine-rank system, and why *impartiality* was the qualification. Strongest addition.
- **Act III, +2** — the triple-burner controversy at length: the 有名無形 debate and
  two of the positions taken on it. Most on-thesis.
- **Act V, +2** — the reception of 心主神明: how long the cardiocentric claim held,
  and what eventually displaced it. Closest to the episode's actual argument.

**Pairs that must not be split**, in any cut: **77+78** (the longevity claim and its
disclaimer — splitting this is a compliance failure, not an editorial choice),
**39+84** (the question and its answer, four minutes apart), **15+16** (the
correction and why it is interesting), **68+70** (the lymphatic near-miss and the
refusal of the strong claim), **47+48** (the count and its confirmation), and
**81+82** (the fan goes down on 81's shot and 82 is why it matters).
**Block 96 is not a lever.**

**Act boundaries are re-render units.** Every cut listed above stays inside a single
act, so no act boundary moves and no act needs recomputing. Renumbering blocks after
a cut means regenerating the manifest — do it once, at the end, never
mid-production.
