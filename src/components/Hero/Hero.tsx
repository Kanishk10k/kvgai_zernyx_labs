import { FiArrowUpRight } from 'react-icons/fi'
import styles from './Hero.module.css'

const pills = [
  'Scientific Validation',
  'Product Development',
  'Technology Commercialisation',
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Translating Life-Science Research into{' '}
          <span className={styles.gradient}>Scalable Impact</span>
        </h1>

        <p className={styles.subheading}>
          Bridging rigorous science, R&amp;D validation, and development-ready
          execution across pharmaceutical, cosmeceutical, and nutraceutical
          innovation.
        </p>

        <div className={styles.actions}>
          <a href="#core-verticals" className={styles.button}>
            Visit Zernyx
            <FiArrowUpRight aria-hidden size={18} />
          </a>
          <a href="#integrated-approach" className={styles.button}>
            Visit Zernyx Hub
            <FiArrowUpRight aria-hidden size={18} />
          </a>
        </div>

        <ul className={styles.pills}>
          {pills.map((label) => (
            <li key={label} className={styles.pill}>
              <span className={styles.dot} aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
