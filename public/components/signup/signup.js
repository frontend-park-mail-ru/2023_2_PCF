import { Api } from "../../modules/api.js";

export class Signup {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null
    }

    render() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../static/css/signup.css';
        document.head.appendChild(link);
        this.parent.innerHTML = Handlebars.templates["signup.hbs"]();
        this.form = this.parent.getElementsByClassName("signup")[0];
        this.form.addEventListener("submit", this.onSubmit.bind(this));
        this.errorLabel = this.form.getElementsByClassName("error-label")[0];
        this.errorLabel.style.visibility = "hidden";
    }

    onSubmit(event) {
        event.preventDefault();
        const inputs = this.form.querySelectorAll("input");
        const inputsValue = {};
        inputs.forEach((input) => {
            inputsValue[input.id] = input.value;
        });

        Api.signup(inputsValue).then(
            (response) => {
                if (response.status < 300) {
                    this.SubmitCallback();
                } else {
                    this.showError("Неверные данные")
                }
            }
        );
    }

    showError(message){
        this.errorLabel.style.visibility = "visible";
        this.errorLabel.innerHTML = message;
    }
}
