import styles from './Work.module.css'

const projects = [
  {
    num: '01',
    category: 'E-Commerce',
    title: 'Nexus Store',
    desc: 'Full-stack e-commerce platform with real-time inventory management, custom checkout flow, and multi-currency support.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    num: '02',
    category: 'SaaS Platform',
    title: 'Orbit Analytics',
    desc: 'Enterprise-level data visualization dashboard with live WebSocket feeds, custom charting, and role-based access control.',
    tags: ['React', 'Node.js', 'WebSocket'],
  },
  {
    num: '03',
    category: 'Contract',
    title: 'Apex Finance',
    desc: 'Core banking system modernization — REST API architecture redesign, performance audit, and legacy codebase migration.',
    tags: ['TypeScript', 'Express', 'Redis'],
    code: ['const api = new Apex()', 'await api.migrate()', '// ✓ 40% faster'],
  },
]

const techStack = ['React', 'Node.js', 'Firebase', 'TypeScript', 'Next.js']

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.header}>
        <div>
          <div className={styles.tag}>// 02 — Work</div>
          <h2 className={styles.title}>Selected Projects</h2>
        </div>
      </div>

      <div className={styles.projects}>
        {projects.map(p => (
          <div className={styles.row} key={p.num}>
            <div className={styles.num}>{p.num}</div>
            <div>
              <div className={styles.category}>{p.category}</div>
              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span className={styles.tag2} key={t}>{t}</span>)}
              </div>
              {p.code && (
                <div className={styles.code}>
                  {p.code.map((line, i) => (
                    <div key={i}>{line.startsWith('//') ? <span>{line}</span> : line}</div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>

      <div className={styles.techItems}>
        <span className={`${styles.techItem} ${styles.techLogo}`}>I</span>
        {techStack.map(t => <span className={styles.techItem} key={t}>{t}</span>)}
      </div>
    </section>
  )
}