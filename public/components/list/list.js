import { Api } from "../../modules/api.js";
const STATIC_USER_NAME = "user1"
// const userAds = [];

export class List {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null
    }

   render() {
      /*  Api.getAds(STATIC_USER_NAME).then(
            (response) => {
                if (response.status < 300) {
                    const ads = response.parsedJson;
                    userAds.push(...ads)
                    this.SubmitCallback();
                } else {
                    this.showError("Неверные данные")
                }
            }
        ) */
        const userAds = [
            {
                Id: "1",
                Name: "Name1",
                Description: "Desc1",
                Sector: "Sec1",
            },
            {
                Id: "2",
                Name: "Name2",
                Description: "Desc2",
                Sector: "Sec2",
            },
        ];
        const context = {
            userAds: userAds
        };
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../static/css/list.css';
        document.head.appendChild(link);
        this.parent.innerHTML = Handlebars.templates["list.hbs"](context);
    }
}
