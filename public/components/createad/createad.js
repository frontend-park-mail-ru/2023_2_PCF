import Api from '../../modules/api.js';

export default class CreateAd {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/createad.css';
    document.head.appendChild(link);
    this.parent.innerHTML = Handlebars.templates['createad.hbs']();
    this.form = this.parent.getElementsByClassName('createad')[0];
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');
  }

  onSubmit(event) {
    console.log('onSubmit');
    event.preventDefault();
    const inputs = this.form.querySelectorAll('input');
    const inputsValue = {};
    let errMessage = 'Неверные данные.';
    let err = true;
    inputs.forEach((input) => {
      if (input.id === 'name' || input.id === 'description' || input.id === 'website_link' || input.id === 'budget' || input.id === 'target_id') {
        inputsValue[input.id] = input.value;
      }
    });
    console.log(inputsValue);
    if (err) {
      Api.createAd(inputsValue).then(
        (response) => {
          if (response.status === 201) {
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
