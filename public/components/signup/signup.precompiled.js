(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['signup.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"signup\">\n    <h1>Начни свою рекламную кампанию</h1>\n    <h2>Создать новый аккаунт</h2>\n    <p>Уже есть аккаунт? <a href=\"/login\">Войти</a></p>\n\n    <input type=\"text\" placeholder=\"Имя\">\n    <input type=\"text\" placeholder=\"Фамилия\">\n    <input type=\"email\" placeholder=\"Почта\">\n    <input type=\"password\" placeholder=\"Пароль\">\n    <div class=\"error-label\"></div>\n    <button>Создать аккаунт</button>\n</form>";
},"useData":true});
})();