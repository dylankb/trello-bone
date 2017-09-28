var CardDetailView = Backbone.View.extend({
  attributes: {
    class: 'card-detail-container',
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:description', this.render);
  },
  events: {
    'blur .card-title-textarea-detail': 'updateTitle',
    'click .card-add-description': 'displayAddDescriptionModal',
    'click .card-edit-description': 'displayEditDescriptionModal',
    'click .modal-overlay': 'remove',
    'click .card-close': 'remove',
  },
  displayAddDescriptionModal: function(e) {
    var editLink = $(e.target).parent();
    e.preventDefault();
    editLink.hide();

    this.EditDescriptionView = new CardEditDescriptionView({
      model: this.model,
      hiddenElements: [editLink],
    });
  },
  displayEditDescriptionModal: function(e) {
    var description = this.$('.card-description-section');
    description.hide();
    e.preventDefault();

    this.EditDescriptionView = new CardEditDescriptionView({
      model: this.model,
      hiddenElements: [description],
    });
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
  },
});
