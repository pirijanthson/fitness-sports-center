import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './HeroSection.css'

const stats = [
  { icon: 'fa-users',     value: '5,000+', label: 'Active Members' },
  { icon: 'fa-dumbbell',  value: '150+',   label: 'Gym Equipment' },
  { icon: 'fa-trophy',    value: '50+',    label: 'Expert Trainers' },
  { icon: 'fa-fire',      value: '12+',    label: 'Programs' },
]

export default function HeroSection() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('span')
      p.className = 'hero__particle'
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        animation-delay: ${Math.random() * 6}s;
        animation-duration: ${Math.random() * 4 + 4}s;
      `
      container.appendChild(p)
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background particles */}
      <div className="hero__particles" ref={particlesRef}></div>

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>

      {/* Grid overlay */}
      <div className="hero__grid-overlay"></div>

      <div className="hero__content">
        {/* Badge */}
        <motion.div 
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <i className="fa-solid fa-star"></i>
          Est. 2023 · Premium Fitness
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="hero__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FORGE YOUR<br />
          <span className="hero__headline--gold">STRONGEST</span><br />
          SELF
        </motion.h1>

        <motion.p 
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Unleash your potential at Fitness Sports Center — where world-class training meets cutting-edge equipment and a community built to push your limits.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="hero__actions"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#contact" className="btn-primary hero__btn-main">
            <i className="fa-solid fa-bolt"></i> Join Now
          </a>
          <a href="#about" className="btn-outline">
            <i className="fa-solid fa-play"></i> Learn More
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div 
          className="hero__stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="hero__stat">
              <div className="hero__stat-icon">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <div>
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  )
}
