
import * as z from "zod";

export const categoryOptions = ['Проекты', 'Технологии', 'События'];

export const newsFormSchema = z.object({
  title: z.string().min(1, { message: "Заголовок обязателен" })
    .max(80, { message: "Слишком длинный заголовок для SEO (максимум 80 символов)" }),
  summary: z.string().min(1, { message: "Краткое описание обязательно" })
    .max(160, { message: "Слишком длинное описание для SEO (максимум 160 символов)" }),
  content: z.string().min(1, { message: "Содержание обязательно" }),
  image: z.string().min(1, { message: "URL изображения обязателен" }),
  category: z.string().min(1, { message: "Категория обязательна" }),
  date: z.string(),
  slug: z.string()
    .min(1, { message: "URL-адрес обязателен для SEO" })
    .regex(/^[a-z0-9\-]+$/, { 
      message: "URL-адрес может содержать только маленькие буквы, цифры и дефисы" 
    }),
  metaKeywords: z.string().optional(),
});

export type NewsFormValues = z.infer<typeof newsFormSchema>;
