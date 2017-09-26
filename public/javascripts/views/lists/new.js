var NewListModal = Backbone.View.extend({
  attributes: function() {
    return {
      class: 'new-list-modal',
    };
  },
  initialize: function() {
    this.render();
  },
  events: {
    'click .button-cancel': 'removeModal',
  },
  removeModal: function() {
    this.$el.closest('form').prev().show();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template);
  },
  tagName: 'form',
  template: Handlebars.templates.newList,
});
