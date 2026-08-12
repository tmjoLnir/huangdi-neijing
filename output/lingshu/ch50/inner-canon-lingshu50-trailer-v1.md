# The Emperor's Inner Canon — Lingshu 50 Trailer v1 (80 seconds)

**論勇篇第五十 · The Organ of Courage**

**Not rendered.** Target `seedance_2_0_mini` @ 480p draft tier, **8 blocks × 10s =
80s**, **vertical 9:16**. Record the delivered geometry here after assembly — the
last two cuts delivered **496×864** and were scaled to 720×1280 before the caption
burn.

**Final render:** *(none yet — nothing has been generated for this cut.)* When it
exists, record the **whole `https://…` CDN URL**, not the bare `media_id`: a
`media_id` is not a link, and the person who has to archive the MP4 is the one who
cannot be handed a UUID.

**Cite this chapter on screen and in speech as *Lingshu 50*, never as a bare
"Chapter 50".** Suwen 50 (刺要論, *On the Essentials of Needling*) is a different
chapter. Both halves of the canon run to eighty-one separately numbered chapters,
so a bare number sends a checking viewer to the wrong text about half the time,
and citation accuracy is this channel's stated differentiator.

Companion longform: **`inner-canon-lingshu50-longform-v1.md`** (80 blocks, 13:20,
16:9). This trailer previews that episode's Act III and Act IV and deliberately
withholds the coda.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## What this trailer sells

Not the storm, and not the constitution material. **The claim that courage is an
organ, and the drunk man who proves it.**

The chapter's own strongest move is that it uses *the same words* for the brave
man's rage and for the drunk man's bravado — 肝浮膽橫, the liver floats and the
gallbladder spreads crosswise. The trailer's whole structure is built to set that
repetition up in blocks 3–4 and spring it in blocks 6–7, so the viewer hears the
echo rather than being told about it.

**The withhold is the payoff line.** 氣衰則悔 — *when the qi declines, regret
follows* — is spoken, but the chapter's name for the condition (酒悖) and the
English etymological bridge (gall / 膽 *dǎn*) are held for the episode.

## Narration (per 10s block)

One speaker per block — the assembler takes exactly one audio per block. The
speaker sits in the **beat** column, because `build_subtitles.js` parses this table
as exactly three columns and a fourth would leak into the caption text.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | Two thousand years ago, a physician was asked a strange question. Where does courage come from? He did not answer with virtue, and he did not answer with training. He answered with an organ, and he named exactly which one. |
| 2 | Fan-di (Xavier) — the question | I have watched two soldiers in the same line. One walked into the spears, and the other could not make his legs move. So do not tell me it was upbringing. I want to know what is different inside them, in the body. |
| 3 | Arthur (V.O.) — the brave body | The answer he received was not a philosophy, it was an anatomy. The brave man has deep firm eyes, and a long straight nose. His heart sits upright, and his liver is large and firm. His gallbladder is full and broad. |
| 4 | Dr-Qi (Vesper) — the shape of rage | When such a man is angered, his qi swells and his chest opens. The liver lifts, and the gallbladder spreads out wide. The hair rises on his arms, and the face goes pale. That is not a mood, that is a shape. |
| 5 | Arthur (V.O.) — the other body | Then he describes the other man, whose eyes are large but not deep. The liver ties are slack. The gallbladder never fills, and it hangs loose. Even in a real rage his qi cannot fill his chest, so he cannot stay angry. |
| 6 | Dr-Qi (Vesper) — the wine | Now ask why. A frightened man has been drinking, and he squares up to a soldier. Wine is the essence of grain, and its qi is fierce. It fills the chest. The liver floats up, and the gallbladder spreads out wide. |
| 7 | Arthur (V.O.) — the echo / title | Those are the same words he used for courage. And when the wine goes out of him, the regret arrives. The Emperor's Inner Canon. Lingshu fifty: The Organ of Courage. |
| 8 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present this as history and philosophy. In every episode, we mark plainly where the evidence does not hold. |

