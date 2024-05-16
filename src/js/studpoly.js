// массив с клетками поля по порядку
const CELLS = [];

// Название тем
const THEMES = [
  "биология",
  "почвоведение",
  "экология",
  "экономика",
  "менеджмент",
  "управление бизнесом",
  "правоведение",
  "политология",
  "история",
  "информатика",
  "программирование",
  "базы данных",
  "бжд",
  "физкультура",
  "вышмат",
  "линейная алгебра",
  "теорвер",
  "социология",
  "культурология",
  "философия",
  "актерское мастерство",
  "хореография",
  "искусство",
];

// массив с вопросами
const QUESTIONS = [
  {
    theme: 22,
    text: "Как называется композиция из трёх картин или рисунков с общим замыслом, темой?",
    answers: ["Диптих", "Трилогия", "Триптих", "Кадр"],
    right: 2,
  },
  {
    theme: 22,
    text: "Кто написал картину «Утро в сосновом лесу»?",
    answers: ["Шишкин", "Репин", "Айвазовский", "Дарин"],
    right: 0,
  },
  {
    theme: 22,
    text: "Как называется жанр изобразительного искусства, в котором изображаются предметы неодушевлённой природы, представляющие собой целостную композицию?",
    answers: ["Портрет", "Натюрморт", "Пейзаж", "Антрапия"],
    right: 2,
  },
  {
    theme: 20,
    text: "Как называется вид сценического искусства, в котором основным средством создания художественного образа является пластика человеческого тела, без использования слов.",
    answers: ["Пародия", "Комедия", "Пантомима", "Драма"],
    right: 2,
  },
  {
    theme: 20,
    text: "Человек, который подсказывает актёру слова из его речи?",
    answers: ["Суфлёр", "Дирижер", "Режиссер", "Оператор"],
    right: 0,
  },
  {
    theme: 20,
    text: "Как называется первый показ спектакля в театре?",
    answers: ["Предпоказ", "Сенсация", "Премьера", "Бенефис"],
    right: 2,
  },
  {
    theme: 21,
    text: "Назовите танец в умеренно-быстром темпе, в трёхдольном размере. Его основа — плавное кружение при сохранении поступательности движения.",
    answers: ["Полька", "Вальс", "Румба", "Танго"],
    right: 1,
  },
  {
    theme: 21,
    text: "Cтиль, при исполнении которого танцор использует пластичные движения, имитируя движение по телу одной или нескольких волн.",
    answers: ["Waving", "Локинг", "Вог", "Ланкас"],
    right: 0,
  },
  {
    theme: 21,
    text: "Когда были созданы самые старшие танцевальные стили?",
    answers: ["2000-е года", "1990-е года", "1970-е года", "1960-е года"],
    right: 2,
  },
  {
    theme: 8,
    text: "В каком году издан «Указ о вольных хлебопашцах»?",
    answers: [
      "19 февраля 1861",
      "24 июня 1801",
      "31 декабря 1820",
      "4 марта 1803",
    ],
    right: 3,
  },
  {
    theme: 8,
    text: "Какая страна была первой, кто признал независимость США?",
    answers: ["Франция", "Великобритания", "Испания", "Нигер"],
    right: 0,
  },
  {
    theme: 8,
    text: "Какое событие привело к подписанию 'Брестского мира' между Россией и Центральными державами в 1918 году?",
    answers: [
      "Октябрьская революция",
      "Февральская революция",
      "Военный переворот в России",
      "Мартовская революция",
    ],
    right: 0,
  },
  {
    theme: 6,
    text: "Какие дети наследодателя имеют право на обязательную долю в наследстве?",
    answers: [
      "нетрудоспособные",
      "несовершеннолетние или нетрудоспособные",
      "несовершеннолетние",
      "малолетние",
    ],
    right: 1,
  },
  {
    theme: 6,
    text: "Какой вид юридических норм существует?",
    answers: ["Обычаи", "Законы", "Решения", "Уставы"],
    right: 1,
  },
  {
    theme: 6,
    text: "Какие виды собственности существуют по юридическим признакам?",
    answers: ["Коллективная", "Государственная", "Общественная", "Частная"],
    right: 3,
  },
  {
    theme: 7,
    text: "Какие виды юридических лиц могут существовать в правовой системе?",
    answers: ["Физические", "Юридические", "Наследники", "Родственники"],
    right: 1,
  },
  {
    theme: 7,
    text: "Какие основные виды правовой системы в мире?",
    answers: ["Римская", "Советская", "Гражданская", "Смешанная"],
    right: 3,
  },
  {
    theme: 7,
    text: "Какие инструменты используются в правовом обеспечении?",
    answers: ["Поощрения", "Законы", "Угрозы", "Соглашения"],
    right: 1,
  },
  {
    theme: 12,
    text: "Как называется наружная оболочка земли?",
    answers: ["Биосфера", "Гидросфера", "Атмосфера", "Литосфера"],
    right: 1,
  },
  {
    theme: 12,
    text: "Завывание сирен, прерывистые гудки предприятий означают сигнал.",
    answers: [
      "Внимание всем!",
      "Воздушная тревога!",
      "Радиационная опасность!",
      "Химическая тревога!",
    ],
    right: 0,
  },
  {
    theme: 12,
    text: "Что относится к первичным средствам тушения пожара?",
    answers: ["Поваренная соль", "Поташ", "Хлорид натрия", "Песок"],
    right: 3,
  },
  {
    theme: 13,
    text: "Что является древнейшей формой организации физической культуры?",
    answers: ["Бег", "Единоборство", "Плавание", "Игры"],
    right: 3,
  },
  {
    theme: 13,
    text: "Что является одним из основных физических качеств?",
    answers: ["Внимание", "Работоспособность", "Сила", "Здоровье"],
    right: 2,
  },
  {
    theme: 13,
    text: "Что в легкой атлетике делают с ядром?",
    answers: ["Метают", "Бросают", "Толкают", "Запускают"],
    right: 2,
  },
  {
    theme: 0,
    text: "Сколько лет назад появился наш вид Homo Sapiens?",
    answers: [
      "2024 года назад",
      "10000 лет назад",
      "30000 лет назад",
      "200000 лет назад",
    ],
    right: 3,
  },
  {
    theme: 0,
    text: "Кто из списка является жуком?",
    answers: ["Богомол", "Паук", "Жужелица", "Сороконожка"],
    right: 2,
  },
  {
    theme: 0,
    text: "Какое самое высокое дерево в мире?",
    answers: ["Дуб", "Секвойя", "Сосна", "Баобаб"],
    right: 1,
  },
  {
    theme: 3,
    text: "Какие факторы влияют на спрос в экономике?",
    answers: ["Цена", "Сезонность", "Размер", "Цвет"],
    right: 0,
  },
  {
    theme: 3,
    text: "Какие виды рыночных структур существуют в экономике?",
    answers: ["Монополия", "Олигополия", "Автарктнорынок", "Конкуренция"],
    right: 3,
  },
  {
    theme: 3,
    text: "Что из нижеперечисленного является основным показателем экономического развития страны?",
    answers: ["ВВП", "Столицы", "Религия", "Инфраструктура"],
    right: 0,
  },
  {
    theme: 17,
    text: "Какие типы общественных групп существуют в социологии?",
    answers: ["Семья", "Церковь", "Команда", "Национальность"],
    right: 3,
  },
  {
    theme: 17,
    text: "Какие формы социального контроля используются в обществе?",
    answers: ["Наука", "Религия", "Законы", "Традиции"],
    right: 2,
  },
  {
    theme: 17,
    text: "Что из нижеперечисленного является основным концепцией в социологии?",
    answers: ["Экономика", "Стресс", "Социализация", "Искусство"],
    right: 2,
  },
  {
    theme: 14,
    text: "Какие из нижеперечисленных математических теорем справедливы?",
    answers: [
      "Теорема Пифагора",
      "Теорема Декарта",
      "Теорема Эйлера",
      "Теорема Ньютона-Лейбница",
    ],
    right: 0,
  },
  {
    theme: 14,
    text: "Что является основным понятием в теории чисел?",
    answers: ["Матрицы", "Простые числа", "Графики", "Алгебры"],
    right: 1,
  },
  {
    theme: 14,
    text: "Какой метод используется для решения дифференциальных уравнений?",
    answers: [
      "Метод подстановки",
      "Метод пристрелки",
      "Метод исключения",
      "Метод интегрирования",
    ],
    right: 3,
  },
  {
    theme: 16,
    text: "Что является основным понятием в теории вероятности?",
    answers: ["Событие", "Хаос", "Функция", "Анализ"],
    right: 0,
  },
  {
    theme: 16,
    text: "Что обозначает вероятность определенного события?",
    answers: ["Случайность", "Число", "Точность", "Верность"],
    right: 1,
  },
  {
    theme: 16,
    text: "Какие виды распределения существуют в теории вероятности?",
    answers: [
      "Равномерное",
      "Произвольное",
      "Постоянное",
      "Сверхъестественное",
    ],
    right: 0,
  },
  {
    theme: 15,
    text: "Какие из нижеприведенных операций чаще всего используются в линейной алгебре?",
    answers: ["Сложение", "Умножение", "Вычитание", "Деление"],
    right: 0,
  },
  {
    theme: 15,
    text: "Какая из нижеперечисленных матриц является единичной?",
    answers: ["Нулевая", "Одномерная", "Главная", "Диагональная"],
    right: 2,
  },
  {
    theme: 15,
    text: "Как определить собственные значения матрицы?",
    answers: ["Поиск", "Решение", "Умножение", "Диагонализация"],
    right: 3,
  },
  {
    theme: 9,
    text: "Сколько бит в одном мегабайте?",
    answers: ["8", "8388608", "8192", "1024"],
    right: 2,
  },
  {
    theme: 9,
    text: "Какая самая популярная ОС на компьютеры в мире?",
    answers: ["Windows", "MacOS", "Linux", "Android"],
    right: 0,
  },
  {
    theme: 10,
    text: "Какой из нижеприведенных языков программирования относятся к объектно-ориентированным?",
    answers: ["Python", "HTML", "CSS", "SQL"],
    right: 0,
  },
  {
    theme: 10,
    text: "Какой из нижеперечисленных структур данных используется для хранения элементов с уникальными ключами?",
    answers: ["Массив", "Стек", "Множество", "Очередь"],
    right: 2,
  },
  {
    theme: 10,
    text: "Что из нижеперечисленного обозначает процесс изменения исходного кода программы без изменения ее поведения?",
    answers: ["Дебаггинг", "Оптимизация", "Рефакторинг", "Тестирование"],
    right: 2,
  },
  {
    theme: 11,
    text: "Какие виды ключей используются в базах данных для идентификации уникальных записей?",
    answers: ["Главный", "Внешний", "Первичный", "Дополнительный"],
    right: 2,
  },
  {
    theme: 11,
    text: "Какая операция в SQL используется для выборки данных из базы данных?",
    answers: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    right: 2,
  },
  {
    theme: 11,
    text: "Что из нижеперечисленного используется для ограничения доступа к данным в базе данных?",
    answers: ["SQL", "FK", "JOIN", "ACL"],
    right: 3,
  },
  {
    theme: 1,
    text: "Какая из нижеперечисленных почвенных групп наиболее плодородна?",
    answers: ["Песчаная", "Суглинок", "Почва черноземная", "Почва каменистая"],
    right: 2,
  },
  {
    theme: 1,
    text: "Какой процесс является основным механизмом образования почвы?",
    answers: ["Эрозия", "Глеизация", "Денудация", "Педогенез"],
    right: 3,
  },
  {
    theme: 1,
    text: "Какой фактор оказывает наибольшее влияние на формирование почвенного профиля?",
    answers: ["Температура", "Влажность", "Рельеф", "Растительность"],
    right: 2,
  },
  {
    theme: 4,
    text: "Какой из нижеперечисленных стилей лидерства характеризуется высокой степенью контроля и низким уровнем участия сотрудников в принятии решений?",
    answers: [
      "Автократический",
      "Демократический",
      "Лаиссез-фер",
      "Трансформационный",
    ],
    right: 0,
  },
  {
    theme: 4,
    text: "Какая из следующих функций менеджмента включает управление процессом направления и координации деятельности сотрудников?",
    answers: ["Планирование", "Организация", "Контроль", "Мотивация"],
    right: 1,
  },
  {
    theme: 4,
    text: "Какой тип власти в организации основан на специальных знаниях или навыках руководителя?",
    answers: ["Традиционный", "Легитимный", "Харизматический", "Экспертный"],
    right: 3,
  },
  {
    theme: 5,
    text: "Какой вид управления бизнесом ориентирован на максимизацию прибыли без учета социальных и экологических аспектов?",
    answers: [
      "Стратегическое",
      "Финансовое",
      "Экономическое",
      "Оптимизационное",
    ],
    right: 1,
  },
  {
    theme: 5,
    text: "Какой аспект управления бизнесом включает в себя распределение ресурсов, установление целей и разработку стратегий для их достижения?",
    answers: ["Планирование", "Маркетинг", "Контроль", "Мотивация"],
    right: 0,
  },
  {
    theme: 5,
    text: "Какой из нижеперечисленных факторов является ключевым для успешного управления бизнесом в современном мире?",
    answers: ["Изоляция", "Инновации", "Статичность", "Дискриминация"],
    right: 1,
  },
  {
    theme: 2,
    text: "Какое вещество является одним из основных газов, приводящих к парниковому эффекту?",
    answers: ["Кислород", "Азот", "Углекислый газ", "Аргон"],
    right: 2,
  },
  {
    theme: 2,
    text: "Какой фактор способствует сохранению экологического баланса и биоразнообразия в природе?",
    answers: [
      "Освоение природы",
      "Загрязнение окружающей среды",
      "Энергосбережение",
      "Вырубка лесов",
    ],
    right: 2,
  },
  {
    theme: 2,
    text: "Какое из перечисленных действий может способствовать снижению уровня загрязнения воздуха?",
    answers: [
      "Добыча ископаемых",
      "Использование ветра как источника энергии",
      "Выбросы от автотранспорта",
      "Сжигание отходов",
    ],
    right: 1,
  },
  {
    theme: 18,
    text: "Что представляет собой совокупность письменных и устных достижений культуры?",
    answers: ["Музыка", "Искусство", "Литература", "Фольклор"],
    right: 2,
  },
  {
    theme: 18,
    text: "Какой термин используется для обозначения основных наборов обычаев и традиций в обществе?",
    answers: ["Каста", "Культурология", "Этнос", "Культура"],
    right: 3,
  },
  {
    theme: 18,
    text: "Что изучает культурология, как составную часть культуры индивида?",
    answers: ["Язык", "Мода", "Религия", "Восприятие"],
    right: 3,
  },
  {
    theme: 19,
    text: "Какой из философских течений выдвинул принцип справедливости как основу общественного строя?",
    answers: [
      "Рационализм",
      "Конфуцианство",
      "Кармическая философия",
      "Либерализм",
    ],
    right: 3,
  },
  {
    theme: 19,
    text: "Что из перечисленного считается одним из основных вопросов философии искусства?",
    answers: ["Эстетика", "Этика", "Политика", "Онтология"],
    right: 0,
  },
  {
    theme: 19,
    text: "Какое философское направление исследует основания познания и истоки знания?",
    answers: ["Метафизика", "Эпистемология", "Онтология", "Аксиология"],
    right: 1,
  },
];

