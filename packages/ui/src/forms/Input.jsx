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
  const fieldId = id;

  return (
    <label
      htmlFor={fieldId}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontFamily: 'var(--font-body)',
        ...style,
      }}
    >
      {label && (
        <span style={{ fontSize: 14, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
          {label}
        </span>
      )}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && (
          <span style={{ position: 'absolute', left: 12, color: 'var(--text-faint)', display: 'flex' }}>
            {iconLeft}
          </span>
        )}
        <input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={error ? true : undefined}
          style={{
            width: '100%',
            height: 42,
            padding: iconLeft ? '0 14px 0 40px' : '0 14px',
            borderRadius: 'var(--radius-md)',
            border: error ? '1.5px solid var(--c-danger)' : '1.5px solid var(--border-default)',
            background: 'var(--surface-card)',
            color: 'var(--text-strong)',
            fontFamily: 'var(--font-body)',
            fontSize: 14.5,
            outline: 'none',
            opacity: disabled ? 0.5 : 1,
          }}
          {...rest}
        />
      </span>
      {(error || helperText) && (
        <span style={{ fontSize: 12.5, color: error ? 'var(--c-danger)' : 'var(--text-muted)' }}>
          {error || helperText}
        </span>
      )}
    </label>
  );
}
