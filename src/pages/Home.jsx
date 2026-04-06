import { Link } from 'react-router'
import NameCycler from '../components/NameCycler'
import TimeZoneDisplay from '../components/TimeZoneDisplay'
import SocialLinks from '../components/SocialLinks'
import useScrollReveal from '../hooks/useScrollReveal'
import './Home.css'

function Home() {
  useScrollReveal()

  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <TimeZoneDisplay />

        <img
          src="/images/photo.jpg"
          alt="Ayan Morshed"
          className="hero__photo"
          width="80"
          height="80"
        />

        <h1 className="sr-only">Ayan Morshed</h1>
        <NameCycler />

        <p className="hero__tagline">
          I help design better experiences for businesses,
          <br />
          no matter the medium.
        </p>

        <SocialLinks />
      </section>

      {/* ── About ── */}
      <section className="about" data-reveal>
        <h2 className="about__label">About</h2>
        <div className="about__content">
          <p>
            I'm an American-Bengali strategist &amp; builder raised in Tokyo.
            At a Fortune 50 bank, I design automation systems and operational workflows.
            On the side, I run <strong>Akashi Labs</strong> — an AI automation consultancy.
          </p>
        </div>
      </section>

      {/* ── Links ── */}
      <section className="hub" data-reveal>
        <div className="hub__links">
          <Link to="/work/workforce-management-portal" className="hub__link">
            <span className="hub__label">Featured Work</span>
            <span className="hub__value">
              Workforce Management Portal <span className="hub__arrow" aria-hidden="true">&rarr;</span>
            </span>
          </Link>

          <a href="https://akashilabs.com" target="_blank" rel="noopener noreferrer" className="hub__link">
            <span className="hub__label">Consultancy</span>
            <span className="hub__value">
              Akashi Labs <span className="hub__arrow hub__arrow--external" aria-hidden="true">&#8599;</span>
            </span>
          </a>

          <a href="https://ayanmorshed.substack.com" target="_blank" rel="noopener noreferrer" className="hub__link">
            <span className="hub__label">Newsletter</span>
            <span className="hub__value">
              Learning Lab <span className="hub__arrow hub__arrow--external" aria-hidden="true">&#8599;</span>
            </span>
          </a>

          <a href="https://cal.com/ayan-morshed/personal" target="_blank" rel="noopener noreferrer" className="hub__link">
            <span className="hub__label">Book a Call</span>
            <span className="hub__value">
              cal.com/ayan-morshed <span className="hub__arrow hub__arrow--external" aria-hidden="true">&#8599;</span>
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
