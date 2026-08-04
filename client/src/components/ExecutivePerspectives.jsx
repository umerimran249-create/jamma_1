const COL1 = [
  'Finance Transformation',
  'Operating Models',
  'Business Strategy',
  'Governance',
]
const COL2 = [
  'Tax Planning',
  'Artificial Intelligence',
  'Infrastructure Finance',
  'Corporate Performance',
]

export default function ExecutivePerspectives() {
  return (
    <section className="executive-perspectives">
      <div className="section-head">
        <h2 className="title">Executive Perspectives</h2>
        <p className="exec-sub">
          Regular articles from our advisory team covering
        </p>
      </div>
      <div className="executive-perspectives-grid">
        {[COL1, COL2].map((items, col) => (
          <div className="executive-perspectives-box" key={col}>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
