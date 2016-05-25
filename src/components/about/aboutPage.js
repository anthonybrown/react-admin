'use strict';

var React = require('react');

var About = React.createClass({
	render: function () {
		return (
			<div>
				<div className='jumbotron  vertical-center text-center'>
					<div className='container'>
						<h1>About</h1>
					</div>
				</div>
				<div className='container'>
					<p>
						This application uses the following technologies:
						<ul>
							<li>React</li>
							<li>React Router</li>
							<li>Flux</li>
							<li>Node</li>
							<li>Gulp</li>
							<li>Browserify</li>
							<li>Bootstrap</li>
							<li>Eslint</li>
						</ul>
					</p>
				</div>
			</div>
		);
	}
});

module.exports = About;
