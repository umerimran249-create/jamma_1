import { Link } from 'react-router-dom'
import { INSIGHT_CARD_IMAGES } from '../data/blogPhotos.js'
import { INSIGHTS_POSTS, insightArticlePath } from '../data/insightsPosts.js'

export default function InsightsReadMore({ excludeSlug, showHomeLink = true }) {
  const posts = excludeSlug
    ? INSIGHTS_POSTS.filter((p) => p.slug !== excludeSlug)
    : INSIGHTS_POSTS

  if (posts.length === 0) return null

  return (
    <section className="insights-read-more" aria-labelledby="insights-read-more-heading">
      <h2 id="insights-read-more-heading" className="insights-read-more-heading">
        Read more
      </h2>
      <p className="insights-read-more-sub">Explore other insights from JAMAA</p>
      <div className="insights-grid insights-read-more-grid">
        {posts.map((post) => (
          <article key={post.slug} className="insight-card">
            <div className="insight-media">
              <img
                src={INSIGHT_CARD_IMAGES[post.cardKey]}
                alt=""
                className={post.cropFocus ? 'insight-img-focus' : undefined}
              />
            </div>
            <Link to={insightArticlePath(post.slug)} className="insight-title">
              {post.title}
            </Link>
          </article>
        ))}
      </div>
      {showHomeLink && (
        <p className="insights-read-more-home">
          <Link to="/insights" className="insights-read-more-link">
            View all insights
          </Link>
          {' · '}
          <Link to="/#insights" className="insights-read-more-link">
            Back to homepage
          </Link>
        </p>
      )}
    </section>
  )
}
