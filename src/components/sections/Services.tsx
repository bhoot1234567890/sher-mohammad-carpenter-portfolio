import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '⌂',
      title: 'Modular Kitchens',
      description: 'Custom-designed kitchens that blend functionality with aesthetics. From sleek modern designs to timeless classics, we create spaces that inspire culinary creativity.',
      features: ['Custom Layouts', 'Premium Materials', 'Smart Storage', 'Modern Fixtures']
    },
    {
      icon: '◫',
      title: 'Wardrobes & Storage',
      description: 'Maximize your space with intelligently designed wardrobes and storage solutions. Crafted to organize your belongings while adding elegance to your room.',
      features: ['Walk-in Wardrobes', 'Sliding Doors', 'Built-in Units', 'Custom Compartments']
    },
    {
      icon: '⌶',
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces crafted to your specifications. From beds to TV units, each piece is a unique expression of craftsmanship and style.',
      features: ['Beds & Headboards', 'TV Units', 'Coffee Tables', 'Display Units']
    },
    {
      icon: '⊟',
      title: 'Doors & Windows',
      description: 'Handcrafted doors and windows that enhance your home\'s character. Traditional techniques meet modern design for lasting beauty and functionality.',
      features: ['Panel Doors', 'French Windows', 'Sliding Systems', 'Decorative Frames']
    },
    {
      icon: '▦',
      title: 'Wood Flooring',
      description: 'Premium wood flooring solutions that bring warmth and elegance to any space. Professional installation with meticulous attention to detail.',
      features: ['Hardwood Floors', 'Engineered Wood', 'Laminate Options', 'Finishing Services']
    },
    {
      icon: '⎔',
      title: 'PVC Panels',
      description: 'Modern PVC panel installations for walls and ceilings. Durable, moisture-resistant, and available in various designs to suit your aesthetic.',
      features: ['Wall Cladding', 'Ceiling Panels', 'Waterproof Designs', 'Easy Maintenance']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
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
