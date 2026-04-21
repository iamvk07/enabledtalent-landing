const NAV = [
  {
    heading: 'Products',
    links: ['For Talent', 'For Employers', 'For Educators', 'For NGOs', 'For Governments', 'Enabled Jobs', 'Enabled Recruiter AI'],
  },
  {
    heading: 'Our Initiatives',
    links: ['Enabled Veterans', 'ENABLE Canada Tour', 'Enabled Foundation'],
  },
  {
    heading: 'Research, Policy & Knowledge',
    links: ['Case Studies', 'Guides', 'Reports', 'Webinars', 'News & Insights', 'Articles & Interviews'],
  },
  {
    heading: 'Regional Platforms',
    links: ['United States', 'Africa', 'Spain', 'Saudi Arabia', 'Qatar'],
  },
  {
    heading: 'Company',
    links: ['About Enabled Talent', 'Partner With Us', 'Careers', 'Connect With Us'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07071a] px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-md bg-[#f0a500] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="3" fill="#07071a" />
                  <circle cx="7" cy="7" r="6" stroke="#07071a" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-bold text-[15px]">
                <span style={{ color: '#f0a500' }}>Enabled</span>
                <span className="text-white">Talent</span>
              </span>
            </div>
            <p className="text-[13px] text-[#475569] leading-relaxed mb-5 max-w-[260px]">
              Building Global Infrastructure for Inclusive Employment. An AI-powered workforce platform advancing equitable job access across employers, institutions, and governments worldwide.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'YouTube'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#475569] hover:text-white hover:border-white/20 transition-all text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map(col => (
            <div key={col.heading}>
              <h4 className="text-[11px] font-bold text-[#6b7280] uppercase tracking-widest mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#475569] hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#334155]">© 2026 EnabledTalent. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Accessibility Policy', 'Responsible AI', 'Terms of Use'].map(l => (
              <a key={l} href="#" className="text-[12px] text-[#334155] hover:text-[#6b7280] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
