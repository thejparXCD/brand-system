# Celebration OnPoint source evidence

## Source scope

Hand-authored Open Design package derived from the Celebration OnPoint brand-system repository (`thejparXCD/brand-system`). Not a crawl of an external marketing site.

## Included source files (repo root)

- `readme.md` — brand narrative, voice, visual foundations
- `DESIGN.md` (root) — full repo contract
- `SKILL.md` — agent skill entry
- `tokens/*.css` + `styles.css` — brand-native custom properties
- `_ds_manifest.json` — compiled token inventory
- `_ds_bundle.js` — compiled React primitives
- `components/` — React source + `.prompt.md` per component
- `guidelines/cards/` — color, type, spacing specimens
- `templates/` — homepage, portal, social layouts

## Token contract

`source/tokens.source.json` maps Open Design schema bindings to `tokens.css`. Brand-native names (`--c-blue`, `--c-gold`, `--grad-mission`, Light Field plates) live in repo `tokens/` and are duplicated as extensions in this package's `tokens.css` where agents need them.

## Import note

Import path: `design-systems/celebration-onpoint/` (folder), not the repository root.
