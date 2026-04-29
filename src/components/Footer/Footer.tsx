import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import Logo from '../Logo'
import styles from './Footer.module.css'

const linkColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Our Core Verticals', to: '/#core-verticals' },
      { label: 'What Sets Us Apart', to: '/#integrated-approach' },
      { label: 'FAQs', to: '/#mission' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Get In Touch', to: '/#contact' },
      { label: 'Terms of Use', to: '#' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'IP Disclaimer', to: '#' },
    ],
  },
  {
    title: 'Our Products',
    links: [
      { label: 'Zernyx Labs', to: '#' },
      { label: 'Zernyx Hub', to: '#' },
      { label: 'TRL Calculator', to: '#' },
      { label: 'i-Office', to: '#' },
    ],
  },
]

const socials = [
  { Icon: FaFacebookF, label: 'Facebook', href: '#' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaXTwitter, label: 'X', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo size={28} className={styles.logo} />
            <p className={styles.tagline}>
              Connecting technology to the world though out innovative
              marketplace for licensing, innovation scouting, and IP
              commercialization.
            </p>
            <ul className={styles.socials}>
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.socialLink}
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {linkColumns.map((col) => (
            <nav key={col.title} className={styles.column} aria-label={col.title}>
              <h3 className={styles.columnTitle}>{col.title}</h3>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.divider} />
        <p className={styles.copyright}>
          &copy; 2025 ZERNYX. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
