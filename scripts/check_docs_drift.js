// Asserts that CLAUDE.md and README.md still describe the repository they
// actually sit in.
//
//   node scripts/check_docs_drift.js          # report drift; non-zero if any
//   node scripts/check_docs_drift.js --fix    # apply the mechanical corrections first
//
// This repo validates caption geometry with two scripts and, until this one,
// validated its own standing instructions with nothing. That asymmetry cost
// something real: on 2026-08-10 three claims in CLAUDE.md were found false at
// once — the tree listed no suwen/ folder ("the repo holds none") when three
// suwen documents were tracked, it said every cut was pre-render when two had
// rendered, and it directed readers to SKILL.md for a worked example on the
// grounds that no filled production record existed when two did. Each had been
// true when written. None was true by the time it was read, and nothing in the
// repo noticed.
//
// Documentation that is wrong is worse than documentation that is missing: it
// sends a session confidently to the wrong place. The checks below are the ones
// that would have caught those three, plus the numbering guard CLAUDE.md cares
// most about.
//
// What it checks:
//
//   1. Tree completeness   — every cut document under output/ appears in the
//                            CLAUDE.md Structure tree, and the tree names no
//                            document — nor sidecar — that does not exist. The
//                            sidecar half arrived late and was not cosmetic: the
//                            --fix note below says what its absence cost.
//   2. Book/chapter match  — a file's own name agrees with the folder holding
//                            it. Suwen 28 and Lingshu 28 are different chapters;
//                            this is the collision the two-book layout exists to
//                            make impossible, so it is worth asserting rather
//                            than trusting.
//   3. Render/sidecar      — a cut declaring itself RENDERED carries .srt and
//                            .vtt sidecars; one declaring itself pre-render
//                            carries neither. Sidecars are built from take
//                            durations, so they cannot exist before the takes.
//   4. Annotation match    — the tree's inline "RENDERED" / "pre-render" note
//                            agrees with what the document itself declares.
//   5. Script, skill and   — every script in scripts/, every skill under
//      workflow listing      .claude/skills/ and every workflow under
//                            .github/workflows/ appears in the tree. A tool
//                            nobody knows about is a tool nobody runs, a skill
//                            the tree omits is standing instructions nobody
//                            loads, and a CI job the tree omits is a gate
//                            nobody knows they have to pass.
//   6. README agrees       — README.md repeats the layout, the script list and
//                            the three-file split in its own words. It is a
//                            second copy of the same facts, it drifts the same
//                            way, and nothing checked it until now.
//   7. Spelled-out counts  — "Three files carry standing instructions", "the two
//                            procedure skills", "the three-file split". A number
//                            written into prose goes stale the moment a skill is
//                            added, and it is the kind of stale that reads as
//                            authoritative.
//
// ── --fix ─────────────────────────────────────────────────────────────
//
// --fix applies only the corrections that leave the document COMPLETE. It never
// applies one that merely makes this check exit 0 — silencing the check while
// leaving CLAUDE.md less useful than before it ran is the exact failure the
// paragraph above is about. That draws the line in a specific place:
//
//   applied    a tree entry for a document under output/. For a cut the
//              annotation IS the whole description, and it is read straight out
//              of the document's own header; for a translation or an audit the
//              convention is no annotation at all. Either way the inserted line
//              is finished, not a stub.
//   applied    a tree entry naming a document that no longer exists (removed —
//              the filesystem is the source of truth for what exists).
//   applied    the "<cut>.srt/.vtt" sidecar line beside it — but only when the
//              cut document is gone too. This one is here because it was missing:
//              a rendered cut occupies TWO tree lines, --fix removed only the
//              document line, and the run then reported "No drift remains" over a
//              CLAUDE.md still naming two deleted files. That is precisely the
//              silenced-but-incomplete outcome this section exists to rule out,
//              produced by the tool that promises it.
//   applied    a tree annotation that disagrees with its document (the document
//              wins; any prefix on the comment is preserved).
//
//   reported   a new script, skill or workflow. The tree entry for one carries a
//              sentence saying what it does, and nothing here can write that
//              sentence.
//   reported   a stale count. Changing "two" to "three" without writing the
//              third bullet is the same silencing.
//   reported   a book/chapter mismatch (needs a git mv) and a missing or stray
//              sidecar (needs real take durations, or a corrected header).
//   reported   a sidecar line whose files are missing while the cut document is
//              still there. Those sidecars are a build to re-run — check 3 prints
//              the command — so dropping the line would delete a true statement
//              about a cut that still needs it.
//   reported   everything in README.md. Every README claim this script checks is
//              prose, and prose is not mechanically repairable.
//
// Exits non-zero on any drift that remains, and prints the correction rather
// than only the complaint — this check is meant to be fixed, not silenced.
// Unlike check_caption_fit.js, a clean repo here really does exit 0, so this one
// is safe to gate on, and .github/workflows/docs-drift.yml does.

