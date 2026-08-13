---
name: drive-context-memory
description: Read and write this project's cross-session context memory, held as immutable snapshots in a Google Drive folder. Use at session start when the work depends on state from an earlier session (what is in flight, where a render was archived, credit spent so far), at session end when something worth keeping was learned, when checkpointing a long session against compaction or deciding what to archive off to Drive, or when debugging the memory itself (folder looks empty, a snapshot reads back with backslashes in it, two sessions overwrote each other, a snapshot became a Google Doc).
---

# Google Drive context memory

**`CLAUDE.md` owns policy; this file owns procedure.** What may be stored, what
must stay in the repo instead, and the fact that memory lives in Drive at all are
defined there and are normative in any conflict. This file holds the call shapes,
the folder IDs, the naming rule and the failure modes — including one that
silently corrupts a snapshot a little more every session.

**Ignore all commentary before PR#53** — `CLAUDE.md` § *Ignore all commentary
before PR#53* holds the cutoff and is normative. Little in this file predates it,
since the Drive memory postdates PR#53 entirely; the rule is recorded here so all
three standing-instruction files carry it, not because there is a backlog to
discount.

This is the third standing-instruction file in the repo, and `CLAUDE.md` §
*Which file wins* is the table that divides them. That split has already drifted
wherever a rule was duplicated, so the same discipline applies here with one
addition: **Drive memory is not a place to keep policy.** A copy of a rule sitting
in a folder no review ever opens is worse than one in a tracked file, because
nothing ever brings it back into agreement. Point at `CLAUDE.md`; do not restate
it into a snapshot.

> **Why this exists.** Web sessions run in an ephemeral container rebuilt from
> the repo each time. Whatever is not tracked in git and not written somewhere
> external is gone when the container is reclaimed — including anything learned
> in the last five minutes of a session.

## The folder

| | ID |
|---|---|
| `Claude Context Memory/` | `1SaDTKuMkBufF6Hh3pCAFee3IGKYAlllx` |
| └ `huangdi-neijing/` | `1MylpdnUpxrizQoPX4HLKmOTzNpxNf2uP` |

