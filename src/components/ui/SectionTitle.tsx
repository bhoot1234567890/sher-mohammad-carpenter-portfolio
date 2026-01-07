import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  goldAccent?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  goldAccent = true
}) => {
  return (
    <div className={`section-title-container text-${alignment}`}>
      <h2 className="section-title">
        {goldAccent && <span className="text-gold">{title}</span>}
        {!goldAccent && title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {goldAccent && <div className="gold-line" />}
    </div>
  );
};
