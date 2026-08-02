// Builds guaranteed-wrapping subtitle sidecars for a cut of The Emperor's Inner Canon.
//
//   node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v1.md
//   node scripts/build_subtitles.js <doc.md> --format 16:9
//
// Reads the cut's own production document — the narration table for the text and
// the production record's voiceover line for each take's duration — and writes
// <doc>.srt and <doc>.vtt beside it.
//
// Why this exists: explainer_video's burned-in captions expose only `font`, with
// no wrap, width or position control, so a long narration line can render past
// the frame. This path produces a sidecar that is pre-wrapped to a measured
// character budget, and prints an ffmpeg/libass burn command whose margins make
// the wrap a hard guarantee rather than an estimate. See
// .claude/skills/higgsfield-production/SKILL.md, "Caption wrapping".
//
// No dependencies — .claude/settings.json denies npm install.

const fs = require("fs");
const path = require("path");

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
function parseNarration(md) {
  const blocks = [];
  const re = /^\|\s*(\d+)\s*\|\s*([^|]*?)\s*\|\s*(.+?)\s*\|\s*$/gm;
  let m;
  while ((m = re.exec(md)) !== null) {
    const line = m[3].trim();
    if (/^-+$/.test(line)) continue; // table rule
    blocks.push({ block: Number(m[1]), beat: m[2].trim(), text: line });
  }
  // The narration table is the first run of consecutive block numbers from 1.
  const out = [];
  for (const b of blocks) {
    if (b.block === out.length + 1) out.push(b);
    else if (out.length) break;
  }
  return out;
}

// Production record: - **Voiceover** (...): block 1 `uuid` (8.1s), block 2 `uuid` (5.0s), ...
function parseDurations(md) {
  const vo = md.split("\n").find((l) => /\*\*Voiceover\*\*/.test(l));
  if (!vo) return {};
  const durations = {};
  const re = /block\s+(\d+)\s+`[^`]+`\s*\((\d+(?:\.\d+)?)s\)/g;
  let m;
  while ((m = re.exec(vo)) !== null) durations[Number(m[1])] = Number(m[2]);
  return durations;
}

// ── Wrapping and cue splitting ───────────────────────────────

// Greedy wrap to at most `maxLines`, each within `usable` px. Returns null when
// the text cannot fit, which tells the caller to split into another cue.
function wrapToLines(text, usable, fontSize, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? line + " " + word : word;
    if (textWidth(candidate, fontSize) <= usable) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
      if (lines.length >= maxLines) return null;
    }
  }
  if (line) lines.push(line);
  return lines.length <= maxLines ? lines : null;
}

// Split one block's narration into cues that each fit the frame. Prefers to
// break at sentence and clause boundaries, which is also where the speech pauses.
function splitIntoCues(text, usable, fontSize) {
  const pieces = text
    .split(/(?<=[.!?;:,—])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const cues = [];
  let current = "";
  const flush = () => {
    if (current) {
      cues.push(current);
      current = "";
    }
  };

  for (const piece of pieces) {
    const candidate = current ? current + " " + piece : piece;
    if (wrapToLines(candidate, usable, fontSize, MAX_LINES)) {
      current = candidate;
      continue;
    }
    flush();
    if (wrapToLines(piece, usable, fontSize, MAX_LINES)) {
      current = piece;
    } else {
      // A single clause too long for two lines — break it on word count.
      const words = piece.split(/\s+/);
      let chunk = "";
      for (const word of words) {
        const next = chunk ? chunk + " " + word : word;
        if (wrapToLines(next, usable, fontSize, MAX_LINES)) {
          chunk = next;
        } else {
          if (chunk) cues.push(chunk);
          chunk = word;
        }
      }
      current = chunk;
    }
  }
  flush();
  return cues.length ? cues : [text];
}

// ── Timing ───────────────────────────────────────────────────
// Blocks are fixed windows and a short take is centered in its window, so the
// take starts at (BLOCK_SECONDS - duration) / 2 into the block. Cues divide the
// take proportionally to their length.
function timeCues(blocks, durations, usable, fontSize) {
  const out = [];
  for (const b of blocks) {
    const dur = durations[b.block];
    const blockStart = (b.block - 1) * BLOCK_SECONDS;
    const take = dur ?? BLOCK_SECONDS;
    const start = blockStart + Math.max(0, (BLOCK_SECONDS - take) / 2);

    const cues = splitIntoCues(b.text, usable, fontSize);
    const total = cues.reduce((n, c) => n + c.length, 0);
    let t = start;
    cues.forEach((cue, i) => {
      const share = (cue.length / total) * take;
      const end = i === cues.length - 1 ? start + take : t + share;
      out.push({
        block: b.block,
        start: t,
        end,
        lines: wrapToLines(cue, usable, fontSize, MAX_LINES) || [cue],
        estimated: dur === undefined,
      });
      t = end;
    });
  }
  return out;
}

// ── Output ───────────────────────────────────────────────────
const pad = (n, w = 2) => String(n).padStart(w, "0");
function stamp(sec, sep) {
  const ms = Math.round((sec - Math.floor(sec)) * 1000);
  const s = Math.floor(sec);
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}${sep}${pad(ms, 3)}`;
}

