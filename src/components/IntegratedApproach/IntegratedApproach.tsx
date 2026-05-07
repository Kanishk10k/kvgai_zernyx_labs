import ourIntCont1 from '../../assets/our-int-cont-1.svg'
import ourIntCont2 from '../../assets/our-int-cont-2.svg'
import styles from './IntegratedApproach.module.css'

const pillars = [
  {
    icon: ourIntCont1,
    title: 'Scientific Validation',
    body: 'We generate high-quality, reproducible data through structured experimentation establishing technical feasibility and reducing early-stage uncertainty.',
  },
  {
    icon: ourIntCont2,
    title: 'Formulation & Translational Development',
    body: 'We design and optimize formulations that are stable, scalable, and aligned with real-world application and pilot readiness.',
  },
  {
    icon: ourIntCont2,
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
          {pillars.map(({ icon, title, body }) => (
            <article key={title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <img src={icon} alt="" className={styles.iconImg} />
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
