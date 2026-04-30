import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'
import styles from './Header.module.css'

type NavItem = {
  label: string
  to: string
  variant?: 'aboutUs'
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about', variant: 'aboutUs' },
  { label: 'Our Solutions', to: '/#core-verticals' },
  { label: 'Zernyx', to: '/#about' },
  { label: 'Zernyx Hub', to: '/#integrated-approach' },
  { label: 'Our Products', to: '/#core-verticals' },
  { label: 'FAQs', to: '/#mission' },
  { label: 'Get In Touch', to: '/#contact' },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo size={30} className={styles.logo} />
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive = !item.to.includes('#') && item.to === pathname
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      styles.navLink,
                      isActive ? styles.active : '',
                      item.variant ? styles[item.variant] : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
