var ListView = Backbone.View.extend({
  attributes: {
    class: 'list-view',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'article',
  template: Handlebars.templates.list,
});
