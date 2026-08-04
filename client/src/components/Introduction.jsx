// Introduction: Crushed title/sub, Montserrat body, photo right.
export default function Introduction() {
  return (
    <section className="introduction">
      <div className="intro-top">
        <div className="intro-leading">
          <h2 className="title">Introduction</h2>
          <p className="sub">Strategic Advisory Built for Performance.</p>
          <p>
            <strong>JAMAA</strong> is a global strategic advisory firm helping leaders navigate
            complexity and drive lasting performance through business transformation, strategy, and
            execution. We advise organizations on their most critical decisions—improving financial
            health, optimizing operations, and building resilient business models for long-term
            growth.
          </p>
        </div>
        <img
          className="intro-photo"
          src="/images/intro.png"
          alt="JAMAA advisory team in a working session"
        />
      </div>
      <p className="intro-foot">
        By bringing together expertise across corporate finance, enterprise technology, responsible
        AI integration, marketing strategy, and corporate communications, we deliver practical,
        data-driven outcomes. From multinational corporations to private enterprises, we serve as
        trusted advisors—helping leaders solve today&rsquo;s challenges while building capabilities
        that endure.
      </p>
    </section>
  )
}
