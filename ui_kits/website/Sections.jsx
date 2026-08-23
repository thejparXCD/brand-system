/* Celebration OnPoint — Website sections
   Exposes window.Hero, window.ThreeM, window.ServiceLines, window.ProofBand, window.CTASection */
(function () {
  const { Button, PillarCard, Stat, Badge } = window.CelebrationOnPointDesignSystem_2fb49a;
  const Icon = window.Icon;

  /* ---------- HERO ---------- */
  function Hero({ onContact }) {
    return (
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--c-ink)' }}>
        <div className="cop-lightfield cop-lf--pillars cop-lf--alive" aria-hidden="true" />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '96px 28px 104px', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(245,197,24,0.12)', border: '1px solid rgba(245,197,24,0.3)', marginBottom: 26 }}>
              <Icon name="zap" size={14} stroke="var(--c-gold)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)' }}>Asymmetric advantage</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 22px' }}>
              Turn hidden reality into <span style={{ background: 'var(--grad-bolt)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>visible momentum.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,0.66)', maxWidth: 520, margin: '0 0 30px' }}>
              We unify Message, Machines, and Mission so your organization can see more, sell more, and operate smarter.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 26 }}>
              <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={17} />} onClick={onContact}>See what you’re missing</Button>
              <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.28)' }} iconLeft={<Icon name="play" size={15} />}>Watch the 90-sec brief</Button>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '0.01em', color: 'rgba(255,255,255,0.86)', margin: 0 }}>
              We build momentum. <span style={{ color: 'var(--c-gold)' }}>Real. Measurable. Unstoppable.</span> OnPoint.
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 'var(--radius-xl)', padding: 28, backdropFilter: 'blur(8px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <img src="../../assets/logo-mark.png" alt="" style={{ height: 34 }} />
                <Badge tone="gold" dot>Live signal</Badge>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
                <Stat label="Pipeline velocity" value="+38%" delta="12%" tone="ink" />
                <Stat label="Surfaced revenue" value="$2.1M" delta="9%" tone="ink" />
                <Stat label="Decisions / week" value="3.4×" tone="ink" />
                <Stat label="Readiness" value="72" tone="ink" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- M³ ---------- */
  function ThreeM() {
    const items = [
      { theme: 'momentum', index: 'M1', eyebrow: 'What you say', icon: 'message', title: 'Message', desc: 'The narrative, positioning, and storytelling that influences perception and clarifies direction.' },
      { theme: 'technology', index: 'M2', eyebrow: 'How you operate', icon: 'cpu', title: 'Machines', desc: 'The technology, systems, and AI — automation, imaging systems, cloud — that bring the message to life.' },
      { theme: 'mission', index: 'M3', eyebrow: 'Why you exist', icon: 'compass', title: 'Mission', desc: 'The purpose behind the initiative — why the work matters and who it serves.' },
    ];
    return (
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--c-ink)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cop-lightfield cop-lf--aurora" aria-hidden="true" />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '88px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-azure)', marginBottom: 14 }}>M³ · Our foundational philosophy</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, letterSpacing: '-0.02em', color: '#fff', margin: '0 auto 16px', maxWidth: 720 }}>
              The lens through which we see the world. Everything connects message, machines, and mission.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {items.map((it) => (
              <PillarCard key={it.index} theme={it.theme} index={it.index} eyebrow={it.eyebrow}
                icon={<Icon name={it.icon} size={22} />} title={it.title} description={it.desc} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- SERVICE LINES ---------- */
  function ServiceLines() {
    const lines = [
      { key: 'growth', grad: 'var(--grad-growth)', icon: 'trending-up', name: 'Growth & Workforce Enablement', tag: 'Message', desc: 'Sales training, marketing, and communications that move people.' },
      { key: 'technology', grad: 'var(--grad-technology)', icon: 'cpu', name: 'Technology & Infrastructure', tag: 'Machines', desc: 'AI transformation & automation, IT & cybersecurity advisory, Microsoft licensing & governance.' },
      { key: 'mission', grad: 'var(--grad-mission)', icon: 'target', name: 'Mission Strategy & Readiness', tag: 'Mission', desc: 'Adoption & change management, and AI governance for health systems.' },
    ];
    const [active, setActive] = React.useState('growth');
    return (
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-azure)', marginBottom: 12 }}>Service lines</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: 0, maxWidth: 560 }}>Integrated expressions of M³.</h2>
            </div>
            <Button variant="outline" iconRight={<Icon name="arrow-up-right" size={16} />}>Explore all services</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {lines.map((l) => {
              const on = active === l.key;
              return (
                <div key={l.key} onMouseEnter={() => setActive(l.key)}
                  style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', minHeight: 248, padding: 24, color: '#fff', background: l.grad, cursor: 'pointer', boxShadow: on ? 'var(--shadow-xl)' : 'var(--shadow-md)', transform: on ? 'translateY(-4px)' : 'none', transition: 'var(--transition)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <Icon name={l.icon} size={22} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-gold)' }}>{l.tag}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, lineHeight: 1.2, letterSpacing: '-0.01em', color: '#fff', margin: '0 0 8px' }}>{l.name}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', margin: 0 }}>{l.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- AIM ONPOINT FRAMEWORK ---------- */
  function AimFramework() {
    const steps = [
      { n: '01', icon: 'search', title: 'Acquire', desc: 'Identify opportunities, capture data, and understand the landscape.' },
      { n: '02', icon: 'layers', title: 'Integrate', desc: 'Connect message, machines, and mission — fuse creative, technical, and operational components into one system.' },
      { n: '03', icon: 'trending-up', title: 'Maximize', desc: 'Activate momentum with execution. Amplify visibility, improve efficiency, accelerate outcomes — measure everything.' },
    ];
    const fives = ['Client Commitment', 'Connection', 'Clarity', 'Creativity', 'Confidence', 'Celebration'];
    return (
      <section style={{ background: 'var(--surface-page)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-azure)', marginBottom: 12 }}>AIM OnPoint™ Framework</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 auto', maxWidth: 640 }}>M³ is the philosophy. AIM is the action.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ position: 'relative', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--grad-momentum)', color: '#fff' }}>
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>{s.n}</span>
                </div>
                <div style={{ height: 3, width: 36, borderRadius: 2, background: 'var(--grad-bolt)', marginBottom: 14 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, color: 'var(--text-strong)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Powered by the 6 C’s of OnPoint Success</span>
            {fives.map((c) => (
              <span key={c} style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--c-blue)', padding: '4px 12px', borderRadius: 'var(--radius-pill)', background: 'rgba(16,86,165,0.08)', border: '1px solid rgba(16,86,165,0.16)' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- PROOF BAND ---------- */
  function ProofBand() {
    const stats = [
      { label: 'Avg. pipeline lift', value: '+38%' },
      { label: 'Hidden revenue surfaced', value: '$2.1M' },
      { label: 'Faster decisions', value: '3.4×' },
      { label: 'Mission readiness', value: '72%' },
    ];
    return (
      <section style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '46px 28px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
          {stats.map((s) => <Stat key={s.label} label={s.label} value={s.value} />)}
        </div>
      </section>
    );
  }

  /* ---------- CTA ---------- */
  function CTASection({ onContact }) {
    return (
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 28px 88px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-2xl)', background: 'var(--c-ink)', border: '1px solid rgba(255,255,255,0.08)', padding: '64px 56px' }}>
            <div className="cop-lightfield cop-lf--horizon cop-lf--alive" aria-hidden="true" />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
              <div style={{ maxWidth: 600 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px' }}>See more. Sell more. Operate smarter.</h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: 0 }}>Start with a Reality Audit. We’ll surface what’s hidden across your three M’s in 14 days.</p>
              </div>
              <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={17} />} onClick={onContact}>Book a session</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { Hero, ThreeM, ServiceLines, AimFramework, ProofBand, CTASection });
})();
