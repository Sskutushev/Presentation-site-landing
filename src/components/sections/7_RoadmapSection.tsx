import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Rocket, Server, LayoutTemplate, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight } from '../../lib/motionPresets';
import { useTranslation } from 'react-i18next'; // Хук для перевода

// Force Vite re-evaluation
export const RoadmapSection = () => {
  const { t } = useTranslation(); // Хук для перевода

  const roadmap = [
    {
      icon: Server,
      title: t('roadmap.phases.0.title'),
      text: t('roadmap.phases.0.text'),
    },
    {
      icon: LayoutTemplate,
      title: t('roadmap.phases.1.title'),
      text: t('roadmap.phases.1.text'),
    },
    {
      icon: Smartphone,
      title: t('roadmap.phases.2.title'),
      text: t('roadmap.phases.2.text'),
    },
    {
      icon: Rocket,
      title: t('roadmap.phases.3.title'),
      text: t('roadmap.phases.3.text'),
    },
  ];

  return (
    <AnimatedSection id="roadmap" className="py-24 sm:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SectionHeader
          badgeText={t('roadmap.badge')}
          title={t('roadmap.title')}
          description={t('roadmap.description')}
        />

        {/* Горизонтальная/Вертикальная Дорожная карта */}
        <div className="mt-24">
          <div className="relative">
            {/* Линия (видна на md+) */}
            <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-1 bg-gradient-to-b from-c-primary to-emerald-400 -translate-x-1/2 rounded-full shadow-glow-primary-light" />

            {/* Линия (видна на sm) */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-c-primary to-emerald-400 -translate-x-1/2 rounded-full shadow-glow-primary-light" />

            <div className="space-y-16">
              {roadmap.map((item, index) => {
                const Icon = item.icon;
                const isOdd = index % 2 !== 0;
                return (
                  <motion.div
                    key={index}
                    variants={isOdd ? fadeInRight : fadeInLeft}
                    className={`md:flex items-center md:relative ${isOdd ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Контент */}
                    <div className={`md:w-1/2 ${isOdd ? 'md:pl-16' : 'md:pr-16'} md:ml-0 ml-12`}>
                      <motion.div
                        className="bg-c-bg-secondary p-8 rounded-3xl border border-c-border shadow-xl hover:border-c-primary/50 transition-all duration-300"
                        whileHover={{ y: -5, boxShadow: '0 0 25px rgba(0, 224, 190, 0.2)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold text-c-primary mb-4">{item.title}</h3>
                        <p className="text-c-text-secondary">{item.text}</p>
                      </motion.div>
                    </div>

                    {/* Иконка на линии (для десктопа) */}
                    <div className="hidden md:block absolute left-5 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                      <div className="relative w-14 h-14 bg-gradient-to-br from-c-primary to-emerald-400 rounded-full flex items-center justify-center ring-8 ring-c-bg-primary shadow-2xl animate-pulse">
                        <Icon className="w-7 h-7 text-c-bg-primary" />
                        {/* Glow ring */}
                        <span className="absolute inset-0 rounded-full bg-c-primary opacity-30 blur-md animate-ping ease-out"></span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Мобильные иконки (видны только на мобильных) */}
            <div className="md:hidden absolute top-0 left-0 w-full h-full">
              {roadmap.map((item, index) => {
                const Icon = item.icon;
                // Calculate top position for each icon to create 50px spacing
                const topPosition = index * (16 * 4 + 180); // 16*4 is space-y-16, 50 is desired icon spacing
                return (
                  <div
                    key={`mobile-icon-${index}`}
                    className="absolute left-5 -translate-x-1/2"
                    style={{ top: `${topPosition}px` }}
                  >
                    <div className="relative w-14 h-14 bg-gradient-to-br from-c-primary to-emerald-400 rounded-full flex items-center justify-center ring-8 ring-c-bg-primary shadow-2xl animate-pulse">
                      <Icon className="w-7 h-7 text-c-bg-primary" />
                      {/* Glow ring */}
                      <span className="absolute inset-0 rounded-full bg-c-primary opacity-30 blur-md animate-ping ease-out"></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};
