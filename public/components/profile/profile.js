import Api from '../../modules/api.js';
import { BACKEND_URL } from '../../modules/api.js';
import { URLS } from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/profile.css';
import Template from './profile.hbs';


const context = {
  User: [],
  Balance: [],
  Ads: [],
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

    Api.getAdsList().then((dataad) => {
      context.Ads = dataad.parsedJson;
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
    this.parent.innerHTML = Template();
    this.form = this.parent.getElementsByClassName('profile')[0];
    this.form.addEventListener('submit', async (event) => {
      event.preventDefault();
      await this.updateUser();
    });
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');    
  }

  renderTemplate() {
    console.log(context.Ads)
    console.log(context.User);
    console.log(context.Balance);
    const bAvatar = document.getElementById('b_avatar');
    const bLogin = document.getElementById('b_login');
    const avBudget = document.getElementById('av_budget');
    const fName = document.getElementById('b_fname');
    const company = document.getElementById('b_company');
    const ads = document.getElementById('ads');

    fName.textContent = "Здравствуйте, " + context.User.f_name; // Подставьте нужные данные
    bAvatar.src = Api.getImage(context.User.avatar); 
    bLogin.textContent = context.User.login; // Подставьте нужные данные
    avBudget.textContent = `Общий баланс:  ${context.Balance.total_balance}
    Доступный баланс: ${context.Balance.total_balance - context.Balance.reserved_balance}
    Зарезирвированный баланс: ${context.Balance.reserved_balance}` // Подставьте нужные данные
    company.textContent = decodeURIComponent(context.User.s_name);
    ads.textContent = "Всего объявлений: " + context.Ads.length;

    const adList = document.querySelector('.profile__wrapper-card');
    adList.innerHTML = '';
    if (context.Ads && Array.isArray(context.Ads)) {
      context.Ads.slice(0, 3).forEach((ad, index) => {
        const card = document.createElement('div');
        card.classList.add('profile__info-card');
        card.innerHTML = `                      
          <img class="profile__card-image" src="${Api.getImage(ad.image_url)}"/>
          <div class="profile__card-title">${ad.name}</div>
          <div class="profile__card-subtitle">Бюджет: ${ad.budget}</div>
        `;
        adList.appendChild(card);
      });
    }

    const form = document.querySelector('#updateUserForm');
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      if (input.id === 'f_name' || input.id === 'l_name' || input.id === 'login' || input.id === 'password' || input.id === 's_name') {
        input.value = context.User[input.id];
      }
    });

    const saveButton = this.parent.querySelector('.profile__save-button'); 
    saveButton.addEventListener('click', async (event) => {
      event.preventDefault();

      // Создаем объект FormData для сбора данных из формы
      const formData = new FormData(form);

      // Создаем объект для отправки файлов (если выбран файл для аватара)
      const avatarInput = form.querySelector('#avatar');
      const name = form.querySelector('#f_name');
      const surname = form.querySelector('#l_name');
      const company = form.querySelector('#s_name');
      const password = form.querySelector('#password');
      const login = form.querySelector('#login');

      if (avatarInput != null && avatarInput.files.length > 0) {
        formData.append('avatar', avatarInput.files[0]);
      } else { 
        formData.append('avatar', null);
      }

      if (name != null && name.value.length > 0) {
        formData.append('f_name', name.value);
      } else {
        formData.append('f_name', "");
      }

      if (surname != null && surname.value.length > 0) { 
        formData.append('l_name', surname.value);
      } else {
        formData.append('l_name', "");
      }

      if (company != null && company.value.length > 0) {
        formData.append('s_name', company.value);
      } else {
        formData.append('s_name', "");
      }

      if (password != null && password.value.length > 0) {
        formData.append('password', password.value);
      } else {
        formData.append('password', "");
      }

      if (login != null && login.value.length > 0) {
        formData.append('login', login.value);
      } else {
        formData.append('login', "");
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
          const response = await fetch(BACKEND_URL + "/useredit", requestOptions);

          if (response.ok) {
              // Обработка успешного ответа от сервера
              location.reload();
          } else {
              // Обработка ошибки
              const errorData = await response.json();
          }
      } catch (error) {
          console.log(error);
      }
  });
  }  
}