Cast: **Arthur**, **Xavier**, **Vesper** — `seed_audio` presets at `speech_rate` 55.

### Sized to the 8.6–10.0s speech window

The assembler gates on **8.6–10.0s of detected speech per block**, both edges hard
errors. Budgets are `SKILL.md` step 3 **as re-measured 2026-08-10 on the Suwen 13
trailer** — *not* the older columns still carried in
`inner-canon-lingshu28-longform-v1.md` and `inner-canon-suwen8-longform-v1.md`,
both of which are sized to superseded figures:

| Voice | Blocks | Words | Budget | Measured rate |
|---|---|---|---|---|
| Arthur | 1, 3, 5, **7**, **8** | 40, 41, 42, **30**, **30** | 38–44 | ~4.4 w/s |
| Xavier (Fan-di) | 2 | 43 | 40–44 | 4.3 w/s |
| Vesper (Dr-Qi) | 4, 6 | 42, 41 | 41–43 | ~4.5 w/s |

Counts are machine-generated by parsing this document's own narration table and
dropping tokens containing no letter or digit — a spaced em-dash is not a word, and
counting it as one spends real budget on a window 1.4s wide.

**Two blocks are deliberately below Arthur's budget, and both are measured
decisions rather than oversights.**

- **Block 7 at 30 words** is the title block. `SKILL.md` and the Lingshu 28 v2
  record both document a slow announcer mode on colon-led titles: a 33-word title
  line returned **12.751s and 12.251s** on consecutive rolls, and the block only
  landed after being cut to 25 words against a 32–36 budget. Arthur's budget has
  since risen to 38–44, so this block is scaled to the same ~78% of budget that
  actually shipped. **Budget re-rolls here; do not try to solve it by re-counting
  words.**
- **Block 8 at 30 words** is the mandated disclaimer card. `SKILL.md`: its two
  short full-stopped sentences slow `seed_audio` badly — 33 words returned
  **11.33s, 16.93s and 10.54s** before the trailing clause was cut to 18 words,
  which then landed 9.60s first roll. This block is the **11-word mandated string
  verbatim plus an 18-word tail**, which is that measured shape exactly.

**No line in this cut contains a comma-separated list of three or more items.**
That is the single most expensive punctuation error available: the Suwen 8 run
measured a 31-word Arthur line with a four-item comma list at **12.022s** against
**8.913s** for the same 31 words with none — a 3.1-second swing at fixed word
count, more than twice the width of the whole window. Block 3's four attributes
and block 4's three are joined with *and* or split into sentences for exactly this
reason.

**These are arithmetic against measured rates, not measurements.** Treat the first
pass as calibration. The rates are survivor-biased, the run-to-run spread on
identical text has been measured at **2.44s** — wider than the 1.4s window itself —
and Arthur ranged **3.98–4.80 w/s within a single seven-block cut**. **Generate two
variants per block and keep the better one.**

## Shot list

Numbered to match the narration blocks. **Vertical 9:16 portrait framing**, flat 2D
ink-wash house style, chained off this chapter's style key. **Text-free
throughout** — captions come from the tracked sidecar and the end card's text is
hand-added at edit time.

1. **The hook** — no people. A single ink-brush anatomical figure on blank silk,
   drawn from the inside out, with one small organ high under the ribs glowing
   faintly amber while everything else stays grey. Slow push in toward the glow.
   *History lower-third sits here — it is required inside the first ten seconds.*
2. **The question** — FAN-DI on the high seat, gold robe, glasses, **fan snapped
   open** and held still at his chest. He is not performing yet; he is genuinely
   puzzled, which is rarer for him. Warm lamplight from one side.
3. **The brave body** — split composition, left half only. An ink figure standing,
   with four brushstroke annotations arriving one at a time: the eyes, the nose,
   the heart, the liver. The right half of the frame stays blank silk.
