'use strict';

var React         = require('react');
var ReactRouter   = require('react-router');
var Link          = require('react-router').Link;
var AuthorStore   = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList    = require('./authorList');

var AuthorPage = React.createClass({
	getInitialState: function () {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	// Clean up when this component is unmounted
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	},

	render: function () {
		return (
			<div className='container-fluid'>
				<AuthorList authors={this.state.authors} />
				<div className='container'>
					<h4>Add author</h4>
					<Link to='addAuthor' className='btn btn-default'>Add Author</Link>
				</div>
			</div>
		);
	}
});

module.exports = AuthorPage;
