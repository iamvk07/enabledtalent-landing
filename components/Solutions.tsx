const SOLUTIONS = [
  {
    id: 'universities',
    category: 'For Universities',
    categoryColor: 'text-[#7c3aed] bg-[#7c3aed]/10',
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Universities face growing pressure to demonstrate graduate employment outcomes. Enabled Talent connects your students directly to vetted inclusive employers — with real-time placement tracking and accessibility-first matching built in.',
    stats: [
      { val: '1,246', label: 'Students placed' },
      { val: '340+', label: 'Partner employers' },
      { val: '33%', label: 'Avg. improvement in employment rates' },
    ],
    cta: 'See the University Solution',
    flip: false,
  },
  {
    id: 'ngos',
    category: 'For NGOs',
    categoryColor: 'text-[#059669] bg-[#059669]/10',
    headline: 'Replace spreadsheets with a system that connects clients directly to jobs.',
    body: 'Stop managing employment programs in disconnected tools. Enabled Talent gives your case managers one platform to track clients, match them to jobs, and report outcomes — without the administrative overhead.',
    stats: [
      { val: '1,346', label: 'Active clients tracked' },
      { val: '892', label: 'Jobs filled' },
      { val: '40%', label: 'Reduction in case management overhead' },
    ],
    cta: 'See the NGO Solution',
    flip: true,
  },
  {
    id: 'governments',
    category: 'For Governments',
    categoryColor: 'text-[#dc2626] bg-[#dc2626]/10',
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Government workforce funding deserves government-grade accountability. Get real-time dashboards, automated ESG and DEI reporting, and region-by-region allocation tracking — all in one place.',
    stats: [
      { val: '14', label: 'Regions tracked' },
      { val: '46.8%', label: 'Avg. funding utilization improvement' },
      { val: '38', label: 'Active programs' },
    ],
    cta: 'See the Government Solution',
    flip: false,
  },
  {
    id: 'employers',
    category: 'For Employers',
    categoryColor: 'text-[#0369a1] bg-[#0369a1]/10',
    headline: 'Hire inclusively without guessing what support looks like.',
    body: "Posting a job shouldn't require a DEI department. Enabled Talent surfaces pre-vetted candidates with their accommodation needs already documented — so your team can hire with confidence from day one.",
    stats: [
      { val: '2,840', label: 'Candidates matched' },
      { val: '91%', label: 'Avg. match score' },
      { val: '40%', label: 'Faster time-to-hire for inclusive roles' },
    ],
    cta: 'See the Employer Solution',
    flip: true,
  },
]

