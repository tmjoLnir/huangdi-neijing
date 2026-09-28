# Suwen 13 Longform v2 — Thumbnail Proposals v1

**素問·移精變氣論第十三 · When Medicine Stopped Being Magic**

**Not rendered — three proposals, nothing generated, no credits spent.** This
document proposes; it does not produce. Pick one and it goes through the step-0
cost gate and the prompt cleaner like any other generation.

**Serves:** `inner-canon-suwen13-longform-v2.md` — RENDERED 2026-09-27, 14:00,
1280×720. **Rank 2 of the Top-20 slate and publish slot 2** (§3.2, §5), whose
stated job is to be *the channel's thesis statement*: *"Establishes immediately
that this is intellectual history, not wellness — which is the single most
important signal to send in the first month, because early classification is
sticky."* So this is a **cold-start** thumbnail, unlike Suwen 8's back-catalogue
one. It is judged on two things at once: click-through, and **which shelf the
algorithm files the channel on.** Where those pull apart, this document sides with
the shelf.

---
## Why this document exists

The cut's compliance notes already carry a thumbnail direction:

> the divided silk scroll, inked on one side and blank on the other, with the six
> characters 故祝由不能已也 on the inked side. No faces, no talismans, no robed
> figure, no glowing hands. **Do not use an incantation image**; it promises the
> exact thing the episode spends fourteen minutes declining to endorse.

That is **concept A below**. Like Suwen 8's, it was written as a guardrail, not as a
composition, and nobody has tested it at feed size. This document works it into a
layout and builds two alternatives against it, so the choice is a comparison
rather than a default.

**The deciding test is 210 × 118 px**, the feed size on a phone. A thumbnail that
only works at 1280 × 720 has not been designed, it has been decorated.

### The direction miscounts its own sentence

**故祝由不能已也 is seven characters, not six**: 故 · 祝 · 由 · 不 · 能 · 已 · 也.
The same miscount appears in three places in the v2 document: the thumbnail
direction, shot **39** (*"six characters alone on black"*), and block **40**'s
narration (*"Six characters say that therefore the invocation cannot end it"*).
The narration is baked into the render and is defensible if you read it as six
characters plus 故, since it glosses 故 separately as *therefore*. The shot list and
the direction are not defensible, and the thumbnail is where a checking viewer
would count the characters.

**This document sets all seven characters, matching the block 39 card that shipped,
and never gives a count on the image.** Correct *six* to *seven* in the v2
document's shot 39 and thumbnail direction the next time that file is touched.
Block 40's narration stays until a v3.

### The episode has three images, and a thumbnail can carry only one

| Image | Where | What it is |
|---|---|---|
| **The retiring sentence** 故祝由不能已也 | blocks 39–40 | The tradition's own founding text retires its inherited practice in one clause |
| **The payroll** | blocks 2, 12–13 | A state department for incantation that ran about a thousand years and was abolished in 1571 |
| **The shut door** 閉戶塞牖 | blocks 80–82 | The payoff: the oldest description of a consultation, which is a closed room, one patient and the same question asked again |

A takes the sentence, B takes the door, and C takes the payroll. **Do not combine
them.** Two of them in one frame reads as a collage, not a claim.

## What binds all three

