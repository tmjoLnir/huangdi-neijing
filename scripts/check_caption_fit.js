// Flags narration clauses that will overflow explainer_video's BURNED-IN captions.
//
//   node scripts/check_caption_fit.js output/episode-1/inner-canon-ch1-trailer-v3.md
//   node scripts/check_caption_fit.js <doc>.md --format 16:9
//   node scripts/check_caption_fit.js output/episode-*/*-v*.md      # sweep every cut
//
// Checks the server-burned caption path, which fails differently from the
// sidecar path build_subtitles.js produces — a document can pass that and still
// overflow here. Why, and which path to use when:
// see .claude/skills/higgsfield-production/SKILL.md, "Subtitles".

const fs = require("fs");
const {
  MAX_LINES,
  usableWidth,
  textWidth,
  parseNarration,
  clauses,
  parseArgs,
} = require("./lib/caption_metrics");

// The end disclaimer card's clause is mandated verbatim by CLAUDE.md and is 58
// characters, so it can never pass this check. Rewording a compliance string to
// fit a caption is the wrong trade, so it is reported as a known exception
// rather than a failure — every cut carries it, and a check that always fails is
// a check nobody reads. The real fix is to assemble without server-side
// subtitles and burn the sidecar, which handles this clause correctly.
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
      console.log("    Not a defect: do not reword it. Assemble without subtitles and burn the sidecar.");
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
      "or skip explainer_video's subtitles entirely and burn the sidecar (see SKILL.md, the guaranteed path)."
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
