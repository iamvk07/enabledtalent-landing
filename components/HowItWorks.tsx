const FEATURES = [
  {
    tag: '01',
    title: 'Know your inclusion readiness before you post a single job.',
    body: "Enabled Talent audits your current hiring practices, accessibility infrastructure, and accommodation policies — then gives you a readiness score and a clear action plan before you ever publish a role. No guesswork, no compliance surprises.",
    metric: { val: '94%', label: 'of employers improved readiness score in 30 days' },
    mockup: 'readiness',
  },
  {
    tag: '02',
    title: 'See who matches before you go live.',
    body: "Our AI surfaces candidates whose skills, experience, and accommodation needs align with your role — before the job is posted. Review your match pool, adjust your criteria, and go live with confidence that the right people will apply.",
    metric: { val: '3×', label: 'more qualified candidates per role vs. traditional posting' },
    mockup: 'matching',
  },
  {
    tag: '03',
    title: 'Accessibility, ESG, and DEI reporting generated automatically.',
    body: "Every hire, every match, every accommodation request is logged and synthesized into real-time dashboards. Export audit-ready AODA, ESG, and DEI reports with one click — for your board, your funders, or your government contracts.",
    metric: { val: '100%', label: 'automated reporting compliance — zero manual entry' },
    mockup: 'reporting',
  },
]

function MockupReadiness() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1e] p-5">
      <div className="text-[11px] text-[#475569] uppercase tracking-wide mb-4">Inclusion Readiness Score</div>
      <div className="flex items-end gap-4 mb-5">
        <div className="text-5xl font-bold text-[#f0a500]">87</div>
        <div className="text-sm text-[#6b7280] mb-2">/ 100</div>
        <div className="ml-auto text-sm text-green-400 font-medium">↑ +12 pts</div>
      </div>
      <div className="space-y-3">
        {[
          { label: 'Accommodation Policy', pct: 92 },
          { label: 'Accessible Job Descriptions', pct: 78 },
          { label: 'Hiring Process Equity', pct: 85 },
        ].map(r => (
          <div key={r.label}>
            <div className="flex justify-between text-[11px] text-[#6b7280] mb-1.5">
              <span>{r.label}</span><span className="text-white">{r.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-[#f0a500]" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupMatching() {
  const candidates = [
    { name: 'Priya S.', score: 96, role: 'Frontend Engineer', acc: 'Low vision' },
    { name: 'Raj P.', score: 94, role: 'ML Engineer', acc: 'Autism spectrum' },
    { name: 'Aisha N.', score: 91, role: 'Accessibility Lead', acc: 'Blind' },
  ]
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1e] p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] text-[#475569] uppercase tracking-wide">Pre-matched Candidates</div>
        <div className="text-[11px] text-[#f0a500] font-semibold">Before posting</div>
      </div>
      <div className="space-y-3">
        {candidates.map(c => (
          <div key={c.name} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <div className="w-8 h-8 rounded-full bg-[#f0a500]/20 flex items-center justify-center text-[#f0a500] text-xs font-bold flex-shrink-0">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white">{c.name}</div>
              <div className="text-[11px] text-[#475569] truncate">{c.role} · {c.acc}</div>
            </div>
            <div className="text-sm font-bold text-[#f0a500]">{c.score}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupReporting() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1e] p-5">
      <div className="text-[11px] text-[#475569] uppercase tracking-wide mb-4">ESG & DEI Report — Q1 2026</div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: 'Inclusive Hires', val: '34', color: 'text-[#f0a500]' },
          { label: 'AODA Compliant', val: '100%', color: 'text-green-400' },
          { label: 'Accommodations Met', val: '98%', color: 'text-[#818cf8]' },
          { label: 'DEI Score', val: 'A+', color: 'text-[#22d3ee]' },
        ].map(s => (
          <div key={s.label} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <div className={`text-xl font-bold ${s.color}`}>{s.val}</div>
            <div className="text-[10px] text-[#475569] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <button className="w-full py-2 rounded-lg border border-[#f0a500]/30 text-[#f0a500] text-xs font-semibold hover:bg-[#f0a500]/10 transition-colors">
        Export Full Report →
      </button>
    </div>
  )
}

const mockups: Record<string, React.ReactNode> = {
  readiness: <MockupReadiness />,
  matching: <MockupMatching />,
  reporting: <MockupReporting />,
}

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-5">
            <span className="text-[11px] font-semibold text-[#94a3b8] tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            See How Each Solution Works
          </h2>
        </div>

        <div className="space-y-20">
          {FEATURES.map((f, i) => (
            <div
              key={f.tag}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Copy */}
              <div>
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#f0a500]/10 border border-[#f0a500]/20 text-[#f0a500] text-xs font-bold mb-6">
                  {f.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                  {f.title}
                </h3>
                <p className="text-[15px] text-[#6b7280] leading-relaxed mb-8">
                  {f.body}
                </p>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f0a500]/[0.06] border border-[#f0a500]/20">
                  <div className="text-3xl font-bold text-[#f0a500]">{f.metric.val}</div>
                  <div className="text-[13px] text-[#94a3b8] leading-snug">{f.metric.label}</div>
                </div>
              </div>

              {/* Mockup */}
              <div>
                {mockups[f.mockup]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
