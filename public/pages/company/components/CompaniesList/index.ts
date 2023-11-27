import { CompanyItem, Component } from "common/types";

class CompaniesList {
  render = (adItems: CompanyItem[], selectedCompany: any, context: any) => {
    // Очищаем существующий список объявлений перед добавлением новых
    const adList = document.getElementById(
      "company__main__container__left__adlayout__ads--list"
    );

    if (adList) {
      adList.innerHTML = "";

      let nameString = "";
      let descrString = "";

      // context.userAds.parsedJson.forEach((ad, index) => {
      adItems.forEach((ad: CompanyItem, index: number) => {
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
        <div class="company__ad__element--current company__info-card">
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
            <div class="company__info-card__items">
              <div class="company__ad__element--current__status" style="background: #D3E7CA;"></div>
              <div class="company__ad__element--current__weekday company__info__text--large">БТ</div>
              <div class="company__ad__element--current__title company__info__text--title">${nameString}</div>
              <div class="company__ad__element--current__subtitle company__info__text--status">${descrString}</div>
              <div class="company__info__status--dot" style="background: #949494;">
              <div class="company__arrows"></div>
            </div>
        </div>
        `;
        listItem.addEventListener("click", () => {
          selectedCompany.render(ad);
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
  };
}

export default CompaniesList;
