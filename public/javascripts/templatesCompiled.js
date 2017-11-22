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
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p class=\"list-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n<ul class=\"cards-view\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n\n</ul>\n<a class=\"add-card\" href=\"#\">Add a card...</a>\n";
},"useData":true});
templates['mainHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"left-group\">\n  <div class=\"header-button header-md back-button\">\n    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button search\">\n    <input class=\"search-input\" type=\"text\">\n    <span class=\"icon-magnifier\">\n      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    </span>\n    <div class=\"search-modal\">\n\n    </div>\n  </div>\n</div>\n\n<a class=\"logo\" href=\"/\">\n  <span class=\"logo-icon\"></span>\n</a>\n\n<div class=\"right-group\">\n  <div class=\"header-button header-md plus-button\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button header-md notifications\">\n    <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button header-md user-badge\">D\n  </div>\n</div>\n";
},"useData":true});
templates['newCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<textarea class=\"new-card-textarea\" cols=\"33\" rows=\"4\" name=\"title\"></textarea>\n\n<fieldset class=\"controls\">\n  <input class=\"button button-confirm\" type=\"submit\" value=\"Add\">\n  <button class=\"button button-cancel\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</fieldset>\n";
},"useData":true});
templates['newList'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input class=\"new-list-input\" name=\"title\" placeholder=\"Add a list...\">\n\n<fieldset class=\"controls\">\n  <input class=\"button button-confirm\" type=\"submit\" value=\"Add\">\n  <button class=\"button button-cancel\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</fieldset>\n";
},"useData":true});
templates['overview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"left-group\">\n  <h2 class=\"board-title\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  <p>Team</p>\n</div>\n\n<div class=\"right-group\">\n  <span>...</span>\n  <p>Show Menu</p>\n</div>\n";
},"useData":true});
templates['searchModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <h2 class=\"search-title\">Cards</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noSearch : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "  <h2 class=\"search-title\">Search</h2>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " no-search-spacing ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.searchResults : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.searchResults : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.searchResult,depth0,{"name":"searchResult","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "      <p class=\"no-results\">No search results found</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searchResults : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"search-results"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.noSearch : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.noSearch : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
templates['searchResult'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"result-row\">\n  <div class=\"result-button\">\n    <p>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n  </div>\n  <div class=\"result-detail\">\n    <p class=\"result-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"result-info\">\n      in <span class=\"bold\">"
    + alias4(((helper = (helper = helpers.listTitle || (depth0 != null ? depth0.listTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitle","hash":{},"data":data}) : helper)))
    + "</span> on <span class=\"bold\">My Board</span>\n    </p>\n  </div>\n</div>\n";
},"useData":true});
})();