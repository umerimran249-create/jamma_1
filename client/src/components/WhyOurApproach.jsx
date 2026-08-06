// Why Our Approach Works: zigzag rows — each image aligned with its text.
export default function WhyOurApproach() {
  return (
    <section className="why-works">
      <div className="why-works-inner">
        <h2 className="why-works-title">Why Our Approach Works</h2>

        <div className="why-works-row">
          <div className="why-works-block">
            <h3 className="why-works-sub">Understanding Before Transforming</h3>
            <p>
              Sustainable transformation begins with a clear understanding of how an organization creates
              value today. We assess your business model, operating structure, financial performance, and
              core business processes to identify inefficiencies, uncover opportunities, and address the
              root causes of operational challenges. From there, we design practical strategies,
              streamlined processes, and scalable operating models that strengthen execution, improve
              performance, and support long-term business growth.
            </p>
          </div>
          <figure className="why-works-media">
            <img src="/photos/hehe 1.png" alt="Understanding Before Transforming" />
          </figure>
        </div>

        <div className="why-works-row why-works-row--flip">
          <figure className="why-works-media">
            <img src="/photos/hehe 2.png" alt="Effective Business Activities" />
          </figure>
          <div className="why-works-block">
            <h3 className="why-works-sub">Effective Business Activities</h3>
            <p>
              Well-designed operating models enable organizations to execute strategy with greater
              clarity, speed, and control. We help align processes, governance, technology, and people
              with your business objectives, creating more efficient operations, stronger collaboration,
              and informed decision-making. The result is improved financial performance, reduced
              operating costs, enhanced organizational resilience, and sustainable value creation that
              strengthens long-term competitive advantage.
            </p>
          </div>
        </div>

        <div className="why-works-row why-works-row--solo" style={{ maxWidth: 'none', marginTop: '24px' }}>
          <div className="why-works-block">
            <h3 className="why-works-sub">Improved Profitability</h3>
            <p style={{ marginBottom: '14px' }}>
              Sustainable profitability is the outcome of disciplined execution and operational
              excellence. By improving efficiency, strengthening financial controls, and optimizing
              the use of resources, we help organizations manage costs, enhance financial
              performance, and build resilient businesses capable of delivering long-term value and
              sustainable growth.
            </p>
            <p>
              Rather than pursuing short-term gains, our approach focuses on creating scalable
              operating models that improve cash flow, strengthen governance, and increase
              organizational agility. The result is stronger financial resilience, greater investor
              confidence, and a business positioned to compete and grow in an evolving market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
