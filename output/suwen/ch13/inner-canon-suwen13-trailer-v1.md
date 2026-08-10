# The Emperor's Inner Canon — Suwen 13 Trailer v1 (70 seconds)

**素問·移精變氣論第十三 · When Medicine Stopped Being Magic**

**RENDERED — draft tier, 2026-08-10.** 7 blocks × 10s = **70.059s**, MP4,
`seedance_2_0_mini` 480p. Assembled at **496×864**, delivered captioned at a true
9:16 **720×1280**, h264 + aac.

### Download links

**⚠ These expire. Download the final MP4 and archive it by hand.**

**FINAL CAPTIONED CUT — this is the deliverable:**

```
https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/67dbc302-c963-424c-960c-af8a38c5f62e.mp4
```

| Deliverable | `media_id` | Size | URL |
|---|---|---|---|
| **Final captioned cut** — captions, history lower-third, end card | **`67dbc302-c963-424c-960c-af8a38c5f62e`** | 14,211,532 B | `…/67dbc302-c963-424c-960c-af8a38c5f62e.mp4` |
| Assembly master — pre-caption, pre-text, 496×864 | `9cb6d121-dcf1-4108-939b-ca3317ac53cb` | 12,393,407 B | `…/9cb6d121-dcf1-4108-939b-ca3317ac53cb.mp4` |

Both share the prefix
`https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/`.

**Verified serving 2026-08-10**: both return HTTP/2 200 with `content-type:
video/mp4`, probed from the sandbox.

**They cannot be fetched from the repo host, and the reason is the proxy, not the
CDN.** `curl` there returns `CONNECT tunnel failed, response 403` — the egress
policy refuses the CONNECT to `*.cloudfront.net` before any request reaches
CloudFront. **The links are good; only this host is blind.** The render is
therefore **not** in `output/suwen/ch13/renders/` and cannot be put there from a
session on this host. `renders/` is gitignored anyway, so this costs the repo
nothing — but **the archive step is manual and nobody but you can do it.**

**This cut has been assembled, burned and probed. Nobody has watched it.** See
*What was actually verified* for exactly which checks ran.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 13*.** Lingshu 13 (經筋) is a different
chapter. Both halves of the canon run to eighty-one separately numbered chapters,
so a bare "Chapter 13" is ambiguous by construction.

Companion longform: `inner-canon-suwen13-longform-v1.md` (84 blocks, 14:00), which
holds the complete source text, this cut's translation, and the compliance audit
this trailer inherits.

**Slate position.** Suwen 13 is **rank 2 and publish slot 2** — the channel's
thesis statement, whose stated job is to establish *"immediately that this is
intellectual history, not wellness."* **This trailer carries a disproportionate
share of that job**, because at slot 2 the trailer is the first thing most of the
audience sees and early classification is sticky. Every line below is written to
read as history of science and none of it as wellness.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the
real choice is six, seven, eight or nine blocks. **Seven is where this chapter's
hook lands** without stretching:

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer
  has five content blocks and a 70s trailer has six.
- The trailer has to carry **five things**: the practice, the question, the answer,
  the demotion, and the twist. At six content blocks that is one block each plus the
  audit beat that makes the twist land. At five, the block that goes is Lei-Gong's —
  and without it the final turn arrives with nobody having doubted anything.
- **80s and 90s would need a second reckoning beat to fill.** The trailer cannot
  carry the expectation-effects hedge (longform blocks 17–19) — that is three blocks
  of careful qualification and a trailer has no room to do it responsibly. Rather
  than half-do it, the trailer stays clear of the claim entirely. See *Compliance
  notes*.

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3 as measured 2026-08-09, and the
assembler gates on **8.6–10.0s of detected speech** at both edges as hard errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–2. A single struck note enters at block 3 and
holds. Everything drops to room tone at block 6.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**,
text-free except blocks 4 and 7. **The longform's divided scroll is the trailer's
one carried-over image** — it appears in blocks 1, 3 and 6 and closes the cut.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | For most of human history, the treatment was words. Someone who knew the right ones said them over you. That was not superstition. It was the state of the art, and the Chinese state funded it for a thousand years. |
| 2 | Fan-di (Xavier) — the question | The physicians of high antiquity, I have heard, cured a man by shifting his essence and speaking to the cause. One sentence and it was done. Mine use poisons inside and needles outside, and it works about half the time. Explain. |
| 3 | Dr-Qi (Vesper) — the answer | Nobody will tell you the old invocations were stronger than a needle. What changed was not the medicine. In the old age there was no burden of longing within and no striving after office without, and sickness never got in deep. |
| 4 | Arthur (V.O.) — the demotion | Now worry winds around a man from the inside and hard labour wears him down from the outside. The illness reaches the marrow and the bone. And so, the chapter says, the invocation can no longer end it. |
| 5 | Lei-Gong (Zane) — the audit | I audit things for a living, and this chapter is a ladder of ages each one worse than the last, which is the most common complaint anybody has ever made about anything. But then it gives itself away in the very last passage, and I did not see that coming. |
| 6 | Arthur (V.O.) — the turn | Shut the door and close the window. Stay with the patient and ask again and again what is wrong, and follow wherever the answer leads. That is what the chapter puts where the spell was, and it is worth asking whether it is one. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode asks what actually replaced the invocation, and whether the profession ever entirely stopped performing one. |

**These are the lines that actually recorded, and five of the seven are not the
lines this document was committed with.** The narration above was first written to
`SKILL.md` step 3's budgets — Arthur 31–34, Vesper 37–41 — and **five of seven
blocks failed the assembler's gate**, three of them by more than a second. The
table now carries the rewritten text, sized to rates measured on this cut:

| Block | Voice | Words | Speech | Budget it was written to | What it needed |
|---|---|---|---|---|---|
| Block 1 | Arthur | 40 | 9.723s | 31–34 | **40** |
| Block 2 | Xavier | 41 | 9.702s | 40–44 ✓ | unchanged, first take |
| Block 3 | Vesper | 41 | 9.271s | 37–41 | **41**, at the very top |
| Block 4 | Arthur | 38 | 9.537s | 31–34 | **38** |
| Block 5 | Zane | 50 | 9.539s | 47–52 ✓ | unchanged, first take |
| Block 6 | Arthur | 44 | 9.431s | 31–34 | **44** |
| Block 7 | Arthur | 29 | 9.602s | 31–34 | **29** — see the block-7 note |

