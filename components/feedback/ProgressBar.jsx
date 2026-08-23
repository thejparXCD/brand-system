import React from 'react';

/**
 * Celebration OnPoint — ProgressBar
 * Track + fill. `value` 0–100. Gold or blue fill.
 */
export function ProgressBar({ value = 0, label, showValue = false, accent = 'gold', tone = 'light', style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  const onDark = tone === 'ink';
  const fill = accent === 'blue' ? 'var(--grad-momentum)' : 'var(--grad-bolt)';
  return (
    <div style={{ width: '100%', ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
          {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 'var(--fw-medium)', color: onDark ? 'rgba(255,255,255,0.7)' : 'var(--text-body)' }}>{label}</span>}
          {showValue && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: onDark ? 'var(--c-gold)' : 'var(--text-muted)' }}>{pct}%</span>}
        </div>
      )}
      <div style={{ height: 8, borderRadius: 'var(--radius-pill)', background: onDark ? 'rgba(255,255,255,0.12)' : 'var(--n-100)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 'var(--radius-pill)', background: fill, transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    </div>
  );
}
