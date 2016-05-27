'use strict';

var React = require('react');

var About = React.createClass({
	render: function () {
		return (
			<div>
				<div className='jumbotron  vertical-center text-center top'>
					<div className='container'>
						<h1>About</h1>
					</div>
				</div>
				<div className='container'>
						<div className='panel'>
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
						<p>That's some shit huh to go into such a little app!</p>
						<p>
							But now, it's setup to handle a ton of ability to scale,
							and to scale gracefully and handle added functionality with
							grace and ease.
						</p>
						</div>
				</div>
		</div>
		);
	}
});

module.exports = About;
