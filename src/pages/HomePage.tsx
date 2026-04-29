import LifeAtZernyx from '../components/LifeAtZernyx/LifeAtZernyx'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import CoreVerticals from '../components/CoreVerticals/CoreVerticals'
import BuiltForValidation from '../components/BuiltForValidation/BuiltForValidation'
import IntegratedApproach from '../components/IntegratedApproach/IntegratedApproach'
import Mission from '../components/Mission/Mission'
import ContactSection from '../components/ContactSection/ContactSection'

export default function HomePage() {
  return (
    <>
      <LifeAtZernyx />
      <Hero />
      <About />
      <CoreVerticals />
      <BuiltForValidation />
      <IntegratedApproach />
      <Mission />
      <ContactSection />
    </>
  )
}
