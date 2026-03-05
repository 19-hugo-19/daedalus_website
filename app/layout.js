'use client'

import IntroAnimation from './components/IntroAnimation'
import './globals.css'
import { useState } from 'react'

export default function RootLayout({ children }) {
  const [introDone, setIntroDone] = useState(false)

  return (
    <html lang="en">
      <body>
        {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
        {children}
      </body>
    </html>
  )
}