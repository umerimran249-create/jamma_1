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
import About from '../components/About.jsx'
import Founder from '../components/Founder.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

// Full JAMAA site, assembled in the order of the 13-page Canva design.
export default function Home() {
  return (
    <>
      <Header />
      <Hero />              {/* page 1 */}
      <Introduction />     {/* page 2 */}
      <Approach />         {/* page 3 */}
      <WhyJamaa />         {/* page 4 */}
      <Divider />          {/* page 5 */}
      <Services />         {/* page 6 */}
      <Industries />       {/* page 7 */}
      <Impact />           {/* page 8 */}
      <WhyOurApproach />   {/* page 9 */}
      <Insights />         {/* page 10 */}
      <About />            {/* page 11 */}
      <Founder />          {/* page 12 */}
      <Contact />          {/* page 13 */}
      <Footer />
    </>
  )
}
