var BoardContent = Backbone.View.extend({
  el: '.board-content',
  events: {
    'click .add-list': 'displayNewListModal',
  },
  initialize: function() {
    this.ListsView = new ListsView({ collection: this.collection });
  },
  displayNewListModal: function(e) {
    $(e.currentTarget).hide();

    this.NewListModal = new NewListModal({ collection: this.collection });
    this.$el.append(this.NewListModal.el);
  },
});
