'use client'
import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor({ visible = true }) {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -200, my = -200
    let rx = -200, ry = -200
    let isHover = false
    let frame

    const onMove = (e) => { mx = e.clientX; my = e.clientY }

    const animate = () => {
      dot.style.transform = `translate(${mx}px, ${my}px)`
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      frame = requestAnimationFrame(animate)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button') && !isHover) {
        isHover = true
        ring.classList.add(styles.hovered)
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button') && isHover) {
        isHover = false
        ring.classList.remove(styles.hovered)
      }
    }

    // ✅ Inside useEffect so frame/animate are in scope
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame)
      else frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove, { passive: true })
      document.removeEventListener('mouseover', onOver, { passive: true })
      document.removeEventListener('mouseout', onOut, { passive: true })
      document.removeEventListener('visibilitychange', onVisibility) // ✅ Cleaned up properly
    }
  }, [])

  return (
    <>
      <div className={`${styles.dot} ${!visible ? styles.hidden : ''}`} ref={dotRef} />
      <div className={`${styles.ring} ${!visible ? styles.hidden : ''}`} ref={ringRef}>
        <div className={styles.crossH} />
        <div className={styles.crossV} />
      </div>
    </>
  )
}