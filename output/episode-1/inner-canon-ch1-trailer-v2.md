# The Emperor's Inner Canon — Chapter 1 Trailer, vertical cut (60 seconds)

**上古天真论篇第一 · The First Sentence**

**Draft render (480×854, 9:16 vertical, 60s, MP4) — no burned captions:**
https://d8j0ntlcm91z4.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/hf_20260801_222017_4cb8b0ec-2588-4ce5-88bf-63ac04a1ed66.mp4

**This file has no captions on it by design** — they come from the tracked `.srt`
sidecar, burned with the `ffmpeg` command `build_subtitles.js` prints. Same
reasoning as v1; do not upload it uncaptioned.

**Final render (720×1280):** *not run — draft only.*

> **CDN link, download it.** The generation CDN is blocked from the repo host, so
> this MP4 cannot be fetched back for visual QA or archived from here. Download it
> manually into `output/episode-1/renders/` — the link expires.

A sixty-second vertical cut of Chapter 1, built to the **source script's own
`VERTICAL CUT (9:16 · 0:38)` specification** (`Ep01_Trailer_Script.md` lines
57–66), which `inner-canon-ch1-trailer-v1.md` did not implement. v1 is the full
80-second version and remains the primary cut; this is the compressed one the
script asked for.

**Every asset is reused from v1.** No new clips, no new voice takes — only a
re-assembly and a fresh subtitle sidecar. See the production record.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the opening | Two thousand years ago, Chinese medicine got its founding text. It opens on a boast, and the emperor himself is the one who makes it. |
| 2 | Fan-di (Xavier) — the claim | I have heard that the people of high antiquity, every one of them, lived past a hundred years. Their movements never weakened. The years did not wear them down. |
| 3 | Lei-Gong (Zane) — the interruption | It's false. Not exaggerated — false. |
| 4 | Arthur (V.O.) — the correction | They did not. Those who wrote it down died young, younger than the ancestors they praised. The golden age was a memory. It never happened. |
| 5 | Arthur (V.O.) — the withhold / title | So why did everyone copy it, faithfully, for two thousand years? The Emperor's Inner Canon. Chapter One — The First Sentence. |
| 6 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Voices as cast (`CLAUDE.md`): Arthur, Xavier, Zane, all `seed_audio` presets at
`speech_rate` 55. Take durations: 5.9s, 6.9s, 2.6s, 6.6s, 8.0s, 5.0s — every one
inside the fixed 10s window, blocks 3 and 6 deliberately short (see v1).

**Vesper does not appear in this cut.** Dr-Qi is on screen in the style key and in
v1, but her only line is v1's block 6, which the script's keep-list cuts.

## Source-script mapping

The script's vertical spec is a shot keep-list against its own 13-shot 1:08
master. Translated onto the assembler's fixed 10s grid:

| Script shot | Script says | v1 block | v2 block |
|---|---|---|---|
| 1–2 — bell, ink, the quoted line | **keep**, trimmed to 4s | 1 + 2 | 1 + 2 |
| 3 — "most copied medical text" | cut | 1 | — |
| 4 — Fan-Di's question | cut | 2 | — |
| 5 — the hand slam, total silence | **keep** | 3 | 3 |
| 6 — "It's false" | **keep** | 3 | 3 |
| 7 — the falling bar graphic | **keep** | 4 | 4 |
| 8 — Fan-Di deflated | cut | 5 | — |
| 9 — "It is persuading you" | cut | 6 | — |
| 10 — montage | cut | 7 | — |
| 11 — the withheld question | **keep** | 7 | 5 |
| 13 — title card | **keep** | 7 | 5 |
| — | *(end disclaimer card, repo rule)* | 8 | 6 |

The script's 0:38 becomes **0:60** on a 10s grid — seven kept shots cannot be
expressed in fewer than six blocks once one speaker per block is enforced and the
mandatory end card takes one. Both runtimes are inside the 30–90s window.

Source corrections and naming reconciliations are unchanged from v1 and carry
over in full: the claim is Fan-di's, 余聞 *"I have heard"* is restored, the
contestable superlative is dropped, *Chronicle of Balance* → **The Emperor's Inner
Canon**, *Xiao-Lei* → **Lei-Gong**.

### Two script instructions this cut does not meet

- **"Xiao-Lei's 'It's false' must land before 0:12 — that is the retention
  cliff."** It lands at **0:20**. The claim needs blocks 1 and 2 to exist before
  it can be contradicted, and a block is 10s. Dropping block 1 would hit 0:10 but
  costs the entire setup, leaving Fan-di quoting a boast no one has framed. A 40s
  cut does not fix this either — the constraint is the grid, not the runtime.
