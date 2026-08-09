# The Emperor's Inner Canon — Suwen 8 Trailer v1 (70 seconds)

**素問·靈蘭祕典論第八 · The Twelve Offices**

**RENDERED — draft tier, 2026-08-09.** 7 blocks × 10s = **70.059s**, MP4,
`seedance_2_0_mini` 480p. Assembled at **496×864**, delivered captioned at a true
9:16 **720×1280**, h264 + aac.

### Download links

**⚠ These expire. Download the final MP4 and archive it by hand.**

**FINAL CAPTIONED CUT — this is the deliverable:**

```
https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/e873c77e-5743-458f-ac40-0c2514aa9c4f.mp4
```

| Deliverable | `media_id` | Size | URL |
|---|---|---|---|
| **Final captioned cut** — captions, history lower-third, end card | **`e873c77e-5743-458f-ac40-0c2514aa9c4f`** | 13,908,401 B | `…/e873c77e-5743-458f-ac40-0c2514aa9c4f.mp4` |
| Assembly master — pre-caption, pre-text | `f73eb944-2b94-47d7-a34a-ee3c8a0473c0` | 12,274,096 B | `…/f73eb944-2b94-47d7-a34a-ee3c8a0473c0.mp4` |
| Verification contact sheet — 7 frames | `4f95c604-a225-4cd3-a9db-8d2316b02d76` | 232,037 B | `…/4f95c604-a225-4cd3-a9db-8d2316b02d76.jpg` |

All three share the prefix
`https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/`.

**Verified serving 2026-08-09**: HTTP 200/206 with byte counts matching the upload
exactly, probed from the sandbox.

**They cannot be fetched from the repo host, and the reason is the proxy, not the
CDN.** `curl` there returns `CONNECT tunnel failed, response 403` — the egress
policy refuses the CONNECT to `*.cloudfront.net` before any request reaches
CloudFront. Two practical consequences, both previously recorded loosely as "the
CDN is blocked":

- **The links are good; only this host is blind.** Open them from a normal browser
  or any machine outside the sandbox and they download.
- **The render is therefore NOT in `output/suwen/ch8/renders/`** and cannot be put
  there from a session on this host. `renders/` is gitignored anyway, so this costs
  the repo nothing — but it does mean **the archive step is manual and nobody but
  you can do it.**

**This cut has been assembled, burned and probed. Nobody has watched it.** See
*Reproduction notes* for exactly which checks ran.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 8*.** Lingshu 8 (本神) is a different
chapter. Both halves of the canon run to eighty-one separately numbered chapters,
so a bare "Chapter 8" is ambiguous by construction.

Companion longform: `inner-canon-suwen8-longform-v1.md` (96 blocks, 16:00), which
holds the complete source text, this cut's translation, and the compliance audit
this trailer inherits.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the
real choice is six, seven, eight or nine blocks. **Seven is where this chapter's
hook lands** without stretching:

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer
  has five content blocks and a 70s trailer has six.
- The trailer has to carry **five things**: the question, the metaphor, the scale
  of it, the missing office, and the political turn. At six content blocks that is
  one block each plus a hook. At five it loses the montage, which is the block that
  makes the metaphor feel like a system rather than a simile.
- **80s and 90s would need a second character exchange to fill**, and this chapter's
  drama is one question and one answer. Padding it would show.

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3, and the assembler gates on
**8.6–10.0s of detected speech** at both edges as hard errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–2. A single struck note enters at block 3 and
holds. Everything drops to room tone at block 6.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**,
text-free except blocks 3 and 7.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Rank your organs. Decide which matters most, and which one you could lose. Two thousand years ago, an emperor asked a physician that question, and what he got back was a government. |
| 2 | Fan-di (Xavier) — the question | I want a ranking — every court has one, every ministry has one. Tell me my organs are all equally precious, and I will know you have never once had to cut a budget. Which of them is noble, and which of them is base? |
| 3 | Dr-Qi (Vesper) — the answer | The heart is the office of the sovereign. The lung is the chancellor. The liver is the general. Twelve organs, twelve posts, and not one of them can be spared. That is the whole of your ranking. |
| 4 | Arthur (V.O.) — the scale | A granary and a general. An envoy who carries joy and a district office that stores water. Eleven titles for twelve organs and one ministry with a name and no building. |
| 5 | Lei-Gong (Zane) — the missing office | I have checked this list twice, and I will now say the part nobody else will. This council has no seat for the brain. Not a junior post, not a clerkship, not a single line of it. The brain is simply not in this government, at any rank at all. |
| 6 | Arthur (V.O.) — the turn | Then the physician turns to the throne. An unclear ruler, he says, endangers all twelve. The Emperor fasted, chose a day, and locked the text in a room. Suwen eight. The Numinous Orchid. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode asks what a metaphor costs, once it has become too good to give up, and who pays. |

