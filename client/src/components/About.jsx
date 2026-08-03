// About (page 11): intro text + skyscraper photo, then Ambition & Purpose.
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-top">
        <div>
          <h2 className="display title" style={{ fontSize: 'clamp(2rem,3.5vw,2.7rem)' }}>About Jamaa</h2>
          <p className="bbb">Building Better Businesses</p>
          <p>
            In a rapidly evolving business landscape, staying ahead requires more than experience,
            it demands intelligent execution.
          </p>
          <p>
            JAMAA integrates modern AI capabilities across our advisory and transformation services,
            enabling smarter analysis, faster delivery, and more informed decision-making while keeping
            strategic thinking firmly human-led.
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
