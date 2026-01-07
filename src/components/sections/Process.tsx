import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with a detailed discussion about your vision, requirements, budget, and timeline. Understanding your needs helps us create the perfect solution.',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team creates detailed designs and 3D visualizations. We review plans with you, make adjustments, and finalize every detail before production begins.',
      icon: '✎'
    },
    {
      number: '03',
      title: 'Craftsmanship',
      description: 'Skilled artisans bring the design to life using premium materials and time-honored techniques. Every piece is crafted with precision and care.',
      icon: '⚒'
    },
    {
      number: '04',
      title: 'Installation',
      description: 'Professional installation ensures everything fits perfectly. We handle every detail, leaving you with a beautifully finished space ready to enjoy.',
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
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}>
                <div className="step-connector"></div>
                <div className="step-icon">
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
