# The Emperor's Inner Canon — Chapter 28 Trailer v1 (70 seconds)

**口問篇第二十八 · Clear the Room**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical**,
`seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

**Record the actual returned resolution here on render, not the target.** The
ch1 v5 run returned **496×864** from 480×854 clips — the assembler *rescales*
rather than passing clip geometry through, and 496×864 is not exactly 9:16
(0.5741 against 0.5625). Every caption and overlay value downstream derives from
whatever this cut actually returns, so it goes at the top of the document the
moment it is known.

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
(通評虛實論). Both halves of the canon run to eighty-one chapters and are
numbered separately, so a bare "Chapter 28" is ambiguous by construction — see
the numbering warning in `inner-canon-lingshu28-translation-v1.md`.

Source translation: `inner-canon-lingshu28-translation-v1.md`. Companion longform:
`inner-canon-lingshu28-longform-v1.md`, whose Act I and Act V this previews.

**First cut on this chapter, so there is no thesis to avoid repeating** — unlike
the Chapter 1 folder, where five trailers each had to sell a different claim.
This one sells the chapter's own frame: **an emperor sent the room away so that
nobody would hear him ask why he yawns.** The hook is the question everybody
already has; the withhold is that it is still open.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block. The speaker sits in the beat column, because
`build_subtitles.js` parses the narration table as exactly three columns and a
fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Everybody yawns. Dogs yawn, birds yawn, and an unborn child yawns in the womb, months before it has ever seen anyone else do it. Two thousand years of asking, and still nobody knows why. |
| 2 | Arthur (V.O.) — the scene | One man wrote the question down. An emperor, at leisure, sent every attendant out of the room, because the questions he meant to ask, all twelve of them, were beneath him, and he knew it. |
| 3 | Fan-di (Xavier) — the humiliation | I was mid-proclamation. Forty ministers, one good speech, and then my own face betrayed me, in front of all of them. I cleared the hall, and now, with the doors shut, I intend to find out whose fault that was. |
| 4 | Dr-Qi (Vesper) — the mechanism | Nobody's fault. Your defensive qi walks the outside of you all day, and drops into the dark half of you at midnight. Yin has already settled low; yang has not finished. One pulls up, one pulls down, and you yawn. |
| 5 | Arthur (V.O.) — the system | He asked eleven more. The hiccup, the sneeze, the catching sob, the ringing ear, and why a man bites his own tongue. Twelve questions in all, and, underneath every one of them, a single machine. |
| 6 | Arthur (V.O.) — the withhold / title | The answer is complete, elegant, and wrong. Stranger still is the part he never found, because he had just sent everyone out of the room. The Emperor's Inner Canon. Lingshu twenty-eight: Why We Yawn. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we say plainly, every time, where the evidence does not support it. |

Cast: Arthur, Xavier, Vesper — `seed_audio` presets at `speech_rate` 55.

### Sized to the 8.6–10.0s speech window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges
hard errors. Budgets are `SKILL.md` step 3, measured 2026-08-04 off the ch1
trailer v5 run — **not** copied from another cut's per-block column, several of
which are individually off by up to five words:

| Voice | Blocks | Words | Budget |
|---|---|---|---|
| Arthur | 1, 2, 5, 6, 7 | 34, 35, 35, 34, 33 | 32–36 |
| Xavier (Fan-di) | 3 | 40 | 36–41 |
| Vesper (Dr-Qi) | 4 | 40 | 37–41 |

Counts are machine-generated from the parsed narration table, dropping tokens
that contain no letter or digit — a spaced em-dash is not a word, and counting it
as one spends a whole word of budget on a window 1.4s wide.

**Every line also passes `check_caption_fit.js` at 9:16** — but note the trade,
because it is the same one ch1 v5 recorded. A first pass at these lengths put
**five** clauses over the two-line budget; each was broken with an internal comma
at script stage, which is free, rather than after recording, which costs a
re-take. Blocks 2, 3 and 5 each gained a comma-bounded aside for exactly this
reason. **Expect that trade on every cut written to the 8.6s floor** — the longer
lines the window demands are precisely the lines that overflow a vertical caption.

**These are arithmetic against measured rates, not measurements.** Treat the
first pass as calibration and budget re-takes: the rates are survivor-biased
(Arthur's *passing* takes give 3.65 w/s; across every recorded ch1 v5 attempt he
averaged 3.04), and the run-to-run spread on identical text has been measured at
2.44s — wider than the 1.4s window itself. Expect misses on **both** sides and
re-roll once before rewriting.

**Lei-Gong does not speak in this cut.** Zane has never been measured at length,
and under a hard 8.6s floor an unmeasured voice is a render failure rather than a
rounding error. He is not in the trailer's shot list either — the longform gives
him four blocks and a running visual role, and this cut deliberately does not
spend the calibration on a 70-second teaser.

**Block 7 is padded, deliberately.** The mandated string is 11 words, roughly
2.9s — far under the floor, so a card block carrying only the disclaimer
**cannot assemble**. The mandated sentence sits verbatim at the head and the
block is extended to 33 words with series framing. This applies to every cut in
the repo.

**Two things this cut must not claim, and the narration is written around both.**
Block 1 says *nobody knows why* — which is the actual state of the literature,
not a rhetorical flourish, and it must not be softened into *scientists have
discovered*. Block 6 says the classical answer is **wrong**, in the trailer,
before anyone has clicked. A supernatural-adjacent hook debunked only in the
longform would not satisfy the repo's rule; here the debunk is in the teaser.

## Shot list

Numbered to match the narration blocks. **Vertical 9:16 portrait framing**,
flat 2D ink-wash house style, chained off the chapter style key. Text-free
throughout — captions come from the tracked sidecar, and the end card's text is
hand-added at edit time.

1. **The hook** — a sequence of open mouths that are never quite faces: an
   ink-brush dog, a bird on a branch, a curled ink form suggesting a child in the
   round. Each opens, holds, closes. Slow, hypnotic, one per beat. *History
   lower-third here — it is required inside the first ten seconds.*
2. **The scene** — a wide hall from behind the throne, courtiers walking **out**
   in a long file, backs to camera, the doors closing behind the last of them.
   The room empties as the line is spoken. No faces.
3. **The humiliation** — FAN-DI at the low lacquer table, gold robe, glasses,
   **fan snapped open** and working hard. Warm lamplight. He is performing being
   fine about it.
4. **The mechanism** — DR-QI, blue cheongsam, open bamboo scroll held casually
   like a tablet, completely still. Behind her, a vertical ink diagram: a bright
   band circling the outside of a standing figure, sinking at the base of the
   frame into a dark band. The two bands pull in opposite directions.
5. **The system** — no people. Twelve small ink cartouches arriving one after
   another down the vertical frame, each holding a single brushed character
   (欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌). The cut's only fast
   sequence.
6. **The withhold / title** — the twelve cartouches drain away and leave one
   empty mouth-shaped negative space in the middle of the frame. Resolves to the
   series title card. Hard cut to black on the last syllable.
7. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added at
   edit time.

**No faces in shots 1, 2, 5, 6 or 7**, and no face in shot 1 by design — the
first ten seconds are mouths and motion, not portraits, which is both the
strongest hook available and the safest opening the chapter can have.

**Shot 5 carries in-frame Chinese text and is the one exception to the text-free
rule in this cut.** Generated Chinese glyphs cannot be checked from this host
(the CDN has been blocked on every cut), so the default is to render block 5 as
**twelve empty cartouches and add the characters at edit time** with the
`drawtext` pass. Twelve characters a viewer can compare against any edition is
exactly the wrong place to trust a generative model. See *Finishing steps* 5.

## Source-script mapping

Sections are those of `inner-canon-lingshu28-translation-v1.md`.

| Translation § | Passage | Blocks |
|---|---|---|
| §1 | 辟左右 — the room is cleared | 2, 6 |
| §1 | 論不在經者 — what is not in the classics | 6 |
| §2 | 人之欠者，何氣使然 — the question | 1, 3 |
| §2 | 衛氣晝日行於陽，夜半則行於陰 | 4 |
| §2 | 陽引而上，陰引而下，陰陽相引 | 4 |
| §3–§13 | the remaining eleven riddles, as a list | 5 |
| §14 | 凡此十二邪者 — the count of twelve | 5 |
| — | the reckoning; contagious yawning | 6 (withheld), longform Act V |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam, never jade. The docs slate's working title
*Why We Yawn* is kept for the episode; **Clear the Room** is this cut's short
name, not a competing title.

**One count reconciliation, and it is a correction to the slate.** `docs/Chronicle
of Balance Top20 Chapter Slate.md` describes this chapter as *"eleven rapid-fire
questions"*. **The text says twelve** — 凡此十二邪者 — and twelve is what §15
recapitulates. Block 5 says *"He asked eleven more"* after block 1 has already
posed the yawn, which totals twelve and is deliberate. Anything on screen that
counts must be built from the translation file.

**Dramatic material not in the source, flagged as invention:** the ministers, the
speech and the public humiliation in block 3. **The classical text has no scene
at all** — 黃帝閒居, *the Yellow Emperor at leisure*, is the whole of the staging,
and the Emperor gives no reason for asking. That he was embarrassed is ours. What
is *not* invented is the clearing of the room: 辟左右 is in the first sentence of
the chapter, and it is the reason this cut exists.

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run for
this cut.** The figures below are a planning preflight, not a priced gate — call
`balance` and `get_cost: true` live before spending anything.

### Preflight

Last recorded balance: **862.6** (after the ch1 v5 run, 2026-08-04). The ch1 v3
run is the repo's only measured delta: **75.6 credits** against a ~74 estimate,
for 7 clips and 7 takes.

| Item | Draft 480p | Full 720p |
|---|---|---|
| 7 clips (`seedance_2_0_mini`, 10s, 9:16) | 70 | 175 |
| Style key — **new chapter motif, not a reuse** | 2 | — |
| 7 voice takes @ ~0.8 | ~5.6 | reused |
| Captions | 0 — sidecar, burned locally, never at assembly | 0 |
| **Total** | **~78** | **~175** |

**Budget re-takes on top of that.** On ch1 v5 a single block took fourteen takes
and ~11 credits. Seven blocks at a 20% re-take rate is ~1.2 credits of voice —
trivial in credits, and the reason to care is calibration time, not money.

**The style key is a real 2 credits here, not a reuse.** Chapters 1 and 46 reused
the ch1 head; this chapter needs its own motif. See *Style key* below.

### Step-0 gate — outstanding

Not run. Nothing generates until `balance` has been called, `get_cost: true` has
priced one representative clip in the chosen configuration, and the user has
confirmed **model and Draft/Full**. `seedance_2_0_mini` at 480p is the house
default and makes this a confirmation rather than an open question — but it is
still a gate.

**Draft then Full is the house default and should be kept here.** This cut is
doing something the folder has not done: block 1 is three non-human mouths in
sequence, and block 5 is twelve in-frame Chinese cartouches. Neither has been
seen moving in this style.

### Style key — new, and it needs generating

The chapter needs its own key. Chain from the current head rather than starting a
new look:

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   ch1 (splitting scroll + seven-and-eight arcs)  ← current head
```

