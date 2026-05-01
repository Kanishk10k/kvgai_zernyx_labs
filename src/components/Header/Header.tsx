import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
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
  { label: 'Our Solutions', to: '/#our-solutions' },
  { label: 'R&D Infrastructure', to: '/#rd-infrastructure' },
  { label: 'Engagement Models', to: '/#engagement-models' },
  { label: 'Our Products', to: '/#our-products' },
  { label: 'Get In Touch', to: '/#get-in-touch' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo size={30} className={styles.logo} />

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
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
