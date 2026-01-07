import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      project: 'Modular Kitchen',
      text: 'Sher Mohammad transformed our kitchen into a beautiful, functional space. His attention to detail and craftsmanship are exceptional. The modular kitchen he designed exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Noida',
      project: 'Wardrobe Design',
      text: 'We hired Sher for custom wardrobes in our bedroom. The quality of work, finish, and the way he maximized storage space is remarkable. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Verma',
      location: 'Gurgaon',
      project: 'Wood Flooring',
      text: 'Professional, punctual, and perfectionist - that\'s Sher Mohammad. The wood flooring work he did in our living room has received countless compliments from guests.',
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
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                    <small>Project: {testimonial.project}</small>
                  </div>
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
