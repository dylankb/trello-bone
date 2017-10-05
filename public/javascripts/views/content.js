var BoardContent = Backbone.View.extend({
  el: '.board-content',
  events: {
    'click .add-list': 'displayNewListModal',
  },
  initialize: function() {
    this.ListsView = new ListsView({ collection: this.collection });
    this.setupListDragging();
  },
  decrementPrecedingListPositions: function(prevSiblingPosition, draggedListPosition) {
    var precedingLists = App.Lists.filter(function findPrecedingLists(list) {
      var siblingPosition = list.get('position');
      var isLeftOfInsertion = (siblingPosition <= prevSiblingPosition);
      var isRightOfExtraction = siblingPosition > draggedListPosition;
      return isLeftOfInsertion && isRightOfExtraction;
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
  incrementNextListPositions: function(nextSiblingPosition, draggedListPosition) {
    var followingLists = App.Lists.filter(function findFollowingLists(list) {
      var siblingPosition = list.get('position');
      var isRightOfInsertion = siblingPosition >= nextSiblingPosition;
      var isLeftOfExtraction = siblingPosition < draggedListPosition;
      return isRightOfInsertion && isLeftOfExtraction;
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
      var draggedList = App.Lists.get($(el).attr('data-id'));
      var draggedListPosition = draggedList.get('position');
      var precedingList = $(el).prev('.list-view');
      var precedingListPosition = this.getSiblingPosition(precedingList);
      var nextListPosition = this.getSiblingPosition($(sibling));
      var draggedRight = precedingListPosition > draggedListPosition;
      var draggedLeft = nextListPosition < draggedListPosition;

      if (draggedLeft) {
        this.incrementNextListPositions(nextListPosition, draggedListPosition);
        draggedList.set('position', nextListPosition);
      } else if (draggedRight) {
        this.decrementPrecedingListPositions(precedingListPosition, draggedListPosition);
        draggedList.set('position', precedingListPosition);
      }

      draggedList.save();
    }.bind(this));
  },
});
