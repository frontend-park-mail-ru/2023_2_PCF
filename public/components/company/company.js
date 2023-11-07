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
        <a href="${ad.id}">
        <div class="currentAdElContainer">
            <div class="currentAdElInnerBox">
                <div class="currentAdElTopDecoration"></div>
                <div class="currentAdElInnerBackground"></div>
            </div>
            <div class="currentAdElDay">${ad.id}</div>
            <div class="currentAdElWeekday">Wed</div>
            <div class="currentAdElTitle">${ad.name}</div>
            <div class="currentAdElSubtitle">{{ ${ad.description}}}</div>
        </div>
        </a>`
        listItem.textContent = ad.name;
        listItem.addEventListener('click', () => {
          this.showSelectedAd(ad);
          context.currentAd = ad.id;
        });
        adList.appendChild(listItem);
      });
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
    // Отправьте запрос на бэкэнд для получения уникальной ссылки
    const req = {};
    req['ad_id']=context.currentAd;
    Api.deleteAd(req)
      .then((data) => {
        console.log('Удален ссылка получена:', data);
        context.uniqueLink = data.parsedJson; // Устанавливаем полученную уникальную ссылку в context
        alert(context.uniqueLink)
      })
      .catch((error) => {
        console.error('Ошибка при получении уникальной ссылки:', error);
        alert('Not work')
      });
  }

  showSelectedAd(ad) {
    const selectedAd = document.getElementById('selected-ad');
    selectedAd.innerHTML = `<h2>${ad.name}</h2><p>${ad.description}</p><p>${ad.budget}</p><a href="${ad.website_link}">Cайт</a>                    
     <button class="edit-button-unique">Получить ссылку</button> 

    <button class="edit-button-edid">Изменить</button>
    <button class="edit-button-delete">Удалить</button> `;
  }

  
}
