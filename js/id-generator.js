import { getRandomInteger } from './util.js';

const createIdGenerator = (min, max) => {
  const previousIds = [];
  return function() {
    let currentId = getRandomInteger(min, max);

    while (previousIds.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }

    previousIds.push(currentId);
    return currentId;
  };
};

const generatePhotoId = createIdGenerator(1, 25);
const generateCommentId = createIdGenerator(1, 1000);

export { generatePhotoId, generateCommentId };
