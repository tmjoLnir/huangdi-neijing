# The Emperor's Inner Canon — Suwen 13 Trailer v1 (70 seconds)

**素問·移精變氣論第十三 · When Medicine Stopped Being Magic**

**Not rendered. Script and production plan only — nothing generated, no credits
spent, the step-0 gate has not been run.** Target on render: **9:16 vertical
720×1280**, `seedance_2_0_mini`, 7 blocks × 10s = **70.0s**, MP4.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

**Cite the chapter on screen as *Suwen 13*.** Lingshu 13 (經筋) is a different
chapter. Both halves of the canon run to eighty-one separately numbered chapters,
so a bare "Chapter 13" is ambiguous by construction.

Companion longform: `inner-canon-suwen13-longform-v1.md` (84 blocks, 14:00), which
holds the complete source text, this cut's translation, and the compliance audit
this trailer inherits.

**Slate position.** Suwen 13 is **rank 2 and publish slot 2** — the channel's
thesis statement, whose stated job is to establish *"immediately that this is
intellectual history, not wellness."* **This trailer carries a disproportionate
share of that job**, because at slot 2 the trailer is the first thing most of the
audience sees and early classification is sticky. Every line below is written to
read as history of science and none of it as wellness.

---

## Why 70 seconds

`CLAUDE.md` allows 30–90 sec and the pipeline assembles whole 10s blocks, so the
real choice is six, seven, eight or nine blocks. **Seven is where this chapter's
hook lands** without stretching:

- The end disclaimer card **costs a whole block** (`CLAUDE.md`), so a 60s trailer
  has five content blocks and a 70s trailer has six.
- The trailer has to carry **five things**: the practice, the question, the answer,
  the demotion, and the twist. At six content blocks that is one block each plus the
  audit beat that makes the twist land. At five, the block that goes is Lei-Gong's —
  and without it the final turn arrives with nobody having doubted anything.
- **80s and 90s would need a second reckoning beat to fill.** The trailer cannot
  carry the expectation-effects hedge (longform blocks 17–19) — that is three blocks
  of careful qualification and a trailer has no room to do it responsibly. Rather
  than half-do it, the trailer stays clear of the claim entirely. See *Compliance
  notes*.

---

## Narration

`seed_audio` presets, `speech_rate` **55**, one take per block, **one speaker per
block**. Word budgets are `SKILL.md` step 3 as measured 2026-08-09, and the
assembler gates on **8.6–10.0s of detected speech** at both edges as hard errors.

| Role | Voice | `voice_id` | Blocks |
|---|---|---|---|
| Narrator (V.O.) | **Arthur** | `30fc8796-ceb6-4a66-b3a7-4a145ef7f346` | 1, 4, 6, 7 |
| Fan-di | **Xavier** | `43173c95-3ec8-446a-a162-6504332c578b` | 2 |
| Dr-Qi | **Vesper** | `c3204739-4084-41a3-9dc5-c805b307ec18` | 3 |
| Lei-Gong | **Zane** | `9ddbff06-a984-4c0d-b641-4d8ca846bf60` | 5 |

**SOUND:** No music under blocks 1–2. A single struck note enters at block 3 and
holds. Everything drops to room tone at block 6.
**VISUAL:** Flat 2D ink-wash throughout, **vertical 9:16 portrait framing**,
text-free except blocks 4 and 7. **The longform's divided scroll is the trailer's
one carried-over image** — it appears in blocks 1, 3 and 6 and closes the cut.

