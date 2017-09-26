var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');

var index = require('./index');
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

/* GET home page. */
router.get('/', index.route);

router.route('/lists/:id/cards')
  .post(function postRequestNewCard(req, res) {
    var currentList = _(Lists.get()).findWhere({ id: Number(req.params.id) });
    var cardsData = Cards.get();
    var listId = currentList.id;
    var newCard = req.body;

    newCard.id = Cards.getLastId() + 1;
    newCard.position = Cards.getLastPosition();

    if (!cardsData[listId]) {
      cardsData[listId] = []; // create new object for lists's cards
    }
    cardsData[listId].push(newCard); // add card to list's cards

    Cards.set(cardsData, { incrementId: true });

    res.json(newCard);
  });

router.route('/lists')
  .post(function postRequestNewList(req, res) {
    var listsData = Lists.get();
    var newList = req.body;

    newList.id = Lists.getLastId() + 1;
    Lists.set(listsData, { incrementId: true });

    res.json(newList);
  });


module.exports = router;
