# Suwen 8 Longform v2 — Thumbnail Proposals v1

**素問·靈蘭祕典論第八 · The Twelve Offices**

**Not rendered — three proposals, nothing generated, no credits spent.** This
document proposes; it does not produce. Pick one and it goes through the step-0
cost gate and the prompt cleaner like any other generation.

**Serves:** `inner-canon-suwen8-longform-v2.md` — RENDERED 2026-08-26, 16:00,
1280×720. **Not on the Top-20 slate** (§8 excludes it as already produced, while
noting it *"would rank Top 5 — the organs as a government of ministers. Strongest
single metaphor in the canon."*), so this is a back-catalogue thumbnail rather
than a cold-start one — it competes against the channel's own library as much as
against the feed.

**Visual comparison, all three at full size and at true feed size:**
`https://claude.ai/code/artifact/b41578ca-381a-46cd-bb25-97b87993d96e`

---
## Why this document exists

The cut's compliance notes already carry a one-line thumbnail direction:

> the twelve-box ink chart with one box conspicuously empty, no faces, no organs —
> *one of these ministries has no building*. Do not use a heart-with-a-crown image;
> it promises mysticism the episode spends sixteen minutes dismantling.

It is a good line and it is **concept A below**. But it was written as a compliance
guardrail — a statement of what *not* to do — rather than as a design worked
through to a composition, and it has never been tested at the size a thumbnail is
actually seen. This document builds it, then builds two alternatives against it so
the choice is a comparison rather than a default.

**The deciding test is 210 × 118 px**, the feed size on a phone. A thumbnail that
only works at 1280 × 720 has not been designed, it has been decorated.

### The episode contains two absences, and a thumbnail must pick one

This is the structural fact that shapes all three concepts, and it is specific to
this chapter:

| Absence | Where | What it is |
|---|---|---|
| **The triple burner** 三焦 | Act III, blocks 63–70 | A title and a job with **no organ** — a ministry with no building |
| **The brain** | Act I, blocks 16–19 | **No office at all.** Not demoted — never nominated |

They are different ideas and they resolve differently. **Showing both reads as a
mistake rather than a theme.** A takes the first, B takes the second, C skips both
and leads with the question that opens the cut.

## What binds all three

| Constraint | Source |
|---|---|
| **Honour the educational payoff; no mystery clickbait** | `CLAUDE.md` § YouTube compliance |
| **Cite the book — *Suwen 8*, never a bare "Chapter 8"** | `CLAUDE.md` § Suwen and Lingshu are numbered separately |
| **No heart-with-a-crown** | the cut's own recorded direction |
| **No organs, no anatomy** — every office is an emblem in a box | the cut's compliance notes |
| **No *longevity*, *live longer*, *ancient secret*, *anti-aging*** | banned-terms check, carried from the cut |
| **Bottom-right stays clear** — the duration badge sits there | YouTube chrome |
| **Flat 2D ink-wash on silk; Anton display type; cinnabar the only accent** | house style, `assets/` style keys |

**Geometry:** 1280 × 720, under 2MB, JPEG or PNG.
**Landscape style key:** `6b945916-15d4-4987-bab9-7eb26cf7ce24` (generated for the
v2 render; reuse it, do not derive a new one).

---
## A — The Empty Ministry

**The recorded direction, executed.** Twelve offices on a lacquer chart, eleven
sealed in ink, the twelfth titled and empty in cinnabar.

| | |
|---|---|
| Ground | silk `#EFE3C8` |
| Grid | 6 × 2, cells 160 × 112, joined by one ruled line; the twelfth dashed cinnabar and empty |
| Display type | Anton 97 — *TWELVE MINISTRIES. / ONE HAS NO BUILDING.*, second line cinnabar |
| Eyebrow | `SUWEN 8 · 靈蘭祕典論` in cinnabar |
| Faces | none |
| Route | generate from the landscape style key |
| Est. cost | ~2 credits |

**Reads as:** an organisation chart with a vacancy — except the vacancy is not
unfilled, it is *unbuildable*. That is the triple burner, the strangest near-miss
in the canon and the hinge of Act III.

- **+** **Already the recorded direction** — nothing to re-approve.
- **+** Zero compliance surface: no face, no anatomy, no medical read.
- **+** The headline is a complete claim, and the episode delivers it at Act III.
- **−** **Weakest at 210 px.** Twelve cells is too many to count in a feed, and the
  one that matters is defined by what it *lacks* — an absence competing with eleven
  near-identical marks. The cinnabar dash reads as noise rather than as a gap.
- **−** **"Ministries" half-duplicates the working title's "government".** Thumbnail
  and title should not say the same word.
- **−** Two lines of near-equal length make a grey slab when shrunk.

**Generation prompt** — chain off the landscape key `6b945916-15d4-4987-bab9-7eb26cf7ce24`:

> Flat 2D ink-wash on warm silk, wide landscape, same palette and brush style as the
> reference. A formal lacquer organisation chart: twelve empty rectangular office
> cards in two rows of six, evenly spaced and clearly countable, joined by a single
> ruled horizontal line. Eleven cards each carry one small solid brushed ink seal
> block. The twelfth card, at the end of the lower row, is drawn in cinnabar red with
> a broken dashed outline and is completely empty inside. Clean empty silk across the
> lower third. No people. No organs. No text anywhere in frame.

---
## B — Never Nominated  ★ recommended

**The council of twelve, complete and connected — and one box outside it that no
line reaches.**

| | |
|---|---|
| Ground | silk `#EFE3C8` |
| Council | 4 × 3 sealed cards, ruled and joined into one connected structure, frame-left |
| Outsider | 216 × 150 cinnabar dashed card, **unconnected**, frame-right, carrying a single `?` |
| Display type | Anton 88 — *THE ORGAN READING THIS / HAS NO SEAT.*, second line cinnabar |
| Faces | none |
| Route | generate from the landscape style key |
| Est. cost | ~2 credits |

**Reads as:** a complete government that has left something out — and the thing
left out is the reader. This is block 18, the episode's second-best line: *the
brain is not junior here, the brain is absent.* The composition encodes something
true: the chart really is full, and the brain really was never nominated.

- **+** **Reads at any size.** Cluster-plus-outlier is a gestalt, not a count — it
  survives the shrink that breaks A. This is the whole argument for it.
- **+** **Second person.** *The organ reading this* makes the viewer the subject
  without a face, a body, or a claim about their health.
- **+** **Complements the title instead of repeating it** — the title supplies
  *government*, the thumbnail supplies *you are not in it*.
- **+** Inherits A's clean compliance read, and the isolated box becomes reusable
  series furniture for any chapter with an absence in it.
- **−** The empty box needs the `?` or it reads as an unfinished design rather than
  a deliberate exclusion.
- **−** Coldest of the three; nothing human on screen.
- **−** **Departs from the recorded direction's specific image** — a gap *inside* the
  chart becomes a box *outside* it. It keeps that direction's rule (no faces, no
  organs, a chart with something missing) and its reason, but the image moves, and
  that is a change worth naming rather than sliding past.

