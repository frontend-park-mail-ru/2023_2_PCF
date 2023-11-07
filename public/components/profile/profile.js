import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';

const context = {
  User: [],
  Balance: [],
  mainDescription: null,
};

export default class Profile {

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

    Api.getUser().then((data) => {
      context.User = data.parsedJson; // Устанавливаем полученные объявления в context
      this.renderTemplate();
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/profile.css';
    document.head.appendChild(link);
    this.parent.innerHTML = Handlebars.templates['profile.hbs']();
    this.form = this.parent.getElementsByClassName('profile')[0];
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');    
  }

  renderTemplate() {
    console.log(context.User);
    console.log(context.Balance);

  }
}
