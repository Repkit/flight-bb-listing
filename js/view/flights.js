// js/view/flights

var app = app || {};

// Flights View
// -------------
// Our flights view list

app.FlightsView = Backbone.View.extend({
  tagName       : 'div',
  className     : 'flight-listing-list',
  template      : 'flights',
  initialize    : function(initialFligths){
    this.collection = new app.FlightCollection(initialFligths);
    this.render();
  },
  prepareJSON   : function(){
    return {};
  },
  render        : function(){
    this.collection.each(function(flight){
      this.renderFlight(flight);
    },this);
    
    return this;
  },
  renderFlight  : function(flight){
    var flightView = new app.FlightsView({
      model : flight
    });
    
    this.$el.append(flightView.render().el);
  }
});