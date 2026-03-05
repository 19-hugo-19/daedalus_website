'use client'
import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
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

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className={styles.dot} ref={dotRef} />
      <div className={styles.ring} ref={ringRef}>
        <div className={styles.crossH} />
        <div className={styles.crossV} />
      </div>
    </>
  )
}
