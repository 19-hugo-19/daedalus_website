import styles from './About.module.css'

const features = [
  { icon: '⚡', title: 'Fast Delivery', text: 'We ship quickly without sacrificing quality.' },
  { icon: '🎯', title: 'Precise Craft', text: 'Every pixel and line of code is intentional.' },
  { icon: '🔒', title: 'Reliable', text: 'Built-in accountability and transparent comms.' },
  { icon: '🚀', title: 'Scalable', text: 'Code architected to grow with your business.' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div>
        <div className={styles.tag}>// 03 — About</div>
        <h2 className={styles.title}>Built<br />Different.</h2>
        <p className={styles.body}>
          We are Icarus — a boutique web development studio that flies close to the edge of what&apos;s possible.
        </p>
        <p className={styles.body}>
          Founded on the belief that great software is both science and art, we combine technical excellence with creative vision to deliver products that actually stand out. We don&apos;t just write code — we architect digital experiences that grow with your business.
        </p>
        <p className={styles.tagline}>Small team. Big standards. No compromises.</p>
        <a href="#contact" className={styles.cta}>Work With Us</a>
      </div>

      <div className={styles.right}>
        {features.map(f => (
          <div className={styles.feature} key={f.title}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureText}>{f.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}