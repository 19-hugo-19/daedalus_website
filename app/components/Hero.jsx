'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    // Staggered reveal on mount
    const children = el.querySelectorAll('[data-reveal]')
    children.forEach((child, i) => {
      child.style.opacity = '0'
      child.style.transform = 'translateY(28px)'
      child.style.transition = `opacity 0.7s ease ${i * 0.13}s, transform 0.7s ease ${i * 0.13}s`
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          child.style.opacity = '1'
          child.style.transform = 'translateY(0)'
        })
      })
    })
  }, [])

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.tag} data-reveal>// The Craftsman&apos;s Workshop</div>
      <h1 className={styles.title} data-reveal>
        <span className={styles.titleLine}>TINKERING,</span>
        <br />
        <span className={styles.titleLine}>WITH THE WEB.</span>
      </h1>
      <p className={styles.sub} data-reveal>
        Simple, affordable websites for small businesses.<br />
        Delivered in 4 weeks. One-time payment. Fully yours.
      </p>
      <div className={styles.ctas} data-reveal>
        <a href="#contact" className={styles.btnPrimary}>
          <span>→ Request a Free Proposal</span>
          <span className={styles.btnShine} />
        </a>
        <a href="#how" className={styles.btnSecondary}>See How It Works</a>
      </div>
      <div className={styles.scroll} data-reveal>
        <span className={styles.scrollDot} />
        SCROLL
      </div>
    </section>
  )
}