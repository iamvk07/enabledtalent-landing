const PILLARS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Global Standards',
    body: 'Harmonized compliance across jurisdictions: AODA/PIPEDA in Canada, ADA/Section 508 in the USA, and GDPR/EAA in the EU.',
    badges: ['ADA', 'GDPR', 'AODA'],
    highlight: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Inclusive Architecture',
    body: 'WCAG 2.1 AA compliant by design. Features screen reader optimization, full keyboard navigation, and adaptable high-contrast workflows.',
    badge98: true,
    highlight: true,
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
    body: 'In-country data residency and zero-trust access protocols. AES-256 encryption ensures regional data remains under strict jurisdiction control.',
    highlight: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Portable Identity',
    body: 'Unique Identity Protocol allows accommodation records to travel with talent globally, eliminating disclosure fatigue and accelerating onboarding.',
    activeBadge: true,
    highlight: false,
  },
]

export default function Trust() {
  return (
    <>
      {/* ── Press logos (on white background) ── */}
      <section className="py-14 px-6" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold mb-8" style={{ color: '#9ca3af' }}>
            As featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">

            {/* Digital Journal */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: '#1a1a2e' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1" y="1" width="8" height="8" rx="1" fill="white" fillOpacity="0.9" /></svg>
              </div>
              <span className="text-[13px] font-bold" style={{ color: '#1a1a2e' }}>Digital Journal</span>
            </div>

            {/* Financial Post */}
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#003087' }}>
                <span className="text-[13px] font-black text-white">FP</span>
              </div>
              <span className="text-[11px] font-semibold" style={{ color: '#6b7280' }}>Financial Post</span>
            </div>

            {/* betakit */}
            <span className="text-[15px] font-black italic" style={{ color: '#111827' }}>betakit</span>

            {/* Founders */}
            <span className="text-[14px] font-black tracking-widest uppercase" style={{ color: '#1f2937', fontFamily: 'Georgia, serif' }}>Founders</span>

            {/* National Post */}
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#f0a500' }}>
                <span className="text-[13px] font-black" style={{ color: '#07071a' }}>NP</span>
              </div>
              <span className="text-[11px] font-semibold" style={{ color: '#6b7280' }}>National Post</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Strip (dark) ── */}
      <section className="px-6 py-6" style={{ background: '#07071a' }}>
        <div
          className="max-w-7xl mx-auto rounded-2xl border border-white/[0.08] px-8 py-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d0d24 0%, #12122e 100%)' }}
        >
          {/* Dot pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, rgba(240,165,0,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
          <div className="relative z-10">
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
        </div>
      </section>

      {/* ── Foundation of Trust (LIGHT background) ── */}
      <section className="py-20 px-6" style={{ background: '#eff4ff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight" style={{ color: '#07071a', letterSpacing: '-0.02em' }}>
              Built on a Foundation of Trust
            </h2>
            <p className="text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: '#4b5563' }}>
              Our digital infrastructure is engineered to meet the highest global standards of accessibility, data sovereignty, and security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {PILLARS.map(p => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border transition-all duration-300"
                style={p.highlight
                  ? { background: '#ffffff', borderColor: '#f0a500', boxShadow: '0 0 0 1px rgba(240,165,0,0.15), 0 4px 20px rgba(240,165,0,0.08)' }
                  : { background: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: p.highlight ? 'rgba(240,165,0,0.1)' : 'rgba(240,165,0,0.07)', color: '#f0a500', border: '1px solid rgba(240,165,0,0.2)' }}
                >
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: '#07071a' }}>{p.title}</h3>
                <p className="text-[13px] leading-relaxed mb-3" style={{ color: '#6b7280' }}>{p.body}</p>

                {p.badges && (
                  <div className="flex gap-1.5 flex-wrap">
                    {p.badges.map(b => (
                      <span key={b} className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(7,7,26,0.06)', color: '#374151' }}>{b}</span>
                    ))}
                  </div>
                )}
                {p.badge98 && (
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold" style={{ color: '#4ade80' }}>98 PASS</span>
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <div className="h-full rounded-full" style={{ width: '98%', background: '#4ade80' }} />
                    </div>
                  </div>
                )}
                {p.activeBadge && (
                  <span className="text-[9px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,165,0,0.1)', color: '#c47e00' }}>ACTIVE PROTOCOL SYSTEM</span>
                )}
              </div>
            ))}
          </div>

          {/* Security bar */}
          <div
            className="rounded-xl border px-6 py-5 flex items-center justify-between flex-wrap gap-4"
            style={{ background: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }}
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
                <div className="text-sm font-bold" style={{ color: '#07071a' }}>Integrated Security Infrastructure</div>
                <div className="text-[11px]" style={{ color: '#6b7280' }}>SOC 2 Type II · ISO 27001 · End-to-end encryption · Real-time monitoring</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-black" style={{ color: '#f0a500' }}>100%</div>
              <div className="text-[12px] leading-tight" style={{ color: '#6b7280' }}>SOVEREIGN<br />CONTROL</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
