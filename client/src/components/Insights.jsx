// Insights (page 10): two cards of gold-check topics.
const COL1 = ['Finance Transformation', 'Operating Models', 'Business Strategy', 'Governance']
const COL2 = ['Tax Planning', 'Artificial Intelligence', 'Infrastructure Finance', 'Corporate Performance']

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="section-head">
        <div className="title">Insights</div>
        <div className="sub">Executive Perspectives</div>
        <p className="lead">Regular articles from our advisory team covering</p>
      </div>
      <div className="insights-cards">
        {[COL1, COL2].map((col, idx) => (
          <div className="insight-card" key={idx}>
            {col.map((topic) => (
              <div key={topic}>
                <i className="fa-solid fa-check" /> {topic}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
