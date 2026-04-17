import './TextSection.css'

function TextSection({ heading, body, callout }) {
  return (
    <section className="text-section">
      <h2 className="text-section__label">{heading}</h2>
      {body.split('\n\n').map((paragraph, j) => (
        <p key={j} className="text-section__text">{paragraph}</p>
      ))}
      {callout && (
        <blockquote className="text-section__callout">{callout}</blockquote>
      )}
    </section>
  )
}

export default TextSection
