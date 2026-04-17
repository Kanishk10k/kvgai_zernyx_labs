import { FiCheckCircle, FiBox, FiTrendingUp } from 'react-icons/fi'
import styles from './IntegratedApproach.module.css'

const pillars = [
  {
    Icon: FiCheckCircle,
    title: 'Scientific Validation',
    body: 'We generate high-quality, reproducible data through structured experimentation establishing technical feasibility and reducing early-stage uncertainty.',
  },
  {
    Icon: FiBox,
    title: 'Formulation & Translational Development',
    body: 'We design and optimize formulations that are stable, scalable, and aligned with real-world application and pilot readiness.',
  },
  {
    Icon: FiTrendingUp,
    title: 'Decision-Focused Data & Readiness',
    body: 'We translate experimental outcomes into clear insights on performance, scalability, and next-stage development pathways.',
  },
]

export default function IntegratedApproach() {
  return (
    <section id="integrated-approach" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Our Integrated Approach</h2>
          <p className={styles.subtitle}>
            A structured, three-pillar approach that aligns scientific rigor
            with development-focused execution ensuring technologies progress
            from feasibility to validated, pilot-ready outcomes.
          </p>
        </header>

        <div className={styles.grid}>
          {pillars.map(({ Icon, title, body }) => (
            <article key={title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon size={26} />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
