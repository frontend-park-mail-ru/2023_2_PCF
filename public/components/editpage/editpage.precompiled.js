(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['editpage.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <div class=\"sidebar\">\n        <div class=\"logo-container\">\n            <img src=\"../../static/img/logo_ad.png\" alt=\"Логотип\" class=\"logo\">\n            <div class=\"logo-text\">\n                <p>AdHub</p>\n            </div>\n        </div>\n        <div class=\"menu\">\n                <ul>\n                    <p>Admin tools</p>\n                    <li>\n                        <img src=\"../../static/img/free-icon-home-7941430_2.png\" alt=\"Иконка\">\n                        <a href=\"/company\">Главная</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-front-end-6489421_2.png\" alt=\"Иконка\">\n                        <a href=\"/company\">Кампания</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-wallet-482541.png\" alt=\"Иконка\">\n                        <a href=\"#\">Бюджет</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-people-3633274.png\" alt=\"Иконка\">\n                        <a href=\"/audience\">Аудитория</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-cogwheel-6186867_2.png\" alt=\"Иконка\">\n                        <a href=\"#\">Настройки</a>\n                    </li>\n                    <p>Profile</p>\n                    <li>\n                        <img src=\"../../static/img/free-icon-user-4743186.png\" alt=\"Иконка\">\n                        <a href=\"/profile\">Профиль</a>\n                    </li>\n                    <li>\n                        <img src=\"../../static/img/free-icon-notification-8860191.png\" alt=\"Иконка\">\n                        <a href=\"#\">Уведомления</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <main class=\"editpage\">\n        <div class=\"editpage__container\">\n            <div class=\"centered-box\">\n            <div class=\"editpage__\">\n                <div class=\"editpage__left-block\">\n                    <form id=\"createAd\">\n                        <div class=\"editpage__container xlarge\">\n                            <input type=\"text\" class=\"text-input\" placeholder=\"Заголовок\" id=\"name\" maxlength=\"32\">\n                        </div>\n                        <div class=\"editpage__container xxlarge\">\n                            <input class=\"text-input\" placeholder=\"Описание\" id=\"description\" maxlength=\"950\">\n                        </div>\n                        <div class=\"editpage__container xlarge\">\n                            <input type=\"text\" class=\"text-input\" placeholder=\"Ссылка на сайт\" id=\"website_link\">\n                        </div>\n                        <div style=\"display: flex;\">\n                            <div class=\"editpage__container small\">\n                                <input type=\"text\" class=\"text-input\" placeholder=\"Бюджет\" id=\"budget\">\n                            </div>\n                            <div class=\"editpage__container medium\">\n                                <select type=\"text\" class=\"text-input dropdown\" placeholder=\"Аудитория\" id=\"target_id\">\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"editpage__flex-row\">\n                            <div class=\"editpage__container large\">\n                                <input type=\"text\" class=\"text-input\" id=\"file-name-display\" placeholder=\"Медиафайлы\">\n                            </div>\n                            <label class=\"editpage__button-container\" for=\"file-upload\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n                                    <rect x=\"1\" y=\"1\" width=\"18\" height=\"18\" rx=\"6\" stroke=\"white\" stroke-width=\"2\"/>\n                                    <line x1=\"3\" y1=\"10\" x2=\"17\" y2=\"10\" stroke=\"white\" stroke-width=\"2\"/>\n                                    <line x1=\"10\" y1=\"3\" x2=\"10\" y2=\"17\" stroke=\"white\" stroke-width=\"2\"/>\n                                </svg>\n                                <div class=\"editpage__button-text\">Загрузить</div>\n                                <input id=\"file-upload\" type=\"file\" style=\"display: none;\" />\n                            </label>\n                        \n                        </div>\n                    </form>\n                </div>\n                </div>\n                <div class=\"editpage__box\">\n                    <button class=\"editpage__action-box\" id=\"submitBtn\">\n                        <div class=\"editpage__bold-label\">Редактировать</div>\n                    </button>\n                    <button class=\"editpage__сancel-box\" id=\"cancelBtn\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\">\n                            <rect x=\"1.5\" y=\"1\" width=\"18\" height=\"18\" rx=\"6\" stroke=\"white\" stroke-width=\"2\"/>\n                            <line x1=\"3.5\" y1=\"10\" x2=\"17.5\" y2=\"10\" stroke=\"white\" stroke-width=\"2\"/>\n                        </svg>\n                        <div class=\"editpage__bold-label\">Отменить</div>\n                    </button>\n                </div>\n\n\n                            <div class=\"editpage__right-block\">\n                    <div class=\"editpage__label\">Предпросмотр:</div>\n                    <label for=\"photoUpload\" class=\"editpage__photo-upload-label\">\n                        <img class=\"editpage__gradient-box editpage__preview-image\"></img>\n                    </label>\n                    <div class=\"editpage__label\">Название:\n                        <div class=\"editpage__preview-label-title\">\n                            <p class=\"editpage__preview-title\"></p>\n                        </div>\n                    </div>\n                    <div class=\"editpage__label\">Описание:\n                        <div class=\"editpage__preview-label-description\">\n                            <p class=\"editpage__preview-desription\"></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </main>\n\n\n</div>\n";
},"useData":true});
})();