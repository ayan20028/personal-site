import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import './Nav.css'

function Nav() {
  const [visible, setVisible] = useState(false)
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

  return (
    <header className={`nav ${visible ? 'nav--visible' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__name" aria-label="Home">
          Ayan Morshed
        </Link>

        <nav className="nav__links" aria-label="Main navigation">
          <a
            href="https://ayanmorshed.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link nav__link--external"
          >
            Newsletter
            <span aria-hidden="true"> &#8599;</span>
          </a>
          <a
            href="https://cal.com/ayan-morshed/personal"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link nav__link--external"
          >
            Book a Call
            <span aria-hidden="true"> &#8599;</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Nav
