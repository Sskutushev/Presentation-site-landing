import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient'
  loading?: boolean
  children: ReactNode
}

export const Button = ({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-c-primary hover:bg-c-primary-hover text-c-bg-primary font-bold',
    secondary: 'bg-c-bg-secondary hover:bg-c-bg-tertiary text-c-text-primary',
    outline: 'border border-c-border hover:border-c-primary text-c-text-primary',
    gradient: 'bg-gradient-to-r from-c-primary to-green-400 text-c-bg-primary font-bold hover:from-c-primary-hover hover:to-c-primary'
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`        ${variants[variant]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        px-6 py-3 rounded-lg font-bold transition-all duration-300
        shadow-lg hover:shadow-xl
        flex items-center justify-center gap-2
        ${className}
     `}
      disabled={disabled || loading}
      {...props}>
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {children}
    </motion.button>
  )
}