| Constraint | Source |
|---|---|
| **Honour the educational payoff; no mystery clickbait** | `CLAUDE.md` § YouTube compliance |
| **Cite the book as *Suwen 13*, never a bare "Chapter 13".** Lingshu 13 (經筋) is a different chapter | `CLAUDE.md` § Suwen and Lingshu are numbered separately |
| **No incantation image.** No talisman, altar, robed figure, bound figure or glowing hands | the cut's own recorded direction and its *Occult and ceremonial imagery* note |
| **No bodies, no patient, no anatomy.** No patient is drawn anywhere in the cut's 84 shots, and the thumbnail must not be the first | the cut's compliance notes |
| **No *longevity*, *live longer*, *ancient secret*, *anti-aging*.** Also no *cure*, *heal* or *works*: block 83 says attention *"is not a treatment for disease"*, and a headline must not quietly contradict it | banned-terms check carried from the cut, plus block 83 |
| **Do not repeat the title's words.** The title already says *medicine* and *magic*; the thumbnail must add a different word | Suwen 8 lesson, *ministries* vs *government* |
| **Bottom-right stays clear** for the duration badge | YouTube chrome |
| **Flat 2D ink-wash on silk; Anton display type; cinnabar is the only accent** | house style, `assets/` style keys |
| **No text in any generated image.** The Anton and CJK lines are set in post (Noto Serif CJK TC, the font the cut's eighteen cards shipped in), because a generator mangles hanzi | the cut's card pass |

**Geometry:** 1280 × 720, under 2MB, JPEG or PNG.
**Landscape style key:** `cff22011-3221-4b67-8545-2ca344460ac6` (2752 × 1536,
generated for the v2 render). Reuse it; do not derive a new one.
**Headline widths** below are computed from the repo's own Anton metrics
(`scripts/lib/caption_metrics.js`, `charWidth × size`). They are not eyeballed.

---
## A — The Retiring Sentence  ★ recommended

**The recorded direction, built out.** One silk scroll across the frame. The left
half is dense with ink columns; the right half is blank silk. The seven characters
sit large on the inked side, and the headline sits in the blank half, on the space
the sentence cleared.

| | |
|---|---|
| Ground | silk `#EFE3C8`; the scroll spans the frame, split at x ≈ 620 |
| Inked half | faint calligraphy columns as texture, and 故祝由不能已也 set **vertically** over it in Noto Serif CJK TC at ~70 px in ink black. **已** is in cinnabar, because it is the verb (*to end*) |
| Display type | Anton 88, right half, left-aligned at x = 680: *RETIRED IN / ONE SENTENCE.* (391 / 549 px wide). Second line in cinnabar |
| Eyebrow | `SUWEN 13 · 移精變氣論`, cinnabar, above the headline |
| Faces | none |
| Bottom-right | blank silk, which is the design and not merely an allowance |
| Route | generate the plate from the landscape style key; set all text in post |
| Est. cost | ~2 credits (`nano_banana_pro`, one image) |

**Reads as:** a document that stops half way. The founding text of Chinese
medicine is shown retiring the practice it inherited, and the retirement is the
visible edge between ink and silk. The headline adds the one fact the title leaves
out: *how* it stopped (in one sentence, and written by the tradition itself).

- **+** **Already the recorded direction**, so there is nothing to re-approve.
  The only change is the character count, and that is a correction rather than a
  new direction.
- **+** **Survives the shrink.** At 210 px the frame is two tones split down the
  middle, dark texture left and pale right, with a two-line headline on the pale
  side. A split field is a gestalt, like B's outlier in Suwen 8, and not a count
  like A's twelve cells. The hanzi turn into texture at feed size (~12 px), and
  that is fine; at full size and on the watch page they are the proof.
- **+** **Sends the strongest intellectual-history signal of the three**: a
  manuscript, a quotation and a claim about a text. This is the slot-2 job.
- **+** **Complements the title instead of repeating it.** The title gives *what*
  changed (magic to medicine); the thumbnail gives *how* (one sentence).
- **+** Zero compliance surface: no figure, no ritual, no health read.
- **−** **Lowest raw CTR ceiling of the three.** There is no face and no object;
  it is typography over a texture, and some viewers scroll past manuscripts.
- **−** **The split must be decisive.** A soft ink-to-silk gradient reads as
  staining. The left half needs heavy ink and a hard edge, or the idea is lost at
  feed size.
- **−** *Retired* is a slightly institutional word. That is deliberate, since it
  rhymes with the payroll in block 12, but it is less punchy than a verb like
  *killed*. Do not swap in *killed*: it is sensational and false.

**Generation prompt**, chained off the landscape key
`cff22011-3221-4b67-8545-2ca344460ac6`:

> Flat 2D ink-wash on warm silk, wide landscape, same palette and brush style as the
> reference. A single long horizontal silk scroll laid flat across the whole frame,
> its wooden rollers just visible at the far left and far right edges. The left half
> of the scroll is densely covered in heavy vertical columns of dark brushed ink
> strokes, abstract and illegible, like texture. The ink stops abruptly at the exact
> centre of the scroll with a clean hard vertical edge. The right half of the scroll
> is completely blank, clean pale silk. Even soft light, no shadows across the blank
> half. No people. No hands. No seals, talismans or symbols. No text or letters
> anywhere in frame.

**Post pass:** set the seven characters vertically over the left half, then the
eyebrow and headline on the right. Use one `drawtext` per line, in the same idiom
as the cut's card pass: `fontfile` Anton and Noto Serif CJK TC, `textfile`s, and
**unique textfile names**. That last point is the block 6 tofu lesson.

---
## B — Shut the Door

**The payoff, emptied.** A quiet room with one lamp, a low stool beside a bed frame
drawn as three lines, and a door closing on the right. No patient, no physician.

| | |
|---|---|
| Ground | dim silk `#E4D6B8`, with a warm lamp bloom at left-centre |
| Objects | lamp, stool and bed frame at left-centre; the door, three-quarters shut, at far right, with a cinnabar slit of light at its edge |
| Display type | Anton 88, top-left: *SHUT THE DOOR. / ASK AGAIN.* (570 / 391 px). Second line in cinnabar |
| Eyebrow | `SUWEN 13 · 閉戶塞牖`, set small above the headline |
| Faces | none |
| Route | generate from the landscape style key |
| Est. cost | ~2 credits |

**Reads as:** an instruction, not a mystery. It is the chapter's own answer (block
80, 閉戶塞牖……數問其情), and block 81 names it *the oldest description of a clinical
consultation anybody has*. Paired with the title, it states the whole argument:
magic went out, and a closed room with a question came in.

