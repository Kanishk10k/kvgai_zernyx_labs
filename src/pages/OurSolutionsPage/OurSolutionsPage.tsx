import type { JSX } from 'react'
import styles from './OurSolutionsPage.module.css'
import heroImage from '../../assets/solutions-hero.svg'
import processImage from '../../assets/our-process.svg'
import rdIcon1 from '../../assets/solutions-res-dev-1.svg'
import rdIcon2 from '../../assets/solutions-res-dev-2.svg'
import rdIcon3 from '../../assets/solutions-res-dev-3.svg'
import rdIcon4 from '../../assets/solutions-res-dev-4.svg'
import rdIcon5 from '../../assets/solutions-res-dev-5.svg'
import rdIcon6 from '../../assets/solutions-res-dev-6.svg'
import indIcon1 from '../../assets/solutions-ind-serv-1.svg'
import indIcon2 from '../../assets/solutions-ind-serv-2.svg'
import indIcon3 from '../../assets/solutions-ind-serv-3.svg'
import indIcon4 from '../../assets/solutions-ind-serv-4.svg'
import pipelineIcon1 from '../../assets/solutions-pipeline-1.svg'
import pipelineIcon2 from '../../assets/solutions-pipeline-2.svg'
import pipelineIcon3 from '../../assets/solutions-pipeline-3.svg'
import pipelineIcon4 from '../../assets/solutions-pipeline-4.svg'
import pipelineIcon5 from '../../assets/solutions-pipeline-5.svg'
import pipelineArrow from '../../assets/solutions-pipeline-arrow.png'

type ProcessStep = {
  title: string
  description: string
}

type PipelineStage = {
  label: string
  icon: string
}

type PipelineColumn = {
  heading: string
  body: JSX.Element
}

const pipelineStages: PipelineStage[] = [
  { label: 'Proof-of-Concept TRL 3/4', icon: pipelineIcon1 },
  { label: 'Platform Technologies', icon: pipelineIcon2 },
  { label: 'Active R&D Products TRL 3/5', icon: pipelineIcon3 },
  { label: 'Near-Market Innovations TRL 7/8', icon: pipelineIcon4 },
  { label: 'Commercial Products TRL 9', icon: pipelineIcon5 },
]

const pipelineColumns: PipelineColumn[] = [
  {
    heading: 'Advanced Biotherapeutics',
    body: (
      <ul>
        <li>mRNA Therapeutics</li>
        <li>Peptide and Protein Delivery</li>
        <li>CRISPR-Cas Therapeutics</li>
      </ul>
    ),
  },
  {
    heading: 'Genetic & Molecular Delivery Systems',
    body: (
      <ul>
        <li>Cationic Polymer and Lipids for gene delivery</li>
        <li>Lipopolymeric Nanoplexes for mRNA, pDNA, CRISPR-Cas9 Protein</li>
      </ul>
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
        <p className="agSub">Caffeinated Buccal Spray</p>
        <ul>
          <li>Pilot stage &amp; validation (Mistify.co.in)</li>
        </ul>
        <p className="agSub">Better Sweet</p>
        <ul>
          <li>All natural sweetner with zero glycemic impact</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Commercial Products (> 20 products)',
    body: (
      <>
        <p className="agSub">Dermatology &amp; Skincare</p>
        <ul>
          <li>Copper Glow Moisturizer (Copper Tripeptide-1 &amp; Alpha Arbutin)</li>
          <li>Deep Hydration Gel (HA5 Matrix - Hyaluronic Acid 2%)</li>
          <li>Peptide Brightening Cream (Niacinamide 2% &amp; Nonapeptide-1)</li>
          <li>Brand: in.skin (Multiple SKUs at inskin.in)</li>
        </ul>
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
  icon: string
}

type IndustryCard = {
  title: string
  description: string
  iconBg: string
  icon: string
}

const industryCards: IndustryCard[] = [
  {
    title: 'Pharmaceuticals',
    description: 'Drug development and delivery systems',
    iconBg: 'linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)',
    icon: indIcon1,
  },
  {
    title: 'Biotechnology',
    description: 'Novel biological therapeutics',
    iconBg: 'linear-gradient(135deg, #DCFCE7 0%, #F0FDF4 100%)',
    icon: indIcon2,
  },
  {
    title: 'Cosmeceuticals',
    description: 'Advanced cosmetic formulations',
    iconBg: 'linear-gradient(135deg, #F3E8FF 0%, #FAF5FF 100%)',
    icon: indIcon3,
  },
  {
    title: 'Nutraceuticals',
    description: 'Functional nutrition products',
    iconBg: 'linear-gradient(135deg, #FFEDD4 0%, #FFF7ED 100%)',
    icon: indIcon4,
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
    icon: rdIcon1,
  },
  {
    title: 'MVP & Prototype Development',
    items: [
      'Proof of Concept (PoC) studies',
      'Iterative formulation optimization',
      'Performance benchmarking',
    ],
    icon: rdIcon2,
  },
  {
    title: 'Formulation Research',
    items: [
      'Novel drug delivery systems',
      'Advanced topical and oral formulations',
      'Stability and performance optimization',
    ],
    icon: rdIcon3,
  },
  {
    title: 'Reverse Engineering',
    items: [
      'Benchmarking of existing products',
      'Composition and process analysis',
      'Performance improvement strategies',
    ],
    icon: rdIcon4,
  },
  {
    title: 'In Vitro Cell Culture-Based Testing',
    items: [
      'Standardised assays across human cell lines',
      'Cytotoxicity, anti-inflammatory, and antioxidant profiling',
      'Wound healing for efficacy and safety validation',
    ],
    icon: rdIcon5,
  },
  {
    title: 'Go-to Market Strategy',
    items: [
      'Target market identification & positioning',
      'Channel and partnership strategy',
      'Launch planning & commercialization roadmap',
    ],
    icon: rdIcon6,
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
                <div className={styles.rdIconBox}><img src={card.icon} alt="" aria-hidden /></div>
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
                  <img src={card.icon} alt="" aria-hidden />
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
              A comprehensive portfolio spanning commercial products, near-market innovations, active R&amp;D programs,<br />
              platform technologies, and early stage research.
            </p>
          </header>

          <div className={styles.pipelineStages}>
            {pipelineStages.map((stage, index) => (
              <div key={stage.label} className={styles.pipelineStage}>
                <div className={styles.pipelineStageIcon}>
                  <img src={stage.icon} alt="" aria-hidden />
                </div>
                <p className={styles.pipelineStageLabel}>{stage.label}</p>
                {index < pipelineStages.length - 1 && (
                  <img
                    src={pipelineArrow}
                    alt=""
                    aria-hidden
                    className={styles.pipelineConnector}
                  />
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
