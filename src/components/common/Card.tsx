import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const Card = ({ children, className = '', onClick }: CardProps) => {
  return (
    <motion.div
      className={`        bg-c-bg-secondary
        rounded-xl
        p-6
        border border-c-border
        ${onClick ? 'cursor-pointer hover:bg-c-bg-tertiary transition-colors' : ''}
        ${className}
     `}
      onClick={onClick}>
      {children}
    </motion.div>
  )
}