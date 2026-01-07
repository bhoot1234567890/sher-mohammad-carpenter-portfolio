import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '⌂',
      title: 'Modular Kitchens',
      description: 'Custom designs blending functionality with aesthetics. Spaces that inspire culinary creativity.',
      features: ['Custom Layouts', 'Smart Storage']
    },
    {
      icon: '◫',
      title: 'Wardrobes & Storage',
      description: 'Intelligently designed storage solutions. Organized elegance that maximizes your space.',
      features: ['Walk-in Wardrobes', 'Sliding Doors']
    },
    {
      icon: '⌶',
      title: 'Custom Furniture',
      description: 'Bespoke pieces crafted to your specifications. Unique expressions of style.',
      features: ['Beds & Headboards', 'TV Units']
    },
    {
      icon: '⊟',
      title: 'Doors & Windows',
      description: 'Handcrafted pieces enhancing your home\'s character. Traditional techniques, modern design.',
      features: ['Panel Doors', 'French Windows']
    },
    {
      icon: '▦',
      title: 'Wood Flooring',
      description: 'Premium flooring bringing warmth and elegance. Professional installation with precision.',
      features: ['Hardwood Floors', 'Engineered Wood']
    },
    {
      icon: '⎔',
      title: 'PVC Panels',
      description: 'Modern wall and ceiling solutions. Durable, moisture-resistant, and elegant.',
      features: ['Wall Cladding', 'Ceiling Panels']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header-decoration">
          <svg width="100" height="4" viewBox="0 0 100 4">
            <line x1="0" y1="2" x2="100" y2="2" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4"/>
          </svg>
        </div>
        <SectionTitle
          title="Services & Expertise"
          subtitle="Comprehensive carpentry solutions tailored to your needs"
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="service-card">
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet text-gold">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="services-cta">
            <div className="cta-decoration">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"/>
                <path d="M15 20 L20 25 L25 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Have a custom project in mind?</h3>
            <p>I specialize in bringing unique visions to life. Let's discuss your requirements.</p>
            <a href="#contact" className="btn-primary">
              Start a Conversation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
