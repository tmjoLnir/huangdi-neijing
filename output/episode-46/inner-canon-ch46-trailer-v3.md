# The Emperor's Inner Canon — Chapter 46 Trailer v3 (70 seconds)

**靈樞·營衛生會第十八 · The Night Watch**

**Framing:** history of ideas. Not health content.

**Draft render (480×854 → assembler output ~496×864, 9:16 vertical, 70s, MP4):**
*not run — pre-render.*
**Final render (720p tier):** *not run.*

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
| 2 | Arthur (V.O.) — the hour has a name | The book names the hour. It calls it the joining of the dark — the moment the ten thousand people, all of them, lie down at once, on the same reckoning as heaven and earth. |
| 3 | Fan-di (Xavier) — the deflection | Then the count is a formality, physician. Send the runners anyway. I want the tally in my hand by dawn. And while we wait — a question of natural philosophy, nothing more. Why do the old not sleep? |
| 4 | Dr-Qi (Vesper) — the mechanism | In the vigorous the roads run clear, and the two currents keep their schedule. In the old the roads run rough. The nutritive thins, and the guard turns and campaigns inward. That is the text's answer, not a physician's. |
| 5 | Arthur (V.O.) — both ends | The young get both halves — keen by day, asleep by night. The old lose both. In this model, ageing does not move your sleep to another hour. It takes one end, then the other. |
| 6 | Arthur (V.O.) — the withhold / title | The runners came back before dawn, with a number. It was wrong by exactly one house, and everyone at court knew which one. The Emperor's Inner Canon. Ling Shu eighteen — The Night Watch. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. We present the Inner Canon as history and philosophy, and we say plainly, on screen, where its mechanism does not survive the evidence. |

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

Counted off the parsed narration table, not by hand. Predicted speech at the measured
rates runs **9.16–9.86s** — deliberately mid-window rather than at the floor, because
the ceiling is the edge no re-roll saves.

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

**Status: pre-render. Nothing generated. The step-0 gate has not been run.**
The figures below are a planning preflight, not a priced gate — call `balance` and
`get_cost` live before spending anything.

### Cost preflight — re-price before use

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

### Style key

**Reuse the ch46 vertical key** once it exists — chained off the ch1 head
`4b6f7106-67da-4d1a-a553-c58ba90ac43f`, motif described in
`inner-canon-ch46-trailer-v1.md`. v1, v2 and v3 are the same chapter and must share
a look; a second key would fork the chapter's style for no reason.

### Clips / Voiceover / Assembly

*Not generated.* Model and tier come from the step-0 gate.

- **Clips** — record model, tier, per-block job ID, duration and *returned*
  resolution. **Generate block 1 alone and check its returned dimensions before
  committing the other six.**
- **Voiceover** — `seed_audio` presets at `speech_rate` 55: **Arthur** on blocks 1,
  2, 5, 6, 7; **Xavier** on 3; **Vesper** on 4. Record each take's job ID, file
  duration *and* the assembler's measured speech figure, **to 3 decimal places** —
  ch1 v5 lost an assembly to an "8.50s pass" that was 8.497s.
- **Assembly** — `sandbox_exec` → `assemble_final.sh`, `--blocks 7`,
  `--manifest pairs.txt`, `--clip-seconds` left at its default. **Run it
  foreground**: ch1 v5 lost an entire run to `background: true` when the transport
  call timed out and the ephemeral sandbox was reclaimed with the render still on
  its disk. A 7-block assembly finishes inside the 120s foreground budget.
- **No assembly job ID exists to record.** Capture the flags, the manifest and the
  exported `media_id` instead, plus any WARNs accepted rather than fixed.

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

**6. Music.** Guqin, licensed, ducked ~12–15 dB under the voiceover. **Out from the
block 6 cut at 1:00**, so the card plays dry. `--music-vol 0.20` (≈ −14 dB) lands in
range, but the flag mixes one continuous bed with **no dropout window**, so the
1:00 cut needs a hand mix either way.

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
