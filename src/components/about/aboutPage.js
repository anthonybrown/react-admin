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
							<p>
									Now you might be thinking,
									<blockquote>
										"that's a lot of work for such a small app."
									</blockquote>
									and it might be overkill if this app just stayed as is.
							</p>
						<p>
							That might be true, but now our app is able to scale gracefully, yes there
							is a lot of code to setup this app, but now that's it's setup, it will be
							easy to add functionality and scale.
						</p>
						</div>
				</div>
		</div>
		);
	}
});

module.exports = About;