- **"Disclaimer card ≥3s."** Met and exceeded: it holds a full 10s block. The
  card's *text* is hand-added at edit time, as with all on-screen text.

### What is lost against v1

Cutting script shots 8 and 9 removes v1's blocks 5 and 6, and with them:

- **Fan-di's deflation** — *"Then I have opened my own canon with a rumour."*
- **Dr-Qi's reframe** — *"It is not lying to you. It is persuading you."* and with
  it **其知道者**, Qi Bo's conditional *"those among them who knew the Way."*

The second is the significant one, because restoring 其知道者 was a **P0 finding**
of the script review. It survives the cut for one reason: the beat it was
correcting is also gone. The review's objection was to v1-block-5's *"the text is
lying to me on the first line"* overstating the source — and that line is cut
here. What remains is Fan-di quoting hearsay he flags as hearsay (block 2's 余聞),
Lei-Gong calling the **content** false, and Arthur carrying the factual
correction. That chain is accurate without Dr-Qi's narrowing.

It is still a real loss of nuance, and the conditional belongs in the longform.
**v1 remains the cut to lead with where runtime allows.**

## Shot list

Identical to v1 for the blocks retained; renumbered here.

1. **The opening** — extreme close on a bamboo scroll unrolling in warm lamplight,
   brush strokes resolving out of the grain. Slow push in. No figures.
   *History lower-third sits here.*
2. **The claim** — Fan-di at a low lacquer table, gold robe, fan **snapped open**,
   reading aloud with visible delight. Warm light, shallow depth.
3. **The interruption** — hard cut. Lei-Gong mid-hop in cinnabar red, caught
   mid-word, background dropped to flat near-black, everything still. Held long.
4. **The correction** — no people. A brush-drawn arc of lifespans falling away
   from a painted hundred-year line, as ink on paper rather than as a chart.
5. **The withhold / title** — the scroll splitting into a dozen scrolls of
   different ages fanning back into depth, seven-and-eight arcs faint beneath.
   Resolves to the series title card. Hard cut to black on the last syllable.
6. **Disclaimer card** — black plate, faint ink-grain texture. Text added at edit.

## Production record (Higgsfield)

**All source assets are v1's**, generated 2026-08-01 and documented in full at
`inner-canon-ch1-trailer-v1.md`. Nothing was regenerated for this cut.

- **Style key** — `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (`nano_banana_pro`,
  768×1376), chained off the preceding series key `2cfd7596-2d93-4d14-aae4-448b3b9b9f51`.
- **Clips** (`seedance_2_0_mini`, **Draft tier 480p**, 10s, 9:16 480×854,
  `generate_audio: false`): block 1 `91cb182e-f1a0-4f6b-ae47-a30497ced28b`,
  block 2 `2297a411-da14-4555-b38e-90236633e06b`, block 3
  `6d43df60-6c3d-4d41-a809-d72a83e845fd`, block 4
  `ad8740f3-7cb8-4686-afea-66a9349f9bdc`, block 5
  `4ced7480-9d72-4cc7-89b8-74f56049ddab` *(v1 block 7)*, block 6
  `babfdc44-bc86-47bd-8578-6e7b22f3f65b` *(v1 block 8)*.
- **Voiceover** (`seed_audio`, presets **Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346`, **Xavier** `43173c95-3ec8-446a-a162-6504332c578b`, **Zane** `9ddbff06-a984-4c0d-b641-4d8ca846bf60`, speech_rate 55): block 1 `5bbc4da7-98fa-4230-af3e-dbf632892366` (6.5s), block 2 `89a58a73-2399-4606-9575-9624bb42fb85` (6.6s), block 3 `6df0e397-090d-4ab7-9710-3d19227af5d8` (2.6s), block 4 `b6e5cb15-bc4c-472e-833a-a725fc28d6da` (7.2s), block 5 `e866337a-393c-4aa3-b01f-e6c1a65b77ef` (7.1s), block 6 `bc989704-7e47-46e6-bcff-fa22fa69c1ae` (5.0s).
- **Unused in this cut** (generated and paid for on v1, retained): clips
  `d5766bde-28bc-4599-b407-7d24838fe0b2` and `13098368-0946-4274-aa85-82c8cece77a5`;
  takes `d03b2e34-6f09-42f2-892b-aa18bf7ba9ba` (Xavier) and
  `0f6e1dae-c491-49c1-abed-2fdb82c0c451` (Vesper). They cost nothing to keep and
  are what a re-expansion to the 80s cut would need.
