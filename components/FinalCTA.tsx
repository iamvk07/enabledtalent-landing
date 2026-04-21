export default function FinalCTA() {
  return (
    <section id="contact" className="py-28 px-6 scroll-mt-16" style={{ background: '#eff4ff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-3xl mx-auto text-center">

        {/* Dot grid */}
        <div className="flex justify-center gap-2.5 mb-12">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2.5">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: `rgba(240,165,0,${0.15 + (i + j) * 0.04})` }}
                />
              ))}
            </div>
          ))}
        </div>

        <h2
          className="font-black mb-5 tracking-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#07071a' }}
        >
          Inclusive Success<br />
          Starts with a Conversation.
        </h2>

        <p className="text-[17px] mb-10 max-w-lg mx-auto leading-[1.7]" style={{ color: '#4b5563' }}>
          Whether you&apos;re hiring, job-seeking, or building inclusion into your programs — we&apos;re here to help you turn purpose into progress.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors"
          style={{ boxShadow: '0 6px 28px rgba(240,165,0,0.3)' }}
        >
          Deploy Enabled Talent
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 7h10M8 3l4 4-4 4" />
          </svg>
        </a>

        {/* Trust strip */}
        <div className="mt-20 pt-12" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <p className="text-[10px] uppercase tracking-[0.18em] font-bold mb-8" style={{ color: '#9ca3af' }}>
            Trusted by organizations building the future of work
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {[
              { name: 'NVIDIA', sub: 'Inception' },
              { name: 'AWS', sub: 'Startups' },
              { name: 'Microsoft', sub: 'for Startups' },
              { name: 'UNICEF', sub: 'Startup Lab' },
            ].map(logo => (
              <div key={logo.name} className="flex flex-col items-center gap-0.5">
                <span className="text-[13px] font-black" style={{ color: '#9ca3af' }}>{logo.name}</span>
                <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: '#d1d5db' }}>{logo.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