Pass that **job ID** as the reference and swap only the chapter motif. Model
`nano_banana_pro` (served by `nano_banana_2`), 9:16 768×1376.

**Motif for chapter 28:** the three-character series key with **an empty
throne-room doorway standing open behind them**, and twelve small unlit paper
lanterns hanging in two rows above. Empty room, twelve waiting lights — it reads
as *the questions asked once everyone had gone*, and it gives Act V's contagion
beat something to light up.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails. Record the returned job ID here as the new chapter key **and** as the
new head in `SKILL.md` step 1, and add the motif to that entry.

**The longform needs a 16:9 sibling derived from this key** — generate the
vertical one first, here, and derive landscape from it. Do not overwrite the
vertical key; this trailer needs it.

### Clips

Not generated. Model and tier from the step-0 gate. 10s, style key attached to
every clip, `aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing"
written into every prompt text — the double declaration has held on this model
across three cuts, and a full set of clips has previously come back in the wrong
orientation without it.

- **`generate_audio: false` on every clip.** A correctness requirement, not a
  saving: `assemble_final.sh` mixes clip audio in at 0.12 **under** the voice
  rather than discarding it, so a clip generated with native audio is audible in
  the finished cut and the only fix is regenerating the block.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every
  clip. Blocks 2, 6 and 7 are dim, and it is the most frequent trigger by far. One
  id per call, so budget a retry for each newly-triggered preset.
- **Generate block 1 alone and check its returned dimensions** before the other
  six. One wasted clip beats a whole set.
- **Duration ≥ 9.5s and motion from frame 1.** The assembler rejects a clip under
  9.5s outright and warns on a static open or frozen tail. **Blocks 1, 4 and 7 are
  the exposed ones** — a held mouth, a still physician and a plain plate all
  invite a frozen frame. Give each continuous motion: the mouths open and close on
  a cycle, the diagram behind Dr-Qi keeps circulating, the plate carries drifting
  ink grain.
- **Keep audio vocabulary out of clip prompts** — *drum*, *drone*, *music*,
  *rhythm* — since those are edit-time directions anyway and *rhythm* triggers
  `DROWN IN MUSIC`.

### Voiceover

Not generated. `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take
per block, **one speaker per block** — verified: no block above contains two
voices.

