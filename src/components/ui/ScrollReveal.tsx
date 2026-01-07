import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const getAnimationClass = () => {
    const baseClass = 'scroll-reveal';
    const directionClass = `scroll-reveal-${direction}`;
    const visibleClass = inView ? 'visible' : '';
    return `${baseClass} ${directionClass} ${visibleClass}`.trim();
  };

  return (
    <div
      ref={ref}
      className={getAnimationClass()}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
