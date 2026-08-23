/* Celebration OnPoint — Contact / Book-a-session modal
   Exposes window.ContactModal */
(function () {
  const { Button, Input, Select, Textarea } = window.CelebrationOnPointDesignSystem_2fb49a;
  const Icon = window.Icon;

  function ContactModal({ open, onClose }) {
    const [sent, setSent] = React.useState(false);
    React.useEffect(() => { if (open) setSent(false); }, [open]);
    if (!open) return null;
    return (
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(7,12,24,0.6)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}>
        <div onClick={(e) => e.stopPropagation()} style={{
          width: 'min(520px, 100%)', background: 'var(--surface-card)',
          borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'relative', padding: '24px 28px', background: 'var(--grad-momentum)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-gold)', marginBottom: 8 }}>Reality Audit</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: '#fff', margin: 0, letterSpacing: '-0.01em' }}>Book a session</h3>
            <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 18, right: 18, border: 'none', background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius-sm)', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
              <Icon name="x" size={18} />
            </button>
          </div>
          {sent ? (
            <div style={{ padding: '44px 28px', textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(31,157,107,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <Icon name="check" size={28} stroke="var(--c-success)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text-strong)', margin: '0 0 8px' }}>You’re on the calendar.</h4>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 24px' }}>We’ll reach out within one business day to confirm your Reality Audit.</p>
              <Button variant="secondary" onClick={onClose}>Done</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Input label="Name" placeholder="Dana Reyes" required />
                <Input label="Work email" type="email" placeholder="you@company.com" iconLeft={<Icon name="mail" size={15} />} required />
              </div>
              <Select label="Where do you want momentum?" placeholder="Choose a service line" options={['Technology & Infrastructure', 'Growth & Workforce', 'Mission Strategy & Readiness', 'Not sure yet']} />
              <Textarea label="What’s the hidden reality?" rows={3} placeholder="Briefly, where do message, machines, and mission fall out of sync?" />
              <Button variant="primary" size="lg" fullWidth type="submit" iconRight={<Icon name="arrow-right" size={17} />}>Request my audit</Button>
            </form>
          )}
        </div>
      </div>
    );
  }
  window.ContactModal = ContactModal;
})();