| Block | Beat | Narration |
|---|---|---|
| 1 | Arthur (V.O.) — the hook | For most of human history, the treatment was words. Someone who knew the right ones said them over you, and for a thousand years the Chinese state paid a department to do exactly that. |
| 2 | Fan-di (Xavier) — the question | The physicians of high antiquity, I have heard, cured a man by shifting his essence and speaking to the cause. One sentence and it was done. Mine use poisons inside and needles outside, and it works about half the time. Explain. |
| 3 | Dr-Qi (Vesper) — the answer | Nobody here will tell you the old invocations were stronger than a needle. What changed was not the medicine. In the old age there was no longing within and no striving for office without, and nothing could get in deep. |
| 4 | Arthur (V.O.) — the demotion | Now worry winds around a man from inside and hard labour wears him from outside. The illness reaches the marrow. And so, the chapter says, the invocation can no longer end it. |
| 5 | Lei-Gong (Zane) — the audit | I audit things for a living, and this chapter is a ladder of ages each one worse than the last, which is the most common complaint anybody has ever made about anything. But then it gives itself away in the very last passage, and I did not see that coming. |
| 6 | Arthur (V.O.) — the turn | Shut the door and close the window and ask the patient again and again what is wrong. That is what replaced the spell, and it is worth asking whether it is one. |
| 7 | Arthur (V.O.) — disclaimer card | A dramatized adaptation of a classical philosophical text. Not medical advice. The full episode asks what actually replaced the incantation in this chapter, and whether the profession has ever entirely stopped performing one. |

**Every block is inside its voice's measured word budget** — Arthur 31–34, Xavier
40–44, Vesper 37–41, Zane 47–52 — counted from this table by dropping tokens
containing no letter or digit. **No block contains a comma-separated list of three
or more items**, and no block exceeds four sentences; both were audited against the
2026-08-09 measurements, where a comma list cost 3.1 seconds at a fixed word count.

---

## Shot list

Numbered to the blocks. **Vertical 9:16, flat 2D ink-wash, text-free except blocks
4 and 7.** Every shot needs motion from frame 1 — the assembler warns on a static
open or a frozen tail.

1. A hanging silk scroll, vertical, divided down the middle by a single crease. Both halves blank. Along the bottom, official seals ink themselves in a row, one after another, and keep going past the frame edge. Slow push in.
2. Interior audience chamber, vertical framing. FAN-DI on the high seat in the gold robe and glasses, **fan snapping open**. Behind him the divided scroll, still blank on both sides.
3. DR-QI at the scroll's left edge, blue cheongsam, bamboo scroll held casually like a tablet. **The left panel inks in as she speaks** — a low horizon, three birds, the shoulder of an animal, no faces. The right panel stays white.
4. **CARD** — 故祝由不能已也, six characters brushed on silk, held alone. Behind them the right panel takes its first mark: one wet stroke that spreads outward as a stain rather than a drawing. *(Default: plain plate, characters added at edit — see Finishing steps.)*
5. LEI-GONG alone, cinnabar robe, small hand drum resting in his lap, wax tablet raised. Beside him a ladder of three rungs inks itself, and the lowest rung is rubbed out.
6. The crease down the middle of the scroll closes over and the two panels become one surface. Then the chamber at night: one lamp, a bed frame drawn as three lines, and a door swinging shut. **No patient is drawn.**
7. **END CARD** — plain plate, ink wash drifting. Disclaimer and editorial credit added at edit time.

**Blocks 4, 6 and 7 are the stillness risks.** A held card, a closing door, and a
plate. Give each a slow push, drifting ink grain, or a light change so the clip does
not read as a held frame.

---

## Source mapping — § → blocks

Sections are those of the *Source text and translation* section in
`inner-canon-suwen13-longform-v1.md`, which holds the complete classical text.

| § | Passage | Blocks |
|---|---|---|
| §1 | 余聞古之治病，惟其移精變氣，可祝由而已 | 2 |
| §1 | 今世治病，毒藥治其內，鍼石治其外，或愈或不愈 | 2 |
| §1 | 內無眷慕之累，外無伸宦之形 | 3 |
| §1 | 此恬憺之世，邪不能深入也 | 3 |
| §1 | 憂患緣其內，苦形傷其外 | 4 |
| §1 | 內至五藏骨髓 | 4 |
| §1 | **故祝由不能已也** | 4 |
| §3 | **閉戶塞牖，繫之病者，數問其情** | 6 |

**Block 1's thousand-year department is not in the chapter** and is the trailer's
one imported fact — the incantation office ran as 咒禁 under the Sui and Tang, as
書禁 under the Song and as 祝由 under the Yuan and Ming, and was removed from the
Imperial Medical Academy in 1571. It is dramatised here exactly as it is in the
longform (block 12), and both documents flag it for re-confirmation before burn.

