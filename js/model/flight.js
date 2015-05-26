// js/model/flight.js
var app = app || {};

// Flight Model
// ------------
// Our flight model

app.Flight = Backbone.Model.extend({
  defaults  : {
    "ItineraryCode"       : null,
    "Price"               : null,
    "Currency"            : null,
    "Routes"              : [],
    "DepartureRoute"      : {},
    "ReturnRoute"         : {},
  },
  parse     : function (response, options){
    // console.info(response);
    
    //!!!MUST ALWAYS RETURN AN OBJECT!!!
    return response;
  } 
});

