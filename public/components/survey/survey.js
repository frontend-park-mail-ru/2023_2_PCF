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
        this.renderTemplate()
    }

    renderTemplate() {
        this.parent.innerHTML = Template(context);
        const rateBtn = document.querySelector('#rateBtn');
        const question = document.querySelector('#question');
        const closeBtn = document.querySelector('#closeBtn');
        const ratings = document.querySelectorAll('#ratings .rating');
        const errorBtn = document.querySelector('#errorBtn');
        errorBtn.classList.remove('survey__error-button--visible');
        errorBtn.classList.add('survey__error-button--hidden');
        let rated = false;

        ratings.forEach((rating, index) => {
            rating.addEventListener('click', () => {
                rated = true;
                // Сброс цвета всех блоков
                ratings.forEach(r => r.style.backgroundColor = '');
    
                // Закрашиваем текущий блок и все предыдущие
                for (let i = 0; i <= index; i++) {
                    ratings[i].style.backgroundColor = '#6C5DD2';
                }
            });
        });

        closeBtn.addEventListener('click',() => {
            console.log('surveyClosed postMessage sent');
            window.parent.postMessage('surveyClosed');
        });

        rateBtn.addEventListener('click', () => {
            if (rated) {

            } else {
                errorBtn.classList.remove('survey__error-button--hidden');
                errorBtn.classList.add('survey__error-button--visible');
                errorBtn.innerHTML = 'Пожалуйста, выберите оценку';
            }

        })
    }
}