# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **video-content-production repository**, not a software project. It holds production documents for *The Emperor's Inner Canon*, a dramatized documentary series adapting the Huangdi Neijing (The Emperor's Inner Canon, the foundational classical text of Chinese medicine).

## Structure

One folder per chapter, one markdown file per cut. The current tree is:

```
CLAUDE.md
README.md
.claude/
  settings.json                             # Bash permission allow/deny/ask lists
  skills/higgsfield-production/SKILL.md     # the house generation pipeline
output/
  episode-2/inner-canon-ch2-trailer-v1.md
  episode-3/inner-canon-ch3-trailer-v1.md
  episode-5/inner-canon-ch5-trailer-v1.md
  episode-8/inner-canon-ch8-trailer-v1.md   # current reference layout
assets/
  emperor-Fan.png                           # Fan-di style key art
  wise-Qi-2.png                             # Dr-Qi style key art
  witty-Lei.png                             # Lei-Gong style key art
docs/
  huangdi-neijing-layman-guide.md           # plain-English guide + top-20 chapter shortlist
decks/
  huangdi-neijing-top20-video-chapters.pptx # built by the script below
scripts/
  build_chapter_deck.js                     # node scripts/build_chapter_deck.js
  build_subtitles.js                        # node scripts/build_subtitles.js <cut-document>.md
```

- `output/` — one `episode-<N>/` folder per chapter. **`<N>` is the Suwen chapter number, not a sequential episode index** — the folders run 2, 3, 5, 8 because those are the chapters chosen off the shortlist in `docs/`; Trailers are `inner-canon-ch<N>-trailer-v<M>.md` (30-90 sec), longform production documents are `inner-canon-ch<N>-longform-v<M>.md` (15-20 min). Render trailers in 9:16 vertical format; long form in 16:9 landscape format; record the actual resolution/format at the top of each document.
- `assets/` — character style-key art referenced by every generation job.
- `docs/` — the plain-English guide and the ranked chapter shortlist that decides which chapter is produced next.
- `decks/`, `scripts/` — the planning deck and its build script, plus `build_subtitles.js`, which generates a cut's `.srt`/`.vtt` sidecar from its own production document (dependency-free). `.claude/settings.json` denies `npm install`, so a run needing `pptxgenjs` installed has to be cleared first.

Each production document contains, in order:
  - The cut's title, the chapter's Chinese title, and the cut's short name.
  - A link to the final rendered video (plus its resolution/duration/format).
  - The compliance disclaimer as a blockquote.
  - Narration broken into timed blocks (table: block / beat / narration line), naming the narrator preset and speech rate used.
  - Where a cut was re-timed off a source script, a **source-script mapping** table (source beat → blocks) plus any naming reconciliations made against this file.
  - A numbered **shot list** matching the narration blocks.
  - A **production record** with the generation-service (Higgsfield) job IDs for every asset — style key image, video clips, voiceover takes, final assembly — then **reproduction notes** on anything that went wrong and how it was resolved. Keep superseded job IDs, marked as superseded; they're evidence for the next cut.
  - **Deliverables the assembler cannot produce** — on-screen text, credits and music that have to be added by hand at edit time.
  - **Compliance notes (YouTube)** — the per-cut audit required below.
  - **Runtime levers** — which blocks to drop to cut shorter, which beats to add to stretch longer.

When adding a new trailer or episode document, follow this same layout so production records stay reproducible.
`output/episode-8/inner-canon-ch8-trailer-v1.md` is the current reference.

## Core Cast (recurring)

- **Fan-di (樊帝)** — A youthful sharp-witted Chinese emperor in his late twenties: clean-shaven with sharp confident eyebrows and a clever knowing smirk, modern-leaning short black hair, trim GOLD robe with contemporary tailored cut, a pair of slim thin-framed round glasses sitting neatly on his nose, snapping open a white folding fan with one hand, other hand on his hip. Brilliant, vain, scholar-skeptic. Quick, charismatic, a young sovereign who asks dangerous questions with a smile. The fan is his tell: snapped open = performing/defensive; set down = sincerity.

- **Dr-Qi** — A young female court physician, in her late twenties: smooth youthful face, glossy black hair worn down, loose and flowing past her shoulders, and she wears an elegant BLUE cheongsam (qipao) with a high mandarin collar, short sleeves, and subtle cloud-pattern embroidery, tasteful and professional. She has bright intelligent eyes with a wry knowing smile and one playfully raised eyebrow, a pencil tucked behind her ear. No glasses. She radiates quick wit and quiet mastery — the youngest, sharpest physician in the room who is always three steps ahead, wisdom beyond her years, pose with her hands holding the open bamboo scroll casually like a tablet. Voice rule: she never sounds like she's winning — the more Fan-di performs, the stiller she gets.

- **Lei-Gong** — A young Chinese disciple with a thunder motif: spiky windswept dark hair suggesting a storm, gleeful mischievous grin, dynamic mid-hop pose with one fist pumped, CINNABAR red robe with lightning-pattern trim on the sleeves, a small hand drum hanging at his hip, tiny stylized spark effects around him. Crackling playful energy, the Duke of Thunder as a lovable cartoon kid.

New visuals should attach the existing style key image as a reference rather than establishing a new look.

