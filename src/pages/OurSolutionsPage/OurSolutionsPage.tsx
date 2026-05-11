import styles from './OurSolutionsPage.module.css'
import heroImage from '../../assets/solutions-hero.svg'

export default function OurSolutionsPage() {
  return (
    <div className={styles.page}>
      <section
        id="our-solutions-hero"
        className={styles.hero}
        aria-label="Our Solutions"
      >
        <div className={styles.heroBand}>
          <img
            src={heroImage}
            alt=""
            aria-hidden
            className={styles.heroImage}
          />
        </div>
      </section>
    </div>
  )
}
