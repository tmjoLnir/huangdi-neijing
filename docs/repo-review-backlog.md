# Repo review — outstanding items

Backlog from the repo-wide review of duplicate and redundant instructions across
`CLAUDE.md`, `SKILL.md`, `docs/` and the cut documents. Rewritten 2026-08-02
after chapters 2, 3, 5 and 8 were deleted from `output/` — items that only existed
because of those cuts are gone, and the sections below are what still applies.

**This file is the single tracker.** When an item is closed, close it here. The
`## 7. Priority order` tables in the two script reviews are frozen historical
records of those reviews, not a live to-do list — the review of 2026-08-02 found
three separate cases where the same item was tracked in two places and went stale
in one of them.

| | Item | Risk if skipped |
|---|---|---|
| §1 | Deduplicate the instruction set | Copies keep drifting; one already corrupted a file |
| §2 | An incoming-script checklist | Every new script re-derives the same five findings |
| §3 | Blueprint conformance | The Ch 46 hook contradicts its own cut |
| §4 | Backfill defects in the surviving documents | Wrong credit budget on the next run |
| §5 | Deferred by decision — chapter numbering | Cited numbers diverge from the received text at slate index 6+ |

---

## 1. Deduplicate the instruction set

Roughly half of `CLAUDE.md` restates `SKILL.md`, twelve rules are stated in full
in both, and there is no stated precedence. This is not untidiness: a duplicated
fact has gone stale in one copy on four separate occasions, and one duplicated
paragraph was left truncated mid-sentence in `SKILL.md`'s compliance gate.

### 1.1 Declare precedence once, then stop restating

Add a precedence note to the top of both files:

- **`CLAUDE.md` owns policy** — cast, compliance rules, document layout, git
  conventions, the mandated disclaimer string.
- **`SKILL.md` owns procedure and measurements** — model names, prices, per-voice
  words/second, block geometry, failure modes.

Precedent exists in both directions but is applied inconsistently: `SKILL.md` §5.5
yields to `CLAUDE.md` for naming reconciliations only; `CLAUDE.md` § Production
toolchain yields to `SKILL.md` for the toolchain only. The compliance gate was
converted to this shape already and is the model to follow.

Rules currently duplicated in full:

| Rule | `CLAUDE.md` | `SKILL.md` |
|---|---|---|
| Four voice IDs + presets | § Core Cast table | § 3 voice table |
| `speech_rate` is not a duration lever | § Core Cast | § 3 — plus a third copy in ch1 v1's record |
| Per-voice word budgets | § Core Cast | § 3 table **and** § "Write to 6–8 seconds" |
| One speaker per 10s block | § Core Cast | § 3 **and** § Longform voices |
| The four manual deliverables | § YouTube compliance | § 5 item 8 |
| The ten-section document layout | § Structure | § 5 |
| `medias[].value` is a job ID, never a URL | § Production toolchain | § 1 (×2) |
| Sidecars are tracked deliverables | § Writing conventions, § Production toolchain | § 5, § Subtitles, § guaranteed path, § What lands in git |
| CDN/upload blocked → verify at job level | § Production toolchain | § Environment caveats |
| Never overwrite a prior version | § Git conventions | § 5 |

### 1.2 Collapse the caption sections

Captions occupy ~22% of `SKILL.md` across four sections that cross-reference each
other: *This rule is not the caption rule*, *Subtitles*, *Caption wrapping*, and
*The guaranteed path*. The "burned-in vs sidecar are alternatives, not layers"
point is made in full three times; "don't switch fonts to fix wrapping" twice,
plus once more in ch1 v1's record. The "a document can pass `build_subtitles.js`
and still overflow" argument appears in `SKILL.md`, `CLAUDE.md`, **and** a 20-line
header comment in `check_caption_fit.js` — cut the script's header to a two-line
pointer.

The content is correct throughout; this is about saying each thing once.

### 1.3 Extract the shared caption geometry

