// js/view/flights
var app = app || {};

// Flights View
// -------------
// Our flights view list

app.FlightsView = Backbone.View.extend({
  el            : '#FlightList',
  template      : 'flights',
  
  initialize    : function(initialFligths){
    
    // listeners
    this.listenTo(this.collection, 'reset', this.render, this);
    
    var self = this;
    $(window).on("scroll",function( ev ){ self.scroll(ev, self); });
    
  },
  
  
  //we need to remove window listener on view remove THIS SEEMS HACKY
  remove: function(){
    $(window).off("scroll",this.scroll);
    //call the superclass remove method
    Backbone.View.prototype.remove.apply(this, arguments);
  },
  
  
  scroll : function(ev, self){
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      this.collection.getNextPage({
        reset : true ,
        remove: false ,
        headers : {'Accept' : 'application/vnd.flights.v2+json'} ,
        data    : {code : 'flights-code'}
      });
    }
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
    
    return this;
  },
  
  renderLoader  : function(){
    var loaderView = new app.LoaderView();
    $(this.container).html(loaderView.render().el);
    
  },
  
  renderFlight  : function(flight){
    var flightView = new app.FlightView({
      model : flight
    });
    // console.log(flightView.render().el);
    this.$el.append(flightView.render().el);
  }
  
});