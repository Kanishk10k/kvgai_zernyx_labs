import { FiSearch } from 'react-icons/fi'
import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section id="mission" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.pill}>We&rsquo;re Hiring!</span>
          <h2 className={styles.title}>Be part of our mission</h2>
          <p className={styles.subtitle}>
            We&rsquo;re looking for passionate people to join us to accelerate
            innovation and make meaningful impact across industries
          </p>
        </header>

        <div className={styles.searchRow}>
          <div className={styles.searchWrap}>
            <FiSearch className={styles.searchIcon} aria-hidden />
            <input
              type="search"
              placeholder="Search"
              className={styles.search}
              aria-label="Search job openings"
            />
          </div>
          <span className={styles.results}>Available results: 0</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.empty}>No Job openings found</div>

        <div className={styles.divider} />
      </div>
    </section>
  )
}
