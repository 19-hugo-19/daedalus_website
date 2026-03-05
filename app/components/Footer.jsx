import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>DAEDALUS</div>
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
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Email</a></li>
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
        <div className={styles.made}>Soaring with Icarus</div>
      </div>
    </footer>
  )
}