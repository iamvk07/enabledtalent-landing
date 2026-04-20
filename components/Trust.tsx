const WIN_FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M12 12v4M8 16h8" />
      </svg>
    ),
    title: 'Single Sign-On',
    body: 'One set of credentials across every platform, employer, and institution in the Enabled Talent network.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: 'AODA & WCAG 2.1 AA',
    body: 'Every product interface is built to meet AODA and WCAG 2.1 AA accessibility standards — not retrofitted after the fact.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'PIPEDA Compliant',
    body: 'Candidate data stays in their region. We comply with PIPEDA, GDPR, and all applicable local data residency laws.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: 'Real-time Sync',
    body: 'Every placement, match, accommodation, and outcome updates instantly across all nodes, employers, and partner institutions.',
  },
]

export default function Trust() {
  return (
    <>
      {/* ── WIN Network ── */}
      <section className="py-20 px-6 border-t border-white/[0.04]" style={{ background: '#07071a' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
            <span className="text-[11px] font-bold text-[#94a3b8] tracking-widest uppercase">Powered by WIN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Powered by the Workforce Inclusion Network
          </h2>
          <p className="text-[15px] text-[#6b7280] max-w-2xl mx-auto mb-14 leading-relaxed">
            WIN connects employers, governments, NGOs, and educational institutions into one coordinated ecosystem — creating a feedback loop that makes every stakeholder stronger.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="px-6 py-6">
        <div
          className="max-w-7xl mx-auto rounded-2xl border border-white/[0.08] px-8 py-14 text-center"
          style={{ background: 'linear-gradient(135deg, #0d0d24 0%, #12122e 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#f0a500] mb-4 tracking-tight">
            Ready to upgrade your<br />Inclusion Infrastructure?
          </h2>
          <p className="text-[15px] text-[#6b7280] mb-8 max-w-lg mx-auto leading-relaxed">
            Join the organizations already using Enabled Talent to close the employment gap — and prove it with data.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors"
            style={{ boxShadow: '0 6px 28px rgba(240,165,0,0.25)' }}
          >
            Schedule a Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Foundation of Trust ── */}
      <section className="py-20 px-6 border-t border-white/[0.04]" style={{ background: '#07071a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Built on a Foundation of Trust
            </h2>
            <p className="text-[15px] text-[#6b7280] max-w-xl mx-auto leading-relaxed">
              Our digital infrastructure is maintained to the highest global standards of security, privacy, and accessibility.
            </p>
          </div>

          {/* Feature pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {WIN_FEATURES.map(p => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-white/[0.07] hover:border-[#f0a500]/30 group transition-all duration-300"
                style={{ background: '#0d0d24' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#f0a500] mb-5 transition-colors"
                  style={{ background: 'rgba(240,165,0,0.08)', border: '1px solid rgba(240,165,0,0.15)' }}
                >
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Security bar */}
          <div
            className="rounded-xl border border-white/[0.07] px-6 py-4 flex items-center justify-between flex-wrap gap-4"
            style={{ background: '#0d0d24' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(240,165,0,0.08)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Integrated Security Infrastructure</div>
                <div className="text-[11px] text-[#475569]">SOC 2 Type II · ISO 27001 · End-to-end encryption</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-black text-[#f0a500]">100%</div>
              <div className="text-[12px] text-[#6b7280] leading-tight">uptime<br />SLA</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
