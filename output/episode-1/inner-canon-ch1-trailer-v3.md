# The Emperor's Inner Canon — Chapter 1 Trailer, longform companion (70 seconds)

**上古天真論篇第一 · Sevens and Eights**

**Draft render (480×854, 9:16 vertical, 70s, MP4):** *assets complete, assembly
blocked.* All 7 clips and all 7 voice takes are generated and paid for — job IDs
in the production record — but `explainer_video` was unavailable from this session
when the run reached step 4, so the cut has not been assembled. **Nothing needs
regenerating; the run resumes at assembly.** See *Reproduction notes*.

A seventy-second vertical trailer for Chapter 1, written as the companion teaser
to `inner-canon-ch1-longform-v1.md`.

**This is a third Chapter 1 trailer, and it is deliberately not a replacement.**
`-trailer-v1` (80s) and `-trailer-v2` (60s) are both built on the chapter's
*opening sentence* — the claim that the ancients passed a hundred years, and that
the text flags it as hearsay. Both shipped as drafts. This cut takes the chapter's
other major content, the **sevens-and-eights life map**, which v1 and v2 do not
touch at all. The two theses do not compete: v1/v2 sell *the canon contradicts
itself on page one*; v3 sells *the canon contains a schedule for your body*.

If only one Chapter 1 teaser is wanted, v1 remains the stronger standalone. v3
exists because a longform needs a trailer that previews the longform.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — `explainer_video` takes exactly one audio per block. The
speaker is named in the beat column, because `build_subtitles.js` parses the
narration table as exactly three columns and a fourth leaks into the captions.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the setup | Two thousand years ago, a physician wrote down when a body fails. Year by year. Not a prophecy — a table, ruled in ink. |
| 2 | Fan-di (Xavier) — the table | Women in sevens. Men in eights. At seven the teeth change. At twenty-eight the body is at its peak. At thirty-five, it says, the face begins to go. |
| 3 | Lei-Gong (Zane) — the objection | It's wrong. Bodies don't keep appointments. |
| 4 | Dr-Qi (Vesper) — the turn | It is wrong. And it is close. Puberty in the teens, the peak in the twenties, the decline from the mid-thirties — the shape is right. The arithmetic is invented. |
| 5 | Arthur (V.O.) — how they did it | They had no instruments. No statistics. No way to follow anyone through time. They watched, for centuries, and they wrote it down. |
| 6 | Arthur (V.O.) — the withhold / title | So how much did they get right, with nothing but their own eyes? The Emperor's Inner Canon. Chapter One — The Body Keeps a Calendar. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Voices are the permanent series cast: Arthur, Xavier, Vesper, Zane — all
`seed_audio` presets at `speech_rate` 55.

### Line lengths, and the one unmeasured voice

Sized from the words/second measured on the Chapter 1 trailer run:

| Voice | Measured | Block | Words | Predicted |
|---|---|---|---|---|
| Arthur | 3.73 w/s | 1, 5, 6 | 23, 23, 24 | ~6.2s each |
| Xavier | 4.55 w/s | 2 | 30 | ~6.6s |
| Vesper | 4.42 w/s | 4 | 30 | ~6.8s |
| Zane | **unmeasured at length** | 3 | 7 | ~2.8s, deliberate |

**Treat every figure as a first draft.** The Chapter 1 run showed that word count
alone does not predict take length — sentence structure does. A 32-word line as a
single em-dash sentence came back at 10.78s, over the block; the same content as
three short sentences came back at 6.91s. Blocks 2, 4 and 5 above are deliberately
written in short sentences for that reason. Measure block 2 first — it is the
longest and the most exposed.

**Block 3 is deliberately short.** A ~2.8s take centred in a fixed 10s window
leaves roughly 3.6s of silence either side of Lei-Gong's objection. That silence is
the beat, exactly as in v1's block 3, and padding the line to fill the window would
destroy it. Record it as a chosen exception, not a defect. Zane still has no
measured rate at length; this line is short enough that it does not matter here,
but the longform gives him real dialogue and he must be measured before that.

## Shot list

1. **The setup** — extreme close on a blank bamboo scroll being ruled into columns
   by an unseen brush, warm lamplight. The table forming from nothing. No figures.
   *History lower-third sits here.*
2. **The table** — Fan-di at the low lacquer table, gold robe, **fan snapped open**,
   reading down a ruled column with visible delight. Warm light, shallow depth.
3. **The objection** — hard cut. Lei-Gong mid-hop, cinnabar red, spark motes, caught
   mid-word. Background drops to flat charcoal, everything stills. Held long.
4. **The turn** — Dr-Qi, blue cheongsam, open scroll held like a tablet, completely
   still. She does not lean in. Beside her, ink arcs rising and thinning.
