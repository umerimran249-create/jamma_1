// Why Our Approach Works: zigzag copy + image layout (24.png, 25.png).
export default function WhyOurApproach() {
  return (
    <section className="why-works">
      <div className="why-works-inner">
        <div className="why-works-layout">
          <div className="why-works-intro">
            <h2 className="why-works-title">Why Our Approach Works</h2>
            <div className="why-works-block">
              <h3 className="why-works-sub">Under Effective Processes</h3>
              <p>
                Every successful transformation begins with understanding how an organization operates
                today. We Understand business model, assess your business processes, identify
                inefficiencies &amp; suggest effective operational structure and then redesign
                workflows that improve execution across the organization.
              </p>
            </div>
          </div>

          <figure className="why-works-media why-media-1">
            <img src="/images/24.png" alt="" />
          </figure>

          <div className="why-works-left-bottom">
            <figure className="why-works-media why-media-2">
              <img src="/images/25.png" alt="" />
            </figure>
            <div className="why-works-block why-copy-3">
              <h3 className="why-works-sub">Improved Profitability</h3>
              <p>
                As efficiency improves, organizations experience stronger financial performance, lower
                operating costs, improved governance, and sustainable profitability.
              </p>
            </div>
          </div>

          <div className="why-works-block why-copy-2">
            <h3 className="why-works-sub">Effective Business Activities</h3>
            <p>
              We advise most optimized processes inline with your business model and structure which
              enable faster decisions, stronger collaboration, improved controls, and better use of
              organizational resources. As efficiency improves, organizations experience stronger
              financial performance, lower operating costs, improved governance, and sustainable
              profitability. Operational effectiveness becomes a measurable competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
