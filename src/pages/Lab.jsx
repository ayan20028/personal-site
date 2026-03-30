import { useState } from 'react'
import { Link } from 'react-router'
import { projects, filterProjects } from '../data/projects'
import StatusTag from '../components/StatusTag'
import './Lab.css'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'shipped', label: 'Shipped' },
  { key: 'poc', label: 'POC' },
  { key: 'creative', label: 'Creative' },
  { key: 'shelved', label: 'Shelved' },
]

function Lab() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = filterProjects(activeFilter)

  return (
    <div className="lab">
      <header className="lab__header">
        <h1 className="lab__title">Lab</h1>
        <p className="lab__desc">
          Everything I&rsquo;ve built, explored, or started thinking about.
          Some shipped, some shelved, all real.
        </p>
      </header>

      <div className="lab__filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`lab__filter${activeFilter === f.key ? ' lab__filter--active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="lab__divider" />

      <div className="lab__list">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            to={`/lab/${project.slug}`}
            className="lab__row"
          >
            <span className="lab__row-title">{project.title}</span>
            <span className="lab__row-category">{project.category}</span>
            <StatusTag status={project.status} />
            <span className="lab__row-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Lab
