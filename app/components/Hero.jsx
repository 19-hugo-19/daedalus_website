import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.tag}>// The Craftsman&apos;s Workshop</div>
      <h1 className={styles.title}>TINKERING,<br />WITH THE WEB.</h1>
      <p className={styles.sub}>
        Simple, affordable websites for small businesses.<br />
        Delivered in 4 weeks. One-time payment. Fully yours.
      </p>
      <div className={styles.ctas}>
        <a href="#contact" className={styles.btnPrimary}>→ Request a Free Proposal</a>
        <a href="#how" className={styles.btnSecondary}>See How It Works</a>
      </div>
      <div className={styles.scroll}>SCROLL</div>
    </section>
  )
}