**Generation prompt:**

> Flat 2D ink-wash on warm silk, wide landscape, same palette and brush style as the
> reference. At frame left, a complete lacquer organisation chart of twelve
> rectangular office cards in three rows of four, each carrying one small solid
> brushed ink seal block, all joined by ruled horizontal and vertical lines into a
> single connected structure. At frame right, separated by a wide gap of empty silk,
> one larger rectangular card drawn in cinnabar red with a broken dashed outline,
> completely empty inside, with no line of any kind reaching it. Clean empty silk
> across the lower third. No people. No organs. No text anywhere in frame.

---
## C — The Budget Question

**Fan-di, fan snapped open, asking the question that starts the episode.**

| | |
|---|---|
| Ground | silk `#EFE3C8` with a pale bloom behind the figure |
| Figure | `assets/emperor-Fan.png`, background keyed, placed frame-right |
| Backdrop | the twelve-box chart at 20% — present, not competing |
| Display type | Anton 102 across three lines, third line cinnabar |
| Faces | Fan-di |
| Route | **composite existing art — no generation** |
| Est. cost | **0 credits** |

**Reads as:** the dramatic engine stated plainly. Fan-di called this audience to
settle a budget question — which of his organs he could afford to neglect — and
gets handed a description of his own court instead. **The fan open is on-model:**
it is his tell for *performing* rather than sincere, which is exactly his posture
when he opens the inquiry. (It goes down once, at block 81, and does not come back
up — so an open fan is the correct state for the episode's first minute.)

- **+** **Costs nothing** — the art exists; this is a composite, not a render.
- **+** Highest expected CTR: a face with an expression outperforms a diagram.
- **+** **The question is literally the episode's opening beat**, so the promise is
  exact rather than merely adjacent.
- **+** Builds character recognition across the series.
- **−** **Overrides the recorded *no faces* direction** — a deliberate call that needs
  signing off, not assuming.
- **−** **"Which organ can I afford to lose?" is a health-shaped question.** The
  episode answers it as governance, but a cold viewer may read it as medical — the
  one framing this channel cannot afford. **See the reword below; do not ship this
  line as written.**
- **−** Three lines of Anton is one too many; it greys out in the feed.
- **−** A character-led thumbnail reads as animation, which may pull the first
  algorithmic classification away from history-of-science, where the RPM is.

**Compositing recipe** — no Higgsfield call needed:

```
ffmpeg -i assets/emperor-Fan.png \
  -vf "scale=620:-1,colorkey=0xF9E9CB:0.13:0.05,format=rgba" fan_cut.png
```

**The key punches through the fan and the glasses**, because both are near-cream —
which is harmless *only* on a silk ground, where those pixels fill back to the
colour they should have been. **Do not composite this cutout onto a dark ground**
without re-keying; the fan will go black, and the fan is his tell.

---
## Side by side

| | Feed legibility | Compliance | On recorded direction | Cost | Best use |
|---|---|---|---|---|---|
| **A** Empty Ministry | Weak | Clean | **Yes** | ~2 cr | chapter card / pinned image |
| **B** Never Nominated | **Strong** | Clean | Keeps the rule, moves the image | ~2 cr | **ship as primary** |
| **C** Budget Question | Medium | **Needs sign-off** | **No** | **0 cr** | A/B against B |

## Recommendation

**Ship B, test C against it.** B is the only variant that is simultaneously strong
at feed size, exactly on the educational payoff, and compliant with no caveat. It
also does something the other two do not: **it puts the viewer inside the argument
without showing a person**, which is the trick the whole episode pulls. Its one
real cost is that it moves the recorded direction's image while keeping that
direction's rule and its reason.

**C is the natural A/B partner because it costs nothing to build** and probes
whether a recurring face beats a diagram at cold start. Its headline needs
changing first.

**A should still be produced**, as the chapter card and pinned-comment image rather
than the thumbnail. Its restraint is real; it just loses the argument at the one
size where the decision is made.

> **Two things to settle before generating anything.**
>
> **1. C's headline is a health question and must be reworded.** *"Which organ can I
> afford to lose?"* is the episode's own opening line, but out of context it invites
> a medical read — the exact surface `CLAUDE.md` keeps this channel clear of.
> **"WHICH OF MY MINISTERS CAN I FIRE?"** keeps the joke, keeps the governance frame,
> and carries no medical shape at all. It also drops the line to two Anton lines
> instead of three, which fixes C's other weakness.
>
> **2. Settle the title first.** All three assume **the title carries the frame and
> the thumbnail carries the turn.** The cut's working title is *The Body Is a
> Government — Suwen 8*. If that changes, **A's line breaks first**, because
> *ministries* only earns its place while the title says *government*.

## Compliance notes (YouTube)

- **Educational payoff honoured** — A names the ministry with no building, B names
  the organ with no seat, C names the question the episode opens on. **None promises
  anything the episode does not deliver**, and none frames the material as secret,
  suppressed or curative. All three payoffs land on screen in the cut: A at Act III,
  B at blocks 18–19, C at block 3.
- **Citation accuracy** — all three carry *Suwen 8* and 靈蘭祕典論 on screen. No bare
  chapter number appears in any variant. Lingshu 8 (本神) is a different chapter and
  the eyebrow is what keeps a checking viewer off it.
- **No medical instruction, no anatomy, no organs** — A and B contain no human figure
  and no organ of any kind; every office is an emblem in a box, which is the cut's
  own convention. **C's original headline is the one medical-shaped element in this
  document and is flagged for reword above.**
- **No heart-with-a-crown, no mysticism** — none of the three uses a crowned organ,
  a talisman, a glowing hand or any occult iconography. The cinnabar seal is a
  scholarly convention, not an occult one.
- **Banned terms** — *longevity*, *live longer*, *ancient secret*, *anti-aging*
  checked against every headline, eyebrow and alt line above. None present.
- **Not made for kids** — the cartoon cast could read as children's content, a
  classification risk the channel already carries. **A and B are safest** because
  neither shows a character at all; **C is the most exposed.** Recorded here because
  it is a genuine argument against C beyond the *no faces* rule.
- **Supernatural framing** — none. The episode's one supernatural-adjacent hook (an
  office with no organ) is presented in A as a bureaucratic vacancy, which is the
  debunked reading rather than the mysterious one.
