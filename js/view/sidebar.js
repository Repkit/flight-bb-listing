// js/view/sidebar.js

var app = app || {};

// Sidebar view
// ------------
// Our sidebar view

app.SidebarView = Backbone.View.extend({
  container       : '#SideBar',
  tagName         : 'div',
  className       : 'row',
  template        : 'sidebar',
  
  initialize      : function(){
    this.render();
  },
  
  serialize       : function(){
    return {};
  },
  
  render          : function(){
    var self = this;
    TemplateManager.get(this.template, function(template){
      self.$el.html(Mustache.render(template, self.serialize()));
    });
    $(this.container).html(self.el);
    return this;
  }
});