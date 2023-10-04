(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<form class=\"login\">\n        <p class=\"name-p\">Начни свою рекламную кампанию</p>\n        <h1>Войти в аккаунт.</h1>\n        <p>Еще нет аккаунта? <a href=\"/signup\">Зарегистрироваться</a></p>\n        <div class=\"container-input\">\n        <input type=\"email\" placeholder=\"Логин\" id=\"login\">\n        <input type=\"password\" placeholder=\"Пароль\" id=\"password\">\n        <div class=\"error-label\"></div>\n        </div>\n        <button>Войти</button>\n</form>";
},"useData":true});
})();