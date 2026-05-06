import validationImages from '../../assets/validation-images.png'
import builtValidation3 from '../../assets/built-validation-3.png'
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

        <div
          className={styles.imageRow}
          style={{ '--validation-tray-src': `url(${validationImages})` } as React.CSSProperties}
        >
          <div
            className={`${styles.tile} ${styles.tileBg}`}
            style={{ backgroundPositionX: '0%' }}
            aria-hidden="true"
          />
          <div
            className={`${styles.tile} ${styles.tileBg}`}
            style={{ backgroundPositionX: '50%' }}
            aria-hidden="true"
          />
          <div className={styles.tile}>
            <img
              src={builtValidation3}
              alt="Quality control: technician inspecting blister-packaged tablets"
              className={styles.tileImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
