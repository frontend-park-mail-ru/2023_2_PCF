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

    this.setupEventListeners();
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
  toggleConfirmationBlock() {
    var block = document.getElementById("confirmation-block");
    var overlay = document.querySelector('.overlay');

    if (block.style.display === "none") {
        block.style.display = "block";
        overlay.style.display = "block";    
    } else {
        hideConfirmationBlock(); 
    }
}   
  hideConfirmationBlock() {
    var confirmationBlock = document.getElementById("confirmation-block");
    var replenishBanner = document.getElementById("replenish-banner");
    var overlay = document.querySelector('.overlay');

    if (confirmationBlock) {
        confirmationBlock.style.display = "none";
    }
    if (replenishBanner) {
        replenishBanner.style.display = "none";
    }
    overlay.style.display = "none"; // Скрыть затемнение
  }
  showReplenishBanner() {
    var replenishBanner = document.getElementById("replenish-banner");
    var overlay = document.querySelector('.overlay');
    replenishBanner.style.display = 'block';
    overlay.style.display = 'block'; // Показать затемнение
}
setupEventListeners() {
  const confirmationCancelButton = this.parent.querySelector('.confirmation-cancel-button');
  const replenishCancelButton = this.parent.querySelector('.replenish-cancel-button');
  const budgetLink = this.parent.querySelector('.budget-link');

  if (confirmationCancelButton) {
    confirmationCancelButton.addEventListener('click', () => {
      this.hideConfirmationBlock();
    });
  }

  if (replenishCancelButton) {
    replenishCancelButton.addEventListener('click', () => {
      this.hideConfirmationBlock();
    });
  }

  if (budgetLink) {
    budgetLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.showReplenishBanner();
    });
  }
}
}
document.addEventListener('DOMContentLoaded', function() {
  const editPage = new EditPage();
  editPage.render();
});
