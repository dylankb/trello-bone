var ListsView = Backbone.View.extend({
  el: '.lists',
  initialize: function() {
    this.setCardDraggingOptions();
    this.render();
    this.listenTo(this.collection, 'add', this.renderAdditionalList);
    this.listenTo(this.collection, 'remove', this.removeListCardsFromDragging);
  },
  enableDraggingForListCards: function(listView) {
    var cardContainer = listView.$('.cards-view')[0];
    this.drake.containers.push(cardContainer);
  },
  render: function() {
    this.$el.empty();
    this.collection.each(this.renderAdditionalList, this);
  },
  renderAdditionalList: function(list) {
    var listView = new ListView({ model: list });
    this.$el.append(listView.el);
    this.enableDraggingForListCards(listView);
  },
  setCardDraggingOptions: function() {
    this.drake = dragula({
      moves: function(el, source, handle) {
        return $(handle).is('.card, .card-title'); // move only correct children
      },
    }).on('drag', function onDrag(el) {
      $(el).addClass('dragging');
    }).on('dragend', function onDrop(el) {
      $(el).removeClass('dragging');
    });
  },
});
