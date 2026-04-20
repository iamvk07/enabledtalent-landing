'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'universities',
    label: 'For Universities',
    headline: 'Close the employment gap your campus is already accountable for.',
    body: 'Universities face growing pressure to demonstrate graduate employment outcomes. Enabled Talent connects your students directly to vetted inclusive employers — with real-time placement tracking and accessibility-first matching built in.',
    stat: '33%',
    statLabel: 'avg. improvement in graduate employment rates',
    cta: 'Get the University Solution',
    preview: [
      { label: 'Students Placed', val: '1,246', up: true },
      { label: 'Partner Employers', val: '340', up: true },
      { label: 'Placement Rate', val: '33%', up: true },
    ],
  },
  {
    id: 'node',
    label: 'For NGOs',
    headline: 'Replace spreadsheets with a system that connects clients directly.',
    body: 'Stop managing employment programs in disconnected tools. Enabled Talent gives your case managers one platform to track clients, match them to jobs, and report outcomes — without the administrative overhead.',
    stat: '40%',
    statLabel: 'reduction in case management overhead',
    cta: 'Get the NGO Solution',
    preview: [
      { label: 'Active Clients', val: '1,346', up: true },
      { label: 'Jobs Filled', val: '892', up: true },
      { label: 'Time Saved', val: '40%', up: true },
    ],
  },
  {
    id: 'governments',
    label: 'For Governments',
    headline: 'Fund employment programs and see exactly where every dollar goes.',
    body: 'Government workforce funding deserves government-grade accountability. Get real-time dashboards, automated ESG and DEI reporting, and region-by-region allocation tracking — all in one place.',
    stat: '46.8%',
    statLabel: 'avg. funding utilization improvement',
    cta: 'Get the Government Solution',
    preview: [
      { label: 'Regions Tracked', val: '12', up: true },
      { label: 'Funding Utilized', val: '46.8%', up: true },
      { label: 'Programs Active', val: '38', up: true },
    ],
  },
  {
    id: 'employers',
    label: 'For Employers',
    headline: 'Hire inclusively without guessing what support looks like.',
    body: "Posting a job shouldn't require a DEI department. Enabled Talent surfaces pre-vetted candidates with their accommodation needs already documented — so your team can hire with confidence from day one.",
    stat: '40%',
    statLabel: 'faster time-to-hire for inclusive roles',
    cta: 'Get the Employer Solution',
    preview: [
      { label: 'Candidates Matched', val: '2,840', up: true },
      { label: 'Avg. Match Score', val: '91%', up: true },
      { label: 'Time to Hire', val: '40% faster', up: true },
    ],
  },
]

export default function Solutions() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="solutions" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-5">
            <span className="text-[11px] font-semibold text-[#94a3b8] tracking-widest uppercase">One Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Four Solutions. Every Stakeholder.
          </h2>
          <p className="text-[16px] text-[#6b7280] max-w-xl mx-auto">
            Enabled Talent is purpose-built for the entire workforce inclusion ecosystem — not just one piece of it.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === i
                  ? 'bg-[#f0a500] text-[#07071a]'
                  : 'text-[#94a3b8] hover:text-white border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-2xl border border-white/[0.08] bg-[#0d0d24] p-8 lg:p-12">
          {/* Left: copy */}
          <div>
            <div className="text-5xl font-bold text-[#f0a500] mb-2">{tab.stat}</div>
            <div className="text-[12px] text-[#475569] mb-8 uppercase tracking-wide">{tab.statLabel}</div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
              {tab.headline}
            </h3>
            <p className="text-[15px] text-[#6b7280] leading-relaxed mb-8">
              {tab.body}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors"
            >
              {tab.cta}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Right: stat cards */}
          <div className="grid gap-4">
            {tab.preview.map(s => (
              <div key={s.label} className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.06] bg-[#12122e]">
                <div>
                  <div className="text-[12px] text-[#475569] uppercase tracking-wide mb-1">{s.label}</div>
                  <div className="text-2xl font-bold text-white">{s.val}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#f0a500]/10 flex items-center justify-center">
                  <span className="text-[#f0a500] text-sm font-bold">↑</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
