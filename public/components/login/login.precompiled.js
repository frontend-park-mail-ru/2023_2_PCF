(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<form class=\"login\">\n        <h1>Начни свою рекламную кампанию</h1>\n        <p>Войти в аккаунт.</p>\n        <h2>Еще нет аккаунта? <a href=\"/signup\">Зарегистрироваться</a></h2>\n\n        <input type=\"email\" placeholder=\"Логин\" id=\"login\">\n        <input type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"error-label\"></div>\n        <button>Войти</button>\n</form>";
},"useData":true});
})();