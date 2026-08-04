# The Emperor's Inner Canon — Chapter 1 Trailer v4 (70 seconds)

**上古天真論篇第一 · Whose Fault**

**Final video (720×1280, 9:16 vertical, 70s, MP4):** *not produced — script only.
Step-0 gate open; nothing generated.*

Companion teaser to `inner-canon-ch1-longform-v2.md`, previewing that episode's
Act IV. Full source translation: `suwen-ch1-translation.md`.

**Fourth Chapter 1 trailer, and the theses do not overlap.** v1 (80s) and v2 (60s)
sell *the canon's opening sentence is hearsay*; v3 (70s) sells *the canon contains
a schedule for your body*; v4 sells **the canon blames you**. Each previews a
different part of the chapter, and v4 is the only one that goes at the text's moral
argument. v1 and v3 have rendered drafts; v2 is a re-assembly of v1's assets.

If only one Chapter 1 teaser ships, v1 is still the strongest standalone. v4 exists
because longform v2 needs a trailer that previews longform v2.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## Narration (per 10s block)

One speaker per block — `explainer_video` takes exactly one audio per block. The
speaker sits in the beat column because `build_subtitles.js` parses the narration
table as exactly three columns and a fourth leaks into the captions.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the setup | On the first page of Chinese medicine, there is an accusation. It says you wear out early, and that it is your own doing. |
| 2 | Fan-di (Xavier) — the verdict | They take wine for water. They take the reckless for the ordinary. And so, the text says, they are finished at fifty. |
| 3 | Lei-Gong (Zane) — the objection | That's not medicine. That's blame. |
| 4 | Dr-Qi (Vesper) — the turn | He is right, and he is early. This is a moral document, not a medical one. The number attached to it is invented. |
| 5 | Arthur (V.O.) — the correction | They did not die young from bad habits. They died of infection, of famine, of childbirth, of injuries that nobody could treat. |
| 6 | Arthur (V.O.) — the withhold / title | So why keep a verdict, for two thousand years, that nobody could support? The Emperor's Inner Canon. Chapter One — What You Were Given. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. |

Cast: Arthur, Xavier, Vesper, Zane — `seed_audio` presets at `speech_rate` 55.

### Line lengths — written to the v3 measurement

The v3 trailer measured **~0.55–0.7s per additional sentence boundary**,
independent of word count, and overshot on four of seven blocks because it was
written in four- and five-sentence lines to satisfy the caption budget. **This
script is written to two-to-three sentences per block**, which is the target the
skill now carries.

| Voice | Block | Words | Sentences | Predicted |
|---|---|---|---|---|
| Arthur | 1 | 24 | 2 | ~6.5s |
| Xavier | 2 | 22 | 3 | ~6.5s |
| Zane | 3 | 5 | 2 | ~2.4s, deliberate |
| Vesper | 4 | 23 | 3 | ~6.3s |
| Arthur | 5 | 22 | 2 | ~6.2s |
| Arthur | 6 | 23 | 3 | ~6.8s |
| Arthur | 7 | 11 | 2 | ~4.4s, deliberate |

**Measure block 2 first.** Xavier is the voice that overshot on Chapter 1 and again
on v3. **Zane still has no measured rate at length** — block 3 is 5 words, so this
cut does not expose it, but longform v2 does.

**Block 3 is deliberately short.** A ~2.4s take centred in a fixed 10s window leaves
roughly 3.8s of silence either side of the objection. That silence is the beat, as
in v1 and v3. Record it as a chosen exception, not a defect.

## Shot list

1. **The setup** — extreme close on a bamboo scroll open under a lamp, a single
   column of brush strokes catching the light. Slow push in. No figures.
   *History lower-third sits here.*
2. **The verdict** — Fan-di at the low lacquer table, gold robe, **fan snapped
   open**, reading aloud with a flat, unamused delivery. Warm light.
3. **The objection** — hard cut. Lei-Gong mid-hop, cinnabar red, spark motes, caught
   mid-word. Background drops to flat charcoal, everything stills. Held long.
4. **The turn** — Dr-Qi, blue cheongsam, open scroll held like a tablet, completely
   still. She does not lean in.
5. **The correction** — no people. A dry riverbed in ink; then a single ruled line
   of ink marks, evenly spaced, most of them stopping well short of the end.
6. **The withhold / title** — one scroll splitting into a dozen scrolls of visibly
   different ages, fanning back into depth. Resolves to the series title card. Hard
   cut to black on the last syllable.
7. **Disclaimer card** — black plate, faint ink-grain texture. Text hand-added.

**No bodies and no figures in shots 1, 5, 6 or 7.** Shot 5 carries the mortality
beat and is deliberately abstract — marks on a rule, not people.

## Production record (Higgsfield)

**Status: script only. Nothing generated. Step-0 gate open.**

### Preflight

Not yet run — call `balance` and `get_cost` live before generating. Snapshot
figures, for planning only:

| Item | Draft 480p | Full 720p |
|---|---|---|
| 7 clips (`seedance_2_0_mini`, 10s, 9:16) | 70 | 175 |
| Style key | 0 — reuses `4b6f7106-67da-4d1a-a553-c58ba90ac43f` | — |
| 7 voice takes | ~4.2 | reused |
| Subtitles | **0 — not burned server-side** | 0 |
| **Total** | **~74** | **~175** |

Last measured balance: **862.6**. The v3 run came in at **75.6** against a ~74
estimate, so treat ~76 as the realistic draft figure here.

### Style key, clips, voiceover, assembly

