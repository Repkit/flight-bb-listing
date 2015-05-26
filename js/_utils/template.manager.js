var TemplateManager = {

    // Here, we're keeping an object literal around to act as a hash table, and we'll
    // be using it to cache each template that gets loaded from the server.
    basePath    : '',
    templates   : {},
    extension   : '.html',
    
    get: function (id, callback) {

        // Can we find this template in the cache?
        if (this.templates[id]) {

            // Yes? OK, lets call our callback function and return.
            return callback(this.templates[id]);
        }

        // Otherwise, lets load it up. We'll build our URL based on the ID passed in.
        var url = basePath+'/template/' + id + this.extension,

        // And use a handy jQuery library called Traffic Cop to handle marshalling
        // requests to the server. This will prevent multiple concurrent requests
        // for the same resource.
            promise = $.trafficCop(url),
            that = this;

        // Wire up a handler for this request via jQuery's promise API
        promise.done(function (template) {

            // `template` is a string of HTML loaded via `$.ajax`. So here, we
            // can take the opportunity to pre-compile it for performance. When we
            // pre-compile a template, it returns a function that we can store in our
            // cache for future use.
            //var tmp = Handlebars.compile(template); //handlebars compiler
            var tmp = Mustache.parse(template);  // mustache compiler
            // that.templates[id] = tmp;
            // callback(tmp);
            that.templates[id] = template;
            callback(template);
        });
    },
    register: function (templates, callback){
        if(!_.isArray(templates)){
            throw "first argument must be an array";
        }
        
        var tpls    = _.difference(templates, _.keys(this.templates));
        if(tpls.length < 1){
            return;
        }
        
        var url     = basePath+'/template/minified' + this.extension,
            promise = $.trafficCop(url, {data:{template: tpls, format: 'json'}, dataType: 'json'}),
            self    = this;
            
        promise.done(function (template) {
            // console.log(template);
            self.templates = _.merge(self.templates, template, function(a, b) {
                if (_.isArray(a)) {
                    return a.concat(b);
                }
            });
            callback(self.templates);
        });
        
    }
};