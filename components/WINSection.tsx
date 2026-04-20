export default function WINSection() {
  return (
    <section className="py-20 px-6 border-t border-white/[0.04]" style={{ background: '#07071a' }}>
      <div className="max-w-7xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] mb-6"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <span className="text-[11px] font-bold text-[#94a3b8] tracking-widest uppercase">Powered by WIN</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
          Powered by the Workforce Inclusion Network
        </h2>
        <p className="text-[15px] text-[#6b7280] max-w-2xl mx-auto mb-14 leading-relaxed">
          WIN connects employers, governments, NGOs, and educational institutions into one coordinated ecosystem — creating a feedback loop that makes every stakeholder stronger.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
          {[
            { icon: '🏢', label: 'Employers', stat: '3,400+', sub: 'Active hiring partners' },
            { icon: '🎓', label: 'Universities', stat: '120+', sub: 'Institutional partners' },
            { icon: '🤝', label: 'NGOs & Nodes', stat: '280+', sub: 'Service organizations' },
            { icon: '🏛️', label: 'Governments', stat: '14', sub: 'Active regions' },
          ].map(w => (
            <div
              key={w.label}
              className="p-6 rounded-2xl border border-white/[0.07] text-center"
              style={{ background: '#0d0d24' }}
            >
              <div className="text-3xl mb-3">{w.icon}</div>
              <div className="text-2xl font-black text-white mb-1">{w.stat}</div>
              <div className="text-sm font-semibold text-[#94a3b8] mb-1">{w.label}</div>
              <div className="text-[11px] text-[#475569]">{w.sub}</div>
            </div>
          ))}
        </div>

        {/* WIN feature strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="4"/><line x1="10.85" y1="12.15" x2="19" y2="4"/><line x1="18" y1="5" x2="20" y2="7"/><line x1="15" y1="8" x2="17" y2="10"/></svg>,
              label: 'Single Sign-On',
              sub: 'One login across the full network',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
              label: 'AODA & WCAG 2.1 AA',
              sub: 'Built-in, not bolted on',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
              label: 'PIPEDA Compliant',
              sub: 'Data stays in your region',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
              label: 'Real-time Sync',
              sub: 'Every update, everywhere, instantly',
            },
          ].map(f => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.06] text-center"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#f0a500] flex-shrink-0"
                style={{ background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.15)' }}
              >
                {f.icon}
              </div>
              <div>
                <div className="text-[12px] font-bold text-white mb-0.5">{f.label}</div>
                <div className="text-[11px] text-[#475569]">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
