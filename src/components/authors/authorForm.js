'use strict';

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({

	render: function() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-md-6 col-sm-8'>
						<form>
							<h3>Add Author</h3>
							<Input
								name='firstName'
								label='First name'
								id='fistName'
								value={this.props.author.firstName}
								onChange={this.props.onChange} />

							<Input
								name='lastName'
								label='Last Name'
								id='lastName'
								value={this.props.author.lastName}
								onChange={this.props.onChange} />

							<input
									type='submit'
									value='save'
									className='btn btn-default'
									onClick={this.props.onSave} />
						</form>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = AuthorForm;
