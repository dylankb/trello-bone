var CardEditView = Backbone.View.extend({
  attributes: {
    class: 'card-edit-container',
  },
  events: {
    'click .modal-overlay': 'removeModal',
    submit: 'updateTitle',
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template({ model: this.model }));
  },
  removeModal: function(e) {
    var card = ($(e.target).next());
    card.removeClass('editing-card');
    this.remove();
  },
  template: Handlebars.templates.cardEdit,
  updateTitle: function(e) {
    var $form = $(e.target);
    var request = $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    });

    request.done(function successCallback(data) {
      this.model.set('title', data.title);
    }.bind(this));
  },
});
