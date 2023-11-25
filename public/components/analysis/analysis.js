import Api, { BACKEND_URL_SURVEY } from '../../modules/api.js';
import { BACKEND_URL } from '../../modules/api.js';
import { URLS } from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/analysis.css';
import Template from './analysis.hbs';


const context = {
  survey: [],
  current: 0,
};

export default class Analysis {

  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    Api.surveryList().then((datab) => {
      context.SurveyData = datab.parsedJson;
      this.renderTemplate(); // Устанавливаем полученные объявления в context
    }).catch((error) => {
    });
    this.parent.innerHTML = Template(); 
  }

  renderTemplate() {
    const subButton =  document.querySelector('.analysis__button')
    console.log(subButton)
    subButton.addEventListener('click', () => {
      console.log("sdasadasdas")
      this.submit()
    });

    survList = getElementById("analysis__additional-blocks")
    context.survey.parsedJson.forEach((sur, index) => {
        
      const listItem = document.createElement('div');
      listItem.innerHTML = ` 
        <a class="analysis__animated-link">
          <div class="analysis__small-block">
            <p>Опрос ${sur.id}</p>
          </div>
        </a>
      `
      listItem.addEventListener('click', () => {
        this.showSelectedSurvey(sur.id);
        context.current = sur.id;
      });
      survList.appendChild(listItem);
    });
  }   

  showSelectedSurvey(currSurv) {
    const surveyRate = document.getElementById('survey_rate');
    const surveyCount = document.getElementById('survey_count');
    const surveyId = document.getElementById('survey_id');
    rate = {}

    Api.getSurveyStat(currSurv).then((data) => {
      rate = data.parsedJson; // Устанавливаем полученные объявления в context
    }).catch((error) => {
      console.error('Ошибка:', error);
      this.renderTemplate();
    });

    surveyRate.textContent = `Средний рейтинг: ${context.rate.avg_rate}`;
    surveyCount.textContent = `Количество отзывов: ${context.rate.count}`;
    surveyId.textContent = `ID опроса: ${context.rate.survey_id}`;
  }

  submit() {
    console.log("clcik")
    const form = document.querySelector('#saveSurvey');
    const formData = new FormData(form);

      // Создаем объект для отправки файлов (если выбран файл для аватара)
      const  question = form.querySelector('#question');
      const type = form.querySelector('#type');

      formData.append('question', question)
      formData.append('type', type)

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include', // Если требуется передача авторизационных данных
      body: formData,
  };

  try {
      // Отправляем запрос на сервер
      const response = fetch(BACKEND_URL_SURVEY + "/survey/survey", requestOptions);

      if (response.ok) {
        console.log("ok")
      } else {
          // Обработка ошибки
          const errorData = response.json();
      }
  } catch (error) {
      console.log(error);
  }
  }

}


