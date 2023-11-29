import { ProfilePadContext } from "common/types.js";
import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/profilead.css";
import Template from "./profilead.hbs";
import { BACKEND_URL } from "../../modules/api.js";
import SelectedAd from "./components/SelectedAd/index";

const context: ProfilePadContext = {
  userPads: {
    status: "",
    parsedJson: [],
  },
  mainDescription: null,
  currentAd: 1,
  uniqueLink: "",
};

export default class ProfileAd {
  parent: HTMLElement;
  selectedAd: any;

  constructor(parent = document.body) {
    this.parent = parent;
    this.selectedAd = new SelectedAd();
  }

  render() {
    Api.getPad()
      .then((data) => {
        context.userPads = data; // Устанавливаем полученные объявления в context
        console.log(context.userPads)
        this.renderTemplate(); // Вернуть при деплое
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });

    /*context.userPads.parsedJson = [
      {
        id: 1,
        name: "Name",
        description: "Description",
        price: "500",
        website_link: "link",
        earnings_value: 50,
        views_value: 75,
        clicks_value: 65,
        audience: "Audience",
        html: "html string",
        js: "js string",
      },
    ]; */

    //this.renderTemplate();
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
      console.log(context.userPads.parsedJson);
      // Проверяем наличие userAds в context
      if (
        context.userPads.parsedJson &&
        Array.isArray(context.userPads.parsedJson)
      ) {
        let nameString = "";
        let descrString = "";
        context.userPads.parsedJson.forEach((ad, index) => {
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
        if (context.userPads.parsedJson.length > 7) {
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
      if (target.classList.contains("profilead__action-box")) {
        console.log('Кнопка "Изменить" нажата');
        this.editPad(context.currentAd);
      } else if (target.classList.contains("profilead__сancel-box")) {
        console.log('Кнопка "Удалить" нажата');
        this.deleteAdFromBackend();
      }
    });
  }

  deleteAdFromBackend() {
    const req = {
      pad_id: 0,
    };
    req["pad_id"] = context.currentAd;
    Api.deletePad(req)
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
      this.selectedAd.render(ad);
    }
  }

  async editPad(id: number) {
    const form = document.querySelector("#announcement") as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      console.log("submit");
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input: any) => {
        if (
          input.id === "name" ||
          input.id === "description" ||
          input.id === "website_link" ||
          input.id === "price"
        ) {
          formData.append(input.id, input.value);
        }
      });

      let input = document.querySelector(".dropdown") as HTMLInputElement;
      if (input) {
        formData.append("target_id", input.value);
      }

      try {
        const response = await fetch(BACKEND_URL + "/padedit", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          body: formData,
        });

        if (response.ok) {
          location.href = "/profilead";
        } else {
          // Обработка ошибки
          const errorData = response.json();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
