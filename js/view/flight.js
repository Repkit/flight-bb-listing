// js/view/flight

var app = app || {};

// Flight View
// ------------
// Our flight element view

app.FlightView = Backbone.View.extend({
  tagName     : 'section',
  className   : 'col-md-12 mb30',
  template    : 'flight',
  
  prepareJSON : function() {
    
    // variables
    // console.log(this.model.toJSON());
    var flight = this.model.toJSON();
    
    // segments
    var segments = flight.DepartureRoute.Segment;
    flight.DepartureRoute.firstSegment = _.first(segments);
    flight.DepartureRoute.lastSegment = _.last(segments);
    
    //airline
    var carrier = flight.DepartureRoute.firstSegment.Carrier.Marketing;
    flight.DepartureRoute.airline = {
      'code': carrier.Code,
      'name': carrier._
    };
    
    // stops
    flight.DepartureRoute.stops = (segments.length > 1) ? (segments.length === 2) ? (segments.length - 1) : (segments.length - 1) : 0;
    
    // segments
    var segments = flight.ReturnRoute.Segment;
    flight.ReturnRoute.firstSegment = _.first(segments);
    flight.ReturnRoute.lastSegment = _.last(segments);
    
    //airline
    // var carrier = flight.ReturnRoute.firstSegment.Carrier.Marketing;
    // flight.ReturnRoute.airline = {
    //   'code': carrier.Code,
    //   'name': carrier._
    // };
    
    // stops
    flight.ReturnRoute.stops = (segments.length > 1) ? (segments.length === 2) ? (segments.length - 1) : (segments.length - 1) : 0;
    
    
    // helper functions
    var _fn_ = {};
    _fn_.date = function(){
      return function(date, render){
        return moment(render(date),'YYYY-MM-DD').format("DD.MM.YYYY");
      };
    };
    _fn_.time = function(){
      return function(time, render){
        return moment(render(time), 'HH:mm:ss').format('HH:mm');  
      };
    };
    _fn_.airImg = function(){
      return function(airline, render){
        return basePath + '/uploads/files/airline-logos/' + render(airline).toUpperCase() + '.png'
      };
    };
    _fn_.depIdx = function() {
      return ++window[flight.DepartureRoute.Hash] || (window[flight.DepartureRoute.Hash] = 1);
    };
    _fn_.resetdepIdx = function() {
      window[flight.DepartureRoute.Hash] = null;
      return;
    };
    
    return {
      _fn_      : _fn_,
      flight    : flight,
    };
  },
  
  render      : function(){
    var self = this;
    TemplateManager.get(this.template, function(template){
      var html = Mustache.render(template,self.prepareJSON());
      self.$el.html(html);
    });
    
    return this;
  }
});