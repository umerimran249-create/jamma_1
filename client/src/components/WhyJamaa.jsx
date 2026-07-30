// Why JAMAA (page 4): 2x2 feature cards with alternating navy/gold borders.
const CARDS = [
  ['/images/icon-thinking.png', 'Thinking Together', 'we listen, strategize and bring valuable ideas together.', 'navy'],
  ['/images/icon-excellence.png', 'Operational Excellence', 'Building effective business processes that improve organizational performance.', 'gold'],
  ['/images/icon-packaging.png', 'Working with Packaging', 'Strategy, finance, operations, governance and tax working together.', 'gold'],
  ['/images/icon-results.png', 'Sustainable Results', 'Long-term value through measurable business improvement.', 'navy'],
]

export default function WhyJamaa() {
  return (
    <section className="why-jamaa">
      <div className="section-head">
        <div className="title">Why JAMAA</div>
      </div>
      <div className="why-grid">
        {CARDS.map(([icon, title, text, variant]) => (
          <div className={`why-card ${variant === 'gold' ? 'gold' : ''}`} key={title}>
            <img className="why-icon" src={icon} alt="" />
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
