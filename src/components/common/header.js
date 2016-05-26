'use strict';

var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<nav className='navbar navbar-inverse navbar-fixed-top'>
				<div className='container'>
					<a href='/' className='navbar-brand'>
						<img src='images/react.png' alt='logo' width='32' height='32' />
					</a>
					<ul className='nav navbar-nav navbar-right'>
						<li><a href='/'>Home</a></li>
						<li><a href='/#about'>About</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;
