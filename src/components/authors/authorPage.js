'use strict';

var React       = require('react');
var ReactRouter = require('react-router');
var Link        = require('react-router').Link;
var AuthorApi   = require('../../api/authorApi');
var AuthorList  = require('./authorList');

var AuthorPage = React.createClass({
	getInitialState: function () {
		return {
			authors: []
		};
	},

	componentDidMount: function () {
		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });
		}
	},

	render: function () {
		return (
			<div className='container-fluid'>
				<AuthorList authors={this.state.authors} />
				<h4>Add author</h4>
				<Link to='addAuthor' className='btn btn-default'>Add Author</Link>
			</div>
		);
	}
});

module.exports = AuthorPage;
