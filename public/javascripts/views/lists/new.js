var NewListModal = Backbone.View.extend({
  attributes: function() {
    return {
      action: '/lists',
      class: 'new-list-modal',
      method: 'post',
    };
  },
  initialize: function() {
    this.render();
  },
  createList: function(e) {
    var $f = $((e.target).closest('form'));
    var request = $.ajax({
      url: this.attributes().action,
      type: this.attributes().method,
      data: $f.serialize(),
    });

    request.done(function successCallback(data) {
      this.collection.add(data);
      this.removeModal();
    }.bind(this));
  },
  events: {
    'click .button-cancel': 'removeModal',
    'submit': 'createList', // eslint-disable-line quote-props
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
