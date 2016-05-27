'use strict';

var React = require('react');

var AuthorList = React.createClass({

	render: function () {
		var createAuthorRow = function (author) {
			return (
				<tr key={author.id}>
					<td><a href={'/#authors/' + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return (
			<div>
				<div className='jumbotron vertical-center text-center top'>
					<div className='container'>
						<h1 className='jumbo-title'>Authors</h1>
					</div>
				</div>
				<div className='container'>
					<div className='panel panel-default'>
						<div className='panel-heading'><h3>Pluralsight Authors</h3></div>
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