**Every block is inside its voice's measured word budget** — counted from this
table by dropping tokens containing no letter or digit. Arthur 32–36, Xavier
36–41, Vesper 37–41; **Zane is UNMEASURED and block 5 is written provisionally at
35 words** — see the production record.

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks
3 and 7.** Every shot needs motion from frame 1 — the assembler warns on a static
open or a frozen tail.

1. Blank silk, vertical. An ink organisation chart draws itself top to bottom — twelve boxes and connecting lines, no labels, no bodies. Slow push in.
2. Interior audience chamber, vertical framing. FAN-DI on the high seat in the gold robe and glasses, **fan snapping open**. A lacquer court chart on the wall behind him, ranked top to bottom.
3. **CARD** — 心者，君主之官也，神明出焉 brushed on silk. Behind it, boxes fill one after another as she names them: a crown seal, a chancellor's seal, a general's seal. *(Default: plain plate, characters added at edit — see Finishing steps.)*
4. Rapid emblem montage inside the chart, one box per beat: a granary door, a campaign banner, an envoy's tally-stick, a cistern with a gate. Then the camera settles on **one box that stays empty**.
5. LEI-GONG alone, cinnabar robe, small hand drum resting in his lap, wax tablet raised. Beside him, an empty box appears **outside** the chart, unconnected to anything.
6. The chart's connecting lines go out one by one; every box remains. Then a lacquer chest closing, a key turned, a door shut.
7. **END CARD** — plain plate, ink wash drifting. Disclaimer and editorial credit added at edit time.

