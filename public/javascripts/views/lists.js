var ListsView = Backbone.View.extend({
  el: '.board-content',
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderAdditionalList);
  },
  render: function() {
    this.collection.each(this.renderAdditionalList, this);
  },
  renderAdditionalList: function(list) {
    var listView = new ListView({ model: list });
    this.$el.append(listView.el);
  },
});
