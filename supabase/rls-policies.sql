-- ============================================================================
-- RLS-политики для таблицы news (проект Supabase granit)
--
-- Как применить:
--   1. Откройте https://supabase.com/dashboard → ваш проект
--   2. SQL Editor → New query → вставьте весь этот файл → Run
--
-- Модель доступа:
--   - Чтение новостей: все (анонимные посетители + авторизованные)
--   - Создание/изменение/удаление: только авторизованные пользователи
-- ============================================================================

-- 1. Включить RLS (если ещё не включена)
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- 2. Удалить старые политики с теми же именами (идемпотентность)
DROP POLICY IF EXISTS "news_select_public" ON public.news;
DROP POLICY IF EXISTS "news_insert_authenticated" ON public.news;
DROP POLICY IF EXISTS "news_update_authenticated" ON public.news;
DROP POLICY IF EXISTS "news_delete_authenticated" ON public.news;

-- 3. Чтение — всем (сайт публичный, новости видны без входа)
CREATE POLICY "news_select_public"
  ON public.news
  FOR SELECT
  USING (true);

-- 4. Создание — только авторизованным
CREATE POLICY "news_insert_authenticated"
  ON public.news
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- 5. Изменение — только авторизованным
CREATE POLICY "news_update_authenticated"
  ON public.news
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 6. Удаление — только авторизованным
CREATE POLICY "news_delete_authenticated"
  ON public.news
  FOR DELETE
  TO authenticated
  USING (true);
