import { Link } from 'react-router-dom'
import { INSIGHT_CARD_IMAGES } from '../data/blogPhotos.js'
import { INSIGHTS_POSTS, insightArticlePath } from '../data/insightsPosts.js'

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="insights-inner">
        <h2 className="insights-heading">OUR INSIGHTS</h2>

        <div className="insights-grid">
          {INSIGHTS_POSTS.map((post) => (
            <article key={post.title} className="insight-card">
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

        <p className="insights-view-all">
          <Link to="/insights" className="insights-view-all-link">
            Read all insights
          </Link>
        </p>
      </div>
    </section>
  )
}
