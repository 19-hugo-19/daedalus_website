"use client";

import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import { useRef, useState, useCallback, useEffect } from "react";

const services = [
  {
    id: "01",
    tag: "Foundation",
    title: "Custom Landing Page",
    description:
      "Your business deserves more than a template. We design and build a bespoke landing page from scratch — crafted around your brand, your message, and your customers.",
    details: [
      "Hand-coded, no page builders",
      "Unique layout tailored to your business",
      "Brand-aligned typography & color",
      "Conversion-focused structure",
      "Hero, features, CTA, footer sections",
    ],
    note: "Included in every project",
  },
  {
    id: "02",
    tag: "Accessibility",
    title: "Mobile Responsive Design",
    description:
      "Over 60% of web traffic comes from mobile. Every site we build is designed mobile-first, then scaled up — so your customers get a flawless experience on any screen.",
    details: [
      "Fluid layouts across all devices",
      "Touch-friendly UI elements",
      "Tested on iOS & Android",
    ],
    note: "Included in every project",
  },
  {
    id: "03",
    tag: "Visibility",
    title: "SEO-Ready Structure",
    description:
      "A beautiful site that no one finds is useless. We bake SEO best practices directly into the architecture — so search engines can find, read, and rank you from day one.",
    details: [
      "Semantic HTML markup",
      "Optimised meta titles & descriptions",
      "Fast load times (Core Web Vitals)",
    ],
    note: "Included in every project",
  },
  {
    id: "04",
    tag: "Communication",
    title: "Contact Form Integration",
    description:
      "Turn visitors into leads. We integrate a fully functional contact form so customers can reach you directly — no third-party subscriptions, no complicated setup.",
    details: [
      "Custom-styled form matching your site",
      "Email notification on submission",
      "Mobile-optimised input fields",
      "Confirmation message for users",
    ],
    note: "Included in every project",
  },
  {
    id: "05",
    tag: "Intelligence",
    title: "Basic Analytics Setup",
    description:
      "Know who's visiting your site, where they come from, and what they do. We set up analytics so you have real data to make real decisions — without needing to be technical.",
    details: [
      "Google Analytics 4 integration",
      "Traffic source tracking",
      "Page view & session data",
      "Goal/conversion event setup",
      "Dashboard walkthrough included",
    ],
    note: "Included in every project",
  },
  {
    id: "06",
    tag: "Empowerment",
    title: "Training Session",
    description:
      "We don't disappear after launch. Every project ends with a dedicated training session so you know exactly how to manage, update, and grow your site — no agency dependency.",
    details: [
      "1-on-1 walkthrough at handover",
      "How to update text & images",
      "How to manage form submissions",
      "Reading your analytics dashboard",
      "Written reference guide provided",
    ],
    note: "Included in every project",
  },
  {
    id: "07",
    tag: "Ownership",
    title: "Full Ownership Transfer",
    description:
      "Your site is yours — forever. We hand over every file, every asset, every account. No lock-in, no recurring fees, no asking permission to make changes.",
    details: [
      "Complete source code delivery",
      "Domain & hosting guidance",
      "All assets & brand files",
      "No ongoing dependency on us",
      "One-time payment, full stop",
    ],
    note: "Included in every project",
  },
];

const comparison = [
  { feature: "Custom design", daedalus: true, agency: true, diy: false },
  { feature: "Affordable price", daedalus: true, agency: false, diy: true },
  { feature: "4-week delivery", daedalus: true, agency: false, diy: false },
  { feature: "No monthly fees", daedalus: true, agency: false, diy: false },
  { feature: "Full ownership", daedalus: true, agency: false, diy: true },
  { feature: "Mobile responsive", daedalus: true, agency: true, diy: true },
  { feature: "SEO included", daedalus: true, agency: true, diy: false },
  { feature: "Training session", daedalus: true, agency: false, diy: false },
  { feature: "No tech skills needed", daedalus: true, agency: true, diy: false },
];

