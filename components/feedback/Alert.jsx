import React from 'react';

/**
 * Celebration OnPoint — Alert
 * Inline message banner. `tone` sets color + default icon.
 */
export function Alert({ title, children, tone = 'info', icon, onClose, style, ...rest }) {
  const map = {
    info:    ['rgba(40,150,210,0.10)', 'var(--c-info)', 'var(--c-info)'],
    success: ['rgba(31,157,107,0.10)', 'var(--c-success)', 'var(--c-success)'],
    warning: ['rgba(232,146,12,0.12)', 'var(--c-warning)', 'var(--c-warning)'],
    danger:  ['rgba(220,75,75,0.10)', 'var(--c-danger)', 'var(--c-danger)'],
  };
  const [bg, accent] = map[tone] || map.info;
  const defaultIcons = {
    info:    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    warning: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    danger:  '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
  };
  return (
    <div role="alert" style={{
      display: 'flex', gap: 12, padding: '14px 16px',
      background: bg, borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${accent}`, ...style,
    }} {...rest}>
      <span style={{ display: 'flex', color: accent, flex: 'none', marginTop: 1 }}>
        {icon || <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: defaultIcons[tone] || defaultIcons.info }} />}
      </span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-semibold)', fontSize: 14, color: 'var(--text-strong)', marginBottom: children ? 3 : 0 }}>{title}</div>}
        {children && <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{children}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{ border: 'none', background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', padding: 0, display: 'flex', flex: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      )}
    </div>
  );
}
