# Design systems (Open Design)

Portable packages for [Open Design](https://open-design.ai/). Each subfolder is a self-contained design-system project.

## Celebration OnPoint

**Path:** `design-systems/celebration-onpoint/`

| File | Role |
| --- | --- |
| `manifest.json` | Discovery metadata (`id: celebration-onpoint`) |
| `DESIGN.md` | Agent prose contract |
| `USAGE.md` | Read order, do / avoid |
| `tokens.css` | Open Design schema tokens (`--bg`, `--fg`, `--accent`, …) |
| `lightfields.css` | Light Fields atmosphere classes |
| `components.html` | Standalone component fixture |
| `preview/` | Human review pages |

### Import into Open Design

**Local folder (recommended):**

1. Open Design → Settings → Design Systems → Import → **Local path**
2. Paste the absolute path to `design-systems/celebration-onpoint` in this repo
3. Select **Celebration OnPoint** in the design-system picker before generating

**GitHub (after this package is on `main`):**

1. Import → GitHub URL: `https://github.com/thejparXCD/brand-system`
2. If the importer does not auto-detect the package, use the **local path** to `design-systems/celebration-onpoint` instead — the repo root is a full design-system repo, not a single-package repo.

**CLI:**

```bash
od design-systems import-local --baseDir /path/to/brand-system/design-systems/celebration-onpoint
```

### Regenerate component index

```bash
node scripts/generate-open-design-indexes.mjs
```
