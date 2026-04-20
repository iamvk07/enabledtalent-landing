const SOLUTIONS = [
  {
    id: 'universities',
    category: 'For Universities',
    tagStyle: { color: '#6d28d9', background: 'rgba(109,40,217,0.1)', border: '1px solid rgba(109,40,217,0.2)' },
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Universities face growing pressure to demonstrate graduate employment outcomes. Enabled Talent connects your students directly to vetted inclusive employers — with real-time placement tracking and accessibility-first matching built in.',
    stats: [
      { val: '1,246', label: 'Students placed' },
      { val: '340+', label: 'Employer partners' },
      { val: '33%', label: 'Avg. employment rate improvement' },
    ],
    cta: 'See the University Solution',
    flip: false,
    accent: '#6d28d9',
  },
  {
    id: 'ngos',
    category: 'For NGOs',
    tagStyle: { color: '#047857', background: 'rgba(4,120,87,0.08)', border: '1px solid rgba(4,120,87,0.2)' },
    headline: 'Replace spreadsheets with a system that connects clients directly to jobs.',
    body: 'Stop managing employment programs in disconnected tools. Enabled Talent gives your case managers one platform to track clients, match them to jobs, and report outcomes — without the administrative overhead.',
    stats: [
      { val: '1,346', label: 'Active clients tracked' },
      { val: '892', label: 'Jobs filled' },
      { val: '40%', label: 'Less admin overhead' },
    ],
    cta: 'See the NGO Solution',
    flip: true,
    accent: '#047857',
  },
  {
    id: 'governments',
    category: 'For Governments',
    tagStyle: { color: '#b91c1c', background: 'rgba(185,28,28,0.08)', border: '1px solid rgba(185,28,28,0.18)' },
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Government workforce funding deserves government-grade accountability. Get real-time dashboards, automated ESG and DEI reporting, and region-by-region allocation tracking — all in one place.',
    stats: [
      { val: '14', label: 'Regions tracked' },
      { val: '46.8%', label: 'Avg. funding utilization lift' },
      { val: '38', label: 'Active programs' },
    ],
    cta: 'See the Government Solution',
    flip: false,
    accent: '#b91c1c',
  },
  {
    id: 'employers',
    category: 'For Employers',
    tagStyle: { color: '#0369a1', background: 'rgba(3,105,161,0.08)', border: '1px solid rgba(3,105,161,0.18)' },
    headline: 'Hire inclusively without guessing what support looks like.',
    body: "Posting a job shouldn't require a DEI department. Enabled Talent surfaces pre-vetted candidates with their accommodation needs already documented — so your team can hire with confidence from day one.",
    stats: [
      { val: '2,840', label: 'Candidates matched' },
      { val: '91%', label: 'Avg. match score' },
      { val: '40%', label: 'Faster time-to-hire' },
    ],
    cta: 'See the Employer Solution',
    flip: true,
    accent: '#0369a1',
  },
]

function UniversityMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 h-5 rounded-md bg-gray-200 mx-4 flex items-center px-2">
          <span className="text-[10px] text-gray-400">Career Services — Placement Tracker</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[13px] font-bold text-gray-800">2025–26 Graduate Outcomes</div>
            <div className="text-[11px] text-gray-400">Laurentian University · Disability Services</div>
          </div>
          <div className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ color: '#6d28d9', background: 'rgba(109,40,217,0.08)' }}>Live</div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          {[
            { val: '1,246', lbl: 'Placed', color: '#6d28d9' },
            { val: '340', lbl: 'Employers', color: '#059669' },
            { val: '33%↑', lbl: 'Rate lift', color: '#0369a1' },
          ].map(s => (
            <div key={s.lbl} className="p-3 rounded-xl border border-gray-100 bg-gray-50 text-center">
              <div className="text-lg font-black" style={{ color: s.color }}>{s.val}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2.5 font-semibold">Recent Placements</div>
        <div className="space-y-2">
          {[
            { name: 'Sarah M.', program: 'Computer Science', employer: 'Shopify', days: '2 days ago' },
            { name: 'James K.', program: 'Business Administration', employer: 'RBC', days: '4 days ago' },
            { name: 'Priya N.', program: 'Engineering', employer: 'Tesla Canada', days: '1 week ago' },
          ].map(p => (
            <div key={p.name} className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <div>
                <div className="text-[12px] font-semibold text-gray-800">{p.name}</div>
                <div className="text-[10px] text-gray-400">{p.program} → {p.employer}</div>
              </div>
              <div className="text-[10px] text-gray-400">{p.days}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NGOMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 h-5 rounded-md bg-gray-200 mx-4 flex items-center px-2">
          <span className="text-[10px] text-gray-400">Case Manager Dashboard</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[13px] font-bold text-gray-800">Active Client Pipeline</div>
          <div className="text-[11px] font-semibold text-gray-500">Q1 2026 · 1,346 clients</div>
        </div>
        <div className="space-y-2.5 mb-5">
          {[
            { name: 'Marcus T.', goal: 'Warehouse Operations', status: 'Offer Received', statusStyle: { color: '#047857', background: 'rgba(4,120,87,0.08)' } },
            { name: 'Aisha B.', goal: 'Customer Support', status: 'Interviewing', statusStyle: { color: '#d97706', background: 'rgba(217,119,6,0.08)' } },
            { name: 'Derek L.', goal: 'Graphic Design', status: 'Matched', statusStyle: { color: '#6d28d9', background: 'rgba(109,40,217,0.08)' } },
            { name: 'Fiona R.', goal: 'IT Support', status: 'Placed ✓', statusStyle: { color: '#047857', background: 'rgba(4,120,87,0.08)' } },
          ].map(c => (
            <div key={c.name} className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <div>
                <div className="text-[12px] font-semibold text-gray-800">{c.name}</div>
                <div className="text-[10px] text-gray-400">{c.goal}</div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={c.statusStyle}>{c.status}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border" style={{ background: 'rgba(4,120,87,0.04)', borderColor: 'rgba(4,120,87,0.15)' }}>
          <div className="text-[12px] text-gray-500">Admin time saved this month</div>
          <div className="text-xl font-black" style={{ color: '#047857' }}>40%</div>
        </div>
      </div>
    </div>
  )
}

function GovernmentMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 h-5 rounded-md bg-gray-200 mx-4 flex items-center px-2">
          <span className="text-[10px] text-gray-400">Regional Funding Dashboard · ESDC</span>
        </div>
      </div>
      <div className="p-5">
        <div className="text-[13px] font-bold text-gray-800 mb-1">Northern Ontario Workforce Fund</div>
        <div className="text-[11px] text-gray-400 mb-4">14 regions · 38 programs · Real-time</div>
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {[
            { val: '$4.2M', lbl: 'Allocated', color: '#b91c1c' },
            { val: '46.8%', lbl: 'Utilized', color: '#047857' },
            { val: '38', lbl: 'Programs', color: '#0369a1' },
            { val: 'A+', lbl: 'DEI Score', color: '#6d28d9' },
          ].map(s => (
            <div key={s.lbl} className="p-3 rounded-xl border border-gray-100 bg-gray-50">
              <div className="text-xl font-black" style={{ color: s.color }}>{s.val}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2.5 font-semibold">Region Performance</div>
        <div className="space-y-2">
          {[
            { region: 'Sudbury', pct: 78, color: '#b91c1c' },
            { region: 'Thunder Bay', pct: 62, color: '#b91c1c' },
            { region: 'Sault Ste. Marie', pct: 45, color: '#b91c1c' },
          ].map(r => (
            <div key={r.region}>
              <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                <span>{r.region}</span><span className="font-bold" style={{ color: r.color }}>{r.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100">
                <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EmployerMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 h-5 rounded-md bg-gray-200 mx-4 flex items-center px-2">
          <span className="text-[10px] text-gray-400">Enabled Recruiter AI · Candidate Matches</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[13px] font-bold text-gray-800">Pre-matched Candidates</div>
            <div className="text-[11px] text-gray-400">Before you post · Senior UX Designer</div>
          </div>
          <div className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ color: '#0369a1', background: 'rgba(3,105,161,0.08)' }}>3 ready</div>
        </div>
        <div className="space-y-2.5 mb-5">
          {[
            { init: 'P', name: 'Priya S.', role: 'Frontend Engineer', acc: 'Low vision', score: 96, top: true },
            { init: 'R', name: 'Raj P.', role: 'ML Engineer', acc: 'Autism spectrum', score: 94, top: false },
            { init: 'A', name: 'Aisha N.', role: 'A11y Lead', acc: 'Blind', score: 91, top: false },
          ].map(c => (
            <div
              key={c.name}
              className="flex items-center gap-3 px-3 py-3 rounded-xl border"
              style={{
                background: c.top ? 'rgba(3,105,161,0.04)' : '#f9fafb',
                borderColor: c.top ? 'rgba(3,105,161,0.18)' : '#f1f5f9',
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0"
                style={{ background: 'rgba(3,105,161,0.12)', color: '#0369a1' }}
              >
                {c.init}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold text-gray-800">{c.name}</div>
                <div className="text-[10px] text-gray-400 truncate">{c.role} · {c.acc}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[14px] font-black" style={{ color: '#0369a1' }}>{c.score}%</div>
                <div className="text-[9px] text-gray-400">match</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border" style={{ background: 'rgba(3,105,161,0.03)', borderColor: 'rgba(3,105,161,0.12)' }}>
          <div className="text-[11px] text-gray-500">Avg. time-to-hire (inclusive roles)</div>
          <div className="text-base font-black" style={{ color: '#0369a1' }}>40% faster</div>
        </div>
      </div>
    </div>
  )
}

const MOCKUPS: Record<string, React.ReactNode> = {
  universities: <UniversityMockup />,
  ngos: <NGOMockup />,
  governments: <GovernmentMockup />,
  employers: <EmployerMockup />,
}

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white">
      {/* Section header */}
      <div className="py-20 px-6 text-center" style={{ borderBottom: '1px solid #f1f5f9' }}>
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
          style={{ border: '1px solid #e5e7eb', background: '#f9fafb' }}
        >
          <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">One Platform</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-5 tracking-tight">
          Built for Every Stakeholder<br />in the Ecosystem.
        </h2>
        <p className="text-[17px] text-gray-400 max-w-xl mx-auto leading-relaxed">
          Enabled Talent is purpose-built infrastructure for the entire workforce inclusion ecosystem — not just one piece of it.
        </p>
      </div>

      {/* Stacked sections */}
      {SOLUTIONS.map((s) => (
        <div
          key={s.id}
          className="px-6 py-20"
          style={{ borderBottom: '1px solid #f1f5f9', background: s.flip ? '#fafafa' : '#ffffff' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${s.flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>

              {/* Copy */}
              <div>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase mb-6" style={s.tagStyle}>
                  {s.category}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-gray-900 leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
                  {s.headline}
                </h3>

                <p className="text-[16px] text-gray-500 leading-[1.7] mb-8">
                  {s.body}
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-3 mb-9">
                  {s.stats.map(stat => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border"
                      style={{ border: '1px solid #e5e7eb', background: '#f9fafb' }}
                    >
                      <span className="text-[15px] font-black text-gray-900">{stat.val}</span>
                      <span className="text-[12px] text-gray-400">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-colors hover:opacity-90"
                  style={{ background: '#111827' }}
                >
                  {s.cta}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </a>
              </div>

              {/* Mockup */}
              <div>
                {MOCKUPS[s.id]}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
