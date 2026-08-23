# Celebration OnPoint Usage

Design System package guide for Open Design agents and reviewers.

## Read Order

1. Read this file first.
2. Read `DESIGN.md` — especially **Anti-patterns** (agents skip this and invent generic UI).
3. Paste the full `tokens.css` `:root` block into the first artifact `<style>` before any component CSS.
4. For dark marketing sections, also link or inline `lightfields.css` and use `.cop-lightfield` variants.
5. Use `components.manifest.json` for inventory; open `components.html` for selectors and states.
6. Open `preview/` for visual sanity checks.
7. For deeper layout reference in this repo: `templates/homepage/`, `templates/brand-landing/`, `ui_kits/website/`.
8. For production React: `components/` + `_ds_bundle.js` (`window.CelebrationOnPointDesignSystem_2fb49a`).
9. For brand-native token names (`--c-blue`, `--grad-mission`, full Light Field plates): `tokens/` and `styles.css` at repo root.

## Design Highlights

- **Light surfaces:** page `#F7F9FC`, text `#0D1424`, card `#FFFFFF`
- **Ink surfaces:** ground `#0A0814` with **Light Fields** — never flat black
- **Accent:** `#F5C518` gold — **one primary CTA per screen**, ink label on gold
- **Foundation blue:** `#1056A5` — secondary actions, structure, links (`#2896D2` azure for links/focus)
- **Display:** Poppins · **Body:** Open Sans · **Eyebrows / metrics:** IBM Plex Mono
- **Philosophy:** M³ (Message · Machines · Mission) · operational blueprint AIM OnPoint™ (Acquire · Integrate · Maximize)

## Do

- Select this design system in Open Design before prompting.
- Use schema tokens (`--bg`, `--fg`, `--accent`) in generated HTML; use brand extensions (`--c-blue`, `--cop-ink`) when the snippet in DESIGN.md requires them.
- Alternate dark Light Field sections with light `#F7F9FC` sections on marketing pages.
- Write copy in threes. Use the exact tagline: *We build momentum. Real. Measurable. Unstoppable. OnPoint.*
- Use Lucide-style 2px stroke icons. No emoji.
- Respect `prefers-reduced-motion`.

## Avoid

- Avoid raw hex outside the pasted token block.
- Avoid inventing colors, fonts, or gradients not listed in `DESIGN.md` / `tokens.css`.
- Avoid gold as a wash, second primary, or body text on white.
- Avoid Visual Data Intelligence, drones, Matterport, or 4D capture as Celebration OnPoint services (OnPoint Sky Solutions only).
- Avoid Inter, Roboto, or system-ui as display faces.
- Avoid purple gradient hero backgrounds unless Technology & Infrastructure service-line context.
- Avoid emoji, bounce easing, infinite decorative loops, left-border accent cards.
- Avoid flattening `components/*.jsx` into production HTML except in this package fixture.
