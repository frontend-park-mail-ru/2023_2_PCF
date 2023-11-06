import Api from '../../modules/api.js';

const context = {
  userAds: [],
  mainDescription: null,
};

export default class List {
  constructor(parent = document.body) {
    this.parent = parent;
  }

  render() {
    Api.getAdsList()
      .then((data) => {
        context.userAds = data; // Устанавливаем полученные объявления в context
        this.renderTemplate();
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../static/css/list.css';
    document.head.appendChild(link);
  }

  renderTemplate() {
    this.parent.innerHTML = Handlebars.templates['list.hbs'](context);
    
    // Очищаем существующие кнопки перед добавлением новых
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = '';

    // Создаем кнопки на основе количества объявлений
    context.userAds.forEach((ad, index) => {
      const button = document.createElement('button');
      button.textContent = `Кнопка ${index + 1}`;
      button.addEventListener('click', () => {
        context.mainDescription = ad.Description;
        this.renderTemplate();
      });
      buttonContainer.appendChild(button);
    });
  }
}
