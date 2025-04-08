
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import CaptchaComponent, { Captcha, CaptchaOperation } from './CaptchaComponent';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState<Captcha | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Генерация новой капчи
  const generateCaptcha = () => {
    const operations: CaptchaOperation[] = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    // Для сложения и умножения используем небольшие числа
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    
    // Для вычитания убедимся, что первое число больше второго
    if (operation === '-') {
      num1 = Math.floor(Math.random() * 10) + 10;
      num2 = Math.floor(Math.random() * num1);
    }
    
    let solution;
    switch (operation) {
      case '+':
        solution = num1 + num2;
        break;
      case '-':
        solution = num1 - num2;
        break;
      case '*':
        solution = num1 * num2;
        break;
    }
    
    setCaptcha({ num1, num2, operation, solution });
    setCaptchaInput('');
  };

  // Генерируем капчу при первой загрузке
  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите ваш номер телефона';
    } else if (!/^\+?[0-9\s\-\(\)]{10,15}$/.test(phone)) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    if (!serviceType) {
      newErrors.serviceType = 'Пожалуйста, выберите тип продукции';
    }
    if (!message.trim() || message.length < 10) {
      newErrors.message = 'Сообщение должно содержать не менее 10 символов';
    }
    if (!captchaInput.trim()) {
      newErrors.captcha = 'Пожалуйста, решите капчу';
    } else if (captcha && parseInt(captchaInput) !== captcha.solution) {
      newErrors.captcha = 'Неверный ответ, попробуйте еще раз';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Prepare WhatsApp message with service type
    const whatsappText = encodeURIComponent(`Меня интересуют ваши услуги компании ООО Гранит\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\n\nТип продукции: ${serviceType}\n\nСообщение: ${message}`);
    const whatsappUrl = `https://wa.me/+79145418570?text=${whatsappText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setName('');
    setPhone('');
    setEmail('');
    setServiceType('');
    setMessage('');
    setCaptchaInput('');
    setErrors({});
    generateCaptcha(); // Generate new captcha
  };

  return (
    <div>
      <h2 className="text-2xl font-display font-semibold mb-6">
        Отправить сообщение
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-foreground font-medium mb-2">
            Имя*
          </label>
          <input 
            id="name" 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`} 
            placeholder="Введите ваше имя" 
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-foreground font-medium mb-2">
            Телефон*
          </label>
          <input 
            id="phone" 
            type="tel" 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`} 
            placeholder="+7 (___) ___-__-__" 
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-foreground font-medium mb-2">
            Email (необязательно)
          </label>
          <input 
            id="email" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`} 
            placeholder="example@email.com" 
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
        </div>
        
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
                <SelectItem value="Буровые работы">Буровые работы</SelectItem>
                <SelectItem value="Взрывные работы">Взрывные работы</SelectItem>
                <SelectItem value="Механический демонтаж">Механический демонтаж</SelectItem>
                <SelectItem value="Маркшейдерские работы">Маркшейдерские работы</SelectItem>
                <SelectItem value="Смесительно-зарядные машины">Смесительно-зарядные машины</SelectItem>
                <SelectItem value="Производство и поставка эмульсионных ВВ">Производство и поставка эмульсионных ВВ</SelectItem>
                <SelectItem value="Другое">Другое</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="mt-1 text-sm text-destructive">{errors.serviceType}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-foreground font-medium mb-2">
            Сообщение
          </label>
          <textarea 
            id="message" 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[120px]`} 
            placeholder="Опишите ваш запрос или проект"
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
        </div>
        
        <CaptchaComponent
          captcha={captcha}
          captchaInput={captchaInput}
          setCaptchaInput={setCaptchaInput}
          generateCaptcha={generateCaptcha}
          error={errors.captcha}
        />
        
        <button type="submit" className="btn-primary inline-flex py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <Send size={18} />
          Отправить сообщение
        </button>
        
        <p className="text-sm text-muted-foreground text-center">
          Нажимая на кнопку, вы будете перенаправлены в WhatsApp для отправки сообщения
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