**Do not "restore" these lines to the step-3 budgets.** Every one of the original
counts is a measured failure, recorded in *Superseded takes* with its job ID. The
word-count checker will flag four Arthur blocks as outside 31–34; that flag is now
wrong for this voice and `SKILL.md` has been corrected.

**No block contains a comma-separated list of three or more items**, and no block
exceeds four sentences — both audited before generating, and neither produced a
pause warning at assembly.

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks
4 and 7.** Every shot needs motion from frame 1 — the assembler warns on a static
open or a frozen tail.

1. A hanging silk scroll, vertical, divided down the middle by a single crease. Both halves blank. Along the bottom, official seals ink themselves in a row, one after another, and keep going past the frame edge. Slow push in.
2. Interior audience chamber, vertical framing. FAN-DI on the high seat in the gold robe and glasses, **fan snapping open**. Behind him the divided scroll, still blank on both sides.
3. DR-QI at the scroll's left edge, blue cheongsam, bamboo scroll held casually like a tablet. **The left panel inks in as she speaks** — a low horizon, three birds, the shoulder of an animal, no faces. The right panel stays white.
4. **CARD** — 故祝由不能已也, six characters brushed on silk, held alone. Behind them the right panel takes its first mark: one wet stroke that spreads outward as a stain rather than a drawing. *(Default: plain plate, characters added at edit — see Finishing steps.)*
5. LEI-GONG alone, cinnabar robe, small hand drum resting in his lap, wax tablet raised. Beside him a ladder of three rungs inks itself, and the lowest rung is rubbed out.
6. The crease down the middle of the scroll closes over and the two panels become one surface. Then the chamber at night: one lamp, a bed frame drawn as three lines, and a door swinging shut. **No patient is drawn.**
7. **END CARD** — plain plate, ink wash drifting. Disclaimer and editorial credit added at edit time.

