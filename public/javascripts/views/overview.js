var BoardOverview = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  el: '.board-overview',
  render: function() {
    this.$el.html(this.template);
  },
  template: Handlebars.templates.overview,
});
