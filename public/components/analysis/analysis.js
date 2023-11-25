import Api from '../../modules/api.js';
import { BACKEND_URL } from '../../modules/api.js';
import { URLS } from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/analysis.css';
import Template from './analysis.hbs';


const context = {
  count: null,
  avg_rate:null,
  survey_id:null,
  type:null,
  User: [],
  Balance: [],
  Ads: [],
  mainDescription: null,
};

export default class Analysis {

  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    Api.getBalance().then((datab) => {
      context.Balance = datab.parsedJson; // Устанавливаем полученные объявления в context
    }).catch((error) => {
      console.error('Ошибка:', error);
    });

    Api.getAdsList().then((dataad) => {
      context.Ads = dataad.parsedJson;
    }).catch((error) => {
      console.error('Ошибка:', error);
    });

    Api.getUser().then((data) => {
      context.User = data.parsedJson; // Устанавливаем полученные объявления в context
      this.fetchSurveyData();
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
    this.parent.innerHTML = Template(); 
  }
  fetchSurveyData() {
    Api.getSurveyData().then((surveyData) => {
      context.count = surveyData.count;
      context.avg_rate = surveyData.avg_rate;
      context.survey_id = surveyData.survey_id;
      context.type = surveyData.type;
      this.renderTemplate();
    }).catch((error) => {
      console.error('Ошибка:', error);
    });
  }

  renderTemplate() {
    const surveyRate = document.getElementById('survey_rate');
    const surveyCount = document.getElementById('survey_count');
    const surveyId = document.getElementById('survey_id');
    const surveyType = document.getElementById('survey_type');

  surveyRate.textContent = `Средний рейтинг: ${context.SurveyData.avg_rate}`;
  surveyCount.textContent = `Количество отзывов: ${context.SurveyData.count}`;
  surveyId.textContent = `ID опроса: ${context.SurveyData.survey_id}`;
  surveyType.textContent = `Тип опроса: ${context.type}`;

  }  
}



