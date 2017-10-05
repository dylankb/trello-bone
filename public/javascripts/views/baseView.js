var BaseView = Backbone.View.extend({
  dump: function() {
    // Similar to remove method, except it empties (not removes) DOM element
    // http://backbonejs.org/docs/backbone.html#section-158
    this.$el.empty().off();
    this.stopListening();
  },
});
