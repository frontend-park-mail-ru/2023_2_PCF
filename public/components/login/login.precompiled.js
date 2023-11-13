(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
<<<<<<< HEAD
    return "<form class=\"login-form\">\n    <p class=\"login-form__name\">Начни свою рекламную кампанию</p>\n    <h1 class=\"login-form__header\">Войти в аккаунт</h1>\n    <p class=\"login-form__paragraph\">Еще нет аккаунта? <a class=\"login-form__link\" href=\"/signup\">Зарегистрироваться</a></p>\n    <div class=\"login-form__input\">\n        <input type=\"email\" placeholder=\"Логин\" id=\"login\">\n        <input type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"login-form__error-button\"></div>\n    </div>\n    <button class=\"login-form__login-button\">Войти</button>\n</form>";
=======
    return "<form class=\"login\">\n    <p class=\"name-p\">Начни свою рекламную кампанию</p>\n    <h1>Войти в аккаунт.</h1>\n    <p>Еще нет аккаунта? <a href=\"/signup\">Зарегистрироваться</a></p>\n    <div class=\"container-input\">\n        <input type=\"email\" placeholder=\"Логин\" id=\"login\">\n        <input type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"error-label\"></div>\n    </div>\n    <button>Войти</button>\n</form>";
>>>>>>> 4cbdecbc8f6a3061b0214d920531121013e567ed
},"useData":true});
})();