import { useEffect } from 'react';
import type { PortfolioImage } from '../../data/portfolioData';

interface ImageModalProps {
  image: PortfolioImage | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    // Lock body scroll when modal is open
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;

  const analysis = image.analysis;
  const presentation = analysis.portfolio_presentation;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <span></span>
          <span></span>
        </button>

        <div className="modal-layout">
          <div className="modal-image">
            <img
              src={`/images/${image.filename}`}
              alt={analysis.primary_subject}
            />
            <div className="modal-rating">
              <span className="text-gold">
                ★ {presentation?.quality_rating || 'N/A'}/10
              </span>
            </div>
          </div>

          <div className="modal-details">
            <span className="modal-category">{analysis.image_type}</span>
            <h2 className="modal-title">{analysis.primary_subject}</h2>

            {presentation?.accompanying_text && (
              <p className="modal-description">{presentation.accompanying_text}</p>
            )}

            <div className="modal-info-grid">
              {analysis.completion_stage && (
                <div className="info-item">
                  <span className="info-label">Stage</span>
                  <span className="info-value">{analysis.completion_stage}</span>
                </div>
              )}

              {analysis.design_elements?.style && (
                <div className="info-item">
                  <span className="info-label">Style</span>
                  <span className="info-value">{analysis.design_elements.style}</span>
                </div>
              )}
            </div>

            {analysis.technical_details?.materials && analysis.technical_details.materials.length > 0 && (
              <div className="modal-section">
                <h4>Materials</h4>
                <div className="modal-tags">
                  {analysis.technical_details.materials.map((material, idx) => (
                    <span key={idx} className="tag">{material}</span>
                  ))}
                </div>
              </div>
            )}

            {analysis.technical_details?.joinery_techniques && analysis.technical_details.joinery_techniques.length > 0 && (
              <div className="modal-section">
                <h4>Techniques</h4>
                <div className="modal-tags">
                  {analysis.technical_details.joinery_techniques.map((technique, idx) => (
                    <span key={idx} className="tag">{technique}</span>
                  ))}
                </div>
              </div>
            )}

            {analysis.craftsmanship_quality && (
              <div className="modal-section">
                <h4>Craftsmanship</h4>
                <ul className="modal-list">
                  {analysis.craftsmanship_quality.precision && (
                    <li><strong>Precision:</strong> {analysis.craftsmanship_quality.precision}</li>
                  )}
                  {analysis.craftsmanship_quality.surface_quality && (
                    <li><strong>Surface:</strong> {analysis.craftsmanship_quality.surface_quality}</li>
                  )}
                  {analysis.craftsmanship_quality.attention_to_detail && (
                    <li><strong>Detail:</strong> {analysis.craftsmanship_quality.attention_to_detail}</li>
                  )}
                </ul>
              </div>
            )}

            {image.keywords && image.keywords.length > 0 && (
              <div className="modal-section">
                <h4>Keywords</h4>
                <div className="modal-tags">
                  {image.keywords.map((keyword, idx) => (
                    <span key={idx} className="tag tag-small">{keyword}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