5. **How they did it** — no people. The seven-and-eight arcs drawn one at a time by
   an unseen brush, then the same curve drawn many times over until it thickens
   into a band. Purely calligraphic.
6. **The withhold / title** — the ruled columns receding into depth, the arcs faint
   beneath. Resolves to the series title card. Hard cut to black on the last
   syllable.
7. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added.

**No bodies and no figures in shots 1, 5, 6 or 7**, and none anywhere in the
sevens-and-eights material — the life map is carried entirely by brushwork. See
the compliance notes.

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate is open.**

### Preflight

Not yet run — `balance` and `get_cost` must be called live before any generation,
and the figures below are the skill's snapshot, not an API.

| Item | Draft 480p | Full 720p |
|---|---|---|
| 7 clips (`seedance_2_0_mini`, 10s, 9:16) | 70 | 175 |
| Style key | 0 — reuses `4b6f7106-67da-4d1a-a553-c58ba90ac43f` | — |
| 7 voice takes | ~4.2 | reused |
| Subtitles | **0 — not burned server-side** | 0 |
| Assembly | free | free |
| **Total** | **~74** | **~175** |

The style key is **already generated** and needs no landscape sibling — this is a
9:16 cut, so it reuses the Chapter 1 vertical key directly. That is the whole
saving against a new chapter.

### Step-0 gate — run 2026-08-04

`balance` **938.2 credits** (ultra). `get_cost` on `seedance_2_0_mini`, 10s, 9:16,
480p: **10 credits/clip**, matching the skill's table. Draft tier confirmed by the
user. Estimated ~74; see *Credit spend*.

### Style key

