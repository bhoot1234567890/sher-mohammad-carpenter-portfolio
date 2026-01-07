import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Discussion of your vision, requirements, and budget to create the perfect solution.',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Detailed plans and 3D visualizations reviewed together. Every detail finalized before production.',
      icon: '✎'
    },
    {
      number: '03',
      title: 'Craftsmanship',
      description: 'Skilled artisans bring designs to life using premium materials and time-honored techniques.',
      icon: '⚒'
    },
    {
      number: '04',
      title: 'Installation',
      description: 'Professional installation ensures everything fits perfectly. A beautifully finished space ready to enjoy.',
      icon: '✓'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <SectionTitle
          title="Our Process"
          subtitle="From vision to reality - a seamless journey"
        />

        <div className="process-timeline">
          {/* Timeline decorative line */}
          <div className="timeline-decoration">
            <svg width="100%" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
              <path d="M0,50 Q100,20 200,50 T400,50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" opacity="0.3"/>
            </svg>
          </div>
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}>
                <div className="step-connector"></div>
                <div className="step-icon">
                  <svg className="step-icon-bg" width="80" height="80" viewBox="0 0 80 80">
                    <polygon points="40,5 75,75 5,75" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  </svg>
                  <span className="step-number text-gold">{step.number}</span>
                  <span className="step-emoji">{step.icon}</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="process-cta">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss your vision and create something extraordinary together.</p>
            <a href="#contact" className="btn-primary">
              Schedule Consultation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
