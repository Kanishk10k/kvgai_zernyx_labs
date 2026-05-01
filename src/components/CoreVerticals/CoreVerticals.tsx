import styles from './CoreVerticals.module.css'
import cardIcon1 from '../../assets/core-card-icon-1.svg'
import cardIcon2 from '../../assets/core-card-icon-2.svg'

const verticals = [
  {
    icon: cardIcon1,
    title: 'Pharmaceutical, Cosmeceutical & Nutraceutical R&D',
    body: 'End-to-end experimental research across drug products, advanced cosmetic formulations, and functional nutraceuticals grounded in formulation science and translational development.',
  },
  {
    icon: cardIcon2,
    title: 'Formulation & Technology Validation',
    body: 'Structured formulation and validation programs that transform concepts into stable, performance-tested, and development-ready prototypes.',
  },
  {
    icon: cardIcon2,
    title: 'Data-Driven Development Strategy',
    body: 'Decision-focused experimentation and analytics that assess feasibility, reduce uncertainty, and define clear pathways for development and scale.',
  },
]

export default function CoreVerticals() {
  return (
    <section id="core-verticals" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Our core verticals</h2>
          <p className={styles.subtitle}>
            Capabilities built to de-risk, validate, and advance life-science
            technologies toward scalable development.
          </p>
        </header>

        <div className={styles.grid}>
          {verticals.map(({ icon, title, body }) => (
            <article key={title} className={styles.card}>
              <img src={icon} alt="" className={styles.cardIcon} aria-hidden />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
