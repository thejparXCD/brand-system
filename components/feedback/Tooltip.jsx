import React from 'react';

/**
 * Celebration OnPoint — Tooltip
 * Hover/focus tooltip. Wraps a single child trigger.
 */
export function Tooltip({ label, placement = 'top', children, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 },
  }[placement] || {};
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...rest}
    >
      {children}
      {open && (
        <span role="tooltip" style={{
          position: 'absolute', zIndex: 50, ...pos,
          whiteSpace: 'nowrap', pointerEvents: 'none',
          background: 'var(--c-navy)', color: 'var(--n-0)',
          fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 'var(--fw-medium)',
          padding: '6px 10px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)',
          ...style,
        }}>{label}</span>
      )}
    </span>
  );
}
