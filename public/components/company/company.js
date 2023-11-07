import Api from '../../modules/api.js';

const context = {
  userAds: [],
  mainDescription: null,
};

export default class Company {
  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {
    Api.getAdsList()
      .then((data) => {
        context.userAds = data; // Устанавливаем полученные объявления в context
        this.renderTemplate();
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/list.css';
    document.head.appendChild(link);
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
  }

  showSelectedAd(ad) {
    const selectedAd = document.getElementById("selected-ad");
    selectedAd.innerHTML = `<h2>${ad.name}</h2><p>${ad.description}</p><p>${ad.budget}</p><a href="${ad.website_link}">Cайт</a>`;

    // Создаём кнопки "Изменить" и "Удалить" и добавляем их в DOM
    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "Изменить";
    editButton.addEventListener("click", () => {
      // Здесь должна быть логика для редактирования объявления
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-ad-button";
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => {
      // Здесь должна быть логика для удаления объявления
      if (confirm("Вы уверены, что хотите удалить это объявление?")) {
        const requestData = {
          ad_id: ad.id,
        };
        Api.deleteAd(requestData) // Предполагаем, что у Api есть метод deleteAd
          .then(() => {
            alert("Объявление удалено");
            context.userAds = context.userAds.filter(
              (item) => item.id !== ad.id
            );
            this.renderTemplate();
            selectedAd.innerHTML = "";
          })
          .catch((error) => {
            console.error("Ошибка при удалении объявления:", error);
          });
      }
    });

    // Добавляем кнопки в DOM
    selectedAd.appendChild(editButton);
    selectedAd.appendChild(deleteButton);
  }


}


