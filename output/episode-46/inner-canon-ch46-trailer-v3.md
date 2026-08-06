# The Emperor's Inner Canon — Chapter 46 Trailer v3 (70 seconds)

**靈樞·營衛生會第十八 · The Night Watch**

**Framing:** history of ideas. Not health content.

**Draft render (496×864, 9:16 vertical, 70.059s, MP4) — assembled 2026-08-06.**
https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/91305ec5-9756-44d4-b3c2-fb607c40c26b.mp4
https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/49e4b34c-2519-410d-bfc2-29bbec7cc8aa.mp4

**No captions and no on-screen text on that file by design** — the assembler
produces neither. Do not upload it as-is; see *Finishing steps*. **Download it**:
the CDN link expires and the repo host cannot fetch it back.

**Final render (720p tier):** *not run.*

Decode-validated by the assembler, narration confirmed present in all 7 windows,
and **no WARNs of any kind** — no pausey take, no static head or tail on any of the
seven clips.

A seventy-second vertical trailer for *"The Night Watch"* (營衛生會 · *The Meeting
of Nutritive and Defensive Qi*). Seven 10-second blocks, stylized flat-2D ink-wash
matching the Fan-di / Dr-Qi / Lei-Gong character art. Vertical 9:16 for
Shorts / Reels / TikTok.

Companion teaser to `inner-canon-ch46-longform-v2.md`, cut from its cold open,
Act II and Act III. Source translation: `inner-canon-ch46-translation-v2.md`.

> **Why v3 exists, and why v1 and v2 are not superseded.**
> **v1** sells the chapter's *argument*, standalone, for placements with no
> episode behind them. **v2** sells the episode's *drama* — Fan-di's "I am
> twenty-nine". **v3 sells the census: an emperor tried to count the hour his
> empire fell asleep, and the hour already had a name.** It is the only cut of the
> three that is image-led rather than argument-led or character-led, and 合陰 is
> the most striking picture in the chapter.
>
> **v3 also exists because v1 and v2 can no longer be assembled.** Both were
> written before 2026-08-04 against the old 6–8s speech window and the removed
> `explainer_video` assembler. v2's block 6 — *"I am twenty-nine"*, four words,
> deliberately sitting in silence — is now a **hard assembler error**
> (`voice 6 carries ~2.5s of speech; required 8.600–10.000s`). Every line below is
> written to the **8.6–10.0s** window instead. See *Sized to the current window*.

> **Chapter numbering.** This is **Ling Shu 18**. "Chapter 46" is the series slate
> index only. Ling Shu 11 is 經別, a different chapter. Unlike v1 and v2, the
> spoken title here **does** carry the number, in block 6 — see the compliance
> notes for why that is now safe. `inner-canon-ch46-translation-v2.md` has the
> numbering table.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — the assembler takes exactly one audio per block, so every
speaker change is its own block. The speaker sits in the **beat** column, not a
fourth column: `build_subtitles.js` parses this table as exactly three columns and
a fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the census | Two thousand years ago, a Chinese court tried to count something strange — the hour at which its empire fell asleep. Runners went out at midnight, tallying lit windows. The answer was already in a book. |
| 2 | Arthur (V.O.) — the hour has a name | The book names the hour, and the name it gives is beautiful. It calls it the joining of the dark — the moment when the ten thousand people, all of them at once, lie down together, on the same reckoning as heaven and earth. |
| 3 | Fan-di (Xavier) — the deflection | Then the count is a formality, physician. Send the runners anyway. I want the tally in my hand by dawn. And while we wait — a question of natural philosophy, nothing more. Why do the old not sleep? |
| 4 | Dr-Qi (Vesper) — the mechanism | In the vigorous the roads run clear, and the two currents keep their schedule. In the old the roads run rough. The nutritive thins, and the guard turns and campaigns inward. That is the text's answer, not a physician's. |
| 5 | Arthur (V.O.) — both ends | The young get both halves — keen by day, asleep by night. The old lose both. In this model, ageing does not move your sleep to another hour. It takes one end, then the other. |
| 6 | Arthur (V.O.) — the withhold / title | The runners came back at dawn, and the number was wrong by exactly one house, and everyone at court knew which one. The Emperor's Inner Canon. Ling Shu eighteen. The Night Watch. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we say plainly where its mechanism does not survive the evidence. |

Cast: Arthur, Xavier, Vesper — `seed_audio` presets at `speech_rate` 55. **Zane /
Lei-Gong does not speak.** He appears asleep on a bench in shot 2, which is exactly
his function in the chapter, and it avoids the one voice the skill still requires
measured at length.

### Sized to the current window

The assembler gates on **8.6–10.0s of detected speech per block** and both edges
are hard errors. Written to the skill's measured v5 rates, not to any figure in
v1 or v2 of this trailer:

| Voice | Blocks | Words | Draft target |
|---|---|---|---|
| Arthur, 3.65 w/s | 1, 2, 5, 6, 7 | 36, 35, 35, 34, 34 | **32–36** |
| Xavier, 4.15 w/s | 3 | 38 | **36–41** |
| Vesper, 4.19 w/s | 4 | 39 | **37–41** |

