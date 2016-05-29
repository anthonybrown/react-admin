'use strict';

var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var Header = React.createClass({
	render: function () {
		return (
			<nav className='navbar navbar-inverse navbar-fixed-top'>
				<div className='container'>
					<Link to='app' className='navbar-brand'>
						<img src='images/react.png' alt='logo' width='32' height='32' />
					</Link>
					<ul className='nav navbar-nav navbar-right'>
						<li><Link to='app'>Home</Link></li>
						<li><Link to='about'>About</Link></li>
						<li><Link to='authors'>Authors</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;
