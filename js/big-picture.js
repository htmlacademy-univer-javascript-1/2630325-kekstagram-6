const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const body = document.body;

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let comments = [];

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

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  const currentDOMCommentsCount = socialComments.children.length;
  const nextComments = comments.slice(currentDOMCommentsCount, commentsShown);

  nextComments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragment.appendChild(commentElement);
  });

  socialComments.appendChild(fragment);

  commentCountBlock.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const onCommentsLoaderClick = () => {
  renderComments();
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = (picture) => {
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;

  comments = picture.comments;
  commentsShown = 0;

  socialComments.innerHTML = '';

  renderComments();

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCountBlock.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };

