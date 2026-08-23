import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

const RELOAD_FLAG = 'granit-chunk-reload';
const RELOAD_COOLDOWN_MS = 30_000;

/**
 * Ошибка динамического импорта ленивого чанка. Возникает, когда у пользователя
 * открыта старая вкладка, а после деплоя файлы чанков получили новые хэши.
 */
const isChunkLoadError = (error: unknown): boolean => {
  const message = error instanceof Error ? error.message : String(error);
  return (
    /Failed to fetch dynamically imported module/i.test(message) ||
    /Importing a module script failed/i.test(message) ||
    /Loading( CSS)? chunk [\d]+ failed/i.test(message) ||
    /error loading dynamically imported module/i.test(message)
  );
};

interface ErrorFallbackProps {
  onReload: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ onReload }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container px-4 py-16">
        <div className="max-w-lg mx-auto text-center glass-card-solid rounded-2xl p-8 sm:p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
          </div>

          <h1 className="text-2xl font-bold mb-3">{t('error.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('error.description')}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onReload} className="gap-2">
              <RefreshCw size={16} />
              {t('error.reload')}
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link to="/">
                <Home size={16} />
                {t('error.goHome')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Ловит ошибки рендера и загрузки lazy-чанков.
 *
 * При ошибке устаревшего чанка (сразу после деплоя) автоматически
 * перезагружает страницу один раз — пользователь даже не заметит.
 * Защита от цикла перезагрузок: не чаще одного раза за RELOAD_COOLDOWN_MS.
 */
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown): void {
    if (isChunkLoadError(error)) {
      const last = Number(sessionStorage.getItem(RELOAD_FLAG) || 0);
      if (Date.now() - last > RELOAD_COOLDOWN_MS) {
        sessionStorage.setItem(RELOAD_FLAG, String(Date.now()));
        window.location.reload();
        return;
      }
    }
    console.error('Unhandled UI error:', error);
  }

  handleReload = (): void => {
    sessionStorage.removeItem(RELOAD_FLAG);
    window.location.reload();
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback onReload={this.handleReload} />;
    }
    return this.props.children;
  }
}
