'use client'
import { useEffect, useRef } from 'react'
import styles from './BackgroundAnimation.module.css'

const NUM_NODES = 55
const CONNECTION_DIST = 150
const INTRO_DURATION = 3200

export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let animFrame
    let introComplete = false
    const startTime = performance.now()

    const nodes = Array.from({ length: NUM_NODES }, () => {
      const finalX = Math.random() * width
      const finalY = Math.random() * height
      return {
        x: width / 2 + (Math.random() - 0.5) * 120,
        y: height / 2 + (Math.random() - 0.5) * 120,
        startX: 0,
        startY: 0,
        finalX,
        finalY,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.4 + 0.4,
        pulse: Math.random() * Math.PI * 2,
      }
    })

    // Store start positions after creation
    nodes.forEach(n => { n.startX = n.x; n.startY = n.y })

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const draw = (timestamp) => {
      const elapsed = timestamp - startTime
      const raw = Math.min(elapsed / INTRO_DURATION, 1)
      const eased = 1 - Math.pow(1 - raw, 3)

      if (raw >= 1 && !introComplete) {
        introComplete = true
        nodes.forEach(n => { n.x = n.finalX; n.y = n.finalY })
      }

      ctx.clearRect(0, 0, width, height)

      // Blueprint grid
      const grid = 64
      ctx.strokeStyle = 'rgba(201,168,76,0.03)'
      ctx.lineWidth = 0.5
      for (let x = 0; x <= width; x += grid) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke()
      }
      for (let y = 0; y <= height; y += grid) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke()
      }

      // Move nodes
      nodes.forEach(n => {
        n.pulse += 0.015
        if (!introComplete) {
          n.x = n.startX + (n.finalX - n.startX) * eased
          n.y = n.startY + (n.finalY - n.startY) * eased
        } else {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.11 * eased
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(201,168,76,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulse = 0.25 + 0.12 * Math.sin(n.pulse)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${pulse * eased})`
        ctx.fill()
      })

      animFrame = requestAnimationFrame(draw)
    }

    animFrame = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
