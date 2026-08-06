// Approach / Operating Model (page 3): three-step flow with arrows.
const STEPS = [
  ['/images/icon-processes.png', 'Effective\u00A0Processes'],
  ['/images/icon-activity.png', 'Efficient Business Activity'],
  ['/images/icon-profitability.png', 'Improved Profitability'],
]

export default function Approach() {
  return (
    <section id="operating-model" className="approach">
      <div className="section-head">
        <h2 className="title">Our Operating Model</h2>
      </div>

      <div className="flow">
        {STEPS.map(([icon, label], i) => (
          <div key={label} style={{ display: 'contents' }}>
            <div className="flow-card">
              <img className="flow-icon" src={icon} alt="" />
              <h4>{label}</h4>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flow-arrow"><i className="fa-solid fa-arrow-right" /></div>
            )}
          </div>
        ))}
      </div>

      <p className="kicker">Better businesses are built through better operating models.</p>
      <p className="lead-strong">Every organization has opportunities hidden within its processes.</p>
      <p className="note">
        We identify inefficiencies, redesign operating models, strengthen governance, and improve
        financial operations to create measurable improvements in business performance and
        profitability.
      </p>
    </section>
  )
}
