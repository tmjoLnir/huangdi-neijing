// Asserts that CLAUDE.md still describes the repository it actually sits in.
//
//   node scripts/check_docs_drift.js
//
// This repo validates caption geometry with two scripts and, until now,
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
//                            document that does not exist.
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
//   5. Script listing      — every script in scripts/ appears in the tree. A
//                            tool nobody knows about is a tool nobody runs.
//
// Exits non-zero on any drift, and prints the correction rather than only the
// complaint — this check is meant to be fixed, not silenced. Unlike
// check_caption_fit.js, a clean repo here really does exit 0, so this one is
// safe to gate on.

const fs = require("fs");
const path = require("path");

const REPO = path.resolve(__dirname, "..");
const CLAUDE_MD = path.join(REPO, "CLAUDE.md");
const OUTPUT_DIR = path.join(REPO, "output");
const SCRIPTS_DIR = path.join(REPO, "scripts");

// inner-canon-<book><chapter>-<descriptor>.md — the descriptor is left loose on
// purpose so audits and reviews (…-trailer-block-audit.md) are recognised as
// documents belonging to a chapter, even though they are not cuts.
const DOC_NAME = /^inner-canon-(suwen|lingshu)(\d+)-(.+)\.md$/;

// Only trailers and longform episodes have a render status. Translations,
// audits and reviews describe a cut rather than being one, so checks 3 and 4
// do not apply to them.
const IS_CUT = /^(trailer|longform)-v\d+$/;

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
function structureTree(md) {
  const heading = md.indexOf("\n## Structure");
  if (heading === -1) return null;
  const open = md.indexOf("```", heading);
  if (open === -1) return null;
  const close = md.indexOf("```", open + 3);
  if (close === -1) return null;
  return md.slice(open + 3, close);
}

// A cut states its status in its opening lines, in prose rather than a field:
// "**RENDERED — draft tier, 2026-08-09.**", "**Rendered 2026-08-08 …**", or
// "**Not rendered. Script and production plan only …**". Negation is tested
// first because "Not rendered" contains "rendered".
function declaredStatus(body) {
  const head = body.split("\n").slice(0, 40).join("\n");
  if (/\bnot rendered\b/i.test(head)) return "pre-render";
  if (/\brendered\b/i.test(head)) return "RENDERED";
  return null;
}

function main() {
  const md = fs.readFileSync(CLAUDE_MD, "utf8");
  const tree = structureTree(md);
  if (tree === null) {
    console.error("CLAUDE.md: no fenced tree found under '## Structure'.");
    console.error("  This check cannot run. Restore the tree or update this script.");
    process.exit(1);
  }

  const problems = [];
  const docs = walk(OUTPUT_DIR).filter((f) => f.endsWith(".md"));

  // ── 1 & 2: every document is listed, and sits where its name says ──────
  for (const full of docs) {
    const rel = path.relative(REPO, full);
    const name = path.basename(full);
    const parts = path.relative(OUTPUT_DIR, full).split(path.sep);

    if (!tree.includes(name)) {
      problems.push({
        rel,
        what: "not listed in the CLAUDE.md Structure tree",
        fix: `add "${parts.slice(0, -1).join("/")}/${name}" to the tree`,
      });
    }

    const m = name.match(DOC_NAME);
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
  const real = new Set(docs.map((f) => path.basename(f)));
  for (const named of tree.match(/inner-canon-[a-z0-9-]+\.md/g) || []) {
    if (!real.has(named)) {
      problems.push({
        rel: "CLAUDE.md",
        what: `tree lists "${named}", which does not exist under output/`,
        fix: "remove the entry, or restore the file if it was deleted by mistake",
      });
    }
  }

  // ── 3 & 4: render status against sidecars, and against the tree note ───
  for (const full of docs) {
    const rel = path.relative(REPO, full);
    const name = path.basename(full);
    const m = name.match(DOC_NAME);
    if (!m || !IS_CUT.test(m[3])) continue;

    const status = declaredStatus(fs.readFileSync(full, "utf8"));
    if (!status) {
      problems.push({
        rel,
        what: "declares no render status in its opening lines",
        fix: 'state "RENDERED — <tier>, <date>." or "Not rendered." near the top',
      });
      continue;
    }

    const stem = full.replace(/\.md$/, "");
    const missing = [".srt", ".vtt"].filter((ext) => !fs.existsSync(stem + ext));
    if (status === "RENDERED" && missing.length) {
      problems.push({
        rel,
        what: `declares RENDERED but is missing ${missing.join(" and ")}`,
        fix: `node scripts/build_subtitles.js ${rel}`,
      });
    }
    if (status === "pre-render" && missing.length === 0) {
      problems.push({
        rel,
        what: "declares itself pre-render but carries both sidecars",
        fix: "sidecars come from take durations — update the header if it has in fact rendered",
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
      if (noted && noted !== status) {
        problems.push({
          rel: "CLAUDE.md",
          what: `tree annotates ${name} as ${noted}, the document declares ${status}`,
          fix: `change the tree annotation to ${status}`,
        });
      }
    }
  }

  // ── 5: every script is documented ─────────────────────────────────────
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

  console.log(
    `Checked ${docs.length} document(s) under output/ against the CLAUDE.md Structure tree.`
  );
  if (!problems.length) {
    console.log("No drift. CLAUDE.md matches the repository.");
    return;
  }
  console.log(`\n${problems.length} drift(s):\n`);
  for (const p of problems) {
    console.log(`  ${p.rel}`);
    console.log(`    ${p.what}`);
    console.log(`    fix: ${p.fix}`);
  }
  console.log(
    "\nCLAUDE.md is loaded into every session in full, so a wrong line here is read"
  );
  console.log("far more often than it is written. Fix the docs, not this check.");
  process.exit(1);
}

main();
