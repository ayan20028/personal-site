import './OutcomesGrid.css'

function OutcomesGrid({ heading, metrics }) {
  return (
    <section className="outcomes-section">
      {heading && <h2 className="outcomes-section__label">{heading}</h2>}
      <div className="outcomes-grid">
        {metrics.map((metric, i) => (
          <div key={i} className="outcomes-grid__cell">
            <span className="outcomes-grid__value">{metric.value}</span>
            <span className="outcomes-grid__label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OutcomesGrid