function MockupCard({ id }: { id: string }) {
  if (id === 'universities') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="flex-1 h-4 rounded bg-gray-200 mx-4" />
        </div>
        <div className="p-5">
          <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-3">Student Placement Dashboard</div>
          <div className="space-y-2 mb-4">
            {[
              { name: 'Sarah M.', program: 'Computer Science', match: 94 },
              { name: 'James K.', program: 'Business Admin', match: 89 },
              { name: 'Priya N.', program: 'Engineering', match: 97 },
            ].map(s => (
              <div key={s.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                <div>
                  <div className="text-sm font-medium text-gray-800">{s.name}</div>
                  <div className="text-[11px] text-gray-400">{s.program}</div>
                </div>
                <div className="text-sm font-bold text-[#7c3aed]">{s.match}% match</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-lg bg-[#7c3aed]/5 border border-[#7c3aed]/20">
              <div className="text-xl font-bold text-[#7c3aed]">1,246</div>
              <div className="text-[10px] text-gray-400">Placed this year</div>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <div className="text-xl font-bold text-green-600">33%</div>
              <div className="text-[10px] text-gray-400">Rate improvement</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'ngos') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-gray-600">Case Manager View</div>
          <div className="text-[11px] text-green-600 font-medium">● Live</div>
        </div>
        <div className="p-5">
          <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-3">Active Clients</div>
          <div className="space-y-2 mb-4">
            {[
              { name: 'Marcus T.', status: 'Matched', color: 'text-green-600 bg-green-50 border-green-200' },
              { name: 'Aisha B.', status: 'Interview', color: 'text-[#059669] bg-[#059669]/5 border-[#059669]/20' },
              { name: 'Derek L.', status: 'Placed', color: 'text-blue-600 bg-blue-50 border-blue-200' },
            ].map(c => (
              <div key={c.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                <div className="text-sm font-medium text-gray-800">{c.name}</div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.color}`}>{c.status}</span>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-[#059669]/5 border border-[#059669]/20 flex items-center justify-between">
            <div className="text-[12px] text-gray-500">Admin time saved</div>
            <div className="text-xl font-bold text-[#059669]">40%</div>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'governments') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 px-5 py-3">
          <div className="text-[12px] font-semibold text-gray-600">Regional Funding Dashboard</div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: 'Regions Active', val: '14', color: 'text-[#dc2626]' },
              { label: 'Programs Running', val: '38', color: 'text-[#dc2626]' },
              { label: 'Funding Utilized', val: '46.8%', color: 'text-green-600' },
              { label: 'DEI Score', val: 'A+', color: 'text-[#7c3aed]' },
            ].map(s => (
              <div key={s.label} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className={`text-xl font-bold ${s.color}`}>{s.val}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <button className="w-full py-2 rounded-lg border border-[#dc2626]/30 text-[#dc2626] text-xs font-semibold hover:bg-[#dc2626]/5 transition-colors">
            Export ESG Report →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-100 px-5 py-3">
        <div className="text-[12px] font-semibold text-gray-600">Candidate Match Pool</div>
      </div>
      <div className="p-5">
        <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-3">Pre-matched — Before Posting</div>
        <div className="space-y-2 mb-4">
          {[
            { name: 'Priya S.', role: 'Frontend Engineer', acc: 'Low vision', score: 96 },
            { name: 'Raj P.', role: 'ML Engineer', acc: 'Autism spectrum', score: 94 },
            { name: 'Aisha N.', role: 'Accessibility Lead', acc: 'Blind', score: 91 },
          ].map(c => (
            <div key={c.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
              <div className="w-7 h-7 rounded-full bg-[#0369a1]/10 flex items-center justify-center text-[#0369a1] text-xs font-bold flex-shrink-0">
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800">{c.name}</div>
                <div className="text-[11px] text-gray-400 truncate">{c.role} · {c.acc}</div>
              </div>
              <div className="text-sm font-bold text-[#0369a1]">{c.score}%</div>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-[#0369a1]/5 border border-[#0369a1]/20 flex items-center justify-between">
          <div className="text-[12px] text-gray-500">Avg. time-to-hire</div>
          <div className="text-base font-bold text-[#0369a1]">40% faster</div>
        </div>
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white">
      {/* Section header */}
      <div className="py-20 px-6 text-center border-b border-gray-100">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-5">
          <span className="text-[11px] font-semibold text-gray-500 tracking-widest uppercase">One Platform</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Built for Every Stakeholder in the Ecosystem.
        </h2>
        <p className="text-[16px] text-gray-500 max-w-xl mx-auto">
          Enabled Talent is purpose-built infrastructure for the entire workforce inclusion ecosystem — not just one piece of it.
        </p>
      </div>

      {/* Stacked solution sections */}
      {SOLUTIONS.map((s) => (
        <div key={s.id} className={`py-20 px-6 border-b border-gray-100 ${s.flip ? 'bg-gray-50/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${s.flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Copy */}
              <div>
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 ${s.categoryColor}`}>
                  {s.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-5">
                  {s.headline}
                </h3>
                <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
                  {s.body}
                </p>

                {/* Stats pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {s.stats.map(stat => (
                    <div key={stat.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-gray-50">
                      <span className="text-base font-bold text-gray-900">{stat.val}</span>
                      <span className="text-[12px] text-gray-500">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-colors"
                >
                  {s.cta}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </a>
              </div>

              {/* Mockup */}
              <div>
                <MockupCard id={s.id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
