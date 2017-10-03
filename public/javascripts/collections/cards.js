var CardsCollection = Backbone.Collection.extend({
  comparator: 'position',
  model: Card,
  url: function() {
    return this.List.url() + '/cards';
  },
});
