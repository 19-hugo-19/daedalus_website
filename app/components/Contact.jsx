'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

const faqs = [
  { q: 'Do I need technical skills?', a: 'No. We handle everything. You just provide the content and direction.' },
  { q: 'Can I update the website myself?', a: 'Yes. We include a training session so you can manage it on your own.' },
  { q: 'How long does it take?', a: '4 weeks from brief to launch.' },
  { q: 'How much does it cost?', a: 'Pricing is custom based on your needs. Request a free proposal to get a quote.' },
]

function useScrollReveal(threshold = 0.08) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

function FaqAnswer({ open, children }) {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    setHeight(open ? ref.current.scrollHeight : 0)
  }, [open])

  return (
    <div style={{ overflow: 'hidden', height: `${height}px`, transition: 'height 0.32s cubic-bezier(0.4,0,0.2,1)' }}>
      <div ref={ref}>{children}</div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [sectionRef, sectionVisible] = useScrollReveal(0.05)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>

      {/* ── Section header ── */}
      <div
        className={styles.header}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.6s ease 0s, transform 0.6s ease 0s',
        }}
      >
        <div className={styles.tag}>// 04 — The Workshop</div>
        <div className={styles.headerInner}>
          <div>
            <h2 className={styles.title}>Let's Build<br />Something.</h2>
            <p className={styles.subtitle}>
              Fill in the form and we'll send you a free, tailored proposal within 24 hours — no commitment required.
            </p>
          </div>
          <div className={styles.headerBadges}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              <span>Available for new projects</span>
            </div>
            <div className={styles.badgePlain}>↩ Response within 24h</div>
            <div className={styles.badgePlain}>✦ Free proposal</div>
          </div>
        </div>
      </div>

      {/* ── Contact row: info panel + form ── */}
      <div className={styles.contactRow}>
        <div
          className={styles.infoPanel}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'none' : 'translateX(-20px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
          }}
        >
          <div className={styles.infoBlock}>
            <div className={styles.infoLabel}>// Email</div>
            <a href="mailto:hello@icarus.dev" className={styles.infoValue}>hello@icarus.dev</a>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoLabel}>// Based in</div>
            <div className={styles.infoValueMuted}>Worldwide · Remote-first</div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoLabel}>// Availability</div>
            <div className={styles.availability}>
              <span className={styles.dot} />
              <span>Open for projects</span>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoLabel}>// Response time</div>
            <div className={styles.infoValueMuted}>Within 24 hours</div>
          </div>
          <div className={styles.socialsBlock}>
            <div className={styles.infoLabel}>// Follow</div>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>Github <span>↗</span></a>
              <a href="#" className={styles.socialLink}>LinkedIn <span>↗</span></a>
              <a href="#" className={styles.socialLink}>Twitter <span>↗</span></a>
            </div>
          </div>
        </div>

        <div
          className={styles.formCard}
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'none' : 'translateX(20px)',
            transition: 'opacity 0.65s ease 0.22s, transform 0.65s ease 0.22s',
          }}
        >
          <div className={styles.formCardHeader}>
            <span className={styles.formCardTitle}>Request a Free Proposal</span>
            <span className={styles.formCardNote}>Takes 2 minutes · No commitment</span>
          </div>

          {sent ? (
            <div className={styles.success} style={{ animation: 'fadeInUp 0.5s ease both' }}>
              <span className={styles.successIcon}>✦</span>
              <div>
                <div className={styles.successTitle}>Proposal request received!</div>
                <div className={styles.successText}>We'll be in touch within 24 hours with a tailored proposal for your business.</div>
              </div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" value={form.name} onChange={handle} required placeholder="Your name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handle} required placeholder="Your email" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="business">Business Name</label>
                  <input id="business" name="business" value={form.business} onChange={handle} required placeholder="Your company" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="type">Industry</label>
                  <div className={styles.selectWrap}>
                    <select id="type" name="type" value={form.type} onChange={handle} required>
                      <option value="">Select your industry…</option>
                      <option value="restaurant">Restaurant / Food</option>
                      <option value="retail">Retail / Shop</option>
                      <option value="services">Services / Trades</option>
                      <option value="portfolio">Portfolio / Freelance</option>
                      <option value="other">Other</option>
                    </select>
                    <span className={styles.selectChevron}>▾</span>
                  </div>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea id="message" name="message" value={form.message} onChange={handle} required placeholder="What does your business do? What do you need from your website? Any budget or timeline in mind?" />
              </div>
              <button type="submit" className={styles.submit}>
                <span>Send My Proposal Request</span>
                <span className={styles.submitArrow}>→</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── FAQ row ── */}
      <div
        className={styles.faqSection}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
        }}
      >
        <div className={styles.faqHeader}>
          <div className={styles.faqTitle}>Common Questions</div>
          <div className={styles.faqSubtitle}>Everything you need to know before reaching out.</div>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((f, i) => (
            <div className={styles.faqItem} key={i}>
              <button
                className={`${styles.faqQ} ${openFaq === i ? styles.faqQOpen : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{f.q}</span>
                {/*
                  Toggle circle — rotation is on an INNER span (.faqToggleIcon)
                  so the circle's own position/size is never affected by transform.
                  The open state is driven purely by CSS via .faqQOpen .faqToggleIcon.
                */}
                <span className={styles.faqToggle}>
                  <span className={styles.faqToggleIcon}>+</span>
                </span>
              </button>
              <FaqAnswer open={openFaq === i}>
                <div className={styles.faqA}>{f.a}</div>
              </FaqAnswer>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}