const createPictures = () => [
  {
    id: 1,
    url: 'photos/1.jpg',
    description: 'Прекрасный вид на море',
    likes: 156,
    comments: [
      { id: 1, avatar: 'img/avatar-1.svg', name: 'Иван', message: 'Отличное фото!' },
      { id: 2, avatar: 'img/avatar-2.svg', name: 'Мария', message: 'Очень красиво' }
    ]
  },
  {
    id: 2,
    url: 'photos/2.jpg',
    description: 'GO TO THE BEACH',
    likes: 89,
    comments: [
      { id: 3, avatar: 'img/avatar-3.svg', name: 'Алексей', message: 'Там прикольно!' }
    ]
  },
  {
    id: 3,
    url: 'photos/3.jpg',
    description: 'Курорт',
    likes: 203,
    comments: [
      { id: 4, avatar: 'img/avatar-4.svg', name: 'Ольга', message: 'Интересный ракурс' },
      { id: 5, avatar: 'img/avatar-5.svg', name: 'Дмитрий', message: 'Очень красиво выглядит!' },
      { id: 6, avatar: 'img/avatar-6.svg', name: 'Анна', message: 'Отличное качество' }
    ]
  },
  {
    id: 4,
    url: 'photos/4.jpg',
    description: 'Красивая девушка',
    likes: 134,
    comments: [
      { id: 7, avatar: 'img/avatar-1.svg', name: 'Сергей', message: 'У вас очень красивые глаза!' }
    ]
  },
  {
    id: 5,
    url: 'photos/5.jpg',
    description: 'Вкусный суп',
    likes: 278,
    comments: [
      { id: 8, avatar: 'img/avatar-2.svg', name: 'Елена', message: 'Потрясающий суп' },
      { id: 9, avatar: 'img/avatar-3.svg', name: 'Павел', message: 'Отличная работа' },
      { id: 10, avatar: 'img/avatar-4.svg', name: 'Максим', message: 'Прикольно' },
      { id: 11, avatar: 'img/avatar-5.svg', name: 'Игорь', message: 'Классно' },
      { id: 12, avatar: 'img/avatar-6.svg', name: 'Леонид', message: 'Замечательно' },
      { id: 13, avatar: 'img/avatar-2.svg', name: 'Илья', message: 'Имба' }
    ]
  }
];

export { createPictures };


