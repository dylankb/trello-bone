var Header = Backbone.View.extend({
  el: 'header.main-header',
  events: {
    'blur .search': 'removeSearchModal',
    'focus .search': 'displaySearchModal',
    'keyup .search': 'displaySearchResults',
  },
  initialize: function() {
    this.render();
  },
  displaySearchModal: function() {
    this.SearchModal = new SearchModal({ noSearch: true });
    this.$('.search-modal').html(this.SearchModal.el); // can remove?
  },
  removeSearchModal: function(e) {
    e.target.value = '';
    if (this.SearchResults) { this.SearchResults.remove(); }
    this.SearchModal.remove();
  },
  render: function() {
    this.$el.html(this.template);
  },
  displaySearchResults: function(e) {
    if (e.target.value) {
      var searchResults = App.Lists.searchCards(e.target.value);
      this.SearchModal.render({ noSearch: false, searchResults: searchResults });
    } else {
      this.SearchModal.render({ noSearch: true });
    }
  },
  template: Handlebars.templates.mainHeader,
});
