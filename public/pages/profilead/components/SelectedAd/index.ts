import { ProfileAdItem } from "common/types";

class SelectedAd {
  render = (ad: ProfileAdItem) => {
    const selectedAd = document.getElementById("selected-ad");
    if (selectedAd) {
      selectedAd.innerHTML = `
      <div class="content-wrapper">
        <div class="text-blocks">
            <div class="title">${ad.name}</div>
            <div class="subtitle">Аудитория</div>
            <div class="info-box">
                <select
                    class="text-input dropdown"
                    id="target_id"
                >
                    <option value="${ad.audience}">${ad.audience}</option>
                </select>
            </div>
            
            <div class="subtitle">Ссылка</div>
            <div class="info-box">
                <input type="text" class="info-input" placeholder="Введите ссылку" id="website_link" value="${ad.website_link}"/>
            </div>

            <div class="subtitle">Минимальная цена клика</div>
            <div class="info-box">
                <input type="text" class="info-input" placeholder="Введите цену" id="price" value="${ad.price}"/>
            </div>
        </div>

        <div class="description-box">
            <textarea type="text" class="description-input" placeholder="Описание" id="description" value="${ad.description}"></textarea>
        </div>

        </div>
        <div class="earning-info-wrapper">
            <div class="earning-info">
                <div class="earning-title">Заработано</div>
                <div class="earning-value" id="earningValue">${ad.earnings_value}</div>
            </div>
            <div class="earning-info">
                <div class="earning-title">Клики</div>
                <div class="earning-value" id="clicksValue">${ad.clicks_value}</div>
            </div>
            <div class="earning-info">
                <div class="earning-title">Показы</div>
                <div class="earning-value" id="viewsValue">${ad.views_value}</div>
            </div>
        </div>
        <div class="ad-info-wrapper">
          <div class="ad-box">
              <input type="text" class="ad-input" placeholder="HTML" value="${ad.html}">
          </div>
          <div class="ad-box">
              <input type="text" class="ad-input" placeholder="JS" value="${ad.js}">
          </div>
        </div>

        <div class="profilead__box">
          <button class="profilead__action-box" id="submitBtn">
              <div class="profilead__bold-label">Редактировать</div>
          </button>
          <button class="profilead__сancel-box" id="cancelBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <rect x="1.5" y="1" width="18" height="18" rx="6" stroke="white" stroke-width="2"/>
                  <line x1="3.5" y1="10" x2="17.5" y2="10" stroke="white" stroke-width="2"/>
              </svg>
              <div class="profilead__bold-label">Удалить</div>
          </button>
        </div>
      </div>`;
    }
  };
}

export default SelectedAd;
