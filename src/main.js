'use strict';

var React   = require('react');
var Router  = require('react-router');
var routes  = require('./routes');

Router.run(routes, Router.HistoryLocation, function (Handler) {// using Router.HistoryLocation using the HTML5 pushstate
	React.render(<Handler />, document.getElementById('app'));   // the default is the Hash which works on older browsers but not on server.
});
