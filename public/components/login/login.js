import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/login.sass'

export default class Login {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    history.pushState('', 'AdHub', '/login');
    this.parent.innerHTML = Handlebars.templates['login.hbs']();
    this.form = this.parent.getElementsByClassName('login-form')[0];
    this.form.addEventListener('submit', this.onSubmit.bind(this));
<<<<<<< HEAD
    this.errorLabel = this.form.getElementsByClassName('login-form__error-button')[0];
    this.errorLabel.classList.add('login-form__error-button--hidden')
  }
=======
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden')
      }
>>>>>>> 4cbdecbc8f6a3061b0214d920531121013e567ed

  onSubmit(event) {
    event.preventDefault();
    const inputs = this.form.querySelectorAll('input');
    const inputsValue = {};
    let errMessage = 'Неверные данные.';
    let err = true;
    inputs.forEach((input) => {
      if (input.id === 'password') {
        if (Validate.Password(input.value)) {
          inputsValue[input.id] = input.value;
          err = true;
          return;
        } else {
          errMessage = 'Неверный пароль. Введите пароль от 6ти символов.';
          err = false;
          return;
        }
      } else if (input.id === 'login') {
        if (Validate.Email(input.value)) {
          inputsValue[input.id] = input.value;
          err = true;
          return;
        } else {
          errMessage = 'Неверный формат EMail.';
          err = false;
          return;
        }
      } else {
        inputsValue[input.id] = input.value;
      }
    });

    if (err) {
      Api.login(inputsValue).then(
        (response) => {
          if (response.status < 300) {
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
    this.errorLabel.classList.remove('login-form__error-button--hidden')
    this.errorLabel.classList.add('login-form__error-button--visible')
    this.errorLabel.innerHTML = message;
  }
}
