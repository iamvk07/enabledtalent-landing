'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'talent',
    label: 'For Talent',
    features: [
      {
        pill: 'PORTABLE TALENT PROFILE',
        headline: 'Your profile, credentials, and accommodations travel with you.',
        body: 'Build a portable talent profile once. Your skills, certifications, and accommodation needs are documented on your terms and shared with every employer you choose — forever.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Talent Profile</div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-[#f0a500]" style={{ background: 'rgba(240,165,0,0.15)' }}>M</div>
              <div>
                <div className="text-[13px] font-bold text-white">Maya P. — Dev Lead</div>
                <div className="text-[10px] text-[#475569]">Accommodation: Deaf · Remote preferred</div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['React', 'TypeScript', 'Accessible Design'].map(s => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(240,165,0,0.1)', color: '#f0a500' }}>{s}</span>
              ))}
            </div>
          </div>
        ),
      },
      {
        pill: 'PRE-MATCH ENGINE',
        headline: 'Get matched before you apply.',
        body: 'Our AI surfaces roles from inclusive employers that fit your profile — before jobs are even posted publicly.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Match Score</div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-[36px] font-black leading-none" style={{ color: '#f0a500' }}>94</span>
              <span className="text-[16px] font-bold text-[#6b7280] mb-1">%</span>
            </div>
            <div className="text-[11px] text-[#475569]">Role: UX Designer at Inclusive Corp</div>
          </div>
        ),
      },
      {
        pill: 'END-TO-END TRACKING',
        headline: 'Track your progress from match to placement.',
        body: 'Follow your applications, interviews, and placements from a single dashboard. Your case worker sees the same view.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Application Pipeline</div>
            {['Matched', 'Interview', 'Offer'].map((s, i) => (
              <div key={s} className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: i === 0 ? '#f0a500' : i === 1 ? 'rgba(240,165,0,0.3)' : 'rgba(255,255,255,0.06)' }}>
                  {i === 0 && <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="#07071a" strokeWidth="2"><polyline points="1.5 4 3 5.5 6.5 2.5" /></svg>}
                </div>
                <span className="text-[11px]" style={{ color: i === 0 ? '#f0a500' : '#475569' }}>{s}</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: 'employers',
    label: 'For Employers',
    features: [
      {
        pill: 'ACCESSIBILITY READINESS SCORE',
        headline: 'Know your inclusion readiness before you post a single job.',
        body: 'Enabled Talent audits your hiring practices, accessibility infrastructure, and accommodation policies — then gives you a readiness score and action plan.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Inclusion Readiness</div>
            <div className="flex items-end gap-1 mb-3">
              <span className="text-[36px] font-black leading-none" style={{ color: '#f0a500' }}>87</span>
              <span className="text-[16px] font-bold text-[#6b7280] mb-1">%</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full" style={{ width: '87%', background: '#f0a500' }} />
            </div>
          </div>
        ),
      },
      {
        pill: 'PRE PUBLISH MATCH PREVIEW',
        headline: 'See who matches before you go live.',
        body: 'Browse pre-matched candidates whose skills and accommodation needs align with your role — before publishing the job posting.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Pre-Match Preview</div>
            <div className="space-y-2">
              {[{ i: 'P', n: 'Priya S.', s: '96%' }, { i: 'A', n: 'Aisha N.', s: '91%' }].map(c => (
                <div key={c.n} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black" style={{ background: 'rgba(240,165,0,0.15)', color: '#f0a500' }}>{c.i}</div>
                  <span className="text-[11px] text-white flex-1">{c.n}</span>
                  <span className="text-[11px] font-black" style={{ color: '#f0a500' }}>{c.s}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        pill: 'COMPLIANCE REPORTING',
        headline: 'Accessibility, ESG, and DEI reporting generated automatically.',
        body: 'AODA, ESG, and DEI reports generated automatically from every hire and match — zero manual entry required.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Compliance Status</div>
            {['AODA', 'ESG', 'DEI'].map((tag, i) => (
              <div key={tag} className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-[#6b7280]">{tag}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: '#4ade80', background: 'rgba(74,222,128,0.1)' }}>Compliant</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: 'universities',
    label: 'For Universities',
    features: [
      {
        pill: 'STUDENT SYSTEM INTEGRATION',
        headline: 'Connect career services directly to inclusive employers.',
        body: 'Integrate Enabled Talent into your career services workflow. Student records sync automatically from your SIS.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Sync Status</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 5px #4ade80' }} />
              <span className="text-[11px] text-white">SIS Connected</span>
            </div>
            <div className="text-[11px] text-[#475569]">1,240 students synced · Last updated 2m ago</div>
          </div>
        ),
      },
      {
        pill: 'STUDENT–EMPLOYER MATCHING',
        headline: 'Match students to employers before they graduate.',
        body: 'Skills, accommodation needs, and employer culture preferences are matched automatically for every registered student.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-2">Employment Rate</div>
            <div className="flex items-end gap-1">
              <span className="text-[36px] font-black leading-none" style={{ color: '#f0a500' }}>+33%</span>
            </div>
            <div className="text-[11px] text-[#4ade80] mt-1">↑ vs national average</div>
          </div>
        ),
      },
      {
        pill: 'OUTCOME REPORTING',
        headline: 'Export placement reports for accreditation in one click.',
        body: 'Placement reports for accreditation, rankings submissions, and funder requirements are generated automatically.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Report Ready</div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.2)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              <span className="text-[11px] font-bold" style={{ color: '#f0a500' }}>NACE Report 2024.pdf</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ngos',
    label: 'For NGOs',
    features: [
      {
        pill: 'CLIENT ONBOARDING',
        headline: 'Build portable profiles during intake automatically.',
        body: 'Structured intake forms build portable talent profiles as you onboard clients — no duplicate data entry.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-2">Active Caseload</div>
            <div className="text-[36px] font-black text-white leading-none mb-1">1,248</div>
            <div className="text-[11px] text-[#4ade80]">↑ 12% this quarter</div>
          </div>
        ),
      },
      {
        pill: 'CASE MANAGEMENT',
        headline: 'Every client has a visible pipeline from intake to placement.',
        body: 'Case managers get a unified view of every client — their profile, job matches, and placement status — in a single view.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-2">Efficiency Gain</div>
            <div className="flex items-end gap-1">
              <span className="text-[36px] font-black leading-none" style={{ color: '#f0a500' }}>60%</span>
            </div>
            <div className="text-[11px] text-[#475569] mt-1">Less administrative time per case</div>
          </div>
        ),
      },
      {
        pill: 'FUNDER REPORTING',
        headline: 'Generate funder-ready reports automatically.',
        body: 'Outcome reports formatted for government funders are generated automatically, with zero extra work from your team.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Report Status</div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ color: '#4ade80', background: 'rgba(74,222,128,0.1)' }}>Auto-Generated</span>
          </div>
        ),
      },
    ],
  },
  {
    id: 'governments',
    label: 'For Governments',
    features: [
      {
        pill: 'REGIONAL TRACKING',
        headline: 'Real-time visibility into every dollar of workforce funding.',
        body: 'Region-specific funding dashboards show allocation, utilization, and program performance live — no waiting for quarterly reports.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-2">Funding Utilized</div>
            <div className="text-[36px] font-black text-white leading-none">98.4%</div>
            <div className="h-2 rounded-full mt-2" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full" style={{ width: '98.4%', background: '#f0a500' }} />
            </div>
          </div>
        ),
      },
      {
        pill: 'PARTNER MONITORING',
        headline: 'Monitor all partner organizations from one view.',
        body: 'Every funded NGO, university, and employer partner reports outcomes into a single government dashboard.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-3">Active Partners</div>
            {[{ label: 'NGOs', n: '280+' }, { label: 'Universities', n: '120+' }].map(p => (
              <div key={p.label} className="flex justify-between mb-2">
                <span className="text-[11px] text-[#6b7280]">{p.label}</span>
                <span className="text-[11px] font-black text-white">{p.n}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        pill: 'COMPLIANCE REPORTING',
        headline: 'Export audit-ready compliance reports on demand.',
        body: 'AODA, ESG, and DEI compliance reports generated automatically for any reporting period — zero manual compilation.',
        visual: (
          <div className="rounded-xl p-5 h-full min-h-[160px]" style={{ background: '#0d0d24', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-2">Reporting Speed</div>
            <div className="flex items-end gap-1">
              <span className="text-[36px] font-black leading-none" style={{ color: '#f0a500' }}>5×</span>
            </div>
            <div className="text-[11px] text-[#475569] mt-1">Faster than manual reporting</div>
          </div>
        ),
      },
    ],
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="how-it-works" className="scroll-mt-16 py-16 px-6" style={{ background: '#07071a', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] mb-5"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <span className="text-[11px] font-bold text-[#94a3b8] tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            See How Each Solution Works
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-4 max-w-lg mx-auto">
            Every stakeholder has a tailored workflow — built for their role, their data, and their outcomes.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-1.5"
              style={
                active === i
                  ? { background: '#f0a500', color: '#07071a' }
                  : { color: '#6b7280', border: '1px solid rgba(255,255,255,0.08)', background: 'transparent' }
              }
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
              {t.label}
            </button>
          ))}
        </div>

        {/* Feature cards — alternating text/visual */}
        <div className="space-y-6">
          {tab.features.map((feature, idx) => (
            <div
              key={feature.pill}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.07]`}
            >
              {/* Text side */}
              <div
                className={`p-8 lg:p-10 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
                style={{ background: '#0d0d24' }}
              >
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-5 w-fit" style={{ borderColor: 'rgba(240,165,0,0.25)', background: 'rgba(240,165,0,0.06)' }}>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: '#f0a500' }}>{feature.pill}</span>
                </div>
                <h3 className="text-[20px] font-black text-white leading-tight mb-4" style={{ letterSpacing: '-0.015em' }}>
                  {feature.headline}
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: '#6b7280' }}>
                  {feature.body}
                </p>
              </div>
              {/* Visual side */}
              <div
                className={`p-6 flex items-center justify-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                style={{ background: '#08081a', borderLeft: idx % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', borderRight: idx % 2 !== 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
              >
                <div className="w-full max-w-sm">
                  {feature.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
