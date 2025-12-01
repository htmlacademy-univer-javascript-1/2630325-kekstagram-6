import { renderThumbnails } from './thumbnails.js';
import { loadPictures } from './api.js';
import { showLoadError } from './messages.js';
import './form.js';

const initApp = () => {
  loadPictures()
    .then((pictures) => {
      console.log('Получено фото:', pictures.length);
      console.log('Первое фото:', pictures[0]);
      renderThumbnails(pictures);
    })
    .catch((error) => {
      console.log('Ошибка загрузки:', error);
      showLoadError(error.message);
    });
};

document.addEventListener('DOMContentLoaded', initApp);