const fs = require("fs");
const path = require("path");

const REPO = path.resolve(__dirname, "..");
const CLAUDE_MD = path.join(REPO, "CLAUDE.md");
const README_MD = path.join(REPO, "README.md");
const OUTPUT_DIR = path.join(REPO, "output");
const SCRIPTS_DIR = path.join(REPO, "scripts");
const SKILLS_DIR = path.join(REPO, ".claude", "skills");
const WORKFLOWS_DIR = path.join(REPO, ".github", "workflows");

// inner-canon-<book><chapter>-<descriptor>.md — the descriptor is left loose on
// purpose so audits and reviews (…-trailer-block-audit.md) are recognised as
// documents belonging to a chapter, even though they are not cuts.
const DOC_NAME = /^inner-canon-(suwen|lingshu)(\d+)-(.+)\.md$/;

// Only trailers and longform episodes have a render status. Translations,
// audits and reviews describe a cut rather than being one, so checks 3 and 4
// do not apply to them.
const IS_CUT = /^(trailer|longform)-v\d+$/;

// Used by check 7 in both directions: read a count out of prose, and name the
// count that prose should have said.
const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });
}

// The Structure tree is the first fenced block after the "## Structure"
// heading. Matching on the heading rather than the first fence in the file
// keeps this working if a fenced example is ever added above it.
//
// Returns the line indices of the two fences rather than the text, because
// --fix edits between them and needs to know where they are.
function fencedBlockAfter(lines, heading) {
  const h = lines.findIndex((l) => l.startsWith(heading));
  if (h === -1) return null;
  const open = lines.findIndex((l, i) => i > h && l.startsWith("```"));
  if (open === -1) return null;
  const close = lines.findIndex((l, i) => i > open && l.startsWith("```"));
  if (close === -1) return null;
  return { open, close };
}

function blockText(lines, bounds) {
  return lines.slice(bounds.open + 1, bounds.close).join("\n");
}

// A cut states its status in its opening lines, in prose rather than a field:
// "**RENDERED — draft tier, 2026-08-09.**", "**Rendered 2026-08-08 — draft
// tier.**", or "**Not rendered. Script and production plan only …**". Negation
// is tested first because "Not rendered" contains "rendered".
//
// The date and the tier are matched by their own patterns rather than one
// combined pattern, because the two rendered cuts in the repo happen to state
// them in opposite orders and both spellings are correct.
function declaredRender(body) {
  const head = body.split("\n").slice(0, 40).join("\n");
  if (/\bnot rendered\b/i.test(head)) return { status: "pre-render" };
  if (!/\brendered\b/i.test(head)) return { status: null };
  const date = head.match(/\b(\d{4}-\d{2}-\d{2})\b/);
  const tier = head.match(/\b(draft|full)\s+tier\b/i);
  return {
    status: "RENDERED",
    date: date ? date[1] : null,
    tier: tier ? tier[1].toLowerCase() : null,
  };
}

// The tree's annotation for a cut, in the form the tree already uses:
// "RENDERED 2026-08-09, draft tier" or "pre-render". A cut whose header names
// neither a date nor a tier still gets a truthful "RENDERED" — the annotation
// check compares the status token, so a partial annotation is accurate rather
// than merely quiet.
function annotationFor(render) {
  if (render.status === "pre-render") return "pre-render";
  if (render.status !== "RENDERED") return null;
  let out = "RENDERED";
  if (render.date) out += ` ${render.date}`;
  if (render.tier) out += `${render.date ? "," : ""} ${render.tier} tier`;
  return out;
}

