var BoardContent = Backbone.View.extend({
  el: '.board-content',
  events: {
    'click .add-list': 'displayNewListModal',
  },
  initialize: function() {
    this.ListsView = new ListsView({ collection: this.collection });
    this.setupListDragging();
  },
  decrementPrecedingListPositions: function(prevSiblingPosition, listPosition) {
    var precedingLists = App.Lists.filter(function findPrecedingLists(list) {
      var siblingPosition = list.get('position');
      return (siblingPosition <= prevSiblingPosition) && (siblingPosition !== listPosition);
      // update position for elements pushed left
    });

    precedingLists.forEach(function decrementPosition(list) {
      list.save({ position: list.attributes.position - 1 });
    });
  },
  displayNewListModal: function(e) {
    $(e.currentTarget).hide();

    this.NewListModal = new NewListModal({ collection: this.collection });
    this.$el.append(this.NewListModal.el);
  },
  getSiblingPosition: function($sibling) {
    if (!$sibling.length) { return; }
    var siblingModel = App.Lists.get($sibling.attr('data-id'));
    var siblingPostition = siblingModel.get('position');
    return siblingPostition;
  },
  incrementNextListPositions: function(nextSiblingPosition, listPosition) {
    var followingLists = App.Lists.filter(function findFollowingLists(list) {
      var siblingPosition = list.get('position');
      return (siblingPosition >= nextSiblingPosition) && (siblingPosition !== listPosition);
      // update position for elements pushed right
    });

    followingLists.forEach(function incrementPosition(list) {
      list.save({ position: list.attributes.position + 1 });
    });
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
    }).on('dragend', function onDragEnd(el) {
      $(el).removeClass('dragging');
    }).on('drop', function onDrop(el, target, source, sibling) {
      var list = App.Lists.get($(el).attr('data-id'));
      var listPosition = list.get('position');
      var precedingList = $(el).prev('.list-view');
      var precedingListPosition = this.getSiblingPosition(precedingList);
      var nextListPosition = this.getSiblingPosition($(sibling));
      var draggedRight = precedingListPosition > listPosition;
      var draggedLeft = nextListPosition < listPosition;

      if (draggedLeft) {
        this.incrementNextListPositions(nextListPosition, listPosition);
        list.set('position', nextListPosition);
      } else if (draggedRight) {
        this.decrementPrecedingListPositions(precedingListPosition, listPosition);
        list.set('position', precedingListPosition);
      }

      list.save();
    }.bind(this));
  },
});
