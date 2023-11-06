(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['audience_create.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n  <div class=\"sidebar\">\n    <div class=\"logo-container\">\n      <img src=\"../../static/img/logo_ad.png\" alt=\"Логотип\" class=\"logo\">\n      <div class=\"logo-text\">\n        <p>AdHub</p>\n      </div>\n    </div>\n    <div class=\"menu\">\n      <ul>\n        <p>Admin tools</p>\n        <li>\n          <img src=\"../../static/img/free-icon-home-7941430_2.png\" alt=\"Иконка\">\n          <a href=\"#\">Главная</a>\n        </li>\n        <li>\n          <img src=\"../../static/img/free-icon-front-end-6489421_2.png\" alt=\"Иконка\">\n          <a href=\"#\">Кампания</a>\n        </li>\n        <li>\n          <img src=\"../../static/img/free-icon-wallet-482541.png\" alt=\"Иконка\">\n          <a href=\"#\">Бюджет</a>\n        </li>\n        <li>\n          <img src=\"../../static/img/free-icon-people-3633274.png\" alt=\"Иконка\">\n          <a href=\"#\">Аудитория</a>\n        </li>\n        <li>\n          <img src=\"../../static/img/free-icon-cogwheel-6186867_2.png\" alt=\"Иконка\">\n          <a href=\"#\">Настройки</a>\n        </li>\n        <p>Profile</p>\n        <li>\n          <img src=\"../../static/img/free-icon-user-4743186.png\" alt=\"Иконка\">\n          <a href=\"#\">Профиль</a>\n        </li>\n        <li>\n          <img src=\"../../static/img/free-icon-notification-8860191.png\" alt=\"Иконка\">\n          <a href=\"#\">Уведомления</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n        <main class=\"main-content\">\n            <form class=\"createaudience\" action=\"/\" method=\"post\">\n            <div class=\"container\">\n                <div class=\"lefted-box\">\n                    \n                    <div class=\"info-card\">\n                        <div class=\"circle\" style=\"background: #FEAFAF;\"></div>\n                        <div class=\"text-title\">Аудитория 1</div>\n                        <div class=\"text-large\">А1</div>\n                        <div class=\"text-status\">Видеоигры</div>\n                        <!-- <div class=\"status-dot\" style=\"background: #FEAFAF;\"></div> -->\n                        <div class=\"arrows\"></div>\n                    </div>\n                    <button type=\"button\" class=\"custom-button\">\n                        <div class=\"button-content\">\n                            <div class=\"plus-icon\">\n                                <div class=\"circle-border\"></div>\n                                <div class=\"horizontal-line\"></div>\n                                <div class=\"vertical-line\"></div>\n                            </div>\n                            <div class=\"button-text\">Добавить</div>\n                        </div>\n                    </button>\n                </div>\n                \n    \n                <div class=\"centered-box\">\n                    <div class=\"lefted-block\">\n                    <div class=\"container-title\">\n                        <div class=\"label\">Регион</div>\n                        <div class=\"custom-dropdown\">\n                            <input type=\"text\" class=\"input-field\" placeholder=\"Поиск\">\n                            <div class=\"arrow-icon\">Россия &#8249;</div>\n                            <div class=\"dropdown-content\">\n                                <!-- <div>Россия</div> -->\n                                <input type=\"checkbox\" id=\"regions\">\n                                <label for=\"anyGender\">Любой</label>\n                                <!-- <div>Московская область</div>\n                                <div>Москва</div>\n                                <div>Балашиха</div>\n                                <div>Мытищи</div> -->\n                            </div>\n                        </div>\n                        <div class=\"other-element\"></div>\n                        \n                        </div>\n                        <div class=\"region-info\">\n                            <div class=\"region-title\">Выбранные регионы:\n                            <div class=\"region-details\">\n                                <div class=\"icon\">\n                                    <div>\n                                        <div></div>\n                                    </div>\n                                </div>\n                                <div class=\"region-name\">Балашиха</div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"right-block\">\n                        <div class=\"gradient-box\" id=\"textEntryContainer\">\n                            <label for=\"textEntry1\" class=\"text-entry-label\">\n                                <input type=\"text\" id=\"interests\" class=\"text-input\" placeholder=\"Введите ключевые фразы, через запятую\">\n                                \n                            </label>\n                        </div>\n                    \n                    <div class=\"gradient-box\" id=\"textEntryContainer\">\n                    <label for=\"textEntry1\" class=\"text-entry-label\">\n                        <input type=\"text\" id=\"keys\" class=\"text-input\" placeholder=\"Введите ключевые фразы, через запятую\">\n                        \n                    </label>\n                </div>\n                <div class=\"gradient-box\">\n                    <label for=\"textEntry2\" class=\"text-entry-label\">\n                        <input type=\"text\" id=\"tags\" class=\"text-input\" placeholder=\"Введите теги, через запятую\">\n                    </label>\n                </div>\n                <div class=\"demographics-info\">\n                    <div class=\"info-column\">\n                        <div class=\"info-item\">\n                            <div style=\"font-size: 18px;\">Демография</div>\n                        </div>\n                        <div class=\"info-item\">\n                            <div>Пол</div>\n                            <div>\n                                <input type=\"checkbox\" id=\"anyGender\">\n                                <label for=\"anyGendаer\">Любой</label>\n                            </div>\n                            <div>\n                                <input type=\"checkbox\" id=\"femaleGender\">\n                                <label for=\"femaleGender\">Женский</label>\n                            </div>\n                            <div>\n                                <input type=\"checkbox\" id=\"maleGender\">\n                                <label for=\"maleGender\">Мужской</label>\n                            </div>\n                        </div>\n                    </div> <!-- Закрытие первой колонки -->\n                \n                    <div class=\"info-column info-item-right\"> <!-- Начало второй колонки -->\n                        <div class=\"info-item\">\n                            <div>Возраст</div>\n                        </div>\n                        <div class=\"info-item\">\n                            <div class=\"age-range-wrapper\"> \n                                <div class=\"age-range\">\n                                    <input type=\"text\" id=\"min_age\" class=\"text-input\" placeholder=\"От\">\n                                </div>\n                                <div class=\"age-range\">\n                                    <input type=\"text\" id=\"max_age\" class=\"text-input\" placeholder=\"До\">\n                                </div>\n                            </div>\n                        </div>\n                    </div> \n                </div>\n                \n                </div>\n                \n                <div class=\"btn-container\">\n                    <button class=\"btn edit-btn\">\n                        <span class=\"btn-text\">Создать</span>\n                    </button>\n            \n                </div>\n                \n            </div>\n               \n            </div>\n            </form>\n        </main>\n</div>\n";
},"useData":true});
})();