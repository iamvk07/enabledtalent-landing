export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Dot grid decoration */}
        <div className="flex justify-center gap-2 mb-10">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: `rgba(240,165,0,${0.08 + (i + j) * 0.03})` }}
                />
              ))}
            </div>
          ))}
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
          Inclusive Success<br />
          <span className="text-[#f0a500]">Starts with a Conversation.</span>
        </h2>
        <p className="text-[16px] text-[#6b7280] mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re hiring, job-seeking, or building inclusion into your programs — we&apos;re here to help you turn purpose into progress.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:hello@enabledtalent.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact the Team
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.04] transition-all"
          >
            Explore Solutions
          </a>
        </div>

        {/* Trust logos */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-[11px] text-[#334155] uppercase tracking-widest mb-6">Trusted by organizations building the future of work</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['NVIDIA', 'AWS', 'Microsoft', 'UNICEF', 'betakit'].map(logo => (
              <span key={logo} className="text-sm font-bold text-[#334155] hover:text-[#6b7280] transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
