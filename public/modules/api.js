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
    return Ajax.get({url:BACKEND_URL + '/ad'});
  }

  static getAudienceList() {
    return Ajax.get({url:BACKEND_URL + '/targetlist'});
  }

  static createAd(data = {}) {
    return Ajax.post(BACKEND_URL + '/ad', data);
  }

  static logout() {
    return Ajax.get(BACKEND_URL + URLS.logout);
  }

  static createAudience(data = {}) {
    return Ajax.post(BACKEND_URL + '/targetcreate', data)
  }
}
