import { useState } from 'react'

// Our Impact: flip cards — photo + title front; solid navy/gold detail on hover/tap.
const CARDS = [
  {
    title: 'Better Decision Making',
    text: 'Executive-level financial visibility that supports informed leadership decisions.',
    image: '/images/impact-1.png',
    variant: 'navy',
  },
  {
    title: 'Stronger Operations',
    text: 'Optimized business processes that improve organizational efficiency.',
    image: '/images/impact-2.png',
    variant: 'gold',
  },
  {
    title: 'Lower Operating Costs',
    text: 'Flexible engagement models that can reduce finance operating costs by up to 40% while improving capability.',
    image: '/images/impact-3.png',
    variant: 'navy',
  },
  {
    title: 'Sustainable Growth & Governance',
    text: 'Improved operational performance, governance, and long-term business resilience.',
    image: '/images/impact-4.png',
    variant: 'gold',
  },
]

export default function Impact() {
  const [flipped, setFlipped] = useState(null)

  const toggle = (title) => {
    setFlipped((prev) => (prev === title ? null : title))
  }

  return (
    <section id="impact" className="impact">
      <div className="section-head impact-head">
        <h2 className="title">Our Impact</h2>
        <p className="sub">Creating Measurable Business Outcomes</p>
      </div>

      <div className="impact-flip-grid">
        {CARDS.map((card) => {
          const isFlipped = flipped === card.title
          return (
            <div key={card.title} className="impact-flip-cell">
              <div
                className={`impact-flip${isFlipped ? ' is-flipped' : ''}`}
                onClick={() => toggle(card.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(card.title)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${card.title}. ${isFlipped ? 'Show title' : 'Show details'}`}
              >
                <div className="impact-flip-inner">
                  <div className="impact-flip-front">
                    <img className="flip-cover-img" src={card.image} alt="" />
                    <div className="impact-flip-shade" aria-hidden="true" />
                    <h3>{card.title}</h3>
                  </div>
                  <div className={`impact-flip-back ${card.variant}`}>
                    <p>{card.text}</p>
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
