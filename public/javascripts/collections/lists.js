var ListsCollection = Backbone.Collection.extend({
  comparator: 'position',
  model: List,
  searchCards: function(query) {
    var downcase = function(sentence) {
      if (!sentence) { return; }
      return sentence.split('').map(function makeLowerCase(char) {
        return char.toLowerCase();
      }).join('');
    };
    var lowerCaseQuery = downcase(query);
    var results = [];

    this.forEach(function iterateLists(list) {
      list.Cards.forEach(function searchListCards(card) {
        var title = downcase(card.get('title'));
        var description = downcase(card.get('description'));
        var matchTitle = title && title.indexOf(lowerCaseQuery) !== -1;
        var matchDescription = description && description.indexOf(lowerCaseQuery) !== -1;
        if (matchTitle || matchDescription) {
          results.push(card.toJSONWithListTitle());
        }
      }, this);
    }, this);

    return results;
  },
  url: '/lists',
});
