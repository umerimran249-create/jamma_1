// Expanded article: "How CFOs Drive Organizational Success" (third insight).
import { BLOG_PHOTOS } from '../data/blogPhotos.js'

export default function BlogArticleCfoSuccess({ id = 'insight-article' }) {
  const photos = BLOG_PHOTOS.cfoSuccess
  return (
    <article id={id} className="insight-article insight-article--cfo-success">
      <div className="insight-article-hero">
        <img
          className="insight-article-hero-bg insight-article-hero-bg--desaturated"
          src={photos.hero}
          alt=""
        />
        <h3 className="insight-article-hero-title">
          How CFOs Drive Organizational Success
        </h3>
      </div>

      <div className="insight-article-body">
        <div className="insight-article-row insight-article-row--cfo-intro">
          <div className="insight-article-copy">
            <p className="insight-article-kicker">The Heart of a CFO</p>
            <p>Being a CFO is hard and it can be lonely. Why would you want to go down that road?</p>
            <p>
              I usually ask this question to all CFOs I interview, as this is one of the best ways to
              uncover what drives them and whether they are suitable for a specific job. To no
              surprise, a fondness for numbers is a given. However, for most CFOs it is not about
              board decks or EBITDA, not even finance. At least in its technical sense.
            </p>
          </div>
          <figure className="insight-article-figure insight-article-figure--portrait">
            <img src={photos.portrait} alt="" />
          </figure>
        </div>

        <div className="insight-article-checks-section">
          <h4 className="insight-article-section-title">
            What all great CFOs really love about their job?
          </h4>
          <div className="insight-article-check-columns">
            <ul className="insight-article-check-list">
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>When confusion reigns, being the one who makes sense of it.</span>
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>
                  Turning chaos into next steps. Uniting investors, teams, and operators to move
                  forward as one.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>
                  Earning trust across the board. From CEOs to engineers; Being valued for listening
                  and understanding.
                </span>
              </li>
            </ul>
            <ul className="insight-article-check-list">
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>
                  Tackling tough decisions. When others hesitate, stepping up and making the call.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>
                  Guiding strategic shifts. Knowing when to push forward, pause, or change course
                  entirely.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="insight-article-row insight-article-row--cfo-callout">
          <figure className="insight-article-figure insight-article-figure--cfo-graphic">
            <img src={photos.callout} alt="" />
          </figure>
          <aside className="insight-article-callout">
            <p className="insight-article-callout-lead">
              In my opinion the CFO is usually in the seat driving clarity.
            </p>
            <ul className="insight-article-callout-list">
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                Not because they&apos;re the loudest.
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                Not because they&apos;re the smartest.
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                But because they see the full picture.
              </li>
            </ul>
            <p className="insight-article-callout-foot">
              True leadership is what all great CFOs love.
            </p>
          </aside>
        </div>
      </div>
    </article>
  )
}
