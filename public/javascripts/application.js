var App = {
  init: function() {
    this.Header = new Header();
    this.BoardOverview = new BoardOverview();
    this.BoardContent = new BoardContent({ collection: this.Lists });

    this.preventDefaultSubmitActions();
  },
  preventDefaultSubmitActions: function() {
    document.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  },
};
