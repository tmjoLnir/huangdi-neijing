# Lingshu 28 Longform v3 — Thumbnail Proposals v1

**口問篇第二十八 · Twelve Small Rebellions**

**Not rendered — three proposals, nothing generated, no credits spent.** This
document proposes; it does not produce. Pick one and it goes through the step-0
cost gate and the prompt cleaner like any other generation.

**Serves:** `inner-canon-lingshu28-longform-v3.md` — RENDERED 2026-08-24, 15:00,
1280×720. **Slate rank 1, publish slot 1** — the channel's first episode.

**Visual comparison, all three at full size and at true feed size:**
`https://claude.ai/code/artifact/29f244ae-ea13-4869-8747-c3cfe7cb6c70`

---
## Why this document exists

The cut's compliance notes already carry a one-line thumbnail direction. It is a
good line and it is **concept A below**. But it was written as a compliance
guardrail — a statement of what *not* to do — rather than as a design worked
through to a composition, and it has never been tested at the size a thumbnail is
actually seen. This document takes that direction seriously enough to build it,
and then builds two alternatives against it so the choice is a comparison rather
than a default.

**The deciding test is 210 × 118 px**, the feed size on a phone. A thumbnail that
only works at 1280 × 720 has not been designed, it has been decorated.

## What binds all three

| Constraint | Source |
|---|---|
| **Honour the educational payoff; no mystery clickbait** | `CLAUDE.md` § YouTube compliance |
| **Cite the book — *Lingshu 28*, never a bare "Chapter 28"** | `CLAUDE.md` § Suwen and Lingshu are numbered separately |
| **No caricature yawning face** | the cut's own recorded direction |
| **No *longevity*, *live to 100*, *ancient secret*, *anti-aging*** | banned-terms check, carried from the cut |
| **Bottom-right stays clear** — the duration badge sits there | YouTube chrome |
| **Flat 2D ink-and-gouache on paper; Anton display type; cinnabar the only accent** | house style, `assets/` style keys |

**Geometry:** 1280 × 720, under 2MB, JPEG or PNG.

---
## A — The Empty Floor

**The recorded direction, executed.** An empty hearing floor beneath a high seat,
twelve empty tally slots on the wall, a pool of light where a defendant would
stand. No figures at all.

| | |
|---|---|
| Ground | paper `#EFE3C8`, back wall `#E6D8B8` |
| Display type | Anton 118 — *THE SMALL / QUESTIONS* |
| Eyebrow | `LINGSHU 28` + 口問 in cinnabar |
| Accent | cinnabar seal, 問, bottom-right-of-centre |
| Faces | none |
| Route | generate from the landscape style key |
| Est. cost | ~2 credits |

**Reads as:** a courtroom with no defendant. The seat is occupied by nobody, the
tally board is unmarked, and the light falls where a body would stand. It says
*a trial is about to happen and the accused is you* without showing a person.

- **+** Zero compliance surface — no face, no anatomy, no medical read.
- **+** Restraint is distinctive in a feed of shouting faces.
- **+** Already the recorded direction; nothing to re-approve.
- **−** **Weakest at 210 px.** A wide architectural scene collapses into texture and
  the twelve slots stop being countable — which loses the one thing the image is for.
- **−** *The Small Questions* is oblique for an audience the slate describes as
  needing **no prior interest in China, medicine, or history**.
- **−** Lowest expected CTR, at the one slot where CTR compounds hardest.

**Generation prompt** — chain off the landscape key `717ea032-0a02-4da8-a161-6d77ef8db5ad`:

> Flat 2D ink-and-gouache Chinese court interior, wide landscape, same palette and
> brush style as the reference. An empty formal hearing chamber: a raised dais at
> frame right carrying a tall empty ceremonial seat with a gold crest rail; a broad
> empty stone floor in the lower half with a soft pool of pale light falling centre
> where a person would stand; a row of twelve small empty rectangular tally slots
> along the upper wall, evenly spaced and clearly countable. No people anywhere in
> frame. No text anywhere in frame. Generous empty space in the lower left third.

---
## B — The Twelve Tally  ★ recommended

**The cut's own tally motif promoted to hero.** Twelve slots, eleven marked in ink,
one lifting out of alignment in cinnabar.

| | |
|---|---|
| Ground | paper `#EFE3C8` |
| Grid | 2 rows × 6, cells 152 × 150, the 6th rotated −9° and raised 13px |
| Display type | Anton 112 — *12 THINGS YOUR BODY DOES / WITHOUT ASKING YOU*, second line cinnabar |
| Faces | none |
| Route | generate from the landscape style key |
| Est. cost | ~2 credits |

**Reads as:** a countable grid, which is one of the few shapes that survives being
shrunk to a thumbnail — the eye reads *twelve* before it reads anything else. The
odd mark breaking rank is **the episode's actual payoff at block 75**, where the
sneeze refuses to sit in the system with the other eleven. The structure encodes
something true: there really are twelve riddles, and one really does break the
pattern.

- **+** **Reads at any size.** The grid stays countable at 210 px and the number leads.
- **+** **Complements the title instead of repeating it** — the title supplies *yawn*,
  the thumbnail supplies *scope*.
