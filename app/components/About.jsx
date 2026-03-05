'use client'
import { useEffect, useRef, useState } from 'react'
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="12" r="4" />
        <line x1="12" y1="12" x2="22" y2="12" />
        <line x1="19" y1="12" x2="19" y2="15" />
        <line x1="15" y1="12" x2="15" y2="14" />
      </svg>
    ),
  },
]

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

export default function About() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.08)

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div>
        <div
          className={styles.tag}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0s, transform 0.55s ease 0s',
          }}
        >
          // 03 — The Craftsmen
        </div>
        <h2
          className={styles.title}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.08s, transform 0.6s ease 0.08s',
          }}
        >
          Who We<br />Are.
        </h2>
        {[
          'We are Daedalus — computer engineering students building practical, affordable websites for small businesses.',
          'We saw that many small business owners need a digital presence but can\'t afford agency prices or find DIY builders too confusing. So we built a simpler path.',
          'Made for: small business owners, non-technical founders, and anyone who needs a clean online presence without the complexity or cost.',
        ].map((text, i) => (
          <p
            key={i}
            className={styles.body}
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'none' : 'translateY(16px)',
              transition: `opacity 0.55s ease ${0.18 + i * 0.1}s, transform 0.55s ease ${0.18 + i * 0.1}s`,
            }}
          >
            {text}
          </p>
        ))}
        <p
          className={styles.tagline}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.55s ease 0.5s, transform 0.55s ease 0.5s',
          }}
        >
          Crafted by students. Built for real business.
        </p>
        <div
          className={styles.ctaGroup}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.55s ease 0.6s, transform 0.55s ease 0.6s',
          }}
        >
          <a href="/about" className={styles.ctaSecondary}>Learn More →</a>
          <a href="#contact" className={styles.cta}>→ Request a Free Proposal</a>
        </div>
      </div>

      <div className={styles.right}>
        {features.map((f, i) => (
          <div
            className={styles.feature}
            key={f.title}
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'none' : 'translateX(24px)',
              transition: `opacity 0.6s ease ${0.2 + i * 0.12}s, transform 0.6s ease ${0.2 + i * 0.12}s`,
            }}
          >
            <div className={styles.featureIcon}>{f.icon}</div>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureText}>{f.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}