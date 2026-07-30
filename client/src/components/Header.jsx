const NAV = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Industries', '#industries'],
  ['Insights', '#insights'],
  ['Contact', '#contact'],
]

// Fixed top navigation: full JAMAA logo mark + nav links.
export default function Header() {
  return (
    <header>
      <a className="brand" href="#home">
        <img src="/images/logo.png" alt="JAMAA — Building Better Business" />
      </a>
      <nav>
        <ul>
          {NAV.map(([label, href]) => (
            <li key={label}>
              <a href={href} className={label === 'Home' ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