**Blocks 3, 6 and 7 are the stillness risks.** A card, a chart that mostly stops
changing, and a plate. Give each a slow push, drifting ink grain, or a light change
so the clip does not read as a held frame.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-suwen8-longform-v1.md`, which holds the complete classical text.

| § | Passage | Blocks |
|---|---|---|
| §1 | 願聞十二藏之相使，貴賤何如 | 2 |
| §1 | 心者，君主之官也，神明出焉 | 3 |
| §1 | 肺者，相傅之官 / 肝者，將軍之官 | 3 |
| §1 | 脾胃者，倉廩之官 / 膻中者，臣使之官 / 膀胱者，州都之官 | 4 |
| §1 | 三焦者，決瀆之官 — the office with no organ | 4 |
| §2 | 凡此十二官者，不得相失也 | 3 |
| §2 | 主不明則十二官危 | 6 |
| §3 | 非齋戒擇吉日，不敢受也 | 6 |
| §3 | 擇吉日良兆，而藏靈蘭之室 | 6 |

**Block 5 is not in the source and is the trailer's one invention** — the brain's
absence from the list is a real feature of the chapter, but no one in the text
remarks on it. It is dramatised here exactly as it is in the longform (block 18),
and the longform's source mapping flags it as ours.

**Longform beats deliberately withheld from this trailer:** the scorecard (which
offices score and which miss), the lymphatic near-miss, the gallbladder verdict,
and the closing thesis about modern metaphors. The trailer sells the question; the
episode sells the reckoning.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.

---

## Production record (Higgsfield)

**Status: RENDERED at draft tier, 2026-08-09.** Assembled, captioned, and probed
in the sandbox. **Not visually verified** — see *Reproduction notes*.

### Credit spend — estimate vs actual

Balance before: **552** (live, 2026-08-09). The documents had been assuming ~782;
that figure was stale and is corrected here and in the longform.

| Item | Unit price (live `get_cost`) | Qty | Spent | Estimated |
|---|---|---|---|---|
| Clips, `seedance_2_0_mini` 480p 9:16 10s | 10 | 7 | **70** | 70 |
| Style key, `nano_banana_pro` 9:16 1k | 2 | 1 | **2** | 2 |
| Voice takes, `seed_audio` | **0.1** | 13 | **1.3** | 5.6 |
| Assembly, captions, burn | free | — | **0** | 0 |
| | | | **≈73.3** | ≈78 |

**The per-take price is 0.1, not 0.8.** `SKILL.md` derived 0.8 by dividing a
balance delta across seven takes; the live `get_cost` is **0.1**, so voice is
8× cheaper than every estimate in this repo. That makes re-takes almost free and
changes the longform preflight materially: 96 takes is ~9.6 credits, not ~77.
**Corrected in `SKILL.md` step 0 and in the longform record.**

**Thirteen takes for seven blocks.** Six re-takes, all to land the speech window —
detailed below. At 0.1 each that cost 0.6 credits total, which is the argument for
measuring rather than guessing.

### Voice measurement — Zane measured at length for the first time

This is the run's most valuable output, and it invalidates word budgets used
across the repo. Every figure below is `speech_metrics.sh` against the
assembler's own trim, so it is the number that was gated.

| Voice | Take | Words | Speech | **Measured rate** | Prior `SKILL.md` rate |
|---|---|---|---|---|---|
| **Zane (Lei-Gong)** | block 5, 2nd | 50 | 9.676s | **5.17 w/s** | *unmeasured* |
| | block 5, 1st | 35 | 6.228s | 5.62 w/s | |
| **Xavier (Fan-di)** | block 2, 3rd | 44 | 9.896s | **4.45 w/s** | 4.15 |
| | block 2, 2nd | 42 | 8.605s | 4.88 w/s | |
| | block 2, 1st | 37 | 7.880s | 4.70 w/s | |
| **Vesper (Dr-Qi)** | block 3 | 37 | 9.016s | **4.10 w/s** | 4.19 ✓ |
| **Arthur** | blocks 1, 4, 6, 7 | 32/31/33/31 | 9.008/8.913/9.588/9.231 | **3.49 w/s** pooled | 3.65 |

**Zane is by far the fastest voice in the cast — ~5.2 w/s.** He needs **45–52
words** per block, not the 34–39 this repo had been guessing. His first take at 35
words came back at **6.228s, more than two seconds under the floor**.

**This would have failed the longform outright.** All seven Lei-Gong blocks there
are written at 36–39 words and every one of them would have been a hard assembly
error. The longform document has been corrected.

**Xavier is also faster than recorded** (4.45 vs 4.15) and needs **40–47 words**.
Arthur came back slightly slower (3.49 vs 3.65) and wants **31–34**.

**A separate finding: commas cost Arthur far more than full stops.** Block 4's
second take — 31 words with **seven commas** in a list cadence — came back at
**12.022s, 2.0s over the ceiling**. The same content at 31 words with **zero
commas** landed at **8.913s**. That is a 3.1-second swing from punctuation alone,
on an identical word count, and it is a larger effect than any word-count change
measured here. `SKILL.md` documents sentence boundaries as costing ~0.14–0.7s
each; **a comma in a list is worth far more than that**, and a four-item comma list
is the single most expensive structure to hand this voice.

**Recommended budgets, superseding the step-3 table:**

| Voice | Rate | Words/block | Note |
|---|---|---|---|
| Arthur | 3.49 w/s | **31–34** | avoid comma lists entirely |
| Xavier | 4.45 w/s | **40–47** | |
| Vesper | 4.10 w/s | **36–41** | prior figure confirmed |
| Zane | 5.17 w/s | **45–52** | first measurement at length |

### Voiceover

`seed_audio`, `voice_type: "preset"`, `speech_rate` **55**, one take per block, one
speaker per block. **The figure in brackets is the assembler's measured *speech*,
not the file duration** — they differ on blocks 4 and 7, and recording speech is
what makes `build_subtitles.js` centre cues exactly where the assembler centred the
voice. Verified against the assembly sidecar's absolute positions, all seven agree
to within 1 ms.

- **Voiceover** (`seed_audio`, preset, `speech_rate` 55): block 1 `3f07c3a5-17ff-4b3d-ab10-3dbf0bd9f495` (9.008s), block 2 `b92750a0-4c7c-4050-96ad-fe6db68cf9b2` (9.896s), block 3 `fd190ab9-5fc1-4467-9ed0-14d7ad28fcce` (9.016s), block 4 `cae647fa-b759-4f8b-80ea-961a24d7fbb3` (8.913s), block 5 `35c86867-abfa-46dc-b86b-637bb6008fa9` (9.676s), block 6 `00516511-91ef-471a-9030-8ede6dced658` (9.588s), block 7 `15ad55d2-7390-4d96-90ac-2f436f8a3e58` (9.231s)

| Block | Voice | Job ID | File | **Speech (gated)** | Padding |
|---|---|---|---|---|---|
| 1 | Arthur | `3f07c3a5-17ff-4b3d-ab10-3dbf0bd9f495` | 9.008s | **9.008s** | 0 |
| 2 | Xavier | `b92750a0-4c7c-4050-96ad-fe6db68cf9b2` | 9.896s | **9.896s** | 0 |
| 3 | Vesper | `fd190ab9-5fc1-4467-9ed0-14d7ad28fcce` | 9.016s | **9.016s** | 0 |
| 4 | Arthur | `cae647fa-b759-4f8b-80ea-961a24d7fbb3` | 10.353s | **8.913s** | **1.440s** |
| 5 | Zane | `35c86867-abfa-46dc-b86b-637bb6008fa9` | 9.676s | **9.676s** | 0 |
| 6 | Arthur | `00516511-91ef-471a-9030-8ede6dced658` | 9.588s | **9.588s** | 0 |
| 7 | Arthur | `15ad55d2-7390-4d96-90ac-2f436f8a3e58` | 10.413s | **9.231s** | **1.182s** |

**Superseded takes — kept as evidence** (`CLAUDE.md`), all failed the 8.6–10.0s gate:

| Block | Job ID | Speech | Why superseded |
|---|---|---|---|
| 2 | `becde262-7fd9-4432-b64c-36ab19adb2fe` | 7.880s | under floor — 37 words, Xavier faster than recorded |
| 2 | `1024dfc0-818b-45d1-9f20-f1ab6e3e1cd1` | 8.605s | passed by 0.005s; too tight to ship |
| 4 | `52a550be-dc3e-4bc0-bff7-1fcfe1bffd80` | 10.457s | over ceiling — 33 words in 5 sentences |
| 4 | `1e767b8d-a064-4752-ba91-06da15098916` | 12.022s | **over by 2.0s — 31 words, 7 commas** |
| 5 | `16e382b9-b3c8-448b-9c1d-8af820cb384a` | 6.228s | 2.4s under floor — Zane unmeasured |
| 7 | `a6446799-4966-4099-878c-c25e0a90da80` | 12.869s | over, plus a **3.00s internal pause** |

**Block 7's 3.00s pause is worth naming.** The first take ended *"Written and
edited by Joshua Chin"*, and `seed_audio` treated the credit as a separate beat and
inserted a three-second gap before it. **The credit was removed from the spoken
line** and is now carried only on the end card and in the description — which is
what `CLAUDE.md` actually requires. Do not put a name credit at the end of a take.

### Style key

Derived for this chapter by chaining off the Suwen 1 head
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`, passed as a **job ID** reference with only
the motif swapped.

