var NewCardModal = Backbone.View.extend({
  attributes: {
    action: '/',
    method: 'post',
  },
  initialize: function() {
    this.render();
  },
  events: {
    'click .cancel': 'removeModal',
  },
  removeModal: function(e) {
    this.$el.closest('form').prev().show();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template);
  },
  tagName: 'form',
  template: Handlebars.templates.newCard,
});
