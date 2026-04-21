export default function MediaMentions() {
  return (
    <section className="py-10 px-6" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: '#9ca3af' }}>
            Trusted by organizations building the future of work
          </p>
          <p className="text-[13px] font-medium" style={{ color: '#6b7280' }}>
            Universities, governments, and partners across the world
          </p>
          <div className="flex items-center gap-10 flex-wrap justify-center mt-2">

            {/* Digital Journal */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: '#1a1a2e' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="1" width="8" height="8" rx="1" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <span className="text-[13px] font-bold" style={{ color: '#1a1a2e' }}>Digital Journal</span>
            </div>

            {/* Financial Post — blue square */}
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#003087' }}>
                <span className="text-[13px] font-black text-white">FP</span>
              </div>
              <span className="text-[11px] font-semibold" style={{ color: '#6b7280' }}>Financial Post</span>
            </div>

            {/* betakit */}
            <div>
              <span className="text-[15px] font-black italic" style={{ color: '#111827' }}>betakit</span>
            </div>

            {/* Founders */}
            <div>
              <span className="text-[14px] font-black tracking-widest uppercase" style={{ color: '#1f2937', fontFamily: 'Georgia, serif' }}>Founders</span>
            </div>

            {/* National Post — amber square */}
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#f0a500' }}>
                <span className="text-[13px] font-black" style={{ color: '#07071a' }}>NP</span>
              </div>
              <span className="text-[11px] font-semibold" style={{ color: '#6b7280' }}>National Post</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
