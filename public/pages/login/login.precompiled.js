(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"login_body\">\n    <form class=\"login-form\">\n    <p class=\"login-form__name\">Начни свою рекламную кампанию</p>\n    <h1 class=\"login-form__header\">Войти в аккаунт</h1>\n    <p class=\"login-form__paragraph\">Еще нет аккаунта? <a class=\"login-form__link\" href=\"/signup\">Зарегистрироваться</a></p>\n    <div class=\"login-form__input\">\n        <input type=\"email\" placeholder=\"Логин\" id=\"login\">\n        <input type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"login-form__error-button\"></div>\n    </div>\n    <button class=\"login-form__login-button\">Войти</button>\n</form>\n</div>\n";
},"useData":true});
})();