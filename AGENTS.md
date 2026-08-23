# AGENTS.md

## Cursor Cloud specific instructions

### What this repo is
Celebration OnPoint **brand + design system**. It is intentionally **dependency-free**: no
`package.json`, no lockfile, no `node_modules`, and **no build / lint / test pipeline** (see
`DESIGN.md` §10). The source of truth is documentation (`readme.md`, `DESIGN.md`, `SKILL.md`),
`styles.css`, the committed generated bundle (`_ds_bundle.js`, `_ds_manifest.json`,
`_adherence.oxlintrc.json`), and a few exported HTML artifacts at the repo root.

### Running it (dev workflow)
There is nothing to compile. Serve the repo root as static files and open an artifact in a browser:

```
python3 -m http.server 8000        # then open http://localhost:8000/<file>.html
```

Runnable root artifacts:
- `thumbnail.html` — static brand tile. Renders standalone.
- `portal-export.html` — the flagship **customer portal** (branded login + client-portal
  dashboard app shell). Renders standalone as a branded UI.
- `hyperframes-process.html` — a 1920×1080 animated brand-process composition.

### Non-obvious gotchas (important)
- **This is a partial export.** The `tokens/`, `assets/`, `components/`, `ui_kits/`, and
  `templates/` directories referenced throughout `DESIGN.md` / `readme.md` are **not present**
  in this repository. Consequently:
  - `styles.css` `@import`s (`tokens/*.css`) 404, and `assets/*` images 404 (artifacts have
    inline fallbacks, e.g. `thumbnail.html` falls back to a text logo).
  - `portal-export.html` references `templates/customer-portal/support.js` (the Design-Component
    runtime) and `portal-ds-base.js` (loads the brand-token CSS) — **both absent**. So the
    portal's interactive routing/theme-toggle/login-submit are inert, and any styling driven by
    brand tokens (e.g. `--grad-bolt`, brand fonts) falls back. Visible symptom: the gold
    "Sign in" button renders blank/dark because `--grad-bolt` (gold gradient) and its ink text
    color are undefined. Most of the UI uses hardcoded inline hex, so it still renders on-brand.
    This is expected in this snapshot — do **not** treat it as a code bug to "fix".
- **`hyperframes-process.html` needs a GPU/WebGL browser + internet.** It loads GSAP and the
  HyperFrames runtime from `cdn.jsdelivr.net`. In a headless / GPU-less sandbox browser the
  `@hyperframes/shader-transitions` plugin throws `GroupMasterNotSetException` and the
  composition renders blank. It requires a WebGL-capable browser (or the HyperFrames editor
  context), not a repo change.
- **Never hand-edit the generated files** (`_ds_bundle.js`, `_ds_manifest.json`,
  `_adherence.oxlintrc.json`) — regenerate from source instead (`DESIGN.md` §9). In this
  snapshot the source tree that produces them is not included.
- **No lint/test/build commands apply here.** `_adherence.oxlintrc.json` targets the full
  design-system source tree (`components/**`, `ui_kits/**`, …) which is not part of this export,
  so there is nothing to lint in this snapshot.
