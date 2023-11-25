import Ajax from './ajax.js';

export const URLS = {
  login: '/auth',
  signup: '/user',
  ad: '/ad',
  useredit: '/useredit',
  surveyGet: '/survey/get',
  surveyStat: '/survey/stat',
  surveyRate: '/survey/rate',
};

export const BACKEND_URL = 'http://127.0.0.1:8080/api/v1';
export const BACKEND_URL_SURVEY = 'http://127.0.0.1:8084/api/v1';

export default class Api {
  static login(data={}) {
    return Ajax.post(BACKEND_URL + URLS.login, data);
  }

  static signup(data={}) {
    return Ajax.post(BACKEND_URL + URLS.signup, data);
  }

  static getAdsList() {
    return Ajax.get({url: BACKEND_URL + '/ad'});
  }

  static getAudienceList() {
    return Ajax.get({url: BACKEND_URL + '/targetlist'});
  }

  static createAd(data = {}) {
    return Ajax.post(BACKEND_URL + '/ad', data);
  }

  static editAd(data = {}) {
    return Ajax.post(BACKEND_URL + '/adedit', data);
  }

  static deleteAd(data = {}) {
    return Ajax.post(BACKEND_URL + '/ad', data);
  }

  static getUser(data = {}) {
    return Ajax.get({url: BACKEND_URL + '/usergetbytoken'});
  }

  static getBalance(data = {}) {
    return Ajax.get({url: BACKEND_URL + '/balanceget'});
  }

  static getImage(filename) {
    return BACKEND_URL + '/file?file=' + filename;
  }

  static getUniqueLink(adid) {
    return Ajax.get({url: BACKEND_URL + '/aduniquelink?id=' + adid});
  }

  static logout() {
    return Ajax.get(BACKEND_URL + URLS.logout);
  }

  static getAd(adID) {
    return Ajax.get({url: BACKEND_URL + '/adget?adID=' + adID});
  }

  static deleteAd(data) {
    return Ajax.post(BACKEND_URL + '/addelete', data);
  }

  static addBalance(data) {
    return Ajax.post(BACKEND_URL + '/balanceadd', data);
  }
  static createAudience(data = {}) {
    return Ajax.post(BACKEND_URL + '/targetcreate', data)
  }

  static editAudience(data = {}) {
    return Ajax.post(BACKEND_URL + '/targetedit', data)
  }

  static getSurveyGet(id) {
    return Ajax.get({ url: BACKEND_URL_SURVEY + URLS.surveyGet + "?id=" + id});
  }

  static getSurveyStat(id) {
    return Ajax.get({ url: BACKEND_URL_SURVEY + URLS.surveyStat + "?id=" + id});
  }

  static createSurvey(data = {}) {
    return Ajax.post(BACKEND_URL_SURVEY + '/survey/survey', data)
  }

  static surveryList() {
    return Ajax.get(BACKEND_URL_SURVEY + "/survey/getList")
  }
}
