// Insights: alternating blog rows (Z-layout) with Read More CTAs.
const POSTS = [
  {
    label: 'Blog 1',
    title: 'Finance Transformation in a Changing World',
    excerpt:
      'How leading organizations redesign finance operating models for clarity, control, and sustainable performance across complex markets.',
    image: '/images/insight-1.png',
    reverse: false,
  },
  {
    label: 'Blog 2',
    title: 'Strategy, Governance & Growth Beyond Transactions',
    excerpt:
      'Why integrated advisory—linking strategy, tax, operations and governance—creates stronger businesses and more resilient decision-making.',
    image: '/images/insight-2.png',
    reverse: true,
  },
]

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <h2 className="display insights-heading">Our Insights</h2>

      <div className="insights-list">
        {POSTS.map((post) => (
          <article
            key={post.label}
            className={`insight-row${post.reverse ? ' reverse' : ''}`}
          >
            <div className="insight-text">
              <p className="insight-label">{post.label}</p>
              <h3 className="insight-title">{post.title}</h3>
              <p className="insight-excerpt">{post.excerpt}</p>
              <a href="#contact" className="btn btn-gold insight-cta">
                Read More
              </a>
            </div>
            <div className="insight-media">
              <img src={post.image} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