- **+** **Strongest image at feed size.** A lamp and a door are two shapes that read
  at any scale, and the lamp bloom is the one warm point in the frame.
- **+** **Most human without a human.** It is the only concept with an
  emotional register, which is care, and it has no body in it.
- **+** **Mirrors the cut exactly.** Shot 80 is this room, so the thumbnail keeps
  its promise in the final ninety seconds.
- **−** **The headline is cryptic without the title.** *Ask again* on its own could
  read as a self-help instruction, the wellness shelf this slot exists to avoid.
  With the title beside it, the ambiguity mostly resolves, but not in every surface
  (Shorts shelves and embeds show the thumbnail without the title).
- **−** **A bed frame is sickroom furniture.** It is harmless, since it is three
  lines and empty, but it is the only object in any concept that points at illness
  rather than at a text. If this concept is chosen, draw it as a low platform, not
  a hospital shape.
- **−** **Departs from the recorded direction** in image and in rule, since it
  follows neither the scroll nor the retiring sentence. It keeps *no faces* and
  *no incantation*. That departure needs to be named, not slid past.

**Generation prompt:**

> Flat 2D ink-wash on warm silk, wide landscape, same palette and brush style as the
> reference. A quiet, sparsely furnished room at dusk. At left-centre, a single
> small oil lamp on the floor giving a soft warm glow, a low wooden stool, and a low
> plain wooden platform drawn in three simple lines, empty, with a folded cloth on
> it. At the far right, a wooden door almost fully closed, with a thin sliver of
> warm red-orange light at its edge. A lattice window, closed. The upper-left third
> of the frame is plain dim silk with nothing in it. No people. No hands. No
> talismans or symbols. No text or letters anywhere in frame.

---
## C — A Thousand Years on the Payroll

**Fan-di, fan wide, discovering what his medical service has been paying for.**
This is block 13: *"Then I am funding it."*

| | |
|---|---|
| Ground | silk `#EFE3C8`, with a pale bloom behind the figure |
| Figure | `assets/emperor-Fan.png`, background keyed, placed frame-right, clear of the badge corner |
| Backdrop | a seal ledger at 20% that runs off the left edge, with one cinnabar seal struck through (the shot 12 image, drawn flat in post, not generated) |
| Display type | Anton 84, left: *1,000 YEARS / ON THE PAYROLL.* (second line 588 px). Second line in cinnabar |
| Eyebrow | `SUWEN 13 · 移精變氣論` |
| Faces | Fan-di |
| Route | **composite existing art, no generation** |
| Est. cost | **0 credits** |

**Reads as:** an institutional-history hook. The state kept a department of
incantation on the medical payroll for about a thousand years (blocks 2 and 12),
and the emperor footing the bill has just noticed. **The open fan is on-model**:
it is his *performing* tell, and block 13 is him performing outrage.

- **+** **Costs nothing.** The art exists, so this is a composite, not a render.
- **+** **Highest expected CTR.** A face with an expression beats a manuscript at
  cold start.
- **+** **The headline is pure history**, with no health shape at all. That fixes
  the flaw Suwen 8's C carried. It is also the episode's hardest fact.
- **−** **Wrong shelf for slot 2.** A cartoon emperor reads as animation, and
  animation pulls first-month classification toward entertainment and, at worst,
  toward kids' content. This is the single most important signal the slate says
  this episode must send, and C sends the opposite one. **This is a structural
  objection, not a taste one.**
- **−** **Overrides the recorded *no faces* direction.** That is a deliberate call
  that needs sign-off, not an assumption.
- **−** *1,000 years* is approximate, and the cut says *about a thousand years*
  (blocks 2 and 12). The 1571 abolition is still flagged for re-confirmation in the
  v2 reproduction notes. **Do not ship C until that date is confirmed.** A number
  on a thumbnail is a claim, and it is the one claim here a checking viewer can
  falsify.
- **−** The payroll is a **block-2 fact, not the payoff.** C promises the setup, and
  the episode's argument (the retiring sentence, the shut door) is not on the image.