| | |
|---|---|
| Job ID | **`05ebe984-2781-491e-8c84-2b20e608d2a8`** |
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, 9:16 |
| Motif | three-character series key; lacquer chart of twelve empty boxes behind them; closed lacquer chest at Fan-di's feet |
| Derivation | Suwen 1 head → this key |
| Cost | 2 credits |

**This is the new head for Suwen 8 and should be promoted in `SKILL.md` step 1.**
The longform still needs a **16:9 sibling** derived from *this* job ID — **do not
overwrite the vertical key**, this trailer depends on it.

### Clips

**Model `seedance_2_0_mini`, tier Draft (480p), 10s, 9:16.** Style key
`05ebe984-2781-491e-8c84-2b20e608d2a8` attached to every clip as
`image_references`. `generate_audio: false` on all seven. `IN THE DARK`
(`24bae836-2c4a-48e0-89b6-49fcc0b21612`) pre-declined on all seven.

| Block | Job ID | Delivered | Duration |
|---|---|---|---|
| 1 | `e9ece3a1-f7c8-4668-85e8-9a2b873b911c` | 496×864 | 10.04s |
| 2 | `1880c1c8-5c41-4ff7-8eab-291d8da4bc3b` | 496×864 | 10.04s |
| 3 | `8fd32330-fca9-46ad-bc7d-d0df54a4cbd8` | 496×864 | 10.04s |
| 4 | `4fe3ee05-c327-4e47-b9ee-04436c5ef65d` | 496×864 | 10.04s |
| 5 | `11c1ad6d-2c83-42c4-bf11-b898a85fa963` | 496×864 | 10.04s |
| 6 | `c5821c00-5af6-4c51-ae3c-4320620d92c0` | 496×864 | 10.04s |
| 7 | `0a7149c7-6ee8-483c-8f6a-d9c77cad685b` | 496×864 | 10.04s |

Four things this run establishes on `seedance_2_0_mini`, none previously confirmed:

- **The clips themselves come back 496×864, not 480×854.** `SKILL.md` records
  480×854 clips assembling to a 496×864 output and attributes the change to the
  assembler rescaling. **On this run the clips were already 496×864 and the
  assembler changed nothing.** The delivered geometry is the same either way, but
  the cause is not what the skill says, and 496×864 is ~2% wider than true 9:16.
- **The double aspect-ratio declaration held.** All seven came back vertical on the
  first attempt; no landscape set, no regeneration.
