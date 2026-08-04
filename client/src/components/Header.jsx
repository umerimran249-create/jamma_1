import { useEffect, useState } from 'react'

const WORK_LINKS = [
  ['Services', '#services'],
  ['Operating Model', '#operating-model'],
  ['Industries', '#industries'],
  ['Impact', '#impact'],
]

const INSIGHTS_LINKS = [['Blog', '#insights']]

function NavDropdown({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  return (
    <li
      className={`nav-has-dropdown${open ? ' is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-parent"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={toggle}
      >
        {label}
        <span className="nav-chevron" aria-hidden="true" />
      </button>
      <ul className="nav-dropdown">
        {links.map(([itemLabel, href]) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => {
                close()
                onNavigate?.()
              }}
            >
              {itemLabel}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  useEffect(() => {
    document.body.classList.toggle('nav-locked', menuOpen)
    return () => document.body.classList.remove('nav-locked')
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={menuOpen ? 'is-menu-open' : ''}>
      <a className="brand" href="#home" onClick={closeMenu}>
        <img src="/images/logo.png" alt="JAMAA — Beyond Transactions." />
      </a>

      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' is-active' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={toggleMenu}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <nav id="primary-nav" className={menuOpen ? 'is-open' : ''} aria-label="Primary">
        <ul className="nav-main">
          <li>
            <a href="#home" onClick={closeMenu}>
              Overview
            </a>
          </li>
          <NavDropdown label="Our Work" links={WORK_LINKS} onNavigate={closeMenu} />
          <NavDropdown label="Our Insights" links={INSIGHTS_LINKS} onNavigate={closeMenu} />
        </ul>
      </nav>
    </header>
  )
}
