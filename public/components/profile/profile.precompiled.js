(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"container\">\n        <div class=\"sidebar\">\n            <div class=\"logo-container\">\n                <img src=\"../../static/img/logo_ad.png\" alt=\"Логотип\" class=\"logo\">\n                <div class=\"logo-text\">\n                    <p>AdHub</p>\n                </div>\n            </div>\n            <div class=\"menu\">\n                <ul>\n                    <p>Admin tools</p>\n                    <li>\n                        <img src=\"../../static/img/free-icon-home-7941430_2.png\" alt=\"Иконка\">\n                        <a href=\"#\">Главная</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-front-end-6489421_2.png\" alt=\"Иконка\">\n                        <a href=\"#\">Кампания</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-wallet-482541.png\" alt=\"Иконка\">\n                        <a href=\"#\">Бюджет</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-people-3633274.png\" alt=\"Иконка\">\n                        <a href=\"#\">Аудитория</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-cogwheel-6186867_2.png\" alt=\"Иконка\">\n                        <a href=\"#\">Настройки</a>\n                    </li>\n                    <p>Profile</p>\n                    <li>\n                        <img src=\"../../static/img/free-icon-user-4743186.png\" alt=\"Иконка\">\n                        <a href=\"#\">Профиль</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-notification-8860191.png\" alt=\"Иконка\">\n                        <a href=\"#\">Уведомления</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <main class=\"main-content\">\n            <div class=\"container\">\n\n    \n                <div class=\"centered-box\">\n                    <div class=\"text-container\">\n                        <h1>Название компании</h1>\n                        <h2>ООО “Яндекс”, младший менеджер в отделе продвижения</h2>\n                        <h3>yandexMP1202@ya-corp.ru</h3>\n                    </div>\n                    <div class=\"info-container\">\n                        <h1>Общие сведения</h1>\n                        <div class=\"wrapper\">\n                            <div class=\"card card-large\">\n                                <div class=\"title\">Бюджет</div>\n                                <div class=\"line\"></div>\n                                <div class=\"border\"></div>\n                                <img class=\"icon\" src=\"../../static/img/free-icon-wallet-482541-3.png\" />\n                                <!-- ... остальные элементы внутри блока ... -->\n                            </div>\n                            <div class=\"card card-medium\">\n                                <div class=\"title\">Объявления</div>\n                                <div class=\"line\"></div>\n                                <div class=\"border\"></div>\n                                <img class=\"icon\" src=\"../../static/img/free-icon-wallet-482541-2.png\" />\n                                <!-- ... остальные элементы внутри блока ... -->\n                            </div>\n                            <div class=\"card card-small\">\n                                <div class=\"title\">Кампании</div>\n                                <div class=\"line\"></div>\n                                <div class=\"border\"></div>\n                                <img class=\"icon\" src=\"../../static/img/free-icon-front-end-6489421 2-2.png\" />\n                                <!-- ... остальные элементы внутри блока ... -->\n                            </div>\n                        </div>\n                </div>\n                <div class=\"footer-container\">\n                    <h1>Общие сведения</h1>\n                    <div class=\"wrapper-card\">\n                    <div class=\"info-card\">\n                        <img class=\"card-image\" src=\"../../static/img/image6.png\" />\n                        <div class=\"card-title\">Такси</div>\n                        <div class=\"card-subtitle\">Остатоок средств: 25.000,00 ₽</div>\n                    </div>\n                    \n                    <div class=\"info-card\">\n                        <img class=\"card-image\" src=\"../../static/img/image6.png\" />\n                        <div class=\"card-title\">Такси</div>\n                        <div class=\"card-subtitle\">Остатоок средств: 25.000,00 ₽</div>\n                    </div>\n                \n                    <div class=\"info-card\">\n                        <img class=\"card-image\" src=\"../../static/img/image5.png\" />\n                        <div class=\"card-title\">Такси</div>\n                        <div class=\"card-subtitle\">Остатоок средств: 25.000,00 ₽</div>\n                    </div>\n                </div>\n                </div>\n\n                \n            </div>\n            <div class=\"lefted-box\">\n                <h1>Редактирование\n                    профиля</h1>\n\n                    <div class=\"input-container\">\n                        <!-- <label for=\"name1\" class=\"input-label\">Имя</label> -->\n                        <input type=\"text\" id=\"name1\" class=\"input-field\" placeholder=\"Введите ваше имя\">\n                    </div>\n                    \n                    <div class=\"input-container\">\n                        <!-- <label for=\"name2\" class=\"input-label\">Имя</label> -->\n                        <input type=\"text\" id=\"name2\" class=\"input-field\" placeholder=\"Введите вашу фамилию\">\n                    </div>\n                    \n                    <div class=\"input-container\">\n                        <!-- <label for=\"name3\" class=\"input-label\">Имя</label> -->\n                        <input type=\"text\" id=\"name3\" class=\"input-field\" placeholder=\"Введите вашу почту\">\n                    </div>\n                    \n                    <div class=\"input-container\">\n                        <!-- <label for=\"name4\" class=\"input-label\">Имя</label> -->\n                        <input type=\"text\" id=\"name4\" class=\"input-field\" placeholder=\"Как дела?\">\n                    </div>\n                \n                    <div class=\"button-container\">\n                        <button class=\"custom-button\">Сохранить</button>\n                    </div>\n            </div>\n        </main>\n    </div>";
},"useData":true});
})();