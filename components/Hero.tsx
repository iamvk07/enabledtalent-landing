export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 px-6 overflow-hidden" style={{ background: '#05050f' }}>
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(240,165,0,0.08) 0%, transparent 68%)', filter: 'blur(1px)' }}
        />
        <div
          className="absolute top-[180px] right-[-80px] w-[650px] h-[650px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)', filter: 'blur(1px)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, #05050f, transparent)' }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">

          {/* ─── LEFT: Copy ─── */}
          <div className="pt-4 lg:pt-0">

            {/* Location badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#f0a500]/25 bg-[#f0a500]/[0.07] mb-9">
              <span className="w-2 h-2 rounded-full bg-[#f0a500] flex-shrink-0" style={{ boxShadow: '0 0 8px #f0a500' }} />
              <span className="text-[11px] font-extrabold text-[#f0a500] tracking-[0.15em] uppercase">Now Live in Northern Ontario</span>
            </div>

            {/* Headline */}
            <h1 className="mb-8 text-white" style={{ fontWeight: 900, lineHeight: 1.03, letterSpacing: '-0.025em' }}>
              <span className="block text-[44px] sm:text-[52px] lg:text-[58px] xl:text-[66px]">The Employment</span>
              <span className="block text-[44px] sm:text-[52px] lg:text-[58px] xl:text-[66px]">Infrastructure Layer</span>
              <span className="block text-[44px] sm:text-[52px] lg:text-[58px] xl:text-[66px]">for Workforce</span>
              <span className="block text-[44px] sm:text-[52px] lg:text-[58px] xl:text-[66px] text-[#f0a500]">Inclusion.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[17px] text-[#8494af] leading-[1.72] mb-10 max-w-[490px]">
              Universities, NGOs, and governments deploy Enabled Talent as the system connecting disability services, employers, and talent into one accountable workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-all text-[15px]"
                style={{ boxShadow: '0 6px 30px rgba(240,165,0,0.28)' }}
              >
                Deploy Enabled Talent
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7.5h11M8.5 3l5 4.5-5 4.5" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-[#c8d5e8] border hover:text-white hover:bg-white/[0.04] transition-all text-[15px]"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}
              >
                See how it works
              </a>
            </div>

            {/* Partner badges */}
            <div>
              <p className="text-[10px] text-[#2d3d56] uppercase tracking-[0.18em] font-bold mb-5">
                Backed by the world&apos;s leading programs
              </p>
              <div className="flex items-end gap-8 flex-wrap">
                {[
                  { name: 'NVIDIA', program: 'Inception' },
                  { name: 'AWS', program: 'Startups' },
                  { name: 'Microsoft', program: 'for Startups' },
                  { name: 'UNICEF', program: 'Startup Lab' },
                ].map(l => (
                  <div key={l.name} className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-black text-[#3d4f6b] leading-none">{l.name}</span>
                    <span className="text-[9px] font-semibold text-[#253146] tracking-wider uppercase leading-none">{l.program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Dashboard Mockup ─── */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.07]"
              style={{ boxShadow: '0 50px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)' }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#08081a' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div
                  className="flex-1 h-6 rounded-md mx-5 flex items-center px-3 gap-2"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-[11px] text-[#334155]">app.enabledtalent.com/recruiter</span>
                </div>
              </div>

              {/* App shell */}
              <div className="flex" style={{ height: '400px', background: '#07071a' }}>
                {/* Sidebar */}
                <div className="w-14 border-r border-white/[0.05] flex flex-col items-center py-4 gap-1 flex-shrink-0" style={{ background: '#040410' }}>
                  {/* Brand mark */}
                  <div className="w-8 h-8 rounded-lg bg-[#f0a500] flex items-center justify-center mb-4 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="3" fill="#07071a" />
                      <circle cx="7" cy="7" r="6" stroke="#07071a" strokeWidth="1.5" />
                    </svg>
                  </div>
                  {/* Nav items */}
                  {[
                    { active: true, d: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z' },
                    { active: false, d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' },
                    { active: false, d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
                    { active: false, d: 'M3 3v18h18M7 16l4-4 4 4 5-5' },
                    { active: false, d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        background: item.active ? 'rgba(240,165,0,0.12)' : 'transparent',
                        color: item.active ? '#f0a500' : '#2d3d56',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.d} />
                        {i === 1 && <circle cx="12" cy="7" r="4" />}
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 overflow-hidden">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-[13px] font-bold text-white">Recruiter Dashboard</div>
                      <div className="text-[11px] text-[#475569]">Good morning, Sarah — 3 new matches</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 5px #4ade80' }} />
                      <span className="text-[10px] text-green-400 font-semibold">Live</span>
                    </div>
                  </div>

                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {[
                      { label: 'New Matches', val: '29', delta: '+4 today', textColor: '#f0a500', borderColor: 'rgba(240,165,0,0.2)', bg: 'rgba(240,165,0,0.05)' },
                      { label: 'Active Employers', val: '18', delta: '2 new this week', textColor: '#fff', borderColor: 'rgba(255,255,255,0.06)', bg: 'rgba(255,255,255,0.02)' },
                      { label: 'Match Rate', val: '87%', delta: '↑ from 79%', textColor: '#4ade80', borderColor: 'rgba(74,222,128,0.2)', bg: 'rgba(74,222,128,0.04)' },
                    ].map(m => (
                      <div key={m.label} className="rounded-xl p-3 border" style={{ borderColor: m.borderColor, background: m.bg }}>
                        <div className="text-[22px] font-black leading-none" style={{ color: m.textColor }}>{m.val}</div>
                        <div className="text-[9px] text-[#475569] mt-1 leading-tight">{m.label}</div>
                        <div className="text-[8px] text-[#334155] mt-0.5">{m.delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* Candidates header */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] text-[#334155] uppercase tracking-wider font-semibold">Top Candidate Matches</span>
                    <span className="text-[9px] text-[#f0a500] font-medium">Before posting →</span>
                  </div>

                  {/* Candidate rows */}
                  <div className="space-y-2">
                    {[
                      { init: 'P', name: 'Priya S.', role: 'Frontend Eng.', tag: 'Low vision', score: 96, active: true },
                      { init: 'R', name: 'Raj P.', role: 'ML Engineer', tag: 'Autism', score: 94, active: false },
                      { init: 'A', name: 'Aisha N.', role: 'A11y Lead', tag: 'Blind', score: 91, active: false },
                    ].map(c => (
                      <div
                        key={c.name}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-colors"
                        style={{
                          borderColor: c.active ? 'rgba(240,165,0,0.2)' : 'rgba(255,255,255,0.04)',
                          background: c.active ? 'rgba(240,165,0,0.04)' : 'rgba(255,255,255,0.015)',
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0"
                          style={{ background: 'rgba(240,165,0,0.18)', color: '#f0a500' }}
                        >
                          {c.init}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-semibold text-white leading-tight">{c.name}</div>
                          <div className="text-[9px] text-[#475569] truncate">{c.role} · {c.tag}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-[12px] font-black text-[#f0a500]">{c.score}%</div>
                          <div className="text-[8px] text-[#334155]">match</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Float: matched today */}
            <div
              className="absolute -bottom-5 -left-6 rounded-2xl border border-white/[0.07] px-4 py-3"
              style={{ background: 'rgba(13,13,36,0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            >
              <div className="text-[9px] text-[#475569] mb-2 uppercase tracking-wider">Matched today</div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#f0a500', '#818cf8', '#22d3ee', '#34d399'].map((c, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 flex-shrink-0" style={{ background: c, borderColor: '#0d0d24' }} />
                  ))}
                </div>
                <span className="text-sm font-black text-white">+24</span>
                <span className="text-[11px] font-bold text-green-400">↑ 12%</span>
              </div>
            </div>

            {/* Float: match score */}
            <div
              className="absolute -top-5 -right-5 rounded-2xl border border-white/[0.07] px-4 py-3"
              style={{ background: 'rgba(13,13,36,0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
            >
              <div className="text-[9px] text-[#475569] mb-1 uppercase tracking-wider">Avg. match score</div>
              <div className="flex items-end gap-1">
                <span className="text-[28px] font-black text-[#f0a500] leading-none">91</span>
                <span className="text-sm font-bold text-[#6b7280] mb-1">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
