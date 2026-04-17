import Logo from '../Logo'
import styles from './Header.module.css'

const navItems = [
  { label: 'Home', href: '#top', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Our Solutions', href: '#core-verticals' },
  { label: 'Zernyx', href: '#about' },
  { label: 'Zernyx Hub', href: '#integrated-approach' },
  { label: 'Our Products', href: '#core-verticals' },
  { label: 'FAQs', href: '#mission' },
  { label: 'Get In Touch', href: '#contact' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo size={30} className={styles.logo} />
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${item.active ? styles.active : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
