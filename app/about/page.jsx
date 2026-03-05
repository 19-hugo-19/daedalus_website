'use client'

import { useEffect, useRef, useState } from 'react'
import CustomCursor from "../components/CustomCursor"
import Navbar from "../components/Navbar"
import styles from "./page.module.css"

/* ── Animated counter hook ── */
function useCounter(target, duration = 1400) {
  const [val, setVal] = useState('0')
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      const num = parseFloat(target)
      if (isNaN(num)) { setVal(target); return }
      const suffix = target.replace(String(Math.floor(num)), '')
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setVal(Math.floor(ease * num) + suffix)
        if (p < 1) requestAnimationFrame(tick)
        else setVal(target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])
  return { val, ref }
}

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

/* ── Stat with animated counter ── */
function Stat({ value, label }) {
  const { val, ref } = useCounter(value)
  return (
    <div ref={ref} className={styles.teamStat}>
      <div className={styles.teamStatValue}>{val}</div>
      <div className={styles.teamStatLabel}>{label}</div>
    </div>
  )
}

/* ── Reveal wrapper ── */
function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const beliefs = [
  { num: "I",   title: "Ownership Matters",       body: "When you pay for something, you should own it — fully, without strings. No lock-in. No monthly fees. No asking permission to make changes. It's yours." },
  { num: "II",  title: "Simplicity Is a Feature",  body: "More features don't mean more value. A clean, fast website that loads super-fast and converts visitors is worth more than a bloated platform nobody understands." },
  { num: "III", title: "Good Work Is Affordable",  body: "Quality web development shouldn't cost $10,000. Small businesses deserve the same professional results as large companies — at a price that makes sense." },
  { num: "IV",  title: "We Build, You Run",         body: "Our job is to build it and teach you how to use it. After that, you're in control. We don't build dependency — we build capability." },
]

