# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **video-content-production repository**, not a software project. It holds production documents for *The Emperor's Inner Canon*, a dramatized documentary series adapting the Huangdi Neijing (The Emperor's Inner Canon, the foundational classical text of Chinese medicine).

## Structure

Production documents are grouped by cut type, one markdown file per cut. The
current tree is:

```
CLAUDE.md
output/episode-2/
  inner-canon-ch2-trailer-v1.md          # chapter 2 trailer sample
assets/
  emperor-Fan.png               # Fan-di style key art
  wise-Qi-2.png                 # Dr-Qi style key art
  witty-Lei.png                 # Lei-Gong style key art
```

- `output/` — As new episodes are produced, store file here. For each new chapter, add child folders such as `episode-<N>/` for short-form 1 min cuts (e.g. `inner-canon-ch<N>-trailer-v<M>.md`) and for long-form 15-20 min production documents (`inner-canon-ch<N>-longform-v<M>.md`, etc.).
- `assets/` — character style-key art referenced by every generation job.

Each production document contains, in order:
  - A link to the final rendered video (plus its resolution/duration/format).
  - The compliance disclaimer as a blockquote.
  - Narration broken into timed blocks (table: block / beat / narration line).
  - A numbered **shot list** matching the narration blocks.
  - A **production record** with the generation-service (Higgsfield) job IDs for
    every asset — style key image, video clips, voiceover takes, final assembly.

When adding a new trailer or episode document, follow this same layout so
production records stay reproducible.

## Core Cast (recurring)

- **Fan-di (樊帝)** — A youthful sharp-witted Chinese emperor in his late twenties: clean-shaven with sharp confident eyebrows and a clever knowing smirk, modern-leaning short black hair, trim GOLD robe with contemporary tailored cut, a pair of slim thin-framed round glasses sitting neatly on his nose, snapping open a white folding fan with one hand, other hand on his hip. Brilliant, vain, scholar-skeptic. Quick, charismatic, a young sovereign who asks dangerous questions with a smile. The fan is his tell: snapped open = performing/defensive; set down = sincerity.

- **Dr-Qi** — A young female court physician, in her late twenties: smooth youthful face, glossy black hair worn down, loose and flowing past her shoulders, and she wears an elegant BLUE cheongsam (qipao) with a high mandarin collar, short sleeves, and subtle cloud-pattern embroidery, tasteful and professional. She has bright intelligent eyes with a wry knowing smile and one playfully raised eyebrow, a pencil tucked behind her ear. No glasses. She radiates quick wit and quiet mastery — the youngest, sharpest physician in the room who is always three steps ahead, wisdom beyond her years, pose with her hands holding the open bamboo scroll casually like a tablet. Voice rule: she never sounds like she's winning — the more Fan-di performs, the stiller she gets.

- **Lei-Gong** — A young Chinese disciple with a thunder motif: spiky windswept dark hair suggesting a storm, gleeful mischievous grin, dynamic mid-hop pose with one fist pumped, CINNABAR red robe with lightning-pattern trim on the sleeves, a small hand drum hanging at his hip, tiny stylized spark effects around him. Crackling playful energy, the Duke of Thunder as a lovable cartoon kid.

New visuals should attach the existing style key image as a reference rather than establishing a new look.

- **Narrator (V.O.)** — single narrator, measured, nature-documentary hush. Carries the education; the other characters carry the tension. use seed Audio preset **Julian**.

## Writing conventions

- **Production-episode script format**: markdown with **SOUND / VISUAL /
  CHARACTER** blocks, dialogue as blockquotes, approximate timecodes per act,
  ON-SCREEN TEXT blocks for classical quotations (rendered as translation,
  optionally with the ancient script).
- **Trailer format**: a narration table (block / beat / narration line) broken
  into fixed 10-second blocks, followed by a numbered shot list keyed to the same
  blocks, then the production record. See `episode1-trailer-1min.md`.
- Target runtime ~17–19 min per production episode; production notes include
  levers to cut to 15 or stretch to 20.
- Target runtime ~1 min per trailer. Render trailers in 9:16 vertical format; record the actual resolution/format at the top of each document.
- Always include subtitles / closed captions on the final deliverable. Make sure all subtitles fit on screen and are readable across the entire video. Subtitles with anton font.
- New script versions get a new file; don't overwrite prior versions.

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

## Production toolchain

- Assets are generated through the **Higgsfield** service (exposed here via the
  `mcp__higgsfield__*` tools): `generate_image` for style keys, `generate_video`
  for clips, `generate_audio` for voiceover, and `explainer_video` for final
  assembly. Every generated asset's job ID goes into the document's production
  record so the cut can be reproduced.
- Attach the existing character style-key art from `assets/` (or the prior
  style-key image job) as the reference on new generations rather than
  establishing a fresh look.
- Hosted asset URLs are CDN links from the generation service and may expire —
  manually download and archive the final MP4 for any cut worth keeping.

## Git conventions

- Work happens on `claude/<description>-<id>` branches pushed to origin; there is no long-lived main branch in this repo yet.
- Commit messages describe the content deliverable (e.g. "Add 1-minute Episode 1 trailer: narration, shot list, and final video link").
