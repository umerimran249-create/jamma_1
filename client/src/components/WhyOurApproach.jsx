// Why Our Approach Works: zigzag rows — each image aligned with its text.
export default function WhyOurApproach() {
  return (
    <section className="why-works">
      <div className="why-works-inner">
        <h2 className="why-works-title">Why Our Approach Works</h2>

        <div className="why-works-row">
          <div className="why-works-block">
            <h3 className="why-works-sub">Under Effective Processes</h3>
            <p>
              Every successful transformation begins with understanding how an organization operates
              today. We Understand business model, assess your business processes, identify
              inefficiencies &amp; suggest effective operational structure and then redesign
              workflows that improve execution across the organization.
            </p>
          </div>
          <figure className="why-works-media">
            <img src="/images/24.png" alt="" />
          </figure>
        </div>

        <div className="why-works-row why-works-row--flip">
          <figure className="why-works-media">
            <img src="/images/25.png" alt="" />
          </figure>
          <div className="why-works-block">
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
