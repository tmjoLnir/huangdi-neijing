# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **video-content-production repository**, not a software project. It holds production documents for a dramatized documentary series adapting the Huangdi Neijing (The Emperor's Inner Canon, the foundational classical text of Chinese medicine).

## Which file wins

Three files carry standing instructions, and they divide as follows. **Where two
of them touch the same subject, the owner below is normative and the other file
points at it rather than restating it.**

| | Owns |
|---|---|
| **`CLAUDE.md`** (this file) | **Policy** — who the cast is, the compliance rules, the production-document layout, what ships as a deliverable, git conventions |
| **`.claude/skills/higgsfield-production/SKILL.md`** | **Generation procedure and measurements** — order of operations, model names and parameters, prices, per-voice words/second, block geometry, the failure modes that have cost a paid re-render |
| **`.claude/skills/drive-context-memory/SKILL.md`** | **Context-memory procedure** — the Drive folder IDs, snapshot naming, the read/write call shapes, and the read path that silently corrupts a snapshot |

Rule of thumb: if it would still be true with a different generation service, it
belongs here; if it is a number someone measured or a call someone makes to an
API, it belongs in the skill that owns that API. Duplicating a rule across files
is how they drift — several instructions have already gone stale in one copy
while staying correct in the other. Add a pointer, not a second copy.

## Structure

One folder per book, one folder per chapter inside it, one markdown file per cut.
The current tree is:

```
CLAUDE.md
README.md
.gitignore                                  # renders out, .srt/.vtt deliberately kept in
.gitattributes                              # LF everywhere; media and art marked binary
.claude/
  settings.json                             # Bash + Higgsfield + Drive permission lists, SessionStart hook
  hooks/session-start.sh                    # reinstalls ffmpeg, the Anton font and wick on the ephemeral host
  skills/higgsfield-production/SKILL.md     # the house generation pipeline
  skills/drive-context-memory/SKILL.md      # cross-session memory, held in Google Drive
.github/
  workflows/docs-drift.yml                  # CI gate: check_docs_drift.js on every PR into claude/main
output/
  suwen/                                            # 素問 Basic Questions — chapters 1-81
    ch8/inner-canon-suwen8-trailer-v1.md            # RENDERED 2026-08-09, draft tier
    ch8/inner-canon-suwen8-trailer-v1.srt/.vtt      # sidecars, tracked
    ch8/inner-canon-suwen8-longform-v1.md           # pre-render
    ch13/inner-canon-suwen13-trailer-v1.md          # RENDERED 2026-08-10, draft tier
    ch13/inner-canon-suwen13-trailer-v1.srt/.vtt    # sidecars, tracked
    ch13/inner-canon-suwen13-longform-v1.md         # pre-render
    ch67/inner-canon-suwen67-trailer-v1.md          # pre-render
    ch67/inner-canon-suwen67-longform-v1.md         # pre-render
  lingshu/                                          # 靈樞 Spiritual Pivot — chapters 1-81
    ch8/inner-canon-lingshu8-trailer-v1.md          # pre-render
    ch8/inner-canon-lingshu8-longform-v1.md         # pre-render
    ch28/inner-canon-lingshu28-trailer-v1.md        # reference layout; pre-render
    ch28/inner-canon-lingshu28-trailer-v2.md        # RENDERED 2026-08-08, draft tier
    ch28/inner-canon-lingshu28-trailer-v2.srt/.vtt  # sidecars, tracked
    ch28/inner-canon-lingshu28-trailer-block-audit.md
    ch28/inner-canon-lingshu28-trailer-render-review.md
    ch28/inner-canon-lingshu28-longform-v1.md       # slate rank 1, publish slot 1; pre-render
    ch28/inner-canon-lingshu28-longform-v2.md       # pre-render
    ch28/inner-canon-lingshu28-translation-v1.md
    ch28/inner-canon-lingshu28-translation-v2.md
  # Every rendered cut also carries <cut>.srt and <cut>.vtt sidecars, tracked.
  # They are built from the take durations in the production record, so a
  # pre-render cut has none yet — build them once the voice takes exist.
assets/
  emperor-Fan.png                           # Fan-di style key art
  wise-Qi-2.png                             # Dr-Qi style key art
  witty-Lei.png                             # Lei-Gong style key art
docs/
  Chronicle of Balance Top20 Chapter Slate.md  # 162-chapter index, Top-20 slate, compliance audit
scripts/
  build_subtitles.js                        # node scripts/build_subtitles.js <cut-document>.md
  check_caption_fit.js                      # node scripts/check_caption_fit.js <cut-document>.md
  lib/caption_metrics.js                    # frame geometry + Anton metrics, shared by both
  check_docs_drift.js                       # node scripts/check_docs_drift.js [--fix] — asserts these docs are true
```

