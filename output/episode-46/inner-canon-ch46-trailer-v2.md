# The Emperor's Inner Canon — Chapter 46 Trailer v2 (80 seconds)

**灵枢·营卫生会第十八 · The Night Watch**

**Framing:** history of ideas. Not health content.

**Draft render (480×854, 9:16 vertical, 80s, MP4):** *not run — pre-render.*
**Final render (720×1280):** *not run.*

An eighty-second vertical trailer for *"The Night Watch"* (营卫生会 · *Meeting of
Nutritive & Defensive Qi*). Eight 10-second blocks, stylized 2D animation matching
the Fan-di / Dr-Qi / Lei-Gong character art. Vertical 9:16 for Shorts / Reels /
TikTok.

> **Why v2 exists, and how it differs from v1.**
> `inner-canon-ch46-trailer-v1.md` was re-cut from a submitted source script
> before any episode existed, so it had to carry the chapter's *argument* on its
> own — question, mechanism, payoff. **A longform now exists**
> (`inner-canon-ch46-longform-v1.md`), and v2 is cut from it. That changes what a
> trailer is for: it no longer has to teach the chapter, so it sells the
> episode's **drama** instead of its syllabus. The spine is Fan-di's reveal —
> *"I am twenty-nine"* — which v1 did not have because the character did not
> exist yet. **v1 is not superseded and is not rewritten;** it remains the
> standalone cut for placements with no episode behind them.

> **Chapter numbering.** This is **Ling Shu 18**. "Chapter 46" is the series slate
> index only, and the spoken title carries no number. Ling Shu 11 is 经别, a
> different chapter. See `lingshu-18-yingwei-shenghui-translation.md`.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — `explainer_video` takes exactly one audio per block, so
every speaker change is its own block. The speaker is named in the beat column
rather than in a fourth column, because `build_subtitles.js` parses the narration
table as exactly three columns and a fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hour | There is an hour, most nights, when nearly everyone you have ever met is unconscious at the same time. Two thousand years ago, somebody wrote down why. |
| 2 | Arthur (V.O.) — the question | The same text asks why the old lie awake through that hour. And why the young, lying in the same house, sleep straight through it. |
| 3 | Fan-di (Xavier) — the deflection | A question of natural philosophy, physician. Nothing more. If a man's count were off. If he were awake at the hour when the ten thousand lie down. What would that mean? |
| 4 | Dr-Qi (Vesper) — the mechanism | In the young the roads are open, and the count keeps its schedule. In the old the roads run rough. The nutritive thins, and the guard turns and attacks inward. |
| 5 | Arthur (V.O.) — both ends | The young get both halves. Sharp by day, asleep by night. The old lose both. Aging does not move your sleep in this model. It takes the whole day. |
| 6 | Fan-di (Xavier) — the reveal | I am twenty-nine. |
| 7 | Arthur (V.O.) — the honest line / title | Almost every mechanism in that chapter is wrong. What it noticed is still true. The Emperor's Inner Canon. The Night Watch. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Voices are the permanent series cast (`CLAUDE.md`): Narrator **Arthur**, Fan-di
**Xavier**, Dr-Qi **Vesper** — all `seed_audio` presets at `speech_rate` 55.
**Zane / Lei-Gong is not used.** He appears asleep and does not speak, which
avoids the one voice `SKILL.md` still requires measured at length.

### Line lengths, written to the measured rates

| Block | Voice | Words | Sentences | Predicted | Window |
|---|---|---|---|---|---|
| 1 | Arthur, 3.73 w/s | 27 | 2 | ~7.2s | 6–8s |
| 2 | Arthur | 25 | 2 | ~6.7s | 6–8s |
| 3 | Xavier, 4.55 w/s | 33 | 5 | ~7.3s | 6–8s |
| 4 | Vesper, 4.42 w/s | 30 | 3 | ~6.8s | 6–8s |
| 5 | Arthur | 29 | 5 | ~7.8s | 6–8s |
| 6 | Xavier | 4 | 1 | ~2.5s | **deliberately short** |
| 7 | Arthur | 21 | 4 | ~7.0s | 6–8s |
| 8 | Arthur | 11 | 2 | ~5.0s | **deliberately short** |

