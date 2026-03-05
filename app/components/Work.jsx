'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Work.module.css'

const steps = [
  {
    num: '01',
    category: 'Step One',
    title: 'You Tell Us About Your Business',
    desc: 'Fill out a short brief about your business, your goals, and what you need. No technical knowledge required — just tell us your story.',
    tags: ['Content Brief', 'Your Direction', 'Your Goals'],
  },
  {
    num: '02',
    category: 'Step Two',
    title: 'We Design & Build',
    desc: 'We craft a custom website tailored to your business. Clean, modern, and built to perform — no templates, no shortcuts.',
    tags: ['Custom Design', 'Development', 'Performance'],
  },
  {
    num: '03',
    category: 'Step Three',
    title: 'Review & Approve',
    desc: 'You review the site and request any revisions. We refine until it matches your vision exactly.',
    tags: ['Revisions', 'Your Feedback', 'Refinement'],
  },
  {
    num: '04',
    category: 'Step Four',
    title: 'Launch & Handover',
    desc: 'We launch the site and walk you through a training session so you can manage it yourself. Total timeline: 4 weeks.',
    tags: ['Go Live', 'Training', 'Full Ownership'],
  },
]

const highlights = ['4 Weeks', 'One-Time Payment', 'Full Ownership', 'Mobile Ready', 'SEO Included']

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

export default function Work() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.05)

  return (
    <section id="how" className={styles.work} ref={sectionRef}>
      <div className={styles.header}>
        <div>
          <div
            className={styles.tag}
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.55s ease 0s, transform 0.55s ease 0s',
            }}
          >
            // 02 — The Forge
          </div>
          <h2
            className={styles.title}
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.08s, transform 0.6s ease 0.08s',
            }}
          >
            How It Works
          </h2>
        </div>
      </div>

      <div className={styles.projects}>
        {steps.map((s, i) => (
          <a href='/#contact' key={s.num} className={styles.rowLink}>
            <div
              className={styles.row}
              style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'none' : 'translateX(-24px)',
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
              }}
            >
              <div className={styles.num}>{s.num}</div>
              <div>
                <div className={styles.category}>{s.category}</div>
                <h3 className={styles.projectTitle}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map(t => <span className={styles.tag2} key={t}>{t}</span>)}
                </div>
              </div>
              <div className={styles.arrow}>→</div>
            </div>
          </a>
        ))}
      </div>

      <div
        className={styles.techItems}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'none' : 'translateY(16px)',
          transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
        }}
      >
        <span className={`${styles.techItem} ${styles.techLogo}`}>D</span>
        {highlights.map(t => <span className={styles.techItem} key={t}>{t}</span>)}
      </div>
    </section>
  )
}