/* Celebration OnPoint — Website chrome: Header + Footer
   Exposes window.SiteHeader, window.SiteFooter */
(function () {
  const { Button, IconButton } = window.CelebrationOnPointDesignSystem_2fb49a;
  const Icon = window.Icon;

  const NAV = ['Services', 'The Three M’s', 'Approach', 'Insights'];

  function SiteHeader({ onContact }) {
    const [open, setOpen] = React.useState(false);
    return (
      <header style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(10,8,20,0.78)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 72,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src="../../assets/logo-mark.png" alt="Celebration OnPoint" style={{ height: 40 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, lineHeight: 1, color: '#fff', letterSpacing: '-0.01em' }}>
              Celebration<br/>OnPoint
            </span>
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="cop-nav">
            {NAV.map((n) => (
              <a key={n} href="#" style={{
                fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 500,
                color: 'rgba(255,255,255,0.72)', textDecoration: 'none',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
              >{n}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={15} />} onClick={onContact}>
              Book a session
            </Button>
          </div>
        </div>
      </header>
    );
  }

  function SiteFooter() {
    const cols = [
      ['Services', ['Technology & Infrastructure', 'Growth & Workforce', 'Mission Strategy & Readiness']],
      ['Company', ['About', 'The Three M’s', 'Insights', 'Careers']],
      ['Family of brands', ['OnPoint Sky Solutions']],
      ['Connect', ['Book a session', 'hello@celebrationonpoint.com', 'LinkedIn']],
    ];
    return (
      <footer style={{ position: 'relative', overflow: 'hidden', background: 'var(--c-ink)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="cop-lightfield cop-lf--spotlight" aria-hidden="true" />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '56px 28px 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <img src="../../assets/logo-mark.png" alt="" style={{ height: 38 }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff', lineHeight: 1 }}>Celebration<br/>OnPoint</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)', maxWidth: 280 }}>
                Build asymmetric advantage by turning hidden reality into visible, actionable momentum.
              </p>
            </div>
            {cols.map(([h, items]) => (
              <div key={h}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-gold)', marginBottom: 16 }}>{h}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map((it) => (
                    <li key={it}><a href="#" style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.62)', textDecoration: 'none' }}>{it}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 44, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'rgba(255,255,255,0.4)' }}>
            <span>© 2026 Celebration OnPoint</span>
            <span>See more · Sell more · Operate smarter</span>
          </div>
        </div>
      </footer>
    );
  }

  window.SiteHeader = SiteHeader;
  window.SiteFooter = SiteFooter;
})();
