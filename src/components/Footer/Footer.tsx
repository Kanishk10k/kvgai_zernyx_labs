import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import Logo from '../Logo'
import styles from './Footer.module.css'

const linkColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Our Solutions', to: '/#our-solutions' },
      { label: 'R&D Infrastructure', to: '/rd-infrastructure' },
      { label: 'Engagement Models', to: '/engagement-models' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Get In Touch', to: '/#contact' },
      { label: 'Terms of Use', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'IP Disclaimer', to: '/ip-disclaimer' },
    ],
  },
  {
    title: 'Our Products',
    links: [
      { label: 'Zernyx Hub', to: '/#zernyx-hub' },
      { label: 'TRL Calculator', to: '/#trl-calculator' },
      { label: 'i-Office', to: '/#i-office' },
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
            <Logo size={30} className={styles.logo} />
            <p className={styles.tagline}>
              Advancing life-science technologies through structured validation,
              formulation science, and development-ready execution.
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
          &copy; 2026 ZERNYX INNOVATIONS PRIVATE LIMITED. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
