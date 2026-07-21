# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **content-production repository**, not a software project. It holds production documents for *The Emperor's Inner Canon*, a dramatized documentary series adapting the Huangdi Neijing (the Yellow Emperor's Inner Canon, the foundational classical text of Chinese medicine). There is no build system, no tests, no linter, and no application code — the deliverables are markdown production documents and generated media assets referenced from them.

## Structure

- `trailer/` — trailer production documents, one markdown file per cut (e.g. `episode1-trailer-1min.md`). Each document contains:
  - A link to the final rendered video
  - Narration broken into timed blocks (table: block / beat / narration line)
  - A numbered shot list matching the narration blocks
  - A **production record** with the generation-service job IDs for every asset (style key image, video clips, voiceover takes, final assembly)

When adding a new trailer or episode document, follow this same layout so production records stay reproducible.

## Series canon and conventions

- **Episode 1**: "The Physician Who Outlived Three Emperors."
- **Characters**: Fan-di (the young emperor) and Dr. Qi (the court physician). Existing character art defines the visual style — a stylized 2D animation look. New visuals should attach the existing style key image as a reference rather than establishing a new look.
- **Narration register**: single narrator, documentary tone.
- **Compliance constraints** (from a prior compliance audit — preserve these in any new material):
  - Every document/video carries the disclaimer: *"A dramatized adaptation of a classical philosophical text. Not medical advice."*
  - Do not depict drinking; convey excess/decline visually instead (e.g. the "feast dims" shot uses lanterns extinguishing and a figure growing gaunt).

## Media production workflow

Assets are generated with the Higgsfield MCP tools available in this environment:

1. **Style key image** — a single 16:9 image of the characters, generated first and attached as the style reference to every video clip.
2. **Clips** — 10-second, 720p video blocks (gemini_omni model), one per narration block.
3. **Voiceover** — Seed Audio with the preset voice **Alistair**; each take must fit its 10-second block (past takes ran 6.8–9.3s; `speech_rate 15` was used on re-takes to fit).
4. **Assembly** — the `explainer_video` tool combines clips and voiceover into fixed 10-second blocks, no subtitles.

Record every job ID in the document's production record section. **Hosted asset URLs are expiring CDN links** — if a video is worth keeping, download and archive the final MP4 rather than relying on the link.

## Git conventions

- Work happens on `claude/<description>-<id>` branches pushed to origin; there is no long-lived main branch in this repo yet.
- Commit messages describe the content deliverable (e.g. "Add 1-minute Episode 1 trailer: narration, shot list, and final video link").
