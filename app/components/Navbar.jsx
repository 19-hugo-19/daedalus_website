'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import DaedalusLogo from './DaedalusLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const links = [
    { label: 'Blueprint', href: '/#services' },
    { label: 'Process', href: '/#how' },
    { label: 'About', href: '/#about' },
    { label: 'Get a Proposal', href: '/#contact' },
  ]

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a href="/#home" className={styles.logo} aria-label="DAEDALUS — home">
          <DaedalusLogo />
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Overlay sits below menu, above page content */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
      >
        <button
          className={styles.mobileClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}