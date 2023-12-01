import { AudienceContext, AudienceItem } from "common/types.js";
import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/audience.css";
import Template from "./audience.hbs";
import SelectedAudience from "./components/SelectedAudience/index";
import AudienceList from "./components/AudienceList/index";

const context: AudienceContext = {
  userTargets: {
    status: "",
    parsedJson: [],
  },
  mainDescription: null,
  currentAd: 1,
};

export default class Audience {
  parent: HTMLElement;
  form: HTMLFormElement | null;
  selectedAudience: any;
  audienceList: any;

  constructor(parent = document.body) {
    this.parent = parent;
    this.form = null;
    this.selectedAudience = new SelectedAudience();
    this.audienceList = new AudienceList();
  }

  render() {
    // Api.getAudienceList()
    //   .then((data) => {
    //     context.userTargets = data; // Устанавливаем полученные объявления в context
    //     this.renderTemplate();
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка:", error);
    //   });

    const audience: AudienceItem[] = [
      {
        id: 1,
        image_link: "",
        budget: "123",
        name: "Name",
        interests: "Interest 1, Interest 2",
        keys: "Key 1, Key 2",
        tags: "Tag 1, Tag 2",
        min_age: "18",
        max_age: "50",
      },
    ];

    console.log(audience);

    context.userTargets.parsedJson = audience; // Устанавливаем полученные объявления в context
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

    this.audienceList.render(context, this.form, this.onSubmit);
  }

  onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.form) {
      const regions: NodeListOf<HTMLInputElement> =
        this.form.querySelectorAll(".regions");
      let region = "";
      regions.forEach((reg) => {
        region += reg.value;
      });

      const genderCheckboxes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll(".gender");
      let Gender = "";
      genderCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          Gender = checkbox.value;
        }
      });

      const inputsValue: any = {};
      const inputs = document.querySelectorAll("input");
      console.log(inputs);
      inputs.forEach((input) => {
        console.log(input.name);
        if (
          input.name === "name" ||
          input.name === "min_age" ||
          input.name === "max_age" ||
          input.name === "interests" ||
          input.name === "tags" ||
          input.name === "keys"
        ) {
          inputsValue[input.name] = input.value;
        }
      });
      inputsValue["id"] = context.currentAd;
      console.log(inputsValue);
      inputsValue["regions"] = region;
      inputsValue["gender"] = Gender;

      Api.editAudience(inputsValue).then((response) => {
        if (response.status === 200) {
          location.reload();
        } else {
        }
      });
    }
  }
}
