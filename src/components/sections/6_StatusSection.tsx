import { AnimatedSection } from '../common/AnimatedSection'
import { CheckCircle, Clock, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../lib/motionPresets'

const done = [
  'Ядро кошелька (100%)',
  'Безопасное хранение (AES)',
  'Отправка/Получение XEC',
  'Полная Дизайн-Система',
  'Оптимизация (Code Splitting)',
]

const uiReady = [
  'UPA Engine (Frontend + API)',
  'DeFi Hub (Mock-данные)',
  'Геймификация (Mock-данные)',
  'Список токенов (Mock-данные)',
  'Тесты (Написаны, но нестабильны)',
]

export const StatusSection = () => {
  return (
    <AnimatedSection id="status" className="py-24 sm:py-32">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6">
            <span className="text-c-text-secondary text-sm">Текущий Статус</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6">
            Готовый продукт, а не идея
          </h2>
          <p className="text-xl text-c-text-secondary max-w-3xl mx-auto">
            Вы получаете готовый, безопасный и оптимизированный Frontend-продукт,
            экономя <span className="text-c-primary font-bold">минимум 6 месяцев</span> работы R&D-команды.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div variants={fadeInUp} className="mt-16 max-w-4xl mx-auto">
          <div className="text-right text-c-text-secondary text-sm mb-2">70% Готово</div>
          <div className="w-full h-2 bg-c-border rounded-full overflow-hidden">
            <motion.div className="h-full bg-c-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Колонка "Реализовано" */}
          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-c-border shadow-xl border-l-4 border-c-success">
            <div className="flex items-center gap-3 text-2xl font-bold text-c-success mb-8">
              <CheckCircle className="w-8 h-8" />
              <span>✅ Реализовано</span>
            </div>
            <ul className="space-y-4">
              {done.map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-c-bg-primary rounded-xl border border-c-border">
                  <CheckCircle className="w-6 h-6 text-c-success flex-shrink-0 mt-1" />
                  <span className="text-c-text-primary text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Колонка "Нужен Backend" */}
          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-c-border shadow-xl border-l-4 border-c-primary">
            <div className="flex items-center gap-3 text-2xl font-bold text-c-primary mb-8">
              <Clock className="w-8 h-8" />
              <span>🟠 UI Готов (Нужен Backend)</span>
            </div>
            <ul className="space-y-4">
              {uiReady.map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-c-bg-primary rounded-xl border border-c-border">
                  <Clock className="w-6 h-6 text-c-primary flex-shrink-0 mt-1" />
                  <span className="text-c-text-primary text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div variants={fadeInUp} className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-c-primary/10 to-green-400/10 rounded-full border border-c-border">
            <Target className="w-5 h-5 text-c-primary" />
            <span className="text-c-text-primary font-medium">Продукт готов к интеграции с вашим бэкендом</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}