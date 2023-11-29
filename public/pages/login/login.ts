import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/login.css";
import Template from "./login.hbs";

export default class Login {
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
    history.pushState("", "AdHub", "/login");
    this.parent.innerHTML = Template({});
    this.form = this.parent.getElementsByClassName(
      "login-form"
    )[0] as HTMLFormElement;
    this.form.addEventListener("submit", this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName(
      "login-form__error-button"
    )[0] as HTMLElement;
    this.errorLabel.classList.add("login-form__error-button--hidden");
  }

  onSubmit(event: any) {
    event.preventDefault();
    console.log("Click")
    if (this.form) {
      const inputs = this.form.querySelectorAll("input");
      const inputsValue: any = {};
      let errMessage = "Неверные данные.";
      let err = true;
      inputs.forEach((input) => {
        if (input.id === "password") {
          if (Validate.Password(input.value)) {
            inputsValue[input.id] = input.value;
            err = true;
          } else {
            errMessage = "Неверный пароль. Введите пароль от 6ти символов.";
            err = false;
            return;
          }
        } else if (input.id === "login") {
          if (Validate.Email(input.value)) {
            inputsValue[input.id] = input.value;
            err = true;
          } else {
            errMessage = "Неверный формат EMail.";
            err = false;
            return;
          }
        } else {
          inputsValue[input.id] = input.value;
        }

        if (err) {
          Api.login(inputsValue).then((response) => {
            if (response.status < 300) {
              this.submitCallback();
            } else {
              this.showError(errMessage);
            }
          });
        } else {
          this.showError(errMessage);
        }
      });
    }
  }

  showError(message: string) {
    if (this.errorLabel) {
      this.errorLabel.classList.remove("login-form__error-button--hidden");
      this.errorLabel.classList.add("login-form__error-button--visible");
      this.errorLabel.innerHTML = message;
    }
  }
}
