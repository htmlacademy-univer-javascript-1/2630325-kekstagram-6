const BASE_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные',
  SEND_DATA: 'Не удалось отправить данные'
};

const loadPictures = () =>
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(ErrorText.GET_DATA);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Исходный URL:', data[0].url);
      const modified = data.map((picture) => ({
        ...picture,
        url: `${BASE_URL}/${picture.url}`
      }));
      console.log('Новый URL:', modified[0].url);
      return modified;
    });

const sendPicture = (formData) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(ErrorText.SEND_DATA);
      }
      return response.json();
    });

export { loadPictures, sendPicture };
