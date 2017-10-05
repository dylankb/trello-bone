var path = require('path');
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

exports.route = function rootRoute(req, res) {
  res.render('index', {
    listsCollection: Lists.get(),
    cardsCollection: Cards.get(),
  });
};
