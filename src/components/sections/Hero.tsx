import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <ScrollReveal delay={200}>
            <div className="hero-badge">
              <span>9 Years of Excellence</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="left">
            <h1 className="hero-title">
              Master Craftsman
              <span className="text-gold"> in Wood</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600} direction="right">
            <p className="hero-subtitle">
              Transforming spaces through exceptional carpentry and timeless craftsmanship.
              Specializing in custom modular kitchens, wardrobes, furniture, and architectural woodwork.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="hero-cta">
              <a href="#gallery" className="btn-primary">
                View Portfolio
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number shimmer">9+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number shimmer">150+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number shimmer">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={1200} direction="right">
          <div className="hero-image-container">
            <div className="hero-frame">
              <div className="hero-frame-inner">
                <img
                  src="/images/face photo for website.png"
                  alt="Sher Mohammad - Master Carpenter"
                  className="hero-image"
                />
              </div>
            </div>
            <div className="hero-decoration"></div>
          </div>
        </ScrollReveal>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};
