
import { useLanguage } from '@/context/LanguageContext';

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export const useFaqData = () => {
  const { language } = useLanguage();

  const faqTranslations: Record<string, { questions: Record<string, string>, answers: Record<string, string> }> = {
    ru: {
      questions: {
        'evv': 'Что такое ЭВВ и в чем их преимущества?',
        'regions': 'Какие регионы обслуживает ООО «Гранит»?',
        'rotation': 'Как организована работа вахтовым методом?',
        'technologies': 'Какие технологии использует компания для работы в экстремальных климатических условиях?',
        'safety': 'Как ООО «Гранит» обеспечивает безопасность при проведении взрывных работ?',
        'ecology': 'Какие экологические меры предпринимает компания?',
        'career': 'Какие карьерные возможности предлагает ООО «Гранит»?',
        'remote': 'Как компания работает с заказчиками на удаленных объектах?'
      },
      answers: {
        'evv': 'ЭВВ (эмульсионные взрывчатые вещества) – это современный тип промышленных взрывчатых веществ, представляющих собой эмульсию «вода в масле» с добавлением газогенерирующих добавок. Их преимущества включают высокую безопасность при транспортировке, водостойкость, экологичность (минимальное количество токсичных газов при взрыве), стабильность в различных климатических условиях и возможность точной настройки энергетических характеристик под конкретный проект.',
        'regions': 'ООО «Гранит» специализируется на выполнении буровзрывных работ на территории Дальнего Востока России, включая Забайкальский край, Хабаровский край, Республику Саха (Якутия), Камчатский край, Приморский край и Амурскую область. Наличие собственных производственных мощностей в Забайкалье, Хабаровске и Якутии позволяет нам эффективно работать даже в самых удаленных районах.',
        'rotation': 'Компания организует работу вахтовым методом с графиком 2/2 месяца. Мы берем на себя все расходы, связанные с доставкой сотрудников от пункта сбора до места работы и обратно, включая перелеты и проживание в хостеле на время трудоустройства. Также компания компенсирует прохождение медицинской комиссии. Все сотрудники оформляются официально по ТК РФ с полным социальным пакетом и «белой» заработной платой.',
        'technologies': 'Для работы в суровых климатических условиях Дальнего Востока и Крайнего Севера мы используем специально разработанные составы ЭВВ, включая «холодную» эмульсию, сохраняющую свои свойства при крайне низких температурах. Техника компании адаптирована для работы в экстремальных условиях: используются бульдозеры SHANTUI с двигателями повышенной мощности (360 л.с.), вездеходы ТРЭКОЛ с бескамерными шинами для среднегорья, плавающие буровые платформы на базе ПТ-76 для работы в заболоченной местности.',
        'safety': 'Безопасность – наш главный приоритет. Мы строго соблюдаем все нормативные требования и используем многоуровневую систему защиты: тщательное проектирование каждого взрыва с учетом особенностей местности, использование современных систем инициирования с электронным замедлением, применение защитных матов для предотвращения разлета породы, постоянный мониторинг сейсмического воздействия. Все сотрудники проходят регулярные тренинги по технике безопасности, а перед каждым взрывом проводится детальный инструктаж.',
        'ecology': 'ООО «Гранит» внедряет замкнутые циклы производства, включая программу переработки мешкотары в полиэтиленовые рукава для зарядки скважин и бытовых нужд. Наши ЭВВ экологичны: при детонации образуется минимальное количество токсичных газов. Мы проводим постоянный мониторинг воздействия работ на окружающую среду и внедряем технологии, минимизирующие нагрузку на экосистемы. На всех объектах действуют процедуры обращения с отходами, включая их сортировку и передачу на переработку.',
        'career': 'Компания предоставляет широкие возможности для профессионального развития как опытным специалистам, так и молодым сотрудникам. Мы практикуем систему наставничества, проводим регулярные программы повышения квалификации и специализированные тренинги. Сотрудники могут участвовать в стратегических проектах, таких как строительство БАМ-2 и газопровода «Сила Сибири-2». Мы обеспечиваем конкурентоспособную «белую» заработную плату, полный социальный пакет, компенсацию проезда, медкомиссий и предоставляем возможности для санаторно-курортного лечения.',
        'remote': 'Для работы на удаленных объектах мы используем мобильные смесительно-зарядные установки (ПСЗУ), позволяющие производить ЭВВ непосредственно на месте проведения работ. Компания располагает собственным парком вездеходной и специализированной техники, что обеспечивает автономность работы в труднодоступных районах. Наши инженеры и технологи имеют опыт адаптации технологических процессов под конкретные условия площадки, независимо от ее удаленности и климатических особенностей.'
      }
    },
    en: {
      questions: {
        'evv': 'What is EVV and what are its advantages?',
        'regions': 'Which regions does Granit LLC serve?',
        'rotation': 'How is rotation work organized?',
        'technologies': 'What technologies does the company use for work in extreme climatic conditions?',
        'safety': 'How does Granit LLC ensure safety during blasting operations?',
        'ecology': 'What environmental measures does the company take?',
        'career': 'What career opportunities does Granit LLC offer?',
        'remote': 'How does the company work with clients at remote sites?'
      },
      answers: {
        'evv': 'EVV (emulsion explosives) is a modern type of industrial explosives, consisting of a "water in oil" emulsion with the addition of gas-generating additives. Their advantages include high safety during transportation, water resistance, environmental friendliness (minimal amount of toxic gases during explosion), stability in various climatic conditions, and the ability to fine-tune energy characteristics for specific projects.',
        'regions': 'Granit LLC specializes in drilling and blasting operations in the Russian Far East, including the Trans-Baikal Territory, Khabarovsk Territory, the Republic of Sakha (Yakutia), Kamchatka Territory, Primorsky Territory, and the Amur Region. Having our own production facilities in Transbaikalia, Khabarovsk, and Yakutia allows us to work efficiently even in the most remote areas.',
        'rotation': 'The company organizes work on a rotation basis with a 2/2 month schedule. We cover all expenses related to employee transportation from the collection point to the work site and back, including flights and hostel accommodation during employment. The company also compensates for medical examinations. All employees are officially registered under the Labor Code with a full social package and "white" salary.',
        'technologies': 'For work in harsh climatic conditions of the Far East and Far North, we use specially developed EVV compositions, including "cold" emulsion that retains its properties at extremely low temperatures. The company\'s equipment is adapted for work in extreme conditions: SHANTUI bulldozers with high-power engines (360 hp), TRECOL all-terrain vehicles with tubeless tires for mid-mountain areas, and floating drilling platforms based on PT-76 for work in swampy areas.',
        'safety': 'Safety is our top priority. We strictly comply with all regulatory requirements and use a multi-level protection system: careful design of each explosion considering terrain features, use of modern initiation systems with electronic delay, application of protective mats to prevent rock dispersion, and constant monitoring of seismic impact. All employees undergo regular safety training, and detailed briefing is conducted before each blast.',
        'ecology': 'Granit LLC implements closed production cycles, including a program for recycling bag containers into polyethylene sleeves for well charging and household needs. Our EVVs are environmentally friendly: minimal toxic gases are formed during detonation. We continuously monitor the environmental impact of operations and implement technologies that minimize the load on ecosystems. All facilities have waste management procedures, including sorting and recycling.',
        'career': 'The company provides extensive opportunities for professional development for both experienced specialists and young employees. We practice a mentoring system, conduct regular professional development programs and specialized training. Employees can participate in strategic projects such as the construction of BAM-2 and the Power of Siberia-2 gas pipeline. We provide competitive "white" salary, full social package, travel compensation, medical examinations, and opportunities for health resort treatment.',
        'remote': 'For work at remote sites, we use mobile mixing and charging units (PSZU) that allow producing EVV directly at the work site. The company has its own fleet of all-terrain and specialized equipment, which ensures autonomous operation in hard-to-reach areas. Our engineers and technologists have experience in adapting technological processes to specific site conditions, regardless of their remoteness and climatic features.'
      }
    },
    zh: {
      questions: {
        'evv': '什么是乳化炸药，它有什么优势？',
        'regions': '格兰尼特有限责任公司服务哪些地区？',
        'rotation': '轮班工作是如何组织的？',
        'technologies': '公司在极端气候条件下使用哪些技术？',
        'safety': '格兰尼特有限责任公司如何确保爆破作业的安全？',
        'ecology': '公司采取哪些环保措施？',
        'career': '格兰尼特有限责任公司提供哪些职业发展机会？',
        'remote': '公司如何与偏远地区的客户合作？'
      },
      answers: {
        'evv': '乳化炸药是一种现代工业炸药，由"油包水"乳化剂和气体发生剂添加剂组成。其优势包括运输安全性高、防水性能好、环保（爆炸时产生的有毒气体最少）、在各种气候条件下稳定，并且能够根据具体项目精确调整能量特性。',
        'regions': '格兰尼特有限责任公司专门在俄罗斯远东地区进行钻探和爆破作业，包括外贝加尔边疆区、哈巴罗夫斯克边疆区、萨哈共和国（雅库特）、堪察加边疆区、滨海边疆区和阿穆尔州。在外贝加尔、哈巴罗夫斯克和雅库特拥有自己的生产设施，使我们能够在最偏远的地区高效工作。',
        'rotation': '公司采用2/2月轮班制工作。我们承担从集合点到工作地点往返的所有员工交通费用，包括航班和就业期间的宿舍住宿。公司还补贴体检费用。所有员工都按照劳动法正式注册，享有完整的社会保障包和"白色"工资。',
        'technologies': '为了在远东和远北地区恶劣的气候条件下工作，我们使用专门开发的乳化炸药配方，包括在极低温度下保持性能的"冷"乳化剂。公司的设备适应极端条件：使用配备高功率发动机（360马力）的山推推土机、用于中山地区的无内胎轮胎TRECOL全地形车，以及基于PT-76的浮动钻井平台用于沼泽地作业。',
        'safety': '安全是我们的首要任务。我们严格遵守所有监管要求，使用多级保护系统：考虑地形特点仔细设计每次爆破、使用带电子延时的现代起爆系统、使用防护垫防止岩石飞散、持续监测地震影响。所有员工都定期接受安全培训，每次爆破前都进行详细的安全说明。',
        'ecology': '格兰尼特有限责任公司实施封闭生产循环，包括将袋装容器回收利用为井充装和家用聚乙烯套管的计划。我们的乳化炸药环保：爆炸时产生的有毒气体最少。我们持续监测作业对环境的影响，实施最大限度减少生态系统负荷的技术。所有设施都有废物管理程序，包括分类和回收。',
        'career': '公司为有经验的专家和年轻员工提供广泛的专业发展机会。我们实行导师制度，定期进行专业发展计划和专业培训。员工可以参与战略项目，如BAM-2和西伯利亚力量-2天然气管道的建设。我们提供有竞争力的"白色"工资、完整的社会保障包、差旅补贴、体检补贴，并提供疗养机会。',
        'remote': '对于偏远地点的工作，我们使用移动混装设备（PSZU），可以直接在工地生产乳化炸药。公司拥有自己的全地形和专用设备车队，确保在难以到达的地区独立运作。我们的工程师和技术人员有经验根据具体场地条件调整技术流程，无论其偏远程度和气候特点如何。'
      }
    }
  };

  const getFaqData = (): FAQItem[] => {
    return Object.keys(faqTranslations[language].questions).map(key => ({
      questionKey: faqTranslations[language].questions[key],
      answerKey: faqTranslations[language].answers[key]
    }));
  };

  return getFaqData();
};
