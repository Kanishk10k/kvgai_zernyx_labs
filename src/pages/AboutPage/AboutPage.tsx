import { FiX } from 'react-icons/fi'
import styles from './AboutPage.module.css'
import heroImage from '../../assets/life-at-zernyx.png'
import operPhiloImg1 from '../../assets/oper-philosophy-1.png'
import operPhiloImg2 from '../../assets/oper-philosophy-2.png'
import operPhiloImg3 from '../../assets/oper-philosophy-3.png'
import howWeOperateImage from '../../assets/how-we-operate.png'
import howWeOperateIcon1 from '../../assets/howweoperate-icon-1.svg'
import howWeOperateIcon2 from '../../assets/howweoperate-icon-2.svg'
import howWeOperateIcon3 from '../../assets/howweoperate-icon-3.svg'

const howWeOperateItems = [
  {
    icon: howWeOperateIcon1,
    title: 'De-Risk Science with Structured Rigor',
    body: 'We apply disciplined experimental design and analytical validation to reduce uncertainty.',
  },
  {
    icon: howWeOperateIcon2,
    title: 'Bridge Research & Development',
    body: 'We operate at the interface of discovery, formulation, and development readiness.',
  },
  {
    icon: howWeOperateIcon3,
    title: 'Support the Full Development Lifecycle',
    body: 'From early feasibility to pilot-scale validation and translational support.',
  },
  {
    icon: howWeOperateIcon3,
    title: 'Operate as a Scientific Partner',
    body: 'We align milestones, timelines, and technical objectives with our partners.',
  },
  {
    icon: howWeOperateIcon3,
    title: 'Maintain Confidentiality & Integrity',
    body: 'We handle sensitive data, formulations, and IP with enterprise-grade governance.',
  },
]

const boundaryItems = [
  'We do not operate as a transaction-only CRO or intermediary',
  'We do not replace internal R&D teams as low-cost outsourcing',
  'We do not overstate readiness or inflate outcomes',
  'We do not engage without scientific and development rationale',
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="about-hero" aria-label="About Zernyx Labs">
        <img src={heroImage} alt="" className={styles.heroImage} />
      </section>

      <section className={styles.whoWeAre} id="who-we-are">
        <div className={styles.whoWeAreInner}>
          <h2 className={styles.whoWeAreTitle}>Who We Are</h2>
          <p className={styles.whoWeAreBody}>
            Zernyx Labs was founded to address a persistent gap in life-science innovation—where promising research often fails to translate into validated, development-ready outcomes.
            <br />
            We integrate formulation science, analytical rigor, and structured experimentation to move technologies beyond uncertainty and toward confident execution.
          </p>
        </div>
      </section>

      <section className={styles.visionMission} id="vision-mission">
        <div className={styles.visionMissionCard}>
          <div className={styles.vmBlock}>
            <h3 className={styles.vmTitle}>Our Vision</h3>
            <p className={styles.vmBody}>
              To be a globally trusted life-sciences R&amp;D partner enabling reliable, validation-driven innovation across pharmaceutical, cosmeceutical, and nutraceutical domains.
            </p>
          </div>
          <div className={styles.vmBlock}>
            <h3 className={styles.vmTitle}>Our Mission</h3>
            <p className={styles.vmBody}>
              To systematically de-risk life-science technologies through rigorous experimentation, reproducible data, and execution-focused scientific collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.operPhilo} id="operating-philosophy">
        <div className={styles.operPhiloInner}>
          <h2 className={styles.operPhiloTitle}>Our Operating Philosophy</h2>
          <p className={styles.operPhiloBody}>
            Zernyx Labs is built for execution-oriented science—where experimental rigor, data integrity, and translational intent intersect. We engage selectively, operate with clarity, and focus on outcomes that are technically sound, reproducible, and development-ready.
          </p>
          <div className={styles.operPhiloGrid}>
            <div className={styles.operPhiloLeftCol}>
              <div className={`${styles.operPhiloCard} ${styles.operPhiloCardShort}`}>
                <img src={operPhiloImg1} alt="" className={styles.operPhiloImage} />
              </div>
              <div className={`${styles.operPhiloCard} ${styles.operPhiloCardTall}`}>
                <img src={operPhiloImg2} alt="" className={styles.operPhiloImage} />
              </div>
            </div>
            <div className={`${styles.operPhiloCard} ${styles.operPhiloCardRight}`}>
              <img src={operPhiloImg3} alt="" className={styles.operPhiloImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howWeOperate} id="how-we-operate">
        <div className={styles.howWeOperateInner}>
          <h2 className={styles.howWeOperateTitle}>How We Operate</h2>
          <div className={styles.howWeOperateGrid}>
            <ul className={styles.howWeOperateList}>
              {howWeOperateItems.map(({ icon, title, body }) => (
                <li key={title} className={styles.howWeOperateItem}>
                  <img src={icon} alt="" className={styles.howWeOperateIcon} aria-hidden="true" />
                  <div className={styles.howWeOperateText}>
                    <h3 className={styles.howWeOperateItemTitle}>{title}</h3>
                    <p className={styles.howWeOperateItemBody}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.howWeOperateImageWrap}>
              <img src={howWeOperateImage} alt="" className={styles.howWeOperateImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.boundaries} id="our-boundaries">
        <div className={styles.boundariesInner}>
          <h2 className={styles.boundariesTitle}>Our Boundaries</h2>
          <div className={styles.boundariesCard}>
            <ul className={styles.boundariesList}>
              {boundaryItems.map((text) => (
                <li key={text} className={styles.boundariesItem}>
                  <span className={styles.boundariesIconWrap} aria-hidden="true">
                    <FiX className={styles.boundariesIcon} />
                  </span>
                  <p className={styles.boundariesItemText}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
