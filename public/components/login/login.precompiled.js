(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<form class=\"login\">\n        <h1>Начни свою рекламную кампанию</h1>\n        <p>Войти в аккаунт.</p>\n        <p>Еще нет аккаунта? <a href=\"/signup\">Зарегистрироваться</a></p>\n\n        <input type=\"text\" placeholder=\"Логин\" id=\"login\">\n        <input type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"error-label\"></div>\n        <button>Войти</button>\n</form>";
},"useData":true});
})();