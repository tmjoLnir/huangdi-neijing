# The Emperor's Inner Canon — Suwen 8 Trailer v1 (70 seconds)

**素問·靈蘭祕典論第八 · The Twelve Offices**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

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
| 2 | Fan-di (Xavier) — the question | I want a ranking — every court has one, every ministry has one. Tell me all my organs are equally precious, and I will know you have never cut a budget. Which is noble, and which is base? |
| 3 | Dr-Qi (Vesper) — the answer | The heart is the office of the sovereign. The lung is the chancellor. The liver is the general. Twelve organs, twelve posts, and not one of them can be spared. That is the whole of your ranking. |
| 4 | Arthur (V.O.) — the scale | A granary. A general. An envoy who carries joy. A district office that stores water. Eleven titles for twelve organs, and one ministry with a name, a job, and no building at all. |
| 5 | Lei-Gong (Zane) — the missing office | I checked the list twice, and I will say what nobody else will. This council has no seat for the brain. Not a junior post. Nothing at all. It is simply not in the government. |
| 6 | Arthur (V.O.) — the turn | Then the physician turns to the throne. An unclear ruler, he says, endangers all twelve. The Emperor fasted, chose a day, and locked the text in a room. Suwen eight. The Numinous Orchid. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode asks what a metaphor costs, once it is too good to give up. Written and edited by Joshua Chin. |

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

**Status: script only. Nothing generated. The step-0 gate has not been run.**
Figures below are a planning preflight, not a priced gate — call `balance` and
`get_cost: true` live before spending anything.

### Cost preflight

| Item | Unit | × | Estimate |
|---|---|---|---|
| Clips, `seedance_2_0_mini` 480p (default, draft) | 10 | 7 | **70** |
| Clips, `seedance_2_0_mini` 720p (full render) | 25 | 7 | 175 |
| Style key, `nano_banana_pro` 9:16 | 2 | 1 | 2 |
| Voice takes | ~0.8 | 7 | ~5.6 |
| Assembly, captions | free | — | 0 |

**Draft pass ≈ 78 credits; full render ≈ 183.** Against the last implied balance of
**~782** (unread since 2026-08-04) this fits comfortably — unlike the companion
longform, which does not fit at any tier. **Render this trailer first.**

### This trailer is the cheapest way to measure Zane

`SKILL.md` marks **Zane unmeasured at length** — the only figure on record is a
five-word line at 2.3–2.6s, where pause overhead dominates and no words/second can
be derived. The longform commits **seven blocks** to him and cannot go to takes
until he is measured.

**Block 5 is that measurement**, at ~0.8 credits, as a by-product of a cut being
made anyway. Generate it, run it through the assembler's own gate, and write the
result into `SKILL.md`'s step-3 table:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice05.wav" })
```

**If Zane will not hold the 8.6s floor**, block 5 recasts to Arthur as reported
speech — *"The boy behind the pillar checked the list twice. This council has no
seat for the brain"* — without changing the block count or the shot list. Say so in
the record if it happens; the longform's block 18 depends on the answer.

### Style key

The current head is `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (Suwen 1). Derive the
**Suwen 8 vertical key** by passing that **job ID** as the reference and swapping
only the motif: the three-character series key with a **lacquer organisation chart
of twelve empty boxes** on the wall behind them and a **closed lacquer chest** at
Fan-di's feet. `nano_banana_pro`, 9:16 768×1376.

Record it here as the new head and promote it in `SKILL.md` step 1. The longform
additionally needs a 16:9 sibling derived from it — **do not overwrite the vertical
key.** `medias[].value` takes a `media_id` or a prior `job_id` only; a `https://`
URL there fails.

### Clips

Not generated. Model and tier from the step-0 gate. 10s, style key attached to
every clip.

- **Declare the aspect ratio twice** — `aspect_ratio: "9:16"` **and** "vertical 9:16
  portrait framing" in the prompt text. A full set of clips has previously come back
  landscape without it.
- **`generate_audio: false` on every clip.** A correctness requirement: the
  assembler mixes clip audio in at 0.12 under the voice rather than discarding it,
  so a clip with native audio is audible in the finished cut.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every
  clip — shots 5, 6 and 7 are lamp-lit against black.
- **Lei-Gong's hand drum is a prop.** Describe it resting in his lap, never played;
  drum/rhythm/music vocabulary triggers `DROWN IN MUSIC` and those are edit-time
  directions anyway.
- **Check the first clip's returned dimensions before generating the rest.**
- **Duration ≥ 9.5s**, or the assembler rejects the block outright.

### Assembly

**Foreground, not `background: true`.** A 7-block assembly finishes inside the 120s
budget comfortably, and a previous trailer run was lost entirely to a background
call whose transport timed out while the sandbox was reclaimed with the finished
render inside it.

Download, assemble and export in **one chained command** — the sandbox is discarded
~10 seconds after the call returns. Call `media_upload` before the assembling
command, append `curl -f -X PUT --upload-file` to the same command, and
`media_confirm` only after HTTP 200.

```
bash $HF_WORKFLOWS/faceless-channel-video/scripts/assemble_final.sh \
  --out work/output/final.mp4 --blocks 7 --manifest pairs.txt
```

**No `--subs`** — it was removed and passing it is a hard error. Record the flags,
the manifest, the exported `media_id` and any accepted WARNs here; there is no
assembly job ID to record any more.

**Expect 496×864, not 480×854.** The one measured run on this path assembled
480×854 draft clips and delivered 496×864 — the assembler rescales rather than
padding, so there are no bars to crop. **Scale to a true 9:16 720×1280 before
burning captions**, which is the house call.

### Captions

Sidecar only — the assembler burns nothing. Build at the default **9:16**, which is
the hard case:

```
node scripts/check_caption_fit.js output/suwen/ch8/inner-canon-suwen8-trailer-v1.md
node scripts/build_subtitles.js  output/suwen/ch8/inner-canon-suwen8-trailer-v1.md
```

**No `.srt`/`.vtt` ships with this document yet, by design** — cues are timed from
take durations that do not exist. Build and commit them with the render.

### Reproduction notes

- **Nothing has been generated.** No job IDs, no spend, no assembly.
- **The Suwen 8 style key does not exist yet** and must be derived before clips.
- **Zane is unmeasured**; block 5 is the measurement and the recast fallback is
  named above.
- **This is `output/suwen/`'s first chapter folder.**
- **The CDN is normally blocked from the repo host**, so the finished MP4 usually
  cannot be fetched back for visual QA. The sandbox can probe the render next to
  where it was built — but **a probe is not a viewing.** Say which checks ran.

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

This cut's own numbers — 7 blocks, 70.0s, end card **1:00 to 1:10**, card block at
**0:20**. Not a generic recipe. Both caption scripts are pure text tools: they read
this document, touch no video, need no network and cost no credits. **Run them from
the repo root or pass an absolute path.**

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
  **the mandated sentence itself is unaltered**.
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
