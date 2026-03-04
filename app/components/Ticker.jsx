'use client'
import { useEffect, useRef } from 'react'
import styles from './Ticker.module.css'

const items = [
  'WEB DESIGN', 'MOBILE READY', 'SEO INCLUDED',
  'CONTACT FORMS', 'FAST LOADING', '4-WEEK DELIVERY',
  'ONE-TIME PAYMENT', 'FULL OWNERSHIP',
]

export default function Ticker() {
  const innerRef = useRef(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    let frame, pos = 0
    const speed = 0.6
    const step = () => {
      pos -= speed
      const half = el.scrollWidth / 2
      if (pos <= -half) pos = 0
      el.style.transform = `translateX(${pos}px)`
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  const allItems = [...items, ...items]

  return (
    <div className={styles.wrap}>
      <div className={styles.inner} ref={innerRef}>
        {allItems.map((item, i) => (
          <span className={styles.item} key={i}>
            <span className={styles.dot}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}