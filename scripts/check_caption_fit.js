// Flags narration clauses too wide for the two-line caption budget.
//
//   node scripts/check_caption_fit.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md
//   node scripts/check_caption_fit.js <doc>.md --format 16:9
//   node scripts/check_caption_fit.js output/*/ch*/*-v*.md          # sweep every cut
//
// Originally this checked the server-burned caption path, which failed
// differently from the sidecar build_subtitles.js produces. That path was removed
// on 2026-08-04, so the overflow it guarded can no longer happen. What remains is
// a readability check on the writing: a clause needing three or four cues to fit
// is caption churn on screen even when it wraps correctly.
// See .claude/skills/higgsfield-production/SKILL.md, "Subtitles".
//
// Exits non-zero on an overflowing clause OR on a document with no narration
// table. Translation documents have no table, so a whole-repo sweep always exits
// non-zero — read the report, not the status.

const fs = require("fs");
const {
  MAX_LINES,
  usableWidth,
  textWidth,
  parseNarration,
  clauses,
  parseArgs,
} = require("./lib/caption_metrics");

// The end disclaimer card carries the full 78-character compliance string
// mandated by CLAUDE.md: "A dramatized adaptation of a classical philosophical
// text. Not medical advice." This constant is deliberately NOT that string.
//
// Captions are measured per clause, and clauses() splits on sentence-final
// punctuation, so the card arrives here as two clauses: the 58-character first
// sentence, and "Not medical advice." at 19. Only the first overflows, and only
// in 9:16 (1187px against a 1111px two-line cap; it fits on one line in 16:9).
// So the value below is the widest CLAUSE, not the whole card — matching it
// against the full 78 characters would never fire, and the disclaimer would be
// reported as a hard failure on every vertical cut.
//
// Rewording a compliance string to fit a caption is the wrong trade, so it is
// reported as a known exception rather than a failure: every cut carries it, and
// a check that always fails is a check nobody reads. It is handled correctly by
// the sidecar, which is now the only caption path.
const MANDATED_DISCLAIMER =
  "A dramatized adaptation of a classical philosophical text.";

function main() {
  const { fmtKey, fmt, docs } = parseArgs(process.argv.slice(2));
  if (!fmt) {
    console.error(`unknown --format ${fmtKey} (expected 9:16 or 16:9)`);
    process.exit(1);
  }
  if (!docs.length) {
    console.error("usage: node scripts/check_caption_fit.js <cut-document.md>... [--format 9:16|16:9]");
    process.exit(1);
  }

  const usable = usableWidth(fmt);
  const cap = usable * MAX_LINES;
  let failures = 0;
  let unparsed = 0;

  console.log(`${fmt.label} — ${Math.round(usable)}px/line, ${MAX_LINES} lines max, ${Math.round(cap)}px budget`);

  for (const doc of docs) {
    const blocks = parseNarration(fs.readFileSync(doc, "utf8"));
    if (!blocks.length) {
      // Not an overflow — the document has nothing to check yet. A longform
      // script in SOUND / VISUAL / CHARACTER form has no narration table until
      // one is derived from it, so this is an expected state, not a defect.
      console.error(`  ${doc}: no narration table found — nothing to check`);
      unparsed++;
      continue;
    }
    const bad = [];
    const known = [];
    for (const b of blocks) {
      for (const clause of clauses(b.text)) {
        const px = textWidth(clause, fmt.fontSize);
        if (px <= cap) continue;
        const entry = { block: b.block, clause, px, lines: Math.ceil(px / usable) };
        (clause === MANDATED_DISCLAIMER ? known : bad).push(entry);
      }
    }
    console.log(`\n${doc} — ${blocks.length} blocks`);
    for (const k of known) {
      console.log(
        `  block ${k.block}  known exception — the mandated disclaimer string (${k.lines} lines).`
      );
      console.log("    Not a defect: do not reword it. The sidecar burn wraps this clause correctly.");
    }
    failures += bad.length;
    if (!bad.length) {
      console.log("  OK — every other clause fits in two lines");
      continue;
    }
    for (const f of bad) {
      console.log(
        `  block ${f.block}  OVERFLOW  ${Math.round(f.px)}px, needs ${f.lines} lines (${f.clause.length} chars)`
      );
      console.log(`    "${f.clause}"`);
    }
  }

  if (failures) {
    console.log(
      `\n${failures} overflowing clause(s). Add internal commas and re-record those blocks' takes,`
    );
    console.log(
      "or leave them: the sidecar splits a long clause across cues, so this is readability, not a render failure."
    );
  }
  if (unparsed) {
    console.log(
      `\n${unparsed} document(s) had no narration table to check. Derive one before recording takes.`
    );
  }
  if (failures || unparsed) process.exit(1);
  console.log("\nAll clauses fit.");
}

main();
