# The Emperor's Inner Canon — Chapter 28 Trailer v2 (80 seconds)

**口問篇第二十八 · Twelve Small Rebellions**

**Rendered 2026-08-08 — draft tier.** `seedance_2_0_mini` @ 480p, 8 blocks × 10s,
**delivered 496×864, 80.064s, 24fps, MP4**.

**Final render:**
<https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/130c2638-1ab5-413a-8ace-294890dc5ccc.mp4>
— `media_id` `130c2638-1ab5-413a-8ace-294890dc5ccc`. **This link expires; archive
the MP4 by hand if it is worth keeping** (renders are gitignored and are not in this
repo). It cannot be fetched from the repo host — see *Reproduction notes*.

**Current deliverable — 720×1280, all on-screen text bar the cartouche glyphs:**
<https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/64d9ea0a-8ba9-40f0-b6f4-e7e33dd6c460.mp4>
— `media_id` `64d9ea0a-8ba9-40f0-b6f4-e7e33dd6c460`. Captions (blocks 1–7), history
lower-third (0:01–0:08), end card and editorial credit (1:10–1:20).

**Built in a single pass from the assembly, not by stacking on the previous
deliverable.** Scale, captions, scrim, card and lower-third are one filter chain, so
the shipped file is **two encode generations** from the assembler rather than four.
Re-running the whole finishing pass is one command and costs nothing, so prefer that
over adding another layer to an already-encoded cut.

Prior stages, kept for reproduction and superseded as deliverables: assembly
`130c2638-…` (496×864, no text); captions only `0a013c99-…`; captions + card
`04409d47-…`.

**Still outstanding:** the licensed guqin bed, and **two open render defects** —
block 3 shows ~36 cartouches where the script says twelve (glyphs deliberately not
added, 2026-08-08), and block 8's plate needed a scrim to make the disclaimer legible.
Both want regenerating before any full-tier render; neither blocks this draft.

**Delivered geometry: 496×864** — recorded from the render, not the target. Two
things differ from the ch1 v5 run this cut was planned against, and both are new
measurements:

- **The clips themselves came back 496×864**, not the 480×854 that run reported.
  So on this cut the assembler passed clip geometry straight through and did *not*
  rescale — its `[1/3]` line declares `8 blocks -> 496x864` from 496×864 sources.
  The delivered 496×864 is therefore the same number by a different route, and the
  skill's "the assembler rescales" note is not what happened here.
- 496×864 is **0.5741**, ~2% wider than true 9:16 (0.5625). The house call stands:
  `scale=720:1280` before burning, accepting the 2.1% stretch.

**Cite the chapter on screen as *Lingshu 28*.** Su Wen 28 is a different chapter
(通評虛實論). Both halves of the canon run to eighty-one chapters and are numbered
separately, so a bare "Chapter 28" is ambiguous by construction — see the
numbering warning in `inner-canon-lingshu28-translation-v2.md`.

Source translation: **`inner-canon-lingshu28-translation-v2.md`** — the v2 rendering,
which tracks the grammatical agent of every answer. That is this cut's whole hook.
Companion longform: `inner-canon-lingshu28-longform-v2.md`, whose cold open and Act III
turn this previews.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## This is the second trailer on this chapter, and no thesis is repeated

`inner-canon-lingshu28-trailer-v1.md` is **not superseded**. Both remain; the editor
picks. The Chapter 1 folder already works this way across five trailers.

| | Runtime | Sells |
|---|---|---|
| **v1** — *Clear the Room* | 70s, 7 blocks | an emperor sent the room away so nobody would hear him ask why he yawns |
| **v2** — *Twelve Small Rebellions* | 80s, 8 blocks | twelve things a body does that nobody ordered, and a chapter that cannot decide whether you are governed |

Every narration line here is newly written, and the two cuts share no shot. v1
opens on animal mouths; v2 opens on an empty floor beneath a high seat.

## Narration (per 10s block)

One speaker per block. The speaker sits in the beat column, because
`build_subtitles.js` parses the narration table as exactly three columns and a
fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Right now, without asking you, your body is doing about a dozen things. Two thousand years ago, somebody wrote them all down, twelve of them, and asked a physician, who exactly was responsible. |
| 2 | Fan-di (Xavier) — the charge | Let the record show that this is an inquiry, and not a consultation. Twelve counts of insubordination, committed inside my own person, daily, for as long as I can remember. Somebody in here is answerable for it. |
| 3 | Arthur (V.O.) — the twelve | The yawn. The hiccup. The sneeze. The sob you cannot stop, the ear that rings, the tongue you bite by accident. Twelve things a body does, and nobody ever ordered any of them. |
| 4 | Dr-Qi (Vesper) — no defendant | Then your inquiry has a difficulty in it. You have twelve offences and no offender at all. Qi moves out at dawn, and in at midnight, the way water goes downhill, and it is obeying nobody whatsoever. |
| 5 | Arthur (V.O.) — ten of twelve | That answer holds for ten of the twelve. Ten acts with no author anywhere in them. Then the chapter reaches the eleventh, and does something it has not done once, in ten straight answers. |
| 6 | Dr-Qi (Vesper) — the ruler | The heart is the ruler of the five zang and the six fu. Grief moves it, and every organ shakes, and the tears come out. Suddenly there is somebody at the wheel, and it turns out to be you. |
| 7 | Arthur (V.O.) — the withhold / title | One book, two bodies. One an administration, where every act has an officer. The other weather. The Emperor's Inner Canon. Lingshu twenty-eight: Twelve Small Rebellions. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we mark plainly, in every episode, where the evidence does not support it. |

Cast: Arthur, Xavier, Vesper — `seed_audio` presets at `speech_rate` 55.

### Sized to the 8.6–10.0s speech window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors. Budgets are `SKILL.md` step 3, measured 2026-08-04 off the ch1 trailer v5
run — **not** copied from another cut's per-block column, including v1's:

| Voice | Blocks | Words | Budget |
|---|---|---|---|
| Arthur | 1, 3, 5, 7, 8 | 33, 33, 34, **25**, 34 | 32–36 |
| Xavier (Fan-di) | 2 | 37 | 36–41 |
| Vesper (Dr-Qi) | 4, 6 | 37, 39 | 37–41 |

**Block 7 is 25 words and deliberately below Arthur's budget — that is a measured
outcome, not an oversight.** At 33 words it returned 12.751s and 12.251s on two
consecutive rolls, ~2.6 words/sec against Arthur's 3.65. The cause is the block's
own content: it is the title block, and Arthur gives the colon in *Lingshu
twenty-eight:* and the two short title sentences an announcer's pauses that no
other block in the cut provokes. The budget column above is derived from ordinary
narration and does not describe a title drop. See the reproduction notes for all
seven takes.

Counts are machine-generated from the parsed narration table, dropping tokens that
contain no letter or digit — a spaced em-dash is not a word, and counting it as one
spends a whole word of budget on a window 1.4s wide.

**These are arithmetic against measured rates, not measurements.** Treat the first
pass as calibration and budget re-takes: the rates are survivor-biased (Arthur's
*passing* takes give 3.65 w/s; across every recorded ch1 v5 attempt he averaged
3.04), and the run-to-run spread on identical text has been measured at 2.44s —
wider than the 1.4s window itself. Expect misses on **both** sides and re-roll once
before rewriting.

**Every line also passes `check_caption_fit.js` at 9:16.** Blocks 2 and 4 each
carry a comma-bounded aside placed for exactly that reason — the longer lines the
8.6s floor demands are precisely the lines that overflow a vertical caption, and
breaking them at script stage is free while a re-take is not.

