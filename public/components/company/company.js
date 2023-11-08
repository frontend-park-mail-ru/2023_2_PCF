import Api from "../../modules/api.js";

const context = {
  userAds: [],
  mainDescription: null,
  currentAd: 1,
  uniqueLink: String,
};

function editAd(adID) {
  window.location.href = `/editpage?id=${adID}`;
}

export default class Company {
  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../../static/css/company.css";
    document.head.appendChild(link);

    Api.getAdsList()
      .then((data) => {
        context.userAds = data;
        this.renderTemplate();
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }

  renderTemplate() {
    this.parent.innerHTML = Handlebars.templates["company.hbs"](context);
    this.setupEventListeners();
    this.populateAdsList();
  }

  setupEventListeners() {
    // Код для установки обработчиков событий (опущен для краткости)
  }

  populateAdsList() {
    const adList = document.getElementById("ad-list");
    adList.innerHTML = "";

    if (context.userAds.parsedJson && Array.isArray(context.userAds.parsedJson)) {
      context.userAds.parsedJson.forEach((ad, index) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = this.createAdListItemHtml(ad);
        listItem.addEventListener("click", () => {
          this.showSelectedAd(ad);
          context.currentAd = ad.id;
        });
        adList.appendChild(listItem);
      });
    }
  }

  createAdListItemHtml(ad) {
    return `
      <div class="currentAdElContainer info-card">
          <div class="circle" style="background: #D3E7CA;"></div>
          <div class="currentAdElWeekday tet-large">БТ</div>
          <div class="currentAdElTitle text-title">${ad.name}</div>
          <div class="currentAdElSubtitle text-status">${ad.description}</div>
          <div class="status-dot" style="background: #949494;">
          <div class="arrows"></div>
      </div>
    `;
  }

  showSelectedAd(ad) {
    const selectedAd = document.getElementById("selected-ad");
    selectedAd.innerHTML = `
      <img class="box-image" src="../../static/img/image5.png" />
      <div class="text-container">
          <div class="lefted-text">
              <div class="box-title">${ad.name}</div>
              <div class="box-subtitle">Бюджет</div>
              <div class="box-description">${ad.budget}</div>
              <!-- Дополнительные подзаголовки и описания -->
          </div>
          <div class="righted-text">
              <div class="description-container">
                  <div class="description-title">Описание</div>
                  <div class="description-text">${ad.description}</div>
              </div>
          </div>
      </div>
      <div class="ad-buttons">
          <button type="button" class="edit-button-unique custom-button">Получить ссылку</button>
          <button type="button" class="edit-button-edid custom-button">Изменить</button>
          <button type="button" class="edit-button-delete custom-button">Удалить</button>
      </div>
    `;
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
    const req = {};
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

  // Методы getUniqueLinkFromBackend и deleteAdFromBackend опущены для краткости
}
