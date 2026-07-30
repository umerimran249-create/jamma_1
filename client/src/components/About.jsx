// About (page 11): intro text + skyscraper photo, then Ambition & Purpose.
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-top">
        <div>
          <h2 className="display title" style={{ fontSize: 'clamp(2rem,3.5vw,2.7rem)' }}>About</h2>
          <p className="sub">Beyond Transactions</p>
          <p className="bbb">Building Better Businesses</p>
          <p>
            We gather expertise, strategy, technology, and financial insight to solve complex
            business challenges through one integrated advisory platform.
          </p>
          <p>
            Rather than offering isolated consulting services, we understand the core business model
            and build operating models accordingly that improve organizational functionalities.
          </p>
          <p>
            By aligning strategy, finance, governance, and operations, we help clients achieve
            stronger business performance and sustainable profitability.
          </p>
        </div>
        <img src="/images/about.png" alt="Corporate skyscrapers" />
      </div>

      <div className="ap-grid">
        <div className="ap-item">
          <img className="ap-icon" src="/images/icon-ambition.png" alt="" />
          <div className="sub">Our Ambition</div>
          <p>
            To create lasting value for our client and become trusted advisor of choice for
            organizations seeking sustainable growth, strategic clarity and transformative results.
          </p>
        </div>

        <div className="ap-item">
          <img className="ap-icon" src="/images/icon-purpose.png" alt="" />
          <div className="sub">Our Purpose</div>
          <p>
            We engage organizations to build effective processes that create efficient business
            activity, stronger governance, and sustainable profitability through practical
            implementation plan.
          </p>
        </div>
      </div>
    </section>
  )
}
