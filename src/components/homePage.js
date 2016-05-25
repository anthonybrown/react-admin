'use strict';

var React = require('react');

var Home = React.createClass({
	render: function () {
		return (
			<div className='jumbotron vertical-center text-center'>
				<div className='container'>
					<h1 className='jumbo-title'>ReactJS Admin Panel</h1>
					<p>React, React Router, and Flux for ultra-responsive web apps!</p>
				</div>
			</div>
		);
	}
});

module.exports = Home;
