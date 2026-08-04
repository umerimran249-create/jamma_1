// Our Impact (page 8): 2x2 outcome cards with alternating borders.
const CARDS = [
  ['Better Decision Making', 'Executive-level financial visibility that supports informed leadership decisions.', 'gold'],
  ['Stronger Operations', 'Optimized business processes that improve organizational efficiency.', 'navy'],
  ['Lower Operating Costs', 'Flexible engagement models that can reduce finance operating costs by up to 40% while improving capability.', 'navy'],
  ['Sustainable Growth & Governance', 'Improved operational performance, governance, and long-term business resilience.', 'gold'],
]

export default function Impact() {
  return (
    <section id="impact" className="impact">
      <div className="section-head impact-head">
        <h2 className="title">Our Impact</h2>
        <p className="sub">Creating Measurable Business Outcomes</p>
      </div>
      <div className="impact-grid">
        {CARDS.map(([title, text, variant]) => (
          <div className={`impact-card ${variant === 'navy' ? 'navy' : 'gold'}`} key={title}>
            <h3 className="impact-card-title">{title}</h3>
            <p className="impact-card-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
