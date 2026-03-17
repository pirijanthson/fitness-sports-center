import ScrollReveal from '../ScrollReveal'
import './AboutSection.css'

const highlights = [
  { icon: 'fa-shield-halved', title: 'Safe Environment',     desc: 'Sanitized equipment and trained staff ensure your safety.' },
  { icon: 'fa-chart-line',    title: 'Proven Results',       desc: 'Science-backed programs that deliver visible outcomes.' },
  { icon: 'fa-users',         title: 'Community Driven',     desc: 'Train alongside a supportive community of like-minded athletes.' },
  { icon: 'fa-clock',         title: 'Open 24/7',            desc: 'Train on your schedule — we never close.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        {/* Left – Visual */}
        <ScrollReveal direction="right" distance={80}>
          <div className="about__visual">
            <div className="about__img-wrapper">
              <div className="about__img-bg"></div>
              <img src="/assets/logo.jpg" alt="Fitness Sports Center" className="about__logo-big" />
              {/* Floating badges */}
              <div className="about__badge about__badge--1">
                <i className="fa-solid fa-trophy"></i>
                <span>#1 Gym in the City</span>
              </div>
              <div className="about__badge about__badge--2">
                <i className="fa-solid fa-award"></i>
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right – Content */}
        <ScrollReveal direction="left" distance={80} delay={0.2}>
          <div className="about__content">
            <div className="section-badge">
              <i className="fa-solid fa-circle-info"></i> About Us
            </div>
            <h2 className="section-title">
              More Than a Gym.<br /><span>A Lifestyle.</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="about__text">
              Founded in 2023, <strong>Fitness Sports Center</strong> is your city's most advanced training destination. We combine premium equipment, elite coaching, and a culture of excellence to help you smash every goal.
            </p>
            <p className="about__text">
              Whether you're a beginner stepping into the gym for the first time, or a seasoned athlete chasing peak performance — we have the tools, trainers, and training environment you need.
            </p>

            <div className="about__highlights">
              {highlights.map((h, i) => (
                <div key={i} className="about__highlight">
                  <div className="about__highlight-icon">
                    <i className={`fa-solid ${h.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="about__highlight-title">{h.title}</h4>
                    <p className="about__highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              <i className="fa-solid fa-arrow-right"></i> Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