**Blocks 4, 6 and 7 are the stillness risks.** A held card, a closing door, and a
plate. Give each a slow push, drifting ink grain, or a light change so the clip does
not read as a held frame.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-suwen13-longform-v1.md`, which holds the complete classical text.

| § | Passage | Blocks |
|---|---|---|
| §1 | 余聞古之治病，惟其移精變氣，可祝由而已 | 2 |
| §1 | 今世治病，毒藥治其內，鍼石治其外，或愈或不愈 | 2 |
| §1 | 內無眷慕之累，外無伸宦之形 | 3 |
| §1 | 此恬憺之世，邪不能深入也 | 3 |
| §1 | 憂患緣其內，苦形傷其外 | 4 |
| §1 | 內至五藏骨髓 | 4 |
| §1 | **故祝由不能已也** | 4 |
| §3 | **閉戶塞牖，繫之病者，數問其情** | 6 |

**Block 1's thousand-year department is not in the chapter** and is the trailer's
one imported fact — the incantation office ran as 咒禁 under the Sui and Tang, as
書禁 under the Song and as 祝由 under the Yuan and Ming, and was removed from the
Imperial Medical Academy in 1571. It is dramatised here exactly as it is in the
longform (block 12), and both documents flag it for re-confirmation before burn.

**Block 5 is not in the source and is the trailer's one invention** — the chapter's
regress of declining ages is a real feature of the text, but nobody in it remarks
on the regress. Lei-Gong's audit is ours, in the longform (block 42) and here.

**Longform beats deliberately withheld from this trailer:** the whole
colour-and-pulse act, 僦貸季, the 中古/暮世 decline and 粗工兇兇, and the
expectation-effects reckoning. **The last of those is withheld on compliance
grounds rather than for pacing** — see below. The trailer sells the question; the
episode sells the reckoning.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.

---

## Production record (Higgsfield)

**Status: RENDERED at draft tier, 2026-08-10.** Assembled, captioned, burned and
probed in the sandbox. **Not visually verified** — see *What was actually verified*.

### Credit spend — actual against preflight

**Balance 462.9 → 343.2 = 119.7 credits.** The preflight said ~85–95. **The gap is
entirely in voice, and entirely in the number of takes rather than their price.**

| Item | Live `get_cost` | Count | Expected | Actual |
|---|---|---|---|---|
| Clips `seedance_2_0_mini` 480p 10s 9:16 | 10.0 | 7 | 70 | **70.0** |
| Style key `nano_banana_pro` 1k 9:16 | 2.0 | 1 | 2 | **2.0** |
| Voice takes `seed_audio` | **1.3–1.7** | **33** | ~13–18 | **~47.7** |
| Assembly, captions, burn | free | — | 0 | **0** |
| | | | **~85–95** | **119.7** |

**This is the first run in the repo whose delta fully reconciles.** 119.7 − 70 − 2 =
47.7 across 33 takes = **~1.45/take**, which sits exactly between the two live
`get_cost` probes (1.3 for a 34-word line, 1.7 for a 50-word line). `SKILL.md`
records ~4.9 and ~8.7 credits unexplained on the two previous runs; there is no
such hole here. **Cost voice at a representative-length line and the arithmetic
closes.**

> **⚠ `SKILL.md`'s 0.1/take is wrong, and this run is the second time that error
> has been made.** The Lingshu 28 v2 record already warned that `seed_audio` bills
> by length and that a short probe string under-prices a run. The Suwen 8 record
> then quoted **0.1** from exactly such a probe, and `SKILL.md` step 0 propagated
> it. Live `get_cost` on this cut's actual lines returns **1.3–1.7**, so voice is
> **13–17× the recorded figure**. Corrected in `SKILL.md`.
>
> **The consequence for longform is large, not cosmetic.** The Suwen 13 longform's
> own preflight says "84 takes is ~8.4 credits". At the measured rate a *first
> pass* is **~120**, and at this cut's 4.7× re-take rate the voice line alone is
> **~500**. That is no longer a rounding error against an ~840 clip bill.

**Thirty-three takes for seven blocks — a 4.7× re-take rate.** Not because takes
were rejected carelessly, but because the step-3 word budgets were wrong for this
cut's voices (below). The cost of that was ~35 credits and about twenty minutes;
the cost of *not* catching it would have been a hard assembly failure.

### Voice measurement — Arthur and Vesper are much faster than the table says

This is the run's most valuable output and it invalidates budgets used across the
repo. Every figure is `speech_metrics.sh` against the assembler's own trim, so it
is the number that was gated.

**The first pass was written to `SKILL.md` step 3's budgets and five of seven
blocks failed.** Only Xavier and Zane — the two voices measured most recently —
landed first time.

| Voice | Step-3 budget | Words tried | Speech returned | **Measured rate** | Verdict |
|---|---|---|---|---|---|
| **Arthur** | 31–34 | 34 | 7.421 / 7.223 / 7.541 | **4.60 w/s** | **far too fast for 31–34** |
| | | 33 | 8.261 / 8.399 / 8.098 | **4.00 w/s** | under |
| | | 32 | 6.446 / 7.098 / 6.461 | **4.80 w/s** | under by 2.15 |
| | | **40** | **9.723** | 4.11 w/s | **keeper** |
| | | **38** | **9.537** | 3.98 w/s | **keeper** |
| | | **44** | **9.431** | 4.67 w/s | **keeper** |
| **Vesper** | 37–41 | 40 | 8.607 / 8.701 / 7.919 | **4.76 w/s** | at/under floor |
| | | 44 | 10.361 / 10.024 | 4.31 w/s | over |
| | | 42 | 9.945 / 9.985 | 4.22 w/s | passed by 0.055 / 0.015 — **rejected as too tight** |
| | | **41** | 8.953 / **9.271** | 4.51 w/s | **keeper** |
| **Xavier** | 40–44 | **41** | **9.702** | 4.23 w/s | **keeper, first take** |
| **Zane** | 47–52 | **50** | **9.539** | 5.24 w/s | **keeper, first take** |

**Arthur is the problem, and the error is large.** The table has him at **3.50
w/s / 31–34 words**; across nine measured takes on this cut he averaged **~4.4
w/s** and needed **38–44 words**. A 32-word line — legal under the table, and
mid-range — came back at **6.446s, more than two seconds under the floor.**

**Vesper is also fast**: measured ~4.5 w/s against a recorded 4.15, wanting **41**
rather than the 37 that the table's floor implies. Her 37-word figure from Suwen 8
did not reproduce here.

**Xavier and Zane both reproduced exactly** and needed no re-rolls at all.

**Read this as content-dependent, not as a flat correction.** Arthur's own rate
moved between 3.98 and 4.80 w/s *within this one cut*, on lines of near-identical
length — block 4 at 38 words ran 9.537s while block 6 at 44 words ran 9.431s. **The
honest reading is that a word count predicts a take only within about ±1.5s**, and
the working method is to generate two variants and keep the better, not to compute
a number and trust it.

#### Block 7 ran pathologically slow and it is worth naming why

The disclaimer block at 33 words returned **11.326s, 16.930s and 10.538s** — a
2.91, 1.95 and 3.13 w/s spread, against Arthur's ~4.4 elsewhere in the same cut.
Three takes, all over, one by nearly seven seconds.

The text is the mandated compliance string — **two short full-stopped sentences** —
followed by a long trailing clause. `seed_audio` appears to treat the two short
sentences as separate beats and slow the whole take around them. **Shortening the
tail from 22 words to 18 fixed it on the first roll (9.602s).**

**Practical rule for every future cut:** the mandated disclaimer is fixed text and
cannot be reworded, so **budget the block-7 tail short — about 18 words, not 22 —
and expect the mandated sentences to cost more than their word count suggests.**

### Style key

Derived for this chapter by chaining off the Suwen 1 head
`4b6f7106-67da-4d1a-a553-c58ba90ac43f` — the head recorded in `SKILL.md` step 1 —
passed as a **job ID** reference with only the motif swapped.

| | |
|---|---|
| Job ID | **`a863a691-6893-4cdd-8ef1-a098c9a426ea`** |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Delivered | **768×1376**, 1,683,705 B |
| Motif | three-character series key; a hanging silk scroll divided down the middle behind them, inked on one side and blank on the other; a closed door at the frame's edge |
| Derivation | Suwen 1 head → this key |
| Cost | 2 credits |

**This is the new head for Suwen 13 and should be promoted in `SKILL.md` step 1.**

**A discrepancy worth recording:** the Suwen 8 record says its key
(`05ebe984-2781-491e-8c84-2b20e608d2a8`) "should be promoted in `SKILL.md` step 1"
and it never was — step 1 still names the Suwen 1 key. This run chained off the
**recorded** head rather than the newer one, deliberately: the Suwen 8 key carries
chapter-8 furniture (a lacquer chart of twelve boxes, a closed chest) that would
have had to be prompted away. **Both choices are defensible; what is not is a
step-1 head that two cuts in a row have declined to update.** Pick one and write it
down.

The longform still needs a **16:9 sibling** derived from *this* job ID — **do not
overwrite the vertical key**, this trailer depends on it.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails.

### Clips

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16.** Style key
`a863a691-6893-4cdd-8ef1-a098c9a426ea` attached to every clip as `image_references`.
`generate_audio: false` on all seven. `IN THE DARK`
(`24bae836-2c4a-48e0-89b6-49fcc0b21612`) pre-declined on all seven.

| Block | Job ID | Delivered | Duration | Audio streams |
|---|---|---|---|---|
| Block 1 | `89d54980-6e29-4181-8811-8d4092c5aee9` | 496×864 | 10.042s | 0 |
| Block 2 | `2b3cf527-1109-4d16-946f-a3b77fb7e2a5` | 496×864 | 10.042s | 0 |
| Block 3 | `97cfda66-e6a3-41e7-af22-b0455a7c73ff` | 496×864 | 10.042s | 0 |
| Block 4 | `017e54e4-93df-41c7-989c-769219c61c08` | 496×864 | 10.042s | 0 |
| Block 5 | `f96498e0-e4b5-4552-9b7e-5ce32457394c` | 496×864 | 10.042s | 0 |
| Block 6 | `7cda88d5-83de-44ff-b53e-e5d270e03b17` | 496×864 | 10.042s | 0 |
| Block 7 | `3b5cbf3a-9ec6-47fd-9ba6-13d73a259a92` | 496×864 | 10.042s | 0 |

**Zero clip re-rolls.** All seven came back correct on the first attempt, which is
the first time that has happened in this repo.

Four things this run confirms, all consistent with the Suwen 8 run and two of them
still contradicting `SKILL.md`:

- **Clips arrive 496×864, not 480×854.** `SKILL.md` step 4 attributes the 496×864
  delivered geometry to the *assembler rescaling* 480×854 clips. That is wrong for
  the second cut running: the clips were **already** 496×864 and the assembler
  changed nothing. 496×864 is ~2% wider than true 9:16, which is why the house call
  is to scale to 720×1280 before burning.
- **The double aspect-ratio declaration held.** `aspect_ratio: "9:16"` plus
  "vertical 9:16 portrait framing" in every prompt; all seven vertical first time.
- **`generate_audio: false` worked** — `ffprobe` found **zero audio streams** on all
  seven, so nothing leaked in at the assembler's 0.12 SFX level.
- **No preset offer fired on any clip**, including the three lamp-lit-on-black
  shots. Pre-declining `IN THE DARK` cost nothing; keep doing it, since one retry
  costs a full clip.

**Prompt hygiene that was applied and should be kept.** *Incantation* and *ritual*
were kept out of every clip prompt — they are the subject of the trailer and belong
in the narration, but they invite occult iconography. Lei-Gong's hand drum was
described as *"lying still and untouched in his lap as a prop"*, never played, since
*drum* and *rhythm* trigger `DROWN IN MUSIC`. **No shot depicts a ceremony and no
prompt contains a bound or restrained figure.**

**Clip 1 was generated alone and probed before the other six were submitted**, per
`SKILL.md`. It returned 496×864 / 10.042s / 0 audio streams with no freeze at head
or tail, and the remaining six were then fired as one batch.

### Voiceover

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55**, one take per block, one
speaker per block. **The figure in brackets is `speech_metrics.sh`'s measured
*speech*, not the file duration** — recording speech is what makes
`build_subtitles.js` centre cues where the assembler centres the voice. On this cut
every kept take reported `file == speech` with zero lead silence and **zero internal
pauses**, so the two are identical and the documented cue drift computes to 0.000s.

- **Voiceover** (`seed_audio`, preset, `speech_rate` 55): block 1 `ca260fcc-544d-40e9-ab45-ecb5311c0e7f` (9.723s), block 2 `7c92077c-edae-400e-9ada-b6191f5f1efe` (9.702s), block 3 `d6a0e21e-6efa-41df-9629-0ff3b2603e4b` (9.271s), block 4 `31b7489e-5d3c-4dd0-b1a8-d8241b244dcd` (9.537s), block 5 `a4e60c65-35eb-41d9-aec9-1f4a5e2111b1` (9.539s), block 6 `7fd70169-42a1-4789-a43e-460c69da37e2` (9.431s), block 7 `a461f270-fc62-4ad5-bea1-92f4c89f41a4` (9.602s)

| Block | Voice | Words | Job ID | **Speech (gated)** | Floor margin | Ceiling margin |
|---|---|---|---|---|---|---|
| Block 1 | Arthur | 40 | `ca260fcc-544d-40e9-ab45-ecb5311c0e7f` | **9.723s** | +1.123 | −0.277 |
| Block 2 | Xavier | 41 | `7c92077c-edae-400e-9ada-b6191f5f1efe` | **9.702s** | +1.102 | −0.298 |
| Block 3 | Vesper | 41 | `d6a0e21e-6efa-41df-9629-0ff3b2603e4b` | **9.271s** | +0.671 | −0.729 |
| Block 4 | Arthur | 38 | `31b7489e-5d3c-4dd0-b1a8-d8241b244dcd` | **9.537s** | +0.937 | −0.463 |
| Block 5 | Zane | 50 | `a4e60c65-35eb-41d9-aec9-1f4a5e2111b1` | **9.539s** | +0.939 | −0.461 |
| Block 6 | Arthur | 44 | `7fd70169-42a1-4789-a43e-460c69da37e2` | **9.431s** | +0.831 | −0.569 |
| Block 7 | Arthur | 29 | `a461f270-fc62-4ad5-bea1-92f4c89f41a4` | **9.602s** | +1.002 | −0.398 |

**All seven sit at least 0.277s inside both edges**, which was the acceptance bar
for this run rather than merely clearing the gate. `SKILL.md` records an assembly
stopped by a take written up as "8.50s pass" that was 8.497s; two takes here
(block 3 at 9.945s and 9.985s) cleared the gate by 0.055s and 0.015s and were
**rejected anyway** for exactly that reason.

### Superseded takes — kept as evidence

`CLAUDE.md` requires superseded job IDs be kept. All 26 below failed the
8.600–10.000s gate or were rejected for sitting too close to an edge. **These lines
are marked superseded so `build_subtitles.js` skips them.**

| Block | Job ID | Words | Speech | Why superseded |
|---|---|---|---|---|
| Block 1 | `c6dbfeb0-fb9f-4e98-968d-565c745e40ba` | 34 | 7.421s | under floor |
| Block 1 | `22e7a1b3-4686-479e-9ff9-4c74d1865f6f` | 34 | 7.223s | under floor |
| Block 1 | `b6f6b6b9-5539-44b8-a489-ae070a0de096` | 34 | 7.541s | under floor — three misses, line rewritten |
| Block 1 | `0763cda8-da4e-4a52-9619-778835e162ca` | 44 | 10.269s | over ceiling — rewrite overshot |
| Block 1 | `56720ed7-da71-4e38-a8de-f6b6ba87bfd5` | 44 | 11.533s | over ceiling |
| Block 1 | `476fc9ef-6ce0-4d3d-889d-58bd9f461f3a` | 40 | 10.857s | over ceiling — variant of the keeper |
| Block 3 | `64f81319-472e-48bd-959e-b807c83a6b7a` | 40 | 8.607s | passed by 0.007s — too tight to ship |
| Block 3 | `f1f6a9a4-7900-42f8-996e-3098ddbada0a` | 40 | 8.701s | 0.101s margin — too tight |
| Block 3 | `fa7281da-c7b5-403d-9031-cfc34c1db7cb` | 40 | 7.919s | under floor |
| Block 3 | `e3ab5354-f57f-40e4-a517-da554baac4e2` | 44 | 10.361s | over ceiling |
| Block 3 | `68dc90c5-2cca-4b71-930d-e5ebf7ce4142` | 44 | 10.024s | over ceiling |
| Block 3 | `e008fe69-c4f2-4b25-8271-a328d2ff2f55` | 42 | 9.945s | **passed by 0.055s — rejected as too tight** |
| Block 3 | `ffbd5661-950a-46bb-8453-6bf1a4682e67` | 42 | 9.985s | **passed by 0.015s — rejected as too tight** |
| Block 3 | `917ec318-1705-406e-8fcd-4eae46599c5b` | 41 | 8.953s | 0.353s margin; the 9.271s variant was preferred |
| Block 4 | `793ba6ae-9a0c-4603-8422-1885f35233d6` | 33 | 8.261s | under floor |
| Block 4 | `4b379638-fedd-43fb-b479-2cad2742428c` | 33 | 8.399s | under floor |
| Block 4 | `2092f6d1-23ea-4540-9a41-184d98ece133` | 33 | 8.098s | under floor — three misses, line rewritten |
| Block 4 | `b76a7c66-fc59-425a-9fc0-34cde781d0a3` | 38 | 9.733s | passed; the 9.537s variant was preferred |
| Block 6 | `9da6755c-d4dd-42ec-9665-daac2c7feea3` | 32 | 6.446s | **2.15s under floor** |
| Block 6 | `cc31770e-a630-4fda-a297-f4c6ccc363cb` | 32 | 7.098s | under floor |
| Block 6 | `33e577c7-36d4-4c5e-8201-dc361fa17b21` | 32 | 6.461s | under floor — three misses, line rewritten |
| Block 6 | `8fb06d69-b3b9-4808-9c6e-5ce4458cd900` | 44 | 8.983s | passed; the 9.431s variant was preferred |
| Block 7 | `e9ce9777-6a76-4b65-ba4c-3c2fcfbca726` | 33 | 11.326s | over ceiling |
| Block 7 | `c9cb3d1c-fa8e-4c6a-ae39-b5c475f8a9bf` | 33 | **16.930s** | **6.9s over — see the block-7 note above** |
| Block 7 | `d3b2a310-e31b-4f1f-bc53-4e39c44ec143` | 33 | 10.538s | over ceiling — three misses, line rewritten |
| Block 7 | `8bbf395e-8645-43b5-bcc2-f963fc0bd59a` | 29 | 11.619s | over ceiling — variant of the keeper |

### Assembly

There is no assembly job ID on this path, so what makes the run repeatable is
recorded instead.

| | |
|---|---|
| Script | `$HF_WORKFLOWS/faceless-channel-video/scripts/assemble_final.sh`, run under `sandbox_exec` |
| Flags | `--out work/output/master.mp4 --blocks 7 --manifest pairs.txt` |
| Defaults left alone | `--clip-seconds` 10, `--sfx-vol` 0.12, no `--music` |
| Manifest | `work/blocks/blockNN.mp4 work/voices/voiceNN.wav`, NN = 01–07, aligned |
| Delivered | **496×864, 24.0000 fps, 70.059000s**, one MP4, decode-validated |
| Mix | 2-pass loudnorm −16 LUFS, voice 1.0; per-block levels matched to ≈ −22 dB |
| Master `media_id` | **`9cb6d121-dcf1-4108-939b-ca3317ac53cb`** (pre-caption) |
| Mode | **foreground**, completed well inside the 120s budget |
| WARNs | **none** — no freeze head/tail, no internal pauses, no pair mismatch |
| Assert | *narration present in all 7 windows*; 70.059s within ±1s of 70 |

**Every block's speech landed where it should.** The assembler reported `file ==
speech` with zero lead silence on all seven takes, and centred each one between
0.14s and 0.36s into its block — so the cue-timing drift `SKILL.md` documents
computes to **0.000s** on this cut and the sidecar needed no nudging.

**The export `curl -X PUT` was chained into the same `&&` command as the
assembler**, per `SKILL.md` — the near-miss recorded on the Suwen 8 run was not
repeated. Probes ran in a later call, after the upload, never instead of it.

### Captions

**Built and burned.** `inner-canon-suwen13-trailer-v1.srt` / `.vtt` are tracked
beside this document. 9:16, **41 cues**, widest line **554px against a 556px usable
width — fits**, two lines max, Anton.

```
node scripts/check_caption_fit.js output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
node scripts/build_subtitles.js  output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
```

**Burned copy is cues 1–35 only** (blocks 1–6, ending 00:00:59,716). Cues 36–41
cover block 7 and were dropped so the disclaimer is not simultaneously a caption and
a card. The tracked sidecar keeps all 41.

**Anton was verified present before burning, not assumed.** The sandbox ships
Metropolis and Montserrat but **not Anton**, so it was installed from Google Fonts
and `fc-match Anton` confirmed `Anton-Regular.ttf: "Anton" "Regular"` before the
burn ran. Without that check libass substitutes a wider face silently and every
measurement `build_subtitles.js` made is void.

**PlayRes was re-targeted before burning.** The `.srt` was converted to `.ass` and
`PlayResX/Y` rewritten from ffmpeg's hardcoded 384×288 to **720×1280** — confirmed
in the generated file — then burned after `scale=720:1280`, in that order.

#### `check_caption_fit` reports ten overflows at 9:16, and they are accepted knowingly

Run at script stage, before any take exists. **Nothing here overflows the frame** —
`build_subtitles.js` pre-splits a wide clause across cues and libass margins cannot
draw outside themselves. What it costs is extra cue breaks on screen.

| | |
|---|---|
| Longform, 16:9 | **All clauses fit.** 84 blocks, zero overflows |
| This trailer, 9:16 | **10 overflowing clauses**, all needing 3 lines except blocks 4 and 6 at 4 |

**The asymmetry is pure geometry and is expected.** A 720-wide vertical frame gives
556px per line against 1001px at 16:9, so roughly 22 characters per line and ~44
per two-line cue. Almost any natural English clause exceeds that. The same script's
narration passes cleanly at 16:9 and splits at 9:16 without a word changing.

**Two clauses were fixed at script stage, which is where it is free:** block 2's
opening ran **113 characters over five lines** and was restructured to *"The
physicians of high antiquity, I have heard, cured a man by…"* — 62 characters over
three — and block 5's opening ran 94 characters over four and now runs 66 over
three. **No word count changed on either**, so neither touched the take window.

**The remaining ten are left alone deliberately**, and `SKILL.md` is explicit about
why: *"A wide clause is not a re-take… never re-record a take, and never re-render
video, for a caption problem."* The take window is a hard assembly error; caption
width is readability. **Write for the window first.**

> **⚠ Do not "fix" the residual by adding commas to the narration table once takes
> exist.** It would improve the cue breaks without re-recording — a comma is
> punctuation, not a word, so the existing audio would still match — **but it
> poisons reproduction**: the next person to regenerate a take from this document
> gets the comma version, and comma density is the single most expensive structure
> measured on these voices. The fix, if one is wanted, is to reword the clause
> shorter and re-record at 0.1 credits.

**Blocks 2 and 5 now carry three commas each.** They are clause boundaries rather
than an enumeration, so the measured list penalty does not apply — but both sit
mid-window (9.27s and 9.36s predicted) rather than near the ceiling, which is the
headroom that makes the extra commas affordable. **Do not add a fourth to either.**

### Reproduction notes

- **Rendered end to end on 2026-08-10** — style key, 7 clips, 33 takes, assembly,
  captions, lower-third and end card. **119.7 credits. Balance 462.9 → 343.2.**
- **`seed_audio` bills by length: 1.3–1.7 credits/take, not 0.1.** `SKILL.md`
  step 0's figure came from a short probe string — the exact error the Lingshu 28 v2
  record had already warned about. Corrected in `SKILL.md`. **This changes the
  longform preflight by roughly two orders of magnitude on the voice line.**
- **This is the first run in the repo whose credit delta fully reconciles** —
  70 clips + 2 key + 47.7 voice = 119.7, with nothing unexplained. The two prior
  runs had ~4.9 and ~8.7 credits of hole. **Cost voice at a representative-length
  line and the arithmetic closes.**
- **Arthur and Vesper are much faster than `SKILL.md` step 3 records.** Arthur
  measured ~4.4 w/s against a recorded 3.50 and needs **38–44 words**, not 31–34; a
  legal 32-word line came back **2.15s under the floor**. Vesper measured ~4.5
  against 4.15 and wants **41**. Xavier and Zane reproduced exactly and needed no
  re-rolls. Corrected in `SKILL.md`.
- **The mandated disclaimer text is expensive.** Block 7 at 33 words returned
  11.326s, **16.930s** and 10.538s before the tail was cut from 22 words to 18.
  Budget the block-7 tail at ~18 words on every future cut.
- **33 takes for 7 blocks — a 4.7× re-take rate**, all of it caused by the wrong
  word budgets rather than by service noise. Two variants per block was the working
  method and is what the corrected `SKILL.md` now recommends.
- **Two takes that *passed* the gate were rejected** at 9.945s and 9.985s — 0.055s
  and 0.015s of ceiling margin. `SKILL.md` records an assembly stopped by an
  8.497s take written up as "8.50s pass"; this run treated ~0.2s as the acceptance
  bar rather than the gate itself, and every shipped take clears both edges by at
  least 0.277s.
- **Clips arrived 496×864 and the assembler rescaled nothing** — contrary to
  `SKILL.md` step 4, which attributes that geometry to the assembler. Second cut
  running. **Zero clip re-rolls and no preset offers fired.**
- **The step-1 head is stale and two cuts have now declined to update it.** Suwen 8
  said its key should be promoted and it was not; this cut chained off the recorded
  Suwen 1 head instead, deliberately, to avoid inheriting chapter-8 furniture.
  Someone should decide what "current head" means.
- **The classical Chinese in the longform's source section was reconstructed, not
  extracted** — the supplied ctext PDF's CJK glyphs use an embedded subset encoding
  this host cannot decode. **Block 4's card 故祝由不能已也 is not yet on screen** —
  the burn covered captions, the lower-third and the end card only. See the
  outstanding item in *Finishing steps*.
- **Block 1's 1571 date is the trailer's one hard fact** and is flagged for
  re-confirmation in the longform's reproduction notes.
- **Lessons from the Suwen 8 run that were applied and held:** the export `curl`
  went in the same `&&` chain as the assembler; Anton was installed in the sandbox
  and `fc-match`-checked before the burn; *speech* rather than file duration was
  recorded in the voiceover line; and no name credit was put at the end of a take.

#### What was actually verified, and what was not

**Not visually verified. Nobody watched this file.** The CDN is 403 from the repo
host — confirmed again this session — so neither the MP4 nor any frame could be
fetched back and looked at. Every check below ran in the sandbox, next to the file.

| Check | Result |
|---|---|
| Output geometry / codecs / duration | **720×1280**, h264 + aac, **70.058s** |
| Assembler narration assert | narration present in all 7 windows |
| Assembler freeze probe | no frozen head or tail on any block |
| Assembler pause probe | 0 internal pauses ≥0.8s on any take |
| Speech window, all 7 takes | every one inside 8.600–10.000s, min margin 0.277s |
| Clip audio streams | **zero** on all seven — no diegetic audio leaked in |
| Style key geometry | 768×1376 |
| Anton actually resolved | `fc-match` confirmed **before** the burn |
| ASS PlayRes | confirmed rewritten to 720×1280 before burning |
| **Captions inside the margins** | **differenced against the uncaptioned master: caption band differs by up to 221 luma across the centre, while left and right margins differ by only 39 and 31 — re-encode noise. Captions provably do not reach the margins.** |
| History lower-third timing | present at t=5s (11,145 bright px), gone by t=25s (660) |
| End card scrim | top-strip luma **79.7** vs master's **210.7** — scrim present |
| End card text | all four lines present at t=65s (10,237 / 10,333 / 7,038 / 5,199 bright px) |
| Both CDN URLs serve | HTTP/2 200, `content-type: video/mp4` |

The margin difference test is the one worth keeping: it distinguishes *caption glyph
in the margin* from *bright picture in the margin*, which a luma threshold alone
cannot.

**What none of that establishes:** whether the cut reads well, whether the ink-wash
look held across seven clips, whether the divided-scroll motif is legible, or
whether the characters are on-model. **Those need a human viewing.**

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. **Not in any voice take.**
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none. **Guqin licensing is unresolved** (slate §9) — until cleared,
  score this cut with no guqin.

### Finishing steps

**Executed 2026-08-10. Steps 1–4 and 6 ran; step 5 did not — see the gap below.
Step 7 is not applicable.** This cut's own numbers — 7 blocks, 70.059s, card block
at **0:30**, end card **1:00 to 1:10**.

> **⚠ OUTSTANDING: the block-4 quotation card is still a blank plate.**
> Block 4 was generated as a plain silk plate on the default (plates plus
> edit-time text), and **故祝由不能已也 was not added** — the burn pass covered
> captions, the history lower-third and the end card only. The card is therefore an
> empty panel with a spreading ink stain from **0:30 to 0:40** in the delivered
> file. It is a deliberate scope boundary, not an oversight in the burn, but **the
> cut should not ship until that text is on screen** — it is the sentence the
> episode is named for and the only classical quotation in the trailer. Step 5
> below has the command.

**The burn as actually run**, in the sandbox, one chained command, in this order —
scale first, then captions, then text:

```
ffmpeg -v error -y -i master.mp4 -vf "scale=720:1280,\
subtitles=burn.ass:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,\
OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,\
MarginL=58,MarginR=58,MarginV=150,WrapStyle=0',\
drawtext=fontfile=$F:text='Presented as history & philosophy':fontsize=28:\
  x=(w-text_w)/2:y=896:borderw=2:enable='between(t,2,9)',\
drawbox=x=0:y=0:w=iw:h=ih:color=black@0.62:t=fill:enable='between(t,60,70)',\
drawtext=fontfile=$F:text='A dramatized adaptation of a':fontsize=46:y=470:enable='between(t,60,70)',\
drawtext=fontfile=$F:text='classical philosophical text.':fontsize=46:y=536:enable='between(t,60,70)',\
drawtext=fontfile=$F:text='Not medical advice.':fontsize=46:y=602:enable='between(t,60,70)',\
drawtext=fontfile=$F:text='Written & edited by Joshua Chin':fontsize=30:y=724:enable='between(t,60,70)'" \
  -c:a copy -movflags +faststart final.mp4
