import { Link } from 'react-router'
import './ProjectCard.css'

function ProjectCard({ slug, title, subtitle }) {
  return (
    <Link to={`/lab/${slug}`} className="project-card">
      <div className="project-card__text">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__subtitle">{subtitle}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
