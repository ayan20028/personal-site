import './TextSection.css'

function TextSection({ heading, body }) {
  return (
    <section className="text-section">
      <h2 className="text-section__label">{heading}</h2>
      {body.split('\n\n').map((paragraph, j) => (
        <p key={j} className="text-section__text">{paragraph}</p>
      ))}
    </section>
  )
}

export default TextSection