function toSrt(cues) {
  return (
    cues
      .map((c, i) => `${i + 1}\n${stamp(c.start, ",")} --> ${stamp(c.end, ",")}\n${c.lines.join("\n")}`)
      .join("\n\n") + "\n"
  );
}

function toVtt(cues) {
  return (
    "WEBVTT\n\n" +
    cues
      .map((c) => `${stamp(c.start, ".")} --> ${stamp(c.end, ".")}\n${c.lines.join("\n")}`)
      .join("\n\n") +
    "\n"
  );
}

// The burn command. libass measures the real Anton glyphs and wraps inside
// MarginL/MarginR, so nothing can render outside the safe area — this is the
// part that makes the fit a guarantee rather than an estimate.
function burnCommand(srtPath, fmt) {
  const style = [
    "FontName=Anton",
    `Fontsize=${fmt.fontSize}`,
    "PrimaryColour=&H00FFFFFF",
    "OutlineColour=&H00000000",
    "BorderStyle=1",
    "Outline=3",
    "Shadow=1",
    "Alignment=2",
    `MarginL=${fmt.marginX}`,
    `MarginR=${fmt.marginX}`,
    `MarginV=${fmt.marginV}`,
    "WrapStyle=0",
  ].join(",");
  return [
    "ffmpeg -i <cut>.mp4 \\",
    `  -vf "subtitles=${srtPath}:force_style='${style}'" \\`,
    "  -c:a copy <cut>-subtitled.mp4",
  ].join("\n");
}

// ── CLI ──────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const docPath = args.find((a) => !a.startsWith("--"));
  if (!docPath) {
    console.error("usage: node scripts/build_subtitles.js <cut-document.md> [--format 9:16|16:9]");
    process.exit(1);
  }
  const fmtKey = args.includes("--format") ? args[args.indexOf("--format") + 1] : "9:16";
  const fmt = FORMATS[fmtKey];
  if (!fmt) {
    console.error(`unknown --format ${fmtKey} (expected 9:16 or 16:9)`);
    process.exit(1);
  }

  const md = fs.readFileSync(docPath, "utf8");
  const blocks = parseNarration(md);
  if (!blocks.length) {
    console.error(`no narration table found in ${docPath} — expected rows like "| 1 | beat | line |"`);
    process.exit(1);
  }
  const durations = parseDurations(md);

  const usable = (fmt.width - 2 * fmt.marginX) * SAFETY;
  const cues = timeCues(blocks, durations, usable, fmt.fontSize);

  const base = docPath.replace(/\.md$/, "");
  fs.writeFileSync(`${base}.srt`, toSrt(cues));
  fs.writeFileSync(`${base}.vtt`, toVtt(cues));

  const budget = Math.floor(usable / (0.45 * fmt.fontSize));
  const missing = blocks.filter((b) => durations[b.block] === undefined);
  const widest = Math.max(...cues.flatMap((c) => c.lines.map((l) => textWidth(l, fmt.fontSize))));

  console.log(`${fmt.label} — ${fmt.width}x${fmt.height}`);
  console.log(`  blocks       ${blocks.length}`);
  console.log(`  cues         ${cues.length}`);
  console.log(`  line budget  ~${budget} chars (${Math.round(usable)}px usable, max ${MAX_LINES} lines)`);
  console.log(`  widest line  ${Math.round(widest)}px${widest <= usable ? " — fits" : " — OVER, libass will re-wrap"}`);
  if (missing.length) {
    console.log(`  WARNING: no take duration for block(s) ${missing.map((b) => b.block).join(", ")};`);
    console.log(`           assumed a full ${BLOCK_SECONDS}s. Add them to the production record and re-run.`);
  }
  console.log(`  wrote        ${path.basename(base)}.srt, ${path.basename(base)}.vtt`);
  console.log(`\nBurn (libass enforces the margins — this is the guarantee):\n`);
  console.log(burnCommand(`${base}.srt`, fmt));
}

main();
