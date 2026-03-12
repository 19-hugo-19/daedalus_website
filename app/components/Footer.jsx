import styles from './Footer.module.css'
import DaedalusLogo from './DaedalusLogo'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <DaedalusLogo className={styles.logo} />
          <div className={styles.tagline}>Crafting the web, simply.</div>
        </div>
        <div>
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>
            <li><a href="#services">The Blueprint</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Get a Proposal</a></li>
          </ul>
        </div>
        <div>
          <div className={styles.colTitle}>Connect</div>
          <ul className={styles.links}>
            <li><a href="/about">GitHub</a></li>
            <li><a href="/about">LinkedIn</a></li>
            <li><a href="/about">Email</a></li>
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
        <div className={styles.copy}>© 2026 Daedalus. All rights reserved.</div>
        <div className={styles.made}>Architecture of endless possibility</div>
      </div>
    </footer>
  )
}