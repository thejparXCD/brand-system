# Design system contract

**Canonical brand-system specification for this repository.** Open Design agents should start at `open-design/celebration-onpoint/USAGE.md`. This file is the full Celebration OnPoint contract: structure, rules, and consumption. `docs/brand-guidelines.md` carries narrative; `open-design/celebration-onpoint/DESIGN.md` is the schema-mapped subset.

- **Owner:** Celebration Holdings, dba Celebration OnPoint / OnPoint Sky Solutions
- **Namespace (compiled bundle):** `window.CelebrationOnPointDesignSystem_2fb49a`
- **Brand token entry:** `packages/tokens/styles.css`
- **Open Design tokens:** `open-design/celebration-onpoint/tokens.css`
- **License / use:** internal brand property. Not for redistribution.

---

## 1. Repository layout

```
.
├── README.md
├── SKILL.md
├── packages/
│   ├── tokens/                brand-native CSS custom properties
│   │   ├── styles.css         single entry; @imports src/*
│   │   ├── src/               fonts, colors, type, spacing, effects, base, lightfields
│   │   ├── fonts/             self-hosted woff2
│   │   └── assets/lightfields photographic plates (restore originals here)
│   ├── ui/                    React primitives — do not flatten
│   │   ├── src/forms|display|navigation|feedback
│   │   └── dist/              _ds_bundle.js · _ds_manifest.json · _adherence.oxlintrc.json
│   └── web/                   landing, portal-export, thumbnail, process artifact
├── docs/
│   ├── brand-guidelines.md
│   ├── component-rules.md
│   ├── accessibility-rules.md
│   └── design-system.md       ← this file
└── open-design/celebration-onpoint/   Open Design v1 package
```

### Generated — never hand-edit, never treat as source

`packages/ui/dist/_ds_bundle.js` · `_ds_manifest.json` · `_adherence.oxlintrc.json`

These are produced by the design-system compiler. They are committed so consuming projects can load the bundle without a build step. Change source files, then recompile.

---

## 2. Component contract

Every component follows a fixed four-part shape. Nothing may be flattened into HTML — the `.jsx` file is the source of truth.

| File | Role |
| --- | --- |
| `<Name>.jsx` | React implementation |
| `<Name>.d.ts` | TypeScript declaration — the public prop contract |
| `<Name>.prompt.md` | Agent-facing usage guidance |
| `<group>.html` | `@dsCard`-tagged specimen (when a group card exists) |

**Discovery rule:** the compiler registers a component when it finds `<Name>.d.ts` beside `<Name>.jsx` in the same directory, with `<Name>` in PascalCase. Only capitalized exports reach the window namespace.

```js
const { Button, PillarCard, Stat } = window.CelebrationOnPointDesignSystem_2fb49a;
```

Load `packages/ui/dist/_ds_bundle.js` — never `<script src>` a `.jsx` directly.

---

## 3. Design foundations

### Color

A two-note chord. Blue is the foundation; gold is the accent.

| Token | Hex | Role |
| --- | --- | --- |
| `--c-sky` | `#59C4E5` | bright sky-cyan, top of the blue ramp |
| `--c-azure` | `#2896D2` | secondary / links / focus ring |
| `--c-blue` | `#1056A5` | **core brand blue — primary** |
| `--c-navy` | `#081E42` | deep navy, dark plates |
| `--c-ink` | `#0A0814` | violet-black ground |
| `--c-gold` | `#F5C518` | **momentum bolt — accent, used sparingly** |
| `--c-gold-warm` | `#F9A02A` | hover / warm end of gold |

**Neutrals are cool, navy-tinted — never pure gray.**

`--n-0 #FFFFFF` · `--n-25 #F7F9FC` · `--n-50 #EEF2F8` · `--n-100 #E2E8F2` · `--n-200 #C9D3E2` · `--n-300 #A6B3C7` · `--n-400 #7C8AA1` · `--n-500 #5A687E` · `--n-600 #404C61` · `--n-700 #2A3447` · `--n-800 #182032` · `--n-900 #0D1424` · `--n-950 #070C18`

