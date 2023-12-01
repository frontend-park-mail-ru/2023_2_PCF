import Api from "../../modules/api.js";
import Template from "./audience_create.hbs";
import "../../static/css/audience_create.css";
import { AudienceCreateContext } from "common/types.js";
import { regionItems } from "../../common/enums";

const context: AudienceCreateContext = {
  selectedItems: [],
};

export default class CreateAudience {
  parent: HTMLElement;
  form: HTMLFormElement | null;
  submitCallback: () => void;
  errorLabel: HTMLElement | null;

  constructor(parent = document.body, submitCallback = () => {}) {
    this.parent = parent;
    this.submitCallback = submitCallback;
    this.form = null;
    this.errorLabel = null;
  }

  render() {
    const templateResult = Template(context);
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = templateResult;
    const appContainer = document.getElementById("content");

    if (appContainer) {
      appContainer.appendChild(tempContainer);
    }

    this.form = this.parent.getElementsByClassName(
      "edit-btn"
    )[0] as HTMLFormElement;
    this.form.addEventListener("click", this.onSubmit.bind(this));

    const genderCheckboxes: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".regions");
    if (genderCheckboxes.length > 0) {
      genderCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", this.onCheck.bind(this));
      });
    }
  }

  onCheck(event: { target: any; preventDefault: () => void }) {
    if (event.target.value) {
      if (!context.selectedItems.includes(event.target.value)) {
        context.selectedItems.push(event.target.value);
      } else {
        context.selectedItems = context.selectedItems.filter(
          (e) => e !== event.target.value
        );
      }

      const regionContainer = document.querySelector(".audience__region-list");

      if (regionContainer) {
        let regions = "";

        context.selectedItems.forEach((si) => {
          let regionName = "";

          if (Object.keys(regionItems).includes(si)) {
            regionName = regionItems[si as keyof typeof regionItems];
          }

          regions += `<div class="region-name">${regionName}</div>`;
        });

        regionContainer.innerHTML = regions;
      }

      console.log(context.selectedItems);
    }
  }

  onSubmit(event: { preventDefault: () => void }) {
    console.log("onSubmit");
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
      console.log(inputsValue);
      inputsValue["regions"] = region;
      inputsValue["gender"] = Gender;

      Api.createAudience(inputsValue)
        .then((response) => {
          if (response.status === 201) {
            this.submitCallback();
          } else {
            const errMessage = document.querySelector("#error-message");

            if (errMessage) {
              errMessage.innerHTML = response?.parsedJson?.message;
            }
          }
        })
        .catch((error) => {
          const errMessage = document.querySelector("#error-message");

          if (errMessage) {
            errMessage.innerHTML = error;
          }
        });
    }
  }
}
