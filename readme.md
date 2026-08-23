# Celebration OnPoint — Design System

> We build momentum. Real. Measurable. Unstoppable. OnPoint.
>
> Build asymmetric advantage by turning hidden reality into visible, actionable momentum. Unify **Message, Machines, and Mission** so organizations can **see more, sell more, and operate smarter.**

This is the brand + product design system for **Celebration OnPoint**. It contains the visual foundations (color, type, spacing, effects), the brand logomark, reusable React UI components, and a full marketing-website UI kit — everything an agent needs to design on-brand artifacts and production interfaces.

---

## Brand context

Celebration OnPoint helps businesses build **asymmetric advantage**. Tagline: **“We build momentum. Real. Measurable. Unstoppable. OnPoint.”**

### M³ — the foundational philosophy

**M³** is the lens through which the brand sees the world. Everything connects three elements:

- **Message** — the narrative, positioning, and storytelling that influences perception and clarifies direction.
- **Machines** — the technology, systems, and AI (automation, imaging systems, cloud) that bring the message to life.
- **Mission** — the purpose behind the initiative: why the work matters and who it serves.

### AIM OnPoint™ — the operational blueprint

While M³ defines the *philosophy*, **AIM** delivers the *action* — a three-step blueprint:

1. **Acquire** — identify opportunities, capture data, understand the landscape.
2. **Integrate** — connect message, machines, and mission; fuse creative, technical, and operational components into one system.
3. **Maximize** — activate momentum with execution: amplify visibility, improve efficiency, accelerate outcomes, and measure everything.

AIM is powered by the collaborative methodology, the **6 C’s of OnPoint Success**: Client Commitment, Connection, Clarity, Creativity, Confidence, and Celebration.

### Service taxonomy (mirrors the public website; all are expressions of M³)

- **3.1 Growth & Workforce Enablement** *(Message)* — sales training, marketing & communications services.
- **3.2 Technology & Infrastructure** *(Machines)* — AI transformation & automation, IT & cybersecurity advisory, Microsoft licensing & governance.
- **3.3 Mission Strategy & Readiness** *(Mission)* — adoption & change management, AI governance for health systems.

**Visual Data Intelligence (4D capture, drones, Matterport) is NOT part of this brand.** It belongs to the sister company **OnPoint Sky Solutions** and must never appear as a Celebration OnPoint service line — footer "family of brands" link only.

Each service line carries a signature **radial** gradient (lighter core, dark edges) over a shared gold accent:

| Service line | Hue | Core → edge | Accent |
| --- | --- | --- | --- |
| Technology & Infrastructure | violet | `#3A1270` core → `#0A0814` edge | gold `#F5C518` |
| Growth & Workforce | blue → orange | `#E8920C` core → `#0A1A3E` edge | gold `#F5C518` |
| Mission Strategy & Readiness | ocean | `#2896D2` core → `#081E42` edge | gold `#F5C518` |

(The legacy `--grad-data` charcoal gradient remains in `tokens/colors.css` for OnPoint Sky Solutions co-branded artifacts only.)

### Two-tier brand system

The brand runs one energy system with an authority subsystem:

- **Tier 1 — OnPoint Momentum (Primary):** the default identity. Engagement, commercial growth, training, marketing psychology. *Tone: calm authority with forward motion.* Ink ground, soft gradient glows, sparing gold accent. Use the `.cop-tier-momentum` helper.
- **Tier 2 — Precision Authority Subsystem (Selective):** high-trust contexts (Federal, cybersecurity, AI infrastructure, VDI). *Tone: structured, controlled, high-contrast, precise grid overlays.* Use `.cop-tier-authority` + `.cop-grid-overlay`.

### Light Fields — the signature atmosphere

The most recognizable brand surface: **cool light enters from the left, warm (gold) light from the right, over a near-black ground, pooling on the "floor."** Derived from the brand's social background plates. This is how *every* dark surface should feel — beams, glows, and horizons, never a flat black. Two ways to apply (`tokens/lightfields.css`):

- **CSS light fields** (scalable, themeable, cheap) — drop an aria-hidden layer inside any `position:relative; overflow:hidden` container, keep content at `position:relative`:

  ```html
  <section style="position:relative; overflow:hidden">
    <div class="cop-lightfield cop-lf--pillars" aria-hidden="true"></div>
    <div style="position:relative"> …content… </div>
  </section>
  ```

  Variants: `--pillars` (vertical beams rising from the floor), `--horizon` (two arcs meeting at a low horizon), `--aurora` (soft diffuse wash behind text), `--purple` (purple-left/gold-right, event energy), `--spotlight` (single overhead key). Add `--alive` for a slow, reduced-motion-safe breathing drift.
