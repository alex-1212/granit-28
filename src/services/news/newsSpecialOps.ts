
import { supabase } from '@/integrations/supabase/client';
import { verifyAuthentication } from './newsAuth';
import { mapNewsItemToDb } from './newsMapping';

// Add the provided news items to the database
export const addProvidedNews = async (): Promise<boolean> => {
  try {
    // Verify authentication
    if (!(await verifyAuthentication())) {
      throw new Error('User not authenticated');
    }
    
    // Предоставляемые новости
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

    // Clear existing news 
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
export const resetNewsData = async (defaultNewsData: any[]): Promise<void> => {
  try {
    // Verify authentication
    if (!(await verifyAuthentication())) {
      throw new Error('User not authenticated');
    }
    
    // Delete all existing news
    await supabase.from('news').delete().neq('id', 0);
    
    // Add default news data
    for (const item of defaultNewsData) {
      await supabase.from('news').insert(mapNewsItemToDb(item));
    }
  } catch (error) {
    console.error('Error in resetNewsData:', error);
  }
};
