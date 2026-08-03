# The Emperor's Inner Canon — Chapter 46 Trailer (80 seconds)

**灵枢·营卫生会第十八 · The Night Watch**

**Framing:** history of ideas. Not health content.

**Draft render (480×854, 9:16 vertical, 80s, MP4):** *not run — pre-render.*

**Final render (720×1280):** *not run.*

An eighty-second vertical trailer for *"The Night Watch"* (营卫生会 · *Meeting of
Nutritive & Defensive Qi*), re-cut from the source script *"Chronicle of Balance
— The Night Watch"* (see the review at
`inner-canon-ch46-trailer-script-review.md`). Eight 10-second blocks, stylized 2D
animation matching the Fan-di / Dr-Qi / Lei-Gong character art. Vertical 9:16 for
Shorts / Reels / TikTok.

> **Chapter numbering — read this before putting a number on screen.**
> This is **Ling Shu 18** in the received text. The `episode-46` folder and
> "Chapter 46" refer to the **series slate index** in
> `docs/Emperors Inner Canon Series Blueprint.md`, which is a curated
> renumbering, not a canonical chapter number — its Ling Shu parentheticals are
> all `index − 35` and none match the received text (review §1.1). The source
> script's *"Lingshu 11"* is that artifact; Ling Shu 11 is 经别, a different
> chapter. **The spoken title in block 7 therefore carries no number**, and any
> on-screen citation must read *Ling Shu 18*, never *Chapter 46*.

This is the second cut in which the characters speak (after chapter 1) and the
second on **Arthur**. **Lei-Gong appears asleep and does not speak** — deliberate:
Zane is measured only on a short line and `SKILL.md` requires him re-measured at
length before anything is written for him. Nothing here needs that.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — `explainer_video` takes exactly one audio per block, so
every speaker change is its own block. The speaker is named in the beat column
rather than in a fourth column, because `build_subtitles.js` parses the narration
table as exactly three columns and a fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the question | Two thousand years ago, a physician was asked why the old lie awake at night. And why the young, at that same hour, sleep straight through it. |
| 2 | Arthur (V.O.) — two armies | The answer named two armies inside the body. One feeds you, and moves inside the vessels. One guards you, and moves outside them. Neither of them stops. |
| 3 | Arthur (V.O.) — fifty circuits | Fifty circuits, a day and a night. The guard walks twenty-five in the light, twenty-five in the dark. A clock wound to the turning of the sky. |
| 4 | Fan-di (Xavier) — the question | Two men, one roof. The same rain, the same hour, the same lamp burning down to nothing. The boy sleeps like a stone. The old man has not slept properly in years. Why? |
| 5 | Dr-Qi (Vesper) — the answer | They are not running the same armies. In the young the roads are smooth, so the guard comes home at midnight. In the old the roads are narrow. It comes home late. |
| 6 | Arthur (V.O.) — the joining of the dark | Midnight. Every window in the city goes dark at once. Except one. |
| 7 | Arthur (V.O.) — the honest line / title | Almost every mechanism in that chapter is wrong. What it noticed is still true, two thousand years later. The Emperor's Inner Canon. The Night Watch. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Voices are the permanent series cast (`CLAUDE.md`): Narrator **Arthur**, Fan-di
**Xavier**, Dr-Qi **Vesper** — all `seed_audio` presets at `speech_rate` 55.
**Zane / Lei-Gong is not used in this cut.**

### Line lengths, written to the measured rates

| Block | Voice | Words | Sentences | Predicted | Window |
|---|---|---|---|---|---|
| 1 | Arthur, 3.73 w/s | 27 | 2 | ~7.2s | 6–8s |
| 2 | Arthur | 27 | 4 | ~7.2s | 6–8s |
| 3 | Arthur | 27 | 3 | ~7.2s | 6–8s |
| 4 | Xavier, 4.55 w/s | 33 | 5 | ~7.3s | 6–8s |
| 5 | Vesper, 4.42 w/s | 32 | 4 | ~7.2s | 6–8s |
| 6 | Arthur | 12 | 3 | ~5.0s | **deliberately short** |
| 7 | Arthur | 25 | 4 | ~7.5s | 6–8s |
| 8 | Arthur | 11 | 2 | ~5.0s | **deliberately short** |

