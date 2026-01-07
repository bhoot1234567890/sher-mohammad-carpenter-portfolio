import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      project: 'Modular Kitchen',
      text: 'Transformed our kitchen beautifully. Exceptional craftsmanship and attention to detail. Exceeded our expectations!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Noida',
      project: 'Wardrobe Design',
      text: 'Quality work and finish are remarkable. The way he maximized storage space is incredible. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Verma',
      location: 'Gurgaon',
      project: 'Wood Flooring',
      text: 'Professional, punctual, and perfectionist. The flooring has received countless compliments from guests.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about our craftsmanship"
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="testimonial-card">
                <div className="testimonial-decoration-top">"</div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                    <svg className="avatar-ring" width="60" height="60" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.3"/>
                    </svg>
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                    <small>Project: {testimonial.project}</small>
                  </div>
                </div>
                <div className="testimonial-decoration-bottom">
                  <svg width="100" height="20" viewBox="0 0 100 20">
                    <path d="M0,10 Q25,5 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="testimonials-trust">
            <div className="trust-item">
              <span className="trust-number text-gold">100%</span>
              <span className="trust-label">Satisfaction Rate</span>
            </div>
            <div className="trust-item">
              <span className="trust-number text-gold">9+</span>
              <span className="trust-label">Years of Trust</span>
            </div>
            <div className="trust-item">
              <span className="trust-number text-gold">500+</span>
              <span className="trust-label">Happy Clients</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