**Block 5 is not in the source and is the trailer's one invention** — the chapter's
regress of declining ages is a real feature of the text, but nobody in it remarks
on the regress. Lei-Gong's audit is ours, in the longform (block 42) and here.

**Longform beats deliberately withheld from this trailer:** the whole
colour-and-pulse act, 僦貸季, the 中古/暮世 decline and 粗工兇兇, and the
expectation-effects reckoning. **The last of those is withheld on compliance
grounds rather than for pacing** — see below. The trailer sells the question; the
episode sells the reckoning.

**Naming reconciliations**, resolved in favour of `CLAUDE.md`: Huangdi is played by
**Fan-di**, Qibo by **Dr-Qi**, and Dr-Qi wears the cast sheet's **blue** cheongsam.

---

## Production record (Higgsfield)

**Status: script only. Nothing generated. The step-0 gate has not been run.**

### Credit preflight — not a priced gate

**Last recorded balance: ~479**, implied by the Suwen 8 trailer run of 2026-08-09
(552 before, ~73.3 spent). **It has not been re-read since.** Call `balance` and
`get_cost: true` live before spending anything.

| Item | Unit price (last measured) | Qty | Estimate |
|---|---|---|---|
| Clips, `seedance_2_0_mini` 480p 9:16 10s | 10 | 7 | **70** |
| Style key, `nano_banana_pro` 9:16 1k | 2 | 1 | **2** |
| Voice takes, `seed_audio` | **0.1** | ~13 | **~1.3** |
| Assembly, captions, burn | free | — | **0** |
| | | | **≈73** |

**Thirteen takes for seven blocks is the realistic figure, not seven.** The one
comparable run needed six re-takes to land the speech window. At 0.1 each that is
0.6 credits, which is the argument for budgeting them generously rather than
writing to land first time.

**This trailer fits the balance; the longform does not.** If both are to be made,
make this one first — it is the cut that generates the chapter style key, and the
longform's 16:9 sibling derives from it at 2 credits rather than from scratch.

### Style key — does not exist yet

Chain from whichever key is the recorded head in `SKILL.md` step 1 at generation
time — currently the Suwen 1 key `4b6f7106-67da-4d1a-a553-c58ba90ac43f`, with the
Suwen 8 key `05ebe984-2781-491e-8c84-2b20e608d2a8` recommended for promotion. Pass
its **job ID** as the reference and swap only the chapter motif.

| | |
|---|---|
| Model | `nano_banana_pro` (served by `nano_banana_2`), 1k, **9:16** |
| Motif | three-character series key; **a hanging silk scroll divided down the middle behind them, inked on one side and blank on the other**; a closed door at the frame's edge |
| Cost | 2 credits |

**This becomes the Suwen 13 head** and should be promoted in `SKILL.md` step 1 once
generated. The longform additionally needs a **16:9 sibling** derived from *this*
job ID — **do not overwrite the vertical key**, this trailer depends on it.

`medias[].value` takes a `media_id` or a prior `job_id` **only**; a `https://` URL
there fails.

### Clips

Not generated. Model and tier from the step-0 gate — `seedance_2_0_mini` 480p is the
house draft default. 10s, one clip per block, the chapter key attached to every clip
as `image_references`, `generate_audio: false` on all seven.

- **Declare the aspect ratio twice** — `aspect_ratio: "9:16"` *and* "vertical 9:16
  portrait framing" written into every prompt text. The double declaration has held
  on every cut that used it.
- **Pre-decline `IN THE DARK`** (`24bae836-2c4a-48e0-89b6-49fcc0b21612`) on all
  seven. Blocks 4, 6 and 7 are lamp-lit against black.
- **Keep *incantation* and *ritual* out of every clip prompt.** They are the
  subject of the trailer and belong in the narration, but they invite the service
  toward occult iconography, which is off-style and a compliance risk. Every shot
  above is specified as objects, ink and brushwork for exactly that reason.
- **Lei-Gong's hand drum is a prop** — describe it resting in his lap, never being
  played. *Drum*, *rhythm* and *music* trigger `DROWN IN MUSIC`.
