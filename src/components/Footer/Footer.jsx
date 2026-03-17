import './Footer.css'

const footerLinks = {
  Join:     ['About Us', 'Our Team', 'Expert Services'],
  Help:     ['Contact Us', 'Support'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img src="/assets/logo.jpg" alt="Fitness Sports Center" />
              <div>
                <span className="footer__logo-name"><span>Fitness</span> Sports Center</span>
                <span className="footer__logo-tag">Est. 2023</span>
              </div>
            </a>
            <p className="footer__tagline">
              Forging stronger bodies and sharper minds since 2023. Your journey to peak performance starts here.
            </p>
            <div className="footer__socials">
              {[
                ['fa-instagram', 'Instagram'],
                ['fa-facebook-f', 'Facebook'],
                ['fa-youtube', 'YouTube'],
                ['fa-x-twitter', 'Twitter'],
                ['fa-tiktok', 'TikTok'],
              ].map(([icon, label]) => (
                <a key={label} href="#" aria-label={label} className="footer__social">
                  <i className={`fa-brands ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer__col">
              <h4 className="footer__col-title">{group}</h4>
              <ul className="footer__col-links">
                {links.map(link => (
                  <li key={link}>
                    <a 
                      href={
                        link === 'About Us' ? '#about' : 
                        link === 'Our Team' ? '#trainers' : 
                        link === 'Expert Services' ? '#services' : 
                        link === 'Contact Us' ? '#contact' : '#'
                      } 
                      className="footer__link"
                    >
                      <i className="fa-solid fa-chevron-right"></i> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h4 className="footer__col-title">Newsletter</h4>
            <p className="footer__newsletter-sub">Get fitness tips and exclusive deals straight to your inbox.</p>
            <div className="footer__newsletter-form">
              <input type="email" placeholder="your@email.com" aria-label="Email for newsletter" />
              <button className="btn-primary footer__newsletter-btn" aria-label="Subscribe">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Fitness Sports Center. All rights reserved.</p>
          <p>
            Made with <i className="fa-solid fa-heart" style={{ color: 'var(--gold)' }}></i> by the FSC Team
          </p>
        </div>
      </div>
    </footer>
  )
}
