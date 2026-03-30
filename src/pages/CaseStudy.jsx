import { useParams, Link } from 'react-router'
import { getCaseStudy, getNextCaseStudy } from '../data/caseStudies'
import './CaseStudy.css'

function CaseStudy() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)
  const next = getNextCaseStudy(slug)

  if (!study) {
    return (
      <div className="case-study case-study--not-found">
        <h1>Project not found</h1>
        <Link to="/">Back home</Link>
      </div>
    )
  }

  return (
    <article className="case-study">
      {/* Hero */}
      <header className="case-study__hero">
        <div className="case-study__hero-image" />
        <div className="case-study__hero-content">
          <h1 className="case-study__title">{study.title}</h1>
          <p className="case-study__subtitle">{study.subtitle}</p>
          <div className="case-study__meta">
            <div className="case-study__meta-item">
              <span className="case-study__meta-label">Year</span>
              <span className="case-study__meta-value">{study.year}</span>
            </div>
            <div className="case-study__meta-item">
              <span className="case-study__meta-label">Role</span>
              <span className="case-study__meta-value">{study.role}</span>
            </div>
            <div className="case-study__meta-item">
              <span className="case-study__meta-label">Tools</span>
              <span className="case-study__meta-value">{study.tools.join(', ')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Body sections */}
      <div className="case-study__body">
        {study.sections.map((section, i) => (
          <section key={i} className="case-study__section">
            <h2 className="case-study__heading">{section.heading}</h2>
            <p className="case-study__text">{section.body}</p>
          </section>
        ))}
      </div>

      {/* Next project */}
      {next && (
        <nav className="case-study__next" aria-label="Next project">
          <Link to={`/work/${next.slug}`} className="case-study__next-link">
            <span className="case-study__next-label">Next project</span>
            <span className="case-study__next-name">{next.title} &rarr;</span>
          </Link>
        </nav>
      )}
    </article>
  )
}

export default CaseStudy
