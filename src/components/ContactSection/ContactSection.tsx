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
  { src: '/orb_image_1.jpg', x: '9%', y: '21%', size: 56, focus: '50% 18%' },
  { src: '/orb_image_2.jpg', x: '43%', y: '11%', size: 32, focus: '50% 22%' },
  { src: '/orb_image_3.jpg', x: '20%', y: '50%', size: 44, focus: '60% 22%' },
  { src: '/orb_image_4.jpg', x: '43%', y: '69%', size: 50, focus: '50% 20%' },
  { src: '/orb_image_5.jpg', x: '18%', y: '88%', size: 38, focus: '62% 28%' },
  { src: '/orb_image_6.jpg', x: '50%', y: '90%', size: 42, focus: '50% 18%' },
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
              <div className={`${styles.orbit} ${styles.orbit4}`} />
              <div className={`${styles.orbit} ${styles.orbit5}`} />
              <div className={styles.center} />
              {orbitAvatars.map((a, i) => (
                <img
                  key={i}
                  src={a.src}
                  alt=""
                  className={styles.avatar}
                  style={{
                    left: a.x,
                    top: a.y,
                    width: a.size,
                    height: a.size,
                    objectPosition: a.focus,
                  }}
                />
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