- **Style key** — `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (`nano_banana_pro`,
  768×1376, 9:16), **reused from `inner-canon-ch1-trailer-v1.md`, not
  regenerated.** Attached as `image_references` on all 7 clips. This is the whole
  saving against a new chapter: the lineage entry already exists (group shot → ch2
  → ch3 → ch5 → ch8 → ch1) and this cut adds nothing to it.

### Clips

- **Clips** (`seedance_2_0_mini`, **Draft tier 480p**, 10s, 9:16 **480×854**,
  `generate_audio: false`, style key on each): block 1
  `31da523d-eb4a-408f-b7fd-fb1d3220f99f`, block 2
  `31d226e9-b7a7-4cd6-ba26-62e92a56c9ea`, block 3
  `48f2cf85-6924-473e-ae26-0b9a9ce77604`, block 4
  `31b3eb43-11ea-4386-b2e4-ba5e9b4802e1`, block 5
  `c6854eb5-405a-4be0-9041-b0b7f1a5898b`, block 6
  `2a9678c6-dcdc-4eb3-978b-e3e9c956c758`, block 7
  `90b9492a-a71a-4a48-90f5-c0ec31797e0c`.

All seven returned **480×854 vertical on the first pass**. Block 1 was generated
alone and its dimensions checked before the other six were committed, per the
skill. `IN THE DARK` was pre-declined on every clip; **no preset swap was offered
on any of the seven**, including the two dark-field prompts — the same result as
Chapter 1, so that is now two cuts of evidence on `seedance_2_0_mini` rather than
one.

### Voiceover

- **Voiceover** (`seed_audio`, presets **Arthur** `30fc8796-ceb6-4a66-b3a7-4a145ef7f346`, **Xavier** `43173c95-3ec8-446a-a162-6504332c578b`, **Vesper** `c3204739-4084-41a3-9dc5-c805b307ec18`, **Zane** `9ddbff06-a984-4c0d-b641-4d8ca846bf60`, speech_rate 55): block 1 `d0f1422d-fb8d-46e4-8f9d-c81640fc64b9` (6.5s), block 2 `a053c5e7-9b42-4af7-8c04-78a6cc0e4c1d` (8.1s), block 3 `51f88452-623d-4aed-ada9-a48e7352cb48` (2.4s), block 4 `324a7c85-0f23-4e11-aaa1-ade1117333eb` (7.9s), block 5 `bd8fd04f-b474-4571-9062-a8a8a677a573` (8.0s), block 6 `3144cb4c-4ae7-4a0f-9881-26104558b2a8` (7.1s), block 7 `e9ab2459-9dc6-433b-993a-e55b6a26f5f8` (4.4s).

**No take was re-recorded.** Every one is inside the 10s block, so none will be
pitch-shifted at assembly. Blocks 3 and 7 are the deliberate short takes. Block 2
at 8.14s is **marginally over the 6–8s target** and was accepted rather than
re-cut — it sits where Chapter 1's block 7 shipped (8.03s) and has 1.86s of
headroom against the hard limit. Blocks 4 and 5 (7.93s, 7.98s) sit at the top of
the window. See the sentence-count finding below: this cut ran long across the
board, and the next one should be written shorter.

### Assembly

**BLOCKED — not run.** `explainer_video` was not available from this session at
step 4; it did not resolve under a direct name lookup or a keyword search, while
other tools from the same server loaded normally in the same call. Every input it
needs is listed above and is unaffected.

To finish, call `explainer_video` with **`width: 480, height: 854`**, the
`subtitles` parameter **omitted**, and these seven items in order:

| # | video | audio |
|---|---|---|
| 1 | `31da523d-eb4a-408f-b7fd-fb1d3220f99f` | `d0f1422d-fb8d-46e4-8f9d-c81640fc64b9` |
| 2 | `31d226e9-b7a7-4cd6-ba26-62e92a56c9ea` | `a053c5e7-9b42-4af7-8c04-78a6cc0e4c1d` |
| 3 | `48f2cf85-6924-473e-ae26-0b9a9ce77604` | `51f88452-623d-4aed-ada9-a48e7352cb48` |
| 4 | `31b3eb43-11ea-4386-b2e4-ba5e9b4802e1` | `324a7c85-0f23-4e11-aaa1-ade1117333eb` |
| 5 | `c6854eb5-405a-4be0-9041-b0b7f1a5898b` | `bd8fd04f-b474-4571-9062-a8a8a677a573` |
| 6 | `2a9678c6-dcdc-4eb3-978b-e3e9c956c758` | `3144cb4c-4ae7-4a0f-9881-26104558b2a8` |
| 7 | `90b9492a-a71a-4a48-90f5-c0ec31797e0c` | `e9ab2459-9dc6-433b-993a-e55b6a26f5f8` |

Omitting `subtitles` is deliberate and is the standing default for trailers: block
7 carries the mandated disclaimer string, which is 58 characters and cannot fit a
9:16 caption at any font, so any cut with the end card overflows the server-burned
captions by construction. Captions come from the tracked sidecar through libass.

### Credit spend

| Item | Credits |
|---|---|
| Style key | **0** — reused from v1 |
| 7 clips — Draft 480p | 70 |
| 7 voice takes | ~4.2 |
| Subtitles | **0** — not burned server-side |
| Assembly | free (not yet run) |
| **Total spent** | **~74** |

Against the ~74 estimated at the gate. Balance before the run: **938.2**.

### Reproduction notes

- **Assembly is the only outstanding step**, and the tool was unavailable rather
  than the inputs being wrong. Resume at the table above; regenerate nothing.
- **Every take ran longer than predicted, and the cause is measurable.** Sized off
  the words/second from Chapter 1, every block came in high — the two 23–24 word
  narrator lines predicted at ~6.2s delivered 6.5s, 7.1s and 8.0s. Word count did
  not vary; **sentence count did**, and it is the better predictor:

  | Take | Words | Sentences | Delivered |
  |---|---|---|---|
  | ch1 v1 block 1 | 24 | 2 | 6.53s |
  | **v3 block 6** | 24 | 3 | **7.08s** |
  | **v3 block 5** | 23 | 4 | **7.98s** |

  Same voice, same rate, near-identical word counts. **Each additional sentence
  boundary costs roughly 0.55–0.7s**, and that dominates the word count over the
  range a 10s block allows.

  This completes the Chapter 1 finding rather than contradicting it. Chapter 1
  learned that one long sentence hinged on an em-dash runs very long (32 words →
  10.78s); this cut shows the opposite extreme also runs long. The lever is not
  "shorter sentences" but **two to three sentences per block** — few enough to
  avoid pause accumulation, joined enough to avoid one long unbroken clause.
  Written for captions, this cut went to four and five sentences and paid for it.
- **Zane still has no measured rate at length.** Block 3 is 7 words. The longform
  gives him real dialogue and this run did not clear that risk.
- **The sidecar cannot be built until assembly** — `build_subtitles.js` needs the
  per-block take durations, which now exist above, but the cut itself does not.
  Build it as part of the finishing steps.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, within the
  first 10 seconds. Sits on shot 1.
- **End disclaimer card** — the disclaimer verbatim, over block 7, held long enough
  to read. Block 7 renders as a plain black plate.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only. Out entirely across block 3.

### Finishing steps — run these on the downloaded MP4

This cut's own numbers; do not copy them from v1 or v2, whose block counts and
timings differ.

**1. Check the captions before recording anything.**

```
node scripts/check_caption_fit.js output/episode-1/inner-canon-ch1-trailer-v3.md
```

Block 7's clause is reported as a known exception — the mandated disclaimer string,
which is not to be reworded. Everything else must pass before takes are generated,
because a fix is free now and ~0.6 credits per block afterwards.

**2. After the voiceover exists, build and burn.**

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v3.md
```

On a **copy** of the `.srt`, delete the final cues covering **block 7** (from
`00:01:00,000`) so the disclaimer does not appear as a bottom-third caption *and*
on the card in step 4. Then burn with the printed `ffmpeg` command, adding
`scale=720:1280,` as the first filter if burning onto a 480p draft — libass takes
its resolution from the video, and the sidecar is computed for 720×1280. Anton must
be installed locally (`fc-list | grep -i anton`).

