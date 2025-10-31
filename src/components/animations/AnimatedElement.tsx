import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, rotateIn, springIn } from '../lib/motionPresets';

interface AnimatedElementProps {
  children: React.ReactNode;
  type?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'rotateIn' | 'springIn';
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  type = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  className = '',
  style
}) => {
  const getVariant = () => {
    switch(type) {
      case 'fadeInDown':
        return {
          initial: { opacity: 0, y: -40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration, ease: "easeOut", delay }
        };
      case 'fadeInLeft':
        return {
          initial: { opacity: 0, x: -60 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration, ease: "easeOut", delay }
        };
      case 'fadeInRight':
        return {
          initial: { opacity: 0, x: 60 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration, ease: "easeOut", delay }
        };
      case 'scaleIn':
        return {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration, ease: "easeOut", delay }
        };
      case 'rotateIn':
        return {
          initial: { opacity: 0, rotateY: -90 },
          whileInView: { opacity: 1, rotateY: 0 },
          transition: { duration, ease: "easeOut", delay }
        };
      case 'springIn':
        return {
          initial: { opacity: 0, y: 40 },
          whileInView: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay
            }
          }
        };
      case 'fadeInUp':
      default:
        return {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration, ease: "easeOut", delay }
        };
    }
  };

  return (
    <motion.div
      variants={getVariant()}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};