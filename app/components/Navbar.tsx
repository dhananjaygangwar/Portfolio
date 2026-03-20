import React from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        dhananjay gangwar
      </a>
      <ul className="nav-links">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
            {idx !== navItems.length - 1 ? <li className="nav-sep">|</li> : null}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

