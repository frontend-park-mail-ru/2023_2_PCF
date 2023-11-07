import Api from '../../modules/api.js';

const context = {
  userAds: [],
  mainDescription: null,
  uniqueLink: String,
};

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
        });
        adList.appendChild(listItem);
      });
    }

    const getLinkButton = document.querySelector('.edit-button-unique');
    getLinkButton.addEventListener('click', () => {
      console.log('Кнопка "Получить ссылку" нажата');
      this.getUniqueLinkFromBackend();
    });
  }

  getUniqueLinkFromBackend() {
    // Отправьте запрос на бэкэнд для получения уникальной ссылки
    Api.getUniqueLink()
      .then((data) => {
        context.uniqueLink = data.uniqueLink; // Устанавливаем полученную уникальную ссылку в context
        this.renderTemplate(); // Перерендерьте интерфейс, чтобы отобразить новую уникальную ссылку
      })
      .catch((error) => {
        console.error('Ошибка при получении уникальной ссылки:', error);
        alert('Not work')
      });
  }

  showSelectedAd(ad) {
    const selectedAd = document.getElementById('selected-ad');
    selectedAd.innerHTML = `<h2>${ad.name}</h2><p>${ad.description}</p><p>${ad.budget}</p><a href="${ad.website_link}">Cайт</a>`;
  }
}


