import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.placeholder} id="about-hero">
        <div className={`container ${styles.placeholderInner}`}>
          <span className={styles.eyebrow}>About Zernyx Labs</span>
          <h1 className={styles.title}>About Us</h1>
        </div>
      </section>
    </div>
  )
}