- **Photographic plates** — the exact renders, in `assets/lightfields/` and exposed as `--lf-plate-*` tokens / `.cop-lf-plate--*` classes (pillars, rays-blue, rays-bluegold, horizon, whispy, smoky, burst-gold, rays/glow-purplegold). Use for hero/social where you want the original artwork.

Usage rhythm: alternate dark light-field sections with light surfaces. On the website kit the hero uses `--pillars`, M³ uses `--aurora`, the CTA uses `--horizon`, and the footer uses `--spotlight`.

### Sources reviewed

- **`Logo Stinger/` codebase** (mounted, read-only) — a logo-animation project (`Project Name.cspro`) containing the brand logomark in PNG (full-color + white), a dark circular emblem thumbnail, and a logo-sting audio cue. The project file itself was encrypted/binary (no readable text or color tokens). All brand colors below were **sampled directly from the logomark pixels** and combined with the four service-line gradients supplied in the brief.
- **Brand brief (provided by the user):** tagline, M³ definitions, AIM OnPoint™ framework, 6 C’s, service taxonomy, two-tier system, and the type pairing below.

---

## Content fundamentals (voice & copy)

- **Cadence and parallelism are the signature.** Copy leans on rhythmic triads: *"see more, sell more, operate smarter"*; *"Message, Machines, Mission"*; *"what you say / how you operate / why you exist."* When in doubt, write in threes.
- **Voice: confident, declarative, plain.** Short sentences. Active verbs. The brand states outcomes, it doesn't hedge. *"Turn hidden reality into visible momentum."* not *"We can help you potentially uncover insights."*
- **Person: "we" for the firm, "you/your" for the client.** *"We unify… so your organization can…"* Never first-person singular.
- **Vocabulary to reuse:** asymmetric advantage · hidden reality · visible / actionable · momentum · M³ (Message / Machines / Mission) · AIM OnPoint™ (Acquire / Integrate / Maximize) · 6 C’s · see more / sell more / operate smarter · Reality Audit · readiness · signal. Signature tagline: *We build momentum. Real. Measurable. Unstoppable. OnPoint.*
- **Casing:** Title-style display headlines (sentence case is fine for long ones); ALL-CAPS only for mono eyebrows/labels with wide tracking. The three M's are always capitalized.
- **Numbers carry weight** — surface concrete metrics (`+38%`, `$2.1M`, `3.4×`) rendered in the mono face. Don't manufacture data slop; one strong stat beats five weak ones.
- **No emoji.** Iconography does the lifting (see *Iconography*). Tone is energetic but businesslike — momentum, not hype.

---

## Visual foundations

**Color.** The identity is a two-note chord: a **blue "C"** that runs from bright sky-cyan (`--c-sky #59C4E5`) down through core blue (`--c-blue #1056A5`) to deep navy (`--c-navy #081E42`) and a violet-black ground (`--c-ink #0A0814`); and a **gold "momentum bolt"** (`--c-gold #F5C518`, warming to `--c-gold-warm #F9A02A`). Blue is the foundation; **gold is the accent — used sparingly** for the single most important action, live signals, and the recurring 3px momentum rule. Neutrals are intentionally **cool / navy-tinted**, never pure gray. Most hero and brand surfaces are **dark** (ink ground); app/marketing body surfaces are light.

**Type.**

- **Display / headlines: Poppins** (600–700) — confident, geometric, warm; the brand headline face. Tight tracking (`-0.02em`) at large sizes.
- **Body / UI: Open Sans** (400–500, + 600/700) — neutral, highly legible workhorse for paragraphs and UI.
- **Mono / eyebrows / data: IBM Plex Mono** — uppercase eyebrows at `0.14em` tracking, plus all metrics. A complementary accent to the brand pair.
- Scale is a 1.250 major third on a 16px base. All three load from Google Fonts in `tokens/fonts.css`.

**Spacing & layout.** 4px base unit. Generous section padding (\~88px vertical on marketing). Content maxes at 1200px. Grid + `gap` everywhere, never margin-based inline flow.

**Corner radii.** A squircle family echoing the logo's rounded-square C: cards use `--radius-lg` (16px), tiles/CTAs `--radius-xl`/`2xl`, pills for badges and toggles. Confident, never pill-soft on content.

**Backgrounds.** Dark brand surfaces use the **ink ground with soft, blurred gradient "glow" blobs** (mission/bolt gradients at low opacity behind hero content) — never busy patterns or photographic texture. Light surfaces are flat near-white. Gradients are reserved for: the C (`--grad-c`), the bolt (`--grad-bolt`), momentum bands (`--grad-momentum`), and the four service lines.