4. **The shape of rage** — DR-QI, blue cheongsam, open bamboo scroll held casually
   like a tablet, completely still. Behind her the left-half figure's chest opens
   outward in ink and a small shape beneath the ribs spreads wide and bright.
5. **The other body** — the right half of the frame fills at last. A second ink
   figure, drawn in thinner, looser line. The same organ under its ribs is drawn
   slack and half-empty, and it does not brighten. Both figures now on screen.
6. **The wine** — no bottles, no cups, no pouring, no drinking, nobody's mouth. A
   distant feast hall in silhouette far back in frame, warm and out of focus, while
   in the foreground the right-hand figure's slack organ slowly fills and spreads
   exactly as the left one did in shot 4.
7. **The echo / title** — the two figures side by side, and for one held beat the
   two chests are drawn *identically*. Then the right one dims and collapses back
   to slack line. Resolves to the series title card. Hard cut to black.
8. **Disclaimer card** — black plate, faint ink-grain texture, continuous slow
   drift. Text hand-added at edit time.

**No faces in shots 1, 3, 5, 7 or 8.** The cut opens on an anatomical diagram
rather than a person, which is both the strongest hook available and the safest
opening the chapter has.

**Shot 6 is the compliance-critical shot and is specified negatively on purpose.**
The chapter's alcohol passage is the trailer's payoff, and the repo rule is
cautionary framing only, never glorified, with feast B-roll kept atmospheric — no
close-ups of bottles, pouring, or drinking. So the wine is never depicted at all:
it is carried entirely by the *effect* on the ink figure, with the hall itself
distant, silhouetted and defocused.

**Do not stage either figure as bound, held, restrained or wrapped.** The
Lingshu 28 run had a clip rejected `nsfw` for smoke-cords holding a figure still —
the restraint imagery, not the theme. The slack-versus-firm contrast here is
carried by line weight and brightness only.

**Duration ≥ 9.5s and motion from frame 1 on every clip.** Blocks 1, 3 and 8 are
the frozen-frame risks — a diagram, a half-empty frame and a plain plate. Each is
given continuous motion above: the push toward the glow, the annotations arriving
one at a time, the drifting grain.

## Source-script mapping

Source: the received text of 靈樞·論勇篇第五十, sections 1–6, as supplied.

| Source § | Passage | Blocks |
|---|---|---|
| §1 | 有人於此，並行並立…或病或不病 — the same storm, different outcomes | — *withheld; longform cold open* |
| §1–§2 | the four seasonal winds and the constitutional colour typology | — *withheld; longform Act I* |
| §3 | 忍痛與不忍痛者，非勇怯之分也 — pain is not the dividing line | — *withheld; longform Act II* |
| §4 | **勇士者，目深以固…其膽滿以傍** — the brave man's anatomy | 3 |
| §4 | 怒則氣盛而胸張，肝舉而膽橫…毛起而面蒼 | 4 |
| §5 | **怯士者，目大而不減…其膽不滿而縱** — the timid man's anatomy | 5 |
| §5 | 雖方大怒，氣不能滿其胸…故不能久怒 | 5 |
| §6 | 酒者，水穀之精…其氣慓悍 | 6 |
| §6 | **肝浮膽橫，當是之時，固比於勇士** | 6, 7 |
| §6 | 氣衰則悔 — when the qi declines, regret follows | 7 |
| §6 | 名曰酒悖 — the condition's name | — *withheld; longform Act IV* |
| — | 膽 *dǎn* / English *gall* — the etymological bridge | — *withheld; longform coda* |

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: *Chronicle of
Balance* → **The Emperor's Inner Canon**; *Xiao-Lei* → **Lei-Gong**; Dr-Qi wears the
cast sheet's **blue** cheongsam, never jade. The slate's working title for this
chapter is *Where Courage Lives*, which the longform uses; **The Organ of Courage**
is this trailer's own title and the one block 7 speaks.

