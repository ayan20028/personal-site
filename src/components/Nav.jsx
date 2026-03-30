import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import './Nav.css'

function Nav() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setVisible(true)
      return
    }

    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`nav ${visible ? 'nav--visible' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__name" aria-label="Home">
          Ayan Morshed
        </Link>

        <nav className="nav__links" aria-label="Main navigation">
          <Link
            to="/vault"
            className={`nav__link ${location.pathname === '/vault' ? 'nav__link--active' : ''}`}
          >
            Work
          </Link>
          <a
            href="https://ayanmorshed.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link nav__link--external"
          >
            Newsletter
            <span aria-hidden="true"> &#8599;</span>
          </a>
        </nav>

        <button
          className="nav__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile-menu">
          <Link to="/vault" className="nav__mobile-link">Work</Link>
          <a
            href="https://ayanmorshed.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__mobile-link"
          >
            Newsletter <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      )}
    </header>
  )
}

export default Nav
