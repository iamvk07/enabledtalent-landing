function UniversitiesVisual() {
  const bars = [
    { hPx: 68, yr: '2021', active: false },
    { hPx: 50, yr: '2022', active: false },
    { hPx: 112, yr: '2023', active: true },
    { hPx: 72, yr: '2024', active: false },
  ]
  return (
    <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#9ca3af' }}>CURRENT METRIC</div>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-[32px] font-black" style={{ color: '#f0a500' }}>33%</span>
        <span className="text-[14px] font-semibold" style={{ color: '#374151' }}>Employment Gap</span>
      </div>
      {/* Chart area */}
      <div className="relative" style={{ height: '130px' }}>
        {/* TARGET label + red indicator line on the right */}
        <div className="absolute top-0 right-0 flex flex-col items-end">
          <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: '#9ca3af' }}>TARGET</span>
          <div style={{ width: '1px', height: '112px', background: '#ef4444', marginTop: '2px' }} />
        </div>
        {/* Bars */}
        <div className="flex items-end gap-3 h-full pr-6">
          {bars.map(b => (
            <div key={b.yr} className="flex-1 flex flex-col items-center gap-1.5" style={{ alignSelf: 'flex-end' }}>
              <div
                className="w-full rounded-t"
                style={{ height: `${b.hPx}px`, background: b.active ? '#f0a500' : '#1f2937' }}
              />
              <span className="text-[10px]" style={{ color: '#9ca3af' }}>{b.yr}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NGOsVisual() {
  return (
    <div className="rounded-2xl p-6 space-y-3" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[9px] uppercase tracking-wider font-semibold mb-1" style={{ color: '#475569' }}>ACTIVE CASELOAD</div>
          <div className="text-[28px] font-black text-white leading-none">1,248</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'rgba(240,165,0,0.08)', border: '1px solid rgba(240,165,0,0.2)' }}>
          <div className="text-[9px] uppercase tracking-wider font-semibold mb-1" style={{ color: '#f0a500' }}>EFFICIENCY GAIN</div>
          <div className="text-[28px] font-black leading-none" style={{ color: '#f0a500' }}>60%</div>
          <div className="text-[9px]" style={{ color: '#94a3b8' }}>reduced admin time</div>
        </div>
      </div>
      <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
          <span className="text-[12px] font-bold text-white">Flow State Activated</span>
        </div>
        <div className="text-[11px]" style={{ color: '#475569' }}>Automated job matching engine currently active</div>
      </div>
    </div>
  )
}

function GovernmentsVisual() {
  const pct = 98.4
  const r = 38
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div className="rounded-2xl p-6" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[13px] font-bold text-white">Funding Allocation: Region 04</div>
        </div>
        <span className="text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider" style={{ background: 'rgba(240,165,0,0.12)', color: '#f0a500' }}>REAL-TIME DATA</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
            <circle cx="50" cy="50" r={r} fill="none" stroke="#f0a500" strokeWidth="8"
              strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 50 50)" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[18px] font-black text-white leading-none">98.4%</span>
            <span className="text-[9px]" style={{ color: '#475569' }}>utilized</span>
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          {[
            { label: 'Employment Services', pct: 42 },
            { label: 'Training Programs', pct: 31 },
            { label: 'Accessibility Grants', pct: 25 },
          ].map(row => (
            <div key={row.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[10px]" style={{ color: '#6b7280' }}>{row.label}</span>
                <span className="text-[10px] font-bold" style={{ color: '#94a3b8' }}>{row.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: '#f0a500', opacity: 0.75 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EmployersVisual() {
  return (
    <div className="rounded-2xl p-6" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ color: '#475569' }}>Candidate Match Index</div>
      <div className="space-y-3">
        {[
          { init: 'A', name: 'Alex Rivera', role: 'Senior Project Coordinator', score: 94 },
          { init: 'J', name: 'Jordan Smith', role: 'Data Analyst · ADHD', score: 83 },
          { init: 'M', name: 'Maya Patel', role: 'Dev Lead · Deaf', score: 91 },
        ].map(c => (
          <div key={c.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0" style={{ background: 'rgba(240,165,0,0.15)', color: '#f0a500' }}>
              {c.init}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-white leading-tight">{c.name}</div>
              <div className="text-[10px] truncate" style={{ color: '#475569' }}>{c.role}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-[14px] font-black" style={{ color: '#f0a500' }}>{c.score}%</div>
              <div className="text-[9px]" style={{ color: '#334155' }}>match score</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SOLUTIONS = [
  {
    id: 'universities',
    categoryLabel: 'FOR UNIVERSITIES',
    pillLabel: 'CAMPUS INCLUSION INFRASTRUCTURE',
    pillIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Enabled Talent connects your career centre and disability services office into one gated system where your institution controls employer access, moderates every job posting, and owns its data with zero cross tenant leakage. NACE compliant reporting is built in.',
    stats: [{ val: '33%', label: 'employment gap to close' }, { val: '100%', label: 'institutional control' }],
    cta: 'See the Campus Solution',
    visual: <UniversitiesVisual />,
    textLeft: true,
  },
  {
    id: 'ngos',
    categoryLabel: 'FOR NGOS',
    pillLabel: 'CASE MANAGEMENT INFRASTRUCTURE',
    pillIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    headline: 'Replace spreadsheets with a system that connects your clients to employers directly.',
    body: "Manage caseloads, track employer relationships, and report to funders from one platform. Each client's accommodation needs, job readiness, and placement status are visible in real time across your team.",
    stats: [{ val: '60%', label: 'less admin time' }, { val: '2.4x', label: 'more placements' }],
    cta: 'See the NGO Solution',
    visual: <NGOsVisual />,
    textLeft: false,
  },
  {
    id: 'governments',
    categoryLabel: 'FOR GOVERNMENTS',
    pillLabel: 'POLICY AND PROGRAM INFRASTRUCTURE',
    pillIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" /><polygon points="12 2 20 7 4 7" />
        <line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" />
      </svg>
    ),
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Deploy regional or national inclusion strategies with built in program accountability. Track outcomes across every service provider, employer, and candidate in your network with audit ready reporting and compliant funding allocation.',
    stats: [{ val: '100%', label: 'audit ready' }, { val: '5x', label: 'reporting speed' }],
    cta: 'See the Government Solution',
    visual: <GovernmentsVisual />,
    textLeft: true,
  },
  {
    id: 'employers',
    categoryLabel: 'FOR EMPLOYERS',
    pillLabel: 'INCLUSIVE HIRING INFRASTRUCTURE',
    pillIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    headline: 'Hire inclusively without guessing what support looks like.',
    body: 'Every candidate arrives with a completed accommodation profile and a connected support team. Your HR team receives pre matched candidates, onboarding guidance, and built in compliance reporting for AODA, ESG, and DEI commitments.',
    stats: [{ val: '40%', label: 'faster time to hire' }, { val: '0', label: 'onboarding gaps' }],
    cta: 'See the Employer Solution',
    visual: <EmployersVisual />,
    textLeft: false,
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16" style={{ background: '#eff4ff' }}>

      {/* Section header */}
      <div className="px-6 pt-20 pb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4" style={{ color: '#07071a', letterSpacing: '-0.02em' }}>
          One Platform, Four Solutions
        </h2>
        <p className="text-[16px] max-w-xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
          Each stakeholder in the inclusion ecosystem gets a purpose built portal. Every portal runs on the same data infrastructure — employers, service providers, and funders all stay in sync without manual handoffs.
        </p>
      </div>

      {/* Stacked solution sections */}
      {SOLUTIONS.map((sol) => (
        <div
          key={sol.id}
          id={sol.id}
          className="px-6 py-16 scroll-mt-20"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Large amber category heading + underline */}
            <div className="mb-7">
              <h3
                className="font-black mb-2"
                style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: '#f0a500', letterSpacing: '0.05em' }}
              >
                {sol.categoryLabel}
              </h3>
              <div className="h-[3px] w-14 rounded-full" style={{ background: '#f0a500' }} />
            </div>

            {/* 2-column layout — alternating text/visual */}
            <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${!sol.textLeft ? 'lg:flex-row-reverse' : ''}`}>

              {/* Text side */}
              <div className="flex-1 min-w-0">
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(240,165,0,0.35)', background: 'rgba(240,165,0,0.07)' }}>
                  <span style={{ color: '#f0a500' }}>{sol.pillIcon}</span>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: '#c47e00' }}>{sol.pillLabel}</span>
                </div>

                <h4
                  className="font-bold mb-4 leading-tight"
                  style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: '#07071a', letterSpacing: '-0.015em' }}
                >
                  {sol.headline}
                </h4>

                <p className="text-[15px] leading-[1.75] mb-7" style={{ color: '#4b5563' }}>
                  {sol.body}
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {sol.stats.map(stat => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full"
                      style={{ background: '#f3f4f6', border: '1px solid rgba(0,0,0,0.08)' }}
                    >
                      <span className="text-[15px] font-black" style={{ color: '#07071a' }}>{stat.val}</span>
                      <span className="text-[12px]" style={{ color: '#6b7280' }}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#07071a', color: '#ffffff' }}
                >
                  {sol.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" />
                  </svg>
                </a>
              </div>

              {/* Visual side */}
              <div className="flex-1 min-w-0 w-full">
                {sol.visual}
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
