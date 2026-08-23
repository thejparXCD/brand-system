# Celebration OnPoint source evidence

## Source scope

This Open Design package is a hybrid import of the Celebration OnPoint brand system in this repository. It does not claim a crawl of an external marketing site.

Canonical brand prose and compiled tokens were reconstructed from the files that were present at import time, plus the committed design-system compiler outputs.

## Included source files

- `DESIGN.md` (repository contract, now packaged here)
- `readme.md` / `docs/brand-guidelines.md` (voice and philosophy)
- `_ds_manifest.json` (compiled token inventory)
- `_ds_bundle.js` (compiled React primitives)
- `styles.css` (historical token entry)

## Token contract

`source/tokens.source.json` maps every Open Design schema binding back to the committed `tokens.css` declaration. Brand-native names (`--c-blue`, `--c-gold`, `--n-*`) remain in `packages/tokens` and are not C-extensions of this package.
