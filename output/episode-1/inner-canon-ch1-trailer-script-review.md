# Script review — `Ep01_Trailer_Script.md` ("CHRONICLE OF BALANCE — The First Sentence")

Review of the submitted Episode 01 trailer script against `CLAUDE.md`,
`.claude/skills/higgsfield-production/SKILL.md`, `docs/`, and the four shipped
trailers (ch2, ch3, ch5, ch8). Chapter 1 is 上古天真论 · *Natural Purity of High
Antiquity* — the publish-sequence Ep 1 anchor.

**Verdict:** the writing is the strongest thing this repo has received. The
strategy section, the withhold, and the thumbnail direction are all better than
what the shipped cuts do, and should be absorbed upstream. But as submitted it is
a **source script, not a production document**, and it cannot be handed to the
house pipeline as-is: the timing grid, the speaking cast, the aspect ratio, the
disclaimer string and the series title all diverge from the repo. One content
issue is more serious than any of the format ones — the central claim is aimed at
a misquotation.

Nothing here needs the script thrown out. Everything below is a re-cut.

---

## 1. Blockers — the cut cannot be produced until these are resolved

### 1.1 The premise is aimed at a misquotation (most important)

The trailer's whole idea is *"the founding text opens with a sentence that is
false."* The sentence it quotes is Su Wen 1:

> 余聞上古之人，春秋皆度百歲，而動作不衰

Three things about that line as the script uses it:

1. **It is the emperor's line, not the physician's.** In the source it is Huangdi
   speaking to Qi Bo. Shot 2 gives it to **Dr. Qi** — the Qi Bo analogue — which
   inverts the source and, separately, inverts the cast sheet: `CLAUDE.md` gives
   Dr-Qi "quiet mastery… always three steps ahead," and here she is the credulous
   one reading a boast while a child corrects her.
2. **It opens with 余聞 — "I have heard."** The text flags its own opening claim
   as hearsay in the same breath. The script drops those two characters, which is
   what makes the claim strong enough to call false.
3. **The very next sentence is the emperor doubting it** — 時世異耶？人將失之耶？
   ("Is it that the times are different, or that people have lost it?"). And Qi
   Bo's reply is conditional: 上古之人，**其知道者** — *those among them who knew
   the Way* — not everyone.

So *"the text is lying to me on the first line"* (shot 8) is not quite true, and a
channel whose entire differentiator is contradicting uncritical ancient-wisdom
content cannot afford to be the one caught overstating. The script already
contains its own correction — Dr. Qi's *"It is persuading you on the first line.
That is not the same thing"* (shot 9) is the accurate reading.

**The fix is also a better trailer.** Move the quoted line to **Fan-di** (correct
per source, correct per cast sheet, and it lets him be flattered by his own
hearsay), restore *"I have heard,"* and make the reveal that **the text's own
first speaker doesn't believe it either.** That is more surprising than "the text
is wrong," it is unimpeachable, and it keeps the withhold intact.

Two secondary accuracy notes:

- **"the most copied medical text in East Asian history"** (shot 3) is a
  superlative that a commenter can contest (Shanghan Lun, Bencao Gangmu). The
  house line from `docs/…Blueprint.md` — *China's oldest surviving medical
  classic* — is defensible and already established. Use it.
- **"They died younger than the people complaining about them"** (shot 7) is the
  trailer's one empirical assertion and the one that will draw fire. It is
  broadly supportable (Neolithic vs. Han paleodemography), but the production
  document needs to carry the source, per the Blueprint's "honest sourcing" line.

### 1.2 Six speaking character parts, and no character voice has been cast

