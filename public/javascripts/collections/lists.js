var ListsCollection = Backbone.Collection.extend({
  model: List,
  url: '/lists',
});
