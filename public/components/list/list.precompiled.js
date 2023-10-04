(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['list.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"Id") || (depth0 != null ? lookupProperty(depth0,"Id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Id","hash":{},"data":data,"loc":{"start":{"line":47,"column":40},"end":{"line":47,"column":48}}}) : helper)))
    + "\">\n                        <div class=\"currentAdElContainer\">\n                            <div class=\"currentAdElInnerBox\">\n                                <div class=\"currentAdElTopDecoration\"></div>\n                                <div class=\"currentAdElInnerBackground\"></div>\n                            </div>\n                            <div class=\"currentAdElDay\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"Id") || (depth0 != null ? lookupProperty(depth0,"Id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Id","hash":{},"data":data,"loc":{"start":{"line":53,"column":56},"end":{"line":53,"column":64}}}) : helper)))
    + "</div>\n                            <div class=\"currentAdElWeekday\">Wed</div>\n                            <div class=\"currentAdElTitle\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":55,"column":58},"end":{"line":55,"column":68}}}) : helper)))
    + "</div>\n                            <div class=\"currentAdElSubtitle\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"Sector") || (depth0 != null ? lookupProperty(depth0,"Sector") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Sector","hash":{},"data":data,"loc":{"start":{"line":56,"column":61},"end":{"line":56,"column":73}}}) : helper)))
    + "</div>\n                        </div>\n                        </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n    <div class=\"sidebar\">\n        <div class=\"logo-container\">\n            <img src=\"../../static/img/logo_ad.png\" alt=\"Логотип\" class=\"logo\">\n            <div class=\"logo-text\">\n                <p>AdHub</p>\n            </div>\n        </div>\n        <div class=\"menu\">\n            <ul>\n                <li>\n                    <img src=\"../../static/img/free-icon-home-7941430_2.png\" alt=\"Иконка\">\n                    <a href=\"#\">Главная</a>\n                </li>\n                <li>\n                    <img src=\"../../static/img/free-icon-front-end-6489421_2.png\" alt=\"Иконка\">\n                    <a href=\"#\">Кампания</a>\n                </li>\n                <li>\n                    <img src=\"../../static/img/free-icon-wallet-482541.png\" alt=\"Иконка\">\n                    <a href=\"#\">Бюджет</a>\n                </li>\n                <li>\n                    <img src=\"../../static/img/free-icon-people-3633274.png\" alt=\"Иконка\">\n                    <a href=\"#\">Аудитория</a>\n                </li>\n                <li>\n                    <img src=\"../../static/img/free-icon-cogwheel-6186867_2.png\" alt=\"Иконка\">\n                    <a href=\"#\">Настройки</a>\n                </li>\n                <li>\n                    <img src=\"../../static/img/free-icon-user-4743186.png\" alt=\"Иконка\">\n                    <a href=\"#\">Профиль</a>\n                </li>\n                <li>\n                    <img src=\"../../static/img/free-icon-notification-8860191.png\" alt=\"Иконка\">\n                    <a href=\"#\">Уведомления</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <main class=\"main-content\">\n        <div class=\"container\">\n            <div class=\"lefted-box\">\n                <div class=\"adlayout\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"userAds") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":20},"end":{"line":59,"column":29}}})) != null ? stack1 : "")
    + "                        <button class=\"edit-button\">Добавить</button>\n\n\n                    <div>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"centered-box\">\n                <div class=\"image-container\">\n                    <img src=\"../../static/img/image5.png\" alt=\"Фото\">\n                </div>\n                <div class=\"description\">\n                    <h2>Описание</h2>\n                    <div class=\"text\">\n                        <p>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"mainDescription") || (depth0 != null ? lookupProperty(depth0,"mainDescription") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"mainDescription","hash":{},"data":data,"loc":{"start":{"line":76,"column":27},"end":{"line":76,"column":48}}}) : helper)))
    + "</p>\n                </div>\n                <button class=\"edit-button\">Изменить</button>   \n\n            </div>\n        </div>\n    </main>\n</div>";
},"useData":true});
})();