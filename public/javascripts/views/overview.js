var BoardOverview = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  el: '.board-overview',
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  template: Handlebars.templates.overview,
});
