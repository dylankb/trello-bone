var App = {
  init: function() {
    this.Header = new Header();
    this.BoardOverview = new BoardOverview({ model: this.Board });
    this.BoardContent = new BoardContent({ collection: this.Board.Lists });

    this.preventDefaultSubmitActions();
    this.registerPartials();
  },
  preventDefaultSubmitActions: function() {
    document.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  },
  registerPartials: function() {
    Handlebars.registerPartial('searchResult', Handlebars.templates.searchResult);
  },
};