**External brand-config mapping** (HeyGen, Canva, Elementor globals):

- Primary `#1056A5` · Secondary `#081E42` · Tertiary `#2896D2` · Accent `#F5C518`

**Service-line gradients** are radial — lighter core, dark edges — over the shared gold accent:

| Service line | Core → edge | Accent |
| --- | --- | --- |
| Technology & Infrastructure *(Machines)* | `#3A1270` → `#0A0814` | `#F5C518` |
| Growth & Workforce *(Message)* | `#E8920C` → `#0A1A3E` | `#F5C518` |
| Mission Strategy & Readiness *(Mission)* | `#2896D2` → `#081E42` | `#F5C518` |

`--grad-data` (charcoal) is legacy and reserved for OnPoint Sky Solutions co-branded artifacts only.

**AIM phase colors:** Acquire `#1056A5` · Integrate `#2896D2` · Maximize `#F5C518` (on light grounds, use `#B08A05` for Maximize text).

### Type

| Role | Face | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines | **Poppins** | 600–700 | tracking `-0.02em` at large sizes |
| Body / UI | **Open Sans** | 400–500, 600, 700 | paragraphs, UI labels |
| Mono / eyebrows / data | **IBM Plex Mono** | 400–500 | uppercase eyebrows at `0.14em`; all metrics |

Scale: 1.250 major third on a 16px base. Self-hosted woff2 lives in `packages/tokens/fonts/`. Google Fonts remains a fallback.

Minimum sizes: 1920×1080 slide text never below 24px · print 12pt · mobile hit targets ≥44px.

### Spacing, radii, layout

4px base unit. Marketing sections ~88px vertical padding. Content maxes at 1200px. Radii are a squircle family echoing the logo's rounded-square C: cards `--radius-lg` (16px), tiles/CTAs `--radius-xl`/`2xl`, pills for badges and toggles. **Always lay out sibling groups with flex/grid + `gap`** — never margin-based inline flow.

### Elevation and motion

Shadows are cool and navy-tinted (`rgba(8,30,66,…)`), never black — a five-step ramp plus two brand glows (gold, blue) used only on dark surfaces and key CTAs.

Motion is confident and slightly snappy: `--ease-out` `cubic-bezier(0.16,1,0.3,1)`, durations 120/200/360ms. **No bounce. No infinite decorative loops.** Hover on interactive cards is a lift (`translateY(-3px)`) plus elevation or glow. Focus shows the azure ring. Always respect `prefers-reduced-motion`.

---

## 4. Signature systems

### Light Fields

The most recognizable brand surface: **cool light from the left, warm gold light from the right, over a near-black ground, pooling on the floor.** Every dark surface should feel this way — beams, glows, horizons, never flat black.

Two delivery paths:

- **CSS light fields** (`packages/tokens/src/lightfields.css`) — scalable and themeable. Drop an `aria-hidden` layer inside any `position:relative; overflow:hidden` container; keep content at `position:relative`.

  ```html
  <section style="position:relative; overflow:hidden">
    <div class="cop-lightfield cop-lf--pillars" aria-hidden="true"></div>
    <div style="position:relative"> …content… </div>
  </section>
  ```

  Variants: `--pillars`, `--horizon`, `--aurora`, `--purple`, `--spotlight`. Add `--alive` for a reduced-motion-safe breathing drift.

- **Photographic plates** (`packages/tokens/assets/lightfields/`) — the original renders, exposed as `--lf-plate-*` tokens and `.cop-lf-plate--*` classes: pillars-bluegold, pillars-goldup, rays-blue, rays-bluegold, rays-purplegold, glow-purplegold, horizon-bluegold, whispy-bluegold, smoky-bluegold, burst-gold. Mask them so they fade into the ink ground; crop spire height to the canvas (quote cards ~44%, Instagram/TikTok ~34%, reels ~40%, wide banners full height). Restore the original PNGs when available — do not invent replacements.

