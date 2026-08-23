# Website UI Kit — Celebration OnPoint marketing site

A high-fidelity, interactive recreation of the Celebration OnPoint marketing homepage, composed from the design-system components.

## Run
Open `index.html`. It loads `styles.css`, the compiled `_ds_bundle.js`, the shared `assets/icons.jsx`, and the section files below.

## Files
- `index.html` — composes the full page and wires the contact modal.
- `SiteChrome.jsx` — `SiteHeader` (sticky, glass) and `SiteFooter`.
- `Sections.jsx` — `Hero`, `ThreeM` (the three M's via `PillarCard`), `ServiceLines` (three gradient cards, hover-active), `AimFramework` (+ 6 C's), `ProofBand` (stat row), `CTASection` (gold-accent momentum band).
- `ContactModal.jsx` — "Book a session" Reality-Audit form with success state.

## Interactions
- **Book a session** (header / hero / CTA) opens the contact modal; submitting shows a confirmation state.
- **Service line cards** lift and elevate on hover.

## Notes
Sections use the DS primitives (`Button`, `Stat`, `PillarCard`, `Input`, `Select`, `Textarea`, `Badge`) and brand gradient tokens (`--grad-mission`, `--grad-bolt`, `--grad-momentum`, service-line gradients). Copy follows the brand voice: declarative, "we"-led, the see more / sell more / operate smarter cadence.
