import Api from '../../modules/api.js';
let userAds = [];
const context = {
  userAds: userAds,
  mainDescription: null,
};

export default class Company {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }


  render() {
    Api.getAds().then((data) => {
      userAds.length = 0;
      userAds.push(...data);
      this.renderTemplate();
    }).catch((error) => {
      console.error('Ошибка:', error);
    });


    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/company.css';
    document.head.appendChild(link);
  }
  renderTemplate() {
    this.parent.innerHTML = Handlebars.templates['company.hbs'](context);
    // Обработчик для "Кнопка 1"
    document.getElementById('1').addEventListener('click', () => {
      context.mainDescription = userAds[0].Description;
      this.renderTemplate();
    });

    // Обработчик для "Кнопка 2"
    document.getElementById('2').addEventListener('click', () => {
      context.mainDescription = userAds[1].Description;
      this.renderTemplate();
    });
    // Обработчик для "Кнопка 3"
    document.getElementById('3').addEventListener('click', () => {
      context.mainDescription = userAds[2].Description;
      this.renderTemplate();
    });
    // Обработчик для "Кнопка 4"
    document.getElementById('4').addEventListener('click', () => {
      context.mainDescription = userAds[3].Description;
      this.renderTemplate();
    });
    // Обработчик для "Кнопка 5"
    document.getElementById('5').addEventListener('click', () => {
      context.mainDescription = userAds[4].Description;
      this.renderTemplate();
    });
  }
}


