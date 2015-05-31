// js/collection/flights.js

var app = app || {};

// Flights Collection
// ------------------
// Our flights collection

// var Flights = Backbone.Collection.extend({
app.FlightCollection = Backbone.PageableCollection.extend({
  
  //localStorage  : new Backbone.LocalStorage("FlightCollection"),
  model         : app.Flight,
  url           : 'api/flights.php',
  links         : null,
  page_count    : null,
  page_size     : null,
  total_items   : null,
  parse: function(response, options){
    // console.info(response);
    this.links = response._links;
    this.page_count = response.page_count;
    this.page_size = response.page_size;
    this.total_items = response.total_items;
    return response._embedded.flights;
  },
  state : {
    pageSize : 5,
    totalRecords : 25
  },
  mode: "client"
  
});

// app.FlightCollection = new Flights();