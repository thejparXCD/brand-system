import React from 'react';

/**
 * Celebration OnPoint — Input
 * Text field with optional label, helper / error text, and icon adornment.
 */
export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  helperText,
  error,
  iconLeft,
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--c-danger)' : (focused ? 'var(--border-focus)' : 'var(--border-default)');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 'var(--fw-medium)',
          color: 'var(--text-body)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        height: 42, padding: '0 14px',
        background: disabled ? 'var(--n-50)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused && !error ? 'var(--ring)' : 'none',
        transition: 'var(--transition)',
      }}>
        {iconLeft && <span style={{ display: 'flex', color: 'var(--text-faint)' }}>{iconLeft}</span>}
        <input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-strong)',
            minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {(helperText || error) && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 12,
          color: error ? 'var(--c-danger)' : 'var(--text-faint)',
        }}>{error || helperText}</span>
      )}
    </div>
  );
}
