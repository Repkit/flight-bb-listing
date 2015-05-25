// js/view/flights
var app = app || {};

// Flights View
// -------------
// Our flights view list

app.FlightsView = Backbone.View.extend({
  container     : '#FlightItemsList',
  tagName       : 'div',
  className     : 'flight-listing-list',
  template      : 'flights',
  initialize    : function(initialFligths){
    this.collection = new app.FlightCollection(initialFligths);
    this.collection.fetch({reset : true});
    this.listenTo(this.collection, 'reset', this.render,this);
  },
  prepareJSON   : function(){
    return {};
  },
  render        : function(){
    var self = this;
    // console.log(self.collection.models);
    this.collection.each(function(flight){
      this.renderFlight(flight);
    },this);
    
    $(container).html(this.el);
    
    return this;
  },
  renderFlight  : function(flight){
    var flightView = new app.FlightView({
      model : flight
    });
    // console.log(flightView.render().el);
    this.$el.append(flightView.render().el);
  }
});