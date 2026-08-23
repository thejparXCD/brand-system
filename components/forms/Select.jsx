import React from 'react';

/**
 * Celebration OnPoint — Select
 * Native select styled to match the Input field, with a chevron adornment.
 */
export function Select({
  label,
  options = [],
  value,
  defaultValue,
  placeholder,
  helperText,
  error,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--c-danger)' : (focused ? 'var(--border-focus)' : 'var(--border-default)');
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 'var(--fw-medium)', color: 'var(--text-body)',
        }}>{label}</label>
      )}
      <div style={{
        position: 'relative', display: 'flex', alignItems: 'center',
        height: 42, padding: '0 14px',
        background: disabled ? 'var(--n-50)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused && !error ? 'var(--ring)' : 'none',
        transition: 'var(--transition)',
      }}>
        <select
          id={fieldId}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            appearance: 'none', WebkitAppearance: 'none',
            fontFamily: 'var(--font-body)', fontSize: 14.5,
            color: 'var(--text-strong)', cursor: disabled ? 'not-allowed' : 'pointer',
            paddingRight: 20,
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)"
          strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 14, pointerEvents: 'none' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {(helperText || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: error ? 'var(--c-danger)' : 'var(--text-faint)' }}>{error || helperText}</span>
      )}
    </div>
  );
}
