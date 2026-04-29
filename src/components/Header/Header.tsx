import { Link } from 'react-router-dom'
import Logo from '../Logo'
import styles from './Header.module.css'

type NavItem = {
  label: string
  to: string
  active?: boolean
  variant?: 'aboutUs'
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/', active: true },
  { label: 'About Us', to: '/about', variant: 'aboutUs' },
  { label: 'Our Solutions', to: '/#core-verticals' },
  { label: 'Zernyx', to: '/#about' },
  { label: 'Zernyx Hub', to: '/#integrated-approach' },
  { label: 'Our Products', to: '/#core-verticals' },
  { label: 'FAQs', to: '/#mission' },
  { label: 'Get In Touch', to: '/#contact' },
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
                <Link
                  to={item.to}
                  className={[
                    styles.navLink,
                    item.active ? styles.active : '',
                    item.variant ? styles[item.variant] : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
