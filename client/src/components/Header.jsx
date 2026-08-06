import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const OVERVIEW_LINKS = [
  ['Introduction', '#introduction'],
  ['Our Approach', '#operating-model'],
]

const WORK_LINKS = [
  ['Services', '#services'],
  ['Operating Model', '#operating-model'],
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
        window.setTimeout(() => scrollToHash(href), 80)
      } else {
        navigate(target, { replace: true })
        // Allow route/hash update, then scroll (also works when already on /)
        window.requestAnimationFrame(() => {
          if (!scrollToHash(href)) {
            window.setTimeout(() => scrollToHash(href), 80)
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
      if (window.innerWidth > 500) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Scroll when landing on /#section (direct load, back/forward, or in-app nav)
  useEffect(() => {
    if (location.pathname !== '/') return
    if (!location.hash) return
    const tryScroll = () => scrollToHash(location.hash)
    if (!tryScroll()) {
      const t = window.setTimeout(tryScroll, 120)
      return () => window.clearTimeout(t)
    }
  }, [location.pathname, location.hash])

  const goToHash = (e, hash) => {
    e.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/' + hash)
      window.setTimeout(() => scrollToHash(hash), 80)
    } else {
      navigate('/' + hash, { replace: true })
      scrollToHash(hash)
    }
  }

  const goHome = (e) => goToHash(e, '#home')

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
          <li><a href="#introduction" onClick={(e) => goToHash(e, '#introduction')}>Introduction</a></li>
          <li><a href="#about" onClick={(e) => goToHash(e, '#about')}>About Us</a></li>
          <li><a href="#operating-model" onClick={(e) => goToHash(e, '#operating-model')}>Our Approach</a></li>
          <li><a href="#team" onClick={(e) => goToHash(e, '#team')}>Meet the Team</a></li>
        </ul>
      </nav>
    </header>
  )
}
