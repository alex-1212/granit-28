
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, MessageCircle } from 'lucide-react';
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
      name: 'ВКонтакте',
      icon: () => (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.193c-.56 0-.817.293-.956.61 0 0-1.115 2.733-2.7 4.506-.51.513-.741.675-1.02.675-.138 0-.347-.162-.347-.627V6.855c0-.558-.161-.806-.625-.806H9.52c-.348 0-.558.26-.558.504 0 .528.788.65.87 2.138v3.228c0 .707-.127.835-.406.835-.742 0-2.546-2.743-3.617-5.884-.21-.607-.42-.857-.98-.857H2.635c-.627 0-.752.293-.752.61 0 .57.742 3.398 3.456 7.141C7.238 17.394 9.91 19 12.367 19c1.44 0 1.616-.325 1.616-.887v-2.046c0-.652.136-.782.591-.782.335 0 .912.164 2.26 1.477 1.54 1.545 1.793 2.237 2.66 2.237h2.193c.627 0 .941-.314.76-.934-.198-.615-.91-1.508-1.854-2.567-.512-.61-1.28-1.265-1.516-1.59-.335-.425-.24-.612 0-.987 0 0 2.666-3.763 2.943-5.044z" />
        </svg>
      ),
      color: 'bg-[#4C75A3] hover:bg-[#4C75A3]/90',
      link: `https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}&description=${encodedDesc}`,
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
            {typeof item.icon === 'function' ? (
              <span className="mr-2">{item.icon()}</span>
            ) : (
              <item.icon className="mr-2 h-4 w-4" />
            )}
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
