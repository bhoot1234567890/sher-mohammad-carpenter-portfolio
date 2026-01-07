import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const About: React.FC = () => {
  const expertise = [
    {
      title: 'Custom Woodwork',
      description: 'Expert craftsmanship in bespoke furniture and architectural elements',
      icon: '🪵'
    },
    {
      title: 'Modular Solutions',
      description: 'Space-efficient kitchens and wardrobes with precision engineering',
      icon: '📐'
    },
    {
      title: 'Traditional Techniques',
      description: 'Time-honored joinery methods combined with modern innovation',
      icon: '🔨'
    },
    {
      title: 'Premium Finishes',
      description: 'Meticulous attention to surface quality and lasting beauty',
      icon: '✨'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionTitle
          title="About Sher Mohammad"
          subtitle="A legacy of excellence in carpentry and craftsmanship"
        />

        <div className="about-content">
          <ScrollReveal delay={200} direction="left">
            <div className="about-text">
              <h3 className="about-heading">
                Crafting <span className="text-gold">Dreams</span> Into Reality
              </h3>

              <div className="about-description">
                <p>
                  With 9+ years transforming spaces across Delhi NCR, I bring traditional craftsmanship
                  to modern designs. Specializing in custom kitchens, wardrobes, and furniture that
                  elevate your living experience.
                </p>
                <p>
                  Every joint, finish, and detail is crafted with precision. I don't just build with wood—
                  I create spaces that enhance how you live.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon-wrapper">
                    <svg className="highlight-svg" width="40" height="40" viewBox="0 0 40 40">
                      <rect x="5" y="10" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <line x1="10" y1="15" x2="30" y2="15" stroke="currentColor" strokeWidth="2"/>
                      <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="2"/>
                      <line x1="10" y1="25" x2="25" y2="25" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Premium Materials</h4>
                    <p>Finest quality woods</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon-wrapper">
                    <svg className="highlight-svg" width="40" height="40" viewBox="0 0 40 40">
                      <polygon points="20,5 35,30 5,30" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Custom Design</h4>
                    <p>Tailored to your space</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon-wrapper">
                    <svg className="highlight-svg" width="40" height="40" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="20,12 20,20 26,20" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Timely Delivery</h4>
                    <p>Respect for deadlines</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <div className="about-expertise">
              <div className="expertise-header">
                <svg className="expertise-decoration" width="60" height="60" viewBox="0 0 60 60">
                  <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
                  <circle cx="30" cy="30" r="8" fill="currentColor"/>
                </svg>
                <h4 className="expertise-title">Areas of Expertise</h4>
              </div>
              <div className="expertise-grid">
                {expertise.map((item, index) => (
                  <div key={index} className="expertise-card">
                    <div className="expertise-icon">{item.icon}</div>
                    <div className="expertise-number text-gold">0{index + 1}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
