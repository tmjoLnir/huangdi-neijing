// Builds guaranteed-wrapping subtitle sidecars for a cut of The Emperor's Inner Canon.
//
//   node scripts/build_subtitles.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v1.md
//   node scripts/build_subtitles.js <doc.md> --format 16:9
//
// Reads the cut's own production document — the narration table for the text and
// the production record's voiceover line for each take's duration — and writes
// <doc>.srt and <doc>.vtt beside it.
//
// Why this exists, and how it differs from check_caption_fit.js:
// see .claude/skills/higgsfield-production/SKILL.md, "Subtitles".

const fs = require("fs");
const path = require("path");
const {
  FORMATS,
  BLOCK_SECONDS,
  MAX_LINES,
  usableWidth,
  textWidth,
  parseNarration,
  parseArgs,
} = require("./lib/caption_metrics");

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
// MarginL/MarginR, so nothing can render outside the safe area — that is what
// makes the fit a guarantee rather than an estimate. It only holds once the
// numbers below mean video pixels, which is what step 1 is for:
//
// libass reads Fontsize and MarginL/R/V in the ASS script's own PlayRes
// coordinate space, not in video pixels. ffmpeg's SRT->ASS converter hardcodes
// PlayResX/Y to 384x288, so burning the .srt directly makes libass scale every
// value here by frame_height/288 — ~4.4x on a 1280-tall cut. Anton lands about
// 240px, single words no longer fit between the margins, and lines spill off
// frame. Re-targeting PlayRes to the cut's own resolution makes these values
// mean what they say.
//
// The style also assumes Anton is installed and resolvable (check with
// `fc-match Anton`). libass substitutes a wider default silently, which breaks
// the measured fit with no warning — the sidecar still says "fits".
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
  // Scratch artifact of the burn, not a deliverable — park it beside the
  // downloaded MP4 in renders/, which .gitignore already covers.
  const rendersDir = path.join(path.dirname(srtPath), "renders");
  const assPath = path.join(rendersDir, path.basename(srtPath).replace(/\.srt$/, ".ass"));
  const scaleFactor = (fmt.height / 288).toFixed(1);
  return [
    `# 1. Re-target PlayRes to ${fmt.width}x${fmt.height}. Required: ffmpeg's SRT->ASS`,
    `#    converter hardcodes 384x288, which scales the style below by ~${scaleFactor}x.`,
    `mkdir -p ${rendersDir}`,
    `ffmpeg -i ${srtPath} -f ass - \\`,
    `  | sed 's/^PlayResX: .*/PlayResX: ${fmt.width}/; s/^PlayResY: .*/PlayResY: ${fmt.height}/' \\`,
    `  > ${assPath}`,
    "",
    `# 2. Burn. The cut must be ${fmt.width}x${fmt.height} at this point — prepend`,
    `#    scale=${fmt.width}:${fmt.height}, to the -vf chain when burning a lower-res draft.`,
    "ffmpeg -i <cut>.mp4 \\",
    `  -vf "subtitles=${assPath}:force_style='${style}'" \\`,
    "  -c:a copy <cut>-subtitled.mp4",
  ].join("\n");
}

// ── CLI ──────────────────────────────────────────────────────
function main() {
  const { fmtKey, fmt, docs } = parseArgs(process.argv.slice(2));
  const docPath = docs[0];
  if (!docPath) {
    console.error("usage: node scripts/build_subtitles.js <cut-document.md> [--format 9:16|16:9]");
    process.exit(1);
  }
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

  const usable = usableWidth(fmt);
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
  console.log(`\nBurn (libass enforces the margins — but only once step 1 has run):\n`);
  console.log(burnCommand(`${base}.srt`, fmt));
}

main();
