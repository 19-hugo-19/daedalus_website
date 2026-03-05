import styles from './About.module.css'

const features = [
  {
    title: 'Built from Scratch',
    text: 'Every site is custom-crafted, not assembled from templates.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Truly Affordable',
    text: 'Priced for small business budgets. No hidden fees.',
    icon: (
      // Dollar sign centered inside circle — vertical line stops inside circle bounds
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="7" x2="12" y2="17" />
        <path d="M14.5 9.5a2.5 2.5 0 0 0-5 0c0 3 5 2.5 5 5.5a2.5 2.5 0 0 1-5 0" />
      </svg>
    ),
  },
  {
    title: '4-Week Delivery',
    text: 'From brief to launch in four weeks or less.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    title: 'You Own It',
    text: 'Full control, no agency lock-in, no monthly dependency.',
    icon: (
      // Horizontal key: circle bow on left, shaft goes right, two downward teeth
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="12" r="4" />
        <line x1="12" y1="12" x2="22" y2="12" />
        <line x1="19" y1="12" x2="19" y2="15" />
        <line x1="15" y1="12" x2="15" y2="14" />
      </svg>
    ),
  },
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