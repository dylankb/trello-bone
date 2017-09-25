(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n<a class=\"edit-card\">\n  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n</a>\n";
},"useData":true});
templates['list'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"list-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n<ul class=\"cards-view\">\n\n</ul>\n<a class=\"add-card\" href=\"#\">Add a card...</a>\n";
},"useData":true});
templates['mainHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"left-group\">\n  <div class=\"header-button header-md back-button\">\n    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button search\">\n    <input class=\"search-input\" type=\"text\">\n  </div>\n</div>\n\n<a class=\"logo\" href=\"/\">\n  <span class=\"logo-icon\"></span>\n</a>\n\n<div class=\"right-group\">\n  <div class=\"header-button header-md plus-button\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button header-md notifications\">\n    <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button header-md user-badge\">D\n  </div>\n</div>\n";
},"useData":true});
templates['newCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<textarea class=\"new-card-textarea\" cols=\"39\" rows=\"4\"></textarea>\n\n<fieldset class=\"controls\">\n  <input type=\"submit\" value=\"Add\">\n  <button class=\"cancel\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</fieldset>\n";
},"useData":true});
})();