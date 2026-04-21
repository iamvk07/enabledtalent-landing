'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', background: 'rgba(239,244,255,0.95)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#f0a500] flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="#07071a" />
              <circle cx="7" cy="7" r="6" stroke="#07071a" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="font-black text-[15px] tracking-tight">
            <span style={{ color: '#f0a500' }}>Enabled</span>
            <span style={{ color: '#07071a' }}>Talent</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'For Universities', href: '#universities' },
            { label: 'For Governments', href: '#governments' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] hover:text-[#f0a500] transition-colors duration-200 font-medium"
              style={{ color: '#4b5563' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xl select-none" title="Canada">🇨🇦</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-[14px] text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors duration-200"
            style={{ boxShadow: '0 4px 20px rgba(240,165,0,0.3)' }}
          >
            Contact Sales
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: '#4b5563' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
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
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-5"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)', background: '#eff4ff' }}
        >
          {[
            { label: 'For Universities', href: '#universities' },
            { label: 'For Governments', href: '#governments' },
          ].map(link => (
            <a key={link.label} href={link.href} className="text-sm font-medium transition-colors" style={{ color: '#4b5563' }}>
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-xl">🇨🇦</span>
            <a
              href="#contact"
              className="flex-1 text-sm font-bold px-5 py-3 rounded-full text-center text-[#07071a] bg-[#f0a500] hover:bg-[#f5bc3a] transition-colors"
            >
              Contact Sales →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
