# DESIGN.md — Celebration OnPoint Design System

**Canonical design reference for this repository.** This is the authoritative specification: what the system contains, how it is structured, the rules that govern it, and how to consume it. `readme.md` carries the brand narrative and rationale; this file carries the contract.

- **Owner:** Celebration Holdings, dba Celebration OnPoint / OnPoint Sky Solutions
- **Namespace (compiled bundle):** `window.CelebrationOnPointDesignSystem_2fb49a`
- **Entry stylesheet:** `styles.css`
- **License / use:** internal brand property. Not for redistribution.

---

## 1. Repository layout

```
.
├── DESIGN.md                  ← this file (canonical spec)
├── readme.md                  ← brand narrative, philosophy, rationale
├── SKILL.md                   ← agent skill entry for the design system
├── styles.css                 ← single entry point; @imports all tokens
├── thumbnail.html             ← project tile
│
├── tokens/                    ← CSS custom-property source of truth
│   ├── fonts.css              ← @font-face / Google Fonts loading
│   ├── colors.css             ← brand, neutral, semantic, gradient tokens
│   ├── typography.css         ← type scale, weights, tracking
│   ├── spacing.css            ← 4px base unit, radii, container widths
│   ├── effects.css            ← shadows, glows, easings, durations, ring
│   ├── base.css               ← resets, tier helpers, grid overlay
│   └── lightfields.css        ← .cop-lightfield / .cop-lf-plate atmosphere
│
├── components/                ← React components (source of truth — do not flatten)
│   ├── forms/                 Button, IconButton, Input, Textarea, Select,
│   │                          Checkbox, Radio, Switch
│   ├── display/               Card, Badge, Tag, Avatar, Stat, PillarCard
│   ├── navigation/            Tabs, Breadcrumb
│   ├── feedback/              Alert, ProgressBar, Tooltip
│   └── effects/               motion / decorative helpers
│
├── assets/
│   ├── logo-mark.png          full-color logomark
│   ├── logo-mark-alt.png      alternate bolt angle
│   ├── logo-mark-white.png    knockout
│   ├── logo-emblem-dark.jpg   circular emblem on ink
│   ├── icons.jsx              curated Lucide subset → window.Icon
│   └── lightfields/           photographic Light Field plates (10 PNGs)
│
├── guidelines/cards/          foundation specimen cards (Colors, Type, Spacing, Brand)
├── templates/<slug>/          Design Component templates (see §6)
├── ui_kits/website/           interactive marketing homepage kit
├── wordpress/                 Elementor / Novamira handoff package
├── deploy-package/            WordPress deploy bundle (CSS + docs + logos + plates)
├── endcard/                   YouTube end-card artifact + its assets
├── uploads/                   source imagery supplied by the brand owner
└── scraps/                    working references (stinger frames, checks)
```

### Generated — never hand-edit, never treat as source

`_ds_bundle.js` · `_ds_manifest.json` · `_adherence.oxlintrc.json`

These are produced by the design-system compiler from the sources above. They are committed so consuming projects can load the bundle directly without a build step, but any change must be made in the source files and recompiled.

---

## 2. Component contract

Every component directory follows a fixed four-part shape. Nothing may be flattened into HTML — the `.jsx` file is the source of truth.

| File | Role |
| --- | --- |
| `<Name>.jsx` | React implementation. The component. |
| `<Name>.d.ts` | TypeScript declaration — the public prop contract. Required; the compiler discovers components by this file. |
| `<Name>.prompt.md` | Agent-facing usage guidance: when to use it, when not to, worked examples. |
| `<group>.html` | `@dsCard`-tagged specimen supplying the group's thumbnail. |

**Discovery rule:** the compiler registers a component when it finds `<Name>.d.ts` beside `<Name>.jsx` in the same directory, with `<Name>` in PascalCase. Only capitalized exports reach the window namespace.

**Consuming a component:**

