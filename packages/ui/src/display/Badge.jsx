const TONES = {
  neutral: { color: 'var(--text-body)', background: 'var(--n-50)', border: '1px solid var(--border-subtle)' },
  brand: { color: 'var(--c-blue)', background: 'rgba(16,86,165,0.08)', border: '1px solid rgba(16,86,165,0.16)' },
  gold: { color: 'var(--c-ink)', background: 'var(--c-gold)', border: '1px solid transparent' },
  success: { color: 'var(--c-success)', background: 'rgba(31,157,107,0.10)', border: '1px solid rgba(31,157,107,0.18)' },
  warning: { color: 'var(--c-warning)', background: 'rgba(232,146,12,0.12)', border: '1px solid rgba(232,146,12,0.22)' },
  danger: { color: 'var(--c-danger)', background: 'rgba(220,75,75,0.10)', border: '1px solid rgba(220,75,75,0.18)' },
};

export function Badge({ children, tone = 'neutral', subtle = false, dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: subtle ? '2px 8px' : '4px 10px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 'var(--fw-semibold)',
        lineHeight: 1.4,
        ...t,
        background: subtle ? 'transparent' : t.background,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}
        />
      )}
      {children}
    </span>
  );
}
