// js/app.js

// App
// ----
// Our application

var basePath = '';
var app = app || {};

$(function(){
  TemplateManager.extension = '.tpl';
  TemplateManager.register(['templates_flight_flight', 'templates_flight_sidebar'], function(templates){
    new app.FlightsView();
    new app.SidebarView();
    // console.log(templates);
  });
});
