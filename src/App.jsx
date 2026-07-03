import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Stats from './components/Stats.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <WhyUs />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
