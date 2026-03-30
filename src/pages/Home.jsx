import NameCycler from '../components/NameCycler'
import TimeZoneDisplay from '../components/TimeZoneDisplay'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
import { caseStudies } from '../data/caseStudies'
import { vaultItems } from '../data/vaultItems'
import './Home.css'

function Home() {
  const pinnedWork = vaultItems.filter((item) => item.pinned)

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

        <NameCycler />

        <p className="hero__tagline">
          I design better experiences for businesses,
          <br />
          no matter the medium.
        </p>

        <SocialLinks />
      </section>

      {/* ── About ── */}
      <section className="section">
        <h2 className="section__label">About</h2>
        <div className="section__content">
          <p>
            I sit at the intersection of tech, design, and business. At Wells Fargo,
            I design automation systems and dashboards that make enterprise processes
            feel human. On the side, I run <strong>Akashi Labs</strong> — an AI
            automation consultancy helping businesses work smarter.
          </p>
          <p>
            I think a lot about what makes experiences feel right — whether that's a
            workflow, an interface, or the way a message lands. I speak English,
            Japanese, and Bengali, and that shapes how I see problems: there's always
            more than one way to read the room.
          </p>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="section">
        <h2 className="section__label">Work</h2>
        <div className="section__content">
          <div className="work-cards">
            {caseStudies.map((study) => (
              <ProjectCard
                key={study.slug}
                slug={study.slug}
                title={study.title}
                subtitle={study.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Currently ── */}
      <section className="section">
        <h2 className="section__label">Currently</h2>
        <div className="section__content">
          <div className="work-cards">
            <a
              href="https://akashilabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-card__text">
                <h3 className="link-card__title">
                  Akashi Labs <span className="link-card__arrow" aria-hidden="true">&#8599;</span>
                </h3>
                <p className="link-card__desc">AI automation consultancy — designing better systems for businesses.</p>
              </div>
            </a>
            <a
              href="https://ayanmorshed.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-card__text">
                <h3 className="link-card__title">
                  Learning Lab <span className="link-card__arrow" aria-hidden="true">&#8599;</span>
                </h3>
                <p className="link-card__desc">A newsletter exploring the human experience across domains.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