`build_subtitles.js` and `check_caption_fit.js` share seven copy-pasted
definitions — `FORMATS`, `SAFETY`, `MAX_LINES`, `NARROW`, `WIDE`, `charWidth`,
`parseNarration`. `check_caption_fit.js` admits it in a comment ("kept identical
to `build_subtitles.js`") with nothing enforcing it.

Extract to `scripts/lib/caption_metrics.js` and `require` it from both. Change
Anton's metrics or the margins in one file today and the pair silently disagrees
about whether a cut fits — the exact failure the two scripts exist to prevent.
Must stay dependency-free; `.claude/settings.json` denies `npm install`.

### 1.4 Stop re-tabulating RPM and risk

`Blueprint` §4 and `Publish_Sequence` Phases 1–4 carry **all twenty RPM ranges and
all twenty risk labels twice**. Currently in sync — verified across all twenty —
but that is forty figures maintained in two places. The RPM caveat is duplicated
near-verbatim as well, with the same four variables in the same order.

Have `Publish_Sequence` carry the ordering rationale and reference the Blueprint
for RPM and risk.

### 1.5 `CLAUDE.md` names its reference document four times

Four separate declarations that `inner-canon-ch1-trailer-v1.md` is the reference —
as a tree comment, for Finishing steps, as "the current reference", and for
trailer format. When the reference moves to a newer cut, that is four edits.

### 1.6 Prune `.claude/settings.json`

- Bare `"mcp__higgsfield"` in `allow` almost certainly grants the whole server,
  making the six specific `mcp__higgsfield__*` entries below it decorative.
- `Bash(rm -rf *)` is subsumed by `Bash(rm *)`.
- `Bash(npm run *)` is dead — there is no `package.json`.
- **Missing**, all prescribed by `SKILL.md` or the reviews: `reframe` (the
  documented way to derive a 16:9 master), `upscale_video` (the longform
  finishing step), `media_upload` (the `assets/` fallback path).

### 1.7 Small corrections in `CLAUDE.md`

- The audit bullet in § YouTube compliance has a double space, a dropped capital
  ("*. provide a summary*") and a lowercase "youtube's" — and it duplicates the
  prompt-stage bullet directly beneath it.
- `README.md` is one sentence, a verbatim copy of `CLAUDE.md`'s opening
  paragraph. Nothing about what the folders mean, how to build a sidecar, or how
  to finish a render.

---

## 2. An incoming-script checklist

The two script reviews are ~400 lines each and share an identical seven-section
skeleton, with four headings word-for-word identical (`## 1. Blockers`,
`### 1.3 The timing grid is not the assembler's grid`, `### 1.4 Aspect ratio is
inverted`, `## 2. Missing required sections`), plus a `## 4. Audio` section that
dismantles a non-guqin scoring proposal in both, a `## 6. …port it upstream`, and
a `## 7. Priority order`.

The bodies are **not** copy-paste — they are independently re-argued in different
words, which is worse for maintenance, because it cannot be found by search.

Five findings recur because they are properties of the pipeline, not of either
script, and will recur for every submission:

1. the 10s block grid cannot express sub-second timing
2. trailers are 9:16; two masters means two clip bills, `reframe` is the cheap path
3. the ten required document sections, and that `build_subtitles.js` fails without
   a narration table
4. non-guqin scoring is a series-wide licensing change, not a per-cut choice
5. the same three naming reconciliations — *Chronicle of Balance*, *Xiao-Lei*,
   jade → blue cheongsam

Add `docs/incoming-script-checklist.md` so review three is a diff against a
checklist rather than a third essay. Fold in the items both reviews list as
**Open** under "port it upstream", which are what a checklist would ask for
anyway: a **`Framing:`** header line, a **thumbnail direction** convention, the
**title/thumbnail banned-terms list**, **`Residual risk:`** as a one-line verdict,
and the **honest-line posture** (*"Almost every mechanism was wrong. What it
noticed is still true"*) as a series-level framing rule.

---

## 3. Blueprint conformance

### 3.1 The Ch 46 hook argues with its own cut

`Blueprint` § Ch 46 reads *"The Ancient Science of Sleep — and Why the Old Sleep
Badly."* **"Ancient Science of"** asserts scientific status for a mechanism the
ch46 trailer's block 7 calls wrong — the title would contradict the payoff.

This is the last instance of a conflict already fixed for Ch 1. The ch46 review §3
proposes: *"What the Oldest Chinese Medical Text Got Right About Sleep — and
Wrong"* or *"They Were Wrong About Why. They Were Right About What."*

### 3.2 The Blueprint does not record ch46's production status

`Blueprint` § Ch 01 points at `output/episode-1/`; § Ch 46 does not mention that a
pre-render cut exists. If the Blueprint is the document that decides what gets
produced next, it should say what is already in flight.

Per the publish sequence, **Ch 06 is next** (Ep 3), then Ch 72, then Ch 42.

---

## 4. Backfill defects in the surviving documents

`CLAUDE.md` forbids rewriting a prior version's document, since its production
record is reproduction evidence. Everything below is an annotation or a correction
of a demonstrably wrong figure, not a rewrite.

### 4.1 The ch1 credit table has three different totals — take this first

`inner-canon-ch1-trailer-v1.md` § Credit spend states the run three ways:

- prose: measured balance delta **94.9** (1,037.3 → 942.4)
- table rows: 4.2 + 2 + 80 + 5.4 + 0.4 + 3.9 = **95.9**
- total row: **98.8**

The per-take rates inside the table also disagree — 5.4 ÷ 9 = 0.6/take against
3.9 ÷ 4 = 0.975/take.

Reconstructing from the document's own job IDs, the run generated **20 takes**
(7 voice-measurement + 8 final + 5 superseded). At 0.6/take:
`12.0 + 2 + 80 + 0.4 = 94.4`, against a measured 94.9. At 1.0/take it would be
102.4, which the balance delta rules out.

**So `SKILL.md`'s ~0.6/take figure is correct and is confirmed by the measured
delta.** Reconcile the table to one total and record the take count.

### 4.2 …and ch46's preflight draws the wrong conclusion from it

`inner-canon-ch46-trailer-v1.md` § Cost preflight says a voice take "preflights at
1 credit, not the ~0.6 that `SKILL.md` and the ch1 document both carry", and
infers "~0.78/take averaged over **16** takes, which matches neither."

That inference used the wrong take count — there were 20, not 16. With 20 the
delta lands on ~0.6 and the discrepancy disappears: the 1-credit preflight is a
round-up floor, not the billed rate. Correct the note and the budget line; ch46
currently over-budgets voice by ~60%.

### 4.3 ch1 v2 quotes superseded take durations

`inner-canon-ch1-trailer-v2.md` § Narration states *"Take durations: 5.9s, 6.9s,
2.6s, 6.6s, 8.0s, 5.0s"*. Its own production record says **6.5 / 6.6 / 2.6 / 7.2 /
7.1 / 5.0**. Four of the six quoted figures are the **superseded** takes' durations
(5.93, 6.91, 6.60, 8.03 — all listed in v1's superseded table).

`build_subtitles.js` reads the correct figures off the record, so the sidecar is
right and only the prose is wrong. Fix the prose.

### 4.4 Two stale cross-references in the ch1 documents

- `inner-canon-ch1-trailer-v2.md` § intro cites `Ep01_Trailer_Script.md` **lines
  57–66**. Prepending the archive banner shifted the `VERTICAL CUT` section to
  **lines 66–76**. Cite the section by name so it cannot drift again.
- `Ep01_Trailer_Script.md`'s archive banner describes v2 as **(0:38)**. v2 is
  **0:60** — the script's 0:38 spec became six blocks on the 10s grid, which v2
  explains in its own source-script mapping.

### 4.5 `build_subtitles.js` crashes on flag-first arguments

```
$ node scripts/build_subtitles.js --format 16:9 <doc>.md
Error: ENOENT: no such file or directory, open '16:9'
```

`args.find(a => !a.startsWith("--"))` picks up `16:9` as the document path.
`check_caption_fit.js` handles the same case correctly — port its approach.
Latent today because the documented usage puts the path first; it will bite on
the first longform cut.

### 4.6 Pipeline facts copied into cut documents

Both surviving cut documents restate `SKILL.md` rather than pointing at it — the
three-column narration-table warning, the 9:16-only aspect rule, the guqin
licensing argument, and the prompt-stage audit note all appear in ch1 v1 **and**
ch46 in near-identical wording. Each copy can go stale independently.

Lower priority than the rest of §4, and it edits documents whose records are
evidence, so it should ride along with §4.1–4.4 rather than being its own pass.

---

## 5. Deferred by decision — chapter numbering

**Deferred 2026-08-02 by the repo owner: "ignore the chapter numbering issues for
now, follow the blueprint closely."** Recorded so the decision is visible and
reversible, not because it is being actioned.

The Blueprint's chapter numbers are a curated slate index. They coincide with the
received text for chapters 1–5 and diverge from index 6 onward — e.g. Blueprint 06
is Su Wen 8, Blueprint 09 is Su Wen 17, Blueprint 46 is **Ling Shu 18**. All seven
Ling Shu parentheticals are `index − 35` and none matches the received text; this
is established in `inner-canon-ch46-trailer-script-review.md` §1.1, which fixed
the citation for that cut.

Still live:

- `CLAUDE.md` and `SKILL.md` both describe `episode-<N>` as "the Suwen chapter
  number". It is the Blueprint slate index, and `episode-46` is a Ling Shu chapter.
- It breaks again on the next cut: publish-sequence Eps 3, 4 and 5 are Blueprint
  06, 72 and 42 → Su Wen 8, Ling Shu 64, Ling Shu 8. An `episode-6/` folder would
  collide with real Su Wen 6 (阴阳离合论), a different chapter.

**Where the evidence went.** Correct received-text numbers were carried by
`scripts/build_chapter_deck.js`, deleted in `d30c7e5`. Recover with:

```
git show b2d1053:scripts/build_chapter_deck.js
```

That file also put the canon at 162 chapters (81 Su Wen + 81 Ling Shu) against the
Blueprint's "80 chapters".