> **⚠ Superseded by the run. Keep this table only as the starting draft it was.**
> The cut was rendered on 2026-08-06 and the shipped word counts are **36 / 44 / 38 /
> 39 / 35 / 32 / 32**. Block 2 ships at **44 words — eight over this table's Arthur
> ceiling — and measured 9.601s, a comfortable pass.** Blocks 6 and 7 ship at 32 and
> also pass. A single Arthur word-window cannot describe both, because Arthur's rate
> is line-dependent and ranged **2.83–6.94 w/s** across this run.
>
> **Consequence for the tooling:** a word-count check will now report block 2 as
> "over" on a line that is measured, shipped and in-window. That report is the
> *checker* being wrong, not the line. **Do not "fix" block 2 back to 36 words** — that
> is precisely the version that came back at 7.4s and failed the floor twice. The
> per-block evidence is in *What this run actually established about Arthur*.

Xavier and Vesper both landed **first try** at the drafted counts, so their rows above
held. Arthur's did not.

**These are arithmetic against measured rates, not measurements.** Three things
from the skill apply directly and all three cost credits:

- **The rate is survivor-biased.** 3.65 w/s is what Arthur's *passing* takes
  delivered; across all recorded ch1 v5 attempts he ran **3.04 w/s**. Lines
  drafted at 3.65 are sized for his fast mode and will regularly return over the
  ceiling. Budget re-takes.
- **The spread exceeds the window.** Identical 26-word text came back at 10.23s and
  7.79s on consecutive generations — 2.44s apart, on a window 1.4s wide. Re-roll
  once before rewriting; re-rolls can miss on *either* side.
- **Reach the window with words, not full stops.** The assembler warns on internal
  pauses ≥0.8s (*"pausey take"*), so padding a thin line with sentence breaks
  passes one gate and trips another. Blocks 3, 4 and 5 are the most exposed here,
  at five, four and four sentence boundaries respectively.

**Generate block 1 first, read its measured speech, and re-scale 2, 5, 6 and 7
before committing them.** One ~0.8-credit take beats a re-cut of five.

### The disclaimer block is padded, and it has to be

The mandated string is 11 words, roughly 2.9s — far under the floor, so a card
block carrying only the disclaimer **cannot assemble**. Block 7 keeps the mandated
sentence **verbatim and first**, then extends to 34 words with series framing.
This is now standard for every cut in the repo.

### What v3 does *not* do, deliberately

v2's best moment was four words in silence. **That beat is structurally
unavailable now** — under an 8.6s floor there is no such thing as a short take, and
`--clip-seconds` moves the window rather than widening it. v3 does not try to
reconstruct it with padding. It puts the withhold in **block 6's content**
instead — the count was wrong by one house — which lands the same fact (the emperor
is the exception) without needing silence to carry it.

## Source mapping — longform v2 → trailer

Cut from `inner-canon-ch46-longform-v2.md`, not from the classical text directly.
Classical-text section numbers are those of `inner-canon-ch46-translation-v2.md`.

| Longform blocks | Beat | Trailer block | Translation § |
|---|---|---|---|
| 1–3 | the census; runners at midnight | 1 | — *(invention)* |
| 45–49 | 夜半而大會，萬民皆臥，命曰合陰; 與天地同紀 | 2 | §2 |
| 3, 53–54 | the order, and the paired question about the old | 3 | §3 *(framing invented)* |
| 57–58, 64–66 | roads open / roads rough; 營氣衰少而衛氣內伐 | 4, compressed from five blocks | §3 |
| 59, 69–71 | 晝精而夜瞑 against 晝不精，夜不瞑 | 5 | §3 |
| 28, 104 | the runners return; the count is wrong by one house | 6 | — *(invention)* |
| 108 | disclaimer card | 7 | — |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears
the cast sheet's **blue** cheongsam.

**Dramatisation, flagged as invention:** the census itself, the runners, the tally,
the wrong count and Fan-di's sleeplessness are **all invented**. The classical text
is a bare question-and-answer with no characterisation, no court and no narrative
of any kind. **Only blocks 2, 4 and 5 paraphrase the source**, and each traces to a
numbered section above.

## Shot list

Vertical 9:16 throughout. Every prompt declares the aspect ratio **twice**
(`aspect_ratio: "9:16"` *and* "vertical 9:16 portrait framing" in the prompt text)
and pre-declines `IN THE DARK` (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) — five of
seven shots are night or dim, which is the highest preset-swap exposure of any cut
in the repo. Clips stay **text-free**; the title, lower-third and card text are
hand-added overlays at edit.

1. **The census** — high overhead of an ink-wash city at night, rain on tile, roofs
   receding into depth. Lit windows going dark in a slow wave from the far edge
   toward camera, until one small amber window remains, low in frame. No figures.
   *History lower-third sits here.*
2. **The hour has a name** — the same city, now fully dark, held wide. A single
   lantern crosses it left to right at street level, very small — a runner. Passing
   the frame's edge it reveals Lei-Gong in cinnabar red asleep across a stone
   bench, one arm hanging, his hand drum on the ground beside him.
3. **The deflection** — Fan-di in the gold robe with slim round glasses, **fan
   snapped open** (performing), lit hard from one side by a low lamp, rain running
   down the paper screen behind him. Immaculate, and working at it.
4. **The mechanism** — no people. An ink road running the length of the frame, open
   and smooth at the top, narrowing between closing banks toward the bottom until
   the stroke almost seals. A pale current that had been running *outside* the line
   turns and doubles back inward.
5. **Both ends** — no people. A brushed day-arc: upper half washed pale daylight,
   lower half deep indigo. Two small lights travel it. The pale half dims from one
   end and the dark half from the other, closing in on the middle.
