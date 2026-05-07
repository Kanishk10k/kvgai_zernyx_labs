import builtValidation1 from '../../assets/built-validation-1.svg'
import builtValidation2 from '../../assets/built-validation-2.svg'
import builtValidation3 from '../../assets/built-validation-3.svg'
import styles from './BuiltForValidation.module.css'

const trayImages = [
  { src: builtValidation1, alt: 'Lab equipment and instrumentation', ratio: '446 / 338', grow: 446 },
  { src: builtValidation2, alt: 'Research scientist at work', ratio: '575 / 339', grow: 575 },
  { src: builtValidation3, alt: 'Quality control of finished product', ratio: '403 / 338', grow: 403 },
]

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
          {trayImages.map(({ src, alt, ratio, grow }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={styles.tileImage}
              loading="lazy"
              style={{ aspectRatio: ratio, flexGrow: grow }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
