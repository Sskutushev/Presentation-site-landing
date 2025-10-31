import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface AnimeDivProps {
  children: React.ReactNode;
  animation: anime.AnimeParams;
  triggerOnView?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimeDiv: React.FC<AnimeDivProps> = ({
  children,
  animation,
  triggerOnView = true,
  className = '',
  style
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      if (triggerOnView) {
        // Запуск анимации при появлении в области видимости
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              anime({
                targets: elementRef.current,
                ...animation,
                duration: animation.duration || 1000
              });
              observer.unobserve(entry.target);
            }
          });
        });

        observer.observe(elementRef.current);

        return () => {
          observer.disconnect();
        };
      } else {
        // Запуск анимации сразу
        anime({
          targets: elementRef.current,
          ...animation,
          duration: animation.duration || 1000
        });
      }
    }
  }, [animation, triggerOnView]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
};

// Предустановленные анимации для часто используемых сценариев
export const StaggerAnime: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 100,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: containerRef.current?.children,
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(delay),
              duration: 800,
              easing: 'easeOutQuad'
            });
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export const SpringAnime: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: elementRef.current,
              scale: [0.8, 1.05, 1],
              rotateZ: [0, 2, -2, 0],
              duration: 1000,
              easing: 'spring(1, 80, 10, 0)'
            });
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(elementRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};