- **Check the first clip's returned dimensions before generating the rest.**
- **Duration ≥ 9.5s and motion from frame 1** — the assembler rejects a short clip
  outright and warns on a static open or frozen tail.

### Voiceover

Not generated. `seed_audio`, `voice_type: "preset"`, `speech_rate` **55**, one take
per block, one speaker per block.

Record per block: job ID, file duration **and** the assembler's measured speech
figure, **to three decimal places**. They differ, and the second is the one that was
gated — recording *speech* rather than file duration is what makes
`build_subtitles.js` centre cues where the assembler centred the voice.

### Captions

Sidecar only; `assemble_final.sh` rejects `--subs` outright. Build at **9:16**,
which is the hard case:

```
node scripts/check_caption_fit.js output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
node scripts/build_subtitles.js  output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
```

**No `.srt`/`.vtt` ships with this document yet, by design** — the cues are timed
from take durations that do not exist. Build and commit them with the render.

#### `check_caption_fit` reports ten overflows at 9:16, and they are accepted knowingly

Run at script stage, before any take exists. **Nothing here overflows the frame** —
`build_subtitles.js` pre-splits a wide clause across cues and libass margins cannot
draw outside themselves. What it costs is extra cue breaks on screen.

| | |
|---|---|
| Longform, 16:9 | **All clauses fit.** 84 blocks, zero overflows |
| This trailer, 9:16 | **10 overflowing clauses**, all needing 3 lines except blocks 4 and 6 at 4 |

**The asymmetry is pure geometry and is expected.** A 720-wide vertical frame gives
556px per line against 1001px at 16:9, so roughly 22 characters per line and ~44
per two-line cue. Almost any natural English clause exceeds that. The same script's
narration passes cleanly at 16:9 and splits at 9:16 without a word changing.

**Two clauses were fixed at script stage, which is where it is free:** block 2's
opening ran **113 characters over five lines** and was restructured to *"The
physicians of high antiquity, I have heard, cured a man by…"* — 62 characters over
three — and block 5's opening ran 94 characters over four and now runs 66 over
three. **No word count changed on either**, so neither touched the take window.

**The remaining ten are left alone deliberately**, and `SKILL.md` is explicit about
why: *"A wide clause is not a re-take… never re-record a take, and never re-render
video, for a caption problem."* The take window is a hard assembly error; caption
width is readability. **Write for the window first.**

> **⚠ Do not "fix" the residual by adding commas to the narration table once takes
> exist.** It would improve the cue breaks without re-recording — a comma is
> punctuation, not a word, so the existing audio would still match — **but it
> poisons reproduction**: the next person to regenerate a take from this document
> gets the comma version, and comma density is the single most expensive structure
> measured on these voices. The fix, if one is wanted, is to reword the clause
> shorter and re-record at 0.1 credits.

**Blocks 2 and 5 now carry three commas each.** They are clause boundaries rather
than an enumeration, so the measured list penalty does not apply — but both sit
mid-window (9.27s and 9.36s predicted) rather than near the ceiling, which is the
headroom that makes the extra commas affordable. **Do not add a fourth to either.**

### Reproduction notes

- **Nothing has been generated for this cut.** No style key, no clips, no takes.
  The step-0 gate is outstanding and is a hard gate.
- **All seven blocks are sized to the 2026-08-09 measured budgets**, verified by
  parsing this document's own narration table. No comma lists, no block over four
  sentences.
- **The classical Chinese in the longform's source section was reconstructed, not
  extracted** — the supplied ctext PDF's CJK glyphs use an embedded subset encoding
  this host cannot decode. The English agrees with the PDF line by line, but
  **block 4's card 故祝由不能已也 must be verified against a traditional-character
  edition before burning.** It is the only classical text on screen in this cut.
- **Block 1's 1571 date is the trailer's one hard fact** and is flagged for
  re-confirmation in the longform's reproduction notes.
- **Lessons carried from the Suwen 8 trailer run:** put the export `curl` in the
  same `&&` chain as the assembler; **install Anton in the sandbox before burning**
  and check `fc-match`, because the sandbox ships Metropolis and Montserrat and not
  Anton; and **never put a name credit at the end of a take** — it produced a 3.00s
  internal pause and failed the block.
