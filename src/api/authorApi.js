'use strict';

// This code is mocking a web API by hitting hard coded data.

var authors = require('./authorData').authors;
var _       = require('lodash');

// this would be performed on the server in a real life app.
var _generateId = function (author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function (item) {
	return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {

	getAllAuthors: function () {
		return _clone(authors);
	},

	getAuthorById: function (id) {
		var author = _.find(authors, {id: id});
		return _clone(author);
	},

	saveAuthor: function (author) {
		// this would be an ajax call to the sever here.
		console.log('Pretend this is just saved the author to the DB via AJAX call...');

		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			// the servers would generate id's for the new authors
			// cloning so copy returned is passed by value rather than passed by reference.
			author.id = _generateId(author);
			authors.push(_clone(author));
		}

		return author;
	},

	deleteAuthor: function (id) {
		console.log('this would be the RESTFul DELETE verb if this were a real API');
		_.remove(authors, { id: id });
	}

};

module.exports = AuthorApi;
