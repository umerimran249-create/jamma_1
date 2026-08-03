// Founder (page 12): bio text + founder portrait.
export default function Founder() {
  return (
    <section className="founder">
      <div>
        <h2 className="display title">Founder Info</h2>
        <p><strong>Rehan Laiq</strong></p>
        <p style={{ marginTop: '-12px', marginBottom: '20px' }}><strong>Founder of JAMMA</strong></p>
        <p>
          Rehan Laiq is a globally experienced finance and transformation executive with over 30 years of
          leadership across infrastructure, utilities, energy, and industrial sectors. As the Founder of JAMMA,
          he leverages a distinguished career of shaping financial strategies, strengthening governance
          frameworks, and driving sustainable, high-value growth for complex international portfolios.
        </p>
        <p>
          His deep expertise spans water and wastewater, power and renewables, oil and gas, and large-scale
          infrastructure, encompassing project finance, capital structuring, mergers and acquisitions, and
          enterprise risk management.
        </p>
        <p>
          A Fellow Chartered Accountant and alumnus of the Advanced Financial Management Program at the
          Wharton School, Rehan has spearheaded finance transformation agendas across Southeast Asia, the
          Middle East, Eastern Europe, Central Asia, and Africa. Throughout his career—including senior roles
          such as Group CFO of Fauji Foundation and Global CFO at SLB in Houston—he has successfully managed
          funding programs exceeding US$500 million, implemented advanced enterprise technologies like SAP
          S/4HANA, and consistently delivered attractive risk-adjusted returns for global stakeholders.
        </p>
      </div>
      <img src="/images/founder.png" alt="JAMAA founder" />
    </section>
  )
}
