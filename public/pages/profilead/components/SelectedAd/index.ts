import { ProfilePadItem } from "common/types";

class SelectedAd {
  render = (pad: ProfilePadItem) => {
    const selectedAd = document.getElementById("selected-ad");
    if (selectedAd) {
      selectedAd.innerHTML = `
      <div class="content-wrapper">
        <div class="text-blocks">
            <div class="title">${pad.name}</div>
            <div class="subtitle">Аудитория</div>
            <div class="info-box">
                <select
                    class="text-input dropdown"
                    id="target_id"
                >
                    <option value="${pad.target_id}">${pad.target_id}</option>
                </select>
            </div>
            
            <div class="subtitle">Ссылка</div>
            <div class="info-box">
                <input type="text" class="info-input" placeholder="Введите ссылку" id="website_link" value="${pad.website_link}"/>
            </div>

            <div class="subtitle">Минимальная цена клика</div>
            <div class="info-box">
                <input type="text" class="info-input" placeholder="Введите цену" id="price" value="${pad.price}"/>
            </div>
        </div>

        <div class="description-box">
            <input type="text" class="description-input" placeholder="Описание" id="description" value="${pad.description}">
        </div>

        </div>
        <div class="earning-info-wrapper">
            <div class="earning-info">
                <div class="earning-title">Заработано</div>
                <div class="earning-value" id="earningValue">${pad.balance}</div>
            </div>
            <div class="earning-info">
                <div class="earning-title">Клики</div>
                <div class="earning-value" id="clicksValue">${pad.clicks}</div>
            </div>
            <div class="earning-info">
                <div class="earning-title">Показы</div>
                <div class="earning-value" id="viewsValue">${pad.views}</div>
            </div>
        </div>
        <div class="ad-info-wrapper">
          <div class="ad-box">
              <pr type="text" class="ad-input" placeholder="HTML">&lt;div id=&quot;banner-container&quot;&gt;&lt;/div&gt;</pr>
          </div>
          <div class="ad-box">
              <pre class="ad-input" placeholder="JS">
              &lt;script&gt;
                document.addEventListener('DOMContentLoaded', function() {
                    fetchBanner();
                });
                
                function fetchBanner() {
                    fetch("http://84.23.53.167:8080/api/v1/getad?id=${pad.id}")
                    .then(response =&gt; {
                    console.log(response)
                    return response.text()
                    })
                    .then(data =&gt; {
                    console.log(data)
                    const bannerContainer = document.getElementById('banner-container');
                    bannerContainer.innerHTML = data;
                    })
                    .catch(error =&gt; {
                    console.error('Fetch error:', error);
                    });
                }
                &lt;/script&gt;
              </pre>
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