**Vesper carries two blocks here, which is a deliberate departure from v1.** She
has the cut's two load-bearing lines — the answer with no agent (4) and the answer
that suddenly has one (6) — because the hook is the *contrast between them*, and
splitting it across two voices would lose it. **Measure block 6 first**: at 39
words it is the most exposed line in the cut, sitting two words under Vesper's
ceiling, and her one measured take is a single trailer beat rather than a sustained
explanatory paragraph.

**Lei-Gong does not speak in this cut.** Zane has never been measured at length,
and under a hard 8.6s floor an unmeasured voice is a render failure rather than a
rounding error. The longform gives him five blocks and the closing tally; this cut
deliberately does not spend the calibration on an 80-second teaser.

**Block 8 is padded, deliberately.** The mandated string is 11 words, roughly 2.9s
— far under the floor, so a card block carrying only the disclaimer **cannot
assemble**. The mandated sentence sits verbatim at the head and the block is
extended to 34 words with series framing. This applies to every cut in the repo.

## Shot list

Numbered to match the narration blocks. **Vertical 9:16 portrait framing**, flat
2D ink-wash house style, chained off the chapter style key. Text-free throughout —
captions come from the tracked sidecar, and the end card's text is hand-added at
edit time.

1. **The hook** — an empty audience floor seen from above, lit, symmetrical, with
   a high seat at the top of frame and nobody standing in the space below it. Slow
   push down toward the empty floor. *History lower-third here — it is required
   inside the first ten seconds.*
2. **The charge** — FAN-DI in the high seat, gold robe, glasses, **fan snapped
   open** and used like a gavel. Warm lamplight from below. He is enjoying the
   staging enormously.
3. **The twelve** — no people. Twelve small ink cartouches arriving one after
   another down the vertical frame, each empty. They fill the frame and then hold.
   The cut's only fast sequence.
4. **No defendant** — DR-QI, blue cheongsam, open bamboo scroll held casually like
   a tablet, completely still, standing beside the empty floor rather than in it.
   Behind her, a vertical ink diagram: a bright band circling a standing outline
   and sinking into a dark band at the base of the frame.
5. **Ten of twelve** — the twelve cartouches again, and ten of them dim out one by
   one, leaving two lit near the bottom of the frame.
6. **The ruler** — the diagram redraws. A single seated figure at the centre, a
   line rising from body to eye, and the whole composition suddenly organised
   around the centre rather than around the circuit. Dr-Qi has not moved.
7. **The withhold / title** — split composition, held: on one side a hall of
   ranked seats with a figure in each, on the other the same hall empty with only
   the circling band. Resolves to the series title card. Hard cut to black on the
   last syllable.
8. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added at
   edit time.

**No faces in shots 1, 3, 5, 7 or 8**, and shot 1 opens on an empty space rather
than a person — the strongest hook available and the safest opening the chapter
can have.

**Nobody is ever staged standing in the empty floor**, in this cut or the longform.
It is the visual joke — an inquiry with no defendant — and it is also the safety
margin, since a figure placed in a dock reads as restraint imagery, which has
tripped the safety filter here before on innocuous subject matter.

**Shot 3's cartouches are empty by design.** If the Chinese riddle characters are
wanted in them, they are **added at edit time**, not generated — see *Finishing
steps* 5.

## Source-script mapping

Sections are those of `inner-canon-lingshu28-translation-v2.md`.

| Translation § | Passage | Blocks |
|---|---|---|
| §2 | 人之欠者，何氣使然 — the agentless form of the question | 1, 3 |
| §2 | 衛氣晝日行於陽，夜半則行於陰 | 4 |
| §3–§8, §11–§13 | the nine other authorless riddles | 3, 5 |
| §9 | **心者，五藏六府之主也** — the ruler arrives | 6 |
| §9 | 悲哀愁憂則心動…故泣涕出焉 | 6 |
| §14 | 凡此十二邪者 — the count of twelve | 2, 3 |
| — | Su Wen 8, the body as a government of twelve offices | 7 |
| — | the modern reckoning; contagion | withheld — longform Acts IV–V |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam, never jade. The docs slate's working title for
this chapter is *Why We Yawn*; **Twelve Small Rebellions** is this cut's own title
and the one block 7 speaks.

**One count reconciliation, and it is a correction to the slate.** `docs/Chronicle
of Balance Top20 Chapter Slate.md` describes the chapter as *"eleven rapid-fire
questions"*. **The text says twelve** — 凡此十二邪者 — and §15 recapitulates twelve.
Blocks 2, 3, 4 and 5 all say twelve, and shot 3 shows twelve cartouches.

**Block 7's cross-chapter claim can no longer be checked inside this repo.** The
"administration where every act has an officer" is Su Wen 8 《靈蘭祕典論》. That
description was written against this repo's own `inner-canon-ch6-translation-v1.md`
under the old `output/episode-6/` folder, which the layout migration **deleted
rather than migrated** — it survives only in git history. Re-verify against the
classical text, or against the deleted file at `3398436^`, before it ships.

**If it is ever named on screen, cite it as Su Wen 8**, never as "chapter 6" — that
deleted folder followed an edition numbering it 篇第六, while Su Wen 6 in the
received recension is a different chapter (陰陽離合論). Block 7 as written does not
name it, which is the safer option for a trailer and is now also the option that
needs no verification.

**Dramatic material not in the source, flagged as invention:** the inquiry, the
charges, the hearing set and the high seat. **The classical text has no scene at
all** — 黃帝閒居, *the Yellow Emperor at leisure*, is the whole of the staging, and
the Emperor gives no reason for asking. What is *not* invented is the shape the
cut turns on: ten answers with no grammatical agent and two with one. That
distribution is a fact about the Chinese and is tabulated in the translation file.

## Production record (Higgsfield)

**Status: rendered at draft tier 2026-08-08.** Step-0 gate run and cleared; model
and tier confirmed by the user before anything generated.

### Credit spend — actual against preflight

**Balance 655.4 → 552.0 = 103.4 credits.** The preflight said ~86. The gap is
entirely in voice, and it is a lesson about the preflight rather than about the
cut:

| Item | Live `get_cost` | Count | Expected | Actual |
|---|---|---|---|---|
| Clips `seedance_2_0_mini` 480p 10s 9:16 | 10.0 | 8 | 80 | 80 |
| Style key `nano_banana_pro` 1k 9:16 | 2.0 | 1 | 2 | 2 |
| Voice takes `seed_audio` | **0.5** | **16** | 8 | **~21.4** |
| Assembly, captions | free | — | 0 | 0 |
| | | | **~90** | **103.4** |

**Clips and the style key priced exactly. Voice did not, and the preflight is why.**
`get_cost` was called on a 13-word string and returned `credits_exact: 0.5`. Every
shipped line is 25–39 words, and the implied rate across the 16 takes actually
generated is **~1.34 credits each** — nearly 3× the quoted figure and well above
the 0.8 the skill budgets from the ch1 balance-delta method.

**So `seed_audio` bills by length, and a short probe string under-prices the run.**
Cost a *representative-length* line, not a convenient one. On this cut the error was
~13 credits and harmless; across a ~110-block longform the same mistake mis-states
the voice bill by ~100 credits.

**Balance after this run: 552.0.** Note this is also the first live balance read
since the repo's records drifted: the document had 862.6 and `SKILL.md` inferred
~782, but the actual figure at step 0 was **655.4**.

### Step-0 gate — run and cleared

All five preflight steps completed before any spend:

1. **Tool availability** — all eight names resolved via `ToolSearch`;
   `assemble_final.sh` and `narrator/speech_metrics.sh` both present in the sandbox,
   and `--help` read rather than merely confirmed to exist.
