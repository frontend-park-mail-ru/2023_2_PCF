import { Api } from "../../modules/api.js";

export class Login {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null
    }

    render() {
        history.pushState('', 'AdHub', "/login");
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../static/css/login.css';
        document.head.appendChild(link);
        this.parent.innerHTML = Handlebars.templates["login.hbs"]();
        this.form = this.parent.getElementsByClassName("login")[0];
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

        Api.login(inputsValue).then(
            (response) => {
                if (response.status < 300) {
                    const expiresDate = new Date();
expiresDate.setHours(expiresDate.getHours() + 10);

                    setCookie("session_token", response.parsedJson.token, {
                      expires: expiresDate,
                    });
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
    }
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    // add other defaults here if necessary
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
