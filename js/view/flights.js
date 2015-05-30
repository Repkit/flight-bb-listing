// js/view/flights
var app = app || {};

// Flights View
// -------------
// Our flights view list

app.FlightsView = Backbone.View.extend({
  container     : '#FlightList',
  tagName       : 'div',
  // className     : 'flight-listing-list',
  template      : 'flights',
  
  initialize    : function(initialFligths){
    this.collection = new app.FlightCollection(initialFligths);
    this.collection.fetch({
        reset   : true, 
        headers : {'Accept' : 'application/vnd.flights.v2+json'},
        data    : {code : 'flights-code'}
    });
    // listeners
    this.listenTo(this.collection, 'reset', this.render, this);
    // $(window).on("scroll",this.scroll);
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
    
    $(this.container).html(this.el);
    
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