var App = {
  init: function() {
    this.Header = new Header();
    this.Lists.View = new ListsView({ collection: this.Lists });
  },
};