- **The CDN is normally blocked from the repo host**, so the finished MP4 usually
  cannot be fetched back for visual QA. The sandbox can probe the render next to
  where it was built, but **a probe is not a viewing**. Say which checks actually
  ran.

## Deliverables the assembler cannot produce

- **History lower-third** — *"Presented as history & philosophy"*, small, on screen
  within the first 10 seconds. Block 1.
- **End disclaimer card** — mandated string verbatim, over block 7.
- **Human editorial credit** — *"Written & edited by Joshua Chin"* on the end card
  and in the description. **Not in any voice take.**
- **Music** — licensed guqin only; the assembler can mix a bed you supply but
  generates none. **Guqin licensing is unresolved** (slate §9) — until cleared,
  score this cut with no guqin.

### Finishing steps

This cut's own numbers — 7 blocks, 70.0s, card block at **0:30**, end card **1:00
to 1:10**. Not a generic recipe: block numbering and timecodes differ between
versions of the same chapter, and that is where the mistakes land. Both caption
scripts are pure text tools — they read this document, touch no video, need no
network and cost no credits. **Run them from the repo root or pass an absolute
path.**

**1. Check captions** at 9:16, before generating takes — a fix is free then and
costs a re-take afterwards.

```
node scripts/check_caption_fit.js output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
```

**This document exits 1 on the mandated disclaimer clause and that is correct, not
a defect.** *"A dramatized adaptation of a classical philosophical text."* is 58
characters and 1187px against a 556px line — it needs three lines on a 720-wide
vertical frame and fits on one at 16:9. It is a compliance string and cannot be
reworded, which is why `check_caption_fit.js` carries it as a known exception. The
sidecar splits it and libass margins keep it in frame.

**2. Build the sidecar** at 9:16, after the takes exist and their durations are in
the record above.

```
node scripts/build_subtitles.js output/suwen/ch13/inner-canon-suwen13-trailer-v1.md
```

On a **copy** of the `.srt`, delete the cues covering **block 7** (everything from
1:00) so the disclaimer is not simultaneously a caption and a card. The burn copy is
blocks 1–6, ending at 1:00.

**3. Scale, then burn.** `scale=720:1280` **first** in the `-vf` chain, then
`subtitles=` — captions are then drawn at native resolution rather than stretched
with the picture. Run `ffmpeg -version` and `fc-match Anton` **before** starting,
**in the sandbox where the burn actually happens**: the sandbox does not ship Anton,
and libass substitutes a wider face silently while `build_subtitles.js` still
reports the line as fitting. Convert the `.srt` to `.ass` and re-target `PlayResX/Y`
to 720×1280 first — ffmpeg's SRT→ASS converter hardcodes 384×288, which scales every
style value by ~4.4× and runs the lines off frame.

**4. History lower-third** — *"Presented as history & philosophy"*, in at 0:02, out
at 0:09, over block 1's self-inking row of seals. At 720×1280 with `MarginV=150` and
`Fontsize=54`, two lines of caption occupy roughly y=1000–1130, so put the
lower-third **above** that band — y=896 is the position the comparable cut used.

**5. Quotation card — block 4, in at 0:30, out at 0:40.** If block 4 was rendered as
a plain plate, which is the default, **故祝由不能已也** is added here in the same
`drawtext` pass. **Verify every glyph against the *Source text and translation*
section of the longform before export.** ffmpeg needs a CJK-capable face — Anton has
no Chinese coverage and renders tofu boxes silently. **Six characters alone should
fill the frame**; this is the cut's only classical text and the sentence the episode
is named for.

**6. End card — 1:00 to 1:10** (block 7). Mandated disclaimer verbatim across three
centred lines, editorial credit beneath. ffmpeg 6.1 has no `text_align`, so
multi-line centred text needs one `drawtext` filter per line. Block 7's plate is a
light ink wash, so **a full-frame scrim at roughly `black@0.62`** will be needed for
white text to be legible on it. Both lines also go in the description at upload.

**7. Music.** None, until guqin licensing is cleared. **Trailers earn
disproportionate plays and carry the higher Content-ID exposure**, so this is the
cut to be most careful about, not the least.

