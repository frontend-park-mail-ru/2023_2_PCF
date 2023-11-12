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
    selectedAd.innerHTML = `<div class="audience-block">
    <div class="audience-block__container-title">
        <div class="audience-block__label">Регион</div>
        <div class="audience-block__custom-dropdown">
            <input type="text" class="input-field" placeholder="Поиск">
            <div class="arrow-icon">Россия &#8249;</div>
            <div class="dropdown-content">
                <!-- <div>Россия</div> -->
                <input type="checkbox" id="anyGender">
                <label for="anyGender">Любой</label>
                <!-- <div>Московская область</div>
                <div>Москва</div>
                <div>Балашиха</div>
                <div>Мытищи</div> -->
            </div>
        </div>
        <div class="other-element"></div>
        
        </div>
        <div class="audience-block__region-info">
            <div class="audience-block__region-title">Выбранные регионы:
            <div class="audience-block__region-details">
                <div class="audience-block__icon">
                    <div>
                        <div></div>
                    </div>
                </div>
                <div class="audience-block__region-name">Балашиха</div>
            </div>
            </div>
        </div>
    </div>
    
    <div class="audience-block__right-block">
        <div class="audience-block__gradient-box" id="textEntryContainer">
            <label for="textEntry1" class="audience-block__text-entry-label">
                <input type="text" id="textEntry1" class="audience-block__text-input" placeholder="Введите ключевые фразы, через запятую">
                
            </label>
        </div>
    
    <div class="audience-block__gradient-box" id="textEntryContainer">
    <label for="textEntry1" class="audience-block__text-entry-label">
        <input type="text" id="textEntry1" class="audience-block__text-input" placeholder="Введите ключевые фразы, через запятую">
        
    </label>
</div>
<div class="audience-block__gradient-box">
    <label for="textEntry2" class="audience-block__text-entry-label">
        <input type="text" id="textEntry2" class="audience-block__text-input" placeholder="Введите теги, через запятую">
    </label>
</div>
<div class="audience-block__demographics-info">
    <div class="audience-block__info-column">
        <div class="audience-block__info-item">
            <div style="font-size: 18px;">Демография</div>
        </div>
        <div class="audience-block__info-item">
            <div>Пол</div>
            <div>
                <input type="checkbox" id="anyGender">
                <label for="anyGender">Любой</label>
            </div>
            <div>
                <input type="checkbox" id="femaleGender">
                <label for="femaleGender">Женский</label>
            </div>
            <div>
                <input type="checkbox" id="maleGender">
                <label for="maleGender">Мужской</label>
            </div>
        </div>
    </div> <!-- Закрытие первой колонки -->

    <div class="audience-block__info-column audience-block__info-item-right"> <!-- Начало второй колонки -->
        <div class="audience-block__info-item">
            <div>Возраст</div>
        </div>
        <div class="audience-block__info-item">
            <div class="audience-block__age-range-wrapper"> 
                <div class="audience-block__age-range">
                    <input type="text" id="ageFrom" class="audience-block__text-input" placeholder="От">
                </div>
                <div class="age-range">
                    <input type="text" id="ageTo" class="audience-block__text-input" placeholder="До">
                </div>
            </div>
        </div>
    </div> 
</div>

</div>

<div class="btn-container">
    <button class="btn edit-btn">
        <span class="btn-text">Редактировать</span>
    </button>

    <button class="btn delete-btn" onclick="toggleConfirmationBlock()">
        <div class="cross-icon">
            <div class="horizontal-line"></div>
        </div>
        <span class="btn-text">Удалить</span>
        
    </button>
</div>

</div>`;
  }
}

