'use strict';

var React   = require('react');
var Router  = require('react-router');
var routes  = require('./routes');
/**
* Param {Router.HistoryLocation}
*
* The default is the Hash Location, which works on older browsers but not on the server.
*
* Using Router.HistoryLocation using the HTML5 pushstate, replacestate, popstate
* gives you cleaner URL's but not supported in legacy browsers (IE < 10 and others)
* also allows server side rendering (universal JavaScript)
* You have to configure the server to support clean URL's and redirect all requests to
* the clientside index page so ReactRouter can handle the routing for your app.
*/

Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById('app'));
});