2. **`balance`** — 655.4.
3. **`get_cost: true`** — clip 10.0, style key 2.0, voice take 0.5 (see the caveat
   above).
4. Cost per clip and for the whole cut stated, house default named.
5. **User confirmed** `seedance_2_0_mini` at 480p Draft.

**Two flag findings from reading the `--help`, neither in `SKILL.md`'s table:**
`--song` (song mode, clips-only manifest) and `--stepped N` (animate-on-twos).
Neither applies to this cut. `--subs` still refuses with exit 2, as documented.

**The draft pass was kept**, and it earned its place: this cut opens on an empty
symmetrical hall and turns on a diagram that reorganises between blocks 4 and 6,
neither of which had been seen moving.

### Style key — generated

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   Suwen 1 (splitting scroll + seven-and-eight arcs)   ← previous head
        └── 8e7e7549-cb5a-4970-afa7-b00b7e1442d4   Lingshu 28 (hearing + twelve tally slots)   ← THIS CUT
```

**Job ID `8e7e7549-cb5a-4970-afa7-b00b7e1442d4`.** `nano_banana_pro` (served by
`nano_banana_2`), 9:16, **returned 768×1376** as targeted, `resolution` defaulted to
`1k`. Chained off the Suwen 1 head by job ID as `medias[{role:"image"}]`; the
service echoed the role back as `image` exactly as the skill predicts.

**Promote this to `SKILL.md` step 1 as the new head only if this cut ships.** It is
recorded here either way.

**Motif for this cut:** the three-character series key arranged as a hearing — one
figure seated high, one standing to the side, one sitting on the floor with a
slate — and **twelve empty tally slots** on the wall behind them.

**This is a different motif from trailer v1's** (an open doorway and twelve unlit
lanterns). The motif is the cut's visual thesis, so if both v1 and v2 are ever
produced they need separate keys and both must be recorded.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails. Record the returned job ID here, and promote whichever key ships to
`SKILL.md` step 1 as the new head with its motif. **The longform needs a 16:9
sibling derived from this key** — generate the vertical one here first.

### Clips

**Generated 2026-08-08. `seedance_2_0_mini`, Draft tier, `resolution: "480p"`,
`duration: 10`, `aspect_ratio: "9:16"`, `generate_audio: false`, style key
`8e7e7549-…` attached to every clip as `image_references`.**

**Every clip returned 496×864, 10.042s, no audio stream, no head freeze, no tail
freeze** — checked against the assembler's own gates before assembly was attempted.

| Blk | Shot | Job ID |
|---|---|---|
| 1 | empty floor, push down | `e58d179d-12cc-41f7-a94c-806f5ffc078d` |
| 2 | Fan-di, fan snapped open | `4886ee15-1f65-47b7-8046-3a0e75b833de` |
| 3 | twelve cartouches arriving | `ae307e3e-a5aa-46eb-b1c3-05366281564d` |
| 4 | Dr-Qi still, circuit diagram | `04456c79-33e5-4662-af45-9a8be6c462b7` |
| 5 | ten of twelve dim out | `bbfc2179-3741-4454-a213-fe920b6fcea6` |
| 6 | diagram reorganises to centre | `33261ff9-4e8a-49a4-88e4-60babe43a3b5` |
| 7 | split hall, ranked vs empty | `83aac99f-48e2-4c54-9232-9e95b4a43ab2` |
| 8 | black plate, drifting grain | `7c8e3694-cd60-49d4-b00e-1178e3c60686` |

**Not one clip was regenerated.** No preset swap was offered on any of the eight —
pre-declining `IN THE DARK` on every call, including the lamplit and black blocks,
appears to have absorbed it as the skill predicts.

**Two model defaults will silently cost 2.5× if not passed explicitly**, and this is
worth carrying into every future cut: `seedance_2_0_mini` defaults `resolution` to
**720p** and `duration` to **5s**. A draft-tier call that omits them is billed at
full tier and returns clips that fail the assembler's 9.5s floor.

**The double aspect-ratio declaration held again** — `aspect_ratio: "9:16"` plus
"vertical 9:16 portrait framing" in every prompt text. Block 1 was generated alone
and its dimensions checked before the other seven were submitted.

- **`generate_audio: false` on every clip.** Verified on the output, not just the
  request: `ffprobe -select_streams a:0` returned empty for all eight. A correctness
  requirement, not a saving — `assemble_final.sh` mixes clip audio in at 0.12 under
  the voice rather than discarding it.
- **No legal vocabulary in any prompt** — no *gavel*, *court*, *trial*, *sentence*.
  The hearing is carried by staging alone. Block 2's fan gesture was written as "sweeps
  it down through the air in a sharp emphatic gesture".
- **Blocks 1, 4 and 8 were the frozen-frame risks** — an empty room, a motionless
  physician, a plain black plate. Each was given explicit continuous motion, and all
  three passed both freeze probes.

- **`generate_audio: false` on every clip.** A correctness requirement, not a
  saving: `assemble_final.sh` mixes clip audio in at 0.12 **under** the voice rather
  than discarding it, so a clip generated with native audio is audible in the
  finished cut and the only fix is regenerating the block.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every
  clip. Blocks 2, 7 and 8 are lamplit or black. One id per call, so budget a retry
  for each newly triggered preset.
- **Do not write *gavel*, *court*, *trial* or *sentence* into any clip prompt.**
  The hearing is carried entirely by staging — a high seat, an empty floor, tally
  slots — and legal vocabulary risks a preset swap for no benefit. The gavel-like
  fan snap is a SOUND direction only.
- **Generate block 1 alone and check its returned dimensions** before the other
  seven.
- **Duration ≥ 9.5s and motion from frame 1.** The assembler rejects a clip under
  9.5s outright and warns on a static open or frozen tail. **Blocks 1, 4 and 8 are
  the exposed ones** — an empty room, a still physician and a plain plate all invite
  a frozen frame. Give each continuous motion: the push down toward the floor, the
  circulating diagram behind Dr-Qi, drifting ink grain on the plate.
- **Keep audio vocabulary out of clip prompts** — *drum*, *drone*, *music*,
  *rhythm* — since those are edit-time directions anyway and *rhythm* triggers
  `DROWN IN MUSIC`.

### Voiceover

**Generated 2026-08-08.** `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one
take per block, **one speaker per block** — verified: no block contains two voices.

