export interface LinkItem {
  text: string;
  id: number;
  linkText: string;
  linkUrl: string;
}

interface LinksItems {
  exampleOne: LinkItem[];
  exampleTwo: LinkItem[];
  exampleThree: LinkItem[];
}

interface ButtonNames {
  mainButtonHeader: string;
  mainButtonFooter: string;
}

interface HeaderLink {
  id: number;
  title: string;
  href: string;
}

interface NavLink {
  id: number;
  name: string;
  href: string;
}

interface BlogCard {
  title: string;
  subtitle: string;
  shortDescription: string;
  linkUrl: string;
  linkText: string;
  imgUrl: string;
  id: number;
}

interface CoachCard {
  surname: string;
  name: string;
  patronymic: string;
  directions: string[];
  achievements: string;
  photo: string;
}

const linksItems: LinksItems = {
  exampleOne: [
    {
      text: 'Пример1',
      id: 0,
      linkText: 'Пример1',
      linkUrl: '#',
    },
    {
      text: 'Пример2',
      id: 1,
      linkText: 'Пример2',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 2,
      linkText: 'Пример3',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 3,
      linkText: 'Пример4',
      linkUrl: '#',
    },
  ],
  exampleTwo: [
    {
      text: 'Пример1',
      id: 0,
      linkText: 'Пример5',
      linkUrl: '#',
    },
    {
      text: 'Пример2',
      id: 1,
      linkText: 'Пример6',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 2,
      linkText: 'Пример7',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 3,
      linkText: 'Пример8',
      linkUrl: '#',
    },
  ],
  exampleThree: [
    {
      text: 'Пример1',
      id: 0,
      linkText: 'Пример9',
      linkUrl: '#',
    },
    {
      text: 'Пример2',
      id: 1,
      linkText: 'Пример10',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 2,
      linkText: 'Пример11',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 3,
      linkText: 'Пример12',
      linkUrl: '#',
    },
  ],
};

const buttonsNames: ButtonNames = {
  mainButtonHeader: 'Пример',
  mainButtonFooter: 'Пример',
};

const headerLinks: HeaderLink[] = [
  { id: 0, title: 'Блог', href: '/blog' },
  { id: 1, title: 'Тренерский состав', href: '/coachs' },
  { id: 2, title: 'Новости', href: '/news' },
  { id: 3, title: 'Контакты', href: '/contacts' },
];

const navLinksMenu: NavLink[] = [
  { id: 1, name: 'Главная', href: '/' },
  { id: 2, name: 'Блог', href: '/blog' },
  { id: 3, name: 'Тренерский состав', href: '/coachs' },
  { id: 4, name: 'Новости', href: '/news' },
  { id: 5, name: 'Контакты', href: '/contacts' },
];

const blogCards: BlogCard[] = [
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 0,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 1,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 2,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 3,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 4,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 5,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 6,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 7,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 8,
  },
];

const coachCards: CoachCard[] = [
  {
    surname: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Кузнецов',
    name: 'Алексей',
    patronymic: 'Игоревич',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Кузнецов',
    name: 'Алексей',
    patronymic: 'Игоревич',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Кузнецов',
    name: 'Алексей',
    patronymic: 'Игоревич',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Кузнецов',
    name: 'Дмитрий',
    patronymic: 'Анатольевич',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Медведев',
    name: 'Алексей',
    patronymic: 'Анатольевич',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
  {
    surname: 'Медведев',
    name: 'Дмитрий',
    patronymic: 'Анатольевич',
    directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
    achievements:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    photo: '/coach.jpg',
  },
];

const descriptionPages = [
  {
    route: '/blog',
    page: 'Блог',
    content: 'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
  {
    route: '/coachs',
    page: 'Тренерский состав',
    content: 'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
  {
    route: '/news',
    page: 'Новости',
    content: 'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
  {
    route: '/contacts',
    page: 'Контакты',
    content: 'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
];

// тестовый массив с контентом блока FAQ
const testFaqItems = [
  {
    title: 'Пример текста0',
    text:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста',
      id: 0
  },
  {
    title: 'Пример текста1',
    text:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста',
      id: 1
  },
  {
    title: 'Пример текста2',
    text:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста',
      id: 2
  },
];

const testCards = [
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    text: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-teacher-in-gym-class 1.jpg',
    id: 0,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    text: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-teacher-in-gym-class 1.jpg',
    id: 1,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    text: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-teacher-in-gym-class 1.jpg',
    id: 2,
  },
];

export { linksItems, navLinksMenu, buttonsNames, headerLinks, blogCards, coachCards, descriptionPages, testFaqItems, testCards };