Usage rhythm: alternate dark Light Field sections with light surfaces.

### Two-tier brand system

- **Tier 1 — OnPoint Momentum (primary, default).** Engagement, commercial growth, training, marketing. Calm authority with forward motion. Ink ground, soft gradient glows, sparing gold. Helper: `.cop-tier-momentum`.
- **Tier 2 — Precision Authority (selective).** Federal, cybersecurity, AI infrastructure, VDI. Structured, high-contrast, precise grid overlays. Helpers: `.cop-tier-authority` + `.cop-grid-overlay`.

### Iconography

**System: [Lucide](https://lucide.dev)** — 2px stroke, 24×24 grid, rounded caps and joins. A curated dependency-free subset is inlined in `packages/ui/src/icons.jsx`, exposing `window.Icon`: `<Icon name="arrow-right" size={16} />`. Extend by pasting the inner SVG of any Lucide glyph into its `PATHS` map. Components take icon **nodes** as props (`iconLeft`, `icon`) rather than bundling a set.

**No emoji. No unicode pictographs as icons.** The only recurring non-icon motif is the **gold momentum rule** — a 3px gradient bar standing in for the logomark's bolt.

### Illustration standard

- **Technical line art.** Flat, front-on, real objects — a sensor, a sheet, a rotor, a chart. Never isometric, never 3D, never abstract blobs or characters.
- **24×24 artboard**, **1.75px** uniform stroke, round caps and joins, **2px** corner radius on rectangles. Scale in whole multiples: 24 inline, 48 in lists, 64–80 as feature art.
- **Line palette:** `#081E42` primary · `#1056A5` structure · `#2896D2` secondary · `#C9D3E2` recede.
- **Exactly one gold element per illustration**, marking the payoff. Two golds and neither means anything.
- Open strokes only — no gradient inside a stroke, no drop shadows. One optional blue 8% tint plane for emphasis.
- Light Fields sits **behind an ink plate**, never behind line art.

---

## 5. Voice and content rules

- **Write in threes.** Cadence and parallelism are the signature: *"see more, sell more, operate smarter"* · *"Message, Machines, Mission."*
- **Confident, declarative, plain.** Short sentences, active verbs, stated outcomes. No hedging.
- **"We" for the firm, "you/your" for the client.** Never first-person singular.
- **Reusable vocabulary:** asymmetric advantage · hidden reality · visible / actionable · momentum · M³ · AIM OnPoint™ · 6 C's · Reality Audit · readiness · signal. Tagline: *We build momentum. Real. Measurable. Unstoppable. OnPoint.*
- **Casing:** title-style display headlines; ALL-CAPS only for wide-tracked mono eyebrows. The three M's are always capitalized.
- **Numbers carry weight** — concrete metrics in the mono face (`+38%`, `$2.1M`, `3.4×`). One strong stat beats five weak ones.

### Brand boundary — non-negotiable

**Visual Data Intelligence (4D capture, drones, Matterport) is not a Celebration OnPoint service line.** It belongs to sister company **OnPoint Sky Solutions**. It may appear only as a footer "family of brands" link.

---

## 6. Templates

Template HTML that still exists in this checkout lives under `packages/web/`. Historical Design Component folders (`templates/<slug>/`) were not present in the imported commit; keep the catalog and rules so they can be restored without changing the contract.

| Template | Purpose |
| --- | --- |
| `homepage` | Marketing homepage |
| `brand-landing` | Brand / campaign landing page |
| `speaker-hero` | Speaker & author hero (three layout variations) |
| `blog-index` | Blog index, dark editorial header |
| `blog-post` | Editorial post with sidebar |
| `pillar-silo` | Pillar silo page, lighter header (Growth & Workforce, Machines, Mission) |
| `media-kit` | Media / press kit |
| `report-cover` | Report cover — adaptable to proposals and SOWs |
| `customer-portal` | Customer portal and purpose-built app shell (see §7) |
| `process-diagram` | Numbered process rail positioned against AIM phases |
| `social-reel` | Reel frames, native pixel size (six usage examples) |
| `quote-card` | Quote cards (four variations) |
| `social-banners` | YouTube, LinkedIn, Facebook, X, Instagram, TikTok |

**Attribution split:** social templates (reel, quote card, banners) carry Celebration OnPoint brand — mark, handles, URLs, three-pillar role lines. Speaker Hero, Media Kit, Blog, and Report Cover retain Joe Paranteau's personal attribution.

Templates are **not** compiled into `_ds_bundle.js`. `support.js` in each folder is generated DC runtime — do not hand-edit.

---

## 7. Portal / application shell

The customer portal is the shared shell for the customer portal **and** for purpose-built internal apps. Decisions baked into it:

- **Both light and dark surfaces**, switched by one toggle.
- **Wide sidebar navigation**, balanced density.
- **No Light Fields inside the working surface** — the app is a flat work surface. Brand atmosphere lives on marketing pages, not on a tool people use all day.
- **Gold for action, AIM phase colors for data.**
- Primary audience: commercial clients (drone, workforce, RevOps). Home surfaces engagement status, task queue, document library, invoices, messages with OnPoint, team contacts, and the support request.
- Ships with detail/record, settings & profile, and login screens.

`packages/web/portal-export.html` is the standalone deployed build. Keep the portal loader out of the compiled tree — placing it at the repository root causes the bundle to execute a second stylesheet loader.

---

## 8. WordPress / Elementor handoff

The Elementor + Novamira handoff (`wordpress/`, `deploy-package/`) was not present in the imported commit. The rules still apply when those packages are restored:

- `NOVAMIRA-SKILL.md` — AI build rules for the page builder
- `cop-wp.css` — flattened brand stylesheet for WordPress
- `elementor-globals.json` — Global Colors and Global Fonts, pre-mapped
- `HOMEPAGE-BLUEPRINT.md` — section recipes with approved copy
- `BORDER-BEAMS.md`, `VIDEO-HERO.md` — effect recipes

All new page work goes through the staging sites via Novamira. Thrive Themes is retired.

---

## 9. Working rules for contributors and agents

1. **Never hand-edit generated files.** Change the source, recompile.
2. **Never flatten a React component into HTML.** The `.jsx` is the contract; specimen cards consume the compiled bundle. The Open Design `components.html` fixture is the only approved HTML stand-in.
3. **Never regenerate or "simplify" assets.** The Light Field plates, logomarks, and uploaded source imagery are originals.
4. **Colors come from tokens.** If a token doesn't exist, derive it in `oklch` from the existing palette and add it to `packages/tokens/src/colors.css` — don't invent a one-off hex inline.
5. **Define `a` and `a:hover` colors** in any standalone artifact, even one with no links yet.
6. **Two background colors per deck, maximum.**
7. **Templates own their own folder.** Nothing template-related belongs at the repository root.
8. **When a card or template changes, validate the whole system** before committing — the compiler reports orphan `.d.ts` files, unresolved `@font-face` sources, cards loading raw `.jsx`, duplicate component names, and stale manifests.

---

## 10. Open Design notes

- Import `open-design/celebration-onpoint/`. Folder slug equals `manifest.id`.
- That package maps brand decisions onto the shared Open Design schema (`--bg`, `--fg`, `--accent`). Brand-native names stay in `packages/tokens`.
- Derived files (`components.manifest.json`, `source/tokens.source.json`) are regenerated with `npm run generate:open-design`.
- Binary assets (PNG, JPG, MP4, PDF) are committed as-is. If the repo grows past comfortable size, move `uploads/` and `scraps/` to LFS rather than deleting them.
- The system is intentionally dependency-free: plain CSS, plain React via CDN, plain HTML.
