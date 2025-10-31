import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimateCSSProps {
  animation: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  infinite?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const AnimateCSS: React.FC<AnimateCSSProps> = ({
  animation,
  children,
  delay = 0,
  duration = 1,
  infinite = false,
  className = '',
  style,
  onClick
}) => {
  const animationClass = `animate__animated animate__${animation}${infinite ? ' animate__infinite' : ''}`;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay }}
      className={`${className} ${animationClass}`}
      style={{
        ...style,
        animationDuration: `${duration}s`,
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// Часто используемые анимации
export const FadeIn: React.FC<Omit<AnimateCSSProps, 'animation'>> = (props) => (
  <AnimateCSS animation="fadeIn" {...props} />
);

export const FadeInUp: React.FC<Omit<AnimateCSSProps, 'animation'>> = (props) => (
  <AnimateCSS animation="fadeInUp" {...props} />
);

export const Bounce: React.FC<Omit<AnimateCSSProps, 'animation'>> = (props) => (
  <AnimateCSS animation="bounce" {...props} />
);

export const Pulse: React.FC<Omit<AnimateCSSProps, 'animation'>> = (props) => (
  <AnimateCSS animation="pulse" {...props} />
);

export const Swing: React.FC<Omit<AnimateCSSProps, 'animation'>> = (props) => (
  <AnimateCSS animation="swing" {...props} />
);