**Predictions, not measurements.** Chapter 1 proved a linear words/second
extrapolation does not survive a change in sentence structure — 32 words as one
em-dashed sentence delivered **10.78s**; the same content as three short
sentences delivered **6.91s**. So:

- **Generate block 1 first, read its duration, re-scale 2, 5 and 7 before
  committing them.** One 0.6-credit take beats a re-cut.
- **Block 5 is the one at risk** — 29 words across five short sentences, and
  short sentences add pause time. If it overshoots, drop *"in this model"*.
- **Block 7 ends on two title fragments**, the shape that pushed ch1's block 7 to
  8.0s on only 24 words. If it overshoots, replace the full stop before *"The
  Emperor's Inner Canon"* with a comma.
- If a take lands long, break sentences up; if short, trade full stops for commas.
  **Never reach for `speech_rate`** — measured at −8% to +12% across rate 40 vs
  60, which is variance, not response.

### Block 6 is the trailer

Four words, ~2.5s, centred in a fixed 10s window — roughly **3.7 seconds of
silence on either side**. That is not the ch8 dead-air mistake; it is the ch1
block-3 pattern used deliberately, and here it is the entire point of the cut.

The trailer spends five blocks letting Fan-di be an emperor asking an academic
question, and then he stops. **Padding this line to fill the window destroys the
beat it exists for.** Record it as a chosen exception so the next reviewer does
not "fix" it.

Block 8 is short for the ordinary reason: trailing silence on a final card is a
fade-out, not a stall. Ch1's identical 11-word line delivered 4.95s.

## Source mapping — longform → trailer

Cut from `inner-canon-ch46-longform-v1.md`, not from the classical text directly.

| Longform blocks | Beat | Trailer block |
|---|---|---|
| 1–2 | the hour; nearly everyone unconscious at once | 1 |
| 57–59 | the emperor's paired question | 2 |
| 54 | Fan-di's "hypothetically" | 3, tightened |
| 60–65 | the roads; nutritive thins, defensive turns inward | 4, compressed from four blocks |
| 62 + 68–70 | 晝精而夜瞑 against 晝不精，夜不瞑 | 5 |
| 71–72 | the fan goes down; "I am twenty-nine" | 6 |
| 97–102 | the honest reckoning | 7, compressed to one line |
| 108 | disclaimer card | 8 |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam.

**Dramatisation carried over from the longform:** Fan-di's insomnia, his age and
the fan are invention — the classical text has no characterisation at all. The
only lines here that paraphrase the source are blocks 2, 4 and 5.

## Shot list

