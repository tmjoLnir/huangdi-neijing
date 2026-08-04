#!/usr/bin/env bash
# Assembles the Chapter 1 trailer v3 draft without explainer_video.
#
#   bash output/episode-1/assemble-ch1-trailer-v3.sh
#
# Run this on a machine with ffmpeg and network access to the Higgsfield CDN.
# The repo host has neither: ffmpeg is not installed there, and the agent proxy
# denies the CDN (CONNECT 403), so the fourteen source assets cannot be fetched.
#
# Why this exists: explainer_video was withdrawn from the session's tool set
# partway through the run (retried three times; the server stayed healthy and
# answered `balance` throughout). Every asset it needed was already generated and
# paid for — 75.6 credits, measured — so the only missing step is the assembly,
# and that step is fully determined: seven clips already exactly 10s, one take per
# block, each take centred in its 10s window.
#
# The front pad is (10 - take) / 2, which is exactly the centring that
# scripts/build_subtitles.js assumes, so the tracked .srt lines up with this
# output with no nudging.
#
# NOT reproduced from explainer_video: it speeds a slightly over-length take up
# pitch-safely to fit its block. No take here needs that — the longest is 8.14s
# against a 10s window — so the difference is inert for this cut.
#
# CDN links expire. If a download 403s or 404s, re-read the job IDs from
# inner-canon-ch1-trailer-v3.md and refresh the URLs from the service.

set -euo pipefail

BASE="https://d8j0ntlcm91z4.cloudfront.net/user_3GfE0DFiVpEUQv4lBzcD4hx2MZE"
OUT="inner-canon-ch1-trailer-v3-draft.mp4"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

command -v ffmpeg >/dev/null || { echo "ffmpeg not found on PATH"; exit 1; }

# block:  clip file                                              take file                                              front pad (ms)
ROWS=(
"hf_20260804_000410_31da523d-eb4a-408f-b7fd-fb1d3220f99f.mp4 hf_20260804_000538_d0f1422d-fb8d-46e4-8f9d-c81640fc64b9.wav 1747"
"hf_20260804_000441_31d226e9-b7a7-4cd6-ba26-62e92a56c9ea.mp4 hf_20260804_000414_a053c5e7-9b42-4af7-8c04-78a6cc0e4c1d.wav 930"
"hf_20260804_000444_48f2cf85-6924-473e-ae26-0b9a9ce77604.mp4 hf_20260804_000550_51f88452-623d-4aed-ada9-a48e7352cb48.wav 3814"
"hf_20260804_000447_31b3eb43-11ea-4386-b2e4-ba5e9b4802e1.mp4 hf_20260804_000555_324a7c85-0f23-4e11-aaa1-ade1117333eb.wav 1033"
"hf_20260804_000451_c6854eb5-405a-4be0-9041-b0b7f1a5898b.mp4 hf_20260804_000559_bd8fd04f-b474-4571-9062-a8a8a677a573.wav 1011"
"hf_20260804_000454_2a9678c6-dcdc-4eb3-978b-e3e9c956c758.mp4 hf_20260804_000603_3144cb4c-4ae7-4a0f-9881-26104558b2a8.wav 1461"
"hf_20260804_000500_90b9492a-a71a-4a48-90f5-c0ec31797e0c.mp4 hf_20260804_000608_e9ab2459-9dc6-433b-993a-e55b6a26f5f8.wav 2798"
)

echo "Fetching 14 assets..."
i=0
for row in "${ROWS[@]}"; do
  i=$((i + 1))
  read -r clip take _pad <<<"$row"
  curl -fsS --retry 3 -o "$WORK/clip$i.mp4" "$BASE/$clip"
  curl -fsS --retry 3 -o "$WORK/take$i.wav" "$BASE/$take"
  printf '  block %d ok\n' "$i"
done

echo "Padding takes to 10s, each centred in its block..."
i=0
for row in "${ROWS[@]}"; do
  i=$((i + 1))
  read -r _clip _take pad <<<"$row"
  ffmpeg -v error -y -i "$WORK/take$i.wav" \
    -af "adelay=${pad}:all=1,apad" -t 10 -ar 48000 -ac 2 "$WORK/blk$i.wav"
done

echo "Concatenating and muxing..."
: >"$WORK/v.txt"; : >"$WORK/a.txt"
for n in 1 2 3 4 5 6 7; do
  printf "file '%s/clip%d.mp4'\n" "$WORK" "$n" >>"$WORK/v.txt"
  printf "file '%s/blk%d.wav'\n"  "$WORK" "$n" >>"$WORK/a.txt"
done
ffmpeg -v error -y -f concat -safe 0 -i "$WORK/v.txt" -c copy "$WORK/video.mp4"
ffmpeg -v error -y -f concat -safe 0 -i "$WORK/a.txt" -c copy "$WORK/audio.wav"
ffmpeg -v error -y -i "$WORK/video.mp4" -i "$WORK/audio.wav" \
  -c:v copy -c:a aac -shortest "$OUT"

echo
echo "Wrote $OUT"
ffprobe -v error -show_entries format=duration,size -of default=nw=1 "$OUT" 2>/dev/null || true
echo
echo "Expected: 70.0s, 480x854, no burned captions."
echo "Next: build the sidecar, strip the block 7 cues, and burn — see the"
echo "Finishing steps in inner-canon-ch1-trailer-v3.md."
