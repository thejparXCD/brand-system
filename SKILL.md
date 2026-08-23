---
name: celebration-onpoint-design
description: Use this skill to generate well-branded interfaces and assets for Celebration OnPoint, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key files:
- `readme.md` — brand context, content voice, visual foundations, iconography, and a full file index. Start here.
- `styles.css` + `tokens/` — link `styles.css` to inherit all color/type/spacing/effect custom properties.
- `assets/` — logomark PNGs and `icons.jsx` (Lucide subset → `window.Icon`).
- `components/<group>/` — reusable React primitives (Button, PillarCard, Stat, Input, …); each has a `.prompt.md` with usage.
- `ui_kits/website/` — interactive marketing homepage built from the components.

Core brand truths: tagline **“We build momentum. Real. Measurable. Unstoppable. OnPoint.”** Philosophy is **M³** (Message · Machines · Mission); the operational blueprint is **AIM OnPoint™** (Acquire · Integrate · Maximize), powered by the **6 C’s**. Voice is confident, declarative, writes in threes (“see more, sell more, operate smarter”). **Blue is the foundation, gold `#F5C518` is the sparing accent**; dark “ink” surfaces with soft radial gradient glows. **Poppins** (headlines) / **Open Sans** (body) / IBM Plex Mono (data); Lucide icons, **no emoji**. Two tiers: **OnPoint Momentum** (primary) and **Precision Authority** (selective, high-trust — grid overlays). Visual Data Intelligence is **not part of this brand** — it belongs to sister company OnPoint Sky Solutions (footer link only). **Signature atmosphere — Light Fields:** every dark surface should glow, never sit flat black — cool light from the left, warm gold from the right, pooling on the floor. Drop a `<div class="cop-lightfield cop-lf--pillars">` (or `--horizon` / `--aurora` / `--purple` / `--spotlight`, `+ --alive`) into any relative/clipped container, or use the `.cop-lf-plate--*` photographic renders.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
