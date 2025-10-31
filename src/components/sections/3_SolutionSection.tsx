import { AnimatedSection } from '../common/AnimatedSection';
import { Button } from '../common/Button';
import { PhoneMockup } from '../common/PhoneMockup';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldCheck, Leaf, TrendingUp, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../lib/motionPresets';
import { useTranslation } from 'react-i18next'; // Хук для перевода

export const SolutionSection = () => {
  const { t } = useTranslation(); // Хук для перевода

  // Задаем фичи с переводами
  const features = [
    {
      icon: ShieldCheck,
      title: t('solution.features.0.title'),
      text: t('solution.features.0.text'),
    },
    {
      icon: Leaf,
      title: t('solution.features.1.title'),
      text: t('solution.features.1.text'),
    },
    {
      icon: TrendingUp,
      title: t('solution.features.2.title'),
      text: t('solution.features.2.text'),
    },
  ];

  return (
    <AnimatedSection id="solution" className="py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Левая часть: Текст */}
        <motion.div variants={fadeInLeft} className="text-center lg:text-left">
          <SectionHeader
            badgeText={t('solution.badge')}
            badgeIcon={Sparkles}
            title={t('solution.title')}
            description={t('solution.description')}
            className="text-center lg:text-left !max-w-none mb-10"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="space-y-6 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
              );
            })}
          </motion.div>

          <Button
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => window.open('https://t.me/DexSafeMiniApp_bot', '_blank')}
          >
            <Send className="w-5 h-5 mr-2" />
            {t('solution.button')}
          </Button>
        </motion.div>

        {/* Правая часть: Визуал */}
        <motion.div
          variants={fadeInRight}
          className="flex items-center justify-center lg:justify-end mt-2.5"
        >
          <PhoneMockup>
            <video
              src={'/IMG_6544.MP4'}
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
  );
};
