var ListsView = Backbone.View.extend({
  el: '.lists',
  initialize: function() {
    this.setCardDraggingOptions();
    this.render();
    this.listenTo(this.collection, 'add', this.renderAdditionalList);
  },
  checkCardDraggedDown: function(precedingSiblingPosition, position) {
    return precedingSiblingPosition > position;
  },
  checkCardDraggedUp: function(nextSiblingPosition, position) {
    return nextSiblingPosition < position;
  },
  decrementFollowingSiblings: function(sourceList, cardPosition) {
    var followingSiblings = sourceList.Cards.filter(function findFollowingSiblings(sibling) {
      return sibling.get('position') > cardPosition;
    });

    followingSiblings.forEach(function decrementSibling(sibling) {
      sibling.save({ position: sibling.attributes.position - 1 });
    });
  },
  decrementPrecedingSiblingPositions: function(el, list, card) {
    var precedingSiblings = $(el).prevAll();
    $.each(precedingSiblings, function decrementSiblingPositions(index, element) {
      var modelId = $(element).data('id');
      var model = list.Cards.get(modelId);
      var modelPosition = model.attributes.position;
      if (modelPosition > card.get('position')) { // Leave cards aboved card moved down unchanged
        model.save({ position: modelPosition - 1 });
      }
    });
  },
  getSiblingPosition: function($sibling, list) {
    if (!$sibling.length) { return; }
    var siblingModel = list.Cards.get($sibling.attr('data-id'));
    var siblingPostition = siblingModel.get('position');
    return siblingPostition;
  },
  incrementFollowingSiblingsTargetList: function(el, list) {
    var additionalSiblings = $(el).nextAll(); // increment a
    $.each(additionalSiblings, function incrementPositionForSibling(index, element) {
      var modelId = $(element).data('id');
      var model = list.Cards.get(modelId);
      model.save({ position: model.attributes.position + 1 });
    });
  },
  incrementFollowingSiblingsSourceList: function(el, list, card) {
    var additionalSiblings = $(el).nextAll(); // increment a
    $.each(additionalSiblings, function incrementPositionForSibling(index, element) {
      var modelId = $(element).data('id');
      var model = list.Cards.get(modelId);
      var modelPosition = model.attributes.position;
      if (modelPosition < card.get('position')) { // leave cards below the order change alone
        model.save({ position: modelPosition + 1 });
      }
    });
  },
  moveCardToTargetList: function(card, targetList, el) {
    var cardData = card.toJSON();
    delete cardData.id; // the create method triggers a put request if there is an id
    card.destroy(); // remove from source list
    targetList.Cards.create(cardData, {
      success: this.updateDraggedElementDataId,
      draggedElement: el,
      silent: true,
      wait: true, // wait for _byId reference to populate
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
      var sourceList = App.Board.Lists.get($(source).attr('data-id'));
      var targetList = App.Board.Lists.get($(target).attr('data-id'));
      var card = sourceList.Cards.get($(el).attr('data-id'));
      var precedingSibling = $(el).prev('li.card');
      var siblingPosition = this.getSiblingPosition($(sibling), targetList);
      var precedingSiblingPosition = this.getSiblingPosition(precedingSibling, targetList);

      if (sourceList === targetList) {
        this.updateSourceListCardPositions(card, siblingPosition, precedingSiblingPosition, sourceList, el);
      } else {
        this.decrementFollowingSiblings(sourceList, card.get('position'));
        this.setTargetListCardPositions(card, targetList, siblingPosition, precedingSiblingPosition, el);
        this.moveCardToTargetList(card, targetList, el);
      }
    }.bind(this));
  },
  setTargetListCardPositions: function(card, targetList, siblingPosition, precedingSiblingPosition, el) {
    var position;
    if (targetList.Cards.isEmpty()) {
      position = 0;
    } else if (!_.isUndefined(siblingPosition)) {
      this.incrementFollowingSiblingsTargetList(el, targetList);
      position = siblingPosition;
    } else {
      position = precedingSiblingPosition + 1;
    }

    card.set('position', position);
  },
  updateDraggedElementDataId: function(model, response, options) {
    $(options.draggedElement).attr('data-id', model.attributes.id);
  },
  updateSourceListCardPositions: function(card, siblingPosition, precedingSiblingPosition, sourceList, el) {
    var cardPosition = card.get('position');
    var draggedDown = this.checkCardDraggedDown(precedingSiblingPosition, cardPosition);
    var draggedUp = this.checkCardDraggedUp(siblingPosition, cardPosition);
    if (draggedUp) {
      this.incrementFollowingSiblingsSourceList(el, sourceList, card);
      card.set('position', siblingPosition); // set position to position of sibling moved down
    } else if (draggedDown) {
      this.decrementPrecedingSiblingPositions(el, sourceList, card);
      card.set('position', precedingSiblingPosition); // set position to position of sibling moved down
    }
    card.save();
  },
});
