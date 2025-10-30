import { ReactNode, memo } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const CardComponent = ({ children, className = '', onClick, ...props }: CardProps) => {
  return (
    <motion.div
      data-testid="card-container"
      className={`        bg-c-bg-secondary
        rounded-xl
        p-6
        border border-c-border
        ${onClick ? 'cursor-pointer hover:bg-c-bg-tertiary transition-colors' : ''}
        ${className}
     `}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Card = memo(CardComponent);
