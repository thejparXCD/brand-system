import React from 'react';

/**
 * Celebration OnPoint — Breadcrumb
 * `items`: [{ label, href? }]. Last item is the current page (no link).
 */
export function Breadcrumb({ items = [], style, ...rest }) {
  return (
    <nav aria-label="Breadcrumb" style={{
      display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6,
      fontFamily: 'var(--font-body)', fontSize: 13, ...style,
    }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last || !it.href ? (
              <span style={{ color: last ? 'var(--text-strong)' : 'var(--text-muted)', fontWeight: last ? 'var(--fw-medium)' : 'var(--fw-regular)' }}>{it.label}</span>
            ) : (
              <a href={it.href} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{it.label}</a>
            )}
            {!last && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
