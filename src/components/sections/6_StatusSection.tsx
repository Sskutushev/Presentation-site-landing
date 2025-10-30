import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { CheckCircle, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/motionPresets';
import { useTranslation } from 'react-i18next'; // Хук для перевода

export const StatusSection = () => {
  const { t } = useTranslation(); // Хук для перевода

  const done = [
    t('status.done_items.0'),
    t('status.done_items.1'),
    t('status.done_items.2'),
    t('status.done_items.3'),
    t('status.done_items.4'),
  ];

  const uiReady = [
    t('status.ui_ready_items.0'),
    t('status.ui_ready_items.1'),
    t('status.ui_ready_items.2'),
    t('status.ui_ready_items.3'),
    t('status.ui_ready_items.4'),
  ];

  return (
    <AnimatedSection id="status" className="py-24 sm:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SectionHeader
          badgeText={t('status.badge')}
          title={t('status.title')}
          description={t(
            'status.description',
            'Вы получаете готовый, безопасный и оптимизированный Frontend-продукт, экономя '
          )}
          descriptionHighlight={t('status.description_highlight', 'минимум 6 месяцев')}
        />

        {/* Progress Bar */}
        <motion.div variants={fadeInUp} className="mt-16 max-w-4xl mx-auto">
          <div className="text-right text-c-text-secondary text-sm mb-2">
            {t('status.progress', '70% Готово')}
          </div>
          <div className="w-full h-2 bg-c-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-c-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Колонка "Реализовано" */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-c-border shadow-xl border-l-4 border-c-success"
          >
            <div className="flex items-center gap-3 text-2xl font-bold text-c-success mb-8">
              <CheckCircle className="w-8 h-8" />
              <span>{t('status.done_title')}</span>
            </div>
            <ul className="space-y-4">
              {done.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-c-bg-primary rounded-xl border border-c-border"
                >
                  <CheckCircle className="w-6 h-6 text-c-success flex-shrink-0 mt-1" />
                  <span className="text-c-text-primary text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Колонка "Нужен Backend" */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-c-border shadow-xl border-l-4 border-c-primary"
          >
            <div className="flex items-center gap-3 text-2xl font-bold text-c-primary mb-8">
              <Clock className="w-8 h-8" />
              <span>{t('status.ui_ready_title')}</span>
            </div>
            <ul className="space-y-4">
              {uiReady.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-c-bg-primary rounded-xl border border-c-border"
                >
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
            <span className="text-c-text-primary font-medium">{t('status.ready_note')}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};
