import React, { Component } from 'react';

class UserItem extends Component {
	// Defining state
	render() {
		// Destructure state (get variables)
		const { login } = this.props.user;
		return (
			<div className='card'>
				<h1 className='NameOfPerson'>Hi: {login}</h1>
			</div>
		);
	}
}

export default UserItem;
