import TimeZoneDisplay from './TimeZoneDisplay'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rule" />
      <TimeZoneDisplay compact />
      <p className="footer__tagline">design / systems</p>
      <p className="footer__text">Ayan Morshed &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
