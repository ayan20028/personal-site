import TimeZoneDisplay from './TimeZoneDisplay'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rule" />
      <TimeZoneDisplay compact />
      <div className="footer__links">
        <a
          href="https://ayanmorshed.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Newsletter <span aria-hidden="true">&#8599;</span>
        </a>
        <a
          href="https://cal.com/ayan-morshed/personal"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Book a Call <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
      <p className="footer__tagline">design / systems</p>
      <p className="footer__text">Ayan Morshed &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
