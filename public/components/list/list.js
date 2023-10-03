import { Api } from "../../modules/api.js";

export class List {
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
        link.href = '../../static/css/list.css';
        document.head.appendChild(link);
        this.parent.innerHTML = Handlebars.templates["list.hbs"]();
    }
/*
    onSubmit(event) {
        event.preventDefault();
        const inputs = this.form.querySelectorAll("input");
        const inputsValue = {};
        inputs.forEach((input) => {
            inputsValue[input.id] = input.value;
        });

        Api.login(inputsValue).then(
            (response) => {
                if (response.status < 300) {
                    this.SubmitCallback();
                } else {
                    this.showError("Неверный e-mail или пароль")
                }
            }
        );
    }

    showError(message){
        this.errorLabel.style.visibility = "visible";
        this.errorLabel.innerHTML = message;
    }*/
}