> **RESOLVED 2026-08-01 — the full cast is now voiced permanently.** Narrator
> **Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346`, Fan-di **Xavier**
> `43173c95-3ec8-446a-a162-6504332c578b`, Dr-Qi **Vesper**
> `c3204739-4084-41a3-9dc5-c805b307ec18`, Lei-Gong **Zane**
> `9ddbff06-a984-4c0d-b641-4d8ca846bf60` — all `seed_audio` presets, recorded in
> `CLAUDE.md` and the skill's step-3 table. Arthur also **supersedes Julian** as
> the narrator, so chapter 1 is the first cut in a new narrator voice.
>
> The casting blocker below is cleared: Ep 1 *may* keep its character lines. Two
> constraints in it survive and still bind — **one speaker per 10s block**
> (`explainer_video` takes exactly one `audio` per item), and **no voice has a
> measured rate yet**, so the 6–8s / 21–24 word budget in §5 is Julian's and must
> be re-measured on Arthur before any script is written to it. The narrator-only
> draft in §5 remains the lower-risk option for the launch cut, but it is now a
> preference, not a constraint.

*(Original finding, kept as the reasoning behind the decision:)*

Of the ~135 spoken words, most are **Dr. Qi, Fan-Di and Xiao-Lei dialogue**.

- `CLAUDE.md`: *"Fan-di, Dr-Qi and Lei-Gong appear in trailers but never speak, so
  no character voices are cast yet."*
- `SKILL.md` voice table: all three are ***not yet cast***.
- The ch8 document already flagged this exact trap in its own runtime levers: a
  reaction beat "means a character speaks, which this series has not yet cast a
  voice for — Fan-di's voice would have to be chosen and recorded into the cast
  sheet first."

Casting is **series-permanent**: whichever voices are picked become recurring for
every longform episode. That is a large irreversible decision to make in service
of a trailer.

There is also a hard tool constraint: `explainer_video` takes **exactly one
`audio` per block**. Shots 3→4 (NARR then FAN-DI, 0:13–0:22) and shots 8→9
(FAN-DI then DR. QI, 0:38–0:50) each put two speakers inside one 10-second
window. Every speaker change forces its own block.

**Recommendation: re-cut narrator-only** (see §5 for a working draft). The house
pattern already proves it — ch2/3/5/8 all carry their whole argument on Julian,
and `SKILL.md` notes that is deliberate, because *the narrator carries every
compliance hedge*. If the character-voice version is wanted anyway, it must be
its own decision: `list_voices` → audition → record three `voice_id`s in the
`SKILL.md` step-3 table *before* generating.

### 1.3 The timing grid is not the assembler's grid

`explainer_video` assembles **fixed 10-second blocks**: a short take is centred, a
slightly long one is sped up pitch-safely, and the video is never stretched. It
has no frame-accurate cut, no beat control, no gap.

The script is 13 cues at 2–8 seconds each, and much of its power is in
sub-second timing that the pipeline cannot express:

| Script asks for | What the pipeline does |
|---|---|
| Shot 5 record-scratch + total silence at 0:22 | no SFX layer; audio is the narrator take only |
| Shot 12 hard cut to black **on the last syllable** | cut lands on the 10s boundary, wherever the syllable falls |
| Shot 13 title card, **2 seconds** | minimum unit is a 10s block |
| 1:08 total runtime | blocks × 10s → 60s or 70s, never 68s |
| 0:38 vertical cut | → 40s |

Both runtimes are inside `CLAUDE.md`'s 30–90s window, so this is purely a
re-timing job — but it is not optional, and it is exactly what ch8 did when it
re-cut a five-beat 0:60 master into six even blocks. **A `## Source-script
mapping` table is required** (`CLAUDE.md`, `SKILL.md` §5.5) — §5 below drafts it.

If the frame-accurate rhythm is genuinely non-negotiable, that is a different
production route: render the clips on Higgsfield and cut the trailer by hand in
an NLE. Say so explicitly; don't discover it at assembly.

### 1.4 Aspect ratio is inverted

The script leads with **"16:9 master + 9:16 vertical cut."** `CLAUDE.md`: *"Render
trailers in 9:16 vertical format; long form in 16:9 landscape."* All four shipped
trailers are 9:16 720×1280, the whole style-key lineage is 9:16 768×1376, and
`build_subtitles.js` labels its `16:9` profile "longform episode."

Also a cost point: generating two masters is **two full clip bills**. The cheap
path is one master plus the `reframe` tool on the finished cut. Whichever way it
goes, the subtitle sidecar must be built per format — the caption geometry
differs (720-wide vertical gives captions roughly half the horizontal room).

**Recommendation:** 9:16 is the master (house rule, and it is where the Ep 1
audience is), 16:9 derived by `reframe` if a landscape master is wanted.

### 1.5 The series is named wrong — three drifts ch8 already resolved

The submitted script carries the identical three naming conflicts the Chapter 8
source script had, resolved there in favour of `CLAUDE.md`:

| Script says | Repo says | Where |
|---|---|---|
| **CHRONICLE OF BALANCE** | ***The Emperor's Inner Canon*** | `CLAUDE.md`, Blueprint §title convention |
| **XIAO-LEI** | **Lei-Gong** | `CLAUDE.md` core cast |
| **DR. QI (jade)** | **Dr-Qi**, **BLUE** cheongsam | `CLAUDE.md` core cast |

`FAN-DI (gold)` is correct. All reconciliations go in the source-script mapping
section, as ch8 did.

---

## 2. Missing required sections

The repo's production-document layout (`CLAUDE.md`; `SKILL.md` §5; reference
`output/episode-8/inner-canon-ch8-trailer-v1.md`) is ten sections in order. The
script has the equivalent of three.

| # | Required section | Status |
|---|---|---|
| 1 | Title + **Chinese chapter title** + cut short name | ✗ — needs **上古天真论篇第一**; "The First Sentence" is a good short name |
| 2 | Final video link + resolution / duration / format | ✗ — added after render |
| 3 | Disclaimer **blockquote** | ✗ — see §3 |
| 4 | Narration table (block / beat / line) + preset + speech rate | ✗ — see §5 |
| 5 | Source-script mapping + naming reconciliations | ✗ — required, see §1.5, §5 |
| 6 | Numbered shot list keyed to the blocks | ~ — a 13-cue shot list exists but is not keyed to blocks |
| 7 | Production record (Higgsfield job IDs, durations, credit spend) | ✗ — added during the run |
| 8 | Deliverables the assembler cannot produce | ~ — partial, see §3 |
| 9 | `## Compliance notes (YouTube)` — one bullet per repo rule | ~ — good content, wrong shape, gaps in §3 |
| 10 | Runtime levers (cut to 0:30 / stretch) | ~ — the vertical-cut spec is most of this |