| Role | Preset | `voice_id` |
|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` |

**Kept takes.** `speech` is `speech_metrics.sh`'s measured figure — the number the
assembler gates, to three decimals. Gate is **8.600–10.000s**.

| Blk | Voice | Job ID | File | **Speech** | Margin | Pauses |
|---|---|---|---|---|---|---|
| 1 | Arthur | `a4de44b7-d1b6-409e-9a2c-da9b61ed11e4` | 8.659 | **8.659** | +0.059 | 0 |
| 2 | Xavier | `12c72b4b-b410-4153-9224-09ff4abdf615` | 8.992 | **8.992** | +0.392 | 0 |
| 3 | Arthur | `8c6b122d-5da5-41ef-8be2-2ee0af67a14b` | 9.599 | **9.599** | +0.999 | 0 |
| 4 | Vesper | `0a538c7f-fb99-4c6c-b158-bbe69b205170` | 9.635 | **9.635** | +1.035 | 0 |
| 5 | Arthur | `6ea201ab-0225-4b01-b60e-c368116d2713` | **9.870** | **8.639** | +0.039 | 0 |
| 6 | Vesper | `397679cc-af47-43c1-854c-a3f67c2e1904` | 8.720 | **8.720** | +0.120 | 0 |
| 7 | Arthur | `b27d21ef-59bf-42d8-bcf5-5456c782ce8c` | 9.405 | **9.405** | +0.805 | 0 |
| 8 | Arthur | `782c9921-9775-40e7-8aba-abf770401a8a` | 8.762 | **8.762** | +0.162 | 0 |

- **Voiceover** (`seed_audio`, preset, `speech_rate` 55 — measured **speech**, not file length): block 1 `a4de44b7-d1b6-409e-9a2c-da9b61ed11e4` (8.659s), block 2 `12c72b4b-b410-4153-9224-09ff4abdf615` (8.992s), block 3 `8c6b122d-5da5-41ef-8be2-2ee0af67a14b` (9.599s), block 4 `0a538c7f-fb99-4c6c-b158-bbe69b205170` (9.635s), block 5 `6ea201ab-0225-4b01-b60e-c368116d2713` (8.639s), block 6 `397679cc-af47-43c1-854c-a3f67c2e1904` (8.720s), block 7 `b27d21ef-59bf-42d8-bcf5-5456c782ce8c` (9.405s), block 8 `782c9921-9775-40e7-8aba-abf770401a8a` (8.762s).

**`build_subtitles.js` parses that record from a single physical line**, so it must
stay on one line however long it gets — wrapping it across lines makes the script
silently fall back to "assume a full 10s" for *every* block, which is a warning in
its output but a real 0.5–0.7s timing error in the sidecar. Verified here: the
wrapped first draft produced exactly that warning.

**That line feeds `build_subtitles.js`, and it deliberately carries speech rather
than file duration.** The script centres each cue as `(10 − duration) / 2`, which
is the right formula for whichever number it is handed; handing it speech makes it
agree with the assembler exactly. **Block 5 is the block that proves it matters** —
see below.

**Block 5 is the first recorded `seed_audio` take where file ≠ speech.** It carries
**1.231s of trailing silence** (file 9.870, speech ends 8.639). `SKILL.md`'s
Subtitles section records the opposite finding from the ch1 v5 run — `file ==
speech` with zero padding on all seven kept takes — and concludes the sidecar's cue
drift "computes to 0.00s" on `seed_audio`. **That is no longer universally true.**
Left uncorrected, block 5's captions would lead its voice by
`(9.870 − 8.639) / 2 = 0.616s`. The fix is `SKILL.md`'s own option 1: the
**speech** column above is what goes into the sidecar, not the file column.

**Three takes were measured within 0.2s of the floor and were checked against the
number, never eyeballed** — blocks 1 (+0.059), 5 (+0.039) and 6 (+0.120).
`speech_metrics.sh` defaults to `NOISE="-45"` and `d=0.25`, byte-identical to
`assemble_final.sh` line 197, so these are true passes rather than measurement
luck. Verified by reading both scripts, not assumed.

**Superseded takes — kept as evidence, per `CLAUDE.md`.** 14 takes generated, 8 kept.

| Blk | Job ID | Words | Speech | Why superseded |
|---|---|---|---|---|
| 2 | `59388358-6f38-41fd-bf8d-bd0fc00be4f0` | 37 | 8.248 | under floor by 0.352 |
| 7 | `f3547530-aa13-4796-b8e2-0c79f619b927` | 33 | 12.751 | over ceiling by 2.751 |
| 7 | `14c76e63-b428-4a1a-9786-acdce62a18a3` | 33 | 12.251 | over by 2.251; 0.92s internal pause |
| 7 | `00dbedfe-2682-4dfc-8ed1-6b076b84f367` | 25 | 10.182 | over by 0.182 |
| 7 | `5cd41712-7bf7-4ec3-acf7-7f619b1d9310` | 28 | 8.206 | under by 0.394 |
| 7 | `904f6a13-539f-4488-8cc8-6e1090832c59` | 25 | 7.414 | under by 1.186 |
| 7 | `58e0753a-f7a7-48e0-804a-83a285e184f5` | 25 | **9.532 — in window** | rejected anyway: 1.18s internal pause would trip the pausey WARN |
| 8 | `14c085d3-eb76-481d-9446-e32999868d12` | 34 | 6.853 | under by 1.747 |

**Block 7 cost seven of those fourteen takes and forced the only rewrite in the
cut.** It is the clearest measurement this repo has of the bimodality `SKILL.md`
describes, because the same block was rolled at four different word counts:

| Words | Speech | Implied rate |
|---|---|---|
| 33 | 12.751 | 2.59 w/s |
| 33 | 12.251 | 2.69 w/s |
| 25 | 10.182 | 2.46 w/s |
| 28 | **8.206** | **3.41 w/s** |
| 25 | 7.414 | 3.37 w/s |
| 25 | 9.532 | 2.62 w/s |
| 25 | **9.405 — kept** | 2.66 w/s |

**The 28-word take came back 2.0s shorter than the 25-word one.** Word count is not
a control at this granularity: the block sits in a slow mode near **2.6 w/s** and a
fast mode near **3.4 w/s**, and *no* word count clears 8.6–10.0s in both — 8.6s at
3.4 w/s needs 29 words, 10.0s at 2.6 w/s allows 26. The windows do not overlap.
25 words was chosen to centre the *dominant* mode (5 of 7 rolls landed slow), and
the block was then rolled until one hit. **Budget re-rolls for a title block; do
not try to solve it by re-counting words.**

**The slow mode is caused by content, not chance.** Block 7 is the only block that
speaks a colon-led title (*Lingshu twenty-eight: Twelve Small Rebellions*), and
Arthur gives it announcer pauses. Every other block in the cut landed on its first
roll except 2 and 8, which took one re-roll each.

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ — block 5 above proves it on
`seed_audio` — and the second is the one that was gated. A ch1 v5 take logged as
"8.50s pass" was 8.497s — 0.103s under the floor — and stopped the assembly. A take
within ~0.2s of either edge is checked against the number, never eyeballed.

### Assembly — completed 2026-08-08, first run, no retries

There is **no assembly job ID**. What makes the run repeatable:

| | |
|---|---|
| Command | `sandbox_exec` → `assemble_final.sh`, **foreground** |
| Flags | `--out work/output/final.mp4 --blocks 8 --manifest pairs.txt` |
| Not passed | `--clip-seconds` (default 10), `--music`, `--sfx-vol` (default 0.12), `--subs` (hard error), `--allow-mismatch` |
| Manifest | 8 lines, `work/blocks/blockNN.mp4 work/voices/voiceNN.wav`, NN 01–08 aligned |
| Delivered | **496×864, 80.064s, 24.0fps**, asserted `8 × 10s = 80s` within ±1s, decode-validated |
| Mix | voice 1.0, clip SFX 0.12, no music bed, final loudnorm −16 LUFS |
| **Wall time** | **47 seconds** |
| Exported | `media_id` `130c2638-1ab5-413a-8ace-294890dc5ccc` |
| Assembler sidecar | `final.mp4.assembly.json` written by the script; a poster frame `final_poster.jpg` also produced |

**Zero WARNs.** No pausey take, no static head, no frozen tail, no pair mismatch.
`narration present in all 8 windows`. Nothing was accepted-rather-than-fixed, so
there is nothing in this run to carry forward as a known defect.

**47 seconds is the repo's first assembly-scale measurement**, and it is the number
the longform plan had none of. Extrapolating naively, ~110 blocks is roughly 10–11
minutes — **far outside the 120s foreground budget**, which confirms the skill's
judgement that longform must go background with polling at least every 60s. Note
the extrapolation is naive: 16 downloads were a real share of these 47s, and a
longform run is ~240 downloads, so the true figure is likely worse than linear.

- **Ran foreground**, per the skill. It finished in 47s against a 120s budget, so
  the ch1 v5 `background: true` failure mode was never in play.
- **Download, assemble and export were one chained command.** `media_upload` was
  called *before* the assembling command and the `curl -f -X PUT` appended to the
  same shell invocation; `media_confirm` only after the PUT returned OK.
- **Voice levels were matched per block** by the script (−16.2…−20.2 dB in,
  −20.9…−22.6 dB out) — logged here because it is the assembler's own normalisation
  and not something this cut configured.

### Captions

**Sidecar built and committed** — `inner-canon-lingshu28-trailer-v2.srt` and
`.vtt`, 41 cues, widest line **555px against a 556px usable width** at 9:16.

```
node scripts/check_caption_fit.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md
node scripts/build_subtitles.js  output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md
```

`check_caption_fit.js` **exits 0**, reporting only the known block-8 disclaimer
exception. Re-run after the block 7 rewrite, not just before it.

**Cue timing is exact on this cut, not approximate.** `SKILL.md` warns that a
sidecar built on this path is only approximately timed because
`build_subtitles.js` centres on file duration while the assembler centres on
detected speech. That drift is real here — block 5 carries 1.231s of padding — and
it was removed by putting **speech** in the `Voiceover` bullet record rather than file
length, which is `SKILL.md`'s own option 1. Verified against the assembler's
reported per-block speech starts:

| Blk | Assembler speech start | Sidecar first cue | Δ |
|---|---|---|---|
| 1 | 0.67s | 00:00:00,670 | 0.000 |
| 5 | 40.68s (0.68 into block) | 00:00:40,681 | 0.001 |
| 8 | 70.62s (0.62 into block) | 00:01:10,619 | 0.001 |

**Burned: yes, 2026-08-08**, after the render, as its own step. Output
`0a013c99-37ba-4dcc-a636-7f2cbd371b25`, **720×1280, 80.064s, audio stream copied
through untouched** (`-c:a copy`, aac).

| | |
|---|---|
| Source | the 496×864 assembly, `130c2638-…` |
| Filter chain | `scale=720:1280,subtitles=…` — **scale first**, per the house call |
| Subtitle file | blocks 1–7 only: 36 of 41 cues, last cue ends `00:01:09,703` |
| PlayRes | re-targeted `384×288` → **720×1280** before burning |
| Style | Anton, `Fontsize` 54, `MarginL/R` 58, `MarginV` 150, `Outline/Shadow` 3/1, `Alignment` 2 |

**The font was verified as actually used, not merely installed.** This is the
failure the skill warns is invisible: libass substitutes a wider face silently and
`build_subtitles.js` still reports the line as fitting. Two checks, both required:

- `fc-match Anton` → `Anton-Regular.ttf: "Anton" "Regular"`, and the burn command
  **refuses to run** if that grep fails.
- libass's own selection log at `-loglevel verbose`:
  `fontselect: (Anton, 400, 0) -> Anton-Regular, 0, Anton-Regular`. **This is the
  authoritative check** — it is the renderer reporting which file it opened. Grep
  `fontselect` on every future burn rather than trusting `fc-match` alone.

**Where the burn had to run, and why it is not the repo host.** The repo host has
Anton (session-start hook) but **cannot reach the CDN**; the sandbox reaches the CDN
but ships **Metropolis and Montserrat, not Anton**. Burning in the sandbox as-shipped
would have silently produced a substituted font. Anton was therefore installed into
the sandbox from the **same source the hook uses** —
`raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf` — into
`$HOME/.local/share/fonts`, with `fc-cache` and `fontsdir=` both set. **Any future
burn faces this same split and must repeat the font install.**

**Visually verified — this one actually was looked at.** A frame was extracted at
**t=14.2s** and the caption band inspected: cue 9 (`00:00:13,429 → 00:00:14,869`,
*"Twelve counts of / insubordination,"*) renders as two centred lines, white with a
black outline, in Anton's condensed face, well inside the side margins and clear of
the frame edge. Right text, right time, correct wrap. **That is one frame, not the
whole cut** — the other 35 cues are verified by measurement and by this frame's
agreement with the sidecar, not by watching.

9:16 is the hard case — roughly half the caption room of the longform frame — so
judge wrapping here, not on the landscape cut.

### Reproduction notes

**What actually ran, and what did not.** The honest line on verification first,
because it is the one most easily overstated:

- **Nobody has watched this cut end to end.** The CDN is blocked from the repo host
  by **organisation egress policy** — the agent proxy reports `connect_rejected:
  gateway answered 403 to CONNECT` for `d8j0ntlcm91z4.cloudfront.net:443`, and its
  own README says to report such denials rather than retry them. Every check below
  ran on job metadata, inside the sandbox, or on a single extracted frame.
- **Checks that did run:** all 8 clips probed for dimensions, duration, absence of
  an audio stream, and head/tail freeze; all 16 voice takes measured with the
  sanctioned `speech_metrics.sh`; the assembler's own gates and asserts passed with
  zero WARNs; the finished file decode-validated at 496×864 / 80.064s; the burn
  verified for font substitution via libass's `fontselect` log; **one frame of the
  captioned cut extracted at t=14.2s and actually inspected** — see *Captions*.
- **Three frames are the extent of the visual verification** — t=14.2s for the
  captions, t=75s for the end card, t=5s for the lower-third against a caption.
  **Looking is what caught the block 8 plate defect**, which every automated gate had
  passed; the measurements only explained it afterwards. It confirms the captions
  burn correctly, that the card is legible, that the lower-third sits clear of the
  caption band, and that block 2 shows a figure in the gold robe. It does
  **not** cover: the house look across the cut, the character likenesses against the
  cast sheet, whether the block 4 → 6 diagram reads as *reorganising*, whether shot 3
  actually shows twelve cartouches, or whether shot 5 dims the correct ten. **All of
  those remain unverified and need a human viewing.**
- **One observation from that frame, offered as a note rather than a finding:** the
  render reads as clean flat cel-style illustration more than as *ink-wash*. Whether
  that is acceptable house look is an editorial call nobody has made yet, and it is
  exactly the sort of thing the draft pass exists to surface.

**Findings that contradict or extend `SKILL.md`, and should be folded back into it:**

1. **`seed_audio` can ship padded takes.** Block 5 returned file 9.870s against
   speech 8.639s. `SKILL.md`'s Subtitles section records `file == speech` on all
   seven ch1 v5 takes and concludes the sidecar drift "computes to 0.00s" on this
   provider. **Not universally true** — that block alone would have led its captions
   by 0.616s. Recording *speech* in the `Voiceover` bullet line fixes it, and the
   resulting sidecar matches the assembler to within 1ms on every block (cue 1 at
   00:00:00,670 against the assembler's 0.67s; block 5 at 40.681 against 40.68).
2. **Clips arrived 496×864 and the assembler did not rescale.** ch1 v5 recorded
   480×854 clips rescaled to 496×864. Here the source clips were already 496×864 and
   were passed through. Same delivered geometry, different mechanism.
3. **`get_cost` on a short probe string under-prices `seed_audio` by ~3×.** 0.5
   quoted on 13 words; ~1.34 actual on 25–39-word lines. Cost a representative line.
4. **`seedance_2_0_mini` defaults to 720p and 5s.** Both must be passed explicitly
   for a draft; omitting them bills full tier *and* fails the 9.5s clip floor.
5. **`speech_metrics.sh` and `assemble_final.sh` use identical detection** —
   `noise=-45dB:d=0.25` in both. Verified by reading both scripts. This is what makes
   a +0.039s margin (block 5) a real pass rather than a gamble.
6. **`build_subtitles.js` parses the `Voiceover` bullet record from one physical line.**
   Wrapping it across lines silently falls back to "assume a full 10s" for every
   block. Hit and corrected during this run.
7. **Assembly wall time at 8-block scale: 47s.** First such measurement in the repo.
8. **Block 8 did not render as specified, and it was only caught by looking.** The
   shot list asks for "black plate, faint ink-grain texture". `seedance_2_0_mini`
   returned a **bright mottled texture** — measured mean luma 57 across the frame,
   ranging 37–82. Every automated gate passed it: correct dimensions, ≥9.5s, no
   audio stream, no head or tail freeze. Nothing in the pipeline objects to a plate
   being the wrong colour. **White end-card text drawn onto it was partly
   illegible**, which is a compliance defect on the one card that must be readable.
   Fixed for free with a `drawbox` scrim rather than a 10-credit regeneration — but
   **if this cut goes to full tier, regenerate block 8 to the shot list** rather
   than relying on the scrim.
9. **A 60s ceiling on `sandbox_exec`, not the 120s the schema allows.** An
   80s 720×1280 `libx264 -preset medium -crf 18` encode plus download ran ~50s and
   the transport call timed out at 60s despite `timeout_seconds: 120`. **The upload
   had already completed** — the object was on the CDN and decoded clean — so the
   work was not lost, but only because it was chained ahead of the timeout. Verify
   before re-running anything expensive after a timeout, and prefer a faster preset
   for full-length re-encodes. **`-preset veryfast -crf 17` runs the same 80s job in
   23.7s** against `medium`'s ~50s, which is the setting to use for a finishing pass.
10. **Finishing passes should rebuild from the assembly, not stack.** Burning
    captions, then the card, then the lower-third as separate passes would put four
    x264 generations in the deliverable. The whole chain — scale, subtitles, scrim,
    card, lower-third — is one filter graph and one command, so the shipped file is
    two generations from the assembler. It costs nothing to re-run, so treat the
    finishing pass as idempotent and re-derive it rather than layering.
11. **Choose the luma statistic to match the background.** `YAVG` proved the end card
    against a dark plate and was blind to the lower-third against a bright floor;
    `YMIN` proved the lower-third and would be useless on the plate. `YMAX` was
    useless on both — a single grain pixel pins it to 255. Getting this wrong looks
    exactly like a missing overlay.

**Other notes:**

- **The style key is new** (`8e7e7549-…`), motif differs from trailer v1's. Promote
  to `SKILL.md` step 1 as the new head only if this cut ships.
- **The narration changed during production.** Block 7 was rewritten from 33 words
  to 25 after two rolls at ~12.5s. The document's narration table carries the
  **shipped** line; the original is preserved in the superseded-takes discussion
  above. `check_caption_fit.js` was re-run after the rewrite and still exits 0.
- **Zane is unmeasured at length** and remains deliberately absent, as planned.
- **Nothing was regenerated among the clips** — 8 generated, 8 kept.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1. **Burned in 2026-08-08, on at 0:01–0:08.**
- **End disclaimer card** — mandated string verbatim, over block 8. **Burned in
  2026-08-08, 1:10–1:20.**
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. **On the card as of 2026-08-08**; still to be added to the
  description at upload.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none.

### Finishing steps

This cut's own numbers — 8 blocks, 80.0s, block boundaries at every 10s, end card
**1:10 to 1:20**. Not a generic recipe: **trailer v1 of this chapter is 7 blocks
with a 1:00 end card**, and that is exactly where the mistakes land. Both caption
scripts are pure text tools — they read this document, touch no video, need no
network and cost no credits. **Both take a path relative to the current directory:
run them from the repo root, or pass an absolute path.**

**1. Check captions**, before generating takes. A fix is free at that point and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md
```

