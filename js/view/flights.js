// js/view/flights

var app = app || {};

// Flights View
// -------------
// Our flights view list

app.FlightListView = Backbone.View.extend({
  tagName     : 'div',
  className   : 'flight-listing-list',
  template    : 'flights',
  prepareJSON : function(){
    return {};
  },
  render      : function(){
    var self = this;
    TemplateManager.get(this.template, function(template){
      // var html = $(template).tmpl();
      var html = template(self.prepareJSON());
      // $(self.explorerDiv).append(html);
      self.$el.html(html);
    });
    return this;
  }
});