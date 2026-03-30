import NameCycler from '../components/NameCycler'
import TimeZoneDisplay from '../components/TimeZoneDisplay'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
import { caseStudies } from '../data/caseStudies'
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

        <NameCycler />

        <p className="hero__tagline">
          I design better experiences for businesses,
          <br />
          no matter the medium.
        </p>

        <SocialLinks />
      </section>

      {/* ── About ── */}
      <section className="section" data-reveal>
        <h2 className="section__label">01 / About</h2>
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
      <section className="section" data-reveal>
        <h2 className="section__label">02 / Work</h2>
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
      <section className="section" data-reveal>
        <h2 className="section__label">03 / Currently</h2>
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

      {/* ── Say Hello ── */}
      <section className="section" data-reveal>
        <h2 className="section__label">04 / Say Hello</h2>
        <div className="section__content">
          <p>
            Always open to interesting conversations — whether it's about
            a project, a collaboration, or just a shared curiosity.
          </p>
          <div className="contact-actions">
            <a href="mailto:ayan@akashilabs.com" className="contact-link">
              <span className="contact-link__label">Email</span>
              <span className="contact-link__value">ayan@akashilabs.com</span>
            </a>
            <a
              href="https://cal.com/ayan-morshed/personal"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link__label">Book a call</span>
              <span className="contact-link__value">
                cal.com/ayan-morshed <span aria-hidden="true">&#8599;</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
