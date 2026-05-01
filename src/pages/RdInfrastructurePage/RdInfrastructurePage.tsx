import { FiCheckCircle } from 'react-icons/fi'
import styles from './RdInfrastructurePage.module.css'
import purposeBuiltIcon from '../../assets/rd-purpose-built-icon.svg'
import purposeBuiltImage from '../../assets/rd-purpose-built-image.svg'
import coreCapabIcon1 from '../../assets/rd-core-capab-icon1.svg'
import coreCapabIcon2 from '../../assets/rd-core-capab-icon2.svg'
import coreCapabIcon3 from '../../assets/rd-core-capab-icon3.svg'
import designPhilIcon1 from '../../assets/rd-design-phil-icon1.svg'
import designPhilIcon2 from '../../assets/rd-design-phil-icon2.svg'
import designPhilIcon3 from '../../assets/rd-design-phil-icon3.svg'
import heroImage from '../../assets/rd-hero-image.svg'

const coreCapabilities = [
  {
    icon: coreCapabIcon1,
    title: 'Formulation & Development Laboratories',
    items: [
      'Pharmaceutical and nutraceutical formulation',
      'Advanced topical and oral delivery systems',
      'Prototype-scale batch preparation',
    ],
  },
  {
    icon: coreCapabIcon2,
    title: 'Analytical & Characterization Support',
    items: [
      'Physicochemical characterization',
      'Stability and performance studies',
      'Comparative benchmarking',
    ],
  },
  {
    icon: coreCapabIcon3,
    title: 'Pilot-Scale & Translational Research',
    items: [
      'Process optimization',
      'Reproducibility and robustness assessment',
      'Data generation for partnering and investment',
    ],
  },
]

const supportedDomains = [
  {
    title: 'Pharmaceuticals & Advanced Drug Delivery',
    body: 'Novel formulations and delivery systems',
  },
  {
    title: 'Biotechnology & Novel Therapeutics',
    body: 'Biological innovation and validation',
  },
  {
    title: 'Nutraceuticals & Functional Products',
    body: 'Science-backed nutrition solutions',
  },
  {
    title: 'Cosmeceuticals & Advanced Cosmetics',
    body: 'Performance-driven cosmetic innovation',
  },
]

const designPhilosophy = [
  {
    icon: designPhilIcon1,
    title: 'Modular Lab Layouts',
    body: 'Enabling parallel projects and efficient resource utilization',
  },
  {
    icon: designPhilIcon2,
    title: 'Quality-Aligned Practices',
    body: 'Rigorous documentation and data integrity protocols',
  },
  {
    icon: designPhilIcon3,
    title: 'Flexible Infrastructure',
    body: 'Adaptable across product categories and development stages',
  },
]

export default function RdInfrastructurePage() {
  return (
    <div className={styles.page}>
      <section className={styles.purposeBuilt} id="purpose-built" aria-label="Purpose-Built R&D Infrastructure">
        <div className={styles.purposeBuiltInner}>
          <div className={styles.purposeBuiltText}>
            <img
              src={purposeBuiltIcon}
              alt=""
              aria-hidden
              className={styles.purposeBuiltIcon}
            />
            <h2 className={styles.purposeBuiltTitle}>
              Purpose-Built<br />R&amp;D Infrastructure
            </h2>
            <p className={styles.purposeBuiltBody}>
              Zernyx Labs operates multidisciplinary laboratory and pilot-scale
              infrastructure designed to support early- to mid-stage life-science
              validation, formulation development, and translational research.
            </p>
            <p className={styles.purposeBuiltBody}>
              Our facilities enable speed, scientific rigor, and scalability —
              supporting confident progression from concept to proof and pilot.
            </p>
          </div>
          <div className={styles.purposeBuiltImageWrap}>
            <img
              src={purposeBuiltImage}
              alt="Zernyx Labs laboratory infrastructure"
              className={styles.purposeBuiltImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.coreCapab} id="core-capabilities" aria-label="Core Capabilities">
        <div className={styles.coreCapabInner}>
          <header className={styles.coreCapabHeader}>
            <h2 className={styles.coreCapabTitle}>Core Capabilities</h2>
            <p className={styles.coreCapabSubtitle}>
              Comprehensive infrastructure supporting the full innovation lifecycle
            </p>
          </header>

          <div className={styles.coreCapabGrid}>
            {coreCapabilities.map(({ icon, title, items }) => (
              <article key={title} className={styles.coreCapabCard}>
                <img
                  src={icon}
                  alt=""
                  aria-hidden
                  className={styles.coreCapabCardIcon}
                />
                <h3 className={styles.coreCapabCardTitle}>{title}</h3>
                <ul className={styles.coreCapabList}>
                  {items.map((item) => (
                    <li key={item} className={styles.coreCapabListItem}>
                      <FiCheckCircle
                        className={styles.coreCapabCheck}
                        aria-hidden
                      />
                      <span className={styles.coreCapabListText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.designPhil} id="design-philosophy" aria-label="Design Philosophy">
        <div className={styles.designPhilInner}>
          <header className={styles.designPhilHeader}>
            <h2 className={styles.designPhilTitle}>Design Philosophy</h2>
            <p className={styles.designPhilSubtitle}>
              Infrastructure designed for flexibility, quality, and scalability
            </p>
          </header>

          <div className={styles.designPhilGrid}>
            {designPhilosophy.map(({ icon, title, body }) => (
              <article key={title} className={styles.designPhilCard}>
                <img
                  src={icon}
                  alt=""
                  aria-hidden
                  className={styles.designPhilIcon}
                />
                <h3 className={styles.designPhilCardTitle}>{title}</h3>
                <p className={styles.designPhilCardBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.heroBanner} id="rd-hero-banner" aria-label="R&D Infrastructure showcase">
        <div className={styles.heroBannerInner}>
          <img
            src={heroImage}
            alt="Zernyx Labs R&D infrastructure showcase"
            className={styles.heroBannerImage}
          />
        </div>
      </section>

      <section className={styles.suppDomain} id="supported-domains" aria-label="Supported Domains">
        <div className={styles.suppDomainInner}>
          <header className={styles.suppDomainHeader}>
            <h2 className={styles.suppDomainTitle}>Supported Domains</h2>
            <p className={styles.suppDomainSubtitle}>
              Comprehensive capabilities across multiple life-science sectors
            </p>
          </header>

          <div className={styles.suppDomainGrid}>
            {supportedDomains.map(({ title, body }) => (
              <article key={title} className={styles.suppDomainCard}>
                <h3 className={styles.suppDomainCardTitle}>{title}</h3>
                <p className={styles.suppDomainCardBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.footerGap} aria-hidden />
    </div>
  )
}