```js
const { Button, PillarCard, Stat } = window.CelebrationOnPointDesignSystem_2fb49a;
```

Load `_ds_bundle.js` — never `<script src>` a `.jsx` directly.

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

**External brand-config mapping** (for tools that ask for four slots — HeyGen, Canva, Elementor globals):

- Primary `#1056A5` · Secondary `#081E42` · Tertiary `#2896D2` · Accent `#F5C518`

**Service-line gradients** are radial — lighter core, dark edges — over the shared gold accent:

| Service line | Core → edge | Accent |
| --- | --- | --- |
| Technology & Infrastructure *(Machines)* | `#3A1270` → `#0A0814` | `#F5C518` |
| Growth & Workforce *(Message)* | `#E8920C` → `#0A1A3E` | `#F5C518` |
| Mission Strategy & Readiness *(Mission)* | `#2896D2` → `#081E42` | `#F5C518` |

`--grad-data` (charcoal) is legacy and reserved for OnPoint Sky Solutions co-branded artifacts only.

**AIM phase colors** (data and process visualizations): Acquire `#1056A5` · Integrate `#2896D2` · Maximize `#F5C518` (on light grounds, use `#B08A05` for Maximize text so it stays legible).

### Type

| Role | Face | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines | **Poppins** | 600–700 | tracking `-0.02em` at large sizes |
| Body / UI | **Open Sans** | 400–500, 600, 700 | paragraphs, UI labels |
| Mono / eyebrows / data | **IBM Plex Mono** | 400–500 | uppercase eyebrows at `0.14em`; all metrics |

Scale: 1.250 major third on a 16px base. Loaded from Google Fonts in `tokens/fonts.css`. **Self-host `@font-face` files for production, offline, or video-render use** — several export paths (HyperFrames, PDF, offline bundles) cannot resolve a Google Fonts link.

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

- **CSS light fields** (`tokens/lightfields.css`) — scalable and themeable. Drop an `aria-hidden` layer inside any `position:relative; overflow:hidden` container; keep content at `position:relative`.

  ```html
  <section style="position:relative; overflow:hidden">
    <div class="cop-lightfield cop-lf--pillars" aria-hidden="true"></div>
    <div style="position:relative"> …content… </div>
  </section>
  ```

  Variants: `--pillars`, `--horizon`, `--aurora`, `--purple`, `--spotlight`. Add `--alive` for a reduced-motion-safe breathing drift.

- **Photographic plates** (`assets/lightfields/`) — the original renders, exposed as `--lf-plate-*` tokens and `.cop-lf-plate--*` classes: pillars-bluegold, pillars-goldup, rays-blue, rays-bluegold, rays-purplegold, glow-purplegold, horizon-bluegold, whispy-bluegold, smoky-bluegold, burst-gold. Mask them so they fade into the ink ground; crop spire height to the canvas (quote cards ~44%, Instagram/TikTok ~34%, reels ~40%, wide banners full height).

Usage rhythm: alternate dark Light Field sections with light surfaces.

### Two-tier brand system

- **Tier 1 — OnPoint Momentum (primary, default).** Engagement, commercial growth, training, marketing. Calm authority with forward motion. Ink ground, soft gradient glows, sparing gold. Helper: `.cop-tier-momentum`.
- **Tier 2 — Precision Authority (selective).** Federal, cybersecurity, AI infrastructure, VDI. Structured, high-contrast, precise grid overlays. Helpers: `.cop-tier-authority` + `.cop-grid-overlay`.

### Iconography

