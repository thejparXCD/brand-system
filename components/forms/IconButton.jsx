import React from 'react';

/**
 * Celebration OnPoint — IconButton
 * Square/circular button for a single icon. Pass an icon node as children.
 */
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 }[size] || 40;
  const variants = {
    solid:   { background: 'var(--c-blue)', color: 'var(--n-0)', border: '1.5px solid transparent' },
    outline: { background: 'transparent', color: 'var(--c-blue)', border: '1.5px solid var(--border-strong)' },
    ghost:   { background: 'transparent', color: 'var(--text-muted)', border: '1.5px solid transparent' },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dims, height: dims, padding: 0,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'var(--transition)',
        ...v, ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'solid') e.currentTarget.style.background = 'var(--c-blue-deep)';
        else { e.currentTarget.style.background = 'var(--n-50)'; e.currentTarget.style.color = 'var(--c-blue)'; }
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.color = v.color;
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
