// Industries: dark section, gold Crushed heading, two-column checklist, photo right.
const COL1 = [
  'Infrastructure & PPP',
  'Power & Energy',
  'Water Utilities',
  'Oil & Gas',
  'Petrochemicals',
  'Heavy Manufacturing',
]
const COL2 = [
  'Construction',
  'Government',
  'Investment Holdings',
  'Family Businesses',
  'Industrial Services',
]

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="industries-copy">
        <h2 className="industries-title">Industries We Cover</h2>
        <p className="intro-line">
          We understand the operational and financial challenges facing capital-intensive and highly
          regulated industries.
        </p>
        <p className="serve">Industries We Serve</p>
        <div className="industries-cols">
          <ul className="industries-col">
            {COL1.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="industries-col">
            {COL2.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        className="industries-photo"
        src="/images/industries.png"
        alt="Advisory consultation with clients"
      />
    </section>
  )
}
