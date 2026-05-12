import styles from './OurSolutionsPage.module.css'
import heroImage from '../../assets/solutions-hero.svg'
import processImage from '../../assets/our-process.svg'

type ProcessStep = {
  title: string
  description: string
}

type PipelineStage = {
  label: string
  icon: JSX.Element
}

type PipelineColumn = {
  heading: string
  body: JSX.Element
}

const pipelineStages: PipelineStage[] = [
  {
    label: 'Proof-of-Concept TRL 3/4',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M8.66667 6.5H17.3333C17.3333 5.34921 16.4174 4.41667 15.2667 4.41667H10.7333C9.58258 4.41667 8.66667 5.34921 8.66667 6.5Z" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.16667 6.5H23.8333V19.5C23.8333 20.7887 22.7887 21.8333 21.5 21.8333H4.5C3.21134 21.8333 2.16667 20.7887 2.16667 19.5V6.5Z" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 13H15" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Platform Technologies',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4.33334 4.33334H21.6667V14.5H4.33334V4.33334Z" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 21.6667H16.25" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 14.5V21.6667" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Active R&D Products TRL 3/5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M2.16667 2.16667H23.8333V23.8333H2.16667V2.16667Z" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.58334 9.75L9.75 11.9167L13 8.66667" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.58334 17.3333L9.75 19.5L13 16.25" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.1667 10.8333H19.5" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.1667 18.4167H19.5" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Near-Market Innovations TRL 7/8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="6.5" cy="13" r="2.16667" stroke="#009293" strokeWidth="1.5"/>
        <circle cx="19.5" cy="6.5" r="2.16667" stroke="#009293" strokeWidth="1.5"/>
        <circle cx="19.5" cy="13" r="2.16667" stroke="#009293" strokeWidth="1.5"/>
        <circle cx="19.5" cy="19.5" r="2.16667" stroke="#009293" strokeWidth="1.5"/>
        <path d="M8.66667 13H17.3333" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.9167 8.66667L17.3333 6.5" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Commercial Products TRL 9',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M15.0583 2.34167L4.78333 13.0167C4.39167 13.4242 4.0125 14.2233 3.93417 14.7833L3.45 19.0167C3.27667 20.5483 4.37583 21.5933 5.89917 21.3317L10.1067 20.6133C10.6667 20.5133 11.4417 20.1067 11.8333 19.6992L22.1083 9.02417C23.8842 7.18 24.6833 5.07833 21.9217 2.46667C19.1717 -0.119167 17.1183 0.498333 15.0583 2.34167Z" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3867 4.09167C14.2433 6.83 16.3733 8.96 19.1233 9.82833" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.25 23.8333H22.75" stroke="#009293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const pipelineColumns: PipelineColumn[] = [
  {
    heading: 'Advanced Biotherapeutics',
    body: (
      <>
        <p>mRNA Therapeutics</p>
        <p>Peptide and Protein Delivery</p>
        <p>CRISPR-Cas Therapeutics</p>
      </>
    ),
  },
  {
    heading: 'Genetic & Molecular Delivery Systems',
    body: (
      <>
        <p>Cationic Polymer and Lipids for gene delivery</p>
        <p>Lipopolymeric Nanoplexes for mRNA, pDNA, CRISPR-Cas9 Protein</p>
      </>
    ),
  },
  {
    heading: 'Pharmaceutical & Nutraceutical',
    body: (
      <>
        <ul>
          <li>Pharmaceutical Gummies</li>
          <li>Ferrous Nanoparticles for Anaemia</li>
          <li>Microbiome Therapeutics</li>
        </ul>
        <p className="agSub">Agricultural Technologies</p>
        <ul>
          <li>Copper Nanoparticles</li>
          <li>Copper Nanoparticle Granules</li>
          <li>Fulvic Acid Solid Granules</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Functional Oral Delivery',
    body: (
      <>
        <p>
          <strong>Caffeinated Buccal Spray</strong>
        </p>
        <p>Pilot stage &amp; validation (Mistify.co.in)</p>
        <p>
          <strong>Better Sweet</strong>
        </p>
        <p>All natural sweetner with zero glycemic impact</p>
      </>
    ),
  },
  {
    heading: 'Commercial Products (> 20 products)',
    body: (
      <>
        <p>
          <strong>Dermatology &amp; Skincare</strong>
        </p>
        <p>Copper Glow Moisturizer (Copper Tripeptide-1 &amp; Alpha Arbutin)</p>
        <p>Deep Hydration Gel (HA5 Matrix - Hyaluronic Acid 2%)</p>
        <p>Peptide Brightening Cream (Niacinamide 2% &amp; Nonapeptide-1)</p>
        <p>Brand: in.skin (Multiple SKUs at inskin.in)</p>
      </>
    ),
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Initial Assessment',
    description:
      'Comprehensive evaluation of your technology, objectives, and constraints',
  },
  {
    title: 'Strategic Planning',
    description:
      'Developing a structured roadmap with clear milestones and deliverables',
  },
  {
    title: 'Experimental Execution',
    description:
      'Rigorous laboratory work with ongoing data analysis and optimization',
  },
  {
    title: 'Validation & Reporting',
    description:
      'Comprehensive documentation with actionable insights and recommendations',
  },
]

type RDCard = {
  title: string
  items: string[]
  icon: JSX.Element
}

type IndustryCard = {
  title: string
  description: string
  iconBg: string
  icon: JSX.Element
}

const ICON_STROKE = '#009293'

const industryCards: IndustryCard[] = [
  {
    title: 'Pharmaceuticals',
    description: 'Drug development and delivery systems',
    iconBg: 'linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M16.6667 5V15L8.33333 31.6667C7.75694 32.8211 8.59694 35 10 35H30C31.4031 35 32.2431 32.8211 31.6667 31.6667L23.3333 15V5" stroke="#155DFC" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3333 5H26.6667" stroke="#155DFC" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.6667 25H28.3333" stroke="#155DFC" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Biotechnology',
    description: 'Novel biological therapeutics',
    iconBg: 'linear-gradient(135deg, #DCFCE7 0%, #F0FDF4 100%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M11.6667 36.6667H28.3333" stroke="#00A63E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 36.6667H35" stroke="#00A63E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.6667 13.3333V35" stroke="#00A63E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 23.3333H21.6667" stroke="#00A63E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.6667 10V20" stroke="#00A63E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3333 3.33334H20" stroke="#00A63E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Cosmeceuticals',
    description: 'Advanced cosmetic formulations',
    iconBg: 'linear-gradient(135deg, #F3E8FF 0%, #FAF5FF 100%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20 36.6667C29.2047 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7953 29.2047 3.33334 20 3.33334C10.7953 3.33334 3.33334 10.7953 3.33334 20C3.33334 29.2047 10.7953 36.6667 20 36.6667Z" stroke="#9810FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 20C25 22.7614 22.7614 25 20 25C17.2386 25 15 22.7614 15 20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20Z" stroke="#9810FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Nutraceuticals',
    description: 'Functional nutrition products',
    iconBg: 'linear-gradient(135deg, #FFEDD4 0%, #FFF7ED 100%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3.33334 28.3333L13.3333 18.3333L20 25L36.6667 8.33334" stroke="#F54900" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.6667 8.33334H36.6667V18.3333" stroke="#F54900" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const rdCards: RDCard[] = [
  {
    title: 'Theoretical Assessment & Proof of Principle',
    items: [
      'Scientific feasibility assessment',
      'Mechanism-of-action evaluation',
      'Risk and assumption analysis',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M11.6667 3.5V10.5L5.83333 22.1667C5.42969 22.9748 6.01786 24.5 7 24.5H21C21.9821 24.5 22.5703 22.9748 22.1667 22.1667L16.3333 10.5V3.5" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.33333 3.5H18.6667" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.16667 17.5H19.8333" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'MVP & Prototype Development',
    items: [
      'Proof of Concept (PoC) studies',
      'Iterative formulation optimization',
      'Performance benchmarking',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4433 2.33334 14 2.33334C7.55668 2.33334 2.33334 7.55668 2.33334 14C2.33334 20.4433 7.55668 25.6667 14 25.6667Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 14C17.5 15.933 15.933 17.5 14 17.5C12.067 17.5 10.5 15.933 10.5 14C10.5 12.067 12.067 10.5 14 10.5C15.933 10.5 17.5 12.067 17.5 14Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Formulation Research',
    items: [
      'Novel drug delivery systems',
      'Advanced topical and oral formulations',
      'Stability and performance optimization',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4.66667 2.33334H23.3333" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.58334 2.33334V18.6667C7.58334 21.8884 10.1116 24.4167 13.3333 24.4167H14.6667C17.8884 24.4167 20.4167 21.8884 20.4167 18.6667V2.33334" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.91667 9.33334H18.0833" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Reverse Engineering',
    items: [
      'Benchmarking of existing products',
      'Composition and process analysis',
      'Performance improvement strategies',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3.5 3.5H24.5V24.5H3.5V3.5Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 10.5H17.5V19.8333" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.1667 5.83334V19.8333" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.33333 16.3333V19.8333" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'In Vitro Cell Culture-Based Testing',
    items: [
      'Standardised assays across human cell lines',
      'Cytotoxicity, anti-inflammatory, and antioxidant profiling',
      'Wound healing for efficacy and safety validation',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4433 2.33334 14 2.33334C7.55668 2.33334 2.33334 7.55668 2.33334 14C2.33334 20.4433 7.55668 25.6667 14 25.6667Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 16.3333C15.288 16.3333 16.3333 15.288 16.3333 14C16.3333 12.712 15.288 11.6667 14 11.6667C12.712 11.6667 11.6667 12.712 11.6667 14C11.6667 15.288 12.712 16.3333 14 16.3333Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Go-to Market Strategy',
    items: [
      'Target market identification & positioning',
      'Channel and partnership strategy',
      'Launch planning & commercialization roadmap',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4433 2.33334 14 2.33334C7.55668 2.33334 2.33334 7.55668 2.33334 14C2.33334 20.4433 7.55668 25.6667 14 25.6667Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 16.3333C15.288 16.3333 16.3333 15.288 16.3333 14C16.3333 12.712 15.288 11.6667 14 11.6667C12.712 11.6667 11.6667 12.712 11.6667 14C11.6667 15.288 12.712 16.3333 14 16.3333Z" stroke={ICON_STROKE} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function OurSolutionsPage() {
  return (
    <div className={styles.page}>
      <section
        id="our-solutions-hero"
        className={styles.hero}
        aria-label="Our Solutions"
      >
        <div className={styles.heroBand}>
          <img
            src={heroImage}
            alt=""
            aria-hidden
            className={styles.heroImage}
          />
        </div>
      </section>

      <section
        id="our-solutions-desc"
        className={styles.descSection}
        aria-label="Our Solutions description"
      >
        <div className={styles.descInner}>
          <h2 className={styles.descTitle}>Our Solutions</h2>
          <p className={styles.descText}>
            End-to-end R&amp;D support from theoretical feasibility to pilot-scale validation
          </p>
        </div>
      </section>

      <section
        id="research-development"
        className={styles.rdSection}
        aria-label="Research and Development"
      >
        <span className={`${styles.rdBlur} ${styles.rdBlurLeft}`} aria-hidden />
        <span className={`${styles.rdBlur} ${styles.rdBlurRight}`} aria-hidden />

        <div className={styles.rdInner}>
          <div className={styles.rdHeader}>
            <h2 className={styles.rdTitle}>Research &amp; Development</h2>
            <p className={styles.rdSubtitle}>
              Our R&amp;D vertical provides end-to-end experimental support from theoretical feasibility to pilot-scale validation
            </p>
          </div>

          <div className={styles.rdGrid}>
            {rdCards.map((card) => (
              <article key={card.title} className={styles.rdCard}>
                <div className={styles.rdIconBox}>{card.icon}</div>
                <h3 className={styles.rdCardTitle}>{card.title}</h3>
                <ul className={styles.rdList}>
                  {card.items.map((item) => (
                    <li key={item} className={styles.rdListItem}>
                      <span className={styles.rdBullet} aria-hidden>•</span>
                      <span className={styles.rdItemText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="industries-served"
        className={styles.industriesSection}
        aria-label="Industries Served"
      >
        <div className={styles.industriesPanel}>
          <div className={styles.industriesHeader}>
            <h2 className={styles.industriesTitle}>Industries Served</h2>
            <p className={styles.industriesSubtitle}>
              Comprehensive expertise across multiple life-science domains
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industryCards.map((card) => (
              <article key={card.title} className={styles.industryCard}>
                <div
                  className={styles.industryIconBox}
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>
                <h3 className={styles.industryCardTitle}>{card.title}</h3>
                <p className={styles.industryCardText}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="our-process"
        className={styles.processSection}
        aria-label="Our Process"
      >
        <div className={styles.processInner}>
          <div className={styles.processContent}>
            <h2 className={styles.processTitle}>Our Process</h2>
            <ol className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <li key={step.title} className={styles.processStep}>
                  <span className={styles.processBadge} aria-hidden>
                    {index + 1}
                  </span>
                  <div className={styles.processStepText}>
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepDesc}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.processImageWrap}>
            <img
              src={processImage}
              alt=""
              aria-hidden
              className={styles.processImage}
            />
          </div>
        </div>
      </section>

      <section
        id="zernyx-pipeline"
        className={styles.pipelineSection}
        aria-label="Zernyx Product and Innovation Pipeline"
      >
        <div className={styles.pipelineInner}>
          <header className={styles.pipelineHeader}>
            <h2 className={styles.pipelineTitle}>
              Zernyx Product &amp; Innovation Pipeline
            </h2>
            <p className={styles.pipelineSubtitle}>
              A comprehensive portfolio spanning commercial products, near-market innovations, active R&amp;D programs, platform technologies, and early stage research.
            </p>
          </header>

          <div className={styles.pipelineStages}>
            {pipelineStages.map((stage, index) => (
              <div key={stage.label} className={styles.pipelineStage}>
                <div className={styles.pipelineStageIcon}>{stage.icon}</div>
                <p className={styles.pipelineStageLabel}>{stage.label}</p>
                {index < pipelineStages.length - 1 && (
                  <span className={styles.pipelineConnector} aria-hidden />
                )}
              </div>
            ))}
          </div>

          <div className={styles.pipelineGrid}>
            {pipelineColumns.map((col) => (
              <article key={col.heading} className={styles.pipelineCard}>
                <h3 className={styles.pipelineCardTitle}>{col.heading}</h3>
                <div className={styles.pipelineCardBody}>{col.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ready-to-start"
        className={styles.ctaSection}
        aria-label="Ready to start your project"
      >
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p className={styles.ctaSubtitle}>
            Let&apos;s discuss how our solutions can accelerate your innovation journey
          </p>
          <a href="/contact-us" className={styles.ctaButton}>
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
