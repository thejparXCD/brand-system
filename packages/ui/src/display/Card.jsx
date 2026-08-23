const TONES = {
  light: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)',
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)',
  },
  ink: {
    background: 'var(--c-ink)',
    border: '1px solid rgba(255,255,255,0.10)',
    color: 'rgba(255,255,255,0.72)',
  },
};

export function Card({
  children,
  tone = 'light',
  elevation = 'md',
  interactive = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.light;
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  }[elevation] || 'var(--shadow-md)';

  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: tone === 'ink' ? 'none' : shadow,
        transition: 'var(--transition)',
        cursor: interactive ? 'pointer' : 'default',
        ...t,
        ...style,
      }}
      onMouseEnter={
        interactive
          ? (e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = tone === 'ink' ? 'var(--glow-blue)' : 'var(--shadow-lg)';
            }
          : undefined
      }
      onMouseLeave={
        interactive
          ? (e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = tone === 'ink' ? 'none' : shadow;
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
}
