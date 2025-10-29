import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { PhoneMockup } from '../common/PhoneMockup'
import { ShieldCheck, Leaf, TrendingUp, Send, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../lib/motionPresets'
const videoSrc = '/IMG_6544.MP4';


const features = [
  { icon: ShieldCheck, title: '100% некастодиальность', text: 'Ключи шифруются (AES-256) и хранятся только у вас.' },
  { icon: Leaf, title: 'Экологичность по умолчанию', text: 'Приоритет на блокчейны с низким углеродным следом.' },
  { icon: TrendingUp, title: 'DeFi & RWA Hub', text: 'Готовый UI для P2P-кредитования и токенизированных активов.' },
]

export const SolutionSection = () => {
  return (
    <AnimatedSection id="solution" className="py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Левая часть: Текст */}
        <motion.div variants={fadeInLeft} className="text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6">
            <Sparkles className="w-4 h-4 text-c-primary mr-2" />
            <span className="text-c-text-secondary text-sm">Решение</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6">
            Web3 в вашем Telegram
          </h2>
          <p className="text-xl text-c-text-secondary max-w-xl mx-auto lg:mx-0 mb-10">
            Мы создали не просто кошелек, а интеллектуального ассистента, который живет прямо в вашем мессенджере. Безопасно, удобно и всегда под рукой.
          </p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className="space-y-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={fadeInUp} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-c-bg-secondary rounded-lg flex items-center justify-center border border-c-border">
                    <Icon className="w-6 h-6 text-c-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-c-text-primary">{feature.title}</h4>
                    <p className="text-c-text-secondary">{feature.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <Button 
            variant="primary" 
            className="w-full sm:w-auto"
            onClick={() => window.open('https://t.me/DexSafeMiniApp_bot', '_blank')}
          >
            <Send className="w-5 h-5 mr-2" />
            Запустить бота в Telegram
          </Button>
        </motion.div>

        {/* Правая часть: Визуал */}
        <motion.div variants={fadeInRight} className="flex items-center justify-center lg:justify-end mt-2.5">
          <PhoneMockup>
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </PhoneMockup>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}