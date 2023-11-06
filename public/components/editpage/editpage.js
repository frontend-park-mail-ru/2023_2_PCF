import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';

export default class EditPage {
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
    link.href = '../../static/css/editpage.css';
    document.head.appendChild(link);
    this.parent.innerHTML = Handlebars.templates['editpage.hbs']();
    this.form = this.parent.getElementsByClassName('editpage')[0];
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');
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
    this.errorLabel.classList.remove('hidden')
    this.errorLabel.classList.add('visible')
    this.errorLabel.innerHTML = message;
  }
}
function toggleConfirmationBlock() {
  var block = document.getElementById("confirmation-block");
  var overlay = document.querySelector('.overlay');

  if (block.style.display === "none") {
      block.style.display = "block";
      overlay.style.display = "block"; // Показать затемнение
  } else {
      hideConfirmationBlock(); // Вызов функции скрытия блока
  }
}

function hideConfirmationBlock() {
  var block = document.getElementById("confirmation-block");
  var overlay = document.querySelector('.overlay');
  block.style.display = "none";
  overlay.style.display = "none"; // Скрыть затемнение
}

// Добавление обработчика событий для кнопки "Отмена"
document.addEventListener('DOMContentLoaded', function() {
  var cancelButton = document.querySelector('.cancel-button');
  cancelButton.addEventListener('click', function() {
      hideConfirmationBlock(); // Скрыть блок при нажатии на кнопку "Отмена"
  });
});