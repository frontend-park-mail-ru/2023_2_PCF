import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';

const context = {
  ad: [],
}
// Получить параметры URL
const urlParams = new URLSearchParams(window.location.search);

// Извлечь значение параметра "id"
const adID = urlParams.get('id');


export default class EditPage {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {

    Api.getAd(adID).then(
    (data) => { 
      console.log(data);
      context.ad = data.parsedJson;
      this.renderTemplate();
    }
    ).catch((error) => {
      console.error('Ошибка:', error);
    }
    );

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/createad.css';
    document.head.appendChild(link);
    this.parent.innerHTML = Handlebars.templates['editpage.hbs']();
    this.form = this.parent.getElementsByClassName('createad')[0];

    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');
  }

  renderTemplate() {
    const inputs = this.form.querySelectorAll('input');
    inputs.forEach((input) => {
      if (input.id === 'name' || input.id === 'description' || input.id === 'website_link' || input.id === 'budget' || input.id === 'target_id') {
        input.value = context.ad[input.id];
      }
    });
  }

  onSubmit(event) {
    console.log('onSubmit');
    event.preventDefault();
    const inputs = this.form.querySelectorAll('input');
    const inputsValue = {};
    let errMessage = 'Неверные данные.';
    let err = true;
    inputsValue['ad_id'] = adID;
    inputs.forEach((input) => {
      if (input.id === 'name' || input.id === 'description' || input.id === 'website_link' || input.id === 'budget' || input.id === 'target_id') {
        inputsValue[input.id] = input.value;
      }
    });
    
    if (err) {
      Api.editAd(inputsValue).then(
        (response) => {
          if (response.status === 200) {
            this.SubmitCallback();
          } else {
            this.showError(errMessage);
          }
        },
      );
    } else {
      this.showError(errMessage);
    }
    
  }

  showError(message) {
    this.errorLabel.classList.remove('hidden');
    this.errorLabel.classList.add('visible');
    this.errorLabel.innerHTML = message;
  }
}

