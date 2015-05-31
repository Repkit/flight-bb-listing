// js/app.js

// App
// ----
// Our application

var basePath = '';
var app = app || {};

$(function(){
  
  // create pub-sub functionality
  app.mediator = _.extend({}, Backbone.Events);
  
  TemplateManager.extension = '.tpl';
  // TemplateManager.register(['templates_flight_flight', 'templates_flight_sidebar'], function(templates){
  //   new app.FlightsView();
  //   new app.SidebarView();
  //   // console.log(templates);
  // });
  
  $.ajax('api/flights/flights.json',{
    //settings here
  }).done(function(response){
    // console.log(response);
    // new app.FlightsView(response);
    
    var collection = new app.FlightCollection(response._embedded.flights);
    var filteredCollection = new app.FlightCollection(response._embedded.flights);
    
    var flightsView = new app.FlightsView({
      collection : filteredCollection
    });
    
    flightsView.render();
    
    app.mediator.on('applyFilter',function(filters){
      $('#FlightList').empty();
      var filtered = _.filter(collection.fullCollection.models, function(model){
        // console.log(model);
        return model.get('Price') > filters['filter[price][]'];
      });
      filteredCollection.fullCollection.reset(filtered);
    },this);
   
  });
  
  // new app.FlightsView();
  new app.SidebarView();
  
});
