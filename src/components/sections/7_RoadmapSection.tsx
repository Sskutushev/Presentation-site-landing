import { AnimatedSection } from '../common/AnimatedSection'
import { Rocket, Server, LayoutTemplate, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../lib/motionPresets'

const roadmap = [
  {
    icon: Server,
    title: 'Фаза 1: Backend & UPA API',
    text: 'Реализация бэкенд-логики UPA Engine, развертывание смарт-контрактов для DeFi и геймификации.',
  },
  {
    icon: LayoutTemplate,
    title: 'Фаза 2: Browser Extension',
    text: 'Портирование функционала в расширение для Chrome, Firefox и Brave. Синхронизация с Mini App.',
  },
  {
    icon: Smartphone,
    title: 'Фаза 3: Mobile Native',
    text: 'Запуск полноценных нативных приложений для iOS и Android для максимального охвата аудитории.',
  },
  {
    icon: Rocket,
    title: 'Фаза 4: P2P & Advanced',
    text: 'Запуск P2P Маркетплейса, интеграция NFT, стейкинга и поддержки аппаратных кошельков.',
  },
]

export const RoadmapSection = () => {
  return (
    <AnimatedSection id="roadmap" className="py-24 sm:py-32">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6">
            <span className="text-c-text-secondary text-sm">План развития</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6">
            Масштабирование от MVP до Экосистемы
          </h2>
          <p className="text-xl text-c-text-secondary">
            Четкий план развития продукта
          </p>
        </motion.div>

        {/* Горизонтальная/Вертикальная Дорожная карта */}
        <div className="mt-24">
          <div className="relative">
            {/* Линия (видна на md+) */}
            <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-1 bg-gradient-to-b from-c-primary to-emerald-400 -translate-x-1/2 rounded-full shadow-glow-primary-light" />

            {/* Линия (видна на sm) */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-c-primary to-emerald-400 -translate-x-1/2 rounded-full shadow-glow-primary-light" />

            <div className="space-y-16">
              {roadmap.map((item, index) => {
                const Icon = item.icon
                const isOdd = index % 2 !== 0
                return (
                  <motion.div 
                    key={index}
                    variants={isOdd ? fadeInRight : fadeInLeft}
                    className={`md:flex items-center md:relative ${isOdd ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Контент */}
                    <div className={`md:w-1/2 ${isOdd ? 'md:pl-16' : 'md:pr-16'} md:ml-0 ml-12`}>
                      <div className="bg-c-bg-secondary p-8 rounded-3xl border border-c-border shadow-xl hover:border-c-primary/50 transition-all duration-300"
                        // Remove hover-lift, as it's not explicitly in the plan for this element
                        whileHover={{y: -5, boxShadow: '0 0 25px rgba(0, 224, 190, 0.2)'}}
                        transition={{duration: 0.2}}
                      >
                        <h3 className="text-2xl font-bold text-c-primary mb-4">
                          {item.title}
                        </h3>
                        <p className="text-c-text-secondary">{item.text}</p>
                      </div>
                    </div>

                    {/* Иконка на линии */}
                    <div className="absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-14 h-14 bg-gradient-to-br from-c-primary to-emerald-400 rounded-full flex items-center justify-center ring-8 ring-c-bg-primary shadow-2xl animate-pulse">
                        <Icon className="w-7 h-7 text-c-bg-primary" />
                        {/* Glow ring */}
                        <span className="absolute inset-0 rounded-full bg-c-primary opacity-30 blur-md animate-ping ease-out"></span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}