Two mechanical consequences worth naming:

- **`build_subtitles.js` will fail on this document.** It parses the narration
  table (`| 1 | beat | line |`) and the production record's `**Voiceover**` line;
  with neither present it exits with *"no narration table found."* The `.srt` /
  `.vtt` sidecars are **tracked, required deliverables** — not satisfied by
  burned-in captions.
- **The step-0 cost gate has not been run.** `SKILL.md`: nothing generates before
  `balance` + a costed estimate + a Draft/Full confirmation. Order-of-magnitude at
  the 2026-07-31 snapshot, `seedance_2_0_mini`, 6 blocks: **~66 credits draft
  (480p) / ~156 full (720p)**, plus ~5.9 fixed. Double the clip line if a second
  aspect master is generated rather than reframed.

---

## 3. Compliance — strong reasoning, three real gaps

The COMPLIANCE table is the best-argued one submitted to this repo, and §90's
note on why the strong claim is *safer* than the softened one is correct. Three
things are missing or wrong, and one is a hard `CLAUDE.md` requirement.

**Gaps:**

1. **The history lower-third is absent.** `CLAUDE.md` mandates *"Presented as
   history & philosophy"*, small, on screen **within the first 10 seconds**, on
   every cut. The script's cards list has the disclaimer card and the credit, but
   not this. Shots 1–2 are where it goes.
2. **The human editorial credit is description-only.** `CLAUDE.md` requires it
   *"on the end card **and** in the description."* The 2-second title card at
   1:06–1:08 has no credit line — and at 2 seconds there is no room for one, which
   is another argument for folding the title into a full block.
3. **The disclaimer string is not the repo's.** `CLAUDE.md` mandates verbatim:
   > *A dramatized adaptation of a classical philosophical text. Not medical advice.*

   The script uses *"A series on the history and philosophy of classical texts.
   Not medical or health advice."* The script's version is arguably better English
   for a series-level card — but it is a **series-wide change**, and changing it in
   one cut's script silently desynchronises Ep 1 from four shipped cuts. Either
   use the repo string, or propose the change to `CLAUDE.md` as its own edit.

**Bullets the audit is missing** (the repo wants one per rule, so the reasoning
survives with the cut):

- **Mortality / aging** — the trailer's subject is people dying younger than
  advertised. The bar graphic and the "portraits, not bodies" rule are satisfied,
  but the audit has to *say so*; right now an auditor has to infer it.
- **Supernatural hook / withhold.** `CLAUDE.md` requires supernatural hooks to be
  "explicitly debunked by the payoff," and titles/thumbnails to "honor the
  educational payoff, not pure mystery clickbait." This trailer deliberately
  withholds (*"No answer is given. The answer is the episode."*) — which reads,
  at a glance, like a violation. **It isn't**, and the document should argue why:
  the hook here *is* the debunk, the trailer delivers a true educational payoff
  on screen, and the withheld item is a historiographic question, not a mystery
  box. Make that argument explicitly or a future reviewer will re-litigate it.
