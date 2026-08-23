# Border Beam — Elementor snippet

A single bright arc of gold (or blue) light orbits the perimeter of an element.
The brand's momentum bolt made literal. Pure CSS, no JS. Loads from `cop-wp.css`.

## Rules (don't skip)
- **One per viewport.** It's a spotlight, not a texture. If two things beam, nothing does.
- **Gold** = the primary action / the plan you're steering people toward.
  **Blue** (`cop-beam--blue`) = featured-but-calm, so gold stays loudest.
- **Dark surfaces only.** The inner panel is dark navy by design; never place on a light section.
- Honors `prefers-reduced-motion` automatically (ring holds static).

## Structure
Every beam is a wrapper + an inner panel:

```html
<div class="cop-beam cop-beam--gold cop-beam--fast">
  <div class="cop-beam__inner" style="padding:28px 28px 30px;">
    <!-- your content -->
  </div>
</div>
```

Modifiers: `cop-beam--blue`, `cop-beam--fast` (2.4s vs 4s), `cop-beam--pill` (rounded CTA/chip).

## Elementor: Featured card
Add an **HTML widget** where the card goes:

```html
<div class="cop-beam cop-beam--gold">
  <div class="cop-beam__inner" style="padding:28px 28px 30px; color:#fff;">
    <p style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:var(--c-gold);margin:0 0 14px;">Growth Engine</p>
    <h3 style="font-size:22px;margin:0 0 10px;font-weight:800;">OnPoint Momentum Plan</h3>
    <p style="margin:0 0 20px;color:var(--n-300);font-size:14px;line-height:1.55;">Full-funnel build with weekly measurable gains.</p>
    <a href="#" class="cop-btn cop-btn--gold">Start now →</a>
  </div>
</div>
```

## Elementor: CTA button
```html
<div class="cop-beam cop-beam--gold cop-beam--pill cop-beam--fast" style="display:inline-block;">
  <a href="/book" class="cop-beam__inner" style="display:inline-flex;align-items:center;gap:10px;padding:15px 30px;font-weight:700;color:var(--c-ink);background:var(--grad-bolt);border-radius:999px;text-decoration:none;">
    Book a strategy call →
  </a>
</div>
```
(For a ghost button, drop `background:var(--grad-bolt)` and set `color:#fff`.)

## Elementor: Premium chip
```html
<div class="cop-beam cop-beam--gold cop-beam--pill cop-beam--fast" style="display:inline-block;">
  <div class="cop-beam__inner" style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;">
    <span style="width:6px;height:6px;border-radius:50%;background:var(--c-gold);box-shadow:0 0 8px var(--c-gold);"></span>OnPoint Certified
  </div>
</div>
```

## Notes
- Needs `overflow: visible` on the parent section (Elementor: Advanced → default is fine).
- The conic ring uses `@property`; on very old browsers it falls back to a soft gold pulse glow — still on-brand, no breakage.
- Reference render: `components/effects/Border Beams.html` in the design system project.
