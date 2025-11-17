// Временные данные для разработки
const createPictures = () => [
  {
    id: 1,
    url: 'https://example.com/photos/1.jpg',
    description: 'Прекрасный закат на море',
    likes: 156,
    comments: [
      { id: 1, text: 'Отличное фото!', author: 'user1' },
      { id: 2, text: 'Очень красиво', author: 'user2' }
    ]
  },
  {
    id: 2,
    url: 'https://example.com/photos/2.jpg',
    description: 'Горный пейзаж',
    likes: 89,
    comments: [
      { id: 3, text: 'Великолепно!', author: 'user3' }
    ]
  },
  {
    id: 3,
    url: 'https://example.com/photos/3.jpg',
    description: 'Городская архитектура',
    likes: 203,
    comments: [
      { id: 4, text: 'Интересный ракурс', author: 'user4' },
      { id: 5, text: 'Люблю этот город', author: 'user5' },
      { id: 6, text: 'Отличное качество', author: 'user6' }
    ]
  },
  {
    id: 4,
    url: 'https://example.com/photos/4.jpg',
    description: 'Лесная тропа',
    likes: 134,
    comments: [
      { id: 7, text: 'Хочу туда!', author: 'user7' }
    ]
  },
  {
    id: 5,
    url: 'https://example.com/photos/5.jpg',
    description: 'Ночной город',
    likes: 278,
    comments: [
      { id: 8, text: 'Потрясающие огни', author: 'user8' },
      { id: 9, text: 'Отличная работа', author: 'user9' }
    ]
  }
];

export { createPictures };

