import React from 'react';

/**
 * Celebration OnPoint — Badge
 * Small status / category pill. `tone` maps to semantic + brand colors.
 */
export function Badge({ children, tone = 'neutral', subtle = true, dot = false, style, ...rest }) {
  const map = {
    neutral: ['var(--n-100)', 'var(--n-700)', 'var(--n-500)'],
    brand:   ['rgba(16,86,165,0.10)', 'var(--c-blue)', 'var(--c-blue)'],
    gold:    ['rgba(245,197,24,0.16)', 'var(--c-gold-deep)', 'var(--c-gold-deep)'],
    success: ['rgba(31,157,107,0.12)', 'var(--c-success)', 'var(--c-success)'],
    warning: ['rgba(232,146,12,0.14)', 'var(--c-warning)', 'var(--c-warning)'],
    danger:  ['rgba(220,75,75,0.12)', 'var(--c-danger)', 'var(--c-danger)'],
  };
  const [bg, fg, dotc] = map[tone] || map.neutral;
  const solid = !subtle;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 10px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 'var(--fw-medium)',
        letterSpacing: '0.02em',
        background: solid ? fg : bg,
        color: solid ? 'var(--n-0)' : fg,
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? 'var(--n-0)' : dotc }} />}
      {children}
    </span>
  );
}
