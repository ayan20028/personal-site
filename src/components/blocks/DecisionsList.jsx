import './DecisionsList.css'

function DecisionsList({ heading, decisions }) {
  return (
    <section className="decisions-section">
      {heading && <h2 className="decisions-section__label">{heading}</h2>}
      <ul className="decisions-list">
        {decisions.map((d, i) => (
          <li key={i} className="decisions-list__card">
            <span className="decisions-list__number">
              {String(i + 1).padStart(2, '0')} · {d.label}
            </span>
            <h3 className="decisions-list__question">{d.title || d.question}</h3>
            {(d.answer || d.body) && (
              <p className="decisions-list__answer">
                {d.prefix !== false && (
                  <><strong>{d.prefix ?? 'Design answer'}:</strong>{' '}</>
                )}
                {d.answer || d.body}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DecisionsList
