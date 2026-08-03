# The Emperor's Inner Canon — Chapter 1 Trailer, longform companion (70 seconds)

**上古天真論篇第一 · Sevens and Eights**

**Final video (720×1280, 9:16 vertical, 70s, MP4):** *not produced — script only.
The step-0 gate is open; nothing has been generated.*

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

### Style key, clips, voiceover, assembly

**Pending.** Style key reuses `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (768×1376,
`nano_banana_pro`), attached as `image_references` on every clip. Clips
`seedance_2_0_mini` at the tier the user confirms, 10s, `aspect_ratio: "9:16"`
**and** "vertical 9:16 portrait framing" written into every prompt — the double
declaration held on this model for Chapter 1 and should not be dropped.
Pre-decline `IN THE DARK` (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on every clip;
it was not offered on any Chapter 1 clip, including the dark-field prompts, but
the pre-decline is free.

**Assemble with the `subtitles` parameter omitted**, as Chapter 1's v1 and v2 now
do. Captions come from the tracked sidecar through libass. This is the standing
default for trailers: block 7 carries the mandated disclaimer string, which is 58
characters and cannot fit a 9:16 caption at any font, so any cut with the end card
overflows the server-burned captions by construction.

### Reproduction notes

- **Zane has no measured rate at length.** Block 3 is short enough not to expose
  it. The longform does expose it. Measure him before writing that script's
  dialogue to a word count.
- **Measure block 2 before recording the rest.** It is the longest line and Xavier
  is the voice that overshot on Chapter 1.
- **The sidecar is not built yet** — `build_subtitles.js` needs the per-block take
  durations from the production record, so it runs after the voiceover, not before.
  `check_caption_fit.js` runs *now*, on the narration table, and does not need
  them.

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
