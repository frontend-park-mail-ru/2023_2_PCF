import Api from "../../modules/api.js";
import "../../static/css/company.css";
import "../../static/css/budget.css";
import Template from "./company.hbs";
import SelectedCompany from "./components/SelectedCompany/index";
import CompaniesList from "./components/CompaniesList/index";
import {
  CompanyContext,
  CompanyDeleteRequestData,
  CompanyItem,
} from "common/types.js";

const context: CompanyContext = {
  userAds: {
    status: "",
    parsedJson: undefined,
  },
  mainDescription: null,
  currentAd: 1,
  uniqueLink: "",
};

function editAd(adID: number) {
  // Перенаправление на страницу редактирования с передачей параметра adID
  window.location.href = `/editpage?id=${adID}`;
}

export default class Company {
  parent: HTMLElement;
  selectedCompany: any;
  companiesList: any;

  constructor(parent = document.body) {
    this.parent = parent;
    this.selectedCompany = new SelectedCompany();
    this.companiesList = new CompaniesList();
  }

  render() {
    // MOCKUP
    const userAds: CompanyItem[] = [
      {
        id: 1,
        name: "Название #1",
        audience: "Аудитория #1",
        description: "Описание #1",
        budget: 100,
        website_link: "http://...",
        image_link: "",
        price: 123,
      },
    ];
    context.userAds = { status: "", parsedJson: userAds };
    this.renderTemplate();

    // Api.getAdsList()
    //   .then((data) => {
    //     context.userAds = data; // Устанавливаем полученные объявления в context
    //     this.renderTemplate();
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка:", error);
    //   });
  }

  renderTemplate() {
    const templateResult = Template(context);
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = templateResult;
    const appContainer = document.getElementById("content");

    if (appContainer) {
      appContainer.appendChild(tempContainer);
    }

    // Проверяем наличие userAds в context
    if (
      context.userAds.parsedJson &&
      Array.isArray(context.userAds.parsedJson)
    ) {
      this.companiesList.render(
        context.userAds.parsedJson,
        this.selectedCompany,
        context
      );
    }

    // this.parent.addEventListener("click", (event) => {
    //   const target: HTMLElement | null = event.target as HTMLElement;
    //   if (target) {
    //     console.log(target);
    //     if (target.classList.contains("company__ad__button--edit")) {
    //       console.log('Кнопка "Изменить" нажата');
    //       editAd(context.currentAd);
    //     } else if (target.classList.contains("company__ad__button--unique")) {
    //       console.log('Кнопка "Получить ссылку" нажата');
    //       this.getUniqueLinkFromBackend();
    //     } else if (target.classList.contains("company__ad__button--delete")) {
    //       console.log('Кнопка "Удалить" нажата');
    //       this.deleteAdFromBackend();
    //     }
    //   }
    // });
  }

  getUniqueLinkFromBackend() {
    // Отправьте запрос на бэкэнд для получения уникальной ссылки
    // Api.getUniqueLink(context.currentAd)
    //   .then((data) => {
    //     console.log("Уникальная ссылка получена:", data);
    //     context.uniqueLink = data.parsedJson; // Устанавливаем полученную уникальную ссылку в context
    //     alert(context.uniqueLink);
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка при получении уникальной ссылки:", error);
    //     alert("Not work");
    //   });
  }

  deleteAdFromBackend() {
    const req: CompanyDeleteRequestData = {
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
}
