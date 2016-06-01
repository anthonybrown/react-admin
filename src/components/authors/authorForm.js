'use strict';

var React = require('react');

var AuthorForm = React.createClass({

	render: function() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-md-6 col-sm-8'>
						<form className='form-horizontal'>
							<div className='form-group'>
								<h3>Add Author</h3>
								<label htmlFor='firstName'>First Name</label>
								<input type='text'
												name='firstName'
												className='form-control'
												placeholder='First Name'
												ref='firstName'
												value=''
												id='firstName'
								/>
								<br />
								<label htmlFor='lastName'>Last Name</label>
								<input type='text'
												name='lastName'
												className='form-control'
												placeholder='Last Name'
												ref='lastName'
												value=''
												id='lastName'
								/>
								<br />
								<input type='submit' value='save' className='btn btn-default' />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = AuthorForm;
