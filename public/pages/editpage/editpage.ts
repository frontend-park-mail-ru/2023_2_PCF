import Api from "../../modules/api.js";
import "../../static/css/editpage.css";
import { BACKEND_URL } from "../../modules/api.js";
import Template from "./editpage.hbs";
import { EditPageContext } from "common/types.js";

const context: EditPageContext = {
  ad: {
    id: 0,
    name: "",
    budget: 0,
    website_link: "",
    description: "",
    image_link: "",
  },
  Audience: [],
};

const urlParams = new URLSearchParams(window.location.search);
const adID = urlParams.get("id");

export default class EditPage {
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
    Api.getAd(adID)
      .then((data) => {
        console.log(data);
        context.ad = data.parsedJson;
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });

    Api.getAudienceList()
      .then((data) => {
        context.Audience = data.parsedJson;
        this.renderTemplate();
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });

    const templateResult = Template({});
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = templateResult;
    const appContainer = document.getElementById("content");

    if (appContainer) {
      appContainer.appendChild(tempContainer);
    }

    this.form = this.parent.querySelector("#createAd") as HTMLFormElement;
    this.form.addEventListener("submit", this.submit.bind(this));
    this.errorLabel = this.form.getElementsByClassName(
      "error-label"
    )[0] as HTMLElement;
    this.errorLabel.classList.add("hidden");
  }

  renderTemplate() {
    if (this.form) {
      const inputs = this.form.querySelectorAll("input");
      inputs.forEach((input) => {
        if (
          input.id === "name" ||
          input.id === "description" ||
          input.id === "website_link" ||
          input.id === "budget" ||
          input.id === "website_link"
        ) {
          input.value = context.ad[input.id].toString();
        }
      });

      const imagePreview = document.querySelector(
        ".editpage__preview-image"
      ) as HTMLImageElement;
      if (imagePreview) {
        imagePreview.src = Api.getImage(context.ad.image_link);
      }

      const previewDescription = document.querySelector(
        ".editpage__preview-desription"
      );

      if (previewDescription) {
        previewDescription.textContent = context.ad.description;
      }

      const previewTitle = document.querySelector(".editpage__preview-title");

      if (previewTitle) {
        previewTitle.textContent = context.ad.name;
      }

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

            if (fileName) {
              fileNameElement.value = fileName;
            }

            var file = fileUpload.files[0];
            if (file) {
              var reader = new FileReader();
              reader.onload = function (e: any) {
                const previewImage = document.querySelector(
                  ".editpage__preview-image"
                ) as HTMLImageElement;

                if (previewImage) {
                  previewImage.src = e.target.result;
                }
                document.querySelector(".editpage__preview-image");
              };
              reader.readAsDataURL(file);
            }
          }
        });
      }

      let targetList = document.querySelector(".dropdown");
      context.Audience.forEach((audience) => {
        let op = document.createElement("option");
        op.className = "dropdown-content";
        op.textContent = "Аудитория" + audience.id;
        op.value = audience.id.toString();

        if (targetList) {
          targetList.appendChild(op);
        }
      });

      const nameElement = this.form.querySelector("#name");

      if (nameElement) {
        nameElement.addEventListener("input", (event: any) => {
          const previewTitle = document.querySelector(
            ".editpage__preview-title"
          );
          if (previewTitle) {
            previewTitle.textContent = event.target.value;
          }
        });
      }

      const descriptionElement = this.form.querySelector("#description");

      if (descriptionElement) {
        descriptionElement.addEventListener("input", (event: any) => {
          const previewDescription = document.querySelector(
            ".editpage__preview-desription"
          );
          if (previewDescription) {
            previewDescription.textContent = event.target.value;
          }
        });
      }

      const submitBtn = document.querySelector("#submitBtn");

      if (submitBtn) {
        submitBtn.addEventListener("click", () => {
          this.submit();
        });
      }
    }
  }

  submit() {
    const form = document.querySelector("#createAd") as HTMLFormElement;
    const formData = new FormData(form);
    console.log("submit");
    formData.append("ad_id", context.ad.id.toString());

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

      let input = document.querySelector(".dropdown") as HTMLInputElement;
      if (input) {
        formData.append("target_id", input.value);
      }

      const requestOptions = {
        method: "POST",
        // mode: "cors",
        // credentials: "include",
        body: formData,
      };

      try {
        const response = fetch(BACKEND_URL + "/adedit", requestOptions).then(
          (response) => {
            if (response.status < 300) {
              location.href = "/company";
            } else {
              // Обработка ошибки
              return response.json();
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
}