Vertical 9:16 throughout. Every prompt declares the aspect ratio twice
(`aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" in the prompt
text) and pre-declines `IN THE DARK` — six of eight shots are night or dim, the
highest preset-swap exposure of any cut so far. Clips stay **text-free**; the
title and any glyph are hand-added overlays at edit.

1. **The hour** — high overhead of an ink-wash city at night, rain on tile, roofs
   receding into depth. Lit windows going dark in a slow wave from the far edge
   toward camera, until one small amber window remains, low in frame. No figures.
   *History lower-third sits here.*
2. **The question** — slow lateral drift across a rainy courtyard: the lit paper
   window with an upright seated silhouette inside, past two dark windows,
   settling on Lei-Gong in cinnabar red, face-down asleep on a stone bench, one
   arm hanging, his hand drum on the ground. One night, one house.
3. **The deflection** — Fan-di in the gold robe with slim round glasses, fan
   **snapped open** (performing), lit hard from one side by a low lamp, rain
   running down the paper screen behind him. Immaculate, and working at it.
4. **The mechanism** — no people. An ink road running the length of the frame,
   open and smooth at the top, narrowing between closing banks toward the bottom
   until the stroke almost seals. A pale current that had been running outside the
   line turns and doubles back inward.
5. **Both ends** — no people. A brushed day-arc: the upper half washed pale
   daylight, the lower half deep indigo. Two small lights travel it. The pale half
   dims from one end and the dark half from the other, closing in.
6. **The reveal** — Fan-di again, same framing as shot 3, but the fan is
   **folded and set down** on the table and his hand has left it. He is not
   looking at anyone. Light cooler, lamp burned down. Nothing else moves.
7. **The honest line / title** — cold dawn on the same courtyard, grey-blue, rain
   stopped, lamp out. The upright silhouette is still there in the window,
   unmoved. Slow push in. Lower third kept clean for the title overlay.
8. **Disclaimer card** — plain indigo-black plate with faint ink grain and a
   single cinnabar seal mark in one corner. Card text added at edit.

**Shot 6 is the cut.** It is the same setup as shot 3 with one object moved. If
the model will not hold character consistency across the two, generate shot 3
first and pass its job ID as an additional reference on shot 6.

## Production record (Higgsfield)

**Status: pre-render.** Nothing generated. The step-0 gate has not been run for
v2 — the gate priced in `inner-canon-ch46-trailer-v1.md` on 2026-08-01 covers an
identically-shaped 8-block cut and the figures carry over, but a live `balance`
and `get_cost` are still required before spending.

### Cost preflight — carried from the v1 gate, re-price before use

`seedance_2_0_mini`, 8 blocks, 10s, 9:16, `resolution` as shown,
`generate_audio: false` (the model defaults it to **true**, which bills for audio
the assembler discards).

| Item | Draft (480p) | Full (720p) |
|---|---|---|
| Style key — **reuse the ch46 vertical key**, do not regenerate | 0 | 0 |
| 8 clips | **80** (10/clip) | **200** (25/clip) |
| 8 voice takes | 8 | *reused* |
| Subtitles, 0.05/voiced block | 0.4 | 0.4 |
| Assembly | free | free |
| **Total** | **88.4** | **200.4 additional** |

**Cheaper than v1 by the style key**, because v2 chains off the same chapter key
rather than establishing one. A voice take preflighted at **1 credit** on
2026-08-01, against the ~0.6 in `SKILL.md` and the ch1 document; budgeted at 1
and flagged for reconciliation against the actual balance delta.

### Style key

**Reuse the ch46 vertical key** once it exists — chained off the ch1 head
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`, motif described in
`inner-canon-ch46-trailer-v1.md`. v1 and v2 are the same chapter and must share a
look; generating a second key would fork the chapter's style for no reason.

### Clips / Voiceover / Assembly

*Not generated.* Model and tier from the step-0 gate. Record model, tier,
per-block job ID, duration and returned resolution. **Generate block 1 alone and
check its returned dimensions before committing the other seven.** Voiceover is
`seed_audio` presets at `speech_rate` 55 — Arthur on blocks 1, 2, 5, 7, 8;
Xavier on 3 and 6; Vesper on 4. Assembly is `explainer_video`, 8 × 10s,
`subtitles: { font: "anton" }` on draft and full alike, `width`/`height` matching
the clips as actually returned.

### Reproduction notes

- **9:16 only.** A landscape version, if wanted, comes from `reframe` on the
  finished cut, with the sidecar rebuilt at `--format 16:9`.
- **The narration table must stay three columns** — `build_subtitles.js` admits no
  fourth, and a Speaker column would be captured into the caption text.
- **Sidecars are not built yet, deliberately.** The builder times cues from the
  take durations in the `**Voiceover**` line; with none recorded it warns and
  assumes a full 10s per block, which would ship a sidecar that drifts. Build and
  commit once the takes exist.
- **Shot 6 has no dialogue cover.** Four words over ten seconds means the clip has
  to hold on its own for ~7 seconds of near-silence. It is a near-static shot by
  design, which suits the model, but it is the one clip where a bad generation
  cannot be hidden behind narration. Draft it first.
- **Visual QA will probably not be possible from this host** — the CDN has been
  blocked since chapter 3. Verify at job-metadata level, say so explicitly, and
  record the CDN link for manual download.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Sits on **block 1**.
- **End disclaimer card** — the repo disclaimer over **block 8**, held long enough
  to read. Block 8 renders as a plain plate.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  (block 8, beneath the disclaimer) **and** in the description.
- **Title card** — *"The Emperor's Inner Canon · The Night Watch"* over block 7.
  If a citation goes on screen it reads **Ling Shu 18**, never "Chapter 46".
- **Music** — licensed guqin only. The silence around blocks 6 and 8 comes free
  from block geometry and needs no cue.

## Compliance notes (YouTube)

- **Disclaimer** — repo string verbatim, in the blockquote above, spoken in block
  8, on screen as the end card, and in the description.
- **Health content stays philosophical — load-bearing for this chapter.** Sleep is
  the highest-RPM topic on the slate because of sleep-app and supplement
  advertiser overlap, which is exactly the pressure that turns a history channel
  into a wellness channel. **Nothing in these eight blocks tells anyone how to
  sleep.** No condition, no remedy, no practice, no benefit claim. Block 7 states
  outright that the mechanism was wrong.
- **Mortality / aging** — aging is the subject, carried by objects, light and one
  silhouette. No illness, no bodies. Portraits, not bodies.
- **Indulgence / alcohol** — not present. The longform's wine passage and its
  ferment image are both absent from this cut.
- **Supernatural hook, explicitly debunked** — none raised. Fan-di's question in
  block 3 is answered inside the trailer, by Dr-Qi, in block 4; block 7 then
  debunks that answer's mechanism on screen. Nothing dangles.
- **The withhold is emotional, not informational.** Block 6 withholds *nothing
  factual* — the chapter's argument is fully delivered in blocks 2, 4, 5 and 7.
  What block 6 withholds is what happens to Fan-di, which is the episode. A
  reviewer should not read this as a mystery box; the educational payoff is on
  screen inside the trailer.
- **Titles and thumbnails must honor the payoff** — no *secret*, *ancient trick*,
  *cure*, no shocked-face thumbnail. **Open conflict:** the Blueprint's Ch 46 hook
  is *"The Ancient Science of Sleep — and Why the Old Sleep Badly."* *"Ancient
  Science of"* asserts what block 7 denies. Use *"They Were Wrong About Why. They
  Were Right About What."*
- **Citation accuracy** — the chapter is **Ling Shu 18**. The spoken title carries
  no number precisely so this cannot go wrong on air.
- **Dramatisation is disclosed** — Fan-di's insomnia and age are invention. Only
  blocks 2, 4 and 5 paraphrase the classical text; the source mapping says so.
- **Hedge allocation, second cut with speaking characters.** `SKILL.md` requires a
  cut that gives a character a line to say which hedge moved. **None moved.**
  Fan-di makes no factual claim in either of his blocks — block 3 is a question,
  block 6 is a fact about himself, and he is a fictional character. Dr-Qi states
  *the text's* model, not a fact about bodies, with the open scroll in frame.
  Arthur retains the mechanism-is-wrong line, the title and the disclaimer.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — run before generating.** Read against ch8's `nsfw`
  incident, where restraint and bound-figure imagery tripped the filter: nothing
  here goes near it. Shot 2's sleeping boy is comic and posed, not unconscious;
  shots 4 and 5 have no people; shots 3 and 6 are one seated man at a table.
  **Assessed low risk; recorded as checked.**

**Residual risk: LOW**, conditional on the title and thumbnail holding the
philosophical line the narration holds.

## Runtime levers

**Cut to 0:60** — drop blocks 2 and 5. Runs 1 → 3 → 4 → 6 → 7 → 8. The reveal
survives and lands at 0:30 instead of 0:50, which is better for a paid placement.
Loses the 晝精/晝不精 symmetry, which is the chapter's actual argument — so prefer
this only where the cut is selling the episode rather than the idea.

**Cut to 0:40** — blocks 1 → 3 → 6, plus 8. Pure drama, no mechanism at all:
the hour, the deflection, the reveal, the card. **This version teaches nothing**
and must not run anywhere the episode is not one click away.

**Stretch to 0:90** — add a block after 4 on 合阴, the great meeting at midnight
(longform blocks 45–48): the black city, every window out at once. It is the
chapter's most beautiful image and the only reason not to include it here is that
it competes with block 6 for the cut's one silence.

**Block 8 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement.

**Written for sound-off.** On a vertical feed the sleeping-boy image at ~0:12
stops the scroll and the vigil holds the viewer. Captions carry the whole
argument if nobody turns the sound on — which is what the `.srt`/`.vtt` sidecar
path guarantees and burned-in captions only approximate.