function findTreeLine(lines, bounds, name) {
  for (let i = bounds.open + 1; i < bounds.close; i++) {
    if (lines[i].includes(name)) return i;
  }
  return -1;
}

// Comment alignment is per-block in the tree — column 52 under output/, 44
// under .claude/ and scripts/. Measure it from the block being written into
// rather than hardcoding it, so an inserted line lands in the same column as
// the ones around it and the diff shows one added line rather than a reflow.
function outputCommentColumn(lines, bounds) {
  const counts = new Map();
  for (let i = bounds.open + 1; i < bounds.close; i++) {
    if (!/^ {4}ch\d+\/\S+\s+#/.test(lines[i])) continue;
    const col = lines[i].indexOf("#");
    counts.set(col, (counts.get(col) || 0) + 1);
  }
  let best = 52;
  let seen = 0;
  for (const [col, n] of counts) {
    if (n > seen) {
      best = col;
      seen = n;
    }
  }
  return best;
}

// Within a chapter the tree runs trailers first, then the documents describing
// them, then longform, then translations — the order the work is produced in.
// A new entry is sorted in rather than appended, so --fix lands the line where a
// person would have put it and the diff stays one line long.
const KIND_RANK = [
  [/^trailer-v\d+$/, 0],
  [/^trailer\b/, 1], // block audits, render reviews, script reviews
  [/^longform-v\d+$/, 2],
  [/^longform\b/, 3],
  [/^translation\b/, 4],
];

// [chapter, kind, version, sidecar] — one comparison that orders the whole
// book run, so chapter order and within-chapter order need no separate passes.
// The sidecar component keeps "<cut>.srt/.vtt" directly below its own cut.
function sortKey(chapter, descriptor, isSidecar) {
  const kind = KIND_RANK.find(([re]) => re.test(descriptor));
  const version = descriptor.match(/-v(\d+)$/);
  return [
    chapter,
    kind ? kind[1] : KIND_RANK.length,
    version ? Number(version[1]) : 0,
    isSidecar ? 1 : 0,
  ];
}

// The same key, read back off a line already in the tree. Returns null for a
// line that names no document — a book header, a bare comment — which the
// caller skips rather than trying to order against.
function lineSortKey(line) {
  const m = line.match(/inner-canon-(?:suwen|lingshu)(\d+)-(.+?)(\.md|\.srt|\.vtt)\b/);
  if (!m) return null;
  return sortKey(Number(m[1]), m[2], m[3] !== ".md");
}

function compareKeys(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return a[i] - b[i];
  }
  return 0;
}

function treeEntry(chapter, name, annotation, column) {
  const label = `    ch${chapter}/${name}`;
  if (!annotation) return label;
  return label + " ".repeat(Math.max(column - label.length, 2)) + "# " + annotation;
}

// Applies one mechanical correction to CLAUDE.md's line array, in place.
// Returns a one-line note on what it did, or null if the tree has moved under
// it — in which case the problem stays reported rather than being silently
// dropped.
function applyFix(lines, a) {
  const bounds = fencedBlockAfter(lines, "## Structure");
  if (!bounds) return null;

  if (a.kind === "remove") {
    const i = findTreeLine(lines, bounds, a.name);
    if (i === -1) return null;
    lines.splice(i, 1);
    // Phrased for both callers: a document name, and a "<cut>.srt/.vtt" line
    // that stands for two files.
    return `− dropped "${a.name}" from the tree; nothing under output/ matches it`;
  }

  if (a.kind === "annotate") {
    const i = findTreeLine(lines, bounds, a.name);
    if (i === -1) return null;
    const hash = lines[i].indexOf("#");
    if (hash === -1) return null;
    const comment = lines[i].slice(hash + 1);
    // Replace only the trailing status token, so a decorated annotation
    // ("slate rank 1, publish slot 1; pre-render") keeps its decoration.
    const next = comment.replace(/(RENDERED\b.*|pre-render)\s*$/, a.annotation);
    if (next === comment) return null;
    lines[i] = lines[i].slice(0, hash + 1) + next;
    return `~ ${a.name} annotated "${a.annotation}"`;
  }

  if (a.kind === "add") {
    const book = lines.findIndex(
      (l, i) =>
        i > bounds.open && i < bounds.close && l.startsWith(`  ${a.book}/`)
    );
    if (book === -1) return null;

    // The book's run of entries: consecutive 4-space-indented lines. The
    // trailing "  # Every rendered cut also carries…" note and the next book
    // header are both indented two, so the run ends before either of them.
    let end = book + 1;
    while (end < bounds.close && /^ {4}\S/.test(lines[end])) end++;

    // File it after the last entry that sorts at or before it, which puts it in
    // chapter order and, within its chapter, in production order.
    const key = sortKey(a.chapter, a.descriptor, false);
    let at = book + 1;
    for (let i = book + 1; i < end; i++) {
      const other = lineSortKey(lines[i]);
      if (other && compareKeys(other, key) <= 0) at = i + 1;
    }

    const line = treeEntry(
      a.chapter,
      a.name,
      a.annotation,
      outputCommentColumn(lines, bounds)
    );
    lines.splice(at, 0, line);
    return `+ listed ${a.book}/ch${a.chapter}/${a.name}${a.annotation ? ` (${a.annotation})` : ""}`;
  }

  return null;
}

