// Shared caption geometry for The Emperor's Inner Canon.
//
// Both caption tools measure the same thing — how much text fits on a subtitle
// line — so the frame geometry, the Anton metrics and the narration-table parser
// live here rather than being copy-pasted. They were duplicated across
// build_subtitles.js and check_caption_fit.js and held identical only by a
// comment, which meant a change to Anton's metrics or the margins in one file
// would make the two scripts silently disagree about whether a cut fits.

// ── Frame geometry ───────────────────────────────────────────
// MarginL/R/V and Fontsize are pixels at the video's own resolution (ffmpeg sets
// libass PlayRes from the video). Usable width is what a caption line may occupy.
const FORMATS = {
  "9:16": {
    label: "9:16 vertical trailer",
    width: 720,
    height: 1280,
    fontSize: 54,
    marginX: 58,   // ~8% a side
    marginV: 150,  // clear of Shorts / Reels / TikTok bottom chrome
  },
  "16:9": {
    label: "16:9 longform episode",
    width: 1280,
    height: 720,
    fontSize: 44,
    marginX: 96,
    marginV: 60,
  },
};

const BLOCK_SECONDS = 10; // fixed assembly window
const MAX_LINES = 2;      // never more than two lines on screen
const SAFETY = 0.92;      // shrink the computed budget; estimates run optimistic

// What one caption line may occupy, in pixels.
const usableWidth = (fmt) => (fmt.width - 2 * fmt.marginX) * SAFETY;

// ── Anton metrics ────────────────────────────────────────────
// Advance width as a fraction of font size. Anton is a heavy condensed sans, so
// these run narrower than a normal-width face. Approximate by character class —
// close enough to pre-wrap sensibly, and libass does the authoritative wrap.
const NARROW = "iljtfrI.,;:'\"!|()[]{}`";
const WIDE = "MWmw@%";

function charWidth(ch) {
  if (ch === " ") return 0.24;
  if (NARROW.includes(ch)) return 0.28;
  if (WIDE.includes(ch)) return 0.62;
  if (ch >= "A" && ch <= "Z") return 0.52;
  if (ch >= "0" && ch <= "9") return 0.5;
  return 0.45; // lowercase and everything else
}

function textWidth(str, fontSize) {
  let w = 0;
  for (const ch of str) w += charWidth(ch) * fontSize;
  return w;
}

// ── Document parsing ─────────────────────────────────────────
// Narration table rows: | 1 | The fear | For most of history, ... |
// Exactly three columns — a fourth would be captured into the caption text.
function parseNarration(md) {
  const re = /^\|\s*(\d+)\s*\|\s*([^|]*?)\s*\|\s*(.+?)\s*\|\s*$/gm;
  const rows = [];
  let m;
  while ((m = re.exec(md)) !== null) {
    const line = m[3].trim();
    if (/^-+$/.test(line)) continue; // table rule
    rows.push({ block: Number(m[1]), beat: m[2].trim(), text: line });
  }
  // The narration table is the first run of consecutive block numbers from 1.
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

// Resolve --format from argv, and find the document paths, skipping the value
// that follows --format so `--format 16:9 doc.md` does not treat "16:9" as a doc.
function parseArgs(argv) {
  const fmtIdx = argv.indexOf("--format");
  const fmtKey = fmtIdx !== -1 ? argv[fmtIdx + 1] : "9:16";
  const docs = argv.filter(
    (a, i) => !a.startsWith("--") && !(fmtIdx !== -1 && i === fmtIdx + 1)
  );
  return { fmtKey, fmt: FORMATS[fmtKey], docs };
}

module.exports = {
  FORMATS,
  BLOCK_SECONDS,
  MAX_LINES,
  SAFETY,
  usableWidth,
  charWidth,
  textWidth,
  parseNarration,
  clauses,
  parseArgs,
};