- **Prompt-stage gate.** `CLAUDE.md` and `SKILL.md` both require the audit to run
  on prompts *before* generating. Reading the shot list against ch8's `nsfw`
  incident: nothing here trips the restraint/bound-figure filter. Shot 5's hand
  slammed flat on a scroll is an object-and-gesture beat, and shot 7 is a graph.
  Low risk — worth recording as checked.

**One conflict the script wins, and it has a consequence:** the banned-terms rule
(*no longevity, live to 100, ancient secret, anti-aging*) is good policy — but the
Blueprint's own Ch 1 hook is literally ***"The 2,000-Year-Old Secret to Living
Past 100."*** Both banned terms, in the repo's own planning doc. One of the two
has to give. Side with the script; that means
`docs/Emperors Inner Canon Series Blueprint.md` line 146 needs updating so the
title/thumbnail rule and the slate don't contradict each other.

---

## 4. Audio — the guqin argument doesn't hold

> *"Scoring the trailer with bell, sub-bass and silence decouples the trailer's
> ship date from the licensing blocker entirely."*

It doesn't. It swaps one licensing dependency for three:

- A struck bell, a record-scratch and a sub-bass riser are **licensed assets with
  Content-ID exposure** exactly like a guqin recording. Nothing about them is
  public-domain by default.
- **None of them can be produced by this pipeline.** `explainer_video` replaces
  per-block audio with the narrator take; native clip audio is discarded. Every
  sound cue in the script is a manual edit-time addition — the same manual step
  the guqin was.
- `CLAUDE.md` says **licensed guqin only**. Bell/sub-bass is a deviation from a
  standing series rule, not a per-cut scoring choice, and it should be raised as a
  `CLAUDE.md` change rather than introduced in one script.

The *"silence is the instrument"* instinct is right and worth keeping — but on
the house grid, silence is what a 10s block sounds like around a centred 6.5s
take. It comes free; it just can't be placed to the frame.

---

## 5. Suggested re-cut — narrator-only, 6 × 10s, 9:16 (60s)

Offered as a starting point, not a finished narration. Written to the settled
house metric (**6–8s per block, ~21–24 words**, short clauses so the captions
break where the speech breaks) — but that metric was measured on **Julian**, and
the narrator is now **Arthur**. Generate block 1 first, read its duration, and
re-scale the remaining five to Arthur's actual words/second before committing.
Structure preserves the
script's own **claim → contradiction → escalation → withhold**, and restores the
source.

| Block | Beat | Narration |
|---|---|---|
| 1 | The claim | Two thousand years ago, the founding text of Chinese medicine opens on a boast: the ancients lived a hundred years, and never weakened. |
| 2 | Whose line it is | The line is the emperor's own, and he prefixes it with three careful words: I have heard. He does not say he believes it. |
| 3 | The correction | He was right to doubt. They did not live to a hundred; they died younger than the men who envied them. |
| 4 | Not exaggerated — false | Not exaggerated, not poetic license — false. And every scribe who copied the canon copied that sentence out, word for word, unchanged. |
| 5 | The physician's hedge | The physician's answer is quieter, and conditional. Those among them who knew the way. Not everyone. Never everyone. |
| 6 | The withhold / title | So why did anyone keep copying it, faithfully, for two thousand years? The Emperor's Inner Canon. Chapter One — The First Sentence. |

Word counts run 18–24. Block 5 is short but hard-stop heavy, which is how ch8
stretched a 22-word line from 4.7s to 6.3s — **measure the first take before
committing the other five**, per the two-sided ch5/ch8 lesson.

### Source-script mapping (draft)

| Source shot | Source timing | Trailer block |
|---|---|---|
| 1–2 — bell, ink, the quoted line | 0:00–0:13 | 1 |
| 3 — "most copied medical text" | 0:13–0:18 | 2, re-aimed onto 余聞 and re-sourced |
| 4 — Fan-Di's question | 0:18–0:22 | folded into 2 |
| 5–6 — the interruption, "It's false" | 0:22–0:32 | 3 |
| 7 — the falling bar graphic | 0:32–0:38 | 3 + 4 |
| 8 — Fan-Di deflated | 0:38–0:44 | 4 |
| 9 — "It is persuading you" | 0:44–0:50 | 5, re-aimed onto 其知道者 |
| 10 — montage | 0:50–0:56 | 6 |
| 11 — the withheld question | 0:56–1:02 | 6 |
| 12–13 — black, title card | 1:02–1:08 | 6 |