function collect() {
  const claudeLines = fs.readFileSync(CLAUDE_MD, "utf8").split("\n");
  const bounds = fencedBlockAfter(claudeLines, "## Structure");
  if (bounds === null) return null;
  const tree = blockText(claudeLines, bounds);

  const readme = fs.readFileSync(README_MD, "utf8");
  const readmeLines = readme.split("\n");
  const layoutBounds = fencedBlockAfter(readmeLines, "## Layout");
  const layout = layoutBounds ? blockText(readmeLines, layoutBounds) : null;

  const problems = [];
  const allFiles = walk(OUTPUT_DIR);
  const docs = allFiles.filter((f) => f.endsWith(".md"));
  const skills = walk(SKILLS_DIR).filter((f) => f.endsWith(".md"));
  // A skill's entry point, as opposed to any reference/ material beside it.
  const skillDocs = skills.filter((f) =>
    /^\.claude\/skills\/[^/]+\/SKILL\.md$/.test(path.relative(REPO, f))
  );
  // Top-level scripts only. lib/caption_metrics.js is shared plumbing that the
  // CLAUDE.md tree lists and README has no reason to: nobody runs it directly.
  const scripts = fs
    .readdirSync(SCRIPTS_DIR, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".js"))
    .map((e) => e.name);

  // § Which file wins runs from its own heading to the next one.
  const claudeMd = claudeLines.join("\n");
  const winsStart = claudeMd.indexOf("## Which file wins");
  const winsEnd = claudeMd.indexOf("## Structure");
  const winsTable =
    winsStart !== -1 && winsEnd > winsStart
      ? claudeMd.slice(winsStart, winsEnd)
      : null;

  // ── 1 & 2: every document is listed, and sits where its name says ──────
  for (const full of docs) {
    const rel = path.relative(REPO, full);
    const name = path.basename(full);
    const parts = path.relative(OUTPUT_DIR, full).split(path.sep);
    const m = name.match(DOC_NAME);

    if (!tree.includes(name)) {
      // Only offer to insert a document whose name parses and whose folder
      // agrees with it. Anything else is about to be reported as a naming or
      // filing problem, and filing it into the tree first would just record the
      // mistake in CLAUDE.md.
      const filed =
        m && m[1] === parts[0] && m[2] === (parts[1] || "").replace(/^ch/, "");
      const annotation =
        filed && IS_CUT.test(m[3])
          ? annotationFor(declaredRender(fs.readFileSync(full, "utf8")))
          : null;
      problems.push({
        rel,
        what: "not listed in the CLAUDE.md Structure tree",
        fix: `add "${parts.slice(0, -1).join("/")}/${name}" to the tree`,
        apply: filed
          ? {
              kind: "add",
              book: m[1],
              chapter: Number(m[2]),
              descriptor: m[3],
              name,
              annotation,
            }
          : null,
      });
    }

    if (!m) {
      problems.push({
        rel,
        what: "filename does not match inner-canon-<book><N>-<descriptor>.md",
        fix: "rename it, or extend DOC_NAME in this script if a new document kind is intended",
      });
      continue;
    }
    const [, nameBook, nameCh] = m;
    const [folderBook, folderCh] = [parts[0], (parts[1] || "").replace(/^ch/, "")];
    if (nameBook !== folderBook || nameCh !== folderCh) {
      problems.push({
        rel,
        what: `names ${nameBook} ${nameCh} but sits in ${folderBook}/ch${folderCh}`,
        fix: "Suwen and Lingshu are numbered separately — move the file or correct its name",
      });
    }
  }

  // ── phantom entries: the tree naming something that does not exist ─────
  // Built from every file under output/, not only the .md documents, because the
  // tree names the sidecars too.
  const real = new Set(allFiles.map((f) => path.basename(f)));
  for (const named of tree.match(/inner-canon-[a-z0-9-]+\.md/g) || []) {
    if (!real.has(named)) {
      problems.push({
        rel: "CLAUDE.md",
        what: `tree lists "${named}", which does not exist under output/`,
        fix: "remove the entry, or restore the file if it was deleted by mistake",
        apply: { kind: "remove", name: named },
      });
    }
  }

  // A rendered cut's two sidecars share one tree line, written
  // "<cut>.srt/.vtt". Until this loop existed nothing checked them in either
  // direction — the scan above matches ".md" only — and that gap cost more than
  // an unnoticed stale line. Deleting a rendered cut left --fix removing the
  // document line, finding nothing else to say, and printing "No drift remains"
  // over a tree still naming two files that were gone: exactly the
  // silenced-but-wrong CLAUDE.md the --fix contract at the top of this file
  // promises never to produce.
  //
  // Whether the line may be auto-removed turns on the cut document. Gone too →
  // the entry is dead and removing it is the complete correction. Still there →
  // the sidecars are a build to re-run, not an entry to delist; check 3 above
  // already prints that command, and splicing the line out here would make
  // CLAUDE.md less true while silencing nothing.
  for (const [entry, stem] of tree.matchAll(/(inner-canon-[a-z0-9-]+)\.srt\/\.vtt/g)) {
    const missing = [".srt", ".vtt"].filter((ext) => !real.has(stem + ext));
    if (!missing.length) continue;
    const docGone = !real.has(`${stem}.md`);
    problems.push({
      rel: "CLAUDE.md",
      what: `tree lists "${entry}", but ${missing.join(" and ")} ${
        missing.length > 1 ? "do" : "does"
      } not exist under output/`,
      fix: docGone
        ? "remove the entry — the cut document it belongs to is gone as well"
        : "the cut document is still here, so rebuild rather than delist: node scripts/build_subtitles.js <the cut>.md",
      apply: docGone ? { kind: "remove", name: entry } : null,
    });
  }

  // ── 3 & 4: render status against sidecars, and against the tree note ───
  for (const full of docs) {
    const rel = path.relative(REPO, full);
    const name = path.basename(full);
    const m = name.match(DOC_NAME);
    if (!m || !IS_CUT.test(m[3])) continue;

    const render = declaredRender(fs.readFileSync(full, "utf8"));
    if (!render.status) {
      problems.push({
        rel,
        what: "declares no render status in its opening lines",
        fix: 'state "RENDERED — <tier>, <date>." or "Not rendered." near the top',
      });
      continue;
    }

    const stem = full.replace(/\.md$/, "");
    const missing = [".srt", ".vtt"].filter((ext) => !fs.existsSync(stem + ext));
    if (render.status === "RENDERED" && missing.length) {
      problems.push({
        rel,
        what: `declares RENDERED but is missing ${missing.join(" and ")}`,
        fix: `node scripts/build_subtitles.js ${rel}`,
      });
    }
    // A pre-render cut should carry NEITHER sidecar. Testing `missing.length
    // === 0` only caught the both-present case and let a half-built pair
    // through — build_subtitles.js writes the two together, so one on its own
    // means a partial write or a hand-deleted file, which is worth surfacing.
    if (render.status === "pre-render" && missing.length < 2) {
      const present = [".srt", ".vtt"].filter((ext) => fs.existsSync(stem + ext));
      problems.push({
        rel,
        what:
          missing.length === 0
            ? "declares itself pre-render but carries both sidecars"
            : `declares itself pre-render but carries ${present.join(" and ")}`,
        fix: "sidecars come from take durations — update the header if it has in fact rendered, or remove the stray sidecar",
      });
    }

    // The tree annotation lives on the same line as the filename.
    const line = tree.split("\n").find((l) => l.includes(name));
    if (line) {
      const noted = /RENDERED/.test(line)
        ? "RENDERED"
        : /pre-render/.test(line)
          ? "pre-render"
          : null;
      if (noted && noted !== render.status) {
        problems.push({
          rel: "CLAUDE.md",
          what: `tree annotates ${name} as ${noted}, the document declares ${render.status}`,
          fix: `change the tree annotation to ${render.status}`,
          apply: { kind: "annotate", name, annotation: annotationFor(render) },
        });
      }
    }
  }

  // ── 5: every script, skill and workflow is documented ─────────────────
  // Skills are checked by path, not basename: they are all called SKILL.md, so
  // a basename test would pass on any one of them being listed. This gap is not
  // hypothetical — drive-context-memory was added to the tree by hand, and
  // nothing would have noticed if it had not been.
  for (const full of walk(SCRIPTS_DIR).filter((f) => f.endsWith(".js"))) {
    const name = path.basename(full);
    if (!tree.includes(name)) {
      problems.push({
        rel: path.relative(REPO, full),
        what: "not listed in the CLAUDE.md Structure tree",
        fix: `add "${path.relative(REPO, full)}" to the tree with a one-line note on what it does`,
      });
    }
  }
  for (const full of skills) {
    const rel = path.relative(REPO, full);
    const treePath = rel.replace(/^\.claude\//, "");
    if (!tree.includes(treePath)) {
      problems.push({
        rel,
        what: "skill not listed in the CLAUDE.md Structure tree",
        fix: `add "${treePath}" to the tree, and give it a row in § Which file wins if it carries standing instructions`,
      });
    }
    // Check 5's fix text has always asked for this row; nothing asserted it.
    // A skill absent from that table is standing instructions with no stated
    // relationship to the other two files, which is how they drift.
    if (!skillDocs.includes(full)) continue;
    if (winsTable !== null && !winsTable.includes(treePath)) {
      problems.push({
        rel,
        what: "not named in the CLAUDE.md § Which file wins table",
        fix: `add a row for "${treePath}" saying what it owns, so the split stays decidable`,
      });
    }
  }
  for (const full of walk(WORKFLOWS_DIR).filter((f) => /\.ya?ml$/.test(f))) {
    const rel = path.relative(REPO, full);
    if (!tree.includes(path.basename(full))) {
      problems.push({
        rel,
        what: "workflow not listed in the CLAUDE.md Structure tree",
        fix: `add "${rel}" to the tree with a one-line note on what it gates`,
      });
    }
  }

  // ── 6: README repeats the same facts in its own words ─────────────────
  if (layout === null) {
    problems.push({
      rel: "README.md",
      what: "no fenced layout block found under '## Layout'",
      fix: "restore the block, or update fencedBlockAfter() in this script",
    });
  } else {
    const dirs = fs
      .readdirSync(REPO, { withFileTypes: true })
      .filter((e) => e.isDirectory() && e.name !== ".git" && e.name !== "node_modules")
      .map((e) => e.name)
      .sort();
    for (const dir of dirs) {
      if (!layout.includes(`${dir}/`)) {
        problems.push({
          rel: "README.md",
          what: `layout block does not mention ${dir}/`,
          fix: `add a "${dir}/" line to the ## Layout block with a short note on what it holds`,
        });
      }
    }
  }
  for (const name of scripts) {
    if (!readme.includes(name)) {
      problems.push({
        rel: "README.md",
        what: `does not mention scripts/${name}`,
        fix: `add it to the ## Scripts section with the command line somebody would actually type`,
      });
    }
  }
  for (const full of skillDocs) {
    const rel = path.relative(REPO, full);
    if (!readme.includes(rel)) {
      problems.push({
        rel: "README.md",
        what: `does not mention ${rel}`,
        fix: "add it to § Where the rules live, saying in one line what it owns",
      });
    }
  }

  // ── 7: counts spelled into prose ──────────────────────────────────────
  // Each pattern captures the number word; `expected` is what the repo actually
  // holds right now. Prose that does not use the phrase at all raises nothing —
  // this checks staleness, not that the sentence exists.
  const skillCount = skillDocs.length;
  const alternation = NUMBER_WORDS.join("|");
  const COUNTS = [
    {
      files: ["CLAUDE.md", "README.md"],
      re: new RegExp(`\\b(${alternation}) files carry standing instructions\\b`, "i"),
      expected: skillCount + 1,
      subject: "standing-instruction files",
    },
    {
      files: ["CLAUDE.md", "README.md"],
      re: new RegExp(`\\b(${alternation})-file split\\b`, "i"),
      expected: skillCount + 1,
      subject: "standing-instruction files",
    },
    {
      files: ["README.md"],
      re: new RegExp(`\\bthe (${alternation}) procedure skills\\b`, "i"),
      expected: skillCount,
      subject: "procedure skills",
    },
  ];
  const bodies = { "CLAUDE.md": claudeMd, "README.md": readme };
  for (const c of COUNTS) {
    for (const file of c.files) {
      const m = bodies[file].match(c.re);
      if (!m) continue;
      const said = NUMBER_WORDS.indexOf(m[1].toLowerCase());
      if (said === c.expected) continue;
      problems.push({
        rel: file,
        what: `says "${m[0]}" — the repo holds ${c.expected} ${c.subject}`,
        fix: `write "${NUMBER_WORDS[c.expected]}" and, more importantly, update the prose around it — a corrected number over an uncorrected list is worse than the stale number`,
      });
    }
  }

  return { problems, docCount: docs.length };
}

