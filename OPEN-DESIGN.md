# Open Design integration

This repository includes a portable **Celebration OnPoint** package for [Open Design](https://open-design.ai/).

## Quick start

1. **Import** `design-systems/celebration-onpoint/` into Open Design (local path import is most reliable).
2. **Select** “Celebration OnPoint” in the design-system picker before you prompt.
3. Agents read `DESIGN.md`, `USAGE.md`, and paste `tokens.css` into artifacts — they should not invent colors or fonts.

## Package location

```text
design-systems/celebration-onpoint/
├── manifest.json
├── DESIGN.md          ← agent constraints + anti-patterns
├── USAGE.md
├── tokens.css         ← --bg, --fg, --accent schema
├── lightfields.css
├── components.html
└── preview/
```

A mirror copy lives at `open-design/celebration-onpoint/` (same contents).

## Full brand repo (this repository)

| Path | Use |
| --- | --- |
| `readme.md` / `DESIGN.md` (root) | Human + repo contract |
| `SKILL.md` | Cursor skill entry |
| `tokens/` + `styles.css` | Brand-native tokens (`--c-blue`, `--c-gold`, Light Fields) |
| `components/` | React source + `.prompt.md` per component |
| `templates/` | Homepage, portal, social, blog layouts |
| `guidelines/cards/` | Color, type, spacing specimens |

Open Design agents should start from the **package** (`design-systems/celebration-onpoint/`). Production React uses `components/` and `_ds_bundle.js`.

## Why GitHub import may fail

- The package must exist on the branch you import (merge `design-systems/` to `main` first).
- Importing the **repo root** may not find a package — point Open Design at the **folder** `design-systems/celebration-onpoint`.
- Hybrid import expects `source/` evidence files; this package ships them.

See `design-systems/README.md` for import commands.
