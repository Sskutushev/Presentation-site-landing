import { AnimatedSection } from '../common/AnimatedSection'
import { Card } from '../common/Card'
import { AlertTriangle, Layers, ZapOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../lib/motionPresets'

interface Problem {
  icon: React.ElementType;
  title: string;
  text: string;
}

const problems: Problem[] = [
  {
    icon: Layers,
    title: 'Фрагментация и Сложность',
    text: 'Десятки сетей, мостов и токенов. Пользователь теряется в технических деталях, что является главным барьером для массового внедрения.',
  },
  {
    icon: ZapOff,
    title: '"Тупые" кошельки',
    text: 'Существующие кошельки (MetaMask) — это пассивные исполнители. Они не отвечают на вопрос: "Как мне *лучше* отправить $100 из сети А в сеть Б?"',
  },
  {
    icon: AlertTriangle,
    title: 'Высокие риски и барьеры',
    text: 'Комиссии, "gas", фишинговые адреса, неоптимальные свопы. Пользователь теряет деньги на каждом шагу, не имея помощника.',
  },
]

export const ProblemSection = () => {
  return (
    <AnimatedSection id="problem" className="py-24 sm:py-32 bg-gradient-to-b from-c-bg-primary to-c-bg-secondary">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6">
            <span className="text-c-text-secondary text-sm">Проблема</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6">
            Web3 все еще сложный. Мы это исправили.
          </h2>
          
          <p className="text-xl text-c-text-secondary">
            Эти проблемы мешают массовому принятию Web3 технологий
          </p>
        </motion.div>

        {/* Сетка проблем в стиле 8.jpg */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div variants={fadeInUp} key={index}>
                <Card className="bg-c-bg-secondary border border-c-border/50 p-8 rounded-xl"
                  whileHover={{ rotateZ: 1.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-c-primary/20 to-green-400/20 rounded-2xl mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-c-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-c-text-primary mb-4 text-center">
                    {problem.title}
                  </h3>
                  <p className="text-c-text-secondary text-center">{problem.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}