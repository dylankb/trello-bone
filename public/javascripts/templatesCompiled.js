(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mainHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"left-group\">\n  <div class=\"header-button header-md back-button\">\n    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button search\">\n    <input class=\"search-input\" type=\"text\">\n  </div>\n</div>\n\n<a class=\"logo\" href=\"/\">\n  <span class=\"logo-icon\"></span>\n</a>\n\n<div class=\"right-group\">\n  <div class=\"header-button header-md plus-button\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button header-md notifications\">\n    <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"header-button header-md user-badge\">D\n  </div>\n</div>\n";
},"useData":true});
})();