import { createPictures } from './data.js';
import { openBigPicture } from './big-picture.js';

const createThumbnailElement = (picture) => {
  const template = document.querySelector('#picture').content;
  const thumbnailFragment = template.cloneNode(true);

  const thumbnailLink = thumbnailFragment.querySelector('.picture');
  const img = thumbnailFragment.querySelector('.picture__img');
  const likes = thumbnailFragment.querySelector('.picture__likes');
  const comments = thumbnailFragment.querySelector('.picture__comments');

  img.src = picture.url;
  img.alt = picture.description;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;

  thumbnailLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(picture);
  });

  return thumbnailFragment;
};

const renderThumbnails = (pictures) => {
  const container = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnailElement(picture);
    fragment.appendChild(thumbnailElement);
  });

  container.appendChild(fragment);
};

const initThumbnails = () => {
  const pictures = createPictures();
  renderThumbnails(pictures);
};

export { initThumbnails };

