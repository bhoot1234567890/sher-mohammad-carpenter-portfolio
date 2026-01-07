import { useState, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';
import { LazyImage } from '../ui/LazyImage';
import { ImageModal } from '../ui/ImageModal';
import type { PortfolioImage } from '../../data/portfolioData';
import { getImageUrl } from '../../data/portfolioData';

import '../ui/ImageModal.css';

export const Gallery: React.FC = () => {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  useEffect(() => {
    fetch('/image_analysis_results.json')
      .then(res => res.json())
      .then(data => {
        console.log('Loaded images:', data.images?.length || 0);
        setImages(data.images || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading gallery data:', err);
        setLoading(false);
      });
  }, []);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'wardrobe', label: 'Wardrobes' },
    { id: 'detail', label: 'Details' }
  ];

  const filteredImages = images.filter(img => {
    if (activeFilter === 'all') return true;

    const subject = img.analysis.primary_subject.toLowerCase();
    const type = img.analysis.image_type.toLowerCase();

    switch (activeFilter) {
      case 'furniture':
        return subject.includes('furniture') ||
               subject.includes('cabinet') ||
               subject.includes('table') ||
               subject.includes('chair') ||
               subject.includes('bed');
      case 'kitchen':
        return subject.includes('kitchen');
      case 'wardrobe':
        return subject.includes('wardrobe') ||
               subject.includes('storage');
      case 'detail':
        return type.includes('detail') ||
               type.includes('close-up');
      default:
        return true;
    }
  });

  const sortedImages = [...filteredImages].sort((a, b) =>
    (b.analysis.portfolio_presentation?.quality_rating || 0) -
    (a.analysis.portfolio_presentation?.quality_rating || 0)
  );

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <SectionTitle
          title="Portfolio Gallery"
          subtitle="A showcase of craftsmanship and attention to detail"
        />

        <ScrollReveal delay={200}>
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="gallery-loading">
            <div className="loading-spinner"></div>
            <p>Loading gallery...</p>
          </div>
        ) : (
          <ScrollReveal delay={400}>
            <div className="gallery-grid">
              {sortedImages.map((image, index) => (
                <div
                  key={image.filename}
                  className="gallery-item clickable"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="gallery-image-wrapper">
                    <LazyImage
                      src={getImageUrl(image.filename)}
                      alt={image.analysis.primary_subject}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-content">
                        <span className="gallery-category">
                          {image.analysis.image_type}
                        </span>
                        <h4 className="gallery-title">
                          {image.analysis.primary_subject}
                        </h4>
                        <p className="gallery-description">
                          {image.analysis.portfolio_presentation?.accompanying_text}
                        </p>
                        <div className="gallery-rating">
                          <span className="text-gold">
                            ★ {image.analysis.portfolio_presentation?.quality_rating || 'N/A'}/10
                          </span>
                        </div>
                        <div className="gallery-click-hint">
                          Click to view details
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <span className="gallery-info-category">
                      {image.analysis.image_type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {sortedImages.length === 0 && (
              <div className="gallery-empty">
                <p>No images found for this category.</p>
              </div>
            )}
          </ScrollReveal>
        )}
      </div>

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};
