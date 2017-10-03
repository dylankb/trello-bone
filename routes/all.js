var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');

var index = require('./index');
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

var findPosition = function(cardsData, listId) {
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

/* GET home page. */
router.get('/', index.route);

router.route('/lists/:id/cards')
  .post(function postRequestNewCard(req, res) {
    var currentList = _(Lists.get()).findWhere({ id: Number(req.params.id) });
    var cardsData = Cards.get();
    var listId = currentList.id;
    var newCard = req.body;
    var position;

    if (_.isUndefined(req.body.position)) {
      position = findPosition(cardsData, listId);
      newCard.position = position;
    }

    newCard.id = Cards.getLastId() + 1;

    cardsData[listId].push(newCard); // add card to list's cards

    Cards.set(cardsData, { incrementId: true });

    res.json(newCard);
  });

router.route('/lists')
  .post(function postRequestNewList(req, res) {
    var listsData = Lists.get();
    var newList = req.body;
    var cardsData = Cards.get();

    newList.id = Lists.getLastId() + 1;
    listsData.push(newList);
    Lists.set(listsData, { incrementId: true });

    cardsData[newList.id] = [];
    Cards.set(cardsData, { incrementId: false });

    res.json(newList);
  });

router.route('/lists/:listId/cards/:cardId')
  .put(function putRequestCard(req, res) {
    var cardsData = Cards.get();
    var listId = req.params.listId;
    var currentCard = _(cardsData[listId]).findWhere({ id: Number(req.params.cardId) });

    Object.assign(currentCard, req.body);
    Cards.set(cardsData, { incrementId: false });

    res.json(currentCard);
  })
  .delete(function deleteRequestCard(req, res) {
    var cardsData = Cards.get();
    var listId = req.params.listId;
    var updatedListCards = _(cardsData[listId]).reject(function rejectCard(card) {
      return card.id === Number(req.params.cardId);
    });

    cardsData[listId] = updatedListCards;
    Cards.set(cardsData, { incrementId: false });

    res.status(200).end();
  });


module.exports = router;
