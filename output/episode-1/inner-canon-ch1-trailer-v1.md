# The Emperor's Inner Canon — Chapter 1 Trailer (80 seconds)

**上古天真论篇第一 · The First Sentence**

**Final video (720×1280, 9:16 vertical, 80s, MP4):** *pending — draft render not yet run*

An eighty-second vertical trailer for *Chapter 1 — "The First Sentence"*
(上古天真论 · Natural Purity of High Antiquity), re-cut from the Episode 01 source
script *"Chronicle of Balance — The First Sentence"* (see the review at
`inner-canon-ch1-trailer-script-review.md`). Eight 10-second blocks, stylized 2D
animation matching the Fan-di / Dr-Qi / Lei-Gong character art. Vertical 9:16 for
Shorts / Reels / TikTok.

**This is the first cut in which the characters speak.** Chapters 2–8 are
narrator-only; the cast was made permanent on 2026-08-01 and Chapter 1 is the
first cut to use it. It is also the first cut on **Arthur**, who replaces the
retired narrator used on chapters 2–8.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — `explainer_video` takes exactly one audio per block, so
every speaker change is its own block. The speaker is named in the beat column
rather than in a fourth column, because `build_subtitles.js` parses the narration
table as exactly three columns and a fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the opening | Two thousand years ago, the founding text of Chinese medicine opens on a boast — and the emperor himself is the one who makes it. |
| 2 | Fan-di (Xavier) — the claim | I have heard that the people of high antiquity all lived past a hundred years, and their movements never weakened — that the years did not wear them down as they wear us. |
| 3 | Lei-Gong (Zane) — the interruption | It's false. Not exaggerated — false. |
| 4 | Arthur (V.O.) — the correction | They did not. The people who wrote that sentence died younger than the ancestors they were praising. The golden age was already a memory that never happened. |
| 5 | Fan-di (Xavier) — the deflation | Then I have opened my own canon with a rumour. The first line of the book my physicians swear by, and it is only something that somebody once heard. |
| 6 | Dr-Qi (Vesper) — the reframe | It is not lying to you. It is persuading you. Those are not the same thing — and the physician's answer is narrower still: those among them who knew the Way. |
| 7 | Arthur (V.O.) — the withhold / title | So why did an entire civilisation copy that one sentence, faithfully, for two thousand years? The Emperor's Inner Canon. Chapter One — The First Sentence. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Voices are the permanent series cast (`CLAUDE.md`): Narrator **Arthur** at
`speech_rate` 55; Fan-di **Xavier**, Dr-Qi **Vesper** and Lei-Gong **Zane** at
`speech_rate` 55. All four `seed_audio` presets.

### Line lengths are written to measured rates, not to the ch2–8 word budget

Every line above is sized from a take measured on this cut (see *Voice
measurement* in the production record). The ~21–24 word budget in the skill
belongs to the retired narrator and does **not** transfer:

| Voice | Measured | 6–8s window | Written to |
|---|---|---|---|
| Arthur | 3.73 words/sec | 22–30 words | 24, 27, 24, 11 |
| Xavier | 4.55 words/sec | 27–36 words | 32, 29 |
| Vesper | 4.42 words/sec | 27–35 words | 30 |
| Zane | short-line only | — | 5 (deliberate) |

Arthur is **~21% faster than the retired narrator at the same `speech_rate`**
(23 words → 6.17s, against 23 words → 7.46s). Writing Chapter 1 to ch8's word
counts would have undershot every block by more than a second.

### Two blocks run deliberately short

Blocks 3 and 8 sit below the 6s floor on purpose, and the production record must
not read them as the ch8 dead-air mistake repeating:

- **Block 3 (2.6s)** — the interruption. A fixed 10s window centres a short take,
  which puts ~3.7s of silence on either side of *"It's false."* The source script
  asks for exactly that (*"Record-scratch. Then total silence."*), and here the
  block geometry produces it for free. Padding the line to 30 words to fill the
  window would destroy the beat it exists for.
- **Block 8 (2.9s)** — the end disclaimer card. Trailing silence on a final card
  is a fade-out, not a stall.

Everywhere else the 6–8s rule is enforced normally.

### Source-script mapping

