import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/audience.css';
import Template from './audience.hbs';

const context = {
  userTargets: [],
  mainDescription: null,
};


export default class Audience {
  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {
    Api.getAudienceList()
      .then((data) => {
        context.userTargets = data; // Устанавливаем полученные объявления в context
        this.renderTemplate();
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }

  renderTemplate() {
    console.log(context.userTargets);
    this.parent.innerHTML = Template();

    // Очищаем существующий список объявлений перед добавлением новых
    const adList = document.getElementById('target-list');
    adList.innerHTML = '';
    console.log(context.userTargets.parsedJson);
    if (context.userTargets.parsedJson && Array.isArray(context.userTargets.parsedJson)) {
      context.userTargets.parsedJson.forEach((ad, index) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `                        
        <div class="info-card">
        <div class="circle" style="background: #FEAFAF;"></div>
        <div class="text-title"></div>
        <div class="text-large">А1</div>
        <div class="text-status">Видеоигры</div>
        <div class="arrows"></div>
        </div>`
        listItem.textContent = ad.name;
        listItem.addEventListener('click', () => {
          this.showSelectedTarget(ad);
        });
        adList.appendChild(listItem);
      });
    }
  }

  showSelectedTarget(ad) {
    const selectedAd = document.getElementById('centered-box');
    selectedAd.innerHTML = ``;
  }
}

