var path = require('path');
var Board = require(path.resolve(path.dirname(__dirname), 'modules/board'));
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));
exports.route = function rootRoute(req, res) {
  res.render('index', {
    boardData: Board.get(),
    listsData: Lists.get(),
    cardsData: Cards.get(),
  });
};
