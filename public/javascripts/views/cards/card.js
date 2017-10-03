var CardView = Backbone.View.extend({
  attributes: function() {
    return {
      class: 'card',
      'data-id': this.model.attributes.id,
    };
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
    this.EditTitleView = new CardEditView({
      model: this.model,
      card: this,
    });
    this.$el.append(this.EditTitleView.el);
  },
  events: {
    'click .card-title': 'displayDetailView',
    'click .card-title-edit': 'displayEditView',
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'li',
  template: Handlebars.templates.card,
});
