# The Emperor's Inner Canon — Chapter 1 Trailer (80 seconds)

**上古天真论篇第一 · The First Sentence**

**Draft render (480×854, 9:16 vertical, 80s, MP4) — no burned captions:**
https://d8j0ntlcm91z4.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/hf_20260801_222008_d8a5e263-0d97-4cd9-a39e-8499e0782e17.mp4

**This file has no captions on it by design.** Captions come from the tracked
`.srt` sidecar, burned with the `ffmpeg` command `build_subtitles.js` prints —
see *Captions* in the reproduction notes. Do not upload it uncaptioned.

**Final render (720×1280):** *not run — draft only, pending review of the draft.*

> **CDN link, download it.** The generation CDN is blocked from the repo host
> (verified this run: `curl` → `CONNECT tunnel failed, response 403`), so this
> MP4 could not be fetched back for visual QA and cannot be archived from here.
> Download it manually into `output/episode-1/renders/` if this cut is worth
> keeping — the link expires.

An eighty-second vertical trailer for *Chapter 1 — "The First Sentence"*
(上古天真论 · Natural Purity of High Antiquity), re-cut from the Episode 01 source
script *"Chronicle of Balance — The First Sentence"* (see the review at
`inner-canon-ch1-trailer-script-review.md`). Eight 10-second blocks, stylized 2D
animation matching the Fan-di / Dr-Qi / Lei-Gong character art. Vertical 9:16 for
Shorts / Reels / TikTok.

**This is the first cut in which the characters speak.** The cast was made
permanent on 2026-08-01 and Chapter 1 is the first cut to use it. It is also the
first cut on **Arthur**, who replaces the narrator used before it.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — `explainer_video` takes exactly one audio per block, so
every speaker change is its own block. The speaker is named in the beat column
rather than in a fourth column, because `build_subtitles.js` parses the narration
table as exactly three columns and a fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the opening | Two thousand years ago, Chinese medicine got its founding text. It opens on a boast, and the emperor himself is the one who makes it. |
| 2 | Fan-di (Xavier) — the claim | I have heard that the people of high antiquity, every one of them, lived past a hundred years. Their movements never weakened. The years did not wear them down. |
| 3 | Lei-Gong (Zane) — the interruption | It's false. Not exaggerated — false. |
| 4 | Arthur (V.O.) — the correction | They did not. Those who wrote it down died young, younger than the ancestors they praised. The golden age was a memory. It never happened. |
| 5 | Fan-di (Xavier) — the deflation | Then I have opened my own canon with a rumour. The first line of the book my physicians swear by, and it is only something that somebody once heard. |
| 6 | Dr-Qi (Vesper) — the reframe | It is not lying to you. It is persuading you. Those are not the same thing — and the physician's answer is narrower still: those among them who knew the Way. |
| 7 | Arthur (V.O.) — the withhold / title | So why did everyone copy it, faithfully, for two thousand years? The Emperor's Inner Canon. Chapter One — The First Sentence. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Voices are the permanent series cast (`CLAUDE.md`): Narrator **Arthur** at
`speech_rate` 55; Fan-di **Xavier**, Dr-Qi **Vesper** and Lei-Gong **Zane** at
`speech_rate` 55. All four `seed_audio` presets.

### Line lengths are written to measured rates, not to an inherited word budget

Every line above is sized from a take measured on this cut (see *Voice
measurement* in the production record). The ~21–24 word budget used before the
cast change belongs to a retired narrator and does **not** transfer:

| Voice | Measured | Blocks | Delivered |
|---|---|---|---|
| Arthur | 3.73 words/sec | 1, 4, 7, 8 | 6.5s, 7.2s, 7.1s, 5.0s |
| Xavier | 4.55 words/sec | 2, 5 | 6.6s, 5.9s |
| Vesper | 4.42 words/sec | 6 | 6.4s |
| Zane | short-line only | 3 | 2.6s (deliberate) |

