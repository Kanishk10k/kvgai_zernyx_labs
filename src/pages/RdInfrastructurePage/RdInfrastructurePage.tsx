import styles from './RdInfrastructurePage.module.css'

export default function RdInfrastructurePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="rd-hero" aria-label="R&D Infrastructure">
        <div className={styles.inner}>
          <h1 className={styles.heroTitle}>R&amp;D Infrastructure</h1>
          <p className={styles.heroBody}>
            Purpose-built laboratories, instrumentation, and process platforms
            engineered to advance life-science innovation from discovery to
            development-ready outcomes.
          </p>
        </div>
      </section>

      <section className={styles.section} id="rd-overview">
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionBody}>
            {/* TODO: replace with content from Figma reference */}
            Placeholder content. The infrastructure overview, capabilities, and
            equipment details will be populated from the design reference.
          </p>
        </div>
      </section>

      <section className={styles.section} id="rd-capabilities">
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Capabilities</h2>
          <p className={styles.sectionBody}>
            {/* TODO: replace with content from Figma reference */}
            Placeholder content. A grid of core capabilities will go here once
            the design reference is provided.
          </p>
        </div>
      </section>
    </div>
  )
}
