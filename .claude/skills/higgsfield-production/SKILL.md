---
name: higgsfield-production
description: Produce a cut of *The Emperor's Inner Canon* end-to-end on Higgsfield — style key, per-block clips, narrator voiceover, sandbox assembly, captions, and the production record. Use whenever generating or re-rendering a 30-90 sec vertical trailer or a 11:30-20 min longform episode for this repo, adding a new chapter under output/, or debugging a Higgsfield job (wrong aspect ratio, preset swap prompts, expired CDN links, blocked uploads, a tool missing from the MCP surface, or an assemble_final.sh speech-window error).
---

# Higgsfield production pipeline

**`CLAUDE.md` owns policy; this file owns procedure and measurements.** The cast,
the compliance rules, the production-document layout, what ships as a deliverable
and the git conventions are defined there and are normative in any conflict —
this file points at them rather than restating them, and holds the numbers,
parameters and failure modes instead.

The house pipeline for this repo. Every cut has been produced this way, and the
failure modes below are ones that already cost a paid re-render, so read them
before generating anything.

> **Ignore all commentary before PR#53.** This file carries the repo's longest
> tail of run archaeology, and most of it is now history: do not act on it, cite
> it, or raise it as drift. `CLAUDE.md` § *Ignore all commentary before PR#53*
> holds the cutoff date and is normative — including the carve-out that matters
> most here, that a **measurement a current instruction still rests on is not
> commentary**. The speech window and the delivered geometry both predate the
> cutoff and both remain in force. The step-3 voice rates need no carve-out:
> every current value was re-measured after it.

