export default function MediaMentions() {
  return (
    <section className="py-10 px-6 border-y border-white/[0.04]" style={{ background: '#05050f' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <p className="text-[10px] text-[#283040] uppercase tracking-[0.18em] font-bold whitespace-nowrap flex-shrink-0">
            As featured in
          </p>
          <div className="w-px h-5 bg-white/[0.06] hidden sm:block flex-shrink-0" />
          <div className="flex items-center gap-10 flex-wrap justify-center sm:justify-start">
            {[
              { name: 'Financial Post', style: 'font-black text-[13px]' },
              { name: 'betakit', style: 'font-black text-[14px] tracking-tight' },
              { name: 'Founders', style: 'font-bold text-[13px] italic' },
              { name: 'National Post', style: 'font-black text-[13px]' },
            ].map(m => (
              <span
                key={m.name}
                className={`${m.style} text-[#2d3d56] hover:text-[#475569] transition-colors cursor-default select-none`}
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
