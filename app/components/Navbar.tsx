'use client'

import React, { useState, useEffect } from 'react'

const navItems = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#experience', label: 'Experience', num: '02' },
  { href: '#skills', label: 'Skills', num: '03' },
  { href: '#projects', label: 'Projects', num: '04' },
  { href: '#contact', label: 'Contact', num: '05' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          DG<span className="nav-logo-dot">.</span>
        </a>
        <ul className="nav-links">
          {navItems.map((item, idx) => (
            <React.Fragment key={item.href}>
              <li><a href={item.href}>{item.label}</a></li>
              {idx !== navItems.length - 1 && (
                <li className="nav-sep" aria-hidden="true">/</li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          <span className="nav-cta-dot" />
          Available
        </a>
        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-menu-inner">
          {navItems.map(({ href, label, num }) => (
            <a
              key={href}
              href={href}
              className="mobile-nav-item"
              onClick={() => setOpen(false)}
            >
              <span className="mobile-nav-num">{num}</span>
              <span className="mobile-nav-label">{label}</span>
            </a>
          ))}
        </nav>
        <a
          href="mailto:kannu.2097@gmail.com"
          className="mobile-nav-email"
          onClick={() => setOpen(false)}
        >
          kannu.2097@gmail.com →
        </a>
      </div>
    </>
  )
}
