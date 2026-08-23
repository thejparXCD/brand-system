import React from 'react';

/** Celebration OnPoint — Textarea */
export function Textarea({ label, placeholder, value, defaultValue, rows = 4, helperText, error, disabled = false, id, onChange, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--c-danger)' : (focused ? 'var(--border-focus)' : 'var(--border-default)');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 'var(--fw-medium)', color: 'var(--text-body)' }}>{label}</label>
      )}
      <textarea
        id={fieldId} placeholder={placeholder} value={value} defaultValue={defaultValue}
        rows={rows} disabled={disabled} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '11px 14px', resize: 'vertical',
          background: disabled ? 'var(--n-50)' : 'var(--surface-card)',
          border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
          boxShadow: focused && !error ? 'var(--ring)' : 'none',
          fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55,
          color: 'var(--text-strong)', outline: 'none', transition: 'var(--transition)',
        }}
        {...rest}
      />
      {(helperText || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: error ? 'var(--c-danger)' : 'var(--text-faint)' }}>{error || helperText}</span>
      )}
    </div>
  );
}
