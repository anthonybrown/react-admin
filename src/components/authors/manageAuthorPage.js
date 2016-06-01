'use strict';

var React			 = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
	render: function () {
		return (
			<div>
				<div className='jumbotron vertical-center text-center top'>
					<h1>Manage Authors</h1>
				</div>
				<AuthorForm />
			</div>
		);
	}
});

module.exports = ManageAuthorPage;
