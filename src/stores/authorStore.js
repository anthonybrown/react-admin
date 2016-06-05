'use strict';

var Dispatcher    = require('../dispatcher/appDispatcher');
var ActionTypes   = require('../constants/actionTypes');
var EventEmmiter  = require('events').EventEmitter;
var assign        = require('object-assign');
var _             = require('lodash');
var CHANGE_EVENT  = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmmiter.prototype, {

	addChangeListener: function (cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function (cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	getAllAuthors: function () {
		return _authors;
	},

	getAuthorById: function (id) {
		_.find(_authors, {id: id});
	}

});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;
		case ActionTypes.CREATE_AUTHOR:
			_authors.push(action.author);
			AuthorStore.emitChange();
			break;
		default:
			// no option
	}
});

module.exports = AuthorStore;
