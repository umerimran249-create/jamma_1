// Expanded article: "Water Infrastructure Upgrade" (fourth insight).
import { BLOG_PHOTOS } from '../data/blogPhotos.js'

export default function BlogArticleWater({ id = 'insight-article' }) {
  const photos = BLOG_PHOTOS.water
  return (
    <article id={id} className="insight-article">
      <div className="insight-article-hero">
        <img className="insight-article-hero-bg" src={photos.hero} alt="" />
        <h3 className="insight-article-hero-title">
          Water Infrastructure Upgrade: A Strategic Priority for Nations
        </h3>
      </div>

      <div className="insight-article-body">
        <div className="insight-article-row">
          <div className="insight-article-copy">
            <p>
              Let me know your thoughts — globally, we must recognize how vital water is and the urgent
              need to upgrade our infrastructure and deploy the best solutions to secure tomorrow.
              Because water is no longer just a utility issue—it is a strategic priority for every
              nation, whether emerging or developed. As populations grow, cities expand, and climate
              pressures intensify, the demand for clean and reliable water continues to rise.
            </p>
            <p>
              If we do not optimize how we use, recycle, and manage water today, tomorrow&apos;s
              challenge will be far greater. Water scarcity, aging infrastructure, and inefficient
              consumption can impact economies, public health, and environmental stability.
            </p>
          </div>
          <figure className="insight-article-figure">
            <img src={photos.inline1} alt="" />
          </figure>
        </div>

        <div className="insight-article-band">
          <figure className="insight-article-figure">
            <img src={photos.inline2} alt="" />
          </figure>
          <div className="insight-article-copy">
            <p>
              This is why it is high time for jurisdictions that have not yet established mature
              Public-Private Partnership (PPP) frameworks to do so. Strong partnerships between
              governments and the private sector can accelerate investment, introduce innovation,
              improve efficiency, and strengthen long-term resilience.
            </p>
            <p>
              A robust water strategy does more than secure resources—it creates jobs, supports
              healthier societies, attracts capital, and promotes a sustainable environment for future
              generations.
            </p>
          </div>
        </div>

        <div className="insight-article-full">
          <p className="insight-article-closing">
            The future of water depends on the decisions we make today.
          </p>
        </div>
      </div>
    </article>
  )
}