- **`generate_audio: false` worked** — `ffprobe` found **zero audio streams**, so
  nothing leaked in at the assembler's 0.12 SFX level.
- **No preset offer fired on any clip**, including the three lamp-lit-on-black
  shots. Pre-declining `IN THE DARK` cost nothing and there is no evidence here of
  whether it was needed; **keep pre-declining it**, since one retry costs a full
  clip.

**The media role is auto-coerced.** Every clip returned
`medias[0].role: image → image_references`, *"Seedance 2.0 Mini backend expects
schema-key media roles"*. `SKILL.md` documents this coercion for `gemini_omni`
only; it happens on `seedance_2_0_mini` too, and it is harmless.

### Assembly

There is no assembly job ID on this path, so what makes the run repeatable is
recorded instead.

| | |
|---|---|
| Script | `$HF_WORKFLOWS/faceless-channel-video/scripts/assemble_final.sh`, run under `sandbox_exec` |
| Flags | `--out work/output/final.mp4 --blocks 7 --manifest pairs.txt` |
| Defaults left alone | `--clip-seconds` 10, `--sfx-vol` 0.12, no `--music` |
| Manifest | `work/blocks/blockNN.mp4 work/voices/voiceNN.wav`, NN = 01–07, aligned |
| Delivered | **496×864, 24.000 fps, 70.059s**, one MP4 |
| Mix | 2-pass linear loudnorm −16 LUFS, voice 1.0; per-block levels matched to ≈ −22 dB |
| Master `media_id` | **`f73eb944-2b94-47d7-a34a-ee3c8a0473c0`** (pre-caption) |
| Mode | **foreground**, completed well inside the 120s budget |
| WARNs | **none** — no freeze head/tail on any block, no internal pauses, no pair mismatch |
| Assert | *narration present in all 7 windows*; duration 70.059s within ±1s of 70 |

**A process failure worth recording, because it nearly cost the render.** The
assembly command was chained with the probe (`ffprobe`, `ls`) instead of the
export, so `assemble_final.sh` finished into a sandbox with **no `curl -X PUT`
appended** — exactly the mistake `SKILL.md` warns about. The file survived only
because the next call went out immediately and the sandbox had not yet been
reclaimed. **The export must be in the same `&&` chain as the assembler, not the
call after it.** Probes belong after the upload, never instead of it.

**The assembler did not rescale on this run.** `SKILL.md` reports 480×854 clips in
and 496×864 out. Here the clips were **already** 496×864, so the geometry passed
through untouched. The delivered file is still ~2% wider than true 9:16, so the
house call still applies: **scale to 720×1280 before burning captions**, which is
what the finishing pass below does.

### Captions

**Built and burned.** `inner-canon-suwen8-trailer-v1.srt` / `.vtt` are tracked
beside this document. 9:16, **38 cues**, widest line **554px against a 556px
usable width — fits**, two lines max, Anton.

**Cue timing is exact on this cut, not approximate.** `SKILL.md` flags a known
drift: `build_subtitles.js` centres cues on the take's *file* duration while the
assembler centres on *detected speech*, so a padded take makes captions lead the
voice. **Blocks 4 and 7 here do carry padding** (1.440s and 1.182s), so the drift
was real and would have been ~0.7s and ~0.6s. It was avoided by recording the
**speech** figure in the voiceover line above rather than the file duration —
`SKILL.md`'s documented fix #1. Verified against the assembler's own sidecar:

| Block | Sidecar `speech_abs_s` | Sidecar-derived cue start | Δ |
|---|---|---|---|
| 1 | 0.496 | 0.496 | 0.000 |
| 2 | 10.051 | 10.052 | 0.001 |
| 3 | 20.492 | 20.492 | 0.000 |
| 4 | 30.543 | 30.544 | 0.001 |
| 5 | 40.161 | 40.162 | 0.001 |
| 6 | 50.206 | 50.206 | 0.000 |
| 7 | 60.384 | 60.385 | 0.001 |

**Burned copy is cues 1–33 only** (blocks 1–6). Cues 34–38 cover block 7 and were
dropped so the disclaimer is not simultaneously a caption and a card. The tracked
sidecar keeps all 38.

#### `check_caption_fit` exits 1 on this cut, and it is being accepted knowingly

Three clauses exceed the two-line vertical budget, all of them **introduced by the
take rewrites** that stripped commas to pass the duration gate:

| Block | Clause | Width |
|---|---|---|
| 2 | *"and I will know you have never once had to cut a budget."* | 1160px / 1111 |
| 4 | *"An envoy who carries joy and a district office that stores water."* | 1302px |
| 4 | *"Eleven titles for twelve organs and one ministry with a name and no building."* | 1581px |

