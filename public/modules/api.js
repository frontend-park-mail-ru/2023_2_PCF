import Ajax from './ajax.js';

const URLS = {
  login: '/auth',
  signup: '/user',
  ad: '/ad',
};

const BACKEND_URL = 'http://127.0.0.1:8080/api/v1';

export default class Api {
  static login(data={}) {
    return Ajax.post(BACKEND_URL + URLS.login, data);
  }

  static signup(data={}) {
    return Ajax.post(BACKEND_URL + URLS.signup, data);
  }

  static getAdsList() {
    return Ajax.get(BACKEND_URL + '/ad')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Сетевая ошибка: ' + response.status);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Произошла ошибка при запросе /ad', error);
      });
  }

  static createAd(data = {}) {
    return Ajax.post(BACKEND_URL + '/ad', data)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Сетевая ошибка: ' + response.status);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Произошла ошибка при запросе создания объявления', error);
      });
  }

  static logout() {
    return Ajax.get(BACKEND_URL + URLS.logout);
  }

  static createAudience(data = {}) {
    return Ajax.post(BACKEND_URL + '/targetcreate', data)
  }
}
