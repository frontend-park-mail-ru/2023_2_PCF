(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"container\">\n        <div class=\"sidebar\">\n            <div class=\"logo-container\">\n                <img src=\"../../static/img/logo_ad.png\" alt=\"Логотип\" class=\"logo\">\n                <div class=\"logo-text\">\n                    <p>AdHub</p>\n                </div>\n            </div>\n            <div class=\"menu\">\n                <ul>\n                    <p>Admin tools</p>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-home-7941430_2.png\" alt=\"Иконка\">\n                            <a href=\"/company\">Главная</a>\n                        </div>  \n                    </li>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-front-end-6489421_2.png\" alt=\"Иконка\">\n                            <a href=\"/company\">Кампания</a>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-wallet-482541.png\" alt=\"Иконка\">\n                            <a href=\"#\">Бюджет</a>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-people-3633274.png\" alt=\"Иконка\">\n                            <a href=\"/audience\">Аудитория</a>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-cogwheel-6186867_2.png\" alt=\"Иконка\">\n                            <a href=\"#\">Настройки</a>\n                        </div>\n                    </li>\n                    <p>Profile</p>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-user-4743186.png\" alt=\"Иконка\">\n                            <a href=\"/profile\">Профиль</a>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"menu-element\">\n                            <img src=\"../../static/img/free-icon-notification-8860191.png\" alt=\"Иконка\">\n                            <a href=\"#\">Уведомления</a>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        </div>\n        <main class=\"main-content\">\n                <div class=\"container\">\n                    <div class=\"centered-box\">\n                        <div class=\"text-info\">\n                            <img id=\"b_avatar\"></img>\n                            <div class=\"text-container\">\n                                <h1 id=\"b_fname\">Название компании</h1>\n                                <h2 id=\"b_company\">ООО “Яндекс”, младший менеджер в отделе продвижения</h2>\n                                <h2 id=\"b_login\">yandexMP1202@ya-corp.ru</h2>\n                            </div>\n                        </div>\n                        <div class=\"info-container\">\n                            <h1>Общие сведения</h1>\n                            <div class=\"wrapper\">\n                                <div class=\"card card-large\">\n                                    <div class=\"title\">Бюджет</div>\n                                    <div class=\"line\"></div>\n                                    <div class=\"border\">\n                                        <div id=\"av_budget\" style=\"margin-left: 20%;\"></div>\n                                    </div>\n                                    <img class=\"icon\" src=\"../../static/img/free-icon-wallet-482541-3.png\" />\n                                    <!-- ... остальные элементы внутри блока ... -->\n                                </div>\n                                <div class=\"card card-medium\" style=\"margin-left:7%\">\n                                    <div class=\"title\">Объявления</div>\n                                    <div class=\"line\"></div>\n                                    <div class=\"border\">\n                                        <div id=\"ads\" style=\"margin-left: 20%;\"></div>\n                                    </div>\n                                    <img class=\"icon\" src=\"../../static/img/free-icon-wallet-482541-2.png\" />\n                                    <!-- ... остальные элементы внутри блока ... -->\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer-container\">\n                            <h1>Общие сведения</h1>\n                            <div class=\"wrapper-card\"></div>\n                        </div>\n                    </div>\n\n                    \n                    <div class=\"lefted-box\">  \n                        <h1>Редактирование профиля</h1>\n                        <form id=\"updateUserForm\" method=\"post\" enctype=\"multipart/form-data\">\n                            <label for=\"avatar\" class=\"photo-upload-label\" method=\"post\" enctype=\"multipart/form-data\">\n                               <input type=\"file\" id=\"avatar\" class=\"file-input\" name=\"avatar\" accept=\"image/*\">\n                               <div class=\"gradient-box\">Выберите фото</div>\n                            </label>\n                            <div class=\"input-container\">\n                                <!-- <label for=\"name1\" class=\"input-label\">Имя</label> -->\n                                <input type=\"text\" name=\"f_name\" class=\"input-field\" placeholder=\"Введите ваше имя\">\n                            </div>\n                        \n                            <div class=\"input-container\">\n                             <!-- <label for=\"name2\" class=\"input-label\">Имя</label> -->\n                                <input type=\"text\" name=\"l_name\" class=\"input-field\" placeholder=\"Введите вашу фамилию\">\n                            </div>\n                        \n                            <div class=\"input-container\">\n                            <!-- <label for=\"name1\" class=\"input-label\">Имя</label> -->\n                                <input type=\"text\" name=\"s_name\" class=\"input-field\" placeholder=\"Введите название компании\">\n                            </div>\n\n                            <div class=\"input-container\">\n                            <!-- <label for=\"name3\" class=\"input-label\">Имя</label> -->\n                                <input type=\"text\" id=\"login\" class=\"input-field\" placeholder=\"Введите вашу почту\">\n                            </div>\n                        \n                            <div class=\"input-container\">\n                            <!-- <label for=\"name4\" class=\"input-label\">Имя</label> -->\n                                <input type=\"text\" id=\"password\" class=\"input-field\" placeholder=\"Пароль\">\n                            </div>\n                    \n                            <div class=\"button-container\" style=\"margin-left:8px\">\n                                <button class=\"save-button\" type=\"submit\">Сохранить</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n        </main>\n    </div>";
},"useData":true});
})();