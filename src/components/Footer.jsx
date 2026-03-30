import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rule" />
      <p className="footer__tagline">design / systems / language</p>
      <p className="footer__text">Ayan Morshed &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