The sidecar split them, so **nothing overflows the frame** — the margin difference
test above proves that empirically. What it costs is three orphaned cue breaks:
*"…had to cut a / budget."*, *"…district office that / stores water."*, and
*"…one ministry / with a name and no building."*

**This is the take-window/caption-width tension resolving the way `SKILL.md` says
it must** — the window is a hard assembly error, the width is readability. Block
4's comma-free rewrite is the *only* version of that line that came in under 10.0s;
the comma-rich version that captions beautifully ran **12.022s** and cannot be
assembled at all.

**Do not "fix" this by adding commas to the narration table.** It would improve the
cue breaks without re-recording — a comma is punctuation, not a word, and the
existing audio would still match — **but it poisons reproduction**: the next person
to regenerate a take from this document would get the comma version, which is
precisely the version measured at 12.022s. The table must keep the text the takes
were actually generated from. **The fix, if it is worth one, is to reword the
clause shorter and re-record** at 0.1 credits a take.

**Anton was verified present before burning**, not assumed: the sandbox ships
Metropolis and Montserrat but **not Anton**, so it was installed from Google Fonts
and `fc-match Anton` confirmed `Anton-Regular.ttf: "Anton" "Regular"` before the
burn ran. Without that check libass substitutes a wider face silently and the
measured fit is void. **This is a sandbox gap `SKILL.md` did not record** — the
session-start hook installs Anton on the *repo host*, which is not where the burn
happens.

### Reproduction notes

- **Rendered end to end on 2026-08-09** — style key, 7 clips, 13 takes, assembly,
  captions, lower-third and end card. ~73.3 credits. Balance 552 → ~479.
- **The per-take price is 0.1, not 0.8** — `SKILL.md` corrected.
- **Zane measured at length for the first time: ~5.2 w/s**, the fastest voice in
  the cast. `SKILL.md` step 3 and the longform's budgets corrected.
- **Comma lists are expensive on Arthur** — 31 words with seven commas ran 12.022s
  against 8.913s for the same 31 words with none.
- **A name credit at the end of a take triggers a long pause** — block 7's first
  take inserted 3.00s before "Written and edited by Joshua Chin". The credit is
  on-screen only now.
- **Near-miss: the assembler ran without the export chained to it.** Recovered
  only because the next call was immediate. Put `curl -X PUT` in the same `&&`
  chain as `assemble_final.sh`; probes go after the upload, never instead of it.
- **The clips arrived 496×864, so the assembler rescaled nothing** — contrary to
  the note in `SKILL.md`, which attributes the geometry to the assembler.
- **This is `output/suwen/`'s first chapter folder**, and the first rendered cut in
  the repo since the ch1 trailer v5 whose document was deleted.

#### What was actually verified, and what was not

**Not visually verified. Nobody watched this file.** The CDN is 403 from the repo
host — confirmed again this session on both `d8j0ntlcm91z4` and `d2ol7oe51mr4n9` —
so neither the MP4 nor the contact sheet could be fetched back and looked at.

Checks that **did** run, all in the sandbox next to the file:

| Check | Result |
|---|---|
| Output geometry / codecs / duration | 720×1280, h264 + aac, 70.059s |
| Assembler narration assert | narration present in all 7 windows |
| Assembler freeze probe | no frozen head or tail on any block |
| Assembler pause probe | 0 internal pauses ≥0.8s on any take |
| Speech window, all 7 takes | every one inside 8.6–10.0s |
| Clip audio streams | **zero** — no diegetic audio leaked in |
| Anton actually resolved | `fc-match` confirmed before burn |
| **Captions inside the margins** | **differenced against the uncaptioned master: margins changed ≤26 luma (re-encode noise), centre changed up to 252 across ~17k px — captions provably do not reach the margins** |
| History lower-third timing | present at t=5s (4967 bright px), absent by t=25s |
| End card | disclaimer + credit + scrim all present at t=65s; scrim top max luma 103 |

The margin difference test is the one worth keeping: it distinguishes *caption
glyph in the margin* from *bright picture in the margin*, which a luma threshold
alone cannot. Bright pixels did appear in the margins at two timestamps and the
difference test showed they were picture, not text.

**What none of that establishes:** whether the cut reads well, whether the ink-wash
look held across seven clips, whether the chart is legible, or whether the
characters are on-model. Those need a human viewing.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none. **Guqin licensing is unresolved** (slate §9) — until cleared,
  score this cut with no guqin.

### Finishing steps

**Executed 2026-08-09. Steps 1–4 and 6 ran; step 5 did not — see the gap below.
Step 7 is not applicable.** This cut's own numbers — 7 blocks, 70.059s, end card
**1:00 to 1:10**, card block at **0:20**.

