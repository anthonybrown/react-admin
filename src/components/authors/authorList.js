'use strict';

var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	deleteAuthor: function(id, e) {
		e.preventDefault();
		//debugger;
		AuthorActions.deleteAuthor(id);
		toastr.success('Author has been deleted.');
	},

	render: function () {
		var createAuthorRow = function (author) {
			return (
				<tr key={author.id}>
					<td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
					<td><Link to='manageAuthor' params={{id: author.id}}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return (
			<div>
				<div className='jumbotron vertical-center text-center top'>
					<h1 className='jumbo-title'>Authors</h1>
				</div>
				<div className='container'>
					<div className='panel panel-default'>
						<div className='panel-heading'><h4>Pluralsight Authors</h4></div>
						<div className='table-responsive'>
							<table className='table table-striped'>
								<thead>
									<th></th>
									<th>ID</th>
									<th>Name</th>
								</thead>
								<tbody>
									{this.props.authors.map(createAuthorRow, this)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AuthorList;
