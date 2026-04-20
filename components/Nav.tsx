'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#07071a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
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
          {['Products', 'Our Initiatives', 'Research', 'Company'].map(link => (
            <a key={link} href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors px-3 py-2">Login</a>
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-lg text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors duration-200"
          >
            Get a Demo
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
          {['Products', 'Our Initiatives', 'Research', 'Company'].map(link => (
            <a key={link} href="#" className="text-sm text-[#94a3b8] hover:text-white transition-colors">{link}</a>
          ))}
          <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-lg text-center text-[#07071a] bg-[#f0a500]">
            Get a Demo
          </a>
        </div>
      )}
    </nav>
  )
}
