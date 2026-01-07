import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export const About: React.FC = () => {
  const expertise = [
    {
      title: 'Custom Woodwork',
      description: 'Expert craftsmanship in bespoke furniture and architectural elements'
    },
    {
      title: 'Modular Solutions',
      description: 'Space-efficient kitchens and wardrobes with precision engineering'
    },
    {
      title: 'Traditional Techniques',
      description: 'Time-honored joinery methods combined with modern innovation'
    },
    {
      title: 'Premium Finishes',
      description: 'Meticulous attention to surface quality and lasting beauty'
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
                  With over 9 years of dedicated experience in the art of carpentry, I have had the privilege
                  of transforming countless spaces across Delhi NCR. My journey began with a deep passion for
                  working with wood and has evolved into a commitment to delivering exceptional craftsmanship
                  in every project.
                </p>
                <p>
                  Based in Majnu Ka Tila, Delhi, I specialize in creating custom modular kitchens, wardrobes,
                  furniture, doors, windows, and PVC panel installations. Each piece I create is a testament to
                  traditional techniques meeting modern design sensibilities.
                </p>
                <p>
                  I believe that great carpentry is not just about working with wood—it's about understanding
                  how people live and creating spaces that enhance their daily experiences. Every joint, every
                  finish, and every detail is crafted with precision and care.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon text-gold">✦</span>
                  <div>
                    <h4>Premium Materials</h4>
                    <p>Only the finest quality woods and materials</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon text-gold">✦</span>
                  <div>
                    <h4>Custom Design</h4>
                    <p>Tailored solutions for your unique space</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon text-gold">✦</span>
                  <div>
                    <h4>Timely Delivery</h4>
                    <p>Respect for your time and deadlines</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <div className="about-expertise">
              <h4 className="expertise-title">Areas of Expertise</h4>
              <div className="expertise-grid">
                {expertise.map((item, index) => (
                  <div key={index} className="expertise-card">
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
