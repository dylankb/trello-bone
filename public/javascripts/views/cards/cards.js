var CardsView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderAdditionalCard);
  },
  render: function() {
    this.$el.empty();
    this.collection.each(this.renderAdditionalCard, this);
  },
  renderAdditionalCard: function(card) {
    var cardView = new CardView({ model: card });
    this.$el.append(cardView.el);
  },
});
