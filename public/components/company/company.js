import Api from '../../modules/api.js';
<<<<<<< HEAD

const context = {
  userAds: [],
  mainDescription: null,
  currentAd: 1,
  uniqueLink: String,
};

function editAd(adID) {
  // Перенаправление на страницу редактирования с передачей параметра adID
  window.location.href = `/editpage?id=${adID}`;
}
=======
import Validate from '../../modules/validate.js';
import '../../static/css/company.css';
>>>>>>> 4cbdecbc8f6a3061b0214d920531121013e567ed

export default class Company {
  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {
<<<<<<< HEAD

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/company.css';
    document.head.appendChild(link);
    
    Api.getAdsList()
      .then((data) => {
        context.userAds = data; // Устанавливаем полученные объявления в context
        this.renderTemplate();
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }
=======
    this.parent.innerHTML = Handlebars.templates['company.hbs']();
    this.form = this.parent.getElementsByClassName('company')[0];
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName('error-label')[0];
    this.errorLabel.classList.add('hidden');
      }
>>>>>>> 4cbdecbc8f6a3061b0214d920531121013e567ed

  renderTemplate() {
    this.parent.innerHTML = Handlebars.templates['company.hbs'](context);
    const openBudgetModalBtn = document.querySelector('#budgetModalButton');
    const closeBudgetModalBtn = document.querySelector('#closeBudgetModal');
    const budgetModal = document.querySelector('#budgetModal');
    const addBalanceBtn = document.querySelector('#addBalanceBtn');
    const balanceInput = document.querySelector('#amount');

    openBudgetModalBtn.addEventListener('click', () => {
      budgetModal.style.display = 'block';
    });

    closeBudgetModalBtn.addEventListener('click', () => {
      budgetModal.style.display = 'none';
    });

    addBalanceBtn.addEventListener('click', () => {
      document.body.classList.add('blurred-background');
      const balance = parseFloat(balanceInput.value);
      const requestData = { };
      requestData['amount'] = balanceInput.value;
      console.log(requestData);
      if (!isNaN(balance) && balance > 0) {
        Api.addBalance(requestData)
          .then((data) => {
            console.log('Баланс пополнен:', data);
            budgetModal.style.display = 'none';
          })
          .catch((error) => {
            console.error('Ошибка при пополнении баланса:', error);
          });
      } else {
        alert('Введите корректную сумму для пополнения.');
      }
    });
    // Очищаем существующий список объявлений перед добавлением новых
    const adList = document.getElementById('company__main__container__left__adlayout__ads--list');
    adList.innerHTML = '';
    console.log(context.userAds.parsedJson);
    // Проверяем наличие userAds в context
    if (context.userAds.parsedJson && Array.isArray(context.userAds.parsedJson)) {
      let nameString = '';
      let descrString = '';
      context.userAds.parsedJson.forEach((ad, index) => {
        if (ad.name.length > 15) {
          nameString = ad.name.substring(0, 15);
        } else {
          nameString = ad.name;
        }

        if (ad.description.length > 15) {
          descrString = ad.description.substring(0, 15);
        } else {
          descrString = ad.description
        }

        const listItem = document.createElement('div');
        listItem.innerHTML = ` 
        <div class="company__ad__element--current company__info-card">
            <svg style="margin-left: 5%" xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none" class="arrow-svg">
            <path d="M5.5 11.5L1 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M5.5 11.5L1 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M5.5 2.5L1 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M5.5 2.5L1 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M17.5 11.5L22 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M17.5 11.5L22 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M17.5 2.5L22 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M17.5 2.5L22 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M8.5 13L14.5 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M8.5 13L14.5 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>    
            <div class="company__info-card__items">
              <div class="company__ad__element--current__status" style="background: #D3E7CA;"></div>
              <div class="company__ad__element--current__weekday company__info__text--large">БТ</div>
              <div class="company__ad__element--current__title company__info__text--title">${nameString}</div>
              <div class="company__ad__element--current__subtitle company__info__text--status">${descrString}</div>
              <div class="company__info__status--dot" style="background: #949494;">
              <div class="company__arrows"></div>
            </div>
        </div>
        `
        listItem.addEventListener('click', () => {
          this.showSelectedAd(ad);
          context.currentAd = ad.id;
        });
        adList.appendChild(listItem);
      });
      if (context.userAds.parsedJson.length > 7) {
        adList.style.maxHeight = '1000px'; 
        adList.style.overflowY = 'auto';
    } else {
        adList.style.maxHeight = 'none';
        adList.style.overflowY = 'hidden';
    }
    }

    this.parent.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('company__ad__button--edit')) {
        console.log('Кнопка "Изменить" нажата');
        editAd(context.currentAd);
      } else if (target.classList.contains('company__ad__button--unique')) {
        console.log('Кнопка "Получить ссылку" нажата');
        this.getUniqueLinkFromBackend();
      } else if (target.classList.contains('company__ad__button--delete')) {       
        console.log('Кнопка "Удалить" нажата');
        this.deleteAdFromBackend();
      }
    });

  }

  getUniqueLinkFromBackend() {
    // Отправьте запрос на бэкэнд для получения уникальной ссылки
    Api.getUniqueLink(context.currentAd)
      .then((data) => {
        console.log('Уникальная ссылка получена:', data);
        context.uniqueLink = data.parsedJson; // Устанавливаем полученную уникальную ссылку в context
        alert(context.uniqueLink)
      })
      .catch((error) => {
        console.error('Ошибка при получении уникальной ссылки:', error);
        alert('Not work')
      });
  }

  deleteAdFromBackend() {
    const req = {};
    req['ad_id']=context.currentAd;
    Api.deleteAd(req)
      .then((data) => {
        console.log('Удален ссылка получена:', data);
        location.reload();
      })
      .catch((error) => {
        console.error('Ошибка при получении уникальной ссылки:', error);
        alert('Not work')
      });
  }
  showSelectedAd(ad) {
    const selectedAd = document.getElementById('selected-ad');
    selectedAd.innerHTML = `
    <div class="company__ad__container--selected">
    <img id="company__ad__photo" class="company__box--image" src="image.jpg" alt="Company Photo">
    <div class="company__ad__content">
        <div class="company__ad--left">
            <div class="company__ad__box--title">${ad.name}</div>
            <div class="company__ad__box--subtitle">Бюджет</div>
            <div class="company__ad__box--description">${ad.budget}</div>
            <div class="company__ad__box--subtitle">Аудитория</div>
            <div class="company__ad__box--description">Аудитория 1</div>
            <div class="company__ad__box--subtitle">Сайт</div>
            <div class="company__ad__box--description">${ad.website_link}</div>
        </div>
        <div class="company__ad--right">
            <div class="company__ad__description--title">Описание</div>
            <div class="company__ad__description--text">${ad.description}</div>
        </div>
    </div>
    <div class="company__ad__buttons">
        <button class="company__ad__button--unique">Получить ссылку</button>
        <button class="company__ad__button--edit">Изменить</button>
        <button class="company__ad__button--delete">Удалить</button>
    </div>
</div> `;
    const photoCompany = document.getElementById('company__ad__photo');
    photoCompany.src = Api.getImage(ad.image_link)

  }

  
}
