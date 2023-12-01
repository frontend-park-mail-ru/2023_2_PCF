import Api from "../../modules/api.js";
import Validate from "../../modules/validate.js";
import "../../static/css/signup.css";
import Template from "./signup.hbs";

export default class Signup {
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
    this.parent.innerHTML = Template({});
    this.form = this.parent.getElementsByClassName(
      "signup-form"
    )[0] as HTMLFormElement;
    this.form.addEventListener("submit", this.onSubmit.bind(this));
    this.errorLabel = this.form.getElementsByClassName(
      "signup-form__error-label"
    )[0] as HTMLElement;
    this.errorLabel.classList.add("signup-form__error-label--hidden");
  }

  onSubmit(event: any) {
    event.preventDefault();
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
            return;
          } else {
            errMessage = "Неверный пароль. Введите пароль от 6ти символов.";
            err = false;
            return;
          }
        } else if (input.id === "login") {
          if (Validate.Email(input.value)) {
            inputsValue[input.id] = input.value;
            err = true;
            return;
          } else {
            errMessage = "Неверный формат EMail.";
            err = false;
            return;
          }
        } else {
          inputsValue[input.id] = input.value;
        }
      });

      if (err) {
        Api.signup(inputsValue).then((response) => {
          if (response.status < 300) {
            this.submitCallback();
          } else {
            this.showError(errMessage);
          }
        });
      } else {
        this.showError(errMessage);
      }
    }
  }

  showError(message: string) {
    if (this.errorLabel) {
      this.errorLabel.classList.remove("signup-form__error-label--hidden");
      this.errorLabel.classList.add("signup-form__error-label--visible");
      this.errorLabel.innerHTML = message;
    }
  }
}