export default function AboutPage() {
  const [heroReady, setHeroReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className={styles.main}>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={`${styles.heroAnnotation} ${heroReady ? styles.heroAnnotationIn : ''}`}>
            // 00 — The Origin
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={`${styles.heroLabel} ${heroReady ? styles.heroLabelIn : ''}`}>
                ABOUT DAEDALUS
              </span>
              <h1 className={styles.heroTitle}>
                <span
                  className={`${styles.heroLine} ${heroReady ? styles.heroLineIn : ''}`}
                  style={{ transitionDelay: '140ms' }}
                >
                  BUILT BY
                </span>
                <br />
                <span
                  className={`${styles.heroLine} ${styles.heroTitleAccent} ${heroReady ? styles.heroLineIn : ''}`}
                  style={{ transitionDelay: '280ms' }}
                >
                  BUILDERS.
                </span>
              </h1>
            </div>
            <div className={`${styles.heroRight} ${heroReady ? styles.heroRightIn : ''}`}>
              <p className={styles.heroLead}>
                We are computer engineering students who got tired of watching small business owners
                get priced out of the web. So we built a better way.
              </p>
              <div className={styles.heroDivider} />
              <p className={styles.heroSub}>
                Daedalus was named after the master craftsman of Greek mythology — the architect who
                built elegant, purposeful structures. That's exactly what we do for your business online.
              </p>
            </div>
          </div>
          {/* Accent rule that draws itself in */}
          <div className={`${styles.heroAccentLine} ${heroReady ? styles.heroAccentLineIn : ''}`} />
          <div className={styles.heroScroll}>SCROLL →</div>
        </section>

        {/* ── Marquee ── */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[
              "ENGINEERING STUDENTS","REMOTE-FIRST","EST. 2026","CUSTOM BUILT",
              "NO TEMPLATES","SMALL BUSINESS FOCUSED","ONE-TIME PAYMENT","FULL OWNERSHIP",
              "ENGINEERING STUDENTS","REMOTE-FIRST","EST. 2026","CUSTOM BUILT",
              "NO TEMPLATES","SMALL BUSINESS FOCUSED","ONE-TIME PAYMENT","FULL OWNERSHIP",
            ].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>✦{item}</span>
            ))}
          </div>
        </div>

        {/* ── Story ── */}
        <section className={styles.section}>
          <Reveal>
            <div className={styles.sectionAnnotation}>// 01 — The Story</div>
          </Reveal>
          <div className={styles.storyGrid}>
            <div className={styles.storyIndex}>
              <span className={styles.bigNumber}>01</span>
            </div>
            <div className={styles.storyContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>Why We Started.</h2>
              </Reveal>
              <div className={styles.storyBlocks}>
                {[
                  { label: "THE OBSERVATION", text: "We started building websites for fun. Then we looked around — the hair salon down the street had no website. The local plumber ran on a 2014 Facebook page. The print shop's website looked like it hadn't been touched since dial-up." },
                  { label: "THE PROBLEM",     text: "These weren't lazy people. They were just stuck. Agencies quoted them multiple thousand dollars. DIY alternatives felt overwhelming and still cost money every month. And they didn't have time to figure it out on their own." },
                  { label: "THE DECISION",    text: "So we built Daedalus. A focused, efficient service for small businesses who need a clean website — not a full agency, not a DIY platform. Just a team that builds exactly what you need and hands it over completely." },
                ].map((block, i) => (
                  <Reveal key={block.label} delay={i * 110}>
                    <div className={styles.storyBlock}>
                      <div className={styles.storyBlockLabel}>{block.label}</div>
                      <p>{block.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={styles.fullDivider} />

        {/* ── Beliefs ── */}
        <section className={styles.section}>
          <Reveal>
            <div className={styles.sectionAnnotation}>// 02 — The Philosophy</div>
          </Reveal>
          <div className={styles.beliefsGrid}>
            <div className={styles.beliefsHeader}>
              <div className={styles.storyIndex}>
                <span className={styles.bigNumber}>02</span>
              </div>
              <Reveal>
                <h2 className={styles.sectionTitle}>What We Believe.</h2>
              </Reveal>
            </div>
            <div className={styles.beliefCards}>
              {beliefs.map((item, i) => (
                <Reveal key={item.num} delay={i * 90}>
                  <div className={styles.beliefCard}>
                    <div className={styles.beliefCardNum}>{item.num}</div>
                    <div className={styles.beliefCardContent}>
                      <div className={styles.beliefCardTitle}>{item.title}</div>
                      <p className={styles.beliefCardBody}>{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.fullDivider} />

        {/* ── Team ── */}
        <section className={styles.section}>
          <Reveal>
            <div className={styles.sectionAnnotation}>// 03 — The Craftsmen</div>
          </Reveal>
          <div className={styles.teamGrid}>
            <div className={styles.storyIndex}>
              <span className={styles.bigNumber}>03</span>
            </div>
            <div className={styles.teamContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>Who We Are.</h2>
              </Reveal>
              <Reveal delay={80}>
                <p className={styles.teamLead}>
                  Computer engineering students — technically sharp, pragmatically focused. We study
                  systems, networks, and software. We apply that to the web, specifically to the part
                  of the web that small businesses live on.
                </p>
              </Reveal>
              <div className={styles.teamStats}>
                {[
                  { value: "4 wks", label: "Avg. Delivery Time" },
                  { value: "100%",  label: "Ownership Transferred" },
                  { value: "0",     label: "Monthly Fees" },
                  { value: "24h",   label: "Proposal Turnaround" },
                ].map((stat) => (
                  <Stat key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
              <Reveal delay={120}>
                <div className={styles.teamTags}>
                  {["Computer Engineering","Remote-First","Small Business Focused","No Templates","Custom Code","Fast Delivery"].map((tag) => (
                    <span key={tag} className={styles.teamTag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
                <Reveal delay={160}>
                <div className={styles.connect}>
                    <div className={styles.connectLabel}>// Connect with us</div>
                    <div className={styles.connectCards}>
                    <a href="https://www.linkedin.com/in/hugopelletier1/" target="_blank" rel="noopener noreferrer" className={styles.connectCard}>
                        <div className={styles.connectCardHeader}>
                        <div className={styles.connectInitial}>H</div>
                        <div className={styles.connectMeta}>
                            <div className={styles.connectName}>Hugo Pelletier</div>
                            <div className={styles.connectRole}>Co-Founder · Computer Engineering</div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.connectArrow}>
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                        </div>
                        <div className={styles.connectDivider} />
                        <p className={styles.connectBio}>
                            Writes the code that holds everything together. Drawn to clean logic, solid architecture, and solutions that just work — without the noise.
                        </p>
                        <div className={styles.connectFooter}>
                        <span className={styles.connectPlatform}>LinkedIn ↗</span>
                        <span className={styles.connectTag}>Backend · Systems</span>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/%C3%A9douard-b%C3%A9langer-352b24284/" target="_blank" rel="noopener noreferrer" className={styles.connectCard}>
                        <div className={styles.connectCardHeader}>
                        <div className={styles.connectInitial}>É</div>
                        <div className={styles.connectMeta}>
                            <div className={styles.connectName}>Édouard Bélanger</div>
                            <div className={styles.connectRole}>Co-Founder · Computer Engineering</div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.connectArrow}>
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                        </div>
                        <div className={styles.connectDivider} />
                        <p className={styles.connectBio}>
                            Thinks in systems and aesthetics equally. If it loads fast but looks off, it's not done. Believes the best interfaces are the ones nobody notices.
                        </p>
                        <div className={styles.connectFooter}>
                        <span className={styles.connectPlatform}>LinkedIn ↗</span>
                        <span className={styles.connectTag}>Frontend · Design</span>
                        </div>
                    </a>
                    </div>
                </div>
                </Reveal>
            </div>
          </div>
        </section>

        <div className={styles.fullDivider} />

        {/* ── Scope ── */}
        <section className={styles.section}>
          <Reveal>
            <div className={styles.sectionAnnotation}>// 04 — The Scope</div>
          </Reveal>
          <div className={styles.scopeGrid}>
            <div className={styles.storyIndex}>
              <span className={styles.bigNumber}>04</span>
            </div>
            <div className={styles.scopeContent}>
              <Reveal>
                <h2 className={styles.sectionTitle}>What We Don't Do.</h2>
              </Reveal>
              <Reveal delay={60}>
                <p className={styles.scopeLead}>
                  We are deliberately focused. That focus is what makes us good at what we do.
                </p>
              </Reveal>
              <div className={styles.scopeColumns}>
                {[
                  {
                    label: "✓ WE DO THIS",
                    items: ["Custom landing pages & websites","Mobile responsive design","Fast-loading performance","SEO-ready structure","Contact form integration","Analytics setup","Training & full handover","One-time project delivery"],
                    yes: true,
                  },
                  {
                    label: "✕ WE DON'T DO THIS",
                    items: ["Enterprise-scale systems","Long-term maintenance contracts","Large web applications","E-commerce platforms","Custom CMS development","Ongoing monthly retainers","Complex third-party integrations","Anything outside our focus"],
                    yes: false,
                  },
                ].map((col, ci) => (
                  <Reveal key={col.label} delay={ci * 120}>
                    <div className={styles.scopeCol}>
                      <div className={styles.scopeColLabel}>{col.label}</div>
                      {col.items.map((item) => (
                        <div key={item} className={col.yes ? styles.scopeItemYes : styles.scopeItemNo}>
                          <span className={col.yes ? styles.scopeCheck : styles.scopeX}>
                            {col.yes ? '→' : '✕'}
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <Reveal>
              <div className={styles.ctaLabel}>// Ready to start?</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className={styles.ctaTitle}>
                LET'S BUILD
                <br />
                <span className={styles.ctaTitleAccent}>SOMETHING.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.ctaBody}>
                Tell us about your business. We'll send a free proposal within 24 hours.
                No commitment required.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a href="/#contact" className={styles.ctaButton}>
                → Request a Free Proposal
              </a>
              <div className={styles.ctaMeta}>
                Takes 2 minutes · No commitment · Response within 24h
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </>
  )
}