(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n<a class=\"card-title-edit\">\n  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n</a>\n";
},"useData":true});
templates['cardDetail'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"card-description-label-container\">\n        <div class=\"spacer-column\"></div>\n        <div class=\"card-description-label\">\n          <span>Description</span>\n          <a class=\"card-edit-description\" href=\"#\">Edit</a>\n        </div>\n      </div>\n      <div class=\"spacer-column\"></div>\n      <p class=\"card-description\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.description : stack1), depth0))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"spacer-column\"></div>\n      <span class=\"card-description-image\">\n        <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n      </span>\n      <a class=\"card-add-description\" href=\"#\">Edit the description...</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"modal-overlay\">\n</div>\n<form class=\"card-detail\"\n      method=\"put\"\n      action=\"/lists/"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.collection : stack1)) != null ? stack1.List : stack1)) != null ? stack1.attributes : stack1)) != null ? stack1.id : stack1), depth0))
    + "/cards/"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.id : stack1), depth0))
    + "\"\n>\n  <div class=\"card-title-section\">\n    <div class=\"spacer-column\">\n      <span class=\"card-title-image\">\n        <i class=\"fa fa-window-maximize\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <textarea class=\"card-title-textarea-detail\" name=\"title\" rows=\"1\" cols=\"35\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.title : stack1), depth0))
    + "</textarea>\n    <span class=\"card-close\">\n      <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div class=\"card-description-section\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"spacer-column\"></div>\n  <div class=\"card-edit-description-container\">\n\n  </div>\n</form>\n";
},"useData":true});
templates['cardEditDescription'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<textarea class=\"card-edit-description-container-textarea\" cols=\"33\" rows=\"7\" name=\"description\" placeholder=\"Add a description...\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n<fieldset class=\"controls\">\n  <input class=\"button button-confirm\" type=\"submit\" value=\"Save\">\n  <button class=\"button button-cancel\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</fieldset>\n";
},"useData":true});
templates['cardEditTitle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"modal-overlay\">\n</div>\n<form class=\"card-edit-title-form\"\n      action=\"/lists/"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.collection : stack1)) != null ? stack1.List : stack1)) != null ? stack1.attributes : stack1)) != null ? stack1.id : stack1), depth0))
    + "/cards/"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.id : stack1), depth0))
    + "\"\n      method=\"put\"\n>\n  <textarea class=\"card-edit-textarea\" cols=\"33\" rows=\"7\" name=\"title\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.title : stack1), depth0))
    + "</textarea>\n  <fieldset class=\"controls\">\n    <input class=\"button button-confirm\" type=\"submit\" value=\"Save\">\n  </fieldset>\n</form>\n";
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
    return "<textarea class=\"new-card-textarea\" cols=\"33\" rows=\"4\" name=\"title\"></textarea>\n\n<fieldset class=\"controls\">\n  <input class=\"button button-confirm\" type=\"submit\" value=\"Add\">\n  <button class=\"button button-cancel\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</fieldset>\n";
},"useData":true});
templates['newList'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input class=\"new-list-input\" name=\"title\" placeholder=\"Add a list...\">\n\n<fieldset class=\"controls\">\n  <input class=\"button button-confirm\" type=\"submit\" value=\"Add\">\n  <button class=\"button button-cancel\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</fieldset>\n";
},"useData":true});
templates['overview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"left-group\">\n  <h2 class=\"board-title\">My Board</h2>\n  <p>Team</p>\n</div>\n\n<div class=\"right-group\">\n  <span>...</span>\n  <p>Show Menu</p>\n</div>\n";
},"useData":true});
})();