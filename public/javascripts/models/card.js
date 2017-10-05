var Card = Backbone.Model.extend({
  toJSONWithListTitle: function() {
    var cardJSON = this.toJSON();
    cardJSON.listTitle = this.collection.List.attributes.title;
    return cardJSON;
  },
});
