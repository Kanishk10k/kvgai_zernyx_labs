import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LifeAtZernyx from './components/LifeAtZernyx/LifeAtZernyx'
import About from './components/About/About'
import CoreVerticals from './components/CoreVerticals/CoreVerticals'
import BuiltForValidation from './components/BuiltForValidation/BuiltForValidation'
import IntegratedApproach from './components/IntegratedApproach/IntegratedApproach'
import Mission from './components/Mission/Mission'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <LifeAtZernyx />
        <Hero />
        <About />
        <CoreVerticals />
        <BuiltForValidation />
        <IntegratedApproach />
        <Mission />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
