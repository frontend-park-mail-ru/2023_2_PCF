(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['survey.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"survey\">\n    <div class=\"survey__question\" id=\"question\">\n        <h1>Насколько было удобно пользовать AdHub?</h1>\n    </div>\n    <div class=\"survey__ratings\" id=\"ratings\">\n        <div class=\"rating\" data-value=\"1\">1</div>\n        <div class=\"rating\" data-value=\"2\">2</div>\n        <div class=\"rating\" data-value=\"3\">3</div>\n        <div class=\"rating\" data-value=\"4\">4</div>\n        <div class=\"rating\" data-value=\"5\">5</div>\n    </div>\n    <div class=\"survey__rate-button\" id=\"rateBtn\">\n        <button>Оценить</button>\n    </div>\n</div>\n";
},"useData":true});
})();