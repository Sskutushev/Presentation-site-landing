import React from 'react';
import { animated, useSpring, useTrail, useTransition, config } from 'react-spring';

interface SpringDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  from?: any;
  to?: any;
  className?: string;
  style?: React.CSSProperties;
}

export const SpringDiv: React.FC<SpringDivProps> = ({
  children,
  delay = 0,
  duration = 500,
  from = { opacity: 0, transform: 'translateY(30px)' },
  to = { opacity: 1, transform: 'translateY(0)' },
  className = '',
  style
}) => {
  const springProps = useSpring({
    from,
    to,
    delay,
    config: config.stiff, // Для более живого ощущения
    ...style
  });

  return (
    <animated.div style={springProps} className={className}>
      {children}
    </animated.div>
  );
};

interface SpringTrailProps {
  items: any[];
  children: (item: any, index: number) => React.ReactNode;
  className?: string;
  delay?: number;
}

export const SpringTrail: React.FC<SpringTrailProps> = ({
  items,
  children,
  className = '',
  delay = 100
}) => {
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay,
    config: config.stiff
  });

  return (
    <div className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {children(items[index], index)}
        </animated.div>
      ))}
    </div>
  );
};

interface SpringHoverProps {
  children: React.ReactNode;
  hoverTransform?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SpringHover: React.FC<SpringHoverProps> = ({
  children,
  hoverTransform = 'scale(1.05)',
  className = '',
  style
}) => {
  const [springProps, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 }
  }));

  return (
    <animated.div
      className={className}
      style={{ ...springProps, ...style }}
      onMouseEnter={() => set({ transform: hoverTransform })}
      onMouseLeave={() => set({ transform: 'scale(1)' })}
    >
      {children}
    </animated.div>
  );
};