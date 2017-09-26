var NewCardModal = Backbone.View.extend({
  attributes: function() {
    return {
      action: '/lists/' + this.model.attributes.id + '/cards/',
      method: 'post',
    };
  },
  initialize: function() {
    this.render();
  },
  createCard: function(e) {
    var $f = $((e.target).closest('form'));
    var request = $.ajax({
      url: this.attributes().action,
      type: this.attributes().method,
      data: $f.serialize(),
    });

    request.done(function successCallback(data) {
      this.model.Cards.add(data);
      this.removeModal();
    }.bind(this));
  },
  events: {
    'click .cancel': 'removeModal',
    'submit': 'createCard', // eslint-disable-line quote-props
  },
  removeModal: function() {
    this.$el.closest('form').prev().show();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template);
  },
  tagName: 'form',
  template: Handlebars.templates.newCard,
});
