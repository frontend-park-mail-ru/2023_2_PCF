import { ProfileAdContext } from "common/types.js";
import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/profilead.css";
import Template from "./profilead.hbs";

const context: ProfileAdContext = {
  userAds: {
    status: "",
    parsedJson: [],
  },
  mainDescription: null,
  currentAd: 1,
  uniqueLink: "",
};

function editAd(adID: number) {
  // Перенаправление на страницу редактирования с передачей параметра adID
  window.location.href = `/editpage?id=${adID}`;
}

export default class ProfileAd {
  parent: HTMLElement;

  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {
    // Api.getAdsList()
    //   .then((data) => {
    //     context.userAds = data; // Устанавливаем полученные объявления в context
    //     this.renderTemplate();
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка:", error);
    //   });

    this.renderTemplate();
  }

  renderTemplate() {
    const templateResult = Template(context);
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = templateResult;
    const appContainer = document.getElementById("content");

    if (appContainer) {
      appContainer.appendChild(tempContainer);
    }

    // Очищаем существующий список объявлений перед добавлением новых
    const adList = document.getElementById(
      "profilead__main__container__left__adlayout__ads--list"
    );

    if (adList) {
      adList.innerHTML = "";
      console.log(context.userAds.parsedJson);
      // Проверяем наличие userAds в context
      if (
        context.userAds.parsedJson &&
        Array.isArray(context.userAds.parsedJson)
      ) {
        let nameString = "";
        let descrString = "";
        context.userAds.parsedJson.forEach((ad, index) => {
          if (ad.name.length > 15) {
            nameString = ad.name.substring(0, 15);
          } else {
            nameString = ad.name;
          }

          if (ad.description.length > 15) {
            descrString = ad.description.substring(0, 15);
          } else {
            descrString = ad.description;
          }

          const listItem = document.createElement("div");
          listItem.innerHTML = ` 
        <div class="profilead__ad__element--current profilead__info-card">
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
            <div class="profilead__info-card__items">
              <div class="profilead__ad__element--current__status" style="background: #D3E7CA;"></div>
              <div class="profilead__ad__element--current__weekday profilead__info__text--large">БТ</div>
              <div class="profilead__ad__element--current__title profilead__info__text--title">${nameString}</div>
              <div class="profilead__ad__element--current__subtitle profilead__info__text--status">${descrString}</div>
              <div class="profilead__info__status--dot" style="background: #949494;">
              <div class="profilead__arrows"></div>
            </div>
        </div>
        `;
          listItem.addEventListener("click", () => {
            this.showSelectedAd(ad);
            context.currentAd = ad.id;
          });
          adList.appendChild(listItem);
        });
        if (context.userAds.parsedJson.length > 7) {
          adList.style.maxHeight = "1000px";
          adList.style.overflowY = "auto";
        } else {
          adList.style.maxHeight = "none";
          adList.style.overflowY = "hidden";
        }
      }
    }

    this.parent.addEventListener("click", (event: any) => {
      const target = event.target;
      if (target.classList.contains("profilead__ad__button--edit")) {
        console.log('Кнопка "Изменить" нажата');
        editAd(context.currentAd);
      } else if (target.classList.contains("profilead__ad__button--unique")) {
        console.log('Кнопка "Получить ссылку" нажата');
        this.getUniqueLinkFromBackend();
      } else if (target.classList.contains("profilead__ad__button--delete")) {
        console.log('Кнопка "Удалить" нажата');
        this.deleteAdFromBackend();
      }
    });
  }

  getUniqueLinkFromBackend() {
    // Отправьте запрос на бэкэнд для получения уникальной ссылки
    Api.getUniqueLink(context.currentAd)
      .then((data) => {
        console.log("Уникальная ссылка получена:", data);
        context.uniqueLink = data.parsedJson; // Устанавливаем полученную уникальную ссылку в context
        alert(context.uniqueLink);
      })
      .catch((error) => {
        console.error("Ошибка при получении уникальной ссылки:", error);
        alert("Not work");
      });
  }

  deleteAdFromBackend() {
    const req = {
      ad_id: 0,
    };
    req["ad_id"] = context.currentAd;
    Api.deleteAd(req)
      .then((data) => {
        console.log("Удален ссылка получена:", data);
        location.reload();
      })
      .catch((error) => {
        console.error("Ошибка при получении уникальной ссылки:", error);
        alert("Not work");
      });
  }
  showSelectedAd(ad: any) {
    const selectedAd = document.getElementById("selected-ad");

    if (selectedAd) {
      selectedAd.innerHTML = `
      <div class="profilead__ad__container--selected">
      <img id="profilead__ad__photo" class="profilead__box--image" src="image.jpg" alt="profilead Photo">
      <div class="profilead__ad__content">
          <div class="profilead__ad--left">
              <div class="profilead__ad__box--title">${ad.name}</div>
              <div class="profilead__ad__box--subtitle">Бюджет</div>
              <div class="profilead__ad__box--description">${ad.budget}</div>
              <div class="profilead__ad__box--subtitle">Аудитория</div>
              <div class="profilead__ad__box--description">Аудитория 1</div>
              <div class="profilead__ad__box--subtitle">Сайт</div>
              <div class="profilead__ad__box--description">${ad.website_link}</div>
          </div>
          <div class="profilead__ad--right">
              <div class="profilead__ad__description--title">Описание</div>
              <div class="profilead__ad__description--text">${ad.description}</div>
          </div>
      </div>
      <div class="profilead__ad__buttons">
          <button class="profilead__ad__button--unique">Получить ссылку</button>
          <button class="profilead__ad__button--edit">Изменить</button>
          <button class="profilead__ad__button--delete">Удалить</button>
      </div>
  </div> `;
      const photoprofilead = document.getElementById(
        "profilead__ad__photo"
      ) as HTMLImageElement;

      if (photoprofilead) {
        photoprofilead.src = Api.getImage(ad.image_link);
      }
    }
  }
}
