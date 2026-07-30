// Our Impact (page 8): 2x2 outcome cards with alternating borders.
const CARDS = [
  ['Better Decision Making', 'Executive-level financial visibility that supports informed leadership decisions.', 'gold'],
  ['Stronger Operations', 'Optimized business processes that improve organizational efficiency.', 'navy'],
  ['Lower Operating Costs', 'Flexible engagement models that can reduce finance operating costs by up to 40% while improving capability.', 'navy'],
  ['Sustainable Growth & Governance', 'Improved operational performance, governance, and long-term business resilience.', 'gold'],
]

export default function Impact() {
  return (
    <section className="impact">
      <span className="watermark" style={{ right: '-5vw', top: '18%' }}>J</span>
      <div className="section-head">
        <div className="title">Our Impact</div>
        <div className="sub">Creating Measurable Business Outcomes</div>
      </div>
      <div className="impact-grid">
        {CARDS.map(([title, text, variant]) => (
          <div className={`impact-card ${variant === 'navy' ? 'navy' : ''}`} key={title}>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
