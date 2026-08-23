# Celebration OnPoint — brand system

> We build momentum. Real. Measurable. Unstoppable. OnPoint.

This repository is the brand + product design system for **Celebration OnPoint**, laid out for [Open Design](https://github.com/nexu-io/open-design) import.

```text
brand-system/
├── packages/
│   ├── tokens/          brand-native CSS custom properties
│   ├── ui/              React primitives + compiled bundle
│   └── web/             marketing, portal, and artifact HTML
├── docs/
│   ├── brand-guidelines.md
│   ├── component-rules.md
│   ├── accessibility-rules.md
│   └── design-system.md     full brand contract (layout, tokens, templates, rules)
├── open-design/
│   └── celebration-onpoint/   Open Design v1 package
└── README.md
```

## Open Design package

Import `open-design/celebration-onpoint/` as a local or GitHub design system. The folder slug matches `manifest.id`.

| File | Role |
| --- | --- |
| `manifest.json` | Discovery metadata and declared paths |
| `DESIGN.md` | Canonical agent prose |
| `USAGE.md` | Read order, highlights, do / avoid |
| `tokens.css` | Shared-schema compiled tokens (`--bg`, `--fg`, `--accent`, …) |
| `components.html` | Standalone fixture |
| `components.manifest.json` | Derived component / token index |
| `fonts/` | Self-hosted Poppins woff2 |
| `assets/` | `logo.svg`, `icon-mark.svg` |
| `preview/` | Human review pages |
| `source/` | Import evidence |

Agents should paste the `:root` block from `tokens.css` into the first artifact `<style>` before writing component CSS.

## Production packages

- **tokens** — `--c-blue`, `--c-gold`, `--n-*`, Light Fields, and the historical `styles.css` entry.
- **ui** — React source plus `dist/_ds_bundle.js` for the previous `window.CelebrationOnPointDesignSystem_2fb49a` namespace.
- **web** — landing preview, customer-portal export, thumbnail, and process artifact.

## Brand truths

Blue is the foundation. Gold `#F5C518` is the sparing accent. Dark surfaces use **Light Fields** (cool left, warm right, never flat black). Voice writes in threes. **Visual Data Intelligence is not this brand** — it belongs to OnPoint Sky Solutions.

Start with `docs/design-system.md` for the full contract, `docs/brand-guidelines.md` for voice, or `SKILL.md` when designing artifacts.
