// Industries (page 7): dark section, gold-check list in two columns, photo.
const COL1 = ['Infrastructure & PPP', 'Power & Energy', 'Water Utilities', 'Oil & Gas', 'Petrochemicals', 'Heavy Manufacturing']
const COL2 = ['Construction', 'Government', 'Investment Holdings', 'Family Businesses', 'Industrial Services']

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div>
        <h2 className="display title">Industries We Cover</h2>
        <p className="intro-line">
          We understand the operational and financial challenges facing capital-intensive and highly
          regulated industries.
        </p>
        <p className="serve">Industries We Serve</p>
        <div className="industries-cols">
          {[...COL1, ...COL2].map((item) => (
            <div key={item}>
              <i className="fa-solid fa-check" /> {item}
            </div>
          ))}
        </div>
      </div>
      <img src="/images/industries.png" alt="Advisory consultation with clients" />
    </section>
  )
}