**Character mapping — the source has two speakers, and neither is Qibo.** The
chapter is a dialogue between 黃帝 and **少俞 Shao Yu**, a physician who appears in
only a handful of Lingshu chapters. The series cast has no Shao Yu, so his role is
carried by **Dr-Qi**, exactly as she carries Qibo elsewhere. This is a cast
substitution, not a translation, and it is flagged here so it is never mistaken for
a claim about the text. **Lei-Gong does not appear in this chapter at all** and does
not speak in this trailer; the longform gives him an invented auditor role, which
that document flags in its own mapping.

**Dramatic material not in the source, flagged as invention:** Fan-di's two
soldiers in block 2. The classical text's framing question is about a storm and
illness, not a battle line; the Emperor's actual observation about courage
(§3, 余見其然也) is unstaged. The battle-line image is a dramatisation of that
observation and asserts nothing the chapter does not.

**What is *not* invented** is the thing the cut turns on: 肝浮膽橫 in §6 repeats
§4's 肝舉而膽橫 almost exactly. That repetition is a fact about the Chinese, and it
is the trailer's entire structure.

## Production record (Higgsfield)

**Status: nothing generated. This document is pre-render.**

No style key, no clips, no takes, no assembly, no captions burned. The tables below
are the shape the record must take, and the estimate the step-0 gate will be run
against — **not** a record of work done.

### Cost preflight — estimate only, not yet costed live

**`SKILL.md` step 0 has not been run for this cut.** Nothing generates until it is:
tool-availability check, `balance`, live `get_cost` on a representative clip *and*
a **representative-length voice line**, the whole-cut figure stated, and the user's
confirmation of model and tier.

| Item | Price used | Count | Estimate |
|---|---|---|---|
| Clips `seedance_2_0_mini` 480p 10s 9:16 | 10.0 | 8 | 80 |
| Style key `nano_banana_pro` 1k 9:16 | 2.0 | 1 | 2 |
| Voice takes `seed_audio` | ~1.45 | 16 (two variants per block) | ~23 |
| Assembly, captions | free | — | 0 |
| | | | **~105** |

**Budget the voice line as a range, not a number.** The Suwen 13 trailer spent
**33 takes on 7 blocks** — a 4.7× re-take rate — and its own diagnosis was that the
word budgets were wrong rather than the service noisy. This cut is written to the
corrected budgets, so it should do better; at that rate, though, voice alone would
be **~55 credits** and the cut **~137**. Blocks 7 and 8 are the two most likely to
need re-rolls, for the reasons given above.

**Price voice on a representative-length line, never on a short probe.** This has
been got wrong three times in this repo in both directions — 0.8, then 0.5, then
0.1 credits per take, against an actual **1.3–1.7**. Cost block 3 or block 5, not a
convenience string.

**Two `seedance_2_0_mini` defaults will silently cost 2.5× if not passed
explicitly**: `resolution` defaults to **720p** and `duration` to **5s**. A
draft-tier call that omits them is billed at full tier *and* returns clips that
fail the assembler's 9.5s floor.

### Style key

**Not generated.** Chain from the **Suwen 1 neutral head**,
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`, passed as `medias[{role:"image"}]` by job
ID — never a URL, and never off the most recent chapter's key, which would mean
prompting away another chapter's furniture.

**Motif for this cut:** the three-character series key with a **split silk panel**
behind them — one ink figure firm-lined on the left, one thin-lined on the right,
and a single small organ drawn beneath the ribs of each, bright and full on one
side, slack and dim on the other.

`nano_banana_pro` (served by `nano_banana_2`), 9:16, target 768×1376.

**The longform needs a 16:9 sibling derived from this key** — generate the vertical
one first and record both lineages.

### Clips

**Not generated.** Configuration for the run:

| | |
|---|---|
| Model / tier | `seedance_2_0_mini`, Draft, `resolution: "480p"` |
| Duration | `10` — **pass explicitly**, the default is 5s |
| Aspect | `aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" in the prompt text |
| Audio | `generate_audio: false` on every clip |
| Reference | this chapter's style key on every clip as `image_references` |
| Pre-decline | `IN THE DARK` — `24bae836-2c4a-48e0-89b6-49fcc0b21612` |

