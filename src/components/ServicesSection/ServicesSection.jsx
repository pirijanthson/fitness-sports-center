import { useState } from 'react'
import ScrollReveal from '../ScrollReveal'
import './ServicesSection.css'

const services = [
  {
    icon: 'fa-dumbbell',
    category: 'strength',
    title: 'Weight Training',
    desc: 'Build raw strength and muscle mass with our full range of free weights, barbells, and resistance machines supervised by certified coaches.',
    tags: ['Powerlifting', 'Bodybuilding', 'Strength'],
  },
  {
    icon: 'fa-person-running',
    category: 'cardio',
    title: 'Cardio & Conditioning',
    desc: 'Elevate your endurance with treadmills, rowers, bikes, and HIIT circuits designed to torch calories and boost cardiovascular health.',
    tags: ['HIIT', 'Endurance', 'Fat Burn'],
  },
  {
    icon: 'fa-fire-flame-curved',
    category: 'classes',
    title: 'Group Fitness Classes',
    desc: 'High-energy group classes including Zumba, Spin Cycling, Kickboxing, and Yoga — motivating you every step of the way.',
    tags: ['Zumba', 'Spin', 'Yoga'],
  },
  {
    icon: 'fa-user-tie',
    category: 'strength',
    title: 'Personal Training',
    desc: 'One-on-one sessions with an elite trainer who builds a fully personalised program tailored to your body type and goals.',
    tags: ['Custom Plan', 'One-on-One', 'Goal Setting'],
  },
  {
    icon: 'fa-apple-whole',
    category: 'wellness',
    title: 'Nutrition Coaching',
    desc: 'Get expert dietary advice and custom meal plans from certified nutritionists to complement your training and maximise results.',
    tags: ['Diet Plan', 'Macros', 'Supplements'],
  },
  {
    icon: 'fa-spa',
    category: 'wellness',
    title: 'Recovery & Wellness',
    desc: 'Dedicated recovery zone with stretching mats, foam rollers, massage chairs, and cryotherapy sessions to keep you at peak performance.',
    tags: ['Recovery', 'Massage', 'Cryotherapy'],
  },
  {
    icon: 'fa-trophy',
    category: 'classes',
    title: 'Combat Sports',
    desc: 'Train boxing, MMA, and martial arts with our professional fighters-turned-coaches in our dedicated combat sports arena.',
    tags: ['Boxing', 'MMA', 'Martial Arts'],
  },
  {
    icon: 'fa-child-reaching',
    category: 'cardio',
    title: 'Functional Training',
    desc: 'Improve agility, mobility, and overall athleticism through functional movement patterns and sports-specific conditioning.',
    tags: ['Mobility', 'Athletics', 'Agility'],
  },
]

const categories = ['all', 'strength', 'cardio', 'classes', 'wellness']

export default function ServicesSection() {
  const [active, setActive]     = useState('all')
  const [search, setSearch]     = useState('')

  const filtered = services.filter(s => {
    const matchCat    = active === 'all' || s.category === active
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) ||
                        s.desc.toLowerCase().includes(search.toLowerCase()) ||
                        s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <section id="services" className="services section">
      <div className="services__bg-orb"></div>
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <div className="section-badge">
              <i className="fa-solid fa-grid-2"></i> Services
            </div>
            <h2 className="section-title">What We <span>Offer</span></h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">
              Explore our full suite of fitness services — from iron-pumping strength work to mindful recovery. Something for every goal.
            </p>
          </div>
        </ScrollReveal>

        {/* Search + Filter */}
        <div className="services__controls">
          <div className="services__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search services, tags..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search services"
            />
            {search && (
              <button onClick={() => setSearch('')} className="services__clear" aria-label="Clear search">
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          <div className="services__filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`services__filter-btn ${active === cat ? 'services__filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <div className="services__empty">
            <i className="fa-solid fa-face-meh"></i>
            <p>No services found. Try a different filter or search term.</p>
          </div>
        ) : (
          <div className="services__grid">
            {filtered.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="service-card card">
                  <div className="service-card__icon">
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <div className="service-card__tags">
                    {s.tags.map((t, ti) => (
                      <span key={ti} className="service-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