**These are predictions, not measurements.** Chapter 1 proved that a linear
words/second extrapolation does not survive a change in sentence structure — 32
words as one em-dashed sentence delivered **10.78s**, and the same content as
three short sentences delivered **6.91s**. So:

- **Generate block 1 first, read its duration, and re-scale blocks 2, 3 and 7
  before committing them.** One 0.6-credit take beats a re-cut.
- **Block 7 is the one at risk.** It ends on two title fragments, which is the
  exact shape that pushed ch1's block 7 to 8.0s on only 24 words. If it
  overshoots, replace the full stop before *"The Emperor's Inner Canon"* with a
  comma, or drop *"two thousand years later."*
- If a take lands long, break sentences up. If short, trade full stops for
  commas. **Never reach for `speech_rate`** — measured at −8% to +12% across rate
  40 vs 60, which is take-to-take variance, not a rate response.

### Two blocks run deliberately short

Neither is the dead-air mistake repeating. Both are the ch1 pattern, where a
fixed 10s window centres a short take and supplies silence for free:

- **Block 6 (~5s expected)** — the source script's shot 9 asks for **seven
  seconds of true silence**, which this pipeline cannot produce: every block
  needs its one `audio` item. Twelve words centred in a 10s window leaves ~2.5s
  of held silence either side, which is the closest the grid gets, and it is
  where the cut's emotional weight sits. **Do not pad this line to fill the
  window.**
- **Block 8 (~5s expected)** — the end disclaimer card. Trailing silence on a
  final card is a fade-out, not a stall. Ch1's identical 11-word line delivered
  4.95s.

Everywhere else the 6–8s rule is enforced normally.

### Source-script mapping

The source script is eleven cues of 4–7s totalling 0:62, with sub-second beats
the assembler cannot express (a water-clock drip, two drum strikes, music
dropping out on a specific frame, a 4-second title card, and a fully silent
shot). Re-cut to eight even 10s blocks:

| Source shot | Source timing | Trailer block |
|---|---|---|
| 1 — lamp flares, rain on tile | 0:00–0:06 | 1, folded into one continuous move |
| 2 — the seated figure, awake | 0:06–0:13 | 1 |
| 3 — Lei-Gong asleep | 0:13–0:18 | 1, re-dated to the same night (review §1.2b) |
| 4 — 营 / 卫 brushed on | 0:18–0:24 | 2, carried as image rather than glyphs |
| 5 — the ring diagram, the counter | 0:24–0:31 | 3, counter dropped, figure corrected |
| 6 — Fan-di, fan snapping open | 0:31–0:36 | 4, expanded to a full block |
| 7 — Dr-Qi, scroll, direct look | 0:36–0:40 | 5, expanded to a full block |
| 8 — mist / vat / channel triptych | 0:40–0:46 | **not in this cut** — stretch lever |
| 9 — silence, the black city, 合阴 | 0:46–0:53 | 6 |
| 10 — cold dawn, the counter at 50/50 | 0:53–0:58 | 7, counter dropped (review §1.2c) |
| 11 — title card, cinnabar seal | 0:58–1:02 | 7 + 8 |

**Source corrections applied** (review §1.1–1.2):

- **The citation is corrected to 灵枢·营卫生会第十八.** The script's *"Lingshu 11"*
  is an artifact of the Blueprint's slate numbering; Ling Shu 11 is 经别.
- **"Fifty circuits, every night" → "Fifty circuits, a day and a night"**
  (营周不休，五十而复大会), with the 25/25 split attached to the *defensive* qi where
  the text puts it (卫气行于阴二十五度，行于阳二十五度，分为昼夜).
- **The young/old pairing is un-inverted.** The text asks why the old do not
  sleep **at night** and why the young do not sleep **by day**; the answer is
  昼精而夜瞑 against 昼不精，夜不瞑. The sleeping-boy image is re-dated to the same
  night as the vigil so it stops contradicting the source.
- **The great meeting stays at midnight** (夜半而大会，万民皆卧，命曰合阴). The
  script's circuit counter completing at dawn is dropped.
- **"Every observation in it has survived" → "What it noticed is still true, two
  thousand years later."** The unbounded claim is contestable in one comment; the
  narrowed one is what the line was actually about.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; *Dr. Qi* /
