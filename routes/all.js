var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');

var index = require('./index');
var card = require('./card');
var list = require('./list');
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

/* GET home page. */
router.get('/', index.route);

router.post('/lists/:id/cards', card.create);
router.post('/lists', list.create);
router.put('/lists/:id', list.update);

router.put('/lists/:listId/cards/:cardId', card.update);
router.delete('/lists/:listId/cards/:cardId', card.delete);

module.exports = router;