Arthur is **~21% faster than the retired narrator at the same `speech_rate`**
(23 words → 6.17s, against 23 words → 7.46s). Writing Chapter 1 to the older word
counts would have undershot every block by more than a second.

**Word count alone did not predict take length — sentence structure did.** Block
2's first pass was 32 words as a single sentence hinged on an em-dash, and came
back at **10.78s**, overshooting the fixed 10s window outright. Rewritten to 30
words as three short sentences, the same content delivered **6.91s**. Two words
cannot account for 3.9 seconds; the punctuation did. Compare block 5 — 29 words
across two sentences, 5.87s — against that first pass, and the pattern is clear:

> **A long single sentence carrying a subordinate clause after an em-dash makes
> `seed_audio` slow down and add dramatic pauses.** Break lines into short
> sentences. This is a stronger lever on duration than the word count is, and it
> is the only reliable way to pull a take back inside the window.

### Two blocks run deliberately short

Blocks 3 and 8 sit below the 6s floor on purpose, and the production record must
not read them as the dead-air mistake repeating:

- **Block 3 (2.56s delivered)** — the interruption. A fixed 10s window centres a
  short take, which puts ~3.7s of silence on either side of *"It's false."* The
  source script asks for exactly that (*"Record-scratch. Then total silence."*),
  and here the block geometry produces it for free. Padding the line to 30 words
  to fill the window would destroy the beat it exists for.
- **Block 8 (4.95s delivered)** — the end disclaimer card. Trailing silence on a
  final card is a fade-out, not a stall. This landed much closer to the floor than
  the 2.9s predicted from Arthur's measured rate: 11 words across two sentences
  read far slower than a linear rate suggests, which is the same
  sentence-structure effect that blew up block 2 in the other direction.

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

**Status: draft rendered.** Voice measurement, all eight clips, all eight takes
and the assembly are complete at the 480p draft tier; the 720p full render has
not been run.

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

- **Style key** (`nano_banana_pro` → served by `nano_banana_2`, 9:16 768×1376):
  job `4b6f7106-67da-4d1a-a553-c58ba90ac43f` — the vertical three-character series
  trio under a brushed-ink motif of one bamboo scroll splitting into a dozen
  scrolls of visibly different ages fanning back into depth, two faint concentric
  arcs marking cycles of seven and eight beneath them. Built from the preceding
  series key, job `2cfd7596-2d93-4d14-aae4-448b3b9b9f51`, swapping that key's
  motif for the Chapter 1 motif. Attached as the image reference on every clip.
  **This key is the current head of the style-key chain**; a new chapter derives
  from its job ID, not from anything upstream of it.

### Clips

- **Clips** (`seedance_2_0_mini`, **Draft tier 480p**, 10s, 9:16 480×854,
  `generate_audio: false`, style key on each): block 1
  `91cb182e-f1a0-4f6b-ae47-a30497ced28b`, block 2
  `2297a411-da14-4555-b38e-90236633e06b`, block 3
  `6d43df60-6c3d-4d41-a809-d72a83e845fd`, block 4
  `ad8740f3-7cb8-4686-afea-66a9349f9bdc`, block 5
  `d5766bde-28bc-4599-b407-7d24838fe0b2`, block 6
  `13098368-0946-4274-aa85-82c8cece77a5`, block 7
  `4ced7480-9d72-4cc7-89b8-74f56049ddab`, block 8
  `babfdc44-bc86-47bd-8578-6e7b22f3f65b`.

All eight returned **480×854 vertical on the first pass** — the double
declaration (`aspect_ratio: "9:16"` plus "vertical 9:16 portrait framing" in the
prompt text) held on `seedance_2_0_mini`, which had not previously been confirmed
on this model. Block 1 was generated alone and its dimensions checked before the
other seven were committed. `IN THE DARK` was pre-declined on every clip; **no
preset swap was offered on any of the eight**, including the two dark-field
prompts (blocks 3 and 8) that were expected to trigger it.

### Voiceover

