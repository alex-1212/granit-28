
import { useLanguage } from '@/context/LanguageContext';

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export const useFaqData = () => {
  const { t } = useLanguage();
  
  const faqData = [
    {
      question: t('faq.items.evv.question'),
      answer: t('faq.items.evv.answer')
    },
    {
      question: t('faq.items.regions.question'),
      answer: t('faq.items.regions.answer')
    },
    {
      question: t('faq.items.shifts.question'),
      answer: t('faq.items.shifts.answer')
    },
    {
      question: t('faq.items.climate.question'),
      answer: t('faq.items.climate.answer')
    },
    {
      question: t('faq.items.safety.question'),
      answer: t('faq.items.safety.answer')
    },
    {
      question: t('faq.items.eco.question'),
      answer: t('faq.items.eco.answer')
    },
    {
      question: t('faq.items.career.question'),
      answer: t('faq.items.career.answer')
    },
    {
      question: t('faq.items.remote.question'),
      answer: t('faq.items.remote.answer')
    }
  ];
  
  return faqData;
};

