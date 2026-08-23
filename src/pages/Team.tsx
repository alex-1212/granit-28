import React from 'react';
import { Mail, Linkedin, GraduationCap, Users, UserCheck, Handshake } from 'lucide-react';
import { teamData } from '@/data/team';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';
const Team = () => {
  const { t } = useLanguage();
  useAnimateOnScroll();
  return <div>
      <Seo
        path="/team"
        title="Команда и руководство ООО «Гранит»"
        description="Команда специалистов ООО «Гранит»: руководители производства, инженеры-технологи ЭВВ, маркшейдеры и буровые мастера с многолетним опытом БВР на Дальнем Востоке."
        keywords="команда гранит, специалисты буровзрывных работ, руководство ООО Гранит, инженер ЭВВ"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Команда', path: '/team' },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('team.hero.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              {t('team.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg animate-on-scroll">
              {t('team.intro.text')}
            </p>
          </div>
          
          {/* Team Grid */}
          {teamData.length > 0}
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 animate-on-scroll">
            {t('team.values.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">{t('team.values.experience.title')}</h3>
              <p className="text-muted-foreground">
                {t('team.values.experience.description')}
              </p>
            </div>
            
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">{t('team.values.youth.title')}</h3>
              <p className="text-muted-foreground">
                {t('team.values.youth.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 animate-on-scroll">
            {t('team.training.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="glass-card rounded-xl overflow-hidden">
                <img alt={t('team.training.image.alt')} className="w-full aspect-video object-cover" src="/uploads/1fb05fcb-ee67-4418-a269-bf02668f2110.webp" />
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <GraduationCap className="text-primary" size={20} />
                  {t('team.training.qualifications.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('team.training.qualifications.description')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Users className="text-primary" size={20} />
                  {t('team.training.mentorship.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('team.training.mentorship.description')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Handshake className="text-primary" size={20} />
                  {t('team.training.cooperation.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('team.training.cooperation.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              {t('team.cta.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              {t('team.cta.description')}
            </p>
            
            <a href="/careers" className="btn-primary inline-flex items-center gap-2 animate-on-scroll">
              {t('team.cta.vacancies')}
              <UserCheck size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Team;