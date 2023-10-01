(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<img src=\"../../static/img/logo_ad.png\" alt=\"Логотип\" class=\"logo\">\n<form class=\"login\">\n        <h1>Начни свою рекламную кампанию</h1>\n        <p>Войти в аккаунт.</p>\n        <p>Еще нет аккаунта? <a href=\"#\">Зарегистрироваться</a></p>\n\n        <input type=\"text\" placeholder=\"Логин\">\n        <input type=\"password\" placeholder=\"Пароль\">\n        <button>Войти</button>\n</form>";
},"useData":true});
})();