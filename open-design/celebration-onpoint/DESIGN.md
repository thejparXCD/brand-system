# DESIGN.md — Celebration OnPoint

**Canonical design reference for Open Design agents.** This file is the prose contract. `tokens.css` is the compiled binding. The full brand-system contract is `docs/design-system.md`; `docs/brand-guidelines.md` carries narrative.

- **Owner:** Celebration Holdings, dba Celebration OnPoint / OnPoint Sky Solutions
- **Package id:** `celebration-onpoint`
- **License / use:** internal brand property. Not for redistribution.

## Visual theme and atmosphere

The identity is a two-note chord: a **blue C** running from sky-cyan `#59C4E5` through core blue `#1056A5` to navy `#081E42` and violet-black ink `#0A0814`, and a **gold momentum bolt** `#F5C518`. Blue is the foundation. Gold is the accent — used sparingly for the single most important action, live signals, and the 3px momentum rule.

**Light Fields** is the signature surface: cool light from the left, warm gold from the right, over near-black, pooling on the floor. Every dark surface should glow. Never sit a hero, footer, or ink plate as flat black.

Two tiers share one energy system:

- **OnPoint Momentum** (primary) — engagement, commercial growth, training. Calm authority with forward motion.
- **Precision Authority** (selective) — federal, cybersecurity, AI infrastructure. Structured grid overlays, higher contrast.

Product and portal chrome stay flat. Light Fields belongs on marketing surfaces, not on tools people use all day.

## Color roles and contrast

| Role | Value | Token |
| --- | --- | --- |
| Page background | `#F7F9FC` | `--bg` |
| Card surface | `#FFFFFF` | `--surface` |
| Sunken / warm surface | `#EEF2F8` | `--surface-warm` |
| Primary text | `#0D1424` | `--fg` |
| Secondary text | `#2A3447` | `--fg-2` |
| Muted / captions | `#5A687E` | `--muted` |
| Metadata | `#7C8AA1` | `--meta` |
| Border | `#C9D3E2` | `--border` |
| Soft separator | `#E2E8F2` | `--border-soft` |
| Accent (gold) | `#F5C518` | `--accent` |
| Text on accent | `#0A0814` | `--accent-on` |
| Success / warn / danger | `#1F9D6B` / `#E8920C` / `#DC4B4B` | `--success` `--warn` `--danger` |

On ink surfaces, invert to `--bg: #0A0814`, `--fg: #FFFFFF`, `--muted: #A6B3C7`. Gold remains the accent.

External four-slot mapping (HeyGen, Canva, Elementor): Primary `#1056A5` · Secondary `#081E42` · Tertiary `#2896D2` · Accent `#F5C518`.

Gold is not body text on white. Maximize-phase gold on light grounds uses `#B08A05`.

## Typography

| Role | Face | Token |
| --- | --- | --- |
| Display / headlines | Poppins 600–700 | `--font-display` |
| Body / UI | Open Sans 400–700 | `--font-body` |
| Mono / eyebrows / data | IBM Plex Mono | `--font-mono` |

Scale is a 1.250 major third on a 16px base, bound as `--text-xs` 12px through `--text-4xl` 67px. Display sizes use `--tracking-display: -0.02em` and `--leading-tight: 1.2`. Body uses `--leading-body: 1.5`.

Uppercase eyebrows are the only ALL-CAPS treatment and must use wide tracking (`0.14em`) in the mono face.

## Spacing, layout, and composition

4px base unit. Marketing section padding is `--section-y-desktop: 88px` (56px tablet, 40px phone). Content maxes at `--container-max: 1200px`. Gutters are 24 / 20 / 16.

Radii echo the logo’s rounded-square C: `--radius-sm` 6px for controls, `--radius-md` 10px for tiles, `--radius-lg` 16px for cards, `--radius-pill` for badges only.

Always compose sibling groups with flex/grid + `gap`. Never margin-based inline flow. Two background colors per deck, maximum.

## Components and interaction

Primary buttons use `--accent` with `--accent-on` ink labels. Secondary buttons use foundation blue. Outline and ghost stay quiet.

Cards are either light (white, hairline border, cool shadow) or ink (dark, 1px white-alpha border, no shadow — depth comes from the gradient wash). The signature `PillarCard` is always ink with a service-line wash and a gold momentum rule.

Hover on interactive cards lifts `translateY(-3px)` and raises elevation or glow. Press is implicit — do not shrink from `scale(0)`. Start scale animations at `0.9` or higher if scale is used at all.

Focus is the azure ring `--focus-ring`. Define `a` and `a:hover` in every standalone artifact.

## Motion

Motion is confident and slightly snappy: `--ease-standard: cubic-bezier(0.16, 1, 0.3, 1)`, `--motion-fast: 120ms`, `--motion-base: 200ms`. No bounce. No infinite decorative loops. Light Fields `--alive` is a reduced-motion-safe breathing drift and must stop when `prefers-reduced-motion` is set.

## Accessibility

Normal text 4.5:1, large text 3:1, against the actual paired background. Hit targets ≥44px. Slide text at 1920×1080 never below 24px. Preserve native control semantics. Do not claim conformance without checking every pair used in the fixture.

## Voice and brand boundary

Write in threes. Confident, declarative, plain. “We” for the firm, “you/your” for the client. Vocabulary: asymmetric advantage · hidden reality · momentum · M³ · AIM OnPoint™ · 6 C’s · Reality Audit. Tagline: *We build momentum. Real. Measurable. Unstoppable. OnPoint.*

**Visual Data Intelligence is not part of this brand.** It belongs to sister company OnPoint Sky Solutions. Footer family-of-brands link only.

## Anti-patterns

- Do not use gold as a wash, a second primary, or body text on white.
- Do not invent a third brand color or a pure gray.
- Do not flatten React components from `packages/ui` into production HTML.
- Do not regenerate or “simplify” logomarks or Light Field plates.
- Do not use emoji or unicode pictographs as icons.
- Do not put Light Fields inside app working surfaces.
- Do not use `ease-in` for UI, bounce curves, or scale-from-zero.
- Do not left-border-accent a card to fake hierarchy.
