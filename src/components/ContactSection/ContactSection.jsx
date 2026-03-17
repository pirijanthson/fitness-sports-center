import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ScrollReveal from '../ScrollReveal'
import './ContactSection.css';

const infoItems = [
  { icon: 'fa-location-dot', label: 'Address', value: '45 Fitness Lane, Colombo 07, Sri Lanka' },
  { icon: 'fa-phone', label: 'Phone', value: '+94 11 234 5678' },
  { icon: 'fa-envelope', label: 'Email', value: 'info@fitnesssportscenter.lk' },
  { icon: 'fa-clock', label: 'Hours', value: 'Open 24 Hours, 7 Days a Week' },
];

export default function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  // React Hook Form for real-time validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange', // Real-time validation
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorVisible(false);

    try {
      // Simulating a local submission (removing external API as requested)
      console.log('Form Submitted locally:', data);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoading(false);
      setSuccess(true);
      reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setLoading(false);
      setErrorVisible(true);
      console.error('Submission error:', err);
      setTimeout(() => setErrorVisible(false), 5000);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <ScrollReveal>
          <div className="text-center">
            <div className="section-badge">
              <i className="fa-solid fa-paper-plane"></i> Contact Us
            </div>
            <h2 className="section-title">
              Get In <span>Touch</span>
            </h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">
              Ready to start? Have a question? Our team is here to help — reach out and we'll respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact__grid">
          {/* Info Panel */}
          <ScrollReveal direction="right" distance={60}>
            <div className="contact__info">
              <h3 className="contact__info-title">Visit Us</h3>
              <p className="contact__info-sub">We'd love to show you around our world-class facility.</p>

              <div className="contact__info-items">
                {infoItems.map((item, i) => (
                  <div key={i} className="contact__info-item">
                    <div className="contact__info-icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <div className="contact__info-label">{item.label}</div>
                      <div className="contact__info-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__socials">
                <p className="contact__socials-label">Follow Us</p>
                <div className="contact__socials-links">
                  <a href="#" aria-label="Instagram" className="contact__social-btn">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Facebook" className="contact__social-btn">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="YouTube" className="contact__social-btn">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" aria-label="TikTok" className="contact__social-btn">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left" distance={60} delay={0.2}>
            <div className="contact__form-wrapper card">
              {success ? (
                <div className="contact__success">
                  <div className="contact__success-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setSuccess(false)}>
                    <i className="fa-solid fa-arrow-left"></i> Send Another
                  </button>
                </div>
              ) : (
                <form
                  className="contact__form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <h3 className="contact__form-title">Send a Message</h3>

                  {errorVisible && (
                    <div className="contact__error-alert">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <div className="contact__form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="fa-solid fa-user"></i> Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Doe"
                        className={errors.name ? 'input--error' : ''}
                      />
                      {errors.name && (
                        <span className="error-msg">
                          <i className="fa-solid fa-triangle-exclamation"></i> {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="fa-solid fa-envelope"></i> Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email address',
                          },
                        })}
                        placeholder="john@example.com"
                        className={errors.email ? 'input--error' : ''}
                      />
                      {errors.email && (
                        <span className="error-msg">
                          <i className="fa-solid fa-triangle-exclamation"></i> {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="fa-solid fa-message"></i> Message
                    </label>
                    <textarea
                      id="message"
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className={errors.message ? 'input--error' : ''}
                    />
                    {errors.message && (
                      <span className="error-msg">
                        <i className="fa-solid fa-triangle-exclamation"></i> {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn-primary contact__submit" disabled={loading}>
                    {loading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
