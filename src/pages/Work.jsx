import { useEffect } from 'react'
import { Link } from 'react-router'
import { projects } from '../data/projects'
import './Work.css'

function Work() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Work — Ayan Morshed'
    return () => { document.title = 'Ayan Morshed' }
  }, [])

  const featured = projects.filter((p) => p.featured && p.sections?.length > 0)
  const rest = projects.filter((p) => !p.featured && p.sections?.length > 0)
  const sorted = [...featured, ...rest]

  return (
    <div className="work-page">
      <header className="work-page__header">
        <h1 className="work-page__title">Work</h1>
        <p className="work-page__intro">
          Selected projects in process design and AI automation.
        </p>
      </header>

      <div className="work-page__list">
        {sorted.map((project) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className={`work-page__item ${project.featured ? 'work-page__item--featured' : ''}`}
          >
            <span className="work-page__category">{project.category}</span>
            <div className="work-page__content">
              <span className="work-page__name">
                {project.title} <span className="work-page__arrow" aria-hidden="true">&rarr;</span>
              </span>
              {project.subtitle && (
                <span className="work-page__desc">{project.subtitle}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Work
