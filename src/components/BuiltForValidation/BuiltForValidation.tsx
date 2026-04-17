import validationImages from '../../assets/validation-images.png'
import styles from './BuiltForValidation.module.css'

export default function BuiltForValidation() {
  return (
    <section id="validation" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Built for Validation &amp; Readiness</h2>
          <p className={styles.subtitle}>
            We operate at the intersection of scientific rigor and development
            intent ensuring research translates into validated, execution-ready
            outcomes rather than isolated experimental results. Our approach is
            built on structured experimentation, reproducible data, and
            formulation-driven development&mdash;enabling clear decisions on
            feasibility, performance, and next-stage progression. Unlike
            conventional CRO models, we focus on de-risking technologies and
            advancing them toward real-world readiness with technical depth and
            strategic clarity.
          </p>
        </header>

        <div className={styles.imageRow}>
          <img
            src={validationImages}
            alt="Zernyx Labs validation facilities: lab equipment, research scientist, and clinical handover"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
