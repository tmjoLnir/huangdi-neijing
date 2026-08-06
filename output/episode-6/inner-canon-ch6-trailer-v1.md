# The Emperor's Inner Canon — Chapter 6 Trailer v1 (70 seconds)

**靈蘭祕典論篇第六 · The Seating Plan**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: 9:16 vertical,
`seedance_2_0_mini` Draft 480p, 7 blocks × 10s = 70.0s, MP4.

**Cite the chapter on screen as Su Wen 8.** This edition numbers it 篇第六 and the
folder follows the input script, but Su Wen 6 in the received Wang Bing recension
is a different chapter entirely (陰陽離合論). See the numbering warning in
`inner-canon-ch6-translation-v1.md`.

Companion teaser to `inner-canon-ch6-longform-v1.md`. Source translation:
`inner-canon-ch6-translation-v1.md`.

**First cut for this chapter, so there is no prior thesis to avoid repeating.**
The trailer sells *the emperor asks for a ranking and is refused* — the shortest
true thing in the chapter, and the one that plays in sixty seconds. The longform
sells something the trailer deliberately does not touch: that the chapter
qualifies itself in §3 and then seals itself in §4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block. The speaker sits in the beat column, because
`build_subtitles.js` parses the narration table as exactly three columns.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Two thousand years ago, a Chinese medical text described the body, organ by organ, as a government. Not a machine, and not a temple. A government — twelve posts, each with a title, each answerable. |
| 2 | Arthur (V.O.) — the job titles | The liver is the general, and planning comes from it. The gallbladder is the judge, and issues decisions. The lungs are the chancellor. The stomach and spleen are the granaries. The heart is the emperor. |
| 3 | Fan-di (Xavier) — the vanity | Then rank them for me, physician. If my body keeps a court, I want the order of precedence. Which of these organs is noble, and which is base? Every court has a seating plan. Give me mine. |
| 4 | Dr-Qi (Vesper) — the refusal | I will not rank them, and neither does the text. It says the twelve must not lose one another. But it does name one risk. When the sovereign is not clear-sighted, all twelve are in danger. Beware, it says. Twice. |
| 5 | Arthur (V.O.) — the honest beat | Here is the part the chapter cannot survive. Count the twelve posts and you find eleven organs. One of them, the triple burner, has never been located in a body. Nobody can point to it. |
| 6 | Arthur (V.O.) — the withhold / title | A wrong map can still teach the right lesson. Nothing in you works alone. The Emperor's Inner Canon. Su Wen, Chapter Eight — The Body Is an Empire, and the Emperor Is the Weak Point. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and where its account of the body is wrong, we say so plainly. |

Cast: Arthur, Xavier, Vesper — `seed_audio` presets at `speech_rate` 55.

### Sized to the 8.6–10.0s speech window

Both edges are hard assembler errors. Word budgets are `SKILL.md` step-3, measured
2026-08-04 off the ch1 trailer v5 run — **not** carried from any pre-2026-08-04
document, all of which are sized to the dead 6–8s window.

| Voice | Block | Words | Budget |
|---|---|---|---|
| Arthur | 1, 2, 5, 6, 7 | 34, 35, 35, 34, 33 | 32–36 |
| Xavier | 3 | 37 | 36–41 |
| Vesper | 4 | 40 | 37–41 |

Counts verified against the parsed narration table, not by eye. They remain
**arithmetic against measured rates, not measurements** — the rates are
survivor-biased (Arthur's passing takes gave 3.65 w/s; across every recorded ch1
v5 attempt he averaged 3.04), and identical text has returned 10.23s and 7.79s on
consecutive generations. Treat the first pass as calibration and budget re-takes.

> **Count spoken words only.** A naive whitespace split counts a spaced em-dash as
> a word and silently inflates any line carrying one — which is a whole word of
> budget on a 1.4s-wide window. The counts above drop tokens containing no letter
> or digit.
>
> **The step-3 budgets were re-derived before this cut was written, and they
> hold.** Recomputing the ch1 v5 shipped lines against the assembler's own measured
> speech gives Arthur **3.63** w/s, Xavier **4.15**, Vesper **4.19** — reproducing
> `SKILL.md`'s 32–36 / 36–41 / 37–41 almost exactly. Worth knowing that the *pooled*
> figure is what reproduces: several per-block counts in the ch1 v5 table are
> individually off by up to five words (its block 1 is 39 words, recorded as 34),
> so **take the budget from the skill's rate, never from another cut's per-block
> column.**

