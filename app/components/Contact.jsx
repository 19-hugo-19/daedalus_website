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
      <div>
        <div className={styles.tag}>// 04 — The Workshop</div>
        <h2 className={styles.title}>Start Your<br />Project.</h2>
        <p className={styles.subtitle}>Tell us about your business and receive a free proposal within 24 hours.</p>

        <div className={styles.faqList}>
          {faqs.map((f, i) => (
            <div className={styles.faqItem} key={i}>
              <button
                className={styles.faqQ}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{f.q}</span>
                <span className={styles.faqToggle}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className={styles.faqA}>{f.a}</div>}
            </div>
          ))}
        </div>

        <div className={styles.details}>
          <div>
            <div className={styles.detailLabel}>// Response time</div>
            <div className={`${styles.detailValue} ${styles.muted}`}>Within 24 hours</div>
          </div>
          <div>
            <div className={styles.detailLabel}>// Availability</div>
            <div className={`${styles.detailValue} ${styles.muted}`}>Open for new projects</div>
          </div>
        </div>
      </div>

      <div>
        {sent ? (
          <div className={styles.success}>✦ Proposal request received! We&apos;ll be in touch within 24 hours.</div>
        ) : (
          <form className={styles.form} onSubmit={submit}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label>Name</label>
                <input name="name" value={form.name} onChange={handle} required placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label>Business Name</label>
              <input name="business" value={form.business} onChange={handle} required placeholder="Your business name" />
            </div>
            <div className={styles.field}>
              <label>Business Type</label>
              <select name="type" value={form.type} onChange={handle} required>
                <option value="">Select your industry...</option>
                <option value="restaurant">Restaurant / Food</option>
                <option value="retail">Retail / Shop</option>
                <option value="services">Services / Trades</option>
                <option value="portfolio">Portfolio / Freelance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Tell Us About Your Business</label>
              <textarea name="message" value={form.message} onChange={handle} required placeholder="What does your business do? What do you need from your website?" />
            </div>
            <button type="submit" className={styles.submit}>
              Send My Proposal Request <span>→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}