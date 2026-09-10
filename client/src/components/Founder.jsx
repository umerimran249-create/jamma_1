// Founder + team: Rehan wraps; Raza has left photo + intro beside, body below.
export default function Founder() {
  return (
    <section id="team" className="founder">
      <div className="founder-block">
        <div className="founder-photo-wrap">
          <img
            className="founder-photo-img"
            src="/photos/Founder image.png"
            alt="Rehan Laiq, Founder and CEO"
          />
        </div>
        <h2 className="title">Founder Info</h2>
        <p className="founder-name">Rehan Laiq</p>
        <p className="founder-role">Founder and CEO</p>
        <p>
          Rehan Laiq is the Founder and Chief Executive Officer of JAMAA Global Advisory, bringing more
          than 38 years of international leadership in finance, business transformation, and corporate
          strategy. Throughout his career, he has advised organizations on complex financial, operational,
          and strategic challenges, helping leadership teams strengthen performance, improve governance,
          and create long-term enterprise value.
        </p>
        <p>
          His experience spans infrastructure, utilities, energy, manufacturing, and industrial sectors,
          where he has held global and group-level executive leadership positions with organizations
          including Metito Utilities, SLB (formerly Schlumberger), and Fauji Foundation. He has led
          large-scale transformation initiatives, project financing, mergers and acquisitions, enterprise
          risk management, finance transformation, and operational optimization across the Middle East,
          Asia, Africa, Europe, and North America.
        </p>
        <p>
          At JAMAA, Rehan leads the firm&apos;s strategic vision, advising boards, investors, and executive
          leadership teams on improving financial performance, building resilient operating models, and
          navigating growth in an increasingly complex business environment. His approach combines
          commercial insight, disciplined execution, and responsible technology adoption to help
          organizations make better decisions, unlock sustainable growth, and deliver measurable business
          outcomes.
        </p>
        <p>
          A Fellow Chartered Accountant and alumnus of the Advanced Financial Management Program at the
          Wharton School, Rehan is recognized for combining strategic thinking with practical execution,
          enabling organizations to transform with confidence and create lasting value.
        </p>
      </div>

      <div className="founder-block founder-block--raza" aria-label="Head of Tax Advisory">
        <div className="founder-raza-top">
          <div className="founder-photo-wrap founder-photo-wrap--raza">
            <img
              className="founder-photo-img"
              src="/images/Jamaa%20Images.png"
              alt="Raza ul Qadir, Head of Tax Advisory"
            />
          </div>
          <div className="founder-raza-intro">
            <p className="founder-name">Raza ul Qadir</p>
            <p className="founder-role">Head of Tax Advisory</p>
            <p>
              Raza ul Qadir is a distinguished Tax and Finance Executive with over 35 years of global
              leadership in international taxation, corporate finance, controllership, and business
              transformation. A Chartered Accountant, he specializes in steering cross-border tax
              strategies, M&A due diligence, corporate structuring, and enterprise risk management across
              multi-billion-dollar global industries including energy, utilities, aviation, oilfield
              services, and digital technologies.
            </p>
            <p>
              He brings deep insight into complex tax, finance, and regulatory environments, helping
              organizations navigate cross-border challenges with clarity and confidence.
            </p>
          </div>
        </div>
        <div className="founder-raza-body">
          <p>
            Throughout his international career, Raza has held senior leadership and partner roles across
            top-tier global institutions and Big Four advisory firms including Global Head of Tax at
            Metito, Tax Partner at KPMG and PwC Middle East, and Tax Executive at General Electric (GE MEA).
          </p>
          <p>
            Recognized for aligning global tax compliance with long-term corporate growth, Raza delivers
            institutional governance rigor, strategic precision, and sustained operational value to global
            enterprises.
          </p>
        </div>
      </div>

      <div
        className="founder-block founder-block--side"
        aria-label="Senior Advisor Concessions & Infrastructure"
      >
        <div className="founder-side-top">
          <div className="founder-photo-wrap founder-photo-wrap--side">
            <img
              className="founder-photo-img"
              src="/images/third%20founder.png"
              alt="Dr. Ernest Poku, Senior Advisor Concessions & Infrastructure"
            />
          </div>
          <div className="founder-side-intro">
            <p className="founder-name">Dr. Ernest Poku</p>
            <p className="founder-role">Senior Advisor Concessions &amp; Infrastructure</p>
            <p>
              Dr. Ernest Poku brings extensive international leadership across African-focused
              infrastructure platforms, energy funds, and high-impact utility developments to his role at
              JAMAA. As the former Executive Director of Africa Water Infrastructure Development Ltd, he
              directed large-scale water project development across the continent, with a focus on Kenya
              and South Africa. His advisory expertise spans the full project lifecycle, seamlessly
              bridging Development Finance Institutions (DFIs), sovereign governments, institutional banks,
              and technical, environmental, and social teams to deliver critical infrastructure and energy
              assets.
            </p>
            <p>
              With a global operating footprint across Europe, Asia, and Africa, Dr. Poku brings deep
              cross-sector insight navigating both early-stage venture scaling and mature enterprise
              expansion within the healthcare and energy sectors. He is a Chartered Engineer, a Chartered
              Director, and a Fellow of both the Energy Institute and the Institute of Directors. Dr. Poku
              holds a Bachelor&apos;s
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