- **+** Builds the tally as series furniture from episode one; it recurs in every cut.
- **+** Inherits A's clean compliance read — no faces, no anatomy.
- **−** Least warm of the three; nothing human on screen.
- **−** *12 things* carries a faint listicle scent, mitigated by the episode genuinely
  being twelve riddles.

**Generation prompt:**

> Flat 2D ink-and-gouache on warm paper, same palette and brush style as the
> reference. A grid of twelve empty rectangular tally cards, two rows of six, evenly
> spaced and clearly countable, filling the upper two thirds of a wide landscape
> frame. Eleven cards each carry a single vertical brushed ink tally stroke. The
> twelfth card is tilted out of alignment and lifted slightly above the row, drawn
> in cinnabar red instead of ink, its stroke also cinnabar. Clean empty paper across
> the lower third. No people. No text anywhere in frame.

---
## C — The Emperor's Question

**Fan-di mid-question, fan snapped open, against the brushed glyph 欠.** He is
asking, not yawning.

| | |
|---|---|
| Ground | paper `#EFE3C8` with a pale bloom behind the figure |
| Figure | `assets/emperor-Fan.png`, background keyed, placed frame-right |
| Glyph | 欠 at 372px, ink at 12% — the character for yawning, as watermark |
| Display type | Anton 146 — *WHY DO / WE YAWN?* |
| Faces | Fan-di |
| Route | **composite existing art — no generation** |
| Est. cost | **0 credits** |

**Reads as:** the framing device the slate calls *a gift* — an emperor clearing the
room to ask undignified questions. The fan open is on-model: it is his tell for
performing rather than sincere, which is exactly his posture when he opens the
inquiry.

- **+** Highest expected CTR. A face with an expression outperforms architecture.
- **+** **Costs nothing** — the art exists; this is a composite, not a render.
- **+** Starts building character recognition at the first possible episode.
- **−** **Departs from the recorded *no faces* direction**, which exists to keep the
  caricature-yawn thumbnail off the table. *Asking rather than yawning* defuses that,
  but it is a deliberate override and needs signing off rather than assuming.
- **−** ***Why do we yawn?* duplicates the working title.** If this runs, change the
  thumbnail line — the two should not say the same thing.
- **−** A character-led thumbnail reads as animation, which may pull the first
  algorithmic classification away from history-of-science, where the RPM is.

**Compositing recipe** — no Higgsfield call needed:

```
ffmpeg -i assets/emperor-Fan.png \
  -vf "scale=560:-1,colorkey=0xF9E9CB:0.13:0.05,format=rgba" fan_cut.png
```

**The key punches through the fan and the glasses**, because both are near-cream —
which is harmless *only* on a paper ground, where those pixels fill back to the
colour they should have been. **Do not composite this cutout onto a dark ground**
without re-keying; the fan will go black and the fan is his tell.

---
## Side by side

| | Feed legibility | Compliance | On recorded direction | Cost | Best use |
|---|---|---|---|---|---|
| **A** Empty Floor | Weak | Clean | Yes | ~2 cr | press still / pinned image |
| **B** Twelve Tally | **Strong** | Clean | Yes — extends it | ~2 cr | **ship as primary** |
| **C** Emperor's Question | **Strong** | Needs sign-off | **No** — overrides *no faces* | **0 cr** | A/B against B |

## Recommendation

**Ship B, test C against it.** B is the only variant that is simultaneously strong
at feed size, exactly on the educational payoff, and compliant with no caveat — and
it turns the tally into series furniture from the first episode. C is the natural
A/B partner because it costs nothing to build and probes whether a recurring face
beats a diagram at cold start.

**A should still be produced**, as the press still and pinned-comment image rather
than the thumbnail. Its restraint is real and worth having — just not at the one
slot where a cold audience decides whether this channel is for them.

> **Settle the title before generating anything.** The slate's working title is
> *Why We Yawn*; the cut's own title is *Twelve Small Rebellions*. All three
> thumbnails assume **the title carries the hook and the thumbnail carries the
> frame**. If the published title changes, B's and C's lines change with it — and if
> the title becomes *Twelve Small Rebellions*, B's line duplicates it the way C's
> currently duplicates *Why We Yawn*, and B would need a new line too.

## Compliance notes (YouTube)

- **Educational payoff honoured** — A names the inquiry, B names the twelve
  involuntary actions, C names the question the episode answers. **None promises
  anything the episode does not deliver**, and none frames the material as secret,
  suppressed or curative.
- **Citation accuracy** — all three carry *Lingshu 28* and 口問 on screen. No bare
  chapter number appears in any variant.
- **No medical instruction, no anatomy** — no bodies, no organs, no diagrams of
  either. A and B contain no human figure at all; C's figure is a clothed character
  portrait in the established house style.
- **Banned terms** — *longevity*, *live to 100*, *ancient secret*, *anti-aging*
  checked against every headline, eyebrow and alt line above. None present.
- **Not made for kids** — the cartoon cast could read as children's content, which
  is a classification risk the channel already carries. **B is the safest of the
  three on this axis** because it shows no character at all; **C is the most exposed**.
  Recorded here because it is a genuine argument against C beyond the *no faces* rule.
- **Supernatural framing** — none of the three uses talismans, glowing hands, or
  mystical iconography. The cinnabar seal is a scholarly convention, not an occult one.