- **Assembly**: `explainer_video`, 6 × 10s fixed blocks, 480×854, **no
  `subtitles` parameter — captions deliberately not burned server-side.** Job ID:
  `4cb8b0ec-2588-4ce5-88bf-63ac04a1ed66`.

**Superseded:** `e4c28af8-3e7d-44bc-8fdd-17a478bae378` — the first assembly, with
`anton` captions burned by the service. Replaced for the same two reasons as v1:
those captions overflow, and four of its takes are superseded.

### Credit spend

| Item | Credits |
|---|---|
| Style key, clips, voice takes | **0** — reused from v1 |
| Subtitles on the superseded assembly | 0.3 |
| Final assembly — no subtitles | free |
| **Total** | **~0.3** |

The caption-fix re-takes are billed to v1, where they were generated; this cut
inherits them at no cost. Dropping the burned captions also removes the 0.3
subtitle line from any future re-assembly of this cut.

A full-tier 720p upgrade of this cut would be 6 × 25 = **150**, but the sensible
path is to upgrade v1's eight clips once (200) and re-assemble both cuts off the
same 720p blocks for 0.3 each.

### Reproduction notes

- **A shorter cut is not a cheaper render.** Every clip in a keep-list has already
  been paid for at full length; dropping blocks saves nothing retroactively. The
  saving is only forward — do the draft at full block count, then derive short
  cuts by re-assembly, which is free.
- **`build_subtitles.js` renumbers, so run it per version.** The sidecar is keyed
  to this document's block numbers, not v1's; v1 block 7 is v2 block 5 and their
  cue timings differ by 20 seconds.
- **Visual QA not possible** — CDN blocked from this host. Verified at
  job-metadata level only: 6 blocks assembled at 480×854 from clips of confirmed
  dimensions and takes of confirmed duration. **The render has not been seen.**
- **Captions — resolved, the same way as v1 and by the same work.** The first
  assembly's burned captions overflowed on six clauses (worst: 86 characters
  needing four lines in a two-line frame). Because v2 shares v1's takes, fixing v1
  fixed this cut too: blocks 1, 2, 4 and 5 carry the rewritten, re-recorded takes,
  and **this cut is assembled with no burned captions**, so fit is a libass
  guarantee rather than best-effort. Block 6's clause is the verbatim mandated
  disclaimer and was deliberately not reworded — dropping the server captions is
  what resolves it. Full reasoning in v1's *Captions* note. Verify with
  `node scripts/check_caption_fit.js output/episode-1/inner-canon-ch1-trailer-v2.md`.
- **To finish this cut:** download the MP4, run
  `node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v2.md`,
  then the printed `ffmpeg` command against the downloaded file. The v2 sidecar is
  keyed to v2's block numbers — do not burn v1's `.srt` onto this cut.

## Deliverables the assembler cannot produce

Unchanged from v1 — four manual steps at edit/upload time.

- **History lower-third** — *"Presented as history & philosophy"*, small, within
  the first 10 seconds. Sits on shot 1.
- **End disclaimer card** — the disclaimer above, on screen over block 6, held
  long enough to read. Block 6 renders as a plain black plate.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. The source script requires this too (its COMPLIANCE
  table, "Human editorial credit in description — Required — Joshua Chin").
- **Music** — licensed guqin only. The script's bell / sub-bass / record-scratch
  scoring is not used; see v1 for the reasoning. Note that this cut keeps **both**
  of the script's "silence is the instrument" beats — its shot 5 (block 3) and its
  shot 12 (the tail of block 5) — and on this grid the silence is free.

### Finishing steps — run these on the downloaded MP4

The render carries **no captions and no on-screen text**. It is not uploadable as
delivered. Same procedure as v1, with this cut's timings and cue numbers.

**1. Burn the captions.**

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v2.md
```

**Use this cut's own `.srt`.** v2's block numbering differs from v1's — v1 block 7
is v2 block 5 — so burning v1's sidecar onto this cut puts every cue 20 seconds
out.

Then, on a **copy** of the `.srt`, **delete cues 18 and 19** — the two from
`00:00:52,500`. They caption the end-card block, so leaving them shows the
disclaimer twice, once as a bottom-third caption breaking mid-phrase and again on
the card in step 3.

Burn with the command `build_subtitles.js` prints, **adding a scale filter for the
draft**. The sidecar is computed for 720×1280 while the draft is 480×854, and
libass takes its resolution from the video, so burning as-printed renders the 54px
font and 58px margins against a 480-wide frame — about 50% oversized, and it
overflows.

```
ffmpeg -i <downloaded-draft>.mp4 \
  -vf "scale=720:1280,subtitles=<edited>.srt:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,MarginL=58,MarginR=58,MarginV=150,WrapStyle=0'" \
  -c:a copy <cut>-subtitled.mp4
