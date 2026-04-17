import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Zernyx Labs is a life-sciences R&amp;D and innovation partner enabling
          organizations to identify, de-risk, and translate high-impact
          pharmaceutical, cosmeceutical, and nutraceutical technologies. Our
          integrated model combines deep scientific expertise, experimental
          validation, and data-driven decision-making supporting innovation
          from early feasibility through development-ready proof-of-concept.
        </p>
      </div>
    </section>
  )
}
