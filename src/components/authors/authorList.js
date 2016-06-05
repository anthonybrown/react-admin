'use strict';

var React  = require('react');
var Router = require('react-router');
var Link   = Router.Link;

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	render: function () {
		var createAuthorRow = function (author) {
			return (
				<tr key={author.id}>
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