**The folder ID is the handle, never a filename.** Filenames change on every
write by design — see [Snapshots are immutable](#snapshots-are-immutable). One
subfolder per repo, so other projects share the parent without colliding.

**The connected Drive account is not the Claude account.** The folder lives in a
different Google account from the one signed in to Claude, and **this is the first
thing to check when the folder reads as empty or a freshly written snapshot cannot
be found** — the tools resolve against whichever account the connector is
authenticated as, and no error is raised for looking in the wrong Drive. Confirm
which account is connected before concluding anything is missing; the IDs above
only resolve inside the right one. The folder is owner-only
(`get_file_permissions`, verified 2026-08-10); confirm that again before writing
anything new into it.

## Order of operations

1. **Read** the newest snapshot — only if the work depends on cross-session
   state. Most sessions in this repo do not; reading is cheap but not free, and a
   session that only edits a cut document has no reason to.
2. **Do the work.**
3. **Write** a new snapshot — only if something worth keeping was learned. A
   session that learned nothing should write nothing, or the folder fills with
   identical files and the newest-wins rule starts hiding real history.

"At the end" is the default, not a rule: a long session should write as soon as a
precise fact becomes final, because a session that compacts before it writes
loses the precision it was going to record. See
[Checkpoint on completion](#checkpoint-on-completion-not-on-pressure).

Both ends are yours to run. **No hook can do this** — see
[Why no hook](#why-no-hook).

## Reading

### Find the newest

`search_files` takes no ordering parameter, so the newest snapshot is found by
sorting titles — which is the whole reason the timestamp leads the filename and
is zero-padded:

```
search_files(query: "parentId = '1MylpdnUpxrizQoPX4HLKmOTzNpxNf2uP'",
             excludeContentSnippets: true)
```

Take the lexically greatest `title`. Do not sort on `createdTime` from the
response: it is present and it is tempting, but a snapshot restored from Drive's
trash or copied forward carries a creation time unrelated to the state it holds.
The filename is the version; the metadata is not.

### Read it back with `download_file_content`

**Not `read_file_content`. This is the trap in the whole procedure**, because the
wrong one succeeds — it returns plausible-looking text, no error, no warning.

`read_file_content` returns a *natural-language rendering*, not the file. Measured
against a known snapshot on 2026-08-10, it:

- escaped every markdown special: `#` → `\#`, `-` → `\-`, `*` → `\*`,
  `` ` `` → ``\` ``, `_` → `\_`
- appended two trailing spaces to every line
- flattened a two-space continuation indent to one space

Read a snapshot through it and write the result back and the corruption
compounds: escapes get re-escaped, and after a few sessions the memory is a
thicket of backslashes that still parses as prose and still looks fine in a tool
result.

```
download_file_content(fileId: "<id>")     → { content: "<base64>" }
```

Decode the base64. Verified byte-exact on the same file — indentation and all
five specials survived intact.

`read_file_content` is still the right tool for reading *ordinary* Drive
documents the user points at (a Doc, a PDF, a spreadsheet). It is wrong only for
round-tripping memory, where fidelity is the point.

## Writing

```
create_file(
  title:        "<ISO8601>-context-memory.md",   # e.g. 2026-08-10T0228Z-context-memory.md
  contentMimeType: "text/markdown",
  disableConversionToGoogleType: true,
  parentId:     "1MylpdnUpxrizQoPX4HLKmOTzNpxNf2uP",
  textContent:  "<the full snapshot>"
)
```

Four things that each break it if omitted:

- **`disableConversionToGoogleType: true`** — without it Drive converts the
  markdown into a Google Doc. The file still exists and still reads back, but as
  Doc formatting rather than markdown source, and the next
  `download_file_content` needs an `exportMimeType` and returns something that is
  no longer the text that was written.
- **`textContent`, not `base64Content`** — for UTF-8 text. Setting both is an
  error. (`content` is deprecated; ignore it.)
- **`contentMimeType`, not `mimeType`** — the latter is deprecated and marked
  do-not-use. The same applies when creating a folder: `contentMimeType:
  "application/vnd.google-apps.folder"` with no content at all, verified working.
- **A sortable title.** `2026-08-10T0228Z-…`, zero-padded, UTC. A title that
  sorts wrong is a snapshot that will never be read again.

**Carry the previous snapshot forward.** A snapshot is not a diff and not an
append — it is read *whole* and it replaces its predecessor entirely. Anything
dropped out of it is lost, so the write step is: take what was read at session
start, fold in what changed, write the union. This is the failure that looks like
data loss but is really an authoring mistake.

## Snapshots are immutable

The connector can **create** and **copy**. It cannot update, overwrite, move,
rename, or delete. Every consequence in this file follows from that one fact:

- Memory is a **folder of timestamped files**, not a file that gets edited.
- The **folder ID** is the only stable reference.
- **Pruning is manual.** Old snapshots accumulate and nothing here can remove
  them; clear them out from the Drive UI when the folder gets noisy. Keep a few —
  they are the only history there is, and a bad write is recoverable only by
  reading the one before it.
- **`copy_file` pins a known-good snapshot** under a name that will not be
  overtaken by the newest-wins sort — useful before a risky restructure. Give the
  copy a title that does *not* start with a timestamp, or it becomes the newest.

## What goes in a snapshot

`CLAUDE.md` owns this rule; the short form is **anything reproducible from the
repo belongs in the repo**. Job IDs, block plans, compliance notes and credit
spend for a cut all belong in that cut's production record, which is tracked and
reviewed. A snapshot holds what git deliberately excludes:

```markdown
# Context memory — huangdi-neijing
Snapshot written <ISO8601>. Newest file in this folder wins.

## Render archive
<chapter/cut> → <where it actually is>, archived <date>
# MP4s are gitignored and CDN links expire; this index is the only
# durable pointer to a finished render. Name a place someone can go:
# a Drive file ID, or a machine and path. "Archived" alone is not a pointer.

## Credit spend across sessions
<date> → <cut>, <credits>, running total

## Working preferences
# Things the user has said once that outlive a session.

## Open threads
# What is in flight and where it stopped.
```

**Renders themselves do not go through this tool.** `create_file` takes content
inline as base64 — viable for a snapshot, not for a several-hundred-megabyte MP4.
Archiving is therefore always a manual act, and **the index is the deliverable
here; the media is not.**

**Do not assume the archive is in Drive.** In practice it is not: both renders
archived as of 2026-08-10 live on the operator's local drive, and the connected
Drive account holds no video at all. Two consequences worth carrying:

- **Record a place, not a status.** A Drive file ID, or a machine and a path.
  *Archived* on its own is the entry that looks complete and helps nobody once
  the CDN link has lapsed.
- **A local archive cannot be verified from here, and is trusted rather than
  checked.** A session can confirm a Drive file still exists; it can say nothing
  about a file on a machine it has never touched. When the CDN link expires that
  local copy becomes the only copy of a paid render, so the index entry is the
  whole safety net — and a stale one fails silently.

## Context economy — checkpointing a long session

**Archiving to Drive does not free the running session's context window, and
reading memory back costs more than the file does.** The intuition runs the other
way, so this is worth stating first: every byte written passes *through* the
window on its way out, and `download_file_content` returns base64 — measured at
**1.334×** the file's size (a 3,029-byte snapshot came back as 4,040 characters).
Archiving more, and reading it back indiscriminately, raises in-session pressure
rather than relieving it.

What memory does protect against is **compaction loss**, and that is the thing
actually worth defending. When the window fills, the session does not end — it
compacts, and the transcript is replaced by a summary. Summaries keep the shape
of the work and lose its precision: job IDs, URLs, measured balances, the exact
wording of a decision. Those are unrecoverable afterwards, because the text they
were in is gone.

So the goal is not to avoid compaction. It is to **be holding nothing precise and
unwritten when compaction arrives.**

### Checkpoint on completion, not on pressure

Write a snapshot when a fact becomes final — a render returns its IDs, a balance
is read, a decision is settled — not when the window starts feeling tight. By the
time it is tight, the checkpoint costs a re-read of the very transcript being
rescued, and that is the most expensive moment to pay for it. A fact recorded the
minute it existed costs almost nothing.

This is the one place where writing memory earns its cost back. Everywhere else,
prefer writing less.

### Pointers, not payloads

A snapshot should say *where a thing is and what state it is in*, never reproduce
it. The render-archive table is the model: it holds whether an MP4 was archived
and its Drive file ID, and deliberately does not copy the CDN URLs, because those
are in the production record that git already tracks. Copying them would double
the read cost of every future session to store something already durable.

The same rule kills the tempting bad idea of archiving transcripts. A conversation
is a payload. What is worth keeping out of it is a decision and a reason, and
those compress to a line.

### Split by topic when it earns it — not before

One snapshot per session is the default because the memory is small: at 3 KB, a
whole read is about a thousand tokens and selective reading would save nothing
worth the complexity.

Split into per-topic files — `<ISO8601>-<topic>.md`, newest *per topic* wins —
when either trigger fires:

- **Size.** A snapshot past roughly **10 KB** costs ~13 KB of base64 to read,
  and most sessions need one section of it.
- **Churn.** One section changes every session while another has not changed in
  a month. The stable one is being rewritten, and re-read, for nothing.

Splitting costs nothing at write time and saves on every subsequent read, but it
multiplies the files in a folder that cannot be pruned from here — so let a
trigger fire rather than anticipating one. The `search_files` listing is cheap
and returns every title at once; only `download_file_content` is priced by size.

### Keep bulk out of the window entirely

- **Never echo a downloaded file back into the conversation** to inspect it.
  Decode to disk and use shell tools on it — `wc`, `grep`, `head` — so the window
  sees the answer, not the file.
- **Renders never come through this path.** `create_file` takes content inline as
  base64; a several-hundred-megabyte MP4 through a tool call is not a slow
  archive, it is an impossible one. Upload those through the Drive UI and record
  only the resulting file ID.
- **Read one snapshot, not the folder.** Sort titles, download the newest of what
  you need. Downloading several to compare them is the mistake this whole section
  is about.

## Failure modes

### Why no hook

The obvious design — `session-start.sh` syncs Drive into the workspace — cannot
work, and it is worth knowing why before someone tries it again:

- **SessionStart hooks are shell commands and cannot reach MCP tools.** The Drive
  connector exists only in the model's tool surface.
- **The container has no Drive client.** No `rclone`, no `gdrive` (checked
  2026-08-10); `curl` is present but there is no Drive credential to use with it.
- **A credential must not be committed to fix that.** `.gitignore` guards `.env`
  and `*.key` deliberately, and a service-account JSON in this repo would be a
  worse problem than the one it solves.

So the read/write protocol is the model's to run. It is instructions, not
automation, and it fails silently when skipped — which is why
[Order of operations](#order-of-operations) is a checklist rather than a
description.

### Concurrent sessions lose writes

Two sessions that overlap both snapshot from the state each read at *start*, and
the later timestamp wins whole — the earlier session's facts are silently gone.
There is no locking and no merge, because there is no update call to build either
on. Acceptable at one operator; the first thing to revisit if that changes.

### It reads back with backslashes in it

`read_file_content` was used instead of `download_file_content`. See
[Read it back](#read-it-back-with-download_file_content). Recover by finding the
last clean snapshot in the folder and writing a corrected one forward — the
damaged file cannot be deleted from here.

### The folder looks empty

Check the account first (see [The folder](#the-folder)), then the `parentId` in
the query. A `search_files` call scoped to a folder that does not exist returns
`{}` rather than an error, so an empty result never distinguishes "nothing
written yet" from "looking in the wrong place".

## What lands in git

**Nothing from this pipeline.** Snapshots live in Drive and are not mirrored into
the repo — mirroring them would recreate the duplication this file exists to
avoid, and would put working state into review where it does not belong. The only
tracked artifacts are this skill and the policy section in `CLAUDE.md` that
points at it.
