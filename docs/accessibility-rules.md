# Accessibility rules

- Normal text meets 4.5:1 contrast. Large text meets 3:1 against the actual paired background.
- Gold `#F5C518` is not body text on white. On gold fills, use ink `#0A0814` (`--accent-on`).
- Maximize-phase gold text on light grounds uses `#B08A05`, not raw `#F5C518`.
- Every interactive control has a visible `:focus-visible` treatment using `--focus-ring` / `--ring`.
- Preserve native semantics (`button`, `a`, `label`, `role="alert"`, `role="tablist"`).
- Hit targets are at least 44px on mobile.
- Minimum slide text at 1920×1080 is 24px. Print minimum is 12pt.
- Scope reduced-motion overrides to animated properties. Light Fields `--alive` drift must stop when `prefers-reduced-motion: reduce`.
- Do not claim WCAG conformance without checking every foreground/background pair used in a fixture.
- No emoji and no unicode pictographs as icons — they fail as wayfinding for many users.