**This document exits 0 as written — verified 2026-08-07.** It prints one report
and still passes: block 8's first clause is the mandated disclaimer, it genuinely
needs **three lines** at 9:16 (1187px against a 1111px two-line budget), and the
script routes it to `known` rather than `bad`. Only `bad` entries increment the
failure count, so **the exception is reported and the exit code stays 0**. It is a
compliance string and is never reworded.

If a future edit re-introduces a real overflow, **exit 1 is the designed signal,
not a crash** — with the server-burn path gone it is a *readability* finding rather
than a render failure, since the sidecar pre-splits wide clauses and libass margins
keep them in frame. Fix at script stage anyway.

**2. Build the sidecar**, after the takes exist and their durations are in the
record above.

```
node scripts/build_subtitles.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md
```

Commit the `.srt`/`.vtt` with the cut — they are tracked, required deliverables. On
a **copy** of the `.srt`, delete the cues covering **block 8** (everything from
`00:01:10`) so the disclaimer is not simultaneously a caption and a card. The burn
copy is blocks 1–7, ending at 1:10.

**3. Burn — DONE 2026-08-08.** Output `0a013c99-37ba-4dcc-a636-7f2cbd371b25`,
720×1280, blocks 1–7. Font use verified via libass `fontselect`, and one frame
inspected. Full record in *Captions* above; the procedure below is retained because
it must be repeated on any re-render, **including the font install** — the sandbox
where the burn has to happen does not ship Anton.