function main() {
  const args = process.argv.slice(2);
  const fix = args.includes("--fix");
  const unknown = args.filter((a) => a !== "--fix");
  if (unknown.length) {
    console.error(`Unknown argument: ${unknown[0]}`);
    console.error("Usage: node scripts/check_docs_drift.js [--fix]");
    process.exit(2);
  }

  let result = collect();
  if (result === null) {
    console.error("CLAUDE.md: no fenced tree found under '## Structure'.");
    console.error("  This check cannot run. Restore the tree or update this script.");
    process.exit(1);
  }

  const applied = [];
  if (fix) {
    const fixable = result.problems.filter((p) => p.apply);
    if (fixable.length) {
      const lines = fs.readFileSync(CLAUDE_MD, "utf8").split("\n");
      for (const p of fixable) {
        const note = applyFix(lines, p.apply);
        if (note) applied.push(note);
      }
      if (applied.length) {
        fs.writeFileSync(CLAUDE_MD, lines.join("\n"));
        // Re-check against what was actually written, not against what the
        // edits were expected to produce.
        result = collect() || result;
      }
    }
  }

  const { problems, docCount } = result;
  console.log(
    `Checked ${docCount} document(s) under output/ against the CLAUDE.md Structure tree.`
  );

  if (applied.length) {
    console.log(`\nApplied ${applied.length} correction(s) to CLAUDE.md:\n`);
    for (const note of applied) console.log(`  ${note}`);
    console.log("\nRead the diff — this edited a file every session loads in full.");
  }

  if (!problems.length) {
    console.log(
      applied.length
        ? "\nNo drift remains. CLAUDE.md and README.md match the repository."
        : "No drift. CLAUDE.md and README.md match the repository."
    );
    return;
  }

  const repairable = problems.filter((p) => p.apply).length;
  console.log(`\n${problems.length} drift(s)${applied.length ? " remain" : ""}:\n`);
  for (const p of problems) {
    console.log(`  ${p.rel}`);
    console.log(`    ${p.what}`);
    console.log(`    fix: ${p.fix}`);
  }
  if (repairable && !fix) {
    console.log(
      `\n${repairable} of these can be applied with: node scripts/check_docs_drift.js --fix`
    );
    console.log("The rest need a sentence somebody has to write.");
  }
  console.log(
    "\nCLAUDE.md is loaded into every session in full, so a wrong line here is read"
  );
  console.log("far more often than it is written. Fix the docs, not this check.");
  process.exit(1);
}

main();