```

with `F=/home/user/.fonts/Anton-Regular.ttf`, installed and `fc-match`-verified in
the same chained command.

**The lower-third sits at y=896, not in the caption band.** At 720×1280 with
`MarginV=150` and `Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so
the mandated *"Presented as history & philosophy"* was placed **above** that band.
Measured clear: the caption band's own margin test and the lower-third's bright-pixel
count are taken at different y-ranges and do not overlap.

**The end card carries a full-frame scrim** at `black@0.62` across 60–70s. Block 7's
plate is a light ink wash and white text on it was not reliably legible without one;
measured top-strip luma after the burn is **79.7**, against **210.7** on the
uncaptioned master.

Both caption scripts are pure text tools: they read this document, touch no video,
need no network and cost no credits. **Run them from the repo root or pass an
absolute path.**

**1. Check captions** at 9:16, before generating takes — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
```

**This document exits 1 on the mandated disclaimer clause and that is correct, not
a defect.** *"A dramatized adaptation of a classical philosophical text."* is 58
characters and 1187px against a 556px line — it needs three lines on a 720-wide
vertical frame and fits on one at 16:9. It is a compliance string and cannot be
reworded, which is why `check_caption_fit.js` carries it as a known exception. The
sidecar splits it and libass margins keep it in frame.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in
the record above.

```
node scripts/build_subtitles.js output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
1:00) so the disclaimer is not simultaneously a caption and a card. The burn copy is
blocks 1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched
with the picture. Run `ffmpeg -version` and `fc-match Anton` **before** starting,
**in the sandbox where the burn actually happens**: the sandbox does not ship Anton,
and libass substitutes a wider face silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and re-target `PlayResX/Y`
to 720×1280 first — ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every
style value by ~4.4× and runs the lines off frame.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's self-inking row of seals. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the
lower-third **above** that band — y=896 is the position the comparable cut used.