## Compliance notes (YouTube)

Audited at script stage against the narration **and** the shot list. The longform's
audit governs the material this trailer draws from; these are the trailer-specific
findings.

- **Disclaimer** — repo string verbatim: blockquoted at the head of this document,
  at the head of block 7's narration, on screen as the end card, and in the
  description. Block 7 is extended past the mandated string to clear the 8.6s floor;
  **the mandated sentence itself is unaltered**.
- **The slate's named care point for this chapter is the whole design problem of
  this trailer.** §3.2: *"do not let the incantation material read as an endorsement
  of faith healing — the chapter itself explicitly says incantation no longer works,
  which is the correct beat to land on."* The trailer lands on exactly that beat, on
  a card, at the midpoint: **block 4 is 故祝由不能已也**, and it is the only classical
  text in the cut. **Block 3 pre-empts the misreading in its first sentence** —
  *"Nobody here will tell you the old invocations were stronger than a needle"* —
  before the trailer has said anything a viewer could take the wrong way.
- **The expectation-effects material is deliberately absent, and that is a
  compliance decision rather than a pacing one.** The longform handles it in a
  locked trio (blocks 17–19) where the third block exists solely to say that
  expectation does not move the disease. **A trailer block cannot carry a claim and
  its refusal in ten seconds**, and carrying the claim without the refusal is
  precisely the failure the slate warns about. So the trailer makes no claim about
  what ritual does to a patient at all. **Do not add one in any recut.**
- **Block 6's turn is the one line that needs watching**, because *"that is what
  replaced the spell, and it is worth asking whether it is one"* is the hook and is
  clippable. It is phrased as **an open question, not an assertion** — the trailer
  poses it and the episode answers it, and block 7 says on screen that the full
  episode is where the answer lives. **The stronger version of that line — that
  attention *is* the spell — appears nowhere**, because the longform needs a whole
  block (83) to guardrail it and this cut has no room for one.
- **Health content stays philosophical narrative** — no dosage, no regimen, no
  diagnosis and no benefit claim. **No treatment is described anywhere in this
  cut.** 毒藥 is rendered *poisons* in block 2 and appears only as a historical
  category in the Emperor's own complaint. **No viewer is told to do anything.**
- **Longevity — absent.** The chapter's one longevity clause (生道以長，命曰聖王) is
  cut from the longform entirely and appears nowhere here. The words *longevity*,
  *live longer*, *ancient secret* and *anti-aging* appear in no line, title or
  thumbnail direction. **This matters more at slot 2 than anywhere else on the
  slate**, because the trailer is what fixes the channel's early classification and
  longevity framing sits two RPM bands below history of science.
- **Mortality / ageing** — block 4's *"the illness reaches the marrow"* is the only
  approach to it and is carried by **ink spreading through silk**, not by a body.
  **No patient is drawn in seven shots**, including in block 6's consultation, which
  is staged as an empty room.
- **Occult and ceremonial imagery — the specific prompt-stage risk here, and it is
  designed out.** A trailer about incantation invites robes, talismans, altars and
  bound figures, and **restraint or bound-figure imagery has tripped this service's
  safety filter before on innocuous subject matter**. There is **no ceremony in the
  shot list**: the practice is carried by a row of official seals (1), a blank
  half-scroll (3) and a card (4). *Incantation* and *ritual* are banned from clip
  prompts while remaining in the narration where they belong.
- **Supernatural hooks explicitly debunked by the payoff** — the hook is *for a
  thousand years the state paid a department to cure you with words*. That is a
  claim about an institution, not a mystery claim, and **it is debunked inside the
  same trailer** at block 4 by the chapter's own sentence. A trailer cannot carry a
  full debunk, so the honest test is whether it promises anything the episode does
  not deliver: it promises an institution, a mechanism, a demotion and a twist, and
  the episode delivers all four.
