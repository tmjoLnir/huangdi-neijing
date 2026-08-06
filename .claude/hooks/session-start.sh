#!/bin/bash
# SessionStart hook — restores the caption burn toolchain on the repo host.
#
# This repository holds production documents, not source, so there are no
# dependencies to install in the usual sense. What it does need is the two tools
# the Finishing steps in every cut document depend on, plus one convenience:
#
#   ffmpeg  — burns the tracked .srt sidecar onto the downloaded render.
#             Must be a build with libass; the apt package is.
#   Anton   — the caption font (CLAUDE.md: every deliverable ships captioned in
#             anton). This matters as much as ffmpeg does. When Anton is
#             missing, libass silently substitutes a wider default: the burn
#             still succeeds, build_subtitles.js still reports "fits", and the
#             overflow only shows up when somebody watches the file.
#   wick    — browser-grade web access, from the wick-mcp npm package. Unlike
#             the two above, no deliverable depends on it: it is a research
#             convenience, and WebFetch still works without it.
#
# Web sessions run in an ephemeral container rebuilt from the repo each time, so
# anything installed by hand is gone by the next session. This hook puts them
# all back automatically.
#
# ── Synchronous, deliberately ────────────────────────────────
# The session waits for this hook to finish. On a cold container that costs
# roughly a minute of startup, and buys the guarantee that both tools are present
# before the first prompt runs — so there is no window in which a burn can pick
# up a substituted font and produce a finished-looking, wrong deliverable. On a
# warm or resumed container both checks pass immediately and the hook is free.
#
# Anton is installed before ffmpeg. The font is one small download and ffmpeg is
# a slow apt transaction, so if the hook is ever cut short — a harness timeout, a
# reclaimed container — the half-installed state left behind is the one that
# fails loudly with "ffmpeg: not found", not the one that burns successfully in
# the wrong font. Do not reorder these.
#
# wick goes last, by the same argument and one more: it is the only one of the
# three that no deliverable depends on, so a hook cut short after ffmpeg has
# still installed everything a finished cut needs.
#
# ── Why wick is not a plain "npm install -g" ─────────────────
# wick-mcp's own postinstall (scripts/install.js) downloads the release
# tarball, extracts it, writes the LD_LIBRARY_PATH wrapper, prints "Wick
# installed successfully" — and then never exits. Its download() follows the
# GitHub 302 by recursing without consuming the redirect response or closing
# the outer write stream, so the process idles forever on the two leaked
# handles. npm waits on it; killing it makes npm treat the script as failed and
# roll the whole package back, leaving a dangling bin symlink behind.
#
# Hence the shape below: install with --ignore-scripts, run the postinstall by
# hand in the background, poll for a wick that actually runs, and kill it once
# it has done its work. Every way that script can be cut short mid-flight
# leaves a wick that fails to run rather than one that half-works, so polling
# on "does it run" is both the completion signal and the honest final check.
#
# Note also that install.js declares a sha256 for each release asset and then
# never verifies it. The 0.12.0 linux-x64 tarball was checked by hand once
# against the declared digest and matched; nothing in the package keeps that
# true for the versions this hook will install later.
#
# Idempotent: every install is skipped when the tool is already present.

set -euo pipefail

ANTON_URL="https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf"
FONT_DIR="/usr/local/share/fonts"

# Ceiling on the hand-run wick postinstall. The poll below breaks as soon as the
# binary works (about a second in practice) or as soon as the script gives up,
# so this bounds only a stalled release download. Kept short deliberately: it is
# the one number that can delay a session start for a tool nothing depends on.
WICK_TIMEOUT=60

# Local machines keep their own toolchain — only the remote container is rebuilt
# from scratch.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# fc-match resolves to a fallback rather than failing when Anton is absent, so
# match on the returned family instead of on the exit status.
have_ffmpeg() { command -v ffmpeg >/dev/null 2>&1; }
have_anton() {
  command -v fc-match >/dev/null 2>&1 && fc-match Anton 2>/dev/null | grep -qi anton
}
# Run it rather than just looking for it: a rolled-back npm install leaves the
# global symlink pointing at nothing, and a postinstall cut short leaves a
# binary that cannot find libcronet.so. Both look installed to `command -v`.
have_wick() { command -v wick >/dev/null 2>&1 && wick version >/dev/null 2>&1; }

# Nothing to install on a warm container — report the toolchain and return.
if have_ffmpeg && have_anton && have_wick; then
  echo "session-start: ffmpeg, Anton and wick already present."
  exit 0
fi

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

# ── Anton — first, deliberately. See the header. ─────────────
if have_anton; then
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

# ── ffmpeg ───────────────────────────────────────────────────
if have_ffmpeg; then
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

# ── wick — last, deliberately. See the header. ───────────────
if have_wick; then
  echo "session-start: wick already present."
elif ! command -v npm >/dev/null 2>&1; then
  warn "npm unavailable; skipping wick. Web research falls back to WebFetch."
else
  echo "session-start: installing wick..."
  # --ignore-scripts keeps npm from waiting on a postinstall that never exits.
  if $SUDO npm install -g --ignore-scripts wick-mcp >/dev/null 2>&1; then
    # Run the skipped postinstall by hand, in the background. It does its work
    # in the first few seconds and then hangs, so poll for the result and kill
    # it — waiting on it would cost the full WICK_TIMEOUT on every cold start.
    # The outer timeout is the backstop for the case where our kill misses.
    wick_postinstall="$(npm root -g 2>/dev/null)/wick-mcp/scripts/install.js"
    $SUDO timeout -s KILL "$WICK_TIMEOUT" node "$wick_postinstall" >/dev/null 2>&1 &
    wick_pid=$!
    # Two ways to stop early, and the second matters: on a download error the
    # vendor script exits by itself within seconds, and without this check the
    # loop would sit out the whole ceiling waiting for a process that is
    # already gone. Only a genuinely stalled download reaches WICK_TIMEOUT.
    for ((i = 0; i < WICK_TIMEOUT; i++)); do
      if have_wick; then break; fi
      if ! kill -0 "$wick_pid" 2>/dev/null; then break; fi
      sleep 1
    done
    # Reaped inside a redirected group: bash otherwise announces the signalled
    # job ("...Killed...") on the hook's stderr, which reads as a failure when
    # it is the expected end of a postinstall that never exits on its own.
    { kill "$wick_pid" 2>/dev/null || true
      wait "$wick_pid" 2>/dev/null || true
    } 2>/dev/null

    if have_wick; then
      echo "session-start: wick installed."
    else
      warn "wick postinstall produced no working binary; falling back to WebFetch."
    fi
  else
    warn "wick install failed. Web research falls back to WebFetch."
  fi
fi

# fontconfig may have arrived with ffmpeg on a bare image, in which case the
# earlier fc-cache was a no-op and Anton is on disk but not yet indexed.
have_anton || $SUDO fc-cache -f >/dev/null 2>&1 || true

# ── Report what the burn step will actually use ───────────────
have_ffmpeg && ffmpeg -version 2>/dev/null | head -1 || warn "ffmpeg unavailable."
command -v fc-match >/dev/null 2>&1 \
  && echo "Anton resolves to: $(fc-match Anton 2>/dev/null)" \
  || warn "fontconfig unavailable; cannot confirm the caption font."
have_wick && wick version 2>/dev/null || warn "wick unavailable; use WebFetch."