**5. Quotation card — block 4, in at 0:30, out at 0:40.** If block 4 was rendered as
a plain plate, which is the default, **故祝由不能已也** is added here in the same
`drawtext` pass. **Verify every glyph against the *Source text and translation*
section of the longform before export.** ffmpeg needs a CJK-capable face — Anton has
no Chinese coverage and renders tofu boxes silently. **Six characters alone should
fill the frame**; this is the cut's only classical text and the sentence the episode
is named for.

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Block 7's plate is a
light ink wash, so **a full-frame scrim at roughly `black@0.62`** will be needed for
white text to be legible on it. Both lines also go in the description at upload.

**7. Music.** None, until guqin licensing is cleared. **Trailers earn
disproportionate plays and carry the higher Content-ID exposure**, so this is the
cut to be most careful about, not the least.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list. The longform's
audit governs the material this trailer draws from; these are the trailer-specific
findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document,
  at the head of block 7's narration, on screen as the end card, and in the
  description. Block 7 is extended past the mandated string to clear the 8.6s floor;
  **the mandated sentence itself is unaltered**.
- **The slate's named care point for this chapter is the whole design problem of
  this trailer.** §3.2: *"do not let the incantation material read as an endorsement
  of faith healing — the chapter itself explicitly says incantation no longer works,
  which is the correct beat to land on."* The trailer lands on exactly that beat, on
  a card, at the midpoint: **block 4 is 故祝由不能已也**, and it is the only classical
  text in the cut. **Block 3 pre-empts the misreading in its first sentence** —
  *"Nobody here will tell you the old invocations were stronger than a needle"* —
  before the trailer has said anything a viewer could take the wrong way.
