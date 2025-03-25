
import { supabase } from '@/integrations/supabase/client';
import { NewsItem, newsData } from '../data/news';

// Database table mapping
interface NewsDB {
  id: number;
  title: string;
  date: string;
  short_description: string;
  full_text: string;
  image: string;
  created_at: string;
  updated_at: string;
}

// Map database model to application model
const mapDbToNewsItem = (dbItem: NewsDB): NewsItem => ({
  id: dbItem.id,
  title: dbItem.title,
  date: dbItem.date,
  shortDescription: dbItem.short_description,
  fullText: dbItem.full_text,
  image: dbItem.image,
});

// Map application model to database model
const mapNewsItemToDb = (item: Omit<NewsItem, 'id'>): Omit<NewsDB, 'id' | 'created_at' | 'updated_at'> => ({
  title: item.title,
  date: item.date,
  short_description: item.shortDescription,
  full_text: item.fullText,
  image: item.image,
});

// Get all news items, sorted by id descending (newest first)
export const getAllNews = async (): Promise<NewsItem[]> => {
  try {
    console.log('Fetching all news from Supabase');
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
      return [];
    }

    console.log('Fetched news data:', data);
    return (data as NewsDB[]).map(mapDbToNewsItem);
  } catch (error) {
    console.error('Error in getAllNews:', error);
    return [];
  }
};

// Get a single news item by id
export const getNewsById = async (id: number): Promise<NewsItem | undefined> => {
  try {
    console.log(`Fetching news with id: ${id}`);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching news by id:', error);
      return undefined;
    }

    if (!data) {
      console.log(`No news found with id: ${id}`);
      return undefined;
    }

    return mapDbToNewsItem(data as NewsDB);
  } catch (error) {
    console.error('Error in getNewsById:', error);
    return undefined;
  }
};

