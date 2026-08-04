# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **video-content-production repository**, not a software project. It holds production documents for a dramatized documentary series adapting the Huangdi Neijing (The Emperor's Inner Canon, the foundational classical text of Chinese medicine).

## Which file wins

Two files carry standing instructions, and they divide as follows. **Where both
touch the same subject, the owner below is normative and the other file points at
it rather than restating it.**

| | Owns |
|---|---|
| **`CLAUDE.md`** (this file) | **Policy** — who the cast is, the compliance rules, the production-document layout, what ships as a deliverable, git conventions |
| **`.claude/skills/higgsfield-production/SKILL.md`** | **Procedure and measurements** — order of operations, model names and parameters, prices, per-voice words/second, block geometry, the failure modes that have cost a paid re-render |

Rule of thumb: if it would still be true with a different generation service, it
belongs here; if it is a number someone measured or a call someone makes to the
API, it belongs in the skill. Duplicating a rule across both is how they drift —
several instructions have already gone stale in one copy while staying correct in
the other. Add a pointer, not a second copy.

## Structure

One folder per chapter, one markdown file per cut. The current tree is:

```
CLAUDE.md
README.md
.claude/
  settings.json                             # Bash + Higgsfield MCP permission lists, SessionStart hook
  hooks/session-start.sh                    # reinstalls ffmpeg + the Anton font on the ephemeral host
  skills/higgsfield-production/SKILL.md     # the house generation pipeline
output/
  episode-1/inner-canon-ch1-trailer-v3.md   # current reference layout
  episode-1/assemble-ch1-trailer-v3.sh      # v3's service-free ffmpeg assembly
  episode-1/inner-canon-ch1-longform-v1.md  # 18-min script + plan; pre-render
  # every rendered cut also carries <cut>.srt and <cut>.vtt sidecars, tracked.
  # They are built from the take durations in the production record, so a
  # pre-render cut has none yet — build them once the voice takes exist.
assets/
  emperor-Fan.png                           # Fan-di style key art
  wise-Qi-2.png                             # Dr-Qi style key art
  witty-Lei.png                             # Lei-Gong style key art
docs/
  Emperors Inner Canon Series Blueprint.md  # 80-chapter index, Top-20 slate, compliance audit
  Emperors_Inner_Canon_Publish_Sequence.md  # what order to publish in (≠ chapter order)
scripts/
  build_subtitles.js                        # node scripts/build_subtitles.js <cut-document>.md
  check_caption_fit.js                      # node scripts/check_caption_fit.js <cut-document>.md
  lib/caption_metrics.js                    # frame geometry + Anton metrics, shared by both
```

- `output/` — one `episode-<N>/` folder per chapter. **`<N>` is the chapter number of the file name of the input script, not a sequential episode index** — the folders are the chapters chosen off the Top-20 slate in `docs/`, so gaps are expected and are not missing work. Trailers are `inner-canon-ch<N>-trailer-v<M>.md` (30-90 sec), longform production documents are `inner-canon-ch<N>-longform-v<M>.md` (15-20 min), translations are `inner-canon-ch<N>-translation-v<M>.md`. Where a source script is reviewed against these conventions before production, that review sits beside the cut as `inner-canon-ch<N>-trailer-script-review.md`. Render trailers in 9:16 vertical format; long form in 16:9 landscape format; record the actual resolution/format at the top of each document.
- `assets/` — character style-key art referenced by every generation job.
- `docs/` — the series blueprint (full 80-chapter plain-English index, the ranked Top-20 slate that decides which chapter is produced next, and a series-level compliance audit) and the publish sequence. **Publish order is not chapter order** — the sequence deliberately holds the foundational chapters back, so check it before assuming what ships next.
- `scripts/` — `build_subtitles.js`, which generates a cut's `.srt`/`.vtt` sidecar from its own production document, and `check_caption_fit.js`, which flags narration clauses that will overflow `explainer_video`'s burned-in captions. **Run `check_caption_fit.js` before generating voice takes** — it checks a different failure than `build_subtitles.js` does, and a document can pass the sidecar build and still overflow on the assembled video.

Each production document contains, in order:
  - The cut's title, the chapter's Chinese title, and the cut's short name.
  - A link to the final rendered video (plus its resolution/duration/format).
  - The compliance disclaimer as a blockquote.
  - Narration broken into timed blocks (table: block / beat / narration line), naming the narrator preset and speech rate used.
  - Where a cut was re-timed off a source script, a **source-script mapping** table (source beat → blocks) plus any naming reconciliations made against this file.
  - A numbered **shot list** matching the narration blocks.
  - A **production record** with the generation-service (Higgsfield) job IDs for every asset — style key image, video clips, voiceover takes, final assembly — then **reproduction notes** on anything that went wrong and how it was resolved. Keep superseded job IDs, marked as superseded; they're evidence for the next cut.
  - **Deliverables the assembler cannot produce** — on-screen text and credits, added by hand at edit time, plus music, which the assembler can mix in but never generate, closing with a **Finishing steps** subsection: the ordered procedure that turns the delivered render into an uploadable file. Write it with *this* cut's own timings, cue numbers and block boundaries, never as a generic recipe — those numbers differ between versions of the same chapter, and that is precisely where the mistakes happen. `output/episode-1/inner-canon-ch1-trailer-v3.md` is the reference.
  - **Compliance notes (YouTube)** — the per-cut audit required below.
  - **Runtime levers** — which blocks to drop to cut shorter, which beats to add to stretch longer.

When adding a new trailer or episode document, follow this same layout so production records stay reproducible.
`output/episode-1/inner-canon-ch1-trailer-v3.md` is the current reference — the
most recent cut on the permanent voice cast and on `seedance_2_0_mini`, and it
carries two sections worth reusing: a **credit spend** breakdown reconciled
against the preflight estimate, and a **Fallback** giving a service-free `ffmpeg`
assembly for when `explainer_video` is unavailable. Add a **voice measurement**
table as well on any cut that measures a voice for the first time.

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

> **The window changed on 2026-08-04** when Higgsfield removed the `explainer_video` assembler, and it moved by more than two seconds. **Every cut written before that date is sized to the old window and will fail the new assembler.** Re-time a cut's narration before re-rendering it; do not assume an existing document is a safe model to copy. The skill's step-3 and step-4 hold what changed.

Measure any new voice on one take, and write the result into the skill's table, before writing a script to it.

## Writing conventions

- **Production-episode script format**: markdown with **SOUND / VISUAL / CHARACTER** blocks, dialogue as blockquotes, approximate timecodes per act, ON-SCREEN TEXT blocks for classical quotations (rendered as translation, optionally with the ancient script).
- **Trailer format**: a narration table (block / beat / narration line) broken into fixed 10-second blocks, followed by a numbered shot list keyed to the same blocks, then the production record. See `output/episode-1/inner-canon-ch1-trailer-v3.md`.
- Target runtime ~17–19 min per production episode; production notes include levers to cut to 15 or stretch to 20.
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
  Higgsfield removed the `explainer_video` assembler on 2026-08-04; assembly now
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
  `output/episode-<N>/renders/`. Subtitle sidecars (`.srt`/`.vtt`) are small text,
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
- Commit messages describe the content deliverable (e.g. "Add 80-second Chapter 1 trailer: narration, shot list, and production record").
- New script versions get a new file; never overwrite the previous file or version.

## Prompt cleaner

- Always prompt the user to clean up the initial prompt. Re-write and suggest a new prompt with specific words that the model need to achieve a consistent output required from this document and from the SKILL.md document. Get a confirmation from the user before proceeding with the next steps.
