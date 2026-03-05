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

export default function Work() {
  return (
    <section id="how" className={styles.work}>
      <div className={styles.header}>
        <div>
          <div className={styles.tag}>// 02 — The Forge</div>
          <h2 className={styles.title}>How It Works</h2>
        </div>
      </div>

      <div className={styles.projects}>
        {steps.map(s => (
          <a href='/#contact' key={s.num}>
            <div className={styles.row}>
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

      <div className={styles.techItems}>
        <span className={`${styles.techItem} ${styles.techLogo}`}>D</span>
        {highlights.map(t => <span className={styles.techItem} key={t}>{t}</span>)}
      </div>
    </section>
  )
}