**System: [Lucide](https://lucide.dev)** — 2px stroke, 24×24 grid, rounded caps and joins. A curated dependency-free subset is inlined in `assets/icons.jsx`, exposing `window.Icon`: `<Icon name="arrow-right" size={16} />`. Extend by pasting the inner SVG of any Lucide glyph into its `PATHS` map. Components take icon **nodes** as props (`iconLeft`, `icon`) rather than bundling a set.

**No emoji. No unicode pictographs as icons.** The only recurring non-icon motif is the **gold momentum rule** — a 3px gradient bar standing in for the logomark's bolt.

### Illustration standard

Specimen: `guidelines/cards/brand-illustration.html`.

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

Each template is a self-contained folder `templates/<slug>/` whose entry is `<Slug>.dc.html` (a Design Component), with a sibling `ds-base.js` that loads the design system:

```js
// templates/<slug>/ds-base.js — one line to repoint in a consuming project
const base = '../..';
```

Templates are **not** compiled into `_ds_bundle.js`; they surface as their own "Templates" group in the consuming-project picker. `support.js` in each folder is the generated DC runtime — do not hand-edit.

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

---

## 7. Portal / application shell

The `customer-portal` template is the shared shell for the customer portal **and** for purpose-built internal apps. Decisions baked into it:

- **Both light and dark surfaces**, switched by one toggle.
- **Wide sidebar navigation**, balanced density.
- **No Light Fields inside the working surface** — the app is a flat work surface. Brand atmosphere lives on marketing pages, not on a tool people use all day.
- **Gold for action, AIM phase colors for data.**
- Primary audience: commercial clients (drone, workforce, RevOps). Home surfaces engagement status, task queue, document library, invoices, messages with OnPoint, team contacts, and the support request.
- Ships with detail/record, settings & profile, and login screens.

`portal-export.html` at the repository root is the standalone deployed build; `templates/customer-portal/portal-ds-base.js` is its loader. Keep that loader out of the compiled tree — placing it at the root causes the bundle to execute a second stylesheet loader and errors every card.

---

## 8. WordPress / Elementor handoff

`wordpress/` and `deploy-package/` carry the Elementor + Novamira handoff:

- `NOVAMIRA-SKILL.md` — AI build rules for the page builder
- `cop-wp.css` — flattened brand stylesheet for WordPress
- `elementor-globals.json` — Global Colors and Global Fonts, pre-mapped
- `HOMEPAGE-BLUEPRINT.md` — section recipes with approved copy
- `BORDER-BEAMS.md`, `VIDEO-HERO.md` — effect recipes

All new page work goes through the staging sites via Novamira. Thrive Themes is retired.

---

## 9. Working rules for contributors and agents

1. **Never hand-edit generated files.** Change the source, recompile.
2. **Never flatten a React component into HTML.** The `.jsx` is the contract; specimen cards consume the compiled bundle.
3. **Never regenerate or "simplify" assets.** The Light Field plates, logomarks, and uploaded source imagery are originals.
4. **Colors come from tokens.** If a token doesn't exist for what you need, derive it in `oklch` from the existing palette and add it to `tokens/colors.css` — don't invent a one-off hex inline.
5. **Define `a` and `a:hover` colors** in any standalone artifact, even one with no links yet.
6. **Two background colors per deck, maximum.**
7. **Templates own their own folder.** Nothing template-related belongs at the repository root.
8. **When a card or template changes, validate the whole system** before committing — the compiler reports orphan `.d.ts` files, unresolved `@font-face` sources, cards loading raw `.jsx`, duplicate component names, and stale manifests.

---

## 10. Migration notes (Forgejo)

- Clone target: a single repository, this tree at its root.
- `_ds_bundle.js`, `_ds_manifest.json`, and `_adherence.oxlintrc.json` **are committed** — consuming projects load the bundle with no build step.
- `.thumbnail` files and `.bundles/` are editor-local artifacts; a `.gitignore` at the root excludes them.
- Binary assets (PNG, JPG, MP4, PDF) are committed as-is. If the repo grows past comfortable size, move `uploads/` and `scraps/` to LFS rather than deleting them — they are the source imagery of record.
- No `node_modules`, no lockfile, no build pipeline. The system is intentionally dependency-free: plain CSS, plain React via CDN, plain HTML.
