import { STATUS_CONFIG } from '../data/projects'
import './StatusTag.css'

function StatusTag({ status }) {
  const config = STATUS_CONFIG[status]
  if (!config) return null

  return (
    <span
      className="status-tag"
      style={{ color: config.color, borderColor: config.color }}
    >
      {config.label}
    </span>
  )
}

export default StatusTag
