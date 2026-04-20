'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'talent',
    label: 'For Talent',
    headline: 'Your profile, credentials, and accommodations — in one place, forever.',
    body: 'Build a portable profile that travels with you across employers and borders. Your accessibility needs, certifications, and work history are documented once and shared on your terms — no more repeating yourself at every new job.',
    steps: [
      { num: '01', text: 'Create your portable talent profile with accommodation preferences' },
      { num: '02', text: 'Get matched to inclusive employers before you even apply' },
      { num: '03', text: 'Track your placement progress with real-time status updates' },
    ],
    metric: { val: '3×', label: 'more job matches vs. traditional job boards' },
  },
  {
    id: 'employers',
    label: 'For Employers',
    headline: 'Know your inclusion readiness before you post a single job.',
    body: "Enabled Talent audits your current hiring practices, accessibility infrastructure, and accommodation policies — then gives you a readiness score and a clear action plan. Surface pre-vetted candidates whose needs align with your role before going live.",
    steps: [
      { num: '01', text: 'Receive your Inclusion Readiness Score and action plan' },
      { num: '02', text: 'Preview your pre-matched candidate pool before posting' },
      { num: '03', text: 'Auto-generate AODA, ESG, and DEI compliance reports' },
    ],
    metric: { val: '94%', label: 'of employers improved readiness score in 30 days' },
  },
  {
    id: 'universities',
    label: 'For Universities',
    headline: 'Connect your career services directly to inclusive employers.',
    body: "Integrate Enabled Talent into your career services workflow. Track student placements in real time, demonstrate employment outcomes to accreditors, and give your disability services office a direct line to employer partners.",
    steps: [
      { num: '01', text: 'Integrate with your existing student information systems' },
      { num: '02', text: 'Match students to employers based on skills and accommodation fit' },
      { num: '03', text: 'Export placement reports for accreditation and rankings' },
    ],
    metric: { val: '33%', label: 'avg. improvement in graduate employment rates' },
  },
  {
    id: 'ngos',
    label: 'For NGOs',
    headline: 'One platform to manage, match, and report on every client.',
    body: "Replace disconnected spreadsheets and email threads with a single workflow. Case managers get a unified view of every client — their profile, job matches, and placement status — with outcomes automatically logged for funders.",
    steps: [
      { num: '01', text: 'Onboard clients and build their portable talent profiles' },
      { num: '02', text: 'Assign case managers and track client progress end-to-end' },
      { num: '03', text: 'Generate funder-ready outcome reports automatically' },
    ],
    metric: { val: '40%', label: 'reduction in administrative overhead per case' },
  },
  {
    id: 'governments',
    label: 'For Governments',
    headline: 'Real-time visibility into every dollar of workforce funding.',
    body: "Stop waiting for quarterly reports. Enabled Talent gives government program managers a live view of where funding is going, which regions are performing, and which initiatives need attention — with audit-ready exports on demand.",
    steps: [
      { num: '01', text: 'Deploy region-specific funding allocation tracking' },
      { num: '02', text: 'Monitor program performance across all partner organizations' },
      { num: '03', text: 'Export audit-ready reports for ESG, DEI, and AODA compliance' },
    ],
    metric: { val: '46.8%', label: 'avg. improvement in funding utilization' },
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section className="py-24 px-6 bg-[#07071a] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-5">
            <span className="text-[11px] font-semibold text-[#94a3b8] tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            See How Each Solution Works
          </h2>
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

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-2xl border border-white/[0.08] bg-[#0d0d24] p-8 lg:p-12">
          {/* Left: copy */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
              {tab.headline}
            </h3>
            <p className="text-[15px] text-[#6b7280] leading-relaxed mb-8">
              {tab.body}
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {tab.steps.map(step => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-lg bg-[#f0a500]/10 border border-[#f0a500]/20 flex items-center justify-center text-[#f0a500] text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <p className="text-[14px] text-[#94a3b8] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            {/* Metric */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f0a500]/[0.06] border border-[#f0a500]/20">
              <div className="text-3xl font-bold text-[#f0a500]">{tab.metric.val}</div>
              <div className="text-[13px] text-[#94a3b8] leading-snug">{tab.metric.label}</div>
            </div>
          </div>

          {/* Right: visual panel */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0a1e] p-6">
            <div className="text-[11px] text-[#475569] uppercase tracking-wide mb-5">{tab.label} — Workflow Overview</div>
            <div className="space-y-3">
              {tab.steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className={`p-4 rounded-xl border transition-all ${
                    i === 0 ? 'border-[#f0a500]/30 bg-[#f0a500]/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${
                        i === 0 ? 'bg-[#f0a500] text-[#07071a]' : 'bg-white/10 text-white/50'
                      }`}>
                        {i + 1}
                      </div>
                      <div className={`text-xs font-semibold ${i === 0 ? 'text-[#f0a500]' : 'text-[#94a3b8]'}`}>
                        Step {step.num}
                      </div>
                    </div>
                    <p className="text-[13px] text-[#6b7280] leading-relaxed pl-8">{step.text}</p>
                  </div>
                  {i < tab.steps.length - 1 && (
                    <div className="absolute left-[18px] top-full h-3 w-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[10px] text-[#475569] mb-1">Outcome</div>
              <div className="text-lg font-bold text-white">{tab.metric.val} <span className="text-[13px] font-normal text-[#6b7280]">{tab.metric.label}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
