# Celebration OnPoint — Novamira / Elementor Skill File

You are building pages for **Celebration OnPoint** (onpointhq.com) in Elementor. Follow this file exactly. Never hardcode hex values, font names, or pixel spacing when a named global or class below covers it.

---

## 1. Brand in one paragraph

Celebration OnPoint builds **asymmetric advantage** — turning hidden reality into visible, actionable momentum. Philosophy: **M³** (Message · Machines · Mission). Blueprint: **AIM OnPoint™** (Acquire · Integrate · Maximize), powered by the **6 C's of OnPoint Success** (Client Commitment, Connection, Clarity, Creativity, Confidence, Celebration). Tagline: *We build momentum. Real. Measurable. Unstoppable. OnPoint.* Visual Data Intelligence / drone work is **not** part of this site — it belongs to sister brand OnPoint Sky Solutions (footer link only).

## 2. Voice

- Confident, declarative, plain. Short sentences. Active verbs. No hedging.
- Write in threes: "see more, sell more, operate smarter."
- "We" for the firm, "you/your" for the client. Never "I".
- Eyebrows: ALL-CAPS mono, wide tracking. Headlines: title-style or sentence case.
- One strong stat beats five weak ones. Metrics render in the mono font.
- **No emoji. Ever.**

## 3. Globals (create/reference by these exact names)

Colors: `COP Ink` `COP Navy` `COP Blue Deep` `COP Blue` `COP Azure` `COP Sky` `COP Gold` `COP Gold Warm` `COP Gold Deep` `COP Violet` `COP White` `COP Page` `COP Sunken` `COP Border` `COP Text Strong` `COP Text Body` `COP Text Muted` `COP Success` `COP Danger` — values and usage in `elementor-globals.json`.

Fonts: `COP Display` (Poppins 700), `COP Heading` (Poppins 600), `COP Body` / `COP Body Bold` (Open Sans), `COP Eyebrow` / `COP Data` (IBM Plex Mono). Fonts are self-hosted via Elementor Custom Fonts.

The stylesheet `cop-wp.css` is enqueued site-wide. It exposes every token as a CSS custom property (`--c-gold`, `--space-8`, `--radius-lg`, `--shadow-md`, …) plus the utility classes in §5. Prefer classes over per-widget styling.

## 4. Hard rules

1. **Gold is the accent, used sparingly.** Exactly one gold element competing for attention per viewport — normally the primary CTA. Never gold body text, never gold section backgrounds.
2. **One CTA label site-wide: "Book a Reality Audit."** Secondary actions are outline or ghost buttons, never a second gold button.
3. **Dark sections are never flat black.** Every dark container gets a light-field layer (§6) — cool light left, warm gold light right, pooling on the floor.
4. Neutrals are navy-tinted (`COP Page`, `COP Border`, …) — never `#F5F5F5` / pure grays.
5. Shadows are navy-tinted (use `--shadow-*` vars) — never `rgba(0,0,0,…)`.
6. Radii: cards 16px (`--radius-lg`), feature tiles/CTA panels 24–32px, pills only for badges/chips. No left-border accent cards.
7. Content max-width 1200px. Section padding ~88px top/bottom (48–64px on mobile). 4px spacing grid.
8. Motion: 200ms `cubic-bezier(0.16,1,0.3,1)`; hover = lift `translateY(-3px)` + elevation. No bounce, no infinite decorative loops. Respect reduced motion.
9. Icons: Lucide (via Elementor's icon library or inline SVG, 2px stroke). Never Font Awesome filled icons, never emoji.
10. The **gold momentum rule** — a 3px `linear-gradient(120deg,#F5C518,#F9A02A)` bar, ~36px wide (`.cop-rule`) — is the recurring brand glyph. Use it above card titles and section headings on dark.

## 5. Utility classes in `cop-wp.css`

| Class | Renders |
|---|---|
| `.cop-section` / `.cop-section--dark` | Section padding + light/dark ground |
| `.cop-container` | 1200px centered wrapper |
| `.cop-eyebrow` (+ `--gold`) | Mono uppercase eyebrow, azure (or gold on dark) |
| `.cop-rule` | 3px gold momentum bar |
| `.cop-btn` + `--primary` / `--outline` / `--outline-dark` / `--ghost` | Brand buttons w/ hover+focus states |
| `.cop-card` / `.cop-card--ink` | Light card / dark ink card |
| `.cop-pillar--message` / `--machines` / `--mission` | Service-line gradient cards (radial washes) |
| `.cop-stat` (`__value`, `__label`, `__delta`) | Mono metric block |
| `.cop-chip` | 6 C's pill |
| `.cop-glass` | Translucent panel for dark heroes |
| `.cop-lightfield` + `.cop-lf--pillars/--horizon/--aurora/--purple/--spotlight` (+`--alive`) | CSS light-field atmosphere layer |
| `.cop-lf-plate--*` | Photographic light-field plates (Media Library URLs) |
| `.cop-grid-overlay`, `.cop-tier-authority` | Tier-2 precision contexts (federal/cyber) only |
| `.cop-form` | Form plugin skin (inputs, labels, focus ring) |

**Light-field recipe in Elementor:** give the section/container `position:relative; overflow:hidden`, add an inner HTML widget `<div class="cop-lightfield cop-lf--pillars cop-lf--alive" aria-hidden="true"></div>` stretched absolute, keep content z-index above. Or set the section background image to an uploaded plate.

## 6. Section → widget mapping

- **Header:** sticky, ink background at 80% + `backdrop-filter: blur(12px)` (`.cop-header` class). White knockout logo. Nav links Open Sans 600 14px white/70 → white. Right slot: one gold `.cop-btn--primary`.
- **Hero:** dark container + pillars light field. Eyebrow badge → H1 (COP Display, 56–60px, white, gradient-gold key phrase via `.cop-grad-text`) → lead (white/66) → CTA row (1 gold + 1 outline-dark) → tagline line.
- **Cards/grids:** Elementor containers with `.cop-card` or `.cop-pillar--*`; 3-across desktop, 20px gap, stack on mobile.
- **Stats:** `.cop-stat` markup in HTML widgets or styled heading pairs — value in COP Data, label mono 11px uppercase muted.
- **Trust band:** light section, logo row grayscale 60% opacity → 100% on hover; certification chips as `.cop-chip`.
- **Forms:** form plugin wrapped in `.cop-form`; labels mono uppercase 11px; single gold submit.
- **Footer:** ink + spotlight light field; white knockout logo; OnPoint Sky Solutions listed under "Family of brands."

## 7. Never do

Emoji · gradient text on light backgrounds · gold backgrounds · two gold buttons in view · flat-black sections · pure-gray neutrals · black shadows · left-border accent cards · Font Awesome · VDI/drone content on this site · rounded-pill content cards · centered long paragraphs · stock-photo hero backgrounds (light fields are the brand's imagery).