**`generate_audio: false` is a correctness requirement, not a saving.**
`assemble_final.sh` mixes clip audio in at **0.12 under the voice** rather than
discarding it, so a clip generated with native audio is audible in the finished cut
and the only fix is regenerating the block.

**Generate block 1 alone and check its returned dimensions** before submitting the
other seven.

**Keep this vocabulary out of every clip prompt:** *drum*, *drone*, *music*,
*rhythm* (trigger `DROWN IN MUSIC`, and they are edit-time directions anyway); and
*bottle*, *cup*, *pour*, *drink*, *drunk*, *tavern* for block 6 — the compliance
framing is carried by staging, and naming the liquor buys nothing.

| Blk | Shot | Job ID |
|---|---|---|
| 1 | glowing organ in an ink figure | *pending* |
| 2 | Fan-di, fan open, puzzled | *pending* |
| 3 | left figure, four annotations | *pending* |
| 4 | Dr-Qi still, chest opens behind | *pending* |
| 5 | right figure, slack organ | *pending* |
| 6 | distant hall, right organ fills | *pending* |
| 7 | two chests identical, then dims | *pending* |
| 8 | black plate, drifting grain | *pending* |

### Voiceover

**Not generated.** `seed_audio`, `voice_type: "preset"`, `speech_rate` 55, one take
per block, **one speaker per block** — verified above: no block contains two voices.

| Role | Preset | `voice_id` |
|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` |

**Record per block: job ID, file duration *and* the assembler's measured speech
figure, to three decimal places.** They differ — the Lingshu 28 v2 run found a take
at file 9.870s against speech 8.639s — and the second is the one that is gated. A
Suwen 1 take logged as "8.50s pass" was 8.497s, 0.103s under the floor, and stopped
the assembly. **A take within ~0.2s of either edge is checked against the number,
never eyeballed.**

Measure with the sanctioned tool, which trims exactly what the assembler trims:

```
sandbox_exec({ command:
  "bash $HF_WORKFLOWS/faceless-channel-video/scripts/narrator/speech_metrics.sh \
     --text 'the line exactly as spoken' work/voices/voice01.wav" })
