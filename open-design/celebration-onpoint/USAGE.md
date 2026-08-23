# Celebration OnPoint Usage

Design System 2.0 package guide for Open Design agents and reviewers.

## Read Order

1. Read this file first to understand the package contract.
2. Read `DESIGN.md` for visual intent, constraints, and anti-patterns.
3. Paste `tokens.css` into the first artifact `<style>` block before writing component CSS.
4. Use `components.manifest.json` for the compact component inventory; open `components.html` when exact selectors or states matter.
5. Inspect `preview/` pages when a visual sanity check is useful.
6. For production React, use `packages/ui` and the brand token names in `packages/tokens`.

## Design Highlights

- Background: `#F7F9FC` light page, `#0A0814` ink for brand surfaces
- Foreground: `#0D1424`
- Accent: `#F5C518` (gold momentum bolt) — primary CTAs only, ink label on gold
- Foundation blue: `#1056A5` — secondary actions, links, structure
- Muted: `#5A687E` — captions, helper text
- Display: Poppins. Body: Open Sans. Data / eyebrows: IBM Plex Mono

## Do

- Preserve the Open Design schema token names in this package so cross-brand switching stays reliable.
- Use `--accent` for the single most important action. Use blue (`--interactive` in brand tokens, or a secondary button) for supporting actions.
- Drop a Light Field behind dark marketing sections. Keep app chrome flat.
- Write copy in threes. Keep gold sparse. Respect `prefers-reduced-motion`.

## Avoid

- Avoid raw hex values outside the copied `:root` token block.
- Avoid presenting Visual Data Intelligence as a Celebration OnPoint service line.
- Avoid emoji, bounce easing, infinite decorative loops, and left-border accent cards.
- Avoid flattening React components from `packages/ui` into one-off HTML except in this package’s fixture.
