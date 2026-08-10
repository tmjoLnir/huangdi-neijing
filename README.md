# The Emperor's Inner Canon

Production documents for a dramatized documentary series adapting the **Huangdi
Neijing** (黄帝内经, *The Emperor's Inner Canon*), the foundational classical text
of Chinese medicine. This repo holds scripts, storyboards and production records —
not rendered media, which is gitignored.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

Video assets — character cast, style and storyline construction — were created,
written and edited by **Joshua Chin**, supported by Claude Code and the Higgsfield
MCP, and are proprietary in this repo.

## Layout

```
output/<book>/ch<N>/     production documents, one folder per chapter
assets/                  character style-key art
docs/                    chapter slate, publish sequence, compliance audit
scripts/                 subtitle sidecar builder + caption-fit checker
.claude/skills/          the two procedure skills (see below)
.claude/hooks/           session-start install of ffmpeg, the Anton font and wick
```

`<book>` is `suwen` or `lingshu`, and `<N>` is the chapter's number **within that
book**. The canon is two books of eighty-one separately-numbered chapters, so
Suwen 28 and Lingshu 28 are different chapters and a bare chapter number is
ambiguous — hence the book folder, and the book in every filename.

## Scripts

Both take document paths and hold no folder assumptions of their own.

```
node scripts/check_caption_fit.js <cut>.md          # readability check, before recording takes
node scripts/build_subtitles.js  <cut>.md           # writes <cut>.srt and <cut>.vtt
node scripts/check_caption_fit.js output/*/ch*/*-v*.md   # sweep every cut
```

Add `--format 16:9` for longform; the default is the 9:16 trailer frame. The
sweep always exits non-zero because translation documents carry no narration
table — read the report, not the status.

## Where the rules live

Three files carry standing instructions, and each owns its subject outright — where
two touch the same thing, the owner is normative and the others point at it.
`CLAUDE.md` § *Which file wins* is the authoritative table.

- **`CLAUDE.md`** — policy: the cast, the compliance rules, the production-document
  layout, what ships as a deliverable, git conventions.
- **`.claude/skills/higgsfield-production/SKILL.md`** — generation procedure and
  measurements: order of operations, model names and parameters, prices, per-voice
  words/second, block geometry, and the failure modes that have already cost a paid
  re-render.
- **`.claude/skills/drive-context-memory/SKILL.md`** — cross-session memory held as
  immutable snapshots in Google Drive: the folder IDs, the call shapes, and the read
  path that silently corrupts a snapshot without erroring.

Read `CLAUDE.md` and the Higgsfield skill before generating anything.
