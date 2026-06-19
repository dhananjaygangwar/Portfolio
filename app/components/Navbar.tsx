import React from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        DG<span className="nav-logo-dot">.</span>
      </a>
      <ul className="nav-links">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
            {idx !== navItems.length - 1 ? (
              <li className="nav-sep" aria-hidden="true">
                /
              </li>
            ) : null}
          </React.Fragment>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">
        Available
      </a>
    </nav>
  )
}