**Cards.** Two personalities: **light** (white, hairline `--border-subtle`, cool `--shadow-md`) and **ink** (dark, 1px white-alpha border, no shadow — depth comes from the gradient wash). The signature `PillarCard` is always ink with a service-line gradient wash + gold momentum rule.

**Shadows.** Cool, navy-tinted (`rgba(8,30,66,…)`), never black. Five-step elevation ramp plus two brand **glows** (gold, blue) used only on dark surfaces / key CTAs.

**Motion.** Confident and slightly snappy — `--ease-out` `cubic-bezier(0.16,1,0.3,1)` for entrances, 120/200/360ms durations. **No bounce, no infinite decorative loops.** Hover = lift (`translateY(-3px)`) + elevation/glow on interactive cards; buttons shift to a darker/warmer shade. Press is implicit (no heavy shrink). Respect `prefers-reduced-motion`.

**Hover / press states.** Primary (gold) → warm amber on hover. Secondary (blue) → deep blue. Outline → border darkens + faint tint fill. Ghost → subtle `--n-50` fill. Focus shows the azure `--ring`.

**Transparency & blur.** Used for chrome and overlays only — the sticky header (`backdrop-filter: blur`), modal scrims, and the glass stat panel in the hero. Body content stays opaque.

---

## Iconography

- **System: [Lucide](https://lucide.dev)** — clean 2px stroke, 24×24 grid, rounded caps and joins. This matches the geometric, engineered character of the mark far better than filled or duotone sets.
- **Delivery:** a curated, dependency-free subset is inlined in **`assets/icons.jsx`** (exposes `window.Icon`; use `<Icon name="arrow-right" size={16} />`). Add icons by pasting the inner SVG of any Lucide glyph into its `PATHS` map. Components accept icon **nodes** as props (`iconLeft`, `icon`, …) rather than bundling an icon set.
- **No emoji** anywhere in the brand. **No unicode pictographs** as icons. The only recurring non-icon glyph motif is the **gold momentum rule** (a 3px gradient bar), which stands in for the logomark's bolt.
- **Logo assets** live in `assets/` — see the index. The mark should sit on ink, white, or a brand gradient; keep clear space around it and don't recolor the C or the bolt.

---

## Index — what's in here

**Foundations (root)**

- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` (incl. `.cop-tier-momentum`, `.cop-tier-authority`, `.cop-grid-overlay`), `lightfields.css` (the `.cop-lightfield` / `.cop-lf-plate` atmosphere system).
- `assets/` — `logo-mark.png` (full color), `logo-mark-alt.png` (alternate bolt angle), `logo-mark-white.png` (knockout), `logo-emblem-dark.jpg` (circular emblem on ink), `icons.jsx` (Lucide subset → `window.Icon`).
- `guidelines/cards/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`components/<group>/` — each has `.jsx`, `.d.ts`, `.prompt.md`, and a group card)

- `forms/` — **Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch**
- `display/` — **Card, Badge, Tag, Avatar, Stat, PillarCard** (signature)
- `navigation/` — **Tabs, Breadcrumb**
- `feedback/` — **Alert, ProgressBar, Tooltip**

Import in card/kit HTML via the compiled bundle:

```js
const { Button, PillarCard, Stat } = window.CelebrationOnPointDesignSystem_2fb49a;
```

**UI kits** (`ui_kits/<product>/`)

- `website/` — interactive marketing homepage (Hero + tagline, M³, AIM OnPoint™ framework + 6 C’s, three service lines, proof band, CTA, contact modal). See its `README.md`.

**WordPress deployment** (`wordpress/`)

- Elementor/Novamira handoff package: `NOVAMIRA-SKILL.md` (AI build rules), `cop-wp.css` (flattened brand stylesheet), `elementor-globals.json` (Global Colors/Fonts), `HOMEPAGE-BLUEPRINT.md` (section recipes + approved copy). See `wordpress/README.md`.

**Starting points** — `Button`, `Card`, `PillarCard`, and the website homepage are tagged for the consuming-project picker.

**Generated (do not edit):** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

---

## Caveats

- **Visual Data Intelligence is removed from this brand** — it lives with sister company **OnPoint Sky Solutions**. Never present it as a Celebration OnPoint service line; footer link only.
- All brand colors were **sampled from the logomark** and the supplied service-line gradients; service-line gradients are now **radial** (lighter core, dark edges) per brand direction.
- Fonts (Poppins / Open Sans / IBM Plex Mono) load from Google Fonts. Self-host the `@font-face` files for production/offline use if needed.
