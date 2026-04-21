function UniversitiesVisual() {
  return (
    <div className="rounded-xl border p-4 h-full" style={{ background: '#07071a', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="text-[10px] uppercase tracking-wider font-semibold mb-3" style={{ color: '#475569' }}>Graduate Employment Rate — Disabilities</div>
      <div className="flex items-end gap-2.5 h-20 mb-3">
        {[
          { h: '42%', yr: '2021', val: '41%' },
          { h: '56%', yr: '2022', val: '54%' },
          { h: '100%', yr: '2023', val: '67%', active: true },
        ].map(b => (
          <div key={b.yr} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-[9px] font-bold" style={{ color: b.active ? '#f0a500' : '#334155' }}>{b.val}</span>
            <div className="w-full rounded-t-lg" style={{ height: b.h, background: b.active ? '#f0a500' : 'rgba(240,165,0,0.2)' }} />
            <span className="text-[9px]" style={{ color: '#334155' }}>{b.yr}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-black" style={{ color: '#f0a500' }}>33%</span>
          <span className="text-[11px]" style={{ color: '#475569' }}>Employment Gap</span>
        </div>
        <span className="text-[10px] font-semibold" style={{ color: '#4ade80' }}>↑ Improving</span>
      </div>
    </div>
  )
}

function NGOsVisual() {
  return (
    <div className="rounded-xl border p-4 h-full" style={{ background: '#07071a', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[24px] font-black text-white leading-none">1,248</div>
          <div className="text-[10px] mt-0.5" style={{ color: '#475569' }}>Active client cases</div>
        </div>
        <div className="text-right">
          <div className="text-[24px] font-black leading-none" style={{ color: '#f0a500' }}>60%</div>
          <div className="text-[10px] mt-0.5" style={{ color: '#475569' }}>Less admin time</div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { name: 'Flow Rate Activated', status: 'Automated', color: '#4ade80' },
          { name: 'Funder Report Generated', status: 'Complete', color: '#f0a500' },
          { name: 'New Placement Logged', status: 'Live sync', color: '#818cf8' },
        ].map(item => (
          <div key={item.name} className="flex items-center justify-between px-3 py-2 rounded-lg border" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
            <span className="text-[11px]" style={{ color: '#6b7280' }}>{item.name}</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: item.color, background: `${item.color}20` }}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GovernmentsVisual() {
  const pct = 98.4
  const r = 32
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div className="rounded-xl border p-4 h-full" style={{ background: '#07071a', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="text-[10px] uppercase tracking-wider font-semibold mb-4" style={{ color: '#475569' }}>Funding Allocation — Region 04</div>
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            <circle cx="40" cy="40" r={r} fill="none" stroke="#f0a500" strokeWidth="7"
              strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 40 40)" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[14px] font-black text-white leading-none">98.4%</span>
            <span className="text-[8px]" style={{ color: '#475569' }}>utilized</span>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {[
            { label: 'Employment Services', pct: 42 },
            { label: 'Training Programs', pct: 31 },
            { label: 'Accessibility Grants', pct: 25 },
          ].map(row => (
            <div key={row.label}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[9px]" style={{ color: '#475569' }}>{row.label}</span>
                <span className="text-[9px] font-bold" style={{ color: '#94a3b8' }}>{row.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: '#f0a500', opacity: 0.7 }} />
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
    <div className="rounded-xl border p-4 h-full" style={{ background: '#07071a', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="text-[10px] uppercase tracking-wider font-semibold mb-3" style={{ color: '#475569' }}>Candidate Match Index</div>
      <div className="space-y-3">
        {[
          { init: 'A', name: 'Alex Rivers', role: 'UX Designer · Low vision', score: 94, bar: '94%' },
          { init: 'J', name: 'Jordan Smith', role: 'Data Analyst · ADHD', score: 83, bar: '83%' },
          { init: 'M', name: 'Maya Patel', role: 'Dev Lead · Deaf', score: 91, bar: '91%' },
        ].map(c => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0" style={{ background: 'rgba(240,165,0,0.15)', color: '#f0a500' }}>
              {c.init}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-white">{c.name}</span>
                <span className="text-[11px] font-black" style={{ color: '#f0a500' }}>{c.score}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: c.bar, background: '#f0a500', opacity: 0.8 }} />
              </div>
              <div className="text-[9px] mt-0.5" style={{ color: '#334155' }}>{c.role}</div>
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
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Connect your career centre and disability services into one gated system where your institution controls employer access, owns its data, and delivers NACE-compliant reporting automatically.',
    stats: [{ val: '33%', label: 'employment gap to close' }, { val: '100%', label: 'institutional control' }],
    cta: 'See the Campus Solution',
    visual: <UniversitiesVisual />,
    visualRight: true,
  },
  {
    id: 'ngos',
    categoryLabel: 'FOR NGOs',
    pillLabel: 'CASE MANAGEMENT INFRASTRUCTURE',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    headline: 'Replace spreadsheets with a system that connects your clients to employers directly.',
    body: "Manage caseloads, track employer relationships, and report to funders from one platform. Each client's accommodation needs, job readiness, and placement status are visible in real time across your team.",
    stats: [{ val: '60%', label: 'less admin time' }, { val: '2.4×', label: 'more placements' }],
    cta: 'See the NGO Solution',
    visual: <NGOsVisual />,
    visualRight: false,
  },
  {
    id: 'governments',
    categoryLabel: 'FOR GOVERNMENTS',
    pillLabel: 'POLICY AND PROGRAM INFRASTRUCTURE',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" /><polygon points="12 2 20 7 4 7" />
        <line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" />
      </svg>
    ),
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Deploy regional or national inclusion strategies with built-in program accountability. Track outcomes across every service provider, employer, and candidate with audit-ready reporting.',
    stats: [{ val: '100%', label: 'audit ready' }, { val: '5×', label: 'reporting speed' }],
    cta: 'See the Government Solution',
    visual: <GovernmentsVisual />,
    visualRight: true,
  },
  {
    id: 'employers',
    categoryLabel: 'FOR EMPLOYERS',
    pillLabel: 'INCLUSIVE HIRING INFRASTRUCTURE',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    headline: 'Hire inclusively without guessing what support looks like.',
    body: 'Every candidate arrives with a completed accommodation profile and a connected support team. Your HR team receives pre-matched candidates, onboarding guidance, and built-in compliance reporting for AODA, ESG, and DEI.',
    stats: [{ val: '40%', label: 'faster time to hire' }, { val: '0', label: 'onboarding gaps' }],
    cta: 'See the Employer Solution',
    visual: <EmployersVisual />,
    visualRight: false,
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 py-0 px-0" style={{ background: '#eff4ff' }}>
      {SOLUTIONS.map((sol) => (
        <div
          key={sol.id}
          id={sol.id}
          className="px-6 py-20 scroll-mt-20"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#ffffff' }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Large category heading */}
            <div className="mb-8">
              <h2
                className="font-black mb-2"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#f0a500', letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                {sol.categoryLabel}
              </h2>
              <div className="h-1 w-16 rounded-full" style={{ background: '#f0a500' }} />
            </div>

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-10" style={{ borderColor: 'rgba(240,165,0,0.3)', background: 'rgba(240,165,0,0.06)' }}>
              <span style={{ color: '#f0a500' }}>{sol.icon}</span>
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: '#c47e00' }}>{sol.pillLabel}</span>
            </div>

            {/* Content grid — alternating text/visual layout */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!sol.visualRight ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              {/* Text side */}
              <div className={!sol.visualRight ? 'lg:flex-1' : ''}>
                <h3 className="font-black mb-5 leading-tight" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#07071a', letterSpacing: '-0.015em' }}>
                  {sol.headline}
                </h3>
                <p className="text-[16px] leading-[1.75] mb-8" style={{ color: '#4b5563' }}>
                  {sol.body}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {sol.stats.map(stat => (
                    <div key={stat.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full border" style={{ borderColor: 'rgba(0,0,0,0.1)', background: '#f8faff' }}>
                      <span className="text-[18px] font-black" style={{ color: '#07071a' }}>{stat.val}</span>
                      <span className="text-[12px]" style={{ color: '#6b7280' }}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#f0a500', color: '#07071a', boxShadow: '0 4px 20px rgba(240,165,0,0.3)' }}
                >
                  {sol.cta}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M1.5 6h9M7 2.5l3.5 3.5L7 9.5" />
                  </svg>
                </a>
              </div>

              {/* Visual side */}
              <div className={`${!sol.visualRight ? 'lg:flex-1' : ''}`}>
                {sol.visual}
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  )
}
