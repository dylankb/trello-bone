var CardView = Backbone.View.extend({
  attributes: {
    class: 'card',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'li',
  template: Handlebars.templates.card,
});
