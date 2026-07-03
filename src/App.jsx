import Nav from './components/Nav.jsx'
import CtaBars from './components/CtaBars.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import TrustBar from './sections/TrustBar.jsx'
import Services from './sections/Services.jsx'
import OfferStrip from './sections/OfferStrip.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Process from './sections/Process.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Guarantee from './sections/Guarantee.jsx'
import Faq from './sections/Faq.jsx'
import Contact from './sections/Contact.jsx'
import FinalCta from './sections/FinalCta.jsx'

/**
 * Landing page composition.
 *
 * Section order follows a conversion funnel: hook + lead form (Hero) →
 * proof (TrustBar) → offer (Services) → urgency (OfferStrip) → objection
 * handling (WhyUs, Process, Testimonials, Guarantee, Faq) → conversion
 * (Contact, FinalCta). CtaBars renders the always-visible call/WhatsApp
 * shortcuts on top of everything.
 */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <OfferStrip />
        <WhyUs />
        <Process />
        <Testimonials />
        <Guarantee />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <CtaBars />
    </>
  )
}
