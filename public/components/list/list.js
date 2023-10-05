import { Api } from "../../modules/api.js";
let userAds = [];
Api.getAds().then(data => {
    userAds = data;
    console.log(userAds); 
}).catch(error => {
    console.error("Ошибка:", error);
});
// console.log(userAds)
const context = {
    userAds: null,
    mainDescription: null
};

// const userAds = [
//     {
//         Id: "1",
//         Name: "Name1",
//         Description: "Desc1",
//         Sector: "Sec1",
//     },
//     {
//         Id: "2",
//         Name: "Name2",
//         Description: "Desc2",
//         Sector: "Sec2",s
//     },
//     {
//         Id: "3",
//         Name: "Name3",
//         Description: "Desc3",
//         Sector: "Sec3",
//     },
//     {
//         Id: "4",
//         Name: "Name4",
//         Description: "Desc4",
//         Sector: "Sec4",
//     },
//     {
//         Id: "5",
//         Name: "Name5",
//         Description: "Desc5",
//         Sector: "Sec5",
//     },
// ]; 
export class List {
    constructor(parent = document.body, submitCallback = () => {}) {
        this.parent = parent;
        this.SubmitCallback = submitCallback;
        this.form = null;
        this.errorLabel = null
    }



   render() {
        // // Api.getAds().then(
        //     (response) => {
        //         if (response.status < 300) {
        //             const ads = response.parsedJson;
        //             userAds.push(...ads)
        //             this.SubmitCallback();
        //         } else {
        //             this.showError("Неверные данные")
        //         }
        //     }
        // // )

       context.userAds = userAds
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../../static/css/list.css';
        document.head.appendChild(link);
        this.renderTemplate()

    }
    renderTemplate() {
        this.parent.innerHTML = Handlebars.templates["list.hbs"](context);
        // Обработчик для "Кнопка 1"
        document.getElementById("1").addEventListener("click", () => {
            context.mainDescription = userAds[0].Description
            this.renderTemplate();
        });

        // Обработчик для "Кнопка 2"
        document.getElementById("2").addEventListener("click", () => {
            context.mainDescription = userAds[1].Description
            this.renderTemplate();
        });
        // Обработчик для "Кнопка 3"
        document.getElementById("3").addEventListener("click", () => {
            context.mainDescription = userAds[2].Description
            this.renderTemplate();
        });
        // Обработчик для "Кнопка 4"
        document.getElementById("4").addEventListener("click", () => {
            context.mainDescription = userAds[3].Description
            this.renderTemplate();
        });
        // Обработчик для "Кнопка 5"
        document.getElementById("5").addEventListener("click", () => {
            context.mainDescription = userAds[4].Description
            this.renderTemplate();
        });
    }
}




