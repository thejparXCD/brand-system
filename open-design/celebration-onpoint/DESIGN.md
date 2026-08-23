# DESIGN.md — Celebration OnPoint

> Category: Professional Services
> Blue foundation, sparing gold accent, Light Fields ink atmosphere.

**Canonical design reference for Open Design agents.** Prose contract here; compiled bindings in `tokens.css`. Repo-level spec: root `DESIGN.md` and `readme.md`.

- **Owner:** Celebration Holdings, dba Celebration OnPoint / OnPoint Sky Solutions
- **Package id:** `celebration-onpoint`
- **License / use:** internal brand property. Not for redistribution.

## Visual theme and atmosphere

The identity is a two-note chord: a **blue C** from sky-cyan `#59C4E5` through core blue `#1056A5` to navy `#081E42` and violet-black ink `#0A0814`, plus a **gold momentum bolt** `#F5C518`. **Blue is the foundation. Gold is the accent** — sparingly, for the single most important action, live signals, and the 3px momentum rule.

**Light Fields** is the signature surface: cool light from the left, warm gold from the right, over near-black, pooling on the floor. Every dark marketing surface glows. Never flat `#000` or flat ink without beams.

```html
<section style="position:relative;overflow:hidden">
  <div class="cop-lightfield cop-lf--pillars" aria-hidden="true"></div>
  <div style="position:relative">…content…</div>
</section>
```

Include `lightfields.css` from this package. Variants: `--pillars` (hero), `--horizon` (CTA), `--aurora` (text-heavy dark), `--purple` (event / Tier 2), `--spotlight` (footer). Add `--alive` only with reduced-motion guard.

Two tiers share one energy system:

- **OnPoint Momentum** (primary) — calm authority, forward motion, soft glows.
- **Precision Authority** (selective) — federal, cybersecurity, grid overlays.

**Portal and app chrome stay flat.** Light Fields on marketing, not on tools people use all day.

## Color roles and contrast

| Role | Light surface | Token |
| --- | --- | --- |
| Page background | `#F7F9FC` | `--bg` |
| Card | `#FFFFFF` | `--surface` |
| Sunken | `#EEF2F8` | `--surface-warm` |
| Primary text | `#0D1424` | `--fg` |
| Secondary text | `#2A3447` | `--fg-2` |
| Muted | `#5A687E` | `--muted` |
| Metadata | `#7C8AA1` | `--meta` |
| Border | `#C9D3E2` | `--border` |
| Accent (gold) | `#F5C518` | `--accent` |
| Text on accent | `#0A0814` | `--accent-on` |

**Ink surfaces** (`[data-theme="dark"]` or override): `--bg: #0A0814`, `--fg: #FFFFFF`, `--muted: #A6B3C7`. Gold stays `--accent`.

Brand extension names (also in `tokens.css`): `--cop-ink` `#0A0814`, `--c-blue` `#1056A5`, `--c-azure` `#2896D2`, `--c-navy` `#081E42`, `--c-gold` `#F5C518`, `--link` `#2896D2`.

External four-slot mapping: Primary `#1056A5` · Secondary `#081E42` · Tertiary `#2896D2` · Accent `#F5C518`.

Gold is not body text on white. AIM Maximize gold on light grounds: `#B08A05` for legibility.

### Service-line gradients (radial — lighter core, dark edges)

| Line | Core → edge | Accent |
| --- | --- | --- |
| Technology & Infrastructure | `#3A1270` → `#0A0814` | gold |
| Growth & Workforce | `#E8920C` → `#0A1A3E` | gold |
| Mission Strategy | `#2896D2` → `#081E42` | gold |

Use on ink `PillarCard` panels only — not random hero washes.

## Typography

| Role | Face | Token |
| --- | --- | --- |
| Display / headlines | Poppins 600–700 | `--font-display` |
| Body / UI | Open Sans 400–700 | `--font-body` |
| Mono / eyebrows / data | IBM Plex Mono | `--font-mono` |

Scale: 1.250 major third, `--text-xs` 12px through `--text-4xl` 67px. Display: `--tracking-display: -0.02em`, `--leading-tight: 1.2`. Body: `--leading-body: 1.5`.

Uppercase eyebrows only — mono face, `letter-spacing: 0.14em`. Title-style headlines; never ALL-CAPS display lines except eyebrows.

## Spacing, layout, and composition

4px base. Section padding `--section-y-desktop: 88px` (56 tablet, 40 phone). Max width `--container-max: 1200px`. Gutters 24 / 20 / 16.

Radii: `--radius-sm` 6px controls, `--radius-md` 10px tiles, `--radius-lg` 16px cards, `--radius-pill` badges only.

Flex/grid + `gap` always. Two background colors per deck maximum.

## Components and interaction

- **Primary button:** `--accent` background, `--accent-on` label. **One per view.**
- **Secondary:** foundation blue `#1056A5` or outline on `--border`.
- **Cards:** light (white + cool shadow) or ink (dark + gradient wash, no shadow).
- **PillarCard:** always ink + service-line gradient + 3px gold momentum rule.
- **Links:** `--link` / `#2896D2`; underline on hover.
- **Icons:** Lucide 2px stroke, 24×24. No emoji.

Hover on cards: `translateY(-3px)` + elevation/glow. No `scale(0)` press. Focus: `--focus-ring` (azure on light, gold tint on ink).

Define `a` and `a:hover` in every standalone artifact.

## Motion

`--ease-standard: cubic-bezier(0.16, 1, 0.3, 1)`, `--motion-fast: 120ms`, `--motion-base: 200ms`. No bounce. No infinite decorative loops. Light Fields `--alive` stops under `prefers-reduced-motion`.

## Accessibility

4.5:1 normal text, 3:1 large text. Hit targets ≥44px. Slide text ≥24px at 1920×1080. Preserve native semantics.

## Voice and brand boundary

Write in threes. Confident, declarative, plain. **We** for the firm, **you/your** for the client.

Vocabulary: asymmetric advantage · hidden reality · momentum · M³ · AIM OnPoint™ · 6 C's · Reality Audit · see more / sell more / operate smarter.

Tagline (verbatim): *We build momentum. Real. Measurable. Unstoppable. OnPoint.*

**M³:** Message · Machines · Mission. **AIM:** Acquire · Integrate · Maximize.

**Visual Data Intelligence is NOT this brand.** Drones, Matterport, 4D capture belong to **OnPoint Sky Solutions** — footer family link only.

## Anti-patterns

Forbidden — the self-critique pass should reject these:

- Flat `#000000`, `#111`, or ink `#0A0814` **without** Light Fields on marketing heroes/footers
- Gold as wash, second primary, nav fill, or body text on white
- More than one gold primary CTA per screen
- Inventing a third brand color or pure gray neutrals (use navy-tinted `--n-*` ramp)
- Inter, Roboto, Arial, or system-ui as **display** type (Poppins only)
- Purple/violet **generic** gradient heroes (service-line violet only on Technology panels)
- Emoji or unicode pictographs as icons
- Words: unlock, unleash, revolutionize, game-changing, amazing, powerful, synergy, leverage (as hype)
- Bouncy easings, `ease-in` on UI, scale-from-zero, infinite decorative animation
- Left-border accent stripes to fake card hierarchy
- Light Fields inside portal/app working surfaces
- Visual Data Intelligence as a Celebration OnPoint service line
- Isometric, 3D, or abstract blob illustrations (technical line art only; one gold element per illustration)
- Margin-stacked inline layout instead of flex/grid + gap
- Raw hex in CSS outside the pasted `tokens.css` block
