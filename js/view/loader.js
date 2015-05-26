// js/view/loader.js

var app = app || {};

// Loader view
// -----------
// Our loader

app.LoaderView = Backbone.View.extend({
  tagName       : 'div',
  className     : 'timer-loader',
  template      : 'loader',
  
  prepareJSON   : function(){
    return {};
  },
  
  render        : function () {
    var self = this;
    TemplateManager.get(this.template, function(template){
      var html = Mustache.render(template,self.prepareJSON());
      self.$el.html(html);
    });
    return this;
  }
});