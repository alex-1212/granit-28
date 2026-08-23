import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

/** Пятиконечная звезда для флага КНР */
const starPoints = (cx: number, cy: number, r: number): string => {
  const pts: string[] = [];
  const ri = r * 0.382;
  for (let i = 0; i < 5; i++) {
    const ao = ((-90 + i * 72) * Math.PI) / 180;
    const ai = ((-90 + 36 + i * 72) * Math.PI) / 180;
    pts.push(`${(cx + r * Math.cos(ao)).toFixed(2)},${(cy + r * Math.sin(ao)).toFixed(2)}`);
    pts.push(`${(cx + ri * Math.cos(ai)).toFixed(2)},${(cy + ri * Math.sin(ai)).toFixed(2)}`);
  }
  return pts.join(' ');
};

const FlagRU: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <clipPath id="flag-ru-clip">
        <circle cx="12" cy="12" r="11.5" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-ru-clip)">
      <rect x="0" y="0.5" width="24" height="8" fill="#FFFFFF" />
      <rect x="0" y="8.5" width="24" height="7.5" fill="#0039A6" />
      <rect x="0" y="16" width="24" height="8" fill="#D52B1E" />
    </g>
    <circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
  </svg>
);

const FlagCN: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <clipPath id="flag-cn-clip">
        <circle cx="12" cy="12" r="11.5" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-cn-clip)">
      <rect x="0" y="0.5" width="24" height="23.5" fill="#DE2910" />
      <polygon points={starPoints(7, 9.5, 4.2)} fill="#FFDE00" />
      <polygon points={starPoints(14, 4, 1.4)} fill="#FFDE00" />
      <polygon points={starPoints(16.5, 7, 1.4)} fill="#FFDE00" />
      <polygon points={starPoints(16.5, 10.5, 1.4)} fill="#FFDE00" />
      <polygon points={starPoints(14, 13.5, 1.4)} fill="#FFDE00" />
    </g>
    <circle cx="12" cy="12" r="11.5" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
  </svg>
);

const LANGS = [
  { code: 'ru', label: 'Русский', switchTo: 'Переключить на русский', Flag: FlagRU },
  { code: 'zh', label: '中文', switchTo: '切换到中文', Flag: FlagCN },
] as const;

/**
 * Анимированный переключатель языка с флагами России и Китая.
 */
export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label={lang === 'ru' ? 'Выбор языка' : '语言选择'}
      className="group relative inline-flex items-center rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/20 dark:border-border"
    >
      {/* Скользящий бегунок */}
      <span
        className={`absolute inset-y-1 left-1 w-8 rounded-full bg-primary shadow-md transition-transform duration-300 ease-out ${
          lang === 'zh' ? 'translate-x-8' : 'translate-x-0'
        }`}
        aria-hidden="true"
      />

      {LANGS.map(({ code, label, switchTo, Flag }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => !isActive && setLang(code)}
            title={`${switchTo} (${label})`}
            aria-label={switchTo}
            aria-pressed={isActive}
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full outline-none transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-90"
          >
            <Flag
              className={`h-5 w-5 text-transparent transition-all duration-300 ${
                isActive
                  ? 'scale-110 opacity-100 drop-shadow'
                  : 'opacity-50 grayscale hover:rotate-6 hover:scale-105 hover:opacity-90 hover:grayscale-0'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
