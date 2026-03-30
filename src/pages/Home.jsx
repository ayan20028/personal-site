import NameCycler from '../components/NameCycler'
import TimeZoneDisplay from '../components/TimeZoneDisplay'
import SocialLinks from '../components/SocialLinks'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
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
            I'm an American-Bengali strategist &amp; builder raised in Tokyo.
            I'm drawn to interdisciplinary thinking, connecting insights from
            cognitive science, economics, design, and technology.
          </p>
          <p>
            At Wells Fargo, I design automation systems and operational workflows.
            On the side, I run <strong>Akashi Labs</strong> — an AI automation consultancy.
          </p>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="section" data-reveal>
        <h2 className="section__label">02 / Work</h2>
        <div className="section__content">
          <div className="work-cards">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  subtitle={project.subtitle || project.description}
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
