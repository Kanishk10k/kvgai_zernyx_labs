import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import Logo from '../Logo'
import styles from './Footer.module.css'

const linkColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'Our Core Verticals', href: '#core-verticals' },
      { label: 'What Sets Us Apart', href: '#integrated-approach' },
      { label: 'FAQs', href: '#mission' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Get In Touch', href: '#contact' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'IP Disclaimer', href: '#' },
    ],
  },
  {
    title: 'Our Products',
    links: [
      { label: 'Zernyx Labs', href: '#' },
      { label: 'Zernyx Hub', href: '#' },
      { label: 'TRL Calculator', href: '#' },
      { label: 'i-Office', href: '#' },
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
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
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
