var CardEditDescriptionView = Backbone.View.extend({
  el: '.card-edit-description-container',
  events: {
    'click .button-cancel': 'emptyView',
    'click .button-confirm': 'updateDescription', // does not use submit event - form resides in the template for the parent view's template
  },
  initialize: function(options) {
    this.render();
    this.hiddenElements = options.hiddenElements;
  },
  emptyView: function(e) {
    this.revealHiddenElements();
    this.$el.empty();     // Empties, not removes, view DOM element - similar to remove method
    this.stopListening(); // http://backbonejs.org/docs/backbone.html#section-158
  },
  revealHiddenElements: function() {
    this.hiddenElements.forEach(function revealElement(element) {
      element.show();
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  template: Handlebars.templates.cardEditDescription,
  updateDescription: function(e) {
    var $form = $((e.target).closest('form'));
    var request = $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    });

    request.done(function successCallback(data) {
      this.model.set('description', data.description);
      this.emptyView();
    }.bind(this));
  },
});
