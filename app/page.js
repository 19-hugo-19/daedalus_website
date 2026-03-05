'use client'

import { useCallback, useEffect, useState } from 'react'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import CustomCursor from './components/CustomCursor'
import SpinningBadge from './components/SpinningBadge'

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true)
  const [scrollLocked, setScrollLocked] = useState(true)

  const handleFadeStart = useCallback(() => {
    setScrollLocked(false)
  }, [])

  const handleComplete = useCallback(() => {
    setScrollLocked(false)
    setIntroVisible(false)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (scrollLocked) {
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
      body.style.overflow = ''
    }

    return () => {
      html.style.overflow = ''
      body.style.overflow = ''
    }
  }, [scrollLocked])

  return (
    <>
      {introVisible && (
        <IntroAnimation
          onFadeStart={handleFadeStart}
          onComplete={handleComplete}
        />
      )}
      <BackgroundAnimation />
      <CustomCursor />
      <main>
        <Navbar />
        <Hero />
        <Ticker />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
      <SpinningBadge />
    </>
  )
}