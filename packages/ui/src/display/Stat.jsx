export function Stat({
  label,
  value,
  delta,
  deltaDirection = 'up',
  onDark = false,
  style,
  ...rest
}) {
  const deltaColor =
    deltaDirection === 'down' ? 'var(--c-danger)' : onDark ? 'var(--c-gold)' : 'var(--c-success)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
      {label && (
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)',
          }}
        >
          {label}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--fw-bold)',
            fontSize: 38,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: onDark ? 'var(--n-0)' : 'var(--text-strong)',
          }}
        >
          {value}
        </span>
        {delta && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 3,
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 'var(--fw-semibold)',
              color: deltaColor,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: deltaDirection === 'down' ? 'rotate(180deg)' : 'none' }}
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}