> **⚠ OUTSTANDING: the block-3 quotation card is still a blank plate.**
> Block 3 was generated as a plain silk plate on the default (plates plus
> edit-time text), and **心者，君主之官也，神明出焉 was not added** — the burn pass
> covered captions, the history lower-third and the end card only. The card is
> therefore an empty panel from **0:20 to 0:30** in the delivered file. It is a
> deliberate scope boundary, not an oversight in the burn, but **the cut should
> not ship until that text is on screen** — it is the chapter's central sentence
> and the only classical quotation in the trailer. Step 5 below has the command.

**The burn as actually run**, in the sandbox, one chained command, in this order —
scale first, then captions, then text:

```
ffmpeg -v error -y -i master.mp4 -vf "scale=720:1280,\
subtitles=burn.ass:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,\
OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,\
MarginL=58,MarginR=58,MarginV=150,WrapStyle=0',\
drawtext=...:text='Presented as history & philosophy':fontsize=28:y=896:enable='between(t,2,9)',\
drawbox=x=0:y=0:w=iw:h=ih:color=black@0.62:t=fill:enable='between(t,60,70)',\
drawtext=...:text='A dramatized adaptation of a':fontsize=46:y=470:enable='between(t,60,70)',\
drawtext=...:text='classical philosophical text.':fontsize=46:y=536:enable='between(t,60,70)',\
drawtext=...:text='Not medical advice.':fontsize=46:y=602:enable='between(t,60,70)',\
drawtext=...:text='Written & edited by Joshua Chin':fontsize=30:y=724:enable='between(t,60,70)'" \
  -c:a copy -movflags +faststart out.mp4
```

**The lower-third sits at y=896, not in the caption band.** At 720×1280 with
`MarginV=150` and `Fontsize=54`, two lines of caption occupy roughly y=1000–1130,
so the mandated *"Presented as history & philosophy"* was moved **above** that band
rather than into it. `CLAUDE.md` allows exactly this and the geometry forces it.

**The end card carries a full-frame scrim** at `black@0.62` for the whole 60–70s
window. Block 7's plate is a light ink wash and white text on it was not reliably
legible without one; measured scrim-top luma after the burn is 103.

Both caption scripts are pure text tools: they read this document, touch no video,
need no network and cost no credits. **Run them from the repo root or pass an
absolute path.**

**1. Check captions** at 9:16, before generating takes — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/suwen/ch8/inner-canon-suwen8-trailer-v1.md
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
node scripts/build_subtitles.js output/suwen/ch8/inner-canon-suwen8-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
1:00) so the disclaimer is not simultaneously a caption and a card. The burn copy is
blocks 1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched
with the picture. Run `ffmpeg -version` and `fc-match Anton` **before** starting: a
missing Anton substitutes a wider font silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and re-target `PlayResX/Y`
to 720×1280 first — ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every
style value by ~4.4× and runs the lines off frame.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's self-drawing chart. At 9:16 `MarginV` is 58, so keep the
lower-third clear of the caption band. Added by `drawtext` in the burn pass.

**5. Quotation card — block 3, in at 0:20, out at 0:30.** If block 3 was rendered as
a plain plate, which is the default, 心者，君主之官也，神明出焉 is added here in the
same `drawtext` pass. **Verify every glyph against the *Source text and translation*
section of the longform before export** — the source PDF is in simplified characters
and the cards use traditional forms. ffmpeg needs a CJK-capable face: Anton has no
Chinese coverage and renders tofu boxes silently.

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Both also go in the
description at upload.

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
  **the mandated sentence itself is unaltered**. **Verified in the render**: the
  three disclaimer lines and the credit are measurably present at t=65s over a
  scrim, and the narrator reads the mandated sentence over the same window.
- **Human editorial credit — moved from the take to the card, and this is the
  correct place for it.** The first block-7 take spoke *"Written and edited by
  Joshua Chin"* and `seed_audio` inserted a **3.00s pause** before the name, which
  failed the take. The credit is now **on the end card and in the description
  only**, which is what `CLAUDE.md` requires; it was never required in narration.
  Confirmed present in the burned frame at t=65s.
- **Health content stays philosophical narrative** — no dosage, regimen, diagnosis
  or benefit claim. **This chapter contains no needling prescriptions at all**, so
  nothing had to be excluded. Every claim on screen is reported as what a text says.
  **No viewer is told to do anything.**
