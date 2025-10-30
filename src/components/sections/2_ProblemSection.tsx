import { AnimatedSection } from '../common/AnimatedSection';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';
import { AlertTriangle, Layers, ZapOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/motionPresets';
import { useTranslation } from 'react-i18next'; // Хук для перевода

export const ProblemSection = () => {
  const { t } = useTranslation(); // Хук для перевода

  // Задаем проблемы с переводами
  const problems = [
    {
      icon: Layers,
      title: t('problem.items.0.title'),
      text: t('problem.items.0.text'),
    },
    {
      icon: ZapOff,
      title: t('problem.items.1.title'),
      text: t('problem.items.1.text'),
    },
    {
      icon: AlertTriangle,
      title: t('problem.items.2.title'),
      text: t('problem.items.2.text'),
    },
  ];

  return (
    <AnimatedSection
      id="problem"
      className="py-24 sm:py-32 bg-gradient-to-b from-c-bg-primary to-c-bg-secondary"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SectionHeader
          badgeText={t('problem.badge')}
          title={t('problem.title')}
          description={t('problem.description')}
        />

        {/* Сетка проблем в стиле 8.jpg */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div variants={fadeInUp} key={index}>
                <Card
                  className="bg-c-bg-secondary border border-c-border/50 p-8 rounded-xl"
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
            );
          })}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};