```

Drop `scale=720:1280,` on a real 720p render. **Anton must be installed locally**
(`fc-list | grep -i anton`) or libass substitutes another face and the measured fit
stops holding.

**2. History lower-third.** *"Presented as history & philosophy"*, small, ~0:01 to
~0:08. Anchor **above the caption band** — around y≈880 at 720×1280, or top-left —
so it clears the bottom-centre captions.

**3. End card — 50:00 to 60:00** (block 6, the black plate). The narrator reads the
disclaimer at **52.5–57.5s**; bring the text up at the block start and hold to the
end. Centred:

> A dramatized adaptation of a classical philosophical text. Not medical advice.
>
> Written & edited by Joshua Chin

Disclaimer **verbatim**. Both lines also go in the video description.

**4. Music.** Licensed guqin, ducked ~12–15 dB under the voiceover. This cut keeps
both of the source script's silence beats, so they matter more here than in v1:

- **Block 3, 20:00–30:00 — music out entirely.** The 2.6s take leaves ~3.7s of
  silence either side; that silence is the interruption.
- **End of block 5, at 50:00** — the hard cut to black. Let it land clean.
- **Under the end card** — fade to nothing before the cut ends.

Keep the licence receipt with the cut.

## Compliance notes (YouTube)

Carried from v1; only the items the cut changes are re-argued.

- **Disclaimer** — repo string verbatim, blockquoted above, spoken in block 6, on
  screen as the end card, and in the description.
- **Mortality / aging** — unchanged. Block 4 is the one death beat and it is ink
  strokes on paper with no figures. Portraits, not bodies.
- **Indulgence / alcohol** — not present. The source script's own compliance table
  says the same ("No feast or indulgence B-roll appears in the trailer at all").
- **Supernatural hook, explicitly debunked** — unchanged and, if anything,
  tighter here: the debunk (blocks 3 and 4) is now a larger share of a shorter
  cut. What is withheld remains the historiographic *why*, not the answer to the
  claim.
- **Health content stays philosophical** — no diagnosis, treatment or benefit
  claim. Block 4's lifespan assertion rests on Neolithic-vs-Han paleodemography
  and is framed as history.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — no new prompts were generated for this cut, so v1's
  prompt audit stands unchanged and no new safety-filter surface was created.
- **Hedge allocation — this is what the cut changes.** Dropping v1's block 6 takes
  Dr-Qi's narrowing out, so the flat contradiction (*"It's false"*, Lei-Gong) is
  no longer followed by a character who qualifies it. **Arthur still carries every
  load-bearing claim**: the factual correction in block 4 and the educational
  payoff and title in block 5. The claim being contradicted is also still marked
  as hearsay in the text's own voice, by block 2's restored 余聞. Assessed as
  compliant, but this is the one respect in which v2 is thinner than v1, and it is
  a deliberate trade for the script's requested runtime.
- **Banned terms** — none in narration, title or thumbnail. **Thumbnail
  direction** (portable from the source script, and better than anything in the
  repo): Lei-Gong's hand flat on the bamboo scroll, cinnabar against gold. *It
  reads as objection, not as ancient secret.* No aged face, no hundred-year claim,
  no herb.
- **Resolved since v1** — the Blueprint's Ch 1 hook then read *"The
  2,000-Year-Old Secret to Living Past 100"* and tripped the banned-terms list
  twice. It now reads *"The First Sentence of Chinese Medicine's Founding Text Is
  False"*, and the Blueprint carries a standing **Title/thumbnail compliance**
  note. The thumbnail direction above is unaffected.

## Runtime levers

**Cut to 0:40** — drop blocks 1 and 4. Runs 2 → 3 → 5 → 6. Opens cold on Fan-di
quoting the boast with no framing, which is abrupt but does move *"It's false"* to
**0:10**, meeting the script's retention-cliff rule exactly. Costs the factual
correction, which is the cut's compliance backbone — **not recommended**; if the
cliff matters more than the correction, prefer re-recording block 1 as a
three-second cold open in a future version rather than dropping block 4.

**Cut to 0:50** — drop block 1 only. Runs 2 → 3 → 4 → 5 → 6, cliff at 0:10, and
the correction survives. This is the better short cut and needs no new assets.

**Stretch back to 1:20** — restore v1's blocks 5 and 6 (Fan-di's deflation,
Dr-Qi's reframe). Both clips and both takes already exist and are listed above as
unused, so this is a free re-assembly. That is v1.

**Block 6 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement on every cut.