| Role | Preset | `voice_id` |
|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` |

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ, and the second is the one that
was gated. A ch1 v5 take logged as "8.50s pass" was 8.497s — 0.103s under the
floor — and stopped the assembly. A take within ~0.2s of either edge is checked
against the number, never eyeballed.

**Measure block 4 first.** Vesper at 40 words is the most exposed line here, and
her one measured take is a single trailer beat rather than a sustained
explanatory paragraph.

### Assembly

`sandbox_exec` → `assemble_final.sh`, 7 blocks, `--manifest pairs.txt`. There is
**no assembly job ID to record** — capture the flags, the manifest and the
exported `media_id` instead.

- **Run it foreground.** ch1 v5 lost a whole run to `background: true` when the
  transport call timed out and the sandbox was reclaimed with nothing on disk. A
  7-block assembly finishes inside the 120s foreground budget.
- **Download, assemble and export go in ONE chained command.** The sandbox is
  discarded ~10 seconds after the call returns and nothing archives the file for
  you: call `media_upload` first, append `curl -f -X PUT --upload-file` to the
  same command, and `media_confirm` only after HTTP 200.
- **No `--subs`** — passing it is a hard error. Captions are a separate step.
- **Name files `blockNN.mp4` / `voiceNN.wav`** and keep the numbers aligned; the
  script cross-checks each pair and calls a mismatch "the #1 cause of audio on the
  wrong block". Do not reach for `--allow-mismatch` to silence the assert.

### Captions

Sidecar only. **No `.srt`/`.vtt` ships with this document yet, by design** — the
cues are timed from take durations that do not exist. Build and commit them with
the render, and regenerate after any narration or take change.

```
node scripts/check_caption_fit.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md
node scripts/build_subtitles.js  output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md
```

9:16 is the hard case — roughly half the caption room of the longform frame — so
judge wrapping here, not on the landscape cut.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly. The step-0
  gate is outstanding and is a hard gate.
- **The style key is new** and is the first new chapter motif since ch1. Record
  its job ID here and promote it to `SKILL.md` step 1 as the new head.
- **Zane is unmeasured at length** and is deliberately absent from this cut.
- **The CDN is normally blocked from the repo host**, so the finished MP4 usually
  cannot be fetched back for visual QA. The sandbox has its own network access and
  can probe the render next to where it was built — but **a probe is not a
  viewing**. Say which checks actually ran.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on
  screen within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers — 7 blocks, 70.0s, block boundaries at every 10s, end card
**1:00 to 1:10**. Not a generic recipe: block numbering and timecodes differ
between versions of the same chapter, and that is where the mistakes land. Both
caption scripts are pure text tools — they read this document, touch no video,
need no network and cost no credits. **Both take a path relative to the current
directory: run them from the repo root, or pass an absolute path.**

**1. Check captions**, before generating takes. A fix is free at that point and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md
```

