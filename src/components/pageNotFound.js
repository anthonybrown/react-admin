'use strict';

var React = require('react');
var Link  = require('react-router').Link;

var PageNotFound = React.createClass({
	render: function () {
		return (
			<div className='jumbotron vertical-center text-center top'>
				<h1>Page not found.</h1>
				<p>Woops! Sorry, there is nothing to see here.</p>
				<p className='btn btn-warning btn-lg wht'><Link to='app'>Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = PageNotFound;
