var ListView = Backbone.View.extend({
  attributes: {
    class: 'list-view',
  },
  initialize: function() {
    this.render();
  },
  events: {
    'click .add-card': 'displayNewCardModal',
  },
  displayNewCardModal: function(e) {
    e.preventDefault();
    $(e.currentTarget).hide();

    this.NewCardModal = new NewCardModal({ model: this.model });
    this.$el.append(this.NewCardModal.el);
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