- **The chapter's longevity clause (以此養生則壽) is not in this trailer at all.**
  It is the chapter's one compliance-sensitive sentence, it needs the disclaiming
  block that follows it in the longform (blocks 77–78, which must never be split),
  and a 10s trailer block cannot carry both. **Do not add it in any recut.**
- **Mortality / ageing** — absent. 殁世不殆 and 其宗大危 are cut from the longform
  and do not appear here. The collapse in block 6 is carried by **lines going out on
  a chart** — objects, not bodies.
- **Fertility content** — absent. 作強 is not quoted in this trailer, and the
  longform's neutral reading (*exertion*, *strength*) governs if it is ever added.
- **Indulgence / alcohol** — absent. Block 4's granary is drawn as a **granary
  door emblem**, with no table, no vessels, no pouring and no drinking.
- **Anatomy and gore** — absent by construction. Every organ is an **office emblem
  in a box** — a seal, a granary door, a cistern. There is no anatomical imagery in
  seven shots, and no organ is depicted as an organ.
- **Supernatural hooks explicitly debunked by the payoff** — the hooks are *your
  body was described as a government* and *one ministry has no building*. Both are
  claims about a text, not mystery claims, and block 4 states the empty office as a
  fact about the chapter rather than teasing it. 神明 appears on the block-3 card in
  Chinese but **is not narrated as "spirit"** anywhere in this cut — the trailer says
  *sovereign*, and the longform glosses the term as consciousness and judgment at
  block 12. **A trailer cannot carry a full debunk**, so the honest test is whether
  it promises anything the episode does not deliver: it promises a metaphor, a
  missing office and a political warning, and the episode delivers all three.
- **Title and thumbnail honour the educational payoff** — *The Twelve Offices*;
  working title *The Body Is a Government — Suwen 8*. **Thumbnail direction:** the
  twelve-box ink chart with one box conspicuously empty, no faces, no organs. Do not
  use a heart-with-a-crown image. **Banned terms checked**: no *longevity*, *live to
  100*, *ancient secret* or *anti-aging* in the script, title or thumbnail.
- **Hedge allocation — three characters speak in a 7-block trailer, which is
  unusual and needs recording.** `SKILL.md` makes narrator-only the trailer default
  precisely because the narration carries every hedge. Here **Arthur keeps all four
  framing blocks (1, 4, 6, 7)** including the disclaimer, and the three character
  blocks carry **no compliance content whatsoever**: block 2 is Fan-di's vanity,
  block 3 is Dr-Qi quoting the chapter's own office list, block 5 is Lei-Gong's
  audit. **No hedge moved off the narrator**, so nothing is lost against the
  narrator-only default except the block boundaries the exchange costs.
- **Historical accuracy** — cited on screen as **Suwen 8**, never a bare "Chapter
  8". Block 4's *"eleven titles for twelve organs"* is the chapter's real
  arithmetic (脾胃 share one office) and is stated, not hinted. Block 5's claim is
  an argument about an absence and is phrased as one.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No
  character makes a first-person factual assertion about their own expertise.**
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a chart, boxes, seals, a granary
  door, a cistern, a lacquer chest, a closed door. **No restraint or bound-figure
  imagery**, which has tripped the safety filter here before on innocuous subject
  matter. No bodies, no injury, no anatomy. Shots 5–7 are lamp-lit against black and
  will trigger `IN THE DARK` — pre-decline on every clip.

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole
10s blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 4**, the emblem montage. It is the
only block whose content is breadth rather than argument, and blocks 3 and 5 still
carry the metaphor and its gap. **Cost:** the trailer stops feeling like a system
and starts feeling like a simile, and the *ministry with no building* hook goes with
it. This is the cut to make only if the budget forces one.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 4 and 2. Fan-di's question survives
in Arthur's block 1 (*"an emperor asked a physician that question"*), so nothing
becomes unintelligible — but the trailer loses both character voices except Dr-Qi
and reads as narration with an illustration. **Not recommended.**

**Stretch to 80s (8 blocks) — add 1.** Add a block after 5, Dr-Qi answering
Lei-Gong: the office is a function, not a room, and you have never seen the thing
that makes the post arrive on time either. Written for Vesper at 37–41 words. This
is the strongest single addition, because it turns block 5 from a complaint into an
exchange.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus an Arthur block after 6
naming the reckoning the episode delivers — which offices score, which miss, and
that one of them prefigures a system Europe would not describe for another thousand
years. **At 90s the trailer starts telling the episode's story rather than selling
it**, which is why 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:** **block 7** (the
disclaimer card is mandatory and is not a lever), and **blocks 4+5 as a pair** if
block 4 is kept — 4 sets up an empty office and 5 names the one that matters.
