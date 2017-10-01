var List = Backbone.Model.extend({
  initialize: function() {
    this.Cards = new CardsCollection();
    this.Cards.List = this;
  },
});
