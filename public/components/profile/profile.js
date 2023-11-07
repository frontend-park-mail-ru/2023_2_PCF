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
    this.form.addEventListener('submit', async (event) => {
      event.preventDefault();
      await this.updateUser();
    });
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');    
  }

  renderTemplate() {
    console.log(context.User);
    console.log(context.Balance);
    const saveButton = this.parent.querySelector('.save-button'); // Предположим, у вас есть кнопка "Сохранить" с классом "save-button"
    saveButton.addEventListener('click', this.updateUser.bind(this));
  }  
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#updateUserForm');
  const errorLabel = form.querySelector('.error-label');

  form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

      // Создаем объект FormData для сбора данных из формы
      const formData = new FormData(form);

      // Создаем объект для отправки файлов (если выбран файл для аватара)
      const avatarInput = form.querySelector('#avatar');
      if (avatarInput.files.length > 0) {
          formData.append('avatar', avatarInput.files[0]);
      }

      // Создаем объект настроек для HTTP-запроса
      const requestOptions = {
          method: 'POST',
          mode: 'cors',
          credentials: 'include', // Если требуется передача авторизационных данных
          body: formData,
      };

      try {
          // Отправляем запрос на сервер
          const response = await fetch('http://127.0.0.1:8080/api/v1/useredit', requestOptions);

          if (response.ok) {
              // Обработка успешного ответа от сервера
              errorLabel.classList.add('hidden');
              alert('Данные пользователя успешно обновлены.');
          } else {
              // Обработка ошибки
              const errorData = await response.json();
              errorLabel.textContent = errorData.message;
              errorLabel.classList.remove('hidden');
          }
      } catch (error) {
          // Обработка сетевой ошибки
          errorLabel.textContent = 'Ошибка при отправке запроса: ' + error;
          errorLabel.classList.remove('hidden');
      }
  });
});





