import { useParams, Link } from 'react-router'
import { useEffect } from 'react'
import { getProject } from '../data/projects'
import StatusTag from '../components/StatusTag'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Ayan Morshed`
    }
    return () => { document.title = 'Ayan Morshed' }
  }, [project])

  if (!project) {
    return (
      <div className="project-detail project-detail--not-found">
        <h1>Project not found</h1>
        <Link to="/">Back</Link>
      </div>
    )
  }

  const isDetailed = project.sections && project.sections.length > 0

  return (
    <article className="project-detail">
      {/* Back link */}
      <div className="project-detail__back-wrapper">
        <Link to="/" className="project-detail__back">
          &larr; Back
        </Link>
      </div>

      {/* Header */}
      <header className="project-detail__header">
        <span className="project-detail__category">{project.category}</span>
        <h1 className="project-detail__title">{project.title}</h1>

        {isDetailed ? (
          <>
            {project.subtitle && (
              <p className="project-detail__subtitle">{project.subtitle}</p>
            )}
            <div className="project-detail__meta">
              {project.timeline && (
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Timeline</span>
                  <span className="project-detail__meta-value">
                    {project.timeline}
                  </span>
                </div>
              )}
              {project.role && (
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Role</span>
                  <span className="project-detail__meta-value">
                    {project.role}
                  </span>
                </div>
              )}
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Status</span>
                <span className="project-detail__meta-value">
                  <StatusTag status={project.status} />
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="project-detail__status-row">
            <StatusTag status={project.status} />
          </div>
        )}
      </header>

      {/* Image (only if one exists) */}
      {isDetailed && project.image && (
        <div className="project-detail__image-wrapper">
          <div className="project-detail__image">
            <img
              src={project.image}
              alt={project.imageCaption || project.title}
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="project-detail__body">
        {isDetailed ? (
          <>
            {project.sections.map((section, i) => (
              <section key={i} className="project-detail__section">
                <h2 className="project-detail__section-label">
                  {section.heading}
                </h2>
                {section.body.split('\n\n').map((paragraph, j) => (
                  <p key={j} className="project-detail__text">{paragraph}</p>
                ))}
              </section>
            ))}

            {project.reflection && (
              <section className="project-detail__section project-detail__section--reflection">
                <h2 className="project-detail__section-label">
                  What I&rsquo;d change
                </h2>
                <p className="project-detail__text project-detail__text--italic">
                  {project.reflection}
                </p>
              </section>
            )}
          </>
        ) : (
          <div className="project-detail__description">
            <p className="project-detail__text">{project.description}</p>
          </div>
        )}
      </div>

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <div className="project-detail__tools">
          {project.tools.map((tool) => (
            <span key={tool} className="project-detail__tool">
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="project-detail__divider" />

      {/* CTA */}
      <div className="project-detail__cta">
        <p className="project-detail__cta-text">Want to talk about a project like this?</p>
        <a
          href="https://cal.com/ayan-morshed/personal"
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail__cta-link"
        >
          Book a call <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectDetail
