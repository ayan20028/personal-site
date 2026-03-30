import './SocialLinks.css'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayan-morshed/' },
  { label: 'GitHub', href: 'https://github.com/ayan20028' },
  { label: 'Instagram', href: 'https://instagram.com/ayanmorshed' },
]

function SocialLinks() {
  return (
    <div className="socials">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="socials__link"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
