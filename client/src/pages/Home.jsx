import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Introduction from '../components/Introduction.jsx'
import Approach from '../components/Approach.jsx'
import WhyJamaa from '../components/WhyJamaa.jsx'
import Divider from '../components/Divider.jsx'
import Services from '../components/Services.jsx'
import Industries from '../components/Industries.jsx'
import Impact from '../components/Impact.jsx'
import WhyOurApproach from '../components/WhyOurApproach.jsx'
import Insights from '../components/Insights.jsx'
import ExecutivePerspectives from '../components/ExecutivePerspectives.jsx'
import About from '../components/About.jsx'
import Founder from '../components/Founder.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Services />
      <Approach />
      <Industries />
      <Impact />
      <Insights />
      <WhyJamaa />
      <WhyOurApproach />
      <Divider />
      <ExecutivePerspectives />
      <About />
      <Founder />
      <Contact />
      <Footer />
    </>
  )
}