The source script is 13 cues of 2–8s totalling 1:08, with sub-second beats the
assembler cannot express (record-scratch, cut-to-black on the last syllable, a
2-second title card). Re-cut to eight even 10s blocks:

| Source shot | Source timing | Trailer block |
|---|---|---|
| 1–2 — bell, ink, the quoted line | 0:00–0:13 | 1 + 2 |
| 3 — "most copied medical text" | 0:13–0:18 | 1, re-sourced to the house line |
| 4 — Fan-Di's question | 0:18–0:22 | folded into 2 |
| 5–6 — the interruption, "It's false" | 0:22–0:32 | 3 |
| 7 — the falling bar graphic | 0:32–0:38 | 4 |
| 8 — Fan-Di deflated | 0:38–0:44 | 5 |
| 9 — "It is persuading you" | 0:44–0:50 | 6, extended onto 其知道者 |
| 10 — montage | 0:50–0:56 | 7 |
| 11 — the withheld question | 0:56–1:02 | 7 |
| 12–13 — black, title card | 1:02–1:08 | 7 + 8 |

**Source corrections applied** (review §1.1 — the premise was aimed at a
misquotation):

- The quoted line **moves from Dr-Qi to Fan-di**. In Su Wen 1 it is Huangdi
  speaking to Qi Bo; giving it to the Qi Bo analogue inverted both the source and
  the cast sheet.
- **余聞 — "I have heard" — is restored** (block 2). The text flags its own opening
  claim as hearsay in the same breath, which is the actual reveal.
- **其知道者 — "those among them who knew the Way" — is restored** (block 6). Qi
  Bo's reply is conditional, not universal.
- The trailer therefore no longer claims *"the text is lying."* It claims the
  text's own first speaker is quoting a rumour — which is stronger, and true.
- *"The most copied medical text in East Asian history"* is **dropped** for the
  Blueprint's defensible house line; a superlative a commenter can contest
  (Shanghan Lun, Bencao Gangmu) is not worth the exposure.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi's
*jade* → **blue** cheongsam.

## Shot list

1. **The opening** — extreme close on a bamboo scroll unrolling in warm lamplight,
   brush characters resolving out of the grain. Slow push in. Ink-wash 2D, gold
   and bone-white. No figures yet. *History lower-third sits here.*
2. **The claim** — Fan-di at a low lacquer table, gold robe, fan **snapped open**
   (performing), reading aloud off the scroll with visible delight. Warm light,
   shallow depth. The fan is the tell: he is enjoying the boast, not examining it.
3. **The interruption** — hard cut. Lei-Gong mid-hop in cinnabar red, one fist
   pumped, spark motes around him, caught mid-word. Background drops to flat
   near-black; everything stills. Held long on the silence.
4. **The correction** — no people. A brush-drawn arc of lifespans falling away
   from a painted hundred-year line, rendered as ink strokes on paper rather than
   as a chart. Portraits, not bodies.
5. **The deflation** — Fan-di again, fan now **set down** flat on the table
   (sincerity). He is looking at the scroll differently. Light cooler.
6. **The reframe** — Dr-Qi, blue cheongsam, open bamboo scroll held casually like
   a tablet, entirely still. She does not lean in. The stiller she is, the more
   she is winning.
7. **The withhold / title** — the scroll splitting into a dozen scrolls of
   different ages fanning back into depth, the seven-and-eight arcs faint beneath
   them. Resolves to the series title card. Hard cut to black on the last syllable.
8. **Disclaimer card** — black plate with a faint ink-grain texture, nothing else.
   Card text is added at edit time.

**Motif note:** the draining-well image from the source script's montage is
**Chapter 2 material** (渴而穿井, 四气调神), not Chapter 1, and is not used here.
The seven-and-eight arcs are correctly Chapter 1.

## Production record (Higgsfield)

**Status: pre-render.** Voice measurement is complete; no clips, no assembly.

### Voice measurement — 2026-08-01

Seven takes, `seed_audio`, preset voices, ~0.6 credits each (**~4.2 credits**).
These establish the word budgets in the narration section.

