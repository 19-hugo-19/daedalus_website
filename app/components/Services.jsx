'use client'
import { useEffect, useRef, useState } from 'react'
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

function StatCard({ stat }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const count = useCountUp(stat.value, 1200, visible)
  return (
    <div className={styles.statCard} ref={ref}>
      <div className={styles.statNum}>{count}{stat.suffix}</div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.tag}>// 01 — The Blueprint</div>
      <h2 className={styles.title}>Simple by Design.</h2>
      <div className={styles.grid}>
        {services.map(s => (
          <div className={styles.card} key={s.num}>
            <div className={styles.cardNum}>{s.num}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ul className={styles.cardList}>
              {s.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.statsGrid}>
        {stats.map(s => <StatCard stat={s} key={s.label} />)}
      </div>
    </section>
  )
}