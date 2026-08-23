import React from 'react';

/**
 * Celebration OnPoint — Tag
 * Removable label chip (filters, selections). Square-ish radius vs. Badge's pill.
 */
export function Tag({ children, onRemove, icon, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '5px 10px', borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 'var(--fw-medium)',
        color: 'var(--text-body)', ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'flex', color: 'var(--c-azure)' }}>{icon}</span>}
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 16, height: 16, padding: 0, marginRight: -2, border: 'none',
          background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', borderRadius: 'var(--radius-xs)',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      )}
    </span>
  );
}
