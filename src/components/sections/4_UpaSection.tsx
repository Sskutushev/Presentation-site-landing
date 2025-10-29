import { AnimatedSection } from '../common/AnimatedSection'
import { BrainCircuit, Zap, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../lib/motionPresets'

interface UpaStep {
  icon: React.ElementType;
  title: string;
  text: string;
}

const upaSteps: UpaStep[] = [
  {
    icon: BrainCircuit,
    title: '1. ИИ-Анализ',
    text: 'Вы вводите адрес. UPA Engine анализирует его: "Это биржа? Частный кошелек? Какую сеть он предпочитает?"',
  },
  {
    icon: Zap,
    title: '2. Мульти-Маршрутизация',
    text: 'Движок в реальном времени рассчитывает 10+ маршрутов (свопы, мосты, L2) для вашей транзакции.',
  },
  {
    icon: CheckCircle,
    title: '3. Оптимальный Путь',
    text: 'UPA предлагает вам ОДИН, самый дешевый, быстрый и экологичный маршрут. Превращая 5 кликов в 1.',
  },
]

export const UpaSection = () => {
  return (
    <AnimatedSection id="upa" className="py-24 sm:py-32 bg-[linear-gradient(135deg,#101217_0%,#181b22_100%)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Левая часть: Визуал */}
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center justify-center relative">
          <div className="relative w-[576px] h-[414px] bg-c-bg-primary rounded-3xl flex items-center justify-center border border-c-border shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-c-primary/5 to-transparent"></div>
            <img src="/UPA.png" alt="UPA Engine schema" className="w-full h-full object-contain" />
            
            {/* Анимированные элементы */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-c-primary/10 blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-green-400/10 blur-xl animate-pulse delay-1000"></div>
          </div>
        </motion.div>

        {/* Правая часть: Текст (АКЦЕНТ) */}
        <motion.div variants={fadeInRight} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6">
            <Sparkles className="w-4 h-4 text-c-primary mr-2" />
            <span className="text-c-primary font-semibold">Наш главный актив (УТП)</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-4">
            UPA Engine:
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-c-primary to-green-400 bg-clip-text text-transparent animate-hue mb-8">
            СБП для Блокчейна
          </p>
          <p className="text-xl text-c-text-secondary max-w-3xl mb-10">
            Забудьте о сетях, мостах и газе. UPA (Universal Payment Agent) —
            это ваш интеллектуальный помощник, который делает кросс-чейн переводы
            такими же простыми, как банковский перевод.
          </p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            {upaSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div variants={fadeInUp} key={index} className="flex items-start gap-6 p-6 bg-c-bg-secondary rounded-2xl border border-c-border hover:border-c-primary/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-c-primary/20 to-green-400/20 rounded-xl flex items-center justify-center border border-c-border">
                    <Icon className="w-7 h-7 text-c-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-c-text-primary mb-2">{step.title}</h4>
                    <p className="text-c-text-secondary text-lg">{step.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}