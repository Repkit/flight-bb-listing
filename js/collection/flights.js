// js/collection/flights.js

var app = app || {};

// Flights Collection
// ------------------
// Our flights collection

// var Flights = Backbone.Collection.extend({
app.FlightCollection = Backbone.Collection.extend({
  model: app.Flight,
  url: 'api/flights.json',
  parse: function(response){
    return response;
  },
});

// app.FlightCollection = new Flights();