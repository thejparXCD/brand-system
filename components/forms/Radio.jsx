import React from 'react';

/** Celebration OnPoint — Radio (single option; group via shared `name`) */
export function Radio({ label, checked, defaultChecked, name, value, disabled = false, id, onChange, style, ...rest }) {
  const fieldId = id || React.useId();
  const isControlled = checked !== undefined;
  return (
    <label htmlFor={fieldId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-body)', ...style,
    }}>
      <input id={fieldId} type="radio" name={name} value={value}
        checked={isControlled ? checked : undefined}
        defaultChecked={isControlled ? undefined : defaultChecked}
        disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" data-on={isControlled ? checked : undefined} style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: 'none', borderRadius: 'var(--radius-pill)',
        border: (isControlled ? checked : defaultChecked) ? '1.5px solid var(--c-blue)' : '1.5px solid var(--border-strong)',
        background: 'var(--surface-card)', transition: 'var(--transition)',
      }}>
        {(isControlled ? checked : defaultChecked) && (
          <span style={{ width: 10, height: 10, borderRadius: 'var(--radius-pill)', background: 'var(--c-blue)' }} />
        )}
      </span>
      {label}
    </label>
  );
}
