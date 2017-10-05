var _ = require('underscore');
var path = require('path');

var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

var calculateNewCardPosition = function(cardsData, listId) {
  var position;
  if (_(cardsData[listId]).isEmpty()) {
    position = 0;
  } else {
    lastCard = _.max(cardsData[listId], function findLastCard(card) {
      return card.position;
    });
    position = lastCard.position + 1;
  }

  return position;
};

exports.create = function postRequestNewCard(req, res) {
  var currentList = _(Lists.get()).findWhere({ id: Number(req.params.id) });
  var cardsData = Cards.get();
  var listId = currentList.id;
  var newCard = req.body;
  var position;

  if (_.isUndefined(req.body.position)) {
    position = calculateNewCardPosition(cardsData, listId);
    newCard.position = position;
  }
  newCard.id = Cards.getLastId() + 1;
  cardsData[listId].push(newCard); // add card to list's cards

  Cards.set(cardsData, { incrementId: true });
  res.json(newCard);
};

exports.update = function putRequestCard(req, res) {
  var cardsData = Cards.get();
  var listId = req.params.listId;
  var currentCard = _(cardsData[listId]).findWhere({ id: Number(req.params.cardId) });

  Object.assign(currentCard, req.body);
  Cards.set(cardsData, { incrementId: false });

  res.json(currentCard);
};

exports.delete = function deleteRequestCard(req, res) {
  var cardsData = Cards.get();
  var listId = req.params.listId;
  var updatedListCards = _(cardsData[listId]).reject(function rejectCard(card) {
    return card.id === Number(req.params.cardId);
  });

  cardsData[listId] = updatedListCards;
  Cards.set(cardsData, { incrementId: false });

  res.status(200).end();
};