Naming reconciliations, resolved in favour of `CLAUDE.md`: *Chronicle of Balance*
→ **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi's *jade* →
**blue** cheongsam.

### Other production notes for the re-cut

- **Style key** chains off the ch8 head `2cfd7596-2d93-4d14-aae4-448b3b9b9f51`,
  swapping ch8's storehouses/rivers/wrist motif for a Ch 1 motif — the bamboo
  scroll splitting into scrolls of different ages, with the seven-and-eight arcs
  beneath it. Record it as the next lineage entry.
- **Shot 10's montage assets don't exist.** "The well graphic," "the dual
  seven-and-eight arcs," "a scroll splitting into a dozen scrolls" read as re-used
  cutaways from the Ep 1 longform — but no longform exists in `output/` yet, and
  every clip in this pipeline is generated fresh from the style key. Treat it as
  one new clip. Separately: **the draining-well image is Chapter 2 material**
  (渴而穿井, 四气调神), not Chapter 1 — check before it becomes the Ep 1 motif.
  The seven-and-eight arcs are correctly Ch 1.
- **Runtime levers.** The script's vertical-cut spec is already most of this
  section and is more concrete than anything in the shipped cuts — port it. On a
  6-block grid, **cut to 0:30** = drop blocks 2 and 5, run 1 → 3 → 4 → 6. The
  retention-cliff rule survives the translation: the "false" beat is block 3,
  landing at 0:20 in the full cut and **0:10 in the 0:30 cut**.
- **Ordering.** `docs/Emperors_Inner_Canon_Publish_Sequence.md` batches all of
  Phase 1 before launch. A teaser shipping ahead of its episode is fine and is the
  script's stated intent — just note in the document that the companion longform
  does not exist yet, so nothing in the trailer can be cut from it.

---

## 6. What this script does better than the repo — port it upstream

Genuinely: three of these belong in `CLAUDE.md` / `SKILL.md`, not in one cut.

1. **The STRATEGY section.** *"The trailer does not summarise the episode. It sells
   one idea and refuses to resolve it."* No shipped cut states its own thesis, and
   all four would be sharper if they had to. Worth adding as a standard section.
2. **Thumbnail direction.** The repo has no thumbnail convention at all, and
   `CLAUDE.md` explicitly makes thumbnails a compliance surface. *"It reads as
   objection, not as ancient secret"* is exactly the right test.
3. **Title/thumbnail banned-terms list.** Concrete, checkable, and it closes the
   gap between the compliance rule and the Blueprint's own hooks (see §3).
4. **The vertical-cut spec** — retention cliff, centre-safe reframe, "the
   hand-on-scroll gesture must stay in frame." More useful than the shipped
   runtime-lever sections.

---

## 7. Priority order

| | Item | Why |
|---|---|---|
| **P0** | Fix the misquotation — line to Fan-di, restore *I have heard*, restore 其知道者 (§1.1) | Credibility; the whole premise rests on it |
| ~~P0~~ | ~~Decide narrator-only vs. casting three permanent voices~~ — **done**, cast Arthur / Xavier / Vesper / Zane (§1.2) | Resolved 2026-08-01 |
| **P0** | Measure Arthur on one take before scripting to the 6–8s budget (§1.2, §5) | The budget is Julian's; a mis-sized script is six re-takes |
| **P0** | Re-cut to the 10s block grid + source-script mapping (§1.3) | The cut is unbuildable otherwise |
| **P1** | 9:16 master; 16:9 by `reframe` if wanted (§1.4) | House rule + doubles the clip bill if got wrong |
| **P1** | Series title, Lei-Gong, blue cheongsam (§1.5) | Four shipped cuts already say otherwise |
| **P1** | Add history lower-third; credit on the end card; repo disclaimer string (§3) | Hard `CLAUDE.md` requirements |
| **P2** | Rewrite as the full 10-section production document (§2) | Reproducibility; `build_subtitles.js` depends on it |
| **P2** | Run the step-0 cost gate before generating (§2) | `SKILL.md` hard gate |
| **P2** | Resolve the guqin/bell licensing argument (§4) | Deviates from a standing series rule |
| **P3** | Update the Blueprint's Ch 1 hook to clear the banned-terms list (§3) | Internal contradiction |
| **P3** | Port strategy / thumbnail / banned-terms sections upstream (§6) | Improves every future cut |
