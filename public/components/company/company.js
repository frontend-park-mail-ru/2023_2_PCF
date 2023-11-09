import Api from '../../modules/api.js';

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

export default class Company {
  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {

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
    const adList = document.getElementById('ad-list');
    adList.innerHTML = '';
    console.log(context.userAds.parsedJson);
    // Проверяем наличие userAds в context
    if (context.userAds.parsedJson && Array.isArray(context.userAds.parsedJson)) {
      context.userAds.parsedJson.forEach((ad, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = ` 
                      
        <div class="currentAdElContainer info-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none" class="arrow-svg">
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
            <div class="circle" style="background: #D3E7CA;"></div>
            <div class="currentAdElWeekday text-large">БТ</div>
            <div class="currentAdElTitle text-title">${ad.name}</div>
            <div class="currentAdElSubtitle text-status">${ad.description}</div>
            <div class="status-dot" style="background: #949494;">
            <div class="arrows"></div>
        </div>
        `
        listItem.addEventListener('click', () => {
          this.showSelectedAd(ad);
          context.currentAd = ad.id;
        });
        adList.appendChild(listItem);
      });
      if (context.userAds.parsedJson.length > 7) {
        adList.style.maxHeight = '500px'; // или любая другая подходящая высота
        adList.style.overflowY = 'auto';
    } else {
        adList.style.maxHeight = 'none';
        adList.style.overflowY = 'hidden';
    }
    }

    this.parent.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('edit-button-edid')) {
        console.log('Кнопка "Изменить" нажата');
        editAd(context.currentAd);
      } else if (target.classList.contains('edit-button-unique')) {
        console.log('Кнопка "Получить ссылку" нажата');
        this.getUniqueLinkFromBackend();
      } else if (target.classList.contains('edit-button-delete')) {       
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
    <div class="container-selected">
    <img id="photo_company" class="box-image" src="image.jpg" alt="Company Photo">
    <div class="content">
        <div class="left">
          <div class="box-title">Название</div>
            <div class="box-title">${ad.name}</div>
            <div class="box-subtitle">Бюджет</div>
            <div class="box-description">${ad.budget}</div>
        </div>
        <div class="right">
            <div class="description-title">Описание</div>
            <div class="description-text">${ad.description}</div>
        </div>
    </div>
    <div class="buttons">
        <button class="edit-button-unique">Получить ссылку</button>
        <button class="edit-button-edid">Изменить</button>
        <button class="edit-button-delete">Удалить</button>
    </div>
</div> `;
    const photoCompany = document.getElementById('photo_company');
    photoCompany.src = Api.getImage(ad.image_link)

  }

  
}
