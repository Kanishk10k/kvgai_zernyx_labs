import lifePhoto from '../../assets/life-at-zernyx.png'
import styles from './LifeAtZernyx.module.css'

export default function LifeAtZernyx() {
  return (
    <section id="top" className={styles.section} aria-label="Life at Zernyx">
      <img
        src={lifePhoto}
        alt="Scientists working in a Zernyx Labs research facility"
        className={styles.image}
        loading="lazy"
      />
    </section>
  )
}
