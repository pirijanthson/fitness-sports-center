import ScrollReveal from '../ScrollReveal'
import './TrainersSection.css'

const trainers = [
  {
    name: 'Marcus Steel',
    role: 'Head Strength Coach',
    exp: '12 Years Experience',
    icon: 'fa-dumbbell',
    specialty: 'Powerlifting & Hypertrophy',
    socials: { instagram: '#', twitter: '#', linkedin: '#' },
    certs: ['NSCA-CSCS', 'CPT'],
  },
  {
    name: 'Elena Rodriguez',
    role: 'Cardio & HIIT Specialist',
    exp: '8 Years Experience',
    icon: 'fa-person-running',
    specialty: 'Fat Loss & Conditioning',
    socials: { instagram: '#', twitter: '#', linkedin: '#' },
    certs: ['ACE-CPT', 'HIIT Pro'],
  },
  {
    name: 'James Knox',
    role: 'Combat Sports Coach',
    exp: '15 Years Experience',
    icon: 'fa-hand-fist',
    specialty: 'Boxing & MMA',
    socials: { instagram: '#', twitter: '#', linkedin: '#' },
    certs: ['USA Boxing', 'MMA Coach'],
  },
  {
    name: 'Priya Sharma',
    role: 'Wellness & Yoga Instructor',
    exp: '10 Years Experience',
    icon: 'fa-spa',
    specialty: 'Flexibility & Recovery',
    socials: { instagram: '#', twitter: '#', linkedin: '#' },
    certs: ['RYT-500', 'Nutrition Coach'],
  },
]

export default function TrainersSection() {
  return (
    <section id="trainers" className="trainers section">
      <div className="container">
        <ScrollReveal>
          <div className="text-center">
            <div className="section-badge">
              <i className="fa-solid fa-user-tie"></i> Our Team
            </div>
            <h2 className="section-title">Meet The <span>Experts</span></h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">
              Our certified trainers are passionate about your success. Elite knowledge, proven methods, unstoppable drive.
            </p>
          </div>
        </ScrollReveal>

          <div className="trainers__grid">
            {trainers.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="trainer-card card">
                  {/* Avatar */}
                  <div className="trainer-card__avatar">
                    <div className="trainer-card__avatar-bg"></div>
                    <div className="trainer-card__avatar-icon">
                      <i className={`fa-solid ${t.icon}`}></i>
                    </div>
                    {/* Socials */}
                    <div className="trainer-card__socials">
                      <a href={t.socials.instagram} aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                      <a href={t.socials.twitter}   aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                      <a href={t.socials.linkedin}  aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="trainer-card__info">
                    <h3 className="trainer-card__name">{t.name}</h3>
                    <p className="trainer-card__role">{t.role}</p>
                    <p className="trainer-card__specialty">
                      <i className="fa-solid fa-star"></i> {t.specialty}
                    </p>
                    <div className="trainer-card__meta">
                      <span><i className="fa-solid fa-clock"></i> {t.exp}</span>
                    </div>
                    <div className="trainer-card__certs">
                      {t.certs.map((c, ci) => (
                        <span key={ci} className="trainer-card__cert">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
      </div>
    </section>
  )
}
