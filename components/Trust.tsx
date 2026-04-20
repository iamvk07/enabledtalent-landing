const PILLARS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Global Standards',
    body: 'Built to WCAG 2.2, AODA, ADA, and EN 301 549 compliance — across every region we operate in.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Inclusive Architecture',
    body: 'Every feature is designed with accessibility-first principles — not bolted on after the fact.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Data Sovereignty',
    body: 'Candidate data stays in their region. PIPEDA, GDPR, and local data residency laws are respected by default.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Portable Identity',
    body: "A talent's profile, credentials, and accommodation history follow them across employers and borders — forever.",
  },
]

const PRESS_LOGOS = [
  { name: 'betakit', style: 'font-black text-[15px] tracking-tight italic' },
  { name: 'FP', style: 'font-black text-[17px] tracking-tight', sub: 'Financial Post' },
  { name: 'FOUNDERS', style: 'font-black text-[13px] tracking-[0.08em]' },
  { name: 'NP', style: 'font-black text-[17px] tracking-tight', sub: 'National Post' },
]

export default function Trust() {
  return (
    <>
      {/* ── WIN Network ── */}
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

      {/* ── Trusted by / Press logos ── */}
      <section className="py-14 px-6 border-t border-white/[0.04]" style={{ background: '#07071a' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] text-[#334155] uppercase tracking-[0.18em] font-bold mb-8">
            Trusted by organizations building the future of work
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {PRESS_LOGOS.map(logo => (
              <div key={logo.name} className="flex flex-col items-center gap-0.5">
                <span className={`${logo.style} text-[#3d4f6b] hover:text-[#6b7280] transition-colors cursor-default select-none`}>
                  {logo.name}
                </span>
                {logo.sub && (
                  <span className="text-[9px] font-semibold text-[#253146] uppercase tracking-wider">{logo.sub}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="px-6 py-6" style={{ background: '#07071a' }}>
        <div
          className="max-w-7xl mx-auto rounded-2xl border border-white/[0.08] px-8 py-16 text-center"
          style={{ background: 'linear-gradient(135deg, #0d0d24 0%, #12122e 100%)' }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#f0a500] mb-4 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Ready to upgrade your<br />inclusion infrastructure?
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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Built on a Foundation of Trust
            </h2>
            <p className="text-[15px] text-[#6b7280] max-w-xl mx-auto leading-relaxed">
              Our digital infrastructure is engineered to meet the highest global standards of accessibility, data sovereignty, and security, providing a seamless and secure experience for talent and enterprise alike.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {PILLARS.map(p => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-white/[0.07] hover:border-[#f0a500]/25 group transition-all duration-300"
                style={{ background: '#0d0d24' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#f0a500] mb-5 transition-colors group-hover:bg-[#f0a500]/15"
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
            className="rounded-xl border border-white/[0.07] px-6 py-5 flex items-center justify-between flex-wrap gap-4"
            style={{ background: '#0d0d24' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(240,165,0,0.08)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Integrated Security Infrastructure</div>
                <div className="text-[11px] text-[#475569]">SOC 2 Type II · ISO 27001 · End-to-end encryption · Real-time monitoring</div>
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
