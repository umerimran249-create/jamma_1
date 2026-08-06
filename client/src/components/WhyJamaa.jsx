import { useState } from 'react'

// Why JAMAA: flip cards — photo + icon front; solid navy/gold detail on hover/tap.
const CARDS = [
  {
    title: 'Thinking Together',
    text: 'we listen, strategize and bring valuable ideas together.',
    icon: '/images/icon-thinking.png',
    image: '/images/why-1.png',
    variant: 'navy',
  },
  {
    title: 'Operational Excellence',
    text: 'Building effective business processes that improve organizational performance.',
    icon: '/images/icon-excellence.png',
    image: '/images/why-2.png',
    variant: 'gold',
  },
  {
    title: 'Working with Packaging',
    text: 'Strategy, finance, operations, governance and tax working together.',
    icon: '/images/icon-packaging.png',
    image: '/images/why-3.png',
    variant: 'navy',
  },
  {
    title: 'Sustainable Results',
    text: 'Long-term value through measurable business improvement.',
    icon: '/images/icon-results.png',
    image: '/images/why-4.png',
    variant: 'gold',
  },
]

export default function WhyJamaa() {
  const [flipped, setFlipped] = useState(null)

  const toggle = (title) => {
    setFlipped((prev) => (prev === title ? null : title))
  }

  return (
    <section id="approach" className="why-jamaa">
      <div className="section-head">
        <div className="title">OUR APPROACH</div>
      </div>

      <div className="why-flip-grid">
        {CARDS.map((card) => {
          const isFlipped = flipped === card.title
          return (
            <div
              key={card.title}
              className={`why-flip ${card.variant}${isFlipped ? ' is-flipped' : ''}`}
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
              <div className="why-flip-inner">
                <div className="why-flip-front">
                  <img className="flip-cover-img" src={card.image} alt="" />
                  <div className="flip-cover-shade" aria-hidden="true" />
                  <img className="why-flip-icon" src={card.icon} alt="" />
                  <h4>{card.title}</h4>
                </div>
                <div className={`why-flip-back ${card.variant}`}>
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
