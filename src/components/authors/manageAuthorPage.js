'use strict';

var React			 = require('react');
var Router     = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi  = require('../../api/authorApi');
var toastr		 = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},

	setAuthorState: function (e) {
		var field = e.target.name;
		var value = e.target.value;
		this.state.author[field] = value;
		return this.setState({ author: this.state.author });
	},

	authorFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = 'Sorry, first name must have at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = 'Sorry, last name must have at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveAuthor: function(e) {
		e.preventDefault();

		if (!this.authorFormIsValid()) {
			return;
		}

		AuthorApi.saveAuthor(this.state.author);
		toastr.success('Author saved.');
		this.transitionTo('authors');
	},

	render: function () {
		return (
			<div>
				<div className='jumbotron vertical-center text-center top'>
					<h1>Manage Authors</h1>
				</div>
				<AuthorForm
						author={this.state.author}
						onChange={this.setAuthorState}
						onSave={this.saveAuthor}
						errors={this.state.errors} />
			</div>
		);
	}
});

module.exports = ManageAuthorPage;


