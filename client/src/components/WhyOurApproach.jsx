// Why Our Approach Works (page 9): gold-check headings with paragraphs.
export default function WhyOurApproach() {
  return (
    <section className="why-works">
      <div className="title display">Why Our Approach Works</div>
      <div className="works-grid">
        <div className="work-item">
          <i className="fa-solid fa-check" />
          <div>
            <h4>Under Effective Processes</h4>
            <p>
              Every successful transformation begins with understanding how an organization operates
              today. We understand business model, assess your business processes, identify
              inefficiencies &amp; suggest effective operational structure and then redesign
              workflows that improve execution across the organization.
            </p>
          </div>
        </div>

        <div className="work-item">
          <i className="fa-solid fa-check" />
          <div>
            <h4>Improved Profitability</h4>
            <p>
              As efficiency improves, organizations experience stronger financial performance, lower
              operating costs, improved governance, and sustainable profitability.
            </p>
          </div>
        </div>

        <div className="work-item full">
          <i className="fa-solid fa-check" />
          <div>
            <h4>Effective Business Activities</h4>
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
