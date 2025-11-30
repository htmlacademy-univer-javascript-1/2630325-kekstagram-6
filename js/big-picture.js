const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const body = document.body;

/**
 * Создаёт DOM-элемент одного комментария
 */
const createCommentElement = (comment) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;

  li.appendChild(img);
  li.appendChild(p);

  return li;
};

/**
 * Отрисовывает список комментариев
 */
const renderComments = (comments) => {
  socialComments.innerHTML = ''; // Очищаем контейнер от старых комментариев

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragment.appendChild(commentElement);
  });

  socialComments.appendChild(fragment);
};

/**
 * Закрывает окно
 */
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

/**
 * Обработчик нажатия Esc
 */
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

/**
 * Открывает окно с полноразмерным изображением
 */
const openBigPicture = (picture) => {
  // 1. Заполняем данные
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;

  // 2. Отрисовываем комментарии
  renderComments(picture.comments);

  // 3. Скрываем счетчик и загрузчик (по заданию)
  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // 4. Показываем окно и блокируем скролл
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  // 5. Вешаем обработчик на Esc
  document.addEventListener('keydown', onDocumentKeydown);
};

// Обработчик клика по крестику (вешаем один раз)
closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };


