#!/bin/bash
# SessionStart hook — restores the caption burn toolchain on the repo host.
#
# This repository holds production documents, not source, so there are no
# dependencies to install in the usual sense. What it does need is the pair of
# tools the Finishing steps in every cut document depend on:
#
#   ffmpeg  — burns the tracked .srt sidecar onto the downloaded render.
#             Must be a build with libass; the apt package is.
#   Anton   — the caption font (CLAUDE.md: every deliverable ships captioned in
#             anton). This matters as much as ffmpeg does. When Anton is
#             missing, libass silently substitutes a wider default: the burn
#             still succeeds, build_subtitles.js still reports "fits", and the
#             overflow only shows up when somebody watches the file.
#
# Web sessions run in an ephemeral container rebuilt from the repo each time, so
# anything installed by hand is gone by the next session. This hook puts both
# back automatically.
#
# Idempotent: both installs are skipped when the tool is already present, so a
# resumed or cached container costs nothing.

set -euo pipefail

# Local machines keep their own toolchain — only the remote container is rebuilt
# from scratch.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

ANTON_URL="https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf"
FONT_DIR="/usr/local/share/fonts"

# A missing toolchain must not stop the session from starting: most work here is
# writing markdown, and only the finishing step needs ffmpeg. Report loudly and
# carry on rather than failing the session.
warn() { echo "session-start: WARNING — $*" >&2; }

# Root needs no prefix at all. Keep -E inside the variable rather than at the
# call sites: as root the variable is empty, and a bare "-E apt-get ..." would
# try to run -E as the command.
SUDO=""
if [ "$(id -u)" -ne 0 ]; then
  if command -v sudo >/dev/null 2>&1; then
    SUDO="sudo -E"
  else
    warn "not root and sudo unavailable; skipping toolchain install."
    exit 0
  fi
fi

# ── ffmpeg ───────────────────────────────────────────────────
if command -v ffmpeg >/dev/null 2>&1; then
  echo "session-start: ffmpeg already present."
else
  echo "session-start: installing ffmpeg..."
  export DEBIAN_FRONTEND=noninteractive
  # Two PPAs in this image (deadsnakes, ondrej/php) are blocked by the egress
  # policy and always 403. They are unrelated to ffmpeg and apt still exits 0,
  # but tolerate a non-zero exit here so their noise can never fail the hook.
  $SUDO apt-get update -qq || warn "apt-get update reported errors; continuing."
  if $SUDO apt-get install -y -qq ffmpeg; then
    echo "session-start: ffmpeg installed."
  else
    warn "ffmpeg install failed — the caption burn step will not run here."
  fi
fi

# ── Anton ────────────────────────────────────────────────────
# fc-match resolves to a fallback rather than failing when Anton is absent, so
# match on the returned family instead of on the exit status.
if command -v fc-match >/dev/null 2>&1 && fc-match Anton 2>/dev/null | grep -qi anton; then
  echo "session-start: Anton already present."
else
  echo "session-start: installing Anton..."
  if $SUDO mkdir -p "$FONT_DIR" \
    && $SUDO curl -fsSL --retry 3 -o "$FONT_DIR/Anton-Regular.ttf" "$ANTON_URL"; then
    $SUDO fc-cache -f >/dev/null 2>&1 || true
    echo "session-start: Anton installed."
  else
    warn "Anton install failed — captions would burn in a substituted font."
  fi
fi

# ── Report what the burn step will actually use ───────────────
command -v ffmpeg >/dev/null 2>&1 \
  && ffmpeg -version 2>/dev/null | head -1 \
  || warn "ffmpeg unavailable."
command -v fc-match >/dev/null 2>&1 \
  && echo "Anton resolves to: $(fc-match Anton 2>/dev/null)" \
  || warn "fontconfig unavailable; cannot confirm the caption font."
