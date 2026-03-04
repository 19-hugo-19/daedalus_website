'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className={styles.contact}>
      <div>
        <div className={styles.tag}>// 04 — Contact</div>
        <h2 className={styles.title}>Start<br />Flying.</h2>
        <p className={styles.subtitle}>Have a project in mind? Let&apos;s make something great.</p>

        <div className={styles.details}>
          <div>
            <div className={styles.detailLabel}>// Email</div>
            <div className={styles.detailValue}>
              <a href="mailto:hello@icarus.dev">hello@icarus.dev</a>
            </div>
          </div>
          <div>
            <div className={styles.detailLabel}>// Based in</div>
            <div className={`${styles.detailValue} ${styles.muted}`}>Worldwide · Remote-first</div>
          </div>
          <div>
            <div className={styles.detailLabel}>// Availability</div>
            <div className={`${styles.detailValue} ${styles.muted}`}>Available for projects</div>
          </div>
          <div>
            <div className={styles.detailLabel}>// Response time</div>
            <div className={`${styles.detailValue} ${styles.muted}`}>Within 24 hours</div>
          </div>
        </div>

        <div className={styles.socials}>
          {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
            <a className={styles.socialLink} href="#" key={s}>{s}</a>
          ))}
        </div>
      </div>

      <div>
        {sent ? (
          <div className={styles.success}>✦ Message sent! We&apos;ll be in touch within 24 hours.</div>
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
              <label>Company</label>
              <input name="company" value={form.company} onChange={handle} placeholder="Your company" />
            </div>
            <div className={styles.field}>
              <label>Service</label>
              <select name="service" value={form.service} onChange={handle} required>
                <option value="">Select a service...</option>
                <option value="web">Web Development</option>
                <option value="contract">Contract Work</option>
                <option value="strategy">Digital Strategy</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handle} required placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className={styles.submit}>
              Send Message <span>→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}