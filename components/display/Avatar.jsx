import React from 'react';

/**
 * Celebration OnPoint — Avatar
 * Initials or image. Falls back to brand-gradient initials.
 */
export function Avatar({ name = '', src, size = 'md', style, ...rest }) {
  const dims = { xs: 24, sm: 32, md: 40, lg: 52, xl: 64 }[size] || 40;
  const fontSize = { xs: 10, sm: 12, md: 14, lg: 18, xl: 22 }[size] || 14;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dims, height: dims, flex: 'none', borderRadius: 'var(--radius-pill)',
        background: src ? 'var(--n-100)' : 'var(--grad-momentum)',
        color: 'var(--n-0)', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
        fontSize, overflow: 'hidden', userSelect: 'none', ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
