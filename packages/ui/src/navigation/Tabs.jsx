export function Tabs({ items = [], value, onChange, style, ...rest }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-md)',
        ...style,
      }}
      {...rest}
    >
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            role="tab"
            type="button"
            aria-selected={selected}
            onClick={() => onChange && onChange(item.value)}
            style={{
              border: 'none',
              background: selected ? 'var(--surface-card)' : 'transparent',
              color: selected ? 'var(--text-strong)' : 'var(--text-muted)',
              boxShadow: selected ? 'var(--shadow-sm)' : 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 14px',
              fontFamily: 'var(--font-body)',
              fontSize: 13.5,
              fontWeight: 'var(--fw-semibold)',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
