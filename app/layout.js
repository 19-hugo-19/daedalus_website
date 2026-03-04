import './globals.css'

export const metadata = {
  title: 'ICARUS — Web Development & Digital Solutions',
  description: 'Custom web development & contract solutions for companies that refuse to settle.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}