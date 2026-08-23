import React from 'react';

/**
 * Celebration OnPoint — PillarCard
 * Signature dark card for the three M's (Message / Machines / Mission) and the
 * four service lines. Carries a gradient header band + gold momentum rule.
 */
export function PillarCard({
  eyebrow,
  title,
  description,
  icon,
  theme = 'mission',
  index,
  style,
  ...rest
}) {
  const grads = {
    technology: 'var(--grad-technology)',
    growth: 'var(--grad-growth)',
    mission: 'var(--grad-mission)',
    data: 'var(--grad-data)',
    momentum: 'var(--grad-momentum)',
  };
  const grad = grads[theme] || grads.mission;
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--c-ink)',
        border: '1px solid rgba(255,255,255,0.10)',
        padding: 'var(--space-6)',
        display: 'flex', flexDirection: 'column', gap: 14,
        ...style,
      }}
      {...rest}
    >
      {/* gradient wash behind the header */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, background: grad, opacity: 0.16, pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: 'var(--radius-md)',
          background: grad, color: 'var(--n-0)', boxShadow: 'var(--shadow-md)',
        }}>{icon}</div>
        {index != null && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--c-gold)' }}>{index}</span>
        )}
      </div>
      <div style={{ position: 'relative', height: 3, width: 40, borderRadius: 2, background: 'var(--grad-bolt)' }} />
      <div style={{ position: 'relative' }}>
        {eyebrow && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-azure)', marginBottom: 8 }}>{eyebrow}</div>
        )}
        <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--n-0)', margin: '0 0 8px' }}>{title}</h4>
        {description && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.64)', margin: 0 }}>{description}</p>
        )}
      </div>
    </div>
  );
}