- `output/` — **two book folders, one chapter folder inside each**: `output/suwen/ch<N>/` and `output/lingshu/ch<N>/`. **`<N>` is the chapter's number within its own book, as the received text numbers it** — never a slate rank, a publish slot, or a sequential episode index. The book folder is what makes the number mean anything; see *Suwen and Lingshu are numbered separately* below, which is not a style note but the reason this folder exists. The chapters produced are the ones chosen off the Top-20 slate in `docs/`, so gaps in both folders are expected and are not missing work. **Documents carry the book in the filename too**, because they get quoted by basename — in commit messages, in review, and throughout `SKILL.md` — where the path is not there to disambiguate them. Trailers are `inner-canon-<book><N>-trailer-v<M>.md` (30-90 sec), longform production documents are `inner-canon-<book><N>-longform-v<M>.md` (11:30-20 min), translations are `inner-canon-<book><N>-translation-v<M>.md`. Where a source script is reviewed against these conventions before production, that review sits beside the cut as `inner-canon-<book><N>-trailer-script-review.md`. `<book>` is `suwen` or `lingshu` — lowercase, no separator before the number, e.g. `output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md`. Render trailers in 9:16 vertical format; long form in 16:9 landscape format; record the actual resolution/format at the top of each document.
- `.github/workflows/` — CI. One job, `docs-drift.yml`, which runs `check_docs_drift.js` on every pull request into `claude/main` and on every push to it. It is read-only: it reports drift and never pushes a fix. The caption checker is deliberately not run there — it exits non-zero on any document with no narration table, so it is a readability report rather than a gate.
- `assets/` — character style-key art referenced by every generation job.
- `docs/` — one file, `Chronicle of Balance Top20 Chapter Slate.md`: a 162-chapter index of both books, the ranked **Top-20 slate** that decides which chapter is produced next, a series-level compliance audit, and the **publish sequence**. **Publish order is not chapter order** — the sequence deliberately holds the foundational chapters back, so check it before assuming what ships next. (An earlier series blueprint and a ctext source dump also lived here and were deleted; the blueprint's chapter index was the source of the `episode-<N>` numbering error described below, so do not restore it as a numbering reference.)
- `scripts/` — `build_subtitles.js`, which generates a cut's `.srt`/`.vtt` sidecar from its own production document, and `check_caption_fit.js`, which measures every narration clause against the two-line caption budget. **Run `check_caption_fit.js` before generating voice takes** — a clause over the budget is split across three or four cues, which is caption churn on screen, and rewording is free before a take is recorded. The sidecar guarantees the wrap either way, so read the report as a readability signal rather than a render failure; the skill's **Subtitles** section explains why its exit code is not a gate. Third is `check_docs_drift.js`, which asserts that *this file and `README.md`* still describe the repository — that the tree above lists every document that exists and nothing that does not, that each file's book and chapter agree with the folder holding it, that a cut calling itself RENDERED has the sidecars to prove it, that every script, skill and workflow is documented and every skill has a row in *Which file wins*, and that `README.md`'s layout block, script list and spelled-out counts still agree with what the repo holds. **Run it after adding, renaming, moving or rendering anything under `output/`.** Unlike the caption check a clean repo really does exit 0, so it is safe to gate on, and `.github/workflows/docs-drift.yml` gates on it for every pull request into `claude/main`.
  - **`--fix` applies the mechanical subset and reports the rest.** It will file a document into the tree, drop an entry whose file is gone, and correct an annotation the document contradicts — corrections whose full content is derivable from the repo. It deliberately will not add the tree entry for a new script, skill or workflow, or update a stale count, because those need a sentence somebody has to write and a bare path silences the check without telling anybody anything. Read the diff afterwards; it edits a file every session loads in full.

### Suwen and Lingshu are numbered separately

**The Inner Canon is two books of eighty-one chapters each, numbered
independently, so a bare chapter number is ambiguous by construction.** Suwen 28
(通評虛實論) and Lingshu 28 (口問) are different chapters. So are Suwen 12 and
Lingshu 12 — and that pair is live, not hypothetical: the Top-20 slate schedules
**Lingshu 12 at publish slot 7 and Suwen 12 at slot 9**. Under a single flat
`episode-<N>` tree those two collide on the folder *and* on every filename
inside it. Suwen 4/Lingshu 4 and Suwen 11/Lingshu 11 are already-produced pairs
with the same problem.

The rule is structural — a folder you cannot file into wrongly — rather than a
warning, because the warning was written into three separate documents and the
numbering still went wrong. Two folders were named off a series-blueprint index
instead of off the received text:

- **`output/episode-46/` held Ling Shu 18** (營衛生會), not chapter 46 — that
  blueprint's Ling Shu entries all ran `slate index − 35`. Meanwhile **Lingshu 46**
  (五變) is a real chapter, ranked 19 on the slate at publish slot 18, so the
  folder name was not merely wrong: it was occupying the name a scheduled chapter
  needs.
- **`output/episode-6/` held Su Wen 8**, by the same index.

**The migration is done — no `episode-<N>` folder remains.**
`output/episode-28/` became `output/lingshu/ch28/` by `git mv`, with the book
added to each filename and every cross-reference inside the three documents
updated. `output/episode-1/` (Suwen 1), `output/episode-6/` (Su Wen 8) and
`output/episode-46/` (Ling Shu 18) were **deleted from the repo** rather than
migrated, so that content now lives only in git history. Treat any `episode-<N>`
path quoted in an old commit message, an old PR, or an archived document as dead
— do not recreate one to match it.

**The sweep glob gains a level**: `node scripts/check_caption_fit.js
output/*/ch*/*-v*.md`. Both scripts take paths and hold no folder assumptions of
their own, so nothing in `scripts/` changes except usage comments.

**Cite the book, on screen and in speech — never a bare chapter number.**
*Lingshu 28*, *Ling Shu 18*, *Suwen 1*, or the Chinese title. A bare "Chapter 28"
sends a checking viewer to the wrong text about half the time, and citation
accuracy is the channel's stated differentiator. The per-cut compliance notes
already record this as *citation accuracy*; keep recording it.

Each production document contains, in order:
  - The cut's title, the chapter's Chinese title, and the cut's short name.
  - A link to the final rendered video (plus its resolution/duration/format).
  - The compliance disclaimer as a blockquote.
  - Narration broken into timed blocks (table: block / beat / narration line), naming the narrator preset and speech rate used.
  - Where a cut was re-timed off a source script, a **source-script mapping** table (source beat → blocks) plus any naming reconciliations made against this file.
  - A numbered **shot list** matching the narration blocks.
  - A **production record** with the generation-service (Higgsfield) job IDs for every asset — style key image, video clips, voiceover takes, final assembly — then **reproduction notes** on anything that went wrong and how it was resolved. Keep superseded job IDs, marked as superseded; they're evidence for the next cut.
  - **Deliverables the assembler cannot produce** — on-screen text and credits, added by hand at edit time, plus music, which the assembler can mix in but never generate, closing with a **Finishing steps** subsection: the ordered procedure that turns the delivered render into an uploadable file. Write it with *this* cut's own timings, cue numbers and block boundaries, never as a generic recipe — those numbers differ between versions of the same chapter, and that is precisely where the mistakes happen. **Model this section on a cut that actually shipped one** — `output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md` or `output/suwen/ch8/inner-canon-suwen8-trailer-v1.md`, whose finishing passes were executed rather than planned. The pre-render v1 shows the section order but has no real timings in it.
  - **Compliance notes (YouTube)** — the per-cut audit required below.
  - **Runtime levers** — which blocks to drop to cut shorter, which beats to add to stretch longer.

When adding a new trailer or episode document, follow this same layout so production records stay reproducible.
`output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md` is the current reference
— it carries the full section order above, including the source-script mapping.

**It is a layout reference, but it is pre-render, so it shows an empty
production record.** For a *filled* one — job IDs, **credit spend** reconciled
against the preflight estimate, an **Assembly** record of delivered geometry and
flags — read a cut that actually rendered. Two have:

- **`output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md`** — rendered
  2026-08-08. Its credit-spend table is the one to read first: 103.4 actual
  against a ~86 preflight, and it names *why* the estimate was low.
- **`output/suwen/ch8/inner-canon-suwen8-trailer-v1.md`** — rendered 2026-08-09,
  and the better model for the deliverables table, because it records **whole
  download URLs** rather than bare `media_id`s. That distinction was learned by
  getting it wrong; see the skill's *Environment caveats*.

An earlier cut — the chapter 1 trailer v5, the first taken end-to-end through the
sandbox assembler — was deleted from `output/` on 2026-08-08. **Its measured
numbers survive in `SKILL.md`**, which is where they were always operative: the
credit deltas in step 0, the re-measured voice rates in step 3, and — in step 4 —
the 496×864 delivered geometry and the `background: true` failure that cost the
run. Read those there, not from a cut document.

**Every cut that renders extends the worked example.** Give it a filled
production record, a credit-spend table reconciled against its preflight, and an
Assembly record — and add a **voice measurement** table if it measures a voice for
the first time.

## Core Cast (recurring)

- **Fan-di (樊帝)** — A youthful sharp-witted Chinese emperor in his late twenties: clean-shaven with sharp confident eyebrows and a clever knowing smirk, modern-leaning short black hair, trim GOLD robe with contemporary tailored cut, a pair of slim thin-framed round glasses sitting neatly on his nose, snapping open a white folding fan with one hand, other hand on his hip. Brilliant, vain, scholar-skeptic. Quick, charismatic, a young sovereign who asks dangerous questions with a smile. The fan is his tell: snapped open = performing/defensive; set down = sincerity.

- **Dr-Qi** — A young female court physician, in her late twenties: smooth youthful face, glossy black hair worn down, loose and flowing past her shoulders, and she wears an elegant BLUE cheongsam (qipao) with a high mandarin collar, short sleeves, and subtle cloud-pattern embroidery, tasteful and professional. She has bright intelligent eyes with a wry knowing smile and one playfully raised eyebrow, a pencil tucked behind her ear. No glasses. She radiates quick wit and quiet mastery — the youngest, sharpest physician in the room who is always three steps ahead, wisdom beyond her years, pose with her hands holding the open bamboo scroll casually like a tablet. Voice rule: she never sounds like she's winning — the more Fan-di performs, the stiller she gets.

- **Lei-Gong** — A young Chinese disciple with a thunder motif: spiky windswept dark hair suggesting a storm, gleeful mischievous grin, dynamic mid-hop pose with one fist pumped, CINNABAR red robe with lightning-pattern trim on the sleeves, a small hand drum hanging at his hip, tiny stylized spark effects around him. Crackling playful energy, the Duke of Thunder as a lovable cartoon kid.

New visuals should attach the existing style key image as a reference rather than establishing a new look.

- **Narrator (V.O.)** — single narrator, measured, nature-documentary hush. Carries the education; the other characters carry the tension. Voiced by the `seed_audio` preset **Arthur**.

**The full cast is voiced.** All four are `seed_audio` **preset** voices, cast permanently as of chapter 1 — series-recurring, never re-picked per chapter:

| Role | Preset |
|---|---|
| Narrator (V.O.) | **Arthur** |
| Fan-di | **Xavier** |
| Dr-Qi | **Vesper** |
| Lei-Gong | **Zane** |

These four are the only voices the series uses. Do not audition alternatives and do not introduce a voice from outside this table; every new cut is Arthur plus, where a character speaks, that character's cast voice.

**The `voice_id`s, each voice's measured words/second, and its line-length window live in the skill's step-3 table** — that is the operative copy, because the numbers come from measurement and are used at generation time. Do not restate them here.

A trailer *may* give the characters lines and longform requires them, but the narrator remains the default: the narration carries every compliance hedge, so moving a hedge onto a character voice is a per-cut decision the compliance notes must record. The assembler takes exactly one audio per 10s block, so **no block may contain two speakers**: a line exchange becomes consecutive blocks.

Two constraints bind every script written for these voices, and the skill holds the figures for both:

- **A take must fill its fixed 10s block, within a window the assembler enforces at both edges.** The window is pipeline geometry and holds for every voice; a take outside it is a hard error that stops the assembly, not something the tool absorbs. The word count that produces it is voice-specific and does **not** transfer between voices — take both the window and the word counts from the skill's step-3 table, never from another cut's document.
- **`speech_rate` is not a duration lever.** Word count and punctuation are the only controls on take length.

> **The window changed on 2026-08-04** when Higgsfield removed the server-side assembler, and it moved by more than two seconds — from 6–8s to 8.6–10.0s. **Every cut written before that date is sized to the old window and will fail the current assembler.** Re-time a cut's narration before re-rendering it; do not assume an existing document is a safe model to copy. The skill's step-3 and step-4 hold what changed.

Measure any new voice on one take, and write the result into the skill's table, before writing a script to it.

## Writing conventions

- **Production-episode script format**: markdown with **SOUND / VISUAL / CHARACTER** blocks, dialogue as blockquotes, approximate timecodes per act, ON-SCREEN TEXT blocks for classical quotations (rendered as translation, optionally with the ancient script).
- **Trailer format**: a narration table (block / beat / narration line) broken into fixed 10-second blocks, followed by a numbered shot list keyed to the same blocks, then the production record. See `output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md`.
- Target runtime ~11:30–20 min per production episode; production notes include levers to cut to 11:30 or stretch to 20.
- Target runtime 30-90 sec per trailer. The pipeline assembles fixed 10s windows, so write to whole blocks — six blocks is 60s, eight is 80s.
- **Every deliverable ships captioned**, in the **anton** font, with every subtitle wrapping on screen and readable across the whole video. The `.srt`/`.vtt` sidecars are **tracked, required deliverables** — build them with `node scripts/build_subtitles.js <cut-document>.md` and commit them with the cut. Captions are burned **after** assembly, as their own step; the assembler produces none. Why the sidecar guarantees the wrap, and the cue-timing drift currently open against it: see the skill's **Subtitles** section.

## YouTube compliance (apply to every episode)

- Always keep the disclaimer: *"A dramatized adaptation of a classical philosophical text. Not medical advice."* Teaching content is philosophy/history, never medical instruction.
- Keep mortality/aging reflective, non-graphic (portraits, not bodies).
- Indulgence/alcohol: cautionary framing only, never glorified; keep feast
  B-roll atmospheric — no close-ups of bottles, pouring, or drinking.
- Supernatural hooks must be explicitly debunked by the payoff; titles and
  thumbnails must honor the educational payoff, not pure mystery clickbait.
- Health content stays philosophical narrative, never medical instruction;
  keep the not-medical-advice disclaimer in the description.
- Self-certify/tag as general audience, **not** "made for kids."
- **Audit every storyboard, script, voice take and rendered clip against the rules above**, and summarise the issues and recommendations. Record the audit as a `## Compliance notes (YouTube)` section in the cut's own document, one bullet per rule, so the reasoning survives with the cut.
- **Run that audit on the prompts *before* generating, not just on the output** — a non-compliant clip is a paid re-render. The skill's *Compliance gate* holds the prompt-stage procedure and the imagery that has actually tripped the safety filter.

Four requirements the assembler cannot produce. **Three are hand-added at
edit/upload time.** The fourth, music, it still cannot *generate* — but it can now
*place* a bed you supply, so that one may be an assembly step instead:

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen within the first 10 seconds.
- **End disclaimer card** — the disclaimer above, on screen as the final card of
  every cut, held long enough to read comfortably. This one costs a block: the
  pipeline assembles in fixed 10s blocks, so plan a final card block into the
  block plan *and* the cost preflight rather than trying to fold it into the
  title block. Render the block as a plain plate — the card's text is hand-added
  at edit time like all other on-screen text, which also keeps the credit out of
  a paid render. The card block still needs its one audio like any other; the
  narrator reading the disclaimer over it fills the slot and doubles the
  compliance signal, and it captions into the subtitle sidecar for free.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card and in the description, per the AI-persona policy.
- **Music** — licensed guqin only; **nothing generated by this pipeline**, which is the part that never changes. Trailers earn disproportionate plays and carry the higher Content-ID exposure. What did change is *where* the licensed file gets laid in: the assembler can now mix a bed under the cut, so this is optionally an assembly step rather than strictly a hand one. Sourcing and licensing stay yours either way — see the skill's step 4 for the flag and the level it mixes at.

## Production toolchain

- **Read `.claude/skills/higgsfield-production/SKILL.md` before generating
  anything.** It is the operative pipeline doc — order of operations, model names
  and parameters, cost preflight, the longform path, and the failure modes that
  have already cost full re-renders. This section is the summary; the skill is the
  procedure.
- Assets are generated through the **Higgsfield** service (exposed here via the
  `mcp__higgsfield__*` tools): `generate_image` for style keys, `generate_video`
  for clips, `generate_audio` for voiceover. Every generated asset's job ID goes
  into the document's production record so the cut can be reproduced.
- **Final assembly is a shell script in a remote sandbox, not a service call.**
  Higgsfield removed the server-side assembler on 2026-08-04; assembly now
  runs `assemble_final.sh` under `sandbox_exec`. Two policy consequences: there is
  **no assembly job ID to record**, so the production record captures the flags,
  manifest and exported `media_id` instead; and the sandbox is **ephemeral**, so a
  finished render not exported before the call returns is simply lost. The call
  shape, the flags and the gates are the skill's step 4.
- **Clips default to `seedance_2_0_mini` at 480p (draft tier), Draft then Full.**
  Generating costs real credits, so the skill's step-0 gate applies: price the
  whole cut, name the model and tier, and **confirm with the user before
  spending**. Record actual spend against the estimate in the document.
- **New visuals chain off the existing style key rather than establishing a fresh
  look.** The current head and the exact `medias[]` call are in the skill's
  step 1.
- **What lands in git**: rendered media never does — it is gitignored
  (`renders/`, `*.mp4`, audio), and renders are downloaded into
  `output/<book>/ch<N>/renders/`. Subtitle sidecars (`.srt`/`.vtt`) are small text,
  are required deliverables, and *are* tracked. CDN links expire, so archive any
  final MP4 worth keeping by hand.
- **The CDN is often unreachable from the repo host**, so a cut frequently cannot
  be fetched back for visual QA. The assembly sandbox has its own network access
  and can probe the render next to where it was built, but **an automated probe is
  not a viewing**. Never write that a cut looks right, or that its captions wrap,
  if nobody watched the file — say which checks actually ran. The skill's
  *Environment caveats* gives the fallback.

## Git conventions

- **`claude/main` is the long-lived default branch.** Work happens on
  `claude/<description>-<id>` branches cut from it, pushed to origin, and merged
  back via pull request; feature branches are deleted after merge.
- **Every pull request into `claude/main` runs `check_docs_drift.js` in CI**
  (`.github/workflows/docs-drift.yml`). Run it locally before pushing rather than
  finding out from a red check; `--fix` applies the mechanical half.
- Commit messages describe the content deliverable (e.g. "Add 80-second Chapter 1 trailer: narration, shot list, and production record").
- New script versions get a new file; never overwrite the previous file or version.
- **The web-session clone is shallow, and history commands lie until you fix it.**
  A truncated clone reports its cut-off points as root commits, so `git log` looks
  short and `git merge-base` can return *nothing* for two branches that are in fact
  directly related. Read that as "history not fetched", never as "unrelated
  histories" — it is not evidence of a repo problem, and it has already produced one
  wrong conclusion in this repo. Check `git rev-parse --is-shallow-repository`
  before trusting any history claim, and run `git fetch --unshallow origin` first if
  it says `true`.

## Context memory (Google Drive)

Web sessions run in an ephemeral container rebuilt from the repo each time, so
the only things that survive a session are what git tracks and what is written
outside it. A Google Drive folder holds the second kind, as immutable timestamped
snapshots. **The folder IDs, the call shapes, the naming rule and the failure
modes are the `drive-context-memory` skill's** — read it before reading or writing
memory, and note in particular that the obvious read tool corrupts a snapshot
without erroring.

Two things are policy, and are this file's:

- **Anything reproducible from the repo belongs in the repo.** Job IDs, block
  plans, compliance notes and a cut's credit spend go in that cut's production
  record, which is tracked and reviewed. Drive memory is for what `.gitignore`
  deliberately excludes: the render archive index (MP4s are never committed and
  CDN links expire), spend accumulated across sessions, and working preferences.
- **Drive memory never holds policy.** It is not a fourth copy of this file or of
  a skill. The three-file split above has already drifted wherever it was
  duplicated; another copy in a folder no review ever opens is worse, because
  nothing brings it back into agreement. Point at the owner, do not restate it.

Reading and writing memory is reversible, generates nothing and spends no
credits, so it sits outside the Prompt cleaner gate below.

## Prompt cleaner

**Before any run that generates assets or writes a cut document**, re-write the
user's request as an explicit prompt — naming the chapter, the cut type, the block
count, the model and tier, and whatever else this file and `SKILL.md` require for a
consistent result — and **get confirmation before proceeding**. A vague brief is
how a paid re-render starts, so this gate sits alongside the step-0 cost gate and
the compliance gate rather than replacing either.

**This is not a gate on conversation.** Answering a question, reading the repo,
auditing a document, fixing a typo, running the caption scripts, or any other
reversible non-generating work does not need a rewritten prompt first — just do it.
Reach for this when the next step spends credits or commits a new cut, and when the
brief is genuinely underspecified; if the request is already unambiguous, say what
you understood it to mean and carry on.
