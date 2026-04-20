'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#07071a]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-md bg-[#f0a500] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="#07071a" />
              <circle cx="7" cy="7" r="6" stroke="#07071a" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="font-bold text-white text-[15px] tracking-tight">EnabledTalent</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {['For Universities', 'For Governments'].map(link => (
            <a key={link} href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Canadian flag */}
          <span className="text-xl" title="Canada">🇨🇦</span>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-full text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors duration-200 flex items-center gap-1.5"
          >
            Contact Sales
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open
              ? <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              : <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#07071a] px-6 py-4 flex flex-col gap-4">
          {['For Universities', 'For Governments'].map(link => (
            <a key={link} href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors">{link}</a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xl">🇨🇦</span>
            <a href="#contact" className="flex-1 text-sm font-semibold px-5 py-2 rounded-full text-center text-[#07071a] bg-[#f0a500]">
              Contact Sales →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
