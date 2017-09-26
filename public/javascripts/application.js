var App = {
  init: function() {
    this.Header = new Header();
    this.Content = new BoardContent({ collection: this.Lists });

    this.setupEventListener();
  },
  setupEventListener: function() {
    document.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  }
};
