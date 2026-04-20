function UniversitiesVisual() {
  return (
    <div className="rounded-xl border border-white/[0.07] p-4 mb-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="text-[10px] text-[#475569] uppercase tracking-wider font-semibold mb-3">Graduate Employment Rate — Disabilities</div>
      <div className="flex items-end gap-2.5 h-24 mb-3">
        {[
          { h: '42%', yr: '2021', val: '41%' },
          { h: '56%', yr: '2022', val: '54%' },
          { h: '100%', yr: '2023', val: '67%', active: true },
        ].map(b => (
          <div key={b.yr} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-[9px] font-bold" style={{ color: b.active ? '#f0a500' : '#334155' }}>{b.val}</span>
            <div
              className="w-full rounded-t-lg transition-all"
              style={{
                height: b.h,
                background: b.active ? '#f0a500' : 'rgba(240,165,0,0.2)',
              }}
            />
            <span className="text-[9px] text-[#334155]">{b.yr}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-black text-[#f0a500]">33%</span>
          <span className="text-[11px] text-[#475569]">Employment Gap</span>
        </div>
        <span className="text-[10px] text-green-400 font-semibold">↑ Improving</span>
      </div>
    </div>
  )
}

function NGOsVisual() {
  return (
    <div className="rounded-xl border border-white/[0.07] p-4 mb-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[24px] font-black text-white leading-none">1,248</div>
          <div className="text-[10px] text-[#475569] mt-0.5">Active client cases</div>
        </div>
        <div className="text-right">
          <div className="text-[24px] font-black text-[#f0a500] leading-none">60%</div>
          <div className="text-[10px] text-[#475569] mt-0.5">Less admin time</div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { name: 'Flow Rate Activated', status: 'Automated', color: '#4ade80' },
          { name: 'Funder Report Generated', status: 'Complete', color: '#f0a500' },
          { name: 'New Placement Logged', status: 'Live sync', color: '#818cf8' },
        ].map(item => (
          <div key={item.name} className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/[0.05]" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <span className="text-[11px] text-[#6b7280]">{item.name}</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: item.color, background: `${item.color}15` }}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GovernmentsVisual() {
  const pct = 98.4
  const r = 36
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div className="rounded-xl border border-white/[0.07] p-4 mb-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="text-[10px] text-[#475569] uppercase tracking-wider font-semibold mb-4">Funding Allocation — Region 04</div>
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
            <circle
              cx="45" cy="45" r={r} fill="none"
              stroke="#f0a500" strokeWidth="8"
              strokeDasharray={`${dash} ${circ}`}
              strokeLinecap="round"
              transform="rotate(-90 45 45)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[16px] font-black text-white leading-none">98.4%</span>
            <span className="text-[8px] text-[#475569]">utilized</span>
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
                <span className="text-[10px] text-[#475569]">{row.label}</span>
                <span className="text-[10px] font-bold text-[#94a3b8]">{row.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full bg-[#f0a500]" style={{ width: `${row.pct}%`, opacity: 0.7 }} />
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
    <div className="rounded-xl border border-white/[0.07] p-4 mb-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="text-[10px] text-[#475569] uppercase tracking-wider font-semibold mb-3">Candidate Match Index</div>
      <div className="space-y-3">
        {[
          { init: 'A', name: 'Alex Rivers', role: 'UX Designer · Low vision', score: 94, bar: '94%' },
          { init: 'J', name: 'Jordan Smith', role: 'Data Analyst · ADHD', score: 83, bar: '83%' },
          { init: 'M', name: 'Maya Patel', role: 'Dev Lead · Deaf', score: 91, bar: '91%' },
        ].map(c => (
          <div key={c.name} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0"
              style={{ background: 'rgba(240,165,0,0.15)', color: '#f0a500' }}
            >
              {c.init}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-white">{c.name}</span>
                <span className="text-[12px] font-black text-[#f0a500]">{c.score}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full bg-[#f0a500]" style={{ width: c.bar, opacity: 0.8 }} />
              </div>
              <div className="text-[9px] text-[#334155] mt-0.5">{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const CARDS = [
  {
    id: 'universities',
    category: 'Campus Inclusion Infrastructure',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    visual: <UniversitiesVisual />,
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Only 33% of students with disabilities are employed within a year of graduation. Enabled Talent connects your career centre and disability services office into one gated system where your institution controls employer access, moderates every job posting, and owns its data with zero cross-tenant leakage. NACE compliant reporting is built in.',
    stats: [
      { val: '33%', label: 'employment gap to close' },
      { val: '100%', label: 'institutional control' },
    ],
    cta: 'See the Campus Solution',
    ctaAmber: false,
  },
  {
    id: 'ngos',
    category: 'Case Management Infrastructure',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    visual: <NGOsVisual />,
    headline: 'Replace spreadsheets with a system that connects your clients to employers directly.',
    body: 'Manage caseloads, track employer relationships, and report to funders from one platform. Each client\'s accommodation needs, job readiness, and placement status are visible in real time across your team.',
    stats: [
      { val: '60%', label: 'less admin time' },
      { val: '2.4×', label: 'more placements' },
    ],
    cta: 'See the NGO Solution',
    ctaAmber: false,
  },
  {
    id: 'governments',
    category: 'Policy and Program Infrastructure',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
    visual: <GovernmentsVisual />,
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Deploy regional or national inclusion strategies with built-in program accountability. Track outcomes across every service provider, employer, and candidate in your network with audit ready reporting and compliant funding allocation.',
    stats: [
      { val: '100%', label: 'audit ready' },
      { val: '5×', label: 'reporting speed' },
    ],
    cta: 'See the Government Solution',
    ctaAmber: false,
  },
  {
    id: 'employers',
    category: 'Inclusive Hiring Infrastructure',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    visual: <EmployersVisual />,
    headline: 'Hire inclusively without guessing what support looks like.',
    body: 'Every candidate arrives with a completed accommodation profile and a connected support team. Your HR team receives pre-matched candidates, onboarding guidance, and built-in compliance reporting for AODA, ESG, and DEI commitments.',
    stats: [
      { val: '40%', label: 'faster time to hire' },
      { val: '0', label: 'onboarding gaps' },
    ],
    cta: 'See the Employer Solution',
    ctaAmber: true,
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 py-24 px-6" style={{ background: '#07071a' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] mb-5"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <span className="text-[11px] font-bold text-[#94a3b8] tracking-widest uppercase">One Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Built for Every Stakeholder<br />in the Ecosystem.
          </h2>
          <p className="text-[16px] text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Enabled Talent is purpose-built infrastructure for the entire workforce inclusion ecosystem — not just one piece of it.
          </p>
        </div>

        {/* 2×2 Bento grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="rounded-2xl border border-white/[0.07] p-8 flex flex-col scroll-mt-20"
              style={{ background: '#0d0d24' }}
            >
              {/* Category tag + icon row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-black tracking-[0.12em] uppercase text-[#94a3b8]">
                  {card.category}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#f0a500] flex-shrink-0 ml-4"
                  style={{ background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.18)' }}
                >
                  {card.icon}
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-xl sm:text-[22px] font-black text-white leading-tight mb-4" style={{ letterSpacing: '-0.015em' }}>
                {card.headline}
              </h3>

              {/* Visual mockup */}
              {card.visual}

              {/* Body */}
              <p className="text-[14px] text-[#6b7280] leading-[1.7] mb-8 flex-1">
                {card.body}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {card.stats.map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/[0.07]"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <span className="text-[15px] font-black text-white">{stat.val}</span>
                    <span className="text-[12px] text-[#475569]">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                  style={
                    card.ctaAmber
                      ? { background: '#f0a500', color: '#07071a', boxShadow: '0 4px 20px rgba(240,165,0,0.2)' }
                      : { background: '#1e1e3a', color: '#ffffff', border: '1px solid rgba(255,255,255,0.1)' }
                  }
                >
                  {card.cta}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M1.5 6h9M7 2.5l3.5 3.5L7 9.5" />
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
