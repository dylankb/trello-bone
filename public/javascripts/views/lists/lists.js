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
  decrementPrecedingSiblingPositions: function(list, cardPosition) {
    var precedingSiblings = list.Cards.filter(function findPrecedingSiblings(sibling) {
      return sibling.get('position') <= cardPosition; // update position for elements pushed up by drop
    });

    precedingSiblings.forEach(function decrementSibling(sibling) {
      sibling.save({ position: sibling.attributes.position - 1 });
    });
  },
  getSiblingPosition: function($sibling, list) {
    if (!$sibling.length) { return; }
    var siblingModel = list.Cards.get($sibling.attr('data-id'));
    var siblingPostition = siblingModel.get('position');
    return siblingPostition;
  },
  incrementFollowingSiblings: function(list, newPosition) {
    var followingSiblings = list.Cards.filter(function findFollowingSiblings(sibling) {
      return sibling.get('position') >= newPosition; // update position of cards pushed down by drop
    });

    followingSiblings.forEach(function incrementSibling(sibling) {
      sibling.save({ position: sibling.attributes.position + 1 });
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
      var sourceList = App.Lists.get($(source).attr('data-id'));
      var targetList = App.Lists.get($(target).attr('data-id'));
      var card = sourceList.Cards.get($(el).attr('data-id'));
      var precedingSibling = $(el).prev('li.card');
      var siblingPosition = this.getSiblingPosition($(sibling), targetList);
      var precedingSiblingPosition = this.getSiblingPosition(precedingSibling, targetList);

      if (sourceList === targetList) {
        this.updateSourceListCardPositions(card, siblingPosition, precedingSiblingPosition, sourceList);
      } else {
        this.decrementFollowingSiblings(sourceList, card.get('position'));
        this.setTargetListCardPositions(card, targetList, siblingPosition, precedingSiblingPosition);
        this.moveCardToTargetList(card, targetList, el);
      }
    }.bind(this));
  },
  setTargetListCardPositions: function(card, targetList, siblingPosition, precedingSiblingPosition) {
    var position;
    if (targetList.Cards.isEmpty()) {
      position = 0;
    } else if (!_.isUndefined(siblingPosition)) {
      position = siblingPosition;
      this.incrementFollowingSiblings(targetList, position);
    } else {
      position = precedingSiblingPosition + 1;
    }

    card.set('position', position);
  },
  updateDraggedElementDataId: function(model, response, options) {
    $(options.draggedElement).attr('data-id', model.attributes.id);
  },
  updateSourceListCardPositions: function(card, siblingPosition, precedingSiblingPosition, sourceList) {
    var cardPosition = card.get('position');
    var draggedDown = this.checkCardDraggedDown(precedingSiblingPosition, cardPosition);
    var draggedUp = this.checkCardDraggedUp(siblingPosition, cardPosition);
    if (draggedUp) {
      card.set('position', siblingPosition); // set position to position of sibling moved down
      this.incrementFollowingSiblings(sourceList, card.get('position'));
    } else if (draggedDown) {
      card.set('position', precedingSiblingPosition); // set position to position of sibling moved down
      this.decrementPrecedingSiblingPositions(sourceList, card.get('position'));
    }
    card.save();
  },
});