*Fan-Di* → **Dr-Qi** / **Fan-di**; traditional 營衛生會 / 合陰 → simplified
**营卫生会** / **合阴**, matching the Blueprint and the shipped documents.
**"The archivist"** is not a cast member and is not made one: the vigil figure
stays an anonymous ink-wash silhouette in a lit window — never named, never
given a face.

## Shot list

Vertical 9:16 throughout. Every prompt declares the aspect ratio twice
(`aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" in the prompt
text) and pre-declines `IN THE DARK` — six of these eight shots are night or
dim-lit, which is the highest preset-swap exposure of any cut so far. Clips stay
**text-free**; every glyph and title is a hand-added overlay at edit.

1. **The question** — one continuous slow lateral drift across a rainy courtyard
   at night, ink-wash 2D in indigo and lamp-amber. It opens on a single lit paper
   window with an upright seated silhouette inside, perfectly still; drifts past
   two dark windows; and settles on Lei-Gong in cinnabar red, face-down asleep on
   a stone bench under the eaves, one arm hanging, his little hand drum on the
   ground beside him. Rain streaking the tiles throughout. No cut inside the
   shot — the move is what tells you it is one night, one house.
   *History lower-third sits here.*
2. **Two armies** — no people. A single drawn vessel running the length of the
   frame, wet-brush edges on paper grain. A warm gold current travels **inside**
   the line; a cool pale current travels **outside** it, same direction, same
   pace, never touching. Nothing else in frame.
3. **Fifty circuits** — no people. One closed ink circle filling the frame, the
   upper arc washed pale daylight, the lower arc deep indigo. Two points of light
   travel the ring, one riding the inner edge and one the outer, meeting at the
   bottom of the circle. No numerals, no counter, no text.
4. **Fan-di asks** — Fan-di in the gold robe with the slim round glasses, fan
   **snapped open** (performing), lit hard from one side by a low lamp, rain
   running down the paper screen behind him. He is enjoying the puzzle, not
   troubled by it. Warm light, shallow depth.
5. **Dr-Qi answers** — Dr-Qi in the blue cheongsam, open bamboo scroll held
   casually like a tablet, entirely still, looking straight down the lens. She
   does not lean in and she does not gesture. Cooler light than shot 4. The
   stiller she is, the more she is winning.
6. **The joining of the dark** — high overhead view of an ink-wash city at night,
   roofs receding into depth. Lit windows go dark in a slow wave from the far
   edge toward camera until one small amber window remains, low in the frame. No
   figures, no text in the clip. *合阴 is added here as an edit-time overlay,
   upper third, clear of the caption band.*
7. **Cold dawn / title** — the same courtyard at first light, grey-blue, rain
   stopped, the lamp out. The upright silhouette is still there in the window,
   unmoved since shot 1. Slow push in. Lower third kept clean and empty for the
   title overlay.
8. **Disclaimer card** — a plain indigo-black plate with faint ink grain and a
   single cinnabar seal mark in one corner. Nothing else. Card text is added at
   edit time.

**Motif note:** the 三焦 triptych (上焦如雾，中焦如沤，下焦如渎 — mist, ferment,
drainage channel) is correct Chapter 46 material and is a fine image, but it
teaches a *different* passage than the sleep clock this trailer is about. It is
the stretch beat, not a shipped block — which is also what the source script's
own 0:45 alternate does with it.

## Production record (Higgsfield)

**Status: pre-render.** Nothing has been generated. The step-0 gate has been
**priced** (below) but **not confirmed** — no model/tier decision, so no clip,
take or assembly job has been submitted.

### Cost preflight — priced live 2026-08-01, step-0 gate

**Balance at gate: 942.4 credits** (ultra plan) — unchanged since the chapter 1
run closed at 942.4, so nothing has been spent in between.

Every figure below is a live `get_cost` preflight, not a quote from `SKILL.md`.
`seedance_2_0_mini`, 10s, 9:16, `resolution` as shown, `generate_audio: false`
(the model defaults it to **true**, which would bill for audio the assembler
discards):

| Item | Priced by | Draft (480p) | Full (720p) |
|---|---|---|---|
| Style key (`nano_banana_pro`, 1k, 9:16) | `generate_image` `get_cost` | 2 | *reused* |
| 8 clips | `generate_video` `get_cost` | **80** (10/clip) | **200** (25/clip) |
| 8 voice takes | ch1 balance reconciliation | ~4.8 (0.6/take) | *reused, resolution-independent* |
| Subtitles, 0.05/voiced block | `explainer_video` tool contract | 0.4 | 0.4 |
| Assembly | free | 0 | 0 |
| **Total** | | **~87.2** | **200.4 additional** |

Draft alone leaves **~855**. Draft then Full costs **~287.6** and leaves **~655**.
The 8-block cut is not budget-constrained at either tier.

**A voice take preflights at 1 credit but bills at ~0.6 — budget 0.6.** Chapter
1's measured balance delta settles this: that run generated **20** takes (7
measurement, 8 final, 5 superseded) against a 94.9-credit delta, and
`20 × 0.6 + 2 + 80 + 0.4 = 94.4` reconciles to within rounding, while 1.0/take
would have cost 102.4. The `get_cost` figure is rounding up to a whole-credit
floor. Voice is budgeted at 0.6 above; confirm against the balance delta after
this run as usual.

*(An earlier version of this preflight budgeted takes at 1 credit and reported the
ch1 delta as "~0.78/take over 16 takes". The take count was wrong — there were 20,
not 16 — which is what made the figure look irreconcilable.)*

Budget one or two re-takes for blocks 3 and 7 per the line-length note above.
**Draft then Full is the house default and this cut should keep it** — a
continuous camera move (block 1), a two-current diagram (block 2) and a
windows-going-dark wave (block 6) are three things nobody has seen this model
attempt.

### Style key

Chains off the current head, the **Chapter 1** key
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`, swapping ch1's splitting-scroll and
seven-and-eight arcs for the Chapter 46 motif: **a single closed ink ring with
two currents on it, one riding the inner edge and one the outer, the upper arc
pale daylight and the lower arc deep indigo, with one small lit paper window
low in the frame.** Model `nano_banana_pro` (served by `nano_banana_2`), 9:16
768×1376, prior key passed as `medias[{ role: "image", value: "<job id>" }]` —
job ID, never a URL. Attach to every clip.

Lineage: this key derives from the ch1 head; ch46 becomes the new head once
generated.

### Clips

*Not generated.* Model and tier come from the step-0 gate. Record model, tier,
per-block job ID, duration and returned resolution here. **Generate block 1
alone and check its returned dimensions before committing the other seven.**

### Voiceover

*Not generated.* `seed_audio`, `voice_type: "preset"`, `speech_rate` 55 —
**Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` (blocks 1, 2, 3, 6, 7, 8),
**Xavier** `43173c95-3ec8-446a-a162-6504332c578b` (block 4), **Vesper**
`c3204739-4084-41a3-9dc5-c805b307ec18` (block 5). Record per-block job ID **and
duration**; the sidecar builder reads durations off this line.

No new voice measurement is needed: all three are measured on chapter 1, and Zane
— the one voice still unmeasured at length — is not used.

### Assembly

*Not run.* `explainer_video`, 8 × 10s fixed blocks, `subtitles: { font: "anton" }`
on both draft and full. `width`/`height` must match the clips **as actually
returned**, not a pasted 720×1280.

### Credit spend

*Pending.* Record the actual balance delta against the preflight above, as ch1
did — that reconciliation is the only historical figure this repo has.

### Reproduction notes

- **Aspect ratio is 9:16 only.** The source script specified a 16:9 master with a
  9:16 derivative; that inverts the house rule and doubles the clip bill. A
  landscape version, if wanted, comes from `reframe` on the finished cut, and its
  subtitle sidecar must be rebuilt at `--format 16:9`.
- **The narration table must stay three columns.** `build_subtitles.js` parses
  `| n | beat | line |` with a regex that admits no fourth column — a Speaker
  column would be captured into the caption text.
- **Highest preset-swap exposure of any cut so far.** Six of eight shots are
  night or dim (1, 3, 6, 7, 8, and block 2's dark paper field), so `IN THE DARK`
  (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) is pre-declined on **every** clip.
  `declined_preset_id` takes one id per call, so budget one retry per newly
  triggered preset. Keep audio vocabulary — *drum*, *drone*, *music*, *rhythm* —
  out of every clip prompt: those are edit-time directions, and "rhythm" is what
  fired `DROWN IN MUSIC` on an earlier cut.
- **Block 1 is the riskiest prompt in the cut.** It asks for a single continuous
  lateral camera move that resolves from one subject to another, which is more
  camera direction than any shipped clip has used. If the model returns a static
  or incoherent shot, the fallback is to split it into two blocks (vigil, then
  sleeping boy) and drop block 3 to stay at eight — the mapping table above
  already shows which source shots each carries.
- **No Chapter 46 longform exists in `output/`**, so nothing in this trailer can
  be cut from an episode. Every clip is generated fresh from the style key.
- **The `.srt`/`.vtt` sidecars are not built yet, deliberately.**
  `build_subtitles.js` times cues from the take durations in the `**Voiceover**`
  line above; with none recorded it warns and assumes a full 10s per block, which
  would ship a sidecar that drifts from the cut. Build and commit them once the
  voice takes exist. The document parses correctly today — verified by running
  the script against it — so the only thing missing is real durations.
- **Visual QA will probably not be possible from this host.** The CDN has been
  blocked on every chapter since 3 (`CONNECT tunnel failed, 403`). When the cut
  is assembled, verify at the job-metadata level — all clips at the expected
  dimensions, every take inside its window, assembly complete — say so explicitly
  here, and record the CDN link for manual download rather than committing a
  binary. **Never write that captions wrap correctly if nobody watched the file.**

## Deliverables the assembler cannot produce

Manual steps at edit/upload time; `explainer_video` has no text-overlay parameter
and generates no music.

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Sits on **block 1**.
- **End disclaimer card** — *"A dramatized adaptation of a classical philosophical
  text. Not medical advice."* on screen over **block 8**, held long enough to
  read. Block 8 renders as a plain plate; the text is added here.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  (block 8, beneath the disclaimer) **and** in the description.
- **On-screen Chinese, this cut specifically** — **合阴** over block 6, upper
  third, clear of the caption band. The source script brushed 营, 卫 and 合阴 into
  the clips themselves; `SKILL.md` keeps clips text-free, and separately a video
  model asked for a Chinese glyph will very likely return a malformed one that
  nobody on this host can check. Characters that must be *correct* are added in
  the edit. The circuit counter (`循 07 · 19 · 31`) is dropped outright — it is
  in-frame text, generated numerals are unreliable, and 循 is not the text's word.
- **Title card** — *"The Emperor's Inner Canon · The Night Watch"* over block 7.
  If a chapter citation is put on screen it must read **Ling Shu 18**, never
  "Chapter 46" (see the numbering note at the top).
- **Music** — licensed guqin only. The source script's water-clock drip, two drum
  strikes, rising drone and room tone are **not** used: each is a licensed asset
  with the same Content-ID exposure as a guqin recording, none can be produced by
  this pipeline, and substituting them is a series-wide scoring change rather than
  a per-cut choice. The script's *"silence is the instrument"* instinct survives
  in blocks 6 and 8, where the block geometry supplies the silence for free.

## Compliance notes (YouTube)

- **Disclaimer** — repo string used verbatim, in the blockquote above, spoken in
  block 8, on screen as the end card, and in the description. The source script's
  *"A history series. Not medical advice."* was not adopted: it is tighter
  English, but changing it in one cut silently desynchronises Ep 2 from the rest
  of the series.
- **Health content stays philosophical — this is the load-bearing rule for this
  chapter.** Sleep is the highest-RPM vertical on the slate precisely because of
  sleep-app and supplement advertiser overlap, which is the exact pressure that
  turns a history channel into a wellness channel. **Nothing in these eight
  blocks tells anyone how to sleep.** No condition is named, no remedy, no
  practice, no benefit claim, no "try this before bed." The cut describes what a
  two-thousand-year-old text *believed*, in the past tense, and block 7 states
  outright that the mechanism was wrong. Title, thumbnail and description must
  hold the same line.
- **Mortality / aging** — the subject is aging costing you your sleep, and it is
  carried entirely by **objects, light and a silhouette**. The vigil figure is
  never named, never given a face, never shown ill or infirm — one unmoving
  outline in a lit window at shot 1 and still there at shot 7. Portraits, not
  bodies; reflective, not graphic.
- **Indulgence / alcohol** — none in this cut. The 三焦 ferment image (中焦如沤)
  is **deliberately not a shipped block**; it is the stretch beat. If it is ever
  added, it renders as **grain steeping in a covered vessel** — no wine-jar
  silhouette, no cups, no pouring, no drinking. The source script's compliance
  table claimed "no alcohol imagery" while its shot 8 showed a bubbling vat; that
  is resolved rather than restated.
- **Supernatural hook, explicitly debunked** — no supernatural claim is raised.
  The nearest thing to a mystery box is Fan-di's *"Why?"* at block 4, and it is
  answered inside the trailer, by Dr-Qi, in block 5. Block 7 then debunks the
  answer's *mechanism* on screen. Nothing is left dangling.
- **Titles and thumbnails must honor the payoff** — no *secret*, *ancient trick*,
  *cure*, *doctors won't tell you*, no shocked-face thumbnail. **Open conflict:**
  the Blueprint's own Ch 46 hook is *"The Ancient Science of Sleep — and Why the
  Old Sleep Badly."* *"Ancient Science of"* asserts scientific status for a
  mechanism block 7 calls wrong — the title would be arguing with the cut. Use a
  hook that honors the payoff instead: *"What the Oldest Chinese Medical Text Got
  Right About Sleep — and Wrong."*
  `docs/Emperors Inner Canon Series Blueprint.md` needs updating.
- **Citation accuracy** — a channel whose differentiator is correcting
  uncritical ancient-wisdom content cannot miscount its own source. The chapter
  is **Ling Shu 18**; the source script's *"Lingshu 11"* would have gone on a
  title card. See the numbering note at the top and review §1.1.
- **Hedge allocation, second cut with speaking characters.** `SKILL.md` requires a
  cut that gives a character a line to say which hedge moved off the narrator.
  **None moved.** Fan-di (block 4) asks a question and makes no claim. Dr-Qi
  (block 5) states *the text's* model, not a fact about bodies, and the shot
  keeps the open scroll in her hands so the source of the claim is visible.
  Arthur retains every load-bearing item: the mechanism-is-wrong line and the
  title (block 7) and the disclaimer (block 8).
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — run before generating, per `CLAUDE.md`.** Every shot
  prompt above was read against the recorded `nsfw` incident, where restraint and
  bound-figure imagery tripped the safety filter on otherwise fine subject
  matter. Nothing here goes near it: shot 1's sleeping boy is comic and posed
  (face-down on a bench, arm hanging), not unconscious or injured; the vigil
  figure is a seated silhouette; shots 2, 3, 6 and 8 have no people at all.
  **Assessed low risk; recorded as checked.** Re-run this audit on any prompt
  that changes before re-rendering.

**Residual risk: LOW**, conditional on the title and thumbnail holding the
philosophical line the narration holds.

## Runtime levers

**Cut to 0:60** — drop blocks 3 and 6. Runs 1 → 2 → 4 → 5 → 7 → 8. Keeps
question → mechanism → exchange → payoff → card. Loses the circuit clock and the
silence, which are the two most decorative beats; the argument survives intact.

**Cut to 0:40** — blocks 1 → 2 → 7, plus 8. Question → mechanism → the honest
line → card. The comic image still lands inside the first ten seconds, which is
the retention cliff that matters on vertical.

**Stretch to 0:90** — add the 三焦 triptych after block 5, as the source script's
shot 8: mist rising through pine, grain steeping in a covered vessel, water
running down a stone channel (上焦如雾，中焦如沤，下焦如渎). One block, no new voice,
and it is the chapter's other famous image. Read the alcohol bullet above before
prompting the middle one.

**Block 8 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement on every cut and cannot be dropped to hit a runtime.

**Vertical is the master, and it is written for sound-off.** The source script's
best production note is that on a vertical feed the comic image stops the scroll
and the vigil holds the viewer. Block 1 does both in one move — the sleeping boy
lands at ~0:07, inside the scroll-decision window, and the shot resolves *toward*
him rather than cutting. Captions carry the whole argument if nobody turns the
sound on, which is what the `.srt`/`.vtt` sidecar path guarantees and burned-in
captions only approximate.
