import { Link } from 'react-scroll'
import { Container } from '../Container'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const navItems = [
  { label: 'Проблема', to: 'problem' },
  { label: 'Решение', to: 'solution' },
  { label: 'UPA Engine', to: 'upa' },
  { label: 'Статус', to: 'status' },
  { label: 'Roadmap', to: 'roadmap' },
  { label: 'Контакт', to: 'contact' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 0.1], [80, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  return (
    <motion.header 
      style={{ height, opacity }}
      className="sticky top-0 z-50 w-full bg-c-bg-secondary/70 backdrop-blur-xl border-b border-c-border"
      // Custom border-image for gradient line
      // style={{ borderImage: 'linear-gradient(to right, #00e0be, #00ffa2) 1' }}
    >
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center">
            <img src="/Logo.png" alt="DexSafe.Pro Logo" className="w-[60px] h-[60px] mr-4" />
            <h1 className="text-2xl font-bold text-c-text-primary hover:text-c-primary transition-colors">
              DexSafe<span className="text-c-primary">.Pro</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative text-c-text-secondary hover:text-c-primary font-medium transition-colors cursor-pointer text-lg group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-c-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-c-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-c-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-c-text-secondary hover:text-c-primary font-medium transition-colors cursor-pointer py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </motion.header>
  )
}