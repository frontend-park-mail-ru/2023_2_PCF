import Api from '../../modules/api.js';
import Template from './survey.hbs';
import '../../static/css/survey.css';

const context = {
    type: String,
    question: String,
    currentAd: 1,
    uniqueLink: String,
};

export default class Survey {
    constructor(parent = document.body) {
        this.parent = parent;
    }

    render() {
        // Api.getSurvey()
        //     .then((data) => {
        //         context.userAds = data; // Устанавливаем полученные объявления в context
        //         this.renderTemplate();
        //     })
        //     .catch((error) => {
        //         console.error('Ошибка:', error);
        //     });
        this.renderTemplate()
    }

    renderTemplate() {
        this.parent.innerHTML = Template(context);
        const rateBtn = document.querySelector('#rateBtn');
        const question = document.querySelector('#question')
        const ratings = document.querySelector('#ratings')

    }
}