function useFadeIn() {
  const observer = useRef(null);

  function getObserver() {
    if (observer.current) return observer.current;
    if (typeof window === "undefined") return null;
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            observer.current?.unobserve(e.target);
          }
        });
      },
      // rootMargin pushes the trigger point slightly above the bottom of the
      // viewport so elements animate in just before they're fully visible,
      // and above-the-fold elements always fire on load.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    return observer.current;
  }

  return useCallback((el) => {
    if (el) getObserver()?.observe(el);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  // Controls the staggered hero entrance
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    // Tiny delay so the browser has painted before we start the animation
    const t = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const refSectionHeader = useFadeIn();
  const refWhyHeader     = useFadeIn();
  const refCompHeader    = useFadeIn();
  const refTableWrap     = useFadeIn();
  const refCta           = useFadeIn();

  const whyRefs = [useFadeIn(), useFadeIn(), useFadeIn(), useFadeIn()]; // eslint-disable-line react-hooks/rules-of-hooks
  const cardRefs = [                                                      // eslint-disable-line react-hooks/rules-of-hooks
    useFadeIn(), useFadeIn(), useFadeIn(), useFadeIn(),
    useFadeIn(), useFadeIn(), useFadeIn(),
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className={styles.main}>

        {/* Hero — staggered entrance driven by heroReady */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span
              className={styles.tag}
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(16px)",
                transition: "opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s",
              }}
            >
              // The Blueprint
            </span>
            <h1
              className={styles.heroTitle}
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(24px)",
                transition: "opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s",
              }}
            >
              What's <em>Inside</em>
              <br />
              Every Build.
            </h1>
            <p
              className={styles.heroSub}
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.28s, transform 0.6s ease 0.28s",
              }}
            >
              No packages. No tiers. No upsells. One project, everything included — delivered in 4
              weeks for a single one-time payment.
            </p>
            <a
              href="/#contact"
              className={styles.heroCta}
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "none" : "translateY(16px)",
                transition: "opacity 0.55s ease 0.4s, transform 0.55s ease 0.4s",
              }}
            >
              → Request a Free Proposal
            </a>
          </div>
          <div
            className={styles.heroBadge}
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            }}
          >
            <span>7</span>
            <small>services included<br />in every project</small>
          </div>
        </section>

        {/* Ticker */}
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {[
              "WEB DESIGN", "MOBILE READY", "SEO INCLUDED", "CONTACT FORMS",
              "FAST LOADING", "4-WEEK DELIVERY", "ONE-TIME PAYMENT", "FULL OWNERSHIP",
              "WEB DESIGN", "MOBILE READY", "SEO INCLUDED", "CONTACT FORMS",
              "FAST LOADING", "4-WEEK DELIVERY", "ONE-TIME PAYMENT", "FULL OWNERSHIP",
            ].map((item, i) => (
              <span key={i}>✦{item}</span>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <div ref={refSectionHeader} className={`${styles.sectionHeader} ${styles.fadeIn}`}>
            <span className={styles.tag}>// 01 — The Deliverables</span>
            <h2>Everything, Included.</h2>
            <p>
              Every Daedalus project ships with the same complete set of services. No add-ons, no
              surprises.
            </p>
          </div>

          {/* Desktop sidebar layout */}
          <div className={styles.servicesLayout}>
            <nav className={styles.serviceNav}>
              {services.map((s, i) => (
                <button
                  key={s.id}
                  className={`${styles.serviceNavItem} ${activeService === i ? styles.activeNav : ""}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className={styles.navId}>{s.id}</span>
                  <span className={styles.navTitle}>{s.title}</span>
                </button>
              ))}
            </nav>

            <div className={styles.serviceDetail}>
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className={`${styles.serviceCard} ${activeService === i ? styles.activeCard : ""}`}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardTag}>{s.tag}</span>
                    <span className={styles.cardId}>{s.id}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.description}</p>
                  <ul className={styles.cardList}>
                    {s.details.map((d, j) => (
                      <li key={j}>
                        <span className={styles.bullet}>→</span> {d}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cardNote}>✦ {s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile cards */}
          <div className={styles.mobileCards}>
            {services.map((s, i) => (
              <div
                key={s.id}
                ref={cardRefs[i]}
                className={`${styles.mobileCard} ${styles.fadeIn}`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardTag}>{s.tag}</span>
                  <span className={styles.cardId}>{s.id}</span>
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
                <ul className={styles.cardList}>
                  {s.details.map((d, j) => (
                    <li key={j}>
                      <span className={styles.bullet}>→</span> {d}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardNote}>✦ {s.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Works */}
        <section className={styles.whySection}>
          <div ref={refWhyHeader} className={`${styles.sectionHeader} ${styles.fadeIn}`}>
            <span className={styles.tag}>// 02 — The Philosophy</span>
            <h2>Why Simple Works.</h2>
          </div>
          <div className={styles.whyGrid}>
            {[
              {
                num: "01",
                heading: "No bloat.",
                body: "Most agencies pad projects with features you'll never use. We strip everything back to what your business actually needs — a clean, fast site that converts visitors.",
              },
              {
                num: "02",
                heading: "No lock-in.",
                body: "Monthly retainers are a trap. You pay one time, you own everything. If you ever want to change, move, or hand it to someone else — you can. Zero friction.",
              },
              {
                num: "03",
                heading: "No mystery.",
                body: "You'll know exactly what we're building and why. Every decision is explained. We're students, not a black box — we build with you, not just for you.",
              },
              {
                num: "04",
                heading: "No shortcuts.",
                body: "Everything is hand-coded from scratch. No page builders, no bloated themes. Clean code means faster sites, better SEO, and something that actually lasts.",
              },
            ].map((w, i) => (
              <div
                key={w.num}
                ref={whyRefs[i]}
                className={`${styles.whyCard} ${styles.fadeIn}`}
              >
                <span className={styles.whyNum}>{w.num}</span>
                <h3>{w.heading}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <div ref={refCompHeader} className={`${styles.sectionHeader} ${styles.fadeIn}`}>
            <span className={styles.tag}>// 03 — The Comparison</span>
            <h2>How We Stack Up.</h2>
            <p>See how Daedalus compares to traditional agencies and DIY builders.</p>
          </div>
          <div ref={refTableWrap} className={`${styles.tableWrap} ${styles.fadeIn}`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className={styles.thDaedalus}>Daedalus</th>
                  <th>Agency</th>
                  <th>DIY Builder</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td className={styles.tdDaedalus}>
                      {row.daedalus ? <span className={styles.yes}>✓</span> : <span className={styles.no}>✗</span>}
                    </td>
                    <td>
                      {row.agency ? <span className={styles.yes}>✓</span> : <span className={styles.no}>✗</span>}
                    </td>
                    <td>
                      {row.diy ? <span className={styles.yes}>✓</span> : <span className={styles.no}>✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section ref={refCta} className={`${styles.ctaSection} ${styles.fadeIn}`}>
          <span className={styles.tag}>// 04 — Next Step</span>
          <h2>Ready to Build?</h2>
          <p>
            Tell us about your business. We'll send you a free, tailored proposal within 24 hours —
            no commitment required.
          </p>
          <a href="/#contact" className={styles.ctaBtn}>
            → Request a Free Proposal
          </a>
          <p className={styles.ctaMeta}>Takes 2 minutes · No commitment · Response within 24h</p>
        </section>

      </main>
      <Footer/>
    </>
  );
}