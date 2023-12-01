import { AudienceItem, AudienceSelectedContext } from "common/types";
import Api from "../../../../modules/api";
import { regionItems } from "../../../../common/enums";

const context: AudienceSelectedContext = {
  selectedItems: [],
};

class SelectedAudience {
  parent: HTMLElement;

  constructor(parent = document.body) {
    this.parent = parent;
  }

  render(ad: AudienceItem) {
    console.log(ad);
    const selectedAd = this.parent.getElementsByClassName(
      "audience-content__centered-box"
    );
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
                    <div class="audience__region-list">
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        <div class="right-block">
            <div class="gradient-box" style="margin-top: 0">
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
        <button class="btn delete-btn">
        <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="18"
                height="18"
                rx="6"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="3"
                y1="10"
                x2="17"
                y2="10"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <span class="btn-text">Удалить</span>
        </button>
    </div>    
    
    </div>`;

    const genderCheckboxes: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".regions");
    if (genderCheckboxes.length > 0) {
      genderCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", this.onCheck.bind(this));
      });
    }
  }

  onCheck(event: { target: any; preventDefault: () => void }) {
    if (event.target.value) {
      if (!context.selectedItems.includes(event.target.value)) {
        context.selectedItems.push(event.target.value);
      } else {
        context.selectedItems = context.selectedItems.filter(
          (e) => e !== event.target.value
        );
      }

      const regionContainer = document.querySelector(".audience__region-list");

      if (regionContainer) {
        let regions = "";

        context.selectedItems.forEach((si) => {
          let regionName = "";

          if (Object.keys(regionItems).includes(si)) {
            regionName = regionItems[si as keyof typeof regionItems];
          }

          regions += `<div class="region-name">${regionName}</div>`;
        });

        regionContainer.innerHTML = regions;
      }

      console.log(context.selectedItems);
    }
  }
}

export default SelectedAudience;
