var ListsView = Backbone.View.extend({
  el: '.lists',
  initialize: function() {
    this.setCardDraggingOptions();
    this.render();
    this.listenTo(this.collection, 'add', this.renderAdditionalList);
    this.listenTo(this.collection, 'remove', this.removeListCardsFromDragging);
  },
  checkCardDraggedDown: function(precedingSiblingPosition, position) {
    return precedingSiblingPosition > position;
  },
  checkCardDraggedUp: function(nextSiblingPosition, position) {
    return nextSiblingPosition < position;
  },
  decrementPrecedingSiblingPosition: function(el, list, cardPosition) {
    var additionalPrecedingSiblings = $(el).prevAll();
    $.each(additionalPrecedingSiblings, function incrementPositionForSibling(index, element) {
      var modelId = $(element).data('id');
      var model = list.Cards.get(modelId);
      var modelPosition = model.attributes.position;
      if (modelPosition > cardPosition) { // Leave cards aboved card moved down unchanged
        model.save({ position: modelPosition - 1 });
      }
    });
  },
  getSiblingPosition: function($sibling, list) {
    if (!$sibling.length) { return; }
    var siblingModel = list.Cards.get($sibling.data('id'));
    var siblingPostition = siblingModel.get('position');
    return siblingPostition;
  },
  incrementFollowingSiblings: function(el, list) {
    var additionalSiblings = $(el).nextAll();
    $.each(additionalSiblings, function incrementPositionForSibling(index, element) {
      var modelId = $(element).data('id');
      var model = list.Cards.get(modelId);
      model.save({ position: model.attributes.position + 1 });
    });
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
    }).on('dragend', function onDragEnd(el) {
      $(el).removeClass('dragging');
    }).on('drop', function onDrop(el, target, source, sibling) {
      var sourceList = App.Lists.get($(source).data('id'));
      var targetList = App.Lists.get($(target).data('id'));
      var card = sourceList.Cards.get($(el).data('id'));
      var precedingSibling = $(el).prev('li.card');
      var cardPosition = card.get('position');
      var siblingPosition = this.getSiblingPosition($(sibling), targetList);
      var precedingSiblingPosition = this.getSiblingPosition(precedingSibling, targetList);

      if (sourceList === targetList) {
        this.updateSourceListCardPositions(el, card, cardPosition, siblingPosition, precedingSiblingPosition, sourceList);
      } else {
        this.updateTargetListCardPositions(targetList, sourceList, card, sibling, siblingPosition, el);
      }
    }.bind(this));
  },
  updateSourceListCardPositions: function(el, card, cardPosition, siblingPosition, precedingSiblingPosition, list) {
    var draggedDown = this.checkCardDraggedDown(precedingSiblingPosition, cardPosition);
    var draggedUp = this.checkCardDraggedUp(siblingPosition, cardPosition);
    if (draggedUp) {
      card.set('position', siblingPosition); // set position to position of sibling moved down
      this.incrementFollowingSiblings(el, list);
    } else if (draggedDown) {
      card.set('position', precedingSiblingPosition); // set position to position of sibling moved down
      this.decrementPrecedingSiblingPosition(el, list, cardPosition);
    }
    card.save();
  },
  },
});
