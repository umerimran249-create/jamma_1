import { useState } from 'react'

// Services: flip cards — photo front, detail list on hover/tap (navy / gold backs).
const SERVICES = [
  {
    title: 'Executive Strategic Advisory',
    image: '/images/service-1.png',
    variant: 'navy',
    items: [
      'Corporate Strategy',
      'Operating Model Optimization',
      'Business Transformation',
      'Corporate Governance',
    ],
  },
  {
    title: 'Financial Operation Effectiveness',
    image: '/images/service-2.png',
    variant: 'gold',
    items: [
      'Process Reengineering',
      'Finance Transformation',
      'Working Capital Structuring',
      'Finance Control Framework',
    ],
  },
  {
    title: 'Tax Planning & Optimization',
    image: '/images/service-3.png',
    variant: 'navy',
    items: [
      'Strategic Tax Planning',
      'ETR Optimization',
      'Cross Border Advisory',
      'Tax Governance & Compliance',
    ],
  },
  {
    title: 'Project Management Advisory',
    image: '/images/service-4.png',
    variant: 'gold',
    items: [
      'AI Driven Financial Modelling',
      'Pricing Strategy & Bankability',
      'M&A Integration Advisory',
    ],
  },
]

export default function Services() {
  const [flipped, setFlipped] = useState(null)

  const toggle = (title) => {
    setFlipped((prev) => (prev === title ? null : title))
  }

  return (
    <section id="services" className="services">
      <div className="section-head">
        <div className="title">Our Services</div>
      </div>

      <div className="services-flip-grid">
        {SERVICES.map((svc) => {
          const isFlipped = flipped === svc.title
          return (
            <div key={svc.title} className="svc-flip-cell">
              <div
                className={`svc-flip ${svc.variant}${isFlipped ? ' is-flipped' : ''}`}
                onClick={() => toggle(svc.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(svc.title)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${svc.title}. ${isFlipped ? 'Show title' : 'Show details'}`}
              >
                <div className="svc-flip-inner">
                  <div className="svc-flip-front">
                    <img className="flip-cover-img" src={svc.image} alt="" />
                    <div className="flip-cover-shade" aria-hidden="true" />
                    <h3>{svc.title}</h3>
                  </div>
                  <div className={`svc-flip-back ${svc.variant}`}>
                    <ul>
                      {svc.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
