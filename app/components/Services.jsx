'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Custom-built websites and web applications crafted for performance, scalability, and lasting impact.',
    items: ['Frontend & Backend Dev', 'Progressive Web Apps', 'E-Commerce Solutions', 'API Integration'],
  },
  {
    num: '02',
    title: 'Contract Work',
    desc: 'Expert developers embedded into your team, delivering quality code on your timeline and your terms.',
    items: ['Short & Long-term Contracts', 'Team Augmentation', 'Code Review & Audits', 'Technical Leadership'],
  },
  {
    num: '03',
    title: 'Digital Strategy',
    desc: 'Strategic guidance to help your business navigate the digital landscape and outpace the competition.',
    items: ['Technical Consulting', 'Architecture Planning', 'Performance Optimization', 'Stack Recommendations'],
  },
]

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: 'yr', label: 'Industry Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
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
      <div className={styles.tag}>// 01 — Services</div>
      <h2 className={styles.title}>What We Do</h2>
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