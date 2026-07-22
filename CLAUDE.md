# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **video-content-production repository**, not a software project. It holds production documents for *The Emperor's Inner Canon*, a dramatized documentary series adapting the Huangdi Neijing (The Emperor's Inner Canon, the foundational classical text of Chinese medicine).

## Structure

- `episode-XX/` — documents for each new episode gets stored in their own folder structure. Trailer or production documents, one markdown file per cut (e.g. `episode1-trailer-1min.md` or `episode1-prod-18min.md`). Each document contains:
  - A link to the final rendered video
  - Narration broken into timed blocks (table: block / beat / narration line)
  - A numbered shot list matching the narration blocks
  - A **production record** with the generation-service job IDs for every asset (style key image, video clips, voiceover takes, final assembly)

When adding a new trailer or episode document, follow this same layout so production records stay reproducible.

## Directory layout
- `assets/` — character art: emperor-Fan.png (Fan-di), wise-Qi-2.png (Dr-Qi), witty-Lei.png (Lei-Gong).

## Series canon and conventions

- **Fan-di (樊帝)** — A youthful sharp-witted Chinese emperor in his late twenties: clean-shaven with sharp confident eyebrows and a clever knowing smirk, modern-leaning short black hair, trim GOLD robe with contemporary tailored cut, a pair of slim thin-framed round glasses sitting neatly on his nose, snapping open a white folding fan with one hand, other hand on his hip. Brilliant, vain, scholar-skeptic. Quick, charismatic, a young sovereign who asks dangerous questions with a smile. The fan is his tell: snapped open = performing/defensive; set down = sincerity.

- **Dr-Qi** — A young female court physician, in her late twenties: smooth youthful face, glossy black hair worn down, loose and flowing past her shoulders, and she wears an elegant BLUE cheongsam (qipao) with a high mandarin collar, short sleeves, and subtle cloud-pattern embroidery, tasteful and professional. She has bright intelligent eyes with a wry knowing smile and one playfully raised eyebrow, a pencil tucked behind her ear. No glasses. She radiates quick wit and quiet mastery — the youngest, sharpest physician in the room who is always three steps ahead, wisdom beyond her years, pose with her hands holding the open bamboo scroll casually like a tablet. Voice rule: she never sounds like she's winning — the more Fan-di performs, the stiller she gets.

- **Lei-Gong** — A young Chinese disciple with a thunder motif: spiky windswept dark hair suggesting a storm, gleeful mischievous grin, dynamic mid-hop pose with one fist pumped, CINNABAR red robe with lightning-pattern trim on the sleeves, a small hand drum hanging at his hip, tiny stylized spark effects around him. Crackling playful energy, the Duke of Thunder as a lovable cartoon kid.

New visuals should attach the existing style key image as a reference rather than establishing a new look.

- **Narrator (V.O.)** — single narrator, measured, nature-documentary hush. Carries the education; the other characters carry the tension.

- **Compliance constraints** (from a prior compliance audit — preserve these in any new material):
  - Always keep the disclaimer: *"A dramatized adaptation of a classical philosophical text. Not medical advice."* Teaching content is philosophy/history, never medical instruction.
  - Keep indulgence/feast content cautionary and atmospheric — no close-ups of
    drinking/pouring (alcohol classifier). Do not depict drinking.
  - Supernatural hooks must be explicitly debunked in the payoff; titles/thumbnails
    must honor the educational payoff, not pure occult clickbait.
  - Tag general audience, **not** "made for kids."
  - Mortality handled reflectively, non-graphic (portraits, not bodies).

## Writing conventions

- Script format: markdown with **SOUND / VISUAL / CHARACTER** blocks, dialogue as
  blockquotes, approximate timecodes per act, ON-SCREEN TEXT blocks for classical
  quotations (rendered as translation, optionally with the ancient script).
- Target runtime ~17–19 min per production episode; production notes include levers to cut
  to 15 or stretch to 20.
- Target runtime 1 min per trailer. Trailer in 9:16 vertical format.
- Always include subtitles / close captions.
- New script versions get a new file (`-v3` etc.); don't overwrite prior versions.

## Git conventions

- Work happens on `claude/<description>-<id>` branches pushed to origin; there is no long-lived main branch in this repo yet.
- Commit messages describe the content deliverable (e.g. "Add 1-minute Episode 1 trailer: narration, shot list, and final video link").
