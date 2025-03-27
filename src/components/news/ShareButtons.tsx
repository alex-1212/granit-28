
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Link, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

const ShareButtons = ({ title, url, description = '' }: ShareButtonsProps) => {
  const { toast } = useToast();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90',
      link: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90',
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      color: 'bg-[#0088cc] hover:bg-[#0088cc]/90',
      link: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Ссылка скопирована",
        description: "Ссылка на новость скопирована в буфер обмена",
        duration: 3000,
      });
    }).catch(err => {
      console.error('Не удалось скопировать текст: ', err);
      toast({
        title: "Ошибка",
        description: "Не удалось скопировать ссылку",
        variant: "destructive",
        duration: 3000,
      });
    });
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-lg font-medium">Поделиться:</h3>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((item) => (
          <Button
            key={item.name}
            variant="outline"
            size="sm"
            className={`${item.color} text-white`}
            onClick={() => window.open(item.link, '_blank')}
            aria-label={`Поделиться в ${item.name}`}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-700 hover:bg-gray-700/90 text-white"
          onClick={copyToClipboard}
          aria-label="Копировать ссылку"
        >
          <Link className="mr-2 h-4 w-4" />
          Копировать ссылку
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
