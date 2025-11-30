import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const MAX_HASHTAGS_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;

const formElement = document.querySelector('.img-upload__form');
const fileInputElement = formElement.querySelector('.img-upload__input');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const closeButtonElement = formElement.querySelector('.img-upload__cancel');
const hashtagsInputElement = formElement.querySelector('.text__hashtags');
const descriptionInputElement = formElement.querySelector('.text__description');
const bodyElement = document.body;

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const splitHashtags = (value) => value.trim().split(/\s+/).filter((tag) => tag.length > 0);

const validateHashtagsFormat = (value) => {
  if (value.trim() === '') {
    return true;
  }
  const hashtags = splitHashtags(value);
  return hashtags.every((tag) => HASHTAG_PATTERN.test(tag));
};

const validateHashtagsCount = (value) => {
  if (value.trim() === '') {
    return true;
  }
  const hashtags = splitHashtags(value);
  return hashtags.length <= MAX_HASHTAGS_COUNT;
};

const validateHashtagsUniqueness = (value) => {
  if (value.trim() === '') {
    return true;
  }
  const hashtags = splitHashtags(value).map((tag) => tag.toLowerCase());
  return hashtags.length === new Set(hashtags).size;
};

const validateDescriptionLength = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  hashtagsInputElement,
  validateHashtagsFormat,
  'Хэш-тег должен начинаться с # и содержать только буквы и цифры (максимум 20 символов)'
);

pristine.addValidator(
  hashtagsInputElement,
  validateHashtagsCount,
  `Максимум ${MAX_HASHTAGS_COUNT} хэш-тегов`
);

pristine.addValidator(
  hashtagsInputElement,
  validateHashtagsUniqueness,
  'Хэш-теги не должны повторяться'
);

pristine.addValidator(
  descriptionInputElement,
  validateDescriptionLength,
  `Максимум ${MAX_DESCRIPTION_LENGTH} символов`
);

const onFieldKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

const closeForm = () => {
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  hashtagsInputElement.removeEventListener('keydown', onFieldKeydown);
  descriptionInputElement.removeEventListener('keydown', onFieldKeydown);

  formElement.reset();
  pristine.reset();
  resetScale();
  resetEffects();
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
}

const openForm = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  hashtagsInputElement.addEventListener('keydown', onFieldKeydown);
  descriptionInputElement.addEventListener('keydown', onFieldKeydown);
};

const onFileInputChange = () => {
  openForm();
};

const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
};

fileInputElement.addEventListener('change', onFileInputChange);
closeButtonElement.addEventListener('click', closeForm);
formElement.addEventListener('submit', onFormSubmit);

