import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const OVERVIEW_LINKS = [
  ['Introduction', '#introduction'],
  ['About Us', '#about'],
  ['Our Approach', '#approach'],
  ['Meet The Team', '#team'],
]

const WORK_LINKS = [
  ['Our Services', '#services'],
  ['Our Operating Model', '#operating-model'],
  ['Industries', '#industries'],
  ['Impact', '#impact'],
]

const INSIGHTS_LINKS = [['Blog', '/insights']]

function canHover() {
  return typeof window !== 'undefined'
    && window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

function scrollToHash(hash) {
  if (!hash || hash === '#') return false
  const id = hash.replace(/^#/, '')
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

function NavDropdown({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const close = () => setOpen(false)
  const toggle = () => setOpen((prev) => !prev)

  const goTo = (href) => {
    close()
    onNavigate?.()

    if (href.startsWith('#')) {
      const target = `/${href}`
      if (location.pathname !== '/') {
        navigate(target)
        window.setTimeout(() => scrollToHash(href), 100)
      } else {
        navigate(target, { replace: true })
        window.requestAnimationFrame(() => {
          if (!scrollToHash(href)) {
            window.setTimeout(() => scrollToHash(href), 100)
          }
        })
      }
      return
    }

    navigate(href)
  }

  return (
    <li
      className={`nav-has-dropdown${open ? ' is-open' : ''}`}
      onMouseEnter={() => {
        if (canHover()) setOpen(true)
      }}
      onMouseLeave={() => {
        if (canHover()) setOpen(false)
      }}
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
          <li key={`${itemLabel}-${href}`}>
            <a
              href={href.startsWith('#') ? `/${href}` : href}
              onClick={(e) => {
                e.preventDefault()
                goTo(href)
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
  const navigate = useNavigate()
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  useEffect(() => {
    document.body.classList.toggle('nav-locked', menuOpen)
    return () => document.body.classList.remove('nav-locked')
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1280) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return
    if (!location.hash) return
    const tryScroll = () => scrollToHash(location.hash)
    if (!tryScroll()) {
      const t = window.setTimeout(tryScroll, 120)
      return () => window.clearTimeout(t)
    }
  }, [location.pathname, location.hash])

  const goHome = (e) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/#home')
      window.setTimeout(() => scrollToHash('#home'), 100)
    } else {
      navigate('/#home', { replace: true })
      scrollToHash('#home')
    }
  }

  return (
    <header className={`site-header${menuOpen ? ' is-menu-open' : ''}`}>
      <Link className="brand" to="/#home" onClick={goHome}>
        <img src="/photos/Jamaa Logo.png" alt="JAMAA — Beyond Transactions." />
      </Link>

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
          <NavDropdown label="Overview" links={OVERVIEW_LINKS} onNavigate={closeMenu} />
          <NavDropdown label="Our Work" links={WORK_LINKS} onNavigate={closeMenu} />
          <NavDropdown label="Our Insights" links={INSIGHTS_LINKS} onNavigate={closeMenu} />
        </ul>
      </nav>
    </header>
  )
}
