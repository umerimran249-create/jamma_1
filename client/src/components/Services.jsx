import { useRef } from 'react'

// Services (page 6): horizontally scrollable cards with alternating
// navy/gold borders and prev/next controls.
const SERVICES = [
  ['Strategic Advisory & Corporate Strategy', 'Corporate Strategy', ['Strategic advisory including business direction', 'and financial viability.'], 'More', 'gold'],
  ['Financial Operation Effectiveness', 'Process Reengineering', ['Suggest new Process', 'Review of ERP and its implementation plan'], 'Read More', 'navy'],
  ['Tax Planning & Optimization', 'Strategic Tax Planning', ['Understand business structure and', 'suggest tax planning tools'], 'Read More', 'gold'],
  ['Project & Investment Advisory', 'AI Driven Financial Modelling', ['Bid or decision making finance models'], 'Read More', 'navy'],
]

export default function Services() {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="services" className="services">
      <div className="section-head">
        <div className="title">Our Services</div>
      </div>

      <div className="services-carousel">
        <button className="carousel-btn prev" aria-label="Previous" onClick={() => scrollBy(-1)}>
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="services-track" ref={trackRef}>
          {SERVICES.map(([title, sub, lines, cta, variant]) => (
            <div className={`service-card ${variant === 'gold' ? 'gold' : ''}`} key={title}>
              <h3>{title}</h3>
              <p className="svc-sub">{sub}</p>
              <ul>
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline-navy">{cta}</a>
            </div>
          ))}
        </div>

        <button className="carousel-btn next" aria-label="Next" onClick={() => scrollBy(1)}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </section>
  )
}
