import React from 'react';

/** Celebration OnPoint — Checkbox */
export function Checkbox({ label, checked, defaultChecked, disabled = false, id, onChange, style, ...rest }) {
  const fieldId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label htmlFor={fieldId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-body)', ...style,
    }}>
      <input id={fieldId} type="checkbox" checked={isControlled ? checked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked} disabled={disabled}
        onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: 'none',
        borderRadius: 'var(--radius-xs)',
        border: on ? '1.5px solid var(--c-blue)' : '1.5px solid var(--border-strong)',
        background: on ? 'var(--c-blue)' : 'var(--surface-card)',
        transition: 'var(--transition)',
      }}>
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
