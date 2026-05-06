import Hero from '../components/Hero/Hero'
import CoreVerticals from '../components/CoreVerticals/CoreVerticals'
import BuiltForValidation from '../components/BuiltForValidation/BuiltForValidation'
import IntegratedApproach from '../components/IntegratedApproach/IntegratedApproach'
import Mission from '../components/Mission/Mission'
import ContactSection from '../components/ContactSection/ContactSection'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <CoreVerticals />
      <BuiltForValidation />
      <IntegratedApproach />
      <Mission />
      <ContactSection />
    </div>
  )
}
