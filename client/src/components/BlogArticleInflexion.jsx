// Expanded article: Inflexion / SAP Connect Day (sixth insight).
import { BLOG_PHOTOS } from '../data/blogPhotos.js'

export default function BlogArticleInflexion({ id = 'insight-article' }) {
  const photos = BLOG_PHOTOS.inflexion
  return (
    <article id={id} className="insight-article">
      <div className="insight-article-hero">
        <img
          className="insight-article-hero-bg insight-article-hero-bg--ai"
          src={photos.hero}
          alt=""
        />
        <h3 className="insight-article-hero-title">
          ERP Transformation Story
        </h3>
      </div>

      <div className="insight-article-body">
        <div className="insight-article-row">
          <div className="insight-article-copy">
            <p>
              Honored to have represented inflexion — SAP Gold Partner at SAP Connect Day UAE 2026 as
              part of the Finance Track session, &ldquo;Making Waves: Driving Business Transformation
              Through AI-Powered Solutions,&rdquo; joined Mr. Rehan Laiq — FCA, CFO at Metito
              Utilities on stage to discuss how organizations are leveraging AI-powered SAP solutions
              to drive smarter decision-making, operational #efficiency, and sustainable business
              transformation.
            </p>
            <p>
              The event brought together an incredible community of business leaders, #innovators, and
              industry experts, all focused on one common goal, shaping the future of intelligent
              enterprises in the #UAE and beyond.
            </p>
          </div>
          <figure className="insight-article-figure">
            <img src={photos.inline1} alt="" />
          </figure>
        </div>

        <div className="insight-article-full">
          <p>
            A sincere thank you to #SAP for organizing such a powerful platform for collaboration,
            #innovation, and meaningful conversations, and to everyone who attended our session and
            visited us throughout the day.
          </p>
        </div>
      </div>
    </article>
  )
}