- **Voiceover** (`seed_audio`, presets **Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346`, **Xavier** `43173c95-3ec8-446a-a162-6504332c578b`, **Vesper** `c3204739-4084-41a3-9dc5-c805b307ec18`, **Zane** `9ddbff06-a984-4c0d-b641-4d8ca846bf60`, speech_rate 55): block 1 `5bbc4da7-98fa-4230-af3e-dbf632892366` (6.5s), block 2 `89a58a73-2399-4606-9575-9624bb42fb85` (6.6s), block 3 `6df0e397-090d-4ab7-9710-3d19227af5d8` (2.6s), block 4 `b6e5cb15-bc4c-472e-833a-a725fc28d6da` (7.2s), block 5 `d03b2e34-6f09-42f2-892b-aa18bf7ba9ba` (5.9s), block 6 `0f6e1dae-c491-49c1-abed-2fdb82c0c451` (6.4s), block 7 `e866337a-393c-4aa3-b01f-e6c1a65b77ef` (7.1s), block 8 `bc989704-7e47-46e6-bcff-fa22fa69c1ae` (5.0s).

**Superseded takes**, kept as evidence:

| Block | Job ID | Duration | Why |
|---|---|---|---|
| 2 | `534c7c8e-238a-424a-8f2d-7fc76bd9a212` | 10.78s | **Overshot the 10s window.** One sentence hinged on an em-dash; the assembler would have pitch-shifted it, breaking Xavier's register. This is the known overshoot failure mode on a new voice, caught before assembly. |
| 2 | `abcd7348-c138-4ae3-a3c3-5832ef34efca` | 6.91s | In-window, but its opening clause was 78 characters — a 3-line caption. |
| 1 | `60a57c8c-ec25-4ec8-a5c1-aec0d051f398` | 5.93s | 56-character clause, 3 lines. |
| 4 | `110cc52d-277f-46a6-b932-2d66f4a5d679` | 6.60s | 86-character clause, **4 lines**; second clause 56 characters. |
| 7 | `a6c936be-b135-40c9-bfaf-54d4b996ea8f` | 8.03s | 57-character clause, 3 lines — and at the top of the window, so it had to be shortened rather than punctuated. |

### Assembly

- **Assembly**: `explainer_video`, 8 × 10s fixed blocks, 480×854, **no
  `subtitles` parameter — captions deliberately not burned server-side.** Job ID:
  `d8a5e263-0d97-4cd9-a39e-8499e0782e17`.

**Superseded:** `39f1a90b-c4e0-4eeb-a787-14250584ec92` — the first assembly, with
`anton` captions burned by the service. Replaced because those captions overflow
(see *Captions* below), and because four of its takes are superseded.

### Credit spend

Measured against the balance, not estimated: **1,037.3 → 942.4 = 94.9 credits**
for the whole run. That balance delta is the authoritative figure.

**This run generated 20 voice takes**, counted off the job IDs recorded in this
document: 7 voice-measurement takes, 8 final block takes, and 5 superseded takes
(one block-2 overshoot, plus the four caption-fix re-records on blocks 1, 2, 4
and 7).

| Item | Count | Rate | Credits |
|---|---|---|---|
| Style key | 1 | 2 | 2.0 |
| Clips — Draft 480p | 8 | 10 | 80.0 |
| Voice takes — all of them | 20 | ~0.6 | ~12.1 |
| Subtitles on the superseded assembly | 8 blocks | 0.05 | 0.4 |
| Final assembly — no subtitles | 1 | free | 0 |
| **Total** | | | **94.9** |

**This reconciliation settles the per-take rate.** 20 takes at ~0.6 gives
`12.0 + 2 + 80 + 0.4 = 94.4` against a measured 94.9 — the residual is rounding.
At 1.0/take the run would have cost 102.4, which the balance delta rules out. So
**`SKILL.md`'s ~0.6/take is correct**, and a `get_cost` preflight returning 1
credit for a take is rounding up to a whole-credit floor rather than reporting the
billed rate. Budget voice at ~0.6.

*(An earlier version of this table listed three different totals — 94.9 in the
prose, 95.9 across its rows and 98.8 on the total line — and split the takes
across two rows at inconsistent rates. The counts above are derived from the job
IDs in this document and supersede it.)*

Live `get_cost` confirmed both tiers on `seedance_2_0_mini` at 10s / 9:16:
**480p = 10 credits/clip**, **720p = 25**. A full-tier upgrade is 8 × 25 =
**200** additional; voice takes are resolution-independent and are not re-paid.

### Reproduction notes

- Aspect ratio is **9:16 only**. The source script specified a 16:9 master with a
  9:16 cut; that inverts the house rule and doubles the clip bill. A landscape
  version, if wanted, comes from `reframe` on the finished cut.
- The narration table must stay **three columns**. `build_subtitles.js` parses
  `| n | beat | line |` with a regex that admits no fourth column — a Speaker
  column would be captured into the caption text.
- No Chapter 1 longform exists in `output/` yet, so nothing in this trailer can be
  cut from an episode. Every clip is generated fresh from the style key.
- **The `.srt` / `.vtt` are built from the real take durations** recorded in the
  voiceover line above, at the 9:16 720×1280 shipping geometry — not at the draft's
  480×854. Caption wrapping is pure frame geometry and independent of the render
  tier, so the sidecar does not need rebuilding after a full-tier upgrade; only a
  narration edit would require it.
- **Visual QA was not possible.** The CDN is blocked from this host, so nothing
  about the draft has been seen — the verification below is entirely at the
  job-metadata level: eight clips at 480×854, per-take durations all inside the
  10s window, assembly reporting 8 blocks complete at 480×854. **Whether the
  animation actually looks right is unverified and needs a human to watch the
  draft.**
### Captions — the burned path was abandoned, and why

The first assembly burned `anton` captions server-side and **six clauses
overflowed**, at up to four lines in a two-line frame. Both halves of the fix
were applied.

**1. The narration was rewritten and four blocks re-recorded.** The clauses that
failed, all now superseded:

| Block | Clause that overflowed | Needed |
|---|---|---|
| 4 | *"The people who wrote that sentence died younger than the ancestors they were praising."* | **4 lines** |
| 2 | *"I have heard that the people of high antiquity all lived past a hundred years."* | 3 lines |
| 8 | *"A dramatized adaptation of a classical philosophical text."* | 3 lines |
| 7 | *"So why did an entire civilisation copy that one sentence,"* | 3 lines |
| 4 | *"The golden age was already a memory that never happened."* | 3 lines |
| 1 | *"the founding text of Chinese medicine opens on a boast —"* | 3 lines |

Blocks 1, 2, 4 and 7 were rewritten to break those clauses and re-recorded (~3.9
credits, clips untouched). Block 7 had to be **shortened rather than
punctuated** — it was already at 8.03s, so added commas would have pushed it past
the window; it now runs 7.14s. **Block 8 was left alone**: its clause is the
disclaimer string `CLAUDE.md` mandates verbatim, and rewording a compliance
string to fit a caption is the wrong trade.

**2. The cut is assembled with no burned captions at all.** That is what actually
resolves block 8, and it converts caption fit from best-effort into a guarantee.
`explainer_video` exposes only `font` — no wrap, width, position or size — so its
captions can only ever be *influenced*. The sidecar path burns through libass with
`MarginL/MarginR` enforced, and libass cannot draw outside its margins.

**Do not switch fonts to fix a caption problem.** `anton` is the most condensed of
the four the API offers (`patrick`, `caveat`, `marker`, `anton`) and is already
the best fit; any other choice makes overflow worse.

**Why `build_subtitles.js` said "fits" while the video overflowed.** The two paths
fail differently: the sidecar pre-splits a long clause across several cues, so it
always fits, while the service chunks the voiceover on Whisper pauses, which fall
at punctuation — a clause with no internal comma has nowhere to break. **A
document can pass `build_subtitles.js` and still overflow on the assembled
video.** `scripts/check_caption_fit.js` exists to catch exactly that gap; run it
on the narration table *before* recording, when a fix is free.

**To finish this cut:** download the MP4, then

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v1.md
# then run the printed ffmpeg command against the downloaded file
```

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

### Finishing steps — run these on the downloaded MP4

The render carries **no captions and no on-screen text**. It is not uploadable as
delivered. Four steps, in order.

**1. Burn the captions.**

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v1.md
```

Then, on a **copy** of the `.srt` (re-running the builder regenerates it), **delete
cues 25 and 26** — the two from `00:01:12,500`. They caption the end-card block, so
leaving them puts the disclaimer on screen twice, once as a bottom-third caption
breaking mid-phrase (*"a classical philosophical / text."*) and again on the card
in step 3. Let the card carry that text as typography.

Burn with the command `build_subtitles.js` prints — **but the draft needs a scale
filter first.** The sidecar is computed for the 720×1280 shipping frame while the
draft is 480×854, and libass takes its resolution from the video, so burning
as-printed renders `Fontsize=54` and the 58px margins against a 480-wide frame:
roughly 50% oversized, and it overflows.

```
ffmpeg -i <downloaded-draft>.mp4 \
  -vf "scale=720:1280,subtitles=<edited>.srt:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,MarginL=58,MarginR=58,MarginV=150,WrapStyle=0'" \
  -c:a copy <cut>-subtitled.mp4
```

Drop `scale=720:1280,` when burning onto a real 720p render — the printed command
is correct as-is there. **Anton must be installed locally** (`fc-list | grep -i
anton`); libass silently substitutes another face if it is missing, and the
measured fit stops holding.

**2. History lower-third.** *"Presented as history & philosophy"*, small, faded in
~0:01 and held to ~0:08 — `CLAUDE.md` requires it within the first 10 seconds.
Place it **above the caption band**: captions are bottom-centre with a 150px bottom
margin and can run two lines, occupying roughly y=1000–1130 at 720×1280, so anchor
around **y≈880** or top-left. It is a compliance marker, not a title.

**3. End card — 70:00 to 80:00** (block 8, the black plate). The narrator reads the
disclaimer at **72.5–77.5s**, so bring the text up at the block start and hold to
the end. Centred:

> A dramatized adaptation of a classical philosophical text. Not medical advice.
>
> Written & edited by Joshua Chin

Disclaimer **verbatim** — it is the mandated string. Both lines also go in the
video description.

**4. Music.** Licensed guqin, bedded under the whole cut, ducked ~12–15 dB beneath
the voiceover. Three placements carry the edit:

- **Block 3, 20:00–30:00 — drop the music out entirely.** The 2.6s take centred in
  a 10s window leaves ~3.7s of silence either side, and that silence *is* the
  interruption. Scoring over it kills the only thing the block exists for.
- **End of block 7, at 70:00** — the hard cut to black. Let it land clean.
- **Under the end card** — fade to nothing before the cut ends.

Keep the licence receipt with the cut; trailers carry the higher Content-ID
exposure.

## Compliance notes (YouTube)

- **Disclaimer** — repo string used verbatim, in the blockquote above, spoken in
  block 8, on screen as the end card, and in the description. The source script's
  alternative wording was not adopted: changing it in one cut silently
  desynchronises Ep 1 from the rest of the series.
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
  prompt above was read against the recorded `nsfw` incident, where restraint and
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
  *anti-aging* in narration, title or thumbnail. This bullet originally logged an
  **open conflict**: the Blueprint's Ch 1 hook then read *"The 2,000-Year-Old
  Secret to Living Past 100"*, which tripped the list twice. **Resolved** — the
  hook is now *"The First Sentence of Chinese Medicine's Founding Text Is False"*
  and the Blueprint carries a standing **Title/thumbnail compliance** note. The
  rule for this cut is unchanged: the title must read as **objection**, not as
  ancient secret.

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
