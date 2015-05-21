// js/model/flight.js
var app = app || {};

// Flight Model
// ------------
// Our flight model

app.Flight = Backbone.Model.extend({
  defaults: {
    'ItineraryCode': null,
    'Price': null,
    'Currency': null,
    'Routes': [],
    'DeparturegitRoute': {},
    'ReturnRoute': {},
  }
});

