import { CompanyItem } from "common/types";
import Api from "../../../../modules/api";

class SelectedCompany {
  render = (ad: CompanyItem) => {
    const selectedAd = document.getElementById("selected-ad");
    if (selectedAd) {
      selectedAd.innerHTML = `
        <div class="company__ad__container--selected">
          <img id="company__ad__photo" class="company__box--image" src="image.jpg" alt="Company Photo">
          <div class="company__ad__content">
            <div class="company__ad--left">
              <div class="company__ad__box--title">${ad.name}</div>
              <div class="company__ad__box--subtitle">Бюджет</div>
              <div class="company__ad__box--description">${ad.budget}</div>
              <div class="company__ad__box--subtitle">Аудитория</div>
              <div class="company__ad__box--description"></div>
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
    }

    const photoCompany: HTMLImageElement | null = document.getElementById(
      "company__ad__photo"
    ) as HTMLImageElement;

    if (photoCompany) {
      photoCompany.src = Api.getImage(ad.image_link);
    }
  };
}

export default SelectedCompany;
