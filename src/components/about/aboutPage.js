'use strict';

var React = require('react');

var About = React.createClass({
	// demo: willTransitionTo and willTransitionFrom
	// this is silly using it here, hence for demostation.
	statics: {
		willTransitionTo: function (transition, params, query, callback) {
			if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
				transition.about();
			} else {
				callback();
			}
	},

	willTransitionFrom: function (transition, component) {
			if (!confirm('Are you sure you want to leave a page that\'s this exciting?\nyou might miss something, lol.')) {
				transition.about();
			}
		}
	},

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
									<li>React-v0.13.3</li>
									<li>React Router-v0.13.3</li>
									<li>Flux-v2.0.3</li>
									<li>Node-v6.1.0</li>
									<li>Gulp-v3.9.0</li>
									<li>Browserify-v11.0.1</li>
									<li>Bootstrap-v3.3.5</li>
									<li>Eslint-v2.10.2</li>
									<li>Eslint-Plugin-React-v5.1.1</li>
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
							But now we have a great starting point and the app is able to scale gracefully, yes there
							is a lot of code to bootstrap this app, but now that it's setup, we have a great
							dev environment, and a great boilerplate for a React / React-Router and Flux or Redux.
						</p>
						<p>
							Since React is just the "View" layer, and a library and not a framework, it let's
							you chose what you want to use or use whatever your app needs to accomplish it's goals.
						</p>
						</div>
				</div>
		</div>
		);
	}
});

module.exports = About;
