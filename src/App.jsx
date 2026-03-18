import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import QuoteSection from './components/QuoteSection/QuoteSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import TrainersSection from './components/TrainersSection/TrainersSection'
import ContactSection from './components/ContactSection/ContactSection'
import MapSection from './components/MapSection/MapSection'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? 'light' : 'dark'
  }, [darkMode])

  const toggleDark = () => setDarkMode(prev => !prev)

  return (
    <>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <HeroSection />
        <QuoteSection />
        <AboutSection />
        <ServicesSection />
        <TrainersSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