**Lei-Gong appears and does not speak.** Zane has never been measured at length —
the only figure on record is a five-word line at 2.3–2.6s, where pause overhead
dominates. Under a hard 8.6s floor an unmeasured voice is a render failure, not a
rounding error, and ch1 v5 held him silent for exactly this reason. He is in
shots 2 and 3 as a physical presence. **Do not give him a line to stretch this
cut** without measuring him first.

**Block 7 is padded deliberately.** The mandated disclaimer is 11 words, roughly
2.9s — far under the floor, so a card block carrying only the disclaimer *cannot
assemble*. The mandated sentence sits verbatim at the head and is extended to 32
words with series framing. This applies to every cut in the repo.

## Shot list

Ink-wash flat 2D throughout, **vertical 9:16 portrait framing** written into every
prompt as well as passed as `aspect_ratio`. No text in any clip — captions come
from the tracked sidecar, and the card text is hand-added at edit time.

1. **The hook** — an empty court seen from above: twelve vacant seats in two arcs,
   lacquer floor, no people at all. Slow push in on the empty centre seat.
   *History lower-third here.*
2. **The job titles** — the seats fill, one brushstroke figure at a time, each with
   a small hanging seal-script placard (illegible at this size, deliberately —
   glyphs are hand-added later if used at all). LEI-GONG visible at the far edge,
   cinnabar robe, hand drum, plainly bored.
3. **The vanity** — FAN-DI at the low lacquer table, gold robe, glasses, **fan
   snapped open**, gesturing along the row of seats as if assigning them. Warm
   light. Lei-Gong behind him, mouthing the job titles along.
4. **The refusal** — DR-QI, blue cheongsam, open bamboo scroll held like a tablet,
   completely still. Behind her the twelve seats are joined by fine ink lines into
   a web; as she speaks, one line dims and the whole web slackens.
5. **The honest beat** — no people. Eleven ink organs settle into place on a blank
   ground; a twelfth outline is drawn and stays **empty**, an unfilled contour that
   will not resolve. Hold on the gap.
6. **The withhold / title** — the web of lines re-lights all at once, seats and all,
   then resolves to the series title card. Hard cut to black on the last syllable.
7. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added.

**Faces appear only in shots 2, 3 and 4.** The chapter's subject is posts rather
than people, so the cut stays on empty offices wherever it can — a visual thesis
as much as a safety choice.

## Production record (Higgsfield)

**Status: script only. Nothing generated.** The step-0 gate has **not** been run
for this cut. Every figure below is a planning preflight, not a priced gate — call
`balance` and `get_cost: true` live before spending anything, and record the
actual model, tier and spend here afterwards.

### Preflight — planning only

Last recorded balance in the repo: **862.6** (after the ch1 v5 run, 2026-08-04).
The one measured historical figure to check an estimate against is the ch1 v3 run:
75.6 credits for 7 clips and 7 takes.

| Item | Draft 480p | Full 720p |
|---|---|---|
| 7 clips (`seedance_2_0_mini`, 10s, 9:16) | 70 | 175 |
| Style key — chapter 6 motif, new | 2 | — |
| 7 voice takes @ ~0.8 | ~5.6 | reused |
| Captions | 0 — sidecar, never burned at assembly | 0 |
| **Total** | **~78** | **~175** |

Budget extra for re-takes on top of that: the word counts are arithmetic against
survivor-biased rates and the assembler rejects both over and under. On ch1 v5 a
single block took fourteen takes and ~11 credits.

### Style key — a new chapter motif is needed

