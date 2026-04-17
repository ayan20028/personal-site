import './PipelineDiagram.css'

function PipelineDiagram({ heading, nodes }) {
  return (
    <section className="pipeline-section">
      {heading && <h2 className="pipeline-section__label">{heading}</h2>}
      <div className="pipeline">
        <div className="pipeline__flow">
          {nodes.map((node, i) => (
            <div key={i} className="pipeline__step">
              {i > 0 && <span className="pipeline__arrow" aria-hidden="true">&rarr;</span>}
              <div className="pipeline__node">
                <span className="pipeline__node-name">{node.name}</span>
                <span className="pipeline__node-action">{node.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PipelineDiagram
