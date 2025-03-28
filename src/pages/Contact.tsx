import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const Contact = () => {
  useAnimateOnScroll();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = 'Контакты — ООО «Гранит»';
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
    
    if (!message.trim() || message.length < 10) {
      newErrors.message = 'Сообщение должно содержать не менее 10 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const whatsappText = encodeURIComponent(`Меня интересуют ваши услуги компании ООО Гранит\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\n\nСообщение: ${message}`);
    const whatsappUrl = `https://wa.me/89145418570?text=${whatsappText}`;
    
    window.open(whatsappUrl, '_blank');
    
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div>
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Свяжитесь с нами
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Получите консультацию специалиста или оставьте заявку на расчет проекта
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <div className="glass-card-solid rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                  <a 
                    href="tel:+79145418570" 
                    className="text-muted-foreground hover:text-primary transition-colors mb-2 block"
                  >
                    +7 914 541 85 70
                  </a>
                  <a 
                    href="https://wa.me/89145418570" 
                    className="text-primary text-sm font-medium hover:underline" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass-card-solid rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Почта</h3>
                  <a 
                    href="mailto:granit-svg@mail.ru" 
                    className="text-muted-foreground hover:text-primary transition-colors mb-2 block"
                  >
                    granit-svg@mail.ru
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Мы отвечаем в течение 24 часов
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass-card-solid rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground mb-2">
                    Строительная ул., 28 г, Хабаровск
                  </p>
                  <a 
                    href="https://go.2gis.com/1YfhD" 
                    className="text-primary text-sm font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть на карте
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-display font-semibold mb-6">
                Отправить сообщение
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-destructive' : 'border-border'
                    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`}
                    placeholder="Введите ваше имя"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`}
                    placeholder="+7 (___) ___-__-__"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email (необязательно)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-destructive' : 'border-border'
                    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-destructive' : 'border-border'
                    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[120px]`}
                    placeholder="Опишите ваш запрос или проект"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full py-3"
                >
                  Отправить сообщение
                </button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая на кнопку, вы будете перенаправлены в WhatsApp для отправки сообщения
                </p>
              </form>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-display font-semibold mb-6">
                Наше местоположение
              </h2>
              
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-[600px]">
                  <a className="dg-widget-link" href="http://2gis.ru/khabarovsk/firm/70000001038799978/center/135.10527133941653,48.374240154042546/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Пос��отреть на карте Хабаровска</a>
                  <div className="dg-widget-link"><a href="http://2gis.ru/khabarovsk/center/135.10537,48.374246/zoom/16/routeTab/rsType/bus/to/135.10537,48.374246╎Гранит, компания?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Гранит, компания</a></div>
                  <script charSet="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
                  <script charSet="utf-8" dangerouslySetInnerHTML={{
                    __html: `new DGWidgetLoader({"width":"100%","height":600,"borderColor":"#a3a3a3","pos":{"lat":48.374240154042546,"lon":135.10527133941653,"zoom":16},"opt":{"city":"khabarovsk"},"org":[{"id":"70000001038799978"}]})`
                  }}></script>
                  <noscript style={{color:"#c00",fontSize:"16px",fontWeight:"bold"}}>Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
