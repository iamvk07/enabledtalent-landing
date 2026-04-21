const LOGOS = [
  { name: 'betakit', style: 'font-black text-[15px] tracking-tight italic' },
  { name: 'FP', style: 'font-black text-[17px] tracking-tight', sub: 'Financial Post' },
  { name: 'FOUNDERS', style: 'font-black text-[13px] tracking-[0.08em]' },
  { name: 'NP', style: 'font-black text-[17px] tracking-tight', sub: 'National Post' },
]

export default function MediaMentions() {
  return (
    <section className="py-10 px-6 border-y border-white/[0.04]" style={{ background: '#05050f' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <p className="text-[10px] text-[#283040] uppercase tracking-[0.18em] font-bold whitespace-nowrap flex-shrink-0">
            Trusted by organizations building the future of work
          </p>
          <div className="w-px h-5 bg-white/[0.06] hidden sm:block flex-shrink-0" />
          <div className="flex items-center gap-10 flex-wrap justify-center sm:justify-start">
            {LOGOS.map(logo => (
              <div key={logo.name} className="flex flex-col items-center gap-0.5">
                <span className={`${logo.style} text-[#3d4f6b] hover:text-[#6b7280] transition-colors cursor-default select-none`}>
                  {logo.name}
                </span>
                {logo.sub && (
                  <span className="text-[9px] font-semibold text-[#253146] uppercase tracking-wider">{logo.sub}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
