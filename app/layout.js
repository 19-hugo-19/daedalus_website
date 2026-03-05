'use client'

import IntroAnimation from './components/IntroAnimation'
import './globals.css'
import { useCallback, useEffect, useState } from 'react'

export default function RootLayout({ children }) {
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
    <html lang="en">
      <body>
        {introVisible && (
          <IntroAnimation
            onFadeStart={handleFadeStart}
            onComplete={handleComplete}
          />
        )}
        {children}
      </body>
    </html>
  )
}
