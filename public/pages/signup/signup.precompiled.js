(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['signup.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"signup_body\">\n    <form class=\"signup-form\">\n        <p class=\"signup-form__name\">Начни свою рекламную кампанию</p>\n        <h1 class=\"signup-form__header\">Создать новый аккаунт</h1>\n        <p class=\"signup-form__paragraph\">Уже есть аккаунт? <a class=\"signup-form__link\" href=\"/login\">Войти</a></p>\n        <div class=\"signup-form__name-inputs\">\n            <input class=\"signup-form__input\" type=\"text\" placeholder=\"Имя\" id=\"f_name\">\n            <input class=\"signup-form__input\" type=\"text\" placeholder=\"Фамилия\" id=\"l_name\">\n        </div>\n        <input class=\"signup-form__input\" type=\"email\" placeholder=\"Почта\" id=\"login\">\n        <input class=\"signup-form__input\" type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"signup-form__error-label\"></div>\n        <div class=\"signup-form__buttons\">\n            <button class=\"signup-form__with-button signup-form__button\">Войти с помощью</button>\n            <button class=\"signup-form__create-button signup-form__button\">Создать аккаунт</button>\n        </div>\n    </form>\n</div>\n";
},"useData":true});
})();