import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Contact: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    'Hi Sher Mohammad, I came across your portfolio and would like to discuss a carpentry project.'
  );
  const whatsappNumber = '918527285231';

  const contactInfo = [
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8527285231',
      link: `tel:+918527285231`
    },
    {
      icon: '✉',
      label: 'Email',
      value: 'shermohammadtuku@gmail.com',
      link: 'mailto:shermohammadtuku@gmail.com'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Majnu Ka Tila, Delhi - 110054',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your next carpentry project"
        />

        <div className="contact-content">
          <ScrollReveal delay={200} direction="left">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p className="contact-intro">
                Ready to transform your space with exceptional carpentry? Reach out through any of these
                channels, and I'll get back to you promptly.
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-item-content">
                      <span className="contact-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-whatsapp">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <span className="whatsapp-icon">💬</span>
                  <span className="whatsapp-text">
                    <strong>Message on WhatsApp</strong>
                    Quick response guaranteed
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <div className="contact-hours">
              <h3>Working Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Monday - Saturday</span>
                  <span className="hours-time">9:00 AM - 7:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">Closed</span>
                </div>
              </div>

              <div className="contact-areas">
                <h4>Service Areas</h4>
                <p>Delhi NCR - Delhi, Noida, Gurgaon, Ghaziabad, Faridabad</p>
              </div>

              <div className="contact-note">
                <p>
                  <span className="text-gold">✦</span> Site visits available for project consultation
                </p>
                <p>
                  <span className="text-gold">✦</span> Free quotes and design consultations
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
