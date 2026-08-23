import React from 'react';
import { Pickaxe, Bomb, Target, Settings, FileText, Factory, Send, Loader, Boxes } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import FormField from './FormField';
import CaptchaField from './CaptchaField';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '@/i18n/LanguageContext';
const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    message,
    setMessage,
    serviceType,
    setServiceType,
    captchaInput,
    setCaptchaInput,
    captcha,
    errors,
    generateCaptcha,
    handleSubmit
  } = useContactForm();
  return <div>
      <h2 className="text-2xl font-display font-semibold mb-6">
        {t('contact.form.title')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField id="name" label={t('contact.form.name.label')} type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder={t('contact.form.name.placeholder')} error={errors.name} required />
        
        <FormField id="phone" label={t('contact.form.phone.label')} type="tel" value={phone} onChange={(value: string | React.ChangeEvent<HTMLInputElement>) => {
        if (typeof value === 'string') {
          setPhone(value);
        } else {
          setPhone(value.target.value);
        }
      }} placeholder={t('contact.form.phone.placeholder')} error={errors.phone} required isPhone />
        
        <FormField id="email" label={t('contact.form.email.label')} type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder={t('contact.form.email.placeholder')} error={errors.email} />
        
        <div>
          <label htmlFor="serviceType" className="block text-foreground font-medium mb-2">{t('contact.form.service.label')}</label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger className={`w-full px-4 py-3 rounded-lg border ${errors.serviceType ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-auto`}>
              <SelectValue placeholder={t('contact.form.service.placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Буровые работы" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Pickaxe className="w-4 h-4 mr-2" /> {t('contact.form.service.drilling')}
                  </div>
                </SelectItem>
                <SelectItem value="Взрывные работы" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bomb className="w-4 h-4 mr-2" /> {t('contact.form.service.blasting')}
                  </div>
                </SelectItem>
                <SelectItem value="Механический демонтаж" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 mr-2" /> {t('contact.form.service.demolition')}
                  </div>
                </SelectItem>
                <SelectItem value="Маркшейдерские работы" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" /> {t('contact.form.service.surveying')}
                  </div>
                </SelectItem>
                <SelectItem value="Смесительно-зарядные машины" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Factory className="w-4 h-4 mr-2" /> {t('contact.form.service.mixerMachines')}
                  </div>
                </SelectItem>
                <SelectItem value="Производство и поставка эмульсионных ВВ" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Boxes className="w-4 h-4 mr-2" /> {t('contact.form.service.emulsionSupply')}
                  </div>
                </SelectItem>
                <SelectItem value="Другое" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Loader className="w-4 h-4 mr-2" /> {t('contact.form.service.other')}
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="mt-1 text-sm my-[3px] font-normal text-red-600">{errors.serviceType}</p>}
        </div>
        
        <FormField id="message" label={t('contact.form.message.label')} type="text" value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} placeholder={t('contact.form.message.placeholder')} error={errors.message} isTextarea />
        
        <CaptchaField captcha={captcha} captchaInput={captchaInput} setCaptchaInput={setCaptchaInput} generateCaptcha={generateCaptcha} error={errors.captcha} />
        
        <button type="submit" className="btn-primary inline-flex py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <Send size={18} />
          {t('contact.form.submit')}
        </button>
        
        <p className="text-muted-foreground text-sm font-normal text-left">{t('contact.form.whatsappNote')}</p>
      </form>
    </div>;
};
export default ContactForm;