- **Narrator (V.O.)** — single narrator, measured, nature-documentary hush. Carries the education; the other characters carry the tension. Use `seed_audio` preset **Arthur** (`30fc8796-ceb6-4a66-b3a7-4a145ef7f346`) at `speech_rate` 55.

**The full cast is voiced.** All four are `seed_audio` **preset** voices, cast permanently as of chapter 1 — series-recurring, never re-picked per chapter:

| Role | Preset | `voice_id` | |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | male |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | male |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | female |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | male |

Superseded narrators, kept for the record: **Julian** (`95429266-c0ac-4137-a209-63b8812b0f23`) voiced chapters 3, 5 and 8; **Alistair** (`d9d5c263-f84e-4752-97b5-3750fcc6fd2f`) voiced chapter 2. Those cuts keep their shipped takes unless they are deliberately re-voiced; every new cut is Arthur.

Trailers through chapter 8 are narrator-only — the three characters appear but never speak. Now that they are cast, a trailer *may* give them lines, and longform requires them. `explainer_video` takes exactly one audio per 10s block, so **no block may contain two speakers**: a line exchange becomes consecutive blocks.

The 6–8s take / ~21–24 word budget in the production skill was measured on Julian and is voice-specific. **Re-measure on Arthur before writing a cut's narration to it**, and measure each character voice once before committing a script to a rate; record the figures in the skill's voice table.

## Writing conventions

- **Production-episode script format**: markdown with **SOUND / VISUAL / CHARACTER** blocks, dialogue as blockquotes, approximate timecodes per act, ON-SCREEN TEXT blocks for classical quotations (rendered as translation, optionally with the ancient script).
- **Trailer format**: a narration table (block / beat / narration line) broken into fixed 10-second blocks, followed by a numbered shot list keyed to the same blocks, then the production record. See `output/episode-8/inner-canon-ch8-trailer-v1.md`.
- Target runtime ~17–19 min per production episode; production notes include levers to cut to 15 or stretch to 20.
- Target runtime 30-90 sec per trailer.
- Always include subtitles / closed captions on the final deliverable. Make sure all subtitles wrap on screen and are readable across the entire video. Subtitles with anton font.

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
- Always audit and validate any storyboard, script, voice, video output to ensure that they comply with youtube's regulations.  provide a summary of issues and recommendations. Record that audit as a `## Compliance notes (YouTube)` section in the cut's own document, one bullet per rule, so the reasoning survives with the cut.
- Run the audit on prompts *before* generating, not just on output — a
  non-compliant clip is a paid re-render. Restraint and bound-figure imagery has
  tripped the safety filter even where the subject matter was fine; carry the
  meaning with objects and brush strokes instead of people.

Three requirements the assembler cannot produce, so they are manual steps at
edit/upload time on every cut:

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen within the first 10 seconds.
- **Human editorial credit** — *"Written & edited by [HUMAN NAME]"* on the end card and in the description, per the AI-persona policy.
- **Music** — licensed guqin only; nothing generated by this pipeline. Trailers earn disproportionate plays and carry the higher Content-ID exposure.

## Production toolchain

- **Read `.claude/skills/higgsfield-production/SKILL.md` before generating
  anything.** It is the operative pipeline doc — order of operations, model names
  and parameters, cost preflight, the longform path, and the failure modes that
  have already cost full re-renders. This section is the summary; the skill is the
  procedure.
- Assets are generated through the **Higgsfield** service (exposed here via the
  `mcp__higgsfield__*` tools): `generate_image` for style keys, `generate_video`
  for clips, `generate_audio` for voiceover, and `explainer_video` for final
  assembly. Every generated asset's job ID goes into the document's production
  record so the cut can be reproduced.
- Attach the existing character style-key art from `assets/` (or the prior
  style-key image job) as the reference on new generations rather than
  establishing a fresh look. In practice each chapter key chains off the previous
  one, swapping only the chapter motif — the lineage so far is group shot →
  ch2 → ch3 → ch5 → ch8. `medias[].value` takes a media ID or a prior job ID only,
  never a URL.
- Hosted asset URLs are CDN links from the generation service and may expire —
  user to manually download and archive the final MP4 for any cut worth keeping.
  Rendered media is gitignored (`renders/`, `*.mp4`, audio); download renders into
  `output/episode-<N>/renders/`. Subtitle sidecars (`.srt`/`.vtt`) are small text,
  are required deliverables, and *are* tracked.
- The generation CDN and `upload.higgsfield.ai` are frequently blocked from the
  repo host, so a cut often cannot be fetched back for visual QA. When that
  happens, verify at the job-metadata level (dimensions, per-take durations,
  assembly completion), say so explicitly in the document, and record the CDN link
  for manual download rather than committing a broken binary.

## Git conventions

- **`claude/main` is the long-lived default branch.** Work happens on
  `claude/<description>-<id>` branches cut from it, pushed to origin, and merged
  back via pull request; feature branches are deleted after merge.
- Commit messages describe the content deliverable (e.g. "Add 1-minute Chapter 8 trailer: narration, shot list, and production record").
- New script versions get a new file; never overwrite or rewrite a prior version's
  document, since its production record is the reproduction evidence for the next cut.

## Prompt cleaner

- Always prompt the user to clean up the initial prompt. Strip out words that does not tell the model what to do. Re-write and suggest a new prompt with specific words that the model need to achieve a consistent output required from this document and from the SKILL.md document. Get a confirmation from the user before proceeding with the next steps.