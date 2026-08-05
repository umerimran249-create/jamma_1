// Expanded article: "The CFO as an Architect of Enterprise Value" (second insight).
import { BLOG_PHOTOS } from '../data/blogPhotos.js'

export default function BlogArticleCfo({ id = 'insight-article' }) {
  const photos = BLOG_PHOTOS.cfo
  return (
    <article id={id} className="insight-article">
      <div className="insight-article-hero">
        <img className="insight-article-hero-bg" src={photos.hero} alt="" />
        <h3 className="insight-article-hero-title">
          The CFO as an Architect of Enterprise Value
        </h3>
      </div>

      <div className="insight-article-body">
        <div className="insight-article-row">
          <div className="insight-article-copy">
            <p>
              The role of finance has moved far beyond reporting, compliance, and cost control. Today&apos;s
              most effective finance leaders shape how capital is allocated, how risk is understood, and
              how performance is delivered across the enterprise.
            </p>
            <p>
              In the GCC and MENA, economic diversification and evolving business models are accelerating
              this shift. As organisations expand into new sectors and geographies, finance is increasingly
              expected to act as a strategic partner—not a back-office function confined to the close
              process.
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
              Global examples such as Microsoft and Siemens show what modern finance can achieve when
              analytics, automation, and digital platforms are deployed with intent. Both have used
              data-driven insight and AI-enabled forecasting to strengthen decision quality, reduce
              cycle times, and build durable competitive advantage through the finance organisation.
            </p>
          </div>
        </div>

        <div className="insight-article-full">
          <p>
            Across the Middle East, expectations of the CFO continue to rise. Boards and investors look
            to finance leaders to manage enterprise risk, optimise capital structures, and translate
            complex market dynamics into clear strategic choices—often across multiple jurisdictions and
            reporting regimes.
          </p>
          <p>
            Technology is a critical enabler of that agenda. AI, automation, and advanced analytics can
            unlock capacity, improve visibility, and support faster scenario planning. But sustainable
            transformation depends on equally strong governance, talent, and leadership—tools alone do
            not change outcomes.
          </p>
          <p>
            The organisations that pull ahead will be those where finance is embedded in every major
            strategic decision: portfolio prioritisation, M&amp;A, operating model design, and long-term
            value creation. The function becomes the connective tissue between strategy, operations, and
            capital markets.
          </p>
          <p className="insight-article-closing">
            In an increasingly complex global economy, the modern CFO is no longer simply responsible for
            protecting value. They are responsible for creating it.
          </p>
        </div>
      </div>
    </article>
  )
}
