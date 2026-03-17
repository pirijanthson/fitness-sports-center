import ScrollReveal from '../ScrollReveal'
import './MapSection.css';

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <ScrollReveal direction="up" distance={40}>
          <div className="map__wrapper card">
            <div className="map__info">
              <h3 className="section-title">Find Us <span>Here</span></h3>
              <p>Visit our state-of-the-art facility in the heart of Muscle City.</p>
            </div>
            <div className="map__frame-container">
              {/* Google Maps Embed iFrame - Clean and Premium */}
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.771644788188!2d79.8660877758656!3d6.917849618451877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597400000001%3A0xb3cd17075677d242!2sColombo%2007%2C%20Colombo!5e0!3m2!1sen!2slk!4v1710682000000!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
