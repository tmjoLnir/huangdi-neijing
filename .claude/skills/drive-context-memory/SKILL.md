---
name: drive-context-memory
description: Read and write this project's cross-session context memory, held as immutable snapshots in a Google Drive folder. Use at session start when the work depends on state from an earlier session (what is in flight, where a render was archived, credit spent so far), at session end when something worth keeping was learned, or when debugging the memory itself (folder looks empty, a snapshot reads back with backslashes in it, two sessions overwrote each other, a snapshot became a Google Doc).
---

# Google Drive context memory

**`CLAUDE.md` owns policy; this file owns procedure.** What may be stored, what
must stay in the repo instead, and the fact that memory lives in Drive at all are
defined there and are normative in any conflict. This file holds the call shapes,
the folder IDs, the naming rule and the failure modes — including one that
silently corrupts a snapshot a little more every session.

This is the third standing-instruction file in the repo. The two-file split in
`CLAUDE.md` § *Which file wins* has already drifted where it was duplicated, so
the same discipline applies here with one addition: **Drive memory is not a place
to keep policy.** A third copy of a rule, sitting in a folder no review ever
opens, is worse than a second copy in a tracked file. Point at `CLAUDE.md`; do
not restate it into a snapshot.

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

**The connected Drive account is not the Claude account.** Memory lives in
`daniel.dibraw@gmail.com`'s Drive; the Claude account email is
`joshua.chin@outlook.sg`. This is the first thing to check when the folder reads
as empty or a freshly written snapshot cannot be found — the tools resolve
against whichever account the connector is authenticated as, and no error is
raised for looking in the wrong Drive. The folder is owner-only
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
<chapter/cut> → <Drive file ID or path>, archived <date>
# MP4s are gitignored and CDN links expire; this index is the only
# durable pointer to a finished render.

## Credit spend across sessions
<date> → <cut>, <credits>, running total

## Working preferences
# Things the user has said once that outlive a session.

## Open threads
# What is in flight and where it stopped.
```

**Renders themselves do not go through this tool.** `create_file` takes content
inline as base64 — viable for a snapshot, not for a several-hundred-megabyte MP4.
Archive those by hand through the Drive UI or a desktop client, and record the
resulting file ID in the index above. The index is the deliverable here; the
media is not.

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
