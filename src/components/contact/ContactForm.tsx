import React from 'react';
import { Send, Drill, Truck, ScanSearch, Factory, Grid, Explosion } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import FormField from './FormField';
import CaptchaField from './CaptchaField';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm: React.FC = () => {
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
        Форма обратной связи
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField id="name" label="Имя" type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Введите ваше имя" error={errors.name} required />
        
        <FormField id="phone" label="Телефон" type="tel" value={phone} onChange={(value: string | React.ChangeEvent<HTMLInputElement>) => {
        if (typeof value === 'string') {
          setPhone(value);
        } else {
          setPhone(value.target.value);
        }
      }} placeholder="+7 (___) ___-__-__" error={errors.phone} required isPhone />
        
        <FormField id="email" label="Email (необязательно)" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="example@email.com" error={errors.email} />
        
        <div>
          <label htmlFor="serviceType" className="block text-foreground font-medium mb-2">
            Какой тип продукции наиболее соответствует вашим потребностям?*
          </label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger className={`w-full px-4 py-3 rounded-lg border ${errors.serviceType ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-auto`}>
              <SelectValue placeholder="Выберите тип продукции" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Буровые работы" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Drill className="w-4 h-4 mr-2" /> Буровые работы
                  </div>
                </SelectItem>
                <SelectItem value="Взрывные работы" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Explosion className="w-4 h-4 mr-2" /> Взрывные работы
                  </div>
                </SelectItem>
                <SelectItem value="Механический демонтаж" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 mr-2" /> Механический демонтаж
                  </div>
                </SelectItem>
                <SelectItem value="Маркшейдерские работы" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ScanSearch className="w-4 h-4 mr-2" /> Маркшейдерские работы
                  </div>
                </SelectItem>
                <SelectItem value="Смесительно-зарядные машины" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Factory className="w-4 h-4 mr-2" /> Смесительно-зарядные машины
                  </div>
                </SelectItem>
                <SelectItem value="Производство и поставка эмульсионных ВВ" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Grid className="w-4 h-4 mr-2" /> Производство и поставка эмульсионных ВВ
                  </div>
                </SelectItem>
                <SelectItem value="Другое" className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" /> Другое
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="mt-1 text-sm my-[3px] font-normal text-red-600">{errors.serviceType}</p>}
        </div>
        
        <FormField id="message" label="Сообщение" type="text" value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} placeholder="Опишите ваш запрос или проект" error={errors.message} isTextarea />
        
        <CaptchaField captcha={captcha} captchaInput={captchaInput} setCaptchaInput={setCaptchaInput} generateCaptcha={generateCaptcha} error={errors.captcha} />
        
        <button type="submit" className="btn-primary inline-flex py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <Send size={18} />
          Отправить сообщение
        </button>
        
        <p className="text-sm text-muted-foreground text-center">
          Нажимая на кнопку, вы будете перенаправлены в WhatsApp для отправки сообщения
        </p>
      </form>
    </div>;
};
export default ContactForm;