6. **The withhold / title** — cold grey-blue dawn on the same courtyard, rain
   stopped, lamp out. One upright seated silhouette still in the lit window,
   unmoved since shot 3. Slow push in. Lower third kept clean for the title
   overlay.
7. **Disclaimer card** — plain indigo-black plate, faint ink grain, a single
   cinnabar seal mark in one corner. Card text hand-added at edit.

**Shots 3 and 6 are the cut.** Same setup, same framing, one lamp burned down and
the fan now folded and set on the table. If the model will not hold character
consistency across the pair, **generate shot 3 first and pass its job ID as an
additional reference on shot 6**.

**Shot 2 carries the whole hook on picture.** It is the sound-off shot — a dark
city and one moving lantern — and it is the one clip a bad generation cannot be
hidden behind. Draft it early.

## Production record (Higgsfield)

**Status: draft rendered and assembled 2026-08-06.** Everything below is measured
from the run, not estimated.

### Step-0 gate — run 2026-08-06

`balance` **753.6** (not the 862.6 this document originally carried — the stale
figure came from the ch1 v5 record and was 109 credits high). `get_cost` live:
`seedance_2_0_mini` 10s / 9:16 / 480p = **10 credits/clip**; `nano_banana_pro` 9:16
1k = **2**; `seed_audio` take = **0.2**. Draft tier confirmed by the user.

> **⚠ The `seed_audio` preflight is wrong, and it is wrong by ~6×.** `get_cost`
> returned **0.2** credits for a take. The transaction log for this run bills every
> take at **1.1–1.6, averaging 1.31**. Twenty takes cost **26.2 credits**, against
> the 4.0 the preflight implied. **Do not budget voice off `get_cost`** — and note
> this also corrects `SKILL.md`'s own ~0.8 figure, which was inferred from a ch1 v3
> balance delta and is itself ~40% low. See *Credit spend* for the reconciliation.

### Cost preflight — superseded by the actual spend below

`seedance_2_0_mini`, 7 blocks, 10s, `aspect_ratio: "9:16"`, `generate_audio: false`
(the model defaults it to **true**, which is now a correctness fault, not just
waste — the assembler mixes clip audio in at 0.12 rather than discarding it).

| Item | Draft (480p) | Full (720p) |
|---|---|---|
| Style key — **reuse the ch46 vertical key**, do not regenerate | 0 | 0 |
| 7 clips | **70** (10/clip) | **175** (25/clip) |
| 7 voice takes @ ~0.8 | ~5.6 | *reused* |
| Captions | **0** — sidecar, burned locally, never at assembly | 0 |
| Assembly | free | free |
| **Total** | **~76** | **~175 additional** |

**Two changes against the v2 preflight, both downward.** The 0.05/voiced-block
subtitle charge went with `explainer_video`, and the ~1-credit voice figure v2
carried was a whole-credit rounding floor — the measured ch1 v3 balance delta puts
a take at **~0.8**. Against that, **budget explicitly for re-takes**: ch1 v5's
worst block took fourteen takes and ~11 credits on its own, which is more than the
entire voice line above.

### Style key — generated, and it is the chapter's new lineage head

`28ea941d-4442-4d39-8358-28d881ce2ef1` — `nano_banana_pro` (served by
`nano_banana_2`), 9:16, 1k, **2 credits**.

**The ch46 key did not previously exist.** Both this document and
`inner-canon-ch46-trailer-v2.md` said to "reuse the ch46 vertical key" and pointed
at `inner-canon-ch46-trailer-v1.md` for the motif — **but v1 was deleted from the
repo**, and no ch46 key job ID was recorded anywhere. The motif was recovered from
v1's text in git history (commit `f91d3ca`) rather than reinvented, so the chapter's
planned look is preserved: *a single closed ink ring with two currents on it, one
riding the inner edge and one the outer, the upper arc pale daylight and the lower
arc deep indigo, with one small lit paper window low in the frame.*

Lineage: `4b6f7106…` (ch1 head) → **`28ea941d…` (ch46)**. Passed as
`medias[{role: "image_references"}]` on every clip. **This is the new head for
chapter 46** — the longform's 16:9 sibling derives from it, not from ch1.

### Clips — all 7 complete, first pass

`seedance_2_0_mini`, **Draft 480p**, 10s, `aspect_ratio: "9:16"` **and** "vertical
9:16 portrait framing" in every prompt, `generate_audio: false`, `IN THE DARK`
pre-declined on every call.

| Block | Job ID | |
|---|---|---|
| 1 | `1e1d38a1-2e25-4055-afc4-cb318772118e` | generated alone and checked first |
| 2 | `2c3530e6-486f-4740-9854-bbb294bc3ffa` | |
| 3 | `56ff0cfc-720e-4969-9a0b-a5408160f795` | |
| 4 | `8b3b7342-42cd-44bd-9bb4-8397f6a69034` | |
| 5 | `f7a76a1c-0b61-47ee-bb16-7028b7e1ad5b` | |
| 6 | `9cb7c79b-8307-446f-858c-e7d58a643127` | retry; see below |
| 7 | `3e32c984-b725-411b-aa00-4ad3deb33c87` | |

**Every clip returned 496×864 at 10.04s.** Three findings worth carrying:

- **The clips are natively 496×864, not 480×854.** ch1 v5 concluded the *assembler*
  rescaled 480×854 up to 496×864. On this run the model returned 496×864 directly and
  the assembler passed it through unchanged, so there was nothing to rescale. Either
  the model's 480p geometry changed or ch1 v5's clips genuinely differed — either way,
  **read the geometry off the clips, never assume 480×854 or 720×1280.**