Run `ffmpeg -version` and
`fc-match Anton` **before** starting — the session-start hook installs both, and a
missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and **re-target
`PlayResX/Y` to the cut's actual returned resolution first**: ffmpeg's SRT→ASS
converter hardcodes 384×288, which scales every style value by roughly 4.4× on a
720-tall frame and runs the lines off frame.

**This cut delivered 496×864, so scale to 720×1280 and burn at 720×1280 — in that
order.** That is the house call as of 2026-08-08 and it **supersedes the
burn-native advice this document carried before the render**: the 2.1% vertical
stretch is accepted in exchange for a true 9:16 frame the vertical platforms take
without letterboxing. Scaling first also draws the captions at native 720×1280 and
makes the PlayRes re-target exact rather than approximate.

`build_subtitles.js` prints both commands in the correct order on every run — use
its output rather than retyping. For this cut they are:

```
mkdir -p output/lingshu/ch28/renders
ffmpeg -i output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.srt -f ass - \
  | sed 's/^PlayResX: .*/PlayResX: 720/; s/^PlayResY: .*/PlayResY: 1280/' \
  > output/lingshu/ch28/renders/inner-canon-lingshu28-trailer-v2.ass

ffmpeg -i <the-496x864-render>.mp4 \
  -vf "scale=720:1280,subtitles=output/lingshu/ch28/renders/inner-canon-lingshu28-trailer-v2.ass:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,MarginL=58,MarginR=58,MarginV=150,WrapStyle=0'" \
  -c:a copy <cut>-subtitled.mp4
```

**Use the blocks-1–7 copy of the `.srt` here** (step 2), not the committed one.

**4. History lower-third — DONE 2026-08-08.** *"Presented as history & philosophy"*,
Anton 30, `y=880`, centred, in at 0:01 and out at 0:08 over block 1's empty floor.
Measured 387px against 624px usable. Added by `drawtext` in the burn pass, not in an
NLE, with the same `borderw=3:bordercolor=black@0.9` the card uses — block 1 is a
lit parchment floor and white-on-light needs the border.

**Verified on screen**: at t=5 the lower-third and caption cue 4 are both present and
clearly separated, the lower-third sitting well above the caption band as designed.

**The 1s–8s gate was verified by measurement, because luma average cannot see it** —
block 1 is bright (mean ~137–143), so white glyphs do not move `YAVG` at all. `YMIN`
does, because the 3px black border is the darkest thing in an otherwise light band:

| t | 0.2 | 0.8 | **1.2** | **3** | **5** | **7.8** | 8.3 | 9 |
|---|---|---|---|---|---|---|---|---|
| YMIN | 40 | 44 | **8** | **8** | **8** | **8** | 83 | 87 |

On exactly 1–8s. **Pick the statistic to match the background**: `YAVG` discriminated
the end card against a dark plate and was useless here; `YMIN` is the reverse.

**5. Block 3's twelve cartouches — NOT DONE, by decision, 2026-08-08.** The glyph
work is verified and ready (below); it is deliberately not applied, and **the cut
ships without on-screen glyphs.** Regenerating block 3 (~10 credits) was offered and
declined. **Treat this as an open defect, not a closed step.**

The reason the glyphs were not simply added: **the rendered block 3 does not show
twelve cartouches.** It shows a *grid* — measured at roughly 6–7 columns by ~6 rows, on the
order of **35–40 cells** — rather than twelve arriving one after another down the
vertical frame. Confirmed by eye at t=26s and by column/row luma profiling of the
frame.

**This is a factual-accuracy defect, not a styling one, and drawing glyphs would
entrench it.** Block 3's narration says *"Twelve things a body does"*; blocks 2, 4
and 5 also say twelve; the source says 凡此十二邪者 and §15 recapitulates twelve. A
viewer who counts sees ~36. Putting twelve glyphs into twelve cells of a 36-cell grid
leaves two dozen conspicuously empty and still shows the wrong count — labelling
twelve of thirty-six announces the mismatch rather than hiding it. **The fix is to
regenerate block 3 to the shot list (~10 credits), then add the glyphs** — the same
call already recorded for block 8's plate.

**What shipping without glyphs costs, stated plainly.** Unlabelled cartouches are
generic marks, so nothing on screen makes a *false* claim, and the narration carries
the count correctly. But the picture under the word *twelve* shows roughly thirty-six
countable objects, and the compliance notes below list "the cartouches must number
twelve" as a historical-accuracy requirement of this cut. **That requirement is
currently unmet.** It is a low-severity, non-assertive mismatch on the lowest-exposure
surface of a chapter the slate rates Very Low — which is why it is shippable — but it
is unmet, and it should be fixed before any full-tier render rather than carried
forward.

**Every automated gate passed this clip too** — dimensions, ≥9.5s, no audio stream,
no head or tail freeze. Nothing in the pipeline counts objects against a shot list.
That is now **two of eight blocks** that rendered off-spec in ways only looking
caught (see block 8), which is the strongest argument in this cut's record for
viewing a draft rather than trusting its gates.

**The glyph content is verified and ready to apply the moment block 3 is correct.**
Checked against `inner-canon-lingshu28-translation-v2.md` line 588–589, which lists
the twelve as asked, in order:

| # | § | Glyph | Gloss | Agent |
|---|---|---|---|---|
| 1 | §2 | 欠 | yawn | qi, and the hour |
| 2 | §3 | 噦 | hiccup | grain and cold |
| 3 | §4 | 唏 | catching sob | two quantities and their rates |
| 4 | §5 | 振寒 | shiver | the cold |
| 5 | §6 | 噫 | belch | the cold, again |
| 6 | §7 | 嚏 | sneeze | yang qi |
| 7 | §8 | 嚲 | limpness | a chain of conditions, no one at the end |
| 8 | §9 | **泣涕** | weeping | **主 — a ruler** |
| 9 | §10 | **太息** | long sigh | **憂思 — worry and brooding** |
| 10 | §11 | 涎下 | drooling | the worms |
| 11 | §12 | 耳鳴 | tinnitus | an empty stomach |
| 12 | §13 | 自齧舌 | tongue-biting | qi, arriving at the wrong time |

**The two-with-an-agent check is confirmed at source**, which is what block 5's
dimming depends on: §9 is *"AGENT: 主 — a ruler. This is the hinge of the whole
chapter"*, and §10 is *"AGENT: 憂思… **With §9 it forms the only pair in the
chapter** where something a person is doing causes something the person's body then
does."* So the two left lit in block 5 must be **泣涕 and 太息**. Getting the other
ten lit inverts the cut's argument.

**A CJK face is present in the sandbox and no install is needed** — WenQuanYi Zen Hei
at `/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc`, plus Unifont. Anton must **not**
be used for these: it has no Chinese coverage and renders tofu boxes silently, which
is the failure this step has always warned about.

Original instruction, retained for when block 3 is regenerated: add
欠 噦 唏 振寒 噫 嚏 嚲 泣涕 太息 涎下 耳鳴 自齧舌 in the same `drawtext` pass, held
across **0:20 to 0:30**, arriving in sequence rather than all at once. **Verify
every glyph against `inner-canon-lingshu28-translation-v2.md` before export.** ffmpeg
needs a CJK-capable face here; Anton has no Chinese coverage and renders tofu boxes
silently.

**If block 5 dims ten of the twelve** as the shot list calls for, the two left lit
must be **泣涕 and 太息** — weeping and the long sigh, the two riddles with an
author. Getting the wrong two lit inverts the cut's argument, so check this against
the agent table in the translation file before export.

**6. End card — DONE 2026-08-08.** 1:10 to 1:20 (block 8), output
`04409d47-bee0-490c-9048-d55a898d3946`. Mandated disclaimer verbatim across three
centred lines, editorial credit beneath, burned onto the captioned cut. Both also
go in the description at upload.

Line breaks — they reconcatenate to the mandated string **exactly**, which is the
only acceptable way to split a compliance string across lines:

```
A dramatized adaptation of a      Anton 52, y=500
classical philosophical text.     Anton 52, y=570
Not medical advice.               Anton 52, y=640
Written & edited by Joshua Chin   Anton 30, y=748
```

Sized against `scripts/lib/caption_metrics.js` rather than guessed: at 52 the widest
line measures **568px against 624px usable** (720 frame − 2×48 margin). ffmpeg 6.1
has no `text_align`, so each line is its own `drawtext` with `x=(w-text_w)/2`;
`-filter_script` avoids shell-escaping the `&` and the `:` separators.

**A scrim is required and is not cosmetic — see the reproduction note on block 8.**
The first attempt drew white text straight onto the clip and the disclaimer was
partly illegible. The shipped filter lays `drawbox …color=black@0.74:t=fill` over
the full frame for `between(t,70,80)` first, then the text with
`borderw=3:bordercolor=black@0.9`. Measured after: plate **21–23**, glyphs **108**,
credit **68** — about a 5× ratio. Before the scrim the brightest plate area was
**82** against dimmest text **78**, i.e. no contrast at all in places.

**Blocks 1–7 are untouched by this pass** — the `enable=` guard confines every
filter to 70–80s, verified by sampling t=69 and the t=14 caption band before and
after.

**7. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out across
block 3** — the twelve-cartouche sequence is the cut's only fast passage and plays
better dry, on paper-and-brush sound alone. Out at the block 7 cut to black at 1:10.
**This cannot be moved to the assembler's `--music` flag**: `--music-vol` clamps at
0.20 (≈ −14 dB, which does land in range), but it mixes one continuous bed with no
dropout window, so the block-3 gap requires a hand mix either way.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list, per the
compliance gate — a non-compliant clip is a paid re-render. The slate rates this
chapter **Very Low**, and the trailer is the lowest-exposure surface on it.

**Re-audited at production stage, 2026-08-08, because block 7's line changed after
the original audit.** Two bullets below rest on block 7 — the withheld-verdict
framing and the Su Wen 8 citation risk — so both were re-checked against the
shipped 25-word line:

> One book, two bodies. One an administration, where every act has an officer. The
> other weather. The Emperor's Inner Canon. Lingshu twenty-eight: Twelve Small
> Rebellions.

