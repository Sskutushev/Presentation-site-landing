import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Send, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motionPresets'

export const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-c-bg-secondary to-c-bg-primary relative overflow-hidden">
      {/* Glowing Contact Sphere */}
      <div className="absolute -z-10 blur-3xl opacity-30 bg-c-primary/40 w-[500px] h-[500px] rounded-full animate-pulse -right-1/4 -bottom-1/4"></div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-c-bg-primary rounded-full border border-c-border mb-8">
          <span className="text-c-text-primary font-semibold">Свяжитесь с нами</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6">
          Заинтересованы в проекте?
        </h2>
        <p className="text-xl text-c-text-secondary mb-12 max-w-3xl mx-auto">
          DexSafe Pro — это идеальный "ускоритель" для L1/L2 фондов,
          бирж (CEX) или венчурных инвесторов, желающих захватить
          самый быстрорастущий рынок Web3 — Telegram.
        </p>
        
        <motion.div variants={fadeInUp} className="mb-12">
          <Button
            variant="primary"
            className="px-10 py-5 text-xl animate-pulse-slow mx-auto"
            onClick={() => window.open('https://t.me/sskutushev', '_blank')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00e0be' }}
          >
            <Send className="w-6 h-6 mr-3" />
            Связаться со мной
          </Button>
        </motion.div>

        {/* Контактная информация */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div variants={fadeInUp} className="flex flex-col items-center p-6 bg-c-bg-primary rounded-2xl border border-c-border">
            <Mail className="w-8 h-8 text-c-primary mb-4" />
            <h3 className="text-lg font-bold text-c-text-primary mb-2">Email</h3>
            <p className="text-c-text-secondary">sskutushev@gmail.com</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-col items-center p-6 bg-c-bg-primary rounded-2xl border border-c-border">
            <Send className="w-8 h-8 text-c-primary mb-4" />
            <h3 className="text-lg font-bold text-c-text-primary mb-2">Telegram</h3>
            <p className="text-c-text-secondary">@sskutushev</p>
          </motion.div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-c-border">
          <p className="text-c-text-tertiary text-sm">
            © {new Date().getFullYear()} DexSafe Wallet Pro. Все права защищены.
          </p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}