**3. History lower-third** — fade in ~0:01, hold to ~0:08. Anchor **above the
caption band**: captions sit bottom-centre with a 150px margin and can run two
lines, occupying roughly y=1000–1130 at 720×1280, so place it around y≈880 or
top-left.

**4. End card — 60:00 to 70:00** (block 7, the black plate). Bring the text up at
the block start and hold to the end. Centred:

> A dramatized adaptation of a classical philosophical text. Not medical advice.
>
> Written & edited by Joshua Chin

Disclaimer verbatim. Both lines also go in the description.

**5. Music.** Licensed guqin, ducked ~12–15 dB under the voiceover.

- **Out entirely across block 3, 20:00–30:00** — the ~3.6s of silence either side of
  Lei-Gong's objection is the beat.
- **End of block 6, at 60:00** — the hard cut to black. Let it land clean.
- **Under the end card** — fade to nothing before the cut ends.

## Compliance notes (YouTube)

- **Disclaimer** — repo string verbatim: blockquoted above, spoken in block 7, on
  screen as the end card, and in the description.
- **Mortality / ageing, reflective and non-graphic** — the entire life map is
  carried by **ink arcs on paper**. No bodies, no figures, in any shot that touches
  the sevens and eights. Block 2's *"the face begins to go"* is spoken over Fan-di
  reading a scroll, never over a depiction of ageing.
- **Fertility content** — the source passage defines the sevens and eights by the
  arrival and exhaustion of 天癸 *tian gui*, the capacity to bear children. **This
  trailer deliberately omits that**, keeping to teeth, peak and decline. Not because
  it is unsafe — the longform handles it as historical physiology — but because a
  70-second teaser cannot carry the framing that makes it clearly historical rather
  than instructional, and an unframed fertility claim in a trailer is exactly the
  thing the audit exists to catch.
- **Indulgence / alcohol** — not present in this cut.
- **Supernatural hook, explicitly debunked** — no supernatural claim is made. The
  hook is a *withheld measurement* — how much did they get right? — and the debunk
  is already inside the trailer: Dr-Qi says the arithmetic is invented, in block 4,
  before the withhold. The trailer states its own correction rather than deferring
  it. Titles and thumbnails must read as **a chart being questioned**, not as a
  promise about anyone's body.
- **Health content stays philosophical, never instruction** — no dosage, regimen,
  diagnosis or benefit claim. Every physiological statement is attributed to the
  text (*"it says"*, block 2) and immediately audited (block 4). The trailer never
  claims the schedule applies to the viewer; block 4's *"the arithmetic is
  invented"* explicitly denies it.
- **Hedge allocation** — three characters speak. The flat objection (*"It's wrong"*)
  sits with **Lei-Gong**, block 3, and the correction that qualifies it sits with
  **Dr-Qi**, block 4 — so unlike v2, the contradiction is narrowed *within the
  trailer* rather than left standing. **Arthur retains every load-bearing claim**:
  the framing (block 1), the historical method (block 5), and the educational
  payoff and title (block 6). No compliance hedge rests on a character voice.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — **outstanding**. No clip prompts exist yet. When they
  are written, audit before generating, per `CLAUDE.md`. The area to watch is shots
  4 and 5: keep the life-map material calligraphic, and do not let a prompt drift
  toward depicting bodies at different ages.
- **Banned terms** — no *longevity*, *live to 100*, *ancient secret* or *anti-aging*
  in narration, title or thumbnail. **Thumbnail direction:** the ruled ink columns
  of the sevens and eights, empty of figures, with one arc visibly diverging from
  the ruled line. It reads as *objection*, not as promise. No aged face, no
  hundred-year claim, no herb.

## Runtime levers

**Cut to 0:50** — drop blocks 1 and 5. Runs 2 → 3 → 4 → 6 → 7. Opens cold on
Fan-di reading the table, which is abrupt but moves Lei-Gong's objection to **0:10**
— the retention cliff the source script wanted and none of v1, v2 or the full v3
achieves. The cost is block 5, which is the episode's actual thesis (they had
nothing but their eyes), so this version sells the table and not the achievement.

**Cut to 0:40** — blocks 2 → 3 → 4 → 7. Loses the title beat entirely; only worth
it as a platform-specific variant where the title is in the caption furniture.

**Stretch to 1:30** — add two blocks after 4: the male eights read out in full by
Fan-di, and Dr-Qi on the hard ceilings the text sets at seven sevens and eight
eights. Both are Chapter 1 material, both are in the longform's Act III already,
and neither needs a new voice.

**Block 7 is not a lever.** The end disclaimer card is a standing `CLAUDE.md`
requirement on every cut.
