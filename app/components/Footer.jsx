import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>ICARUS</div>
          <div className={styles.tagline}>Currently Soaring.</div>
        </div>
        <div>
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <div className={styles.colTitle}>Connect</div>
          <ul className={styles.links}>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div>
          <div className={styles.colTitle}>Legal</div>
          <ul className={styles.links}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copy}>© 2026 Icarus. All rights reserved.</div>
        <div className={styles.made}>Made with <span>✦</span> and caffeine</div>
      </div>
    </footer>
  )
}