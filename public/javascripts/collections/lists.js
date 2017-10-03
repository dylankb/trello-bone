var ListsCollection = Backbone.Collection.extend({
  comparator: 'position',
  model: List,
  url: '/lists',
});
