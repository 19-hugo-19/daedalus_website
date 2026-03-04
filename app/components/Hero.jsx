import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.tag}>// Web Development Studio</div>
      <h1 className={styles.title}>CURRENTLY<br />SOARING</h1>
      <p className={styles.sub}>
        Custom web development &amp; contract solutions<br />
        for companies that refuse to settle.
      </p>
      <div className={styles.ctas}>
        <a href="#contact" className={styles.btnPrimary}>Start a Project</a>
        <a href="#work" className={styles.btnSecondary}>View Our Work</a>
      </div>
      <div className={styles.scroll}>SCROLL</div>
    </section>
  )
}