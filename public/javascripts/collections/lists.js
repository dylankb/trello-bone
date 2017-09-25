var ListsCollection = Backbone.Collection.extend({
  initialize: function(data) {
    this.View = new ListsView({ collection: this });
  },
  model: List,
});
