
import { useState, useEffect } from "react";
import { Captcha } from "@/components/contact/CaptchaComponent";

export const useContactForm = () => {
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
    const operations: ('+' | '-' | '*')[] = ['+', '-', '*'];
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

  return {
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
  };
};
