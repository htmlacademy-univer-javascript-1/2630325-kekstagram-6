import { renderThumbnails } from './thumbnails.js';
import { loadPictures } from './api.js';
import { showLoadError } from './messages.js';
import './form.js';

loadPictures()
  .then((pictures) => {
    renderThumbnails(pictures);
  })
  .catch((error) => {
    showLoadError(error.message);
  });


