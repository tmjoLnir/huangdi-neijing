# Render review — Lingshu 28 trailer v2, draft tier

**口問篇第二十八 · Twelve Small Rebellions**

Reviewed 2026-08-08 against `inner-canon-lingshu28-trailer-v2.md`'s shot list, after
the draft render (`seedance_2_0_mini` @ 480p, 8 blocks, assembled and finished).

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Status: findings recorded, no re-render.** Regenerating the two off-spec blocks was
offered and declined on 2026-08-08. Both defects stay open and are logged in the
cut's own production record; this file is the analysis behind them.

**Why this file exists.** The per-cut record says *what happened*. This says *what the
pipeline failed to notice*, which is a property of the pipeline rather than of this
chapter, and would otherwise be rediscovered on the next cut at the same cost.

---

## The finding, in one line

**Every automated gate in the pipeline checks that a clip is technically well-formed.
None checks that it is the clip that was asked for.** Two of eight blocks rendered
materially off-spec, and both passed every gate cleanly.

---

## The two off-spec blocks

### Block 8 — the plate that was not a plate

| | |
|---|---|
| Shot list asks for | "black plate, faint ink-grain texture" |
| Rendered | a **bright mottled texture**: frame mean luma **57**, ranging **37–82** |
| Consequence | white end-card text drawn onto it was **partly illegible** |
| Severity | **compliance** — this is the mandated disclaimer card, the one card that must be readable |
| Resolved | yes, for free — full-frame `drawbox` scrim at `black@0.74` plus a 3px text border |

Contrast before and after the scrim, measured in-frame:

| | plate | glyphs |
|---|---|---|
| before | 37–**82** | **78**–122 |
| after | **21–23** | **108** |

Before the repair the brightest plate area was *brighter* than the dimmest text.
**The card is legible now because of a repair, not because the block is right.**

### Block 3 — the count that contradicts the narration

| | |
|---|---|
| Shot list asks for | "**twelve** small ink cartouches arriving one after another down the vertical frame, each empty" |
| Rendered | a **grid**, measured at ~6–7 columns × ~6 rows ≈ **35–40 cells** |
| Consequence | narration over it says *"Twelve things a body does"*; a viewer who counts sees ~36 |
| Severity | **historical accuracy** — the cut's compliance notes require "the cartouches must number twelve" |
| Resolved | **no.** Ships unlabelled by decision; requirement currently **unmet** |

Adding the twelve glyphs would not have fixed this. Labelling twelve cells of a
thirty-six-cell grid leaves two dozen conspicuously empty and *announces* the
mismatch. The glyph content is verified and ready in the cut's *Finishing steps* 5
for whenever block 3 is regenerated.

**Nothing on screen asserts anything false** — unlabelled cartouches are generic
marks and the narration carries the count correctly. The defect is that the picture
under the word *twelve* does not support it.

---

## What the gates actually check

Both blocks passed all of these, which is why neither surfaced automatically:

| Gate | Where | Block 3 | Block 8 |
|---|---|---|---|
| Returned dimensions 496×864 | post-generation probe | pass | pass |
| Duration ≥ 9.5s (`clip >= CLIP-0.5`) | `assemble_final.sh` | 10.042s | 10.042s |
| No audio stream (`generate_audio: false`) | post-generation probe | pass | pass |
| No static head (~1.5s `freezedetect`) | `assemble_final.sh` | pass | pass |
| No frozen tail (~2s `freezedetect`) | `assemble_final.sh` | pass | pass |
| Narration present in every 10s window | `assemble_final.sh` | pass | pass |
| Output duration ±1s of N×10s, full decode | `assemble_final.sh` | pass | pass |

**Every one of these is a well-formedness check.** Geometry, duration, streams,
motion, audio presence. Not one of them reads the shot list, counts an object, or
knows what colour a plate was supposed to be. That is not a bug in
`assemble_final.sh` — it has no access to the shot list and no business guessing —
but it does mean **the shot list is enforced by a human or not at all**.

---

## The uncomfortable inference

**Four of eight blocks were ever looked at. Two of those four were off-spec.**

