import Ajax from './ajax.js';

const URLS = {
  login: '/auth',
  signup: '/user',
  ad: '/ad',
};

const BACKEND_URL = 'http://84.23.53.167:8080';

export default class Api {
  static login(data={}) {
    return Ajax.post(BACKEND_URL + URLS.login, data);
  }

  static signup(data={}) {
    return Ajax.post(BACKEND_URL + URLS.signup, data);
  }

  static getAds() {
    // const token = getSessionToken();

    return fetch('http://84.23.53.167:8080/ping')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сетевая ошибка: ' + response.status);
          }
          // console.log(response.json())
          return response.json();
        })
        .then((data) => {
          const jsonData = data;
          console.log(jsonData);

          return jsonData;
        })
        .catch((error) => {
          console.error('Произошла ошибка при запросе /ping:', error);
        });

    // Проверяем, что токен существует
    //         if (!token) {
    //             console.error("Токен не найден в куки");
    //             return Promise.reject("Токен не найден в куки");
    //         }

    // // Добавляем токен в параметры запроса
    //         const queryParams = `?token`;

    // // Отправляем GET-запрос с токеном
    //         return Ajax.get(BACKEND_URL + URLS.ad + queryParams);
  }

  static logout() {
    return Ajax.get(BACKEND_URL + URLS.logout);
  }
}

function getSessionToken() {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'session_token') {
      return decodeURIComponent(value);
    }
  }
  return null;
}
