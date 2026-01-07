import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sher Mohammad</h3>
            <p>Master Craftsman in Wood</p>
            <p className="footer-tagline">9 years of excellence in carpentry</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Portfolio</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Modular Kitchens</a></li>
                <li><a href="#services">Wardrobes</a></li>
                <li><a href="#services">Custom Furniture</a></li>
                <li><a href="#services">Wood Flooring</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+918527285231">+91 8527285231</a></li>
                <li><a href="mailto:shermohammadtuku@gmail.com">shermohammadtuku@gmail.com</a></li>
                <li>Majnu Ka Tila, Delhi - 110054</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Sher Mohammad. All rights reserved.
            </p>
            <p className="footer-credits">
              Crafted with passion for exceptional carpentry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