```

**When the takes exist, the `Voiceover` bullet line goes here as one physical
line** — `build_subtitles.js` parses it from a single line, and wrapping it makes
the script silently fall back to "assume a full 10s" for *every* block. Put
**speech**, not file duration, in that line: it is what makes the sidecar agree with
the assembler.

### Assembly

**Not run.** There is no assembly job ID on this path; record the flags, manifest
and exported `media_id` instead.

| | |
|---|---|
| Command | `sandbox_exec` → `assemble_final.sh`, **foreground** |
| Flags | `--out work/output/final.mp4 --blocks 8 --manifest pairs.txt` |
| Not passed | `--clip-seconds`, `--music`, `--sfx-vol`, `--subs` (hard error), `--allow-mismatch` |
| Manifest | 8 lines, `work/blocks/blockNN.mp4 work/voices/voiceNN.wav`, NN 01–08 aligned |
| Expected | `8 × 10s = 80s` asserted within ±1s |

**Foreground.** The Lingshu 28 v2 run assembled 8 blocks in **47 seconds** against
a 120s budget, so this cut is comfortably inside it. Do not use `background: true`
at this scale — a Suwen 1 run lost a finished render that way when the sandbox was
reclaimed under an unpolled job.

**Download, assemble and export must be ONE chained command.** The sandbox is
discarded ~10 seconds after a call returns. Call `media_upload` *before* the
assembling command, append `curl -f -X PUT --upload-file` to the **same** command,
and `media_confirm` only after HTTP 200.

### Captions

**Not built.** No takes exist, so there are no durations to time cues from, and
**this cut therefore has no `.srt`/`.vtt` sidecar yet.** That is correct for a
pre-render document — build and commit them once the takes exist. They are tracked,
required deliverables.

`check_caption_fit.js` **has been run** on this document and its result is in
*Finishing steps* below; it is a pure text tool and needs no takes.

### Reproduction notes

Empty — nothing has been reproduced because nothing has been run. When the cut is
generated, this section carries what went wrong and how it was resolved, and
**keeps superseded job IDs marked as superseded**, because they are the evidence
the next cut is written against.

Three things this cut should expect to find, from the two most recent runs:

1. **Blocks 7 and 8 will probably need re-rolls.** Both are documented slow-mode
   shapes. Roll them first, before the six ordinary blocks, so a rewrite costs
   nothing downstream.
2. **The CDN is blocked from the repo host** by organisation egress policy
   (`connect_rejected: gateway answered 403 to CONNECT`). That is the *egress
   proxy* refusing, not CloudFront denying the object — the links are good from a
   normal machine. Say which layer refused.
3. **Anton is not in the sandbox, and the burn happens in the sandbox.** Install it
   in the same chained command as the burn and verify with libass's own
   `fontselect` log, not with `fc-match` alone.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. **Block 1.** *Pending.*
- **End disclaimer card** — the mandated string verbatim, over **block 8**, held
  **1:10–1:20**. The block is already in the block plan and in the cost preflight
  above, which is where it has to be: it costs a full 10s block and a paid clip.
  *Pending.*
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. *Pending.*
- **Music** — **licensed guqin only, nothing generated by this pipeline.** The
  assembler can now *place* a bed you supply via `--music` (default `--music-vol`
  0.10, clamped ≤0.20); sourcing and licensing stay with the editor. Trailers earn
  disproportionate plays and carry the higher Content-ID exposure. *Pending.*

### Finishing steps

**This cut's own numbers — 8 blocks, 80.0s, block boundaries every 10s, end card
1:10 to 1:20.** Not a generic recipe: the companion longform is 80 blocks with a
13:10 card, and that difference is exactly where the mistakes land. Both caption
scripts are pure text tools — they read this document, touch no video, need no
network and cost no credits. **Both take a path relative to the current directory:
run them from the repo root, or pass an absolute path.**

**1. Check captions — DONE, exits 0.**

```
node scripts/check_caption_fit.js output/lingshu/ch50/inner-canon-lingshu50-trailer-v1.md
```

Reports only the known block-8 exception: the mandated disclaimer's first clause
genuinely needs three lines at 9:16 (1187px against a 1111px two-line budget) and
the script routes it to `known` rather than `bad`, so the exception is reported and
**the exit code stays 0**. It is a compliance string and is never reworded to fit.

Re-run this after any narration edit — a fix is free before takes exist and costs a
re-take afterwards.

**2. Build the sidecar** — *blocked until the takes exist*, since cue timing comes
from the take durations in the production record above.

```
node scripts/build_subtitles.js output/lingshu/ch50/inner-canon-lingshu50-trailer-v1.md
```

Commit the `.srt`/`.vtt` with the cut. Then, on a **copy** of the `.srt`, delete the
cues covering **block 8** (everything from `00:01:10`) so the disclaimer is not
simultaneously a caption and a card. The burn copy is **blocks 1–7, ending at
1:10**.

**3. Burn** — *pending assembly*. Scale first, then subtitles, in one filter chain:

```
mkdir -p output/lingshu/ch50/renders
ffmpeg -i output/lingshu/ch50/inner-canon-lingshu50-trailer-v1.srt -f ass - \
  | sed 's/^PlayResX: .*/PlayResX: 720/; s/^PlayResY: .*/PlayResY: 1280/' \
  > output/lingshu/ch50/renders/inner-canon-lingshu50-trailer-v1.ass

