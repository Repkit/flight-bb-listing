// js/view/flight

var app = app || {};

// Flight View
// ------------
// Our flight element view

app.FlightView = Backbone.View.extend({
  tagName     : 'div',
  className   : 'flight-listing-item row-fluid no-stack',
  template    : 'flight',
  prepareJSON : function() {
    // var date = moment(firstsegment.Origin.Date,'YYYY-MM-DD').format("DD.MM.YYYY");
    var formatDate = function(){
      return function(time){
        return moment(time,'YYYY-MM-DD').format(dateFormat);  
      };
    };
    return {
      formatDate:formatDate
    };
        },
  render      : function(){
    var self = this;
    TemplateManager.get(this.template, function(template){
      // var html = $(template).tmpl();
      // var html = template(self.prepareJSON());
      var html = Mustache.render(template,self.prepareJSON());
      // $(self.explorerDiv).append(html);
      self.$el.html(html);
    });
    return this;
  }
});