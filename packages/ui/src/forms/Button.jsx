const SIZES = {
  sm: { padding: '0 14px', height: 34, fontSize: 13, gap: 7, radius: 'var(--radius-sm)' },
  md: { padding: '0 20px', height: 42, fontSize: 14.5, gap: 8, radius: 'var(--radius-md)' },
  lg: { padding: '0 28px', height: 52, fontSize: 16, gap: 10, radius: 'var(--radius-md)' },
};

const VARIANTS = {
  primary: {
    background: 'var(--c-gold)',
    color: 'var(--c-ink)',
    border: '1.5px solid transparent',
    boxShadow: 'var(--shadow-sm)',
  },
  secondary: {
    background: 'var(--c-blue)',
    color: 'var(--n-0)',
    border: '1.5px solid transparent',
    boxShadow: 'var(--shadow-sm)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--c-blue)',
    border: '1.5px solid var(--border-strong)',
    boxShadow: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--c-blue)',
    border: '1.5px solid transparent',
    boxShadow: 'none',
  },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontSize: s.fontSize,
        fontWeight: 'var(--fw-semibold)',
        lineHeight: 1,
        letterSpacing: '0.005em',
        borderRadius: s.radius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'var(--transition)',
        whiteSpace: 'nowrap',
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--c-gold-warm)';
        else if (variant === 'secondary') e.currentTarget.style.background = 'var(--c-blue-deep)';
        else if (variant === 'outline') {
          e.currentTarget.style.borderColor = 'var(--c-blue)';
          e.currentTarget.style.background = 'var(--n-25)';
        } else e.currentTarget.style.background = 'var(--n-50)';
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.borderColor = variant === 'outline' ? 'var(--border-strong)' : 'transparent';
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
