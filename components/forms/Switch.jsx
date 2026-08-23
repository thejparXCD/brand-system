import React from 'react';

/** Celebration OnPoint — Switch (toggle) */
export function Switch({ label, checked, defaultChecked, disabled = false, id, onChange, style, ...rest }) {
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
        position: 'relative', width: 40, height: 23, flex: 'none',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--c-blue)' : 'var(--n-300)',
        transition: 'var(--transition)',
      }}>
        <span style={{
          position: 'absolute', top: 2.5, left: on ? 19.5 : 2.5,
          width: 18, height: 18, borderRadius: 'var(--radius-pill)',
          background: 'var(--n-0)', boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label}
    </label>
  );
}
