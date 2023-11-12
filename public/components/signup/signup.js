import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/signup.css'

export default class Signup {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.SubmitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    this.parent.innerHTML = Handlebars.templates['signup.hbs']();
    this.form = this.parent.getElementsByClassName('signup-form')[0];
    this.form.addEventListener('submit', this.onSubmit.bind(this));
<<<<<<< HEAD
    this.errorLabel = this.form.getElementsByClassName('signup-form__error-label')[0];
    this.errorLabel.classList.add('signup-form__error-label--hidden')
=======
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');

>>>>>>> 4cbdecbc8f6a3061b0214d920531121013e567ed
  }

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
      Api.signup(inputsValue).then(
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
    this.errorLabel.classList.remove('signup-form__error-label--hidden')
    this.errorLabel.classList.add('signup-form__error-label--visible')
    this.errorLabel.innerHTML = message;
  }
}
