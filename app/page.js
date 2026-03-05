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
  return (
    <>
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