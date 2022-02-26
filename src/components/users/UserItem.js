import React, { Component } from 'react';

class UserItem extends Component {
	// Defining state
	state = {
		name: 'Rich',
	};

	render() {
		// Destructure state (get variables)
		const { name } = this.state;
		return (
			<div className='card'>
				<h1 className='NameOfPerson'>{name}</h1>
			</div>
		);
	}
}

export default UserItem;
