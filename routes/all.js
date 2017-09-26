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
  .post(function postRequest(req, res) {
    var currentList = _(Lists.get()).findWhere({ id: Number(req.params.id) });
    var cardsData = Cards.get();
    var listId = currentList.id;
    var newCard = req.body;

    newCard.id = Cards.getLastId();
    newCard.position = Cards.getLastPosition();
    cardsData[listId].push(newCard); // add card to list's cards
    Cards.set(cardsData, { incrementId: true });

    res.json(newCard);
  });


module.exports = router;