| Voice | `speech_rate` | Words | Job ID | Duration |
|---|---|---|---|---|
| Arthur | 55 | 23 | `20616d99-a28f-430d-ba43-a76e8514d30e` | 6.170s |
| Xavier | 60 | 19 | `8317f708-9fc7-4eef-9cf0-182114a569db` | 4.118s |
| Xavier | 40 | 19 | `63882662-4911-4494-b839-92d40153a712` | 4.243s |
| Vesper | 60 | 16 | `a490d6b0-371b-4b63-b8e0-f6a9f5ffec16` | 3.783s |
| Vesper | 40 | 16 | `8a89dd0d-d252-42cc-863f-f0e182cfc904` | 3.463s |
| Zane | 60 | 5 | `ba2246d4-7d39-4b6d-9af4-15474adc9ab5` | 2.324s |
| Zane | 40 | 5 | `7460158a-f9ed-4516-91aa-7c130c184ca6` | 2.598s |

**`speech_rate` is not a duration lever on these voices.** Rate 40 against rate
60, identical text: Xavier +3%, Zane +12%, **Vesper −8%**. Vesper getting
*shorter* at the slower rate shows the spread is take-to-take variance, not a
rate response. The skill previously suggested tuning character rate to 60–65 to
fit dialogue in a block; that lever does not exist. **Word count and punctuation
are the only controls on take duration.** All four voices are therefore set to
`speech_rate` 55 for series consistency.

### Style key

**Pending.** Chains off the ch8 head `2cfd7596-2d93-4d14-aae4-448b3b9b9f51`,
swapping ch8's storehouses / rivers / wrist motif for the Chapter 1 motif — the
bamboo scroll splitting into scrolls of different ages, seven-and-eight arcs
beneath. Next entry in the lineage: group shot → ch2 → ch3 → ch5 → ch8 → **ch1**.

### Clips

**Pending.** `seedance_2_0_mini`, **Draft tier (480p)**, 10s per block, 9:16, one
clip per block, style key attached to each.

### Voiceover

**Pending** — per-block takes not yet generated. (Format for
`build_subtitles.js`: `- **Voiceover** (seed_audio): block 1 \`uuid\` (6.2s), …`)

### Assembly

**Pending.** `explainer_video`, 8 blocks, 720×1280, Anton subtitles.

### Credit spend

| Item | Credits |
|---|---|
| Voice measurement (7 takes, spent) | ~4.2 |
| Style key | 2 |
| 8 clips — Draft 480p | 80 |
| 8 voice takes | ~4.8 |
| Subtitles (0.05/voiced block) | 0.4 |
| Assembly | free |
| **Draft total** | **~91** |

Full-tier 720p upgrade, if taken later, is 8 × 25 = **200** additional; voice
takes survive the upgrade and are not re-paid. Balance at preflight:
**1,037.3 credits** (ultra plan). Live `get_cost` on `seedance_2_0_mini` at
10s / 9:16 returned **25 credits/clip** for the full tier, matching the skill's
table.

### Reproduction notes

- Aspect ratio is **9:16 only**. The source script specified a 16:9 master with a
  9:16 cut; that inverts the house rule and doubles the clip bill. A landscape
  version, if wanted, comes from `reframe` on the finished cut.
- The narration table must stay **three columns**. `build_subtitles.js` parses
  `| n | beat | line |` with a regex that admits no fourth column — a Speaker
  column would be captured into the caption text.
- No Chapter 1 longform exists in `output/` yet, so nothing in this trailer can be
  cut from an episode. Every clip is generated fresh from the style key.
- **The committed `.srt` / `.vtt` are provisional — do not burn them.** They were
  built before the voiceover existed, so `build_subtitles.js` assumed a full 10s
  for all eight blocks (it warns which blocks were estimated). Every cue start is
  therefore wrong: real takes centre inside their window, and blocks 3 and 8 are
  only 2.6s and 2.9s. **Re-run `node scripts/build_subtitles.js` once the
  per-block durations are in the voiceover line above**, and use that output.

## Deliverables the assembler cannot produce

Four manual steps at edit/upload time (`CLAUDE.md`); `explainer_video` has no
text-overlay parameter and generates no music.

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Sits on **shot 1**.
- **End disclaimer card** — *"A dramatized adaptation of a classical philosophical
  text. Not medical advice."* on screen over **block 8**, held long enough to
  read. Block 8 renders as a plain black plate; the text is added here.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  (block 8, beneath the disclaimer) **and** in the description.
