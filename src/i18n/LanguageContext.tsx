import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';

export type Lang = 'ru' | 'zh';

type Domain = { ru?: Record<string, string>; zh?: Record<string, string> };

const domainModules = import.meta.glob<{ default: Domain }>('./domains/*.ts', {
  eager: true,
});

const dictionaries: Record<Lang, Record<string, string>> = {
  ru: {},
  zh: {},
};

for (const module of Object.values(domainModules)) {
  const domain = module.default;
  if (!domain) continue;
  for (const lang of ['ru', 'zh'] as const) {
    Object.assign(dictionaries[lang], domain[lang] ?? {});
  }
}

export type TranslationKey = string;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = 'granit-lang';

const getInitialLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'zh' || stored === 'ru' ? stored : 'ru';
  } catch {
    return 'ru';
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'ru';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const t = useMemo(() => {
    return (key: TranslationKey): string =>
      dictionaries[lang][key] ?? dictionaries.ru[key] ?? key;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