Chain from the current head rather than starting a new look. Pass the head's **job
ID** as the reference and swap only the motif; `medias[].value` takes a `media_id`
or a prior `job_id` **only**, and a `https://` URL there fails.

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   ch1 (splitting scroll + seven-and-eight arcs)  ← current head
```

Chapter 6 motif: **twelve empty seats in two arcs, joined by fine ink lines, the
centre seat larger than the rest.** `nano_banana_pro`, 9:16 768×1376. Record the
returned job ID here as the new head, and add a lineage entry.

### Clips — not generated

`seedance_2_0_mini` at the tier confirmed at the step-0 gate, 10s,
`aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" in every prompt
text. The double declaration has held on this model across three cuts; a full set
has previously come back landscape without it. Pre-decline `IN THE DARK`
(`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every clip — shots 1, 5 and 7 are
dim-lit and it is the most frequent trigger by far. It takes **one id per call**,
so budget a retry for each newly-triggered preset.

**Generate block 1 alone and check its returned dimensions before the other six.**

**`generate_audio: false` on every clip.** This is a correctness requirement, not a
saving: `assemble_final.sh` mixes clip audio in at 0.12 under the voice rather than
discarding it, so a clip generated with native audio is audible in the finished cut
and the only fix is regenerating the clip.

### Voiceover — not generated

`seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take per block.

| Block | Voice | `voice_id` |
|---|---|---|
| 1, 2, 5, 6, 7 | Arthur | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` |
| 3 | Xavier | `43173c95-3ec8-446a-a162-6504332c578b` |
| 4 | Vesper | `c3204739-4084-41a3-9dc5-c805b307ec18` |

Record each take's job ID, its file duration **and** the assembler's measured
speech figure — they differ, and the second is the one that was gated. **To three
decimal places**: a ch1 v5 take logged as "8.50s pass" was 8.497s, 0.103s under
the floor, and stopped the assembly. A take within ~0.2s of either edge is checked
against the number, never eyeballed.

Measure rather than infer:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

### Assembly — not run

`sandbox_exec` → `assemble_final.sh`, 7 blocks, `--manifest pairs.txt`. There is
**no assembly job ID to record** — capture the flags, the manifest and the exported
`media_id` instead, plus any WARNs accepted rather than fixed.

**Run it foreground.** ch1 v5 lost a whole run to `background: true` — the
transport call timed out and the sandbox was reclaimed with nothing on disk. A
7-block assembly finishes inside the 120s foreground budget.

Download, assemble and export must go in **one** chained command: the sandbox is
discarded ~10 seconds after a call returns and files do not survive between calls.
Call `media_upload` before the assembling command, append the `curl -f -X PUT
--upload-file` to that same command, and `media_confirm` only after HTTP 200.

**Expect 496×864, not 480×854.** The assembler rescales rather than passes clip
geometry through, and it is ~2% wider than true 9:16. Build the sidecar and any
burn against the geometry the run actually returns.

### Captions — not built

Sidecar only; `assemble_final.sh` rejects `--subs` outright. Build after the takes
exist, because `build_subtitles.js` reads take durations out of the voiceover line
in this record:

```
node scripts/check_caption_fit.js output/episode-6/inner-canon-ch6-trailer-v1.md
node scripts/build_subtitles.js  output/episode-6/inner-canon-ch6-trailer-v1.md
```

**No `.srt`/`.vtt` ships with this document yet, by design** — the cues are timed
from take durations that do not exist. Build and commit them with the render.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly. The step-0
  gate is outstanding and is a hard gate.
- **Measure before committing.** Every word count here is arithmetic against
  survivor-biased rates. One take per voice through `speech_metrics.sh` first.
- **Zane is unmeasured at length** and Lei-Gong is deliberately silent here.
- **The CDN is normally blocked from the repo host**, so the finished MP4 usually
  cannot be fetched back for visual QA. Say which checks actually ran.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Shot 1.
- **End disclaimer card** — mandated string verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers. Not a generic recipe — block numbering and timecodes differ
between versions of the same chapter, and that is where the mistakes land. Both
caption scripts are pure text tools: they read this document, touch no video, need
no network and cost no credits. **Both take a path relative to the current
directory — run them from the repo root, or pass an absolute path.**

**1. Check captions.** Run before generating takes; a fix is free at that point and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/episode-6/inner-canon-ch6-trailer-v1.md
```

✅ **Ran at script stage, and the narration was rewritten until it passed.** The
only remaining report is block 7's mandated-disclaimer exception; every other
clause fits in two lines. Exit 1 is a designed signal here, not a crash — the
mandated string cannot be reworded.

Two clauses did overflow on the first pass and were fixed **before** any take
exists, which is free: block 1's *"a Chinese medical text described the human body
as a government."* (1372px, 3 lines) took an internal aside — *"described the body,
organ by organ, as a government"* — and block 7's closing clause (1202px) was
inverted to put the comma inside it. With the server-burn path gone these would
have been readability rather than render failures, but each would have cost a
re-take and a re-assembly to fix afterwards.

**2. Build the sidecar** — after the takes exist and their durations are in the
record above.

```
node scripts/build_subtitles.js output/episode-6/inner-canon-ch6-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
00:01:00,000) so the disclaimer is not simultaneously a caption and a card. The
burn copy is blocks 1–6 only.

**3. Burn.** Run `ffmpeg -version` and `fc-match Anton` *before* starting — the
session-start hook installs both, and a missing Anton substitutes a wider font
silently while `build_subtitles.js` still reports the line as fitting. Burn at the
cut's **own returned geometry**; do not scale a 480p draft up to 720×1280, which
introduces a vertical stretch. Convert the `.srt` to `.ass` and re-target
`PlayResX/Y` to the actual output resolution first — ffmpeg's SRT→ASS converter
hardcodes 384×288, which scales every style value by roughly 4.4× and runs the
lines off frame. Scale the five style values (`Fontsize`, `MarginL`, `MarginR`,
`MarginV`, `Outline`) from the 720×1280 house design by the real frame ratio.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:01, out
at 0:08, sitting clear above the caption band. Added by `drawtext` in the burn pass.

**5. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

**6. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
block 5** — the empty-outline beat is the cut's only silence and plays better dry.
Out at the block 6 cut to black at 1:00. **This cannot be moved to the assembler's
`--music` flag**: `--music-vol` clamps at 0.20, which does land in range, but it
mixes one continuous bed with no dropout window, so the block-5 gap requires a hand
mix either way.

## Compliance notes (YouTube)

Audited at script stage, against the prompts as well as the narration, per the
compliance gate — a non-compliant clip is a paid re-render.

- **Disclaimer** — repo string verbatim: blockquoted above, at the head of block 7's
  narration, on screen as the end card, and in the description. The spoken block is
  extended past the mandated string to clear the 8.6s floor; the mandated sentence
  itself is unaltered.
- **Mortality / ageing** — **absent.** This chapter's own longevity clause
  (以此養生則壽, *"nourish life by this and there is length of years"*) is in the
  translation and in the longform, and is **deliberately kept out of the trailer**.
  It is the chapter's least defensible sentence and the hardest to hedge in ten
  seconds.
- **Fertility content** — **absent.** 腎者，作強之官 is rendered as *exertion* and
  *skill*, which is the better-supported reading; the trailer does not use the line.
- **Indulgence / alcohol** — **absent.**
- **Health content** — no dosage, regimen, diagnosis or benefit claim. Every organ
  statement is explicitly reported as what a text says, and block 5 states that the
  list does not correspond to anatomy.
- **Supernatural hook, explicitly debunked** — the hook is a mystery (*your body has
  a court*) and the payoff is deflationary in the same cut: block 5 says one of the
  twelve has never been located in a body. **The debunk is inside the trailer, not
  deferred to the episode**, which is the rule.
- **Title and thumbnail honour the payoff** — *"The Body Is an Empire, and the
  Emperor Is the Weak Point"* is the chapter's actual argument, not a tease.
  **Banned terms checked**: no *longevity*, *live to 100*, *ancient secret* or
  *anti-aging* anywhere in the cut, its title or its thumbnail direction. This
  chapter's blueprint entry carries a specific warning about exactly that failure.
  **Thumbnail direction:** twelve empty seats from above, one larger and centre,
  with a single seat left as an unfilled outline. It reads *one of these is missing*,
  which is the real claim.
- **Hedge allocation** — two characters speak, so this is a per-cut decision the
  notes must record. **Arthur retains every load-bearing claim**: the framing (1),
  the job titles (2), the anatomical correction (5), the payoff and title (6), and
  the disclaimer (7). Fan-di carries only vanity. Dr-Qi carries a claim *about the
  text* — the refusal to rank, and 戒之戒之 — which is textually accurate and
  attributed in-line (*"and neither does the text"*, *"It says"*). **No compliance
  hedge rests on a character voice.**
- **Historical accuracy** — two risks, both handled. The chapter number is stated as
  **Su Wen Chapter Eight** on screen, because "Chapter 6" would point a checking
  viewer at 陰陽離合論. And block 5's count must stay exact: twelve *posts*, eleven
  *organs*, with 脾胃 sharing one office — the tally has to survive a viewer counting
  along.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: empty seats, ink
  lines, brushstroke figures, two seated characters. **No restraint or bound-figure
  imagery**, which has tripped the safety filter here before even on innocuous
  subject matter. No falling bodies; shot 5 carries the chapter's failure with an
  unfilled outline rather than with a person.

## Runtime levers

**Cut to 0:50** — drop blocks 2 and 5. Runs 1 → 3 → 4 → 6 → 7. Costs the anatomical
correction, which is the cut's compliance payoff — **acceptable only if block 6 is
rewritten to carry the debunk**, otherwise the hook goes out undebunked and the cut
fails the repo's own supernatural-hook rule.

**Cut to 0:40** — blocks 1 → 3 → 4 → 7. Keeps the request and the refusal together,
which is the pairing that must not be split.

**Stretch to 1:30** — add two blocks after 4: Arthur on 主不明則十二官危 as a claim
about *systems* rather than about hearts, and Arthur on the chapter ending sealed in
a named room. Both are longform v1 material and need no new voices. **Do not add a
Lei-Gong block to stretch** without measuring Zane first.

**Blocks 3 and 4 are a pair**, and **blocks 1 and 5 are a pair** — the hook and its
debunk. **Block 7 is not a lever.**
