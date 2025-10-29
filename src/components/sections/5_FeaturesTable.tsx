import { AnimatedSection } from '../common/AnimatedSection'
import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../lib/motionPresets'

const features = [
  { name: 'UPA Engine (СБП)', dexsafe: true, metamask: false, trust: false },
  { name: 'Интеграция RWA (ЦФА)', dexsafe: 'ui', metamask: false, trust: false },
  { name: 'DeFi Lending Hub', dexsafe: 'ui', metamask: false, trust: 'partial' },
  { name: 'Фокус на Eco-Chain', dexsafe: true, metamask: false, trust: false },
  { name: 'Нативность в Telegram', dexsafe: true, metamask: false, trust: false },
  { name: 'Геймификация (SocialFi)', dexsafe: 'ui', metamask: false, trust: 'partial' },
]

const renderCheck = (value: boolean | string) => {
  if (value === true) {
    return <Check className="w-8 h-8 text-c-primary mx-auto" />
  }
  if (value === 'ui') {
    return <span className="text-c-primary font-bold text-base">UI Готов</span>
  }
  if (value === 'partial') {
    return <span className="text-c-text-tertiary text-sm">Частично</span>
  }
  return <X className="w-8 h-8 text-c-text-tertiary mx-auto" />
}

export const FeaturesTable = () => {
  return (
    <AnimatedSection id="features" className="py-24 sm:py-32">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-4">
            <span className="text-c-text-secondary text-sm">Конкурентный анализ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-c-text-primary mb-6 relative">
            Почему мы уникальны
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-c-primary to-transparent rounded-full"></span>
          </h2>
          <p className="text-xl text-c-text-secondary">
            Сравнение возможностей различных решений
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="min-w-full inline-block align-middle">
            <motion.div variants={fadeInUp} className="overflow-hidden border border-c-border rounded-2xl shadow-2xl bg-white/5 backdrop-blur-md">
              <table className="min-w-full divide-y divide-c-border hidden sm:table">
                <thead className="bg-c-bg-secondary/50 backdrop-blur-sm">
                  <tr>
                    <th scope="col" className="py-5 px-6 text-left text-lg font-bold text-c-text-primary">
                      Фича
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-lg font-bold text-c-text-primary bg-gradient-to-r from-c-primary/10 to-transparent">
                      <div className="flex items-center justify-center">
                        <img src="/Logo.png" alt="DexSafe.Pro Logo" className="w-[20px] h-[20px] mr-2" />
                        DexSafe.Pro
                      </div>
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-lg font-bold text-c-text-secondary">
                      <div className="flex items-center justify-center">
                        <img src="https://cdn.worldvectorlogo.com/logos/metamask.svg" alt="MetaMask Logo" className="w-[15px] h-[15px] mr-2" />
                        MetaMask
                      </div>
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-lg font-bold text-c-text-secondary">
                      <div className="flex items-center justify-center">
                        <img src="/4803621-middle.png" alt="Trust Wallet Logo" className="w-[15px] h-[15px] mr-2" />
                        Trust Wallet
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-c-bg-tertiary">
                  {features.map((feature, idx) => (
                    <motion.tr variants={fadeInUp} key={idx} className="hover:bg-c-bg-tertiary/40 transition-colors duration-200">
                      <td className="py-5 px-6 whitespace-nowrap text-lg font-medium text-c-text-primary">
                        {feature.name}
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap text-center">
                        <div className="flex justify-center">
                          {renderCheck(feature.dexsafe)}
                        </div>
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap text-center text-c-text-secondary">
                        {renderCheck(feature.metamask)}
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap text-center text-c-text-secondary">
                        {renderCheck(feature.trust)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile / Stacked Layout */}
              <div className="sm:hidden divide-y divide-c-border">
                {features.map((feature, idx) => (
                  <motion.div variants={fadeInUp} key={idx} className="p-4 bg-c-bg-secondary/50">
                    <div className="text-lg font-bold text-c-text-primary mb-2">{feature.name}</div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-c-text-secondary text-sm mb-1">DexSafe.Pro</div>
                        {renderCheck(feature.dexsafe)}
                      </div>
                      <div>
                        <div className="text-c-text-secondary text-sm mb-1">MetaMask</div>
                        {renderCheck(feature.metamask)}
                      </div>
                      <div>
                        <div className="text-c-text-secondary text-sm mb-1">Trust Wallet</div>
                        {renderCheck(feature.trust)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}