**This document exits 0 as written — verified 2026-08-07.** It prints one report
and still passes, which is worth spelling out because the two are easy to
conflate: block 7's first clause is the mandated disclaimer, it genuinely needs
**three lines** at 9:16 (1187px against a 1111px two-line budget), and
`check_caption_fit.js` routes it to `known` rather than `bad`. Only `bad` entries
increment the failure count, so **the exception is reported and the exit code
stays 0**. It is a compliance string and is never reworded.

A first pass at these word counts *did* exit 1, on five real overflows in blocks
1, 2, 3, 5 and 6; those were fixed with internal commas before this version. If a
future edit re-introduces one, **exit 1 is the designed signal, not a crash** —
with the server-burn path gone it is a *readability* finding rather than a render
failure, since the sidecar pre-splits wide clauses and libass margins keep them in
frame. Fix at script stage anyway: after recording it costs a re-take.

**Note the asymmetry with the longform**, which exits 0 *without* printing the
exception at all — the same disclaimer clause fits on one line at 16:9 (967px
against a 1001px line), so it never exceeds the cap and never reaches the report.
The vertical cut is the only place this string is visible to the checker.

**2. Build the sidecar**, after the takes exist and their durations are in the
record above.

```
node scripts/build_subtitles.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md
```

Commit the `.srt`/`.vtt` with the cut — they are tracked, required deliverables.
On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
`00:01:00`) so the disclaimer is not simultaneously a caption and a card. The
burn copy is blocks 1–6, ending at 1:00.

