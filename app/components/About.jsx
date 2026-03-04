import styles from './About.module.css'

const features = [
  { icon: '⚒', title: 'Built from Scratch', text: 'Every site is custom-crafted, not assembled from templates.' },
  { icon: '💸', title: 'Truly Affordable', text: 'Priced for small business budgets. No hidden fees.' },
  { icon: '⚡', title: '4-Week Delivery', text: 'From brief to launch in four weeks or less.' },
  { icon: '🔑', title: 'You Own It', text: 'Full control, no agency lock-in, no monthly dependency.' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div>
        <div className={styles.tag}>// 03 — The Craftsmen</div>
        <h2 className={styles.title}>Who We<br />Are.</h2>
        <p className={styles.body}>
          We are Daedalus — computer engineering students building practical, affordable websites for small businesses.
        </p>
        <p className={styles.body}>
          We saw that many small business owners need a digital presence but can&apos;t afford agency prices or find DIY builders too confusing. So we built a simpler path.
        </p>
        <p className={styles.body}>
          Made for: small business owners, non-technical founders, and anyone who needs a clean online presence without the complexity or cost.
        </p>
        <p className={styles.tagline}>Crafted by students. Built for real business.</p>
        <a href="#contact" className={styles.cta}>→ Request a Free Proposal</a>
      </div>

      <div className={styles.right}>
        {features.map(f => (
          <div className={styles.feature} key={f.title}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureText}>{f.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}