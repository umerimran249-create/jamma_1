// Insights: alternating blog rows (Z-layout) with Read More CTAs.
const POSTS = [
  {
    label: 'Blog 1',
    title: 'The CFO as an Architect of Enterprise Value',
    excerpt:
      'In today\u2019s environment, the CFO is no longer just a guardian of financial integrity. The role has evolved into that of a strategic architect\u2014someone who designs the systems, controls, and decision frameworks that enable an organisation to create, protect, and sustain enterprise value.',
    image: '/images/insight-1.png',
    reverse: false,
  },
  {
    label: 'Blog 2',
    title: 'The Cost of Complexity: Why Regional Expansion Is Exposing Weak Operating Models',
    excerpt:
      'As organisations expand across regions, complexity often grows faster than capability. What begins as a growth strategy can quickly become an operational burden\u2014fragmented processes, inconsistent controls, and decision-making that lacks clarity and speed.',
    image: '/images/insight-2.png',
    reverse: true,
  },
]

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="insights-inner">
        <h2 className="insights-heading">Our Insights</h2>

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
      </div>
    </section>
  )
}