- **Title and thumbnail honour the educational payoff** — *When Medicine Stopped
  Being Magic*; on-screen framing *Suwen 13, Shifting the Essence*. **Thumbnail
  direction:** the divided silk scroll, inked on one side and blank on the other,
  with 故祝由不能已也 on the inked side. No faces, no talismans, no robed figure, no
  glowing hands. **Do not use an incantation image** — it promises the exact thing
  the episode declines to endorse.
- **Hedge allocation — three characters speak in a 7-block trailer, which is
  unusual and needs recording.** `SKILL.md` makes narrator-only the trailer default
  precisely because the narration carries every hedge. Here **Arthur keeps all four
  framing blocks (1, 4, 6, 7)** including the demotion and the disclaimer. **One
  hedge does move onto a character voice**: block 3's *"Nobody here will tell you the
  old invocations were stronger than a needle"* is Dr-Qi's, and it is the trailer's
  pre-emption of the faith-healing misreading. It sits there deliberately — it has to
  arrive before the ancient-world material it introduces, and Arthur does not speak
  again until block 4. **A viewer who clips block 3 alone still hears the refusal
  inside the clip.** No other compliance content sits on a character voice: block 2
  is Fan-di's complaint and block 5 is Lei-Gong's audit, and neither makes a claim
  about the body.
- **Historical accuracy** — cited on screen as **Suwen 13**, never a bare "Chapter
  13". Block 1's thousand-year department is the cut's one imported fact and is
  sourced in the mapping above with a re-confirmation flag. Block 3's *"no longing
  within and no striving for office without"* is 內無眷慕之累，外無伸宦之形 rendered
  close to literally. Block 2's *"shifting his essence"* preserves the 精/神
  distinction the supplied English collapses — see the longform's four departures.
- **Synthetic-content disclosure** — the cast is AI-generated. Disclose in the
  description and tick the altered-or-synthetic-content box at upload. **No
  character makes a first-person factual assertion about their own expertise** —
  Dr-Qi reports what the chapter says and refuses a claim; she never asserts a fact
  about the body in her own person.
- **General audience, not made for kids** — self-certify at upload.
- **Prompt-stage audit** — seven low-risk shots: a divided scroll, a row of seals,
  a horizon with birds, a card, a ladder, a door, a plate. **No restraint or
  bound-figure imagery. No bodies, no injury, no anatomy, no ceremony.** Blocks 4, 6
  and 7 are lamp-lit against black and will trigger `IN THE DARK` — pre-decline on
  every clip.

## Runtime levers

7 blocks = 70.0s. `CLAUDE.md` allows 30–90 sec, and every lever below moves whole
10s blocks because the assembler has no other unit.

**Cut to 60s (6 blocks) — drop 1.** Drop **block 5**, Lei-Gong's audit. It is the
only block whose content is scepticism rather than argument, and the chapter's own
demotion at block 4 still lands. **Cost:** the turn at block 6 arrives with nobody
having doubted anything, so it reads as a fact rather than as a reversal — and the
cut loses its fourth voice. This is the cut to make only if the budget forces one.

**Cut to 50s (5 blocks) — drop 2.** Drop blocks 5 and 2. Fan-di's question survives
in Arthur's block 1 by implication, but the trailer then has no antagonist and no
stakes, and Dr-Qi's block 3 answers a question nobody asked. **Not recommended.**

**Stretch to 80s (8 blocks) — add 1.** Add an Arthur block after 4 carrying the
colour-and-pulse pivot: what the chapter reaches for once the invocation is retired,
and that both new instruments are on the patient. Written for Arthur at 31–34 words.
This is the strongest single addition, because it is the only thing the trailer
currently promises without showing.

**Stretch to 90s (9 blocks) — add 2.** Add the above, plus a Vesper block on
粗工兇兇 and 新病復起 — the chapter's contempt for the hurried practitioner and its
naming of harm done by treatment. **At 90s the trailer starts telling the episode's
story rather than selling it**, which is why 70s is the recommendation.

**Blocks that must not be split or dropped in any recut:** **block 7** (the
disclaimer card is mandatory and is not a lever), **block 4** (the chapter's own
demotion is the beat the slate names as the correct one to land on, and it is also
the cut's only classical card), and **block 3's first sentence**, which is the
trailer's pre-emption of the faith-healing misreading and the one hedge on a
character voice.
