import Api from '../../modules/api.js';
import Template from '../audience/audience.hbs';
import '../../static/css/audience.css';

export default class CreateAudience {
  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.submitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    this.parent.innerHTML = Template();
    this.form = this.parent.getElementsByClassName('createaudience')[0];
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
      // Проверьте идентификаторы полей и добавьте их в inputsValue
      if (input.id === 'name' || input.id === 'gender' || input.id === 'min_age' || input.id === 'max_age' || input.id === 'interests' || input.id === 'tags' || input.id === 'keys' || input.id === 'regions') {
        inputsValue[input.id] = input.value;
      }
    });

    if (err) {
      Api.createAudience(inputsValue).then(
        (response) => {
          if (response.status === 201) {
            this.submitCallback();
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
