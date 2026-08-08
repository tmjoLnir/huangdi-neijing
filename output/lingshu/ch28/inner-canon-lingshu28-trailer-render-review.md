# Render review — Lingshu 28 trailer v2, draft tier

**口問篇第二十八 · Twelve Small Rebellions**

Reviewed 2026-08-08 against `inner-canon-lingshu28-trailer-v2.md`'s shot list, after
the draft render (`seedance_2_0_mini` @ 480p, 8 blocks, assembled and finished).

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Status: findings recorded, no re-render.** Regenerating the off-spec blocks was
offered and declined on 2026-08-08. The defects stay open and are logged in the cut's
own production record; this file is the analysis behind them.

**Updated 2026-08-08** after inspecting blocks 5 and 6, which the first version of this
review named as the two most worth checking. **Block 6 is on spec** and block 5 is
correct apart from the count it shares with block 3 — so the earlier inference that
the uninspected blocks were probably compromised **did not hold**, and this file now
says so. Six of eight blocks have been viewed; blocks 4 and 7 remain unknown.

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

## Block-by-block status

**Six of eight blocks inspected as of 2026-08-08.** Blocks 5 and 6 were checked
after the first version of this review flagged them as the two that mattered most.

| Block | Viewed | Verdict |
|---|---|---|
| 1 — empty floor | yes, t=5s | on spec |
| 2 — Fan-di, fan snapped open | yes, t=14.2s | on spec (gold robe, figure present) |
| 3 — twelve cartouches | yes, t=26s | **off spec — count** |
| 4 — Dr-Qi, circuit diagram | **no** | unknown |
| 5 — ten of twelve dim out | yes, t=41–49.5s | **partly off spec — count only** |
| 6 — diagram reorganises | yes, t=50.3–59.5s | **on spec** |
| 7 — split hall | **no** | unknown |
| 8 — black plate | yes, t=75s | **off spec — colour** |

### Block 5 — the staging is right, the count is wrong

**The beat works.** Frame luma falls monotonically **181.6 → 128.9** across 40–50s and
then plateaus from t=48 — the signature of "ten dim out one by one, then hold" rather
than a fade. At t=49 the frame shows nearly all cartouches dimmed and **exactly two
still glowing, near the bottom of the frame**, which is precisely what the shot list
asks for.

**The count is wrong the same way block 3's is** — a grid of ~30 rather than twelve.
Blocks 3 and 5 share the cartouche motif and share the defect, which is consistent
rather than a second independent failure.

**Which two are lit cannot be determined from the render, and that is not a defect.**
The cartouches are unlabelled by design, so no cell corresponds to a named riddle
until glyphs are added. The requirement that the two survivors be **泣涕 and 太息**
therefore binds the *glyph pass*, not this clip — see the cut's *Finishing steps* 5.
The staging it depends on (two left lit, at the bottom) is correct and ready.

### Block 6 — on spec, and it is the shot the trailer rests on

The load-bearing image works. Measured across 50–60s:

| | t=50.3 | t=54 | t=59.5 |
|---|---|---|---|
| ink pixels | 10,602 | 4,520 | 11,285 |
| L/R symmetry | 53% | 44% | **87%** |
| ink centroid x (centre = 360) | 397 | 257 | **341** |

**Ink mass halves and then rebuilds** — a genuine dissolve-and-redraw, not a drift or
a pan. The end state is markedly more symmetrical than the start and settles within
19px of frame centre.

Confirmed by eye at t=59.5: **a single seated figure at the exact centre, a luminous
line rising from the body to the head, and the composition radially organised around
it.** Dr-Qi stands still at the side — **blue cheongsam, open bamboo scroll**, which
also confirms cast-sheet compliance on the character the cut leans on hardest.

### What the two checks changed

The first version of this review inferred from a 50% defect rate that the uninspected
blocks were likely compromised. **That inference was too pessimistic.** Block 6 — the
most complex thing asked of the model, and the shot the argument depends on — came
back correct, and block 5's only fault is the count it inherits from sharing block 3's
motif.

**The defect is narrower than it looked: it is the cartouche-grid motif, not the
generation as a whole.** Two of three failures (blocks 3 and 5) are one motif rendered
once and reused; the third (block 8) is an unrelated plate-colour miss. Blocks 4 and 7
remain unviewed, and block 4 shares the diagram motif that block 6 got right.

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
org egress policy, so inspecting a frame means base64 through the sandbox. **Four
transfers corrupted mid-string** across this review. Print `md5sum` alongside the
base64 and compare after decoding — a corrupted frame that half-renders is worse than
one that fails outright, because it invites a confident wrong reading of the picture.

**The checksum earned its place on the block 6 check**, where an 8 KB composite
arrived corrupt and was rejected before it was looked at. Keep frames **under ~4 KB**
(≈124–132px wide); every transfer at that size succeeded, and every larger one failed.
One frame per call, never a composite.

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
2. ~~View blocks 5 and 6 before this chapter goes further.~~ **Done 2026-08-08** —
   block 6 on spec, block 5 correct except for the count it shares with block 3.
   **Blocks 4 and 7 remain unviewed** and are the only unknowns left; both are free to
   check, and block 4 shares the diagram motif block 6 got right, so it is the likelier
   of the two to be fine.
3. **If this chapter goes to full tier, regenerate blocks 3, 5 and 8.** Blocks 3 and 5
   share the cartouche motif and must be regenerated *together* or they will disagree
   with each other on screen — block 5 re-uses block 3's grid, so fixing one alone
   makes the twelve-count appear and then vanish. Block 8 is independent. That fixes
   the count, retires the scrim currently holding up the compliance card, and clears
   every known defect.
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
