// Flags narration clauses that will overflow explainer_video's BURNED-IN captions.
//
//   node scripts/check_caption_fit.js output/episode-1/inner-canon-ch1-trailer-v1.md
//   node scripts/check_caption_fit.js <doc>.md --format 16:9
//   node scripts/check_caption_fit.js output/episode-*/*-v*.md      # sweep every cut
//
// Why this exists, and why it is NOT build_subtitles.js:
//
// There are two caption paths and they fail differently.
//
//   1. The sidecar (build_subtitles.js) pre-splits a long clause across several
//      cues and burns via libass with hard margins, so it always fits. Its
//      "widest line — fits" line reports on THAT path only.
//   2. explainer_video's server-side burn has no wrap, width or position
//      control — `font` is the only exposed option. The backend chunks the
//      voiceover on Whisper word timestamps, i.e. on speech pauses, which fall
//      at punctuation. A clause with no internal punctuation has nowhere to
//      break, so it renders as one long run and can overflow the frame.
//
// So a document can pass build_subtitles.js and still overflow on the assembled
// video. This script checks path 2: every clause, against a two-line budget.
//
// Fix an overflow by adding internal commas to the narration line (which also
// costs pause time — watch the 6-8s take window) and re-recording that block's
// take, ~0.6 credits. Do NOT switch fonts: anton is the most condensed of the
// four available and is already the best fit. See SKILL.md, "Caption wrapping".
//
// No dependencies — .claude/settings.json denies npm install.

const fs = require("fs");

// Frame geometry and Anton metrics, kept identical to build_subtitles.js.
const FORMATS = {
  "9:16": { label: "9:16 vertical trailer", width: 720, fontSize: 54, marginX: 58 },
  "16:9": { label: "16:9 longform episode", width: 1280, fontSize: 44, marginX: 96 },
};
const MAX_LINES = 2;
const SAFETY = 0.92;

const NARROW = "iljtfrI.,;:'\"!|()[]{}`";
const WIDE = "MWmw@%";
function charWidth(ch) {
  if (ch === " ") return 0.24;
  if (NARROW.includes(ch)) return 0.28;
  if (WIDE.includes(ch)) return 0.62;
  if (ch >= "A" && ch <= "Z") return 0.52;
  if (ch >= "0" && ch <= "9") return 0.5;
  return 0.45;
}
const textWidth = (s, fontSize) =>
  [...s].reduce((w, ch) => w + charWidth(ch) * fontSize, 0);

// Same narration-table parse as build_subtitles.js: | n | beat | line |
function parseNarration(md) {
  const re = /^\|\s*(\d+)\s*\|\s*([^|]*?)\s*\|\s*(.+?)\s*\|\s*$/gm;
  const rows = [];
  let m;
  while ((m = re.exec(md)) !== null) {
    const line = m[3].trim();
    if (!/^-+$/.test(line)) rows.push({ block: Number(m[1]), text: line });
  }
  const out = [];
  for (const r of rows) {
    if (r.block === out.length + 1) out.push(r);
    else if (out.length) break;
  }
  return out;
}

// Whisper chunks on speech pauses, which land on punctuation.
const clauses = (text) =>
  text.split(/(?<=[.!?;:,—])\s+/).map((s) => s.trim()).filter(Boolean);

function main() {
  const args = process.argv.slice(2);
  const fmtKey = args.includes("--format") ? args[args.indexOf("--format") + 1] : "9:16";
  const docs = args.filter((a) => !a.startsWith("--") && a !== fmtKey);
  const fmt = FORMATS[fmtKey];
  if (!fmt) {
    console.error(`unknown --format ${fmtKey} (expected 9:16 or 16:9)`);
    process.exit(1);
  }
  if (!docs.length) {
    console.error("usage: node scripts/check_caption_fit.js <cut-document.md>... [--format 9:16|16:9]");
    process.exit(1);
  }

  const usable = (fmt.width - 2 * fmt.marginX) * SAFETY;
  const cap = usable * MAX_LINES;
  let failures = 0;

  console.log(`${fmt.label} — ${Math.round(usable)}px/line, ${MAX_LINES} lines max, ${Math.round(cap)}px budget`);

  for (const doc of docs) {
    const blocks = parseNarration(fs.readFileSync(doc, "utf8"));
    if (!blocks.length) {
      console.error(`  ${doc}: no narration table found`);
      failures++;
      continue;
    }
    const bad = [];
    for (const b of blocks) {
      for (const clause of clauses(b.text)) {
        const px = textWidth(clause, fmt.fontSize);
        if (px > cap) {
          bad.push({ block: b.block, clause, px, lines: Math.ceil(px / usable) });
        }
      }
    }
    console.log(`\n${doc} — ${blocks.length} blocks`);
    if (!bad.length) {
      console.log("  OK — every clause fits in two lines");
      continue;
    }
    failures += bad.length;
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
    process.exit(1);
  }
  console.log("\nAll clauses fit.");
}

main();
