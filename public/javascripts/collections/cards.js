var CardsCollection = Backbone.Collection.extend({
  initialize: function(cardList) {
    this.List = cardList;
  },
  model: Card,
});
