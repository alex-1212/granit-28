
import * as z from "zod";

export const categoryOptions = ['Проекты', 'Технологии', 'События'];

export const newsFormSchema = z.object({
  title: z.string().min(1, { message: "Заголовок обязателен" }),
  summary: z.string().min(1, { message: "Краткое описание обязательно" }),
  content: z.string().min(1, { message: "Содержание обязательно" }),
  image: z.string().min(1, { message: "URL изображения обязателен" }),
  category: z.string().min(1, { message: "Категория обязательна" }),
  date: z.string(),
  slug: z.string().optional(),
});

export type NewsFormValues = z.infer<typeof newsFormSchema>;
