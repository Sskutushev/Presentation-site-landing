import { ReactNode, Fragment } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motionPresets';

interface SectionHeaderProps {
  badgeText?: string;
  badgeIcon?: React.ElementType; // For Lucide icons
  title: string;
  subtitle?: string;
  description: string; // Make description required to ensure consistent structure
  descriptionHighlight?: string; // For highlighting specific parts of the description
  children?: ReactNode;
  className?: string;
}

export const SectionHeader = ({
  badgeText,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  description,
  descriptionHighlight,
  children,
  className = '',
}: SectionHeaderProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={`text-center max-w-4xl mx-auto px-4 ${className}`}
    >
      {badgeText && (
        <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6">
          {BadgeIcon && <BadgeIcon className="w-4 h-4 text-c-primary mr-2" />}
          <span className="text-c-text-secondary text-sm">{badgeText}</span>
        </div>
      )}

      {subtitle && (
        <h3 className="text-2xl md:text-3xl font-semibold text-c-primary mb-4">{subtitle}</h3>
      )}

      <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6">{title}</h2>

      <p className="text-xl text-c-text-secondary max-w-3xl mx-auto">
        {description}
        {descriptionHighlight && (
          <span className="text-c-primary font-bold">{descriptionHighlight}</span>
        )}
      </p>

      {children}
    </motion.div>
  );
};
