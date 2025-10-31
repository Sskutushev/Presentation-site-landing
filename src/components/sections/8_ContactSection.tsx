import { AnimatedSection } from '../common/AnimatedSection';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/motionPresets';
import { useTranslation } from 'react-i18next'; // Хук для перевода

export const ContactSection = () => {
  const { t } = useTranslation(); // Хук для перевода

  return (
    <AnimatedSection
      id="contact"
      className="py-24 sm:py-32 bg-gradient-to-b from-c-bg-secondary to-c-bg-primary relative overflow-hidden"
    >
      {/* Glowing Contact Sphere */}
      <div className="absolute -z-10 blur-3xl opacity-30 bg-c-primary/40 w-[500px] h-[500px] rounded-full animate-pulse -right-1/4 -bottom-1/4"></div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <SectionHeader
          badgeText={t('contact.badge')}
          title={t('contact.title')}
          description={t('contact.description')}
        />

        <motion.div variants={fadeInUp} className="mt-16">
          <Button
            variant="primary"
            className="px-10 py-5 text-xl animate-pulse-slow mx-auto"
            onClick={() => window.open('https://t.me/sskutushev', '_blank')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00e0be' }}
          >
            <Send className="w-6 h-6 mr-3" />
            {t('contact.button')}
          </Button>
        </motion.div>

        {/* Контактная информация */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center p-6 bg-c-bg-primary rounded-2xl border border-c-border"
          >
            <Mail className="w-8 h-8 text-c-primary mb-4" />
            <h3 className="text-lg font-bold text-c-text-primary mb-2">
              {t('contact.email_title')}
            </h3>
            <p className="text-c-text-secondary">{t('contact.email')}</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center p-6 bg-c-bg-primary rounded-2xl border border-c-border"
          >
            <Send className="w-8 h-8 text-c-primary mb-4" />
            <h3 className="text-lg font-bold text-c-text-primary mb-2">
              {t('contact.telegram_title')}
            </h3>
            <p className="text-c-text-secondary">{t('contact.telegram')}</p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-c-border">
          <p className="text-c-text-tertiary text-sm">
            {t('contact.copyright', { year: new Date().getFullYear() })}
          </p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};
