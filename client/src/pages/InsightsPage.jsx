import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { INSIGHT_CARD_IMAGES } from '../data/blogPhotos.js'
import { INSIGHTS_POSTS, insightArticlePath } from '../data/insightsPosts.js'
import InsightsReadMore from '../components/InsightsReadMore.jsx'

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="insights-page">
        <div className="insights-page-inner">
          <header className="insights-page-head">
            <h1 className="insights-heading">OUR INSIGHTS</h1>
            <p className="insights-page-lead">
              Perspectives on finance leadership, operating models, and strategic transformation across
              the GCC and MENA.
            </p>
          </header>

          <div className="insights-grid">
            {INSIGHTS_POSTS.map((post) => (
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

          <p className="insights-read-more-home insights-page-home-link">
            <Link to="/#insights" className="insights-read-more-link">
              View insights on the homepage
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