- **Music** — licensed guqin only. The source script's bell, sub-bass and
  record-scratch are **not** used: each is a licensed asset with the same
  Content-ID exposure as a guqin recording, none can be produced by this pipeline,
  and substituting them is a series-wide scoring change rather than a per-cut
  choice. The script's *"silence is the instrument"* instinct survives in blocks 3
  and 8, where the block geometry supplies the silence for free.

## Compliance notes (YouTube)

- **Disclaimer** — repo string used verbatim, in the blockquote above, spoken in
  block 8, on screen as the end card, and in the description. The source script's
  alternative wording was not adopted: changing it in one cut silently
  desynchronises Ep 1 from four shipped cuts.
- **Mortality / aging** — the subject is people dying younger than advertised, and
  it is carried entirely by **objects and brush strokes**. Shot 4, the one death
  beat, is an ink arc on paper with no figures at all. Portraits, not bodies;
  reflective, not graphic.
- **Indulgence / alcohol** — not present in this cut.
- **Supernatural hook, explicitly debunked** — this trailer withholds its answer
  (*"So why did an entire civilisation copy that one sentence…"*), which at a
  glance resembles a mystery box. It is not one. The hook here **is** the debunk:
  the educational payoff — that the canon's own opening line is flagged as hearsay
  by its own speaker — is delivered on screen inside the trailer, in blocks 2, 5
  and 6. What is withheld is a historiographic question (*why keep copying it?*),
  not the answer to the claim. Titles and thumbnails must read as **objection**,
  not as ancient secret.
- **Health content stays philosophical** — no diagnosis, no treatment, no
  practice, no benefit claim anywhere in the eight blocks. The single empirical
  assertion is block 4's lifespan claim, which rests on Neolithic-vs-Han
  paleodemography and is stated as history, not as health guidance.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — run before generating, per `CLAUDE.md`.** Every shot
  prompt above was read against ch8's `nsfw` incident, where restraint and
  bound-figure imagery tripped the safety filter on otherwise fine subject matter.
  Nothing here goes near it: shot 3 is a figure mid-hop, shot 4 is brush strokes,
  shots 2/5/6 are seated figures at a table. **Assessed low risk; recorded as
  checked.** Re-run this audit on any prompt that changes before re-rendering.
- **Hedge allocation, first cut with speaking characters.** `SKILL.md` requires a
  cut that gives a character a line to say which hedge moved off the narrator.
  Here the flat contradiction (*"It's false"*) moves to **Lei-Gong**, block 3.
  Arthur retains every load-bearing claim: the factual correction (block 4) and
  the educational payoff and title (block 7). Dr-Qi's block 6 narrows rather than
  widens the claim. No compliance hedge is carried by a character voice.
- **Banned terms** — no *longevity*, *live to 100*, *ancient secret* or
  *anti-aging* in narration, title or thumbnail. **Open conflict:** the Blueprint's
  own Ch 1 hook is *"The 2,000-Year-Old Secret to Living Past 100"*, which trips
  the list twice. `docs/Emperors Inner Canon Series Blueprint.md` needs updating so
  the slate stops contradicting the rule.

## Runtime levers

**Cut to 0:60** — drop blocks 5 and 6. Runs 1 → 2 → 3 → 4 → 7 → 8. Loses Fan-di's
deflation and Dr-Qi's reframe, which costs the cut its two best lines and reduces
Dr-Qi to a non-speaking appearance again. Prefer the 0:40 cut over this one.

**Cut to 0:40** — blocks 1 → 2 → 3 → 7, plus 8. The retention cliff survives the
translation: *"It's false"* lands at **0:20** in the full cut and at **0:20** here
too, with the withhold immediately after. Tightest version that still contains
claim → contradiction → withhold.

**Stretch to 1:30** — add a block after 4 on the next sentence of the source
(時世異耶？人將失之耶？ — *"Is it that the times are different, or that people have
lost it?"*), which is the emperor doubting his own quoted line, and a block after
6 on the seven-and-eight cycles. Both are Chapter 1 material and neither needs a
new character voice.

**Block 8 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement on every cut and cannot be dropped to hit a runtime.
