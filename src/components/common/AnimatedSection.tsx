import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../Container'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export const AnimatedSection = ({ children, className = '', id }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`py-20 sm:py-28 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <Container>
        {children}
      </Container>
    </motion.section>
  )
}