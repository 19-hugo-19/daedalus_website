'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

const faqs = [
  { q: 'Do I need technical skills?', a: 'No. We handle everything. You just provide the content and direction.' },
  { q: 'Can I update the website myself?', a: 'Yes. We include a training session so you can manage it on your own.' },
  { q: 'How long does it take?', a: '4 weeks from brief to launch.' },
  { q: 'How much does it cost?', a: 'Pricing is custom based on your needs. Request a free proposal to get a quote.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className={styles.contact}>

      {/* ── Section header ── */}
      <div className={styles.header}>
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

        {/* Left: info panel */}
        <div className={styles.infoPanel}>
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

        {/* Right: form card */}
        <div className={styles.formCard}>
          <div className={styles.formCardHeader}>
            <span className={styles.formCardTitle}>Request a Free Proposal</span>
            <span className={styles.formCardNote}>Takes 2 minutes · No commitment</span>
          </div>

          {sent ? (
            <div className={styles.success}>
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
      <div className={styles.faqSection}>
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
                <span className={styles.faqToggle}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className={styles.faqA}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}