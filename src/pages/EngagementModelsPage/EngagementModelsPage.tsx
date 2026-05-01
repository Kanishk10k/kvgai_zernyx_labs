import { FiCheckCircle } from 'react-icons/fi'
import styles from './EngagementModelsPage.module.css'
import lifeAtZernyxImage from '../../assets/life-at-zernyx.png'
import engCardIcon1 from '../../assets/eng-card-icon1.svg'
import engCardIcon2 from '../../assets/eng-card-icon2.svg'
import engCardIcon3 from '../../assets/eng-card-icon3.svg'
import engCardIcon4 from '../../assets/eng-card-icon4.svg'

const howWeEngageSteps = [
  {
    title: 'Discovery Call',
    body: 'Initial consultation to understand your objectives and challenges',
  },
  {
    title: 'Proposal & Scoping',
    body: 'Detailed technical proposal with timelines and deliverables',
  },
  {
    title: 'Execution',
    body: 'Collaborative project delivery with regular updates',
  },
  {
    title: 'Delivery & Support',
    body: 'Final reporting with ongoing support as needed',
  },
]

const engagementCards = [
  {
    icon: engCardIcon1,
    title: 'Project-Based Engagement',
    body: 'Best suited for defined technical objectives such as feasibility studies, formulation programs, or validation projects.',
    outcome: 'Clear, data-backed deliverables within defined scope and timelines.',
    idealFor: [
      'Specific proof-of-concept studies',
      'Formulation optimization projects',
      'Technology validation initiatives',
      'One-time feasibility assessments',
    ],
  },
  {
    icon: engCardIcon2,
    title: 'Retainer-Based Scientific Partnership',
    body: 'Best suited for ongoing R&D pipelines and long-term collaboration.',
    outcome: 'Sustained innovation momentum with predictable engagement.',
    idealFor: [
      'Multi-project R&D programs',
      'Continuous innovation pipelines',
      'Strategic scientific partnerships',
      'Ongoing technical support',
    ],
  },
  {
    icon: engCardIcon3,
    title: 'Co-Development Programs',
    body: 'Best suited for high-potential technologies requiring shared risk and execution.',
    outcome: 'Accelerated development with aligned incentives.',
    idealFor: [
      'High-impact innovation projects',
      'Shared IP and revenue models',
      'Strategic technology ventures',
      'Long-term partnership opportunities',
    ],
  },
  {
    icon: engCardIcon4,
    title: 'Confidential & White-Label Engagements',
    body: 'Best suited for enterprises requiring discretion.',
    outcome: 'Full confidentiality with enterprise-grade execution.',
    idealFor: [
      'Sensitive competitive projects',
      'Enterprise R&D initiatives',
      'Proprietary formulation development',
      'IP-sensitive validation work',
    ],
  },
]

export default function EngagementModelsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} id="engagement-models-intro" aria-label="Engagement Models">
        <div className={styles.introInner}>
          <h1 className={styles.introTitle}>Engagement Models</h1>
          <p className={styles.introSubtitle}>
            Flexible partnership structures designed to meet diverse organizational needs and innovation objectives
          </p>
        </div>
      </section>

      <section className={styles.hero} id="engagement-models-hero" aria-label="Life at Zernyx">
        <div className={styles.heroBand}>
          <img
            src={lifeAtZernyxImage}
            alt=""
            aria-hidden
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.descr} id="engagement-models-description" aria-label="Engagement models overview">
        <div className={styles.descrInner}>
          <p className={styles.descrBody}>
            We offer multiple engagement models to ensure our collaboration aligns with your technical objectives, timelines, and organizational structure. Each model is designed to deliver clear, measurable outcomes while maintaining the flexibility to adapt to evolving project needs.
          </p>
        </div>
      </section>

      <section className={styles.cards} id="engagement-models-cards" aria-label="Engagement model cards">
        <div className={styles.cardsInner}>
          <div className={styles.cardsGrid}>
            {engagementCards.map(({ icon, title, body, outcome, idealFor }, idx) => (
              <article key={title} className={styles.card}>
                <img
                  src={icon}
                  alt=""
                  aria-hidden
                  className={styles.cardIcon}
                />
                <div className={styles.cardTitleRow}>
                  <span className={styles.cardBadge} aria-hidden>{idx + 1}</span>
                  <h3 className={styles.cardTitle}>{title}</h3>
                </div>
                <p className={styles.cardBody}>{body}</p>

                <div className={styles.cardOutcome}>
                  <h4 className={styles.cardOutcomeTitle}>
                    <FiCheckCircle className={styles.cardOutcomeIcon} aria-hidden />
                    Outcome
                  </h4>
                  <p className={styles.cardOutcomeBody}>{outcome}</p>
                </div>

                <h4 className={styles.cardIdealTitle}>Ideal For:</h4>
                <ul className={styles.cardList}>
                  {idealFor.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      <span className={styles.cardListBullet} aria-hidden>•</span>
                      <span className={styles.cardListText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.howWeEngage} id="how-we-engage" aria-label="How We Engage">
        <div className={styles.howWeEngageInner}>
          <header className={styles.howWeEngageHeader}>
            <h2 className={styles.howWeEngageTitle}>How We Engage</h2>
            <p className={styles.howWeEngageSubtitle}>
              A structured approach to ensure alignment, clarity, and successful outcomes
            </p>
          </header>

          <ol className={styles.howWeEngageGrid}>
            {howWeEngageSteps.map(({ title, body }, idx) => (
              <li key={title} className={styles.howWeEngageStep}>
                <span className={styles.howWeEngageBadge} aria-hidden>{idx + 1}</span>
                <h3 className={styles.howWeEngageStepTitle}>{title}</h3>
                <p className={styles.howWeEngageStepBody}>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.cta} id="discuss-project" aria-label="Ready to discuss your project">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to Discuss Your Project?</h2>
          <p className={styles.ctaBody}>
            Let&rsquo;s explore which engagement model best fits your innovation objectives
          </p>
          <a href="/#contact" className={styles.ctaButton}>
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
