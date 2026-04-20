'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'talent',
    label: 'For Talent',
    headline: 'Your profile, credentials, and accommodations travel with you.',
    body: 'Build a portable talent profile once. Your skills, certifications, and accommodation needs are documented on your terms and shared with every employer you choose — forever. No more repeating yourself at every new job.',
    steps: [
      { num: '01', title: 'Build your portable profile', desc: 'Add your skills, certifications, work history, and accommodation preferences in one place.' },
      { num: '02', title: 'Get matched before you apply', desc: 'Our AI surfaces roles from inclusive employers that fit your profile — before jobs are even posted publicly.' },
      { num: '03', title: 'Track your progress end-to-end', desc: 'Follow your applications, interviews, and placements from a single dashboard. Your case worker sees the same view.' },
    ],
    metric: { val: '3×', label: 'more job matches vs. traditional job boards' },
    stat: { val: '24,000+', label: 'Talent profiles active on the network' },
  },
  {
    id: 'employers',
    label: 'For Employers',
    headline: 'Know your inclusion readiness before you post a single job.',
    body: 'Enabled Talent audits your hiring practices, accessibility infrastructure, and accommodation policies — then gives you a readiness score and action plan. You see your pre-matched candidate pool before the role goes live.',
    steps: [
      { num: '01', title: 'Receive your Inclusion Readiness Score', desc: 'A detailed audit of your current hiring process with a clear action plan to improve.' },
      { num: '02', title: 'Preview candidates before posting', desc: 'Browse pre-matched candidates whose skills and accommodation needs align with your role.' },
      { num: '03', title: 'Auto-generate compliance reports', desc: 'AODA, ESG, and DEI reports generated automatically from every hire and match — zero manual entry.' },
    ],
    metric: { val: '94%', label: 'of employers improved readiness score within 30 days' },
    stat: { val: '3,400+', label: 'Employer partners on the platform' },
  },
  {
    id: 'universities',
    label: 'For Universities',
    headline: 'Connect career services directly to inclusive employers.',
    body: 'Integrate Enabled Talent into your career services workflow. Track student placements in real time, demonstrate graduate employment outcomes to accreditors, and give your disability services office a direct line to employer partners.',
    steps: [
      { num: '01', title: 'Integrate with your student systems', desc: 'Connect your SIS or career services platform — student records sync automatically.' },
      { num: '02', title: 'Match students to employers', desc: 'Skills, accommodation needs, and employer culture preferences are matched automatically.' },
      { num: '03', title: 'Export outcome reports', desc: 'One-click placement reports for accreditation, rankings submissions, and funder requirements.' },
    ],
    metric: { val: '33%', label: 'average improvement in graduate employment rates' },
    stat: { val: '120+', label: 'University and college partners' },
  },
  {
    id: 'ngos',
    label: 'For NGOs',
    headline: 'One platform to manage, match, and report on every client.',
    body: 'Replace disconnected spreadsheets with a single workflow. Case managers get a unified view of every client — their profile, job matches, and placement status — with outcomes automatically logged for funders and government partners.',
    steps: [
      { num: '01', title: 'Onboard clients and build profiles', desc: 'Structured intake forms build portable talent profiles automatically as you onboard clients.' },
      { num: '02', title: 'Assign case managers and track progress', desc: 'Every client has a visible pipeline stage — from intake to placement — in a single view.' },
      { num: '03', title: 'Generate funder-ready reports', desc: 'Outcome reports formatted for government funders are generated automatically, with zero extra work.' },
    ],
    metric: { val: '40%', label: 'reduction in administrative overhead per case' },
    stat: { val: '280+', label: 'NGO and service organization partners' },
  },
  {
    id: 'governments',
    label: 'For Governments',
    headline: 'Real-time visibility into every dollar of workforce funding.',
    body: 'Stop waiting for quarterly reports. Enabled Talent gives government program managers a live view of where funding is going, which regions are performing, and which initiatives need attention — with audit-ready exports on demand.',
    steps: [
      { num: '01', title: 'Deploy regional tracking', desc: 'Region-specific funding dashboards show allocation, utilization, and program performance live.' },
      { num: '02', title: 'Monitor all partner organizations', desc: 'Every funded NGO, university, and employer partner reports outcomes into a single government view.' },
      { num: '03', title: 'Export audit-ready compliance reports', desc: 'AODA, ESG, and DEI compliance reports generated automatically for any reporting period.' },
    ],
    metric: { val: '46.8%', label: 'average improvement in funding utilization across regions' },
    stat: { val: '14', label: 'Government regions active on the platform' },
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="how-it-works" className="scroll-mt-16 py-24 px-6 border-t border-white/[0.04]" style={{ background: '#07071a' }}>
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
              style={
                active === i
                  ? { background: '#f0a500', color: '#07071a' }
                  : { color: '#6b7280', border: '1px solid rgba(255,255,255,0.08)', background: 'transparent' }
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          className="grid lg:grid-cols-2 gap-8 rounded-2xl border border-white/[0.07] p-8 lg:p-12"
          style={{ background: '#0d0d24' }}
        >
          {/* Left: copy */}
          <div>
            {/* Stat chip */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-7 border border-[#f0a500]/20"
              style={{ background: 'rgba(240,165,0,0.06)' }}
            >
              <span className="text-2xl font-black text-[#f0a500]">{tab.stat.val}</span>
              <span className="text-[12px] text-[#94a3b8]">{tab.stat.label}</span>
            </div>

            <h3 className="text-2xl sm:text-[28px] font-black text-white leading-tight mb-5" style={{ letterSpacing: '-0.015em' }}>
              {tab.headline}
            </h3>
            <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-8">
              {tab.body}
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {tab.steps.map(step => (
                <div key={step.num} className="flex gap-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.2)', color: '#f0a500' }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white mb-0.5">{step.title}</div>
                    <p className="text-[13px] text-[#6b7280] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metric bar */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl border border-[#f0a500]/20"
              style={{ background: 'rgba(240,165,0,0.05)' }}
            >
              <div className="text-3xl font-black text-[#f0a500] flex-shrink-0">{tab.metric.val}</div>
              <div className="text-[13px] text-[#94a3b8] leading-snug">{tab.metric.label}</div>
            </div>
          </div>

          {/* Right: workflow visual */}
          <div
            className="rounded-xl border border-white/[0.06] p-6 flex flex-col"
            style={{ background: '#0a0a1e' }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="text-[11px] text-[#334155] uppercase tracking-wider font-semibold">{tab.label} — Workflow</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-green-400">Live</span>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              {tab.steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div
                    className="p-4 rounded-xl border transition-all"
                    style={
                      i === 0
                        ? { borderColor: 'rgba(240,165,0,0.25)', background: 'rgba(240,165,0,0.05)' }
                        : { borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }
                    }
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                        style={
                          i === 0
                            ? { background: '#f0a500', color: '#07071a' }
                            : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)' }
                        }
                      >
                        {i + 1}
                      </div>
                      <div
                        className="text-[11px] font-bold"
                        style={{ color: i === 0 ? '#f0a500' : '#475569' }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <p className="text-[12px] text-[#475569] leading-relaxed pl-8">{step.desc}</p>
                  </div>
                  {i < tab.steps.length - 1 && (
                    <div className="absolute left-[10px] top-full h-3 w-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-5 p-4 rounded-xl border border-white/[0.05] flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div className="text-[12px] text-[#6b7280]">
                Outcome: <span className="font-bold text-white">{tab.metric.val}</span>{' '}
                <span className="text-[#475569]">{tab.metric.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