| Block | Viewed | Verdict |
|---|---|---|
| 1 — empty floor | yes, t=5s | on spec |
| 2 — Fan-di, fan snapped open | yes, t=14.2s | on spec (gold robe, figure present) |
| 3 — twelve cartouches | yes, t=26s | **off spec** |
| 4 — Dr-Qi, circuit diagram | **no** | unknown |
| 5 — ten of twelve dim out | **no** | unknown |
| 6 — diagram reorganises | **no** | unknown |
| 7 — split hall | **no** | unknown |
| 8 — black plate | yes, t=75s | **off spec** |

A 50% defect rate among inspected blocks is not evidence that the uninspected four
are fine. **Blocks 5 and 6 are the ones to check first**, and for a specific reason:

- **Block 5** must dim ten cartouches and leave exactly **泣涕 and 太息** lit. Those
  are the only two riddles in the chapter with an agent (translation file §9 and §10),
  and they are the whole argument of the cut. Since block 3's cartouche count is
  already wrong, block 5's dimming is unlikely to be right either — and getting the
  wrong two lit **inverts the cut's thesis** rather than merely looking untidy.
- **Block 6** must show the diagram *reorganising* from a circuit into a centre. That
  transformation is the load-bearing image of the whole trailer. It has never been
  seen moving.

Neither was checked, because nothing prompted a check. That is the same reason the
other two defects survived to the finished file.

---

## Verification techniques worth reusing

Recorded because getting these wrong looks exactly like a missing overlay or a clean
render, and both cost time on this cut.

**Pick the luma statistic to match the background.** No single one works:

| Statistic | Good for | Useless for |
|---|---|---|
| `YMAX` | nothing here | both — one grain pixel pins it to 255 |
| `YAVG` | overlays on a **dark** ground (the end card) | overlays on a bright ground — white glyphs do not move a mean of 137–143 |
| `YMIN` | overlays on a **light** ground (the lower-third: 40→8→83 across its 1–8s window) | dark grounds, where the floor is already near 0 |

**Verify a frame transfer with a checksum.** The CDN is blocked from the repo host by
org egress policy, so inspecting a frame means base64 through the sandbox. Three
transfers silently corrupted mid-string and only failed at decode. Print
`md5sum` alongside the base64 and compare after decoding — a corrupted frame that
half-renders is worse than one that fails outright.

**Structure can be measured, not just eyeballed.** Block 3's count was confirmed by
column/row luma profiling of the frame in the sandbox (`PIL`, available there), which
is more defensible than counting shapes in a 132px thumbnail and does not depend on
transferring an image at all.

---

## Recommendations

1. **Add a shot-list conformance step to the pipeline docs**, between clip generation
   and assembly: for each block, state the one thing the shot list demands that a
   gate cannot see — a count, a colour, a transformation — and check that one thing.
   It is cheap at draft tier and the only stage where a re-render is 10 credits rather
   than a re-cut.
2. **View blocks 5 and 6 before this chapter goes further**, for the reasons above.
   Free, and block 5 carries the cut's argument.
3. **If this chapter goes to full tier, regenerate blocks 3 and 8** (~20 credits at
   draft, ~50 at full). That fixes the count, retires the scrim currently holding up
   the compliance card, and removes both open defects.
4. **Do not read the draft's clean gate record as a clean render.** It was clean, and
   two blocks were still wrong.

---

## Compliance notes (YouTube)

This file is analysis, not a cut, and ships no new footage. The audit that governs
the render is in `inner-canon-lingshu28-trailer-v2.md`. Two points belong here:

- **The historical-accuracy requirement "the cartouches must number twelve" is
  currently UNMET** in the shipped draft, and is recorded as such in the cut's own
  compliance notes rather than implied satisfied. Low severity — non-assertive, on the
  lowest-exposure surface of a chapter the slate rates Very Low — but unmet.
- **The mandated disclaimer is legible only because of a hand repair.** The scrim is
  not decorative. If block 8 is ever regenerated, re-check the card's contrast rather
  than assuming the scrim is still needed or still sufficient.
