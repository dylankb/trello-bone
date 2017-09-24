var Header = Backbone.View.extend({
  el: 'header.main-header',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
  },
  template: Handlebars.templates.mainHeader,
});
