import { Link, useLocation, useParams } from 'react-router'
import { getProject } from '../data/projects'
import './Breadcrumb.css'

function Breadcrumb() {
  const location = useLocation()
  const params = useParams()
  const isHome = location.pathname === '/'

  if (isHome) return null

  const segments = [{ label: 'Ayan Morshed', to: '/' }]

  if (location.pathname.startsWith('/work')) {
    segments.push({ label: 'Work', to: '/work' })

    if (params.slug) {
      const project = getProject(params.slug)
      if (project) {
        segments.push({ label: project.title })
      }
    }
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {segments.map((seg, i) => (
        <span key={i} className="breadcrumb__item">
          {i > 0 && <span className="breadcrumb__sep">/</span>}
          {seg.to ? (
            <Link to={seg.to} className="breadcrumb__link">{seg.label}</Link>
          ) : (
            <span className="breadcrumb__current">{seg.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
