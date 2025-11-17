import { createPictures } from './data.js';

const createThumbnailElement = (picture) => {
  const template = document.querySelector('#picture').content;
  const thumbnail = template.cloneNode(true);

  const img = thumbnail.querySelector('.picture_img');
  img.src = picture.url;
  img.alt = picture.description;

  thumbnail.querySelector('.picture_likes').textContent = picture.likes;
  thumbnail.querySelector('.picture_comments').textContent = picture.comments.length;

  return thumbnail;
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