> **⚠ The assembler changed, 2026-08-04.**
> Higgsfield removed the server-side assembler from the MCP surface; there was no
> deprecation shim and no fallback assembler. Assembly is now a shell script run
> in a remote sandbox — [step 4](#4-assembly) has the call. Three consequences
> reach back into how a cut is *written*, so this was not merely a swapped tool:
>
> - **The take window moved off 6–8s** of *detected speech*, and over-window is now
>   a hard error instead of a pitch-safe speed-up. **It moved to 7.8–9.5s, not to
>   8.6–10.0s as this skill said until 2026-08-24** — see [step 3](#3-voiceover) for
>   the correction and what the wrong number cost.
> - **Captions are no longer burned at assembly.** The sidecar path is the only
>   path now, not the preferred one of two — see [Subtitles](#subtitles).
> - **Clip audio is now mixed in at 0.12, not discarded**, so `generate_audio:
>   false` went from a cost saving to a correctness requirement — see
>   [step 2](#2-clips).
>
> **One cut has been through this path end-to-end** — Suwen 1 trailer v5,
> assembled 2026-08-04. The [step 3](#3-voiceover) rates are re-measured from that
> run and are no longer estimates; the rest of this file is still only one run old,
> so treat the second cut as confirmation rather than routine.
>
> **That cut's document was deleted from `output/` on 2026-08-08**, so this file is
> now the only surviving record of what the run measured. Everything it taught is
> written into the steps below — the credit deltas in
> [step 0](#0-model--tier-gate--cost-it-then-confirm),
> the voice rates in [step 3](#3-voiceover), the delivered geometry and the
> `background: true` failure in [step 4](#4-assembly). Do not go looking for the
> cut document; it exists only in git history.

`output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md` is the reference document
— match its section order on any new cut. It rendered 2026-08-08, so its
production record is filled: job IDs, a credit-spend table reconciled against the
preflight, and an Assembly record. `CLAUDE.md` § Structure lists the other three
rendered cuts and what each one is the best model for.

**Paths and filenames are `CLAUDE.md` § Structure's call, not this file's.** In
short: `output/<book>/ch<N>/`, where `<book>` is `suwen` or `lingshu` and `<N>` is
the chapter's number *within that book*. Both halves of the canon run to
eighty-one separately-numbered chapters, so the book is never optional — it goes
in the filename too. Folders are not consecutive and gaps are expected.

**Two cut types.** Steps 0–5 are written for the **30-90 sec vertical trailer** —
the only form produced so far, and the one whose numbers are battle-tested. For a
**11:30–20 minute longform episode**, read those steps for the mechanics, then read
[Longform episodes](#longform-episodes), which overrides the aspect
ratio, block count, voice handling and assembly strategy. **Step 0 is a hard gate
on both**: nothing generates until the run's tools are confirmed present on the
MCP surface and the user has seen the balance, the costed estimate, and confirmed
model and tier.

| | |
|---|---|
| Steps 0–5 | the trailer pipeline, in order |
| [Tool availability](#tool-availability--check-the-surface-before-you-spend) | step 0's free preflight — the surface moves |
| [4. Assembly](#4-assembly) | the sandbox assembler, its flags and its gates |
| [Subtitles](#subtitles) | caption constraints and the guaranteed-fit sidecar |
| [Longform episodes](#longform-episodes) | what changes for a 11:30–20 min cut |
| [Environment caveats](#environment-caveats) | blocked uploads/CDN, what lands in git |
| [Compliance gate](#compliance-gate-before-generating) | run on prompts, before generating |

Subtitles, Environment caveats and the Compliance gate apply to both cut types.

## Order of operations

Never reorder these — each step consumes the previous step's **job ID**.

0. **Model + tier gate** — confirm the tools this run needs are still on the MCP
   surface, then call `balance`, cost the options, and get the user's choice of
   clip model and Draft/Full. Nothing generates before this.
1. **Style key** (`generate_image`) — one vertical key image per chapter.
2. **Clips** (`generate_video`) — one per narration block, style key attached to each.
3. **Voiceover** (`generate_audio`) — one take per block, narrator preset.
4. **Assembly** (`sandbox_exec` → `assemble_final.sh`) — clips + takes in, one
   MP4 out. **No captions here**: the assembler has no subtitle option, so
   burning them is a separate step afterwards — see [Subtitles](#subtitles).
5. **The document** — every job ID above, plus the shot list, compliance audit,
   manual deliverables and runtime levers.

Log the run's actual credit spend in the production record as you go. **The
Suwen 1 trailer v3 run is the repo's measured balance delta** — 938.2 → 862.6 =
75.6 credits for 7 clips and 7 takes — so it is the single historical figure
available to check an estimate against. **Its cut document is gone from `output/`,
so the figure lives here now**; the next rendered cut should log its own spend and
give the repo a second data point.

> **⚠ `seed_audio` BILLS BY LENGTH. Budget 1.5 per narrator take, 2.0 for Zane.
> Re-verified 2026-08-12.** Live `get_cost` on Arthur at `speech_rate: 55`, across
> the whole usable range:
>
> | Words | Credits | Why this length matters |
> |---|---|---|
> | 13 | **0.5** | the convenient short probe — reproduces the old wrong answer exactly |
> | 34 | **1.3** | brackets the low edge of Arthur's 33–37 window |
> | 41 | **1.5** | **budget on this — it covers every narrator line and most character ones** |
> | 50 | **2.0** | inside Zane's 47–54 window |
>
> **The top of the range has moved: 50 words was 1.7 on 2026-08-10 and prices at
> 2.0 today**, ~18% up, while 34 words did not move at all. So the cheap end is
> stable and the expensive end is drifting — re-price the *long* lines, not the
> short ones, before a run with character voices in it.
>
> **⚠ The word windows moved under this table on 2026-08-13** — see the re-pooling
> banner in [step 3](#3-voiceover). Arthur's window came *down* to 33–37, so a
> narrator take now sits between the 1.3 and 1.5 rows rather than on the 1.5 row;
> Zane's went *up* to 47–54, so his top edge is past the 50-word probe. **The
> prices above are unchanged and were not re-measured with the windows** — 1.5/2.0
> is now a ceiling rather than a midpoint, which is the safe direction to be wrong
> in. Re-price at the new mid (35 words) and the new top (54) on the next run's
> step-0 `get_cost`, and correct this table then.
>
> **1.45/take is too low as a budget either way.** It was derived when Arthur was
> written at 31–34 words and priced against a rate that has since been re-pooled
> twice. Budget **1.5 narrator / 2.0 Zane**; a six-block all-narrator trailer is
> **~9 credits of voice**, not 8.7.
>
> **This figure has now been got wrong three times, in both directions**, so read
> the history before quoting any of it:
>
> | Claim | Source | Status |
> |---|---|---|
> | 0.8/take | ch1 v3 balance delta ÷ 7 takes | **wrong** — derivation, never priced |
> | 0.5/take | Lingshu 28 v2 `get_cost` on a **13-word probe** | **wrong** — and 2026-08-12 reproduced 0.5 on 13 words exactly, so the probe was right and the *inference* was wrong |
> | 0.1/take | Suwen 8 `get_cost` on a **short probe** | **wrong by 13–20×** |
> | 1.3–1.7/take | Suwen 13 `get_cost` on **the shipped lines** | superseded — top end is 2.0 now |
> | **1.5 narrator / 2.0 Zane** | 2026-08-12 sweep across 13/34/41/50 words | **use this** |
>
> **The Lingshu 28 v2 record already diagnosed this exactly** — *"`seed_audio` bills
> by length, and a short probe string under-prices the run. Cost a
> *representative-length* line, not a convenient one."* The very next cut then
> priced a short probe and wrote 0.1 into this file. **Do not preflight voice on a
> convenient string.**
>
> **Voice is no longer a rounding error on a longform.** At 1.5/take a 114-block
> episode is **~171 credits for a first pass**, ~340 at the two-variants-per-block
> working method, and **~800 at the Suwen 13 trailer's observed 4.7× re-take rate**
> — not the ~10 this file used to claim. It is still below the clip bill, but at
> the top of that range it exceeds the entire current balance. (Earlier revisions
> costed this at 96 blocks; the longform preflight below uses 114, and 114 is the
> figure to carry.)
>
> **Re-takes are cheap relative to a failed assembly, not free.** The Suwen 13
> trailer spent **33 takes on 7 blocks for ~47.7 credits** — a 4.7× re-take rate
> caused by the word budgets below being wrong, not by service noise. Two variants
> per block is the working method; twenty are not.

**The old derivation, and why it no longer supports the clip price either.** The
v3 delta was read as 70 for seven Draft clips plus 5.6 across seven takes, style
key reused at 0. Takes actually cost 0.7, so **~4.9 credits are unexplained** —
and the 10/clip figure was never independently measured, it was what remained
after subtracting a take price that turns out to be 8× too high. Run the same
subtraction now and seven clips absorb 74.9, or **10.7 each**.

**So 10/clip is a price-list figure, not a measured one.** Treat it as the
step-0 shortlist's quote and confirm it with a live `get_cost` on the actual
configuration, which step 0 already requires. What the arithmetic does establish
is that clips dominate the bill by two orders of magnitude over voice; it does not
pin the per-clip number to the tenth.

**The second run, v5, spent ~80 from a starting balance of 862.6** — 70 for the
same seven Draft clips and 0 for a reused style key. Its record attributed ~10 to
roughly thirteen voice takes; **at the corrected 0.1 that is ~1.3**, so ~8.7 of
that run is unexplained too. Both runs are recorded here because neither cut
document survives. Balance after v5 was **~782** on the recorded totals, unread
since — **call `balance`, do not carry this figure.**

**Both deltas have a hole of the same size, which is the actual finding.** ~4.9 on
v3 and ~8.7 on v5 went somewhere neither record accounts for. Until a run is
reconciled against a `balance` read taken immediately before and after, treat the
clip price as the only load-bearing number in a preflight and expect the total to
come in high — the Lingshu 28 v2 run did exactly that, at 103.4 actual against a
~86 estimate.

## 0. Model + tier gate — cost it, then confirm

**Default: `seedance_2_0_mini` at 480p** — set by the user 2026-07-31, price
re-verified 2026-08-12. 10 credits/clip, **~71 for a 6-block trailer** (~82.5 with
the end-card block), and it takes the style key as a true `image_references`
input, which is the one thing the house look requires.

> **⚠ 480p is the *house* default, not the *model* default.** `seedance_2_0_mini`
> defaults to **720p** when `resolution` is omitted — so a call that leaves it out
> silently bills **25/clip instead of 10**, and a six-block trailer costs ~161
> instead of ~71. Pass `resolution` explicitly on every clip.

This replaces `gemini_omni`, which earlier cuts used. `gemini_omni` is the
*incumbent*, not the standard, and at 30 credits/clip it costs 3× the default for
a 720p ceiling. Do not carry it forward out of habit.

**480p is a step down from the 720×1280 the earlier cuts shipped.** For a draft
pass that is the point. Before publishing a 480p cut as a final Shorts/Reels
deliverable, say so and get an explicit yes — the same model at 720p is 25/clip
(~161/cut) and keeps the draft's look, so it is the natural full-render tier.
Whichever ships, record the actual resolution at the top of the document.

Before generating anything on a new cut, do all five:

1. **Confirm the run's tools are on the surface** — one free `ToolSearch`, plus
   the sandbox probe if this cut will be assembled. See
   [Tool availability](#tool-availability--check-the-surface-before-you-spend)
   below. It comes first because a missing step-4 tool invalidates a step-0
   estimate the user has already approved.
2. Call **`balance`** and state the current credit figure.
3. Call **`get_cost: true`** on one representative clip in the chosen
   configuration. Prices move; never quote this file's numbers as live.
4. State the **cost per clip and cost for the whole cut**, and name the default.
5. Confirm **model** and **Draft/Full** with the user, and wait. The default
   makes this a confirmation, not an open question — but it is still a gate, and
   a chapter that wants a different model gets the shortlist below.

**Most failure modes in this skill were learned on `gemini_omni`,** and only one
cut has run on `seedance_2_0_mini` so far — the aspect-ratio double declaration
and the preset pre-decline both held on it, but nothing else is confirmed. On any
cut using a model this repo has little history with: generate **one** clip, check
the returned dimensions and the house look against the style key, and only then
generate the rest. Write what actually happened into that cut's reproduction
notes.

### `use_unlim` — the one way a generate call spends nothing

Every `generate_*` takes `use_unlim`, and it decides **which balance pays**: the
account's free-trial unlimited generations (`true`) or its credits (`false`).
**Omit it and the server decides** — and if an allowance covers the model, the
call *submits nothing* and returns `unlim_choice`, which is the question to put to
the user before spending anything of theirs. Answer by calling again with the same
params plus the field; the answer is remembered for a few minutes, so a
seven-block run is asked once rather than seven times.

Two consequences here:

- **`unlim_choice` is neither a failure nor a job.** A call that returns it has
  generated nothing and cost nothing. Do not retry it as service noise, and do not
  count that block as done — on a seven-block run this reads as a stalled pipeline
  rather than as a question.
- **`use_unlim: true` caps `count` to 1**, so it does not compose with asking for
  variants in one call. Step 3's two-variants-per-block method is two calls under
  it.

A rejected opt-in is reported rather than quietly swapped for a charge, so this
cannot silently spend credits. It can silently *not* generate, which is why it
belongs in the gate rather than in step 2.

### Tool availability — check the surface before you spend

**This has already happened once: the server-side assembler vanished from the MCP
surface on 2026-08-04**, with no deprecation shim, no fallback assembler and no
warning. It was simply not there when assembly was reached. Assume any tool below can go
the same way, and note where the damage lands: **the credits are spent in steps
1–3, and the tool that goes missing may be step 4's.** Six blocks of clips and
takes is ~71 credits that then cannot be assembled, refunded, or carried to
another pipeline — and a longform run puts ~1,140 credits behind the same bet.

The check is free and takes one call. Run it *before* the cost preflight, so a
missing tool is found before the user approves a spend that cannot complete.

**The Higgsfield tools are deferred in this harness** — listed by name, schemas
loaded on demand — so the check is a `ToolSearch` for the exact names:

```
ToolSearch({ max_results: 8, query:
  "select:mcp__higgsfield__balance,mcp__higgsfield__generate_image," +
  "mcp__higgsfield__generate_video,mcp__higgsfield__generate_audio," +
  "mcp__higgsfield__sandbox_exec,mcp__higgsfield__media_upload," +
  "mcp__higgsfield__media_confirm,mcp__higgsfield__job_display" })
```

**A name that comes back with no `<function>` block is not on the surface.** That
is the entire signal — nothing announces a removal. Two things that look like
evidence and are not: an entry in `.claude/settings.json`'s allow-list (a
permission is not a liveness signal — it grants a call that may have nothing left
to answer it), and an appearance in an older cut's production record (that is
history, and the record deliberately keeps superseded entries).

| Tool | Needed for | If it is gone |
|---|---|---|
| `balance` | step 0 itself | **stop** — the whole gate rests on a live figure |
| `generate_image` | step 1 style key | **stop** if the cut needs a new key; a cut reusing the chapter head can continue |
| `generate_video` | step 2 clips | **stop** — this is the pipeline |
| `generate_audio` | step 3 takes | **stop** |
| `sandbox_exec` | step 4 assembly | **stop before step 1** — this is the 2026-08-04 failure exactly; nothing else assembles a cut, and a service-free `ffmpeg` fallback would need a shell too |
| `media_upload` + `media_confirm` | step 4 export | **stop before step 1** — the sandbox is ephemeral, so a render that cannot be exported is lost the moment the call returns |
| `job_display` / `jobs_wait` / `show_generation_by_ids` | polling | degrade, don't stop — the generate call returns its own job ID |
| `generate_video_batch` / `generate_audio_batch` | issuing a cut's blocks in one call ([step 2](#submit-a-cuts-blocks-as-one-batch-not-one-call-per-block)) | degrade, don't stop — fall back to one `generate_*` per block. Same jobs, same price, more calls |
| `models_explore` | role and duration checks | degrade — the step-0 shortlist covers the house models |
| `upscale_video`, `reframe` | longform finishing | not a generation-time blocker; check before *promising* a finishing pass |

**Re-verified 2026-08-16: all eight names above resolve.** That is a snapshot like
the price table, not a standing fact — re-run the check, never quote this line.

**The `mcp__higgsfield__` prefix is not guaranteed either.** The server has been
seen reconnecting mid-session under a different prefix, with every tool otherwise
identical. If the exact names above come back with no `<function>` block, search
on the bare suffix (`balance`, `sandbox_exec`) before concluding a tool is gone —
a renamed server and a removed tool look the same through a `select:` query, and
only one of them is worth stopping a cut for.

**A schema is not a working service.** This proves the tool is on the surface, not
that the account is authenticated, in credit, or that the backend is healthy. The
gate is three free probes that escalate, which is why they sit together: tool
availability (needs no account state), then `balance` (proves the account
answers), then `get_cost` (proves the model is priced and accepted).

#### The assembler is a script now, so availability has two layers

`assemble_final.sh` is **not** an MCP tool — it ships inside the sandbox image
under `$HF_WORKFLOWS/faceless-video/scripts/`. `sandbox_exec` resolving therefore
says nothing about the assembler being present, and a workflow-bundle update can
move, rename or re-flag that script exactly the way the tool was removed.

> **⚠ It has already moved once, and the old path is dead.** Until 2026-08-24 both
> scripts sat under `$HF_WORKFLOWS/faceless-channel-video/scripts/`, with
> `speech_metrics.sh` in a `narrator/` subdirectory of it. The bundle was
> re-organised into one directory per workflow and **`ls` on the documented path
> now fails outright**. When it does, do not guess the new layout —
> `find / -name 'assemble_final*' 2>/dev/null` finds it in seconds. Probe both
> scripts in the same preflight, free, in one call:

```
sandbox_exec({ command:
  "ls -l $HF_WORKFLOWS/faceless-video/scripts/assemble_final.sh " +
  "      $HF_WORKFLOWS/narrator/scripts/speech_metrics.sh && " +
  "bash $HF_WORKFLOWS/faceless-video/scripts/assemble_final.sh --help | head -40" })
```

**Read the `--help`, don't just confirm the file exists** — it is also how a
*flag* change is caught. `--subs` was removed from that script in the same week as
the tool, and [step 4](#4-assembly)'s flag table is transcribed from one run of one
version. Where the help text disagrees with this file, the help text is right and
this file is stale: fix it before assembling.

`speech_metrics.sh` is on the same list because [step 3](#3-voiceover) sends you to
it to measure a take against the assembler's own trim. Without it, take durations
are back to being eyeballed — and the window is 1.4s wide.

#### When something is missing

1. **Stop before generating.** Do not start step 1 hoping the tool comes back.
2. **Name the tool and say what it blocks.** The user's decision is whether to
   wait, re-scope the cut, or take another path, and they cannot make it from
   "assembly failed".
3. **Do not substitute silently.** Swapping the clip model, hand-rolling an
   `ffmpeg` assembly, or dropping a deliverable to route around a missing tool is
   a change to the cut, not a workaround — it goes to the user the same way a
   model change does. A service-free `ffmpeg` **Fallback** for precisely this case
   was documented in the Suwen 1 trailer v3, since deleted — it is an option to
   reconstruct and offer, not a default to take.
4. **Write it down.** A tool that disappears is a pipeline change, not a session
   incident: record it in the cut's reproduction notes with the date, and update
   this file. The 2026-08-04 banner at the top is what that looks like done
   properly — and it is why the next cut did not rediscover the loss at assembly
   time.

### Draft pass vs Full render

**House default: Draft then Full.** Confirmed by the user 2026-07-31. Still ask —
a routine chapter in a proven configuration can waive the draft — but draft is
the assumption to argue *out of*, not into.

They are different jobs, not quality settings:

| | Draft pass | Full render |
|---|---|---|
| Purpose | Prove blocking, pacing, narration-against-picture, and the compliance read | The deliverable |
| Model | `seedance_2_0_mini` (default) | `seedance_2_0_mini` — same model, so the draft predicts the render |
| Resolution | **480p** — 10/clip, ~71/cut | **720p** — 25/clip, ~161/cut |
| Subtitles | **`anton`, always** — the draft is the caption check | **`anton`, always** |
| Output | never published, never linked as the final video | the cut |

Three things make this cheap rather than wasteful:

- **Same model both tiers.** A draft in a different model tells you about that
  model's blocking, not the one you ship.
- **Voice takes survive the upgrade.** They are cheap and resolution-independent,
  so generate once and reuse — a draft → full upgrade only re-pays for clips.
- **Captions run on the draft.** Negligible against the clip bill, and an
  uncaptioned draft cannot check the repo's readability rule.

Waive the draft on a routine chapter in a proven configuration. Keep it when the
cut is doing something new — an untried model, a new motif, a beat that might
trip the safety filter, a shot list nobody has seen moving.

### Clip model shortlist

Re-measured **2026-08-12** by live `get_cost` at 10s / 9:16 / native audio off.
**Re-preflight before quoting these to anyone** — this is a snapshot, not an API.

**Not one clip price moved between 2026-07-31 and 2026-08-12.** Every figure the
previous snapshot carried came back exact. What changed is *which models exist*:
five reference-capable models were missing from this table, and one was
misfiled as unusable. Prices here are stable; **coverage is what goes stale**, so
re-run `models_explore` — not just `get_cost` — before trusting the shortlist.

The binding constraint is not price. It is the **reference role**:

- **`image_references`** — the model treats the style key as a *character and
  style reference*. This is what the house look depends on.
- **`start_image`** — the model treats it as literal frame 1 and animates away
  from it. A cheap model in this column is not a cheap substitute; it is a
  different pipeline.

| Model | Ref role | Res | Credits/clip | 6-block cut | Notes |
|---|---|---|---|---|---|
| **`seedance_2_0_mini`** | `image_references` | **480p** | **10** | **~71** | **← house default / draft tier** |
| `wan3_0` | `image_references` | 480p | **12.5** | ~86 | cheapest alternative to the default |
| `seedance_2_0` | `image_references` | 480p fast | 15 | ~101 | draft, better motion |
| **`seedance_2_0_mini`** | `image_references` | **720p** | **25** | **~161** | **← full-render tier** |
| `wan2_6` | `image_references` | 720p | 25 | ~161 | stylized/experimental; **no audio-off switch** |
| `wan3_0` | `image_references` | 720p | 25 | ~161 | |
| `grok_video_v15` | `image_references` | 480p | 25 | ~161 | declares **no aspect-ratio list** — 9:16 unverified |
| `gemini_omni` | `image_references` | 720p | **30** | **~191** | incumbent; 720p ceiling; **no audio-off switch** |
| `seedance_2_5` | `image_references` | 480p | 30 | ~191 | needs `mode: "omni_reference"`; **3× the default** |
| `seedance_2_0` | `image_references` | 720p fast | 35 | ~221 | |
| `cinematic_studio_3_0` | `image` | 480p | 35 | ~221 | role is `image`, not verified as true reference |
| `wan2_6` | `image_references` | 1080p | 40 | ~251 | breaks the 720p house res |
| `minimax_h3` | `image_references` | **2K only** | 40 | ~251 | no lower tier exists |
| `seedance_2_0` | `image_references` | 720p std | 45 | ~281 | |
| `grok_video_v15` | `image_references` | 720p | 45 | ~281 | |
| `cinematic_studio_3_0` | `image` | 720p | 50 | ~311 | |
| `wan3_0` | `image_references` | 1080p | 55 | ~341 | |
| `flux_3_video` | `image_references` | 720p | 55 | ~341 | |
| `seedance_2_5` | `image_references` | 720p | 65 | ~401 | |
| `seedance_2_0` | `image_references` | 1080p std | 90 | ~551 | |
| `flux_3_video` | `image_references` | 1080p | 90 | ~551 | |
| `cinematic_studio_3_0` | `image` | 1080p | 100 | ~611 | |
| `seedance_2_0` | `image_references` | 4k std | 220 | ~1,331 | |

**`seedance_2_5` is the service's own recommended default, and it is the wrong
default for this repo.** The MCP tool description now names it for "general
text-to-video and multimodal reference consistency" — but at 480p it is 30/clip
against the house model's 10, for a cut nobody has proven looks better. It needs
`mode: "omni_reference"` before it reads the style key as a reference at all; on
the default `mode: "t2v"` the `medias[]` are ignored. Do not adopt it because a
tool description called it the default.

**`wan3_0` at 12.5 is the only genuinely new budget option** — a true
`image_references` model 2.5 credits above the house default, with a 1080p tier
the mini does not have. Untried here; treat it as a one-clip experiment under the
step-0 "little history" rule, not a swap.

Costed but **not viable here** — they take `start_image` only, so the style key
would become frame 1 rather than a style reference: `kling3_0` (15 with
`sound: "off"`, 20 with sound on), `kling3_0_turbo` (15), `minimax_hailuo` (11),
`happy_horse_video` (25), `wan2_7` (15), `kling2_6`, `grok_video`.

Also **duration-incompatible** with the fixed 10s block: `veo3_1` (22, and 4/6/8s
only — so it fails on both counts), `veo3_1_lite` (8, 4/6/8s only), `seedance1_5`
(4/8/12s), `cinematic_studio_video_v2` (3–12s, and `image` role), `veo3` (no
duration control at all).

Fixed costs per 6-block trailer, independent of clip model: style key **2**
(`nano_banana_pro`, 1k — verified), voiceover **~1.5/take** ≈ 9 for six narrator
blocks, assembly free, captions free. **≈11 credits**, and the `6-block cut`
column above already includes it. The clip bill still dominates, but 11 is no
longer a rounding error the way the old ≈10.7-on-a-+6-column arithmetic implied —
**every row of the old table understated its cut total by exactly 5 credits.**

**That column counts six blocks and does *not* include the end-disclaimer card.**
`CLAUDE.md` requires the card as its own 10s block carrying its own take, so a cut
that ships one is **seven** blocks: add one clip price plus ~1.5. At the 480p
default that is **~82.5, not ~71** — and the historical 7-clip/7-take runs in this
file are seven blocks for exactly that reason.

**The 0.05/voiced-block subtitle charge is gone** — it was the server-burn path's
fee, and captions are now burned locally for free. Budget 0.3 less per 6-block
trailer than the pre-2026-08-04 records show.

**Turn native audio off.** `seedance_*` default `generate_audio: true`, `kling*`
and `cinematic_studio_video*` default `sound: on`, and `wan`/`grok`/`gemini_omni`
generate audio natively. Pass `generate_audio: false` (or the model's equivalent)
on every clip.

> **⚠ Two models in the shortlist have no audio-off switch at all. Verified
> 2026-08-12.** `wan2_6` and `gemini_omni` expose **no** `generate_audio` or
> `sound` parameter in `models_explore` — there is no "model's equivalent" to
> pass. Given the LEVEL LAW below, a clip from either **will carry its native
> audio into the finished cut** and cannot be silenced at generation time. That is
> a disqualifier for a narrated cut, not a preference: treat both as unusable
> here until a run proves otherwise, and prefer `wan3_0`, which does expose the
> flag, over `wan2_6`.
>
> **The flag is free on `seedance_*` and only sometimes a saving elsewhere.**
> Measured: `seedance_2_0_mini` 480p costs **10 either way**, `seedance_2_5` 480p
> **30 either way** — audio off buys correctness, not credits. But `kling3_0` is
> **15 with `sound: "off"` against 20 with it on**. So "audio off saves money" is
> false on the house model and true on Kling; never generalise the direction.

**This is a correctness requirement, not just a saving.** `assemble_final.sh`'s
LEVEL LAW *keeps* the clips' diegetic audio, ducked under the voice at **0.12**
(`--sfx-vol`, clamped ≤0.20). A clip generated with native audio on will therefore
be **audible in the finished cut**, under the narrator, and the only fix is
regenerating the clip. Records predating 2026-08-04 treat this as a pure cost
saving because the assembler then discarded clip audio outright; that is no longer
true and a stray soundtrack is no longer merely wasted money.

## 1. Style key

Chain from the current head rather than starting a new look:

```
4b6f7106-67da-4d1a-a553-c58ba90ac43f   Suwen 1    (splitting scroll + seven-and-eight arcs)  ← NEUTRAL HEAD, chain from this
05ebe984-2781-491e-8c84-2b20e608d2a8   Suwen 8    (lacquer chart of twelve boxes + closed chest)
a863a691-6893-4cdd-8ef1-a098c9a426ea   Suwen 13   (divided silk scroll, inked one side, blank the other)
8e7e7549-cb5a-4970-afa7-b00b7e1442d4   Lingshu 28 (hearing + twelve tally slots)
c19aef40-1c85-4a7c-8bd8-b4380b0da353   Lingshu 8  (chain of brushed terms writing itself down a scroll, blank silk above)
```

**Chain new chapters from the Suwen 1 key, not from the most recent one.** This was
left ambiguous for two cuts running — Suwen 8's record said its key "should be
promoted to head" and it never was, and Suwen 13 then chained off Suwen 1 anyway.
**Settled 2026-08-10, and the reason is not inertia:** each chapter key bakes in its
own chapter's furniture, so chaining Suwen 13 off Suwen 8 would have meant prompting
away a lacquer chart of twelve boxes. The Suwen 1 key is the neutral three-character
group shot and is the right parent for an arbitrary new chapter. **Per-chapter keys
are recorded above as siblings, not as a chain** — add new ones to the list and do
not move the arrow.

The head is itself the end of a chain reaching back to a group shot built from
`assets/*.png`; those upstream keys are not recorded here, and they do not need
to be. **The head's job ID is the only input a new key takes** — Higgsfield holds
the image, so a new chapter derives from the ID above without re-deriving
anything before it. When a new key is generated, add it to the list above as a
sibling — **not** as the new head, per the arrow rule — and record its job ID and
motif in that cut's production record too. The Lingshu 28 and Lingshu 8 keys sat
in their production records and out of this list for five days for want of that
second step.

Pass the head's **job ID** as the reference and swap only the chapter
motif. Model `nano_banana_pro` (served by `nano_banana_2`), 9:16 768×1376.

```jsonc
generate_image({ params: {
  model: "nano_banana_pro",
  aspect_ratio: "9:16",
  prompt: "<three-character series key, new chapter motif>",
  medias: [{ role: "image", value: "4b6f7106-67da-4d1a-a553-c58ba90ac43f" }]  // Suwen 1 key (current head): job ID, never a URL
}})
```

`medias[].value` takes a `media_id` or a prior `job_id` **only**. A `https://`
URL there fails. If you do need a local `assets/*.png`, upload via `media_upload`
first — but see the network-policy note at the bottom, that path is often
blocked from this host. The current art is `emperor-Fan.png`, `wise-Qi-2.png`,
`witty-Lei.png` — any other `assets/` filename in an older record is from a
superseded naming and no longer resolves.

## 2. Clips

The model comes from the step-0 gate — `seedance_2_0_mini` by default, 480p for a
draft and 720p for the render. 10s per block, one clip per block, style key
attached to every clip, `generate_audio: false`.

Everything below is model-independent unless it says otherwise. **Record which
model and tier the cut used** in the production record: the notes here were
learned on `gemini_omni`, and the default has moved off it, so treat each one as
unconfirmed on `seedance_2_0_mini` until a cut proves it either way.

**Declare the aspect ratio twice.** `gemini_omni` does not reliably inherit
vertical framing from a 9:16 style key — a full set of clips has come back
1280×720 landscape and had to be regenerated at full cost. Every time:

- pass `aspect_ratio: "9:16"` explicitly, and
- write "vertical 9:16 portrait framing" into the prompt text itself.

The double declaration has held on every cut that used it, including the first
cut on `seedance_2_0_mini`. Don't drop it. **Check the first clip's returned
dimensions before generating the rest**, on any model — one wasted clip beats
a whole set.

**Decline preset swaps.** The service offers to replace your prompt with a stock
preset, and accepting breaks the flat-2D house style. Retry with
`declined_preset_id: "<the offered id>"` — it takes **one id per call**, so
budget a retry for each newly-triggered preset.

| Preset | ID | Triggered by |
|---|---|---|
| IN THE DARK | `24bae836-2c4a-48e0-89b6-49fcc0b21612` | any dim or night-lit scene; the most frequent trigger by far |
| DROWN IN MUSIC | `f1821f84-945b-4cd1-9085-1f479db0028e` | **temporal sequencing** — see below. Audio words are *not* the main trigger |
| 3D RENDER | *not recorded* | vocabulary on the NEGATIVE line |

The trigger is **prompt vocabulary anywhere in the request, not just the NEGATIVE
line and not just darkness** — that was the early reading and a later cut
disproved it. Pre-decline `IN THE DARK` on every clip; doing so has saved a full
round of retries on a dark-heavy cut. Keep audio vocabulary — *drum*, *drone*,
*music*, *rhythm* — out of clip prompts entirely, since those are edit-time
directions anyway.

> **⚠ `DROWN IN MUSIC` fires on time, not on sound — corrected 2026-08-24.** It
> blocked **eight of ninety** clip submissions on the Lingshu 28 v3 longform, and
> not one of those prompts contained an audio word. The common factor was
> **temporal-sequencing language**: *"then"*, *"one after another"*, *"in
> sequence"*, *"beat by beat"* — which reads as a music-video edit instruction.
> All eight cleared **unchanged** on retry with the `declined_preset_id` above.
>
> **At longform scale, pre-decline it as well as `IN THE DARK`.** One id per call
> means you must choose which to pre-decline; on a 90-block cut the sequencing
> language is unavoidable — a shot list is a description of things happening in
> order — so budget the retry rather than rewriting the beat out of the prompt.

Preset offers are a Higgsfield-service behaviour, not a `gemini_omni` one, so
expect them on any model.

`gemini_omni` echoes the media role back as `image` while the backend coerces it
to `image_references`. Expected, harmless, seen on every chapter — not a failure.
Other models declare their roles differently; check `models_explore` rather than
assuming this coercion happens everywhere.

Keep the clips **text-free** — no titles, no captions in-frame. Captions are
burned from the sidecar after assembly. Longform quotation cards are the sole
exception, for a reason specific to them — see
[ON-SCREEN TEXT](#on-screen-text--the-one-exception-to-text-free-clips).

**Two clip properties are now hard-gated by the assembler**, and both fail the
whole run rather than the block:

- **Duration ≥ 9.5s.** `assemble_final.sh` rejects any clip shorter than
  `--clip-seconds` minus 0.5 — `clip N is only X s — REGENERATE the block; a held
  still frame is not a scene.` At the house 10s block that is a 9.5s floor, which
  the 10s clip default clears; it is the models capped below 10s that do not, and
  the step-0 table already excludes them on exactly this ground.
- **Motion from frame 1.** The assembler freeze-probes the first ~1.5s and last
  ~2s of every clip and *warns* on a static open or a frozen tail. It is only a
  warning, so it will not stop a render — but it is the assembler telling you the
  block reads as a still, and the house answer is to regenerate that block.

### Submit a cut's blocks as one batch, not one call per block

`generate_video_batch` takes **1–12 independent requests in one call**, each item
carrying the same `params` as `generate_video` and its own caller-supplied
`index`. A whole trailer is one call. It is the same jobs, the same prices and the
same parameters — including `declined_preset_id`, which stays per item, so the
`IN THE DARK` pre-decline survives batching unchanged.

**Set `index` to the block number.** The response keeps the index you gave it, so
block numbering carries through submission, polling and display without being
re-derived — and `assemble_final.sh` calls a `block03 + voice05` pairing "the #1
cause of audio on the wrong block". This is the cheapest place to make that
mistake impossible.

The protocol after submission is fixed, and the last step is the one worth
getting right:

1. Poll with **`jobs_wait`**, in groups of **at most 12** (`timeout_seconds`
   default 15, max 15). While `all_terminal` is false, wait the returned
   `poll_after_seconds` and call again. A permanently failed lookup comes back
   once and does not block the other jobs.
2. When every job in the set is terminal, call **`show_generation_by_ids` exactly
   once**, for up to 60 jobs. **Never** `show_generations`, and never
   `job_display` per job.

| | Trailer (7 blocks) | Longform (~114 blocks) |
|---|---|---|
| `generate_video_batch` calls | **1** | 10 (12, 12, … 6) |
| `jobs_wait` groups | 1 | 10 |
| `show_generation_by_ids` calls | 1 | 2 — the 60-job cap, not one per batch |

**`get_cost` is not accepted inside a batch item** — the schema forbids it
outright. So the step-0 preflight stays exactly as written: one *single*
`generate_video` with `get_cost: true` on a representative clip, priced and
confirmed, and only then the batch that actually spends. Batching changes how the
approved run is issued; it does not move the gate.

## 3. Voiceover

Model `seed_audio`, `voice_type: "preset"`, `speech_rate: 55` — that rate is
what fits a line inside a fixed 10s block. **The full cast is cast permanently**
(CLAUDE.md, as of Suwen 1); all four are `preset` voices and none may be
re-picked per chapter:

| Role | Voice | `voice_id` | Measured rate | Draft to | Blocks in sample |
|---|---|---|---|---|---|
| **Narrator (V.O.)** | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | **3.70 words/sec** | **29–35 words** | 41 |
| **Fan-di** | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | **4.34 words/sec** | **34–41 words** | 13 |
| **Dr-Qi** | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | **3.91 words/sec** | **31–37 words** | 31 |
| **Lei-Gong** | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | **5.71 words/sec** | **45–54 words** | 5 |

> **Re-measured 2026-08-24 on the Lingshu 28 longform v3 run — 90 blocks in one
> cut, against the corrected 7.8–9.5s window.** `Draft to` is `rate × 7.8` to
> `rate × 9.5`, rounded inwards. This is three times the sample any previous row
> rested on, and it is the first table derived from the *real* window rather than
> from the 8.6–10.0 this skill carried in error, so **every earlier row is
> superseded by arithmetic as well as by measurement.**
>
> **Zane is the only voice the old table had approximately right**, and the only
> one of the four whose blocks all landed without a rewrite.
>
> **Word count is the estimator; `speech_metrics.sh` is the gate.** Twenty of the
> ninety blocks had word counts outside their voice's band and measured *inside*
> the window anyway; they were kept. Re-sizing on word count alone would have
> thrown away good audio. Size the draft from the table, then measure every take
> and re-size each miss **from its own measured rate** —
> `words × 8.65 / measured_speech` — not from the pooled rate. That, plus
> submitting two or three variants at once for any block that had already missed
> twice, is what converged a 90-block cut.
>
> **Run-to-run spread is wider than this skill has ever recorded.** Identical text
> on one block returned **7.396s, 8.264s, 15.688s and 17.073s** across four rolls —
> a 9.7s spread on a 1.7s window. The previous worst case here was 2.44s.

> **⚠ SUPERSEDED — re-pooled 2026-08-13, after the Lingshu 8 trailer v1 render.**
> Replaced by the 2026-08-24 table above, which has three times the sample and is
> derived from the correct window. **Everything below derives its word counts from
> `rate × 8.6 … rate × 10.0`, which was never the gate** — read it for the
> per-voice behaviour it establishes, not for a number to write to.
>
> The rates above are now pooled across **all 29 kept takes from all four rendered
> cuts** — Lingshu 28 v2, Suwen 8, Suwen 13, Lingshu 8 — as words of *shipped*
> narration over the gate's measured speech. Earlier rows pooled one or two cuts
> and each was pulled toward whichever cut it was measured on. `Draft to` is the
> derivation below, applied to the pooled rate:
>
> | Voice | Takes | Words | Speech | Pooled | `rate × 8.6` … `rate × 10.0` | **Draft to** | Old row |
> |---|---|---|---|---|---|---|---|
> | Arthur | 17 | 594 | 157.389s | **3.77** | 32.5 … 37.7 | **33–37** | ~4.4, 38–44 |
> | Xavier | 4 | 169 | 37.358s | **4.52** | 38.9 … 45.2 | **39–45** | 4.3, 40–44 |
> | Vesper | 5 | 198 | 46.197s | **4.29** | 36.9 … 42.9 | **37–42** | ~4.5, 41–43 |
> | Zane | 3 | 154 | 28.239s | **5.45** | 46.9 … 54.5 | **47–54** | 5.24, 47–52 |
>
> **Xavier's old row was unrenderable at its own top edge.** 44 words at the 4.3
> w/s it listed computes to **10.23s** — past the hard 10.0s ceiling — because the
> row was carried forward by hand instead of being re-derived when the rate moved.
> Every row above is now derived, not carried. If you change a rate, recompute the
> window from it in the same edit.
>
> **Arthur's spread has outgrown his rate, and this is the finding that matters.**
> Seventeen kept takes run **2.66 to 4.67 w/s** — a 76% spread, one voice, one
> `speech_rate`, on lines of comparable length. Both 25 words and 44 words have
> landed inside the window. **Treat 33–37 as where to start a draft, not as a
> predictor**; the word count sets the odds and nothing more. Generate two variants
> per block and keep the better one.
>
> **Zane at 50 words is genuinely bimodal — do not read either result as settled.**
> It cleared at 9.539s on Suwen 13 and 9.676s on Suwen 8, then came back at 8.066,
> 8.107 and 8.438s on three consecutive Lingshu 8 rolls, all under the floor. The
> Lingshu 8 record reads that as "50 words is now a measured hard failure"; pooled
> across three cuts it is not, it is the bottom of his range. Write him at **51–53**
> if you want margin on both sides.
>
> **The mandated disclaimer block is a special case.** Its two short full-stopped
> sentences slow `seed_audio` badly: 33 words returned **11.33s, 16.93s and
> 10.54s** before the trailing clause was cut to 18 words, which landed 9.60s on
> the first roll. **Budget the disclaimer-card tail at ~18 words, not ~22.**

> **⚠ SUPERSEDED — 2026-08-10, Suwen 13 trailer.** Kept as evidence of how far the
> rows have moved; the pooled table above replaces every figure in it.
>
> | Voice | Row before | Row after | Evidence |
> |---|---|---|---|
> | Arthur | 3.50 w/s, 31–34 | ~4.4 w/s, 38–44 | 9 takes; a legal 32-word line returned **6.446s** |
> | Vesper | 4.15 w/s, 37–41 | ~4.5 w/s, 41–43 | 9 takes; 40 words returned 8.61 / 8.70 / **7.92s** |
> | Xavier | 4.53 w/s, 40–44 | 4.3 w/s, 40–44 | landed first take, no re-rolls |
> | Zane | 5.34 w/s, 47–52 | 5.24 w/s, 47–52 | landed first take, no re-rolls |
>
> Five of seven Suwen 13 blocks failed the first pass and all five were Arthur's or
> Vesper's. That run is why the table is derived from measurement rather than
> estimate, and why a document written to a superseded row must be re-sized before
> it goes to takes.

> **⚠ SUPERSEDED — 2026-08-09, Suwen 8 trailer v1**, the first cut with all four
> voices speaking. Its figures are folded into the pooled table above; read the
> bullets for what the run established, not for numbers to write to.
>
> - **Zane was measured at length here for the first time**, at 5.34 w/s on that
>   run's evidence, against the **34–39 words** this repo had been guessing from
>   nothing. A 35-word line came back at **6.23s, 2.4s under the floor.** Any
>   document still writing Lei-Gong at ~35 words is a guaranteed hard failure.
> - **Xavier measured 4.53 w/s on that run** and 37 words came back under the floor.
> - **Arthur measured 3.50 w/s on that run** — the low end of the spread the pooled
>   row above now carries.
> - **Vesper measured ~4.15 w/s** across the two runs available at the time.

**Rates re-measured 2026-08-04 from the Suwen 1 trailer v5 run** (whose document
has since been deleted from `output/` — this table is the surviving copy) — the
first cut assembled end-to-end on `assemble_final.sh`, and so the first whose
figures come from the
assembler's own gate rather than from an estimate. Each is words of *shipped*
narration over the gate's measured speech, pooled per voice. `Draft to` is
`rate × 8.6` to `rate × 10.0`, rounded inwards so both edges clear.

**All three came back slower than the 2026-08-01 figures they replace** (Arthur
3.73, Xavier 4.55, Vesper 4.42) — Arthur by 2%, Vesper by 5%, **Xavier by 9%**. The
old columns therefore ran long at the top: a 45-word Xavier line, legal under the
old table, computes to **10.8s** on the measured rate — a hard assembly failure
with no re-roll that saves it. Note what this does *not* explain, though: Vesper's
block needed five takes to land one, and only the first missed over (13.23s) while
three missed under (7.73, 7.23, **8.497s**). The table's error sets the ceiling
risk; the spread below accounts for the rest.

That last one is why durations belong in the record at **3 decimal places**: it was
written up as "8.50s pass" and carried as a keeper until the assembly stopped on
it. It is 0.103s under the floor. **A take within ~0.2s of either edge is checked
against the number, never eyeballed** — the gate does not round in your favour.

**Zane was measured at length on 2026-08-09 and the guess was badly wrong.** He
had only ever been run on a 5-word line (2.3–2.6s), where pause overhead dominates
and no words/sec can be derived; the repo had been writing him at ~35 words on no
evidence. He is in fact **the fastest voice in the cast — 5.45 w/s pooled** — and
needs **47–54 words**. A 35-word line came back at **6.23s — 2.4s under the
floor**, a hard assembler error.

> **⚠ Seven committed longform documents are sized to the old guess and will
> fail.** Each writes Lei-Gong multiple full speaking blocks at **34–39 words**,
> and each cast table still reads `UNMEASURED`:
>
> ```
> output/lingshu/ch12/inner-canon-lingshu12-longform-v1.md
> output/lingshu/ch28/inner-canon-lingshu28-longform-v2.md
> output/lingshu/ch43/inner-canon-lingshu43-longform-v1.md
> output/lingshu/ch50/inner-canon-lingshu50-longform-v1.md
> output/suwen/ch8/inner-canon-suwen8-longform-v1.md
> output/suwen/ch12/inner-canon-suwen12-longform-v1.md
> output/suwen/ch77/inner-canon-suwen77-longform-v1.md
> ```
>
> These are ~110-block cuts, so this is not a per-line fix at take time —
> **re-size every Lei-Gong block to 47–54 words before any of them goes to
> takes**, and correct the cast tables while doing it. Re-derive the list with
> `grep -l '34–39\|UNMEASURED' output/*/ch*/*longform*.md` rather than trusting
> this one; it was wrong once already, naming two documents when seven qualified
> and one of the two had been deleted.

**Of the three doubts about the old columns, one is settled outright, one only for
the run it was measured on, and the third got worse:**

- **Settled for these figures — they are speech rates.** The live hypothesis was
  that the old figures were taken against raw take length, which would make them
  understate the true rate. It is wrong for the takes the rates come from: the
  assembler reported `file == speech` with **zero lead silence** on all seven of
  v5's kept takes. **Do not read that as a property of `seed_audio`** — it ships
  padding on some takes, up to 1.440s, and three later takes carry it. The rates
  above stand; the general claim that there is no padding to trim does not. (This
  has a second consequence, in [Subtitles](#subtitles).)
- **Settled — the word columns are measurements now, not arithmetic.** Every
  figure above comes from a take that cleared the gate.
- **Worse — the spread is wider than the window.** Identical 26-word text returned
  **10.23s and 7.79s** on consecutive generations: 2.44s apart, on a window 1.4s
  wide. A word count cannot be a setting when the noise exceeds the target.

**Read every rate in the table as survivor-biased, and budget re-takes
accordingly.** The figures are what *passing* takes delivered. Across all 18 v5
Arthur takes whose text and duration are both recorded — the four other blocks'
keepers plus block 5's fourteen attempts — he ran **3.04 w/s** against a passing
rate then measured at 3.65, because a block passes on the roll that comes back
fast. A line drafted at the table rate is sized for the fast mode and will
regularly come back over the ceiling. v5's block 5 took **fourteen attempts** to
land one take in the window — which at the corrected ~1.5/take is ~21 credits, so
**re-rolling is cheap and the table is a starting point, not a target.**

**Re-measure with `speech_metrics.sh` before committing a full cut to these
numbers** — see the window section below for the call. Treat a first pass at these
counts as calibration, and expect regenerations.

**Word counts do not transfer between voices**, and the gap is large enough to
break a cut: at the same `speech_rate`, 23 words measured 6.17s on Arthur against
7.46s on the narrator he replaced — ~21% faster for identical text. A budget
carried over from a different voice misses the window by more than a second per
block. Size every line from the measured figure for *that* voice, above.

These four are the only voices this series uses. Do not audition alternatives,
and do not carry a voice forward out of an older cut's production record.

**Narrator-only is the default for a trailer**, even now that the characters are
cast: the narration carries every compliance hedge. Giving a character a line
costs a block boundary (one speaker per block) and moves a hedge off the
narrator, so if a cut does it, its compliance notes must say which hedge moved
and who now carries it.

For any voice still marked unmeasured, **generate one take, read its duration,
and write the measured words/second back into this table** before committing a
script to it. One take is **~1.5 credits** (2.0 at Zane's length — see the price
table in *Order of operations*); a mis-sized script is the whole cut.
Zane is what skipping this costs: ~35-word lines went into two 110-block documents
on a guess, and the measurement that would have caught it was one take.

### `speech_rate` is not a duration lever — do not reach for it

Measured 2026-08-01 across rate 40 vs rate 60 on identical text: Xavier **+3%**,
Zane **+12%**, Vesper **−8%**. Vesper coming back *shorter* at the slower rate
shows the spread is take-to-take variance, not a rate response. Between 40 and 60
`speech_rate` does not meaningfully move take duration on these presets.

This kills the obvious fix. **Word count and punctuation are the only controls on
take length** — if a take lands short, rewrite the line longer or trade full stops
for commas; do not re-render it at a different rate expecting a different
duration. All four voices run at `speech_rate` 55.

**Character lines are structurally short, and a block is structurally 10s.** At
their measured rates every character voice needs **forty words or more** just to
clear the 7.8s floor — which is a speech, not an interjection. Take the exact
count from [the step-3 table](#3-voiceover), never from here. Zane is the sharpest
case: the fastest voice in the cast cannot say anything shorter than about fifty
words and still fill a block.

**The old second way out is now closed.** Letting a take run short and centred —
a 2.6s interjection sitting in ~3.7s of silence either side, used deliberately in
Suwen 1's block 3 — is a **hard assembler error** under the new floor:
`voice N carries 2.6s of speech; required 7.8–9.5s`. The assembler will not
build the cut. There is no flag to permit it; `--clip-seconds` moves the whole
window rather than widening it, because the window is always exactly 1.4s wide
and its ceiling *is* the block length.

So a short character beat now costs a structural decision, not a note in the
record. The options, in the order worth trying:

- **Write the character a real paragraph** — a reframe or a monologue that earns
  that voice's own word count from [the step-3 table](#3-voiceover). Never take the
  figure from here: the count is per-voice and it moves on every re-pooling.
  Suwen 1 v5 did this twice: Xavier cleared at 40 words → 9.64s on the first roll,
  Vesper at 38 words → 9.06s only after four rejected takes.
- **Fold the beat into a neighbouring block** so one voice carries the full window
  and the interjection lives inside it. This changes the block count, so it
  reaches the cost preflight.
- **Cut the beat.**

Any cut carrying a deliberate short take — Suwen 1 does — cannot be reassembled
on this path without rewriting that block first.

A cut is never re-voiced retroactively unless someone decides to, in which case
only the voiceover and assembly are re-paid — the clips are untouched.

One take per block. Record each take's **duration** alongside its job ID — the
record is how you know a block was comfortable or tight.

**Batch the takes the way step 2 batches the clips.** `generate_audio_batch` takes
the same 1–12 items with the same `index` convention, and the polling and display
protocol is identical — see
[step 2](#submit-a-cuts-blocks-as-one-batch-not-one-call-per-block). Two things
are specific to voice. Each item carries its own `voice_id` and `voice_type`, so a
mixed-cast cut still goes out as **one** call rather than one per speaker. And the
two-variants-per-block method puts 14 takes behind a 7-block trailer, over the
12-item cap: issue it as **two batches of seven, same indices both times**, so the
variants stay block-aligned and picking the keeper is a per-index comparison
rather than a hunt.

### Write to 7.8–9.5 seconds. This is the most expensive thing to get wrong.

> **⚠ CORRECTED 2026-08-24, Lingshu 28 longform v3 — this section said 8.6–10.0s
> for twenty days and it was wrong at both edges.** `assemble_final.sh` computes
> `SPEECH_MIN = CLIP − 2.2` and `SPEECH_MAX = CLIP − 0.5`, i.e. **7.800–9.500s** at
> the house 10s block. The script's own comments date it: the floor moved from
> `CLIP−2.0` to `CLIP−2.2` on **2026-08-04** "with the engine swap to elevenlabs",
> and the ceiling has been `CLIP−0.5` since **2026-08-01**. The 8.6–10.0 written
> here was the band that existed *before* 2026-08-01.
>
> **The ceiling is the half that did the damage, and it is 0.5s lower than
> documented.** Lingshu 28 v3 was written to 8.6–10.0 and **first-pass yield was 39
> of 90** — 224 takes for 90 blocks. Read the gate out of the script, not out of a
> document, whenever a run starts missing one edge systematically.

**The window is enforced by the assembler, and both edges are hard errors.**
`assemble_final.sh` computes it from the block length as `CLIP−2.2` to `CLIP−0.5`,
so at the house 10s block it is **7.8–9.5s of detected speech**. Miss it either way
and the run stops:

```
ERROR: voice 3 (voice03.wav) carries 6.42s of speech; required 7.800–9.500s
       — REWRITE and regenerate (never pad, atempo, or trim speech).
```

Three properties of that gate matter when writing:

- **It measures *speech*, not file length.** The assembler runs `silencedetect`
  and ignores the provider's leading and trailing padding, then centres the words
  on the block. A padded take cannot shift the words off their scene — and cannot
  sneak under the ceiling either.
- **There is no time-stretch.** `assemble_final.sh` explicitly declares `NO
  time-stretch (no atempo / no speed change)`, so an overlong take is not sped up
  pitch-safely the way the pre-2026-08-04 assembler did. It is not absorbed at
  all — it fails.
- **Never fix it in the audio.** The error text names the three forbidden repairs
  — pad, `atempo`, trim — because a dev run that started cutting silence inside
  takes to pass the gate produced audible artefacts. Rewrite the line and
  regenerate.

**The window is the rule; the word count is not.** The window is a property of the
pipeline — a fixed 10s block, a take that must fill it without clipping — so it
holds for every voice. The word count that *produces* it is a property of the
voice, and it moves:

| | |
|---|---|
| Speech per 10s block | **7.8–9.5s — fixed, applies to every voice** |
| Line length and rate | **per voice — [the step-3 table](#3-voiceover) is the only copy** |

**The word counts are deliberately not repeated here.** A summary of them lived at
this spot through two re-measurements and went stale on both, the second time
while carrying a note saying it had already gone stale once. It ended up telling
you to write Arthur at 31–34 words on the same page where the measurement banner
said any document doing that must be re-sized. **Numbers that get measured live in
exactly one place; everything else links to it.**

**Take the line length from the voice table above, never from another cut's
document.** A word budget written for one voice undershoots or overshoots another
by more than a second per block — and **every cut written before 2026-08-04 is
sized to the old 6–8s window**, so those documents are now a source of
guaranteed-failing lines rather than a reference.

**Measure, don't infer.** The sanctioned tool trims exactly what the assembler
trims, so its `speech=` is the number that will be gated:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/narrator/scripts/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

Hand-rolled `silenceremove` or volume-detect math measures something else.

**Expect regenerations, and budget for them.** `seed_audio` pace wanders between
generations on identical text, and **v5 measured that spread wider than the
assembler's own source note claims** — the same 26-word line came back at **10.23s
and 7.79s**, missing the window at *both* ends rather than only the top. So the old
reading, that only the upper mode needs a rewrite, does not hold: a re-roll can
land either side of the window. **Generate two variants per block and keep the
better one — then rewrite rather than re-roll.** At ~1.5 a take, re-rolling is
cheap against a failed assembly but is not free: the Suwen 13 trailer spent **33
takes on 7 blocks for ~47.7 credits**, a 4.7× re-take rate, and that run's own
diagnosis was that the word budgets were wrong rather than the service noisy. If
two or three re-rolls miss the same way, the line is the problem and no further
roll will fix it.

### One-word fragments are the most expensive punctuation of all

**Measured 2026-08-24, Lingshu 28 v3.** A 33-word Arthur line opening *"Stop there.
Ruler. For ten answers running…"* returned **17.322s** — 7.8s past the ceiling.
Rewritten as flowing prose at **31 words** with the two fragments removed, it
returned **8.538s**. Same voice, same `speech_rate`, two fewer words, **8.8 seconds
of difference from sentence shape alone.** Two other blocks behaved identically
(*"Read the verb. One yawns."*, *"Not saddened. Shaken."*).

This is the inverse of the *each sentence boundary buys 0.14–0.7s* rule below: a
boundary around a **one-word fragment** buys **seconds**, because `seed_audio`
reads an isolated word as a dramatic beat and puts silence on both sides of it.

**So do not reach for a fragment to pad a thin line** — it is the single fastest
way to overshoot, and it overshoots by a margin no re-roll recovers. It also
trips the pausey-take warning on the way past.

### Dead air is no longer the failure it was

The old 6–8s window left 2–4s of silence per block, and this section used to warn
that 5–6.5s of it "reads as a stall". Under a 7.8–9.5s window that risk is
largely designed out: a take at the floor leaves **0.7s of lead and tail after
centring**, which the assembler's own note calls inaudible. The pressure has
inverted — the writing problem is now finding enough content to fill a block, not
trimming to fit one.

### Sentence structure beats word count — the Suwen 1 lesson

Suwen 1 sized every line off a measured words/second figure and **still** put a
take at 10.78s, over the window. The cause was not the word count:

| Block | Words | Structure | Delivered |
|---|---|---|---|
| 2, first pass | 32 | **one sentence**, subordinate clause after an em-dash | **10.78s** |
| 2, re-cut | 30 | **three short sentences**, same content | **6.91s** |
| 5 | 29 | two sentences | 5.87s |

Two words cannot account for 3.9 seconds. **A long single sentence — especially
one carrying a subordinate clause after an em-dash — makes `seed_audio` slow down
and add dramatic pauses**, and a linear words/second extrapolation from a short
measurement line will not predict it. Block 8 showed the same effect inverted: 11
words across two sentences came back at 4.95s against a 2.9s linear prediction.

### …and the other extreme runs long too — the Suwen 1 v3 measurement

Breaking sentences up is not a free lever. The v3 trailer was written in short
sentences *specifically* to pass the caption check, and every take came in high.
Isolating sentence count against a near-fixed word count, same voice, same rate:

| Take | Words | Sentences | Delivered |
|---|---|---|---|
| Suwen 1 v1 block 1 | 24 | 2 | 6.53s |
| Suwen 1 v3 block 6 | 24 | 3 | **7.08s** |
| Suwen 1 v3 block 5 | 23 | 4 | **7.98s** |

**Each additional sentence boundary costs roughly 0.55–0.7s**, and over the range
a 10s block allows, that dominates the word count. v3 shipped one take at 8.14s
and two more at 7.9s purely from sentence count.

**v5 measured that cost far lower at the top of the range.** Its blocks 5 and 6 are
both 32 Arthur words; block 5 is two sentences and landed 8.66s, block 6 is five
sentences and landed 9.09s — **+0.14s per boundary, not 0.55–0.7s**. That is one
pair on a voice whose run-to-run noise is ±1.2s, so it settles nothing by itself.
Read it as a reason not to plan a thin line up to the floor on punctuation: at
0.14s a boundary you would need eight of them, and the pause warning below fires
long before that.

So the two findings bracket the same curve rather than contradicting each other:

```
1 long em-dash sentence  ────────────────────────────►  10.78s   (32 words)
2–3 sentences            ────────────►                  6.5–7.1s (24 words)
4–5 sentences            ──────────────────►            8.0–8.1s (23–30 words)
```

**The curve is still valid; the target on it has moved.** Every duration in the
three tables above was measured against the old window, where the job was to stay
*under* 8s. Read them now as a map of how to get *up* to 7.8s — and note that the
whole measured range, 5.87s to 8.14s, **now sits below the floor**. The old
"aim for two to three sentences per block" advice targeted 6.5–7.1s and is
therefore a recipe for a failing take. It has been removed.

### The comma in a list is the most expensive punctuation there is

**Measured 2026-08-09, Suwen 8 trailer block 4, Arthur, identical word count:**

| Take | Words | Commas | Sentences | Delivered |
|---|---|---|---|---|
| 2nd | 31 | **7** (a four-item list) | 2 | **12.022s** |
| 3rd | 31 | **0** | 3 | **8.913s** |

**A 3.1-second swing from punctuation alone, at a fixed word count** — larger than
any word-count effect measured anywhere in this file, and more than twice the width
of the whole window. The first take was a comma list (*"A granary, a general, an
envoy who carries joy, a district office that stores water"*); the second said the
same thing with *and* (*"A granary and a general. An envoy who carries joy and a
district office that stores water"*).

`seed_audio` reads a comma list as an enumeration and puts a beat between every
item. So the earlier finding that each *sentence* boundary costs ~0.14–0.7s
understates the risk badly: **a comma inside a list costs far more than a full
stop does**, and four of them will push a correctly-sized line two seconds past the
ceiling.

**Practical rule: never hand a voice a comma-separated list of three or more
items.** Join them with *and*, or break them into separate sentences. If a line
must enumerate, size it ~20% short and expect to re-roll.

**Reach the window with words, not with sentence boundaries.** That distinction is
now load-bearing, because the assembler polices the other end:

> `WARN: voice 4 has 2 internal pause(s) >=0.8s (longest 1.30s) — pausey take:
> rewrite the line as ONE flowing clause (fewer full stops) and regenerate.`

So the cheap old lever — adding full stops to buy ~0.55–0.7s each — now buys
duration in exactly the currency the assembler flags. Padding a thin line to 7.8s
with sentence breaks produces a take that passes the gate and trips the warning.
**Write that voice's full word budget as actual content, in two to three
sentences** — take the count from [the step-3 table](#3-voiceover) — rather than
padding a thin line out with five. The shape is the point here, not the number:
content in few sentences, never few words in many.

The measured words/second in the voice table sizes a *first draft*. What lands the
take in the window is structure:

- **Take is short of 7.8s** → add content. Still a common case, though far less so
  than this skill assumed while it was quoting an 8.6s floor. Reach for words first, then a single extra sentence boundary, and
  stop before the pause warning fires.
- **Take is over 9.5s** → re-roll once (bimodality accounts for a lot of ceiling
  misses). If it lands long again and it is one long sentence carrying a
  subordinate clause after an em-dash, break it — that structure alone put a
  32-word line at 10.78s.

Both levers are voice-independent and cost a single re-take. Reach for them
before rewriting the line's content, and **never** reach for `speech_rate`.

**Caption fit no longer pushes against this.** It used to: short clauses kept a
line inside the server-burned caption budget, and short clauses arrive as short
sentences — exactly how v3 drifted long. With the sidecar as the only path, that
pressure is gone, because the sidecar splits long clauses across cues by itself.
**Write every cut for the take window first**; caption fit is now downstream of it
rather than in tension with it.

### Take length is not caption fit — two constraints on one line

The narration line is also the subtitle, so it is governed twice. The two rules
point the same way often enough to look like one, and they are not:

| | **Take length** (this section) | **Caption fit** ([Subtitles](#subtitles)) |
|---|---|---|
| Constrains | total **seconds** of the take | pixel **width** of the longest clause |
| Set by | the voice against a fixed 10s block | frame width, margins, Anton glyph widths |
| Voice-dependent | **yes** | **no** — pure geometry |
| Lever | how much content, and how many hard stops | where the clause breaks fall |
| Failure | **the assembly stops** — hard error at either edge | the line renders past the frame edge |

**Never size captions off a word count.** The caption budget is a clause width and
does not move when the cast changes; the word count is voice-specific. The two
only ever looked like one rule because a single narrator carried the whole series.

**They interact through duration, not words.** `build_subtitles.js` times cues from
the take duration in the production record, so a *short* take makes captions flash
rather than overflow. The old counterpart to that — an overshooting take being sped
up at assembly and dragging the burned-in captions with it — **can no longer
happen**: nothing is sped up and nothing is burned in. **Take length governs
caption timing; clause length governs caption width.**

**They no longer conflict in the direction they used to.** The old advice was to
cut content when a line neared 8s with one wide clause, because punctuation bought
caption width with duration the take did not have. Under a 7.8s floor the take
usually *needs* that duration, and the sidecar splits wide clauses across cues by
itself — so write for the take window and let the sidecar handle the width.

## 4. Assembly

**Assembly runs `assemble_final.sh` inside `sandbox_exec`** — a remote Linux
sandbox with ffmpeg preinstalled. The script ships in every sandbox under
`$HF_WORKFLOWS/faceless-video/scripts/`. It replaced the server-side
assembler on 2026-08-04; see the banner at the top of this file for what that
changed about writing a cut.

We borrow that one script; we do **not** adopt the `faceless-video`
workflow around it. Its scriptwriting, style and preset rules are a different
house style and do not govern this series — `CLAUDE.md` still does.

**Confirm the script and its flags back in
[step 0](#tool-availability--check-the-surface-before-you-spend), not here.**
Reaching this step means the clips and takes are already paid for; the probe costs
nothing and is worthless once the spend has happened.

### The sandbox is ephemeral — this changes the shape of the call

The sandbox is discarded ~10 seconds after a call returns, and files do not
survive between calls. Two consequences, both of which have their own failure
mode:

- **Download, assemble and export go in ONE command**, chained with `&&`. Split
  them across calls and the second call starts on an empty filesystem.
- **Assembly returns a file in a sandbox that is about to vanish, not a hosted
  job.** Nothing archives it for you. Call `media_upload` *before* the assembling
  command, append `curl -f -X PUT --upload-file` to that **same** command, and
  `media_confirm` only after HTTP 200.

**Pass `timeout_seconds: 120` explicitly.** The tool's own default is **60**, not
the 120s foreground budget this section reasons about — a call that omits it gets
half the headroom, and the download-plus-assemble chain is the part that uses it.
120 is the maximum; past that the only option is `background: true`, below.

```
sandbox_exec({ command:                              // foreground — see below
  "set -e; mkdir -p work/blocks work/voices work/output; " +
  "curl -fL '<clip1 url>' -o work/blocks/block01.mp4; " +
  "curl -fL '<voice1 url>' -o work/voices/voice01.wav; " +   // …one pair per block
  "printf '%s\\n' 'work/blocks/block01.mp4 work/voices/voice01.wav' " +
  "               'work/blocks/block02.mp4 work/voices/voice02.wav' > pairs.txt; " +
  "chmod +x $HF_WORKFLOWS/faceless-video/scripts/*.sh; " +
  "bash $HF_WORKFLOWS/faceless-video/scripts/assemble_final.sh " +
  "  --out work/output/final.mp4 --blocks 6 --manifest pairs.txt && " +
  "curl -f -X PUT --upload-file work/output/final.mp4 '<upload_url>'",
  timeout_seconds: 120 })                            // NOT the default — default is 60
```

### `background: true` lost a whole run — use it only at longform scale

> **⚠ The 120s foreground budget may not exist in your harness — measured
> 2026-08-24.** On the Lingshu 28 v3 run a `sleep 105` submitted with
> `timeout_seconds: 120` came back `timed out after 60s`: **the MCP client capped
> the call at 60s regardless of what the tool was given.** If that is your harness,
> everything below about "finishes inside the 120s foreground budget" is
> unreachable and **anything over ~55s must go background and be polled**. Test it
> once with a `sleep 90` before planning a foreground assembly around 120s — it
> costs nothing and it is the difference between a plan and a wish.

**Run a trailer-scale assembly in the foreground.** A 7-block assembly finishes
inside the 120s foreground budget comfortably — *with `timeout_seconds: 120`
passed; the default 60 is not comfortable* — and the Suwen 1 v5 run proved
what the alternative costs: with `background: true` the transport call timed out,
the sandbox was reclaimed, and the finished render was gone with it — clips and
takes already paid for, nothing to export. The sandbox is discarded ~10 seconds
after a call returns, so a background job that nobody is polling takes the render
with it.

**Reserve `background: true` for a job that genuinely cannot finish in 120s** —
longform, where ~110 blocks means ~240 downloads before assembly even starts. When
you do use it, poll the returned log with `tail` **at least every 60s**, or the
sandbox dies under the job exactly as it did above.

The rule of thumb: foreground up to the point where the call would time out;
background only past it, and only with polling already scheduled.

> **Chain the export into the producing command — do not make it a second call.**
> Reserve the slot with `media_upload` **before** starting the job, then append
> `curl -f -X PUT --upload-file <file> '<upload_url>'` to the **same `&&` chain**
> as the `ffmpeg`, so the render cannot exist in a sandbox that nobody is holding
> open. Lingshu 28 v3's assembly did not do this — it ended at the `ffprobe` and
> left a 172MB MP4 between two calls, which is precisely the Suwen 1 v5 loss
> condition above, survived by timing rather than by design. Its caption burn did
> do it, and that call was safe by construction. `media_confirm` after HTTP 200.

### The flags that matter here

| Flag | |
|---|---|
| `--out` | output path |
| `--blocks N` | **required** — asserted against the manifest *before* any work, so a dropped pair fails instead of shipping a hole |
| `--manifest` | one `clip voice` pair per line, block order, `#` comments allowed. Preferred over positional args in production |
| `--clip-seconds` | block length, default 10. **Moves the speech window with it** — leave it alone |
| `--music bed.mp3` | optional licensed bed, `--music-vol` default 0.10, clamped ≤0.20 |
| `--sfx-vol` | clip diegetic audio level, default 0.12, clamped ≤0.20 |
| `--allow-mismatch` | overrides the pair-numbering assert. Do not use — see below |

**No `width`/`height`.** Output geometry follows the source clips, so the old rule
about reading dimensions off the clip jobs rather than pasting 720×1280 is
handled for you. Draft and full tier both just work.

#### Delivered geometry — measured 496×864 on the draft tier

The Suwen 1 v5 run assembled 480×854 draft clips and delivered **496×864,
70.059s**. Two things were established by measurement and are worth not
rediscovering:

- **The assembler rescales; it does not pad.** Edge-strip luma sampled at t=30s
  and t=42s returned real picture at every border (cols 0–8: 196.28 / 128.21;
  rows 0–5: 192.24 / 192.76), matching the adjacent interior within ~1–2 units.
  **There are no black bars to crop.**
- **The delivered file is ~2% wider than true 9:16.** 480×854 is 0.5620
  (essentially 9:16); 496×864 is 0.5741. **Scale it to 720×1280 anyway** — see
  below.

**496×864 is fine as a draft deliverable**, and **scaling it to a true 9:16
720×1280 is the house call** (set 2026-08-08). The 2.1% vertical stretch that
costs is accepted: it is imperceptible, and it buys a frame the vertical platforms
take without letterboxing or cropping a cut that is 2% off their aspect. Do not
preserve 496×864 into the deliverable to avoid it.

**Scale before burning, not after** — `scale=720:1280` first in the `-vf` chain,
then `subtitles=`. Two reasons: captions are drawn at native 720×1280 instead of
being stretched with the picture, and the PlayRes the sidecar's printed command
writes into the `.ass` then matches the frame exactly rather than approximately.
`build_subtitles.js` prints the command in that order already.

The sidecar is correct either way — `build_subtitles.js` writes style values in
PlayRes space, so libass scales font and margins with whatever frame it is given
and the measured fit holds at both geometries. The scale is about the picture and
the platform, not about the captions.

**No `--subs`.** Passing it is a hard error: `--subs was removed. Captions are the
subtitles skill's job: assemble first, then run it on the clean voice takes +
<out>.mp4.assembly.json.` See [Subtitles](#subtitles).

**Name files `blockNN.mp4` / `voiceNN.wav` and keep the numbers aligned.** The
script cross-checks the numbers in each pair and errors on `block03 + voice05` —
it calls this "the #1 cause of audio on the wrong block". `--allow-mismatch`
exists for genuinely unnumbered files; reaching for it to silence the assert
re-arms precisely the failure it was added to catch.

### What it guarantees, and what fails

**Blocks are fixed windows** — the cut is exactly `N × 10s`, asserted on the
output to ±1s, and the video is never shortened to the audio. A 6-block trailer is
60s. That is the rule the whole pipeline is written around, and it is why
the sidecar's cue timing lines up without nudging.

**A take that does not fit is a hard error, at both edges — nothing is absorbed:**

| | `assemble_final.sh` |
|---|---|
| Take short of window | **hard error** below 7.8s |
| Take over window | **hard error** above 9.5s |
| Centring | on **detected speech** (padding trimmed), not file length |
| Clip audio | **kept at 0.12** under the voice |
| Captions | **not burned** — separate step |
| Output | file in an ephemeral sandbox |

Every one of those is the opposite of how the pre-2026-08-04 assembler behaved, so
**a production record written before that date documents absorption this pipeline
does not do.**

It also asserts, on the finished file: every 10s window contains voice-level audio
(`blocks [..] have NO narration in their windows`), the audio stream exists and
matches the video length, and the file passes decode validation. Final mix is
loudnorm **−16 LUFS**, voice at 1.0.

**The sidecar is the assembler's own receipt.** It writes
`<out>.mp4.assembly.json` carrying each block's measured speech and its absolute
position in the finished file. **Never hand-write it** — the caption step rejects
a hand-made one.

Assembly itself is free; the sandbox costs no credits. What it can cost is a
regenerated take, which is why the window in [step 3](#3-voiceover) is worth
getting right before you reach this step.

## 5. The document

New version, new file — `inner-canon-<book><N>-trailer-v<M>.md` or
`inner-canon-<book><N>-longform-v<M>.md`, both under `output/<book>/ch<N>/`. Never
overwrite a prior version (`CLAUDE.md` § Git conventions): its production record
is the reproduction evidence for the next cut.

**`CLAUDE.md` § Structure holds the canonical section list.** Reproduced here in
order because the generation work is only half the deliverable and the three
sections after the record are the ones most likely to get skipped — where the two
disagree, `CLAUDE.md` is correct and this list needs updating:

1. Title, Chinese chapter title, cut short name.
2. Final video link + resolution / duration / format.
3. The disclaimer blockquote.
4. **Narration** table (block / beat / line), naming preset and speech rate.
5. **Source-script mapping** — source beat → blocks, plus any naming
   reconciliations, where the cut was re-timed off a longer script. CLAUDE.md is
   the primary instruction in a conflict. Incoming scripts have repeatedly needed
   the same three resolved this way: "Chronicle of Balance" → *The Emperor's Inner
   Canon*, "Xiao-Lei" → **Lei-Gong**, and jade → **blue** cheongsam.
6. **Shot list**, numbered to match the blocks.
7. **Production record (Higgsfield)** — see below.
8. **Deliverables the assembler cannot produce** — the four are listed in
   `CLAUDE.md` and every cut carries all four. The three text ones are hand-added
   at edit time because `assemble_final.sh` has no text-overlay parameter; music
   is the exception, in one direction only — `--music` *places* a licensed bed you
   supply, and generates nothing. **The one with a cost consequence is the end
   disclaimer card**: it needs its own final 10s block in the block plan *and* in
   the step-0 preflight, rendered as a plain plate with the narrator reading the
   disclaimer to fill the block's one audio slot. Ship the `.srt`/`.vtt` sidecar
   alongside the document — see [Subtitles](#subtitles).

   Close the section with a **Finishing steps** subsection — the ordered
   procedure that turns the delivered render into an uploadable file. Every cut
   now arrives from the assembler carrying neither captions nor on-screen text,
   so this section is no longer conditional on how the cut was assembled.
   Cover, with **this cut's own numbers**: the `.srt` to burn and
   which cues to strip first, the `ffmpeg` line (plus `scale=` if burning a
   480p draft with a 720p sidecar), where the lower-third sits relative to the
   caption band, the end card's exact in/out timecodes and text, and where the
   music drops out. Never write it as a generic recipe — block numbering and
   timecodes differ between versions of the same chapter, and that is where the
   mistakes land. `output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md` is the
   reference.
9. **Compliance notes (YouTube)** — one bullet per repo rule.
10. **Runtime levers** — which blocks drop to reach 0:30, which beats add to
    reach 1:30.

### Production record (Higgsfield)

The record is what makes a cut reproducible after the CDN links die:

- **Style key** — job ID, model, dimensions, and the full derivation chain.
- **Clips** — model **and tier (Draft/Full)**, duration, resolution, and every
  block's job ID. Name the model explicitly; it is a per-cut choice now, and a
  future chapter cannot reproduce the look without it.
- **Voiceover** — model, preset name + ID, `speech_rate`, per-block job ID, take
  duration *and* the assembler's measured **speech** figure (they differ; the
  second is the one that was gated).
- **Assembly** — there is no job ID to record any more, so record what makes the
  run repeatable instead: block count, the `assemble_final.sh` flags used
  (`--blocks`, `--clip-seconds` if not 10, `--music`/`--sfx-vol` if set), the
  manifest, the `media_id` the finished MP4 was exported to, and any assembler
  WARNs that were accepted rather than fixed (pausey take, static head/tail).
- **Captions** — burned separately now, so say so explicitly: which sidecar, and
  whether the burn was **visually verified** or only executed (the CDN is usually
  blocked here, so say which).
- **Credit spend** for the run.
- **Reproduction notes** — anything that went wrong and how it was resolved.

Keep superseded job IDs — landscape clips, overlong or short takes, a clip
rejected as `nsfw` — in the notes, marked as superseded. They're evidence for the
next chapter, not clutter.

## Subtitles

Every deliverable ships captioned (`CLAUDE.md`). **There is exactly one path:** the
repo's own sidecar, burned locally after assembly. `assemble_final.sh` rejects
`--subs` outright and burns nothing itself.

| | Sidecar + libass burn |
|---|---|
| How | `scripts/build_subtitles.js`, then `ffmpeg` |
| When | **after** assembly, on the finished MP4 |
| Wrapping | **guaranteed** by libass margins |
| Cost | free |

One measurement is worth keeping in view, because it constrains every vertical
cut: every cut carries the end disclaimer card, and the card carries the **full
78-character** compliance string mandated by `CLAUDE.md` — *"A dramatized
adaptation of a classical philosophical text. Not medical advice."* It is a
compliance string, so it cannot be reworded to fit anything.

**Captions are measured per clause, not per card**, and the card is two sentences,
so the 78 characters never meet a caption boundary as one unit. Measured with
`scripts/lib/caption_metrics.js`:

| Clause | 9:16 (556px/line, 1111px cap) | 16:9 (1001px/line) |
|---|---|---|
| *"A dramatized adaptation of a classical philosophical text."* (58ch) | **1187px — overflows, 3 lines** | 967px, fits on one |
| *"Not medical advice."* (19ch) | 406px, fits on one | 331px, fits on one |

So exactly one clause overflows, and only on vertical. That single clause is what
`check_caption_fit.js` carries as `MANDATED_DISCLAIMER` and reports as a known
exception rather than a failure — the constant is the widest *clause*, not the
whole card, which is why an exact-match against 58 characters is correct there.

**Nothing double-layers.** The assembler burns no captions, so burn the sidecar
over the assembled cut without checking whether captions are already in the
pixels — they are not.

> **An alternative exists and we are not using it.** The sandbox also ships
> `scripts/subtitles/*` (`audio_to_captions.py`, `burn_caps_clean.sh`), which times
> captions off Whisper against the assembler's sidecar. It is untried here and
> uses its own fonts (Metropolis, Montserrat) rather than Anton, which `CLAUDE.md`
> mandates. `build_subtitles.js` stays the house path.

Caption *width* is geometry and is identical for every voice; caption *timing*
comes from take duration, which is not — see
[the two-constraint table](#take-length-is-not-caption-fit--two-constraints-on-one-line)
in step 3.

### What governs caption width

**The sidecar is the wrap control.** `build_subtitles.js` splits a block's
narration into cues at clause boundaries and pre-wraps each to the measured
budget; libass then wraps inside `MarginL`/`MarginR` and cannot draw outside them.
Nothing is negotiated with a service, so there is no wrap setting to look for and
none to promise anyone.

The budget itself is pure geometry:

- **A clause width, not a word count** — **~22 characters per line at 9:16
  720×1280**, ~50 at 16:9 1280×720, two lines max either way. Both scripts compute
  it from frame width, margins and Anton's advance widths, and print it on every
  run. These are the numbers the burn actually uses, because the cut is scaled to
  720×1280 before captions go on — see
  [step 4](#delivered-geometry--measured-496864-on-the-draft-tier).
- **9:16 is the hard case.** A 720-wide vertical frame gives captions roughly half
  the room of the 1280-wide longform frame, so a phrase that is fine in 16:9 can
  overflow in 9:16. Judge wrapping on the vertical cut.
- **Do not switch fonts to fix wrapping.** `anton` is the most condensed face
  available and `CLAUDE.md` mandates it anyway; anything else makes the fit worse.
- **Anton has no CJK glyphs, and neither host ships a CJK face.** Any classical
  quotation burned on screen needs one installed first, or it renders as tofu:
  `curl -sSfL -o ~/.fonts/NotoSansCJKsc-Regular.otf https://github.com/notofonts/noto-cjk/raw/main/Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf && fc-cache -f`.
  Romanising is the alternative where the text is an attribution rather than a
  quotation — Lingshu 28 v3's music credit took that route.

> **⚠ The Anton model in `caption_metrics.js` is ~1.67× too wide — measured
> 2026-08-24 by burning and reading pixels.** For the widest line in Lingshu 28 v3
> the model computes **1000.6px against a 1001px budget** — reporting the cut as
> only just fitting. libass renders that same line at **599px**. Measured average
> advance is **0.216 em**; the model assumes **0.361 em**.
>
> **It errs entirely in the safe direction**, so no caption has ever overflowed and
> nothing is broken. But the real usable width at 16:9 is 1088px, so the line budget
> could be ~83 characters rather than ~50, or `Fontsize` could rise from 44 to
> roughly 70 and still hold two lines. At 44, Anton's rendered cap height is **26px
> on a 720px frame — 3.6%**, against the 5–8% broadcast captioning targets.
>
> **Do not re-tune it as part of a cut that is rendering.** The sidecar is built
> from the current model and gets burned in; changing the metrics re-wraps every
> cue and invalidates a delivered file. It is its own change: re-derive the budget,
> rebuild every rendered cut's sidecar, and verify the same way this was caught —
> burn a frame and measure the box, do not re-read the model.

**Measure the burn, do not trust it.** Rendering cues onto a **black plate** at a
few sample times and measuring the white bounding box gives line count, box width
and all four margins for nothing, and it is the only caption check available when
the CDN is unreachable from the repo host. Measure on black rather than on the
video — bright frame content lands in the same threshold as the text and inflates
every number.

```
ffmpeg -y -v error -f lavfi -i color=black:s=1280x720:d=1 \
  -vf "setpts=PTS+<T>/TB,subtitles=subs.ass:fontsdir=$HOME/.fonts:force_style='…'" \
  -frames:v 1 probe.png
```

> **⚠ Never apply a full-frame effect after captions are burned.** On Lingshu 28 v3
> the end card first darkened the whole frame with `drawbox …color=black@0.62` so
> the card text would read. The captions are already *in* the pixels by then, so the
> scrim dimmed them too: the caption band went from **max 255 with 50,537 pixels
> above 150** to **max 102 with zero**. The narrator's mandated disclaimer was
> effectively erased, and nothing in the encode warns you.
>
> **Use a bounded panel instead.** `drawbox x=64 y=150 w=1152 h=360` stops at y=510,
> clear of the caption band at 575–665, and the captions measured byte-identical to
> source afterwards. If you must darken the whole frame, **re-measure the caption
> band by pixel** before shipping.

> **⚠ `-ss` before `-i` breaks every `enable=` window in a probe frame.** Input
> seeking resets output timestamps to zero, so `enable='between(t,890,900)'`
> evaluates **false** and the overlay silently does not render — exit code 0, no
> warning, and it looks exactly like a malformed filter. Use
> `ffmpeg -copyts -ss T -i file …` when probing. The full encode has no `-ss` and is
> unaffected, which is the trap: the probe that is supposed to gate a 15-minute
> render is the only thing that is wrong.

**Put card text in `textfile=`, not inline `text=`.** `drawtext` needs `&`, `:` and
`'` escaped inside a filter string, and card copy is full of them. `textfile=`
takes the bytes as-is. Pair it with `-filter_script:v` and the whole chain stops
needing shell-level escaping too.

**Confirm the font resolves in whatever machine runs the burn, before burning.**
The Higgsfield sandbox ships Metropolis and Montserrat, **not Anton**, and libass
substitutes silently — which voids every measurement `build_subtitles.js` made. On
Lingshu 28 v3 the same cue rendered **2 lines at 26px** with Anton and **3 lines at
36px** with a deliberately bogus font name; that is what the failure looks like if
it ever ships. `fc-match Anton` first, and install it if it is missing:

```
mkdir -p ~/.fonts && curl -sSfL -o ~/.fonts/Anton-Regular.ttf \
  https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf && fc-cache -f
```
  Shorten the clause instead.

**A wide clause is not a re-take.** The sidecar splits it across cues by itself,
so an over-budget clause costs screen churn, not a render. Shorten it in the
document if you want fewer cues — but **never re-record a take, and never
re-render video, for a caption problem.**

### Check before you generate — `check_caption_fit.js`

```
node scripts/check_caption_fit.js <doc>.md                   # 9:16, the hard case
node scripts/check_caption_fit.js <doc>.md --format 16:9
node scripts/check_caption_fit.js output/*/ch*/*-v*.md       # sweep every cut
```

It measures **every clause** in the narration table against the two-line budget
and reports the ones that exceed it. Run it *before* recording takes: a fix is
free at that point and awkward afterwards.

**It is a readability check on the writing, not a guard against a render
failure.** The sidecar pre-splits a long clause across cues and burns through
libass margins, so it always fits — a flagged clause means three or four cues of
caption churn on screen, not an overflow. `CLAUDE.md` still mandates the check
before generating takes; read its non-zero exit as *"this will read badly"*, never
as *"this cut will overflow."*

**Its exit code is not a gate.** The script exits non-zero on any over-budget
clause *or* on any document with no narration table, and it does not distinguish
them in the status. The sweep across `output/*/ch*/*-v*.md` always exits 1 — as of
2026-08-13 on the first count alone, ~1,795 clauses across 22 documents, every one
of which does parse a table. Read the report, not the status.

### Build the sidecar — `build_subtitles.js`

```
node scripts/build_subtitles.js output/lingshu/ch28/inner-canon-lingshu28-trailer-v2.md
node scripts/build_subtitles.js <doc>.md --format 16:9      # longform
```

It reads the cut's **own production document** — the narration table for text, the
production record's voiceover line for each take's duration — and writes `.srt`
and `.vtt` beside it. No new data to maintain. It warns and assumes a full block
for any take whose duration is missing from the record.

Two mechanisms make the fit real, and the second is the one that guarantees it:

1. **Pre-wrap.** Cues are split at clause boundaries and wrapped to the measured
   character budget. The script prints the widest line in pixels against the
   usable width, so overflow is a number you see before anything is rendered.
2. **libass margins.** The printed `ffmpeg` command burns with
   `force_style='…MarginL=58,MarginR=58,WrapStyle=0…'`. libass measures the real
   Anton glyphs and wraps inside those margins — it *cannot* draw outside them.
   That is the guarantee; step 1 only keeps the result from looking mechanical.

   **The guarantee is conditional on two things, and both fail silently.** Run
   the command `build_subtitles.js` prints — it now handles the first — and check
   the second before burning:

   - **PlayRes must match the cut.** libass reads `Fontsize` and `MarginL/R/V` in
     the ASS script's own PlayRes space, *not* in video pixels, and ffmpeg's
     SRT→ASS converter hardcodes `PlayResX/Y` to `384x288`. Burning the `.srt`
     directly therefore scales every value in the style by `frame_height/288` —
     about 4.4× on a 720x1280 cut, putting Anton near 240px, at which point single
     words no longer fit between the margins and the lines run off frame. This is
     why the printed command is now **two steps**: convert to `.ass` and re-target
     PlayRes to the cut's own resolution first, then burn. The intermediate
     `.ass` goes to `renders/` and is gitignored.
   - **Anton must be installed on the machine that runs the burn** (`fc-match
     Anton`). libass substitutes a wider font silently when it is missing, which
     breaks the measured fit while `build_subtitles.js` still reports the line as
     fitting. `.claude/hooks/session-start.sh` covers the repo host — which is
     usually *not* where the burn happens:

     > **⚠ The sandbox does NOT have Anton, and that is where the burn happens.**
     > Established 2026-08-09. The session-start hook installs Anton on the **repo
     > host**, but the CDN is 403 from there, so the assembled MP4 can only be
     > burned in the **sandbox** — which ships Metropolis and Montserrat and no
     > Anton. Burning there without installing it first silently substitutes a
     > wider face and voids every measurement `build_subtitles.js` made.
     > Install it in the same chained command as the burn, and check:
     >
     > ```
     > mkdir -p ~/.fonts
     > curl -sSfL -o ~/.fonts/Anton-Regular.ttf \
     >   https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf
     > fc-cache -f >/dev/null 2>&1
     > fc-match Anton    # must print: Anton-Regular.ttf: "Anton" "Regular"
     > ```

   Both failures are invisible to step 1, because step 1 measures the sidecar and
   these corrupt the *render*. A widest-line figure of "fits" says nothing about
   either — only watching the file, or checking that the margin columns stay at
   background luma, does.

#### ⚠ Cue timing is only right because the record carries *speech*

`build_subtitles.js` centres a block's cues on whatever duration the production
record hands it; `assemble_final.sh` centres the audio on **detected speech**, with
the provider's padding trimmed. The script's formula is correct for whatever number
it is given — so the two agree exactly when the record carries speech, and disagree
by half the padding when it carries file length:

| | Centres on | Speech starts at |
|---|---|---|
| `build_subtitles.js:129` | the duration **as written in the record** | `blockStart + (10 − duration) / 2` |
| `assemble_final.sh` | **detected speech**, padding trimmed | `blockStart + (10 − speech) / 2` |

A take with padding has `file > speech`, so a record quoting file length puts that
block's cues **early by `(file − speech) / 2`** and the captions lead the voice.

> **⚠ `seed_audio` does ship padding — the 2026-08-04 reading did not generalise.**
> That measurement (all seven of v5's kept takes reporting `file == speech`, so the
> drift "computes to 0.00s") was true of one seven-take run and was written up here
> as a property of the provider. It is not. Four of the 29 kept takes across the
> four cuts rendered since carry padding:
>
> | Take | File | Speech | Padding | Cue drift if file were recorded |
> |---|---|---|---|---|
> | Suwen 8 block 4 | 10.353s | **8.913s** | 1.440s | **0.720s** |
> | Suwen 8 block 7 | 10.413s | **9.231s** | 1.182s | 0.591s |
> | Lingshu 28 v2 block 5 | 9.870s | **8.639s** | 1.231s | 0.615s |
> | Lingshu 8 block 5 | 9.673s | **9.024s** | 0.649s | 0.325s |
>
> Note what padding also does to the gate: Suwen 8 block 4's *file* is 10.353s,
> past the 10.0s ceiling, and it passed because only its 8.913s of speech is
> measured. A file-length record would have been wrong about that take twice.

**So correction 1 below is not the optional half of a pair any more — it is the
house practice, and it is the only reason the shipped sidecars are correctly
timed.** All four rendered cuts put the assembler's measured speech in their
voiceover line. Suwen 8's block-4 cue starts at **30.544s**, which is
`30 + (10 − 8.913) / 2` — not the 30.000s a file-length record would have produced.

**Do not hand-nudge cues.** That instruction survives, for a different reason than
the one it used to carry: the drift is real, but it is cancelled at the source, and
nudging on top of a speech-based record double-corrects it.

Two ways to correct it, and the second is authoritative:

1. **Record speech, not file length.** Put the `speech_metrics.sh` figure — or the
   assembler's own, from `<out>.mp4.assembly.json` — in the production record's
   voiceover line. Record **both** numbers in the take table, as Suwen 8,
   Lingshu 28 v2 and Lingshu 8 do, so a padded take stays visible rather than
   merely handled.
2. **Take the timing from `<out>.mp4.assembly.json`** in the script. The assembler
   writes each block's measured speech *and* its absolute position in the finished
   file. That is ground truth, and it is what the sandbox's own caption scripts
   consume.

**The second is still unimplemented**, so correction 1 is carried entirely by the
person writing the record: a cut whose voiceover line quotes file length ships
mistimed captions and nothing in the repo catches it. Until the script reads the
assembly JSON, **say in the production record which quantity the voiceover line
carries** — Lingshu 28 v2's *"measured **speech**, not file length"* is the form to
copy.

`.srt`/`.vtt` are tracked, required deliverables (`CLAUDE.md`), exempted in
`.gitignore`. Commit them with the cut and **regenerate after any narration or
take change**, so the sidecar never drifts from the document.

**Whether captions actually wrap can only be confirmed by watching the file**, and
this host usually cannot — see [Environment caveats](#environment-caveats). The
production record must say whether captions were *visually verified* or only
assembled.

Both scripts share their geometry, Anton metrics and narration-table parser via
`scripts/lib/caption_metrics.js`, so the two can never disagree about what fits.

## Longform episodes

**11:30–20 min.** Untested — **no longform cut has been rendered.** Eleven longform
*documents* exist, all pre-render, so the scripting side has been exercised
repeatedly and the pipeline side not at all. Re-derive the list rather than
trusting a count written here — `ls output/*/ch*/*longform*.md` — because this
line said *four* until 2026-08-16, and one of the four
(`inner-canon-lingshu28-longform-v1.md`) had been deleted from the repo on
2026-08-13. The
mechanics below are derived from the tool constraints and the trailer
runs, so treat the first episode as a pilot and write what actually happened into
its reproduction notes. Where this section contradicts steps 0–5, this section
wins.

### What changes

| | Trailer | Longform |
|---|---|---|
| Runtime | 30-90 sec (70s and 80s cuts have rendered) | 11:30–20 min target (11:30 floor, 20 ceiling) |
| Aspect | 9:16 vertical, 720×1280 | **16:9 landscape, 1280×720** |
| Blocks | **7** — six narration plus the mandated end-card block | ~102–114 at 10s, end card included |
| Voices | narrator only | narrator **+ speaking characters** |
| Doc format | narration table + shot list | SOUND / VISUAL / CHARACTER blocks, timecodes per act |
| File | `inner-canon-<book><N>-trailer-v<M>.md` | `inner-canon-<book><N>-longform-v<M>.md` |

**16:9 landscape is mandated, not inferred.** `CLAUDE.md` § Structure: *"Render
trailers in 9:16 vertical format; long form in 16:9 landscape format."* This line
used to call it an inference and send the user a confirmation question before a
full run — reopening a decision policy had already settled. Record the actual
resolution at the top of the document, which that same rule also requires.

### Preflight — this is ~19× a trailer

Run the step-0 gate and multiply by ~114 blocks before anything else. **That
includes the tool-availability check** — the same single call, now standing in
front of the ~1,313-credit floor below rather than a trailer's ~71. At the
2026-08-12 verified prices, the model choice is the difference between a cut you
can afford and one you cannot:

The balance column below is anchored to **235.7 credits, read live 2026-08-16**
(plan: `ultra`). **Call `balance` and recompute anyway**; this is a snapshot that
decays the moment anything renders — and it has now decayed twice. The anchor was
first ~782 (inferred from two old runs, never re-read, **2.3× too high**), then
343.2 (read live 2026-08-12, and **1.46× too high** four days later with nothing
rendered in between). Both times every multiple in this table read better than the
truth, and both times in the same direction: an anchor only ever goes stale
downward.

Totals are the whole cut — clips + ~171 of voice (114 takes at ~1.5) + 2 for the
style key — not clips alone, which is how the old column understated them.

| Clip model / tier | Credits/clip | ~114 blocks, all-in | vs 235.7 balance |
|---|---|---|---|
| `seedance_2_0_mini` 480p (default, draft) | 10 | **~1,313** | **~5.6× balance** |
| `wan3_0` 480p | 12.5 | ~1,598 | ~6.8× balance |
| `seedance_2_0_mini` 720p (default, full) | 25 | ~3,023 | ~12.8× balance |
| `gemini_omni` 720p | 30 | ~3,593 | ~15.2× balance |
| `seedance_2_0` 1080p | 90 | ~10,433 | ~44× balance |

**A full-length episode does not currently fit in the credit balance at any
tier** — even an all-draft pass overruns it. Say so plainly and get a decision
before starting: top up, cut the runtime, or produce act by act across billing
periods. Assembly stays free, and **captions are now free too** — the 0.05/voiced
block charge went with the server-burn path, taking ~11.4 credits off the old
episode estimate. Voice takes are **~1.5 each — about 171 credits for a 114-block
episode**, paid once and reused. Clips still dominate, but voice is now a real line
item rather than noise: at the two-variants-per-block working method that is ~340,
and **at the Suwen 13 trailer's 4.7× re-take rate a 114-block episode's voice bill
is ~800 credits** — 80 clips' worth at the default tier, and more than three times
the whole current balance on its own. It has to appear in the preflight. **Size the script to the corrected step-3 budgets before
generating any takes** — that re-take rate was caused by wrong word budgets, not by
service noise, and it is the cheapest thing on this page to avoid.

A **Draft pass matters far more here than on a trailer** — 114 blocks of wrong
pacing is unrecoverable. Draft the whole episode at 480p, watch it end to end,
then re-render only the clips at full tier, reusing every voice take.

**The old 180-block (30 min) cap is gone.**
`assemble_final.sh` declares no block limit. What replaces it is a *runtime*
limit rather than a count: the sandbox is ephemeral, foreground calls cap at
120s, and a background job dies with the sandbox if it is not polled at least
every 60s. A 120-block episode means ~240 files to download before assembly even
starts, inside one chained command.

**This is the least-proven part of the new path.** Trailer-scale assembly is six
pairs in one call; episode-scale is not, and nothing has been run through it. Do
not plan a longform render against an assumed ceiling — assemble one act first
and measure how long it actually takes.

### Style key — needs a landscape sibling

The chained keys are all 9:16. Derive a **16:9 variant** from the current
chapter key (pass its job ID as the reference, change only the framing) and
attach *that* to every clip. Record it in the production record as its own
lineage entry — don't overwrite the vertical key, the trailer still needs it.

**Existing landscape sibling — reuse it, don't regenerate:**

| Chapter | Landscape key | Notes |
|---|---|---|
| Lingshu 28 | `717ea032-0a02-4da8-a161-6d77ef8db5ad` | `nano_banana_pro` (served by `nano_banana_2`), `aspect_ratio: "16:9"`, **returned 2752×1536**. Derived from the chapter's 9:16 key `8e7e7549-cb5a-4970-afa7-b00b7e1442d4`, so the tally-board motif and all three characters carry over from the rendered trailer. |

Ask for 16:9 and expect **2752×1536** (1.79:1) back, not a 16:9-exact size. The
service also echoes the media role back coerced to `image_references`, as
[step 1](#1-style-key) predicts — that is normal, not a rejected reference.

### Script → blocks

10s is the working block length, so an episode is ~110 fixed windows regardless
of how the script is written. `gemini_omni` caps at 10s/720p; `seedance_2_0`,
`wan2_6` and `kling3_0` go to 15s, which would cut the block count by a third and
change the whole document's numbering — treat a longer block as a deliberate
format decision for the user, not a quiet optimisation. Number blocks continuously
across the whole episode (`block 47`), not per-act — the assembly `items` array
is flat and act-local numbering makes off-by-one errors that are expensive to
find in a 19-minute render.

Keep the script's act timecodes in the document, and map each act to its block
range (`Act II — blocks 24–51`) so a single act can be re-rendered without
recomputing anything.

### Voices — one speaker per block

Longform has characters speaking (dialogue as blockquotes), but the manifest
carries **exactly one voice file per block**. So:

- Split dialogue so no 10s block contains two speakers. A line exchange becomes
  two consecutive blocks, not one shared block.
- Anything genuinely simultaneous has to be mixed outside the tool and uploaded
  via `media_upload` as a single take.

All four voices are cast and permanent — **Arthur** (narrator), **Xavier**
(Fan-di), **Vesper** (Dr-Qi), **Zane** (Lei-Gong); IDs in the step-3 table. Do
not audition alternatives per chapter. Match the CLAUDE.md voice rules when
directing them: Dr-Qi never sounds like she's winning — the more Fan-di
performs, the stiller she gets.

**All four run at `speech_rate` 55, and rate is not a lever here either** — see
[§3](#speech_rate-is-not-a-duration-lever--do-not-reach-for-it), which holds the
measurement. Word count and sentence structure are the only controls, on dialogue
as on narration. (An earlier version of this section suggested 60–65 for
character dialogue. It was wrong.)

All four are measured (§3 table) — **and Zane's measurement is the one to check a
longform script against before anything else.** He pools at 5.45 w/s, the fastest
in the cast, needing **47–54 words** where the repo had been guessing ~35; **seven
committed longform documents are still written to the guess and will fail** — see
the list in [§3](#3-voiceover). One mis-sized voice across a 19-minute episode is
the most expensive version of the take-length mistake, and it is already sitting
in seven committed documents.

Character lines are structurally short against a 10s block — and **the deliberate
short take is no longer available** as the second way out, because the assembler
hard-rejects anything under 7.8s. Apply §3's remaining options **per line**: write
the character a real paragraph at that voice's own word count, fold the beat into
a neighbouring block, or cut it. On an episode with ~110 blocks of dialogue this is
a scripting constraint, not a per-line adjustment — it wants deciding before the
takes are generated, not after.

### ON-SCREEN TEXT — the one exception to text-free clips

The trailer rule is that clips carry no text and captions come from the sidecar.
That breaks here: `assemble_final.sh` has **no text-overlay parameter** either,
and the sidecar is built from the narration table — so a classical quotation card
with no narration over it will produce no text at all.

**The card block still needs a voice take**, and now it must clear 7.8s like any
other: a silent quotation card fails the narration-per-window assert
(`blocks [..] have NO narration in their windows`). Narrate the quotation over its
own card.

Generate quotation cards as their **own blocks with the text in-frame**
(`generate_image` for a still, or a held clip), styled off the chapter key.
Everything else stays text-free. Note each card block in the record so it isn't
mistaken for a style violation later.

### Assemble in acts, then join

Do not attempt ~110 clips in one unbroken pass. Per act:

1. Generate that act's clips and takes.
2. **Append the job IDs to the production record immediately** — before moving
   on. The record is the crash-recovery file; a lost session with unrecorded IDs
   means paying twice.
3. Assemble the act as its own `assemble_final.sh` run to check pacing early,
   exporting each act's MP4 out of the sandbox before the call returns.

**The join is the open problem.** `assemble_final.sh` takes clip/voice *pairs*
against a declared block count and asserts a `N × 10s` output, so an assembled
40-block act is not a valid input to it — act outputs cannot be fed back in the
way they could before 2026-08-04. Joining
acts means a plain `ffmpeg concat` of the act MP4s, which is exactly the
hand-rolled ffmpeg the workflow's own rules forbid inside its pipeline.

Two routes, neither yet run here:

- **Assemble the whole episode in one call** and skip the join entirely. Removes
  the problem, but it is the ~240-file download discussed above.
- **Concat the act outputs** with our own ffmpeg, outside the sandbox's rules.
  Defensible — the acts are already assembled correctly and a concat of equal-
  geometry MP4s is a lossless remux — but it puts the −16 LUFS normalisation per
  act rather than across the episode. Check levels at the seams.

**Decide this before generating an episode's worth of takes**, not at the join.

**Captioning is simpler than it was.** The old double-layering rule — act
assemblies uncaptioned, captions only at the final join — existed because burned-in
captions are pixels and would stack. Nothing is burned at assembly now, so act
assemblies carry no captions by construction and there is no layering to avoid.
Burn the sidecar once, over the finished episode.

### Finishing

720p reads softer over 19 minutes than it does over 60 seconds, and it is both
`seedance_2_0_mini`'s and `gemini_omni`'s ceiling. Two ways up, and the cheap one
usually wins: generate at 720p and run `upscale_video` on the **final assembly**
(one job), or move to `seedance_2_0` at 1080p and pay ~3.6× the default's
per-clip price across ~110 clips. Never upscale ~110 individual clips.

The same applies to a 480p trailer that turns out worth keeping — upscale the
finished 60s cut rather than re-rendering six clips.

### Runtime levers

CLAUDE.md asks for **cut-to-11:30 / stretch-to-20** levers in the production
notes. Express them in blocks, since blocks are the unit that actually costs
money: name which block ranges are droppable to reach **69 blocks** (11:30, the
policy floor), and which beats can expand to reach **120** (20:00, the ceiling).

**This section said "cut-to-15 / 90 blocks" until 2026-08-16**, which is a floor
policy never set — 90 blocks is 15:00. It matters because of the size of the
lever: coming down from the ~114 blocks the preflight above is built on to 69 is
**45 blocks, nearly 40% of the episode**. That is a structural decision to take
while scripting, not a trim to find in the edit.

## Environment caveats

- **Uploads may be blocked.** `upload.higgsfield.ai` was unreachable from the
  repo host in an earlier session, so `assets/` PNGs couldn't be re-uploaded.
  Fall back to referencing the prior style-key job ID — CLAUDE.md explicitly
  allows this, and it's the better default anyway.
- **The CDN may be blocked too.** It has been blocked on every cut for a long time
  (`CONNECT tunnel failed, 403`), so assume the final MP4 cannot be fetched back
  to *this host* for visual QA. When that happens, **say so explicitly in the
  document** and verify at the job-metadata level instead — all clips at the
  expected dimensions, every take inside its window, assembly completed — then
  record the CDN URL for manual download. Those links expire.

  **Record the full URL, not the `media_id`.** Established the hard way on the
  Suwen 8 trailer: the production record listed `media_id`s only, and the user
  came back with *"the download link is missing"* — correctly, because a
  `media_id` is not a link and the one person who can archive the render is the
  one who cannot be handed a UUID. The record's deliverables table needs the
  **whole `https://…` URL**, and it is worth one free `sandbox_exec` probe
  (`curl -I`) to confirm each one serves before writing it down.

  **Say which layer refused, too.** `curl` from the repo host returns
  `CONNECT tunnel failed, response 403` — that is the **egress proxy** refusing
  the CONNECT, not CloudFront denying the object. The distinction matters when
  reporting: the links are perfectly good from any normal machine, and writing
  "the CDN 403s" implies a broken artifact when the artifact is fine.

  **It is a policy denial. Do not route around it.** The proxy's own status
  endpoint (`curl -sS "$HTTPS_PROXY/__agentproxy/status"`) logs each refusal as
  `connect_rejected — gateway answered 403 to CONNECT (policy denial)`, and its
  README says to report the blocked host rather than retry. Confirmed 2026-08-24
  for both CDN hosts **and the S3 upload bucket**, so this host can neither
  download a render nor upload one.

- **Two different CDN hosts, and they are not interchangeable.** Generation
  results serve from `d8j0ntlcm91z4.cloudfront.net`; uploaded and exported media
  from `d2ol7oe51mr4n9.cloudfront.net`. Guessing wrong yields a 403 that looks
  exactly like the egress denial above. Take the URL from the tool result.

- **To get a text file into the sandbox, gzip and base64 it into the command.**
  With the CDN and S3 both refused from this host there is no shared filesystem
  and no fetchable URL, but `sandbox_exec` takes a **16,000-character command** —
  enough for a surprising amount of text. Lingshu 28 v3's 24,433-byte `.srt`
  compressed to a **13,168-character** argument and went in whole, in one call:

  ```
  echo '<base64>' | base64 -d | gunzip > subs.srt
  ```

  Verify the round trip locally first (`base64 -d | gunzip | cmp -`) and check the
  byte count on the far side. This is the transfer channel for anything this host
  needs to put in front of the sandbox's `ffmpeg` — and it beats splitting a
  heredoc across calls, which risks the sandbox being reclaimed between them.

- **The MCP server can reconnect mid-session under a different tool prefix.**
  On 2026-08-24 every `mcp__higgsfield__*` tool vanished and the same surface
  returned as `mcp__<uuid>__*`. **The sandbox and everything in `/home/user/` go
  with it.** Nothing was lost only because the render had already been exported —
  which is the argument for chaining the upload into the producing command, above.
  If the tools disappear, re-resolve them by name rather than assuming the service
  is down.
- **The sandbox is not behind that egress policy, and this is newly useful.**
  `sandbox_exec` has its own internet access and its own ffmpeg — it has to, since
  it downloads every clip and take to assemble them. So a check that was
  impossible from the repo host can now run next to the file, in the same call
  that assembles it: `ffprobe` the output, extract frames, sample the caption
  margin columns for background luma. **This does not mean anyone watched it.**
  The honest line in the production record is still *assembled and probed, not
  visually verified* — automated checks catch a substituted font or an overflowing
  margin, not whether the cut reads well.
- **ffmpeg and Anton are installed by a hook on the repo host, and the burn does
  not happen there.** `.claude/hooks/session-start.sh` reinstalls both each
  session because the container is ephemeral — but the CDN is 403 from this host,
  so the assembled MP4 usually cannot be fetched back to burn against. **In
  practice the burn runs in the sandbox, which has ffmpeg but no Anton**, and the
  hook cannot reach it. Install the font there, in the same chained command as the
  burn: see [Subtitles](#subtitles) for the four lines that do it.

  **`fc-match Anton` on the repo host therefore proves nothing about the render.**
  Check the font where the burn runs, not where the hook ran. This is the one
  substitution that fails silently in both directions — libass swaps in a wider
  face without erroring, and `build_subtitles.js` still reports the line as
  fitting.

  The host install still earns its place for local measurement and for any burn
  that *can* happen here, and one side effect is worth knowing: the Ubuntu
  archives are reachable but the **deadsnakes** and **ondrej/php** PPAs are 403
  under the egress policy, so `apt-get update` always prints two warnings
  unrelated to this pipeline.
- **The hook is synchronous**, so the session does not start until both tools are
  in place — a cold container pays about a minute of startup for that, and a warm
  one pays nothing and reports `ffmpeg, Anton and wick already present`. The hook
  installs the font before the binary on purpose: an interrupted run then leaves
  the state that fails loudly with `ffmpeg: not found` rather than the one that
  quietly burns in a substituted font. Do not reorder it.

### What lands in git

Set by `.gitignore`, which postdates most of this pipeline's runs:

- **Renders are gitignored** (`renders/`, `*.mp4`, audio). Download them to
  `output/<book>/ch<N>/renders/`; never commit the binary, never `git add -f` it.
- **Subtitle sidecars (`.srt`/`.vtt`) are tracked** and deliberately exempted
  from `.gitignore` — see [Subtitles](#subtitles) for how they are built and why
  burned-in captions do not satisfy the requirement.

## Compliance gate before generating

**`CLAUDE.md` § YouTube compliance holds the rule list and is normative in any
conflict. This section is the procedure for applying it to prompts**, plus the two
failure modes that have already cost a paid re-render.

Run the gate on **prompts, before generating** — not just on output. A
non-compliant clip is a paid re-render.

- **Mortality and collapse have to be carried by objects.** "Portraits, not
  bodies" is the rule; substitution is the working method. Two collapse passages
  have been carried as a guttering lamp flame and an ink-wash city wall under
  floodwater. No falling bodies, no injury.
- **Restraint and bound-figure imagery trips the safety filter, even when the
  subject matter is fine.** A manifesto beat ("bound to ghosts") rendered as an
  ink figure "wrapped in smoke-cords that hold it still" came back `nsfw` — the
  restraint, not the theme. Re-cut with no human figures at all (a
  smoke-covered scroll that cannot be opened, a shut door light cannot pass) and
  it cleared on the first retry. **Carry that kind of meaning with objects and
  brush strokes, never with a person.**

- **A verb implying a body losing its footing is a trigger by itself.** Lingshu 28
  v3's contagious-yawning beat described *"three figures… each tipping back"* and
  came back `nsfw` — read as falling bodies, though nothing in the beat is about
  falling. Re-cut with objects only — *"three brushed ink ovals"* — and it cleared
  on the first retry. **Watch the verb, not just the subject.** *Tipping*,
  *slumping*, *buckling*, *going down* all read as injury on a human figure, and a
  chapter about involuntary movement is full of them.

Then write the per-cut audit into the document's `## Compliance notes (YouTube)`
section, one bullet per `CLAUDE.md` rule, so the reasoning survives with the cut.
