# Video hero recipe — Bunny.net + Elementor

Video backgrounds are for **heroes only** (one per page). The video *replaces* the light field — same deep-navy base, same treatment rules. Everywhere else, light-field plates remain the imagery.

## Rules (non-negotiable)
- Footage: dark, low-contrast, slow/ambient motion. No fast cuts, no talking heads, no full-saturation stock.
- Loop: 8–10s max, 2–4 MB target. Bunny Stream's per-resolution MP4s handle this.
- Scrim always on — headline contrast must stay AAA. Heavier scrim on the text side.
- The single gold CTA rule still applies: one "Book a Reality Audit" per viewport.
- Mobile + prefers-reduced-motion: video hidden, poster/light-field plate shown instead (the CSS handles this automatically).

## Bunny.net setup
1. Upload the loop to Bunny Stream. Enable MP4 fallback in the Stream library settings.
2. Use the **direct MP4 URL** (`https://{pullzone}.b-cdn.net/{video-guid}/play_720p.mp4`) — never the iframe embed (iframes can't do `object-fit: cover`).
3. 720p is usually enough for a background; use 1080p only if the hero is very tall.
4. Export a poster frame (JPG, ~150 KB) that matches the light-field look — dark navy, subtle blue/gold glow. Upload to the Media Library.

## Elementor build
The reliable path is an HTML widget (Elementor's native video background can't do the scrim + fallback logic):

1. Hero section: class `cop-section--dark`, no light-field div.
2. First child: an **HTML widget** with:

```html
<div class="cop-video-bg">
  <video autoplay muted loop playsinline preload="metadata"
         poster="/wp-content/uploads/cop-video/hero-poster.jpg">
    <source src="https://YOUR-PULLZONE.b-cdn.net/VIDEO-GUID/play_720p.mp4" type="video/mp4">
  </video>
  <div class="cop-video-scrim"></div>
</div>
```

3. Build hero content (eyebrow, H1, lead, CTA row) in the same section — the CSS (`.cop-video-bg ~ *`) lifts it above the video automatically.
4. Do NOT set a background on the section itself; `.cop-video-bg` provides the ink base and the mobile fallback plate.

## Fallback plate
On mobile/reduced-motion the CSS shows `--lf-plate-pillars` behind the poster area. To use a different plate for a specific hero, override inline:

```html
<div class="cop-video-bg" style="background-image: var(--lf-plate-horizon);">
```

## Photos elsewhere
Same treatment rules: duotone/tint toward navy-gold, navy scrim behind any text. Photos live inside cards or as founder/team portraits — never as raw full-bleed section backgrounds.
