var ListView = Backbone.View.extend({
  attributes: {
    class: 'list-view',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.CardsView = new CardsView({
      collection: this.model.Cards,
      el: this.$('.cards-view')[0],
    });
  },
  tagName: 'article',
  template: Handlebars.templates.list,
});
