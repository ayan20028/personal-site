import './StepsList.css'

function StepsList({ heading, steps }) {
  return (
    <section className="steps-section">
      {heading && <h2 className="steps-section__label">{heading}</h2>}
      <ol className="steps-list">
        {steps.map((step, i) => (
          <li key={i} className="steps-list__item">
            <span className="steps-list__number">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="steps-list__content">
              <span className="steps-list__title">{step.title}</span>
              <p className="steps-list__desc">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default StepsList
