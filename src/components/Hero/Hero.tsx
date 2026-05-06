import lifeAtZernyxImage from '../../assets/life-at-zernyx.svg'
import styles from './Hero.module.css'

const bullets = [
  'Science backed product development',
  'Technology Commercialisation',
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.heading}>
            Translating Life-Science Research into{' '}
            <span className={styles.gradient}>Scalable Impact</span>
          </h1>

          <p className={styles.subheading}>
            Bridging rigorous science, R&amp;D validation, and<br />
            development-ready execution across pharmaceutical,<br />
            cosmeceutical, biotechnology and nutraceutical innovation.
          </p>

          <ul className={styles.bullets}>
            {bullets.map((label) => (
              <li key={label} className={styles.bullet}>
                <span className={styles.dot} aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <img
            src={lifeAtZernyxImage}
            alt="Scientists working in a Zernyx Labs research facility"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}
