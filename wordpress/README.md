# WordPress / Elementor deployment package

Everything needed to deploy the Celebration OnPoint design system to WordPress running Elementor, with Novamira as the AI build agent.

## Files

- **`NOVAMIRA-SKILL.md`** — the skill file. Paste into (or reference from) Novamira's project instructions so every build uses named globals, brand rules, and correct widget mappings instead of hardcoded hex.
- **`cop-wp.css`** — the flattened brand stylesheet: all tokens as CSS custom properties, Light Field atmospheres, buttons, cards, momentum rule, eyebrows, chips, stat styles. Enqueue once; everything Novamira builds references it.
- **`elementor-globals.json`** — machine-readable list of the Elementor Global Colors and Global Fonts to create, with exact values and usage notes.
- **`HOMEPAGE-BLUEPRINT.md`** — section-by-section homepage recipe with final approved copy (VDI removed, 6 C's canonical, single gold CTA).
- **`VIDEO-HERO.md`** — recipe for Bunny.net video-background heroes: treatment rules, direct-MP4 setup, Elementor HTML-widget markup, mobile/reduced-motion fallback.

## Deployment order

1. **Staging first.** Never point Novamira at production. Clone the site, build, validate, then migrate.
2. **Fonts.** Self-host Poppins (600, 700), Open Sans (400, 500, 600, 700), IBM Plex Mono (400, 500) via Elementor → Custom Fonts (download WOFF2 from Google Fonts / google-webfonts-helper). Do not use Elementor's Google Fonts option in production (GDPR + performance).
3. **Global Colors & Fonts.** Create every entry in `elementor-globals.json` under Site Settings → Global Colors / Global Fonts, using the exact names — the skill file references them by name.
4. **Stylesheet.** Enqueue `cop-wp.css` in the child theme (`wp_enqueue_style`, after Elementor frontend CSS) or paste into Site Settings → Custom CSS.
5. **Light-field plates.** Upload `assets/lightfields/*.png` to the Media Library into a `cop-lightfields` folder, then update the `--lf-plate-*` URLs at the top of `cop-wp.css` to the uploaded URLs.
6. **Logo assets.** Upload `assets/logo-mark.png`, `logo-mark-white.png`. Set the white knockout as the header logo (header is dark).
7. **Skill file.** Give Novamira `NOVAMIRA-SKILL.md` as its standing design instructions.
8. **Build.** Work through `HOMEPAGE-BLUEPRINT.md` section by section. Validate each against the design-system preview before moving on.
9. **Forms.** Reality Audit form → Fluent Forms or WPForms, styled by the `.cop-form` rules in `cop-wp.css`; submissions to CRM + notification email. Keep Calendly as the post-submit confirmation step, not a competing CTA.

## Rules that must survive translation

- One gold CTA per viewport: **Book a Reality Audit**. Everything else is outline/ghost.
- Dark sections always get a light field — never flat black. Video backgrounds: heroes only, per `VIDEO-HERO.md` (video replaces the light field; scrim always on).
- No emoji, no left-border accent cards, no pure-gray neutrals, no black shadows.
- VDI does not appear on this site. Sky-work references route to OnPoint Sky Solutions (footer only).