ffmpeg -i <the-assembled-render>.mp4 \
  -vf "scale=720:1280,subtitles=output/lingshu/ch50/renders/inner-canon-lingshu50-trailer-v1.ass:force_style='FontName=Anton,Fontsize=54,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=1,Alignment=2,MarginL=58,MarginR=58,MarginV=150,WrapStyle=0'" \
  -c:a copy <cut>-subtitled.mp4
```

**Use the blocks-1–7 copy of the `.srt` here**, not the committed one.
`build_subtitles.js` prints both commands in the correct order on every run — use
its output rather than retyping. The PlayRes re-target is not optional: ffmpeg's
SRT→ASS converter hardcodes 384×288, which scales every style value by ~4.4× on a
720-tall frame and runs the lines off frame.

**Install Anton in the sandbox in this same chained command**, and verify with
`fontselect` at `-loglevel verbose` — libass substitutes a wider face silently and
`build_subtitles.js` still reports the line as fitting.

**4. History lower-third** — *"Presented as history & philosophy"*, Anton 30,
centred, **in at 0:01, out at 0:08**, over block 1. Add by `drawtext` in the same
burn pass with `borderw=3:bordercolor=black@0.9`.

**Block 1 is a bright silk-and-ink frame**, so white glyphs will not move `YAVG` at
all. Verify presence with **`YMIN`**, which the 3px black border pins down. Pick the
luma statistic to match the background — getting this wrong looks exactly like a
missing overlay.

**5. End card** — **in at 1:10, out at 1:20**, over block 8's plate. Mandated
string verbatim, with *"Written & edited by Joshua Chin"* beneath it.

**Check the plate's luma before drawing white text on it.** The Lingshu 28 v2 run
asked for "black plate, faint ink-grain texture" and `seedance_2_0_mini` returned a
**bright mottled texture at mean luma 57**, which made white card text partly
illegible — a compliance defect on the one card that must be readable. Every
automated gate passed that clip. If block 8 comes back light, a `drawbox` scrim
fixes it for free, but **regenerate the block for any full-tier render.**

**6. Rebuild from the assembly, do not stack.** Scale, subtitles, scrim, card and
lower-third are **one filter graph and one command**, so the shipped file stays two
encode generations from the assembler rather than four or five. Re-running the whole
finishing pass costs nothing, so treat it as idempotent. Use `-preset veryfast
-crf 17` — it ran an 80s 720×1280 job in **23.7s** against `medium`'s ~50s, and a
60s transport ceiling has been observed on `sandbox_exec` despite a 120s schema
allowance.

## Compliance notes (YouTube)

One bullet per `CLAUDE.md` rule. **Audited at script stage, before generating** —
a non-compliant clip is a paid re-render, so this audit runs on the prompts above
rather than on output that does not exist yet.

- **Disclaimer kept.** Verbatim as a blockquote at the head of this document, spoken
  by Arthur in block 8, on screen as the end card 1:10–1:20, and required in the
  upload description. Teaching content here is philosophy and history, never medical
  instruction.
- **Mortality and aging: reflective, non-graphic.** Not a theme of this chapter and
  not depicted. The one adjacent moment — §1's storm illness — is withheld to the
  longform, and even there it is carried by weather and by an ink figure, never by
  a body.
- **Indulgence and alcohol: cautionary framing only.** This is the cut's **primary
  compliance surface** and it is handled structurally rather than by hedging. The
  wine is **never depicted**: no bottles, no cups, no pouring, no drinking, no
  mouths, no tavern interior. Shot 6 puts the hall distant, silhouetted and
  defocused, and carries the whole beat on the ink diagram. Block 7 lands on the
  chapter's own moral — *when the wine goes out of him, the regret arrives* — rather
  than on the bravado, which is exactly the slate's instruction for this chapter.
  **The bravado is never the last word in the cut.**
- **Supernatural hooks explicitly debunked by the payoff.** The hook is not
  supernatural; it is a real historical claim, and it is presented as one. Block 1
  says a physician *answered with an organ*, and blocks 3–6 then show the actual
  reasoning rather than withholding it as mystery. The title *The Organ of Courage*
  promises the educational payoff the cut delivers, and the thumbnail must do the
  same — a gallbladder diagram, not a shock frame.
- **Health content stays philosophical narrative.** Nothing here instructs. The
  anatomy is reported as what the text claims, in the text's own terms, and the
  longform carries the explicit correction. **One hedge is load-bearing and is
  flagged below.**
- **General audience, not "made for kids."** Self-certify accordingly. The alcohol
  material makes this unambiguous, and **Lei-Gong — the child-coded character — is
  deliberately absent from this cut**, so no child character appears anywhere near
  the wine passage. That is a hard rule for this chapter and it also holds in the
  longform, where he is off screen for the whole of Act IV.
- **Citation accuracy.** *Lingshu fifty* is spoken in block 7 and must appear on the
  title card in the same form. **Never "Chapter 50"** — Suwen 50 is a different
  chapter. Both books run to eighty-one separately numbered chapters.

**One hedge moves off the narrator, and this is the cut's one such decision.**
`CLAUDE.md` makes narrator-only the default for a trailer precisely because Arthur
carries every compliance hedge. Here **Vesper carries blocks 4 and 6** — the shape
of rage and the wine mechanism — which are the two most assertive physiological
claims in the cut. The mitigation is that she is voicing **Shao Yu quoting his own
text**, and Arthur brackets her on both sides: block 3 frames the whole passage as
*"the answer he received"*, and block 7 attributes the echo back to the text rather
than to the world. **Arthur retains the entire disclaimer.** Blocks 4 and 6 are the
two to re-audit if any line in this cut changes.

**The constitutional colour material is not in this cut at all.** The slate flags
§2's mapping of disease susceptibility onto complexion colours — including the claim
that dark-skinned people with thick skin are unaffected by seasonal winds — as
material that reads as a racial claim out of context, and recommends either an
explicit gloss or skipping it. **A trailer cannot gloss anything**, so it is simply
absent here. The longform handles it head-on in a bounded, liftable act beat; see
that document's compliance notes.

## Runtime levers

**As written: 8 blocks, 80 seconds.** The `CLAUDE.md` trailer band is 30–90 seconds,
so this sits near the top of it. Blocks are the unit that costs money — each one
dropped saves ~10 credits at draft tier and ~25 at full.

**To cut to 60 seconds (6 blocks, ~85 credits):** drop **blocks 3 and 5**, and move
their content into block 4's opening clause. The cut then runs hook → question →
rage → wine → echo → card. **This is the cheapest real option and it costs the
duel.** The brave-versus-timid split composition is the slate's named structural
form for this chapter, and at 6 blocks the trailer only ever shows one body, so the
block 7 echo lands as a statement rather than as a recognition.

**To cut to 70 seconds (7 blocks, ~95 credits):** drop **block 2** and open on
Arthur straight through to the anatomy. Cheaper than the above and it keeps both
bodies — but the cut then has no character voice until Vesper in block 4, and Fan-di
is the only thing in the trailer that establishes stakes rather than mechanism.
**Prefer this over the 60-second version if a cut is needed.**

**To stretch to 90 seconds (9 blocks, ~115 credits):** add one Vesper block between
5 and 6, carrying §5's 脅下空 — *empty beneath the flanks* — and 故不能久怒, *he
cannot stay angry for long*. That is the chapter's most quietly devastating line and
it is currently compressed into block 5's tail. **This is the best version of the
trailer if the budget allows it**, and it is the only lever here that adds rather
than trades.

**Do not stretch past 9 blocks.** The remaining material — the pain 2×2, 酒悖, the
gall etymology — is the longform's payload, and spending it here leaves the episode
with nothing withheld.

**Blocks 1 and 8 are not droppable.** Block 1 carries the mandated history
lower-third inside the first ten seconds; block 8 is the mandated end disclaimer
card, which needs its own block because the pipeline assembles in fixed 10s windows.
