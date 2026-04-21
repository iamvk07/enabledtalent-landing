const CARDS = [
  {
    id: 'universities',
    pillLabel: 'CAMPUS INCLUSION INFRASTRUCTURE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Only 33% of students with disabilities are employed within a year of graduation. Enabled Talent connects your career centre and disability services office into one gated system where your institution controls employer access, moderates every job posting, and owns its data with zero cross tenant leakage. NACE compliant reporting is built in.',
    stats: [{ val: '33%', label: 'employment gap to close' }, { val: '100%', label: 'institutional control' }],
    cta: 'See the Campus Solution',
    amber: false,
  },
  {
    id: 'ngos',
    pillLabel: 'CASE MANAGEMENT INFRASTRUCTURE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    headline: 'Replace spreadsheets with a system that connects your clients to employers directly.',
    body: 'Manage caseloads, track employer relationships, and report to funders from one platform. Each client\'s accommodation needs, job readiness, and placement status are visible in real time across your team.',
    stats: [{ val: '60%', label: 'less admin time' }, { val: '2.4x', label: 'more placements' }],
    cta: 'See the NGO Solution',
    amber: false,
  },
  {
    id: 'governments',
    pillLabel: 'POLICY AND PROGRAM INFRASTRUCTURE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Deploy regional or national inclusion strategies with built-in program accountability. Track outcomes across every service provider, employer, and candidate in your network with audit ready reporting and compliant funding allocation.',
    stats: [{ val: '100%', label: 'audit ready' }, { val: '5x', label: 'reporting speed' }],
    cta: 'See the Government Solution',
    amber: false,
  },
  {
    id: 'employers',
    pillLabel: 'INCLUSIVE HIRING INFRASTRUCTURE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    headline: 'Hire inclusively without guessing what support looks like.',
    body: 'Every candidate arrives with a completed accommodation profile and a connected support team. Your HR team receives pre matched candidates, onboarding guidance, and built in compliance reporting for AODA, ESG, and DEI commitments.',
    stats: [{ val: '40%', label: 'faster time to hire' }, { val: '0', label: 'onboarding gaps' }],
    cta: 'See the Employer Solution',
    amber: true,
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 py-20 px-6" style={{ background: '#eff4ff' }}>
      <div className="max-w-7xl mx-auto">

        {/* 2×2 bento grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="rounded-2xl p-8 flex flex-col scroll-mt-20"
              style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              {/* Pill label + icon row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#9ca3af' }}>
                  {card.pillLabel}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {card.icon}
                </div>
              </div>

              {/* Headline */}
              <h3
                className="font-bold mb-4 leading-snug"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)', color: '#07071a', letterSpacing: '-0.015em' }}
              >
                {card.headline}
              </h3>

              {/* Body */}
              <p className="text-[14px] leading-[1.75] mb-6 flex-1" style={{ color: '#6b7280' }}>
                {card.body}
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-2.5 mb-7">
                {card.stats.map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full"
                    style={{ background: 'rgba(7,7,26,0.05)', border: '1px solid rgba(7,7,26,0.08)' }}
                  >
                    <span className="text-[15px] font-black" style={{ color: '#07071a' }}>{stat.val}</span>
                    <span className="text-[12px]" style={{ color: '#6b7280' }}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={
                    card.amber
                      ? { background: '#f0a500', color: '#07071a', boxShadow: '0 4px 20px rgba(240,165,0,0.3)' }
                      : { background: '#07071a', color: '#ffffff' }
                  }
                >
                  {card.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
