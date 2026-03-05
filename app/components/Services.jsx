'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'The Problem',
    desc: 'Most small business owners face the same frustrating wall when it comes to getting online.',
    items: [
      'Agencies are too expensive',
      'DIY builders are confusing',
      'No time to learn web design',
      'Outdated or slow sites',
      'Paying monthly forever',
    ],
  },
  {
    num: '02',
    title: 'The Solution',
    desc: 'We build clean, custom websites specifically designed for small businesses — without the complexity or the cost.',
    items: [
      'Modern & professional look',
      'Loads fast on any device',
      'Mobile responsive by default',
      'Easy for you to update',
      'No ongoing maintenance needed',
    ],
  },
  {
    num: '03',
    title: 'What You Get',
    desc: 'Every project includes everything you need to have a strong online presence from day one.',
    items: [
      'Custom landing page (minimum)',
      'Mobile responsive design',
      'SEO-ready structure',
      'Contact form integration',
      'Basic analytics setup',
      'Training session',
      'Full ownership',
    ],
  },
]

const stats = [
  { value: 4, suffix: ' wks', label: 'Delivery Time' },
  { value: 1, suffix: '×', label: 'One-Time Payment' },
  { value: 100, suffix: '%', label: 'Yours to Own' },
  { value: 0, suffix: ' contracts', label: 'No Monthly Fees' },
]

function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, start }) {
  const count = useCountUp(stat.value, 1200, start)
  return (
    <div className={styles.statCard}>
      <div className={styles.statNum}>{count}{stat.suffix}</div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  )
}

function useScrollReveal(threshold = 0.15) {
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

export default function Services() {
  const statsRef = useRef(null)
  const [startStats, setStartStats] = useState(false)
  const [sectionRef, sectionVisible] = useScrollReveal(0.05)

  useEffect(() => {
    if (startStats || !statsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStartStats(true); observer.disconnect() } },
      { threshold: 0, rootMargin: '0px 0px -30% 0px' }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [startStats])

  return (
    <section id="services" className={styles.services} ref={sectionRef}>
      <div
        className={styles.tag}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0s, transform 0.6s ease 0s',
        }}
      >
        // 01 — The Blueprint
      </div>
      <h2
        className={styles.title}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
        }}
      >
        Simple by Design.
      </h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            className={styles.card}
            key={s.num}
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'none' : 'translateY(30px)',
              transition: `opacity 0.65s ease ${0.2 + i * 0.12}s, transform 0.65s ease ${0.2 + i * 0.12}s`,
            }}
          >
            <div className={styles.cardNum}>{s.num}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ul className={styles.cardList}>
              {s.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.btnWrapper}>
        <Link href="/services" className={`${styles.btn} ${styles.btnAnimated}`}>
          Learn More
        </Link>
      </div>
      <div className={styles.statsGrid} ref={statsRef}>
        {stats.map(s => <StatCard stat={s} key={s.label} start={startStats} />)}
      </div>
    </section>
  )
}