import { getRandomInteger, getRandomArrayElement } from './util.js';
import { generatePhotoId, generateCommentId } from './id-generator.js';

const NAMES = [
  'Артём', 'Мария', 'Иван', 'София', 'Дмитрий',
  'Анна', 'Алексей', 'Виктория', 'Сергей', 'Екатерина',
  'Максим', 'Ольга', 'Павел', 'Наталья', 'Владимир'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Отличный день на пляже',
  'Вкусный ужин в ресторане',
  'Мой пушистый друг',
  'Горные пейзажи просто захватывают дух',
  'Уютный вечер с книгой',
  'Новый рецепт удался на славу',
  'Прогулка по осеннему парку',
  'Мои новые кроссовки',
  'Закат над океаном',
  'Кофе и работа в кафе',
  'Цветы в моем саду',
  'Путешествие в новый город',
  'Спортивные достижения',
  'Домашний кинотеатр',
  'Встреча с друзьями'
];

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  return Array.from({ length: commentsCount }, createComment);
};

const createPhotoData = (index) => ({
  id: generatePhotoId(),
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const generatePhotosData = () => Array.from({ length: 25 }, (_, index) => createPhotoData(index));

const photosData = generatePhotosData();

export { photosData };