- **The expectation-effects material is deliberately absent, and that is a
  compliance decision rather than a pacing one.** The longform handles it in a
  locked trio (blocks 17–19) where the third block exists solely to say that
  expectation does not move the disease. **A trailer block cannot carry a claim and
  its refusal in ten seconds**, and carrying the claim without the refusal is
  precisely the failure the slate warns about. So the trailer makes no claim about
  what ritual does to a patient at all. **Do not add one in any recut.**
- **Block 6's turn is the one line that needs watching**, because *"that is what
  replaced the spell, and it is worth asking whether it is one"* is the hook and is
  clippable. It is phrased as **an open question, not an assertion** — the trailer
  poses it and the episode answers it, and block 7 says on screen that the full
  episode is where the answer lives. **The stronger version of that line — that
  attention *is* the spell — appears nowhere**, because the longform needs a whole
  block (83) to guardrail it and this cut has no room for one.
- **Health content stays philosophical narrative** — no dosage, no regimen, no
  diagnosis and no benefit claim. **No treatment is described anywhere in this
  cut.** 毒藥 is rendered *poisons* in block 2 and appears only as a historical
  category in the Emperor's own complaint. **No viewer is told to do anything.**
- **Longevity — absent.** The chapter's one longevity clause (生道以長，命曰聖王) is
  cut from the longform entirely and appears nowhere here. The words *longevity*,
  *live longer*, *ancient secret* and *anti-aging* appear in no line, title or
  thumbnail direction. **This matters more at slot 2 than anywhere else on the
  slate**, because the trailer is what fixes the channel's early classification and
  longevity framing sits two RPM bands below history of science.