**3. Burn**, after assembly, on the finished MP4. Run `ffmpeg -version` and
`fc-match Anton` **before** starting — the session-start hook installs both, and a
missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and **re-target
`PlayResX/Y` to the cut's actual returned resolution first**: ffmpeg's SRT→ASS
converter hardcodes 384×288, which scales every style value by roughly 4.4× on a
720-tall frame and runs the lines off frame.

**If the assembler returns 496×864 as it did on ch1 v5, burn native and scale the
style** — do not add `scale=720:1280`, which introduces a 2.1% vertical stretch,
and do not crop, because the assembler rescales rather than pads. Scale the five
style values by the real frame ratio: at 496×864 that gave `Fontsize` 36,
`MarginL/R` 40, `MarginV` 101, `Outline/Shadow` 2/1.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:01,
out at 0:08, over block 1's mouths. At 720×1280 the design y is ≈880; scale it to
the returned frame (y=594 at 496×864). Sits clear above the caption band. Added
by `drawtext` in the burn pass, not in an NLE.

**5. Block 5's twelve characters**, if block 5 was rendered as empty cartouches —
which is the default. Add 欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌 in the
same `drawtext` pass, held across **0:40 to 0:50**, arriving in sequence rather
than all at once. **Verify every glyph against
`inner-canon-lingshu28-translation-v1.md` before export.** ffmpeg needs a CJK-capable
face here; Anton has no Chinese coverage and will render tofu boxes silently.

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across
three centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
block 5** — the twelve-cartouche sequence is the cut's only fast passage and plays
better dry, against paper-and-brush sound only. Out at the block 6 cut to black at
1:00. **This can*not* be moved to the assembler's `--music` flag**: `--music-vol`
clamps at 0.20 (≈ −14 dB, which does land in range), but it mixes one continuous
bed with no dropout window, so the block-5 gap requires a hand mix either way.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render. The slate rates this
chapter **Very Low** risk, and the trailer is the lowest-exposure surface on it.

- **Disclaimer** — repo string verbatim: blockquoted above, at the head of block
  7's narration, on screen as the end card, and in the description. Block 7 is
  extended past the mandated string to clear the 8.6s floor; **the mandated
  sentence itself is unaltered**.
- **Health content stays philosophical narrative** — no dosage, regimen,
  diagnosis or benefit claim anywhere in the cut. **The chapter's needling
  prescriptions are excluded entirely** — every riddle in the source closes with
  one, and not a single one appears in this document, the shot list, or the
  on-screen text. Nothing tells a viewer to do anything.
