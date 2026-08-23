import React from 'react';

/**
 * Celebration OnPoint — Tabs
 * Underline tab bar. Controlled (`value`) or uncontrolled (`defaultValue`).
 * `tabs`: [{ value, label, icon? }]
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, tone = 'light', style, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const onDark = tone === 'ink';
  const select = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };
  return (
    <div role="tablist" style={{
      display: 'flex', gap: 4,
      borderBottom: `1px solid ${onDark ? 'rgba(255,255,255,0.12)' : 'var(--border-default)'}`,
      ...style,
    }} {...rest}>
      {tabs.map((t) => {
        const on = t.value === active;
        return (
          <button key={t.value} role="tab" aria-selected={on} onClick={() => select(t.value)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 14px', border: 'none', background: 'transparent',
              borderBottom: `2px solid ${on ? 'var(--c-gold)' : 'transparent'}`,
              marginBottom: -1, cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
              color: on ? (onDark ? 'var(--n-0)' : 'var(--text-strong)') : (onDark ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)'),
              transition: 'var(--transition)',
            }}>
            {t.icon && <span style={{ display: 'flex' }}>{t.icon}</span>}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