- **Mortality / ageing** — block 4's *"the illness reaches the marrow"* is the only
  approach to it and is carried by **ink spreading through silk**, not by a body.
  **No patient is drawn in seven shots**, including in block 6's consultation, which
  is staged as an empty room.
- **Occult and ceremonial imagery — the specific prompt-stage risk here, and it is
  designed out.** A trailer about incantation invites robes, talismans, altars and
  bound figures, and **restraint or bound-figure imagery has tripped this service's
  safety filter before on innocuous subject matter**. There is **no ceremony in the
  shot list**: the practice is carried by a row of official seals (1), a blank
  half-scroll (3) and a card (4). *Incantation* and *ritual* are banned from clip
  prompts while remaining in the narration where they belong.
- **Supernatural hooks explicitly debunked by the payoff** — the hook is *for a
  thousand years the state paid a department to cure you with words*. That is a
  claim about an institution, not a mystery claim, and **it is debunked inside the
  same trailer** at block 4 by the chapter's own sentence. A trailer cannot carry a
  full debunk, so the honest test is whether it promises anything the episode does
  not deliver: it promises an institution, a mechanism, a demotion and a twist, and
  the episode delivers all four.
- **Title and thumbnail honour the educational payoff** — *When Medicine Stopped
  Being Magic*; on-screen framing *Suwen 13, Shifting the Essence*. **Thumbnail
  direction:** the divided silk scroll, inked on one side and blank on the other,
  with 故祝由不能已也 on the inked side. No faces, no talismans, no robed figure, no
  glowing hands. **Do not use an incantation image** — it promises the exact thing
  the episode declines to endorse.
