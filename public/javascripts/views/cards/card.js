var CardView = Backbone.View.extend({
  attributes: {
    class: 'card',
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:title', this.render);
  },
  displayDetailView: function() {
    this.DetailView = new CardDetailView({ model: this.model });
    this.$el.append(this.DetailView.el);
  },
  displayEditView: function() {
    this.$el.addClass('editing-card');
    this.EditView = new CardEditView({ model: this.model });
    this.$el.append(this.EditView.el);
  },
  events: {
    'click .card-title': 'displayDetailView',
    'click .edit-card': 'displayEditView',
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'li',
  template: Handlebars.templates.card,
});
