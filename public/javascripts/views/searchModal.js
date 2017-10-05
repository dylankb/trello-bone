var SearchModal = Backbone.View.extend({
  attributes: {
    class: 'search-modal-content',
  },
  initialize: function(options) {
    this.render(options);
  },
  render: function(options) {
    this.$el.html(this.template({
      noSearch: options.noSearch,
      searchResults: options.searchResults,
    }));
  },
  template: Handlebars.templates.searchModal,
});