- **Mortality / ageing** — **absent.** No lifespan claim of any kind. §9's
  奪精 passage (weeping until sight fails) is longform material and is not in
  this cut.
- **Fertility content** — **absent.** §8's ambiguous 行陰用力 is not referenced
  here, and the longform takes the neutral reading.
- **Indulgence / alcohol** — **absent.** No feast, no vessels, no drinking
  anywhere in the shot list.
- **Supernatural hooks explicitly debunked by the payoff** — the hook is *nobody
  knows why you yawn*, which is a statement about the state of knowledge, not a
  mystery claim. **The classical answer is called wrong inside the trailer**, in
  block 6, before a viewer has clicked anything. The debunk is not deferred to the
  longform.
- **Title and thumbnail honour the educational payoff** — working title *Why We
  Yawn* (docs slate), this cut's short name *Clear the Room*. **Banned terms
  checked**: no *longevity*, *live to 100*, *ancient secret* or *anti-aging* in the
  script, the title or the thumbnail direction. **Thumbnail direction:** an
  emptying hall seen from behind the throne, courtiers in a file walking out, no
  faces — it reads as *he made them leave before he asked*, which is the actual
  claim. Do not use a caricature yawn; it reads as a listicle.
- **Hedge allocation — two characters speak, so this needs recording.** **Arthur
  retains every load-bearing claim without exception**: the state-of-knowledge
  statement (1), the historical framing (2), the count and the system (5), the
  *it is wrong* verdict and the title (6), and the disclaimer (7). Fan-di carries
  vanity and the setup. **Dr-Qi carries the classical mechanism in block 4, and
  that is the one line to watch** — it is delivered in the second person (*your
  defensive qi*), which is dramatisation, not instruction, and it is bracketed by
  Arthur calling it wrong six blocks later. **No compliance hedge rests on a
  character voice.**
- **Historical accuracy** — three risks. (1) The chapter is cited on screen as
  **Lingshu 28**, never a bare "Chapter 28". (2) Block 1's *nobody knows why* is
  the literal state of the literature and must not drift into *scientists have
  discovered* in any edit. (3) Block 5's count is twelve, not the slate's eleven;
  the on-screen cartouches must number twelve and match the translation file.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload, per the
  slate's §6 open item. No character makes a first-person factual assertion about
  their own expertise.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: ink mouths, an
  emptying hall, two seated figures, cartouches, a plate. **No restraint or
  bound-figure imagery**, which has tripped the safety filter here before even on
  innocuous subject matter. No bodies, no injury, no falling figures. **One item
  to watch at prompt stage:** shot 1's curled ink form suggesting a child in the
  round. Keep it **abstract and non-anatomical** — a brushed spiral with a mouth,
  not a rendered fetus. If a prompt returns anything anatomical, replace the beat
  with a fourth animal rather than iterating on it.

## Runtime levers

**Cut to 0:50** — drop blocks 2 and 5. Runs 1 → 3 → 4 → 6 → 7. Opens on the hook
and goes straight to the humiliation, which is faster, but it costs the frame
(*he cleared the room*) that block 6's payoff depends on — block 6 then refers to
a room-clearing the viewer never saw. **Prefer dropping 5 alone** for 1:00.

**Cut to 0:40** — blocks 1 → 3 → 4 → 7. Keeps the question and its classical
answer together, which is the pairing that must not be split, and keeps the card.
Costs the debunk in block 6, which is a **compliance regression, not just an
editorial cut** — at 0:40 the *it is wrong* verdict has to move into block 4's
tail or the cut should not ship.

**Stretch to 1:30** — add two blocks after 5: Arthur on 一曰, *another says* —
the chapter recording two teachers who disagreed and keeping both — and Arthur on
contagious yawning as the thing a cleared room makes invisible. Both are longform
Act II and Act V material and need no new voices. **Do not** add a Lei-Gong block
to stretch without measuring Zane first.

**Blocks 1 and 6 are a pair** — the open question and the verdict that it is still
open. Shipping the hook without the verdict leaves a mystery claim standing.
**Block 7 is not a lever.**
