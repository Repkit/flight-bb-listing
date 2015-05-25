// js/model/flight.js
var app = app || {};

// Flight Model
// ------------
// Our flight model

app.Flight = Backbone.Model.extend({
  defaults  : {
    'ItineraryCode'       : null,
    'Price'               : null,
    'Currency'            : null,
    'Routes'              : [],
    'DepartureRoute'      : {},
    'ReturnRoute'         : {},
  },
  parse     : function (response, options){
    // console.info(response);
    this.ItineraryCode = response.ItineraryCode;
    this.Price = response.Price;
    this.Currency = response.Currency;
    this.Routes = response.Routes;
    this.DepartureRoute = response.DepartureRoute;
    this.ReturnRoute = response.ReturnRoute;
  } 
});

