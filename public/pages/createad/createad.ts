import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/createad.css";
import { BACKEND_URL } from "../../modules/api.js";
import Template from "./createad.hbs";

const context = {
  Audience: [],
};

export default class CreateAd {
  parent: HTMLElement;
  form: HTMLFormElement | null;
  submitCallback: () => void;
  errorLabel: string | null;

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

    this.form = this.parent.querySelector(".createad");

    Api.getAudienceList()
      .then((data) => {
        context.Audience = data.parsedJson;
        this.renderTemplate();
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }

  renderTemplate() {
    console.log(context.Audience);

    const fileUpload = document.getElementById(
      "file-upload"
    ) as HTMLInputElement;
    if (fileUpload) {
      fileUpload.addEventListener("change", function () {
        var fileName = "";
        if (fileUpload.files && fileUpload.files.length > 0) {
          fileName = fileUpload.files[0].name;
          const fileNameElement = document.getElementById(
            "file-name-display"
          ) as HTMLInputElement;

          if (fileNameElement) {
            fileNameElement.value = fileName;
          }

          var file = fileUpload.files[0];
          if (file) {
            var reader = new FileReader();
            reader.onload = function (e: any) {
              const imagePreview = document.querySelector(
                ".createad__preview-image"
              ) as HTMLImageElement;

              if (imagePreview) {
                imagePreview.src = e.target.result;
              }
            };
            reader.readAsDataURL(file);
          }
        }
      });

      let targetList = document.querySelector(".dropdown");
      context.Audience.forEach((audience: { name: string; id: string }) => {
        let op = document.createElement("option");
        op.className = "dropdown-content";
        op.textContent = audience.name;
        op.value = audience.id;
        if (targetList) {
          targetList.appendChild(op);
        }
      });

      if (this.form) {
        const nameElement = this.form.querySelector("#name");

        if (nameElement) {
          nameElement.addEventListener("input", (event: any) => {
            // Ensure the event listener is using the event parameter to get the current value.
            const previewTitle = document.querySelector(
              ".createad__preview-title"
            ); // Ensure this element exists in your HTML.
            if (previewTitle) {
              previewTitle.textContent = event.target.value; // Use event.target.value to get the current input's value.
            }
          });
        }

        // Attach event listeners to the description input field.
        const descriptionElement = this.form.querySelector("#description");

        if (descriptionElement) {
          descriptionElement.addEventListener("input", (event: any) => {
            // Ensure the event listener is using the event parameter to get the current value.
            const previewDescription = document.querySelector(
              ".createad__preview-desription"
            ); // Ensure this element exists in your HTML.
            if (previewDescription) {
              previewDescription.textContent = event.target.value; // Use event.target.value to get the current input's value.
            }
          });
        }

        const submitBtnElement = document.querySelector("#submitBtn");

        if (submitBtnElement) {
          submitBtnElement.addEventListener("click", () => {
            this.submit();
          });
        }
      }
    }
  }

  async submit() {
    const form = document.querySelector("#createAd") as HTMLFormElement;
    const formData = new FormData(form);
    if (this.form) {
      const inputs = this.form.querySelectorAll("input");
      inputs.forEach((input: any) => {
        if (
          input.id === "name" ||
          input.id === "description" ||
          input.id === "website_link" ||
          input.id === "budget"
        ) {
          formData.append(input.id, input.value);
        } else if (input.id === "file-upload") {
          if (input.files[0] != null) {
            formData.append("image", input.files[0]);
          } else {
            formData.append("image", "");
          }
        }
      });
    }

    let input = document.querySelector(".dropdown") as HTMLInputElement;

    formData.append("target_id", input?.value);

    const requestOptions = {
      method: "POST",
      // mode: "cors",
      // credentials: "include", // Если требуется передача авторизационных данных
      body: formData,
    };

    try {
      // Отправляем запрос на сервер
      const response = await fetch(BACKEND_URL + "/ad", requestOptions);

      if (response.ok) {
        location.href = "/company";
      } else {
        // Обработка ошибки
        const errorData = response.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