**Every compliance-bearing element survives the rewrite.** The *two bodies* framing
is intact and still refuses to declare either account correct; the administration /
weather contrast is intact; **Lingshu twenty-eight** is still spoken, so the
citation-accuracy requirement is met and no bare "Chapter 28" appears; and Su Wen 8
is still **not named on screen**, which was the safer option and the one needing no
verification. What the rewrite dropped — *"answerable for it"*, *"on a schedule"* —
is descriptive colour carrying no compliance load.

**The prompt-stage audit ran on all eight clip prompts before generating**, per the
gate. No prompt contained legal vocabulary, restraint or bound-figure imagery, a
figure standing in the empty floor, bodies, injury, or falling figures. **No clip
was rejected and no preset swap was offered**, so no prompt needed re-cutting —
the first cut in this repo where the compliance gate cost nothing at generation
time.

- **Disclaimer** — repo string verbatim: blockquoted above, at the head of block 8's
  narration, on screen as the end card, and in the description. Block 8 is extended
  past the mandated string to clear the 8.6s floor; **the mandated sentence itself is
  unaltered**. **The end card is now burned in and visually verified legible**
  (2026-08-08) — it is split across three lines that reconcatenate to the mandated
  string exactly, and the first attempt was rejected as partly illegible against
  block 8's plate. Narrator reads it over the same block, so the compliance signal is
  doubled.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* is **on the end
  card as of 2026-08-08**, beneath the disclaimer. Still to be added to the
  description at upload.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim in the cut. **The chapter's needling prescriptions are excluded
  entirely** — every riddle in the source closes with one, and not one appears in this
  document, the shot list, or the on-screen text. Nothing tells a viewer to do
  anything.
- **The inquiry conceit needs one guard, and the trailer is where it is riskiest.**
  A trial framing could read as *your body is betraying you*, which is a wellness
  register this series exists to avoid. **Block 4 defuses it inside the cut** — there
  is no offender — and block 6's turn is about grief, not malfunction. **Block 4 is
  therefore not droppable**; see *Runtime levers*. The longform lands the full answer
  (an ungoverned body is a better body); the trailer must at minimum not imply the
  opposite.
- **Mortality / ageing** — **absent.** The longform's one bereavement beat is not in
  this cut. No lifespan claim of any kind.
- **Fertility content** — **absent.** §8's ambiguous 行陰用力 is not referenced, and
  the translation takes the neutral reading.
- **Indulgence / alcohol** — **absent.** No feast, no vessels, no drinking anywhere
  in the shot list.
- **Supernatural hooks explicitly debunked by the payoff** — the hook is *twelve
  things nobody ordered*, which is a description of ordinary physiology rather than a
  mystery claim. **No supernatural agency is proposed at any point**, and block 4
  states plainly that nothing is doing it. The cut's argument is deflationary
  throughout.
- **One thing this trailer does *not* do, recorded deliberately.** v1 called the
  classical answer **wrong** inside the trailer, at block 6. **This cut does not** —
  it presents the chapter's two incompatible answers and withholds the verdict for
  the episode. That is defensible because **no false claim is asserted as true here**:
  block 4 and block 6 both report what the chapter says, block 7 frames them as *two
  bodies* rather than as one correct account, and nothing in the cut tells a viewer
  that qi schedules or heart-rulership are how a body works. **If an edit ever puts a
  bare classical mechanism on screen without that framing, the debunk has to come
  back into the trailer.**
- **Title and thumbnail honour the educational payoff** — cut title *Twelve Small
  Rebellions*; the slate's chapter title remains *Why We Yawn*. **Banned terms
  checked**: no *longevity*, *live to 100*, *ancient secret* or *anti-aging* in the
  script, title or thumbnail direction. **Thumbnail direction:** the empty hearing
  floor beneath a high seat, twelve empty tally slots on the wall, no faces — it
  reads as *he put his own body on trial*, which is the actual claim.
- **Hedge allocation — two characters speak, so this needs recording.** **Arthur
  retains every framing claim**: the hook (1), the list (3), the ten-of-twelve
  structure (5), the two-bodies verdict and the title (7), and the disclaimer (8).
  Fan-di carries the conceit. **Dr-Qi carries both classical mechanisms, in blocks 4
  and 6, and that is the pair to watch** — block 4 is in the second person (*your
  inquiry*), which is dramatisation and not instruction, and block 6 reports the
  chapter's claim rather than asserting it. **No compliance hedge rests on a
  character voice.**
- **History lower-third is on screen and verified** — *"Presented as history &
  philosophy"*, 0:01–0:08, inside the mandated first ten seconds, over an empty floor
  with no figure in it. This is the frame that tells a scrolling viewer what the
  channel is claiming to be before any classical mechanism is spoken, so its timing
  is a compliance property rather than a design one; the gate was measured, not
  assumed.
- **Historical accuracy** — four risks. (1) Cited on screen as **Lingshu 28**, never
  a bare "Chapter 28". (2) The count is twelve, not the slate's eleven; the
  cartouches must number twelve and match the translation file — **this one is
  currently UNMET: the rendered block 3 shows ~36 cartouches, and the cut ships
  unlabelled by decision on 2026-08-08. Narration and script are correct; the picture
  is not. See *Finishing steps* 5.** (3) Block 7's
  "administration" is Su Wen 8 and is deliberately not named on screen; if it is ever
  named, cite **Su Wen 8**, never "chapter 6". (4) The ten-versus-two split is a fact
  about the Chinese grammar, tabulated in the translation file, and must not drift
  into a claim that the chapter *says* it has two theories — it does not say so.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload, per the
  slate's §6 open item. No character makes a first-person factual assertion about
  their own expertise.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — the shot list is low-risk throughout: an empty hall, a
  high seat, cartouches, two seated or standing figures, ink diagrams, a plate. **No
  restraint or bound-figure imagery**, which has tripped the safety filter here before
  even on innocuous subject matter. No bodies, no injury, no falling figures. **One
  item to watch at prompt stage:** nobody is ever staged standing in the empty floor.
  A figure placed there reads as a person in a dock, which is exactly the imagery to
  avoid, and it also destroys the shot's meaning.

## Runtime levers

**Cut to 1:00 (6 blocks)** — drop blocks 3 and 5. Runs 1 → 2 → 4 → 6 → 7 → 8. Keeps
the charge, the no-defendant answer, the turn and the verdict, and costs the
cartouche sequence, which is the cut's most expensive shot to build and its least
load-bearing. **This is the cut to make if runtime is fixed externally.**

**Cut to 0:50 (5 blocks)** — blocks 1 → 2 → 4 → 6 → 8. Loses block 7, which is the
verdict and the title. At that length the title has to move into block 6's tail or
the cut ships with no title card at all.

**Cut to 0:40 (4 blocks)** — blocks 1 → 4 → 6 → 8. Drops Fan-di entirely and with
him the inquiry conceit; what remains is the two-answer contrast, which still works
but is no longer dramatised. Acceptable only for a paid-placement cutdown.

**Stretch to 1:30 (9 blocks)** — add one block after 6: Arthur on §15's retro-fitted
rulers (*the kidney governs yawning, the lung governs hiccup* — attributions that
appear nowhere in the answers themselves). It is longform Act IV material, needs no
new voice, and is the single strongest piece of evidence for the cut's thesis.
**Do not** add a Lei-Gong block to stretch without measuring Zane first.

**Blocks 4 and 6 are a pair and must never be split** — the answer with no agent
and the answer that suddenly has one. The entire cut is the contrast between them,
and shipping either alone misrepresents the chapter. **Block 4 additionally carries
the compliance guard** described above. **Block 8 is not a lever.**
