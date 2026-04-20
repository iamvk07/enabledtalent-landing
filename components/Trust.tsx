const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Global Standards',
    body: 'Built to WCAG 2.2, AODA, ADA, and EN 301 549 compliance — across every region we operate in.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Inclusive Architecture',
    body: 'Every feature is designed with accessibility-first principles — not bolted on after the fact.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Data Sovereignty',
    body: 'Candidate data stays in their region. PIPEDA, GDPR, and local data residency laws are respected by default.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Portable Identity',
    body: "A talent's profile, credentials, and accommodation history follow them across employers and borders — forever.",
  },
]

export default function Trust() {
  return (
    <>
      {/* WIN Section */}
      <section className="py-16 px-6 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
            <span className="text-[11px] font-semibold text-[#94a3b8] tracking-widest uppercase">Powered by WIN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Powered by the Workforce Inclusion Network
          </h2>
          <p className="text-[15px] text-[#6b7280] max-w-2xl mx-auto mb-12">
            WIN connects employers, governments, NGOs, and educational institutions into one coordinated ecosystem — creating a feedback loop that makes every stakeholder stronger.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🏢', label: 'Employers', sub: '3,400+ partners' },
              { icon: '🎓', label: 'Universities', sub: '120+ institutions' },
              { icon: '🤝', label: 'NGOs & Nodes', sub: '280+ organizations' },
              { icon: '🏛️', label: 'Governments', sub: '14 regions' },
            ].map(w => (
              <div key={w.label} className="p-5 rounded-xl border border-white/[0.08] bg-[#0d0d24] text-center">
                <div className="text-2xl mb-2">{w.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{w.label}</div>
                <div className="text-[11px] text-[#475569]">{w.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-6 my-8 rounded-2xl bg-gradient-to-br from-[#0d0d24] to-[#12122e] border border-white/[0.08] px-8 py-14 text-center max-w-7xl lg:mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f0a500] mb-4 tracking-tight">
          Ready to upgrade your<br />Inclusion Infrastructure?
        </h2>
        <p className="text-[15px] text-[#6b7280] mb-8 max-w-lg mx-auto">
          Join the organizations already using Enabled Talent to close the employment gap — and prove it with data.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors"
        >
          Schedule a Demo
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 7h10M8 3l4 4-4 4" />
          </svg>
        </a>
      </section>

      {/* Foundation of Trust */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Built on a Foundation of Trust
            </h2>
            <p className="text-[15px] text-[#6b7280] max-w-xl mx-auto">
              Our digital infrastructure is maintained to the highest global standards of security, privacy, and accessibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {PILLARS.map(p => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0d0d24] hover:border-[#f0a500]/30 hover:bg-[#f0a500]/[0.03] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f0a500]/10 border border-[#f0a500]/20 flex items-center justify-center text-[#f0a500] mb-5 group-hover:bg-[#f0a500]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Security bar */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0d0d24] px-6 py-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#f0a500]/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Integrated Security Infrastructure</div>
                <div className="text-[11px] text-[#475569]">SOC 2 Type II · ISO 27001 · End-to-end encryption</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-[#f0a500]">100%</div>
              <div className="text-[12px] text-[#6b7280]">uptime SLA</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
