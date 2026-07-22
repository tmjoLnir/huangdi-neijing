# The Emperor's Inner Canon — Episode 1 Trailer (single continuous one-shot, vertical)

**Final video (720×1280 vertical / 9:16, 60s, MP4):**
https://d8j0ntlcm91z4.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE/hf_20260722_133705_2e22d831-937c-448a-ae3b-136d2ff2cf11.mp4

A one-minute trailer for *Episode 1 — "The Physician Who Outlived Three Emperors,"*
built as a **single continuous camera move** (no hard cuts) that travels through the
whole story in one unbroken take, for Shorts / Reels / TikTok. One narrator over
stylized 2D animation matching the Fan-di / Dr. Qi character art.

> A dramatized adaptation of a classical philosophical text. Not medical advice.

## How the one-shot is built

Seven keyframes were generated as a chained sequence (each frame references the
previous one so the world, lighting and characters stay continuous). Six
Seedance 2.0 "start-frame → end-frame" clips then animate the camera *between*
consecutive keyframes, so clip N ends on exactly the frame clip N+1 begins on —
concatenated, they read as one continuous drifting shot. The narration is laid
over each 10-second block, giving an exact 60s runtime.

Camera journey (one move): close on a dead emperor's portrait → pulls back to
reveal Dr. Qi in the gallery → cranes up as Fan-di snaps his fan in her face →
drifts down through a moon-gate to the glowing jade well → cranes up into the
lantern-lit feast (radiant young emperor) → pushes in as the feast dies and he
withers → cranes back to the blank silk on its easel as he walks off to sleep.

## Narration (per 10s block, reused from the earlier cut)

| Block | Beat | Narration |
|---|---|---|
| 1 | Portraits → Dr. Qi | Three emperors ruled this palace, three emperors died in it, and one physician stood at every bedside. |
| 2 | Dr. Qi → the confrontation | The court records say Doctor Qi has served for over sixty years. Her face says something the records cannot explain. |
| 3 | Fan snaps → toward the well | Sorcery, fraud, or a secret worth stealing, the young emperor demands the truth before his portrait is painted. |
| 4 | The well | Her answer is no herb and no spell, but a deep well, a daily rhythm, and the art of holding fullness. |
| 5 | Feast → withering | It is the question that opens Chinese medicine's oldest text, why did the ancients live a century, while emperors burned out at fifty? |
| 6 | Blank silk / title | The Emperor's Inner Canon, episode one, the physician who outlived three emperors. The fourth portrait still waits. |

## Production record (Higgsfield)

- **Character/style reference:** original two-character key `ce0a30d6-4332-4eaf-b3c9-8a2ae14e76f1`, attached to every keyframe for character fidelity.
- **Vertical keyframes** (nano_banana_pro, 9:16, chained): `b2ddf59d` (portrait) → `5b8488b5` (Dr. Qi) → `43fe515e` (confrontation) → `83dcefcd` (well) → `fbf47809` (radiant feast) → `a55afeb4` (aged, dark hall) → `b5e06f19` (blank silk).
- **Continuous segments** (seedance_2_0, 9:16, 10s, 720p, start_image→end_image): `af9a76dd`, `701bd142`, `4a0c82dc`, `a2ce5a3f`, `7f660cea`, `14432d54`.
- **Voiceover:** Seed Audio, preset voice **Alistair** (`d9d5c263-f84e-4752-97b5-3750fcc6fd2f`), speech_rate 15; takes `66064561`, `0562f3fd`, `c35cc5fa`, `679d2f3a`, `6796ed75`, `dc6bcf3a`.
- **Assembly:** explainer_video job `2e22d831-937c-448a-ae3b-136d2ff2cf11`, 6 × 10s blocks, 720×1280, no subtitles.

Notes: the feast stays atmospheric (no drinking shown), per the script's YouTube
compliance audit. The hosted asset URLs are CDN links from the generation service
and may expire — download and archive the final MP4 if this trailer is kept.
