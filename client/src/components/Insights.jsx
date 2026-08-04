// Insights: 3-column grid of image + title-link cards.
const POSTS = [
  {
    title: 'The Cost of Complexity: Why Regional Expansion Is Exposing Weak Operating Models',
    image: '/images/insight-2.png',
    href: '#',
  },
  {
    title: 'The CFO as an Architect of Enterprise Value',
    image: '/images/insight-1.png',
    href: '#',
  },
  {
    title: 'How CFOs Drive Organizational Success',
    image: '/images/insight-3.png',
    href: '#',
  },
  {
    title: 'Water Infrastructure Upgrade: A Strategic Priority for Nations',
    image: '/images/insight-4.png',
    href: '#',
  },
  {
    title: 'Weatherford went Bankrupt in 2019 They Came Back. How?',
    image: '/images/insight-5.png',
    href: '#',
  },
  {
    title: 'Inflexion Showcases AI Innovation at SAP Connect Day UAE 2026',
    image: '/images/insight-6.png',
    href: '#',
    cropFocus: true,
  },
]

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="insights-inner">
        <h2 className="insights-heading">OUR INSIGHTS</h2>

        <div className="insights-grid">
          {POSTS.map((post) => (
            <article key={post.title} className="insight-card">
              <div className="insight-media">
                <img
                  src={post.image}
                  alt=""
                  className={post.cropFocus ? 'insight-img-focus' : undefined}
                />
              </div>
              <a href={post.href} className="insight-title">
                {post.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}