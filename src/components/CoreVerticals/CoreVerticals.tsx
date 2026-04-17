import { FiClipboard, FiLayers, FiBarChart2 } from 'react-icons/fi'
import styles from './CoreVerticals.module.css'

const verticals = [
  {
    Icon: FiClipboard,
    title: 'Pharmaceutical, Cosmeceutical & Nutraceutical R&D',
    body: 'End-to-end experimental research across drug products, advanced cosmetic formulations, and functional nutraceuticals grounded in formulation science and translational development.',
  },
  {
    Icon: FiLayers,
    title: 'Formulation & Technology Validation',
    body: 'Structured formulation and validation programs that transform concepts into stable, performance-tested, and development-ready prototypes.',
  },
  {
    Icon: FiBarChart2,
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
          {verticals.map(({ Icon, title, body }) => (
            <article key={title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon size={24} />
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