- **Hedge allocation — three characters speak in a 7-block trailer, which is
  unusual and needs recording.** `SKILL.md` makes narrator-only the trailer default
  precisely because the narration carries every hedge. Here **Arthur keeps all four
  framing blocks (1, 4, 6, 7)** including the demotion and the disclaimer. **One
  hedge does move onto a character voice**: block 3's *"Nobody here will tell you the
  old invocations were stronger than a needle"* is Dr-Qi's, and it is the trailer's
  pre-emption of the faith-healing misreading. It sits there deliberately — it has to
  arrive before the ancient-world material it introduces, and Arthur does not speak
  again until block 4. **A viewer who clips block 3 alone still hears the refusal
  inside the clip.** No other compliance content sits on a character voice: block 2
  is Fan-di's complaint and block 5 is Lei-Gong's audit, and neither makes a claim
  about the body.
- **Historical accuracy** — cited on screen as **Suwen 13**, never a bare "Chapter
  13". Block 1's thousand-year department is the cut's one imported fact and is
  sourced in the mapping above with a re-confirmation flag. Block 3's *"no longing
  within and no striving for office without"* is 內無眷慕之累，外無伸宦之形 rendered
  close to literally. Block 2's *"shifting his essence"* preserves the 精/神
  distinction the supplied English collapses — see the longform's four departures.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No
  character makes a first-person factual assertion about their own expertise** —
  Dr-Qi reports what the chapter says and refuses a claim; she never asserts a fact
  about the body in her own person.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a divided scroll, a row of seals,
  a horizon with birds, a card, a ladder, a door, a plate. **No restraint or
  bound-figure imagery. No bodies, no injury, no anatomy, no ceremony.** Blocks 4, 6
  and 7 are lamp-lit against black and will trigger `IN THE DARK` — pre-decline on
  every clip.

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole
10s blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's audit. It is the
only block whose content is scepticism rather than argument, and the chapter's own
demotion at block 4 still lands. **Cost:** the turn at block 6 arrives with nobody
having doubted anything, so it reads as a fact rather than as a reversal — and the
cut loses its fourth voice. This is the cut to make only if the budget forces one.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 2. Fan-di's question survives
in Arthur's block 1 by implication, but the trailer then has no antagonist and no
stakes, and Dr-Qi's block 3 answers a question nobody asked. **Not recommended.**

**Stretch to 80s (8 blocks) — add 1.** Add an Arthur block after 4 carrying the
colour-and-pulse pivot: what the chapter reaches for once the invocation is retired,
and that both new instruments are on the patient. Written for Arthur at 31–34 words.
This is the strongest single addition, because it is the only thing the trailer
currently promises without showing.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus a Vesper block on
粗工兇兇 and 新病復起 — the chapter's contempt for the hurried practitioner and its
naming of harm done by treatment. **At 90s the trailer starts telling the episode's
story rather than selling it**, which is why 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:** **block 7** (the
disclaimer card is mandatory and is not a lever), **block 4** (the chapter's own
demotion is the beat the slate names as the correct one to land on, and it is also
the cut's only classical card), and **block 3's first sentence**, which is the
trailer's pre-emption of the faith-healing misreading and the one hedge on a
character voice.
