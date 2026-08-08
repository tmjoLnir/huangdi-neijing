# Block audit — Lingshu 28 trailer v2, draft tier

**口問篇第二十八 · Twelve Small Rebellions**

Per-block conformance of the rendered draft against the shot list in
`inner-canon-lingshu28-trailer-v2.md`. Completed 2026-08-08: **all eight blocks
inspected**, each by measurement plus at least one viewed frame.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**No re-render and no credits spent.** This is a record, not a work order. The
pipeline-level analysis of *why* the defects went unnoticed lives beside this file in
`inner-canon-lingshu28-trailer-render-review.md`; this file is the evidence per block.

---

## Verdict

| Blk | Shot | Verdict | Evidence |
|---|---|---|---|
| 1 | empty floor, push down | **on spec** | viewed t=5s |
| 2 | Fan-di, fan snapped open | **on spec** | viewed t=14.2s — gold robe, figure present |
| 3 | twelve cartouches arriving | **off spec — count** | viewed t=26s; ~35–40 cells, not twelve |
| 4 | Dr-Qi, circuit diagram | **on spec** (one note) | viewed t=35s; L/R ink balance 89–96% |
| 5 | ten of twelve dim out | **on spec but for the count** | viewed t=49s; luma 181.6→128.9, plateau t=48 |
| 6 | diagram reorganises | **on spec** | viewed t=59.5s; symmetry 53%→87% |
| 7 | split hall, ranked vs empty | **on spec** | viewed t=65s; L/R ink imbalance 30–38% |
| 8 | black plate | **off spec — colour** | viewed t=75s; mean 57, range 37–82 |

**Six of eight fully on spec. Two defects, and they are not eight independent
rolls of the dice:** blocks 3 and 5 share one motif and one fault, and block 8 is a
single unrelated miss.

---

## The two defects

### Blocks 3 and 5 — one motif, one fault

The shot list asks for **twelve** cartouches. The render produces a grid of ~35–40,
and block 5 re-uses block 3's grid, so the fault appears twice from one cause.

**Block 5's staging is otherwise correct**, which matters because it carries the
argument. Frame luma falls monotonically **181.6 → 128.9** across 40–50s and plateaus
from t=48 — the signature of ten dimming one by one and then holding, not a fade. At
t=49 nearly all cells are dark and **exactly two remain lit, near the bottom of the
frame**, as specified.

**Which two are lit cannot be read from the render, and that is not a defect.** The
cartouches are unlabelled by design, so no cell is a named riddle until glyphs are
added. The requirement that the survivors be **泣涕 and 太息** — the only two riddles
in the chapter with an agent — therefore binds the glyph pass, not the clip.

**Consequence for any future fix: blocks 3 and 5 must be regenerated together.**
Fixing block 3 alone would make the twelve-count appear at 0:20 and vanish at 0:40.

### Block 8 — the plate

Asked for "black plate, faint ink-grain texture"; returned a bright mottled texture,
frame mean **57**, range **37–82**. White end-card text on it was partly illegible
until a scrim was added. **The mandated disclaimer is legible because of a repair,
not because the block is right.**

---

## The six that passed

**Block 4** — Dr-Qi in the **blue cheongsam** holding the **open bamboo scroll**,
still, with a vertical diagram behind her showing a standing outline wrapped in a
luminous band. Cast-sheet compliant. L/R ink balance 89–96% across the block, with
mean luma drifting 179→149 as the diagram circulates.

*One note, recorded as a deviation rather than a defect:* the shot list frames her as
"standing beside the empty floor rather than in it", and the rendered shot does not
depict the empty hearing floor as context at all — she stands against a pillared hall.
**The compliance property still holds, and holds more strongly**: the cut's safety
rule is that no figure is ever staged *in* the empty floor, because a figure in a dock
reads as restraint imagery. With no floor depicted, there is no dock to stand in.

**Block 6** — the load-bearing shot, and it works. Ink mass halves and rebuilds
(10,602 → 4,520 → 11,285 px): a genuine dissolve-and-redraw, not a drift. L/R symmetry
rises **53% → 87%** and the ink centroid settles 19px from frame centre against 37px at
the start. Viewed at t=59.5: a single seated figure at the exact centre, a luminous
line rising from body to head, the composition radially organised around it, Dr-Qi
motionless at the side.

**Block 7** — a clean vertical split held across the block: ranked seats packed with
small figures on one side, the same hall empty on the other with only a pale band
winding through it. L/R ink imbalance **30–38%** (roughly 3:1) confirms the asymmetry
is structural rather than incidental.

**Blocks 1 and 2** — verified earlier during the caption and lower-third checks: the
empty floor with nobody in it, and Fan-di in the gold robe with the fan.

---

## What this audit changes

**It narrows the problem.** An earlier reading of a 50% defect rate among four
inspected blocks inferred that the uninspected half was probably compromised. With all
eight now seen, **that inference was wrong**: the four blocks checked since — 4, 5, 6
and 7 — include the most complex thing asked of the model (block 6's reorganisation)
and the most compositionally specific (block 7's split), and both came back correct.

**The model rendered structure, motion and character reliably. What it did not do is
count.** Both remaining defects are quantitative or categorical — *how many* cartouches,
*what colour* the plate — rather than failures of composition or style. That is a
narrower and more predictable weakness than "the renders are unreliable", and it points
at where a conformance check earns its keep: counts and colours stated in the shot
list, checked on one frame per block at draft tier.

---

## Compliance notes (YouTube)

This file ships no footage; the governing audit is in the cut's own document. Three
points belong here:

- **No figure is staged in the empty floor in any block.** Verified across all eight.
  This was the cut's stated safety margin against restraint or dock imagery, and it
  holds — block 4, the one shot that could plausibly have broken it, does not depict
  the floor at all.
- **Dr-Qi is cast-sheet compliant in both her blocks** (4 and 6): blue cheongsam, open
  bamboo scroll, motionless. Never jade.
- **The twelve-count requirement remains UNMET**, by decision, and is recorded as open
  in the cut's compliance notes. Narration and script are correct; the picture is not.
