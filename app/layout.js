import './globals.css'

export const metadata = {
  title: 'DAEDALUS — Websites for Small Businesses',
  description: 'Simple, affordable websites for small businesses. Delivered in 4 weeks. One-time payment. You fully own it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}