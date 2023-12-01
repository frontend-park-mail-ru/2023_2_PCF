import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/announcement.css";
import { BACKEND_URL } from "../../modules/api.js";
import Template from "./announcement.hbs";

const context = {
  Audience: [],
};

export default class Announcement {
  parent: HTMLElement;
  submitCallback: () => void;
  form: HTMLFormElement | null;
  errorLabel: HTMLElement | null;

  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.submitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    const templateResult = Template({});
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = templateResult;
    const appContainer = document.getElementById("content");

    if (appContainer) {
      appContainer.appendChild(tempContainer);
    }

    this.form = this.parent.querySelector(".announcement");

    // Api.getAudienceList()
    //   .then((data) => {
    //     context.Audience = data.parsedJson;
    //     this.renderTemplate();
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка:", error);
    //   });
  }

  renderTemplate() {
    console.log(context.Audience);

    let targetList = document.querySelector("#target_id");
    context.Audience.forEach((audience: any) => {
      let op = document.createElement("option");
      op.className = "dropdown-content";
      op.textContent = "Аудитория" + audience.id;
      op.value = audience.id;
      if (targetList) {
        targetList.appendChild(op);
      }
    });

    if (this.form) {
      const submitBtn = document.querySelector("#submitBtn");

      if (submitBtn) {
        submitBtn.addEventListener("click", () => {
          this.submit();
        });
      }
    }
  }

  /*Name        string `json:"name"`
  Description string `json:"description"`
  WebsiteLink string `json:"website_link"`
  Price       string `json:"price"`
  TargetId    string `json:"target_id"`*/

  async submit() {
    const form = document.querySelector("#announcement") as HTMLFormElement;
    if (form && this.form) {
      const formData = new FormData(form);
      console.log("submit");
      const inputs = this.form.querySelectorAll("input");
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
        const response = await fetch(BACKEND_URL + "/pad", {
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
