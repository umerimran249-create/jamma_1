// Introduction: title/sub + both paragraphs left, photo right (matches Canva).
export default function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <div className="intro-top">
        <div className="intro-leading">
          <h2 className="title">Introduction</h2>
          <p className="sub">Strategic Advisory Built for Performance.</p>
          <p>
            <strong>JAMAA</strong> global strategic advisory firm that
            helps organizations navigate complexity,
            unlock enterprise value, and achieve
            sustainable growth. We partner with executive
            leadership to solve critical business challenges
            through strategy, transformation, and
            disciplined execution, enabling stronger
            financial performance, operational excellence,
            and resilient business models.
          </p>
          <p>
            Combining expertise across corporate finance, enterprise technology, responsible
            AI integration, operational transformation, marketing strategy, and corporate
            communications, we deliver solutions grounded in insight, data, and measurable
            outcomes. From multinational corporations to privately held enterprises, we work
            alongside leadership teams as trusted advisors, helping them make confident
            decisions, accelerate transformation, and build organizations equipped for long-term
            success in an evolving global economy.
          </p>
        </div>
        <div className="intro-photo-wrapper">
          <img
            className="intro-photo"
            src="/images/intro.png"
            alt="JAMAA advisory team in a working session"
          />
        </div>
      </div>
    </section>
  )
}