**Compositing recipe**, with no Higgsfield call needed:

```
ffmpeg -i assets/emperor-Fan.png \
  -vf "scale=560:-1,colorkey=0xF9E9CB:0.13:0.05,format=rgba" fan_cut.png
```

The Suwen 8 key caveat carries over unchanged: **the key punches through the fan
and the glasses**, which is harmless only on a silk ground. **Never composite this
cutout onto a dark ground** without re-keying.

---
## Side by side

| | Feed legibility (210 px) | Shelf signal (slot 2) | Compliance | On recorded direction | Cost | Best use |
|---|---|---|---|---|---|---|
| **A** Retiring Sentence | Strong: split field | **Strongest**: manuscript + quotation | Clean | **Yes** (count corrected) | ~2 cr | **ship as primary** |
| **B** Shut the Door | **Strongest**: lamp + door | Medium: *ask again* can drift to wellness | Clean, with a bed-frame caveat | No | ~2 cr | A/B test against A after week 2 |
| **C** Payroll | Medium: face reads, ledger doesn't | **Weakest**: reads as animation | Needs sign-off; date unconfirmed | No | **0 cr** | later rotation, once classification has set |

## Recommendation

**Ship A.** It is the only concept that is on the recorded direction, strong at
feed size, and actively doing slot 2's job, which is to tell the algorithm *this
is intellectual history*. It is also the most exact promise of the three, because
the sentence on the thumbnail is the sentence the episode is named for (block 40).

**Hold B as the A/B challenger, but not in week one.** Its image is stronger
than A's. Its headline, though, is the only one here that could be mistaken for
wellness advice, and the first weeks are when that mistake is expensive. Test it
once the channel's classification has settled.

**Push back on C for this episode.** It is free and it would probably win on raw
CTR. But this is the one slot where winning the wrong audience costs more than
losing a click. The slate says early classification is sticky, and a cartoon face
on the thesis episode is the fastest way to be filed next to animation. **Keep C's
payroll line.** It is the best historical headline in this document and should be
reused as a Shorts or community-post hook once the 1571 date is confirmed.

> **Three things to settle before generating anything.**
>
> **1. Fix the character count at source.** Correct *six* to *seven* in the v2
> document's shot 39 and thumbnail direction the next time that file is edited. The
> thumbnail itself never states a count, so it is safe either way.
>
> **2. Confirm 1571 before C or any payroll line ships anywhere.** It is the
> episode's one hard date, and it is still flagged in the v2 reproduction notes.
>
> **3. The title carries the frame and the thumbnail carries the turn.** All three
> concepts assume *When Medicine Stopped Being Magic* stays as the title. If it
> changes, **A's headline is the one that breaks**, because *retired in one
> sentence* only lands next to a title that says what was retired.

## Compliance notes (YouTube)

- **Educational payoff honoured.** A shows the sentence the episode is named for
  (blocks 39–40), B the consultation it ends on (blocks 80–81), and C the
  institution it opens with (blocks 2 and 12–13). **None promises anything the
  episode does not deliver**, and none frames the material as secret, suppressed
  or curative.
- **Citation accuracy.** All three carry *Suwen 13* with its Chinese title (or, for
  B, the quoted clause) on screen. No bare chapter number appears. Lingshu 13
  (經筋) is a different chapter, and the eyebrow keeps a checking viewer off it.
  **The seven-character count is corrected here**, and the source miscount is
  flagged for the v2 document above.
- **No incantation image, no mysticism.** No talisman, altar, robed figure, bound
  figure, glowing hand or ceremony in any concept. A's cinnabar 已 and C's
  struck-through seal are scholarly conventions, not occult ones. Every generation
  prompt names these exclusions explicitly, because restraint imagery has tripped
  this service's filter in this repo before, on innocuous subject matter.
- **No medical instruction, no bodies.** No patient is drawn in any concept, which
  matches the cut's 84 shots. **B's headline is the one element that could be read
  as advice** (*ask again*), and its bed frame is the one object pointing at
  illness. Both are flagged above, and both are reasons B is held back from week
  one.
- **Banned terms.** *Longevity*, *live longer*, *ancient secret*, *anti-aging*,
  *cure*, *heal* and *works* were checked against every headline and eyebrow. None
  is present.
- **Supernatural framing.** The episode's hook is incantation, and **all three
  concepts approach it from the debunking side**: A shows the text retiring it, B
  shows what replaced it, and C shows it as a line item in a budget. None
  depicts it.
- **Not made for kids.** A and B show no character. **C is the exposed one**, and
  on this episode the risk is sharper than usual because it is slot 2. That is
  recorded as a structural argument against C, not only a *no faces* preference.