- **No preset swap was offered on any of the eight calls.** Fourth cut running with
  that result on this model with `IN THE DARK` pre-declined.
- **`generate_audio: false` verified, not assumed** — `ffprobe` on block 1 reports no
  audio stream at all. This matters now that the assembler mixes clip audio in at 0.12
  rather than discarding it.

**Superseded clip:** block 6 first attempt `95cc9260-2b75-49dd-a261-eee1abd78c9f`
**failed** on the service side. It was submitted with **two** `image_references` (the
style key *and* block 3's job, per this document's own shot-6 note about character
consistency). The retry passed the style key alone and succeeded on the first try.
**A second reference may be the cause; one failure is not proof.** If shot 6 needs
block 3's look again, try the two-reference form once and fall back rather than
retrying it. **The failed job was automatically refunded (+10),** confirmed in the
transaction log — a failed clip costs nothing.

### Voiceover — all 7 clear the gate, 20 takes to get there

Measured with `speech_metrics.sh`, which trims exactly what the assembler trims, so
its `speech=` **is** the number that gets gated. Window **8.6–10.0s**.

- **Voiceover** (`seed_audio`, presets **Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346`, **Xavier** `43173c95-3ec8-446a-a162-6504332c578b`, **Vesper** `c3204739-4084-41a3-9dc5-c805b307ec18`, speech_rate 55): block 1 `98c6b359-e0b1-462c-b8da-15215fc5d9dc` (9.185s), block 2 `7a0a68e1-e600-4442-b823-dee777074bd6` (9.601s), block 3 `3530e824-2664-4864-ac0b-eb9c97ef0603` (9.102s), block 4 `6abc9a00-cef3-41b9-bc1d-0448daf83685` (9.762s), block 5 `81280a1b-68c9-4ea2-867e-744b90c81c81` (9.973s), block 6 `38bfb501-2ca6-44b1-8282-1dab393089e3` (9.807s), block 7 `058a5327-d457-4742-bedb-8f7ba56e84fe` (9.292s).

*(The single-line form above is what `build_subtitles.js` parses. The table below is
for reading.)*

| Block | Voice | Words | Speech | Attempts |
|---|---|---|---|---|
| 1 | Arthur | 36 | 9.185s | 2 — re-roll of identical text |
| 2 | Arthur | 43 | 9.601s | 3 — re-roll failed, then rewritten longer |
| 3 | Xavier | 38 | 9.102s | **1** |
| 4 | Vesper | 39 | 9.762s | **1** |
| 5 | Arthur | 35 | 9.973s | **1** |
| 6 | Arthur | 32 | 9.807s | **8** |
| 7 | Arthur | 32 | 9.292s | 4 |

**All three character/narrator voices behaved differently, and Arthur is the
problem.** Xavier and Vesper each landed first try at the drafted word count, which
is two more data points confirming the skill's 4.15 / 4.19 w/s figures. Arthur took
17 of the 20 takes.

### What this run actually established about Arthur — the rate is not a rate

`SKILL.md` lists Arthur at **3.65 w/s**. Across this run's 17 Arthur takes he ran
**2.83 to 6.94 w/s**, and the variation is not noise around a mean:

| Block | Words | Speech | Implied w/s |
|---|---|---|---|
| 1 | 36 | 12.705 → **9.185** | 2.83 → **3.92** *(identical text, re-rolled)* |
| 2 | 35, 35, **43** | 7.371, 7.542, **9.601** | 4.75, 4.64, **4.48** |
| 6 | 34, 34, 28, 31, 29, 30, 29, **32** | 10.549, 11.232, 7.970, 10.777, 8.480, 10.808, 8.611, **9.807** | 3.22, 3.03, 3.51, 2.88, 3.42, 2.78, 3.37, **3.26** |
| 7 | 34, 34, 30, **32** | 10.415, 10.256, 4.326, **9.292** | 3.26, 3.32, 6.94, **3.44** |

Three things follow, and the third is the expensive one:

- **Identical text spans 2.83–3.92 w/s** (block 1). A re-roll is a genuinely
  different draw, which is why re-rolling before rewriting is the right first move —
  it fixed block 1 outright.
- **Different lines sit at genuinely different rates.** Block 2 ran 4.5–4.8 w/s on
  every attempt while blocks 6 and 7 ran ~3.0–3.4 on nearly all of theirs. A single
  per-voice words/sec figure cannot describe both. **Block 2 needed 43 words to reach
  the same window block 6 reached with 32.**
- **Shortening a line speeds up delivery, so it cuts duration more than
  proportionally.** Block 7 at 34 words gave 10.3s; at 30 words it gave **4.3s** — a
  4-word cut removed 6 seconds. Block 6 went 31 words → 10.777s but 29 words →
  8.480s. **Interpolating linearly between a long take and a short one will overshoot
  the floor**, which is how block 6 burned eight takes.

**Practical rule this run supports:** re-roll once; if it still misses, change the
word count by **one or two words at a time**, not by five. And measure — never eyeball.

**The near-miss that proves the 3-decimal rule.** Block 6 attempt 5 measured
**8.480s** and attempt 7 measured **8.611s**. The first is 0.12s *under* the floor and
would have stopped the assembly; the second clears it by **0.011s**. Both round to
"8.5s" and "8.6s" respectively in any 1-decimal write-up. The 8.611s take was
nonetheless **rejected in favour of the 9.807s one** — an 11ms margin is a pass on
paper and not something to ship when another take costs ~1.3 credits.

### Assembly — complete

`sandbox_exec` → `assemble_final.sh`, run **foreground** (ch1 v5 lost a whole run to
`background: true` plus a timed-out transport call). Flags: `--out
work/output/final.mp4` `--blocks 7` `--manifest pairs.txt`. No `--clip-seconds` (10 is
the default and moving it moves the speech window). No `--music`, no `--sfx-vol`
override (default 0.12). No `--subs` — it is a hard error now.

Output **496×864, 70.059s**, decode-validated, *"narration present in all 7
windows"*. **No WARNs at all** — no pausey take, and `freeze_head`/`freeze_tail` false
on every one of the seven clips.

**There is no assembly job ID.** Exported via `media_upload` → `curl -f -X PUT` →
`media_confirm`, media_id **`91305ec5-9756-44d4-b3c2-fb607c40c26b`**.

> **Process note, recorded because it nearly cost the render.** The assembling command
> was run *without* the upload chained onto it, which is exactly what the skill warns
> against — the sandbox is discarded ~10s after a call returns. It survived only
> because the very next call was immediate and back-to-back calls keep the filesystem
> alive. **This was luck, not method.** The upload belongs in the same `&&` chain as
> the assembly.

**The assembler's own sidecar** (`final.mp4.assembly.json`) reports
`lead_silence_s: 0.000` and `speech == file` on all seven takes. So `seed_audio` ships
no padding, and `build_subtitles.js`'s known cue-timing drift computes to **0.00s** on
this cut. **Do not hand-nudge cues to correct a drift that is not there.** Block start
positions from the sidecar: 0.407, 10.199, 20.448, 30.118, 40.013, 50.096, 60.354s.

### Captions and on-screen text — burned 2026-08-06, at native 496×864

**Burned in the Higgsfield sandbox, not on the repo host.** The CDN is blocked here
(`CONNECT tunnel failed, 403`) so the render cannot be fetched back; the sandbox has
its own egress and its own ffmpeg, so the burn ran next to the file.

**Final captioned cut, media_id `49e4b34c-2519-410d-bfc2-29bbec7cc8aa`:**
https://d2ol7oe51mr4n9.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/49e4b34c-2519-410d-bfc2-29bbec7cc8aa.mp4
496×864, 70.058s, H.264 CRF 20 / preset medium / yuv420p / `+faststart`, audio stream
copied untouched, 13.1 MB.

**Anton had to be installed into the sandbox first, and this is a trap.** A fresh
sandbox has **no Anton** — `fc-match Anton` returns *DejaVuSans.ttf*, which is exactly
the silent substitution that breaks a measured caption fit while every script still
reports "fits". The repo host has Anton (the session-start hook installs it); **the
sandbox does not, and nothing warns you.**

- `https://fonts.google.com/download?family=Anton` returns an **HTML page, not a zip** —
  `unzip` fails and, if the failure is swallowed, the burn proceeds in DejaVu.
- What works: `https://github.com/google/fonts/raw/main/ofl/anton/Anton-Regular.ttf`
  (170 KB, OFL-licensed), copied to `~/.fonts` followed by `fc-cache -f`.
- **`fc-match Anton` was checked and returned `Anton-Regular.ttf: "Anton" "Regular"`
  before ffmpeg was invoked.** Do this on every sandbox burn.

Burned at the cut's own **496×864**. No upscale to 720×1280: the delivered file is not
exactly 9:16 (0.5741 against 0.5625), so forcing it would stretch vertically ~2%. The
house caption style is defined at 720×1280, so every value was scaled:

| Style value | House (720×1280) | This burn (496×864) |
|---|---|---|
| `PlayResX/Y` | 720 / 1280 | **496 / 864** |
| `Fontsize` | 54 | **36** |
| `MarginL` / `MarginR` | 58 | **40** |
| `MarginV` | 150 | **101** |
| `Outline` / `Shadow` | 3 / 1 | **2 / 1** |

**Captions cover blocks 1–6 only** — cues 1–32 of 37, ending 00:00:59,904. Cues 33–37
(block 7) were stripped on a burn copy so the disclaimer is not simultaneously a
caption and a card.

On-screen text was added by `drawtext` in the same ffmpeg pass, not in an NLE:

| Element | Text | Size | y | In / out |
|---|---|---|---|---|
| History lower-third | *Presented as history & philosophy* | 20 | 594 | 0:01 → 0:08 |
| Disclaimer, line 1 | *A dramatized adaptation of a* | 28 | 330 | 1:00 → 1:10 |
| Disclaimer, line 2 | *classical philosophical text.* | 28 | 370 | 1:00 → 1:10 |
| Disclaimer, line 3 | *Not medical advice.* | 28 | 410 | 1:00 → 1:10 |
| Editorial credit | *Written & edited by Joshua Chin* | 20 | 530 | 1:00 → 1:10 |

#### What was actually verified, and what was not

**Nobody has watched this file.** Frames were pulled back and measured; the cut has not
been viewed end to end, and pacing, performance and whether it *reads* are unassessed.

**Verified by measurement:**

- **Anton is the face on screen, not a substitute** — `fc-match` checked before the burn.
- **PlayRes is correct** — `PlayResX: 496 / PlayResY: 864` read back out of the generated
  `.ass`. This is the failure that silently scales Anton to ~4× and throws lines off frame.
- **Captions render on blocks 1–6 and are absent on block 7, as designed.** Caption-band
  mean luma, burned against source: t=3s **56.2 vs 44.5**, t=25s **102.9 vs 99.8**, t=45s
  **187.1 vs 201.0** (darker — black outline over the pale day-arc), t=57s **78.9 vs 72.9**
  — but t=62s **44.8204 vs 44.8251**, i.e. unchanged. A band that moves on six blocks and
  is untouched on the seventh is the stripped-cue behaviour working.
- **The end card renders.** Disclaimer zone at t=65s: mean **88.3 vs 42.5**, a shift far
  outside re-encode noise.

**Not verified, and one negative result worth recording:**

- **A pixel-difference count cannot test the margins.** Comparing burned against source
  with `compare -metric AE` returns ~80% of pixels differing *everywhere*, margins
  included — because CRF-20 re-encoding perturbs nearly every pixel. The test measures
  the codec, not the captions. **It proves nothing and should not be repeated.** A valid
  version needs a re-encoded-without-subtitles control at identical settings.
- **The wrap therefore rests on the libass guarantee, not on this run's pixels.** libass
  cannot draw outside `MarginL/R`, conditional on PlayRes matching and Anton being
  present — **both of which were verified above** — and `build_subtitles.js` reported the
  widest line at **554px against 556px usable**. That is a sound basis, but it is an
  argument from construction, not an observation.

### Credit spend — reconciled against the transaction log

Balance **753.6 → 655.4 = 98.2 credits**, and the transaction log accounts for every
one of them:

| Item | | Credits |
|---|---|---|
| Style key | `nano_banana_pro`, 1 job | **2.0** |
| Clips | `seedance_2_0_mini` 480p, 8 jobs − 1 refunded failure | **70.0** |
| Voice | `seed_audio`, 20 takes at 1.1–1.6 each | **26.2** |
| Assembly, captions | sandbox + local burn | **0** |
| **Total** | | **98.2** |

**Two corrections to the repo's cost model, both material at longform scale:**

- **A voice take costs ~1.31 credits, not 0.2 and not 0.8.** The live `get_cost`
  preflight said **0.2**; `SKILL.md` says **~0.8** from a ch1 v3 balance delta. The
  billed range here is **1.1–1.6**. The preflight understates by ~6×.
- **Voice was 27% of this run's bill, not 5%.** The v3 preflight in this document
  budgeted 5.6 credits for voice and it cost 26.2 — because the *take count*, not the
  per-take price, is the driver: 20 takes for 7 blocks is **2.9 takes per block**.

**What that does to the longform estimate.** `inner-canon-ch46-longform-v2.md`
budgets ~108 voice takes at ~0.8 ≈ **86 credits**. At 2.9 takes/block and ~1.31 each
that is **~410 credits** — nearly five times the figure, and it moves voice from a
rounding error to a material line item next to ~1,080 for clips. **The longform
preflight needs updating before anyone commits to it.**

### Superseded takes

Kept as evidence, per `CLAUDE.md`. Durations to 3 d.p.

| Block | Job ID | Speech | Why rejected |
|---|---|---|---|
| 1 | `5ca0437a-012e-4105-9df1-547598dd0bbc` | 12.705s | over |
| 2 | `0fd2668a-fcb6-44c2-b066-520da54c40df` | 7.371s | under |
| 2 | `e17b833b-750e-4745-b680-749510997bc8` | 7.542s | under — re-roll, identical text |
| 6 | `640bedb0-79d8-4490-a78d-f929d01ebc05` | 10.549s | over; 1 pause 1.25s |
| 6 | `c9030d36-ba3c-4b6b-a721-1ddeb328907d` | 11.232s | over; 1 pause 0.91s |
| 6 | `8eba7204-4db4-47c9-b0a3-e9948d47e7b6` | 7.970s | under — 28 words |
| 6 | `e8592a96-943d-4a13-bc2e-83f2a2be89c2` | 10.777s | over — 31 words |
| 6 | `c31c014e-ff77-42f2-91d3-8dd112fa97bb` | **8.480s** | **under by 0.120s** — the near-miss |
| 6 | `0791f03f-c8e0-4556-9444-d65db1061fdd` | 10.808s | over; **3** pauses, longest 1.24s |
| 6 | `9d47b473-d9bf-49a8-a273-1e780d9922dc` | **8.611s** | **passed** — rejected for an 11ms margin |
| 7 | `de6a1398-7ecf-4d57-967e-1d804a791e8a` | 10.415s | over |
| 7 | `898267e4-5c3b-48b5-bda2-51ba0e682163` | 10.256s | over — re-roll, identical text |
| 7 | `8da393cb-dbc7-4230-95dc-c5de6ed364fa` | 4.326s | far under — 30 words at 6.94 w/s |

**Superseded clip:** block 6 `95cc9260-2b75-49dd-a261-eee1abd78c9f`, service-side
failure, refunded.

### Narration changed during the take gate — the document was updated to match

Blocks **2, 6 and 7** are not the text this document shipped with. They were
rewritten to land in the speech window, and the narration table above now carries
**what was actually spoken**, because `build_subtitles.js` reads it as the caption
source and a stale table ships wrong captions.

| Block | Was | Now |
|---|---|---|
| 2 | 35 words | **43** — lengthened; the line delivers fast (~4.5–4.8 w/s) |
| 6 | 34 words, *"came back before dawn"*, *"Ling Shu eighteen — The Night Watch"* | **32** — *"at dawn"*, and the title em-dash split into a full stop |
| 7 | 34 words, *"and we say plainly, on screen, where…"* | **32** — *"on screen"* dropped |

**The mandated disclaimer string in block 7 is untouched and still leads the block.**
Block 6 still says *"Ling Shu eighteen"* aloud — that was a compliance choice in this
cut and it survived all eight rewrites of that block.

### Reproduction notes

- **9:16 only.** A landscape version, if wanted, comes from `reframe` on the
  finished cut, with the sidecar rebuilt at `--format 16:9`.
- **The narration table must stay three columns.** `build_subtitles.js` admits no
  fourth, and a Speaker column would be captured into the caption text.
- **Sidecars are not built yet, deliberately.** The builder times cues from the take
  durations in the production record; with none recorded it warns and assumes a
  full 10s per block, which would ship a sidecar that drifts against the render.
  **Build and commit `.srt`/`.vtt` once the takes exist**, and regenerate after any
  narration or take change.
- **Expect the assembler's output to be ~496×864, not 480×854.** It rescales rather
  than passes clip geometry through, so the delivered file is ~2% wider than 9:16.
  Build the sidecar and burn the captions against the **delivered** geometry, and do
  not scale a 480p draft to 720×1280 — that introduces a 2.1% vertical stretch.
- **Visual QA will probably not be possible from this host.** The CDN has been
  blocked on every cut for a long time. Verify at job-metadata level, probe the file
  in the sandbox next to where it was built, and **say which of those actually
  happened** — a probe is not a viewing.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Sits on **block 1**.
- **End disclaimer card** — the mandated string verbatim over **block 7**, held long
  enough to read comfortably. Block 7 renders as a plain plate.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  beneath the disclaimer, **and** in the description.
- **Title card** — *"The Emperor's Inner Canon · The Night Watch"* over block 6. Any
  citation on screen reads **靈樞·營衛生會第十八 / Ling Shu 18**, never "Chapter 46".
- **Music** — licensed guqin only, and **nothing generated by this pipeline**. The
  assembler's `--music` flag can place a bed you supply at `--music-vol` ≤0.20; it
  generates none. Sourcing and licensing stay with the producer.

### Finishing steps

This cut's own numbers. **Do not copy these into another cut** — the block
boundaries and timecodes differ between versions of the same chapter, and that is
exactly where the mistakes land. Both caption scripts are pure text tools: they
read this document, touch no video, need no network and cost no credits. **Run them
from the repo root, or pass an absolute path.**

**1. Check captions.** ✅ **ran, and the reported overflows were fixed at script
stage** — before any voice take exists, where a fix is free rather than a re-take.

```
node scripts/check_caption_fit.js output/episode-46/inner-canon-ch46-trailer-v3.md
```

**Current result: `All clauses fit`**, with block 7's first clause reported as the
**known exception** — the mandated disclaimer string, never reworded to fit.

The first pass reported **five** overflowing clauses (blocks 1, 2, 5, 6 and 7, the
widest at 1735px against a 1111px two-line budget). All five were fixed by adding
internal punctuation and shortening, and the word counts re-verified afterwards
against the take window. **Expect that trade on every cut written to the current
window**: doubling the words per block to reach 8.6s makes clauses longer, and long
clauses are exactly what the caption budget measures. Under the sidecar-only path an
overflow is a **readability** report rather than a render failure — libass margins
keep it in frame regardless — but churning a clause across four cues still reads badly
on a vertical feed.

**2. Build the sidecar.** After the takes exist and their durations are in the
production record above.

```
node scripts/build_subtitles.js output/episode-46/inner-canon-ch46-trailer-v3.md
```

Commit the `.srt` and `.vtt` beside this document. Then, **on a copy of the
`.srt`**, delete the cues covering **block 7** (everything from `00:01:00,000`
onward) so the disclaimer is not simultaneously a caption and a card. The burn copy
is block 1–6 cues only, ending at or before `00:00:59,9xx`.

**3. Burn captions.** After assembly, over the finished MP4. Run `ffmpeg -version`
and `fc-match Anton` **first** — the session-start hook installs both, and a missing
Anton substitutes a wider font silently while the sidecar still reports "fits".
Convert the `.srt` to `.ass` and **re-target `PlayRes` to the delivered geometry**
before burning; ffmpeg's SRT→ASS converter hardcodes `384x288`, which scales every
style value by ~3× on this frame and runs the lines off screen. `build_subtitles.js`
prints the two-step command.

If the delivered file is 496×864 rather than 720×1280, scale the **style**, not the
video: `PlayResX/Y` 496/864, `Fontsize` 36, `MarginL/R` 40, `MarginV` 101,
`Outline/Shadow` 2/1.

**4. History lower-third** — *"Presented as history & philosophy"*, in at **0:01**,
out at **0:08** (block 1). Added by `drawtext` in the same burn pass, not in an NLE.

**5. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. Both also go in the description at upload.

**6. Music.** ⬜ **outstanding — the only unfinished deliverable.** Guqin, licensed,
ducked ~12–15 dB under the voiceover. **Out from the block 6 cut at 1:00**, so the card
plays dry. `--music-vol 0.20` (≈ −14 dB) lands in range, but the flag mixes one
continuous bed with **no dropout window**, so the 1:00 cut needs a hand mix either way.
This pipeline generates no music and sourcing/licensing stays with the producer.

> **Steps 1–5 ran on 2026-08-06.** ✅ captions checked, ✅ sidecar built and committed,
> ✅ burned at native 496×864 with Anton verified, ✅ lower-third in at 0:01, ✅ end card
> 1:00–1:10. See *Captions and on-screen text* in the production record for the measured
> result and for what was **not** verified.

## Compliance notes (YouTube)

- **Disclaimer** — repo string verbatim: blockquoted above, spoken first in block 7,
  on screen as the end card, and in the description.
- **Health content stays philosophical — load-bearing for this chapter.** Sleep is
  the highest-RPM topic on the slate precisely because of sleep-app and supplement
  advertiser overlap, and that is the pressure that turns a history channel into a
  wellness channel. **Nothing in these seven blocks tells anyone how to sleep.** No
  condition, no remedy, no practice, no schedule, no benefit claim. Block 4 attributes
  the mechanism to *the text*, in the physician's own mouth, and block 7 says on
  screen that the mechanism does not survive the evidence.
- **Mortality / ageing** — ageing is the subject and is carried entirely by objects,
  light and one silhouette. No illness, no bodies, no decline shown on a person.
  Portraits, not bodies.
- **Indulgence / alcohol** — **absent.** The chapter's wine passage (§10) and the
  longform's ferment imagery are both out of this cut.
- **Supernatural hooks, explicitly debunked** — none raised. The census is
  administrative, not mystical; the one named mystery (the hour) is answered inside
  the trailer, in block 2, and its mechanism is disowned in block 7. Nothing dangles.
- **The withhold is emotional, not informational.** Block 6 withholds *nothing
  factual* — the chapter's argument is fully delivered in blocks 2, 4 and 5. What it
  withholds is which house was awake, which is the episode. A reviewer should not
  read this as a mystery box: the educational payoff is on screen inside the trailer.
- **Titles and thumbnails must honor the payoff.** No *secret*, *ancient trick*,
  *cure*, *anti-aging*, no shocked-face thumbnail. **Standing conflict with the
  Blueprint**, unchanged from v2: its Ch 46 hook is *"The Ancient Science of Sleep"*,
  and *"science of"* asserts exactly what block 7 denies. Use **"They Were Wrong About
  Why. They Were Right About What."** **Thumbnail direction:** the dark city with one
  lit window — it reads as *the hour everyone is asleep*, which is the actual claim.
- **Citation accuracy — and a change from v1 and v2.** Those cuts kept the number out
  of the spoken title so it could not go wrong on air. **Block 6 now says "Ling Shu
  eighteen" aloud**, because the numbering is confirmed and because saying it is the
  strongest available correction to a slate index that is wrong in three documents.
  If any on-screen citation ever disagrees with the narration, the narration is right.
- **Dramatisation is disclosed.** The census, the runners and the wrong count are
  invention; the source mapping says so line by line. Only blocks 2, 4 and 5
  paraphrase the classical text.
- **Hedge allocation — two characters speak, and no hedge moved.** `SKILL.md`
  requires this cut to say which hedge left the narrator. **None did.** Fan-di makes
  no factual claim at all — block 3 is an order and a question. Dr-Qi states *the
  text's* model and says so inside her own line (*"That is the text's answer, not a
  physician's"*), which is the hedge travelling **with** the claim rather than away
  from it. **Arthur retains every load-bearing statement**: the framing (1), the
  classical paraphrase (2), the symmetry (5), the title (6) and the disclaimer (7).
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — run before generating, and recorded as run.** Read against
  the ch8 `nsfw` incident, where restraint and bound-figure imagery tripped the filter
  even though the subject matter was fine: nothing here goes near it. Shot 2's
  sleeping boy is comic and posed, not unconscious; shots 4 and 5 have no people at
  all; shots 3 and 6 are one seated man at a table. Shot 1 is a city with no figures.
  **Assessed low risk.**

**Residual risk: LOW**, conditional on the title and thumbnail holding the
philosophical line the narration holds.

## Runtime levers

**Cut to 0:50** — drop blocks 2 and 5. Runs 1 → 3 → 4 → 6 → 7. Keeps the census, the
question, the mechanism and the reveal. **Costs the chapter's actual argument** (the
名 of the hour, and the both-ends symmetry), so prefer this only where the cut is
selling the episode rather than the idea — and never where the episode is not one
click away.

**Cut to 0:40** — blocks 1 → 4 → 6 → 7. Pure hook and mechanism, no symmetry and no
character deflection. Block 4 must be kept in any cut this short: it is the only
block that carries a hedge on the mechanism other than block 7.

**Stretch to 0:90** — add two blocks after 2, from longform blocks 30–35: 營周不休，
五十而復大會 and the 25/25 split. That is the chapter's most surprising *idea* (the
day is inside you, and it is made of food) as opposed to its most striking picture,
and at 0:90 there is room for both.

**Blocks 4 and 5 are a pair.** Shipping the mechanism without the symmetry leaves the
chapter looking like a claim about old people's sleep rather than a claim about both
ends of the day. **Block 7 is not a lever** — the end disclaimer card is a standing
`CLAUDE.md` requirement.

**Written for sound-off.** On a vertical feed the dark city with one crossing lantern
at 0:10 stops the scroll, and the captions carry the whole argument if nobody turns
the sound on — which is what the tracked `.srt`/`.vtt` sidecar path guarantees and
burned-in captions only approximated.
