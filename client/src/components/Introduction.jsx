// Introduction (page 2): text left, meeting photo right.
export default function Introduction() {
  return (
    <section className="introduction">
      <span className="watermark" style={{ right: '-4vw', top: '10%' }}>JAMAA</span>
      <div className="col-text">
        <h2 className="display title">Introduction</h2>
        <p className="sub">Strategic Advisory Built for Performance.</p>
        <p>
          <strong>JAMAA is a Global Strategic Advisory Firm</strong> helping organizations transform
          finance functions, optimize operations, and build resilient operating models.
        </p>
        <p>
          We believe that effective processes create efficient business activity, and efficient
          businesses deliver stronger financial performance. Through strategic advisory, operational
          excellence, and finance transformation, we help organizations achieve sustainable
          profitability and long-term growth.
        </p>
      </div>
      <img src="/images/intro.png" alt="JAMAA advisory team in a working session" />
    </section>
  )
}
