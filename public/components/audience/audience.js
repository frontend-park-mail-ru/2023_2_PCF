import Api from '../../modules/api.js';
import Validate from '../../modules/validate.js';
import '../../static/css/audience.css';
import Template from './audience.hbs';

const context = {
  userTargets: [],
  mainDescription: null,
  currentAd: 1,
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
        <div class="audience__info-card">
            <div class="audience__info-card__main">
                <div class="circle" style="background: #FEAFAF;"></div>
                <div class="text-title">${ad.name}</div>
                <div class="text-large">А1</div>
                <div class="text-status">Реклама</div>
                <div class="arrows"></div>
            </div>
        </div>`;
        listItem.addEventListener('click', () => {
            context.currentAd = ad.id;
          this.showSelectedTarget(ad);
          this.form = this.parent.getElementsByClassName('edit-btn')[0];
          this.form.addEventListener('click', this.onSubmit.bind(this));
        });
        adList.appendChild(listItem);
      });
    }
  }

  onSubmit(event) {
    console.log('onSubmit');
    event.preventDefault();
    const regions = this.form.querySelectorAll('.regions');
    const region = "";
    regions.forEach((reg) => {
      region += reg.value;}) 
    
    const genderCheckboxes = document.querySelectorAll(".gender");
    let Gender = "";
    genderCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            Gender = checkbox.value;
        }
    });

    const inputsValue = {};
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach((input) => {
      console.log(input.name);
      if (input.name === 'name' || input.name === 'min_age' || input.name === 'max_age' || input.name === 'interests' || input.name === 'tags' || input.name === 'keys') {
        inputsValue[input.name] = input.value;
      }
    });
    inputsValue['id'] = context.currentAd;
    console.log(inputsValue);
    inputsValue['regions'] = region;
    inputsValue['gender'] = Gender;

      Api.editAudience(inputsValue).then(
        (response) => {
          if (response.status === 200) {
            location.reload()
          } else {
          }
        },
      );
    }

  showSelectedTarget(ad) {
    console.log(ad);
    const selectedAd = this.parent.getElementsByClassName('audience-content__centered-box');
    console.log(selectedAd);
    selectedAd[0].innerHTML = `
            <div class="lefted-block">
    <div class="container-title">
            <div class="label">Регион</div>
            <div class="custom-dropdown">
                <input type="text" class="input-field" placeholder="Поиск">
                <div class="arrow-icon">Россия &#8249;</div>
                <div class="audience__checkbox">
                    <input type="checkbox" class="regions" value="Balashikha">
                    <label for="anyGender">Балашиха</label>
                </div>
                <div class="audience__checkbox">
                    <input type="checkbox" class="regions" value="Moscow">
                    <label for="anyGender" >Москва</label>
                </div>
                <div class="audience__checkbox">
                    <input type="checkbox" class="regions" value="SPB">
                    <label for="anyGender" >СПБ</label>
                </div>
                <div class="audience__checkbox">
                    <input type="checkbox" class="regions" value="Kazan">
                    <label for="anyGender" >Казань</label>
                </div>
            </div>
            <div class="other-element"></div>
            
            </div>
            <div class="region-info">
                <div class="region-title">Выбранные регионы:
                <div class="region-details">
                    <div class="icon">
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div class="audience__region-list">
                        <div class="region-name">Балашиха</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        <div class="right-block">
            <div>
                <label for="textEntry1" class="text-entry-label">
                    <input type="text" id="name" name="name" class="text-input" placeholder="Название" value="${ad.name}">
                    
                </label>
            </div>
            <div class="gradient-box" id="textEntryContainer">
                <label for="textEntry1" class="text-entry-label">
                    <input type="text" id="interests" name="interests" class="text-input" placeholder="Введите интересы, через запятую" value="${ad.interests}">
                    
                </label>
            </div>
        
        <div class="gradient-box" id="textEntryContainer">
        <label for="textEntry1" class="text-entry-label">
            <input type="text" id="keys" name="keys" class="text-input" placeholder="Введите ключевые фразы, через запятую" value="${ad.keys}">
            
        </label>
    </div>
    <div class="gradient-box">
        <label for="textEntry2" class="text-entry-label">
            <input type="text" id="tags" name="tags" class="text-input" placeholder="Введите теги, через запятую" value="${ad.tags}">
        </label>
    </div>
    <div class="demographics-info">
        <div class="info-column">
            <div class="info-item">
                <div style="font-size: 18px;">Демография</div>
            </div>
            <div class="info-item">
                <div>Пол</div>
                <div>
                    <input type="checkbox" class="gender" value="Any">
                    <label for="anyGendаer">Любой</label>
                </div>
                <div>
                    <input type="checkbox" class="gender" value="Female">
                    <label for="femaleGender">Женский</label>
                </div>
                <div>
                    <input type="checkbox" class="gender" value="Male">
                    <label for="maleGender">Мужской</label>
                </div>
            </div>
        </div> <!-- Закрытие первой колонки -->
    
        <div class="info-column info-item-right"> <!-- Начало второй колонки -->
            <div class="info-item">
                <div>Возраст</div>
            </div>
            <div class="info-item">
                <div class="age-range-wrapper"> 
                    <div class="age-range">
                        <input type="text" id="min_age" name="min_age" class="text-input" placeholder="От" value="${ad.min_age}">
                    </div>
                    <div class="age-range">
                        <input type="text" id="max_age" name="max_age" class="text-input" placeholder="До" value="${ad.max_age}">
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

    </div>    
    
    </div>`;
  }
}

