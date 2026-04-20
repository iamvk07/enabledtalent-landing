export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#07071a]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#f0a500]/[0.05] rounded-full blur-[140px]" />
        <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-[#6366f1]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f0a500]/40 bg-[#f0a500]/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f0a500] animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-bold text-[#f0a500] tracking-widest uppercase">Now Live in Northern Ontario</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.06] tracking-tight text-white mb-7">
              The Employment Infrastructure Layer for Workforce{' '}
              <span className="text-[#f0a500]">Inclusion.</span>
            </h1>

            <p className="text-[17px] text-[#94a3b8] leading-relaxed mb-10 max-w-[500px]">
              Universities, NGOs, and governments deploy Enabled Talent as the system connecting disability services, employers, and talent into one accountable workflow.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors text-[15px]"
              >
                Deploy Enabled Talent
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white border border-white/[0.15] hover:border-white/30 hover:bg-white/[0.04] transition-all text-[15px]"
              >
                See how it works
              </a>
            </div>

            {/* Partner logos */}
            <div>
              <p className="text-[11px] text-[#475569] uppercase tracking-widest font-semibold mb-4">
                Backed by the world&apos;s leading programs
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  { name: 'NVIDIA Inception', abbr: 'NVIDIA' },
                  { name: 'AWS Startups', abbr: 'AWS' },
                  { name: 'Microsoft for Startups', abbr: 'Microsoft' },
                  { name: 'UNICEF Startup Lab', abbr: 'UNICEF' },
                ].map(logo => (
                  <span key={logo.abbr} className="text-[13px] font-bold text-[#475569] hover:text-[#94a3b8] transition-colors cursor-default">
                    {logo.abbr}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0d0d24] overflow-hidden shadow-2xl shadow-black/60">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a0a1e]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 h-5 rounded bg-white/[0.04] mx-4 flex items-center justify-center">
                  <span className="text-[10px] text-[#475569]">app.enabledtalent.com</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5">
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-[11px] text-[#475569] mb-1">Recruiter Engagement Trend</div>
                    <div className="flex gap-2">
                      {['All', 'Talent', 'University', 'NGO'].map((t, i) => (
                        <span key={t} className={`text-[10px] px-2 py-0.5 rounded font-medium ${i === 0 ? 'bg-[#f0a500]/20 text-[#f0a500]' : 'text-[#475569]'}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#f0a500]">87%</div>
                    <div className="text-[10px] text-[#475569]">Match rate</div>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-24 mb-4">
                  {[40, 55, 45, 70, 60, 85, 75, 90, 80, 87].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{
                      height: `${h}%`,
                      background: i === 9 ? '#f0a500' : `rgba(240,165,0,${0.12 + i * 0.04})`
                    }} />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active Matches', val: '29', sub: '+4 this week' },
                    { label: 'Employers', val: '18', sub: 'Active hiring' },
                    { label: 'Attention Needed', val: '4', sub: 'Follow-ups', warn: true },
                  ].map(s => (
                    <div key={s.label} className={`rounded-lg p-3 border ${s.warn ? 'border-red-500/20 bg-red-500/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
                      <div className={`text-xl font-bold ${s.warn ? 'text-red-400' : 'text-white'}`}>{s.val}</div>
                      <div className="text-[10px] text-[#475569] mt-0.5">{s.label}</div>
                      <div className="text-[9px] text-[#334155] mt-1">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0d0d24] border border-white/[0.08] rounded-xl px-4 py-3 shadow-xl">
              <div className="text-[10px] text-[#475569] mb-1">Candidates matched today</div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#f0a500', '#818cf8', '#22d3ee'].map((c, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0d0d24]" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">+24</span>
                <span className="text-[10px] text-green-400 font-medium">↑ 12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
