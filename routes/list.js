var _ = require('underscore');
var path = require('path');

var Lists = require(path.resolve(path.dirname(__dirname), 'modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/cards'));

var calculateNewListPosition = function(listData, listId) {
  var position;
  if (_(listData).isEmpty()) {
    position = 0;
  } else {
    lastList = _.max(listData, function findLastList(list) {
      return list.position;
    });
    position = lastList.position + 1;
  }

  return position;
};

exports.create = function postRequestNewList(req, res) {
  var listsData = Lists.get();
  var newList = req.body;
  var cardsData = Cards.get();

  newList.id = Lists.getLastId() + 1;
  newList.position = calculateNewListPosition(listsData);

  listsData.push(newList);
  Lists.set(listsData, { incrementId: true });

  cardsData[newList.id] = [];
  Cards.set(cardsData, { incrementId: false });

  res.json(newList);
};

exports.update = function putRequestList(req, res) {
  var listsData = Lists.get();
  var currentList = _(listsData).findWhere({ id: Number(req.params.id) });

  Object.assign(currentList, req.body);
  Lists.set(listsData, { incrementId: false });

  res.json(currentList);
};
