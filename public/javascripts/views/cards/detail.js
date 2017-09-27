var CardDetailView = Backbone.View.extend({
  attributes: {
    class: 'card-detail-container',
  },
  initialize: function() {
    this.render();
  },
  events: {
    'blur .card-title-edit-detail': 'updateTitle',
    'click .modal-overlay': 'remove',
    'click .card-close': 'remove',
  },
  render: function() {
    this.$el.html(this.template({ model: this.model }));
  },
  template: Handlebars.templates.cardDetail,
  updateTitle: function(e) {
    var $form = $((e.target).closest('form'));
    var request = $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    });

    request.done(function successCallback(data) {
      this.model.set('title', data.title);
    }.bind(this));

    request.fail(function failureCallback(jqXHR, textStatus, errorThrown) {
      console.log('XHR', jqXHR, 'Text status', textStatus, 'error', errorThrown);
    });
  },
});
