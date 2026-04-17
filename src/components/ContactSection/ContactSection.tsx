import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import styles from './ContactSection.module.css'

const contactDetails = [
  { Icon: FiMail, text: 'Contact@Zernyx.com' },
  { Icon: FiPhone, text: '+91 9703 444 560 / 51 / 53' },
  {
    Icon: FiMapPin,
    text: 'E-114, First floor, Phase 7, Industrial Focal Point, S.A.S Nagar, Mohali - 160055',
  },
]

const orbitAvatars = [
  { initials: 'AK', x: '14%', y: '12%', orbit: 0 },
  { initials: 'JM', x: '78%', y: '18%', orbit: 1 },
  { initials: 'SR', x: '6%', y: '52%', orbit: 2 },
  { initials: 'PD', x: '70%', y: '60%', orbit: 1 },
  { initials: 'LC', x: '20%', y: '82%', orbit: 2 },
  { initials: 'MV', x: '60%', y: '88%', orbit: 0 },
]

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgPattern} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.card}>
          <aside className={styles.sidePanel}>
            <div className={styles.orbitWrap} aria-hidden>
              <div className={`${styles.orbit} ${styles.orbit1}`} />
              <div className={`${styles.orbit} ${styles.orbit2}`} />
              <div className={`${styles.orbit} ${styles.orbit3}`} />
              <div className={styles.center} />
              {orbitAvatars.map((a, i) => (
                <div
                  key={i}
                  className={styles.avatar}
                  style={{ left: a.x, top: a.y }}
                >
                  <span>{a.initials}</span>
                </div>
              ))}
            </div>

            <ul className={styles.contactList}>
              {contactDetails.map(({ Icon, text }) => (
                <li key={text} className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden>
                    <Icon size={16} />
                  </span>
                  <span className={styles.contactText}>{text}</span>
                </li>
              ))}
            </ul>
          </aside>

          <form
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            <h2 className={styles.title}>Get in Touch</h2>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>
                  Name <span className={styles.required}>*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </span>
                <input
                  type="email"
                  placeholder="Your@gmail.com"
                  className={styles.input}
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Phone</span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className={styles.input}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Company</span>
                <input
                  type="text"
                  placeholder="Company name"
                  className={styles.input}
                />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>
                Subject <span className={styles.required}>*</span>
              </span>
              <input
                type="text"
                placeholder="Your subject"
                className={styles.input}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Message <span className={styles.required}>*</span>
              </span>
              <textarea
                placeholder="Tell us about your technology or requirements..."
                className={styles.textarea}
                rows={4}
              />
            </label>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submit}>
                <FiSend aria-hidden size={16} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
