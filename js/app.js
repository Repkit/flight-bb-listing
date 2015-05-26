// js/app.js

// App
// ----
// Our application

var basePath = '';
var app = app || {};

$(function(){
  new app.FlightsView();
  new app.SidebarView();
});
