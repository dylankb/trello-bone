var BoardContent = Backbone.View.extend({
  el: '.board-content',
  events: {
    'click .add-list': 'displayNewListModal',
  },
  initialize: function() {
    this.ListsView = new ListsView({ collection: this.collection });
    this.setupListDragging();
  },
  displayNewListModal: function(e) {
    $(e.currentTarget).hide();

    this.NewListModal = new NewListModal({ collection: this.collection });
    this.$el.append(this.NewListModal.el);
  },
  setupListDragging: function() {
    var listsContainer = this.$('.lists').get(); // create array of one parent container
    dragula(listsContainer, {
      moves: function(el, source, handle) {
        return !$(handle).is('.card, .card-title'); // check only moves correct children
      },
      direction: 'horizontal',
    }).on('drag', function onDrag(el) {
      $(el).addClass('dragging');
    }).on('dragend', function onDrop(el) {
      $(el).removeClass('dragging');
    });
  },
});