// объект клетки
// - тип клетки
// - код темы
// - игроки на ней

CELLS.push({ id: 0, type: "start", theme: null, players: [] });
CELLS.push({ id: 1, type: "default", theme: 0, players: [] });
CELLS.push({ id: 2, type: "chance", theme: null, players: [] });
CELLS.push({ id: 3, type: "default", theme: 1, players: [] });
CELLS.push({ id: 4, type: "default", theme: 2, players: [] });
CELLS.push({ id: 5, type: "exam", theme: null, players: [] });
CELLS.push({ id: 6, type: "default", theme: 3, players: [] });
CELLS.push({ id: 7, type: "money", theme: null, players: [] });
CELLS.push({ id: 8, type: "default", theme: 4, players: [] });
CELLS.push({ id: 9, type: "default", theme: 5, players: [] });
CELLS.push({ id: 10, type: "home", theme: null, players: [] });
CELLS.push({ id: 11, type: "default", theme: 6, players: [] });
CELLS.push({ id: 12, type: "chance", theme: null, players: [] });
CELLS.push({ id: 13, type: "default", theme: 7, players: [] });
CELLS.push({ id: 14, type: "default", theme: 8, players: [] });
CELLS.push({ id: 15, type: "exam", theme: null, players: [] });
CELLS.push({ id: 16, type: "default", theme: 9, players: [] });
CELLS.push({ id: 17, type: "money", theme: null, players: [] });
CELLS.push({ id: 18, type: "default", theme: 10, players: [] });
CELLS.push({ id: 19, type: "default", theme: 11, players: [] });
CELLS.push({ id: 20, type: "tostart", theme: null, players: [] });
CELLS.push({ id: 21, type: "default", theme: 12, players: [] });
CELLS.push({ id: 22, type: "chance", theme: null, players: [] });
CELLS.push({ id: 23, type: "default", theme: 13, players: [] });
CELLS.push({ id: 24, type: "money", theme: null, players: [] });
CELLS.push({ id: 25, type: "exam", theme: null, players: [] });
CELLS.push({ id: 26, type: "default", theme: 14, players: [] });
CELLS.push({ id: 27, type: "money", theme: null, players: [] });
CELLS.push({ id: 28, type: "default", theme: 15, players: [] });
CELLS.push({ id: 29, type: "default", theme: 16, players: [] });
CELLS.push({ id: 30, type: "tohome", theme: null, players: [] });
CELLS.push({ id: 31, type: "default", theme: 17, players: [] });
CELLS.push({ id: 32, type: "chance", theme: null, players: [] });
CELLS.push({ id: 33, type: "default", theme: 18, players: [] });
CELLS.push({ id: 34, type: "default", theme: 19, players: [] });
CELLS.push({ id: 35, type: "exam", theme: null, players: [] });
CELLS.push({ id: 36, type: "default", theme: 20, players: [] });
CELLS.push({ id: 37, type: "money", theme: null, players: [] });
CELLS.push({ id: 38, type: "default", theme: 21, players: [] });
CELLS.push({ id: 39, type: "default", theme: 22, players: [] });

export { CELLS, QUESTIONS, THEMES };
