// Expanded article: "Weatherford" comeback (fifth insight).
import { BLOG_PHOTOS } from '../data/blogPhotos.js'

export default function BlogArticleWeatherford({ id = 'insight-article' }) {
  const photos = BLOG_PHOTOS.weatherford
  return (
    <article id={id} className="insight-article">
      <div className="insight-article-hero">
        <img className="insight-article-hero-bg" src={photos.hero} alt="" />
        <h3 className="insight-article-hero-title">
          The Story Of Turn Around
        </h3>
      </div>

      <div className="insight-article-body">
        <div className="insight-article-full insight-article-full--lead">
          <p>
            Not as a zombie company surviving on restructured debt and reduced ambitions. As a
            competitive OFS player with a cleaner balance sheet and a sharper focus than they had before
            the bankruptcy.
          </p>
        </div>

        <div className="insight-article-full">
          <h4 className="insight-article-section-title">How they got there?</h4>
          <p>
            Weatherford problems were not primarily technical. Their technology was credible. Their
            people were good. Their geographic footprint was global. The problem was financial
            architecture. Years of aggressive acquisition without sufficient integration, a cost base
            that made no sense below $70 oil, and a debt load that became impossible to service when
            the market turned against them in 2015 and never fully recovered before 2019. The
            bankruptcy was not a surprise to anyone watching the balance sheet closely.
          </p>
        </div>

        <div className="insight-article-full">
          <h4 className="insight-article-section-title">
            What the restructuring actually changed.
          </h4>
          <p>
            The reorganisation eliminated roughly $6 billion of debt—a step that mattered as much for
            customer and supplier confidence as for the capital structure itself. With breathing room
            restored, management could rebuild credibility with partners who had grown wary of
            counterparty risk.
          </p>
          <p>
            Strategic focus changed too. Rather than competing head-to-head with SLB and Halliburton
            across every product line, Weatherford narrowed its emphasis toward well construction,
            production optimisation, and selected international markets where it could lead with
            differentiated capability rather than scale alone.
          </p>
        </div>

        <div className="insight-article-full">
          <h4 className="insight-article-section-title">It&apos;s not a fairy tale.</h4>
          <p>
            Today&apos;s oilfield services market is intensely competitive and increasingly digital.
            Winning back customer confidence takes time—contracts, performance history, and
            consistent delivery still decide outcomes. Restructuring created the platform; execution
            determines whether the turnaround endures.
          </p>
          <p className="insight-article-closing">
            The comeback is real. But the distance still to travel is also real.
          </p>
        </div>
      </div>
    </article>
  )
}