**Pending.** Style key reuses `4b6f7106-67da-4d1a-a553-c58ba90ac43f` (768×1376) as
`image_references` on every clip. Clips `seedance_2_0_mini` at the confirmed tier,
10s, `aspect_ratio: "9:16"` **and** "vertical 9:16 portrait framing" in every
prompt — the double declaration has now held on this model across two cuts.
Pre-decline `IN THE DARK` (`24bae836-2c4a-48e0-89b6-49fcc0b21612`); it has not been
offered on either cut, but it is free.

**Assemble with `subtitles` omitted.** Standing default for trailers: block 7 carries
the mandated disclaimer string, 58 characters, which cannot fit a 9:16 caption at
any font — so any cut with the end card overflows the server-burned captions by
construction.

**`explainer_video` may be unavailable.** It was withdrawn mid-run on v3 and did not
return across three retries. If still gone, assemble with the `ffmpeg` pattern in
`assemble-ch1-trailer-v3.sh`; front pad per block is `(10 − take) / 2`.

### Reproduction notes

- **Two-to-three sentences per block is the target**, not "short sentences." v3
  proved the short end overshoots as reliably as the long end.
- **Caption pressure is largely off** on a cut assembled without server-side
  subtitles — the sidecar splits long clauses across cues by itself. Write for the
  take window first. This script still passes `check_caption_fit.js`, but that is a
  bonus rather than the constraint it was on v3.
- **The sidecar builds after the voiceover**, not before; `check_caption_fit.js` runs
  now, on the narration table.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, within the
  first 10 seconds. Shot 1.
- **End disclaimer card** — disclaimer verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description.
- **Music** — licensed guqin only. Out entirely across block 3.

### Finishing steps

**1. Check captions before recording.**

```
node scripts/check_caption_fit.js output/episode-1/inner-canon-ch1-trailer-v4.md
```

Block 7's clause is reported as a known exception — the mandated disclaimer string,
not to be reworded.

**2. After the voiceover, build and burn.**

```
node scripts/build_subtitles.js output/episode-1/inner-canon-ch1-trailer-v4.md
```

On a **copy** of the `.srt`, delete the final cues covering **block 7** (from
`00:01:00,000`) so the disclaimer is not both a caption and a card. Burn with the
printed `ffmpeg` command, adding `scale=720:1280,` as the first filter if burning
onto a 480p draft. Anton must be installed locally.

**3. History lower-third** — in ~0:01, hold to ~0:08, anchored above the caption band
(around y≈880 at 720×1280).

**4. End card — 60:00 to 70:00.** Disclaimer verbatim, credit beneath, both also in
the description.

**5. Music.** Guqin, ducked ~12–15 dB. **Out entirely across block 3 (20:00–30:00)** —
the silence around the objection is the beat. Out at the block 6 cut to black.

## Compliance notes (YouTube)

This cut leads with an accusation, so the audit turns on how fast it is corrected.

- **Disclaimer** — repo string verbatim: blockquoted above, spoken in block 7, on
  screen as the end card, in the description.
- **Health-shaming — the central risk, and it is answered inside the trailer.**
  Blocks 1 and 2 state the chapter's verdict that people wear out early through
  their own conduct. **The trailer does not leave that standing.** Block 3 names it
  as blame, block 4 says the number is invented, and block 5 gives the actual
  historical causes. The correction occupies three of the six content blocks and
  arrives at **0:20**. A cut that dropped blocks 4 or 5 would be non-compliant —
  see the runtime levers, which forbid exactly that.
- **Mortality, reflective and non-graphic** — block 5 is the mortality beat and is a
  dry riverbed and marks on a ruled line. **No bodies, no figures.**
- **Indulgence / alcohol, cautionary only** — *"they take wine for water"* is the
  source's own cautionary line, quoted as the text's verdict and immediately
  disputed. Shot 2 is Fan-di reading; **no vessels, no pouring, no drinking appear
  in this cut at all.**
- **Fertility content** — not present. The sevens and eights are v3's and the
  longform's material.
- **Supernatural hook** — none made. The hook is a withheld historiographic question
  (*why keep a verdict nobody could support?*), and the trailer's own correction is
  delivered before the withhold, not deferred to the episode.
- **Health content stays philosophical** — no dosage, regimen, diagnosis or benefit
  claim. Every claim is attributed (*"the text says"*, block 2) and audited (blocks
  4–5).
- **Hedge allocation** — three characters speak. Lei-Gong carries the flat objection
  and Dr-Qi the qualification, so the contradiction is narrowed within the trailer.
  **Arthur retains every load-bearing claim**: the framing (1), the historical
  correction (5), and the payoff and title (6). No compliance hedge rests on a
  character voice.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit — outstanding.** No clip prompts exist yet. Watch shot 5:
  keep the mortality beat abstract, and do not let a prompt drift toward depicting
  the dying or the dead.
- **Banned terms** — none in narration, title or thumbnail. **Thumbnail direction:**
  the ruled line of ink marks stopping short, with no figure anywhere. It reads as
  *a verdict being questioned*. No aged face, no herb, no hundred-year claim.

## Runtime levers

**Cut to 0:50** — drop blocks 1 and 6. Runs 2 → 3 → 4 → 5 → 7. Opens cold on the
verdict, which is abrupt but puts the objection at **0:10** — the retention cliff
none of v1–v3 hits. Costs the title beat, so only worth it where the title sits in
caption furniture.

**Cut to 0:40** — blocks 1 → 2 → 3 → 7 **is not permitted.** It would ship the
accusation with no correction, which fails the health-shaming audit above. If 40
seconds is required, use 2 → 3 → 4 → 7 and lose the setup instead.

**Stretch to 1:30** — add two blocks after 5: the five habits read plainly by
Fan-di, and Dr-Qi on regularity being a harder ask than a secret. Both are longform
v2 Act IV material and need no new voices.

**Blocks 4, 5 and 7 are not levers.** Four and five carry the correction that makes
this cut compliant; seven is the standing end-card requirement.