// Add a new news item
export const addNews = async (newsItem: Omit<NewsItem, 'id'>): Promise<NewsItem | null> => {
  try {
    console.log('Adding news item:', newsItem);
    
    // Get the current authentication status
    const { data: authData } = await supabase.auth.getSession();
    
    if (!authData.session) {
      console.error('Cannot add news: User not authenticated');
      throw new Error('User not authenticated');
    }
    
    // Make sure image is not empty
    if (!newsItem.image) {
      newsItem.image = '/images/news/placeholder.jpg';
    }
    
    // Explicitly log the request with auth token for debugging
    console.log('Supabase request details:', {
      table: 'news',
      operation: 'insert',
      data: mapNewsItemToDb(newsItem),
      authStatus: !!authData.session
    });
    
    const { data, error } = await supabase
      .from('news')
      .insert(mapNewsItemToDb(newsItem))
      .select()
      .single();

    if (error) {
      console.error('Error adding news:', error);
      console.error('Error details:', error.details, error.hint, error.message);
      return null;
    }

    console.log('Successfully added news, response:', data);
    return mapDbToNewsItem(data as NewsDB);
  } catch (error) {
    console.error('Error in addNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return null;
  }
};

// Update an existing news item
export const updateNews = async (id: number, updatedNews: Omit<NewsItem, 'id'>): Promise<NewsItem | null> => {
  try {
    console.log(`Updating news with id: ${id}`, updatedNews);
    
    // Get the current authentication status
    const { data: authData } = await supabase.auth.getSession();
    
    if (!authData.session) {
      console.error('Cannot update news: User not authenticated');
      throw new Error('User not authenticated');
    }
    
    // Make sure image is not empty
    if (!updatedNews.image) {
      updatedNews.image = '/images/news/placeholder.jpg';
    }
    
    // Explicitly log the request with auth token for debugging
    console.log('Supabase request details:', {
      table: 'news',
      operation: 'update',
      id,
      data: mapNewsItemToDb(updatedNews),
      authStatus: !!authData.session
    });
    
    const { data, error } = await supabase
      .from('news')
      .update(mapNewsItemToDb(updatedNews))
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating news:', error);
      console.error('Error details:', error.details, error.hint, error.message);
      return null;
    }

    console.log('Successfully updated news, response:', data);
    return mapDbToNewsItem(data as NewsDB);
  } catch (error) {
    console.error('Error in updateNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return null;
  }
};

// Delete a news item
export const deleteNews = async (id: number): Promise<boolean> => {
  try {
    console.log(`Deleting news with id: ${id}`);
    
    // Get the current authentication status
    const { data: authData } = await supabase.auth.getSession();
    
    if (!authData.session) {
      console.error('Cannot delete news: User not authenticated');
      throw new Error('User not authenticated');
    }
    
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting news:', error);
      console.error('Error details:', error.details, error.hint, error.message);
      return false;
    }

    console.log('Successfully deleted news with id:', id);
    return true;
  } catch (error) {
    console.error('Error in deleteNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
};

// Add the provided news items to the database
export const addProvidedNews = async (): Promise<boolean> => {
  try {
    // Get the current authentication status
    const { data: authData } = await supabase.auth.getSession();
    
    if (!authData.session) {
      console.error('Cannot add provided news: User not authenticated');
      throw new Error('User not authenticated');
    }
    
    const newsItems = [
      {
        title: "Запуск завода в Забайкалье",
        date: "Август 2024",
        shortDescription: "ООО «Гранит» ввело в эксплуатацию завод по производству компонентов эмульсионных взрывчатых веществ (ЭВВ) мощностью 30 тыс. тонн/год.",
        fullText: "ООО «Гранит» завершило строительство завода в Забайкалье, который специализируется на производстве компонентов эмульсионных взрывчатых веществ (ЭВВ). Производственные мощности завода составляют 30 тыс. тонн продукции в год, что позволяет компании обеспечивать собственные проекты и расширять географию поставок. Особое внимание уделяется экологичности производства: внедрены технологии переработки мешкотары, минимизирующие воздействие на окружающую среду. Этот шаг подтверждает приверженность компании к устойчивому развитию. Новый завод станет важным звеном в развитии региональной экономики.",
        image: "/images/news/factory.jpg"
      },
      {
        title: "Успешные испытания патронов в Хабаровске",
        date: "Июнь 2024",
        shortDescription: "Начало выпуска эмульсионных патронов диаметром 32–90 мм для автономного применения.",
        fullText: "ООО «Гранит» успешно провело испытания новой линии по производству эмульсионных патронов в Хабаровске. Патроны диаметром 32–90 мм предназначены для автономного применения в сложных климатических условиях. Тестирование показало высокую эффективность продукции, что делает её идеальным решением для удалённых объектов. Новая линия станет ключевым элементом в развитии производственных мощностей компании. Компания планирует увеличить объёмы выпуска патронов в ближайшие годы.",
        image: "/images/news/patron-line.jpg"
      },
      {
        title: "Участие в проекте БАМ-2",
        date: "Май 2024",
        shortDescription: "Применение мобильных ПСЗУ позволило сократить сроки взрывных работ на 15%.",
        fullText: "ООО «Гранит» активно участвует в строительстве БАМ-2, применяя мобильные смесительно-зарядные установки (ПСЗУ). Использование современного оборудования позволило сократить сроки выполнения взрывных работ на 15%. Это подтверждает высокий уровень технической оснащённости компании и её способность решать задачи любой сложности. Участие в проекте укрепляет позиции ООО «Гранит» как надёжного партнёра. Компания гордится вкладом в развитие инфраструктуры страны.",
        image: "/images/news/bam2.jpg"
      },
      {
        title: "Внедрение российского оборудования",
        date: "Апрель 2024",
        shortDescription: "Компания полностью перешла на использование российского оборудования: контроллеры «Овен», уровнемеры «Титан», расходомеры «Эмисс».",
        fullText: "ООО «Гранит» завершило переход на использование российского оборудования, включая контроллеры «Овен», уровнемеры «Титан» и расходомеры «Эмисс». Это решение направлено на минимизацию зависимости от импортных поставщиков и повышение технологической независимости. Внедрение отечественных решений также способствует развитию российского машиностроения. Компания продолжает инвестировать в модернизацию производственных процессов. Переход на российское оборудование повысил надёжность работы оборудования на объектах.",
        image: "/images/news/equipment.jpg"
      },
      {
        title: "Обучение молодых специалистов",
        date: "Февраль 2024",
        shortDescription: "ООО «Гранит» запустило программу обучения молодых специалистов в рамках сотрудничества с профильными вузами.",
        fullText: "ООО «Гранит» запустило программу обучения молодых специалистов в рамках сотрудничества с профильными вузами. Студенты проходят практику на производственных участках, участвуют в реальных проектах и получают навыки работы с современным оборудованием. Программа направлена на подготовку квалифицированных кадров для будущих проектов компании. Это инвестиция в развитие отрасли и укрепление позиций ООО «Гранит». Участники программы уже демонстрируют высокие результаты в работе.",
        image: "/images/news/training.jpg"
      }
    ];

    // Clear existing news - use a different approach that ignores RLS
    console.log('Deleting existing news');
    try {
      const { error: deleteError } = await supabase
        .from('news')
        .delete()
        .neq('id', 0); // Delete all records
        
      if (deleteError) {
        console.error('Error deleting existing news:', deleteError);
        console.error('Error details:', deleteError.details, deleteError.hint, deleteError.message);
        // Continue anyway
      }
    } catch (deleteErr) {
      console.error('Exception during delete operation:', deleteErr);
      // Continue anyway
    }
    
    // Insert all provided news
    let successCount = 0;
    for (const item of newsItems) {
      const { error } = await supabase
        .from('news')
        .insert(mapNewsItemToDb(item));
      
      if (error) {
        console.error('Error adding news item:', error);
        console.error('Failed item:', item);
        console.error('Error details:', error.details, error.hint, error.message);
      } else {
        successCount++;
      }
    }
    
    console.log(`Successfully added ${successCount} of ${newsItems.length} provided news items`);
    return successCount > 0;
  } catch (error) {
    console.error('Error in addProvidedNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
};

// Reset to default data (useful for development)
export const resetNewsData = async (): Promise<void> => {
  try {
    // Delete all existing news
    await supabase.from('news').delete().neq('id', 0);
    
    // Add default news data
    for (const item of newsData) {
      await supabase.from('news').insert(mapNewsItemToDb(item));
    }
  } catch (error) {
    console.error('Error in resetNewsData:', error);
  }
};
