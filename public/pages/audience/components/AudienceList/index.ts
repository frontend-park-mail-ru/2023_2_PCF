import { AudienceContext } from "common/types";
import SelectedAudience from "../SelectedAudience";

class AudienceList {
  parent: HTMLElement;
  selectedAudience: any;

  constructor(parent = document.body) {
    this.parent = parent;
    this.selectedAudience = new SelectedAudience();
  }

  render = (context: AudienceContext, form: any, onSubmit: any) => {
    const adList = document.getElementById("target-list");

    if (adList) {
      // Очищаем существующий список объявлений перед добавлением новых
      adList.innerHTML = "";

      if (
        context.userTargets.parsedJson &&
        Array.isArray(context.userTargets.parsedJson)
      ) {
        context.userTargets.parsedJson.forEach((ad, index) => {
          const listItem = document.createElement("div");
          listItem.innerHTML = `                        
        <div class="audience__info-card">
            <div class="audience__info-card__main">
                <div class="circle" style="background: #FEAFAF;"></div>
                <div class="text-title">${ad.name}</div>
                <div class="text-large">А1</div>
                <div class="text-status">Реклама</div>
                <div class="arrows"></div>
            </div>
        </div>`;
          listItem.addEventListener("click", () => {
            context.currentAd = ad.id;
            this.selectedAudience.render(ad);
            form = this.parent.getElementsByClassName(
              "edit-btn"
            )[0] as HTMLFormElement;
            form.addEventListener("click", onSubmit.bind(this));
          });
          adList.appendChild(listItem);
        });
      }
    }
  };
}

export default AudienceList;
