var CardEditView = Backbone.View.extend({
  attributes: {
    class: 'card-edit-container',
  },
  events: {
    'click .modal-overlay': 'removeModal',
    'submit .card-edit-title-form': 'updateTitle',
  },
  initialize: function(data) {
    this.render();
    this.card = data.card;
  },
  render: function() {
    this.$el.html(this.template({ model: this.model }));
  },
  removeModal: function() {
    this.card.$el.removeClass('editing-card');
    this.remove();
  },
  template: Handlebars.templates.cardEditTitle,
  updateTitle: function(e) {
    var $form = $(e.target);
    var request = $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    });

    request.done(function successCallback(data) {
      this.model.set('title', data.title);
      this.removeModal();
    }.bind(this));
  },
});
